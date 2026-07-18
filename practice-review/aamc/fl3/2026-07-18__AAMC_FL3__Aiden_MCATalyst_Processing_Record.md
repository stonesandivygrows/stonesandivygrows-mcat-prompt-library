# 2026-07-18 — AAMC FL3 Aiden + MCATalyst Processing Record

Status: Processed / structurally audited / rendered
Source file in ChatGPT session: `AAMC_MCAT_Exam_Review_Export_2026-07-18_09-39 Full Length 3.pdf`
Observed source count: 230 captured questions
Processed artifact created in ChatGPT: `AAMC_FL3_Aiden_Deck_Passage_Question_Map_PROCESSED.docx`

## Output structure

The science-question map is organized in the requested order:

```text
C/P → B/B → P/S
```

CARS is intentionally excluded unless separately requested.

## Coverage audit

| Section | Global source range | Section-local range | Mapped | Missing | Duplicate labels |
|---|---:|---:|---:|---:|---:|
| C/P | Q1–Q59 | C/P Q1–Q59 | 59/59 | 0 | 0 |
| B/B | Q113–Q171 | B/B Q1–Q59 | 59/59 | 0 | 0 |
| P/S | Q172–Q230 | P/S Q1–Q59 | 59/59 | 0 | 0 |
| Total science | — | — | 177/177 | 0 | 0 |

The full-length numbering follows:

```text
C/P 59 → CARS 53 → B/B 59 → P/S 59
```

## Content included for each science question

1. Section-local and global question labels.
2. Source page and AAMC Data ID.
3. Result, timing, and AAMC content/skill tags when available.
4. Passage or discrete-question context.
5. Searchable question stem.
6. Correct answer and controlling reasoning rule.
7. Exact Aiden text-export cards when the lexical and conceptual match passed a conservative confidence gate.
8. A clearly labeled Aiden-aligned supplemental rewrite for the exact question application.
9. MCATalyst equation or quantitative relationship only where actually relevant.

## Card-link inventory

```text
Exact Aiden-export card rows: 125
Question-specific bridge rows: 177
Questions with identified MCATalyst equation/relationship: 29
```

The bridge rows are explicitly labeled and are not represented as verbatim Aiden deck wording. They preserve the question-specific deduction when no sufficiently precise exact-export card was available.

## Structural and rendering audit

- C/P labels present: 59/59.
- B/B labels present: 59/59.
- P/S labels present: 59/59.
- Total science labels present: 177/177.
- No missing section-local labels.
- No duplicated section-local labels.
- No remaining `IN PROCESS`, `Pending processing`, or unavailable-mapping placeholders.
- 178 tables: one coverage table plus one question/card table for every science question.
- DOCX rendered to 70 pages.
- All 70 rendered pages inspected; no visible clipping, overlapping tables, or broken page layouts found.

## Source-integrity rule

Do not make AAMC full-length maps equation-centered by default. Continue to use:

```text
Question/passage → tested reasoning → exact Aiden card(s) when supported → labeled Aiden-aligned bridge → optional MCATalyst relationship
```

Additional Aiden exports can later be used to replace bridge rows with newly verified exact cards without changing the question coverage structure.
