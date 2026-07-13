# MCAT Science Concept Web Running File

## Purpose
This file is the source of truth for a future MCAT science concept web in Draw.io / diagrams.net.

This is a **concept web**, not a flowchart. The main file is organized by **Kaplan subject → chapter → section**, while the *web logic* lives in the **Relationship Registry**.

Final included subjects:
- Physics
- Biology
- Biochemistry
- General Chemistry
- Organic Chemistry
- Psychology/Sociology

Excluded:
- CARS

Current active build:
- **Physics bulk ingest v1.1 audited checkpoint**
- Biology is a placeholder for the next phase.

---

# Global Rules

## Organization Rules
- Use Kaplan subject → chapter → section as the backbone.
- Use transcript labels and timestamps as metadata only.
- When the transcript chapter number conflicts with Kaplan chapter order, preserve the Kaplan chapter number and record the transcript label under metadata.
- Merge duplicates instead of creating repeated concepts.
- Use two levels:
  - **Major Concept Entries** for high-yield, testable ideas.
  - **Micro-Nodes** for small terms, formulas, units, organs, examples, and vocabulary.

## Concept Web Rules
- Every important relationship must have a precise label.
- Avoid vague labels such as “related to,” “connected to,” “associated with,” or “about.”
- Prefer labels such as causes, requires, increases, decreases, depends on, regulates, converts to, opposes, maintains, explains, is tested by, is confused with, produces, consumes, stores, releases, carries, transmits, conducts, resists, reflects, refracts, diffracts, polarizes, cancels, amplifies.

## Transcript Rules
- Correct obvious speech-to-text errors silently using MCAT context.
- Mark unclear transcript phrases as **VERIFY**.
- Do not invent facts from unclear transcript wording.
- If a future transcript combines subjects, assign concepts to the best Kaplan chapter and add cross-links.

---

# Future Draw.io Layer System

## Layer 1: Main Structure
Use for:
- MCAT hub
- subject branches
- chapter nodes
- section nodes
- highest-yield anchor concepts

## Layer 2: Chapter Details
Use for:
- definitions
- mechanisms
- structures
- processes
- chapter-specific examples

## Layer 3: Cross-Chapter / Cross-Subject Connections
Use for:
- links between Physics chapters
- links between Physics and Biology
- links to Biochemistry, General Chemistry, Organic Chemistry, or Psychology/Sociology
- integrated MCAT reasoning connections

## Layer 4: Equations, Units, Constants, and Proportional Reasoning
Use for:
- formulas
- units
- constants
- proportional relationships
- “if X increases, Y changes how?” logic

## Layer 5: Common Confusions and MCAT Traps
Use for:
- common mix-ups
- misleading wording
- graph/data traps
- experimental interpretation traps
- answer-choice traps

## Layer 6: VERIFY Items
Use for:
- unclear transcript phrases
- possible speech-to-text errors
- uncertain scientific claims
- chapter-numbering conflicts

---

# Physics Bulk Intake Plan

## Chapters Detected in Transcript
The uploaded bulk physics transcript contains podcast segments corresponding to these Kaplan Physics/Math topics:

1. Mathematics / Foundations
2. Kinematics and Dynamics
3. Work and Energy
4. Thermodynamics
5. Fluids
6. Electrostatics and Magnetism
7. Circuits
8. Waves and Sound
9. Light and Optics
10. Atomic and Nuclear Phenomena
11. Reasoning About the Design and Execution of Research
12. Data-Based and Statistical Reasoning

## Transcript-to-Kaplan Mapping

| Transcript Label Detected | Kaplan Backbone Placement | Status |
|---|---|---|
| “Chapter one: Math and Physics Foundations” | Physics Ch10: Mathematics | VERIFY numbering conflict |
| “Chapter two: Kinematics and Dynamics” | Physics Ch1: Kinematics and Dynamics | Clean concept match |
| “Chapter three: Newtonian Mechanics” | Physics Ch1: Kinematics and Dynamics | VERIFY duplicate / alternate label |
| “Chapter three: Work and Energy” | Physics Ch2: Work and Energy | VERIFY numbering conflict |
| “Chapter four: Work, Energy, and Momentum” | Physics Ch2 plus Ch1 momentum links | VERIFY mixed chapter scope |
| “Chapter five: Fluids” | Physics Ch4: Fluids | VERIFY numbering conflict |
| “Chapter six: Circuits” | Physics Ch6: Circuits | Clean concept match |
| “Chapter seven / ten: Waves and Sound” | Physics Ch7: Waves and Sound | VERIFY duplicate / alternate label |
| “Chapter eight / eleven: Light and Optics” | Physics Ch8: Light and Optics | VERIFY duplicate / alternate label |
| “Chapter nine / twelve: Atomic and Nuclear Phenomena” | Physics Ch9: Atomic and Nuclear Phenomena | VERIFY duplicate / alternate label |
| “Chapter 11: Research Design” | Physics Ch11: Research Design | Clean concept match |
| “Chapter 12: Data / Statistical Reasoning” | Physics Ch12: Data and Statistics | Clean concept match |

## Major Recurring Themes Across Physics
- Conservation laws reappear across mechanics, fluids, circuits, and thermodynamics.
- “Pressure/voltage/gradient” is a repeated driving-force pattern.
- Resistance appears in fluids, circuits, and biological transport.
- Geometry controls many equations: area, radius, distance squared, distance cubed, focal length, and wavelength.
- The MCAT often tests proportional reasoning more than arithmetic.
- Unit analysis is the safety net for formulas, especially under time pressure.
- Biology applications are strongest for fluids, circuits, waves/sound, optics, thermodynamics, and radiation.

---

# Master Subject Branches

## Physics
Status: Active build

### Chapter 1: Kinematics and Dynamics
Status: Bulk ingested

### Chapter 2: Work and Energy
Status: Bulk ingested

### Chapter 3: Thermodynamics
Status: Bulk ingested

### Chapter 4: Fluids
Status: Bulk ingested

### Chapter 5: Electrostatics and Magnetism
Status: Bulk ingested

### Chapter 6: Circuits
Status: Bulk ingested

### Chapter 7: Waves and Sound
Status: Bulk ingested

### Chapter 8: Light and Optics
Status: Bulk ingested

### Chapter 9: Atomic and Nuclear Phenomena
Status: Bulk ingested

### Chapter 10: Mathematics
Status: Bulk ingested

### Chapter 11: Research Design
Status: Bulk ingested

### Chapter 12: Data and Statistics
Status: Bulk ingested

---

## Biology
Status: Placeholder for later

## Biochemistry
Status: Placeholder for later

## General Chemistry
Status: Placeholder for later

## Organic Chemistry
Status: Placeholder for later

## Psychology/Sociology
Status: Placeholder for later

---

# Physics Major Concept Entries

## Concept: SI Units and Derived Units

Subject: Physics  
Kaplan Chapter: Ch10 Mathematics  
Kaplan Section: Units / Mathematical Foundations  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter one: Math and Physics Foundations”  
Transcript Timestamp: Not provided  
Status: Clean, with chapter-label VERIFY

### Definition
SI units are the standard measurement units used in physics. Derived units are built from base SI units.

### Simple Restatement
Physics equations only work cleanly when the units match. The MCAT will often punish using grams instead of kilograms, centimeters instead of meters, or liters instead of cubic meters.

### Why It Matters for the MCAT
Unit errors can create answer choices that look mathematically reasonable but are wrong by factors of 10, 100, 1000, or more.

### Related Concepts
- SI units — anchor — dimensional analysis
- kilogram — is base unit for — mass
- newton — is derived from — kg·m/s²
- joule — is derived from — kg·m²/s²
- pascal — is derived from — N/m²
- coulomb — is derived from — ampere·second

### Equations / Units / Proportional Reasoning
- $1\ \text{N} = 1\ \text{kg}\cdot\text{m}/\text{s}^2$
- $1\ \text{J} = 1\ \text{N}\cdot\text{m} = 1\ \text{kg}\cdot\text{m}^2/\text{s}^2$
- $1\ \text{Pa} = 1\ \text{N}/\text{m}^2$
- $1\ \text{m}^3 = 1000\ \text{L}$
- $1\ \text{mL} = 1\ \text{cm}^3$

### Cross-Subject Links
- General Chemistry: metric prefixes, molarity, gas laws
- Biology: lung volume, blood pressure, flow rates
- Biochemistry: energy units, free energy, ATP

### Common Confusions
- Confusion: “1 L = 1 m³.”
- Correction: $1\ \text{m}^3 = 1000\ \text{L}$.
- Confusion: “Mass in grams can go straight into physics equations.”
- Correction: Most physics equations require kilograms.

### MCAT Traps
- A passage gives volume in liters but asks for SI pressure or density.
- A passage gives mass in grams and expects conversion to kilograms before using $F=ma$ or $KE=\frac12mv^2$.
- Square/cubic unit conversions require squaring/cubing the conversion factor.

### Micro-Nodes Under This Concept
- kilogram — SI base unit for mass — Layer 4
- pascal — pressure unit, $N/m^2$ — Layer 4
- liter — volume unit, not SI base — Layer 4
- cubic meter — SI volume unit — Layer 4
- prefix kilo — $10^3$ — Layer 4
- prefix milli — $10^{-3}$ — Layer 4
- prefix micro — $10^{-6}$ — Layer 4
- prefix nano — $10^{-9}$ — Layer 4
- prefix pico — $10^{-12}$ — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 4, 5

### Toggle Behavior
Visible in:
- Big-picture mode: yes
- Chapter-study mode: yes
- Deep-detail mode: yes
- Equation-review mode: yes
- Trap-review mode: yes
- VERIFY-review mode: no

---

## Concept: Scientific Notation and Estimation

Subject: Physics  
Kaplan Chapter: Ch10 Mathematics  
Kaplan Section: Arithmetic / Exponents / Problem-Solving  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Math and Physics Foundations”  
Status: Clean

### Definition
Scientific notation expresses very large or very small numbers as $n \times 10^m$, where $1 \leq n < 10$.

### Simple Restatement
Scientific notation is the MCAT’s way of compressing huge and tiny numbers so you can estimate without a calculator.

### Why It Matters for the MCAT
C/P often rewards fast approximation and punishes brute-force arithmetic.

### Related Concepts
- scientific notation — enables — estimation
- estimation — reduces — arithmetic load
- exponent rules — control — multiplication, division, powers, roots
- square roots — require — even exponents for fast mental math

### Equations / Units / Proportional Reasoning
- $10^a \times 10^b = 10^{a+b}$
- $10^a / 10^b = 10^{a-b}$
- $(10^a)^b = 10^{ab}$
- For square roots, convert to an even exponent when possible.

### Common Confusions
- Confusion: moving decimal left decreases exponent.
- Correction: moving decimal left makes the front number smaller, so exponent increases.
- Confusion: square rooting odd powers of ten mentally.
- Correction: adjust notation so the power of ten is even.

### MCAT Traps
- Answer choices differ by powers of ten.
- Calculations look hard but can be solved by exponent tracking.
- pH/log problems are solvable by approximation.

### Micro-Nodes Under This Concept
- significant — front number in scientific notation — Layer 4
- exponent — power of 10 — Layer 4
- even exponent — useful for square roots — Layer 4
- factor-of-1000 error — common unit trap — Layer 5

### Future Draw.io Layer
Layers: 2, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Logarithms, pH, and Decibels

Subject: Physics / General Chemistry / Psychology-Sociology  
Kaplan Chapter: Ch10 Mathematics; Ch7 Waves and Sound  
Kaplan Section: Logs; Sound Intensity  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
A logarithm asks what power a base must be raised to in order to produce a number.

### Simple Restatement
Logs compress huge scales into manageable numbers. pH and decibels both use logarithmic thinking.

### Why It Matters for the MCAT
The MCAT expects calculator-free log approximations for pH, sound level, and order-of-magnitude comparisons.

### Related Concepts
- logarithm — compresses — wide numerical ranges
- pH — equals — $-\log[H^+]$
- decibel level — depends on — logarithm of intensity ratio
- Weber’s law — explains — logarithmic perception

### Equations / Units / Proportional Reasoning
- $\log(AB)=\log A+\log B$
- $\log(A/B)=\log A-\log B$
- $\log(A^n)=n\log A$
- $\text{pH}=-\log[H^+]$
- $\beta_f=\beta_i+10\log(I_f/I_i)$
- A 10 dB increase means 10× intensity.
- A 20 dB increase means 100× intensity.
- A 30 dB increase means 1000× intensity.

### Cross-Subject Links
- General Chemistry: acids, bases, pH
- Psychology/Sociology: Weber’s law and difference thresholds
- Biology: hearing perception and sensory thresholds

### Common Confusions
- Confusion: a 10 dB increase means sound is 10 units louder in a linear sense.
- Correction: decibels are logarithmic; 10 dB corresponds to a 10-fold physical intensity increase.
- Confusion: pH has units.
- Correction: pH is unitless.

### MCAT Traps
- Asking for physical intensity ratio from decibel difference.
- Asking pH from $n \times 10^{-m}$ without a calculator.
- Equating subjective loudness with objective intensity.

### Micro-Nodes Under This Concept
- beta ($\beta$) — sound level in decibels — Layer 4
- intensity ($I$) — power per area, W/m² — Layer 4
- threshold of hearing — $10^{-12}\ \text{W/m}^2$ — Layer 4
- pH — unitless logarithmic acidity scale — Layer 4

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Vectors and Scalars

Subject: Physics  
Kaplan Chapter: Ch1 Kinematics and Dynamics  
Kaplan Section: Vectors and Scalars  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter two: Kinematics and Dynamics” and “Math Foundations”  
Status: Clean

### Definition
A scalar has magnitude only. A vector has both magnitude and direction.

### Simple Restatement
Scalars tell “how much.” Vectors tell “how much and which way.”

### Why It Matters for the MCAT
Many physics mistakes come from confusing distance with displacement or speed with velocity.

### Related Concepts
- distance — is scalar version of — path length
- displacement — is vector from — initial point to final point
- speed — uses — distance
- velocity — uses — displacement
- force — is — vector
- pressure — is — scalar

### Equations / Units / Proportional Reasoning
- $v_x=v\cos\theta$
- $v_y=v\sin\theta$
- $v=\sqrt{v_x^2+v_y^2}$
- $\theta=\tan^{-1}(v_y/v_x)$

### Cross-Subject Links
- Biology: vector forces in muscle/bone mechanics
- General Chemistry: pressure as scalar in gas laws
- Physics: all motion/force chapters

### Common Confusions
- Confusion: distance and displacement are the same.
- Correction: distance is total path; displacement is straight-line change in position.
- Confusion: pressure is a vector because force is a vector.
- Correction: pressure is scalar because it acts uniformly in all directions in a fluid.

### MCAT Traps
- Circular motion returning to the start has nonzero distance but zero displacement.
- Average speed may be nonzero while average velocity is zero.
- Vector subtraction means adding the opposite vector.

### Micro-Nodes Under This Concept
- tail — starting point of vector — Layer 2
- head/tip — endpoint of vector — Layer 2
- resultant vector — net vector sum — Layer 2
- tip-to-tail method — graphical vector addition — Layer 2
- sine values — memorize common angles — Layer 4
- cosine values — memorize common angles — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Kinematics Graphs

Subject: Physics  
Kaplan Chapter: Ch1 Kinematics and Dynamics  
Kaplan Section: Displacement, Velocity, Acceleration; Graphs  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Kinematics graphs describe how position, velocity, and acceleration change over time.

### Simple Restatement
The slope tells a rate of change. The area under the curve tells an accumulated quantity.

