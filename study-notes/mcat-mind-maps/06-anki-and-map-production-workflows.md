# MCAT Mind Maps from Anki Project Chats: Anki and Map-Production Workflows

**Status:** Mapped from Anki, HyperTTS, PDF-export, source-routing, and visual-production chats  
**Part:** 7 of 7 content shards; final cross-link audit remains  
**Covers:** Anki review, scheduling, audio, remotes, PDF exports, source hierarchy, GitHub, running documents, visual grammar, and resumable production

## 1. System architecture

    PRIVATE SOURCE ARCHIVE
    ├── Anki exports
    ├── Kaplan and UWorld reference sources
    ├── audio and transcripts
    └── screenshots and full copyrighted documents

    KNOWLEDGE AND WORKFLOW LAYER
    ├── bounded card extraction
    ├── corrections and traps
    ├── concept registry
    ├── labeled relationships
    └── Markdown source of truth

    REVIEW LAYER
    ├── timed questions
    ├── printed active recall
    ├── capped Anki app
    ├── audio reinforcement
    └── rescue mind maps

    VISUAL RENDERERS
    ├── Figma
    ├── Whimsical
    ├── Draw.io
    ├── interactive HTML/Cytoscape
    └── printable PDF/PPTX

The renderer is not the knowledge base. The Markdown concept registry and source rules must exist first.

## 2. Artifact creation is not review

The project repeatedly produced:

- exports
- scripts
- prompts
- diagrams
- transcripts
- audio
- dashboards

These artifacts support learning but do not prove learning.

Review is counted only after:

1. cue is attempted without the answer
2. uncertainty is marked
3. explanation is repaired
4. item is retested
5. the user can explain the error and reject the distractor
6. delayed retrieval succeeds

Creating an Anki PDF does not count as reviewing the cards.

## 3. Printed Anki active-recall workflow

The PDF exporter is the user's lowest-friction review medium when the app becomes overwhelming.

### Core loop

    cover answer
    → produce answer aloud
    → reveal
    → mark
    → redo uncertain/missed cards

Marking system:

- ✓ or Known
- ? or Slow/Fuzzy
- X or Missed/Confused
- Trap
- Gap

### Timing rule

- Definition/recognition cards: allow about 2-3 seconds for automatic retrieval.
- Calculation/equation cards: allow about 5-8 seconds for setup.
- If automatic, move on.
- If hesitant, answer aloud and inspect the reason.
- Deep review only Slow/Fuzzy/Trap/Gap cards.

### Backward-review rule

Start from the highest numbered card and move down:

    470.1 → 470 → 469 → 468

Reason:

- avoids repeatedly exhausting attention on the beginning of the deck
- increases coverage of neglected later cards
- reduces perfectionism

## 4. UWorld-first repair routing

Do not broadly scroll Anki PDFs before question practice.

Preferred flow:

    UWorld or AAMC question
    → miss or hesitation
    → one-line concept label
    → targeted Anki PDF repair
    → small retest
    → delayed retrieval

The PDF is a reference and retrieval layer, not a reason to postpone passage practice.

## 5. Capped Anki-app use

Anki may be used, but it must not consume the entire study day.

Rules:

- cap the daily card target
- prioritize current weak-topic cards
- do not attempt to clear a massive backlog in one day
- allow alternative retrieval media: paper, iPad, physical cards, posters, sticky notes
- do not force MCATalyst material into Anki when another medium works better

## 6. Anki scheduling and button logic

### User-requested setup

- New steps: 3m 10m 1d 10d
- Relearning: 3m 10m 1d 2d
- Graduating interval: 10 days
- Easy interval: 10 days

### Cleaned recommendation recorded later

- New steps: 3m 10m 1d 2d
- Graduating interval: 3 days
- Easy interval: 10 days
- Relearning: 3m 10m 1d 2d
- Minimum interval: 2 days

Button meanings:

- Again returns to the first learning/relearning step.
- Good advances through the steps.
- Easy exits learning to the easy interval.
- Hard is calculated between the current and next step and cannot always be forced to one exact desired value.

Do not change scheduling repeatedly to make the visible buttons cosmetically match a plan. The schedule must support retrieval.

## 7. Filtered decks

Key behaviors:

- A filtered deck is a snapshot and may need **Rebuild**.
- One card can belong to only one filtered deck at a time.
- Overlapping filters can “steal” cards from each other.
- Use precise search syntax and nonoverlapping boundaries.
- Emptying a filtered deck returns cards to their home decks.
- Rebuilding re-runs the search.

