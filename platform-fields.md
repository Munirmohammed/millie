# Platform field mapping - task 92d565d9ac2063859359 (Industry)

Copy-paste content for each field on experts.afterquery.com/projects/millie/tasks/92d565d9ac2063859359. Order matches the page top to bottom. Source content: `task-industry.md`.

## Workflow brief

**Professional role**
```
Process engineer, Meridian Gas Processing, LLC (Ridgeline Fractionation Terminal)
```

**Recipient**
```
The site's Process Safety Manager
```

**Decision to make**
```
Whether the currently installed pressure relief valve on vessel V-204 (the propane product surge drum) is adequately sized for the fire case now that its fireproof insulation has degraded beyond repair, and what should happen before the next turnaround if it is not.
```

**Deliverable**
```
A relief system adequacy memo to the Process Safety Manager that reaches a supported conclusion on whether PSV-204A is adequately sized for the revised fire case, whether the secondary thermal relief valve TSV-204B may be credited toward that requirement, and what should happen before the next turnaround if PSV-204A is inadequate.
```

**Jurisdiction** (optional)
```
United States (API 520/521/526, ASME Section VIII Division 1)
```

**As-of date** (optional)
```
Current PHA revalidation; next scheduled turnaround approximately 18 months out.
```

**Allowed tools and sources**
```
Respondent may use only the three supplied exhibits (relief device data sheet, PHA fire-case basis, process simulation physical property basis) for all vessel, valve, and property figures; no external research is needed or expected to supply any number. Respondent may and should draw on their own knowledge of API 520, API 521, API 526, and ASME Section VIII Division 1 to identify and apply the governing methodology.
```

**Web search boundary**
```
Supplied evidence only - no web search
```

**Expected expert effort**
```
Approximately 45-60 minutes for a qualified process or mechanical engineer familiar with API 520/521 relief valve sizing.
```

**Why this needs professional synthesis**
```
The respondent has to chain three real standards together the way a relief system review actually works. They must apply the API 521 fire-case heat-input equation with the correct environment factor, convert that to a required relieving rate, then apply the API 520 sizing equation with a correctly derived coefficient and the correct fire-case accumulation basis (21% above MAWP, not the 10% non-fire single-device basis most people default to), then compare the result to the real API 526 standard orifice table using the rounding-up convention rather than nearest-size. Independently of that whole chain, they also have to recognize that a second installed relief device on the vessel serves a completely different overpressure contingency and cannot be credited toward the fire case, without being told that directly.
```

## Prompt and deliverable

**Prompt**
```
You are a process engineer at Meridian Gas Processing, LLC, at its Ridgeline Fractionation Terminal. A process hazard analysis (PHA) revalidation just found that fireproof insulation on vessel V-204, the propane product surge drum, has degraded beyond repair and will not be replaced before the next scheduled turnaround, roughly 18 months out. The PHA team recalculated the fire-case heat input on the assumption that the vessel must now be treated as bare (uninsulated) and has asked you to confirm whether the vessel's existing overpressure protection remains adequate.

Write a relief system adequacy memo to the site's Process Safety Manager (two to three pages is sufficient) that reaches a supported conclusion on whether the currently installed pressure relief valve on V-204 is adequately sized for the revised fire case, and what should happen before the next turnaround if it is not.

Use only the exhibits supplied as evidence. All vessel, valve, and process-simulation figures are specific to this facility and complete as given; no external research is needed to fill in a number. You may and should rely on your own knowledge of API Standard 520, API Standard 521, API Standard 526, and ASME Boiler and Pressure Vessel Code Section VIII, Division 1, to identify and apply the governing methodology and cite the specific provisions you rely on.

All pressures are gauge unless stated as absolute (psia). Atmospheric pressure is 14.7 psia. Treat every figure in the exhibits as accurate and final.

Specifically:

1. Determine the required fire-case relieving vapor rate for V-204 using the API 521 heat-input methodology and the wetted-area basis in Exhibit B. Show the heat-input calculation and the resulting mass relieving rate.
2. Using the API 520 Part I vapor/gas sizing equation, determine the required effective relief orifice area for the fire case. Derive the API 520 coefficient C from the given specific heat ratio, and state the relieving pressure you use and the accumulation basis that supports it.
3. Compare the required effective orifice area to the standard API 526 orifice designation currently installed on PSV-204A (Exhibit A) and state whether PSV-204A remains adequate for the revised fire case. If it is not adequate, identify the smallest standard API 526 orifice designation that would be.
4. Independent of the PSV-204A sizing analysis, determine the total fire-case vapor relief capacity that may be credited to V-204's installed relief devices (PSV-204A and TSV-204B combined, per Exhibit A), and state whether TSV-204B may be counted toward the fire-case requirement.
5. Recommend what should be done about V-204's overpressure protection given your findings, and identify what would need to happen before the next turnaround.

Show the arithmetic and cite the governing provision behind every material step, not just the final numbers.
```

