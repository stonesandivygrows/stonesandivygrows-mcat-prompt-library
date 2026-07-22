# MCAT Running Review and Notes Master

Created: 2026-06-23
Purpose: reduce file sprawl by turning **all MCAT learning** into running entries instead of creating a new standalone file for every session.

This applies to the whole MCAT study period, not only full-length reviews.

## Universal Scope

Use this consolidation system for:

```text
full-length reviews
UWorld/JW/AAMC question-set reviews
single-question autopsies
content notes
formula notes
mnemonics
whiteboard/timing/logistics systems
CARS strategy updates
P/S term repairs
B/B pathway and physiology notes
C/P equation and reasoning notes
Anki/Notion/GitHub workflow rules
printable Cornell versions and print packs
```

The goal is to make the repo feel like a small number of living notebooks, not a pile of disconnected files.

---

## Operating Rule Going Forward

Default behavior:

```text
New learning from any MCAT chat/session → append as a dated entry in the appropriate running document.
New standalone files → only for templates, scripts, exports, major printable versions, or archival source documents.
Old one-off guides → keep as archive/source until migrated into a running document.
```

This file is the main consolidation layer across subjects. Older files do not need to be deleted immediately. They should be treated as source material that gets summarized, linked, and eventually folded into the correct running section.

---

## Running Document Model

Preferred structure:

```text
1 master index/running hub
+ a small number of subject running documents if the master gets too large
+ printable Cornell exports only when needed
```

Avoid:

```text
one new file per question
one new file per minor correction
one new file per chat unless it is a true source/archive artifact
```

Allowed standalone exceptions:

```text
scripts
prompts/templates
full export workflows
printable Cornell HTML/PDF files
large archival source files
major finished public-facing guides
```

---

## Consolidation in Parts

### Part 1 — Lock the system

Status: started.

- Create running master.
- Update README with default running-document rule.
- Start folding new entries into running sections.

### Part 2 — Consolidate active study rules

Target sections:

```text
Workflow + Logistics Running Notes
CARS Running Notes
```

Fold in whiteboard rules, timing, review workflows, export scripts, Notion/GitHub storage rules, and CARS operating strategies.

### Part 3 — Consolidate science content notes

Target sections:

```text
C/P Running Notes
B/B Running Notes
P/S Running Notes
```

Fold in durable concept explanations, recurring mistakes, formulas, pathways, definitions, and testable rules.

### Part 4 — Consolidate practice/test reviews

Target sections:

```text
C/P, B/B, P/S, and CARS running notes
```

Each practice session should become a dated entry with source links and mistake patterns. Detailed standalone files can remain as source/archive if already created.

### Part 5 — Print packs

---

## Dated Practice/Test Review Index

### 2026-07-18 — AAMC FL1 Aiden + MCATalyst map filed

Status: Complete and corrected.

Repository record:

- `practice-review/aamc/fl1/2026-07-18__AAMC_FL1__Aiden_MCATalyst_Coverage_Record.md`

Completed artifacts from ChatGPT session:

- `AAMC_FL1_Aiden_Deck_Passage_Question_Map_CORRECTED.docx`
- `AAMC_FL_Equation_to_Aidan_Flashcard_Map_REVISED.docx`

Coverage:

```text
C/P: 59/59
B/B: 59/59
P/S: 59/59
Total science entries: 177/177
CARS: intentionally excluded
```

Workflow correction locked in:

```text
Do not make AAMC FL maps equation-centered by default.
Preferred structure is question/passage → Aiden deck card(s), with MCATalyst equations only when relevant.
```

The formerly incomplete FL1 C/P Q1 entry was replaced using the user-provided full passage, question, choices, solution, timing, and tags. The prior missing-Q1 caveat is resolved.

Quality queue retained for later semantic polishing: lower-confidence card associations around C/P Q23–Q24, C/P Q52–Q56, B/B Q57, and a few P/S experimental/development entries.

### 2026-07-18 — AAMC Unscored FL Aiden map completed

Status: Complete and audited.

Repository record:

- `practice-review/aamc/unscored/2026-07-18__AAMC_Unscored_FL__Processing_Plan.md`

Completed artifact:

- `AAMC_Unscored_FL_Aiden_Deck_Passage_Question_Map_PROCESSED.docx`

Coverage and audit:

```text
C/P: 59/59
B/B: 59/59
P/S: 59/59
Total science entries: 177/177
CARS: intentionally excluded
No missing or duplicate section-local labels
72 rendered pages inspected
```

The Unscored source began at Question 1 of 230 and did not have the FL1 missing-Q1 limitation.

### 2026-07-18 — AAMC FL3 Aiden + MCATalyst map completed

Status: Complete and audited.

Repository record:

- `practice-review/aamc/fl3/2026-07-18__AAMC_FL3__Aiden_MCATalyst_Processing_Record.md`

Completed artifact:

- `AAMC_FL3_Aiden_Deck_Passage_Question_Map_PROCESSED.docx`

Coverage and inventory:

