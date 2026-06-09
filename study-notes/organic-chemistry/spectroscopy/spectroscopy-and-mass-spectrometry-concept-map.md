# Spectroscopy and Mass Spectrometry Concept Map

## Scope

This note preserves the corrected reasoning from a spoken review of IR, UV-Vis, NMR, and mass spectrometry. It is a clean study layer rather than a transcript.

Source alignment:

- Kaplan MCAT Organic Chemistry: Spectroscopy
- UWorld MCAT Organic Chemistry: IR, UV-Vis, NMR, and mass spectrometry
- Kaplan MCAT Physics: electromagnetic radiation

---

## 1. The master comparison

| Technique | Energy/input | What changes or moves? | Main information |
|---|---|---|---|
| IR | infrared radiation | molecular bonds vibrate | bond types and functional groups |
| UV-Vis | ultraviolet/visible radiation | electrons move between molecular orbitals | conjugation and electronic structure |
| NMR | radiofrequency radiation in a magnetic field | nuclear spin states change | chemical environments and connectivity |
| Mass spectrometry | ionization plus electric/magnetic fields | charged molecules/fragments move | molecular mass, isotopes, fragmentation |

Memory line:

**IR vibrates bonds. UV-Vis excites electrons. NMR flips nuclear spin states. Mass spec moves ions.**

---

## 2. Electromagnetic spectrum order

From longest wavelength and lowest frequency/energy to shortest wavelength and highest frequency/energy:

\[
radio\rightarrow microwave\rightarrow infrared\rightarrow visible\rightarrow ultraviolet\rightarrow X\text{-ray}\rightarrow gamma
\]

Relationships:

\[
c=\lambda f
\]

\[
E=hf=\frac{hc}{\lambda}
\]

Therefore:

- higher frequency = higher energy
- shorter wavelength = higher energy
- longer wavelength = lower energy

---

## 3. IR spectroscopy

### What IR measures

IR radiation is absorbed when its frequency matches a molecule's allowed vibrational transition.

The molecule moves from a lower vibrational energy state to a higher vibrational energy state. This is a molecular excited state, but it is **not primarily an electronic excitation**.

### What IR is best for

IR is most useful for identifying:

- bond types
- functional groups
- characteristic stretches and bends

It does not usually determine the complete structure by itself.

### IR-active requirement

A vibration must cause a change in the molecule's dipole moment.

A perfectly symmetric vibration may fail to absorb IR if the dipole changes cancel.

### Vibrational modes

- symmetric stretch
- asymmetric stretch
- bending modes such as scissoring, rocking, wagging, and twisting

---

## 4. Wavenumber

Wavenumber is:

\[
\tilde\nu=\frac{1}{\lambda}
\]

When wavelength is measured in centimeters, wavenumber is measured in:

\[
cm^{-1}
\]

Physical meaning:

**Wavenumber is the number of wavelengths that fit into one centimeter.**

Because:

\[
f=c\tilde\nu
\]

higher wavenumber means:

- higher frequency
- higher energy
- shorter wavelength

---

## 5. What determines IR wavenumber?

A bond behaves approximately like two masses connected by a spring:

\[
\tilde\nu\propto\sqrt{\frac{k}{\mu}}
\]

where:

- \(k\) = bond force constant/bond stiffness
- \(\mu\) = reduced mass of the two atoms

Therefore:

- stronger bond -> higher wavenumber
- heavier atoms -> lower wavenumber

Important correction:

**Increasing atomic mass does not increase vibrational frequency. It lowers it.**

Example:

A C-D stretch appears at lower wavenumber than a C-H stretch because deuterium is heavier than hydrogen.

---

## 6. High-yield IR peaks

### O-H

- broad
- around \(3200-3600\,cm^{-1}\)
- often simplified near \(3300\,cm^{-1}\)

### N-H

- sharper than O-H
- around \(3300\,cm^{-1}\)

### C=O

- strong, sharp peak
- around \(1700-1750\,cm^{-1}\)

Scientific notation corrections:

\[
3300=3.3\times10^3
\]

\[
1750=1.75\times10^3
\]

not \(10^2\).

### Why O-H is broad

