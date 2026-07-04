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

Create printable Cornell versions only when needed:

```text
one printable file per subject, exam section, test block, or weekly review pack
```

Do not make a printable file for every tiny note unless it is specifically requested.

---

## Canonical Sections

1. **C/P Running Notes** — chemistry, physics, circuits, electrochemistry, redox, units, math, orgo reactions.
2. **B/B Running Notes** — biology, biochemistry, enzymes, amino acids, metabolism, genetics, physiology.
3. **P/S Running Notes** — behavioral science terms, experiments, traps, examples, research design, statistics.
4. **CARS Running Notes** — strategy, timing, passage habits, answer-choice traps, review patterns.
5. **Workflow + Logistics Running Notes** — whiteboard setups, review workflows, export scripts, Anki/Notion/GitHub rules.
6. **Migration Queue** — older guides/files that should be folded into this master or a subject running document.

---

## Print / Cornell Conversion Rule

When a section is ready to print, convert it into a Cornell-style layout using:

```text
Cue column = question, trigger, mistake label, formula, or trap name
Notes column = explanation, correction, examples, and MCAT anchor
Summary box = final sticky-note version
```

The printable version should not hardcode Letter or A4. It should let the print dialog control paper size.

---

# C/P Running Notes

## 2026-06-23 — AAMC CP Passage 9: Catalysts, Circuits, Redox, and Power Units

Source detail file:

```text
reviews/aamc/fl-cp-passage-9-redox-catalysts-circuits-2026-06-23.md
```

Printable Cornell version:

```text
reviews/aamc/fl-cp-passage-9-redox-catalysts-circuits-2026-06-23.cornell.html
```

### Catalytic converters

A catalytic converter is a car exhaust component that uses a solid catalyst to convert toxic exhaust gases into less harmful products.

```text
CO → CO2
hydrocarbons → CO2 + H2O
NO → N2
```

MCAT anchor:

```text
catalytic converter = heterogeneous catalysis
solid catalyst + gas reactants = different phases
reaction happens on catalyst surface
```

### Homogeneous catalyst separation vs enzyme/product release

Do not mix up the two meanings of “separate.”

```text
not released = microscopic mechanism problem during catalysis
not separated = macroscopic purification problem after reaction
```

If a homogeneous catalyst cannot be separated from the products at the end of the reaction, the product is contaminated. The reaction already occurred.

### Surface area and rate

For a solid reactant or solid catalyst:

```text
more exposed surface area → more active sites/collisions → faster reaction rate
rate ∝ surface area
```

This is usually conceptual on the MCAT, not a formal rate-law requirement.

### Circuit current

Main equations:

```text
I = V/R
R = ρL/A
```

Rules:

```text
smaller wire diameter → smaller A → larger R → smaller I
hotter metal wire → more collisions → larger R → smaller I
lower bulb resistance → smaller R → larger I
```

For electrochemical-cell ion concentration: lowering ion concentration usually weakens charge transfer/cell output rather than increasing current.

### Metal + acid redox

Vocabulary:

```text
evolve = gas is produced/released/bubbles out
H2(g) evolves = hydrogen gas forms
```

General pattern:

```text
metal + acid → metal cation + H2 gas
metal is oxidized
H+ is reduced
```

For aluminum:

```text
2Al(s) + 6H+(aq) → 2Al3+(aq) + 3H2(g)
```

Answer pattern:

```text
Yes; Al is oxidized and H+(aq) is reduced.
```

### Al vs Zn reduction potential

If the passage shows:

```text
Al(s) + Zn2+(aq) → Al3+(aq) + Zn(s)
```

then Al donated electrons and Zn2+ accepted electrons.

Therefore:

```text
Ered(Zn2+/Zn) > Ered(Al3+/Al)
Zn has the higher reduction potential
Al is easier to oxidize
```

MCAT anchor:

```text
higher Ered → wants electrons more → gets reduced
lower Ered → gives electrons more easily → gets oxidized
```

### Power units

Power is energy/work per time.

```text
P = W/t = E/t
watt = J/s
```

Unit trap:

```text
ft·lb = work/energy
ft·lb/s = power
J = energy
J/s = power
```

---

# B/B Running Notes

## 2026-07-03 — Anki Deck Review: Alcohol Chain Length and Water Solubility

Source/link:

```text
Aiden/Aidan-style Anki deck card: “Short-chain alcohols are more soluble in water than long-chain alcohols.”
Chat review: corrected reasoning about EDG/conjugate-acid stabilization vs ordinary water solubility.
```

Cue / Trigger:

- The card said short-chain alcohols are more water-soluble than long-chain alcohols.
- Tempting reasoning: longer alkyl chains are stronger electron-donating groups, which could stabilize the conjugate acid’s positive charge and seem to increase solubility.

Wrong Path:

- EDG/conjugate-acid stabilization is real chemistry, but it answers an acid/base stability question, not the main solubility question for neutral alcohols.
- Do not predict ordinary water solubility by asking which conjugate acid is more stabilized.

Correction:

- Alcohol water solubility mainly depends on the balance between the polar **–OH** group and the nonpolar hydrocarbon chain.
- The **–OH** group can hydrogen bond with water, which favors solubility.
- As carbon chain length increases, the hydrocarbon portion becomes larger and more hydrophobic.
- For alcohols with the same number of **–OH** groups, the polar part stays similar while the nonpolar part grows, so water solubility decreases.

MCAT Anchor:

```text
Same number of –OH groups: longer carbon chain → more hydrophobic character → lower water solubility.
```

