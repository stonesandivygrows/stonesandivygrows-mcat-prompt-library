# Zero-Math Equation Relational Rules — Full MCAT Equation Sheet
*Date: 2026-07-22 | Source: MCATalyst MCAT Equations (Color Coordinated)*

> **What is Zero-Math?** Instead of plugging in fake numbers, you read the *structure* of the equation to predict the answer. Every MCAT equation has a relational skeleton — a direction, a boundary, or a dominant term — that you can extract without arithmetic.

---

## The Four Zero-Math Frameworks

| Framework | Core Idea | Trigger Phrase |
|---|---|---|
| **Dominant Term** | One variable >> the other → simplify by dropping the smaller | "if [S] is very low / very high…" |
| **Multiplier Factor** | Set unchanged variables = 1, track only what changes | "if X doubles / triples…" |
| **Structural Boundary** | Math limits (never negative, always < smallest, etc.) eliminate wrong answers | "which of the following could be…" |
| **Inequality Setup** | Set equation > 0 or < 0 and rearrange for the condition | "under what conditions is… spontaneous?" |

---

## GENERAL CHEMISTRY

### Concentration, Density, Molality, Mole Fraction
**Framework: Multiplier Factor**
- M = mol/L → double volume, halve molarity (inverse)
- ρ = m/V → double volume, halve density (inverse)
- X_A = n_A / n_total → adding more of A increases its mole fraction; adding another component decreases it
- Molality (mol/kg solvent) is **independent of temperature** — use it when T varies

### Dilutions — M₁V₁ = M₂V₂
**Framework: Multiplier Factor**
- Moles are conserved; only M and V change
- Double the volume → concentration halves (no math needed)
- ⚠️ Trap: V₂ is the **final total** volume, not the volume of water added

### Degrees of Unsaturation (IHD) — IHD = (2C + 2 + N − H − X) / 2
**Framework: Structural Boundary**
- Each ring or double bond = 1 IHD; triple bond = 2 IHD; benzene ring = 4 IHD
- IHD < 0 is impossible → use as answer-eliminator
- O and S do **not** appear in the formula (they contribute 0 to unsaturation)
- N adds 1 to numerator; each halogen (X) subtracts 1

### Percent Yield — % Yield = (Actual / Theoretical) × 100
**Framework: Structural Boundary**
- % Yield is always between 0 and 100% → eliminate any answer outside this range
- Limiting reagent determines theoretical yield

---

## EQUILIBRIUM

### Equilibrium Constant — Keq = [C]^c[D]^d / [A]^a[B]^b
**Framework: Structural Boundary + Inequality Setup**
- **Keq >> 1** → products strongly favored (reaction goes nearly to completion)
- **Keq << 1** → reactants strongly favored (very little product forms)
- **Keq ≈ 1** → neither side is strongly favored; significant concentrations of both
- Keq expression: pure solids and liquids are **excluded** (activity = 1)
- ⚠️ Trap: Keq changes with temperature; it does **not** change with concentration or pressure

### Reaction Quotient — Q = [C]^c[D]^d / [A]^a[B]^b (at non-equilibrium)
**Framework: Inequality Setup**
- Q < Keq → not enough products → reaction shifts **forward** (right)
- Q > Keq → too many products → reaction shifts **backward** (left)
- Q = Keq → system is at equilibrium; no net change

### ΔG° Relation to Keq — ΔG° = −RTlnKeq
**Framework: Inequality Setup**
- Keq > 1 → lnKeq > 0 → ΔG° < 0 (spontaneous under standard conditions)
- Keq < 1 → lnKeq < 0 → ΔG° > 0 (non-spontaneous under standard conditions)
- Rewritten: Keq = e^(−ΔG°/RT) → large negative ΔG° → very large Keq

