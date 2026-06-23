# MCAT Running Review and Notes Master

Created: 2026-06-23
Purpose: reduce file sprawl by turning future notes, guides, test reviews, strategy updates, and durable misconceptions into entries inside running documents instead of creating a new standalone file for every session.

## Operating Rule Going Forward

Default behavior:

```text
New learning from a chat/session → append as a dated entry in this master document or another clearly named running document.
New standalone files → only for templates, scripts, exports, major printable versions, or archival source documents.
Old one-off guides → keep as archive/source until migrated into this master.
```

This file becomes the main consolidation layer across subjects. Older files do not need to be deleted immediately. They should be treated as source material that gets summarized, linked, and eventually folded into the correct section here.

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

## Active consolidation target

Fold older biochemistry/biology entries into this section rather than creating many small files.

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

Fold P/S term mistakes, experiment-design traps, and graph/significance reasoning into this section.

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

CARS has enough strategy material that it should be consolidated into running entries rather than scattered one-off autopsies.

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

This section should absorb whiteboard strategies, review workflow rules, export scripts, naming conventions, Anki routing, and GitHub/Notion storage rules.

Known source folders/files to consolidate later:

```text
study-workflows/
practice-review/uworld/uworld-verbatim-transcription-running-master-docx-workflow.md
practice-review/uworld/uworld-mcat-science-practice-test-autopsy-prompt.md
anki/
naming-rules/
```

Current rule:

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
## YYYY-MM-DD — [Subject] [Source/Test] [Topic]

Source/link:

Cue / Trigger:
- What wording, concept, graph, formula, or answer choice caused the issue?

Wrong Path:
- What was the tempting but wrong reasoning?

Correction:
- What is the correct concept and why?

MCAT Anchor:
```text
One-line rule or formula.
```

Print/Cornell Status:
- Not converted / Cornell-ready / printable HTML made

Archive Note:
- Keep old file / migrated / no separate file needed
```
