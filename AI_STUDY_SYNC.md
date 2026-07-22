# AI Study Sync

This repository is the shared MCAT study hub for GPT/Codex, Claude, Gemini, and GitHub.

## What Sync Means Here

The apps do not directly live-sync with each other. GitHub is the shared source of truth.

Each AI should:

1. Pull or read the latest repository state before helping.
2. Read `AGENTS.md`, `AI_RESUME_CONTEXT.md`, `PROJECT_HANDOFF_INDEX.md`, and `TASK_LEDGER.md`.
3. Use the nearest folder `README.md` for the active subject or workflow.
4. Save durable study decisions, resume state, and finished learning artifacts back into this repository.
5. Commit and push finished changes when the user wants the work synced.

## Active Study Destinations

- Goodnotes: full explanations, worked examples, redo packets, and printable study pages.
- Anki: concise recall prompts and trigger cards.
- Whimsical: visual maps for relationships, decision paths, and concepts that are not sticking.
- GitHub: the backend memory, index, workflow record, and handoff layer.

GitHub should not become a fourth place to study raw content. It should make the other places easier to continue.

## App-Specific Use

### GPT / Codex

Use `AGENTS.md` first. Keep task state in `TASK_LEDGER.md`. Put durable learning in `running-documents/mcat-running-review-and-notes-master.md`.

### Claude

Use `CLAUDE.md` first, then follow the same repository instructions in `AGENTS.md`.

### Gemini

Use `GEMINI.md` first, then follow the same repository instructions in `AGENTS.md`.

Gemini web imports are snapshots, not live sync. For real synced work, use a local Gemini-capable coding tool against this repository folder, then commit and push.

## Overwhelm Rule

When the user is overwhelmed, do not ask them to re-explain the whole system. Read the files above, summarize the current state in five bullets or fewer, and propose one next study action.

## End-of-Session Rule

Before stopping, every AI should leave:

- what changed
- what was verified
- what is still uncertain
- the next exact action
- whether changes were pushed to GitHub
