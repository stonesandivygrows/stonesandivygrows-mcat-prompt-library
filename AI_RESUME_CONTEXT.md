# AI Resume Context — MCAT Study System

Last updated: 2026-07-21

This is the canonical handoff file for any AI model, agent, or collaborator resuming this MCAT project.

Read this file before creating new study guides, notes, decks, maps, scripts, or review documents.

---

## 1. Core purpose of the project

The student is preparing for the MCAT and has accumulated a very large amount of material across chats, Anki, AAMC full-length reviews, UWorld exports, Kaplan books, Goodnotes, Whimsical, Google Drive, Dropbox, and GitHub.

The central problem is no longer lack of study material. It is fragmentation, generic summaries, and difficulty turning question review into a repeatable test-day method.

The project must reduce all active studying to **three destinations only**:

1. **Goodnotes** — understand, rewrite, redo, and study worked examples
2. **Anki** — memorize facts and automatic strategy triggers
3. **Whimsical** — visualize relationships and connections that are not sticking

GitHub is the durable backend/archive and handoff layer. It is **not** intended to become a fourth place the student must open in order to study.

---

## 2. Non-negotiable three-place study system

### Goodnotes

Goodnotes is the main learning and application destination.

The intended permanent Goodnotes structure is:

- **STEM Passage Operating System**
  - passage archetypes
  - evidence-location rules
  - question types
  - figure/table interpretation
  - experiment decoding
  - distractor taxonomy
  - calculation shortcuts
  - timing and rescue protocols
  - recurring personal error patterns
- **AAMC Full-Length Learning Notebook**
  - FL1
  - Unscored
  - FL3
  - FL4
  - later exams
- **Content Rewrite Notebook**
  - difficult units
  - pathways
  - equation families
  - mechanisms
  - topics the student wants to rewrite by hand

A separate disconnected “common traps” notebook is usually not helpful. Common traps should live inside the STEM Passage Operating System and be linked to real question examples.

### Anki

Anki is only for information or triggers that must become automatic.

The durable layers are:

- existing Aiden content cards
- `Aiden::MCAT Strategy`
- `Aiden::AAMC Applications`
- MCATalyst equation recall
- MCATalyst equation-recognition cues
- MCATalyst proportional shortcuts
- MCATalyst common traps

Do not turn long explanations into Anki cards. A Goodnotes explanation should become one concise retrieval trigger in Anki.

### Whimsical

Whimsical is only for relational learning, such as:

- pathways
- feedback loops
- hierarchies
- comparison maps
- experimental variable relationships
- equation-family relationships
- multi-level biology connections
- concepts the student repeatedly says feel disconnected

Do not create a new board for every question or passage. Link a passage to an existing map when possible. Add a new node or mini-map only when the difficulty is genuinely relational.

---

## 3. Main learning bottleneck

The student’s major insight is that the science sections are not literally “all CARS,” but they require the same broad skill of **finding and using the right information under time pressure**.

Many misses occur because the student:

- does not see the sentence, figure, comparison, or variable the test writer used
- becomes overwhelmed by passage detail
- reads too much indiscriminately
- solves more math than necessary
- interprets the wrong experimental layer
- chooses a true statement that does not answer the question
- makes an execution mistake despite knowing the content

The project should therefore teach two games at once:

1. **content knowledge**
2. **information extraction and attention allocation**

The student wants science to feel as predictable as CARS began to feel after recognizing recurring question and passage patterns.

---

## 4. Current project objective

Build high-quality, exam-specific learning guides that teach:

- what the passage is doing
- what each question type is
- where the answer evidence is located
- how to find that evidence quickly
- what information was unnecessary
- how the correct answer is deduced
- what each incorrect answer choice is doing
- what shortcut can be used
- why the shortcut works
- what strategy failed
- what replacement strategy should be memorized
- how the question connects to past chats, Aiden, MCATalyst, and Whimsical
- how long the passage or question should take
- what to do when lost or overwhelmed

This should be built from **correct questions as well as incorrect questions**. Correct questions often reveal the cleanest recognition cue or shortest method.

---

## 5. Permanent passage-study packet specification

Every passage should appear once, followed by all of its questions.

### Passage header

Include:

