# Project Millie - Working Reference

Condensed restatement of `newinst.txt` ("Project Millie Expert and Reviewer Instructions," updated workflow effective September 15 2026), organized for someone authoring a task from scratch with no access to the original. `inst.txt` (the pre-9/15 version, single-role-split authoring) is superseded - keep it only for historical context, don't follow its role-splitting or its post-difficulty-review ordering.

## 0. What changed on September 15 2026

The prior version split authoring across restricted roles (prompt author / evidence expert / reference-solution reviewer / rubric author, each blind to the others' hidden material) and ran review only after content QC and the difficulty check. The new version replaces that entirely:

- **One author creates the whole package.** The same person writes the task details, prompt, evidence, reference solution, and rubric together as one internally consistent whole. There is no more role-splitting or hidden-material separation between prompt author and reference/rubric author - the author can inspect and revise every component.
- **The gate order flipped.** It is now: task creation -> double-blind peer review (Reviewer A and B, independently) -> content QC -> model difficulty check (the final gate) -> accepted. Under the old rules, peer review came after QC and difficulty; now it comes first, immediately after the author submits.
- **Reviewers never author.** Reviewer A, Reviewer B, and Reviewer C (the tie-breaker) only judge and record findings - "completing review findings is not authorship of the task." Only the original author ever edits the package, at every stage, forever (see the role responsibility matrix in section 4d).
- **A watch-out worth flagging, not yet resolved:** the actual task workspace UI on experts.afterquery.com, as used this session, gates its "Submit for peer review" button behind its own "Content checks" and "Difficulty check" cards passing first - i.e. the opposite order from what `newinst.txt` describes. This may mean the platform's "Content checks" card is a separate automated pre-flight gate distinct from the human "Content QC" reviewer role described in the document (a cheap structural check before a task is allowed into the human double-blind queue at all), rather than a real contradiction. Treat the platform's actual button/gate order as the authoritative one to follow procedurally, but this is worth a direct question to the project team rather than an assumption - see section 4e.

## 1. Context and stakes

- Deadline: one complete task package submitted per person by Friday September 18 2026, 11:59pm PT.
- Pay: $150 per accepted datapoint; $75/hr for review work (tracked on Hubstaff).
- A task is "Accepted" only when the *same current revision* has passed double-blind peer review, content QC, and the final model difficulty check, in that order. Any substantive edit makes prior review/QC/difficulty results stale and the revised package must repeat the applicable gates. Submission, reviewer activity, or an automated run alone is never acceptance.

## 2. What a complete task is made of

One author-owned package, all created and revised by the same person:

1. **Task details** - domain, the professional situation, intended recipient, and required work product.
2. **Prompt** - the request: material constraints, applicable dates and jurisdiction, required output, permitted tools, and evidence rules.
3. **Evidence** - enough to solve the task: verified public sources or clearly fictional, internally consistent scenario records.
4. **Reference solution (golden)** - answers every requested part; documents material reasoning, calculations, sources, assumptions, limitations, and acceptable alternatives.
5. **Rubric** - atomic, verifiable criteria, weighted by professional importance; negative criteria limited to consequential errors.

**Visibility rule** (this is what replaced the old role-splitting): the author can inspect and revise every component of the package. What must stay separated is not "who can see what during authoring" anymore, but what the *tested model* ever sees - the prompt and model-visible evidence must never reveal the reference solution, rubric, evaluation response, or hidden conclusions. If a reviewer identifies an error, only the original author edits the package to fix it; a reviewer or QC finding is never repaired by the reviewer or QC themselves.

## 3. Domains

Pick one and stay inside real professional practice for it:

- **Finance** - financial analysis, investment decisions, liquidity, valuation, risk.
- **Healthcare** - clinical reasoning and decisions, using fictional patients but real, verified medical evidence.
- **Natural Science** - research interpretation, experimental design, scientific analysis.
- **Law** - applying verified legal authority to a defined fact pattern and jurisdiction.
- **Industry and Engineering** - technical analysis, troubleshooting, design decisions, operational tradeoffs.

Note: the task workspace at experts.afterquery.com/projects/millie lists these as **Finance**, **Healthcare**, **Natural science**, **Law**, and **Industry** (its labels are shortened slightly from the ones above - "Natural science" and "Industry" rather than "Natural Science" and "Industry and Engineering"). They're the same five domains; when starting a new task on the platform, pick the matching entry from that list.

**Standing rule: always state the domain up front.** Every task file produced from this reference must open by naming its domain using the platform's exact label (Finance / Healthcare / Natural science / Law / Industry), so it's immediately clear which option to select in the "Start a new task?" dialog. When handing off a finished task, say the domain explicitly in the same message, e.g. "This is a **Finance** task - select Finance when creating it."

## 4. Authoring workflow (one author, start to finish)

### Step 1 - Review the assignment
Confirm the assigned domain, specialty, task ID, and workspace access. If the assignment or access is missing, contact the project team before creating a duplicate task.

### Step 2 - Define the professional situation
- Identify who performs the work and who will use the response.
- Define the decision, analysis, or other work product the response must support.
- List the facts, constraints, dates, units, jurisdiction, evidence, and permitted tools that materially affect the work.
- Build difficulty through connected professional reasoning - evidence selection, record reconciliation, intermediate calculations, or a justified choice among alternatives.
- A qualified peer in the same specialty should understand and solve the assignment without asking for an unstated assumption.

### Step 3 - Prepare the evidence
- **Public sources**: verify the publisher, title, date, and exact page/section/table that supports each material claim.
- **Fictional records**: use clearly fictional people and organizations, keep shared facts consistent, calculate derived values reproducibly.
- State whether the respondent may use supplied materials, public research, or both. Required facts cannot exist only in the reference solution.
- Use descriptive filenames. Confirm every required file opens, is legible, and contains no confidential employer/client/patient information.
- Never invent a law, guideline, publication, filing, standard, or other public authority and present it as real.

### Step 4 - Write and check the prompt
- Identify the professional role, recipient, objective, and required work product.
- Name the supplied inputs and the rules for external sources and tools.
- State applicable dates, jurisdiction, units, assumptions, and constraints.
- Require evidence and reasoning where necessary, without prescribing the conclusion.
- **Answer-leakage pass**: read the prompt and every model-visible file together; remove worked solutions, expected conclusions, answer-bearing hints, rubric text, evaluation commentary, and any hidden notes or spreadsheet content that leaks the answer.

### Step 5 - Create the reference solution
Solve the task under the same evidence and tool rules stated in the prompt - it must be independently checkable and must not rely on facts unavailable to the tested model.
- Answer every requested part and produce the same type of work product requested from the tested model.
- Show material calculations and identify the evidence supporting key factual and professional conclusions.
- State assumptions, limitations, and uncertainty when they affect the result.
- Document acceptable alternative methods or conclusions and explain when each is defensible.
- If the prompt is incomplete or ambiguous, fix the prompt/evidence before finalizing the solution - never repair the task by adding hidden facts only to the golden.

### Step 6 - Create the rubric
Build it from the prompt, evidence, and reference solution - each criterion assesses one observable requirement and should be understandable without referring to another criterion.
- Atomic criteria, weighted by professional importance - no target criterion count.
- Tie each criterion to an explicit prompt requirement or a necessary implication of the professional task.
- Prefer verifiable criteria over broad judgments ("excellent analysis").
- Allow defensible alternatives described in the reference solution.
- Avoid duplicate criteria, inverse duplicates, and repeated penalties for the same underlying error.
- Negative criteria only for specific, consequential mistakes - never merely to lower a model's score.
- Calibrate numerical tolerances to the complexity and professional use of the calculation.

### Step 7 - Check package consistency
- Confirm every rubric requirement is supported by the prompt and permitted evidence.
- Recalculate all material values and verify every source citation.
- Check the reference solution answers the *current* prompt revision and treats valid alternatives fairly.
- Inspect all model-visible files for answer leakage, hidden comments, annotations, hidden sheets, or misleading filenames.
- Open every input/output file and verify the contents are legible and professionally formatted.

### Step 8 - Submit to review
Submit the complete current revision to the double-blind review queue. Saving a draft does not submit a task. Retain the task ID and wait for the review outcome.

## 4a. Double-blind peer review (Reviewer A and B)

Two qualified reviewers independently evaluate the completed package - each receives an anonymized task and does not see the other's identity or decision before submitting their own.

**No reviewer authoring.** Reviewers must not draft, repair, rewrite, or directly edit the prompt, evidence, reference solution, rubric, or task files. Completing review findings is not authorship.

Reviewer responsibilities: review the whole package as one unit; verify it's original, professionally realistic, solvable, internally consistent, and sufficiently supported; reperform the material reasoning/calculations needed to assess the reference solution; check rubric criteria are atomic, appropriately weighted, supported, and fair to acceptable alternatives; flag answer leakage, missing inputs, unsupported claims, ambiguous requirements, rubric overfit, and duplicate penalties; record every finding with the source, calculation, or package location that supports it.

| Reviewer A and B outcome | Route | Required action |
|---|---|---|
| Both approve, no material discrepancy | Content QC | Lock the reviewed revision and send it to QC. |
| Both request revision or reject, aligned findings | Original author | Return the consolidated findings; author revises the complete package and resubmits to the double-blind queue. |
| Decisions or material findings conflict | Reviewer C | Send the package and documented discrepancy to an independent third reviewer. |

**Reviewer C** independently resolves the discrepancy (including a conflict in decisions, not just findings) without editing or authoring task content. If Reviewer C approves, route to content QC. If Reviewer C finds a correctable issue, return it to the original author with specific findings. If Reviewer C cannot reach a defensible decision at all, treat that as evidence the task may be ambiguous, internally inconsistent, or unsolvable - return it for correction or redesign, not for another review pass.

**Revision loop**: the original author corrects every affected component, records what changed, and resubmits a new revision to the double-blind queue. Any substantive edit makes prior review, QC, and difficulty results stale - the revised package repeats the applicable gates from the top.

## 4b. Content quality control

QC begins after peer review passes (both reviewers approve, or Reviewer C approves after resolving a conflict). It checks whether the package is accurate, supported, solvable, internally consistent, professionally realistic, free of answer leakage, and fair to grade.

- Verify public authority, source locations, material calculations, dates, units, jurisdiction.
- Confirm required inputs are present, open correctly, and agree with the prompt and reference solution.
- Check each rubric criterion is supported, atomic, nonduplicative, appropriately weighted.
- Check the prompt and model-visible files contain no hidden solution, rubric, or evaluation content.
- Every blocking issue is returned to the original author with a precise location and supporting evidence - QC does not repair the task directly.

After a QC return, the author revises and resubmits to the review queue (not straight to QC) - a prior review or QC result does not automatically carry over to a changed revision.

## 4c. Model difficulty check

Runs only after content QC passes - it's the final gate before acceptance.

| Result | Route | Required action |
|---|---|---|
| Requirements met | Accepted | Accept the current revision after confirming all earlier gates remain valid. |
| Too easy | Original author | Harden the professional reasoning while preserving clarity and solvability, then resubmit to the review queue. |
| Too hard or unfair | Original author | Correct ambiguity, missing information, unreasonable scope, or another source of unfair difficulty, then resubmit to review. |
| Pending or execution error | Hold | Wait for completion or report the error - an incomplete run is not evidence of model failure. |
| Older revision | Repeat gates | Review and QC the changed package, then run difficulty on the current revision. |

When hardening an easy task: add useful reconciliation, intermediate calculations, source comparison, or a justified professional choice. Don't hide required information, add ambiguity for its own sake, inflate rubric weights, or rerun an unchanged task hoping for a different score.

**Acceptance**: a task moves to Accepted only when the *same current revision* has passed double-blind peer review, content QC, and the final difficulty check. Submission, reviewer activity, or an automated run alone is not acceptance.

## 4d. Role responsibility matrix

| Component / action | Original author | Reviewer A and B | Reviewer C | QC |
|---|---|---|---|---|
| Prompt and evidence | Create and revise | Review only | Decide only | Check only |
| Reference solution | Create and revise | Review only | Decide only | Check only |
| Rubric | Create and revise | Review only | Decide only | Check only |
| Primary decision | Receive outcome | Decide independently | Not involved unless conflict | Not involved |
| Discrepancy resolution | Receive outcome | Provide recorded findings | Make final review decision | Not involved |
| Correct task content | Sole editor | Never | Never | Never |
| Final difficulty run | Respond to returns | Not involved | Not involved | Runs after QC pass |

## 4e. Getting help

Contact the project team with the task ID, current stage, action attempted, and exact error or finding. Include a screenshot when useful, without exposing confidential or restricted material. For content disputes, include the source or calculation that supports the question. Use this channel for the document/platform order discrepancy noted in section 0, and for any check that returns "Incomplete" / an execution error twice in a row on the same revision - that's an infrastructure issue for them to look at, not a task-content problem to keep guessing at.

## 5. Authorship and tone rules

- The literal current text of `newinst.txt` reads: *"Do not use generative AI to draft substantive task components. Use only project-approved assistance within its permitted scope, disclose its use."* That is a real tightening from the prior instruction (which allowed AI-assisted drafting outright). If AI assistance is used in drafting this task's substantive content, disclose it as required and confirm with the project team what "approved assistance within its permitted scope" actually covers before relying on that reading - don't assume it matches the old rule.
- Whatever the drafting process, the prompt, reference solution, and rubric must reflect the domain expert's own verified judgment, and the final text must read as natural professional prose.
- Avoid AI tells: em dashes, filler intensifiers ("crucial," "robust," "comprehensive"), over-formatted bullet cascades, formulaic constructions like "it's not just X, it's Y."
- Read it back and check it sounds like a professional writing to a colleague, not a model writing to a grader.
- Keep everything inside approved project systems.

## 6. Final checklist for authors (from `newinst.txt`)

- The task is original and fits the assigned domain and specialty.
- The prompt defines the professional objective, output, evidence rules, and all material constraints.
- The evidence is sufficient, verified, accessible, nonconfidential, and free of answer leakage.
- The reference solution answers every requested part and supports material claims and calculations.
- The rubric is atomic, weighted by importance, calibrated to the task, and fair to valid alternatives.
- The prompt, evidence, reference solution, and rubric agree with one another and belong to the same current revision.
- Every revision was made by the original author and returned through the review queue.
- The current revision passed double-blind review, QC, and the final difficulty check before acceptance.
- All permitted assistance has been disclosed.

## 7. Rubric conventions (from the worked examples)

Group criteria under a small number of labeled sections - the examples use:
- **Factual Information** - does the response state the correct facts, definitions, cited provisions, or named methods?
- **Analytical Reasoning** - does the response correctly reason from those facts (causal logic, argument structure, correct application to the fact pattern)?
- **Structure and Formatting** - does the output meet the format the task actually required (e.g., proper math notation, required structure)? Reserve this section for output-format defects, not content.

Within each section:
- Each bullet is one atomic, checkable claim, prefixed with a signed point value: `+N` for something the response should include, `-N` for a specific, consequential error or omission.
- Point values scale roughly with importance/centrality to the correct answer (in the examples, roughly 3 to 10 points per item).
- Negative criteria describe a concrete failure mode ("fails to cite X," "confuses X with Y," "relies on correlation instead of a causal design"), never a vague deduction for low quality.
- Criteria reference specific named concepts, provisions, or methods - not paraphrased vibes ("good analysis").

## 8. Condensed shape of a worked example

Each example in the source material follows this shape:

```
## <Domain>

**Background**
<2-5 sentences. Names the professional role, the situation, and what
triggered the need for the work product. Fictional details (people,
governments-as-hypothetical, companies) are clearly scenario framing;
technical/legal/scientific referents are real.>

**Question**
<1-3 numbered asks, tightly scoped to one objective, phrased as a
professional would phrase a request to a peer.>

**Rubrics**

*Factual Information*
- **+N** <specific fact/definition/citation the response must state>
- ...

*Analytical Reasoning*
- **+N** <specific correct inference/argument the response must make>
- **-N** <specific reasoning failure that should be penalized>

*Structure and Formatting*
- **-N** <specific output-format defect>
```

The three worked examples (actuarial reserve methods, Nigerian constitutional law, Crohn's/C. diff mechanistic study design) each stay inside one real, checkable body of authority - an actual textbook's terminology, an actual constitution's sections, actual molecular/microbiology mechanisms - even where the surrounding scenario is dramatized or hypothetical.

## 9. Platform field mapping (experts.afterquery.com/projects/millie)

The live task workspace does not take a single narrative document - it takes a set of discrete fields, plus three separate sub-workspaces (Facts and evidence, Reference, Rubric) that are restricted from the solving agent. Every task authored from this reference should be delivered pre-broken-out into this shape, in a companion `platform-fields.md`, not just as one flowing task file, so it can be pasted straight into the form.

**Workflow brief section:**
- Professional role - who "you" are in the scenario (title, employer, one line of context).
- Recipient - who receives the work product.
- Decision to make - the one decision/question at stake, one to two sentences.
- Deliverable - the required work product, format, and any length limit.
- Jurisdiction (optional) - fill in unless genuinely not applicable.
- As-of date (optional) - the date(s) the scenario is grounded at.
- Allowed tools and sources - which supplied exhibits are usable, and whether/how outside GAAP-, statute-, or standard-level knowledge may be used versus needing to be searched.
- Web search boundary - pick the option matching whether every number/fact needed is in the supplied evidence ("supplied evidence only") or whether outside lookup is part of the task by design.
- Expected expert effort - a realistic solve-time estimate for a qualified professional in the field.
- Why this needs professional synthesis - name the specific synthesis steps (not "requires expertise" - name what has to be reconciled, derived, or chosen between).

**Prompt and deliverable section:**
- Prompt - the complete, self-contained text the solving agent sees: situation, work-product ask, evidence/resource rules, dates/units/assumptions, and the numbered questions. Assume the structured fields above may not themselves be shown to the agent, so nothing load-bearing may live only in them.
- Deliverable contract - a checklist-style spec of what the response must contain to be gradable (required conclusions, required numeric outputs with precision, required sections, length/format target). This is the deterministic-check surface, so keep each line objectively checkable.

**Facts and evidence workspace:** each exhibit pasted in as its own **Source** entry (not an Artifact - see the gotchas below), matching the descriptive filenames used in the task document.

**Reference workspace:** the reference solution, pasted in whole - never placed in the Prompt or Deliverable contract fields, since those are agent-visible.

**Rubric workspace:** the rubric, pasted in whole, keeping the section/point-weight structure from [section 7](#7-rubric-conventions-from-the-worked-examples).

When handing off a finished task, always produce both files together: the narrative task document (background/prompt/evidence/reference/rubric, for readability and review) and `platform-fields.md` (the same content re-cut to these exact fields, ready to paste).

## 10. Autofill data file

In addition to the two files above, produce a machine-readable data file at `browser-extension/data/task-<id>.json` in the schema documented in `browser-extension/README.md`, matching the `platform-fields.md` content for the same task, so the Millie Task Autofill extension can fill the live form directly instead of the fields being copy-pasted by hand. Validate the file actually parses as JSON before handing it off.

## 11. Platform gotchas (learned end to end shipping task 5a7fc587d6884ccf7ab5)

These are things the platform's UI does not make obvious, discovered only by actually pushing a task through readiness checks. Apply all of them to every future task's data file from the start, rather than re-discovering them one at a time.

- **The full "source contract" the server actually enforces (`evidence:source_contract_problems`), confirmed empirically by adding fields one batch at a time and watching the problem count drop 9 → 5 → 2 → 0.** The UI labels every one of these "optional" except Content hash, which is a real tell but not the whole story - none of this is visible from the client-side "Still needed before marking ready" summary, which can say "Everything is present" while the server still 422s. Fill all of the following on **every** Source, agent-visible or hidden, from the start:
  - **Content hash** - a SHA-256 hex digest of the source's Excerpt/snapshot text (or its title, if it has no excerpt). Doesn't need to trace to a real uploaded file.
  - **Claim locators** - at least one line, even for a fictional exhibit citing itself (e.g. "Income statement and balance sheet, Exhibit A").
  - **License / rights** - a one-line note on the right to use the content (e.g. "Authored for this task, fictional content, no third-party rights implicated" for an exhibit; "FASB copyrighted material, cited by paragraph reference, not reproduced in full" for real accounting literature).
  - Additionally, for a source with authenticity `Real` and origin `Retrieved`: **Authoritative URL** and **Retrieved** date.
  - Published and Effective did not turn out to be required in this run - don't burn time pre-filling them defensively; leave them blank unless a future readiness check specifically calls them out.
- **An agent-visible Source needs actual substantive content in Excerpt/snapshot, not just a title.** A Source with only an id/title/authenticity/origin/delivery shows up fine in the "Agent-visible evidence" list on the Task workspace overview, which can look like the evidence requirement is satisfied when it isn't - readiness checks appear to also want real content behind it. Put the actual exhibit text (or a substantive excerpt of it) in that field.
- **Real external citations (case law, statutes, accounting standards, published guidelines) go in as Sources, not Artifacts, and normally as Hidden Only.** Artifacts (Id/Name/Visibility/Content hash/Render version, no visible upload control in the UI as inspected) look like they're meant for actual uploaded files and were left empty for this task without causing a problem. A real external authority a respondent is expected to know or that backs the reference solution (rather than being handed to the respondent verbatim) belongs in Sources with authenticity "Real," delivery "Hidden Only" (never reaches the agent packet - used for QC/verification only), and origin "Retrieved" if you looked it up and verified it (as opposed to "Expert Supplied" for a fictional exhibit you authored yourself). Excerpt the actual rule text so the citation is checkable, not just named.
- **Confirmed dropdown option text** (exact strings, case-sensitive) so future data files don't have to guess and burn a round trip:
  - Authenticity: `Real` | `Synthetic` | `Hybrid`
  - Origin: `Retrieved` | `Expert Supplied` | `Generated` | `Derived`
  - Delivery: `Provided to Agent` | `Web Discoverable` | `Prompt Embedded` | `Hidden Only`
  - Artifact Visibility: `Agent Visible` | `Hidden Only`
  - A fictional exhibit the task author wrote and is handing to the respondent: `Synthetic` / `Expert Supplied` / `Provided to Agent`.
  - A real citation retrieved and verified, backing the reference solution but not shown to the respondent: `Real` / `Retrieved` / `Hidden Only`.
- **Each sub-workspace (Facts and evidence, Reference, Rubric) has its own separate Save draft button**, distinct from the Task workspace's per-panel Save draft buttons. Filling a sub-page (by hand or via the autofill extension) does nothing durable until that page's own Save draft is clicked - navigating away first discards it, and the Task workspace's readiness summary will keep reporting that section as "not started" with no other symptom.
- **"Mark components ready" only gives a generic toast ("The task is not ready for that yet - check the blockers on this page") when something is missing** - it does not name the specific missing field, and the Task workspace's "Still needed before marking ready: ..." line can be flat wrong (it said "Everything is present" while the button still 422'd). When this happens: open DevTools (F12) -> Network tab -> Fetch/XHR -> click Mark components ready -> find the request (e.g. `millie.tasks.markReady`) -> open its Response. It returns a structured error like `evidence:source_contract_problems:9` - a category, a check name, and a count, with no per-field breakdown. There is no way found so far to get the exact list of which fields; the working method is to fix the most plausible batch of fields, re-save, re-click, and read the new count - a falling count confirms progress even without ever seeing the itemized list, and the delta between rounds tells you how many of your guesses in that batch were actually load-bearing. Later revisions of the platform gave a more specific version of this same banner naming the actual rule (e.g. "facts (derivations must use fact keys that exist)") - when that happens, trust the specific wording over the DevTools digging above.
- **A Derivation's "Input fact keys" may only reference entries that exist in Canonical facts - never another Derivation's id.** If a later calculation's input is really the *result* of an earlier derivation (for example, an orifice-sizing derivation that consumes a heat-input derivation's output), promote that result to its own Canonical fact first (its own key, value, unit, and provenance noting which derivation produced it), then point the downstream derivation's Input fact keys at that new fact key. Content QC will flag a derivation chain that skips this as having "incomplete" or unreproducible provenance, and the platform's own save-time validation ("derivations must use fact keys that exist") will separately reject an Input fact keys value that names a derivation id instead of a fact key - both are really the same underlying rule.
- **A QC finding that names a genuine defect (a missing citation locator, an internally inconsistent "acceptable alternative," a required output the reference never actually states) is not a platform bug and should not be waited out.** Distinguish it from an execution-pipeline failure by content: a real finding names a specific file (`components/reference.json`, `components/rubric.json`, etc.) and a specific defect; a pipeline failure returns an empty `findingFamilies` array with no detail at all. Fix real findings the same way as any other QC correction - verify with a real source or calculation before changing anything, per section 4b - never dismiss one without that evidence, and never assume a specific-sounding finding is another outage.