Use filtered decks for bounded weak-topic or review-range work, not as permanent duplicate storage.

## 8. Remote-control workflow

Preferred Stouchi mapping:

| Button | Anki action |
|---|---|
| O | Show Answer |
| 1 | Again |
| 2 | Hard |
| 3 | Good |
| 4 | Easy |

Optional speed emphasis:

- Keep Good on the easiest button to hit.
- Auto Advance may move to the next card after rating.

Troubleshooting order:

1. Put remote into keyboard/iOS mode.
2. Turn off conflicting iPhone Accessibility controls: AssistiveTouch, Switch Control, Full Keyboard Access, Voice Control, and Pointer controls.
3. Forget and re-pair Bluetooth.
4. Test buttons in Notes.
5. Map inside Anki Preferences → Review → Gamepads.
6. Test in a small deck before a long session.

## 9. Cornell-style PDF exporter

Purpose:

- printable cue-and-notes review sheet
- low-friction active recall
- not a replacement for spaced repetition

### Field routing

Cue/front side may include:

- Header
- Front
- Question
- Text, only when it is the actual prompt and not a duplicate
- prompt image

Answer/notes side may include:

- Back
- Extra
- Back Extra
- Remarks
- Sources
- Extra fields only when useful

Turn off:

- note IDs
- AnkiHub IDs
- duplicated question fields
- audio filenames/tags in the printable output
- footer or original-mask fields unless needed

### One-sided cue rule

If the question repeats or stacks:

- keep only the real cue field active on the front
- use Fields as the source
- keep grid on
- turn cue labels off
- test Legacy HTML when modern preview stacks content incorrectly

Always test a small page range before exporting hundreds of cards.

## 10. HyperTTS versus Anki's native template TTS

### HyperTTS

- Desktop Anki add-on.
- Generates actual MP3 files stored in Anki media.
- Inserts sound references such as [sound:hypertts-...mp3].
- Generated media can sync to AnkiMobile.
- The add-on itself does not run on iOS.

### Native template TTS

- Uses template syntax and device voices during review.
- Voice names must match the output from the available-voices template.
- Example pattern: tts language/voice parameters followed by the exact field name.

Do not confuse a generated media field with a native TTS template instruction.

## 11. HyperTTS free-service setup

The supplied HyperTTS source confirms that the add-on is free and includes free services, while some premium voices require subscription, credits, or API keys.

Workflow:

1. Install HyperTTS on Anki desktop.
2. Open Services Configuration.
3. Enable the desired free services.
4. Choose a voice and preview it.
5. Test on a few cards.
6. Save a preset.
7. Run a small batch before a large deck.
8. Sync media after generation.

Avoid generating an entire deck before checking:

- pronunciation
- field source
- answer leakage
- file placement
- sync behavior
- whether old custom audio would be overwritten

## 12. HyperTTS field mappings

### Cloze note type

Preferred:

    source = Text
    destination = Text Audio

Place the Text Audio field on the back template after a line break.

Reason:

- Front audio can reveal the cloze answer or read hidden text awkwardly.
- Back audio reinforces the completed statement after retrieval.

### Basic front/back note type

Options:

- Front → Front Audio
- Back → Back Audio

Or create one Advanced Template source that speaks:

    Question: Front content
    Answer: Back content

Store it in one Audio destination field and play it after the answer appears.

### Formatting preference

- Preserve the premade deck's bolding and other useful formatting.
- Use Verdana for the user's preferred review appearance.
- Insert a line break before the audio control/tag so it appears beneath the text it reads.

## 13. Audio spoiler and placement rules

- Do not read the answer on the question side.
- Front audio may read only the cue when it does not spoil the answer.
- Back audio may read cue plus answer after the flip.
- Cloze audio should usually wait until the answer side unless configured to read only visible non-clozed text.
- Pronunciation of symbols and equations should be converted into natural spoken language.
- Say “M C A T” letter by letter in generated audio.

## 14. Media sync

After generating HyperTTS audio:

1. Confirm MP3 files appear in the desktop collection media.
2. Run Anki sync and allow media sync to finish.
3. Open AnkiMobile and sync.
4. Test several notes on mobile.

If audio appears on desktop but not mobile, inspect media sync before rebuilding templates.

Do not delete or bulk-regenerate audio without a backup.

## 15. Native iOS voice-template workflow

