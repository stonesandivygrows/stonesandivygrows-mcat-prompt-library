# Topic-Specific Source Bundle Protocol

## Purpose

Use only the sources needed for the current topic. Do not load every MCAT PDF into every Cursor or AI Studio task.

## Standard Source Bundle

```text
One topic/chapter bundle
├── Current user-edited Markdown note
├── Relevant Anki cards/card-group export
├── Relevant Kaplan or Khan Academy section
├── Optional UWorld section/explanations
├── Optional AAMC coverage reference
└── Previous reviewed version, when applicable
```

## Source Priority

```text
1. Current user-edited note = current working structure
2. Anki deck/card group = content basis
3. Kaplan/Khan = verification, correction, clarification, gap filling
4. UWorld = application, passage reasoning, traps
5. AAMC = coverage validation
```

The current note controls the working layout; Anki controls the content basis. Verification sources can correct inaccurate content but should not silently replace the user's organization.

## Do Not Provide Every PDF at Once

Avoid this:

```text
all Anki exports
+ all Kaplan books
+ all UWorld books
+ all current notes
→ one prompt asking for an entire subject
```

Risks:

```text
├── retrieval errors
├── skipped cards
├── duplicated concepts
├── format drift
├── outdated note overwrites
└── lower-quality hierarchy
```

Use bounded bundles instead.

## Bundle Preparation

Before a task begins:

```text
1. Name the exact subject/topic.
2. Identify the newest user-edited note.
3. Identify the relevant Anki card group/pages.
4. Identify the relevant Kaplan/Khan section.
5. Add UWorld only when application/trap framing is needed.
6. State which sources are unavailable.
7. Define the single branch or comparison task.
```

## Suggested Folder Layout

```text
_sources/
├── Current_User_Drafts/
│   └── [Topic]_current.md
├── Anki_Exports/
│   └── [Relevant deck or extracted topic]
├── Verification/
│   ├── Kaplan/
│   └── Khan_Academy/
├── Applications/
│   └── UWorld/
└── Coverage/
    └── AAMC/
```

PDFs may remain outside the Git repository when copyright, file size, or privacy makes repository storage inappropriate. The repository should store original notes, prompts, source references, and transformations—not copied textbook chapters.

## Copyright-Safe Repository Rule

Do not commit:

```text
├── complete commercial textbooks
├── complete UWorld books/explanations
├── large verbatim textbook excerpts
└── redistributed deck exports without permission
```

May commit:

```text
├── original hierarchy maps
├── concise paraphrased explanations
├── source names and chapter/page/card references
├── user-created corrections and cross-links
└── prompts and QC protocols
```

## AI Studio Use

Use AI Studio when the topic bundle contains large PDFs that need extraction or comparison.

Prompt it to return:

```text
1. Anki nodes already present
2. Missing Anki nodes
3. Potential inaccuracies/conflicts
4. Kaplan/Khan gap fills
5. UWorld application/trap additions
6. One proposed branch only
```

Do not ask it to write the whole subject at once.

## Cursor Use

Cursor should receive:

```text
├── the current Markdown note
├── the approved comparison/QC report
├── exact branch boundaries
└── permission level: audit only / propose patch / apply patch
```

Default permission is **propose patch**. It should not overwrite the note without explicit approval.

## Source Traceability

Each reviewed branch should record concise provenance:

```text
Basis: [Anki deck/card group]
Verified with: [Kaplan/Khan chapter or section]
Application check: [UWorld section, if used]
Coverage check: [AAMC category, if used]
```

Do not include unsupported page/card numbers. Mark unavailable references as `⚠ Reference unavailable`.

## Completion Criteria

A source bundle is complete when:

```text
├── newest user note identified
├── Anki basis available or absence marked
├── verification source available or absence marked
├── task limited to one bounded scope
├── output destination identified
└── overwrite protection enabled
```