### Arrhenius Equation — k = Ae^(−Ea/RT)
**Framework: Dominant Term (exponent sensitivity)**
- Ea is in the **exponent** → small changes in T or Ea have exponential effects on k
- ↑ T → more molecules exceed Ea → k increases (exponentially, not linearly)
- ↑ Ea → fewer molecules exceed the barrier → k decreases
- Catalysts lower Ea → increase k; they do **not** change ΔG or Keq

### Rate Law — rate = k[A]^x[B]^y
**Framework: Multiplier Factor**
- Hold [B] constant; change [A] by a factor → observe rate change
  - Rate doubles when [A] doubles → first order in A (x = 1)
  - Rate quadruples when [A] doubles → second order in A (x = 2)
  - Rate unchanged when [A] doubles → zero order in A (x = 0)
- Overall order = x + y
- ⚠️ Orders are determined experimentally; **never** read them from the balanced equation (unless it's an elementary step)

### Integrated Rate Laws
**Framework: Structural Boundary (graph shape)**
- **0th order**: [A] vs t → straight line (slope = −k)
- **1st order**: ln[A] vs t → straight line (slope = −k)
- **2nd order**: 1/[A] vs t → straight line (slope = +k)
- Strategy: identify which plot is linear → that tells you the order → pick the right law

---

## THERMODYNAMICS

### Gibbs Free Energy — ΔG = ΔH − TΔS
**Framework: Inequality Setup (Spontaneity Matrix)**

| ΔH | ΔS | Spontaneous? |
|---|---|---|
| − | + | Always (both terms favor ΔG < 0) |
| + | − | Never (both terms push ΔG > 0) |
| − | − | Only at **low T** (ΔH term dominates when T is small) |
| + | + | Only at **high T** (TΔS term dominates when T is large) |

- Spontaneity requires ΔG < 0
- ⚠️ Trap: "endothermic = non-spontaneous" is **false** if ΔS > 0 and T is high

### Internal Energy — ΔU = Q − W
**Framework: Inequality Setup**
- Q > 0 → heat flows **into** system → raises internal energy
- W = PΔV > 0 → system does work on surroundings → lowers internal energy
- Adiabatic (Q = 0): ΔU = −W; compression raises T, expansion lowers T

### Work — W = −PΔV
**Framework: Inequality Setup**
- Expansion (ΔV > 0): W by system > 0 → system loses energy to surroundings
- Compression (ΔV < 0): W on system → system gains energy

### Heat — q = mcΔT (no phase change) / q = mL (phase change)
**Framework: Multiplier Factor + Structural Boundary**
- Double mass → double heat needed (direct proportion)
- Double ΔT → double heat needed (direct proportion)
- **During phase change: ΔT = 0 even though heat is absorbed** (structural boundary — T is flat on a heating curve)
- ⚠️ Never use q = mcΔT during a phase change; switch to q = mL

### Entropy — S = Q/T; ΔS = Q/T
**Framework: Inequality Setup + Structural Boundary**
- ΔS > 0: disorder increases (mixing, dissolving, solid → liquid → gas, breaking into more moles of gas)
- ΔS < 0: disorder decreases (forming polymer, gas → liquid → solid, fewer moles of gas product)
- Higher temperature → same heat input produces **less** entropy increase (1/T relationship)

### Hess's Law — ΔH_rxn = ΣΔH_f°(products) − ΣΔH_f°(reactants)
**Framework: Structural Boundary**
- ΔH_f° of any **element in its standard state = 0** (eliminate answers that use nonzero values)
- Reverse a reaction → flip the sign of ΔH
- Multiply a reaction → multiply ΔH by same factor

---

## GASES

### Ideal Gas Law — PV = nRT
**Framework: Multiplier Factor (Combined Gas Law when n constant)**
- P₁V₁/T₁ = P₂V₂/T₂ → cancel whatever is held constant
- At constant T: P↑ → V↓ (Boyle's: PV = constant)
- At constant P: T↑ → V↑ (Charles's: V/T = constant)
- Structural Boundary: n = 1 mol at STP → V = 22.4 L (anchor value)

### Dalton's Law — P_total = P_A + P_B + P_C + ...
**Framework: Structural Boundary**
- Partial pressure = X_A × P_total → fraction of mole fraction times total pressure
- Sum of all partial pressures = total pressure (always)

### Raoult's Law — P_A = X_A × P_A°
**Framework: Multiplier Factor**
- X_A = 0 → no vapor pressure from A (pure solvent: X = 1 → full vapor pressure)
- Adding solute decreases X_solvent → decreases vapor pressure (colligative property)

### Henry's Law — C = kP_A
**Framework: Multiplier Factor**
- Double partial pressure → double dissolved gas concentration (direct proportion)
- ↑ P → ↑ gas solubility (deep sea diving, carbonated beverages)

### Graham's Law — rate₁/rate₂ = √(m₂/m₁)
**Framework: Multiplier Factor + Structural Boundary**
- Lighter gas effuses/diffuses **faster**
- Rate is proportional to 1/√M → quadruple the molar mass → half the rate
- ⚠️ Structural Boundary: heavier gas always has a slower rate (can eliminate answers immediately)

### Kinetic Energy of Gas — KE = ½mv² = (3/2)kT
**Framework: Multiplier Factor**
- Average KE depends **only on T** (not on identity of gas)
- At same T, all gases have same average KE
- Heavier gas → same KE → lower speed (KE = ½mv² → v = √(2KE/m))

---

## SOLUBILITY

### Ksp — Ksp = [A^y+]^x × [B^x-]^y
**Framework: Structural Boundary**
- Ksp is only for **slightly soluble** salts (< ~0.1 M)
- Common ion effect: adding a common ion → shifts equilibrium left → decreases solubility
- Higher Ksp → more soluble (all else being equal)

### Colligative Properties (Boiling Point Elevation, Freezing Point Depression)
**Framework: Multiplier Factor**
- ΔT = iKm (i = van't Hoff factor, K = constant, m = molality)
- Electrolytes: i > 1 (NaCl → i = 2; MgCl₂ → i = 3)
- Double molality → double ΔT
- ⚠️ Trap: use **molality**, not molarity (temperature-independent)

### Osmotic Pressure — Π = iMRT
**Framework: Multiplier Factor**
- Direct proportion to concentration M, temperature T, and i
- Higher solute concentration → higher osmotic pressure

---

## ACIDS AND BASES

### pH and pOH
**Framework: Log Scaling Rules**
- pH = −log[H⁺] → pH 7 = [H⁺] = 10⁻⁷ M
- **Each unit change in pH = 10× change in [H⁺]**
- pH < 7 = acidic; pH > 7 = basic (at 25°C)
- If [H⁺] is between two powers of 10 → pH is between those two integers (no log needed)
  - Example: [H⁺] = 5 × 10⁻⁴ → pH is between 3 and 4

### pH + pOH = 14
**Framework: Structural Boundary**
- Know one → subtract from 14 → get the other
- pKa + pKb = 14 for a conjugate pair (always)
- KaKb = 10⁻¹⁴ (always, for conjugate pair)

### Henderson-Hasselbalch — pH = pKa + log([base]/[acid])
**Framework: Inequality Setup + Dominant Term**
- **[base] = [acid]** → log(1) = 0 → **pH = pKa** (buffer midpoint, maximum buffer capacity)
- **[base] > [acid]** → log > 0 → pH > pKa (solution is more basic than midpoint)
- **[acid] > [base]** → log < 0 → pH < pKa (solution is more acidic)
- Dominant Term: [base]/[acid] = 10 → log = +1 → pH = pKa + 1
- Dominant Term: [acid]/[base] = 10 → log = −1 → pH = pKa − 1
- ⚠️ Trap: "base" = A⁻ (conjugate base, not the added base); "acid" = HA

### pI of Amino Acids
**Framework: Averaging Rule (Structural Boundary)**
- Neutral AA: pI = (pKa1 + pKa2) / 2
- Acidic AA (Asp, Glu): average the **two lowest** pKa values
- Basic AA (Lys, Arg, His): average the **two highest** pKa values
- At pI, net charge = 0; above pI → negative charge; below pI → positive charge

---

## REDOX AND ELECTROCHEMISTRY

### ΔG = −nFE
**Framework: Inequality Setup**
- E > 0 → ΔG < 0 → **spontaneous** (galvanic cell; releases energy)
- E < 0 → ΔG > 0 → **non-spontaneous** (electrolytic cell; requires energy input)
- n = moles of electrons transferred; F = Faraday constant (given on test)
- Larger positive E → more negative ΔG → more spontaneous

### Cell Potential — E_cell = E_reduction,cathode − E_reduction,anode
**Framework: Structural Boundary**
- Cathode: **reduction** (gains electrons) → higher reduction potential
- Anode: **oxidation** (loses electrons) → lower reduction potential
- **OIL RIG**: Oxidation Is Loss (anode); Reduction Is Gain (cathode)
- **RED CAT**: Reduction at Cathode
- Always: E_cell = E_cathode − E_anode (both expressed as reduction potentials)

### Nernst Equation — E = E° − (RT/nF)logQ
**Framework: Structural Boundary + Inequality Setup**
- Standard conditions (Q = 1): E = E° (no correction needed)
- Q > 1 → logQ > 0 → E < E° (cell voltage decreases; products accumulating)
- Q < 1 → logQ < 0 → E > E° (cell voltage increases)
- At equilibrium: E = 0 → logQ = logKeq (boundary condition)

---

## FLUIDS

### Pressure — P = F/A; Gauge: P_G = ρgh; Absolute: P_abs = P_atm + P_G
**Framework: Multiplier Factor**
- Double depth → double gauge pressure
- Absolute pressure always includes atmospheric (~1 atm = 101 kPa)
- ⚠️ Absolute pressure can never be zero at any depth

### Buoyant Force — F_b = ρ_fluid × V_displaced × g
**Framework: Structural Boundary**
- Object floats if ρ_object < ρ_fluid
- **Fraction submerged = ρ_object / ρ_fluid** (no algebra: 80% of object submerged → density is 80% of fluid)
- F_b depends on **fluid density and displaced volume**, NOT on object's mass
- Apparent weight = actual weight − buoyant force

### Specific Gravity — SG = ρ_object / ρ_fluid
**Framework: Structural Boundary**
- SG < 1 → floats; SG > 1 → sinks
- SG also = % volume of object submerged (e.g., SG = 0.7 → 70% submerged)

### Continuity — A₁v₁ = A₂v₂
**Framework: Multiplier Factor**
- Cross-sectional area halves → velocity doubles
- **Area = πr²** → if radius halves → area decreases by 4× → velocity increases 4×
- ⚠️ Trap: area scales as r², not r — radius changes are amplified

### Bernoulli's Equation — P + ½ρv² + ρgh = constant
**Framework: Structural Boundary (conservation)**
- At same height: P↑ when v↓ (and vice versa) — **inverse relationship between P and v**
- **Venturi effect**: narrow tube → v↑ → P↓ (explains airplane wings, atomizers, carburetors)
- High fluid speed = LOW pressure (counterintuitive)
- Coupled with continuity: narrow → fast → low pressure; wide → slow → high pressure

### Poiseuille's Law — Flow resistance ∝ 1/r⁴
**Framework: Multiplier Factor (r⁴ rule)**
- Double radius → resistance decreases **16×** (2⁴ = 16)
- Halve radius → resistance increases **16×** (small vessel narrowing has massive effect)
- Flow rate ∝ r⁴ → arteriole vasoconstriction dramatically increases peripheral resistance
- ⚠️ Trap: thinking it scales linearly with r; it scales with r to the **4th power**

---

## CIRCUITS

### Series Circuit: R_total = R₁ + R₂ + ...; I = constant; V splits
**Framework: Structural Boundary**
- R_total is **always greater than the largest** individual resistor
- Adding any resistor in series → R_total increases → current decreases (V/R)
- Voltage "splits" across resistors (in proportion to resistance)

### Parallel Circuit: 1/R_total = 1/R₁ + 1/R₂ + ...; V = constant; I splits
**Framework: Structural Boundary**
- R_total is **always less than the smallest** individual resistor
- Adding any branch in parallel → R_total decreases → total current increases
- Two equal resistors in parallel: R_total = R/2 (shortcut)

### Capacitors (opposite behavior from resistors!)
**Framework: Structural Boundary**
- **Series**: 1/C_total = 1/C₁ + 1/C₂ → C_total **< smallest C** (same formula as parallel resistors)
- **Parallel**: C_total = C₁ + C₂ → C_total **> largest C** (same formula as series resistors)
- ⚠️ Trap: capacitors are the REVERSE of resistors in series/parallel addition

### Electrical Power — P = IV = I²R = V²/R
**Framework: Multiplier Factor**
- Double current (constant R): P = I²R → power increases **4×**
- Double voltage (constant R): P = V²/R → power increases **4×**
- Double resistance (constant V): P = V²/R → power **halves**
- Double resistance (constant I): P = I²R → power **doubles**

---

## ELECTRICITY AND MAGNETISM

### Coulomb's Law — F_q = kq₁q₂/r²
**Framework: Multiplier Factor (Inverse Square)**
- Double r → force decreases **4×** (1/r² relationship)
- Triple r → force decreases **9×**
- Double both charges → force increases **4×**
- ⚠️ Trap: force scales as 1/r², not 1/r

### Electric Field — E = kQ/r²; E = ΔV/d
**Framework: Structural Boundary + Multiplier Factor**
- E field points **away** from positive charges, **toward** negative charges
- Inside a conductor at equilibrium: **E = 0** (charges distribute on surface)
- E = kQ/r²: same inverse-square scaling as Coulomb's law
- Between parallel plates: E is **uniform** (independent of position)

### Voltage — V = IR (Ohm's Law); V = kQ/r
**Framework: Multiplier Factor**
- V = kQ/r: voltage scales as **1/r** (not 1/r²) — falls off slower than E field
- V is a **scalar** (no direction); E is a vector
- Voltage difference drives current: I = V/R

### Magnetic Force — F_B = qvBsinθ
**Framework: Structural Boundary**
- θ = 0° (parallel to field) → sinθ = 0 → **no magnetic force**
- θ = 90° (perpendicular to field) → maximum force
- Magnetic force does **no work** (always perpendicular to motion)
- ↑B or ↑I → smaller radius of circular motion (F_B = mv²/r)

---

## WAVES

### Wave Velocity — v = λf
**Framework: Multiplier Factor**
- In a given medium, **v is constant** (set by medium properties)
- If f doubles → λ halves (to keep v constant)
- λ and f are **inversely proportional** at constant v
- Energy of wave: E = hf → **higher frequency = higher energy**

### Decibels — dβ = 10log(I/I₀)
**Framework: Log Scaling (Multiplier Factor)**
- +10 dB → intensity ×10
- +20 dB → intensity ×100
- +30 dB → intensity ×1,000
- −10 dB → intensity ×0.1 (one-tenth)
- Count 10-dB steps; **no logarithm calculation needed**
- ⚠️ Trap: 20 dB is NOT twice as intense as 10 dB; it is 10× more intense

### Doppler Effect — f' = f(v ± v_observer)/(v ∓ v_source)
**Framework: Inequality Setup**
- **Moving CLOSER** → frequency increases (f' > f): numerator +, denominator −
- **Moving AWAY** → frequency decreases (f' < f): numerator −, denominator +
- Mnemonic: approaching → "squeeze" the wave → higher f
- ⚠️ Trap: confusing observer motion vs. source motion sign convention

### Open vs. Closed Pipe Standing Waves
**Framework: Structural Boundary**
- **Open pipe** (both ends open): f_n = nv/2L, n = 1, 2, 3… (ALL harmonics)
- **Closed pipe** (one end closed): f_n = nv/4L, n = 1, 3, 5… (**ODD harmonics only**)
- Closed pipe CANNOT produce even harmonics → use to eliminate answer choices
- Fundamental frequency of closed pipe (n=1) is at 4L (longer effective wavelength → lower frequency)

### Beat Frequency — f_b = |f₁ − f₂|
**Framework: Structural Boundary**
- If two frequencies are the same → 0 beats (silence between them)
- Larger frequency difference → faster beating
- No math: just take the absolute difference

---

## OPTICS

### Index of Refraction — n = c/v
**Framework: Structural Boundary**
- n ≥ 1 always (light slows down in any medium → n must be ≥ 1)
- Higher n → slower light speed → more bending toward normal
- Air/vacuum: n = 1; water: n ≈ 1.33; glass: n ≈ 1.5

### Snell's Law — n₁sinθ₁ = n₂sinθ₂
**Framework: Inequality Setup**
- Going low n → high n (e.g., air to glass): sinθ decreases → θ₂ < θ₁ → bends **toward** normal
- Going high n → low n (e.g., glass to air): θ₂ > θ₁ → bends **away** from normal
- Critical angle exists only when going from **high n to low n**; beyond θ_c → total internal reflection
- sin θ_c = n₂/n₁ (always: n₂ < n₁)

### Lens/Mirror Equation — 1/f = 1/i + 1/o
**Framework: Structural Boundary + Sign Convention**

**Sign rule for image distance i:**
- i > 0 → real image (forms on far side of lens from object; inverted)
- i < 0 → virtual image (forms on same side as object; upright)

**Image type rule by object position (converging lens):**
- Object beyond 2f → real, inverted, reduced
- Object at 2f → real, inverted, same size
- Object between f and 2f → real, inverted, magnified
- Object inside f → virtual, upright, magnified
- ⚠️ No math needed if you memorize these position boundaries

**Mnemonics:**
- **RIO**: Real images are Inverted, On the opposite side of the lens
- **VUV**: Virtual images are Upright, on the same side as object (for lenses)

### Magnification — M = −i/o = h_i/h_o
**Framework: Inequality Setup**
- M > 0 → upright image (virtual for converging lens)
- M < 0 → inverted image (real for converging lens)
- |M| > 1 → magnified; |M| < 1 → reduced; |M| = 1 → same size

### Lens Power — P = 1/f; Total P = P₁ + P₂ + ...
**Framework: Multiplier Factor**
- Shorter focal length → stronger lens → higher power (diopters, D)
- Combining lenses: add powers (not 1/f directly for quick combining)

---

## BIOLOGY AND BIOCHEMISTRY

### Michaelis-Menten — V₀ = V_max[S] / (K_M + [S])
**Framework: Dominant Term (Two Regimes)**

| Condition | Simplification | Outcome |
|---|---|---|
| [S] >> K_M | Denominator ≈ [S] → V₀ ≈ V_max[S]/[S] | **V₀ = V_max** (zero-order, saturated) |
| [S] << K_M | Denominator ≈ K_M → V₀ ≈ (V_max/K_M)[S] | **V₀ proportional to [S]** (first-order, linear) |
| [S] = K_M | K_M + K_M = 2K_M → V₀ = V_max/2 | **Definition of K_M** (no calculation) |

### Enzyme Inhibitor Patterns
**Framework: Structural Boundary (Lineweaver-Burk)**
- **Competitive**: same V_max, higher apparent K_M → lines intersect at y-axis (same y-intercept)
- **Noncompetitive**: same K_M, lower V_max → lines intersect at x-axis (same x-intercept)
- **Uncompetitive**: lower K_M AND lower V_max → parallel lines (same slope)
- ⚠️ Competitive can always be overcome with enough [S]; noncompetitive cannot

### Lineweaver-Burk — 1/V₀ = (K_M/V_max)(1/[S]) + 1/V_max
**Framework: Structural Boundary (graph boundaries)**
- Y-intercept = 1/V_max (always **positive**)
- X-intercept = −1/K_M (always **negative**)
- Slope = K_M/V_max (always **positive**)
- Any answer with negative y-intercept or positive x-intercept is wrong

### Catalytic Efficiency — Eff = k_cat / K_M
**Framework: Inequality Setup**
- Best enzyme: **high k_cat** (fast turnover) AND **low K_M** (high affinity)
- Efficiency increases if K_M decreases OR k_cat increases
- k_cat = V_max / [E]_total (turnover number = max reactions per enzyme per second)

### PCR — n = n₀ × 2^N
**Framework: Multiplier Factor**
- Each cycle doubles the number of copies
- N = 10 cycles → 2^10 ≈ 1,000×; N = 20 → ≈ 1,000,000×
- Structural Boundary: n must be a power of 2 (× n₀) → eliminates non-power answers

### Hardy-Weinberg — p + q = 1; p² + 2pq + q² = 1
**Framework: Structural Boundary + Substitution**
- Affected individuals (autosomal recessive) = q² → q = √(q²) → p = 1 − q
- Carriers = 2pq (heterozygous)
- ⚠️ Trap: "1 in 10,000 affected" → q² = 0.0001 → q = 0.01, NOT q = 0.0001
- 5 conditions for H-W equilibrium: no mutation, random mating, no selection, no gene flow, large population

### Cardiac Output — CO = HR × SV
**Framework: Multiplier Factor**
- CO doubles if HR doubles (or SV doubles)
- In exercise: both HR and SV increase → CO increases multiplicatively

### Respiratory Quotient — RQ = CO₂ produced / O₂ consumed
**Framework: Structural Boundary**
- Pure carbohydrate: RQ = 1.0
- Pure fat: RQ ≈ 0.7 (fats require more O₂ per CO₂ produced)
- Pure protein: RQ ≈ 0.8
- RQ > 1 indicates net lipogenesis (more CO₂ produced than O₂ consumed)

### Nuclear Decay — Half-Life Calculations
**Framework: Multiplier Factor**
- Each half-life → N × (1/2)
- After n half-lives: N = N₀ × (1/2)^n
- No exponential arithmetic needed: count half-lives as ×1/2 steps
  - 1 t½: 50% remains
  - 2 t½: 25% remains
  - 3 t½: 12.5% remains
  - 4 t½: 6.25% remains
- ⚠️ Trap: "how long for 75% to decay?" → 25% remains → 2 half-lives

### Photoelectric Effect — KE_electron = E_photon − W_function
**Framework: Inequality Setup + Structural Boundary**
- If E_photon < W_function → **no electrons ejected** (regardless of intensity)
- If E_photon > W_function → electrons ejected; KE = difference
- Increasing **frequency** (not intensity) → increases KE of ejected electrons
- ⚠️ Trap: increasing intensity of below-threshold light → still no electrons ejected

---

## ATOMIC / NUCLEAR PHYSICS

### Energy of Electron — E_n = −13.6/n² eV
**Framework: Structural Boundary**
- Ground state: n = 1, E = −13.6 eV (most negative, most stable)
- Higher n → less negative energy → less tightly bound
- Emission spectrum: electron drops from high n to low n → emits photon
- ΔE = E_photon = hf → higher frequency photon emitted for larger energy drop

### Rydberg Equation — E_Δn = hf = R(1/n_f² − 1/n_i²)
**Framework: Structural Boundary**
- n_i > n_f (electron falling to lower level) → E > 0 → photon **emitted**
- n_f > n_i → E < 0 → photon **absorbed**
- Lyman series: n_f = 1 (UV); Balmer: n_f = 2 (visible); Paschen: n_f = 3 (IR)

### Nuclear Decay Types
**Framework: Structural Boundary (tracking mass number A and atomic number Z)**

| Decay Type | ΔA | ΔZ | Particle Lost |
|---|---|---|---|
| Alpha | −4 | −2 | ⁴₂He |
| Beta⁻ | 0 | +1 | e⁻ (neutron → proton) |
| Beta⁺ | 0 | −1 | e⁺ positron (proton → neutron) |
| Electron Capture | 0 | −1 | Electron absorbed |
| Gamma | 0 | 0 | γ photon only |

- ⚠️ Gamma decay changes **neither** A nor Z; it only releases energy

---

## MASTER QUICK-REFERENCE TABLE

| Equation / Concept | Framework | Zero-Math Rule |
|---|---|---|
| ΔG = ΔH − TΔS | Inequality Setup | Spontaneity matrix: −/+ always; +/− never; same sign → T-dependent |
| pH = pKa + log([B]/[A]) | Inequality Setup | pH = pKa when [B]=[A]; pH = pKa ± 1 when ratio = 10 |
| V₀ = Vmax[S]/(Km+[S]) | Dominant Term | [S]>>Km → Vmax; [S]<<Km → linear in [S] |
| Poiseuille resistance | Multiplier Factor | r⁴ rule: double r → 16× flow increase |
| Continuity A₁v₁=A₂v₂ | Multiplier Factor | Area ∝ r² — halve r → area ÷4 → v ×4 |
| Parallel resistors | Structural Boundary | R_total < R_smallest (always) |
| Series capacitors | Structural Boundary | C_total < C_smallest — opposite of resistors! |
| Coulomb / E field | Multiplier Factor | 1/r² law: double r → ¼ force |
| Decibels dβ = 10log(I/I₀) | Log Scaling | +10 dB = ×10 intensity; count steps |
| Half-life N = N₀(½)^n | Multiplier Factor | Count ×½ steps; 2 t½ = 25% remaining |
| Hardy-Weinberg | Structural Boundary | q² given → q=√(q²); p=1−q; carriers=2pq |
| PCR n = n₀ × 2^N | Multiplier Factor | N cycles → 2^N copies; 10 cycles ≈ ×1,000 |
| Lens equation 1/f=1/i+1/o | Structural Boundary | RIO (real=inverted) / VUV (virtual=upright) |
| Doppler f' | Inequality Setup | Approaching → f' > f; receding → f' < f |
| Bernoulli P+½ρv²+ρgh=const | Structural Boundary | Narrow tube → v↑ → P↓ (Venturi effect) |
| Rate Law rate=k[A]^x[B]^y | Multiplier Factor | Hold one constant; observe rate change for order |
| Integrated Rate Laws | Structural Boundary | Graph shape: [A]/t=0th, ln[A]/t=1st, 1/[A]/t=2nd |
| Arrhenius k=Ae^(−Ea/RT) | Dominant Term | Ea in exponent → exponential sensitivity to T |
| Keq / Q comparison | Inequality Setup | Q < Keq → forward; Q > Keq → reverse |
| ΔG = −nFE | Inequality Setup | E>0 → ΔG<0 → spontaneous (galvanic) |
| Henderson-Hasselbalch | Inequality Setup + Dominant | [B]=[A] → pH=pKa; ratio of 10 → ±1 pH unit |
| Bernoulli + Continuity | Structural Boundary | Narrow → fast → low P (linked equations) |
| Boiling Pt / Freezing Pt | Multiplier Factor | ΔT = iKm; electrolytes: i=moles ions/formula unit |
| Photoelectric effect | Inequality Setup | E_photon must exceed W_function; intensity irrelevant |
| Open vs Closed pipe | Structural Boundary | Closed = odd harmonics only; open = all harmonics |
| E_cell = E_cat − E_an | Structural Boundary | OIL RIG; RED CAT; positive E = spontaneous |
| Magnification M = −i/o | Inequality Setup | M>0=upright (virtual); M<0=inverted (real) |
| Gibbs: ΔG°=−RTlnKeq | Inequality Setup | Keq>1 → ΔG°<0; large Keq → very negative ΔG° |
