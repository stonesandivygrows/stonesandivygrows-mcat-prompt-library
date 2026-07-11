# Anki Project Chats to MCAT Mind Maps: Coverage Ledger and Architecture

**Status:** Needs Review - Part 1 inventory and architecture complete  
**Created:** 2026-07-11  
**Repository:** `stonesandivygrows/stonesandivygrows-mcat-prompt-library`  
**Scope:** ChatGPT project `Anki`, from the earliest located project chats through 2026-07-11

## 1. Purpose

This is the canonical index for converting the user's Anki-project conversations into reviewable MCAT knowledge maps.

The final system must preserve more than correct facts. It must capture:

- every substantive question
- every clarification request
- every explicit or implicit confusion
- every correction of a card, explanation, assumption, or conclusion
- every classification and hierarchy decision
- every analogy or intuitive model that improved understanding
- every conclusion, connection, comment, and note to self
- every recurring memory problem or error pattern
- every study, review, passage, calculation, Anki, and visual-map strategy
- every unresolved or insufficiently verified issue

This file is an inventory and routing layer. Subject shards will contain the actual extracted learning content.

## 2. Why the project is split into parts

A complete extraction is too large and too interconnected for one context window. Work therefore proceeds as resumable, bounded shards.

```text
00 Coverage ledger and architecture
01 Foundational sciences
   - General chemistry
   - Organic chemistry
   - Physics and math
02 Biochemistry, molecular biology, and cell biology
03 Biological systems and organ physiology
04 Psychology and sociology
05 CARS, passage reasoning, calculations, and test strategy
06 Anki, audio, PDF, source-routing, and map-production workflows
07 Cross-links, recurring confusions, contradictions, and final gap audit
```

Each shard is independently reviewable. A completed shard must not depend on uncommitted text from a previous chat window.

## 3. Completion states

| State | Meaning |
|---|---|
| `Located` | Chat title/date or source artifact has been identified. |
| `Extracting` | Messages are being converted into structured learning records. |
| `Mapped` | Every substantive item found has a destination node or workflow section. |
| `Verified` | Scientific content and corrections have been checked with the approved source hierarchy. |
| `Needs Recheck` | Chat boundary, title, factual claim, or completeness remains uncertain. |
| `Excluded` | Item was reviewed and is outside MCAT review-map scope; reason must be recorded. |

**Important:** `Located` is not the same as `Mapped`. Finding a conversation title does not prove that every question inside it has been extracted.

## 4. Source hierarchy and repository boundary

### Content authority

1. The user's Anki decks provide the initial recall targets and student-language source pool.
2. Kaplan defines the science hierarchy and verifies, corrects, and fills necessary gaps.
3. Khan Academy performs the same role for Behavioral Sciences.
4. UWorld supplies application framing, experimental reasoning, and common traps.
5. User-created explanations and analogies are preserved when accurate and useful.

### Repository boundary

GitHub may contain:

- original summaries and hierarchy maps
- paraphrased explanations
- user-created corrections, analogies, and cross-links
- source names and bounded card/chapter references
- map schemas, prompts, manifests, and QC records

GitHub must not contain:

- complete commercial textbooks or UWorld explanations
- complete redistributed Anki deck exports
- large verbatim card dumps
- raw audio, screenshots, or private archive files

The attached deck PDFs are searchable reference pools only. They are not repository deliverables.

## 5. Unit of extraction

Every substantive chat item becomes one `LearningRecord`.

| Field | Required content |
|---|---|
| `record_id` | Stable shard-local identifier, such as `CHEM-ACIDBASE-004`. |
| `chat_title` | Best available conversation title. |
| `chat_date` | Date or date range. |
| `record_type` | One or more controlled types below. |
| `user_thought` | Concise paraphrase of what the user asked, believed, noticed, or concluded. |
| `verdict` | `Correct`, `Partly correct`, `Incorrect`, `Unresolved`, or `Workflow preference`. |
| `correction_or_answer` | The corrected MCAT-level explanation. |
| `why_the_confusion_made_sense` | The nearby concept or wording that produced the mix-up. |
| `distinction` | The shortest boundary that separates the confused concepts. |
| `map_home` | The one canonical concept node where the item lives. |
| `cross_links` | Other nodes that must point back to the canonical node. |
| `memory_hook` | User-approved analogy, etymology, visual, or recall rule. |
| `trap` | Likely MCAT distractor or wording trap. |
| `source_basis` | Anki deck/card group and Kaplan, Khan, or UWorld verification target. |
| `status` | Extraction and verification state. |