Hydrogen bonding creates many slightly different O-H bond environments and therefore a range of vibrational energies. That spreads the absorption over a wider wavenumber range.

### Why O-H appears at higher wavenumber than C=O

Peak position depends on both bond stiffness and reduced mass. Hydrogen is very light, so O-H has a high vibrational frequency. Electronegativity difference affects intensity and dipole change, but it is not the complete explanation for peak position.

---

## 7. Transmittance vs absorbance

The IR instrument passes radiation through the sample and detects how much reaches the detector.

Percent transmittance:

\[
\%T=\frac{I}{I_0}\times100
\]

where:

- \(I_0\) = incident/reference intensity
- \(I\) = transmitted intensity after the sample

Therefore:

- more absorption -> less transmittance
- less absorption -> more transmittance

On a percent-transmittance IR spectrum, strong absorptions point downward as valleys.

Transmittance is **not** the percentage of a bond that vibrates.

---

## 8. UV-Vis spectroscopy

### What UV-Vis measures

UV-visible radiation promotes electrons between molecular orbitals.

Common transition:

\[
HOMO\rightarrow LUMO
\]

UV-Vis is especially useful for:

- double bonds
- conjugated systems
- aromatic systems
- chromophores

### Why conjugation matters

Conjugation provides adjacent parallel p orbitals and delocalized pi electrons.

Increasing conjugation:

- raises the HOMO energy and/or lowers the LUMO energy
- decreases the HOMO-LUMO energy gap
- requires less excitation energy
- shifts absorption to longer wavelength

Thus:

\[
more\ conjugation\rightarrow smaller\ \Delta E\rightarrow longer\ \lambda
\]

Memory line:

**Conjugation makes the jump easier: lower energy, longer wavelength.**

### Pi overlap correction

- sigma bond = head-on overlap along the internuclear axis
- pi bond = side-by-side overlap of parallel p orbitals

Do not describe a pi bond as head-to-head or tail-to-tail overlap.

### Nonabsorbing solvent

A nonabsorbing solvent is usually a liquid solvent that does not absorb significantly in the wavelength range being measured. It is not generally a noble gas.

The purpose is to prevent the solvent's signal from obscuring the sample's signal.

---

## 9. NMR spectroscopy

NMR stands for:

**Nuclear Magnetic Resonance**

It is not nuclear mass spectroscopy.

### What happens in NMR

- the sample is placed in a strong magnetic field
- certain nuclei adopt different spin-energy alignments
- radiofrequency energy promotes transitions between spin states
- the instrument detects the resonance/relaxation signal

For MCAT organic chemistry, the most common form is proton NMR:

\[
^1H\ NMR
\]

NMR does not ionize molecules and shoot them through a magnetic sector. That description belongs to mass spectrometry.

---

## 10. Chemical shift and ppm

The x-axis of an NMR spectrum is chemical shift, \(\delta\), in parts per million:

\[
ppm
\]

This is a standardized resonance position relative to a reference, commonly TMS.

Why ppm is used:

Different NMR instruments operate at different magnetic field strengths and frequencies. Expressing chemical shift as a ratio makes the position comparable across machines.

Thus ppm is not:

- mass
- molecular weight
- abundance
- fragment size

It describes the nucleus's electronic environment and degree of shielding/deshielding.

---

## 11. Shielding and deshielding

### Shielded proton

- more surrounding electron density
- experiences less effective external magnetic field
- appears upfield
- lower ppm

### Deshielded proton

- less surrounding electron density
- experiences more effective external magnetic field
- appears downfield
- higher ppm

Electronegative atoms, pi systems, and carbonyls can deshield nearby protons.

---

## 12. Integration

Integration corresponds to the **area under a signal**, not merely its height.

It gives the relative number of equivalent hydrogens producing that signal.

Example ratio:

\[
3:2:1
\]

may indicate three equivalent protons, two equivalent protons, and one unique proton.

Integration is relative unless scaled to a known molecular formula.

---

## 13. Splitting and the n+1 rule

For a simple first-order spectrum:

\[
number\ of\ peaks=n+1
\]

where \(n\) is the number of neighboring nonequivalent hydrogens, usually three bonds away.

Important rules:

