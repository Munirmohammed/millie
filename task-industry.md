## Industry and Engineering

**Domain / specialty:** Industry (process/mechanical engineering, pressure relief system design)

### Task details

**Situation.** You are a process engineer at Meridian Gas Processing, LLC, at its Ridgeline Fractionation Terminal. A process hazard analysis (PHA) revalidation just found that fireproof insulation on vessel V-204, the propane product surge drum, has degraded beyond repair and will not be replaced before the next scheduled turnaround. The PHA team recalculated the fire-case basis on the assumption that the vessel must now be treated as bare (uninsulated), and separately flagged a blocked-outlet contingency on the vessel that has not previously been evaluated against the current relief device. You have been asked to confirm whether the vessel's existing overpressure protection remains adequate against the governing contingency.

**Recipient / work product.** Write a relief system adequacy memo to the site's Process Safety Manager (two to three pages is sufficient) that reaches a supported conclusion on whether the currently installed pressure relief valve on V-204 is adequately sized for the governing overpressure contingency, and what should happen before the next turnaround if it is not.

**Permitted resources.** Use the exhibits below for every facility- and equipment-specific figure (vessel, valve, and process-simulation data); no external research is needed or expected to obtain any of those. Separately, you are expected to know and apply, from your own professional knowledge and without needing to look them up, the general industry reference values and methodology in API Standard 520 (Sizing, Selection, and Installation of Pressure-Relieving Devices), API Standard 521 (Pressure-Relieving and Depressuring Systems), API Standard 526 (Flanged Steel Pressure Relief Valves, including its standard orifice designation areas), and ASME Boiler and Pressure Vessel Code Section VIII, Division 1. Name the specific standard each material step relies on. Citing a more precise provision, section, or edition is a plus but is not required, since exact clause numbers and editions are not disclosed in the supplied exhibits.

**Assumptions.** All pressures are gauge unless stated as absolute (psia). Atmospheric pressure is 14.7 psia. Treat every figure in the exhibits as accurate and final.

### Prompt

1. Using the vessel geometry and liquid level in Exhibit B, determine the wetted surface area of V-204 exposed to the fire, then determine the required fire-case relieving vapor rate using the API 521 heat-input methodology. Show each step: the wetted-area geometry, the heat-input calculation, and the resulting mass relieving rate.
2. Using the API 520 Part I vapor/gas sizing equation, determine the required effective relief orifice area for the fire case. Derive the API 520 coefficient C from the given specific heat ratio, and state the relieving pressure you use and the accumulation basis that supports it.
3. Using the blocked-outlet contingency data in Exhibit D, determine the required propane mass relieving rate for that contingency, then the required effective relief orifice area. State which of the two contingencies (fire case or blocked outlet) governs the required relief orifice area for V-204, and why.
4. Compare the governing contingency's required effective orifice area to the standard API 526 orifice designation currently installed on PSV-204A (Exhibit A) and state whether PSV-204A remains adequate. If it is not adequate, identify the smallest standard API 526 orifice designation that would be.
5. Independent of the PSV-204A sizing analysis, determine the total relief vapor capacity, for the governing contingency, that may be credited to V-204's installed relief devices as a group (Exhibit A), accounting for each device's rated service, and identify which device or devices that credited total comes from.
6. Recommend what should be done about V-204's overpressure protection given your findings, and identify what would need to happen before the next turnaround.

Show the arithmetic behind every material step, not just the final numbers, and name the specific standard (API 520, API 521, API 526, or ASME Section VIII) that supports each step.

### Evidence

**Exhibit A: V-204 relief device data sheet (fictional, Ridgeline Fractionation Terminal, current as of this PHA revalidation)**

Vessel: V-204, Propane Product Surge Drum. Horizontal, ASME Section VIII Division 1. Maximum allowable working pressure (MAWP): 250 psig.

