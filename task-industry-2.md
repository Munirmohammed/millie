## Industry and Engineering

**Domain / specialty:** Industry (structural engineering, existing steel framing capacity and serviceability review)

### Task details

**Situation.** You are a structural engineer retained by Brightwater Manufacturing, Inc. to review whether an existing steel mezzanine beam can support a new packaging machine the production team wants installed at its midspan. The beam's existing bolted shear connections were designed for the mezzanine's original loading and have not been re-evaluated for this equipment.

**Recipient / work product.** Write a structural adequacy memo to Brightwater's Facilities Engineering Manager (two to three pages is sufficient) that reaches a supported conclusion on whether the existing beam and its connections can support the new packaging machine as currently configured, and what would need to change if they cannot.

**Permitted resources.** Use only the exhibits below. All beam, connection, and equipment figures are specific to this facility and complete as given; no external research is needed to fill in a number. You may and should rely on your own knowledge of AISC 360 (Specification for Structural Steel Buildings) and standard mechanics of materials to identify and apply the governing provisions and formulas, and should cite the specific provisions you rely on.

**Assumptions.** Steel modulus of elasticity E = 29,000 ksi. Treat every figure in the exhibits as accurate and final.

### Prompt

1. Determine the design (LRFD) shear strength of the existing bolt group at the beam-to-column connection and state whether it is adequate for the new total factored reaction. Cite the specific AISC 360 provisions you rely on for the bolt shear stress and resistance factor.
2. Determine the beam's deflection at midspan under the packaging machine's operating point load and compare it to the manufacturer's serviceability requirement in Exhibit B. State whether the requirement is met.
3. State your overall conclusion on whether the beam and its connections, as currently configured, are acceptable for supporting this equipment, and explain what the answers to Questions 1 and 2 individually do and do not establish about that conclusion.
4. Recommend what would need to happen before the packaging machine can be installed as planned.

Show the arithmetic and cite the governing provision behind every material step, not just the final numbers.

### Evidence

**Exhibit A: existing beam and connection data sheet (fictional, Brightwater Manufacturing mezzanine structural records)**

Beam: W16x26, ASTM A992 (Fy = 50 ksi, Fu = 65 ksi), simply supported, span 18 ft (216 in) between column supports. Section properties: Ix = 301 in^4, Sx = 38.4 in^3.

Existing beam-to-column connection: single-plate shear tab, 3/8 in thick ASTM A36 plate (Fu = 58 ksi), welded to the column flange, bolted to the beam web with 3 - 3/4 in diameter ASTM A325-N bolts (bearing-type connection, threads included in the shear plane, single shear). Bolt spacing and edge distances meet AISC 360 Table J3.4 minimum requirements, and both the beam web and shear tab bearing and tearout capacities exceed the bolt group's shear capacity, so bolt shear governs the connection's design strength.

**Exhibit B: proposed packaging machine installation basis (fictional, current structural calculation package)**

Combined factored reaction at each beam-to-column connection after adding the new packaging machine (includes the beam's existing dead and live load reaction plus the machine's factored point load contribution, per the current structural calculation package): 16.0 kips.

Packaging machine manufacturer's installation specification: the beam supporting the machine must not deflect more than L/600 under the machine's operating point load, applied at the machine's mounting location at beam midspan, to remain within the manufacturer's vibration and alignment tolerance. The machine's operating point load (service level, as provided by the equipment vendor) is 18.0 kips.

### Reference solution

**1. Connection shear strength.** Per AISC 360 Table J3.2, the nominal shear stress for a 3/4 in diameter ASTM A325-N bolt in a bearing-type connection with threads included in the shear plane is Fnv = 54 ksi. The bolt area is Ab = (pi/4) x (0.75)^2, approximately 0.442 in^2. Per AISC 360 Section J3.6, the resistance factor for bolts in shear is phi = 0.75. For the 3-bolt group in single shear:

phi Rn = phi x n x Fnv x Ab = 0.75 x 3 x 54 x 0.442, approximately 53.7 kips.

The demand from Exhibit B is Ru = 16.0 kips, well below phi Rn of approximately 53.7 kips (about 30 percent utilization). The connection is adequate in shear by a wide margin.

