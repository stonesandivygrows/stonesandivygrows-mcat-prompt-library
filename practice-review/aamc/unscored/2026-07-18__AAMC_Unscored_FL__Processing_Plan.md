# 2026-07-18 — AAMC Unscored FL Processing Plan

Status: Draft mapping generated / needs manual relinking pass
Source file in ChatGPT session: `AAMC_MCAT_Exam_Review_Export_2026-07-18_09-14 Unsampled 230.pdf`
Observed source count: 230 captured questions
Draft artifact created in ChatGPT: `AAMC_Unscored_FL_Aiden_Deck_Passage_Question_Map_DRAFT.docx`

## Target output

Create the same style of document as the corrected FL1 map:

```text
AAMC Unscored FL → Aiden Deck Passage/Question Map
```

Preferred order:

```text
C/P → B/B → P/S
```

CARS is excluded unless separately requested.

## Expected science-section coverage

| Section | Global question range | Target entries | Draft mapped |
|---|---:|---:|---:|
| C/P | Q1–Q59 | 59 | 59 |
| B/B | Q113–Q171 | 59 | 59 |
| P/S | Q172–Q230 | 59 | 59 |
| Total science entries | — | 177 | 177 |

The global numbering assumes standard AAMC 230-question full-length structure:

```text
C/P 59 → CARS 53 → B/B 59 → P/S 59
```

## Mapping rules

Each entry should include:

1. Section-local label, such as `C/P Q1`, `B/B Q14`, or `P/S Q41`.
2. Global source question number, such as `Question 1 of 230`.
3. Passage or discrete context.
4. AAMC tags/content skills when available.
5. Related Aiden deck flashcard(s), or a rewritten Aiden-style target card when no high-confidence exact card is present in the available text export.
6. Why the Aiden card applies to solving the question or understanding the passage.
7. MCATalyst equation/card only when the question actually uses that equation or quantitative relationship.
8. Match-confidence label: high / medium / weak.

## Draft audit result

Draft DOCX generated with complete science coverage:

```text
C/P: 59/59
B/B: 59/59
P/S: 59/59
Total science entries: 177/177
CARS: intentionally excluded
```

Match-confidence distribution in the draft:

```text
High: 43
Medium: 33
Weak / rewritten target: 101
```

Interpretation: coverage is complete, but this is not yet a final polished Aiden-link map. Many entries use rewritten Aiden-style target cards because the exact Aiden card could not be confidently matched from the available text exports.

## Audit rules before final delivery

Before finalizing the Unscored FL document:

- Confirm 59 C/P entries.
- Confirm 59 B/B entries.
- Confirm 59 P/S entries.
- Confirm total science entries = 177.
- Confirm no duplicate section-local labels.
- Confirm no missing section-local labels.
- Flag weak Aiden-card matches rather than pretending they are exact.
- Manually relink weak/rewrite entries where possible.
- Render/inspect the DOCX if exported as a document.

## First source anchor

The uploaded Unscored FL source begins with `Question 1 of 230`; the first passage is an HIV protease/aspartyl protease passage with questions 1–4. This means the Unscored source does not have the prior FL1 issue where the full export began at Question 2.

## Next action

Use the draft DOCX as the skeleton, then manually improve weak/rewrite entries in batches, starting with the C/P weak matches and high-miss questions.
