## Industry and Engineering

**Domain / specialty:** Industry (process/mechanical engineering, pressure relief system design)

### Task details

**Situation.** You are a process engineer at Meridian Gas Processing, LLC, at its Ridgeline Fractionation Terminal. A process hazard analysis (PHA) revalidation just found that fireproof insulation on vessel V-204, the propane product surge drum, has degraded beyond repair and will not be replaced before the next scheduled turnaround, roughly 18 months out. The PHA team recalculated the fire-case heat input on the assumption that the vessel must now be treated as bare (uninsulated) and has asked you to confirm whether the vessel's existing overpressure protection remains adequate.

**Recipient / work product.** Write a relief system adequacy memo to the site's Process Safety Manager (two to three pages is sufficient) that reaches a supported conclusion on whether the currently installed pressure relief valve on V-204 is adequately sized for the revised fire case, and what should happen before the next turnaround if it is not.

**Permitted resources.** Use the exhibits below for every facility- and equipment-specific figure (vessel, valve, and process-simulation data); no external research is needed or expected to obtain any of those. Separately, you are expected to know and apply, from your own professional knowledge and without needing to look them up, the general industry reference values and methodology in API Standard 520 (Sizing, Selection, and Installation of Pressure-Relieving Devices), API Standard 521 (Pressure-Relieving and Depressuring Systems), API Standard 526 (Flanged Steel Pressure Relief Valves, including its standard orifice designation areas), and ASME Boiler and Pressure Vessel Code Section VIII, Division 1. Cite the specific provision behind each material step where a specific provision exists and is available to you; where you rely on a standard's general methodology rather than a single numbered clause, name the standard and edition you are relying on.

**Assumptions.** All pressures are gauge unless stated as absolute (psia). Atmospheric pressure is 14.7 psia. Treat every figure in the exhibits as accurate and final.

### Prompt

1. Determine the required fire-case relieving vapor rate for V-204 using the API 521 heat-input methodology and the wetted-area basis in Exhibit B. Show the heat-input calculation and the resulting mass relieving rate.
2. Using the API 520 Part I vapor/gas sizing equation, determine the required effective relief orifice area for the fire case. Derive the API 520 coefficient C from the given specific heat ratio, and state the relieving pressure you use and the accumulation basis that supports it.
3. Compare the required effective orifice area to the standard API 526 orifice designation currently installed on PSV-204A (Exhibit A) and state whether PSV-204A remains adequate for the revised fire case. If it is not adequate, identify the smallest standard API 526 orifice designation that would be.
4. Independent of the PSV-204A sizing analysis, determine the total fire-case vapor relief capacity that may be credited to V-204's installed relief devices as a group (Exhibit A), accounting for each device's rated service, and identify which device or devices that credited total comes from.
5. Recommend what should be done about V-204's overpressure protection given your findings, and identify what would need to happen before the next turnaround.

Show the arithmetic behind every material step, not just the final numbers, and name the standard, edition, and specific provision (where one exists) that supports each step.

### Evidence

**Exhibit A: V-204 relief device data sheet (fictional, Ridgeline Fractionation Terminal, current as of this PHA revalidation)**

Vessel: V-204, Propane Product Surge Drum. Horizontal, ASME Section VIII Division 1. Maximum allowable working pressure (MAWP): 250 psig.

Installed relief devices:
- PSV-204A: conventional spring-loaded pressure relief valve, propane vapor service. Set pressure: 250 psig (at MAWP). ASME-certified effective coefficient of discharge, Kd: 0.975. Nameplate effective orifice area matches API 526 standard designation M (3.60 in²). Discharges to the terminal's low-pressure atmospheric relief header; the relief header hydraulics study confirms built-up backpressure at this device's rated flow is low enough that no backpressure correction is required (Kb = 1.0). No rupture disk is installed upstream or in combination with PSV-204A (Kc = 1.0).
- TSV-204B: thermal relief valve, 3/4 in x 1 in, installed on the block valve segment between the vessel outlet isolation valve and the downstream check valve. Set pressure: 275 psig. Manufacturer-rated capacity: 8.2 gpm.

**Exhibit B: PHA revalidation basis for the fire case on V-204 (fictional, current revalidation)**

Wetted surface area of V-204 exposed to a pool fire, calculated per API 521 from vessel geometry and normal liquid level up to 25 ft above grade: 1,850 ft².

Environment factor: the site's mechanical integrity assessment confirms the fireproof insulation on V-204 is degraded beyond repair and will not be restored before the next turnaround; for this revalidation, V-204 is to be evaluated as a bare vessel (environment factor F = 1.0).

Site fire protection basis: the terminal's fire water and area drainage design was assessed against API 521's criteria for adequate drainage and firefighting capability, and both are confirmed present for the V-204 area.

**Exhibit C: Process simulation physical property basis for the fire case (fictional, Ridgeline Fractionation Terminal process simulation model)**

