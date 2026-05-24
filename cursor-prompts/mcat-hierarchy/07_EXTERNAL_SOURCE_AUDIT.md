# External Source Audit — MCAT Hierarchy Cursor Prompt Pack

Audit date: 2026-05-23

## Audit scope

This audit compares the prompt pack against two categories of reputable guidance:

```text
Audit sources
├── prompt creation / AI workflow guidance
│   ├── clear role + task framing
│   ├── source/context grounding
│   ├── explicit output format
│   ├── examples for fragile formats
│   ├── decomposition into smaller tasks
│   └── validation / QC before finalization
│
└── MCAT content guidance
    ├── official AAMC exam blueprint / section structure
    ├── Kaplan/Khan Academy/UWorld as study-content sources
    ├── scientific inquiry and reasoning emphasis
    └── application/data interpretation requirements
```

## External source comparison summary

### 1. Prompt creation / AI workflow guidance

Reputable prompt guidance generally recommends clear instructions, relevant context, output-format constraints, examples for formatting, decomposition of complex tasks, and verification/iteration.

Current prompt-pack alignment:

```text
Prompt-design requirement
├── Role defined → present
├── Task defined → present
├── Source hierarchy defined → strengthened
├── Output format specified → present
├── Examples included → present
├── Batching/decomposition → present
├── Stop rule → present
├── QC before final-ready → strengthened
└── Uncertainty handling → strengthened
```

Audit result: pass after global update.

Remaining risk:
Some subject prompts contain nested Markdown examples that may render imperfectly on GitHub. The instructions remain usable in Cursor, but visual cleanup may still be useful.

### 2. MCAT content alignment

The MCAT is organized around four exam sections, scientific concepts, and scientific inquiry/reasoning skills. A prompt system for MCAT maps should not only list facts; it should force application, graph/table interpretation, experiment logic, variable relationships, and common traps.

Current prompt-pack alignment:

```text
MCAT-content requirement
├── Bio/Biochem section → present
├── Chem/Phys content split → present as GenChem/Orgo + Physics
├── Behavioral Science section → present
├── CARS excluded from science maps → acceptable because this prompt pack targets content maps
├── Scientific reasoning/data interpretation → present but should remain mandatory
├── Experimental methods → present
├── Units/variables/equations → strong in Physics/Chem
├── Similar-term traps → strong in Behavioral
└── Source verification before finalization → strengthened
```

Audit result: mostly pass.

Remaining risk:
The file/chapter names are workflow scaffolds, not guaranteed exact Kaplan or AAMC chapter titles. They must be source-checked before the maps are treated as canonical.

## Corrections made during this audit

### Correction 1 — AAMC added as blueprint validator

Before:

```text
Kaplan MCAT books are the primary chapter spine.
```

After:

```text
AAMC official MCAT content outline may be used as the exam blueprint and coverage validator.
Kaplan MCAT books are the primary chapter/learning spine for science content.
```

Why:
AAMC is the official exam blueprint. Kaplan is better for teachable chapter structure, but AAMC should validate coverage.

Status: fixed in `00_Global_Rules_and_Batching.md`.

---

### Correction 2 — Evidence-aligned prompt design rules added

Added:

```text
Evidence-Aligned Prompt Design Rules
├── define role and task
├── state source hierarchy
├── state exact output format
├── include examples for fragile formats
├── use Markdown consistently
├── require validation/QC
├── split large tasks into bounded batches
├── require stop point
├── require source-checking before canonical status
└── use cross-links instead of duplicate explanations
```

Why:
These rules reduce vague outputs, format drift, hallucination risk, and task over-expansion.

Status: fixed in `00_Global_Rules_and_Batching.md`.

---

### Correction 3 — Content alignment rules added

Added:

```text
Content alignment
├── Does this appear in the AAMC/Kaplan/Khan/UWorld source spine?
├── Is it placed in the right subject or chapter?
├── Is it organized by how MCAT questions test it?
├── Does it include applications/data/research methods where relevant?
├── Does it include major traps and distinctions?
└── Are uncertain claims marked instead of guessed?
```

Why:
This prevents the maps from becoming passive fact lists and keeps them aligned with MCAT reasoning.

Status: fixed in `00_Global_Rules_and_Batching.md`.

---

## Remaining issues not fully fixed yet

```text
Remaining issues
├── Nested Markdown fences in subject prompts may need formatting cleanup
├── Chapter/file names need exact source verification
├── Subject prompts should each repeat the global source-check warning locally
├── AAMC content categories are not yet explicitly mapped to file names
├── CARS is intentionally excluded but should be documented as out-of-scope
└── Generated content still requires branch-by-branch review before GitHub finalization
```

## Recommended next pass

```text
Next audit pass
├── Patch subject prompts to use four-backtick outer fences where needed
├── Add local "chapter titles are scaffolds until verified" note in each subject prompt
├── Add AAMC blueprint coverage checklist file
├── Add "generated maps cannot be final until source-checked" to starter prompt
└── Add review protocol for comparing generated branches to Kaplan/UWorld/Khan/AAMC
```

## Current conclusion

The prompt pack is now aligned with reputable prompt-design practices and better aligned with official MCAT content structure. It is suitable for controlled drafting in Cursor.

It is not yet a fully source-verified MCAT curriculum map. It should be used as a draft-generation scaffold, followed by source-checking and branch-level review.
