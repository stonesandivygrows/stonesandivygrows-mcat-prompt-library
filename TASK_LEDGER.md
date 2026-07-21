# MCAT Project Task Ledger

Last updated: 2026-07-21

This is the **session-to-session continuation ledger**. Any AI model doing a long or multi-part task must update this file before stopping, especially when usage or context limits are approaching.

Read first:

1. [`AI_RESUME_CONTEXT.md`](AI_RESUME_CONTEXT.md)
2. [`PROJECT_HANDOFF_INDEX.md`](PROJECT_HANDOFF_INDEX.md)
3. this ledger
4. the canonical workflow file named in the active task

## Required ledger fields

Every active task must record:

```text
Task ID:
Status:
Canonical workflow:
Private/source files:
Completed work:
Last verified item:
Next exact item:
Decisions already locked:
Open questions:
Quality checks completed:
Files or commits produced:
Exact resume instruction:
```

Do not write only “continue,” “resume,” or “finish the rest.” The next model must know the exact file, passage, question, card, shard, or script step to open.

---

## ACTIVE — AAMC full-length integrated learning guides

**Task ID:** `AAMC-GUIDES-REBUILD-01`  
**Status:** Active quality reset; batch-generated Cornell guides are not approved as canonical learning content.  
**Canonical workflow:** [`AI_RESUME_CONTEXT.md`](AI_RESUME_CONTEXT.md), especially the passage packet, question-entry, spoiler-safe, and shortcut requirements.  
**Source exams:** AAMC FL1, Unscored, FL3, and FL4 private exports in the active ChatGPT/Drive/local source pool.  
**Completed work:** Multiple DOCX/PDF prototypes were generated with embedded passage images, answer choices, and Cornell space. Their layout may be useful, but their reasoning content was judged too generic and poor.  
**Last verified item:** Project handoff was written to GitHub; the poor guides were explicitly marked noncanonical.  
**Next exact item:** Rebuild **one FL4 passage pilot** from the original source, manually and question by question. The pilot must include passage architecture, exact evidence location, every answer choice, question-specific distractor analysis, an explicit shortcut with actual operations, student-history connections, timing, and Cornell space. Obtain user approval before batch generation.  
**Locked decisions:**

- Every correct and incorrect science question receives a learning entry.
- Incorrect and inefficient questions receive extra error analysis.
- Passage appears once, followed by its questions.
- Redo packet, learning guide, and answer key remain separate.
- “Use proportionality,” “look at the graph,” and similar generic phrases are unacceptable without showing the actual operation.
- CARS guides require question-specific evidence and distractor reasoning; one generic trap paragraph cannot be reused.

**Quality checks required before approval:**

- Compare every stem, answer choice, answer, figure, and explanation against the original export.
- Confirm the shortcut is question-specific and executable.
- Confirm no answer spoilers appear in the redo packet.
- Render and visually inspect the pilot.

**Exact resume instruction:** Open the original FL4 export and rebuild the first chosen FL4 passage as a manual pilot. Do not regenerate all exams first.

---

## ACTIVE — Aiden and MCATalyst application-layer updates

**Task ID:** `ANKI-APPLICATION-LAYER-01`  
**Status:** Architecture defined; exact deck updates/imports are not fully verified.  
**Canonical workflows:** [`AI_RESUME_CONTEXT.md`](AI_RESUME_CONTEXT.md), [`anki/anki-export-integration-protocol.md`](anki/anki-export-integration-protocol.md).  
**Private sources:** Aiden subject deck text exports, separated subdeck exports, and MCATalyst equation source in Drive/local storage.  
**Completed work:** Proposed branches:

```text
Aiden::MCAT Strategy
Aiden::AAMC Applications
MCATalyst::Equation Recognition
MCATalyst::Calculation Shortcuts
```

**Next exact item:** Audit the exact current subdeck names and note/card fields before generating import files. Then create only verified, deduplicated strategy triggers and question-application cards from an approved passage guide.  
**Locked decisions:**

- Do not duplicate existing factual cards.
- Goodnotes keeps the full explanation; Anki gets one concise retrieval trigger.
- MCATalyst additions must teach equation recognition, proportional form, units, and common traps—not equation recall alone.
- Exact source cards and newly written bridge/application cards must be labeled separately.

