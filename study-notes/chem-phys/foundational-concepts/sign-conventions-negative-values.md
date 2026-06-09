# MCAT Sign Conventions: Negative Does Not Always Mean the Same Thing

## Core rule

**Positive and negative signs describe direction, reference, or perspective. They do not automatically mean “good,” “bad,” “higher,” or “lower.”**

Before interpreting a sign, ask:

1. **What variable is being measured?**
2. **Relative to what reference?**
3. **Whose perspective is being used—the system, surroundings, field, reaction, or observer?**

Also:

**Energy is usually a scalar, not a vector.** A scalar can be positive or negative without having a spatial direction.

---

## 1. Atomic energy levels

\[
E_n=-\frac{13.6}{n^2}\text{ eV}
\]

For hydrogen:

\[
n=1: -13.6\text{ eV}
\]

\[
n=3: -1.51\text{ eV}
\]

Even though both values are negative:

\[
-1.51>-13.6
\]

Therefore, **the electron at \(n=3\) has higher energy than the electron at \(n=1\)**.

The negative sign means the electron is bound relative to the reference state of a free electron infinitely far from the nucleus.

**MCAT rule:** Less negative atomic energy = higher energy and less tightly bound.

---

## 2. Electric potential vs electric potential energy

\[
U=qV
\]

- \(V\): electric potential, measured in volts or joules per coulomb
- \(U\): electric potential energy, measured in joules
- \(q\): charge placed at that potential

For a positive charge:

\[
q>0 \Rightarrow U \text{ and } V \text{ have the same sign trend}
\]

For an electron:

\[
q=-e
\]

Therefore:

\[
U=(-e)V
\]

Electron potential energy and voltage move in opposite directions.

**MCAT rule:** Voltage is energy per charge; the charge sign determines how voltage translates into potential energy.

---

## 3. Work in physics

\[
W=Fd\cos\theta
\]

Work is:

- **positive** when the force component helps the displacement
- **negative** when the force component opposes the displacement
- **zero** when force is perpendicular to displacement

Example: friction usually performs negative work on a sliding object because friction opposes its motion.

**MCAT rule:** The sign of work tells the direction of energy transfer, not whether the object has “negative energy.”

---

## 4. Work in chemistry

Using the convention in which \(w\) means work done **on** the system:

\[
\Delta U=q+w
\]

- \(q>0\): heat enters the system
- \(q<0\): heat leaves the system
- \(w>0\): surroundings do work on the system
- \(w<0\): system does work on the surroundings

For pressure-volume work:

\[
w=-P\Delta V
\]

During expansion:

\[
\Delta V>0 \Rightarrow w<0
\]

The gas does work on the surroundings and loses some energy.

Some sources instead define \(W\) as work done **by** the system and write:

\[
\Delta U=q-W
\]

These equations are equivalent if the definition of work is tracked consistently.

**MCAT rule:** Always identify whether work is defined as work **on** or **by** the system.

---

## 5. Potential energy

Potential energy depends on the selected zero reference.

Near Earth:

\[
U_g=mgh
\]

Higher height usually means higher gravitational potential energy.

For attractive electrostatic systems and bound electrons, potential energy can be negative because zero is often defined at infinite separation.

**MCAT rule:** Negative potential energy often means “bound relative to zero at infinity.”

---

## 6. Bond enthalpy and reaction enthalpy

Bond breaking requires energy:

\[
\text{bond breaking}=+\text{ energy input}
\]

Bond formation releases energy:

\[
\text{bond formation}=-\text{ energy change for the system}
\]

Bond energies are usually tabulated as positive bond-dissociation values, so:

\[
\Delta H_{\text{rxn}}=\sum E_{\text{bonds broken}}-\sum E_{\text{bonds formed}}
\]

Equivalent accounting model:

\[
\Delta H_{\text{rxn}}=(+\text{breaking})+(-\text{forming})
\]

- \(\Delta H<0\): exothermic; formation releases more energy than breaking requires
- \(\Delta H>0\): endothermic; breaking requires more energy than formation releases

**Important:** Bond breaking is not automatically oxidation, and bond formation is not automatically reduction.

**MCAT rule:** Bond breaking/forming is energy accounting; oxidation/reduction is electron accounting.

---

## 7. Gibbs free energy

\[
\Delta G=\Delta H-T\Delta S
\]

- \(\Delta G<0\): spontaneous/exergonic
- \(\Delta G>0\): nonspontaneous/endergonic
- \(\Delta G=0\): equilibrium

Negative \(\Delta G\) means the system moves downhill in free energy and can release usable energy.

**MCAT rule:** Negative Gibbs free-energy change = thermodynamically favorable direction.

---

## 8. Cell potential and Gibbs free energy

\[
\Delta G=-nFE_{\text{cell}}
\]

Because \(n\) and \(F\) are positive:

\[
E_{\text{cell}}>0 \Rightarrow \Delta G<0
\]

