# UWorld Verbatim Transcription + Running Master DOCX Workflow

## AI resume block

- **Status:** Canonical UWorld verbatim-transcription and append protocol.
- **Read with:** [`../../AI_RESUME_CONTEXT.md`](../../AI_RESUME_CONTEXT.md), [`../../TASK_LEDGER.md`](../../TASK_LEDGER.md), and [`README.md`](README.md).
- **Private inputs:** raw UWorld PDFs/screenshots and the latest real master DOCX remain outside GitHub.
- **Critical rule:** never create a new empty “master” that only points to an older file. Start from the latest confirmed master DOCX, append, save, reopen, and verify.
- **Exact resume instruction:** identify the latest master filename and last appended UWorld set in `TASK_LEDGER.md`; open that actual file, confirm it is intact, and append the next source set from its first unprocessed question.
- **End-of-session requirement:** update the ledger with the last verified question, source filename/test ID, output filename, and any unreadable figure or missing source content.

## Purpose

Canonical workflow for converting UWorld practice PDFs or screenshots into one continuously growing, editable master DOCX.

This file stores the reusable prompt, formatting contract, append protocol, figure-handling rules, and quality-control checks. Raw UWorld PDFs, screenshots, and generated DOCX files remain in private Drive/local archival storage rather than GitHub.

## Locked user preferences

- Include the full UWorld explanation for every practice item.
- Preserve all original wording exactly.
- Preserve all visible bold and italics exactly.
- Convert visible highlights into true DOCX underline formatting.
- Keep a blank `My Reasoning:` field under every answer choice.
- Fully transcribe tables, figures, axes, legends, captions, and readable labels.
- Reconstruct diagram-only answer choices as precise, searchable text descriptions.
- Maintain one running master DOCX rather than separate files.
- Keep questions in continuous flow; do not force each question onto a new page.
- Include subject, question IDs, test date, test ID, mode, topic/tag, difficulty, time spent, statistics, and answer-change data when shown.

## Canonical transcription prompt

### UWorld Transcription Prompt

1. Transcribe the **stimulus** verbatim in its original order.
   - If passage-based: transcribe the **full passage** first.
   - If discrete: transcribe the **prompt/scenario** first.

2. Then transcribe **all questions** in chronological order.

3. Preserve **all original wording exactly**.

4. Do not summarize, paraphrase, condense, simplify, correct, or omit anything.

5. Do not change answer-choice wording.

6. The only allowed modifications are:
   - Reorganizing each question and its corresponding UWorld content into the structured format below.
   - Converting visibly highlighted source text into actual underlining in the DOCX.
   - Grouping each question directly with its explanation and answer breakdown.
   - Converting visual-only structures or diagrams into precise text descriptions when the original image cannot be embedded reliably.

7. Preserve visible source formatting:
   - Keep **bold**, *italics*, quotation marks, symbols, subscripts, superscripts, Greek letters, and special formatting exactly as shown.
   - Do not add emphasis that is not visible in the source.

8. If UWorld shows a table, figure, graph, or image:
   - **Tables:** preserve row and column order using a real DOCX table when feasible; otherwise use a clearly aligned plain-text table.
   - **Graphs:** transcribe all axis names, units, legends, data labels, captions, and visible relationships.
   - **Figures:** transcribe every readable label, caption, annotation, and embedded text.
   - **Chemical or biological structures:** describe each answer choice precisely enough to distinguish stereochemistry, substituent placement, charge, bond type, orientation, and labeling.
   - If a figure is purely visual and cannot be faithfully reconstructed, write `[Figure present — no readable text; original image required]` rather than inventing content.

## Required document structure

