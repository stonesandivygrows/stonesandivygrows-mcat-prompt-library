# Gas Laws: Variables, Constraints, and Piston Work

## Core rule

An equation shows which variables are related. The problem setup tells you which variables are allowed to change and which are held constant.

For an ideal gas:

\[
PV=nRT
\]

If the number of moles is constant:

\[
\frac{PV}{T}=\text{constant}
\]

Between two states:

\[
\frac{P_1V_1}{T_1}=\frac{P_2V_2}{T_2}
\]

A variable that is constant has the same value in both states and cancels algebraically.

---

## 1. Constant temperature: Boyle’s law

If \(T\) and \(n\) remain constant:

\[
P_1V_1=P_2V_2
\]

Therefore:

\[
P\propto\frac{1}{V}
\]

- volume increases → pressure decreases
- volume decreases → pressure increases

This inverse relationship applies because temperature is held constant.

**MCAT rule:** Pressure and volume must move oppositely only when temperature and moles are constant.

---

## 2. Constant pressure: Charles’s law

If \(P\) and \(n\) remain constant:

\[
\frac{V_1}{T_1}=\frac{V_2}{T_2}
\]

Therefore:

\[
V\propto T
\]

- temperature increases → volume increases
- temperature decreases → volume decreases

A movable piston under a constant external pressure is the standard visualization.

When heat is added, molecules move faster and initially collide more strongly with the piston. The piston rises, increasing volume until the internal pressure again matches the external pressure.

**MCAT rule:** At constant pressure, heating causes expansion rather than a sustained pressure increase.

---

## 3. Constant volume: Gay-Lussac’s law

If \(V\) and \(n\) remain constant:

\[
\frac{P_1}{T_1}=\frac{P_2}{T_2}
\]

Therefore:

\[
P\propto T
\]

- temperature increases → pressure increases
- temperature decreases → pressure decreases

A rigid sealed container is the standard visualization. Because the container cannot expand, faster molecular motion produces more frequent and forceful wall collisions, raising pressure.

**MCAT rule:** A heated rigid container cannot use expansion to accommodate the added energy, so pressure rises.

---

## 4. Can pressure and volume both increase?

Yes. If neither pressure nor volume is held constant, both may change.

For constant moles:

\[
PV\propto T
\]

If temperature increases by a factor of four:

\[
T_2=4T_1
\]

then the product \(PV\) must increase by a factor of four:

\[
P_2V_2=4P_1V_1
\]

Possible outcomes include:

- \(P\times4\), \(V\times1\)
- \(P\times1\), \(V\times4\)
- \(P\times2\), \(V\times2\)

The physical constraints of the container determine which outcome occurs.

**MCAT rule:** When temperature changes, pressure and volume are not automatically inverse. The full product \(PV\) must change consistently with \(T\).

---

## 5. Rigid container vs movable piston

### Rigid container or immovable piston

\[
\Delta V=0
\]

Pressure-volume work:

\[
w=-P\Delta V=0
\]

Therefore, using the chemistry convention \(\Delta U=q+w\):

\[
q_V=\Delta U
\]

Heat added at constant volume changes internal energy because no expansion work occurs.

### Movable piston at constant pressure

\[
\Delta V\neq0
\]

The gas expands and does work on the surroundings:

\[
w=-P\Delta V<0
\]

At constant pressure:

\[
q_P=\Delta H
\]

Enthalpy accounts for the internal-energy change plus the energy associated with pressure-volume expansion.

**MCAT rule:**

- constant volume → no expansion work → \(q_V=\Delta U\)
- constant pressure → expansion work may occur → \(q_P=\Delta H\)

---

## 6. Why constant pressure does not mean no work

Constant pressure means the pressure value remains unchanged while volume may change.

During expansion:

\[
\Delta V>0
\]

so the system pushes the piston and performs work on the surroundings.

The added heat can be divided between:

1. increasing internal energy
2. performing expansion work

This is why heat at constant pressure equals enthalpy change rather than merely internal-energy change.

---

## 7. Heat of vaporization at constant pressure

Vaporization changes a liquid into a gas:

\[
\text{liquid}\rightarrow\text{gas}
\]

The gas occupies much more volume, so pressure-volume work can occur.

At constant pressure:

\[
\Delta H_{\text{vap}}=q_P
\]

The heat of vaporization includes the energy needed to overcome intermolecular attractions and the energy involved in expansion.

“Constant pressure” is not present merely because standard conditions use a specified pressure. It is present because enthalpy equals heat transfer under constant-pressure conditions.

---

## 8. Standard conditions vs constant-pressure conditions

These are separate ideas.

### Standard thermodynamic/electrochemical state

Typically:

- solutes at \(1\text{ M}\)
- gases at \(1\text{ bar}\) or approximately \(1\text{ atm}\)
- substances in their standard physical states
- commonly tabulated at \(298\text{ K}=25^\circ\text{C}\)

### Standard temperature and pressure for gases

Common MCAT convention:

- \(273\text{ K}=0^\circ\text{C}\)
- \(1\text{ atm}\)

### Constant pressure

Pressure remains unchanged during the process, but it need not specifically equal standard pressure.

**MCAT rule:** “Standard state” specifies reference conditions; “constant pressure” specifies which variable does not change during a process.

---

## Final decision tree

When using a gas equation, ask:

1. Is \(n\) constant?
2. Which of \(P\), \(V\), or \(T\) is explicitly fixed?
3. Can the container expand?
4. Does pressure-volume work occur?

Then choose:

- \(T\) constant → \(P_1V_1=P_2V_2\)
- \(P\) constant → \(V_1/T_1=V_2/T_2\)
- \(V\) constant → \(P_1/T_1=P_2/T_2\)
- none constant → use \(P_1V_1/T_1=P_2V_2/T_2\)

**Main lesson:** The equation does not decide what remains constant; the physical setup does.