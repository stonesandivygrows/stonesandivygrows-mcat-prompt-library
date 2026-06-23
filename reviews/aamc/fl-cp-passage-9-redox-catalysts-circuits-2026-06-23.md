# AAMC CP Passage 9 Review: Catalysts, Circuits, Redox, and Power Units

Date added: 2026-06-23

## Session Scope

This review captures only the questions and concepts that were actively discussed. Questions not brought up were treated as understood.

Main themes:

- Catalytic converters and heterogeneous catalysis
- Homogeneous catalyst separation vs enzyme/product release
- Surface area and reaction rate
- Circuit current and resistance
- Metal-acid redox reactions and hydrogen gas evolution
- Reduction potentials for Al vs Zn
- Power units including ft-lb/s

---

## 1. Catalytic Converters

A catalytic converter is the car exhaust component that uses a solid catalyst to convert toxic exhaust gases into less harmful products.

Common exhaust conversions:

```text
CO -> CO2
hydrocarbons -> CO2 + H2O
NO -> N2
```

Unwanted sulfur side reaction:

```text
SO2 -> SO3
SO3 + H2O -> H2SO4
```

MCAT translation:

```text
catalytic converter = heterogeneous catalysis
solid catalyst + gaseous exhaust reactants = different phases
reaction occurs on catalyst surface
```

Key trap: do not overcomplicate the word “converter.” It is basically an exhaust-cleaning catalyst system.

---

## 2. Homogeneous Catalyst Cannot Be Separated From Product

Question idea:

```text
If a homogeneous catalyst cannot be separated from the products at the end of a reaction, what happens?
```

Correct outcome:

```text
products are contaminated
```

Why: “at the end of the reaction” means the reaction already happened. The problem is purification, not reaction occurrence.

Important distinction:

```text
not released = microscopic mechanism problem during catalysis
not separated = macroscopic purification problem after reaction
```

### Released vs Separated

Released:

```text
E + S -> ES -> EP -> E + P
```

If product is not released from an enzyme/catalyst active site, the enzyme is stuck and turnover decreases.

Separated:

```text
reactants + catalyst -> product + catalyst
```

If catalyst cannot be separated afterward, the product remains mixed with catalyst.

Clean MCAT distinction:

```text
enzyme cannot release substrate/product = mechanism/turnover issue
homogeneous catalyst cannot be separated from products = purification/contamination issue
```

---

## 3. Surface Area and Reaction Rate

For solid reactants or solid catalysts:

```text
more exposed surface area -> more active sites/collisions -> faster reaction rate
```

Simple proportionality:

```text
rate ∝ surface area
```

For heterogeneous catalysis:

```text
rate ∝ number of active sites
number of active sites ∝ surface area
therefore rate ∝ surface area
```

Catalytic converters use beads/porous solids because smaller pieces expose more surface area than a single large block.

MCAT note: surface area is usually not written in the standard rate law, but conceptually it increases collision frequency and available catalytic sites.

---

## 4. Circuit Current: How to Increase Current

Main equation:

```text
I = V/R
```

To increase current:

```text
increase voltage
or
decrease resistance
```

### Wire diameter

Wire resistance:

```text
R = ρL/A
```

where:

```text
ρ = resistivity
L = length
A = cross-sectional area
```

Smaller wire diameter means smaller cross-sectional area:

```text
smaller diameter -> smaller A -> larger R -> smaller I
```

### Wire temperature

For most metal wires:

```text
higher temperature -> more atomic vibration -> more electron collisions -> higher resistance -> lower current
```

Connection to overheating electronics: partly related, but computer slowdown is mostly from thermal throttling. The device intentionally lowers CPU/GPU speed/voltage to avoid damage.

### Lower ion concentration in an electrochemical cell

In an electrochemical cell, ions in solution participate in charge-transfer reactions and help determine cell output.

At the cathode, a generic ion may accept electrons:

```text
Y^m+ + electrons -> Y(s)
```

Decreasing ion concentration generally makes the electrochemical cell less able to sustain charge flow or lowers the driving force for current.

Nernst intuition:

```text
E = E° - (RT/nF) ln Q
```

Changing ion concentrations changes cell voltage. Decreasing relevant ion concentrations usually does not help current; it may weaken the cell.

Best answer in the discussed circuit question:

```text
replace bulb with lower resistance bulb
R decreases -> I increases
```

---

## 5. Metal + Acid Redox: H2 Evolves