- do not count the proton itself
- equivalent protons do not split one another
- hydrogens on the same carbon are usually not counted as neighbors for the simple n+1 rule
- rapidly exchanging O-H and N-H protons often do not show predictable splitting

Common patterns:

- 0 neighbors -> singlet
- 1 neighbor -> doublet
- 2 neighbors -> triplet
- 3 neighbors -> quartet

---

## 14. Phenyl vs phenol

### Phenyl

\[
C_6H_5-
\]

A benzene-derived substituent.

### Phenol

\[
C_6H_5OH
\]

A benzene ring bearing an OH group.

A benzene ring with OH is **phenol**, not merely phenyl.

### Proton environments in phenol

A monosubstituted benzene ring contains five aromatic hydrogens.

By symmetry:

- two ortho hydrogens are equivalent
- two meta hydrogens are equivalent
- one para hydrogen is unique
- the O-H proton is another environment

A simplified environment count is therefore approximately four, although real aromatic signals may overlap and splitting can be complex.

The ring carbon bonded to OH has no hydrogen attached.

---

## 15. Deuterated solvent

A common proton-NMR solvent is:

\[
CDCl_3
\]

This is **deuterated chloroform**.

Normal chloroform is:

\[
CHCl_3
\]

Replacing most ordinary hydrogen with deuterium prevents the solvent from overwhelming the proton spectrum.

---

## 16. Instrument frequency in MHz

A value such as 300 MHz or 500 MHz describes the operating/resonance frequency of the NMR instrument for the nucleus being observed.

It is not the molecular mass.

Higher-field instruments generally produce greater frequency separation in hertz and can improve resolution, while chemical shift in ppm remains standardized.

---

## 17. Mass spectrometry

### Core sequence

1. The sample is ionized.
2. Charged parent molecules and fragments form.
3. Electric fields accelerate the ions.
4. Electric and/or magnetic analysis separates ions by mass-to-charge ratio.
5. A detector records the ions.

The x-axis is:

\[
m/z
\]

The y-axis is relative abundance.

### Voltage connection

A potential difference can drive charged-particle motion. This resembles the general physics of voltage and current, but mass spectrometry uses an externally supplied electric potential rather than a spontaneous galvanic-cell redox reaction.

---

## 18. Molecular ion, base peak, and fragments

### Molecular ion/parent ion

The ionized form of the original molecule, often produced by loss of one electron.

Its \(m/z\) may approximate molecular mass when the charge is +1.

### Base peak

The tallest peak in the spectrum.

- assigned 100% relative abundance
- represents the most abundant detected ion
- may or may not be the molecular ion

### Fragmentation pattern

Ionization can also break the molecule into smaller charged fragments. Their pattern provides structural clues.

### M+1 peak

A peak one mass unit above the molecular-ion peak commonly reflects molecules containing a heavier isotope, especially carbon-13.

---

## 19. MRI connection: why hydrogen density relates to tissue type

MRI applies NMR principles mainly to hydrogen nuclei in water and fat.

Different tissues contain different:

- proton densities
- water content
- lipid content
- molecular environments
- T1 relaxation behavior
- T2 relaxation behavior

Therefore different tissues produce different signals and contrast.

Hydrogen density alone is a useful simplification, but MRI contrast is not determined solely by the number of hydrogens.

---

## MCAT traps

- IR identifies functional groups; UV-Vis emphasizes electronic transitions and conjugation.
- IR excitation is vibrational, not primarily electronic.
- Stronger bonds raise IR wavenumber; heavier atoms lower it.
- A broad O-H peak is strongly influenced by hydrogen bonding.
- More conjugation gives longer wavelength, not higher energy.
- NMR is not mass spectrometry.
- ppm is chemical shift, not molecular mass.
- Integration is area, not simply peak height.
- Do not count the proton itself in the n+1 rule.
- Equivalent hydrogens do not split each other.
- The base peak is not automatically the molecular-ion peak.
- Phenyl and phenol are different terms.

## Final memory map

**IR: What bonds are present?**  
**UV-Vis: How easily can pi electrons be excited?**  
**NMR: How many distinct nuclear environments exist, and how are they connected?**  
**Mass spec: What is the mass, isotope pattern, and fragmentation behavior?**