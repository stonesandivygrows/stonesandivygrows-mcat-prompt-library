# Anki Export Integration Protocol

## AI resume block

- **Status:** Canonical source-integration and card-selection protocol.
- **Read with:** [`../AI_RESUME_CONTEXT.md`](../AI_RESUME_CONTEXT.md), [`../TASK_LEDGER.md`](../TASK_LEDGER.md), and [`../PROJECT_HANDOFF_INDEX.md`](../PROJECT_HANDOFF_INDEX.md).
- **Private inputs:** complete Aiden/Captain Hook/Pankow/other deck exports remain in private local or cloud storage.
- **Critical rule:** confirm the latest exact deck, subdeck, note type, field names, and export date before creating import files. Do not infer the current deck structure from an old prompt or filename.
- **Locked architecture:** Goodnotes holds full explanations; Anki holds concise content recall and automatic strategy/application triggers. Exact source cards and newly written bridge cards must be distinguishable.
- **Exact resume instruction:** open the active Anki task in `TASK_LEDGER.md`, locate the latest separated exports, confirm exact deck metadata, and continue from the last verified card/note or approved passage—not from a generic topic list.

## Purpose

Anki exports are preserved as archival source material and used to build targeted flashcard-review layers inside Kaplan Chapter Hubs.

The exports must not be imported into the database as giant raw documents or converted into thousands of standalone database entries.

## Canonical local source directory

```text
~/Desktop/mcat/ipad anki/
```

Recommended local organization:

```text
ipad anki/
├── 00_manifest.md
├── 01_html_exports/
├── 02_plain_text_exports/
├── 03_pdf_exports/
└── 99_legacy_or_test_exports/
```

## Storage responsibilities

### Local or cloud archive

Store the complete source exports privately in local storage, iCloud Drive, Google Drive, or another private archive. This includes HTML exports, plain-text exports, PDF exports, media, and legacy/test exports.

### GitHub

Store only:

- Processing rules
- Export manifests
- File indexes
- Mapping tables
- Extraction scripts
- Quality-control procedures
- Empty templates
- References to private source-file locations

Do not commit complete commercial decks, copied book content, or large raw exports unless redistribution rights are confirmed.

### Notion

Store only the targeted chapter-specific cards selected for the corresponding Kaplan Chapter Hub.

## Parsing boundary

Treat every large Anki export as a searchable reference pool.

Do not:

- Paste an entire export into one Notion page
- Create one database entry per source PDF
- Import thousands of cards indiscriminately
- Duplicate the complete deck across Kaplan chapters

Instead:

1. Identify the Kaplan chapter being built.
2. Determine its exact topic boundaries.
3. Search the relevant Anki subject export.
4. Extract only cards directly relevant to that chapter.
5. Remove unrelated, redundant, malformed, or low-value cards.
6. Preserve the original question-and-answer meaning.
7. Insert the selected cards into the chapter review layer.

## Chapter review layer

Every Kaplan Chapter Hub may contain a native Notion toggle titled:

```text
▼ High-Yield Flashcard Review Layer
```

The toggle should contain only cards relevant to that chapter.

Suggested internal groups, used only when helpful:

- Core Recall
- Equations and Relationships
- Common Confusions
- Experimental and Laboratory Applications
- Cross-Chapter Connections

## Content authority

The Anki deck supplies the initial card pool.

Kaplan is used to:

- Define chapter boundaries
- Verify factual accuracy
- Detect missing concepts
- Correct misleading wording
- Supply necessary context

UWorld is used to:

- Verify applied MCAT reasoning
- Identify tested distinctions
- Add high-yield clarification
- Detect common traps

The Anki deck remains the basis of the flashcard layer; Kaplan and UWorld verify, correct, and fill gaps.

## Initial chapter routing

### Biochemistry

| Kaplan chapter | Chapter scope | Anki source | UWorld section |
|---|---|---|---|
| Chapter 1 | Amino acids, peptides, protein structure, denaturation | Captain Hook Biochemistry | Amino Acids and Proteins |
| Chapter 2 | Catalysis, kinetics, inhibition, enzyme regulation | Captain Hook Biochemistry | Enzymes |
| Chapter 3 | Motor proteins, antibodies, signaling, isolation, and analysis | Captain Hook Biochemistry | Amino Acids and Proteins |

### Biology

| Kaplan chapter | Chapter scope | Anki source | UWorld section |
|---|---|---|---|
| Chapter 1 | Eukaryotes, prokaryotes, viruses, and cell structures | Captain Hook Biology | Cellular Biology and Biological Research Techniques |
| Chapter 2 | Cell cycle, mitosis, meiosis, and reproductive systems | Captain Hook Biology | Reproduction, Genetics, and Evolution |
| Chapter 3 | Early development, gastrulation, fetal circulation, gestation, and birth | Captain Hook Biology | Reproduction |

### Organic Chemistry

| Kaplan chapter | Chapter scope | Anki source | UWorld section |
|---|---|---|---|
| Chapter 1 | IUPAC naming and functional-group recognition | Captain Hook Organic Chemistry | Introduction to Organic Chemistry |
| Chapter 2 | Constitutional isomers, stereoisomers, configurations, and conformations | Captain Hook Organic Chemistry | Introduction to Organic Chemistry |

### Mr. Pankow

Mr. Pankow is primarily a Psychology/Sociology deck. Do not route it into Biochemistry, Biology, or Organic Chemistry hubs merely because an isolated card mentions biological material. Use it principally for Kaplan Behavioral Sciences chapter hubs.

## Extraction standards

Each extracted card must be:

- Inside the correct Kaplan chapter boundary
- Accurate according to Kaplan and UWorld
- Understandable without unrelated deck context
- Concise enough for active recall
- Free of accidental answer leakage
- Free of duplicated cards
- Properly formatted for Notion
- Tagged with its source when traceability is needed

## Quality-control checklist

Before approving a chapter layer:

- Confirm every card belongs in the chapter.
- Remove duplicate or near-duplicate cards.
- Separate concepts that test different recall targets.
- Correct outdated or inaccurate wording.
- Preserve useful images only when legally and technically appropriate.
- Confirm cloze deletions remain understandable.
- Flag cross-chapter cards rather than duplicating them unnecessarily.
- Confirm the toggle functions as a review tool rather than a content dump.
- Confirm any new application/strategy card points back to the approved Goodnotes explanation or source question.
- Record exact last processed note/card and next note/card in `TASK_LEDGER.md` before stopping.

## Processing limitation

Compilation occurs only during an active working session. Do not claim that processing continues after the session ends unless an actual scheduled or external automation has been configured.