```text
# Set Name:

(Example: UWorld Biochem 03/31/2026 | Test ID 410734662)

## Stimulus:

- Source: UWorld
- Subject:
- Test Date:
- Test ID:
- Mode: Passage-based / Discrete
- Topic/Tag (if shown):
- Educational Objective (if shown):
- Difficulty (if shown):
- Question ID(s) (if shown):

### Passage (if present):

Passage:
(Full verbatim passage.)

### Discrete Prompt (if no passage):

Prompt:
(Full verbatim prompt/scenario.)

### Tables/Figures (if present):

(Full transcription or precise reconstruction. Omit this section if none.)

## Questions:

### Question [Number or UWorld item number]

Question Stem:
(Verbatim.)

Answer Choices: You Selected [letter/text] | [letter/text] is correct

A. [Full answer text]
Correct: / Incorrect:
My Reasoning:

B. [Full answer text]
Correct: / Incorrect:
My Reasoning:

C. [Full answer text]
Correct: / Incorrect:
My Reasoning:

D. [Full answer text]
Correct: / Incorrect:
My Reasoning:

(Include E/F choices when present.)

Explanation (UWorld):
(Full verbatim explanation, including every answer-choice breakdown.)

Educational Objective (UWorld):
(Verbatim if present; otherwise leave blank.)

Question Details:
- Question ID:
- Topic/Tag:
- Difficulty:
- Time Spent:
- Correct % / Stats:
- Answer Change:
```

## DOCX formatting contract

- Use a clean Google Docs-compatible hierarchy with Word heading styles.
- Use continuous flow with no automatic page break between questions.
- Apply true Word bold, italics, underline, subscript, and superscript formatting rather than Markdown or HTML artifacts.
- Preserve readable spacing without large blank gaps.
- Keep the passage once per shared stimulus, followed by all associated question blocks.
- Do not repeat the same passage before every question unless the source contains materially different passage content.
- Preserve chronological question order.
- Keep answer choices grouped with their own correctness label and blank reasoning field.
- Add the next practice to the end of the same master DOCX.
- Use a clear set heading before each appended practice.

## Running-master append protocol

1. Open the latest confirmed master DOCX.
2. Verify the existing document is intact before editing.
3. Append a new set heading containing subject, date, and test ID.
4. Add the shared stimulus once.
5. Add every question in chronological order with complete explanations.
6. Save as the same canonical master-document filename or an explicitly versioned recovery copy when overwriting is unsafe.
7. Reopen the saved DOCX and verify the last question, the first question of the new set, and at least one figure/table section.
8. Return the actual updated file link only after the append has succeeded.

## Non-negotiable quality-control rules

- **Never fabricate or infer missing source wording.** Mark unreadable text explicitly.
- **Never replace a verbatim explanation with a summary.**
- **Never label an approximate reconstruction as verbatim.**
- **Never invent a question, passage, answer choice, correct answer, statistic, figure label, or educational objective.**
- **Never claim that a file was appended or completed unless the updated file was actually written and verified.**
- **Never create a new empty “master” document that merely references a prior file.** Start from the latest real master file.
- **Never silently drop prior content when rebuilding a version.** Compare document length and section count before and after.
- **Do not store copyrighted raw UWorld content in GitHub.** GitHub stores this workflow and reusable template only.

## Visual-transcription decision rule

Use the following order:

1. Exact text and formatting visible in the source.
2. Precise structural description for diagram-only content.
3. Explicit unreadable/figure placeholder when fidelity is not possible.
4. Never guess.

## File naming

Recommended archival names outside GitHub:

```text
UWorld_Master_Practice_Transcript.docx
YYYY-MM-DD__UWorld__[Subject]__[Test-ID].pdf
YYYY-MM-DD__UWorld__[Subject]__[Test-ID]__source-images/
```

Recommended GitHub path for this reusable workflow:

```text
practice-review/uworld/uworld-verbatim-transcription-running-master-docx-workflow.md
```

## Scope boundary

GitHub is the source of record for prompts, scripts, workflows, indexes, and durable study notes. The following stay in Drive/local archival storage:

- raw UWorld PDFs
- screenshots
- full copyrighted question banks
- generated master DOCX files
- large image exports
- complete verbatim practice content