To configure native TTS:

1. Temporarily place the available-voices command on a test template.
2. Copy the exact voice name shown by the device.
3. Use the voice name with the correct field.
4. Remember field names are case sensitive.
5. Test front and back separately.

Platform voice names and parsing can change. Exact syntax should be tested on one card after iOS/Anki updates.

## 16. Source archive and extraction boundary

Canonical local archive:

    ~/Desktop/mcat/ipad anki/

Recommended structure:

    00_manifest.md
    01_html_exports/
    02_plain_text_exports/
    03_pdf_exports/
    99_legacy_or_test_exports/

Large exports are reference pools.

Do not:

- paste an entire deck into Notion
- create one database item per source PDF
- commit full commercial decks to GitHub
- duplicate thousands of cards across chapters

Instead:

1. Define exact Kaplan chapter/topic.
2. Locate relevant deck section.
3. Extract only matching high-yield cards.
4. Remove duplicates and malformed cards.
5. Verify with Kaplan/Khan and UWorld.
6. Place targeted cards in the chapter's High-Yield Flashcard Review Layer.

## 17. Source authority

| Source | Role |
|---|---|
| Current user-edited note | Protected working structure |
| Anki deck/card group | Primary student-language recall basis |
| Kaplan | Science hierarchy, correction, and gap fill |
| Khan Academy | Behavioral-science hierarchy, correction, and gap fill |
| UWorld | Application, experiments, and traps |
| AAMC | Coverage validation |
| GitHub | Versioned Markdown and workflow storage |
| Obsidian/Cursor | Local editing and preview |
| Figma/Whimsical/Draw.io | Visual rendering |

No source should silently overwrite the newest user-edited note.

## 18. Topic-specific source bundles

One work batch should contain:

- one current topic note
- relevant Anki card group/pages
- relevant Kaplan or Khan section
- optional UWorld application/trap source
- optional AAMC coverage reference
- previous reviewed version if applicable

Avoid loading every PDF for every task. That increases skipped cards, duplicates, retrieval errors, format drift, and overwrite risk.

## 19. Repository boundary

GitHub may store:

- original mind-map specifications
- paraphrased explanations
- user-created corrections and analogies
- source manifests
- mapping tables
- prompts
- extraction scripts
- quality-control procedures
- empty templates

GitHub must not store:

- complete commercial textbooks
- complete UWorld books/explanations
- large verbatim excerpts
- redistributed deck exports without permission
- private raw audio/screenshots when an index is sufficient

## 20. Running-document consolidation

Current repository policy prefers dated entries in running documents for ordinary study notes.

Standalone files are reserved for:

- major finished guides
- reusable prompts
- scripts and templates
- printable exports
- large archive/source references
- this multi-shard project-wide mind-map architecture

Subject shards are justified here because each is a major finished reference and the master index ties them together.

## 21. Knowledge-graph data model

### One canonical concept node

Each concept has:

- ID
- name
- category
- short visual definition
- expanded explanation
- parent and child concepts
- prerequisites
- mechanisms or effects
- MCAT importance
- common mistakes
- source references
- primary map
- verification status

High-yield concepts can appear through backlinks and multiple entry routes, but the definition remains canonical.

### Card-to-graph mapping

- Card term → candidate node
- Cloze relationship → candidate labeled edge
- Tags → subject/chapter provenance
- Duplicate cards → evidence for one concept, not duplicate nodes

## 22. Resolve the old node-density conflict

Earlier preference:

- full sentences in boxes
- verbs on arrows and boxes
- high-yield dense
- hybrid radial/directional

Later preference:

- term plus 3-7 word explanation
- more readable hierarchy
- medium visible density

Final two-layer solution:

| Layer | Density |
|---|---|
| Markdown/source registry | Full sentences, detailed corrections, all relationships |
| Visible map node | Term plus 3-7 word definition/function |
| Side panel/notes | Expanded explanation and source |
| Arrow | Short explicit verb label |

Nothing is lost, but the visual remains readable.

## 23. Layout rules

### Dense radial/hybrid maps

- central topic
- major branches distributed 360 degrees
- each branch forms a distinct cluster
- directional flows inside clusters
- dashed or styled cross-links between clusters
- adequate spacing and no node stacking

### Hierarchical Atlas v2

- boxed top-down hierarchy
- consistent IDs such as I.1 or IX.3
- concise definitions
- color/shape semantics
- MCAT traps visually distinct
- references as dead-end branches