Installed relief devices:
- PSV-204A: conventional spring-loaded pressure relief valve, propane vapor service. Set pressure: 250 psig (at MAWP). ASME-certified effective coefficient of discharge, Kd: 0.975. Nameplate effective orifice area matches API 526 standard designation M (3.60 in²). Discharges to the terminal's low-pressure atmospheric relief header; the relief header hydraulics study confirms built-up backpressure at this device's rated flow is low enough that no backpressure correction is required (Kb = 1.0). No rupture disk is installed upstream or in combination with PSV-204A (Kc = 1.0).
- TSV-204B: thermal relief valve, 3/4 in x 1 in, installed on the block valve segment between the vessel outlet isolation valve and the downstream check valve. Set pressure: 275 psig. Manufacturer-rated capacity: 8.2 gpm.

**Exhibit B: PHA revalidation basis for the fire case on V-204 (fictional, current revalidation)**

Vessel geometry: V-204 is a horizontal cylindrical vessel, 13.0 ft outside diameter, with a cylindrical shell 75.0 ft long between tangent lines. It is mounted on grade-level saddle supports such that its entire height is well within API 521's 25 ft fire-engulfment elevation limit, so the full liquid-wetted circumference of the shell is exposed to the fire without any additional height-based limitation. Normal liquid level: 65 percent of the vessel diameter, measured from the bottom of the vessel. Per the PHA's calculation scope, wetted area for this analysis is limited to the cylindrical shell; the vessel heads are addressed separately in the PHA package and are not part of this calculation.

Environment factor: the site's mechanical integrity assessment confirms the fireproof insulation on V-204 is degraded beyond repair and will not be restored before the next turnaround; for this revalidation, V-204 is to be evaluated as a bare vessel (environment factor F = 1.0).

Site fire protection basis: the terminal's fire water and area drainage design was assessed against API 521's criteria for adequate drainage and firefighting capability, and both are confirmed present for the V-204 area.

**Exhibit C: Process simulation physical property basis for the fire case (fictional, Ridgeline Fractionation Terminal process simulation model)**

At the fire-case relieving conditions for V-204:
- Relieving temperature: 605 degrees Rankine (145 degrees Fahrenheit)
- Latent heat of vaporization of propane at relieving conditions: 85 Btu/lb
- Molecular weight of propane: 44.1 lb/lbmol
- Ideal-gas specific heat ratio (k = Cp/Cv) of propane vapor at relieving conditions: 1.13
- Compressibility factor (Z) at relieving conditions: 0.85

**Exhibit D: Blocked-outlet contingency basis for V-204 (fictional, current PHA revalidation)**

V-204's downstream outlet control valve (FV-204) can fail closed while the upstream feed compressor (K-204) continues to run, since K-204's control scheme does not automatically trip the machine on high V-204 level alone. Under this contingency, per the compressor's performance curve, K-204's maximum continued discharge capacity of propane vapor into V-204 at the vessel's blocked-outlet relieving pressure is 303 actual cubic feet per minute (ACFM), measured at that relieving pressure and temperature.

Physical properties at the blocked-outlet contingency's relieving conditions (per the process simulation model): relieving temperature 560 degrees Rankine (100 degrees Fahrenheit); compressibility factor (Z) 0.92. The propane's molecular weight and ideal-gas specific heat ratio are the same as given in Exhibit C, since it is the same fluid. For reference, the universal gas constant is R = 10.7316 psia*ft3/(lbmol*R).

### Reference solution

**1. Wetted area and required fire-case relieving rate.** The vessel radius is r = 13.0/2 = 6.5 ft. The liquid level is h = 0.65 x 13.0 = 8.45 ft, measured from the bottom of the vessel, which is more than half the diameter, so the wetted (bottom) arc is the major segment of the circle.

For a horizontal cylinder, the dry (top) arc's half-angle at the center is theta = arccos((h - r) / r). Here (h - r)/r = (8.45 - 6.5)/6.5 = 1.95/6.5 = 0.300, so theta = arccos(0.300) is approximately 1.266 radians (about 72.5 degrees). The wetted arc spans the remainder of the full circle: wetted angle = 2 x pi - 2 x theta, approximately 6.283 - 2.532 = 3.751 radians.