- exam
- section
- passage number
- question numbers
- passage archetype
- target start timer
- target leave timer
- actual time if available
- recurring weaknesses activated

### Embedded source material

Include:

- passage image or readable passage text
- all relevant figures, tables, schemes, graphs, gels, spectra, or diagrams
- enough context to study without repeatedly switching back to the export

Do not embed the same passage once per question.

### Passage architecture

Label the role of each paragraph or section, for example:

- setup/background
- accepted mechanism
- problem or knowledge gap
- hypothesis
- experiment
- results
- interpretation
- limitation

### Attention map

State explicitly:

- what deserved attention
- what could safely be deferred
- which terms or numbers were decorative unless a question named them
- which figure or sentence controlled later questions

### Per-question learning entry

Every question must include:

1. full question stem
2. all answer choices
3. correct answer
4. user’s answer when known
5. result and time
6. question type
7. exact evidence source
8. evidence-search method
9. minimum sufficient information
10. deduction chain
11. correct-answer type
12. distractor audit for every wrong choice
13. explicit shortcut
14. explanation of why the shortcut works
15. failed strategy
16. replacement strategy
17. personal recurring-error link
18. Aiden destination
19. MCATalyst destination when relevant
20. Whimsical destination when relevant
21. Goodnotes rewrite destination
22. Cornell-style note and problem-solving space

### Important quality rule for shortcuts

Never write only:

- “use proportionality”
- “use arithmetic”
- “look at the figure”
- “use passage evidence”
- “apply the equation”

The shortcut must show the actual operation.

Examples:

- identify that doubling the numerator doubles the answer while the denominator is unchanged
- show the exact ratio before inserting numbers
- state which units eliminate which options
- identify the two bars or curves that must be compared
- explain that only the y-axis variable changes while protein abundance remains constant
- state why pH versus pKa is enough and Henderson–Hasselbalch is unnecessary
- trace the labeled atom instead of redrawing the entire mechanism

If full math is required, show the substitution and unit conversion. If estimation is enough, show the estimation.

---

## 6. Spoiler-safe design

The student wants to redo exams without spoilers.

Use three separate layers:

### Redo packet

- passage/questions
- figures
- answer choices
- timing space
- reasoning space
- no correct-answer markers
- no explanations

### Learning guide

- all answers and explanations
- all strategy analysis
- all personal connections

### Answer key

- separate letters-only key
- ideally stored as a different file or appendix that can remain closed

Do not mark the correct answer directly in the redo packet.

---

## 7. Science passage operating system

The science system should classify passages and questions before solving.

### Common B/B structure

A frequent progression is:

1. biological system or normal mechanism
2. mutation, disease, drug, or unresolved problem
3. hypothesis
4. experiment
5. results
6. interpretation or limitation

### Common C/P structures

- physical system with quantities
- experimental chemistry setup
- synthetic reaction sequence
- spectroscopy/separation passage
- electrochemical or thermodynamic system
- biological device governed by a physics principle

### Common P/S structures

- theory → hypothesis → study → result
- demographic comparison
- intervention/control study
- competing theories
- definition-heavy passage
- graph/table interpretation

### Core science question types

- content-independent discrete
- explicit passage retrieval
- experimental design
- figure/table interpretation
- mechanism/pathway
- prediction
- calculation
- proportional relationship
- structure identification
- limitation
- additional experiment

### Evidence-location defaults

- hypothesis: sentence before “to determine,” “to test,” or “researchers investigated”
- independent variable: difference between treatment groups
- dependent variable: measured outcome or y-axis
- control: group lacking the manipulated factor
- conclusion: final results/discussion sentence
- figure trend: axes, legend, then only the named groups
- calculation: values in the stem first; passage only for missing information
- mutation effect: normal function sentence plus altered residue/domain

These are defaults, not absolute rules. Every claimed pattern must be checked against real AAMC examples.

---

## 8. Distractor taxonomy

Every wrong answer should be classified when possible.

Core categories:

- true but irrelevant
- right variable, wrong direction
- right relationship, wrong comparison
- passage-language camouflage
- outside-knowledge override
- cause/effect reversal
- correlation promoted to causation
- wrong experimental layer
- equation reciprocal/exponent/sign/unit trap
- extreme wording
- answer to a nearby question
- ignores one condition in the stem
- content fact applied to the wrong mechanism