**2. Beam deflection.** For a simply supported beam under a point load P at midspan, deflection is delta = P L^3 / (48 E I). With P = 18.0 kips, L = 216 in, E = 29,000 ksi, and I = 301 in^4:

delta = 18.0 x 216^3 / (48 x 29,000 x 301), approximately 0.433 in.

The manufacturer's limit is L/600 = 216/600 = 0.36 in. The calculated deflection of approximately 0.433 in exceeds the 0.36 in limit by about 20 percent. The serviceability requirement is not met.

**3. Overall conclusion.** The connection strength check in Question 1 and the deflection check in Question 2 are independent limit states. Passing the strength check establishes only that the bolted connection will not fail under the factored load; it says nothing about whether the beam is stiff enough to keep the equipment within its vibration and alignment tolerance under service-level load. Here, the connection passes with a wide margin, but the beam does not meet the manufacturer's deflection requirement. The installation is therefore not acceptable as currently configured, notwithstanding the adequate connection.

**4. Recommendation.** Before installing the packaging machine, Brightwater should pursue one of: adding an intermediate support (for example, a kicker brace or a new column) near or under the machine's mounting location to reduce the effective span and bring deflection within L/600; replacing or reinforcing the W16x26 with a stiffer section (a larger moment of inertia reduces deflection proportionally); or relocating the machine to a stiffer bay or a location closer to an existing support. Any of these should be verified by recalculating the deflection for the revised configuration before installation proceeds. Simply confirming the connection is adequate, without addressing deflection, would not resolve the manufacturer's requirement.

**Acceptable alternatives.** Any of the three remedial approaches in part 4 (added support, stiffer section, relocation), or an equivalent measure that is shown to bring the calculated deflection to L/600 or better, is an acceptable recommendation. Presenting the deflection result to three significant figures (for example, 0.43 in) rather than more precise rounding is acceptable and does not change the conclusion.

**Calibrated uncertainty.** High confidence in both calculations, which follow directly from AISC 360 Table J3.2/Section J3.6 and standard beam deflection mechanics using the given section properties and loads. No material uncertainty affects the bottom-line conclusion that deflection, not connection strength, governs.

**Known limitations.** Assumes Exhibit A's statement that bearing and tearout capacities exceed bolt shear capacity is correct, so that the detailed bolt-hole geometry does not need to be independently checked; assumes the 16.0 kip factored reaction and 18.0 kip service point load in Exhibit B are correctly derived from the underlying load combination and equipment data, which is outside the scope of this assignment to re-derive.

### Rubric

*Factual Information*
- **+9** Computes the bolt group's design shear strength using Fnv = 54 ksi (AISC 360 Table J3.2, A325-N, threads included), Ab for a 3/4 in bolt, and phi = 0.75 (AISC 360 Section J3.6), arriving at phi Rn of approximately 53.7 kips (accept 52 to 55 kips).
- **+7** Cites the specific AISC 360 provisions relied upon (Table J3.2 for the nominal shear stress, Section J3.6 for the resistance factor) rather than an unstated or generic authority.
- **+7** Concludes the connection is adequate, correctly comparing the 16.0 kip demand to the approximately 53.7 kip design strength.
- **+9** Computes beam deflection at midspan using delta = P L^3 / (48 E I) with the given P, L, E, and I, arriving at delta of approximately 0.43 in (accept 0.41 to 0.45 in).
- **+6** Correctly applies the L/600 deflection limit (0.36 in) and concludes the calculated deflection exceeds it.

*Analytical Reasoning*
- **+9** Independently recognizes that the connection strength result does not establish overall acceptability, correctly identifying deflection as the governing, failing constraint despite the connection passing by a wide margin.
- **+6** Recommends a specific, credible remedial measure (added intermediate support, a stiffer section, or relocation) rather than leaving the finding unresolved.
- **-5** Concludes the installation is acceptable solely because the connection passes the strength check, without addressing or checking deflection.
- **-4** Uses double shear, the wrong number of bolts, or otherwise misapplies the bolt group configuration when Exhibit A explicitly states the connection is single shear with 3 bolts.

*Structure and Formatting*
- **-3** Does not present the connection strength calculation and the deflection calculation as separately identifiable parts of the memo.
- **-3** Reports phi Rn, delta, or the deflection limit without at least two to three significant figures or without units, in a way that obscures whether each requirement is met.