```text
C/P: 59/59
B/B: 59/59
P/S: 59/59
Total science entries: 177/177
CARS: intentionally excluded
Exact Aiden-export rows: 125
Question-specific bridge rows: 177
Questions with MCATalyst relationships: 29
```

Structural audit:

```text
No missing or duplicated section-local labels
No pending or unavailable-mapping placeholders
178 tables
70 rendered pages inspected
```

The FL3 source contained all 230 questions beginning at Question 1. Exact-export cards and question-specific bridge cards remain explicitly distinguished.

### 2026-07-21 — Canonical AI resume context added; generated-guide quality reset

Status: Handoff context complete. Full-guide rebuild remains pending.

Canonical handoff:

- `AI_RESUME_CONTEXT.md`

README now links to the handoff file and instructs any future AI model to read it before creating new materials.

The handoff records:

```text
three-place study system: Goodnotes, Anki, Whimsical
science passage operating-system objective
CARS guide requirements
spoiler-safe redo/learning/key separation
per-question evidence, shortcut, distractor, and timing requirements
Aiden and MCATalyst update architecture
source locations
personal learning preferences and recurring errors
pilot-first rebuild workflow
```

Quality correction:

Several automatically generated FL1, Unscored, FL3, and FL4 Cornell/Goodnotes guides were judged by the student to have poor content quality. Their layouts may be used as prototypes, but their explanations, shortcuts, distractor labels, and personalized mappings are **not canonical** and should not be reused without source verification.

Locked replacement workflow:

```text
1. Verify the exact AAMC source.
2. Rebuild one FL4 passage at high quality.
3. Include all choices, exact evidence, real distractor logic, explicit shortcut math/logic, timing, and personal links.
4. Obtain user approval on the pilot.
5. Only then batch the remaining passages and exams.
```

Do not regenerate all four exams from generic templates before the pilot is approved.

### 2026-07-22 — FL4 review strategy mindmaps + Anki subdeck board build begins

Status: In progress. Three FL4 review maps built. Anki subdeck board build started with Biology::Endocrine.

#### FL4 review strategy mindmaps

Context: Built from Gemini FL4 C/P review session (Q1 thermodynamics/spontaneity confusion) and the zero-math framework. These are FL4-specific exam-review strategy maps — editable in Whimsical for active review. Distinct from the Anki-deck subject boards.

These maps are also referenced in the FL4 study guide (GPT-started, quality rebuild pending).

| Map | Purpose | URL |
|---|---|---|
| FL4 C/P Q1 — Thermodynamics & Spontaneity | ΔG = ΔH − TΔS, spontaneity matrix (2×2), inequality method, limestone example (900K non-spontaneous), temperature traps | https://whimsical.com/Qtr7hSrjPiV7gQ1WQ4sRJA |
| FL4 C/P: Zero-Math Toolkit (C/P) | Dominant term (Michaelis-Menten), multiplier factor (Poiseuille r⁴, Coulomb, decibels, gas laws), structural boundary (parallel/series circuits, optics decision matrix, converging/diverging lens rules) | https://whimsical.com/M8V5VUEUENV23GjCNNVjbJ |
| FL4 B/B: Zero-Math Strategy Toolkit | Dominant term (enzyme kinetics 0th/1st order), log shifts (H-H, pKa±1 = 10×), binary doubling (PCR 2^n), Hardy-Weinberg step-by-step (start with q²), electrochemistry sign logic (ΔG = −nFE, AnOx RedCat), SA/V multiplier | https://whimsical.com/5qTvUYp4edpP4TgYa5nSNs |

Key rules locked:

```text
Spontaneity: ΔH(+)ΔS(+) = high-T only. FL4 Q1 at 900K is non-spontaneous because ΔH > TΔS.
Inequality method replaces tug-of-war (tug-of-war breaks when ΔS is negative).
Poiseuille r⁴: halving radius = 1/16 flow.
Parallel Req < R_smallest (boundary eliminates answer choices without math).
Converging lens RIO rule: Real = Inverted = Opposite side.
Diverging lens always VUR: Virtual, Upright, Reduced.
Enzyme kinetics: [S]=Km → Vmax/2; [S]>>Km → 0th order; [S]<<Km → 1st order.
H-H: each pH unit from pKa = 10× ratio shift.
Hardy-Weinberg: start with q² → q = √q² → p = 1−q → carriers = 2pq.
E > 0 → ΔG < 0 → galvanic (spontaneous). E < 0 → ΔG > 0 → electrolytic.
AnOx RedCat holds in both galvanic and electrolytic cells.
PTH net effect: raises Ca²⁺, LOWERS phosphate (kidney excretion dominates).
```

#### Anki subdeck board build

Boards are being built topic-by-topic following the Aiden deck organization. Content sourced from MCAT knowledge (Kaplan/UWorld verified), Aiden deck structure, Obsidian vault extractions on file, and extraction files in this repo. Aiden deck content detail is used as structure only; factual accuracy is verified against Kaplan or UWorld before including.

Boards built this session:

| Topic | Status | Board |
|---|---:|---|
| Biology::Endocrine | in progress | — |