### Why It Matters for the MCAT
Graph interpretation is a major MCAT skill and often avoids direct formula memorization.

### Related Concepts
- slope of position-time graph — gives — velocity
- slope of velocity-time graph — gives — acceleration
- area under velocity-time graph — gives — displacement
- area under acceleration-time graph — gives — change in velocity
- flat velocity-time graph — indicates — zero acceleration

### Equations / Units / Proportional Reasoning
- Slope = rise/run
- $\Delta x / \Delta t = v$
- $\Delta v / \Delta t = a$
- $(m/s)\cdot s = m$
- $(m/s^2)\cdot s = m/s$

### Common Confusions
- Confusion: a high horizontal line on a velocity-time graph means high acceleration.
- Correction: a horizontal velocity-time line has zero slope, so acceleration is zero.
- Confusion: area and slope mean the same thing.
- Correction: slope gives rate; area gives accumulation.

### MCAT Traps
- Trapezoid areas must be split into a rectangle plus triangle.
- Negative slope on a velocity-time graph means negative acceleration, not always “slowing down” unless velocity is positive.

### Micro-Nodes Under This Concept
- position-time graph — slope = velocity — Layer 4
- velocity-time graph — slope = acceleration; area = displacement — Layer 4
- acceleration-time graph — area = change in velocity — Layer 4
- trapezoid area — split into shapes — Layer 5

### Future Draw.io Layer
Layers: 2, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Newton’s Laws and Net Force

Subject: Physics  
Kaplan Chapter: Ch1 Kinematics and Dynamics  
Kaplan Section: Forces and Acceleration; Newton’s Laws  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Newtonian Mechanics”  
Status: Clean

### Definition
Newton’s laws describe how forces determine motion.

### Simple Restatement
Objects maintain their motion unless a net external force changes it. Net force causes acceleration.

### Why It Matters for the MCAT
Forces underlie mechanics, fluids, musculoskeletal systems, circuits analogies, and equilibrium.

### Related Concepts
- net force — causes — acceleration
- mass — resists — acceleration
- acceleration — is proportional to — net force
- acceleration — is inversely proportional to — mass
- equilibrium — requires — net force equals zero
- normal force — opposes — surface penetration
- friction — opposes — relative motion

### Equations / Units / Proportional Reasoning
- $\sum F=ma$
- $F_g=mg$
- If net force doubles, acceleration doubles.
- If mass doubles with same net force, acceleration halves.

### Cross-Subject Links
- Biology: muscles generate forces on bones; joints act as lever systems
- Fluids: pressure arises from force distributed over area
- Circuits: resistance analogy mirrors friction/opposition

### Common Confusions
- Confusion: constant velocity requires constant net force.
- Correction: constant velocity requires zero net force.
- Confusion: mass and weight are the same.
- Correction: mass is kg; weight is gravitational force $mg$.

### MCAT Traps
- Free-body diagrams with extra irrelevant forces.
- Object moving at constant speed despite multiple balanced forces.
- Normal force not always equal to $mg$ on ramps or accelerated systems.

### Micro-Nodes Under This Concept
- inertia — resistance to acceleration — Layer 2
- normal force — contact force perpendicular to surface — Layer 2
- static friction — prevents slipping — Layer 2
- kinetic friction — opposes sliding — Layer 2
- tension — pulling force through rope/string — Layer 2
- free-body diagram — map of forces — Layer 5

### Future Draw.io Layer
Layers: 1, 2, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Projectile Motion

Subject: Physics  
Kaplan Chapter: Ch1 Kinematics and Dynamics  
Kaplan Section: Motion with Constant Acceleration  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Projectile motion is two-dimensional motion under constant gravitational acceleration, neglecting air resistance.

### Simple Restatement
Horizontal motion and vertical motion are solved separately but occur at the same time.

### Why It Matters for the MCAT
Projectile questions test vectors, trig components, gravity, and graph interpretation.

### Related Concepts
- initial velocity — separates into — horizontal and vertical components
- horizontal velocity — remains constant if — no air resistance
- vertical velocity — changes due to — gravity
- gravity — causes — downward acceleration
- time — links — x-motion and y-motion

### Equations / Units / Proportional Reasoning
- $v_x=v_0\cos\theta$
- $v_y=v_0\sin\theta$
- $\Delta y=v_{0y}t+\frac12at^2$
- $\Delta x=v_xt$
- At peak: $v_y=0$ while $v_x$ remains nonzero.

### Common Confusions
- Confusion: velocity is zero at the top.
- Correction: vertical velocity is zero at the top; horizontal velocity remains.
- Confusion: heavier objects fall faster in ideal projectile motion.
- Correction: without air resistance, mass does not affect gravitational acceleration.

### MCAT Traps
- Forgetting to split velocity into components.
- Using total velocity where only horizontal or vertical component is needed.
- Treating x and y acceleration as the same.

### Micro-Nodes Under This Concept
- range — horizontal distance — Layer 2
- peak — vertical velocity equals zero — Layer 2
- launch angle — determines component split — Layer 4
- $g$ — $9.8\ \text{m/s}^2$ downward — Layer 4

### Future Draw.io Layer
Layers: 2, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Work and Energy

Subject: Physics  
Kaplan Chapter: Ch2 Work and Energy  
Kaplan Section: Energy; Work  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter three: Work and Energy” / “Chapter four: Work, Energy, and Momentum”  
Status: Clean with transcript-number VERIFY

### Definition
Work is the transfer of energy by a force acting through a displacement.

### Simple Restatement
Work tells how much energy a force gives to or takes from an object as it moves.

### Why It Matters for the MCAT
Energy conservation can solve many mechanics questions faster than force equations.

### Related Concepts
- work — transfers — energy
- net work — changes — kinetic energy
- conservative forces — preserve — mechanical energy
- nonconservative forces — dissipate — mechanical energy
- friction — converts — mechanical energy to thermal energy
- power — measures — rate of energy transfer

### Equations / Units / Proportional Reasoning
- $W=Fd\cos\theta$
- $KE=\frac12mv^2$
- $PE_g=mgh$
- $W_{\text{net}}=\Delta KE$
- $P=W/t=Fv$
- If velocity doubles, kinetic energy quadruples.

### Cross-Subject Links
- Biology: muscle contraction does work; ATP supplies energy
- Fluids: hydraulic lift trades force for distance while conserving work
- Thermodynamics: work and heat change internal energy

### Common Confusions
- Confusion: force always does work.
- Correction: force only does work if it has a component along displacement.
- Confusion: heavier means more kinetic energy at same momentum.
- Correction: kinetic energy and momentum scale differently.

### MCAT Traps
- Forgetting the cosine term.
- Missing that centripetal force does no work in uniform circular motion because force is perpendicular to displacement.
- Treating nonconservative forces as preserving mechanical energy.

### Micro-Nodes Under This Concept
- joule — unit of work/energy — Layer 4
- watt — unit of power — Layer 4
- conservative force — path independent — Layer 2
- nonconservative force — path dependent, dissipative — Layer 2
- work-energy theorem — $W_{\text{net}}=\Delta KE$ — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Mechanical Advantage

Subject: Physics  
Kaplan Chapter: Ch2 Work and Energy  
Kaplan Section: Mechanical Advantage  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Mechanical advantage describes how a machine trades force for distance.

### Simple Restatement
Machines do not give free energy. They let you use less force over a greater distance.

### Why It Matters for the MCAT
The MCAT tests mechanical advantage conceptually through levers, ramps, pulleys, hydraulics, and biological joints.

### Related Concepts
- mechanical advantage — trades — force for distance
- simple machines — conserve — work ideally
- hydraulic lift — uses — Pascal’s principle
- lever — transmits — torque
- ramp — reduces — required force by increasing distance

### Equations / Units / Proportional Reasoning
- $MA=F_{\text{out}}/F_{\text{in}}$
- Lever ideal MA: $L_{\text{in}}/L_{\text{out}}$
- Ramp ideal MA: $d/h$
- Hydraulic lift: $F_1/A_1=F_2/A_2$
- Work conservation: $F_{\text{in}}d_{\text{in}}=F_{\text{out}}d_{\text{out}}$

### Cross-Subject Links
- Biology: bones and muscles act as levers
- Fluids: Pascal’s principle in hydraulic lifts
- Orthopedics/physiology: joint torque and mechanical disadvantage

### Common Confusions
- Confusion: a machine multiplies energy.
- Correction: ideal machines conserve work; real machines lose some energy to friction.
- Confusion: force mechanical advantage and distance mechanical advantage are separate unrelated ideas.
- Correction: they are reciprocal expressions of work conservation.

### MCAT Traps
- A system may increase force output but require larger input distance.
- Biological levers often favor speed/range of motion over force advantage.

### Micro-Nodes Under This Concept
- lever arm — perpendicular distance to pivot — Layer 2
- fulcrum — pivot point — Layer 2
- ramp — incline that trades distance for force — Layer 2
- spool/wheel-and-axle — radius ratio controls force tradeoff — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Momentum and Impulse

Subject: Physics  
Kaplan Chapter: Ch1 Kinematics and Dynamics; Ch2 Work and Energy  
Kaplan Section: Dynamics; Momentum crossover  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Work, Energy, and Momentum”  
Status: Clean

### Definition
Momentum is mass times velocity. Impulse is force applied over time and equals change in momentum.

### Simple Restatement
Momentum tells how hard motion is to stop. Impulse tells how much a force changes that motion over time.

### Why It Matters for the MCAT
Momentum connects collisions, force-time graphs, injury prevention, and conservation laws.

### Related Concepts
- momentum — depends on — mass and velocity
- impulse — changes — momentum
- force-time graph area — gives — impulse
- elastic collision — conserves — kinetic energy and momentum
- inelastic collision — conserves — momentum but not kinetic energy

### Equations / Units / Proportional Reasoning
- $p=mv$
- $J=F\Delta t=\Delta p$
- $F=\Delta p/\Delta t$
- Increasing collision time decreases average force for same momentum change.

### Cross-Subject Links
- Biology/medicine: airbags, padding, helmets reduce injury by increasing stopping time
- Research design: force-time graphs and area interpretation

### Common Confusions
- Confusion: momentum and kinetic energy are the same.
- Correction: $p=mv$ while $KE=\frac12mv^2$.
- Confusion: inelastic collision violates conservation.
- Correction: momentum is conserved in isolated collisions; kinetic energy may transform.

### MCAT Traps
- Collision questions that ask for momentum but provide kinetic energy distractions.
- Graph area under force-time curve gives impulse.

### Micro-Nodes Under This Concept
- impulse — force-time area — Layer 4
- elastic collision — KE conserved — Layer 2
- inelastic collision — objects may stick — Layer 2
- perfectly inelastic — maximum KE loss, momentum conserved — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Thermodynamics and Internal Energy

Subject: Physics  
Kaplan Chapter: Ch3 Thermodynamics  
Kaplan Section: Zeroth Law; Systems; First Law  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Thermodynamics describes heat, work, energy transfer, and the behavior of systems.

### Simple Restatement
Thermodynamics tracks where energy goes: into heat, into work, or into changing a system’s internal energy.

### Why It Matters for the MCAT
Thermodynamics links physics, general chemistry, metabolism, homeostasis, and biological energy flow.

### Related Concepts
- temperature — measures — average kinetic energy
- heat — transfers due to — temperature difference
- work — transfers energy by — force/displacement or gas expansion/compression
- first law — conserves — energy
- internal energy — changes by — heat and work
- zeroth law — defines — thermal equilibrium

### Equations / Units / Proportional Reasoning
- $\Delta U=Q-W$ using common physics sign convention: work done by system decreases internal energy.
- $Q=mc\Delta T$
- $Q=mL$ for phase changes
- At constant temperature for ideal gas, $\Delta U=0$.
- Expansion work by gas tends to reduce internal energy if no heat enters.

### Cross-Subject Links
- Biology: body temperature regulation, sweating, shivering
- Biochemistry: metabolism produces heat and usable energy
- General Chemistry: enthalpy, entropy, Gibbs free energy

### Common Confusions
- Confusion: heat and temperature are the same.
- Correction: heat is energy transfer; temperature is average molecular kinetic energy.
- Confusion: all energy changes involve temperature change.
- Correction: phase changes absorb/release heat without temperature changing.

### MCAT Traps
- Sign convention for work in the first law.
- Isolated vs closed vs open systems.
- Phase-change plateaus where heat is added but temperature stays constant.

### Micro-Nodes Under This Concept
- system — part being studied — Layer 2
- surroundings — everything outside system — Layer 2
- open system — exchanges matter and energy — Layer 2
- closed system — exchanges energy but not matter — Layer 2
- isolated system — exchanges neither matter nor energy — Layer 2
- specific heat — heat per mass per degree — Layer 4
- latent heat — heat for phase change — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Entropy and the Second Law

Subject: Physics / General Chemistry / Biochemistry  
Kaplan Chapter: Ch3 Thermodynamics  
Kaplan Section: Second Law and Entropy  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Entropy measures the dispersal of energy and the number of accessible microstates in a system.

### Simple Restatement
Entropy tends to increase in spontaneous processes because energy spreads out.

### Why It Matters for the MCAT
Entropy links physics thermodynamics, chemistry spontaneity, biological order, and metabolism.

### Related Concepts
- second law — states — total entropy of universe increases for spontaneous processes
- entropy — increases with — dispersal of energy
- reversible process — has — $\Delta S=Q_{\text{rev}}/T$
- heat flow — increases — entropy of colder surroundings
- biological order — requires — energy input and entropy export

### Equations / Units / Proportional Reasoning
- $\Delta S=\frac{Q_{\text{rev}}}{T}$
- Higher temperature reduces entropy change for same reversible heat transfer.
- Phase changes to more dispersed states increase entropy.

### Cross-Subject Links
- General Chemistry: Gibbs free energy, spontaneity
- Biochemistry: metabolism maintains order by consuming energy
- Biology: homeostasis requires energy expenditure

### Common Confusions
- Confusion: living systems violate the second law.
- Correction: organisms maintain local order by increasing entropy in surroundings.
- Confusion: entropy is simply “messiness.”
- Correction: entropy is better understood as energy dispersal / microstate multiplicity.

### MCAT Traps
- Assuming lower entropy in all organized biological systems without considering surroundings.
- Forgetting temperature in $\Delta S=Q_{\text{rev}}/T$.

### Micro-Nodes Under This Concept
- reversible process — idealized path for entropy calculation — Layer 4
- microstates — arrangements consistent with macrostate — Layer 2
- heat reservoir — large body with stable temperature — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Fluids, Density, and Pressure

Subject: Physics  
Kaplan Chapter: Ch4 Fluids  
Kaplan Section: Characteristics of Fluids and Solids; Hydrostatics  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter five: Fluids”  
Status: Clean with transcript-number VERIFY

### Definition
A fluid is a substance that flows and takes the shape of its container. Density is mass per volume. Pressure is force per area.

### Simple Restatement
Density tells how packed a substance is. Pressure tells how concentrated a force is over an area.

### Why It Matters for the MCAT
Fluids are heavily tested through blood flow, breathing, buoyancy, hydraulic systems, and pressure gradients.

### Related Concepts
- density — equals — mass divided by volume
- pressure — equals — force divided by area
- pressure — is — scalar
- hydrostatic pressure — increases with — depth
- gauge pressure — excludes — atmospheric pressure
- absolute pressure — includes — ambient pressure

### Equations / Units / Proportional Reasoning
- $\rho=m/V$
- $P=F/A$
- $P=P_0+\rho gz$
- Gauge pressure = absolute pressure − atmospheric pressure
- $1\ \text{atm}=760\ \text{mmHg}=760\ \text{torr}\approx1.013\times10^5\ \text{Pa}$