Wetted arc length per unit length of shell = r x wetted angle = 6.5 x 3.751 is approximately 24.38 ft. Total wetted area of the cylindrical shell = 24.38 x 75.0 (shell length) is approximately 1,829 ft².

Per API Standard 521, Sixth Edition (January 2014), Section 4.4.13.2.4, the heat-input equation for a vessel exposed to pool fire with adequate drainage and firefighting equipment is Q = 21,000 x F x A_ws^0.82, where A_ws is the wetted surface area in ft². With F = 1.0 (bare vessel, per Exhibit B) and A_ws approximately 1,829 ft²:

A_ws^0.82 is approximately 473.1.
Q = 21,000 x 1.0 x 473.1 is approximately 9,930,000 Btu/hr (about 9.93 x 10^6 Btu/hr).

The required relieving mass rate follows from W = Q / L, using the given latent heat of vaporization (Exhibit C, L = 85 Btu/lb):

W_fire = 9,930,000 / 85 is approximately 116,900 lb/hr.

**2. Required effective orifice area, fire case.** Per API Standard 520 Part I, Tenth Edition (October 2020), Section 5.6.3, the critical-flow sizing equation for vapor/gas service is:

A = W / (C x Kd x P1 x Kb x Kc) x sqrt(T x Z / M)

The coefficient C is a function of the ideal-gas specific heat ratio k: C = 520 x sqrt(k x (2/(k+1))^((k+1)/(k-1))). With k = 1.13 (Exhibit C, also applicable to Exhibit D since it is the same fluid):

(k+1)/(k-1) = 2.13/0.13, approximately 16.38. (2/(k+1))^16.38 = (0.9390)^16.38 is approximately 0.356. k x 0.356 is approximately 0.403. sqrt(0.403) is approximately 0.635. C = 520 x 0.635 is approximately 330.

The relieving pressure for the fire case is set by the fire-case accumulation. Per ASME BPVC Section VIII Division 1 (2023 Edition), UG-125, and API Standard 521, Sixth Edition (January 2014), the maximum accumulation for fire or other unexpected external heat source exposure is 21% above MAWP (that is, 121% of MAWP), regardless of the number of relief devices installed. With MAWP = Pset = 250 psig:

P1_fire (gauge) = 250 x 1.21 = 302.5 psig. P1_fire (absolute) = 302.5 + 14.7 = 317.2 psia.

Substituting W_fire = 116,900 lb/hr, C = 330, Kd = 0.975, P1 = 317.2 psia, Kb = 1.0, Kc = 1.0, T = 605 R, Z = 0.85, M = 44.1 lb/lbmol:

Denominator: 330 x 0.975 x 317.2 x 1.0 x 1.0 is approximately 102,053.
sqrt(T x Z / M) = sqrt(605 x 0.85 / 44.1) = sqrt(11.666) is approximately 3.415.
A_fire = (116,900 / 102,053) x 3.415 is approximately 3.91 in².

**3. Required mass rate and effective orifice area, blocked outlet, and the governing contingency.** The blocked-outlet contingency is a non-fire, single-device operating contingency, not a fire exposure. Per ASME Section VIII Division 1 UG-125 and API 521, the applicable accumulation for a single relief device on a non-fire contingency is 10% above MAWP (110% of MAWP), materially lower than the 21% fire-case accumulation. Using the non-fire basis here (rather than the fire-case basis) is required because this contingency is not a fire exposure.

P1_blocked (gauge) = 250 x 1.10 = 275 psig. P1_blocked (absolute) = 275 + 14.7 = 289.7 psia.

