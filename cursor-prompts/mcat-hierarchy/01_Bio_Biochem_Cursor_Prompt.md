# Cursor Prompt — Bio/Biochem MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Correct Source Hierarchy

```text
Primary basis = user's Anki deck/card groups
Verification/fill gaps = Kaplan Biology + Kaplan Biochemistry
Passage/trap framing = UWorld
Coverage validator = AAMC outline
```

Do not build the map from Kaplan first. Start from the relevant Anki cards, then use Kaplan/UWorld/AAMC to verify, correct, expand, or fill missing explanation.

## Task

Build the Bio/Biochem section of the MCAT hierarchy map system using Anki as the starting scaffold.

## Subject Folder

```text
MCAT_Hierarchy_Maps/01_Bio_Biochem/
```

## Folder/File Structure

```text
01_Bio_Biochem/
├── README.md
├── Biology/
│   ├── Ch01_Cell.md
│   ├── Ch02_Reproduction.md
│   ├── Ch03_Embryogenesis_Development.md
│   ├── Ch04_Nervous_System.md
│   ├── Ch05_Endocrine_System.md
│   ├── Ch06_Respiratory_System.md
│   ├── Ch07_Cardiovascular_System.md
│   ├── Ch08_Immune_System.md
│   ├── Ch09_Digestive_System.md
│   ├── Ch10_Homeostasis_Excretory_Skin.md
│   ├── Ch11_Musculoskeletal_System.md
│   └── Ch12_Genetics_Evolution.md
└── Biochemistry/
    ├── Ch01_Amino_Acids_Peptides_Proteins.md
    ├── Ch02_Enzymes.md
    ├── Ch03_Nonenzymatic_Protein_Function.md
    ├── Ch04_Carbohydrate_Structure_Function.md
    ├── Ch05_Lipid_Structure_Function.md
    ├── Ch06_DNA_RNA.md
    ├── Ch07_Biological_Membranes.md
    ├── Ch08_Carbohydrate_Metabolism_1.md
    ├── Ch09_Carbohydrate_Metabolism_2.md
    ├── Ch10_Lipid_Amino_Acid_Metabolism.md
    ├── Ch11_Bioenergetics_Regulation.md
    └── Ch12_Integrated_Metabolism.md
```

Chapter/file names are scaffolds until verified against the Anki card group and Kaplan/AAMC coverage.

## Bio/Biochem-Specific Rules

Always include:

```text
Anki card/group → location → structure → function → regulation → disruption/trap → Kaplan/UWorld verification
```

For organ systems:

```text
System
├── Anki card basis
├── Anatomy / structures
├── Flow direction or signal direction
├── Control signals
├── Feedback regulation
├── What changes when...
├── Passage/data applications
└── Major traps
```

For pathways:

```text
Pathway
├── Anki card basis
├── Identity / purpose
├── Location
├── Fed/fasted state
├── Inputs
├── Key irreversible steps
├── Regulation
├── Outputs
├── Cross-links
└── Major traps
```

For enzymes:

```text
Enzyme concept
├── Anki card basis
├── Active site
├── Substrate
├── Cofactors/coenzymes
├── Km and Vmax
├── Inhibition types
├── Regulation
├── Graph interpretation
└── Major traps
```

For molecules:

```text
Molecule family atlas
├── Anki card basis
├── Shared scaffold
├── What changed?
├── Functional consequence
├── Related molecules
└── MCAT trap
```

## Required Cross-Link Tags

```text
🧬 Bio link = organ system, cell biology, genetics, physiology
⚗ Chem link = bonds, polarity, pH, redox, thermodynamics
⚙ Physics link = pressure, flow, diffusion, electrochemical gradients
↔ See Metabolism = energy status or pathway connection
↔ See Membranes = transport, receptors, gradients, signaling
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
Batch: Bio/Biochem / [Chapter] / [Branch]
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
│   ├── Where is it located?
│   ├── What does it do?
│   └── MCAT trap
│
├── 2. Core Structures / Terms
│   ├── Definitions
│   ├── Location
│   ├── Directionality
│   └── Distinctions
│
├── 3. What Changes When...
│   ├── Signal increases
│   ├── Signal decreases
│   ├── Environment changes
│   └── System is disrupted
│
├── 4. Mechanism / Pathway
│   ├── Steps
│   ├── Regulation
│   ├── Inputs/outputs
│   └── Rate-limiting or key irreversible step
│
├── 5. Applications / Experiments
│   ├── Passage context
│   ├── Graph/table interpretation
│   └── Medical application
│
└── 6. Major Traps
    ├── Similar terms confused
    ├── Direction/location trap
    ├── Feedback trap
    └── Shortcut or anchor
```

## ▼ High-Yield Flashcard Review Layer

- [Paste exact targeted Anki cards here after review]
```

## Start Command

Start by creating only the folder structure and empty skeletons. Do not fully expand any chapter until the relevant Anki card group is available.
