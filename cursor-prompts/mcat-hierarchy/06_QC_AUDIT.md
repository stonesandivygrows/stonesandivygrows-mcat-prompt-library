# QC Audit — MCAT Hierarchy Cursor Prompt Pack

Audit date: 2026-05-23

## Audit status

Status: First-pass QC completed.

This prompt pack has been checked for the major categories below:

```text
QC categories
├── source-rule consistency
├── batching consistency
├── output-format consistency
├── hierarchy logic consistency
├── duplication/conflict risk
├── Markdown rendering risk
├── hallucination/source-check risk
├── Anki/Pankow source-position risk
└── subject-specific confusion risk
```

## High-priority findings

### 1. Source hierarchy needed stronger enforcement

Finding:
The prompts correctly named Kaplan, UWorld, Khan Academy, and Anki, but they needed a clearer rule that Anki/Pankow decks are reinforcement tools, not primary sources.

Risk:
Cursor could overbuild a topic from Anki/Pankow instead of using Kaplan/Khan Academy/UWorld as the source spine.

Resolution:
Added stronger global source rule:

```text
Do not treat Anki, Pankow, or third-party decks as the primary source unless the user explicitly asks for an Anki-only map.
```

Status: Fixed in `00_Global_Rules_and_Batching.md`.

---

### 2. QC needed to be visible, not silent

Finding:
The first version told Cursor to silently check QC, but that makes it harder to see whether a batch is safe to trust.

Risk:
Cursor could claim completion without exposing whether source status, indentation, units, traps, duplications, or uncertainty were checked.

Resolution:
Added visible QC block requirement:

```text
QC CHECK
├── Source status: verified / needs source check
├── Indentation: pass / needs fix
├── Units included where relevant: pass / needs fix
├── Traps placed near relevant branch: pass / needs fix
├── Duplications/conflicts removed: pass / needs fix
├── Uncertain claims marked: pass / needs fix
└── Next risk to audit: [specific issue]
```

Status: Fixed in `00_Global_Rules_and_Batching.md`.

---

### 3. Final-ready status needed stricter conditions

Finding:
The original batch-status line allowed `Final-ready`, but did not define when Cursor is allowed to use that label.

Risk:
Cursor might label drafts as final before source verification and QC.

Resolution:
Added rule:

```text
Do not mark Final-ready unless all QC lines are pass and source status is verified.
```

Status: Fixed in `00_Global_Rules_and_Batching.md`.

---

### 4. Conflict-resolution rules were not explicit enough

Finding:
The prompts had good subject instructions, but did not explicitly say what to do when a concept belongs in more than one branch.

Risk:
Duplicated explanations, contradictions, or bloated branches.

Resolution:
Added conflict-resolution rules:

```text
1. Prefer Kaplan/Khan Academy chapter logic for structure.
2. Use UWorld for MCAT trap framing and applications.
3. Use Anki only to catch high-yield recall points.
4. If a fact appears in two places, keep the fuller explanation in the best branch and add a cross-link elsewhere.
5. If a concept belongs in identity and math behavior, split it:
   ├── Identity branch = what it is / category
   └── Variable branch = equation / relationship / what changes
6. If still uncertain, mark ⚠ Needs source check instead of guessing.
```

Status: Fixed in `00_Global_Rules_and_Batching.md`.

---

### 5. Markdown nested-code-fence risk

Finding:
Several subject prompts contain Markdown examples that include nested fenced code blocks. This can render awkwardly on GitHub if the outer fence and inner fence both use triple backticks.

Risk:
The prompt text may still be usable in Cursor, but GitHub display can become visually confusing.

Resolution:
Global rule added:

```text
If a Markdown example contains another fenced code block inside it, use four backticks for the outside fence to prevent broken rendering.
```

Status: Guardrail added globally. Individual subject prompt examples should be patched to four-backtick outer fences during the next cleanup pass if visual rendering becomes confusing.

---

## Subject-specific audit notes

### Bio/Biochem

Passes:
- Has location → structure → function → regulation → disruption/trap logic.
- Has pathway, enzyme, organ-system, and molecule-family templates.
- Includes metabolism, membranes, graph/data, and flashcard layer placeholders.

Risks:
- Some chapter filenames may not perfectly match Kaplan chapter titles.
- Needs source verification before being treated as canonical.

Required handling:
- Mark chapter-title mismatches as `⚠ Chapter title/source spine needs verification` until checked.

---

### General Chemistry / Organic Chemistry

Passes:
- Separates identity, structure, charge/polarity, reactivity, lab clues, and traps.
- Has explicit thermodynamics vs kinetics split.
- Has technique and spectroscopy templates.

Risks:
- Chapter filenames are functional/workflow labels, not guaranteed exact Kaplan titles.
- Some General Chemistry chapters may need rearrangement after exact Kaplan table-of-contents verification.

Required handling:
- Treat as workflow scaffold, not exact Kaplan table of contents, until source-checked.

---

### Physics

Passes:
- Strong variable/unit/equation/proportionality logic.
- Includes specific rule for weak points: do not rely only on units.
- Good for equation-centered branches.

Risks:
- Physics chapter grouping is intentionally workflow-based and may not exactly match Kaplan chapter order.
- Needs source verification before final chapter names are locked.

Required handling:
- Use as map-building scaffold; source-check exact chapter spine before final GitHub map generation.

---

### Behavioral Science

Passes:
- Strong distinction-pair template.
- Includes scenario cue, theory, sociology level, and research-methods structures.
- Good for P/S term confusion control.

Risks:
- Pankow should remain a reinforcement layer, not a replacement for Khan Academy/Kaplan unless explicitly requested.
- Unit titles may need alignment with the user’s preferred KA/Pankow segmentation.

Required handling:
- Verify unit structure before treating as final.

---

## Recommended next cleanup pass

```text
Next QC pass
├── Patch nested Markdown fences in subject prompt examples
├── Add "chapter titles are scaffolds until verified" note to each subject prompt
├── Add exact source-check step before Cursor creates chapter files
├── Add deduplication rule inside each subject prompt, not only globally
└── Add a final "do not commit generated maps until reviewed" note
```

## Bottom line

The prompt pack is safe as a structured drafting system after the global QC update, but it should not be treated as a fully source-verified canonical MCAT map yet. Cursor should generate draft batches, and each branch should be checked before being committed as final study content.