Key vocabulary:

```text
evolve = gas is produced/released/bubbles out
H2(g) evolves = hydrogen gas forms
```

General reaction pattern:

```text
metal + acid -> metal cation + H2 gas
```

For zinc:

```text
Zn(s) + 2H+(aq) -> Zn2+(aq) + H2(g)
```

Half-reactions:

```text
Zn(s) -> Zn2+(aq) + 2e-      oxidation
2H+(aq) + 2e- -> H2(g)       reduction
```

For aluminum:

```text
2Al(s) + 6H+(aq) -> 2Al3+(aq) + 3H2(g)
```

Half-reactions:

```text
Al(s) -> Al3+(aq) + 3e-      oxidation
2H+(aq) + 2e- -> H2(g)       reduction
```

Correct reasoning:

```text
Al is oxidized
H+ is reduced
H2 gas evolves
```

Answer pattern:

```text
Yes; Al is oxidized and H+(aq) is reduced.
```

Avoid saying Al is reduced. Electropositive metals tend to lose electrons and form cations.

---

## 6. Did the Passage Matter for the Al/HCl Question?

Mostly no. This was close to a content/discrete-style question hidden inside a passage.

Independent content shortcut:

```text
metal + HCl -> metal oxidized + H+ reduced -> H2 gas
```

But the passage gave supportive evidence if it showed aluminum reacting with zinc ions.

Supportive evidence chain:

```text
Al(s) + Zn2+(aq) -> Al3+(aq) + Zn(s)
```

If Zn(s) forms:

```text
Zn2+ gained electrons -> Zn(s)
Zn2+ was reduced
```

Those electrons came from Al:

```text
Al(s) lost electrons -> Al3+
Al was oxidized
```

Therefore:

```text
Al is easier to oxidize than Zn
Al is a stronger reducing agent than Zn
Al can donate electrons to H+
H+ can be reduced to H2
```

---

## 7. Reduction Potential: Zn vs Al

If this reaction is spontaneous:

```text
Al(s) + Zn2+(aq) -> Al3+(aq) + Zn(s)
```

then:

```text
Zn2+ is reduced
Al is oxidized
```

Cell potential relationship:

```text
Ecell = Ered(cathode) - Ered(anode)
```

Here:

```text
cathode = Zn2+/Zn
anode = Al3+/Al
```

For Ecell to be positive:

```text
Ered(Zn2+/Zn) > Ered(Al3+/Al)
```

Approximate values:

```text
Zn2+/Zn:  Ered ≈ -0.76 V
Al3+/Al:  Ered ≈ -1.66 V
```

Because -0.76 is higher than -1.66:

```text
Zn2+ is more easily reduced than Al3+
Al is more easily oxidized than Zn
```

MCAT anchor:

```text
higher reduction potential -> wants electrons more -> gets reduced
lower reduction potential -> gives electrons more easily -> gets oxidized
```

---

## 8. Power Units: ft-lb/s

The last question issue: choosing an answer because it looked like joules/energy, while missing that another answer expressed power using ft-lb.

Power is energy or work per time:

```text
P = W/t = E/t
```

SI unit:

```text
watt = joule/second = J/s
```

But work/energy can also be expressed in other force-distance units.

Examples:

```text
J = N*m
ft*lb = foot-pound = force * distance = work/energy
```

Therefore:

```text
ft*lb/s = work/time = power
```

Trap:

```text
J alone = energy
J/s = power
ft*lb alone = energy/work
ft*lb/s = power
```

MCAT unit rule:

```text
If unit has energy divided by time, it is power.
If unit is only force × distance, it is work/energy.
```

---

## Final Whiteboard / Sticky Review

```text
Catalytic converter = solid heterogeneous catalyst in car exhaust.
Homogeneous catalyst not separated after reaction = contaminated product.
Not released = active site/turnover problem; not separated = purification problem.
Surface area ↑ -> active sites/collisions ↑ -> rate ↑.
I = V/R; R = ρL/A.
Thin wire -> R ↑ -> I ↓.
Hot metal wire -> R ↑ -> I ↓.
Lower bulb resistance -> I ↑.
Metal + acid -> metal oxidized + H+ reduced -> H2 evolves.
Evolves = gas bubbles out/forms.
If Al reduces Zn2+, Zn has higher Ered and Al is easier to oxidize.
Power = energy/time = J/s = ft*lb/s.
```