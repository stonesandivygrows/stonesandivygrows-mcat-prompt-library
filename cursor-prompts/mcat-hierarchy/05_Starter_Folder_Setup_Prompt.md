# Cursor Starter Prompt — Folder Setup Only

Use this prompt first when you want Cursor to create the empty MCAT hierarchy map workspace before expanding content.

```text
Create the MCAT hierarchy map folder system exactly as specified below.

Rules:
- Use Markdown only.
- Create one folder per MCAT subject group.
- Create one file per chapter/topic.
- Add a README.md in each subject folder.
- Do not fully expand chapters yet.
- Each chapter file should start with:
  1. Title
  2. Source note
  3. Empty top-level hierarchy placeholder
  4. High-Yield Flashcard Review Layer placeholder
- Keep all files Obsidian-ready.
- Do not create HTML.
- Use exact indentation.
- Keep content concise.
- Use batching: one subject folder per batch if output becomes too long.

Create this structure:

MCAT_Hierarchy_Maps/
├── 01_Bio_Biochem/
│   ├── README.md
│   ├── Biology/
│   └── Biochemistry/
├── 02_GenChem_Orgo/
│   ├── README.md
│   ├── General_Chemistry/
│   └── Organic_Chemistry/
├── 03_Physics/
│   ├── README.md
│   └── Physics_and_Math/
└── 04_Behavioral/
    ├── README.md
    └── Psychology_Sociology/

For each chapter file, use this starter structure:

# [Chapter Title]

Source spine: [Kaplan/Khan Academy/UWorld/Anki note]

## Hierarchy Map

```text
[CHAPTER TITLE]
│
├── 1. Identity / Concept
│   ├── What is it?
│   ├── What category does it belong to?
│   ├── What does it do?
│   └── MCAT trap
│
├── 2. Core Terms / Variables / Structures
│   ├── Definitions
│   ├── Units, location, direction, polarity, or structure
│   ├── Relationships
│   └── Distinctions
│
├── 3. What Changes When...
│   ├── Variable or condition increases
│   ├── Variable or condition decreases
│   ├── Environment changes
│   └── System is disrupted
│
├── 4. Mechanism / Equation / Pathway
│   ├── Steps or formula
│   ├── Meaning of variables or steps
│   ├── Directionality
│   └── Regulation or limiting factor
│
├── 5. Applications / Experiments
│   ├── Lab or experimental context
│   ├── Data/table/graph interpretation
│   └── Medical or biological application
│
└── 6. Major Traps
    ├── Similar terms confused
    ├── Units/sign/direction trap
    ├── Causality trap
    └── Shortcut or anchor
```

## ▼ High-Yield Flashcard Review Layer

- [Add exact targeted cards here after review]

STOP POINT
Next suggested batch: create one subject README and its chapter skeletons.
```
