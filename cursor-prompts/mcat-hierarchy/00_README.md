# MCAT Hierarchy Cursor Prompt Pack

Purpose: prompts and protocols for building simple, studyable, Obsidian/GitHub-ready MCAT hierarchy maps from the user's Anki deck.

## Use Order

```text
cursor-prompts/mcat-hierarchy/
├── 00_README.md
├── 00_Global_Rules_and_Batching.md
├── 01_Bio_Biochem_Cursor_Prompt.md
├── 02_GenChem_Orgo_Cursor_Prompt.md
├── 03_Physics_Cursor_Prompt.md
├── 04_Behavioral_Cursor_Prompt.md
├── 05_Starter_Folder_Setup_Prompt.md
├── 06_QC_AUDIT.md
├── 07_EXTERNAL_SOURCE_AUDIT.md
├── 08_WORKFLOW_AND_OUTPUT_PLAN.md
└── 09_SOURCE_BUNDLE_PROTOCOL.md
```

## Source Hierarchy

```text
Anki deck/card groups = content basis
Current user-edited note = working structure
Kaplan/Khan Academy = verify, clarify, correct, and fill gaps
UWorld = passage framing, applications, and traps
AAMC = coverage validator
```

## Recommended Workflow

```text
Identify newest current note
↓
Prepare one topic-specific source bundle
↓
Audit one branch
↓
Propose an exact patch
↓
ChatGPT/user reviews science + hierarchy
↓
Cursor applies approved patch
↓
Study/edit in Obsidian
↓
Commit reviewed version to GitHub
```

Google AI Studio/Gemini may be used as an optional large-PDF extraction/comparison tool. It is not the permanent editing or repository workspace.

## Default Output Format

- Markdown only.
- One folder per MCAT subject group.
- One file per chapter/topic.
- Tree diagrams inside fenced `text` blocks.
- Concise nodes, exact indentation, no long paragraphs.
- Visible file status: `Draft`, `Needs Review`, `Reviewed`, or `Final`.
- Batches capped to avoid quality drop.
- Existing user notes edited in patch mode rather than overwritten.

## Recommended Target Folder

```text
MCAT_Hierarchy_Maps/
├── 01_Bio_Biochem/
├── 02_GenChem_Orgo/
├── 03_Physics/
└── 04_Behavioral/
```

## Study-System Boundary

```text
Hierarchy maps = understanding and organization
Anki = active recall and spaced repetition
UWorld/AAMC practice = application and reasoning
GitHub = reviewed version history
```

Do not commit unreviewed generated study content or copyrighted source PDFs.