\[
E_{\text{cell}}<0 \Rightarrow \Delta G>0
\]

Therefore:

- positive cell potential = spontaneous overall redox reaction
- negative cell potential = nonspontaneous reaction as written

For a spontaneous galvanic cell, electrons flow:

\[
\text{anode}\rightarrow\text{cathode}
\]

**MCAT rule:** Positive cell voltage corresponds to spontaneous electron flow from anode to cathode.

---

## 9. Standard reduction potentials

A reduction-potential table writes every half-reaction in the reduction direction:

\[
\text{oxidized species}+e^-\rightarrow\text{reduced species}
\]

- more positive \(E^\circ_{\text{red}}\): stronger tendency to accept electrons and be reduced
- more negative \(E^\circ_{\text{red}}\): weaker tendency to be reduced and greater tendency to run backward as oxidation when paired with a stronger reducer

The values are measured relative to the standard hydrogen electrode, defined as:

\[
E^\circ_{\text{SHE}}=0.00\text{ V}
\]

So positive and negative half-cell values are relative comparisons, not absolute labels.

**Through-line:** Electrochemistry follows electrons. A more positive reduction potential means a stronger pull for electrons.

---

## 10. Cathode, anode, and cell-potential subtraction

For a spontaneous galvanic cell:

- cathode = reduction
- anode = oxidation

When both tabulated values are reduction potentials:

\[
E^\circ_{\text{cell}}=E^\circ_{\text{red,cathode}}-E^\circ_{\text{red,anode}}
\]

The subtraction is intentional because the anode half-reaction is listed as a reduction but runs in reverse as oxidation.

Equivalent form:

\[
E^\circ_{\text{cell}}=E^\circ_{\text{red,cathode}}+E^\circ_{\text{ox,anode}}
\]

Two negative reduction potentials can still produce a positive cell potential. The cathode only needs to have the more positive value.

Example:

\[
E^\circ_{\text{cathode}}=-0.20\text{ V},\qquad E^\circ_{\text{anode}}=-0.80\text{ V}
\]

\[
E^\circ_{\text{cell}}=(-0.20)-(-0.80)=+0.60\text{ V}
\]

**MCAT rule:** More positive reduction potential becomes the cathode; less positive becomes the anode.

---

## 11. Electric field and charge

\[
\vec F=q\vec E
\]

Electric-field direction is defined as the direction a positive test charge would accelerate.

- \(q>0\): force points in the same direction as the electric field
- \(q<0\): force points opposite the electric field

The negative electron charge reverses the force direction.

**MCAT rule:** The sign of charge determines whether force follows or opposes the electric field.

---

## 12. Spring force

\[
F_s=-kx
\]

The negative sign means the spring force points opposite the displacement from equilibrium.

- pull spring right: displacement positive, spring force left
- compress spring left: displacement negative, spring force right

**MCAT rule:** The spring’s negative sign represents restoring direction, not energy loss.

---

## 13. Magnification in lenses and mirrors

\[
M=\frac{h_i}{h_o}=-\frac{i}{o}
\]

By the usual coordinate convention:

- \(h_i>0\): upright image
- \(h_i<0\): inverted image

Therefore:

- \(M>0\): upright
- \(M<0\): inverted

**MCAT rule:** Negative magnification indicates orientation below the principal axis relative to the upright object.

---

## 14. pH, pKa, and negative logarithms

\[
pH=-\log[H^+]
\]

Therefore:

\[
\uparrow[H^+]\Rightarrow\downarrow pH
\]

Also:

\[
pK_a=-\log K_a
\]

Therefore:

\[
\text{strong acid}=\text{high }K_a=\text{low }pK_a
\]

\[
\text{weak acid}=\text{low }K_a=\text{high }pK_a
\]

**MCAT rule:** A negative logarithm reverses the ranking: larger underlying quantity gives a smaller p-value.

---

## 15. Kinetics vs thermodynamics

Thermodynamics asks:

\[
\text{Is the reaction favorable?}
\]

It uses quantities such as \(\Delta G\), \(\Delta H\), \(\Delta S\), \(K\), and \(E_{\text{cell}}\).

Kinetics asks:

\[
\text{How fast does the reaction occur?}
\]

It uses activation energy, rate constant, and rate laws.

A reaction can be thermodynamically favorable but kinetically slow.

**MCAT rule:** Favorability and speed are separate questions.

---

## Final memory rule

When you see a sign, ask:

**What is this sign describing?**

- atomic energy: bound relative to zero at infinity
- work: direction of energy transfer
- enthalpy: heat absorbed or released
- Gibbs free energy: thermodynamic favorability
- whole-cell voltage: spontaneous electron flow
- reduction potential: tendency to accept electrons relative to SHE
- force: coordinate direction
- spring force: restoring direction
- magnification: image orientation
- pH/pKa: inverse logarithmic ranking

**Do not memorize “positive is good” or “negative is good.” Memorize the perspective of each variable.**