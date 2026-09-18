# Millie Task Autofill

A small unpacked Chrome/Edge extension that fills the experts.afterquery.com Millie task-workspace forms from a JSON file, so you paste nothing by hand. Proven end to end on task `5a7fc587d6884ccf7ab5` (Task workspace, Facts, Reference, and Rubric all filled, saved, and passed "Mark components ready").

## How it works, and its one real limitation

It finds fields by matching the visible label text next to them, not by id or class name, since the page is behind login and there's no way to render or inspect its real markup ahead of time. That's why it survived the platform's actual DOM turning out to nest a block's number counter (e.g. "FACT 1") in a way the first version didn't anticipate. Every field it fills or fails to fill is written to a log in the popup - treat that log as the source of truth, not an assumption that everything worked.

## Install (one time)

1. Open `chrome://extensions` (or `edge://extensions`).
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select this folder: `C:\Users\yeabs\Desktop\turing\mille\browser-extension`.
4. Pin the extension (puzzle-piece icon in the toolbar, then the pin) so it's easy to click.

After any update to `content.js` or `manifest.json`, reload the extension from `chrome://extensions` and reload the Millie tab (F5) before using it again.

## Use

1. Open the task workspace page: `https://experts.afterquery.com/projects/millie/tasks/<id>`.
2. Click the extension icon, choose the JSON file for this task (e.g. `data/task-5a7fc587d6884ccf7ab5.json`).
3. Click **Fill this page**. Read the log; anything marked `MISSING FIELD` or `MISSING OPTION` needs a look. `MISSING OPTION` lines include the real list of available dropdown values, so a wrong guess in the data file is self-diagnosing - fix the JSON and re-run rather than picking it by hand every time.
4. Review the filled fields, then click **Save draft** yourself. The extension never saves or submits anything. **Each sub-page (Facts, Reference, Rubric) has its own separate Save draft button** - saving the Task workspace does not save the others, and navigating away from a sub-page without clicking its own Save draft silently discards everything you just filled there.
5. Navigate to `/facts`, open the popup again (the loaded file is remembered across popup opens via `chrome.storage.local`, so you don't need to re-pick it), click **Fill this page** again. It clicks "Add fact" / "Add derivation" / "Add source" / "Add artifact" as many times as the data file's arrays need, then fills each block. Save draft.
6. Repeat for `/reference` and `/rubric`. Save draft on each.
7. Back on the Task workspace, check the "Still needed before marking ready: ..." line. If it's empty, click **Mark components ready**.

## Data file format

One JSON file per task: `workspace`, `promptAndDeliverable`, `facts` (`canonicalFacts`, `derivations`, `sources`, `artifacts`), `reference`, and `rubric.criteria`. See `data/task-5a7fc587d6884ccf7ab5.json` for a complete worked example. Field names are camelCase versions of the on-page labels (`professionalRole` for "Professional role," `stableId` for "Stable id").

**Every Source needs the full "source contract" filled in, confirmed empirically on task `5a7fc587d6884ccf7ab5` by watching `evidence:source_contract_problems:N` drop 9 -> 5 -> 2 -> 0 as fields were added.** The UI marks all of these "optional" except Content hash, but the server enforces more than that regardless, with zero detail in the error message - see "Debugging a stuck readiness check" below for how this was diagnosed. Fill, for every Source (agent-visible or hidden):
- `contentHash` - a SHA-256 hex digest of the source's `excerpt` (or its `title` if there's no excerpt).
- `claimLocators` - at least one line, even for a fictional exhibit citing itself.
- `licenseRights` - a one-line note on the right to use the content.
- For a `Real`/`Retrieved` source specifically, also `authoritativeUrl` and `retrieved`.
- `published` and `effective` did not turn out to matter in this run - don't pre-fill them defensively.

A one-liner to (re)compute `contentHash` for every source in a data file:

```powershell
$path = "data/task-<id>.json"
$json = Get-Content -Raw -Encoding UTF8 $path | ConvertFrom-Json
$sha256 = [System.Security.Cryptography.SHA256]::Create()
foreach ($s in $json.facts.sources) {
  $basis = if ($s.excerpt) { $s.excerpt } else { $s.title }
  $hex = ([System.BitConverter]::ToString($sha256.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($basis))) -replace '-', '').ToLower()
  $s | Add-Member -NotePropertyName contentHash -NotePropertyValue $hex -Force
}
[System.IO.File]::WriteAllText($path, ($json | ConvertTo-Json -Depth 10), [System.Text.UTF8Encoding]::new($false))
```

**An agent-visible Source needs real content in `excerpt`, not just a `title`.** A title-only Source still shows up in the Task workspace's "Agent-visible evidence" list, which looks like proof it's complete when it isn't - put the actual exhibit text there.

**Confirmed dropdown values** (exact strings, case-sensitive):
- Authenticity: `Real` | `Synthetic` | `Hybrid`
- Origin: `Retrieved` | `Expert Supplied` | `Generated` | `Derived`
- Delivery: `Provided to Agent` | `Web Discoverable` | `Prompt Embedded` | `Hidden Only`
- Artifact Visibility: `Agent Visible` | `Hidden Only`
- Web search boundary: `Supplied evidence only - no web search` and at least three other options exist but haven't been read off yet - if you need one of those, open the dropdown on the page and check, or run a fill with a wrong guess and read the `MISSING OPTION` log line for the full list.

Typical pairings: a fictional exhibit you wrote and hand to the respondent is `Synthetic` / `Expert Supplied` / `Provided to Agent`. A real external citation you looked up and verified, used to back the reference solution but not shown to the respondent, is `Real` / `Retrieved` / `Hidden Only`.

**Artifacts are probably not needed.** The on-page Artifacts block (Id / Name / Visibility / Content hash / Render version) has no visible upload control and looks like it's for an actual uploaded file. It was left empty for this task and did not block readiness - all evidence went through Sources instead. If a future task turns out to need real file uploads, find out where that upload actually happens (check the "Documents" section in the left nav first) before assuming Artifacts is the mechanism.

## Debugging a stuck readiness check

If the Task workspace says "Everything is present - mark the components ready" but clicking **Mark components ready** still fails with a generic "The task is not ready for that yet" toast, the summary line is wrong or checking something different than the server does. Get the real reason instead of guessing:

1. Open DevTools (F12) -> **Network** tab -> filter to Fetch/XHR.
2. Click **Mark components ready** again.
3. Find the new request (e.g. `millie.tasks.markReady`), click it, open its **Response**.
4. It returns something like `{"error":{"json":{"message":"Components are not ready: evidence:source_contract_problems:9", ...}}}` - a category, a check name, and a count, but no per-field list.

There's no known way to get the itemized list past that count. The method that worked: fix the most plausible batch of fields, save, re-click, and read the new count. A falling count (9 -> 5 -> 2 -> 0 on this task) confirms real progress, and the size of the drop tells you how many of that batch's guesses actually mattered - isolating one field per round (as in the last 2 -> 0 step) gives the cleanest signal.

## If something doesn't fill correctly

Open the popup, check the log for `MISSING FIELD: <label>` (couldn't find the field at all) or `MISSING OPTION: <label> (wanted "..."; available: ...)` (found a dropdown, wrong guess - the available list is right there, fix the JSON). Also watch for `WARNING: only found/created N of M "..." blocks` - that means the repeatable-block detection (Facts/Derivations/Sources/Artifacts/Criteria) came up short and stopped itself early rather than continuing to click blindly; report the exact numbers before retrying, since it points to a real detection bug rather than a data problem.
