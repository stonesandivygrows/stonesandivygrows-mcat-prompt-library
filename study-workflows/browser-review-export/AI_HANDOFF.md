# Browser Review Export — AI Handoff

Read with:

- [`../../AI_RESUME_CONTEXT.md`](../../AI_RESUME_CONTEXT.md)
- [`../../PROJECT_HANDOFF_INDEX.md`](../../PROJECT_HANDOFF_INDEX.md)
- [`../../TASK_LEDGER.md`](../../TASK_LEDGER.md)
- [`README.md`](README.md)

## Purpose

This folder contains the browser-side export workflow for preserving complete JW, UWorld, and related review sets as private printable study packets.

## Status and boundaries

- Browser websites change, so selectors are not permanently trustworthy.
- Existing scripts are starting points, not proof of current compatibility.
- Run scripts only on authorized private study material.
- Do not redistribute exported commercial passages, questions, explanations, or images.
- GitHub stores the script, instructions, test notes, and selector history. Full exports remain private/local.

## Locked user preferences

- Export the entire completed review set, not only the currently displayed question.
- Include passages once per passage block when possible.
- Preserve answer choices, selected answer, correct answer, written explanations, and relevant figures.
- Keep all console scripts in one understandable folder even when duplicates exist elsewhere.
- Output should be practical for private review, printing, and later Goodnotes processing.

## Exact resume workflow for a broken script

1. Open the current live review page in the active session.
2. Reproduce the failure and record what was captured versus missing.
3. Inspect the live DOM rather than guessing selectors from an old version.
4. Patch the smallest necessary selectors or navigation logic.
5. Test on:
   - one question
   - one full passage block
   - a multi-passage set
   - a set containing figures or expandable explanations
6. Verify passages are not unnecessarily repeated.
7. Record the site, test date, browser, verified set size, known limitations, and changed selectors.
8. Update `TASK_LEDGER.md` with the exact last verified test and next failure to address.

## Current active task

See `BROWSER-EXPORT-TOOLKIT-01` in [`../../TASK_LEDGER.md`](../../TASK_LEDGER.md).

Do not claim that a script works for AAMC, UWorld, or Jack Westin merely because it worked on another site or an older page version.
