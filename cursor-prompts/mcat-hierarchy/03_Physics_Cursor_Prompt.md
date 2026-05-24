# Cursor Prompt — Physics & Math MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Task

Build the Physics/Math section of my MCAT hierarchy map system.

## Subject Folder

```text
MCAT_Hierarchy_Maps/03_Physics/
```

## Folder/File Structure

Create:

```text
03_Physics/
├── README.md
└── Physics_and_Math/
    ├── Ch01_Kinematics_Dynamics.md
    ├── Ch02_Work_Energy.md
    ├── Ch03_Thermodynamics.md
    ├── Ch04_Fluids.md
    ├── Ch05_Electrostatics_Magnetism.md
    ├── Ch06_Circuits.md
    ├── Ch07_Waves_Sound.md
    ├── Ch08_Light_Optics.md
    ├── Ch09_Atomic_Nuclear.md
    ├── Ch10_Math_Strategy.md
    ├── Ch11_Research_Design.md
    └── Ch12_Data_Statistics.md
```

## Physics-Specific Rules

Always organize physics by:

```text
identity → variables/units → equation → proportional relationship → graph/data clue → trap
```

Separate conceptual identity from math behavior.

For every equation:

```text
Equation
├── Formula
├── Units
├── Variable meanings
├── What changes when...
├── Constant-condition shortcut
├── Dimensional analysis check
└── MCAT trap
```

For mechanics:

```text
Mechanics concept
├── scalar/vector identity
├── force or motion variable
├── equation
├── direction/sign convention
├── graph relationship
└── trap
```

For fluids:

```text
Fluid concept
├── pressure/flow identity
├── equation
├── variable meaning
├── physiology link
├── what changes when...
└── trap
```

For electricity/magnetism:

```text
E/M concept
├── field vs force vs potential vs energy
├── source charge/current
├── direction/sign
├── equation
├── circuit or biological application
└── trap
```

For waves/light:

```text
Wave/optics concept
├── wave identity
├── medium requirement
├── variables and units
├── equation
├── what changes when...
├── application
└── trap
```

For math/data:

```text
Math/data skill
├── what the graph/table shows
├── variables and units
├── proportional relationship
├── shortcut
├── arithmetic trap
└── MCAT application
```

## Required Cross-Link Tags

Use these when helpful:

```text
⚙ Physics link = mechanics, fluids, circuits, waves, optics
🧬 Bio link = respiration, cardiovascular flow, nervous system, imaging
⚗ Chem link = electrochemistry, thermodynamics, gases, spectroscopy
↔ See Units = dimensional analysis connection
↔ See Proportionality = variable relationship under fixed conditions
🧪 Experiment = lab/data interpretation connection
⚠ Trap = common MCAT mistake
★ Anchor = high-yield memory anchor
```

## Special Rule for Weak Points

Include explicit variable-relationship branches. Do not rely only on units.

Example:

```text
Acceleration
├── Equation relationship
│   └── a = F/m
├── Unit meaning
│   └── m/s² = change in velocity per second
└── Trap
    └── More distance does not automatically mean more acceleration
```

## Batching Protocol

Follow this strictly:

```text
Target output per batch: 1,200–2,000 tokens
Hard max: 2,500 tokens
```

One batch may be:

```text
├── subject README only
├── one chapter top-level hierarchy only
├── one expanded equation branch only
├── one expanded concept branch only
└── one revision pass only
```

Never generate all Physics/Math chapters in one batch.

Each response must begin:

```text
Batch: Physics / [Chapter] / [Branch]
Scope: [top-level only OR expanded branch OR revision]
Status: Draft
```

Each response must end:

```text
STOP POINT
Next suggested batch: [specific next branch]
```

## Output Format for Chapter Files

Every file should start like this:

```markdown
# [Chapter Title]

Source spine: Kaplan MCAT Physics and Math. UWorld/Anki used only for high-yield reinforcement.

## Hierarchy Map

```text
[CHAPTER TITLE]
│
├── 1. Identity / Concept
│   ├── What is it?
│   ├── What type of physical quantity is it?
│   ├── What does it describe?
│   └── MCAT trap
│
├── 2. Core Variables / Units
│   ├── Definitions
│   ├── Units
│   ├── Vector/scalar or sign convention
│   └── Distinctions
│
├── 3. What Changes When...
│   ├── Variable increases
│   ├── Variable decreases
│   ├── Medium/environment changes
│   └── Constant-condition shortcut
│
├── 4. Equations / Relationships
│   ├── Formula
│   ├── Variable meanings
│   ├── Units
│   └── Proportional reasoning
│
├── 5. Applications / Data
│   ├── Graph/table interpretation
│   ├── Experimental context
│   └── Biological/medical application
│
└── 6. Major Traps
    ├── Units trap
    ├── Direction/sign trap
    ├── Common-sense trap
    └── Shortcut or anchor
```

## ▼ High-Yield Flashcard Review Layer

- [Add exact targeted cards here after review]
```

## Start Command

Start by creating only:

1. `03_Physics/README.md`
2. The folder structure
3. Top-level index file for Physics/Math
4. Empty chapter skeletons only

Do not fully expand any chapter yet.