At the fire-case relieving conditions for V-204:
- Relieving temperature: 605 degrees Rankine (145 degrees Fahrenheit)
- Latent heat of vaporization of propane at relieving conditions: 85 Btu/lb
- Molecular weight of propane: 44.1 lb/lbmol
- Ideal-gas specific heat ratio (k = Cp/Cv) of propane vapor at relieving conditions: 1.13
- Compressibility factor (Z) at relieving conditions: 0.85

### Reference solution

**1. Required fire-case relieving rate.** Per API Standard 521, Sixth Edition (January 2014), Section 4.4.13.2.4, the heat-input equation for a vessel exposed to pool fire with adequate drainage and firefighting equipment is Q = 21,000 x F x A_ws^0.82, where A_ws is the wetted surface area in ft². With F = 1.0 (bare vessel, per Exhibit B) and A_ws = 1,850 ft²:

A_ws^0.82 = 1,850^0.82 is approximately 477.7.
Q = 21,000 x 1.0 x 477.7 is approximately 10,030,000 Btu/hr (about 10.0 x 10^6 Btu/hr).

The required relieving mass rate follows from W = Q / L, using the given latent heat of vaporization (Exhibit C, L = 85 Btu/lb):

W = 10,030,000 / 85 is approximately 118,000 lb/hr.

**2. Required effective orifice area.** Per API Standard 520 Part I, Tenth Edition (October 2020), Section 5.6.3, the critical-flow sizing equation for vapor/gas service is:

A = W / (C x Kd x P1 x Kb x Kc) x sqrt(T x Z / M)

The coefficient C is a function of the ideal-gas specific heat ratio k: C = 520 x sqrt(k x (2/(k+1))^((k+1)/(k-1))). With k = 1.13 (Exhibit C):

(k+1)/(k-1) = 2.13/0.13, approximately 16.38. (2/(k+1))^16.38 = (0.9390)^16.38 is approximately 0.356. k x 0.356 is approximately 0.403. sqrt(0.403) is approximately 0.635. C = 520 x 0.635 is approximately 330.

The relieving pressure is set by the fire-case accumulation. Per ASME BPVC Section VIII Division 1 (2023 Edition), UG-125, and API Standard 521, Sixth Edition (January 2014), the maximum accumulation for fire or other unexpected external heat source exposure is 21% above MAWP (that is, 121% of MAWP), regardless of the number of relief devices installed - this is a materially higher accumulation than the 110% (10%) basis that applies to a single device on a non-fire contingency, and using the non-fire basis here would understate the relieving pressure and overstate the required area. With MAWP = Pset = 250 psig:

P1 (gauge) = 250 x 1.21 = 302.5 psig. P1 (absolute) = 302.5 + 14.7 = 317.2 psia.

Substituting W = 118,000 lb/hr, C = 330, Kd = 0.975, P1 = 317.2 psia, Kb = 1.0, Kc = 1.0, T = 605 R, Z = 0.85, M = 44.1 lb/lbmol:

Denominator: 330 x 0.975 x 317.2 x 1.0 x 1.0 is approximately 102,053.
sqrt(T x Z / M) = sqrt(605 x 0.85 / 44.1) = sqrt(11.666) is approximately 3.415.
A = (118,000 / 102,053) x 3.415 is approximately 3.95 in².

**3. Adequacy of PSV-204A.** Per API Standard 526, Seventh Edition (September 2017), Table 1, the standard orifice designations bracketing this requirement are M (3.60 in²) and N (4.34 in²). The required area of approximately 3.95 in² exceeds the certified area of the installed M orifice (3.60 in²), so PSV-204A is undersized for the revised fire case. The smallest standard API 526 orifice designation that meets the requirement is N (4.34 in²); the correct practice is to select the next standard size that is at or above the required area, not the nearest size in either direction.

**4. Credit from TSV-204B, and the total credited fire-case capacity.** TSV-204B's manufacturer rating (Exhibit A) is 8.2 gpm, a liquid volumetric flow rate for its liquid thermal-relief duty. The fire-case requirement from part 1 is a vapor mass flow rate (lb/hr). These are not the same physical quantity, and there is no valid, stated basis in Exhibit A (no liquid density, no vapor-equivalent rating, no test or certification for vapor service) to convert TSV-204B's liquid gpm rating into any vapor lb/hr capacity. Because no such conversion exists, TSV-204B has no established or certifiable vapor relieving capacity to credit at all, independent of whatever contingency it was intended for. Its contribution to the fire-case vapor relief total is therefore zero, not because of a crediting rule that excludes it, but because it has no measurable vapor capacity in the first place.

The only capacity that may be credited toward the fire case is PSV-204A's, at its installed M orifice area (3.60 in²). Solving the same API 520 sizing equation for W with A = 3.60 in² and the other terms unchanged (C = 330, Kd = 0.975, P1 = 317.2 psia, Kb = Kc = 1.0, T = 605 R, Z = 0.85, M = 44.1 lb/lbmol):

W_credited = A x (C x Kd x P1 x Kb x Kc) / sqrt(T x Z / M) = 3.60 x 102,053 / 3.415 is approximately 107,600 lb/hr.

