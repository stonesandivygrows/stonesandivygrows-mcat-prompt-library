# MCAT Hierarchy Workflow and Output Plan

## Purpose

This file defines how Anki, Kaplan/Khan Academy, UWorld, AI Studio, ChatGPT, Cursor, Obsidian, and GitHub should work together without duplicating work or overwriting the user's current notes.

## Core Workflow

```text
Current user-edited note
↓
Relevant Anki cards/card group = content basis
↓
Kaplan or Khan Academy = verify, clarify, correct, and fill gaps
↓
UWorld = passage framing, applications, and common traps
↓
AAMC outline = coverage validator when needed
↓
Google AI Studio/Gemini = optional large-document extraction/comparison
↓
ChatGPT = science accuracy + hierarchy QC
↓
Cursor = applies approved edits to Markdown files
↓
Obsidian = live editing and studying
↓
GitHub = version history and final storage
```

## Tool Roles

### Anki

```text
Role
├── Primary content basis
├── Defines recall targets and high-yield emphasis
├── Supplies exact cards/card groups for each topic
└── Remains the active-recall and spaced-repetition system
```

The hierarchy maps organize understanding and relationships. They supplement Anki; they do not replace active recall or spaced repetition.

### Kaplan / Khan Academy

```text
Role
├── Verify Anki wording
├── Correct incomplete or misleading cards
├── Fill missing explanations
├── Supply chapter context
└── Confirm relationships, mechanisms, units, and exceptions
```

Use Kaplan for the science subjects. Use Khan Academy as an important verification/fill-gap source for Behavioral Science.

### UWorld

```text
Role
├── Add passage-style applications
├── Identify common traps
├── Clarify experimental reasoning
└── Show how facts are tested rather than only memorized
```

### AAMC

```text
Role
├── Validate exam coverage
├── Check whether a topic belongs on the MCAT
└── Confirm scientific inquiry/reasoning emphasis
```

### Google AI Studio / Gemini

```text
Role = optional source-processing engine
├── Read large PDF source bundles
├── Extract topic-specific Anki cards
├── Compare Anki against Kaplan/UWorld
├── Identify missing or conflicting nodes
└── Return one bounded branch or comparison report
```

AI Studio is optional. Do not use it as the permanent editing or repository workspace.

### ChatGPT

```text
Role = reviewer/integrator
├── Check science accuracy
├── Check hierarchy logic
├── Detect missing, duplicated, or misplaced nodes
├── Resolve confusing wording
├── Propose concise replacement branches
└── Approve or reject Cursor patches
```

### Cursor

```text
Role = file builder/editor
├── Create Markdown folders/files
├── Preserve the user's newest note structure
├── Apply approved patches
├── Maintain links and status labels
└── Prepare changes for GitHub review
```

Cursor must not be treated as the final scientific authority.

### Obsidian

```text
Role = live study/editing workspace
├── Read notes while they are being built
├── Edit hierarchy branches directly
├── Follow internal links
└── Compare Draft / Reviewed / Final sections
```

### GitHub

```text
Role = versioned storage
├── Preserve revision history
├── Store approved Markdown notes
├── Recover earlier versions
└── Track prompt/workflow changes
```

GitHub is not a Google Docs-style autosave workspace. Commit only after review.

## Output Format

All generated study content should be plain Markdown.

```text
MCAT_Hierarchy_Maps/
├── 01_Bio_Biochem/
├── 02_GenChem_Orgo/
├── 03_Physics/
└── 04_Behavioral/
```

Each chapter/topic file should contain:

```text
# Topic title

Status: Draft / Needs Review / Reviewed / Final
Last reviewed: YYYY-MM-DD
Basis: relevant Anki deck/card group
Verification: Kaplan/Khan/UWorld/AAMC as applicable

## Hierarchy Map

[studyable text-tree content]

## Source/Conflict Notes

[only unresolved source or placement issues]

## High-Yield Flashcard Review Layer

[targeted Anki cards or card references]
```

## Studyability While Building

Every batch should remain readable and useful in Obsidian/Cursor preview.

```text
Draft
├── may be studied for orientation
├── may contain marked uncertainties
└── must not be treated as fully verified

Reviewed
├── Anki basis checked
├── verification source checked
├── hierarchy checked
└── safe for normal study use

Final
├── all QC checks pass
├── conflicts resolved
├── no known missing source checks
└── committed to GitHub
```

## Commit Policy

```text
Cursor proposes or applies a local patch
↓
User/ChatGPT reviews the changed branch
↓
Status becomes Reviewed or Final
↓
Commit to GitHub
```

Do not automatically commit generated study content merely because a batch completed.

## Default Project Strategy

```text
1. Preserve the newest user-edited note.
2. Work on one topic/chapter at a time.
3. Audit before rewriting.
4. Expand one branch per batch.
5. Keep the file studyable throughout.
6. Commit only reviewed work.
```