### Cross-Subject Links
- Biology: blood pressure, lung ventilation, kidney filtration
- General Chemistry: gas laws, pressure units
- Circuits: pressure gradient analogizes voltage

### Common Confusions
- Confusion: pressure is a vector because force is a vector.
- Correction: pressure is scalar and acts in all directions in a fluid.
- Confusion: depth $z$ and height $h$ are interchangeable.
- Correction: hydrostatic pressure depends on depth below surface.

### MCAT Traps
- Forgetting ambient pressure in closed systems.
- Using gauge pressure when absolute pressure is required.
- Using object density instead of fluid density in buoyancy.

### Micro-Nodes Under This Concept
- density $\rho$ — mass per volume — Layer 4
- pressure $P$ — force per area — Layer 4
- pascal — pressure unit — Layer 4
- torr — pressure unit equal to mmHg — Layer 4
- specific gravity — density ratio to water — Layer 2
- ambient pressure $P_0$ — surface pressure term — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Pascal’s Principle and Hydraulic Systems

Subject: Physics  
Kaplan Chapter: Ch4 Fluids  
Kaplan Section: Hydrostatics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Pascal’s principle states that pressure applied to an enclosed incompressible fluid is transmitted undiminished throughout the fluid.

### Simple Restatement
If you press on one part of a sealed fluid, the pressure spreads everywhere, allowing small forces over small areas to create large forces over large areas.

### Why It Matters for the MCAT
Hydraulic lift questions test pressure equality and work conservation.

### Related Concepts
- pressure — transmits through — incompressible fluid
- hydraulic lift — multiplies — force
- force multiplication — requires — distance tradeoff
- Pascal’s principle — conserves — work ideally

### Equations / Units / Proportional Reasoning
- $P_1=P_2$
- $F_1/A_1=F_2/A_2$
- If output piston area is 100× input area, output force is 100× input force.
- Input piston must move 100× farther for same work.

### Cross-Subject Links
- Mechanical advantage: force-distance tradeoff
- Biology: fluid pressure transmission in vascular compartments

### Common Confusions
- Confusion: hydraulic systems create free energy.
- Correction: they trade distance for force.

### MCAT Traps
- Forgetting that force changes because area changes, while pressure stays equal.
- Ignoring the input/output displacement tradeoff.

### Micro-Nodes Under This Concept
- incompressible fluid — transmits pressure effectively — Layer 2
- input piston — small-area force source — Layer 2
- output piston — large-area force output — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Buoyancy and Archimedes’ Principle

Subject: Physics  
Kaplan Chapter: Ch4 Fluids  
Kaplan Section: Hydrostatics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Buoyant force is the upward force exerted by a fluid on an object due to pressure differences between the object’s bottom and top.

### Simple Restatement
A fluid pushes upward on an object by an amount equal to the weight of fluid displaced.

### Why It Matters for the MCAT
Buoyancy questions often hide the most important variable: the density of the fluid, not the object.

### Related Concepts
- depth difference — creates — pressure difference
- pressure difference — produces — buoyant force
- buoyant force — equals — weight of displaced fluid
- object density — determines — floating versus sinking
- apparent weight — equals — true weight minus buoyant force

### Equations / Units / Proportional Reasoning
- $F_b=\rho_{\text{fluid}}V_{\text{displaced}}g$
- $W_{\text{apparent}}=W_{\text{true}}-F_b$
- Floating: average object density < fluid density
- Sinking: average object density > fluid density

### Cross-Subject Links
- Biology: lung inflation, body density, floating in saltwater
- General Chemistry: density and specific gravity

### Common Confusions
- Confusion: buoyant force uses object density.
- Correction: buoyant force uses fluid density and displaced volume.
- Confusion: a sinking object has no buoyant force.
- Correction: sinking objects still experience buoyant force, just not enough to balance weight.

### MCAT Traps
- Steel anchor in water: buoyant force depends on water displaced, not steel density.
- Spring scale underwater reads apparent weight, not true weight.

### Micro-Nodes Under This Concept
- displaced volume — volume of fluid pushed aside — Layer 2
- apparent weight — scale reading in fluid — Layer 2
- Archimedes — buoyant force principle — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Continuity Equation and Flow Rate

Subject: Physics / Biology  
Kaplan Chapter: Ch4 Fluids  
Kaplan Section: Fluid Dynamics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
The continuity equation states that flow rate remains constant for an incompressible fluid in a closed system.

### Simple Restatement
If the same amount of fluid must pass through every part of a pipe, narrowing the pipe makes the fluid move faster.

### Why It Matters for the MCAT
Continuity links area, speed, blood flow, and capillary beds.

### Related Concepts
- flow rate — equals — area times linear velocity
- area — inversely affects — fluid speed
- total cross-sectional area — determines — capillary blood speed
- capillary beds — increase — total cross-sectional area
- increased total area — decreases — blood velocity

### Equations / Units / Proportional Reasoning
- $Q=Av$
- $A_1v_1=A_2v_2$
- If area halves, speed doubles, assuming constant flow rate.
- For capillaries, total combined area matters, not one capillary’s area.

### Cross-Subject Links
- Biology: cardiovascular exchange in capillaries
- Circuits: do not apply continuity equation to electrical current in a narrowing wire
- Fluids: Poiseuille’s law for real viscous flow

### Common Confusions
- Confusion: blood should move fastest in capillaries because each capillary is narrow.
- Correction: total capillary bed area is huge, so velocity is slow.
- Confusion: continuity applies to electrons in circuits.
- Correction: narrower wire increases resistance and reduces current.

### MCAT Traps
- Comparing one capillary to the aorta instead of total capillary bed area.
- Forgetting the difference between flow rate and speed.

### Micro-Nodes Under This Concept
- flow rate $Q$ — volume per time — Layer 4
- cross-sectional area $A$ — pipe area — Layer 4
- linear speed $v$ — distance per time — Layer 4
- capillary bed — many tiny vessels in parallel — Layer 3

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Bernoulli’s Equation

Subject: Physics  
Kaplan Chapter: Ch4 Fluids  
Kaplan Section: Fluid Dynamics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Bernoulli’s equation expresses conservation of energy for an ideal fluid.

### Simple Restatement
A moving fluid has an energy budget. If more energy is in motion, less is available as static pressure.

### Why It Matters for the MCAT
Bernoulli questions test the counterintuitive idea that faster ideal fluid flow has lower static pressure.

### Related Concepts
- ideal fluid — has — no viscosity
- faster flow — increases — dynamic pressure
- faster flow — decreases — static pressure
- height — contributes to — gravitational potential term
- Venturi effect — demonstrates — lower pressure in narrower faster-flow region

### Equations / Units / Proportional Reasoning
- $P+\frac12\rho v^2+\rho gh=\text{constant}$
- If height is constant and speed increases, static pressure decreases.
- If pipe narrows, continuity increases speed and Bernoulli lowers pressure.

### Cross-Subject Links
- Biology: airway flow, blood vessel constrictions as approximation only
- Physics: conservation of energy
- Aerodynamics: lift from pressure differences

### Common Confusions
- Confusion: faster fluid always pushes harder outward.
- Correction: faster ideal fluid has lower static pressure.
- Confusion: Bernoulli applies perfectly to real blood.
- Correction: blood is viscous; Poiseuille often matters.

### MCAT Traps
- Using Bernoulli when viscosity or radius-to-fourth language indicates Poiseuille.
- Forgetting static vs dynamic pressure distinction.
- Treating airplane lift explanation as only Bernoulli; real lift also involves momentum changes. For MCAT, use the provided passage framing.

### Micro-Nodes Under This Concept
- static pressure — outward wall pressure — Layer 2
- dynamic pressure — kinetic energy density term — Layer 4
- Venturi meter — narrow region has lower pressure — Layer 2
- ideal fluid — nonviscous, incompressible approximation — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Viscosity and Poiseuille’s Law

Subject: Physics / Biology  
Kaplan Chapter: Ch4 Fluids  
Kaplan Section: Fluid Dynamics; Fluids in Physiology  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Viscosity is a fluid’s internal resistance to flow. Poiseuille’s law describes flow through a cylindrical tube for a viscous fluid under laminar conditions.

### Simple Restatement
Thicker fluids flow less easily. Tube radius dominates flow because it is raised to the fourth power.

### Why It Matters for the MCAT
The radius-to-fourth relationship is one of the highest-yield proportionality traps in MCAT physics.

### Related Concepts
- viscosity — resists — flow
- pressure gradient — drives — viscous flow
- radius — strongly increases — flow rate
- vessel narrowing — sharply increases — resistance
- atherosclerosis — decreases — vessel radius
- vasoconstriction — increases — vascular resistance

### Equations / Units / Proportional Reasoning
- $Q=\frac{\pi r^4\Delta P}{8\eta L}$
- $Q\propto r^4$
- If radius halves, flow becomes $1/16$ as large if pressure gradient is unchanged.
- To maintain flow when radius halves, pressure gradient must increase 16×.
- Resistance in vessels is proportional to $1/r^4$.

### Cross-Subject Links
- Biology: cardiovascular physiology, blood pressure, atherosclerosis
- Circuits: fluid resistance analogizes electrical resistance
- General Chemistry: intermolecular forces influence viscosity

### Common Confusions
- Confusion: small radius changes cause small flow changes.
- Correction: radius changes are amplified by the fourth power.
- Confusion: Poiseuille applies to turbulent flow.
- Correction: it assumes laminar flow.

### MCAT Traps
- Plaque narrowing vessel radius.
- Asking whether pressure or flow changes when vessel radius changes.
- Forgetting viscosity $\eta$ is in the denominator.

### Micro-Nodes Under This Concept
- viscosity $\eta$ — internal friction — Layer 4
- laminar flow — smooth parallel layers — Layer 2
- turbulent flow — chaotic eddies — Layer 2
- critical velocity — threshold for turbulence — Layer 2
- atherosclerosis — plaque narrows radius — Layer 3

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Electrostatic Force and Electric Fields

Subject: Physics  
Kaplan Chapter: Ch5 Electrostatics and Magnetism  
Kaplan Section: Charges; Coulomb’s Law; Electric Fields  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: Magnetism/Electromagnetism and math foundations  
Status: Clean

### Definition
Electrostatics describes forces and fields generated by electric charges at rest.

### Simple Restatement
Charges create fields, and fields exert forces on other charges.

### Why It Matters for the MCAT
Electrostatics underlies circuits, capacitors, membrane potentials, action potentials, and molecular interactions.

### Related Concepts
- charge — creates — electric field
- electric field — exerts force on — charge
- Coulomb force — follows — inverse square law
- like charges — repel — each other
- opposite charges — attract — each other
- electric potential — stores — potential energy per charge

### Equations / Units / Proportional Reasoning
- $F=kq_1q_2/r^2$
- $E=F/q$
- $U=kq_1q_2/r$
- $V=U/q$
- Doubling distance decreases electrostatic force to one-fourth.

### Cross-Subject Links
- General Chemistry: ionic bonds, intermolecular forces
- Biology: membrane potential, ion gradients
- Biochemistry: protein-ligand interactions, charged amino acids

### Common Confusions
- Confusion: electric field and electric force are the same.
- Correction: field is force per unit charge; force depends on the test charge.
- Confusion: electric potential and electric potential energy are the same.
- Correction: potential is energy per charge.

### MCAT Traps
- Inverse square proportionality.
- Sign of charge affecting direction of force.
- Mixing potential $V$ with field $E$.

### Micro-Nodes Under This Concept
- elementary charge — $1.6\times10^{-19}$ C — Layer 4
- Coulomb constant $k$ — electrostatic proportionality constant — Layer 4
- electric field line — direction of force on positive test charge — Layer 2
- equipotential — same electric potential — Layer 2

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Magnetism and Electromagnetic Induction

Subject: Physics  
Kaplan Chapter: Ch5 Electrostatics and Magnetism  
Kaplan Section: Magnetism  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter nine Magnetism and Electromagnetism”  
Status: Clean with transcript-number VERIFY

### Definition
Magnetism describes forces caused by moving charges and magnetic fields. Electromagnetic induction occurs when changing magnetic flux induces an EMF/current.

### Simple Restatement
Moving charge can feel magnetic force, and changing magnetic environments can generate electricity.

### Why It Matters for the MCAT
Magnetism questions test right-hand rule logic, charged particle motion, and induced current direction.

### Related Concepts
- moving charge — experiences — magnetic force
- current-carrying wire — creates — magnetic field
- magnetic force — is perpendicular to — velocity and magnetic field
- changing magnetic flux — induces — EMF
- Lenz’s law — opposes — change in magnetic flux

### Equations / Units / Proportional Reasoning
- $F=qvB\sin\theta$
- $F=ILB\sin\theta$
- $\Phi_B=BA\cos\theta$
- induced EMF magnitude $\propto$ rate of change of flux
- If velocity is parallel to magnetic field, magnetic force is zero.

### Cross-Subject Links
- Circuits: induced EMF can drive current
- Biology/medicine: MRI uses magnetic fields, but detailed MRI physics may exceed MCAT scope unless passage-provided
- Atomic/nuclear: charged particle paths in magnetic fields

### Common Confusions
- Confusion: magnetic force changes speed.
- Correction: because force is perpendicular to velocity, it changes direction, not speed, in ideal circular motion.
- Confusion: magnetic fields act on stationary charges.
- Correction: magnetic force requires motion or current.

### MCAT Traps
- Right-hand rule direction errors.
- Forgetting $\sin\theta$.
- Lenz’s law: induced current opposes the change, not necessarily the field itself.

### Micro-Nodes Under This Concept
- magnetic field $B$ — measured in tesla — Layer 4
- flux $\Phi_B$ — magnetic field through area — Layer 4
- right-hand rule — direction tool — Layer 5
- Lenz’s law — induced field opposes change — Layer 5
- solenoid — coil generating magnetic field — Layer 2

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Current, Voltage, and Kirchhoff’s Laws

Subject: Physics  
Kaplan Chapter: Ch6 Circuits  
Kaplan Section: Current; Kirchhoff’s Laws  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter six: Circuits”  
Status: Clean

### Definition
Current is charge flow per unit time. Voltage is electric potential difference. Kirchhoff’s laws apply conservation of charge and energy to circuits.

### Simple Restatement
Current is how much charge passes each second. Voltage is the electrical “pressure” that drives charge. Charge cannot pile up at junctions, and energy cannot appear from nowhere around loops.

### Why It Matters for the MCAT
Circuits are a high-yield physics topic and connect strongly to cardiac conduction, neurons, and electrochemical cells.

### Related Concepts
- current — equals — charge per time
- voltage — drives — current
- junction rule — conserves — charge
- loop rule — conserves — energy
- conventional current — flows from — positive to negative
- electrons — move from — negative to positive in metal wires
- EMF — supplies — potential difference

### Equations / Units / Proportional Reasoning
- $I=Q/\Delta t$
- $1\ \text{A}=1\ \text{C/s}$
- Junction rule: $\sum I_{\text{in}}=\sum I_{\text{out}}$
- Loop rule: $\sum V=0$ around a closed loop or source voltage = total drops
- EMF is measured in volts, not newtons.

### Cross-Subject Links
- Biology: neurons, cardiac conduction, membrane potentials
- General Chemistry: redox cells create EMF
- Biochemistry: electron transport chain uses electrochemical gradients

