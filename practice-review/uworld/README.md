# UWorld Practice Review

> **AI handoff:** Read [`../../AI_RESUME_CONTEXT.md`](../../AI_RESUME_CONTEXT.md), [`../../PROJECT_HANDOFF_INDEX.md`](../../PROJECT_HANDOFF_INDEX.md), and [`../../TASK_LEDGER.md`](../../TASK_LEDGER.md) before starting or resuming a UWorld task.

Reusable UWorld review workflows, autopsy documents, searchable question mappings, and durable correction notes.

## AI resume block

- **Purpose:** Keep UWorld transcription, full-test autopsy, Aiden/QID mapping, and durable correction work separate but connected.
- **Current active tasks:** See `UWORLD-AIDEN-QID-MAP-01` and any test-specific entries in [`../../TASK_LEDGER.md`](../../TASK_LEDGER.md).
- **Source boundary:** Raw UWorld PDFs, screenshots, full explanations, audio, and generated master DOCX files remain private/local or in Drive. GitHub stores workflows, indexes, original summaries, bounded searchable anchors, and QC records.
- **Authority:** UWorld is strongest for applied reasoning, experimental interpretation, and distractor logic. Kaplan verifies prerequisite content; Aiden supplies recall targets.
- **Locked user preference:** Review and mapping should include correct questions as well as missed questions. For the Aiden/QID map, short searchable question or passage anchors are preferred; full explanations are unnecessary.
- **Resume instruction:** Open the task ledger first. Continue from the exact test/question or Aiden note named there. Do not start a new file when the correct destination is a running document.

## Canonical files

- [`uworld-verbatim-transcription-running-master-docx-workflow.md`](uworld-verbatim-transcription-running-master-docx-workflow.md) — exact transcription, figure reconstruction, DOCX append, and quality-control protocol for the running UWorld master document.
- [`uworld-mcat-science-practice-test-autopsy-prompt.md`](uworld-mcat-science-practice-test-autopsy-prompt.md) — reusable full science-autopsy prompt covering inventory, transcript mining, passage translation, question-by-question diagnosis, content repair, pacing, Anki, and completion auditing.
- [`2026-03-12__uworld_mixed_test_1__planned_review_autopsy.md`](2026-03-12__uworld_mixed_test_1__planned_review_autopsy.md) — planned review autopsy and corrected lab-technique bridge for UWorld Mixed Test 1.
- [`2026-04-26__uworld_test_12__completed_autopsy_summary.md`](2026-04-26__uworld_test_12__completed_autopsy_summary.md) — completed copyright-safe summary for all 30 questions, all passage blocks, final error patterns, durable corrections, and next-set operating rules.
- [`2026-06-09__uworld_chemistry_test_3_id410735433__review_summary.md`](2026-06-09__uworld_chemistry_test_3_id410735433__review_summary.md) — completed copyright-safe review for the five-question Chemistry Test 3 set, including redox-agent labels, stoichiometry organization, and intermolecular-force classification.

## Workflow lanes

### Verbatim transcription lane

Use when the goal is a private, continuously growing master DOCX containing the exact UWorld source and explanations. Start from the latest real master file and append; never create an empty replacement that merely references the old document.

### Practice-test autopsy lane

Use when the goal is to understand performance: passage structure, evidence location, content gaps, reasoning failures, timing, distractors, and durable replacement rules. Copyright-safe GitHub summaries should preserve the learning without reproducing the full bank.

### UWorld ↔ Aiden QID mapping lane

Use when the goal is to attach searchable UWorld question or passage anchors to Aiden notes. Work note by note, handle redundancy explicitly, and aim for at least two anchors per note when possible. The anchors should demonstrate where the card knowledge is needed to solve or interpret the question, not merely repeat the topic name.

### Browser export lane

Use [`../../study-workflows/browser-review-export/README.md`](../../study-workflows/browser-review-export/README.md) for console scripts, page capture, selector troubleshooting, and combined printable exports.

## Status conventions

- `planned` — review structure exists, but the test autopsy is not complete.
- `running` — review is actively being appended in fragments.
- `completed` — every question and passage has passed the completion audit.
- `needs recheck` — source completeness, question coverage, or interpretation remains uncertain.
- Once a report is complete, remove `Running`, `Draft`, `Part`, or `Pending` from its canonical private filename.

## End-of-session requirements

Before stopping:

1. Save or commit the actual output.
2. Record the last verified question, passage, or Aiden note in `TASK_LEDGER.md`.
3. Record the next exact item.
4. Record any unreadable source material or missing figure.
5. Record whether the output is verbatim, reconstructed, summarized, or copyright-safe.
6. Append durable strategy/content conclusions to the running master when appropriate.

## Storage boundary

This folder stores prompts, workflows, indexes, and durable study notes. Raw UWorld PDFs, screenshots, full verbatim question banks, audio transcripts, scratch-paper images, and generated DOCX compilations remain in private Drive/local archival storage.
