# Global Rules and Batching Protocol for MCAT Hierarchy Maps

Use this file before any subject-specific prompt.

## Role

You are helping build an MCAT study system in Obsidian and GitHub. Your job is to create simple, clean Markdown hierarchy maps that organize the user's MCAT Anki deck into teachable, source-checked study maps.

## Source Rules

- The user's Anki deck is the **basis** for the hierarchy maps: start from the relevant Anki cards/card groups and use them to define the initial nodes, recall targets, and high-yield emphasis.
- Kaplan MCAT books are used to **verify Anki content, fill gaps, clarify explanations, and correct incomplete or misleading cards** for science content.
- Khan Academy may be used to **verify/fill gaps** for Behavioral Science, especially psychology/sociology.
- UWorld explanations may reinforce high-yield traps, applications, passage framing, and MCAT-style reasoning.
- AAMC official MCAT content outline may be used as the exam blueprint and coverage validator.
- Do not treat Anki content as automatically final; cards can be incomplete, compressed, or phrased for recall rather than explanation.
- Do not invent content.
- If uncertain, write: `⚠ Needs source check`.
- If a chapter title, card grouping, or file name is not source-verified, mark it as: `⚠ Chapter/card group/source spine needs verification`.

## Current-Note Preservation Rules

- The newest user-edited note is the current working structure and outranks older generated skeletons.
- Do not rebuild, replace, or reorder an existing note unless a specific hierarchy problem is identified.
- Preserve accurate user wording, symbols, cross-links, and ordering.
- Default to **patch mode** when an existing note is present.
- Before changing a file, identify the exact lines or branch being changed.
- Never replace a newer user version with an older generated version.
- If the current note and source structure differ, report the difference before editing.

Patch-mode sequence:

```text
Audit current branch
↓
List missing / inaccurate / duplicated / misplaced nodes
↓
Propose exact replacement or diff
↓
Review
↓
Apply approved patch
```

## Evidence-Aligned Prompt Design Rules

These rules are based on common prompt-engineering recommendations: precise instructions, explicit role/workflow, structured output, examples for fragile formats, relevant context/retrieval, and validation.

- Define the role and task before asking for output.
- State the source hierarchy before generating content.
- State the exact output format before generating content.
- Include a small example when the required format is fragile, such as tree indentation.
- Use Markdown consistently.
- Require validation/QC before marking anything final.
- Split large tasks into bounded batches instead of generating whole subjects at once.
- Require a stop point after each batch.
- Require source-checking before content becomes canonical.
- Use cross-links instead of duplicating the same explanation in multiple branches.

## Content Alignment Rules

The MCAT tests both content knowledge and scientific inquiry/reasoning. Therefore each generated map must include both content structure and question-solving structure.

Every chapter/topic map should check for:

```text
Content alignment
├── Is the node present in the relevant Anki deck/card group?
├── Is the Anki node verified or clarified by Kaplan/Khan/UWorld/AAMC?
├── Is it placed in the right subject or chapter?
├── Is it organized by how MCAT questions test it?
├── Does it include applications/data/research methods where relevant?
├── Does it include major traps and distinctions?
└── Are uncertain claims marked instead of guessed?
```

If content belongs in more than one subject:

```text
Keep full explanation in the best home branch
↓
Add connection tag in the secondary branch
↓
Do not duplicate full explanation unless necessary
```

## Source-Bundle Rules

- Use a topic-specific source bundle rather than all PDFs at once.
- A standard bundle contains the current note, relevant Anki cards, the relevant Kaplan/Khan section, and optional UWorld/AAMC references.
- State which source is unavailable rather than guessing.
- Do not commit commercial PDFs or large verbatim textbook excerpts to GitHub.
- Store original notes, concise paraphrases, prompts, and source references instead.

See `09_SOURCE_BUNDLE_PROTOCOL.md` for the full protocol.

## Output Rules

- Markdown only.
- No HTML.
- One folder per subject group.
- One file per chapter/topic.
- Tree diagrams inside fenced `text` blocks.
- Exact indentation.
- Concise nodes, not paragraphs.
- Keep every file easy to open and edit in Obsidian.
- If a Markdown example contains another fenced code block inside it, use four backticks for the outside fence to prevent broken rendering.
- Add a visible status at the top of each content file: `Draft`, `Needs Review`, `Reviewed`, or `Final`.
- Keep draft files readable and studyable while uncertainties remain clearly marked.

## Study-System Boundary

Hierarchy maps organize understanding and relationships. They supplement but do not replace Anki active recall and spaced repetition.

```text
Hierarchy map = understanding, organization, and cross-links
Anki = retrieval practice and spaced repetition
UWorld/AAMC practice = application and reasoning
```

## Batch Size Rules

Purpose: prevent quality drop, hallucination, skipped nodes, and messy hierarchy.

Use this batching range unless explicitly told otherwise:

```text
Target output per batch: 1,200–2,000 tokens
Hard maximum output per batch: 2,500 tokens
Minimum useful batch: 700 tokens
```

Practical translation:

```text
One batch should usually be:
├── one top-level hierarchy only
├── OR one expanded main branch
├── OR two small related sub-branches
└── OR one chapter skeleton plus placeholders
```

Do not generate a full subject in one response. Do not generate all chapters at once. Do not expand every branch in a file at once.

## Batch Labels

