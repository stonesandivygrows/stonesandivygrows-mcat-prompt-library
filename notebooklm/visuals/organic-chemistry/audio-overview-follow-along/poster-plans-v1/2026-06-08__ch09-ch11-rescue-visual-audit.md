# 2026-06-08 — Organic Chemistry Ch09 and Ch11 Rescue Visual Audit

Status: transcript-derived content audit completed; images not generated.

Purpose: add targeted rescue visuals from the June 8 Organic Chemistry card review without replacing the existing chapter plans or storing the raw transcript in GitHub.

---

## Chapter 9 — Carboxylic Acid Derivatives

### New rescue poster

**Title:** Amide Hydrolysis: Follow the Electrons

**Recommended filename:**

`orgo_ch09_rescue_amide_hydrolysis_follow_the_electrons.png`

### Required panel sequence

1. **Starting amide**
   - show `R-C(=O)-NH2`
   - label carbonyl carbon as electrophilic
   - label oxygen and nitrogen lone pairs

2. **Carbonyl activation**
   - protonate the carbonyl oxygen
   - explicitly state: positive formal charge means electron deficiency, not increased nuclear charge
   - include resonance contributor with more electron-poor carbonyl carbon

3. **Water attack**
   - water oxygen lone pair attacks carbonyl carbon
   - C=O pi electrons move to the original oxygen
   - caption: sigma bond is the framework; pi electrons are the movable component

4. **Tetrahedral intermediate**
   - show sp3 carbon with two oxygen substituents and the amide nitrogen
   - label: tetrahedral intermediate
   - side note: contains a geminal-diol-like feature but is named by its mechanistic role

5. **Leaving-group preparation**
   - protonate `-NH2` to `-NH3+`
   - contrast `NH2-` as a terrible leaving group with neutral `NH3`

6. **Collapse**
   - oxygen lone pair reforms C=O
   - C-N bond electrons move to nitrogen
   - NH3 leaves

7. **Catalyst regeneration and product state**
   - protonated carboxylic acid loses H+
   - NH3 becomes NH4+ in acidic solution
   - final product: carboxylic acid

### Required comparison inset

**Title:** Leaving Group Quality Follows Conjugate-Base Stability

- `HCl -> Cl-`: strong acid gives weak conjugate base; chloride is a good leaving group
- `NH3 -> NH2-`: extremely weak acid gives strong conjugate base; amide anion is a poor leaving group
- memory rule: good leaving group = weak base after departure

### Required terminology strip

- ammonia = NH3
- ammonium = NH4+
- amine = nitrogen not directly attached to a carbonyl
- amide = nitrogen directly attached to a carbonyl
- acyl group = `R-C(=O)-`
- carboxylic acid derivative = `R-C(=O)-Z`
- nucleophile replaces Z, not the acyl group

### MCAT trap strip

- Do not say protonation raises oxygen's `Z_eff`.
- Do not describe water attack as occurring merely because oxygen is electronegative.
- Do not call `NH2-` a good leaving group.
- The leaving event produces NH3; NH4+ is the predominant acid-solution form afterward.
- Do not explain collapse as “sp2 is always more stable than sp3.”
- Acetal/ketal, not geminal diol, is the standard carbonyl protecting group.

---

## Chapter 11 — Spectroscopy

### New master comparison poster

**Title:** Four Analytical Techniques: What Is Actually Moving?

**Recommended filename:**

`orgo_ch11_rescue_four_analytical_techniques.png`

### Four-column structure

#### IR

- input: infrared radiation
- transition: vibrational energy levels
- motion: bond stretching and bending
- best use: bonds and functional groups
- signature relation: stronger bond raises wavenumber; heavier atoms lower wavenumber

#### UV-Vis

- input: ultraviolet/visible radiation
- transition: electronic molecular-orbital transition
- motion: HOMO to LUMO excitation
- best use: conjugation and chromophores
- signature relation: more conjugation -> smaller energy gap -> longer wavelength

#### NMR

- input: radiofrequency radiation plus magnetic field
- transition: nuclear spin-state change
- motion: nuclei change alignment/resonance state
- best use: chemical environments and connectivity
- signature concepts: chemical shift, integration, splitting

#### Mass spectrometry

- input: ionization plus electric/magnetic fields
- transition: not a spectroscopic energy-state map in the same sense
- motion: charged parent ions and fragments
- best use: molecular mass, isotope pattern, fragmentation
- signature axis: relative abundance vs `m/z`

### New IR rescue visual

**Title:** IR Wavenumber: Stronger Spring, Lighter Mass

**Recommended filename:**

`orgo_ch11_rescue_ir_wavenumber_spring_mass.png`

Include:

- bond-as-spring analogy
- `wavenumber proportional to sqrt(k/mu)`
- stronger bond -> higher wavenumber
- heavier atoms -> lower wavenumber
- C-H vs C-D comparison
- correct scientific notation: 3300 = `3.3 x 10^3`, 1750 = `1.75 x 10^3`

### New NMR rescue visual

**Title:** NMR: Shift, Area, and Neighbors

**Recommended filename:**

`orgo_ch11_rescue_nmr_shift_area_neighbors.png`

Include:

- ppm = standardized chemical shift, not mass
- integration = area under signal, not peak height
- `n+1` counts neighboring nonequivalent hydrogens
- do not count the proton itself
- equivalent hydrogens do not split one another
- O-H/N-H exchange caveat
- phenyl vs phenol terminology
- deuterated chloroform `CDCl3`

### New mass-spec rescue visual

**Title:** Mass Spectrum: Parent, Base, Isotope, Fragment

**Recommended filename:**

`orgo_ch11_rescue_mass_spec_peak_roles.png`

Include:

- molecular/parent ion
- base peak = tallest/100% abundance, not necessarily parent
- M+1 peak and carbon-13
- fragmentation pattern
- x-axis `m/z`
- y-axis relative abundance

### MCAT trap strip

- IR identifies functional groups; UV-Vis emphasizes conjugated electronic systems.
- IR excitation is vibrational, not primarily electronic.
- More conjugation means longer wavelength and lower energy.
- NMR is not mass spectrometry.
- ppm is not molecular weight.
- Base peak is not automatically the molecular ion.
- Transmittance is the fraction of light reaching the detector, not the percent of a bond vibrating.

---

## Chapter 7 — Enolates cross-reference

### New rescue poster

**Title:** Kinetic vs Thermodynamic Product Control

**Recommended filename:**

`orgo_ch07_rescue_kinetic_vs_thermodynamic_control.png`

Include a two-path reaction-coordinate diagram:

- kinetic pathway: lower activation barrier, higher-energy product
- thermodynamic pathway: higher activation barrier, lower-energy product

Required memory language:

- kinetic = lower hill, faster arrival
- thermodynamic = deeper valley, more stable destination
- cold/fast traps the first route
- hot/reversible allows equilibration

Required caveat:

Higher temperature alone does not guarantee the thermodynamic product. The reaction must have sufficient time and a reversible pathway for equilibration.

---

## Linked study notes

- `study-notes/organic-chemistry/carboxylic-acid-derivatives/amide-hydrolysis-nucleophilic-acyl-substitution.md`
- `study-notes/organic-chemistry/spectroscopy/spectroscopy-and-mass-spectrometry-concept-map.md`
- `study-notes/organic-chemistry/enolates/kinetic-vs-thermodynamic-product-control.md`

## Source handling rule

Keep the original Anki export and spoken transcript in the private source archive. GitHub stores only the cleaned mechanism notes and visual-production instructions.