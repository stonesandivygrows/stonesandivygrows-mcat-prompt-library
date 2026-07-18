# 2026-07-18 — AAMC Unscored FL Processing Record

Status: Targeted question/card processing complete; structural and rendering audits passed
Source file in ChatGPT session: `AAMC_MCAT_Exam_Review_Export_2026-07-18_09-14 Unsampled 230.pdf`
Observed source count: 230 captured questions
Processed artifact created in ChatGPT: `AAMC_Unscored_FL_Aiden_Deck_Passage_Question_Map_PROCESSED.docx`
Intermediate checkpoints retained locally in the ChatGPT session:

- `AAMC_Unscored_FL_Aiden_Deck_Passage_Question_Map_DRAFT.docx`
- `AAMC_Unscored_FL_Aiden_Deck_Passage_Question_Map_CP_VERIFIED.docx`
- `AAMC_Unscored_FL_Aiden_Deck_Passage_Question_Map_CP_BB_VERIFIED.docx`

## Output structure

The requested science mapping is organized:

```text
C/P → B/B → P/S
```

CARS is intentionally excluded unless separately requested.

## Science-section coverage audit

| Section | Global source range | Section-local range | Mapped | Missing | Duplicate labels |
|---|---:|---:|---:|---:|---:|
| C/P | Q1–Q59 | C/P Q1–Q59 | 59/59 | 0 | 0 |
| B/B | Q113–Q171 | B/B Q1–Q59 | 59/59 | 0 | 0 |
| P/S | Q172–Q230 | P/S Q1–Q59 | 59/59 | 0 | 0 |
| Total science | — | — | 177/177 | 0 | 0 |

The global numbering follows the full 230-question export:

```text
C/P 59 → CARS 53 → B/B 59 → P/S 59
```

## Content included for every science question

1. Section-local label.
2. Global source question number.
3. Source page and AAMC Data ID.
4. Passage or discrete context.
5. Searchable question stem.
6. Correct answer and controlling reasoning rule.
7. Exact Aiden text-export flashcards when a sufficiently specific match was available.
8. A clearly labeled Aiden-aligned question-specific bridge when the available export did not contain a sufficiently exact card.
9. Why each card is relevant to solving the question or understanding the passage.

MCATalyst equations are included only where equation knowledge is actually relevant. The document is not equation-centered.

## Card-link transparency

The processed DOCX contains two separately labeled card types:

```text
Exact Aiden export card
Aiden-aligned supplemental rewrite / question-specific bridge
```

A bridge card is not represented as verbatim Aiden wording. It is a source-grounded rewrite connecting the relevant Aiden content cluster to the exact AAMC application.

Document-level row counts:

```text
Exact Aiden export rows: 245
Question-specific bridge rows: 133
```

Some questions contain both exact-export cards and a bridge. Bridge rows do not indicate missing question coverage.

## Structural and rendering audit

Audit results:

- 59/59 C/P labels confirmed.
- 59/59 B/B labels confirmed.
- 59/59 P/S labels confirmed.
- 177/177 total science labels confirmed.
- No missing section-local labels.
- No duplicated section-local labels.
- No remaining `IN PROCESS`, `Pending processing`, or unavailable-mapping placeholders.
- 178 tables: one coverage table plus one mapping table for each of 177 science questions.
- DOCX rendered to 72 pages.
- All 72 rendered pages inspected; no visible clipping, overlapping tables, or broken page layouts found.

## Remaining quality option

The requested processing is complete. A later semantic refinement pass can replace question-specific bridge cards with newly supplied exact Aiden cards if additional deck exports become available. Until then, the bridge labels preserve source honesty and prevent weak generic cards from being presented as exact matches.