### Common Confusions
- Confusion: conventional current and electron flow point the same way.
- Correction: conventional current points opposite electron movement in metal.
- Confusion: EMF is a force.
- Correction: EMF is voltage / energy per charge.

### MCAT Traps
- Drawing current arrow the wrong direction.
- Treating charge as being consumed by resistors.
- Forgetting current splits at parallel junctions.

### Micro-Nodes Under This Concept
- ampere — coulomb per second — Layer 4
- coulomb — unit of charge — Layer 4
- EMF $\epsilon$ — ideal battery voltage — Layer 4
- DC current — one-direction flow — Layer 2
- AC current — periodically reverses — Layer 2
- metallic conduction — electron sea — Layer 2
- electrolytic conduction — mobile ions in solution — Layer 3

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Resistance and Ohm’s Law

Subject: Physics / Biology  
Kaplan Chapter: Ch6 Circuits  
Kaplan Section: Resistance  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Resistance is opposition to current. Ohm’s law relates voltage, current, and resistance.

### Simple Restatement
Resistance is electrical friction. More resistance means less current for the same voltage.

### Why It Matters for the MCAT
Resistance provides a direct analogy to vascular resistance and helps solve series/parallel circuits.

### Related Concepts
- resistance — opposes — current
- voltage — drives — current through resistance
- resistivity — depends on — material
- length — increases — resistance
- cross-sectional area — decreases — resistance
- temperature — increases — metallic resistance
- narrower wire — increases — resistance and decreases current

### Equations / Units / Proportional Reasoning
- $V=IR$
- $R=\rho L/A$
- If length doubles, resistance doubles.
- If area doubles, resistance halves.
- For fixed voltage, increasing resistance decreases current.
- Internal battery voltage under load: $V=\epsilon-iR_{\text{int}}$

### Cross-Subject Links
- Biology: vascular resistance and blood flow
- Fluids: $\Delta P=QR$ mirrors $V=IR$
- General Chemistry: electrolytes conduct through ions

### Common Confusions
- Confusion: a narrower wire makes electrons “speed up” like water in a narrow pipe.
- Correction: narrower wire increases resistance and lowers current for the same voltage.
- Confusion: resistance and resistivity are identical.
- Correction: resistivity is material property; resistance also depends on geometry.

### MCAT Traps
- Applying continuity equation to circuits.
- Ignoring internal resistance of batteries.
- Forgetting temperature effects in metals.

### Micro-Nodes Under This Concept
- resistivity $\rho$ — material’s intrinsic opposition — Layer 4
- ohm — unit of resistance — Layer 4
- internal resistance — battery’s own resistance — Layer 2
- electrolyte — solution with mobile ions — Layer 3
- non-electrolyte — neutral solute, poor conductor — Layer 3

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Series and Parallel Resistors

Subject: Physics  
Kaplan Chapter: Ch6 Circuits  
Kaplan Section: Resistance  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Series resistors lie on one path and add directly. Parallel resistors create multiple paths and reduce equivalent resistance.

### Simple Restatement
Series adds obstacles in a row. Parallel opens new lanes.

### Why It Matters for the MCAT
Series/parallel rules are frequent MCAT targets and are easy to reverse under pressure.

### Related Concepts
- series resistors — share — same current
- series resistors — split — voltage drops
- parallel resistors — share — same voltage
- parallel branches — split — current
- adding parallel resistor — decreases — equivalent resistance
- lower-resistance branch — carries — more current

### Equations / Units / Proportional Reasoning
- Series: $R_{\text{eq}}=R_1+R_2+R_3$
- Parallel: $1/R_{\text{eq}}=1/R_1+1/R_2+1/R_3$
- In parallel, current is inversely proportional to branch resistance.

### Common Confusions
- Confusion: adding any resistor increases total resistance.
- Correction: adding a resistor in parallel decreases equivalent resistance.
- Confusion: current is same in parallel branches.
- Correction: voltage is same in parallel; current splits.

### MCAT Traps
- Doing reciprocal math for parallel and forgetting to invert at the end.
- Mixing series capacitor rules with series resistor rules.

### Micro-Nodes Under This Concept
- voltage divider — series voltage split — Layer 2
- current divider — parallel current split — Layer 2
- equivalent resistance — simplified single resistor — Layer 2

### Future Draw.io Layer
Layers: 2, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Power in Circuits

Subject: Physics  
Kaplan Chapter: Ch6 Circuits  
Kaplan Section: Resistance / Power  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Electrical power is the rate at which electrical energy is transferred or dissipated.

### Simple Restatement
Power tells how quickly a circuit component uses or releases energy.

### Why It Matters for the MCAT
Power equations connect circuit math to heat loss, appliances, and energy transfer.

### Related Concepts
- power — equals — current times voltage
- resistor — dissipates — electrical energy as heat
- current — strongly affects — power loss through $I^2R$
- high voltage transmission — reduces — current for same delivered power
- reduced current — decreases — transmission heat loss

### Equations / Units / Proportional Reasoning
- $P=IV$
- $P=I^2R$
- $P=V^2/R$
- For fixed current, increasing resistance increases dissipated power.
- For fixed voltage, increasing resistance decreases dissipated power.
- Power line loss: $P_{\text{loss}}=I^2R$

### Cross-Subject Links
- Thermodynamics: electrical energy becomes heat
- Biology: defibrillators deliver energy rapidly
- General Chemistry: electrochemical cells supply electrical work

### Common Confusions
- Confusion: $P=I^2R$ and $P=V^2/R$ always imply same direction of resistance effect.
- Correction: which equation to use depends on what is held constant.

### MCAT Traps
- Step-up transformers reduce current to reduce $I^2R$ losses.
- Fixed voltage vs fixed current context changes proportional reasoning.

### Micro-Nodes Under This Concept
- watt — joule per second — Layer 4
- heat loss — energy dissipated in wire — Layer 3
- transformer — changes voltage/current ratio in AC systems — Layer 3

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Capacitors and Capacitance

Subject: Physics / Biology  
Kaplan Chapter: Ch6 Circuits  
Kaplan Section: Capacitance and Capacitors  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
A capacitor stores separated charge and electrical potential energy.

### Simple Restatement
A capacitor is like a temporary electrical storage tank: it charges slowly and can discharge quickly.

### Why It Matters for the MCAT
Capacitors connect circuits to defibrillators, cell membranes, myelin, and action potentials.

### Related Concepts
- capacitor — stores — charge
- separated charge — creates — electric field
- capacitance — equals — charge per voltage
- larger plate area — increases — capacitance
- larger plate separation — decreases — capacitance
- dielectric — increases — capacitance
- capacitor energy — depends on — capacitance and voltage squared

### Equations / Units / Proportional Reasoning
- $C=Q/V$
- $C=\epsilon_0A/d$
- $E=V/d$
- $U=\frac12CV^2=\frac12QV=\frac{Q^2}{2C}$
- Dielectric: $C'=\kappa C$
- Isolated capacitor + dielectric: $Q$ constant, $C$ increases, $V$ decreases.
- Battery-connected capacitor + dielectric: $V$ constant, $C$ increases, $Q$ increases.

### Cross-Subject Links
- Biology: lipid bilayer as capacitor; myelin lowers capacitance to increase conduction speed
- Medicine: defibrillator capacitors store and discharge energy
- Electrostatics: electric field between plates

### Common Confusions
- Confusion: capacitors in series add like resistors in series.
- Correction: capacitor math reverses resistor math.
- Confusion: dielectric always changes charge the same way.
- Correction: isolated vs battery-connected cases differ.

### MCAT Traps
- Dielectric inserted while connected vs disconnected.
- Capacitors in series vs parallel.
- Using wrong energy equation for given variables.

### Micro-Nodes Under This Concept
- farad — coulomb per volt — Layer 4
- dielectric constant $\kappa$ — capacitance multiplier — Layer 4
- membrane capacitance — cell membrane charge storage — Layer 3
- myelin — increases effective distance and lowers capacitance — Layer 3
- defibrillator — rapid capacitor discharge — Layer 3

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Circuit Meters

Subject: Physics  
Kaplan Chapter: Ch6 Circuits  
Kaplan Section: Meters  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Circuit meters measure current, voltage, or resistance by being inserted into or across circuit elements.

### Simple Restatement
An ammeter must let current pass through it. A voltmeter must avoid stealing current. An ohmmeter tests isolated resistance using its own battery.

### Why It Matters for the MCAT
Meter placement questions are classic conceptual traps.

### Related Concepts
- ammeter — measures — current
- ammeter — is placed in — series
- ideal ammeter — has — zero resistance
- voltmeter — measures — potential difference
- voltmeter — is placed in — parallel
- ideal voltmeter — has — infinite resistance
- ohmmeter — measures — isolated resistance

### Equations / Units / Proportional Reasoning
- Ammeter in parallel creates short circuit.
- Voltmeter in series blocks current due to high resistance.
- Ohmmeter uses internal battery and should not be used on a live circuit.

### Common Confusions
- Confusion: voltmeters go in series because they measure circuit behavior.
- Correction: voltmeters measure difference across two points, so they go in parallel.
- Confusion: ammeters should have high resistance.
- Correction: ideal ammeters have zero resistance.

### MCAT Traps
- Ammeter accidentally wired in parallel can blow fuse / short circuit.
- Ohmmeter connected to live circuit gives garbage reading or damage.

### Micro-Nodes Under This Concept
- galvanometer — sensitive current detector — Layer 2
- short circuit — low-resistance bypass — Layer 5
- internal meter resistance — affects measurement accuracy — Layer 2

### Future Draw.io Layer
Layers: 2, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Waves and Wave Anatomy

Subject: Physics  
Kaplan Chapter: Ch7 Waves and Sound  
Kaplan Section: General Wave Characteristics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
A wave is a disturbance that transfers energy through space or a medium without requiring net transport of matter.

### Simple Restatement
Waves move energy. The stuff in the medium usually just oscillates around its resting position.

### Why It Matters for the MCAT
Wave properties underpin sound, light, ultrasound, optics, and interference.

### Related Concepts
- transverse wave — oscillates perpendicular to — propagation direction
- longitudinal wave — oscillates parallel to — propagation direction
- wavelength — measures — distance between identical points
- frequency — counts — cycles per second
- period — equals — reciprocal of frequency
- amplitude — measures — maximum displacement from equilibrium
- wave speed — equals — frequency times wavelength

### Equations / Units / Proportional Reasoning
- $v=f\lambda$
- $T=1/f$
- Same medium: wave speed fixed; frequency and wavelength inversely related.
- Changing medium: speed and wavelength change, frequency stays fixed.

### Cross-Subject Links
- Biology: hearing, vision, ultrasound imaging
- Psychology/Sociology: pitch/loudness perception
- Light/Optics: electromagnetic waves are transverse

### Common Confusions
- Confusion: higher frequency sound travels faster in same air.
- Correction: speed is set by medium, not frequency.
- Confusion: amplitude is crest-to-trough height.
- Correction: amplitude is equilibrium-to-crest displacement.

### MCAT Traps
- Frequency stays the same across boundaries.
- Wavelength changes when speed changes.
- Pitch maps to frequency; loudness maps to amplitude/intensity.

### Micro-Nodes Under This Concept
- crest — highest point — Layer 2
- trough — lowest point — Layer 2
- compression — high-pressure region in longitudinal wave — Layer 2
- rarefaction — low-pressure region in longitudinal wave — Layer 2
- hertz — cycles per second — Layer 4
- amplitude $A$ — maximum displacement — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Interference, Standing Waves, and Resonance

Subject: Physics  
Kaplan Chapter: Ch7 Waves and Sound  
Kaplan Section: General Wave Characteristics; Sound  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Interference occurs when waves overlap and their displacements add. Standing waves arise from interference between incident and reflected waves. Resonance occurs when driving frequency matches natural frequency.

### Simple Restatement
Waves can add, cancel, appear to stand still, or grow huge if driven at the right rhythm.

### Why It Matters for the MCAT
Interference and resonance explain musical instruments, noise cancellation, standing waves, and sound perception.

### Related Concepts
- superposition — adds — wave displacements
- in-phase waves — produce — constructive interference
- 180° out-of-phase waves — produce — destructive interference
- standing wave — forms from — opposite traveling waves
- node — has — zero displacement
- antinode — has — maximum displacement
- resonance — increases — amplitude

### Equations / Units / Proportional Reasoning
- String fixed at both ends: nodes at both ends
- Open pipe: antinodes at open ends
- Closed pipe: node at closed end, antinode at open end
- Closed pipes support odd quarter-wavelength harmonics

### Cross-Subject Links
- Biology: vocal cords, hearing, resonance in body cavities
- Psychology: perception of tone/timbre
- Technology: noise-canceling headphones

### Common Confusions
- Confusion: destructive interference destroys energy.
- Correction: displacement cancels locally; energy is redistributed.
- Confusion: nodes are high-energy vibration points.
- Correction: nodes have zero displacement.

### MCAT Traps
- Confusing open/open pipe with closed/open pipe.
- Treating all harmonics as available for closed pipes.
- Noise cancellation uses destructive interference, not simple damping.

### Micro-Nodes Under This Concept
- node — no displacement — Layer 2
- antinode — max displacement — Layer 2
- fundamental frequency — lowest resonant frequency — Layer 2
- harmonic — integer multiple / allowed standing mode — Layer 2
- timbre — tone quality from harmonic mix — Layer 3

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Sound, Hearing, and Doppler Effect

Subject: Physics / Biology / Psychology-Sociology  
Kaplan Chapter: Ch7 Waves and Sound  
Kaplan Section: Sound  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Sound is a mechanical longitudinal wave requiring a deformable medium. The Doppler effect is the shift in perceived frequency due to relative motion between source and detector.

### Simple Restatement
Sound is moving pressure. If the source and listener move toward each other, wavefronts compress and pitch sounds higher; if they move apart, wavefronts stretch and pitch sounds lower.

### Why It Matters for the MCAT
Sound connects physics to hearing physiology, ultrasound, Doppler imaging, and logarithmic perception.

### Related Concepts
- sound — requires — medium
- sound — travels fastest in — solids
- bulk modulus — increases — sound speed
- density — decreases — sound speed within same phase
- frequency — determines — pitch
- amplitude/intensity — determines — loudness
- Doppler effect — shifts — perceived frequency
- ultrasound — uses — reflected high-frequency sound
- Doppler ultrasound — measures — blood flow speed/direction

### Equations / Units / Proportional Reasoning
- $v=\sqrt{B/\rho}$
- $I=P/A$
- $I\propto A^2$
- $I\propto 1/r^2$
- Doppler mnemonic: top sign for toward, bottom sign for away.
- A 10 dB increase = 10× intensity.

### Cross-Subject Links
- Biology: outer/middle/inner ear, tympanic membrane, ossicles, cochlea, basilar membrane
- Psychology/Sociology: sensation thresholds, Weber’s law
- Medicine: fetal ultrasound, Doppler blood flow imaging

### Common Confusions
- Confusion: loudness and intensity are the same.
- Correction: intensity is objective physical power/area; loudness is subjective perception.
- Confusion: damping changes pitch.
- Correction: damping reduces amplitude/intensity but not frequency.
- Confusion: sound travels fastest in air.
- Correction: sound travels fastest in solids due to high stiffness/bulk modulus.

### MCAT Traps
- Vacuum means no sound.
- Doppler shift of zero means no relative motion toward/away.
- Bulk modulus vs density: phase of matter dominates across solids/liquids/gases.