### Controlled record types

```text
Question
Clarification
Confusion
Correction
Conclusion
Connection
Classification
Comparison
Analogy
Memory problem
Strategy
Comment or reflection
Card repair
Map-design decision
Workflow decision
Unresolved issue
```

One message may produce multiple records. One record may have multiple types.

## 6. Mind-map node and edge rules

### Canonical node fields

```text
id
name
category
3-7 word visual definition
expanded explanation
MCAT importance
common mistakes
user-specific confusion
memory hook
source references
primary map
cross-links
verification status
```

### Controlled relationship vocabulary

Every edge must be labeled. Preferred verbs include:

```text
is a type of
part of
contains
causes
increases
decreases
activates
inhibits
converts to
requires
produces
binds
transports
opposes
compared with
commonly confused with
tested together with
explains
exception to
```

### Redundancy rule

- Each concept has one canonical node.
- A concept may appear in multiple topic maps through backlinks or references.
- Repeated definitions are avoided.
- Repeated exposure is encouraged through labeled cross-links.

### Visual grammar

- Term plus a 3-7 word explanation is the default visual-node density.
- Expanded explanations live in notes or the Markdown shard.
- Warning or triangle nodes indicate MCAT traps or corrected misconceptions.
- Comparison nodes must show the exact boundary, not merely say two terms are different.
- Named concepts, mechanisms, functions, effects, and contrast cues receive selective bold emphasis in visual exports.
- The final map is a web with multiple entry routes, not a single-direction flowchart.

## 7. Content-routing architecture

| Subject shard | Primary map families | Required cross-links |
|---|---|---|
| Foundational sciences | atomic structure, bonding, thermodynamics, kinetics, acids/bases, electrochemistry, fluids, circuits, waves, optics, organic structure and reactions, lab methods | biochemistry, physiology, calculations, sign conventions |
| Biochemistry and cell | amino acids, proteins, enzymes, carbohydrates, lipids, metabolism, DNA/RNA, gene expression, membranes, signaling | organ systems, chemistry, experimental methods |
| Biological systems | nervous, endocrine, cardiovascular, respiratory, renal, digestive, immune, reproductive, musculoskeletal, development | psychology, metabolism, fluids, electrochemistry |
| Behavioral sciences | sensation/perception, learning/memory, identity, development, social psychology, sociology, research methods | nervous system, health behavior, CARS reasoning |
| Reasoning and strategy | passage anatomy, graph/table reading, experimental design, calculation shortcuts, CARS question types, timing, whiteboard | every content map through application nodes |
| Anki and production | PDF active recall, scheduling, HyperTTS, card repair, source bundles, Figma/Whimsical/Draw.io rules, GitHub workflow | all subject shards through provenance and review status |

## 8. Located conversation inventory

This ledger is intentionally conservative. Titles are listed when located in project history or supplied project context. Items marked `Needs Recheck` require a later boundary audit before completeness is claimed.

### January-April 2026