Exhibit D gives K-204's continued discharge capacity as a volumetric rate (303 ACFM) at the blocked-outlet relieving conditions, not a mass rate, so the mass rate must be derived before the orifice area can be sized. The relieving density follows from the real-gas relationship rho = (P1 x M) / (Z x R x T), using the accumulated relieving pressure just derived (P1_blocked = 289.7 psia, not the 250 psig set pressure or MAWP), Exhibit D's relieving temperature and Z, and Exhibit C's molecular weight, with R = 10.7316 psia*ft3/(lbmol*R):

rho = (289.7 x 44.1) / (0.92 x 10.7316 x 560) = 12,775.8 / 5,528.9 is approximately 2.311 lb/ft3.

W_blocked = ACFM x 60 min/hr x rho = 303 x 60 x 2.311 is approximately 42,000 lb/hr (42,009 lb/hr unrounded).

Substituting W_blocked is approximately 42,000 lb/hr, C = 330 (same k = 1.13, same fluid), Kd = 0.975, P1 = 289.7 psia, Kb = 1.0, Kc = 1.0, T = 560 R, Z = 0.92, M = 44.1 lb/lbmol:

Denominator: 330 x 0.975 x 289.7 x 1.0 x 1.0 is approximately 93,211.
sqrt(T x Z / M) = sqrt(560 x 0.92 / 44.1) = sqrt(11.685) is approximately 3.418.
A_blocked = (42,000 / 93,211) x 3.418 is approximately 1.54 in².

Comparing the two: A_fire (approximately 3.91 in²) is substantially larger than A_blocked (approximately 1.54 in²). The fire case governs the required relief orifice area for V-204; the blocked-outlet contingency does not control the sizing decision, even though it is a real and credible contingency that had to be checked rather than assumed away.

**4. Adequacy of PSV-204A.** Per API Standard 526, Seventh Edition (September 2017), Table 1, the standard orifice designations bracketing the governing (fire-case) requirement are M (3.60 in²) and N (4.34 in²). The required area of approximately 3.91 in² exceeds the certified area of the installed M orifice (3.60 in²), so PSV-204A is undersized for the governing contingency. The smallest standard API 526 orifice designation that meets the requirement is N (4.34 in²); the correct practice is to select the next standard size that is at or above the required area, not the nearest size in either direction.

**5. Credit from TSV-204B, and the total credited capacity for the governing contingency.** TSV-204B's manufacturer rating (Exhibit A) is 8.2 gpm, a liquid volumetric flow rate for its liquid thermal-relief duty. The governing (fire-case) requirement from part 1 is a vapor mass flow rate (lb/hr). These are not the same physical quantity, and there is no valid, stated basis in Exhibit A (no liquid density, no vapor-equivalent rating, no test or certification for vapor service) to convert TSV-204B's liquid gpm rating into any vapor lb/hr capacity. Because no such conversion exists, TSV-204B has no established or certifiable vapor relieving capacity to credit at all, independent of whatever contingency it was intended for. Its contribution to the governing vapor relief total is therefore zero, not because of a crediting rule that excludes it, but because it has no measurable vapor capacity in the first place.

The only capacity that may be credited toward the governing contingency is PSV-204A's, at its installed M orifice area (3.60 in²). Solving the same API 520 sizing equation for W with A = 3.60 in² and the fire-case terms unchanged (C = 330, Kd = 0.975, P1 = 317.2 psia, Kb = Kc = 1.0, T = 605 R, Z = 0.85, M = 44.1 lb/lbmol):

W_credited = A x (C x Kd x P1 x Kb x Kc) / sqrt(T x Z / M) = 3.60 x 102,053 / 3.415 is approximately 107,600 lb/hr.

Total credited capacity for the governing contingency (PSV-204A plus TSV-204B) is therefore approximately 107,600 lb/hr, against a required rate of approximately 116,900 lb/hr from part 1 - a shortfall of roughly 9,300 lb/hr, or about 8 percent of the required rate (approximately 92 percent of the requirement is met). This numeric shortfall is consistent with, and independently confirms, the orifice-area conclusion in part 4.

