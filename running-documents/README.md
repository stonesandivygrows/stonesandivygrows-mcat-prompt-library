# Running Documents Command Center

> **AI handoff:** Read [`../AI_RESUME_CONTEXT.md`](../AI_RESUME_CONTEXT.md), [`../PROJECT_HANDOFF_INDEX.md`](../PROJECT_HANDOFF_INDEX.md), and [`../TASK_LEDGER.md`](../TASK_LEDGER.md) before appending to a running document.

## Purpose

Running documents are the consolidation layer for durable MCAT learning. They prevent one-file-per-question or one-file-per-chat sprawl.

The main file is:

- [`mcat-running-review-and-notes-master.md`](mcat-running-review-and-notes-master.md)

## AI resume block

- **Status:** Canonical consolidation layer.
- **Use for:** dated learning entries, completed review records, durable strategy corrections, recurring misconception repairs, workflow decisions, and migration summaries.
- **Do not use for:** raw task scratchpads, full copyrighted question banks, large source exports, or temporary “continue from here” notes. Those operational details belong in `TASK_LEDGER.md`.
- **Exact resume instruction:** read the active task in `TASK_LEDGER.md`, complete the bounded work in its canonical file, then append only the durable conclusions or completion record to the running master.

## Difference between the running master and task ledger

### Running master

Records what should still matter after the task is over:

- durable concept corrections
- recurring error patterns
- locked strategy changes
- completed review records
- links to approved artifacts
- migration and consolidation status

### Task ledger

Records what another model needs to continue the unfinished work:

- last verified item
- next exact item
- current source file
- open question
- rejected approach
- pending quality check

Do not bury unfinished-task state only in the running master.

## Append standard

Use dated entries with:

```text
Date
Source/session
Status
What was learned or changed
What is canonical now
Related file(s)
Any unresolved issue
```

When a task is completed, update both:

1. `TASK_LEDGER.md` — close or change the task status
2. the running master — record the durable result

This separation allows a future model to resume active work quickly without turning the permanent study notes into a project-management dump.