| Date | Conversation | Primary destination | State |
|---|---|---|---|
| 2026-01-19 | Organizing MCAT Content | 06 production workflow | Located |
| 2026-02-12 | AnkiHub Confusion Explained | 06 Anki workflow | Located |
| 2026-02-22 | MCAT Daily Planner Design | 05 strategy and 06 workflow | Located |
| 2026-02-25 | Ionization Energy Patterns / MCAT equations and card wording | 01 chemistry and physics | Needs Recheck |
| 2026-02-27 to 2026-03-01 | Anki Voice Fix iOS | 06 HyperTTS and templates | Located |
| 2026-02-28 | Remote Control for Anki | 06 Anki workflow | Located |
| 2026-03-02 | Flexible Schedule Adjustment | 05 study strategy | Located |
| 2026-03-02 | MCAT Daily Tracker Layout | 05 study strategy | Located |
| 2026-03-07 | Anki Button Functions / Stouchi setup | 06 Anki workflow | Located |
| 2026-03-08 | Master Isomer Flowchart | 01 organic chemistry | Located |
| 2026-03-08 | Isomer Flowchart Explanation | 01 organic chemistry | Located |
| 2026-04-10 | MCAT Enzyme Modifications / reducing sugars | 02 biochemistry | Needs Recheck |
| 2026-04-16 | Anki Review Bar Fix / add-on troubleshooting | 06 Anki workflow | Located |
| 2026-04-17 | Kaplan MCAT Mind Map Template | 06 map production | Located |
| 2026-04-17 | Mind Map Template MCAT | 06 map production | Located |
| 2026-04-17 | Overhall and branches | 06 audio and prompt workflow | Located |
| 2026-04-18 | Custom Anki Button Intervals | 06 Anki workflow | Located |
| 2026-04-19 | Mac Storage Cleanup / Anki files | 06 archive workflow | Needs Recheck |
| 2026-04-25 | HyperTTS Free Anki Setup | 06 HyperTTS | Located |
| 2026-04-25 | Download and Print Poster | 06 visual workflow | Located |
| 2026-04-27 | Printing Jack Westin Results and branches | 05 CARS and 06 export workflow | Located |
| 2026-04-28 | Timestamped Visual Plan | 01 organic chemistry and 06 visuals | Located |
| 2026-04-29 | MCAT Practice Test Review | 05 passage and autopsy strategy | Located |
| 2026-04-29 | UWorld Test 12 Autopsy branch | 05 science passage review | Located |

### May 2026

| Date | Conversation | Primary destination | State |
|---|---|---|---|
| 2026-05-01 | Improving Concept Web branch | 06 map production | Located |
| 2026-05-01 | Physics Bulk Running File and Audit | 01 physics | Located |
| 2026-05-01 | Search+ / NotebookLM MCAT Test Autopsy setup | 05 and 06 | Needs Recheck |
| 2026-05-01 | UWorld audio-review running-document updates | 05 passage reasoning | Needs Recheck |
| 2026-05-04 | Dense OChem Flow-Web prototype | 01 organic chemistry | Located |
| 2026-05-05 | Mapify OChem Mind Map | 01 organic chemistry and 06 visuals | Located |
| 2026-05-05 | MCAT metabolism map | 02 metabolism | Located |
| 2026-05-10 | MCAT Scheduler Update | 05 study strategy | Located |
| 2026-05-10 to 2026-05-11 | Command Center, asset registry, and running logs | 06 workflow | Located |
| 2026-05-11 | GitHub repository update requests | 06 GitHub workflow | Needs Recheck |
| 2026-05-12 | AI Summary Organizer | 06 content routing | Located |
| 2026-05-12 | Anki Cornell PDF Setup | 06 PDF review workflow | Located |
| 2026-05-13 | MCAT Biology Deck Assistance | 03 biology | Located |
| 2026-05-13 | MCAT Biology Deck Help | 03 biology | Located |
| 2026-05-13 | Claude questions and running confusion list | all content shards | Needs Recheck |
| 2026-05-16 | Pankow Review | 04 psychology and sociology | Located |
| 2026-05-17 | General Chemistry Review | 01 general chemistry | Located |
| 2026-05-18 | Planck's Constant Memorization | 01 physics and 05 memory strategy | Located |
| 2026-05-18 | Innate Immunity Discussion | 03 immune and digestive | Located |
| 2026-05-20 | Organic Chemistry Anki Cards | 01 organic chemistry | Located |
| 2026-05-20 | Anki Data Merging Setup | 06 source routing | Located |
| 2026-05-20 | Strategy Failures Review | 05 CARS strategy | Located |
| 2026-05-20 | Visual Asset Integration | 06 visual workflow | Located |
| 2026-05-20 | Master System Blueprint | 06 project architecture | Located |
| 2026-05-21 | Study Catch-up Plan | 05 study strategy | Located |
| 2026-05-22 | Electricity Concepts Visualized | 01 physics | Located |
| 2026-05-23 | Waves and Sound | 01 physics | Located |

### June 2026