**Exact resume instruction:** Locate the latest separated Aiden exports, confirm exact subdeck names/fields, and update this ledger before generating any import TSV.

---

## ACTIVE — UWorld ↔ Aiden searchable question mapping

**Task ID:** `UWORLD-AIDEN-QID-MAP-01`  
**Status:** Ongoing running-document project.  
**Canonical output:** `running-documents/uworld-anki-qid-map.md` when present; otherwise create/update the agreed running map rather than new per-batch files.  
**Sources:** Private UWorld PDFs/NotebookLM exports and Aiden text exports.  
**Goal:** Give each Aiden note/card at least two searchable UWorld question or passage anchors when possible. The anchor should show where the flashcard knowledge is needed to deduce an answer, not merely name the topic directly.  
**Locked decisions:**

- Work note by note because the deck contains redundancy.
- Short question/passage anchors are enough; full explanations are unnecessary for this map.
- Format identifiers and text so the user can search them easily.
- Do not publish full copyrighted question banks in GitHub.

**Exact resume instruction:** Open the running QID map, identify the last completed Aiden note/card, and continue with the next note. Record the exact last note before stopping.

---

## PLANNED — Jack Westin AAMC Advanced Solutions ↔ Aiden mapping

**Task ID:** `AAMC-JW-AIDEN-MAP-01`  
**Status:** Planned; prompt architecture discussed, not fully executed.  
**Goal:** For each AAMC passage/question represented in Jack Westin Advanced Solutions, identify the Aiden cards needed to understand the passage or solve the question.  
**Boundary:** Private-use source content may be used in the private working document, but GitHub should store the workflow, indexes, and bounded searchable anchors rather than a redistributed commercial corpus.  
**Exact resume instruction:** Confirm source access, inspect one passage, produce one pilot mapping, and lock the format before running the whole bank.

---

## ACTIVE — MCAT mind-map / Whimsical architecture

**Task ID:** `MCAT-MINDMAP-ARCHITECTURE-01`  
**Status:** Architecture and chat-extraction shards exist; visual execution is selective.  
**Canonical index:** [`study-notes/mcat-mind-maps/00-anki-project-chat-coverage-and-map-architecture.md`](study-notes/mcat-mind-maps/00-anki-project-chat-coverage-and-map-architecture.md).  
**Locked decisions:**

- One canonical node per concept.
- Repeated appearances are backlinks or labeled references, not duplicated definitions.
- Use 3–7 word visual definitions and selectively bold important terms.
- Every arrow/edge must be labeled.
- Create or extend a Whimsical map only when a confusion is relational; do not map every question.

**Exact resume instruction:** Read the coverage ledger and the relevant subject shard, identify the next `Needs Recheck` or unexecuted prompt packet, and update its status after completion.

---

## ACTIVE — Browser review export scripts

**Task ID:** `BROWSER-EXPORT-TOOLKIT-01`  
**Status:** Reusable toolkit exists; site changes may break selectors.  
**Canonical workflow:** [`study-workflows/browser-review-export/README.md`](study-workflows/browser-review-export/README.md).  
**Locked decisions:**

- Keep scripts together in the browser-review-export workflow folder.
- UWorld/AAMC/JW passages should appear once per passage where possible.
- Export all questions, not only one currently displayed item.
- Preserve figures, answer choices, solutions, and user answer status when available.

**Exact resume instruction:** Reproduce the current failure on the live review page, inspect the current DOM, patch selectors minimally, test on a small set and a multi-passage set, then update the README with the verified date and limitations.

---

## Maintenance rule for every long task

Before the model stops:

1. Save or commit the actual work.
2. Update the active task entry with the last verified item.
3. Write the next exact item.
4. Record any user corrections or rejected approaches.
5. Record source-file names or paths without claiming inaccessible files were read.
6. Record quality checks completed and still pending.
7. Put broad durable learning in the running master, not only in this ledger.

A task is not resumable merely because its output file exists. It is resumable only when the ledger explains what the file is, what is trusted, what is not trusted, and what must happen next.
