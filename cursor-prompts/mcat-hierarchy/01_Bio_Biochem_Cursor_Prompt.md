# Cursor Prompt — Bio/Biochem MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Task

Build the Bio/Biochem section of my MCAT hierarchy map system.

## Subject Folder

```text
MCAT_Hierarchy_Maps/01_Bio_Biochem/
```

## Folder/File Structure

Create:

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

## Bio/Biochem-Specific Rules

Always include:

```text
location → structure → function → regulation → disruption/trap
```

For organ systems:

```text
System
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
├── Active site
├── Substrate
├── Cofactors/coenzymes
├── Km and Vmax
├── Inhibition types
├── Regulation
├── Graph interpretation
└── Major traps
```

For macromolecules and molecular families:

```text
Molecule family atlas
├── Shared scaffold
├── What changed?
├── Functional consequence
├── Related molecules
└── MCAT trap
```

## Required Cross-Link Tags

Use these when helpful:

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

Never generate all Biology or all Biochemistry content in one batch.

Each response must begin:

```text
Batch: Bio/Biochem / [Chapter] / [Branch]
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

Source spine: Kaplan MCAT Biology/Biochemistry. UWorld/Anki used only for high-yield reinforcement.

## Hierarchy Map

```text
[CHAPTER TITLE]
│
├── 1. Identity / Concept
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

- [Add exact targeted cards here after review]
```

## Start Command

Start by creating only:

1. `01_Bio_Biochem/README.md`
2. The folder structure
3. Top-level index files for Biology and Biochemistry
4. Empty chapter skeletons only

Do not fully expand any chapter yet.
