# Project Handoff Index

Last updated: 2026-07-21

This file maps the **frequently used and explanation-dependent parts of the repository** to the context a future AI needs to resume them safely.

Use this read order whenever a session is new or the previous model reached a usage/context limit:

1. [`README.md`](README.md) — repository purpose and folder map
2. [`AI_RESUME_CONTEXT.md`](AI_RESUME_CONTEXT.md) — student preferences, quality rules, study-system architecture, source hierarchy
3. [`TASK_LEDGER.md`](TASK_LEDGER.md) — active work, last verified item, next exact item
4. the folder README or canonical workflow file below
5. the latest source/export named in the task ledger

## Handoff coverage rule

Not every small note needs a repeated context block. A file should be self-explanatory or point to this index when it is:

- a canonical workflow
- a running master
- a frequently reused prompt
- a parent README or command center
- a multi-session task
- a template that determines future outputs
- a file whose status, source boundary, or intended destination is not obvious from its title

For these files, include or preserve an `AI resume block` stating:

```text
Purpose
Authority/status
Inputs and private source location
Locked user preferences
What is already complete
What is not complete
Quality-control requirements
Exact resume instruction
Related canonical files
```

## Canonical file map

| Area | Start here | What it controls | Resume requirement |
|---|---|---|---|
| Whole repository | `AI_RESUME_CONTEXT.md` | Three-place study system, student preferences, passage-guide specification, timing, source hierarchy, quality boundaries | Read before creating any new guide, map, deck, workflow, or study artifact |
| Active tasks | `TASK_LEDGER.md` | Last verified item, next exact item, rejected approaches, open questions | Update before stopping any multi-step task |
| Consolidated study history | `running-documents/mcat-running-review-and-notes-master.md` | Durable learning and dated practice/test-review index | Append durable decisions and lesson summaries; do not use it as a raw task scratchpad |
| CARS | `cars/README.md` | Folder routing and canonical CARS strategy files | Continue from the session/passage named in the task ledger; preserve question-level analysis |
| Live CARS solving | `cars/01-strategy-garden/cars-operating-system-and-decision-tree.md` | Passage and question decision tree | Update only after a pattern repeats or the user explicitly changes a rule |
| CARS timing | `cars/01-strategy-garden/cars-timing-whiteboard-and-skipping-protocol.md` | Timer checkpoints, whiteboard use, skip/return rules | Preserve start-time preference and protected return buffer |
| UWorld transcription | `practice-review/uworld/uworld-verbatim-transcription-running-master-docx-workflow.md` | Verbatim extraction, one-running-DOCX append rules, figure handling, QC | Start from the latest real master file; never create an empty replacement master |
| Browser exports | `study-workflows/browser-review-export/README.md` | JW/UWorld/AAMC export scripts and browser workflow | Reproduce failures on the live site; record selector changes and verification date |
| Anki source integration | `anki/anki-export-integration-protocol.md` | How private deck exports feed chapter layers and application cards | Confirm exact current deck/subdeck names before writing import files |
| Mind-map architecture | `study-notes/mcat-mind-maps/00-anki-project-chat-coverage-and-map-architecture.md` | Chat extraction, canonical nodes, shard status, visual grammar | Resume from `Needs Recheck` or next unexecuted shard/prompt packet |
| AAMC full-length guides | `practice-review/aamc/README.md` | Exam-source roles, spoiler-safe layers, guide quality standard | Rebuild one FL4 pilot passage first; do not batch from generic templates |
| UWorld review folder | `practice-review/uworld/README.md` | Separation between transcription, autopsy, QID mapping, and copyrighted sources | Update the running map or running review; do not create unnecessary one-off files |

## File roles: do not confuse them

### `AI_RESUME_CONTEXT.md`

Answers: **What does this student need, what standards are locked, and how should the entire system behave?**

### `TASK_LEDGER.md`

Answers: **What is currently being done, where did the previous session stop, and what is the next exact action?**

### Running master

Answers: **What durable learning, rules, and completed review records should remain useful after the current task is over?**

### Folder README

Answers: **Which files in this folder are canonical, how do they relate, and which workflow should be used?**

### Individual workflow or prompt

Answers: **Exactly how should this task be executed and quality-checked?**

## Standard end-of-session handoff

Before reaching a limit, a model should write a compact handoff using this form:

```markdown
## Session handoff — YYYY-MM-DD

- Task ID:
- Canonical file:
- Source opened:
- Completed:
- Last verified item:
- Next exact item:
- User corrections locked in:
- Rejected/failed approach:
- Files or commits created:
- QC completed:
- QC still required:
```

Place the operational status in `TASK_LEDGER.md`. Put durable educational conclusions in the running master or subject file. Do not leave essential continuation information only in the chat.

## Source and copyright boundary

GitHub is the durable backend for:

- original prompts and scripts
- workflow rules
- indexes and manifests
- original summaries and misconception repairs
- bounded searchable question/passage anchors
- task status and quality-control records

Private/local or Drive storage remains the home for:

- full UWorld or AAMC exports
- commercial book PDFs
- complete Anki deck exports
- screenshots and large image folders
- generated private study notebooks and master DOCX files

A future model must not claim it opened a private source merely because a filename or Drive link appears in GitHub. It must actually access the source in the active session.

## Quality-status vocabulary

Use these terms consistently:

- `Canonical` — approved source of truth for the workflow or rule
- `Approved` — user accepted the content/output
- `Prototype` — useful structure or layout, but not approved content
- `Needs Recheck` — completeness or correctness cannot yet be claimed
- `Noncanonical` — do not use as a content authority
- `Archived` — retained for history/source, not the current workflow
- `Superseded` — replaced by a named newer file

## Audit maintenance

When a new frequently used workflow is created:

1. Add it to this index.
2. Add a compact AI resume block to the file or its parent README.
3. Add an active task to `TASK_LEDGER.md` if work is incomplete.
4. Link it from the root README when it becomes a primary entry point.
5. Record the private-source boundary and verification standard.

This targeted approach prevents repetitive boilerplate in every minor note while ensuring that the files most likely to be reopened by another model contain enough context to continue safely.