Do not assign generic distractor labels without reading the actual explanation and answer choice.

---

## 9. CARS version requirements

The CARS guides must be as specific and useful as the science guides.

For every passage include:

- passage image or full readable text
- paragraph map
- main idea / author stance
- key contrast
- tone words
- final-paragraph role
- question list
- timing target
- passage-level Cornell notes space

For every question include:

- full stem and choices
- result/time
- AAMC skill category when available
- practical question type
- exact evidence location
- why that location is relevant
- correct-answer reasoning
- distractor type for each wrong choice
- strategy that worked
- strategy that failed
- what to do if lost
- question-level Cornell notes space

Useful CARS question classes include:

- main idea
- detail
- inference
- definition in context
- function
- author agreement
- tone
- strengthen/weaken within the passage
- application or analogy beyond the passage

Do not use a single generic trap pattern for all CARS questions.

### Student’s current CARS rules

- skimming is not the default method
- first 1–2 sentences often establish an anchor
- preview only for location signals, not for solving from the stem
- track subject–verb–object and contrasts such as “not X but Y”
- hop-and-return is allowed
- the final paragraph often contains a conclusion, limitation, or author stance, but this is not an absolute 99% rule
- user prefers start times rather than end times

---

## 10. Timing preferences

### CARS

- total time: 90 minutes
- 9 passages
- student plans around a desired 10-minute return buffer, though actual buffer is often 4–5 minutes
- prefers **start-time checkpoints**, not average-per-passage language
- wants time to revisit approximately 3–4 questions

### Science sections

- total time: 95 minutes
- 59 questions
- 10 passages plus 15 discretes
- student wants approximately 10 minutes protected for return/checking
- timing guides should distinguish passage blocks from discrete clusters
- record the reason for overruns:
  - rereading
  - figure confusion
  - unnecessary math
  - content gap
  - indecision
  - failure to locate evidence
  - annotation overload

The student is left-handed and prefers work space on the right side of a printable page when possible.

---

## 11. Personal learning preferences

- Last-two-weeks MCAT focus: prioritize high-yield, actionable improvement.
- Explain every misconception, including correct answers reached for the wrong reason.
- The student becomes overwhelmed by excessive disconnected material.
- Prefer concise “SB Notes” style when a short explanation is sufficient: explanation + example + shortcut.
- However, concise must not become generic.
- Verdana is preferred for printable notes.
- Cornell-style layouts are useful.
- Goodnotes is used for writing and reworking.
- Anki PDFs and printed review sheets have been easier than a crowded app interface.
- Important terms should be bolded in visual maps.
- Do not create hundreds of new files when a running document can be updated.

---

## 12. Source hierarchy

Use sources for different purposes:

1. **AAMC** — controlling answer logic and test-maker method
2. **Kaplan** — organized prerequisite content and conventional terminology
3. **UWorld** — application, transfer, and detailed misconception repair
4. **Aiden deck** — memorization layer
5. **MCATalyst** — equations, units, recognition cues, proportional shortcuts
6. **Past chats/reviews** — personal recurring mistakes and strategy history
7. **Whimsical** — relational/visual reinforcement

Do not let a generic content source override the specific evidence in an AAMC passage.

Relevant source inventories include the MCATalyst equations document, Kaplan-to-UWorld key, UWorld subject PDFs, Kaplan subject books, AAMC frequency categorization, and the CARS review books. The MCATalyst source includes constants, unit prefixes, units, conversions, equations, and color-coded memorization priority. The Kaplan-to-UWorld key maps Kaplan chapters to UWorld sections. These should be used as cross-references rather than pasted wholesale.

---

## 13. Source locations

### Google Drive folders

- MCAT folder: `https://drive.google.com/drive/folders/1C9uvPhIHbDXiHQRp6Vd1Sy2eDy82yaYu`
- Context folder: `https://drive.google.com/drive/folders/16Z7Q1JCWPKclEhsSBx9nvkaBrv3iMvnO`
- Obsidian/Aiden source folder used in recent work: `https://drive.google.com/drive/folders/1BazrioybsSKM_zIemN4ehc2N79IRSbO6?usp=sharing`
- UWorld transcription folders:
  - `https://drive.google.com/drive/folders/1ftfT4B27BtSFhZ0EAaBN3kF6pgs6LGdp`
  - `https://drive.google.com/drive/folders/1y9dbT61RzWs-LSWQGQv9Ju6_JDfYtnzP`