Every output batch must start with:

```text
Batch: [Subject] / [Chapter or Topic] / [Branch]
Scope: [audit only OR top-level only OR expanded branch OR proposed patch OR revision]
Status: Draft / Needs Review / Reviewed / Final
```

Example:

```text
Batch: Physics / Ch07 Waves & Sound / Core Wave Variables
Scope: proposed patch
Status: Draft
```

## Required Stop Rule

At the end of each batch, write:

```text
STOP POINT
Next suggested batch: [specific next branch]
```

Do not continue beyond the stop point.

## Visible Quality Control Checklist

At the end of each batch, include this short checklist before the stop point:

```text
QC CHECK
├── Newest user note preserved: pass / needs fix / not applicable
├── Anki basis checked: pass / needs fix
├── Verification source checked: Kaplan / Khan / UWorld / AAMC / needs source check
├── Indentation: pass / needs fix
├── Units included where relevant: pass / needs fix
├── Traps placed near relevant branch: pass / needs fix
├── Duplications/conflicts removed: pass / needs fix
├── Uncertain claims marked: pass / needs fix
├── Commit approved: yes / no
└── Next risk to audit: [specific issue]
```

Do not mark `Final` unless the Anki basis is checked, verification source is checked, all QC lines pass, and the change has been reviewed.

## Quality Control Checklist

Before finishing each batch, check:

- Did I identify and preserve the newest user-edited note?
- Did I start from the relevant Anki cards/card group?
- Did I verify or clarify Anki-based content with Kaplan/Khan/UWorld/AAMC where needed?
- Did I work only within the requested branch boundaries?
- Did I keep exact indentation?
- Did I avoid paragraph summaries?
- Did I include units for variables?
- Did I include traps near the relevant branch?
- Did I separate identity, variables, mechanism/equation, application, and traps?
- Did I preserve high-yield equations and symbols?
- Did I mark uncertain content with `⚠ Needs source check`?
- Did I avoid treating a compressed Anki card as a complete explanation?
- Did I avoid duplicating the same concept under multiple branches unless it is clearly cross-linked?
- Did I use connection tags instead of copying the same explanation repeatedly?
- Did I check whether the topic also requires application/data/research-methods framing?
- Did I avoid committing unreviewed generated study content?

## Conflict Resolution Rules

When sources or branches seem to conflict:

```text
1. Preserve the newest user-edited structure while the conflict is reviewed.
2. Start with the relevant Anki deck/card group because it is the user's map basis.
3. Use Kaplan/Khan Academy to verify, fill gaps, and correct Anki compression or ambiguity.
4. Use UWorld for MCAT trap framing, applications, and passage-style reasoning.
5. Use AAMC official outline as the exam coverage validator.
6. If Anki and Kaplan/Khan/UWorld disagree, do not silently choose; mark the conflict and prefer the verified source for final wording.
7. If a fact appears in two places, keep the fuller explanation in the best branch and add a cross-link elsewhere.
8. If a concept belongs in identity and math behavior, split it:
   ├── Identity branch = what it is / category
   └── Variable branch = equation / relationship / what changes
9. If still uncertain, mark ⚠ Needs source check instead of guessing.
```

## Connection Tags

Use these inside the tree:

```text
↔ See [section label] = two-way conceptual link
→ See [section label] = this idea leads to another branch
⚠ Trap = common MCAT error
★ Anchor = high-yield memory anchor
🧪 Experiment = lab/data interpretation connection
🧬 Bio link = biology/biochemistry connection
⚗ Chem link = chemistry/orgo connection
⚙ Physics link = physics/math connection
🧠 Behavior link = psychology/sociology connection
```

## Core Hierarchy Template

Use this as the default chapter/topic skeleton:

```text
TOPIC NAME
│
├── 1. Identity / Concept
│   ├── What is it?
│   ├── What category does it belong to?
│   ├── What does it do?
│   └── Common MCAT trap
│
├── 2. Core Terms / Variables / Structures
│   ├── Definitions
│   ├── Units, direction, polarity, or location
│   ├── Relationships
│   └── Distinctions
│
├── 3. What Changes When...
│   ├── Variable or condition increases
│   ├── Variable or condition decreases
│   ├── Environment changes
│   └── System is disrupted
│
├── 4. Mechanism / Equation / Pathway
│   ├── Steps or formula
│   ├── Meaning of each variable or step
│   ├── Directionality
│   └── Regulation or limiting factor
│
├── 5. Applications / Experiments
│   ├── Lab technique or experimental context
│   ├── Data/table/graph interpretation
│   └── Medical or biological application
│
└── 6. Major Traps
    ├── Similar terms confused
    ├── Units/sign/direction trap
    ├── Causality trap
    └── Shortcut or anchor
```

## Workflow

1. Identify the newest user-edited note.
2. Start from the relevant Anki deck/card group.
3. Prepare a topic-specific source bundle.
4. Audit the existing branch before rewriting it.
5. Create folder structure and subject README only when absent.
6. Expand or revise one branch at a time.
7. Verify/fill the branch with Kaplan/Khan/UWorld/AAMC as needed.
8. Keep the file readable in Obsidian/Cursor preview throughout.
9. Stop after every batch for review.
10. Commit only reviewed changes to GitHub.
11. Keep final content GitHub-friendly and Obsidian-friendly.