**Deliverable contract**
```
The response must, at minimum:
- Show the API 521 fire-case heat-input calculation (Q) and the resulting required relieving mass rate (W), with the environment factor and wetted area used stated explicitly.
- Show the API 520 sizing calculation for the required effective orifice area, including the derived coefficient C and the relieving pressure used, with the fire-case accumulation basis (21% above MAWP) stated and distinguished from the non-fire basis.
- State a clear conclusion on whether the installed PSV-204A orifice is adequate, and if not, name the smallest standard API 526 orifice designation that is.
- Separately and explicitly state whether TSV-204B's capacity may be credited toward the fire-case requirement, with the reasoning for that conclusion.
- End with a specific, concrete recommendation for what should happen before the next turnaround.
- Length target: roughly 2-3 pages; format: memo addressed to the Process Safety Manager with the calculation, the orifice comparison, and the device-crediting conclusion as separately identifiable sections.
```

## Facts and evidence workspace (separate page, paste as Sources)

Paste each exhibit as its own Source, plus the two real standards as Hidden Only sources. All values below already include the fields that turned out to be required last time (content hash, claim locators, license/rights, and authoritative URL/retrieved for the real/retrieved sources) - see `browser-extension/data/task-92d565d9ac2063859359.json` for the ready-to-autofill version; this section is the human-readable equivalent.

- **Exhibit A** - V-204 relief device data sheet (PSV-204A and TSV-204B specifications)
- **Exhibit B** - PHA revalidation basis for the fire case (wetted area, environment factor, drainage/firefighting basis)
- **Exhibit C** - process simulation physical property basis (relieving temperature, latent heat, molecular weight, k, Z)
- **API 521 fire-case heat input methodology** (Hidden Only, Real/Retrieved) - backs the reference solution's Q equation and constant
- **ASME Section VIII UG-125 / API 521 fire-case accumulation** (Hidden Only, Real/Retrieved) - backs the 21%-above-MAWP basis
- **API 520 Part I sizing equation and coefficient C** (Hidden Only, Real/Retrieved) - backs the orifice sizing formula
- **API 526 standard orifice designations** (Hidden Only, Real/Retrieved) - backs the M/N orifice area comparison

## Reference workspace (separate page, restricted - reviewers judge it, the tested model never sees it)

Paste the "Reference solution" section of `task-industry.md` verbatim, split across: Answer (the five numbered conclusions), Reasoning process (the worked calculations), Source locators (one per line: the four standards above), Acceptable alternatives, Calibrated uncertainty, Known limitations.

## Rubric workspace (separate page, restricted)

Paste the "Rubric" section of `task-industry.md` verbatim (Factual Information, Analytical Reasoning, Structure and Formatting), broken into the platform's per-criterion fields per `browser-extension/data/task-92d565d9ac2063859359.json`.
