# CARS Notion Session Hub Mapping

## Purpose

This file defines how historical Jack Westin CARS transcripts, audio reflections, exported reviews, and cumulative strategy guides should be staged for the active Notion dashboard.

GitHub stores the reusable schema, mapping rules, and workflow documentation. Notion stores the live editable study hubs. Local Mac folders retain source PDFs, DOCX, RTF, and audio files.

## Active Pipeline

- Local CARS workspace: `~/mcat/JW Cars Passage Reviews`
- Legacy/local backup paths may also appear under: `~/Desktop/mcat/JW Cars Passage Reviews`
- Target Notion database: `https://www.notion.so/f2f8199d70ee4a41bc3e12cc9e51608f`
- Scope: CARS only

## Naming Rule

Every session entry must use this human-readable subtitle pattern:

`[Date] Jack Westin CARS | Passage Set: Component Name (Context Tag)`

Master session hubs may use the established title variants below when a date, test ID, or named passage set is more useful than the generic subtitle.

## Three-Layer Visual Engine

Use the following structure when converting CARS material into editable Notion content:

1. Normal text = Core Flow
2. Backticks = Slate Gray skip-first-pass material
3. Native `<details>` blocks = Mint Green deep details

Required marginal symbols:

- `★` Main claim or governing idea
- `⚠️` Contrast, trap, qualification, or reversal
- `→` Cause, effect, progression, or logical movement
- `EX` Example or illustration

## Source Handling Rules

- Do not create a separate Notion card for every transcript, reflection, or export.
- Group all materials from one practice date into one chronological master session hub.
- Extract useful text into the editable Notion body.
- Keep source PDFs and other originals as local backup references rather than duplicating binary files in GitHub.
- Put long raw exports or duplicate source text inside a collapsed source archive at the bottom of the Notion page.
- Deduplicate repeated passage text and repeated Jack Westin explanations before publishing.
- Preserve the user's own reflections separately from vendor explanations.
- Convert reusable lessons into strategy rules and link them to the cumulative strategy engine.

## Standard Master Session Hub Layout

1. Session Overview
2. Passage Set Index
3. Editable Source Text
4. Three-Layer Processed Passage Map
5. Question-by-Question Autopsy
6. Transferable Rules
7. Strategy Status: Keep / Modify / Stop / Retest
8. Related Master Strategy Links
9. Collapsed Source Archive
10. Local Backup Paths

## Question Autopsy Schema

For each missed, uncertain, changed, or unusually slow question:

- **What Happened**
- **Why It Happened**
- **Trap Type**
- **Correct Logical Path**
- **Fix Rule**
- **Trigger Phrase**
- **Strategy Status:** Keep / Modify / Stop / Retest

## Historical Hub Manifest

### Target Hub 1

**Title:** `[03/23] Jack Westin CARS | Test ID 281410: Master Session Hub`

- Editable core body source: `CARs JW 03232026 Audio Transcription Test ID 281410...docx`
- Local PDF backup: `~/Desktop/mcat/JW Cars Passage Reviews/JW 03232026.pdf`

### Target Hub 2

**Title:** `[04/16] Jack Westin CARS | April 16 Passage Set: Master Session Hub`

- Local PDF backup: `~/Desktop/mcat/JW Cars Passage Reviews/CARs Jack WEstin 04162026.pdf`

### Target Hub 3

**Title:** `[04/19] Jack Westin CARS | "The Archeology of Ecology" & "Camus' Notebooks": Master Session Hub`

- Editable core body source: `CARs JW Practice Extract Text/04192026 CARS Jack Westin...rtf`
- Local PDF backup: `~/Desktop/mcat/JW Cars Passage Reviews/04192026 CARS Jack Westin - Bill Lipe...pdf`

Recommended staging order:

1. Session Overview
2. Passage 1: Bill Lipe, “The Archeology of Ecology”
3. Passage 2: Susan Sontag, “Camus' Notebooks”
4. Editable raw extract
5. Three-layer processed maps
6. Question autopsies
7. Transferable rules
8. Collapsed source archive

### Target Hub 4

**Title:** `[04/27] Jack Westin CARS | April 27 Review: Master Session Hub`

- Source archive item: `04272026 Jack Westin part 1.pdf`
- Source archive item: `04272026 Jack Westin CARS part 2.pdf`
- Place both source contents in a collapsed source archive at the bottom of the Notion page.
- Prefer the merged/full review export as the clean question-and-explanation source when it prevents duplication.

## Cumulative Strategy Engine

**Title:** `[Master Strategy] Jack Westin CARS | Cumulative Improvement Guide: Core Strategy Engine`

**Medium:** `Markdown / DOCX`

Merge and deduplicate the definitive tactical rules from:

- `Neissa_CARS_Cumulative_Improvement_Guide_Through_05042026_PLAIN_ENGLISH.docx`
- `Neissa_CARS_Improvement_Guide_April_2026_AUDITED.docx`

Convert the final rules into an interactive checklist organized by:

- Before reading
- Passage reading
- Sentence repair and grammar
- Main idea and author stance
- Question-stem classification
- Answer-choice comparison
- Timing and navigation
- Skip and return rules
- Stress-state recovery
- Strategies to stop using
- Strategies still being tested

## April 27 Strategy Findings to Preserve

The April 27 review contains several reusable findings that should be promoted from the session hub into the cumulative strategy engine after audit:

- Do not scan the entire test when that creates overload; begin passages in order unless a simpler selection rule is proven useful.
- Reading the title and selected paragraph-ending sentences may help establish structure, but this should remain a tested strategy rather than an unconditional rule.
- Silent reading is faster than unintentionally reading aloud.
- Tactile pacing, such as finger tapping, may support visual tracking without writing.
- Direct passage retrieval is appropriate for detail questions, but inference, suggestion, assumption, role, and main-idea questions require broader argument alignment.
- For complex sentences, temporarily remove interrupting phrases and modifiers to identify the grammatical core.
- Distinguish what a sentence mentions from the role it plays in the argument.
- Preserve directionality: a two-way relationship cannot be reduced to only one direction.
- Avoid interpreting a passage through its opening topic when the final paragraphs reveal a different central purpose.
- Skipped questions require an external navigation marker; memory alone is unreliable under time pressure.

These findings come from the April 27 audio-review transcript and full review export and should be audited against later strategy decisions before being marked as permanent.

## Notion Dashboard Relationship Map

Recommended CARS Command Center hierarchy:

- `01_STRATEGY_GARDEN`
- `02_PATTERN_REPORTS`
- `03_JACK_WESTIN_SESSION_HUBS`
- `04_PASSAGE_AUTOPSIES`
- `05_RAW_TRANSCRIPTS_INBOX`

Relations:

- Session hubs link to relevant passage autopsies.
- Passage autopsies link to recurring pattern reports.
- Confirmed fixes link to the cumulative strategy engine.
- Unprocessed files remain in the raw transcripts inbox until merged into a dated hub.

## Quality-Control Checklist

Before a Notion push:

- [ ] Correct date and title
- [ ] Correct source files grouped into one hub
- [ ] Passage names verified
- [ ] User reflections separated from Jack Westin explanations
- [ ] Duplicate passage text removed
- [ ] All missed and uncertain questions captured
- [ ] All explicit user questions answered or tagged for answer
- [ ] Reusable rules extracted
- [ ] Conflicting strategies marked for audit rather than silently merged
- [ ] Local backup paths preserved
- [ ] Long raw content collapsed
- [ ] Related master strategy and autopsy pages linked