### Important files

- `MCAT Schedule and Resources.xlsx`
- `Copy of MCATalyst MCAT Equations (Color Coordinated)`
- `Kaplan to UWorld Key.pdf`
- `UWorld MCAT Biochemistry.pdf`
- `UWorld MCAT Chemistry.pdf`
- `UWorld MCAT Organic Chemistry.pdf`
- `UWorld MCAT Physics.pdf`
- `UWorld MCAT CARS.pdf`
- `UWorld MCAT Behavioral.pdf`
- `UWorld MCAT Biology.pdf`
- `AAMC FL Q's Categorized by Frequency of Appearance`
- Kaplan CARS, Biochemistry, General Chemistry, Organic Chemistry, Behavioral Sciences, Biology, and Physics books
- `Copy of MCATalyst Full MCAT Content Document`

### AAMC exports used in the current project

- FL1 HTML export
- Unscored 230-question PDF export
- FL3 230-question PDF export
- FL4 export

Do not assume a local sandbox file will still exist in a future session. GitHub records and Drive links are durable; sandbox links are not.

---

## 14. Existing GitHub architecture

Repository:

`stonesandivygrows/stonesandivygrows-mcat-prompt-library`

Canonical consolidation file:

- `running-documents/mcat-running-review-and-notes-master.md`

Existing AAMC records:

- `practice-review/aamc/fl1/2026-07-18__AAMC_FL1__Aiden_MCATalyst_Coverage_Record.md`
- `practice-review/aamc/unscored/2026-07-18__AAMC_Unscored_FL__Processing_Plan.md`
- `practice-review/aamc/fl3/2026-07-18__AAMC_FL3__Aiden_MCATalyst_Processing_Record.md`

Useful CARS paths already listed in the repository README:

- `cars/01-strategy-garden/cars-operating-system-and-decision-tree.md`
- `cars/01-strategy-garden/question-stem-translations-and-boundaries.md`
- `cars/01-strategy-garden/syntax-proper-nouns-quotes-and-punctuation-protocol.md`
- `cars/04-passage-autopsies/question-by-question-game-tape-template.md`
- `cars/strategy/syntax-interruption-and-targeted-reread-protocol.md`

Mind-map architecture index:

- `study-notes/mcat-mind-maps/00-anki-project-chat-coverage-and-map-architecture.md`

Default repository rule:

- append new learning to running documents
- create standalone files only for reusable templates, scripts, major finished guides, printable exports, or archives

---

## 15. Status of prior generated guides

Several large Goodnotes/Cornell guides were generated in chat for FL1, Unscored, FL3, FL4, science, and CARS.

The student has now explicitly judged the content quality as poor.

Therefore:

- do **not** treat those generated files as canonical learning guides
- do **not** copy their generic explanations forward
- do **not** assume their shortcut or distractor classifications are accurate
- use them only as layout prototypes, if useful

Known quality failures included:

- generic “use proportionality” language
- generic “look at the figure” language
- generic answer-choice labels not tied to the actual options
- generic CARS distractor patterns reused across questions
- insufficient exact evidence location
- incomplete personalized links to past chats and weak areas
- some missing or unreliable figure embedding
- too much automated templating and not enough question-specific reasoning

The next model should rebuild from verified source material, starting with a pilot rather than regenerating hundreds of pages blindly.

---

## 16. Aiden and MCATalyst update plan

### Aiden::MCAT Strategy

Organize by reusable operations:

- passage navigation
- evidence location
- experimental design
- figures and tables
- distractors
- calculations
- timing
- lost/overwhelmed protocol

### Aiden::AAMC Applications

Organize by exam and section:

- FL1
- Unscored
- FL3
- FL4
  - C/P
  - B/B
  - P/S
  - CARS only if the user decides strategy cards are worth adding

Application cards must teach a transferable rule, not memorize an answer letter.

### MCATalyst

Every equation family should eventually have:

1. equation recall
2. recognition cue
3. proportional shortcut
4. common trap
5. linked AAMC/UWorld examples