Anki wording to keep/update:

```text
Short-chain alcohols are more soluble in water than long-chain alcohols because their polar –OH group contributes more strongly relative to the small hydrocarbon chain. As chain length increases, hydrophobic character increases, decreasing water solubility.
```

Print/Cornell Status:

- Not converted.

Archive Note:

- No separate file needed; folded directly into the running master.

## Active consolidation target

Fold all biochemistry/biology learning into this section rather than creating many small files.

This includes:

```text
standalone biology content questions
UWorld/AAMC B/B review mistakes
pathways and physiology notes
amino acid/protein/enzyme confusions
genetics and molecular biology corrections
lab technique rules
```

Priority sources to migrate later:

```text
study-notes/bio-biochem/
study-notes/biology/
practice-review/uworld/ completed B/B reviews
```

Entry format:

```text
## YYYY-MM-DD — Source/Test/Topic
Cue: what triggered the mistake?
Correction: what is the actual concept?
MCAT anchor: one-line rule
Print status: not printed / Cornell-ready / printed
```

---

# P/S Running Notes

## Active consolidation target

Fold all P/S learning into this section rather than creating many small files.

This includes:

```text
term definitions
research design traps
study validity/reliability notes
social psychology distinctions
learning/memory/perception examples
statistics and graph reasoning
AAMC/UWorld P/S review mistakes
```

Known source to migrate later:

```text
practice-review/uworld/2026-06-20__uworld_test_5__ps_q1-10_review_guide.md
```

Entry format:

```text
Term or trap → personal wrong path → corrected definition → example → sticky rule
```

---

# CARS Running Notes

## Active consolidation target

CARS strategy, passage reviews, and question-pattern notes should be consolidated into running entries rather than scattered one-off autopsies.

This includes:

```text
Jack Westin sessions
AAMC CARS review
UWorld CARS review
strategy experiments
timing/whiteboard rules
answer-choice trap patterns
passage-type patterns
```

Known source folders/files to fold into running form later:

```text
cars/01-strategy-garden/
cars/04-passage-autopsies/
cars/reviews/jack-westin/
practice-review/cars/
```

CARS entry format:

```text
Passage/date → strategy tested → what worked → what failed → timing note → next experiment
```

---

# Workflow + Logistics Running Notes

## Active consolidation target

This section should absorb all study-system rules, not just FL review logistics.

This includes:

```text
whiteboard strategies
timing breakdowns
review workflow rules
export scripts
prompt rules
naming conventions
Anki routing
Notion/GitHub/Drive storage rules
print/Cornell formatting rules
```

Known source folders/files to consolidate later:

```text
study-workflows/
practice-review/uworld/uworld-verbatim-transcription-running-master-docx-workflow.md
practice-review/uworld/uworld-mcat-science-practice-test-autopsy-prompt.md
anki/
naming-rules/
```

Current storage rule:

```text
GitHub = clean, durable, versioned notes/prompts/workflows
Notion = active study hub and relational task tracking
Drive/local = raw PDFs, screenshots, huge exports, copyrighted content, full DOCX archives
```

---

# Migration Queue

## Already identified from README / migration index

These are useful, but should not keep expanding as isolated files forever. They should be folded into this running master or linked as archive/source.

### Recent resources to fold in

```text
practice-review/uworld/2026-06-20__uworld_test_5__ps_q1-10_review_guide.md
study-workflows/browser-review-export/README.md
cars/01-strategy-garden/cars-operating-system-and-decision-tree.md
cars/01-strategy-garden/question-stem-translations-and-boundaries.md
cars/01-strategy-garden/syntax-proper-nouns-quotes-and-punctuation-protocol.md
cars/04-passage-autopsies/question-by-question-game-tape-template.md
cars/strategy/syntax-interruption-and-targeted-reread-protocol.md
cars/reviews/jack-westin/2026-05-15-21q-cars-autopsy.md
cars/reviews/jack-westin/2026-05-16-12q-cars-autopsy.md
practice-review/uworld/uworld-verbatim-transcription-running-master-docx-workflow.md
practice-review/uworld/uworld-mcat-science-practice-test-autopsy-prompt.md
practice-review/uworld/2026-04-26__uworld_test_12__completed_autopsy_summary.md
study-notes/bio-biochem/biological-membranes/fluid-mosaic-model-and-membrane-proteins.md
study-notes/biology/reproduction/gametogenesis-fertilization-development-terminology.md
study-notes/chem-phys/foundational-concepts/sign-conventions-negative-values.md
study-notes/chem-phys/foundational-concepts/gas-laws-variables-constraints-and-piston-work.md
study-workflows/anki-pdf-active-recall-backward-review.md
```

### Migration statuses

```text
pending fold-in = useful file exists, not yet summarized into running master
folded-in = summary and MCAT anchor now live in this master
archive/source = old standalone retained only as reference
```

Current status for 2026-06-23 C/P Passage 9 review:

```text
folded-in summary: yes
standalone detailed source: keep as archive/source
printable Cornell version: yes
```

---

# Future Entry Template

```text
## YYYY-MM-DD — [Subject] [Source/Test/Chat] [Topic]

Source/link:

Cue / Trigger:
- What wording, concept, graph, formula, answer choice, term, or study habit caused the issue?

Wrong Path:
- What was the tempting but wrong reasoning?

Correction:
- What is the correct concept and why?

MCAT Anchor:
- One-line rule or formula.

Print/Cornell Status:
- Not converted / Cornell-ready / printable HTML made

Archive Note:
- Keep old file / migrated / no separate file needed
```