| Date | Conversation | Primary destination | State |
|---|---|---|---|
| 2026-06-05 | MCAT Reading Strategy | 05 CARS strategy | Located |
| 2026-06-05 | Electron energy, electric potential, and sign conventions | 01 physics and chemistry | Located |
| 2026-06-09 | Repository workflow and source-bundle updates | 06 GitHub workflow | Located |
| 2026-06-10 | Study Schedule and Inventory | 05 and 06 | Located |
| 2026-06-20 | AAMC FL Review Time | 05 review strategy | Located |
| 2026-06-20 | UWorld Test 5 Psych/Soc Q1-10 review | 04 and 05 | Located |
| 2026-06-22 | Lecture to Mindmap | 06 map production | Located |
| 2026-06-26 | API Key Setup Guide | 06 workflow | Needs Recheck |
| 2026-06-27 | Agrarian Myth Clarification | 05 CARS syntax | Located |
| 2026-06-28 | Peptide Hydrolysis Mechanism | 02 biochemistry | Located |
| 2026-06-28 | Photoelectric Effect card repair | 01 physics | Located |
| 2026-06-29 | Alpha-helix hydrogen bonding card repair | 02 biochemistry | Located |

### July 1-11, 2026

| Date | Conversation | Primary destination | State |
|---|---|---|---|
| 2026-07-03 | MCAT Morning Review | all content shards | Located |
| 2026-07-03 | UWorld Review Summary | 05 strategy | Located |
| 2026-07-04 | Binding Energy and Stability | 01 chemistry and 02 biochemistry | Located |
| 2026-07-05 | MCAT Nervous System Mindmap | 03 nervous system | Located |
| 2026-07-05 | Nervous System Map Plan | 03 nervous system and 06 Figma | Located |
| 2026-07-05 | Whimsical Integration Setup | 03 and 06 | Located |
| 2026-07-05 | Whimsical Fluid Mosaic Mind Map | 02 cell biology | Located |
| 2026-07-05 | Whimsical Social Psychology Mind Maps | 04 social psychology | Located |
| 2026-07-05 | MCAT Mind Map Plan | 01 physics with biology cross-links | Located |
| 2026-07-06 | GPCR Function Explanation | 02 cell signaling and 03 nervous system | Located |
| 2026-07-06 | GPCR Pathways MCAT | 02 cell signaling and 01 organic chemistry | Located |
| 2026-07-06 | Myogenic Activity Explained | 03 cardiovascular | Located |
| 2026-07-06 | Passage Review Request | 05 passage review | Located |
| 2026-07-08 | Nucleophilicity of Amino Acids | 02 proteins and 01 organic chemistry | Located |
| 2026-07-08 | Glycosides and MCAT Relevance | 02 carbohydrates | Located |
| 2026-07-08 | Heroin as an Opiate | 04 and 03 nervous system | Located |
| 2026-07-09 | Glycogen Branching and Solubility | 02 metabolism | Located |
| 2026-07-10 | Chemistry Answer Analysis | 01 general chemistry | Located |
| 2026-07-11 | Aldonic Acid MCAT Connection | 02 carbohydrates and 01 oxidation | Located |
| 2026-07-11 | MCAT Age Timeline Concept | 04 development | Located |
| 2026-07-11 | MCAT Diagram Bold Review | 06 visual grammar | Located |

## 9. Known recurring confusion clusters to prioritize

These are early cross-chat clusters. They are routing anchors, not yet the complete extracted content.

### Negative signs and directionality

- energy level versus electric potential versus reduction potential
- negative energy in physics versus chemistry versus biochemistry
- work, potential energy, voltage, charge, and spontaneity
- oxidation state versus formal charge versus actual elemental form

### Similar names but different categories

- amphoteric or amphiprotic versus amphipathic
- epimer versus enantiomer versus diastereomer
- reducing versus nonreducing sugar ends
- persuasion versus influence
- syncretism versus amalgamation
- sensation versus perception
- sensory adaptation versus habituation
- GPCR versus ligand-gated ion channel
- transporter versus channel versus carrier versus pump versus receptor

### Mechanism and causality gaps