### Micro-Nodes Under This Concept
- pitch — perceived frequency — Layer 3
- loudness — perceived intensity — Layer 3
- basilar membrane — place theory pitch map — Layer 3
- ossicles — amplify vibration — Layer 3
- cochlea — fluid-filled hearing organ — Layer 3
- infrasonic — below 20 Hz — Layer 2
- ultrasonic — above 20,000 Hz — Layer 2
- shock wave — pressure wave at Mach 1 — Layer 2
- sonic boom — sound from shock wave — Layer 2

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Electromagnetic Spectrum and Photon Energy

Subject: Physics / General Chemistry / Biology  
Kaplan Chapter: Ch8 Light and Optics  
Kaplan Section: Electromagnetic Spectrum  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
The electromagnetic spectrum is the full range of electromagnetic radiation, ordered by wavelength, frequency, and energy.

### Simple Restatement
Light is a self-propagating electromagnetic wave. Shorter wavelength means higher frequency and higher energy.

### Why It Matters for the MCAT
This connects vision, spectroscopy, radiation, DNA damage, photoelectric effect, and imaging.

### Related Concepts
- electromagnetic wave — consists of — perpendicular electric and magnetic fields
- wavelength — is inversely proportional to — frequency
- frequency — is directly proportional to — photon energy
- red light — has — longest visible wavelength and lowest visible energy
- violet light — has — shortest visible wavelength and highest visible energy
- UV radiation — can damage — DNA
- x-rays — penetrate — soft tissue and are absorbed more by bone
- gamma rays — have — highest photon energy

### Equations / Units / Proportional Reasoning
- $c=f\lambda$
- $E=hf$
- $E=hc/\lambda$
- Visible light ≈ 400–700 nm
- Red ≈ 700 nm, violet ≈ 400 nm
- Frequency stays constant when light enters a new medium; speed and wavelength change.

### Cross-Subject Links
- Biology: vision, retinal photochemistry, UV DNA damage
- General Chemistry: electron transitions and spectroscopy
- Organic Chemistry: UV/Vis spectroscopy, conjugation
- Atomic/Nuclear: gamma radiation

### Common Confusions
- Confusion: red light is highest energy because red is associated with heat/danger.
- Correction: violet has higher energy; red has lower visible energy.
- Confusion: electromagnetic waves need a medium like sound.
- Correction: EM waves self-propagate through vacuum.

### MCAT Traps
- Asking which light color has more energy.
- Asking what changes when light enters glass: speed and wavelength change; frequency does not.
- Confusing infrared heat with high photon energy.

### Micro-Nodes Under This Concept
- radio waves — longest wavelength, lowest frequency — Layer 2
- microwaves — communication/heating — Layer 2
- infrared — thermal radiation — Layer 2
- visible light — 400–700 nm — Layer 4
- ultraviolet — higher energy than visible — Layer 2
- x-rays — medical imaging — Layer 3
- gamma rays — nuclear/high-energy radiation — Layer 3
- Planck’s constant $h$ — photon energy constant — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Reflection, Refraction, and Snell’s Law

Subject: Physics / Biology  
Kaplan Chapter: Ch8 Light and Optics  
Kaplan Section: Geometrical Optics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Reflection is the bouncing of light at a boundary. Refraction is the bending of light when it changes speed crossing into a new medium.

### Simple Restatement
Light bounces off mirrors and bends when it enters materials where it travels at a different speed.

### Why It Matters for the MCAT
Reflection/refraction explain mirrors, lenses, eye optics, fiber optics, and image formation.

### Related Concepts
- incident angle — is measured from — normal
- reflection angle — equals — incidence angle
- index of refraction — measures — light slowing in medium
- higher index — means — slower light
- fast to slow transition — bends toward — normal
- slow to fast transition — bends away from — normal
- critical angle — produces — 90° refracted ray
- total internal reflection — requires — high-to-low index and angle above critical angle

### Equations / Units / Proportional Reasoning
- $\theta_i=\theta_r$
- $n=c/v$
- $n_1\sin\theta_1=n_2\sin\theta_2$
- Critical angle: refracted angle = 90°
- Higher $n$ means lower $v$

### Cross-Subject Links
- Biology: cornea/lens focus light on retina
- Medicine: fiber optics, endoscopes
- General Chemistry: molecular polarizability affects optical properties

### Common Confusions
- Confusion: optics angles are measured from the surface.
- Correction: angles are measured from the normal.
- Confusion: light “bumps” through glass like a particle bouncing through atoms.
- Correction: light slows due to electromagnetic interaction with electron clouds in the medium.
- Confusion: total internal reflection can happen from low to high index.
- Correction: it requires high-to-low index.

### MCAT Traps
- Wrong normal angle.
- Assuming frequency changes in refraction.
- Missing total internal reflection conditions.

### Micro-Nodes Under This Concept
- normal line — perpendicular to boundary — Layer 2
- index of refraction $n$ — $c/v$ — Layer 4
- critical angle — threshold for total internal reflection — Layer 4
- fiber optic — uses total internal reflection — Layer 3
- rectilinear propagation — straight-line travel in homogeneous medium — Layer 2

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Mirrors, Lenses, and Image Formation

Subject: Physics / Biology  
Kaplan Chapter: Ch8 Light and Optics  
Kaplan Section: Geometrical Optics  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Mirrors form images by reflection. Lenses form images by refraction. Image properties depend on object distance, focal length, and sign conventions.

### Simple Restatement
Converging systems gather light; diverging systems spread light. The math tells whether the image is real/virtual and inverted/upright.

### Why It Matters for the MCAT
Optics sign conventions are a major trap and directly connect to the eye, glasses, contact lenses, microscopes, and magnification.

### Related Concepts
- concave mirror — converges — light
- convex mirror — diverges — light
- convex lens — converges — light
- concave lens — diverges — light
- real image — is — inverted
- virtual image — is — upright
- lens power — equals — reciprocal of focal length
- contact lenses — add — optical power to eye system

### Equations / Units / Proportional Reasoning
- $\frac1f=\frac1o+\frac1i$
- $m=-i/o$
- $P=1/f$ in diopters
- Converging systems: positive focal length
- Diverging systems: negative focal length
- Real image: positive image distance
- Virtual image: negative image distance

### Cross-Subject Links
- Biology: eye lens focuses image on retina
- Medicine: contact lenses, microscopes, endoscopes
- Organic Chemistry / Biochemistry: microscopes and imaging in lab

### Common Confusions
- Confusion: concave always means converging.
- Correction: concave mirrors converge, but concave lenses diverge.
- Confusion: real images are upright.
- Correction: IR/UV mnemonic: real inverted; virtual upright.
- Confusion: ray diagrams are safest under time pressure.
- Correction: for MCAT, algebra and sign conventions are safer.

### MCAT Traps
- Sign convention errors.
- Mixing mirrors and lenses for real/virtual side.
- Failing to convert focal length to meters for diopters.
- Chromatic vs spherical aberration.

### Micro-Nodes Under This Concept
- focal point — point of convergence or apparent divergence — Layer 2
- center of curvature — mirror geometry reference — Layer 2
- diopter — $1/m$ optical power unit — Layer 4
- magnification — image size/object size — Layer 4
- chromatic aberration — color-dependent focus defect — Layer 5
- spherical aberration — edge/center focus mismatch — Layer 5

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Diffraction, Interference, and Polarization of Light

Subject: Physics / Organic Chemistry / Biochemistry  
Kaplan Chapter: Ch8 Light and Optics  
Kaplan Section: Diffraction; Polarization  
Transcript Source: Transcript of All Physics Audio Reviews  
Status: Clean

### Definition
Diffraction is wave spreading through openings or around obstacles. Polarization is alignment of a transverse wave’s electric field.

### Simple Restatement
Light bends and spreads like a wave, interferes with itself, and can be filtered by electric-field orientation.

### Why It Matters for the MCAT
This explains double-slit experiments, diffraction gratings, x-ray crystallography, polarized sunglasses, and optical activity.

### Related Concepts
- diffraction — spreads — waves through openings
- double slit — produces — interference fringes
- constructive interference — creates — bright fringes
- destructive interference — creates — dark fringes
- diffraction grating — separates — wavelengths by interference angle
- thin film interference — produces — soap/oil rainbows by reflection path differences
- polarization — filters — electric field orientation
- chiral molecule — rotates — plane-polarized light

### Equations / Units / Proportional Reasoning
- Unpolarized light through ideal polarizer: intensity reduced by 50%.
- Crossed polarizers at 90° transmit no light.
- Diffraction/interference patterns depend on wavelength and path length difference.

### Cross-Subject Links
- Organic Chemistry: chirality, enantiomers, optical rotation
- Biochemistry: x-ray crystallography for protein/DNA structure
- Biology: polarized light and vision not usually central unless passage-provided

### Common Confusions
- Confusion: CD rainbow is prism dispersion.
- Correction: CD rainbow is diffraction grating interference.
- Confusion: soap bubble rainbow is diffraction grating.
- Correction: soap bubble/oil slick rainbow is thin film interference.
- Confusion: polarization changes wavelength.
- Correction: polarization filters electric-field orientation.

### MCAT Traps
- Identifying mechanism behind color separation.
- Double-slit dark fringes: light plus light can equal darkness by destructive interference.
- Racemic mixtures show no net optical rotation.

### Micro-Nodes Under This Concept
- maxima — bright constructive interference — Layer 2
- minima — dark destructive interference — Layer 2
- diffraction grating — many slits — Layer 2
- thin film — top/bottom reflected waves interfere — Layer 2
- polarizer — transmits one field orientation — Layer 2
- optical activity — rotation of polarized light by chiral compound — Layer 3
- dextrorotatory — rotates right — Layer 3
- levorotatory — rotates left — Layer 3

### Future Draw.io Layer
Layers: 2, 3, 4, 5

### Toggle Behavior
Visible in: Chapter-study mode, deep-detail mode, equation-review mode, trap-review mode

---

## Concept: Atomic and Nuclear Phenomena

Subject: Physics / General Chemistry / Biology  
Kaplan Chapter: Ch9 Atomic and Nuclear Phenomena  
Kaplan Section: Photoelectric Effect; Absorption/Emission; Nuclear Reactions  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter nine / twelve: Atomic and Nuclear Phenomena”  
Status: Clean with transcript-number VERIFY

### Definition
Atomic phenomena involve electron energy transitions. Nuclear phenomena involve changes in the nucleus, including radioactive decay and nuclear reactions.

### Simple Restatement
Atomic physics is mostly about electrons changing energy levels. Nuclear physics is about the nucleus changing identity, stability, or energy.

### Why It Matters for the MCAT
This chapter connects light energy, spectroscopy, radioactive decay, radiation, half-lives, and medical imaging.

### Related Concepts
- photon absorption — requires — exact energy match
- electron excitation — requires — photon energy equal to orbital gap
- emission — releases — photon as electron falls
- photoelectric effect — requires — photon frequency above threshold
- nuclear decay — changes — nucleus stability/identity/energy
- half-life — measures — exponential decay timing
- alpha decay — emits — helium nucleus
- beta decay — changes — neutron/proton balance
- gamma decay — releases — high-energy photon

### Equations / Units / Proportional Reasoning
- $E=hf=hc/\lambda$
- Photoelectric effect: photon energy above threshold releases electron.
- Decay after $n$ half-lives: remaining fraction = $(1/2)^n$.
- Binding energy relates to mass defect by $E=mc^2$.

### Cross-Subject Links
- General Chemistry: emission spectra, Bohr model, electron transitions
- Biology: ionizing radiation damages DNA/tissue
- Medicine: PET, x-ray imaging, radiation therapy if passage-provided

### Common Confusions
- Confusion: increasing light intensity can overcome too-low frequency in photoelectric effect.
- Correction: no electrons eject unless photon frequency exceeds threshold.
- Confusion: gamma decay changes atomic number or mass number.
- Correction: gamma decay releases energy without changing A or Z.
- Confusion: half-life depends on starting amount.
- Correction: half-life is constant for first-order radioactive decay.

### MCAT Traps
- Distinguishing alpha, beta-minus, beta-plus/positron emission, electron capture, and gamma decay.
- Fraction remaining after multiple half-lives.
- Photoelectric effect intensity vs frequency trap.

### Micro-Nodes Under This Concept
- work function — minimum energy to eject electron — Layer 4
- threshold frequency — minimum frequency for photoelectric effect — Layer 4
- mass defect — missing mass converted to binding energy — Layer 4
- alpha particle — $^4_2He$ nucleus — Layer 2
- beta-minus — neutron to proton plus electron emission — Layer 2
- positron emission — proton to neutron plus positron emission — Layer 2
- electron capture — proton captures inner electron — Layer 2
- gamma ray — high-energy photon — Layer 2
- half-life — time for half sample to decay — Layer 4

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

## Concept: Research Design and Experimental Reasoning

Subject: Physics / General MCAT Science  
Kaplan Chapter: Ch11 Research Design  
Kaplan Section: Scientific Method; Research Design; Ethics  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter 11: Reasoning about the Design and Execution of Research”  
Status: Clean

### Definition
Research design is the structure of a scientific study, including hypotheses, variables, controls, methods, sampling, and ethics.

### Simple Restatement
The MCAT wants you to know whether an experiment actually tests what it claims to test.

### Why It Matters for the MCAT
Experimental reasoning is heavily tested across all science sections and can be answered even when content knowledge is limited.

### Related Concepts
- hypothesis — predicts — testable relationship
- independent variable — is manipulated by — researcher
- dependent variable — is measured as — outcome
- control group — provides — comparison baseline
- confounder — threatens — causal interpretation
- random assignment — supports — causal inference
- random sampling — supports — generalizability
- blinding — reduces — bias
- replication — increases — confidence

### Equations / Units / Proportional Reasoning
- Not equation-centered.
- Core logic: association requires correlation; causation requires temporality, control of confounders, and appropriate design.

### Cross-Subject Links
- Biology: experimental design in physiology/genetics
- Psychology/Sociology: correlations, bias, sampling
- Physics: interpreting graphs/tables and apparatus setups

### Common Confusions
- Confusion: strong correlation proves causation.
- Correction: causal claims require stronger experimental design.
- Confusion: random sampling and random assignment mean the same thing.
- Correction: sampling affects external validity; assignment affects internal validity.

### MCAT Traps
- Answer choices that overstate causality.
- Confusing dependent and independent variables.
- Ignoring controls or confounding variables.
- Ethics questions involving human subjects, consent, and risk/benefit.

### Micro-Nodes Under This Concept
- independent variable — manipulated predictor — Layer 2
- dependent variable — measured outcome — Layer 2
- confounder — third variable — Layer 5
- internal validity — causal confidence — Layer 2
- external validity — generalizability — Layer 2
- blinding — reduces expectation bias — Layer 2

### Future Draw.io Layer
Layers: 1, 2, 3, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, trap-review mode

---

## Concept: Data-Based and Statistical Reasoning

Subject: Physics / General MCAT Science / Psychology-Sociology  
Kaplan Chapter: Ch12 Data and Statistics  
Kaplan Section: Measures, Distributions, Probability, Statistical Testing, Graphs  
Transcript Source: Transcript of All Physics Audio Reviews  
Transcript Label: “Chapter 12: Database and Statistical Reasoning”  
Status: Clean with likely typo corrected to Data-Based

### Definition
Data-based reasoning involves interpreting graphs, tables, statistics, probability, uncertainty, and conclusions.

### Simple Restatement
This is the chapter about not being fooled by data presentation.

### Why It Matters for the MCAT
The MCAT frequently tests conclusions from figures more than memorized facts.

### Related Concepts
- mean — is affected by — outliers
- median — resists — outliers
- standard deviation — measures — spread
- confidence interval — communicates — uncertainty
- p-value — evaluates — probability of observed result under null hypothesis
- correlation — measures — association
- correlation — does not prove — causation
- graph axes — define — relationship being tested