Use dense radial for relationship discovery and Atlas hierarchy for stable review. Do not force every topic into one geometry.

## 24. Visual grammar

| Element | Meaning |
|---|---|
| Large rounded node | Major concept/system |
| Standard rectangle | Canonical concept |
| Pill/tag | Regulator, property, or short label |
| Circle | Molecule, signal, or compact entity |
| Hexagon | technique or process, when useful |
| Triangle/warning | trap or corrected misconception |
| Dotted reference box | concept defined elsewhere |

Every visible arrow must have a relationship label such as:

- causes
- increases
- decreases
- activates
- inhibits
- releases
- binds
- converts to
- part of
- requires
- commonly confused with
- contrasts with

No unlabeled arrows.

## 25. Bolding and emphasis

When a map lacks visual emphasis, selectively bold:

- named concepts
- mechanisms
- functions
- effects
- comparison cues
- high-yield labels
- corrected terms

Do not bold entire explanatory sentences. The map should remain scannable.

## 26. Renderer roles

### Figma

- final dashboard/canvas when selected
- renders an already structured graph
- should not be used as the only place where hierarchy is invented

### Whimsical

- fast individual mind maps
- one separate file per map when requested
- useful for Atlas v2 and hierarchical review

### Draw.io

- editable master concept webs
- useful for radial/hybrid layout and layers
- periodic export from the running Markdown source

### Interactive HTML/Cytoscape

- search, filters, path focus, side panels, and zoom/pan
- study mode should disable accidental node dragging
- preserve IDs, labels, positions, edges, and behavior during refactors

## 27. Version and edit safety

Default workflow:

    audit
    → proposed patch
    → review
    → apply
    → verify
    → commit

Rules:

- Protect the newest user-edited note.
- Do not auto-commit generated study content merely because a batch ended.
- Use statuses: Draft, Needs Review, Reviewed, Final.
- Keep unresolved items in a verification queue.
- Record a version checkpoint after major updates.

## 28. Token-exhaustion and resumption protocol

Large projects use bounded shards.

At every checkpoint:

1. Save the completed bounded file.
2. Commit it.
3. Record the commit SHA.
4. Mark processed chats Mapped only when substantive items have homes.
5. Record the last processed source.
6. List partial extraction and verification queues.
7. Resume from the queue rather than reconstructing finished work.

This seven-part project is itself the implementation of that rule.

## 29. Personalized workflow error engine

Before creating another artifact:

1. What retrieval problem does it solve?
2. Is a reusable file already present?
3. Does the task need a full map or only one correction node?
4. Is the source bundle bounded to one topic?
5. Does GitHub receive original synthesis rather than copyrighted source?
6. Will the user actively recall from the output?
7. Is there a retest or delayed-retrieval step?

Highest-priority repairs:

- **Exporting is not reviewing.**
- **Anki is capped and targeted, not an all-day backlog demand.**
- **HyperTTS generates media on desktop; mobile plays synced media.**
- **Back audio must not spoil front-side retrieval.**
- **One concept has one canonical definition.**
- **Visible nodes stay short; full detail stays in Markdown.**
- **Every arrow has a verb.**
- **The graph is built before the renderer.**
- **Commit bounded checkpoints so context loss cannot erase progress.**

## 30. Attached-source manifest

| Source | Pages/cards | Workflow role |
|---|---:|---|
| HyperTTS AnkiWeb PDF | 59 pages | Free/premium service confirmation and add-on behavior |
| Anki Manual | 112 pages | Fields, templates, scheduling, filtered decks, media, and sync verification |
| Captain Hook Organic Chemistry PDF | 309 cards / 31 pages | Bounded Foundational Sciences card pool |
| Mr. Pankow P/S PDF | 2,254 cards / 189 pages | Bounded Behavioral Sciences card pool |

None of these complete sources should be committed to the repository.

## 31. Verification queue

- Re-test current native iOS TTS syntax after any AnkiMobile/iOS update.
- Verify exact current filtered-deck search strings before reusing an old filter.
- Confirm the current scheduling algorithm and settings before changing intervals; newer Anki versions may use FSRS.
- Inspect a small HyperTTS batch before any mass regeneration.
- Keep deprecated/retired visual maps archived or clearly marked rather than letting them compete with Atlas v2.

**Checkpoint:** Anki review, audio, PDF, remote, source-routing, GitHub, visual, and resumption workflows are mapped.