**6. Recommendation.** The approximately 9,300 lb/hr shortfall against the governing (fire-case) requirement must be resolved before the next turnaround, since Exhibit B establishes that the fireproofing will not be restored before then and so cannot be relied upon to close the gap. The most direct path is replacing PSV-204A (or upsizing its trim) to a device certified to at least an API 526 N orifice (4.34 in²). An equally acceptable path is adding a properly sized second vapor relief device to make up the shortfall. Whichever path is chosen, the revised configuration should be re-verified by recalculating both the fire-case and blocked-outlet requirements against the resulting installed or credited capacity, since a larger PSV-204A also changes its blocked-outlet margin (though the blocked-outlet case does not govern the sizing decision either before or after). TSV-204B should remain in service for its intended liquid thermal-relief function but should not be relied upon, and should not be represented in the site's relief system documentation, as contributing to the vapor relief capacity of V-204 for any contingency.

**Acceptable alternatives.** Either remedial path in part 6 (upsizing PSV-204A, or adding a second properly sized device), or an equivalent measure shown to close the approximately 9,300 lb/hr shortfall without relying on restoring fireproofing before the next turnaround, is an acceptable recommendation. A response that expresses the part 5 shortfall as a percentage of required capacity rather than, or in addition to, an absolute lb/hr figure is an acceptable equivalent presentation. Exhibit B states the wetted-area scope of this analysis is the cylindrical shell only; a response should follow that stated scope rather than separately adding the vessel heads' contribution.

**Calibrated uncertainty.** High confidence in the wetted-area geometry, both accumulation bases, the sizing equation, and the orifice comparison, which follow directly from API 520/521, standard circular-segment geometry, and the given facts. Moderate tolerance is appropriate on the final numeric areas (fire case approximately 3.75 to 4.05 in², blocked outlet approximately 1.4 to 1.7 in²) depending on rounding through the geometry and sizing steps, since neither tolerance band changes which contingency governs or which standard orifice is required.

**Known limitations.** Assumes Exhibit C and Exhibit D's process-simulation physical properties are representative of actual relieving conditions for each contingency, and that fire case and blocked outlet are the only two contingencies that need to be checked for V-204; a complete relief system review would also confirm no other contingency (for example, tube rupture on an upstream exchanger, or external cooling failure) governs a larger required area than the fire case, which is outside the scope of this assignment.

### Rubric

*Factual Information*
- **+9** Correctly computes the wetted arc geometry for the liquid level given (h = 8.45 ft in a 13.0 ft diameter vessel): theta = arccos(0.300) is approximately 1.266 radians, wetted angle is approximately 3.751 radians, and wetted area (shell only, x 75.0 ft length) is approximately 1,829 ft² (accept 1,780 to 1,880 ft²).
- **+10** Applies the API 521 fire-case heat-input equation Q = 21,000 x F x A_ws^0.82 with F = 1.0 and the wetted area from the prior step, arriving at Q of approximately 9.93 x 10^6 Btu/hr (accept 9.7 to 10.2 x 10^6 Btu/hr).
- **+7** Converts Q to the required fire-case relieving mass rate using W = Q / L with the given latent heat, arriving at W_fire of approximately 116,900 lb/hr (accept 114,000 to 119,500 lb/hr).
- **+8** Correctly derives or applies the API 520 coefficient C for k = 1.13, arriving at C of approximately 330 (accept 325 to 335).
- **+8** Uses the fire-case accumulation of 21% above MAWP (121% of MAWP) per ASME Section VIII UG-125 / API 521 to set the fire-case relieving pressure at approximately 317 psia, rather than the 110% single-device non-fire basis.
- **+7** Computes the required effective orifice area for the fire case of approximately 3.91 in² (accept 3.75 to 4.05 in²) using the API 520 sizing equation with the given Kd, Kb, and Kc.
- **+8** Uses the 10% non-fire single-device accumulation (110% of MAWP) for the blocked-outlet contingency, setting its relieving pressure at approximately 290 psia, distinct from the fire-case basis.
- **+7** Derives the blocked-outlet mass relieving rate from Exhibit D's volumetric compressor capacity (303 ACFM) using the real-gas density relationship rho = (P1 x M) / (Z x R x T) evaluated at the accumulated blocked-outlet relieving pressure (approximately 289.7 psia), arriving at a density of approximately 2.31 lb/ft³ (accept 2.2 to 2.4 lb/ft³) and W_blocked of approximately 42,000 lb/hr (accept 40,000 to 44,000 lb/hr), rather than treating the ACFM figure as already a mass rate.
- **+8** Computes the required effective orifice area for the blocked-outlet contingency of approximately 1.54 in² (accept 1.4 to 1.7 in²) using the API 520 sizing equation with the derived mass rate and given physical properties.
- **+5** Names the specific standard (API 521, API 520, API 526, or ASME Section VIII) that supports each material step, rather than leaving the authority for a calculation unstated. Naming a more precise provision, section, or edition is a plus but is not required, and no credit should be withheld for a missing or different edition/clause number than the reference solution's - those specifics are not disclosed anywhere in the respondent-visible materials, and the task states no external research is expected; the edition and clause numbers in the reference solution are for the grader's own verification, not a respondent-facing requirement.