Example structure:

- equation: `Q = Av`
- recognition cue: area and speed are given; asked for volume per time
- shortcut: doubling area at constant speed doubles flow rate
- traps: confusing flow rate with speed, using circumference instead of area, missing unit conversion

---

## 17. Personal error index

Do not paste entire old chats into each question entry.

Create durable error IDs such as:

- `CP-DILUTION-01`
- `CP-ACIDBASE-03`
- `CP-FIGURE-02`
- `BB-PATHWAY-04`
- `BB-EXPERIMENT-01`
- `PS-CONSTRUCT-03`
- `GLOBAL-OVERREADING-01`
- `GLOBAL-CALCULATION-02`

Each error entry should include:

- recurring issue
- past appearances
- replacement rule
- linked Aiden cards
- linked Whimsical map
- linked AAMC/UWorld examples

Questions should link to the error ID instead of duplicating the full history.

Recurring known weaknesses include:

- dilution and concentration reasoning
- acid/base classification and pKa logic
- formal charge and metal/Lewis-acid reasoning
- thermodynamics and sign conventions
- gases and pressure
- electrochemistry
- optics/waves
- spectroscopy and separation methods
- enzyme inhibition and graph interpretation
- membrane transport
- mitochondrial potential and metabolism
- buffers
- experimental design and variables
- reading the wrong level of a figure
- unnecessary long calculations

---

## 18. Required workflow for rebuilding the guides

### Step 1 — Verify sources

Confirm the exact source export for the exam and whether passage images, figures, answer choices, explanations, timing, and the user’s selected answers are available.

### Step 2 — Build one pilot passage

Before generating a complete exam guide, create one fully developed passage packet containing:

- passage/figures
- passage architecture
- all questions
- exact evidence
- explicit shortcuts
- answer-choice audits
- personal links
- timing
- Cornell space

Use FL4 first because it is the exam the student was actively reviewing during this project.

### Step 3 — User quality approval

Do not batch the remaining passages until the pilot’s content depth and format are approved.

### Step 4 — Batch with audits

For each batch:

- verify question count
- verify answer letters
- verify all choices
- verify each explanation against AAMC
- check every claimed shortcut
- inspect rendered pages
- track unresolved items rather than guessing

### Step 5 — Publish to the three destinations

- Goodnotes: full guide
- Anki: concise cards only
- Whimsical: targeted visual updates only

### Step 6 — Record progress in GitHub

Update the running master and the relevant AAMC record. Do not create unnecessary one-off files.

---

## 19. Resume checklist for another AI model

Before doing any substantive work, confirm:

- [ ] I read `AI_RESUME_CONTEXT.md`.
- [ ] I read `README.md` and the running master.
- [ ] I identified the exact exam/source export.
- [ ] I am not treating the prior generic Cornell guides as canonical.
- [ ] I will use correct questions as learning examples too.
- [ ] I will include all answer choices.
- [ ] I will explain shortcuts concretely.
- [ ] I will keep redo materials spoiler-safe.
- [ ] I will link to past errors, Aiden, MCATalyst, and Whimsical only when the connection is real.
- [ ] I will pilot one passage before mass generation.
- [ ] I will preserve the three-place study system.
- [ ] I will update GitHub as a backend, not create a fourth study destination.

---

## 20. Immediate next task

The next recommended task is:

> Rebuild one FL4 passage packet from the original source at genuinely high quality, using the permanent passage-study specification above. Include exact passage/figure evidence, all answer choices, question-specific distractor analysis, explicit shortcut math or logic, personalized historical links, timing, and Cornell note space. Present it as a pilot for approval before rebuilding the rest of FL4 or the other exams.

Do not begin by regenerating all four exams.

---

## 21. Trust and verification rules

- Never claim a file was opened if only its filename was visible.
- Never claim a GitHub update unless the write action succeeded.
- Never invent an Aiden card, question ID, passage quote, board title, or source location.
- Distinguish exact source cards from newly written bridge/application cards.
- Distinguish verified evidence from inferred strategy.
- Mark unresolved mappings instead of forcing a weak match.
- Do not replace exact AAMC reasoning with generic test-prep language.
- When the student’s reasoning is correct for the wrong reason, explain both the correct conclusion and the flawed reasoning.
