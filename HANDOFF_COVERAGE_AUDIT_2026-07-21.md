# Handoff Coverage Audit — 2026-07-21

## Goal

Ensure that the repository can pass unfinished MCAT work to another AI model when a usage or context limit is reached, without requiring every minor note to repeat the entire project history.

## Repository-level handoff files now present

- [`AI_RESUME_CONTEXT.md`](AI_RESUME_CONTEXT.md) — permanent project and student context
- [`PROJECT_HANDOFF_INDEX.md`](PROJECT_HANDOFF_INDEX.md) — map of frequently used, explanation-dependent files
- [`TASK_LEDGER.md`](TASK_LEDGER.md) — active task state and exact resume instructions
- [`templates/AI_HANDOFF_BLOCK_TEMPLATE.md`](templates/AI_HANDOFF_BLOCK_TEMPLATE.md) — standard block for future canonical files

## Command centers now covered

| Area | Handoff coverage |
|---|---|
| Root repository | `README.md` links the required read order and session-continuity rule |
| Running documents | `running-documents/README.md` distinguishes durable learning from task state |
| CARS | `cars/README.md` and the live CARS operating system contain resume rules |
| AAMC review | `practice-review/aamc/README.md` records the quality reset, pilot-first workflow, and source hierarchy |
| UWorld review | `practice-review/uworld/README.md` separates transcription, autopsy, QID mapping, and browser export lanes |
| UWorld master transcription | canonical workflow contains source, append, QC, and exact-resume rules |
| Anki integration | canonical protocol contains current-deck verification and resume rules |
| Browser exporters | `study-workflows/browser-review-export/AI_HANDOFF.md` records selector-testing and verification procedure |
| Mind maps | `study-notes/mcat-mind-maps/README.md` records canonical-node, shard, and resume rules |

## Frequently used files directly updated

- `README.md`
- `cars/README.md`
- `cars/01-strategy-garden/cars-operating-system-and-decision-tree.md`
- `practice-review/uworld/README.md`
- `practice-review/uworld/uworld-verbatim-transcription-running-master-docx-workflow.md`
- `anki/anki-export-integration-protocol.md`

## Folder-level handoff files added

- `practice-review/aamc/README.md`
- `running-documents/README.md`
- `study-notes/mcat-mind-maps/README.md`
- `study-workflows/browser-review-export/AI_HANDOFF.md`

## What is intentionally not repeated in every file

Minor concept notes, completed one-off reviews, dated passage autopsies, and archived prompts do not each repeat the entire project context. They inherit context from:

1. the root handoff files
2. their parent folder README
3. the task ledger when active
4. their canonical workflow or template

This avoids hundreds of copies of stale boilerplate.

## Remaining maintenance rule

When a file becomes a frequent entry point or begins a multi-session task:

1. add it to `PROJECT_HANDOFF_INDEX.md`
2. add an AI resume block or parent-folder handoff
3. create/update its `TASK_LEDGER.md` entry while work is active
4. record durable outcomes in the running master after completion

## Audit conclusion

The repository now has a layered handoff system rather than relying on a single giant context file:

```text
permanent context
→ handoff index
→ active task ledger
→ folder command center
→ canonical workflow
→ exact source/output named by the task
```

This is the expected continuation path for future AI models.
