// Millie Task Autofill - content script
// Fills form fields by matching visible <label> text rather than relying on
// ids/classes we cannot inspect ahead of time (the page is behind login).
// Every field it cannot find is reported back in the log instead of failing silently.

// Built from char codes rather than typed literally so no dash glyph sits in this source file.
const DASH_VARIANTS_RE = new RegExp('[' + [0x2012, 0x2013, 0x2014, 0x2015].map((c) => String.fromCharCode(c)).join('') + ']', 'g');

function normalize(s) {
  return (s || '')
    .replace(/ /g, ' ')
    .replace(DASH_VARIANTS_RE, '-') // treat en/em dash as a plain hyphen for matching
    .replace(/optional/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function nativeSetValue(el, value) {
  const tag = el.tagName;
  const proto =
    tag === 'TEXTAREA'
      ? window.HTMLTextAreaElement.prototype
      : tag === 'SELECT'
      ? window.HTMLSelectElement.prototype
      : window.HTMLInputElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(proto, 'value');
  if (descriptor && descriptor.set) {
    descriptor.set.call(el, value);
  } else {
    el.value = value;
  }
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
  el.dispatchEvent(new Event('blur', { bubbles: true }));
}

// Returns { ok: true } on success, or { ok: false, available: [...] } so a
// wrong guess reports the real option list instead of just failing quietly.
function setSelectValue(el, wantedText) {
  const wanted = normalize(wantedText);
  const options = Array.from(el.options);
  let opt = options.find((o) => normalize(o.textContent) === wanted);
  if (!opt) opt = options.find((o) => normalize(o.textContent).includes(wanted));
  if (!opt) return { ok: false, available: options.map((o) => o.textContent.trim()) };
  nativeSetValue(el, opt.value);
  return { ok: true };
}

function selectLogLine(tag, value, result) {
  if (result.ok) return `OK: ${tag}`;
  return `MISSING OPTION: ${tag} (wanted "${value}"; available: ${result.available.join(' | ')})`;
}

// Find the label element whose text starts with `text`, searched within `root`.
function findLabelEl(text, root) {
  const labels = Array.from(root.querySelectorAll('label'));
  const wanted = normalize(text);
  return (
    labels.find((l) => normalize(l.textContent) === wanted) ||
    labels.find((l) => normalize(l.textContent).startsWith(wanted))
  );
}

// Find the input/textarea/select that belongs to a label with this text.
function findFieldByLabel(text, root = document) {
  const label = findLabelEl(text, root);
  if (!label) return null;

  if (label.htmlFor) {
    const byId = document.getElementById(label.htmlFor);
    if (byId) return byId;
  }

  // Common pattern: label and its field share an immediate parent wrapper.
  let container = label.parentElement;
  for (let i = 0; i < 4 && container; i++) {
    const field = container.querySelector('input, textarea, select');
    if (field && field !== label) return field;
    container = container.parentElement;
  }

  // Fallback: walk forward through siblings after the label looking for a field.
  let sib = label.nextElementSibling;
  let guard = 0;
  while (sib && guard < 6) {
    if (sib.matches && sib.matches('input, textarea, select')) return sib;
    const nested = sib.querySelector && sib.querySelector('input, textarea, select');
    if (nested) return nested;
    sib = sib.nextElementSibling;
    guard++;
  }
  return null;
}

// `label` may be a string or an array of candidate labels (tried in order) -
// the platform has been observed to rename fields between versions (e.g.
// "Workings" -> "Reasoning process"), so a short alias list survives that.
//
// A value of undefined/null means "not specified, leave whatever is there
// alone." An explicit empty string '' means "clear this field" and is
// actively written - the platform has been observed to silently default a
// never-filled field (e.g. a rubric criterion's "Depends on") to a bad value
// such as the row's own id, which nothing then overwrites unless we
// deliberately blank it.
function fillByLabel(label, value, log, prefix = '') {
  if (value === undefined || value === null) return;
  const candidates = Array.isArray(label) ? label : [label];
  const primary = candidates[0];
  const tag = prefix ? `${prefix} - ${primary}` : primary;
  let el = null;
  for (const candidate of candidates) {
    el = findFieldByLabel(candidate);
    if (el) break;
  }
  if (!el) {
    log.push(`MISSING FIELD: ${tag} (tried: ${candidates.join(' | ')})`);
    return;
  }
  if (el.tagName === 'SELECT') {
    log.push(selectLogLine(tag, value, setSelectValue(el, value)));
  } else {
    nativeSetValue(el, String(value));
    log.push(`OK: ${tag}`);
  }
}

// --- Repeatable block handling (Facts, Derivations, Sources, Artifacts, Rubric criteria) ---

// Caption elements read e.g. "FACT 1", "SOURCE 2". Don't assume the number is
// in the same leaf node as the word (it may be a nested span) - match on
// combined text of any short element, then keep only the innermost match so
// an ancestor wrapping the same text doesn't get counted as a second block.
function getRepeatCaptions(prefix) {
  const re = new RegExp('^' + prefix + '\\s*\\d+$', 'i');
  const all = Array.from(document.querySelectorAll('body *'));
  const matches = all.filter((el) => {
    const t = el.textContent.trim();
    return t.length <= 24 && re.test(t);
  });
  return matches.filter((el) => !matches.some((other) => other !== el && el.contains(other)));
}

function findRepeatContainer(captionEl) {
  let node = captionEl;
  for (let i = 0; i < 10 && node.parentElement; i++) {
    node = node.parentElement;
    if (node.querySelectorAll('label').length >= 2) return node;
  }
  return captionEl.parentElement;
}

function findAddButton(buttonText) {
  const wanted = normalize(buttonText);
  return Array.from(document.querySelectorAll('button')).find((b) => normalize(b.textContent) === wanted);
}

async function ensureRepeatCount(buttonText, captionPrefix, neededCount) {
  let count = getRepeatCaptions(captionPrefix).length;
  let stagnantClicks = 0;
  // Hard ceiling as a last resort, but the real brake is stagnantClicks below:
  // if clicking "Add ___" twice in a row does not increase the detected count,
  // stop immediately instead of continuing to click blindly. This is what
  // should have stopped the very first version of this function.
  const hardCeiling = neededCount + 5;
  while (count < neededCount && count < hardCeiling && stagnantClicks < 2) {
    const btn = findAddButton(buttonText);
    if (!btn) break;
    btn.click();
    await sleep(150);
    const newCount = getRepeatCaptions(captionPrefix).length;
    stagnantClicks = newCount > count ? 0 : stagnantClicks + 1;
    count = newCount;
  }
  return count;
}

// See fillByLabel's comment: undefined/null is "leave alone," '' is "clear this field."
function fillContainerFields(container, fieldMap, log, prefix) {
  for (const [label, value] of Object.entries(fieldMap)) {
    if (value === undefined || value === null) continue;
    const el = findFieldByLabel(label, container);
    const tag = `${prefix} - ${label}`;
    if (!el) {
      log.push(`MISSING FIELD: ${tag}`);
      continue;
    }
    if (el.tagName === 'SELECT') {
      log.push(selectLogLine(tag, value, setSelectValue(el, value)));
    } else {
      nativeSetValue(el, String(value));
      log.push(`OK: ${tag}`);
    }
  }
}

// --- Page-specific fillers ---

async function fillTaskWorkspace(data, log) {
  const ws = data.workspace || {};
  const pd = data.promptAndDeliverable || {};

  fillByLabel('Professional role', ws.professionalRole, log);
  fillByLabel('Recipient', ws.recipient, log);
  fillByLabel('Decision to make', ws.decisionToMake, log);
  fillByLabel('Deliverable', ws.deliverable, log);
  fillByLabel('Jurisdiction', ws.jurisdiction, log);
  fillByLabel('As-of date', ws.asOfDate, log);
  fillByLabel('Allowed tools and sources', ws.allowedToolsAndSources, log);
  fillByLabel('Web search boundary', ws.webSearchBoundary, log);
  fillByLabel('Expected expert effort', ws.expectedExpertEffort, log);
  fillByLabel('Why this needs professional synthesis', ws.whyProfessionalSynthesis, log);
  fillByLabel('Prompt', pd.prompt, log);
  fillByLabel('Deliverable contract', pd.deliverableContract, log);
}

// Wraps ensureRepeatCount with a clear warning if it stopped short, so a
// detection failure shows up as one obvious line instead of a wall of
// "MISSING BLOCK" entries with no explanation.
async function ensureRepeatCountChecked(buttonText, captionPrefix, neededCount, log) {
  const got = await ensureRepeatCount(buttonText, captionPrefix, neededCount);
  if (got < neededCount) {
    log.push(
      `WARNING: only found/created ${got} of ${neededCount} "${captionPrefix}" blocks - stopped early instead of clicking blindly. Report this before retrying.`
    );
  }
  return got;
}

async function fillFacts(data, log) {
  const f = data.facts || {};

  if (f.canonicalFacts && f.canonicalFacts.length) {
    await ensureRepeatCountChecked('Add fact', 'FACT', f.canonicalFacts.length, log);
    const containers = getRepeatCaptions('FACT').map(findRepeatContainer);
    f.canonicalFacts.forEach((fact, i) => {
      if (!containers[i]) return log.push(`MISSING BLOCK: Fact ${i + 1}`);
      fillContainerFields(
        containers[i],
        {
          Key: fact.key,
          Value: fact.value,
          Unit: fact.unit,
          Timestamp: fact.timestamp,
          Status: fact.status,
          Ownership: fact.ownership,
          Provenance: fact.provenance,
        },
        log,
        `Fact ${i + 1}`
      );
    });
  }

  if (f.derivations && f.derivations.length) {
    await ensureRepeatCountChecked('Add derivation', 'DERIVATION', f.derivations.length, log);
    const containers = getRepeatCaptions('DERIVATION').map(findRepeatContainer);
    f.derivations.forEach((d, i) => {
      if (!containers[i]) return log.push(`MISSING BLOCK: Derivation ${i + 1}`);
      fillContainerFields(
        containers[i],
        {
          Id: d.id,
          'Formula version': d.formulaVersion,
          'Input fact keys': d.inputFactKeys,
          Rounding: d.rounding,
          Tolerance: d.tolerance,
          Result: d.result,
        },
        log,
        `Derivation ${i + 1}`
      );
    });
  }

  if (f.sources && f.sources.length) {
    await ensureRepeatCountChecked('Add source', 'SOURCE', f.sources.length, log);
    const containers = getRepeatCaptions('SOURCE').map(findRepeatContainer);
    f.sources.forEach((s, i) => {
      if (!containers[i]) return log.push(`MISSING BLOCK: Source ${i + 1}`);
      fillContainerFields(
        containers[i],
        {
          Id: s.id,
          Title: s.title,
          'Content hash': s.contentHash,
          Authenticity: s.authenticity,
          Origin: s.origin,
          Delivery: s.delivery,
          Publisher: s.publisher,
          'Authoritative URL': s.authoritativeUrl,
          Jurisdiction: s.jurisdiction,
          Published: s.published,
          Effective: s.effective,
          'As-of': s.asOf,
          Retrieved: s.retrieved,
          'License / rights': s.licenseRights,
          'Excerpt / snapshot': s.excerpt,
          'Claim locators': s.claimLocators,
          'Hybrid component map': s.hybridComponentMap,
        },
        log,
        `Source ${i + 1}`
      );
    });
  }

  if (f.artifacts && f.artifacts.length) {
    await ensureRepeatCountChecked('Add artifact', 'ARTIFACT', f.artifacts.length, log);
    const containers = getRepeatCaptions('ARTIFACT').map(findRepeatContainer);
    f.artifacts.forEach((a, i) => {
      if (!containers[i]) return log.push(`MISSING BLOCK: Artifact ${i + 1}`);
      fillContainerFields(
        containers[i],
        {
          Id: a.id,
          Name: a.name,
          Visibility: a.visibility,
          'Content hash': a.contentHash,
          'Render version': a.renderVersion,
        },
        log,
        `Artifact ${i + 1}`
      );
    });
  }
}

async function fillReference(data, log) {
  const r = data.reference || {};
  fillByLabel('Answer', r.answer, log);
  fillByLabel(['Reasoning process', 'Workings'], r.workings, log);
  fillByLabel('Source locators', r.sourceLocators, log);
  fillByLabel('Acceptable alternatives', r.acceptableAlternatives, log);
  fillByLabel('Calibrated uncertainty', r.calibratedUncertainty, log);
  fillByLabel('Known limitations', r.knownLimitations, log);
}

async function fillRubric(data, log) {
  const items = (data.rubric && data.rubric.criteria) || [];
  if (!items.length) return;
  await ensureRepeatCountChecked('Add criterion', 'CRITERION', items.length, log);
  const containers = getRepeatCaptions('CRITERION').map(findRepeatContainer);
  items.forEach((c, i) => {
    if (!containers[i]) return log.push(`MISSING BLOCK: Criterion ${i + 1}`);
    fillContainerFields(
      containers[i],
      {
        'Stable id': c.stableId,
        Weight: c.weight,
        'Capability tag': c.capabilityTag,
        'Observable requirement': c.observableRequirement,
        'Acceptable variants': c.acceptableVariants,
        'Depends on': c.dependsOn,
        'Follow-through of': c.followThroughOf,
      },
      log,
      `Criterion ${i + 1}`
    );
  });
}

async function fillPage(data) {
  const log = [];
  const path = location.pathname;
  try {
    if (path.endsWith('/facts')) await fillFacts(data, log);
    else if (path.endsWith('/reference')) await fillReference(data, log);
    else if (path.endsWith('/rubric')) await fillRubric(data, log);
    else await fillTaskWorkspace(data, log);
  } catch (e) {
    log.push('ERROR: ' + (e && e.message ? e.message : String(e)));
  }
  return log;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && msg.type === 'FILL') {
    fillPage(msg.data).then((log) => sendResponse({ log }));
    return true; // keep the message channel open for the async response
  }
  return false;
});
