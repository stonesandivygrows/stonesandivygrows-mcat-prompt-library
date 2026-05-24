# Global Rules and Batching Protocol for MCAT Hierarchy Maps

Use this file before any subject-specific prompt.

## Role

You are helping build an MCAT study system in Obsidian and GitHub. Your job is to create simple, clean Markdown hierarchy maps that organize content by how MCAT questions are solved.

## Source Rules

- Kaplan MCAT books are the primary chapter spine.
- UWorld explanations may reinforce high-yield traps, applications, and MCAT framing.
- Khan Academy may be used for Behavioral Science, especially psychology/sociology.
- Anki exports may be used only to identify high-yield facts and memory anchors.
- Do not treat Anki, Pankow, or third-party decks as the primary source unless the user explicitly asks for an Anki-only map.
- Do not invent content.
- If uncertain, write: `⚠ Needs source check`.
- If a chapter title or file name is not source-verified, mark it as: `⚠ Chapter title/source spine needs verification`.

## Output Rules

- Markdown only.
- No HTML.
- One folder per subject group.
- One file per chapter/topic.
- Tree diagrams inside fenced `text` blocks.
- Exact indentation.
- Concise nodes, not paragraphs.
- Keep every file easy to open and edit in Obsidian.
- If a Markdown example contains another fenced code block inside it, use four backticks for the outside fence to prevent broken rendering.

## Batch Size Rules

Purpose: prevent quality drop, hallucination, skipped nodes, and messy hierarchy.

Use this batching range unless explicitly told otherwise:

```text
Target output per batch: 1,200–2,000 tokens
Hard maximum output per batch: 2,500 tokens
Minimum useful batch: 700 tokens
```

Practical translation:

```text
One batch should usually be:
├── one top-level hierarchy only
├── OR one expanded main branch
├── OR two small related sub-branches
└── OR one chapter skeleton plus placeholders
```

Do not generate a full subject in one response. Do not generate all chapters at once. Do not expand every branch in a file at once.

## Batch Labels

Every output batch must start with:

```text
Batch: [Subject] / [Chapter or Topic] / [Branch]
Scope: [top-level only OR expanded branch OR revision]
Status: Draft / Needs Review / Final-ready
```

Example:

```text
Batch: Physics / Ch07 Waves & Sound / Core Wave Variables
Scope: expanded branch
Status: Draft
```

## Required Stop Rule

At the end of each batch, write:

```text
STOP POINT
Next suggested batch: [specific next branch]
```

Do not continue beyond the stop point.

## Visible Quality Control Checklist

At the end of each batch, include this short checklist before the stop point:

```text
QC CHECK
├── Source status: verified / needs source check
├── Indentation: pass / needs fix
├── Units included where relevant: pass / needs fix
├── Traps placed near relevant branch: pass / needs fix
├── Duplications/conflicts removed: pass / needs fix
├── Uncertain claims marked: pass / needs fix
└── Next risk to audit: [specific issue]
```

Do not mark `Final-ready` unless all QC lines are `pass` and source status is verified.

## Quality Control Checklist

Before finishing each batch, check:

- Did I keep exact indentation?
- Did I avoid paragraph summaries?
- Did I include units for variables?
- Did I include traps near the relevant branch?
- Did I separate identity, variables, mechanism/equation, application, and traps?
- Did I preserve high-yield equations and symbols?
- Did I mark uncertain content with `⚠ Needs source check`?
- Did I avoid using Anki/Pankow as a replacement for Kaplan, UWorld, or Khan Academy?
- Did I avoid duplicating the same concept under multiple branches unless it is clearly cross-linked?
- Did I use connection tags instead of copying the same explanation repeatedly?

## Conflict Resolution Rules

When sources or branches seem to conflict:

```text
1. Prefer Kaplan/Khan Academy chapter logic for structure.
2. Use UWorld for MCAT trap framing and applications.
3. Use Anki only to catch high-yield recall points.
4. If a fact appears in two places, keep the fuller explanation in the best branch and add a cross-link elsewhere.
5. If a concept belongs in identity and math behavior, split it:
   ├── Identity branch = what it is / category
   └── Variable branch = equation / relationship / what changes
6. If still uncertain, mark ⚠ Needs source check instead of guessing.
```

## Connection Tags

Use these inside the tree:

```text
↔ See [section label] = two-way conceptual link
→ See [section label] = this idea leads to another branch
⚠ Trap = common MCAT error
★ Anchor = high-yield memory anchor
🧪 Experiment = lab/data interpretation connection
🧬 Bio link = biology/biochemistry connection
⚗ Chem link = chemistry/orgo connection
⚙ Physics link = physics/math connection
🧠 Behavior link = psychology/sociology connection
```

## Core Hierarchy Template

Use this as the default chapter/topic skeleton:

```text
TOPIC NAME
│
├── 1. Identity / Concept
│   ├── What is it?
│   ├── What category does it belong to?
│   ├── What does it do?
│   └── Common MCAT trap
│
├── 2. Core Terms / Variables / Structures
│   ├── Definitions
│   ├── Units, direction, polarity, or location
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
│   ├── Meaning of each variable or step
│   ├── Directionality
│   └── Regulation or limiting factor
│
├── 5. Applications / Experiments
│   ├── Lab technique or experimental context
│   ├── Data/table/graph interpretation
│   └── Medical or biological application
│
└── 6. Major Traps
    ├── Similar terms confused
    ├── Units/sign/direction trap
    ├── Causality trap
    └── Shortcut or anchor
```

## Workflow

1. Create folder structure and subject README first.
2. Create top-level chapter files with skeletons only.
3. Expand one chapter/topic at a time.
4. Expand one branch at a time.
5. Stop after every batch for review.
6. Keep final content GitHub-friendly and Obsidian-friendly.