### Equations / Units / Proportional Reasoning
- Slope = change in y / change in x
- Error bars overlap can suggest uncertainty but must be interpreted with passage instructions.
- Pearson $r$ ranges from −1 to +1.
- Strong $r$ does not establish causation.

### Cross-Subject Links
- Psychology/Sociology: correlation, study design, bias
- Biology: interpreting experimental figures
- Physics: graphs, proportional reasoning, data tables

### Common Confusions
- Confusion: p < 0.05 proves the hypothesis true.
- Correction: it suggests statistical significance under the test conditions; it does not prove mechanism.
- Confusion: non-overlapping error bars always mean significance.
- Correction: depends on what bars represent and test used.
- Confusion: correlation direction means causal direction.
- Correction: causation needs design support.

### MCAT Traps
- Misreading graph axes or units.
- Inferring mechanism from outcome data alone.
- Confusing sample and population.
- Overclaiming based on one experiment.

### Micro-Nodes Under This Concept
- mean — arithmetic average — Layer 2
- median — middle value — Layer 2
- mode — most frequent value — Layer 2
- range — max minus min — Layer 2
- standard deviation — spread around mean — Layer 2
- p-value — statistical significance tool — Layer 2
- confidence interval — uncertainty range — Layer 2
- Pearson r — linear association coefficient — Layer 2

### Future Draw.io Layer
Layers: 1, 2, 3, 4, 5

### Toggle Behavior
Visible in: Big-picture mode, chapter-study mode, equation-review mode, trap-review mode

---

# Micro-Node Registry

## Physics Micro-Nodes Added in Bulk

### Mathematics / Units
- SI base units — meter, kilogram, second, ampere, mole, kelvin, candela — Parent: SI Units and Derived Units — Layer 4
- kilogram — base unit for mass — Parent: SI Units and Derived Units — Layer 4
- scientific notation — $n\times10^m$ — Parent: Scientific Notation and Estimation — Layer 4
- logarithm — inverse of exponentiation — Parent: Logarithms, pH, and Decibels — Layer 4
- decibel — logarithmic sound level — Parent: Logarithms, pH, and Decibels — Layer 4
- dimensional analysis — unit cancellation method — Parent: SI Units and Derived Units — Layer 5
- seesaw rounding — opposite rounding for multiplication — Parent: Scientific Notation and Estimation — Layer 5
- escalator rounding — same-direction rounding for division — Parent: Scientific Notation and Estimation — Layer 5

### Mechanics
- displacement — straight-line vector change — Parent: Vectors and Scalars — Layer 2
- distance — scalar path length — Parent: Vectors and Scalars — Layer 2
- velocity — displacement per time — Parent: Kinematics Graphs — Layer 4
- acceleration — velocity change per time — Parent: Newton’s Laws and Net Force — Layer 4
- free-body diagram — force map — Parent: Newton’s Laws and Net Force — Layer 5
- normal force — perpendicular contact force — Parent: Newton’s Laws and Net Force — Layer 2
- friction — nonconservative opposing force — Parent: Work and Energy — Layer 2
- impulse — force-time product — Parent: Momentum and Impulse — Layer 4

### Thermodynamics
- heat — energy transfer due to temperature difference — Parent: Thermodynamics and Internal Energy — Layer 2
- temperature — average kinetic energy — Parent: Thermodynamics and Internal Energy — Layer 2
- specific heat — heat needed per mass per degree — Parent: Thermodynamics and Internal Energy — Layer 4
- latent heat — heat for phase change — Parent: Thermodynamics and Internal Energy — Layer 4
- entropy — energy dispersal / microstate count — Parent: Entropy and the Second Law — Layer 2
- isolated system — exchanges neither matter nor energy — Parent: Thermodynamics and Internal Energy — Layer 2

### Fluids
- density $\rho$ — mass per volume — Parent: Fluids, Density, and Pressure — Layer 4
- pressure $P$ — force per area — Parent: Fluids, Density, and Pressure — Layer 4
- gauge pressure — excess over atmosphere — Parent: Fluids, Density, and Pressure — Layer 2
- absolute pressure — total pressure including ambient — Parent: Fluids, Density, and Pressure — Layer 2
- buoyant force — upward force from displaced fluid — Parent: Buoyancy and Archimedes’ Principle — Layer 4
- flow rate $Q$ — volume per time — Parent: Continuity Equation and Flow Rate — Layer 4
- viscosity $\eta$ — internal friction — Parent: Viscosity and Poiseuille’s Law — Layer 4
- laminar flow — smooth layers — Parent: Viscosity and Poiseuille’s Law — Layer 2
- turbulent flow — chaotic flow — Parent: Viscosity and Poiseuille’s Law — Layer 2

### Electricity / Circuits / Magnetism
- current $I$ — charge per time — Parent: Current, Voltage, and Kirchhoff’s Laws — Layer 4
- voltage $V$ — energy per charge — Parent: Current, Voltage, and Kirchhoff’s Laws — Layer 4
- resistance $R$ — opposition to current — Parent: Resistance and Ohm’s Law — Layer 4
- resistivity $\rho$ — material opposition property — Parent: Resistance and Ohm’s Law — Layer 4
- capacitor — charge storage device — Parent: Capacitors and Capacitance — Layer 2
- dielectric — insulating capacitance enhancer — Parent: Capacitors and Capacitance — Layer 2
- ammeter — current meter in series — Parent: Circuit Meters — Layer 5
- voltmeter — voltage meter in parallel — Parent: Circuit Meters — Layer 5
- magnetic flux — field through area — Parent: Magnetism and Electromagnetic Induction — Layer 4
- Lenz’s law — induced current opposes change — Parent: Magnetism and Electromagnetic Induction — Layer 5

### Waves / Sound / Light
- transverse wave — perpendicular oscillation — Parent: Waves and Wave Anatomy — Layer 2
- longitudinal wave — parallel oscillation — Parent: Waves and Wave Anatomy — Layer 2
- wavelength $\lambda$ — distance per cycle — Parent: Waves and Wave Anatomy — Layer 4
- frequency $f$ — cycles per second — Parent: Waves and Wave Anatomy — Layer 4
- period $T$ — seconds per cycle — Parent: Waves and Wave Anatomy — Layer 4
- node — zero displacement — Parent: Interference, Standing Waves, and Resonance — Layer 2
- antinode — maximum displacement — Parent: Interference, Standing Waves, and Resonance — Layer 2
- pitch — perceived frequency — Parent: Sound, Hearing, and Doppler Effect — Layer 3
- loudness — perceived intensity — Parent: Sound, Hearing, and Doppler Effect — Layer 3
- index of refraction $n$ — how much light slows — Parent: Reflection, Refraction, and Snell’s Law — Layer 4
- focal length $f$ — distance to focal point — Parent: Mirrors, Lenses, and Image Formation — Layer 4
- diopter — inverse meter optical power — Parent: Mirrors, Lenses, and Image Formation — Layer 4
- diffraction grating — many-slit interference tool — Parent: Diffraction, Interference, and Polarization of Light — Layer 2
- polarizer — electric-field orientation filter — Parent: Diffraction, Interference, and Polarization of Light — Layer 2

### Atomic / Nuclear / Data
- photon — packet of EM energy — Parent: Electromagnetic Spectrum and Photon Energy — Layer 2
- work function — threshold energy for electron ejection — Parent: Atomic and Nuclear Phenomena — Layer 4
- half-life — time for half sample to decay — Parent: Atomic and Nuclear Phenomena — Layer 4
- p-value — statistical significance metric — Parent: Data-Based and Statistical Reasoning — Layer 5
- standard deviation — spread around mean — Parent: Data-Based and Statistical Reasoning — Layer 2
- confounder — variable that distorts causal inference — Parent: Research Design and Experimental Reasoning — Layer 5

---

# Relationship Registry

## Physics Internal Relationships

### Mathematics and General Reasoning
- SI units — anchor — dimensional analysis
  - Subject(s): Physics
  - Chapter(s): Ch10
  - Layer: 4
  - Why this link matters: Unit cancellation is a core MCAT survival strategy.
  - Status: Clean

- scientific notation — enables — rapid estimation
  - Subject(s): Physics
  - Chapter(s): Ch10
  - Layer: 4
  - Why this link matters: C/P is calculator-free.
  - Status: Clean

- logarithmic scales — compress — wide physical ranges
  - Subject(s): Physics, General Chemistry, Psychology/Sociology
  - Chapter(s): Ch10, Ch7
  - Layer: 3
  - Why this link matters: pH, decibels, and perception all use compressed scales.
  - Status: Clean

- dimensional analysis — checks — final answer units
  - Subject(s): Physics
  - Chapter(s): All
  - Layer: 4
  - Why this link matters: Unit mismatch often reveals wrong answers.
  - Status: Clean

### Mechanics
- net force — causes — acceleration
  - Subject(s): Physics
  - Chapter(s): Ch1
  - Layer: 4
  - Why this link matters: Core of Newtonian mechanics.
  - Status: Clean

- distance — is confused with — displacement
  - Subject(s): Physics
  - Chapter(s): Ch1
  - Layer: 5
  - Why this link matters: Common MCAT trap in average speed/velocity.
  - Status: Clean

- slope of position-time graph — gives — velocity
  - Subject(s): Physics
  - Chapter(s): Ch1, Ch12
  - Layer: 4
  - Why this link matters: Graph interpretation.
  - Status: Clean

- area under velocity-time graph — gives — displacement
  - Subject(s): Physics
  - Chapter(s): Ch1, Ch12
  - Layer: 4
  - Why this link matters: Graph interpretation.
  - Status: Clean

- work — transfers — energy
  - Subject(s): Physics
  - Chapter(s): Ch2
  - Layer: 4
  - Why this link matters: Connects forces to energy.
  - Status: Clean

- net work — changes — kinetic energy
  - Subject(s): Physics
  - Chapter(s): Ch2
  - Layer: 4
  - Why this link matters: Work-energy theorem.
  - Status: Clean

- mechanical advantage — trades — force for distance
  - Subject(s): Physics
  - Chapter(s): Ch2, Ch4
  - Layer: 3
  - Why this link matters: Hydraulics and levers do not create energy.
  - Status: Clean

- impulse — changes — momentum
  - Subject(s): Physics
  - Chapter(s): Ch1/Ch2
  - Layer: 4
  - Why this link matters: Force-time reasoning and collisions.
  - Status: Clean

### Thermodynamics
- heat — transfers due to — temperature difference
  - Subject(s): Physics
  - Chapter(s): Ch3
  - Layer: 4
  - Why this link matters: Separates heat from temperature.
  - Status: Clean

- first law — conserves — energy
  - Subject(s): Physics, General Chemistry, Biochemistry
  - Chapter(s): Ch3
  - Layer: 3
  - Why this link matters: Thermodynamics is an energy accounting system.
  - Status: Clean

- entropy — increases in — spontaneous universe-level processes
  - Subject(s): Physics, General Chemistry, Biochemistry
  - Chapter(s): Ch3
  - Layer: 3
  - Why this link matters: Connects physics to spontaneity and metabolism.
  - Status: Clean

- phase change — absorbs/releases — latent heat without temperature change
  - Subject(s): Physics, General Chemistry
  - Chapter(s): Ch3
  - Layer: 4
  - Why this link matters: Temperature plateaus are common graph traps.
  - Status: Clean

### Fluids
- pressure — equals — force divided by area
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 4
  - Why this link matters: Foundation for hydrostatics and hydraulics.
  - Status: Clean

- hydrostatic pressure — increases with — depth
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 4
  - Why this link matters: $P=P_0+\rho gz$.
  - Status: Clean

- Pascal’s principle — transmits — pressure through enclosed incompressible fluid
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 2
  - Why this link matters: Hydraulic lifts.
  - Status: Clean

- buoyant force — equals — weight of displaced fluid
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 4
  - Why this link matters: Archimedes’ principle.
  - Status: Clean

- fluid density — determines — buoyant force
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 5
  - Why this link matters: Object density is trap variable for buoyant force.
  - Status: Clean

- total cross-sectional area — determines — fluid speed in branching systems
  - Subject(s): Physics, Biology
  - Chapter(s): Ch4
  - Layer: 3
  - Why this link matters: Capillaries vs aorta.
  - Status: Clean

- faster ideal fluid flow — decreases — static pressure
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 5
  - Why this link matters: Bernoulli counterintuition.
  - Status: Clean

- radius — controls — viscous flow by fourth power
  - Subject(s): Physics, Biology
  - Chapter(s): Ch4
  - Layer: 4
  - Why this link matters: Poiseuille’s law and vascular resistance.
  - Status: Clean

- laminar flow — is required by — Poiseuille’s law
  - Subject(s): Physics
  - Chapter(s): Ch4
  - Layer: 5
  - Why this link matters: Turbulence breaks assumptions.
  - Status: Clean

### Circuits and Electromagnetism
- voltage — drives — current
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 4
  - Why this link matters: Ohm’s law.
  - Status: Clean

- resistance — opposes — current
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 4
  - Why this link matters: Circuit flow.
  - Status: Clean

- narrow wire — increases — resistance
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 5
  - Why this link matters: Prevents false continuity-equation analogy.
  - Status: Clean

- junction rule — conserves — charge
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 4
  - Why this link matters: Current in equals current out.
  - Status: Clean

- loop rule — conserves — energy
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 4
  - Why this link matters: Voltage rises and drops balance.
  - Status: Clean

- capacitor — stores — separated charge
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 2
  - Why this link matters: Charge storage and defibrillators.
  - Status: Clean

- dielectric — increases — capacitance
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 4
  - Why this link matters: High-yield capacitor trap.
  - Status: Clean

- ammeter — must be placed in — series
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 5
  - Why this link matters: Meter placement trap.
  - Status: Clean

- voltmeter — must be placed in — parallel
  - Subject(s): Physics
  - Chapter(s): Ch6
  - Layer: 5
  - Why this link matters: Meter placement trap.
  - Status: Clean

- changing magnetic flux — induces — EMF
  - Subject(s): Physics
  - Chapter(s): Ch5
  - Layer: 4
  - Why this link matters: Induction.
  - Status: Clean

- Lenz’s law — opposes — change in magnetic flux
  - Subject(s): Physics
  - Chapter(s): Ch5
  - Layer: 5
  - Why this link matters: Direction of induced current.
  - Status: Clean

### Waves, Sound, and Light
- frequency — determines — pitch
  - Subject(s): Physics, Biology, Psychology/Sociology
  - Chapter(s): Ch7
  - Layer: 3
  - Why this link matters: Sound perception.
  - Status: Clean

- amplitude — affects — intensity/loudness
  - Subject(s): Physics, Psychology/Sociology
  - Chapter(s): Ch7
  - Layer: 3
  - Why this link matters: Separates pitch from loudness.
  - Status: Clean

- damping — decreases — amplitude
  - Subject(s): Physics
  - Chapter(s): Ch7
  - Layer: 5
  - Why this link matters: Damping does not change pitch.
  - Status: Clean

- medium — determines — wave speed
  - Subject(s): Physics
  - Chapter(s): Ch7/Ch8
  - Layer: 5
  - Why this link matters: Frequency does not set speed in same medium.
  - Status: Clean

- frequency — stays constant across — media boundaries
  - Subject(s): Physics
  - Chapter(s): Ch7/Ch8
  - Layer: 5
  - Why this link matters: Major refraction/wave trap.
  - Status: Clean

