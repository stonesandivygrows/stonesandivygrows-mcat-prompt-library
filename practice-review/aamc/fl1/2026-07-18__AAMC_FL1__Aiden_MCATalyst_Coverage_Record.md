# 2026-07-18 — AAMC FL1 Aiden + MCATalyst Coverage Record

Status: Filed / source-indexed
Source type: AAMC FL1 review export + Aiden deck + MCATalyst equation sheet
Primary artifact created in ChatGPT: `AAMC_FL1_Aiden_Deck_Passage_Question_Map.docx`
Related artifact: `AAMC_FL_Equation_to_Aidan_Flashcard_Map_REVISED.docx`

## What was completed

The final FL1 study document was rebuilt away from an equation-only structure and into the requested question/passage structure:

```text
C/P → B/B → P/S
```

Coverage completed:

| Section | Covered | Notes |
|---|---:|---|
| C/P | 59/59 | Includes all science-section C/P entries. |
| B/B | 59/59 | Includes all science-section B/B entries. |
| P/S | 59/59 | Includes all science-section P/S entries. |
| CARS | 0/53 | Intentionally excluded for this Aiden/MCATalyst science-deck mapping workflow. |
| Total science entries | 177/177 | Complete science-section coverage. |

## Audit result

Second self-audit result: coverage passed.

- No missing science-section question numbers.
- No duplicate science-section question numbers.
- C/P, B/B, and P/S are ordered in the intended sequence.
- The document includes passage/discrete context, question label, AAMC tags, related Aiden deck cards, and reason for the linkage.
- Render/layout check passed at document level.

## Known limitation

C/P Q1 in the prior FL1 export required recovery from the shorter review-list preview because the full FL1 export available at that stage began at Question 2 of 230. The question is included, but its source capture was less complete than the remaining entries.

## Card-link quality note

Coverage is complete, but not every Aiden-card link has equal confidence. The second audit flagged several weak-match areas that should receive manual relinking before treating the file as fully polished:

```text
C/P Q23–Q24
C/P Q52–Q56
B/B Q57
Some P/S experimental/development questions
```

These are not missing entries; they are lower-confidence card associations.

## Rule going forward

For AAMC full-length mapping documents, do not center the file around MCATalyst equations unless the user explicitly asks for an equation map. The preferred structure is:

```text
Question/passage → tested reasoning → Aiden deck flashcard(s) → optional MCATalyst equation/card if equation-relevant
```

The next target is AAMC Unscored FL using the same C/P → B/B → P/S order and the same audit rules.
