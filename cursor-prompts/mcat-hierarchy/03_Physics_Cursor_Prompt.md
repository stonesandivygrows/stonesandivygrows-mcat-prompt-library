# Cursor Prompt — Physics & Math MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Correct Source Hierarchy

```text
Primary basis = user's Anki deck/card groups
Verification/fill gaps = Kaplan Physics and Math
Passage/trap framing = UWorld
Coverage validator = AAMC outline
```

Do not build the map from Kaplan first. Start from the relevant Anki cards, then use Kaplan/UWorld/AAMC to verify, correct, expand, or fill missing explanation.

## Task

Build the Physics/Math section of the MCAT hierarchy map system using Anki as the starting scaffold.

## Subject Folder

```text
MCAT_Hierarchy_Maps/03_Physics/
```

## Folder/File Structure

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

Chapter/file names are scaffolds until verified against the Anki card group and Kaplan/AAMC coverage.

## Physics-Specific Rules

Always organize physics by:

```text
Anki card/group → identity → variables/units → equation → proportional relationship → graph/data clue → trap → Kaplan/UWorld verification
```

Separate conceptual identity from math behavior.

For every equation:

```text
Equation
├── Anki card basis
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
├── Anki card basis
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
├── Anki card basis
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
├── Anki card basis
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
├── Anki card basis
├── wave identity
├── medium requirement
├── variables and units
├── equation
├── what changes when...
├── application
└── trap
```

## Required Cross-Link Tags

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
├── Anki card basis
├── Equation relationship
│   └── a = F/m
├── Unit meaning
│   └── m/s² = change in velocity per second
└── Trap
    └── More distance does not automatically mean more acceleration
```

## Batching Protocol

```text
Target output per batch: 1,200–2,000 tokens
Hard max: 2,500 tokens
```

Each response must begin:

```text
Batch: Physics / [Chapter] / [Branch]
Scope: [top-level only OR expanded branch OR revision]
Status: Draft
```

Each response must end:

```text
QC CHECK
├── Anki basis checked: pass / needs fix
├── Verification source checked: Kaplan / UWorld / AAMC / needs source check
├── Indentation: pass / needs fix
├── Units included where relevant: pass / needs fix
├── Duplications/conflicts removed: pass / needs fix
└── Next risk to audit: [specific issue]

STOP POINT
Next suggested batch: [specific next branch]
```

## Chapter File Starter

```markdown
# [Chapter Title]

Basis: user's Anki deck/card group. Kaplan/UWorld/AAMC used to verify, correct, expand, and fill gaps.

## Hierarchy Map

```text
[CHAPTER TITLE]
│
├── 1. Anki-Based Identity / Concept
│   ├── Relevant Anki card group
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

- [Paste exact targeted Anki cards here after review]
```

## Start Command

Start by creating only the folder structure and empty skeletons. Do not fully expand any chapter until the relevant Anki card group is available.
