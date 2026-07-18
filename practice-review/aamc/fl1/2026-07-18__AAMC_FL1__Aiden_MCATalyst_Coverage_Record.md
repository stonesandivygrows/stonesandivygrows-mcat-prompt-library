# 2026-07-18 — AAMC FL1 Aiden + MCATalyst Coverage Record

Status: Filed / source-indexed / C/P Q1 corrected
Source type: AAMC FL1 review export + separately supplied C/P Q1 screenshots + Aiden deck + MCATalyst equation sheet
Primary corrected artifact created in ChatGPT: `AAMC_FL1_Aiden_Deck_Passage_Question_Map_CORRECTED.docx`
Prior artifact: `AAMC_FL1_Aiden_Deck_Passage_Question_Map.docx`
Related artifact: `AAMC_FL_Equation_to_Aidan_Flashcard_Map_REVISED.docx`

## What was completed

The final FL1 study document was rebuilt away from an equation-only structure and into the requested question/passage structure:

```text
C/P → B/B → P/S
```

Coverage completed:

| Section | Covered | Notes |
|---|---:|---|
| C/P | 59/59 | Includes all science-section C/P entries; Q1 is now fully supplied. |
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
- Render/layout check passed after the Q1 correction.

## C/P Q1 correction

C/P Q1 was later supplied directly from the AAMC review interface.

Question focus:

```text
Paper chromatography using water absorbed on cellulose as the stationary phase.
Principal factor determining component migration: hydrogen bonding.
```

Correct answer: A — Hydrogen bonding.

Reasoning:

- Components capable of stronger hydrogen bonding to the immobilized water stationary phase migrate more slowly.
- Solute concentration changes spot size, not average migration rate.
- The stationary phase is an immobilized surface rather than a solution concentration.
- Paper thickness affects sample/separation capacity rather than relative migration rates.

Exact tags:

```text
SIRS2
CC5C — Separation and purification methods
FC5
OCH — Organic Chemistry
```

Recorded time: 2 min 46 sec.

The corrected Q1 card links now prioritize chromatography, stationary-phase interaction, Rf, and hydrogen-bond donor/acceptor knowledge rather than amino-acid-only keyword matches.

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