*Analytical Reasoning*
- **+9** Correctly identifies that the fire case governs (approximately 3.91 in² required versus approximately 1.54 in² for blocked outlet) rather than assuming the fire case governs without comparison, or incorrectly concluding the blocked-outlet case governs.
- **+9** Compares the governing required area to the API 526 standard orifice table, correctly concludes the installed M orifice (3.60 in²) is undersized, and identifies N (4.34 in²) as the smallest adequate standard designation, rather than rounding to the nearest size.
- **+8** Recognizes that TSV-204B's rating (8.2 gpm, a liquid volumetric flow rate) is not the same physical quantity as the governing vapor relief requirement, that no valid conversion between them is available, and therefore that TSV-204B has no established vapor relieving capacity to credit, rather than treating this as a citation-dependent crediting rule.
- **+7** States a numeric total credited capacity for the governing contingency from the vessel's installed devices as a group (approximately 107,600 lb/hr, accept 104,000 to 111,000 lb/hr, all of it from PSV-204A), not just a qualitative crediting conclusion, and compares it to the required rate from part 1.
- **+6** Recommends a specific, concrete resolution before the next turnaround that would close the approximately 9,300 lb/hr shortfall (upsizing PSV-204A to at least an N orifice, or adding a properly sized second vapor relief device) rather than leaving the finding unresolved or proposing to restore fireproofing that Exhibit B states will not happen before the turnaround.
- **-7** Applies the fire-case accumulation basis (21%/121%) to the blocked-outlet contingency, or otherwise uses one accumulation basis for both contingencies instead of recognizing they require different bases.
- **-5** Computes the blocked-outlet relieving density using the 250 psig set pressure or MAWP (rather than the accumulated 289.7 psia relieving pressure), or otherwise treats Exhibit D's 303 ACFM figure as already a mass flow rate without converting it via density.
- **-6** Treats the liquid level as measured from the top, uses the minor (dry) arc instead of the wetted (major) arc, or otherwise inverts the wetted-area geometry, materially understating or overstating the wetted area.
- **-5** Concludes the blocked-outlet contingency governs, or sizes PSV-204A to the blocked-outlet requirement instead of the larger fire-case requirement.
- **-4** Sums PSV-204A's and TSV-204B's rated capacities to argue the combined capacity is adequate for the governing contingency, instead of recognizing TSV-204B does not contribute to the vapor relief requirement.

*Structure and Formatting*
- **-3** Does not present the wetted-area geometry, both contingencies' sizing calculations, the governing-case determination, the orifice-sizing comparison, and the relief-device-crediting conclusion as separately identifiable parts of the memo.
- **-3** Reports a wetted area, required orifice area, or coefficient C without at least two to three significant figures, or omits units, in a way that obscures whether the installed orifice is adequate or which contingency governs.
