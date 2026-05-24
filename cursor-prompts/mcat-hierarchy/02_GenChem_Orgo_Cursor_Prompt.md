# Cursor Prompt — General Chemistry & Organic Chemistry MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Task

Build the General Chemistry and Organic Chemistry section of my MCAT hierarchy map system.

## Subject Folder

```text
MCAT_Hierarchy_Maps/02_GenChem_Orgo/
```

## Folder/File Structure

Create:

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

## Chemistry-Specific Rules

Always organize chemistry by:

```text
identity → structure → charge/polarity → relationship/reactivity → experimental clue → trap
```

For equations:

```text
Equation
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
├── favorability
├── equilibrium/product stability
├── ΔG, ΔH, ΔS
└── trap: favorable does not mean fast

Kinetics
├── rate
├── activation energy
├── catalyst effect
└── trap: fast does not mean more stable
```

For equilibrium/acids/bases:

```text
System
├── identity of acid/base or equilibrium
├── equation or expression
├── direction shift
├── pH/pKa or Q/K comparison
├── buffer/titration landmark if relevant
└── trap
```

For organic functional groups:

```text
Functional group
├── identity / recognition pattern
├── electrophile or nucleophile role
├── leaving group behavior
├── acid/base condition
├── mechanism family
├── product pattern
└── MCAT trap
```

For lab techniques:

```text
Technique
├── separation principle
├── stationary/mobile phase or physical basis
├── what moves fastest/slowest
├── output/readout
└── trap
```

For spectroscopy:

```text
Technique
├── what it measures
├── axis/units
├── signal/pattern
├── molecule feature revealed
└── trap
```

## Required Cross-Link Tags

Use these when helpful:

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

Follow this strictly:

```text
Target output per batch: 1,200–2,000 tokens
Hard max: 2,500 tokens
```

One batch may be:

```text
├── subject README only
├── one chapter top-level hierarchy only
├── one expanded branch only
└── one revision pass only
```

Never generate all chemistry or all organic chemistry content in one batch.

Each response must begin:

```text
Batch: GenChem/Orgo / [Chapter] / [Branch]
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

Source spine: Kaplan MCAT General Chemistry/Organic Chemistry. UWorld/Anki used only for high-yield reinforcement.

## Hierarchy Map

```text
[CHAPTER TITLE]
│
├── 1. Identity / Concept
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

- [Add exact targeted cards here after review]
```

## Start Command

Start by creating only:

1. `02_GenChem_Orgo/README.md`
2. The folder structure
3. Top-level index files for General Chemistry and Organic Chemistry
4. Empty chapter skeletons only

Do not fully expand any chapter yet.