- what actually makes a leaving group leave in SN1
- why polar protic solvent helps SN1
- peptide-bond hydrolysis sequence and protonation assumptions
- how glycogen branching changes solubility and accessibility
- what glucose-6-phosphatase does in liver glycogenolysis versus gluconeogenesis
- why free glucose can leave while glucose-6-phosphate cannot
- why alpha helices use intrachain hydrogen bonding

### Structure-to-function maps

- membrane-protein jobs and subtypes
- GPCR function across neuronal and non-neuronal signaling
- nervous-system biology backbone plus psychology overlay
- malate-aspartate shuttle with persistent molecule identities
- amino-acid nucleophiles and when they react
- heterocycle names: pyrrolidine, guanidinium, imidazole, indole, pyrrole

### Quantitative and experimental reasoning

- electron moles, elementary charge, and `Q = ne`
- voltage, wattage, amperage, and why a low-power bank may fail to charge a laptop
- photoelectric-effect frequency versus intensity
- Planck constant exponent memory
- graph, table, and passage jargon intimidation
- shorter calculation routes versus long explanation routes

### CARS execution

- no primary skimming strategy
- hop-and-return without losing the initial passage anchor
- answer-choice thesis triangulation without previewing every question stem
- grammar structure outranking unreliable punctuation
- preserving the original pattern for least-expected and most-expected questions
- minimal whiteboard: skips, return questions, and one-phrase anchors

## 10. Attached source-pool manifest

| Source | Structural metadata | Intended use | Repository rule |
|---|---|---|---|
| HyperTTS - Add speech to your flashcards - AnkiWeb | 59 pages; created 2026-04-25 | Verify the HyperTTS setup and audio-template workflow discussed in chat | Store only original setup notes and configuration summaries |
| Anki Manual | 112 landscape pages; created 2026-04-15 | Verify settings, scheduling, filtered decks, media, and template behavior | Store only paraphrased workflow guidance |
| Captain Hook Organic Chemistry PDF export | 309 cards; 31 pages; created 2026-05-16 | Bounded card-reference pool for Foundational Sciences shard | Do not commit the deck or bulk card text |
| Mr. Pankow P/S PDF export | 2,254 cards; 189 pages; created 2026-05-16 | Bounded card-reference pool for Behavioral Sciences shard | Do not commit the deck or bulk card text |

Canonical private archive path remains:

```text
~/Desktop/mcat/ipad anki/
```

## 11. Resumption checkpoint protocol

At the end of every working pass:

1. Commit the bounded shard or shard section.
2. Update each processed chat from `Located` to `Mapped` only after all substantive records are routed.
3. Record the last fully processed conversation title and date.
4. List partially processed chats under `Open extraction queue`.
5. List all factual uncertainties under `Verification queue`.
6. Never rely on an uncommitted chat summary as the only copy of completed work.
7. On a new context window, resume from the first item in the open queue rather than repeating completed extraction.

## 12. Open extraction queue after Part 1

1. Foundational Sciences: General Chemistry Review, Planck's Constant Memorization, Electricity Concepts Visualized, Waves and Sound, isomer maps, Organic Chemistry Anki Cards, June and July card repairs.
2. Biochemistry and Cell: metabolism map, peptide hydrolysis, alpha helix, sugars, membrane proteins, GPCRs, malate-aspartate shuttle, amino-acid nucleophiles.
3. Biological Systems: innate immunity, nervous-system map suite, glycogen and liver metabolism, myogenic activity, debranching enzyme, organ-system questions from July reviews.
4. Behavioral Sciences: Pankow Review, social-psychology hierarchy, age timeline, opiates and consciousness, July terminology distinctions.
5. Reasoning and Strategy: all UWorld autopsies, CARS strategy chats, sign conventions, math and passage-intimidation patterns.
6. Anki and Production: HyperTTS, scheduling, remote, PDF export, source routing, GitHub, and Figma/Whimsical/Draw.io visual rules.

## 13. Part 1 acceptance criteria

Part 1 is accepted when:

- the shard architecture matches the user's intended review workflow
- the completion states prevent false claims of exhaustive extraction
- located conversation titles are routed to a destination
- attached PDFs have clear bounded roles
- the node, edge, and LearningRecord schemas are sufficient for later content passes
- token-exhaustion recovery does not require reconstructing completed work

After acceptance, Part 2 begins with Foundational Sciences.