Total credited fire-case vapor relief capacity for V-204 (PSV-204A plus TSV-204B) is therefore approximately 107,600 lb/hr, against a required rate of approximately 118,000 lb/hr from part 1 - a shortfall of roughly 10,400 lb/hr, or about 91 percent of the required rate. This numeric shortfall is consistent with, and independently confirms, the orifice-area conclusion in part 3.

**5. Recommendation.** The approximately 10,400 lb/hr (about 9 percent) shortfall must be resolved before the next turnaround, since Exhibit B establishes that the fireproofing will not be restored before then and so cannot be relied upon to close the gap. The most direct path is replacing PSV-204A (or upsizing its trim) to a device certified to at least an API 526 N orifice (4.34 in²). An equally acceptable path is adding a properly sized second vapor relief device to make up the shortfall. Whichever path is chosen, the revised configuration should be re-verified by recalculating the fire-case requirement against the resulting installed or credited capacity. TSV-204B should remain in service for its intended liquid thermal-relief function but should not be relied upon, and should not be represented in the site's relief system documentation, as contributing to the fire-case vapor relief capacity of V-204.

**Acceptable alternatives.** Either remedial path in part 5 (upsizing PSV-204A, or adding a second properly sized device), or an equivalent measure shown to close the approximately 10,400 lb/hr shortfall without relying on restoring fireproofing before the next turnaround, is an acceptable recommendation. A response that separately verifies the wetted-area calculation behind Exhibit B's 1,850 ft² figure is acceptable additional rigor but is not required, since that figure is given as the PHA's own calculated basis. A response that expresses the part 4 shortfall as a percentage of required capacity rather than, or in addition to, an absolute lb/hr figure is an acceptable equivalent presentation.

**Calibrated uncertainty.** High confidence in the fire-case accumulation basis, the sizing equation, and the orifice comparison, which follow directly from API 520/521 and the given facts. Moderate tolerance is appropriate on the final numeric area (approximately 3.8 to 4.1 in² depending on rounding of C and the intermediate powers), since it does not change which standard orifice is required.

**Known limitations.** Assumes Exhibit C's process-simulation physical properties are representative of actual fire-case relieving conditions for V-204 and that no other credited relief scenario (for example, blocked outlet or control failure) governs a larger required area than the fire case; a complete relief system review would also confirm the fire case is in fact the governing contingency for this vessel, which is outside the scope of this assignment.

### Rubric

*Factual Information*
- **+10** Applies the API 521 fire-case heat-input equation Q = 21,000 x F x A_ws^0.82 with F = 1.0 and A_ws = 1,850 ft², arriving at Q of approximately 10.0 x 10^6 Btu/hr (accept 9.8 to 10.3 x 10^6 Btu/hr).
- **+7** Converts Q to the required relieving mass rate using W = Q / L with the given latent heat, arriving at W of approximately 118,000 lb/hr.
- **+8** Correctly derives or applies the API 520 coefficient C for k = 1.13, arriving at C of approximately 330 (accept 325 to 335).
- **+8** Uses the fire-case accumulation of 21% above MAWP (121% of MAWP) per ASME Section VIII UG-125 / API 521 to set the relieving pressure at approximately 317 psia, rather than the 110% single-device non-fire basis.
- **+7** Computes the required effective orifice area of approximately 3.95 in² (accept 3.8 to 4.1 in²) using the API 520 sizing equation with the given Kd, Kb, and Kc.

*Analytical Reasoning*
- **+9** Compares the computed required area to the API 526 standard orifice table, correctly concludes the installed M orifice (3.60 in²) is undersized, and identifies N (4.34 in²) as the smallest adequate standard designation, rather than rounding to the nearest size.
- **+8** Recognizes that TSV-204B's rating (8.2 gpm, a liquid volumetric flow rate) is not the same physical quantity as the fire-case requirement (a vapor mass flow rate), that no valid conversion between them is available, and therefore that TSV-204B has no established vapor relieving capacity to credit, rather than treating this as a citation-dependent crediting rule.
- **+7** States a numeric total credited fire-case vapor relief capacity from the vessel's installed devices as a group (approximately 107,600 lb/hr, accept 104,000 to 111,000 lb/hr, all of it from PSV-204A), not just a qualitative crediting conclusion, and compares it to the required rate from part 1.
- **+6** Recommends a specific, concrete resolution before the next turnaround that would close the approximately 10,400 lb/hr shortfall (upsizing PSV-204A to at least an N orifice, or adding a properly sized second vapor relief device) rather than leaving the finding unresolved or proposing to restore fireproofing that Exhibit B states will not happen before the turnaround.
- **-5** Uses the 110% non-fire single-device accumulation basis instead of the 121% fire-case basis, or otherwise conflates the two accumulation categories.
- **-4** Sums PSV-204A's and TSV-204B's rated capacities to argue the combined capacity is adequate for the fire case, instead of recognizing TSV-204B does not contribute to the fire vapor relief requirement.

*Structure and Formatting*
- **-3** Does not present the heat-input calculation, the orifice-sizing calculation, and the relief-device-crediting conclusion as separately identifiable parts of the memo.
- **-3** Reports the required orifice area or the coefficient C without at least two to three significant figures, or omits units, in a way that obscures whether the installed orifice is adequate.
