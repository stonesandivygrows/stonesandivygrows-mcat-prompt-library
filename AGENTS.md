# AGENTS.md — MCAT Repository Instructions

This file applies to the entire repository.

## Required read order

Before doing substantive work, read:

1. [`AI_RESUME_CONTEXT.md`](AI_RESUME_CONTEXT.md)
2. [`PROJECT_HANDOFF_INDEX.md`](PROJECT_HANDOFF_INDEX.md)
3. [`TASK_LEDGER.md`](TASK_LEDGER.md)
4. the nearest folder README
5. the canonical workflow or template named by the active task

## Core project rule

The student studies in only three active destinations:

- **Goodnotes** — full explanations, worked examples, exam review, rewriting, and redo packets
- **Anki** — concise content recall and automatic strategy/application triggers
- **Whimsical** — relational diagrams for concepts that are not sticking

GitHub is the durable backend, archive, workflow, index, and cross-session handoff layer. Do not turn it into a fourth study destination.

## Session continuity

For any multi-step task:

- create or use a `TASK_LEDGER.md` entry
- record the exact source file and task ID
- record the last verified passage/question/card/shard/script test
- record the next exact item
- record rejected approaches and user corrections
- record QC completed and pending
- update the ledger before stopping or reaching a usage/context limit

Never leave essential continuation state only in chat.

## File creation policy

Prefer updating a canonical running document or workflow over creating a new one-off file.

Create standalone files only for:

- scripts
- templates
- reusable prompts
- major approved guides
- printable exports
- large archive/source references
- parent README/command-center documents

Do not delete or overwrite earlier user work casually. Use versioned names or update canonical files only after inspecting the current content and status.

## Google Docs sync policy

Important durable study documents should be findable in Google Docs as well as GitHub.

When creating or substantially updating a **Tier 1** document, also create or update a native Google Doc unless the user explicitly opts out for that task.

**Tier 1 — sync to Google Docs**

- whiteboard and timing systems
- major study guides
- running review documents
- zero-math and mathematical-bridge guides
- glossary documents
- durable concept explanations that the user is expected to read, revise, or reuse

**Tier 2 — GitHub only unless requested**

- code
- console scripts
- templates
- reusable prompts
- raw exports
- manifests
- logs
- temporary scratch files
- archive-only source references
- NotebookLM source documents
- workflow and handoff documents unless the user specifically wants a readable Google Docs copy

Google Docs sync requirements:

1. Use a clear, searchable title that matches or closely mirrors the GitHub filename/title.
2. Prefer native Google Docs for editable text documents.
3. Keep GitHub as the durable backend and handoff layer; Google Docs is the readable/editable study copy.
4. After syncing, record the Google Docs URL in the relevant GitHub file, README, ledger, or index when appropriate.
5. Do not upload full commercial source exports, complete commercial decks, or large screenshot archives to Google Docs unless the user explicitly asks and the material is private/personal-use only.
6. If importance is unclear, ask whether the document is Tier 1 before syncing.

## Quality and trust rules

- Do not claim a private source was opened unless it was actually accessed in the active session.
- Do not fabricate missing question text, figures, labels, deck fields, or file contents.
- Distinguish `Canonical`, `Approved`, `Prototype`, `Needs Recheck`, `Noncanonical`, `Archived`, and `Superseded`.
- Verify exam and card mappings against the original source.
- Correct answers are learning material too.
- Do not use generic shortcuts such as “use proportionality” or “look at the graph” without showing the exact operation or comparison.
- Do not reuse generic distractor labels without reading the actual choices and explanation.

## Copyright and private-source boundary

GitHub may contain:

- original workflows and scripts
- original explanations and misconception repairs
- indexes, manifests, and bounded searchable anchors
- source names, IDs, and private-path references
- quality-control and processing records

Keep outside GitHub:

- full AAMC or UWorld exports
- complete commercial textbooks
- complete commercial Anki decks
- large screenshot/image archives
- generated private Goodnotes/Word/PDF notebooks unless intentionally stored as private repository artifacts

## Frequently used command centers

- `cars/README.md`
- `practice-review/aamc/README.md`
- `practice-review/uworld/README.md`
- `running-documents/README.md`
- `study-notes/mcat-mind-maps/README.md`
- `study-workflows/browser-review-export/AI_HANDOFF.md`
- `anki/anki-export-integration-protocol.md`

## End-of-session checklist

1. Save or commit actual work.
2. Update `TASK_LEDGER.md`.
3. Add durable learning to the running master if appropriate.
4. Record source access and QC truthfully.
5. Leave an exact resume instruction.

A file existing is not enough for continuity. The repository must explain what is trusted, what is incomplete, and exactly what happens next.