- constructive interference — amplifies — amplitude
  - Subject(s): Physics
  - Chapter(s): Ch7/Ch8
  - Layer: 2
  - Why this link matters: Standing waves and bright fringes.
  - Status: Clean

- destructive interference — cancels — displacement
  - Subject(s): Physics
  - Chapter(s): Ch7/Ch8
  - Layer: 2
  - Why this link matters: Noise cancellation and dark fringes.
  - Status: Clean

- electromagnetic wave — propagates without — material medium
  - Subject(s): Physics
  - Chapter(s): Ch8
  - Layer: 2
  - Why this link matters: Light vs sound.
  - Status: Clean

- shorter wavelength — increases — photon energy
  - Subject(s): Physics, General Chemistry, Biology
  - Chapter(s): Ch8/Ch9
  - Layer: 4
  - Why this link matters: UV/x-ray/gamma damage and spectroscopy.
  - Status: Clean

- index of refraction — decreases — light speed in medium
  - Subject(s): Physics
  - Chapter(s): Ch8
  - Layer: 4
  - Why this link matters: Refraction.
  - Status: Clean

- total internal reflection — enables — fiber optics
  - Subject(s): Physics, Medicine
  - Chapter(s): Ch8
  - Layer: 3
  - Why this link matters: Clinical/lab imaging tools.
  - Status: Clean

- convex lens — converges — light
  - Subject(s): Physics, Biology
  - Chapter(s): Ch8
  - Layer: 3
  - Why this link matters: Human eye and magnifying lenses.
  - Status: Clean

- chiral molecules — rotate — plane-polarized light
  - Subject(s): Physics, Organic Chemistry
  - Chapter(s): Ch8
  - Layer: 3
  - Why this link matters: Optical activity.
  - Status: Clean

### Atomic/Nuclear/Data
- photon energy — must match — electron transition energy gap
  - Subject(s): Physics, General Chemistry
  - Chapter(s): Ch8/Ch9
  - Layer: 3
  - Why this link matters: Absorption/emission spectra.
  - Status: Clean

- photon frequency above threshold — causes — photoelectric electron emission
  - Subject(s): Physics, General Chemistry
  - Chapter(s): Ch9
  - Layer: 4
  - Why this link matters: Photoelectric effect.
  - Status: Clean

- half-life — determines — fraction remaining
  - Subject(s): Physics
  - Chapter(s): Ch9
  - Layer: 4
  - Why this link matters: Radioactive decay arithmetic.
  - Status: Clean

- correlation — does not prove — causation
  - Subject(s): Physics, Psychology/Sociology, Biology
  - Chapter(s): Ch11/Ch12
  - Layer: 5
  - Why this link matters: Experimental reasoning.
  - Status: Clean

- graph axes — determine — physical meaning of slope and area
  - Subject(s): Physics
  - Chapter(s): Ch1/Ch12
  - Layer: 5
  - Why this link matters: Data interpretation.
  - Status: Clean

---

# Cross-Subject Link Targets for Biology Phase

These are placeholders to expand when Biology transcripts are added.

## Physics ↔ Biology
- fluids — explains — cardiovascular pressure/flow/resistance
- Poiseuille’s law — explains — vascular radius effects on blood flow
- pressure gradients — drive — ventilation and blood flow
- thermodynamics — supports — homeostasis and temperature regulation
- circuits — model — membrane potentials and neuronal conduction
- capacitance — explains — cell membrane charge storage
- myelin — lowers — membrane capacitance
- waves and sound — explain — hearing and ultrasound
- optics — explains — vision and corrective lenses
- ionizing radiation — damages — DNA
- mechanics — explains — musculoskeletal levers and torque

## Physics ↔ General Chemistry
- logarithms — support — pH calculations
- photon energy — explains — atomic transitions
- electrostatics — explains — ionic interactions
- thermodynamics — overlaps with — enthalpy, entropy, Gibbs free energy
- electrolytic conduction — requires — dissociated ions

## Physics ↔ Organic Chemistry
- optical activity — detects — chirality
- UV/Vis absorption — depends on — conjugation and photon energy
- IR radiation — excites — bond vibrations

## Physics ↔ Biochemistry
- x-ray crystallography — uses — diffraction to determine biomolecular structure
- membrane capacitance — affects — neuronal signaling
- metabolic heat — connects to — thermodynamics
- electron transport chain — uses — electrochemical gradients

## Physics ↔ Psychology/Sociology
- sound intensity — connects to — sensation thresholds
- Weber’s law — explains — logarithmic perception
- vision/hearing — connect to — sensation and perception
- research design/statistics — apply across — psych/soc studies

---

# Common Confusions and MCAT Traps Registry

## Highest Priority Traps from Physics Bulk Ingest
1. **Distance vs displacement**
   - Distance is scalar path length.
   - Displacement is vector straight-line change.

2. **Speed vs velocity**
   - Speed uses distance.
   - Velocity uses displacement.

3. **Pressure as scalar**
   - Pressure is not a vector even though force is.

4. **Gauge vs absolute pressure**
   - Gauge pressure excludes atmospheric pressure.
   - Absolute pressure includes ambient/surface pressure.

5. **Buoyant force uses fluid density**
   - Object density determines sink/float outcome, not the buoyant force formula.

6. **Continuity equation uses total area**
   - Capillary beds have huge total cross-sectional area.

7. **Bernoulli counterintuition**
   - Faster ideal flow means lower static pressure.

8. **Poiseuille radius-to-fourth**
   - Small vessel radius changes cause huge flow/resistance changes.

9. **Narrow wire is not narrow pipe**
   - Narrow pipe increases water speed by continuity.
   - Narrow wire increases resistance and lowers current.

10. **Conventional current vs electron flow**
    - Conventional current is positive to negative.
    - Electrons move negative to positive in metals.

11. **Series/parallel resistor reversal**
    - Series resistors add.
    - Parallel resistors use reciprocal formula and reduce total resistance.

12. **Capacitors reverse resistor intuition**
    - Series capacitors reduce capacitance.
    - Parallel capacitors add.

13. **Dielectric connected vs isolated**
    - Isolated: charge constant, voltage decreases.
    - Connected: voltage constant, charge increases.

14. **Ammeter/voltmeter placement**
    - Ammeter in series, near-zero resistance.
    - Voltmeter in parallel, near-infinite resistance.

15. **Wave speed vs frequency**
    - Medium sets speed.
    - Source sets frequency.
    - Wavelength adjusts.

16. **Damping changes amplitude, not frequency**
    - Quieter does not mean lower pitch.

17. **Sound needs a medium**
    - No sound in vacuum.

18. **Frequency stays constant during refraction**
    - Speed and wavelength change; frequency does not.

19. **Angles in optics are measured from the normal**
    - Not from the surface.

20. **Concave/convex mirror vs lens reversal**
    - Concave mirror converges.
    - Concave lens diverges.
    - Convex mirror diverges.
    - Convex lens converges.

21. **Real/virtual image mnemonic**
    - IR: real images are inverted.
    - UV: virtual images are upright.

22. **Dispersion vs diffraction vs thin film interference**
    - Prism: dispersion.
    - CD/grating: diffraction/interference.
    - Soap bubble/oil slick: thin film interference.

23. **Photoelectric effect**
    - Frequency threshold matters more than intensity for electron ejection.

24. **Correlation is not causation**
    - Even strong Pearson r does not prove mechanism.

---

# VERIFY Items

## VERIFY 1: Transcript Chapter Numbering Conflicts
- Item: Several transcript labels do not match the Kaplan Physics/Math chapter order used in the running file.
- Source transcript: Transcript of All Physics Audio Reviews
- Timestamp: Not provided
- Why unclear: The audio appears to use multiple numbering systems or duplicate generated lectures.
- Best guess: Preserve Kaplan subject/chapter backbone from the running-file plan and record transcript labels as metadata.
- What needs checking: When Biology phase begins, decide whether to keep Kaplan 2022 chapter numbers or user’s custom podcast numbering in display labels.

## VERIFY 2: Duplicate Waves/Optics/Atomic Segments
- Item: Transcript appears to include duplicate or alternate Waves, Light/Optics, and Atomic/Nuclear segments with different chapter numbers.
- Why unclear: Duplicated topic labels suggest multiple generated versions were included in the bulk file.
- Best guess: Merge duplicates into canonical Kaplan chapters.
- What needs checking: If user wants every duplicate podcast version tracked separately, add “Transcript Variant A/B” metadata later.

## VERIFY 3: “Database and Statistical Reasoning”
- Item: Transcript label says “Database and Statistical Reasoning.”
- Why unclear: Kaplan chapter title is “Data-Based and Statistical Reasoning.”
- Best guess: Speech-to-text typo.
- What needs checking: No further action needed unless user wants transcript wording preserved.

## VERIFY 4: Thermodynamics Segment Boundaries
- Item: Thermodynamics content appears in the transcript but may not have a clean obvious chapter heading in the excerpted scan.
- Why unclear: Bulk transcript likely concatenated multiple files with inconsistent headings.
- Best guess: Thermodynamics concepts were ingested into Kaplan Ch3.
- What needs checking: If detailed Thermodynamics transcript exists separately, later add a Ch3-specific expansion.

---

# Self-Audit

## A. Concept Web Check
- Major physics concepts are organized by Kaplan chapter.
- Cross-links are stored separately in the Relationship Registry.
- The document is not a flowchart.
- The web logic is preserved through labeled relationships.

## B. MCAT Accuracy Check
- High-yield formulas, units, proportional relationships, and common traps were preserved.
- Obvious transcript typos were corrected silently when safe.
- Unclear transcript numbering was marked VERIFY.
- No CARS content was added.

## C. Duplicate Check
- Duplicate podcast labels were merged into canonical Kaplan chapter placements.
- Waves/Sound, Light/Optics, and Atomic/Nuclear duplicates were combined rather than repeated.
- “Math Foundations” was mapped to Kaplan Ch10 Mathematics, but transcript label was preserved.

## D. Cross-Link Check
- Physics ↔ Biology links were added as placeholders for the next phase.
- Physics ↔ General Chemistry, Organic Chemistry, Biochemistry, and Psychology/Sociology links were added only when useful.
- No random cross-links were forced.

## E. Layer / Toggling Readiness Check
- Every major concept has Future Draw.io Layer assignments.
- Micro-nodes are assigned layers.
- Relationship Registry entries include layers.
- Toggle behavior is recorded for major concepts.

## F. Bulk Quality Check
- The file prioritizes high-yield anchor concepts rather than transcript fluff.
- Smaller details were moved into micro-nodes.
- Unclear chapter boundaries were preserved as VERIFY rather than guessed as clean.

---

# Update Summary

1. **New Physics major concepts added**
   - SI Units and Derived Units
   - Scientific Notation and Estimation
   - Logarithms, pH, and Decibels
   - Vectors and Scalars
   - Kinematics Graphs
   - Newton’s Laws and Net Force
   - Projectile Motion
   - Work and Energy
   - Mechanical Advantage
   - Momentum and Impulse
   - Thermodynamics and Internal Energy
   - Entropy and the Second Law
   - Fluids, Density, and Pressure
   - Pascal’s Principle and Hydraulic Systems
   - Buoyancy and Archimedes’ Principle
   - Continuity Equation and Flow Rate
   - Bernoulli’s Equation
   - Viscosity and Poiseuille’s Law
   - Electrostatic Force and Electric Fields
   - Magnetism and Electromagnetic Induction
   - Current, Voltage, and Kirchhoff’s Laws
   - Resistance and Ohm’s Law
   - Series and Parallel Resistors
   - Power in Circuits
   - Capacitors and Capacitance
   - Circuit Meters
   - Waves and Wave Anatomy
   - Interference, Standing Waves, and Resonance
   - Sound, Hearing, and Doppler Effect
   - Electromagnetic Spectrum and Photon Energy
   - Reflection, Refraction, and Snell’s Law
   - Mirrors, Lenses, and Image Formation
   - Diffraction, Interference, and Polarization of Light
   - Atomic and Nuclear Phenomena
   - Research Design and Experimental Reasoning
   - Data-Based and Statistical Reasoning

2. **Existing concepts updated**
   - N/A; this is first full Physics running-file version.

3. **Micro-nodes added**
   - Added by category across Math, Mechanics, Thermodynamics, Fluids, Circuits, Waves, Optics, Atomic/Nuclear, and Data/Research.

4. **Relationship Registry links added**
   - Added internal physics links and cross-subject placeholders.

5. **Equations/formulas/units added**
   - Core equations included for mechanics, thermodynamics, fluids, circuits, waves, optics, atomic/nuclear, and statistics.

6. **Cross-subject links added**
   - Biology, General Chemistry, Organic Chemistry, Biochemistry, and Psychology/Sociology placeholders added.

7. **Common confusions added**
   - Added high-priority trap registry.

8. **MCAT traps added**
   - Added across all major concept entries and consolidated in trap registry.

9. **VERIFY items**
   - Chapter-numbering conflicts
   - Duplicate transcript segments
   - Data-Based typo
   - Thermodynamics segment boundaries

10. **Suggested future Draw.io changes**
   - Do not export full MCAT web yet.
   - Next best step: run a targeted Physics audit, then create a limited Draw.io preview for Physics only.
   - After Biology bulk ingest, export a Physics ↔ Biology bridge preview.

---

# Version Checkpoint

Version: v1.0  
Date: 2026-05-01  
Subject: Physics  
Chapters processed: Kaplan Physics/Math Ch1–Ch12  
Transcript processed: Transcript of All Physics Audio Reviews.txt  
Major additions: Full Physics bulk running-file structure, concept entries, micro-node registry, relationship registry, VERIFY registry, self-audit.  
Major edits: Transcript chapter labels normalized to Kaplan backbone while preserving label conflicts as metadata/VERIFY.  
Cross-links added: Physics internal cross-links plus Biology, Biochemistry, General Chemistry, Organic Chemistry, and Psychology/Sociology placeholders.  
Open VERIFY items: Chapter numbering conflicts, duplicate transcript variants, thermodynamics segment boundary, Data-Based typo.  
Recommended next step: Run Mode B audit/clean before any Draw.io export.  
Suggested file name: MCAT_Science_Web_v1.1_Physics_Bulk_Audited.md


---

# Mode B Audit Appendix

This checkpoint preserves the v1.0 Physics bulk running file and appends the Mode B audit findings before cleanup.

# MCAT Science Concept Web — Mode B Audit / Clean Report

Version: v1.2 audit  
Date: 2026-05-01  
Audited file: `MCAT_Science_Web_v1.0_Physics_Bulk_Running_File.md`  
Scope: Physics bulk update before any Draw.io export

---

# Bottom Line

The Physics bulk running file is structurally successful and usable as a source-of-truth file. It has a Kaplan chapter backbone, major concept entries, micro-nodes, a Relationship Registry, future Draw.io layer labels, MCAT traps, and VERIFY items.

It is **ready for a limited Physics-only Draw.io preview after a small cleanup pass**, but it is **not ready for the full MCAT master web** because Biology has not been ingested yet and several strongest Physics ↔ Biology bridges are still placeholders.

Recommended readiness:
- Physics-only Draw.io preview: **7.5/10 now**, **8.5/10 after cleanup**
- Full MCAT master web: **4/10**

---

# 1. High-Priority Fixes

## Fix 1: Add missing formula nodes before Draw.io export
Several high-yield concepts have conceptual explanations but need formula micro-nodes or equation nodes for clean equation-review mode.

Add these formulas:

### Standing waves / resonance
- Strings and open pipes: `λ_n = 2L/n`
- Strings and open pipes: `f_n = nv/(2L)`
- Closed pipes: `λ_n = 4L/n`, where `n` is odd only
- Closed pipes: `f_n = nv/(4L)`, where `n` is odd only

