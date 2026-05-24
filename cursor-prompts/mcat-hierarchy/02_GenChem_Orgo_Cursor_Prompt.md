# Cursor Prompt — General Chemistry & Organic Chemistry MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Correct Source Hierarchy

```text
Primary basis = user's Anki deck/card groups
Verification/fill gaps = Kaplan General Chemistry + Kaplan Organic Chemistry
Passage/trap framing = UWorld
Coverage validator = AAMC outline
```

Do not build the map from Kaplan first. Start from the relevant Anki cards, then use Kaplan/UWorld/AAMC to verify, correct, expand, or fill missing explanation.

## Task

Build the General Chemistry and Organic Chemistry section of the MCAT hierarchy map system using Anki as the starting scaffold.

## Subject Folder

```text
MCAT_Hierarchy_Maps/02_GenChem_Orgo/
```

## Folder/File Structure

```text
02_GenChem_Orgo/
├── README.md
├── General_Chemistry/
│   ├── Ch01_Atomic_Structure.md
│   ├── Ch02_Periodic_Trends_Bonding.md
│   ├── Ch03_Compounds_Stoichiometry.md
│   ├── Ch04_Chemical_Kinetics.md
│   ├── Ch05_Equilibrium.md
│   ├── Ch06_Thermodynamics.md
│   ├── Ch07_Redox_Electrochemistry.md
│   ├── Ch08_Solutions.md
│   ├── Ch09_Acids_Bases.md
│   ├── Ch10_Titrations_Solubility.md
│   ├── Ch11_Data_Experimental_Chemistry.md
│   └── Ch12_Chemistry_Math_Strategy.md
└── Organic_Chemistry/
    ├── Ch01_Nomenclature_Structure.md
    ├── Ch02_Bonding_Isomers.md
    ├── Ch03_Separations_Purification.md
    ├── Ch04_Spectroscopy.md
    ├── Ch05_Alcohols_Aldehydes_Ketones.md
    ├── Ch06_Carboxylic_Acids_Derivatives.md
    ├── Ch07_Nitrogen_Phosphorus_Compounds.md
    ├── Ch08_Biological_Molecules_Orgo.md
    ├── Ch09_Reaction_Mechanisms.md
    ├── Ch10_Lab_Techniques.md
    └── Ch11_Organic_MCAT_Traps.md
```

Chapter/file names are scaffolds until verified against the Anki card group and Kaplan/AAMC coverage.

## Chemistry-Specific Rules

Always organize chemistry by:

```text
Anki card/group → identity → structure → charge/polarity → relationship/reactivity → experimental clue → trap → Kaplan/UWorld verification
```

For equations:

```text
Equation
├── Anki card basis
├── Formula
├── Units
├── Variable meanings
├── What changes when...
├── Constant-condition shortcut
└── Units/sign trap
```

For thermodynamics vs kinetics:

```text
Thermodynamics
├── Anki card basis
├── favorability
├── equilibrium/product stability
├── ΔG, ΔH, ΔS
└── trap: favorable does not mean fast

Kinetics
├── Anki card basis
├── rate
├── activation energy
├── catalyst effect
└── trap: fast does not mean more stable
```

For organic functional groups:

```text
Functional group
├── Anki card basis
├── identity / recognition pattern
├── electrophile or nucleophile role
├── leaving group behavior
├── acid/base condition
├── mechanism family
├── product pattern
└── MCAT trap
```

For lab techniques and spectroscopy:

```text
Technique
├── Anki card basis
├── what it measures or separates
├── physical/chemical principle
├── axis/units or readout
├── fastest/slowest or strongest/weakest signal
└── trap
```

## Required Cross-Link Tags

```text
⚗ Chem link = acid/base, polarity, thermodynamics, equilibrium
🧬 Bio link = amino acids, proteins, metabolism, membranes
⚙ Physics link = circuits, pressure, optics, spectroscopy
↔ See pKa = protonation controls charge/reactivity
↔ See Polarity = solubility, separations, chromatography
🧪 Experiment = lab/data interpretation connection
⚠ Trap = common MCAT mistake
★ Anchor = high-yield memory anchor
```

## Batching Protocol

```text
Target output per batch: 1,200–2,000 tokens
Hard max: 2,500 tokens
```

Each response must begin:

```text
Batch: GenChem/Orgo / [Chapter] / [Branch]
Scope: [top-level only OR expanded branch OR revision]
Status: Draft
```

Each response must end:

```text
QC CHECK
├── Anki basis checked: pass / needs fix
├── Verification source checked: Kaplan / UWorld / AAMC / needs source check
├── Indentation: pass / needs fix
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
│   ├── What category does it belong to?
│   ├── What structure/charge/polarity matters?
│   └── MCAT trap
│
├── 2. Core Terms / Variables / Structures
│   ├── Definitions
│   ├── Units or charge
│   ├── Relationships
│   └── Distinctions
│
├── 3. What Changes When...
│   ├── Concentration changes
│   ├── Temperature changes
│   ├── Pressure/volume changes
│   ├── pH changes
│   └── Catalyst/solvent changes
│
├── 4. Equations / Mechanisms
│   ├── Formula or mechanism
│   ├── Variable meanings or steps
│   ├── Directionality
│   └── Limiting factor
│
├── 5. Applications / Experiments
│   ├── Lab technique
│   ├── Data/table/graph interpretation
│   └── Passage application
│
└── 6. Major Traps
    ├── Similar terms confused
    ├── Units/sign/direction trap
    ├── Thermodynamics vs kinetics trap
    └── Shortcut or anchor
```

## ▼ High-Yield Flashcard Review Layer

- [Paste exact targeted Anki cards here after review]
```

## Start Command

Start by creating only the folder structure and empty skeletons. Do not fully expand any chapter until the relevant Anki card group is available.
