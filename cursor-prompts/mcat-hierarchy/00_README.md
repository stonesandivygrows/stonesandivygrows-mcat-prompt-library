# MCAT Hierarchy Cursor Prompt Pack

Purpose: prompts for Cursor to build simple Obsidian/GitHub-ready MCAT hierarchy maps by subject.

Use order:

```text
cursor-prompts/mcat-hierarchy/
├── 00_README.md
├── 00_Global_Rules_and_Batching.md
├── 01_Bio_Biochem_Cursor_Prompt.md
├── 02_GenChem_Orgo_Cursor_Prompt.md
├── 03_Physics_Cursor_Prompt.md
├── 04_Behavioral_Cursor_Prompt.md
└── 05_Starter_Folder_Setup_Prompt.md
```

Recommended workflow:

```text
Cursor drafts folder/file skeleton
↓
Cursor creates one top-level chapter hierarchy
↓
You paste one branch into ChatGPT for science + hierarchy check
↓
You revise in Obsidian
↓
Final version gets committed to GitHub
```

Default output format:
- Markdown only.
- One folder per MCAT subject group.
- One file per chapter/topic.
- Tree diagrams inside fenced `text` blocks.
- Concise nodes, exact indentation, no long paragraphs.
- Batches capped to avoid quality drop.

Recommended target repository folder for generated maps:

```text
MCAT_Hierarchy_Maps/
├── 01_Bio_Biochem/
├── 02_GenChem_Orgo/
├── 03_Physics/
└── 04_Behavioral/
```