### Doppler effect
- `f' = f((v ± v_D)/(v ∓ v_S))`
- Preserve mnemonic: top sign for toward, bottom sign for away.

### Capacitor combinations
- Series capacitors: `1/C_eq = 1/C_1 + 1/C_2 + ...`
- Parallel capacitors: `C_eq = C_1 + C_2 + ...`

### Critical angle
- `sin θ_c = n_2/n_1`, only when `n_1 > n_2`

### Nuclear / radioactive decay
- `A = λN`
- `λ = ln2/t_{1/2}`
- Remaining fraction after `n` half-lives: `(1/2)^n` is already present and should stay.

## Fix 2: Separate “Math Foundations” metadata from Kaplan Ch10 display
The transcript labels math as “Chapter one: Math and Physics Foundations,” but the running file maps it to Kaplan Ch10 Mathematics. This is the right backbone choice, but Draw.io display labels should prevent confusion.

Recommended display format:
`Kaplan Ch10 Mathematics | transcript label: Ch1 Math Foundations`

## Fix 3: Convert weak or slightly vague labels in Relationship Registry
The registry mostly avoids bad labels, but several labels can be tightened before export.

Replace:
- `SI units — anchor — dimensional analysis`
  - Better: `SI units — standardize — dimensional analysis`
- `amplitude — affects — intensity/loudness`
  - Better split into two links:
    - `amplitude squared — determines — physical intensity`
    - `physical intensity — contributes to — perceived loudness`
- `medium — determines — wave speed`
  - Better: `medium properties — determine — wave speed`
- `phase change — absorbs/releases — latent heat without temperature change`
  - Better split into:
    - `melting/vaporization — absorbs — latent heat`
    - `freezing/condensation — releases — latent heat`
- `shorter wavelength — increases — photon energy`
  - Better: `shorter wavelength — corresponds to — higher photon energy`
- `index of refraction — decreases — light speed in medium`
  - Better: `higher index of refraction — decreases — light speed in medium`

## Fix 4: Keep placeholder cross-subject links visually hidden until Biology is added
The Physics file contains useful Biology placeholder links. For a Physics-only Draw.io preview, place them on Layer 3 but hide Layer 3 by default or label them as “future Biology bridge.”

## Fix 5: Add one “Formula Cluster” per chapter
For Draw.io, equations should not all float as independent tiny nodes. Add a formula-cluster node to each relevant Physics chapter, then connect individual formulas under it as micro-nodes.

Suggested clusters:
- Ch1/Ch10 Math Foundations Formula Cluster
- Ch2 Work/Energy Formula Cluster
- Ch3 Thermodynamics Formula Cluster
- Ch4 Fluids Formula Cluster
- Ch5 Electrostatics/Magnetism Formula Cluster
- Ch6 Circuits Formula Cluster
- Ch7 Waves/Sound Formula Cluster
- Ch8 Optics Formula Cluster
- Ch9 Atomic/Nuclear Formula Cluster
- Ch11/12 Research/Data Formula Cluster

---

# 2. Duplicate Physics Concepts

No severe duplicate full concepts were found. The current 36 major concept entries are mostly clean and use reasonable canonical names.

## Concepts to keep merged

| Current concept area | Keep canonical name | Reason |
|---|---|---|
| Math Foundations / Mathematics / estimation | SI Units, Scientific Notation, Logarithms | Transcript numbering conflicts should stay metadata only. |
| Dynamics / Forces / Newtonian mechanics | Newton’s Laws and Net Force | Good umbrella concept. |
| Work / energy / power / mechanical advantage | Keep separate as Work and Energy, Mechanical Advantage, Power in Circuits | These are related but not duplicates. |
| Fluids / hydrostatics / fluid dynamics | Keep split into pressure, Pascal, buoyancy, continuity, Bernoulli, Poiseuille | This prevents an overcrowded Fluids node. |
| Electromagnetism / magnetism / induction | Magnetism and Electromagnetic Induction | Good merged concept unless future transcript adds more detail. |
| Waves / sound / hearing | Keep Waves and Wave Anatomy, Interference/Standing Waves/Resonance, Sound/Hearing/Doppler separate | These are distinct enough for Draw.io. |
| Optics / light / geometrical optics | Keep EM Spectrum, Reflection/Refraction/Snell, Mirrors/Lenses, Diffraction/Polarization separate | This prevents visual overload. |
| Database/Data-Based | Data-Based and Statistical Reasoning | Correct typo to Data-Based everywhere. |

## Watch for future duplicate risk
When Biology is added, these may duplicate unless merged carefully:
- membrane potential vs voltage
- blood flow vs current/flow rate
- vascular resistance vs resistance
- alveolar pressure vs pressure gradient
- sound perception vs pitch/loudness
- eye lens vs convex lens
- DNA damage vs ionizing radiation

---

# 3. Relationship Labels to Improve

## Replace before Draw.io export

| Current relationship | Recommended relationship | Why |
|---|---|---|
| SI units — anchor — dimensional analysis | SI units — standardize — dimensional analysis | “Anchor” is understandable but less mechanistic. |
| amplitude — affects — intensity/loudness | amplitude squared — determines — physical intensity | “Affects” is too vague and mixes physical/psychological concepts. |
| physical intensity — affects — loudness | physical intensity — contributes to — perceived loudness | Better separation of objective vs subjective. |
| medium — determines — wave speed | medium properties — determine — wave speed | More precise: bulk modulus/density matter. |
| shorter wavelength — increases — photon energy | shorter wavelength — corresponds to — higher photon energy | Wavelength itself does not actively increase energy; it indicates higher frequency/energy. |
| total internal reflection — enables — fiber optics | total internal reflection — confines — light within fiber-optic core | More physically precise. |
| graph axes — determine — physical meaning of slope and area | graph axes — define — physical meaning of slope and area | Cleaner for graph reasoning. |

## Good relationship labels to preserve
These are strong and should stay:
- `net force — causes — acceleration`
- `work — transfers — energy`
- `net work — changes — kinetic energy`
- `mechanical advantage — trades — force for distance`
- `hydrostatic pressure — increases with — depth`
- `buoyant force — equals — weight of displaced fluid`
- `faster ideal fluid flow — decreases — static pressure`
- `radius — controls — viscous flow by fourth power`
- `junction rule — conserves — charge`
- `loop rule — conserves — energy`
- `dielectric — increases — capacitance`
- `frequency — determines — pitch`
- `destructive interference — cancels — displacement`
- `chiral molecules — rotate — plane-polarized light`
- `correlation — does not prove — causation`

---

# 4. Missing Formulas

The file already includes many core formulas. Before Draw.io, add these high-yield missing or underrepresented formulas.

## Add to Interference, Standing Waves, and Resonance
- `λ_n = 2L/n` for strings fixed at both ends and open pipes
- `f_n = nv/(2L)` for strings fixed at both ends and open pipes
- `λ_n = 4L/n` for closed pipes, odd `n` only
- `f_n = nv/(4L)` for closed pipes, odd `n` only

## Add to Sound, Hearing, and Doppler Effect
- `f' = f((v ± v_D)/(v ∓ v_S))`
- `β = 10log(I/I_0)`
- `I_0 = 10^-12 W/m²`

## Add to Capacitors and Capacitance
- `1/C_eq = 1/C_1 + 1/C_2 + ...` for series
- `C_eq = C_1 + C_2 + ...` for parallel

## Add to Reflection, Refraction, and Snell’s Law
- `sin θ_c = n_2/n_1`, for total internal reflection when `n_1 > n_2`

## Add to Atomic and Nuclear Phenomena
- `A = λN`
- `λ = ln2/t_1/2`
- `E = Δmc²` as binding energy/mass defect notation

## Add to Data-Based and Statistical Reasoning
- `z = (x - μ)/σ`
- Consider adding standard error only if future transcript mentions confidence intervals or SEM.

---

# 5. Missing Proportional Reasoning

Add these proportional relationships because they are exactly what the MCAT likes to test without a calculator.

## Fluids
- `P_hydrostatic ∝ ρ`, `P_hydrostatic ∝ z`
- `Q ∝ r⁴`
- `R_vessel ∝ 1/r⁴`
- `v ∝ 1/A_total` for continuity

## Circuits
- `R ∝ L`
- `R ∝ 1/A`
- `I ∝ 1/R` when voltage is constant
- `P_loss ∝ I²`
- `C ∝ A`
- `C ∝ 1/d`

## Waves and Sound
- `f ∝ 1/λ` in same medium
- `I ∝ A²`
- `I ∝ 1/r²`
- `10 dB increase = 10× intensity`

## Optics / EM radiation
- `E ∝ f`
- `E ∝ 1/λ`
- `higher n → lower v`
- same source crossing media: `f constant`, `v changes`, `λ changes`

## Atomic/Nuclear
- More half-lives → exponential decrease, not linear decrease.
- Photoelectric emission depends on frequency threshold, not just intensity.

---

# 6. Overcrowded Full Concepts That Should Become Micro-Nodes

Most full concept entries are appropriately sized. Do not split them yet.

## Keep as full concepts
- Scientific Notation and Estimation
- Logarithms, pH, and Decibels
- Kinematics Graphs
- Work and Energy
- Fluids, Density, and Pressure
- Bernoulli’s Equation
- Viscosity and Poiseuille’s Law
- Current, Voltage, and Kirchhoff’s Laws
- Resistance and Ohm’s Law
- Capacitors and Capacitance
- Waves and Wave Anatomy
- Sound, Hearing, and Doppler Effect
- Electromagnetic Spectrum and Photon Energy
- Reflection, Refraction, and Snell’s Law
- Mirrors, Lenses, and Image Formation
- Atomic and Nuclear Phenomena

## Consider downgrading only if the Draw.io preview is too crowded
- Circuit Meters could become micro-nodes under Circuits if space is limited.
- Mechanical Advantage could become a subcluster under Work and Energy, but keep as full for now because it bridges hydraulics and musculoskeletal levers.
- Projectile Motion could become a subcluster under Kinematics if the preview is too dense.

## Keep as micro-nodes
- torr
- candela
- prefix nano/pico
- crest/trough
- maxima/minima
- galvanometer
- diopter
- dextrorotatory/levorotatory
- p-value
- standard deviation

---

# 7. Missing Physics ↔ Biology Cross-Links

The file already has placeholders. Add these more specific relationships during or before the Biology phase.

## Cardiovascular / Fluids
- `pressure gradient — drives — blood flow`
- `Poiseuille’s law — explains — vessel radius effect on blood flow`
- `decreased vessel radius — increases — vascular resistance`
- `increased vascular resistance — increases — required blood pressure for same flow`
- `capillary beds — increase — total cross-sectional area`
- `slow capillary flow — permits — gas/nutrient exchange`
- `viscosity — affects — blood flow resistance`

## Respiratory / Fluids and Pressure
- `diaphragm contraction — increases — thoracic volume`
- `increased thoracic volume — decreases — intrapulmonary pressure`
- `pressure gradient — drives — air into lungs`
- `surface tension — opposes — alveolar expansion`
- `surfactant — decreases — alveolar surface tension`

## Nervous system / Circuits
- `membrane potential — is modeled by — voltage difference`
- `cell membrane — behaves like — capacitor`
- `ion channels — conduct — ionic current`
- `myelin — decreases — membrane capacitance`
- `decreased capacitance — increases — conduction speed`
- `nodes of Ranvier — regenerate — action potentials`

## Hearing / Waves
- `sound wave compressions — vibrate — tympanic membrane`
- `ossicles — amplify — mechanical vibrations`
- `basilar membrane location — encodes — perceived pitch`
- `hair cells — transduce — mechanical vibration into neural signal`

## Vision / Optics
- `convex eye lens — converges — light onto retina`
- `focal length mismatch — causes — refractive error`
- `corrective lenses — adjust — total optical power`
- `visible light photons — activate — photoreceptors`

## Genetics / Radiation
- `UV radiation — damages — DNA`
- `x-rays/gamma rays — ionize — biological molecules`
- `ionizing radiation — increases — mutation risk`

## Musculoskeletal / Mechanics
- `bones — act as — levers`
- `joints — act as — fulcrums`
- `muscle force — creates — torque`
- `lever arm length — changes — torque`

---

# 8. Layer / Toggling Problems

The file is layer-ready overall, but some refinements will make the Draw.io export cleaner.

## Layer fixes
- Formula clusters should be Layer 4.
- Common confusion nodes should be Layer 5, not Layer 2.
- VERIFY nodes should be Layer 6 only unless they are also major structural warnings.
- Cross-subject placeholders should be Layer 3 and hidden by default in Physics-only preview.
- Transcript label conflicts should be metadata, not visible in big-picture mode.

## Toggle defaults for Physics-only Draw.io preview

### Default visible
- Layer 1: Main Structure
- Selected chapter’s anchor concepts

### Default hidden
- Layer 2: Deep chapter details
- Layer 3: Cross-subject placeholders
- Layer 4: Equations/formulas
- Layer 5: Traps/confusions
- Layer 6: VERIFY items

This prevents the first preview from looking like a dense spiderweb.

---

# 9. VERIFY Items

## Must resolve or clearly label before Draw.io preview
1. Transcript/Kaplan numbering conflict
   - Keep Kaplan backbone.
   - Display transcript label only as metadata or small subtitle.

2. Duplicate transcript segments
   - Keep merged.
   - Do not create variant nodes unless user specifically asks.

3. Thermodynamics boundary
   - The file has Thermodynamics concepts, but if a standalone Thermodynamics transcript exists, it should be added later as a focused expansion.

## Safe to correct silently
- `Database and Statistical Reasoning` → `Data-Based and Statistical Reasoning`
- `Plasue / Puzzui` → `Poiseuille`
- `ways and sound` → `Waves and Sound`
- `Chimpeys / Chimpi` → C/P or Chemical and Physical Foundations, depending on context

## Can remain as hidden VERIFY nodes
- Chapter numbering conflicts
- Duplicate transcript variants

---

# 10. Draw.io Preview Readiness

## Ready for Physics-only preview?
**Almost yes.**

The file is ready for a Physics-only Draw.io preview after adding the missing formula nodes and tightening the weak relationship labels listed above.

Recommended preview scope:
- Physics hub
- 12 Kaplan chapter nodes
- 3–5 anchor concepts per chapter
- relationship registry links only for high-yield connections
- formulas hidden by default on Layer 4
- traps hidden by default on Layer 5
- VERIFY hidden by default on Layer 6

## Ready for full MCAT master web?
**No.**

Wait until Biology is added, because the most useful cross-links are Physics ↔ Biology.

---

# Recommended Next Step

1. Apply the cleanup fixes from this audit.
2. Save as `MCAT_Science_Web_v1.2_Physics_Bulk_Cleaned.md`.
3. Generate a limited Physics-only Draw.io preview.
4. Then add Biology in bulk.
5. Run a Physics ↔ Biology bridge audit before creating the full master web.


---

# Version Checkpoint

Version: v1.1
Date: 2026-05-01
Subject: Physics
Chapters processed: Kaplan Physics/Math Ch1–Ch12
Transcript processed: Transcript of All Physics Audio Reviews.txt
Major additions: Mode B audit findings appended to running file.
Major edits: No content cleanup applied yet.
Cross-links added: None beyond v1.0.
Open VERIFY items: Preserved from v1.0 and audit appendix.
Recommended next step: Apply cleanup fixes to create v1.2 cleaned checkpoint.
Suggested file name: MCAT_Science_Web_v1.1_Physics_Bulk_Audited.md
