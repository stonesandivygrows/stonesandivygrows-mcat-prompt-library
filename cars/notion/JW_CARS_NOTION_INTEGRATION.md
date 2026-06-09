# Jack Westin CARS — Notion Integration Specification

## Purpose

This document defines the processing and organizational rules for mapping historical Jack Westin CARS transcripts, audio reviews, extracted text, PDFs, and cumulative strategy guides into unified Notion study hubs.

The system should avoid creating disconnected cards for every source file. Each study session should instead become one chronological, editable master hub with source files preserved as backups or collapsed archives.

## Active Workspace

- **Local source directory:** `~/mcat/JW Cars Passage Reviews`
- **Historical desktop directory:** `~/Desktop/mcat/JW Cars Passage Reviews`
- **Target Notion database:** `https://www.notion.so/f2f8199d70ee4a41bc3e12cc9e51608f`
- **Scope:** CARS-only content

## Naming Rule

Every Notion entry should use a descriptive, human-readable title in this general format:

`[Date] Jack Westin CARS | Passage Set: Component Name (Context Tag)`

For master session hubs, use:

`[Date] Jack Westin CARS | Passage Set: Master Session Hub`

## Three-Layer Visual Engine

Use the following rendering conventions for processed CARS text:

1. **Normal text** — core argumentative flow and essential meaning.
2. **Inline code / backticks** — Slate Gray material that can be skipped on the first pass.
3. **Native `<details>` blocks** — Mint Green deep-detail material that should remain available without cluttering the main page.

Use these marginal symbols where helpful:

- `★` — main claim, central insight, or high-yield rule
- `⚠️` — contrast, trap, qualification, or caution
- `→` — cause/effect or argumentative progression
- `EX` — example or illustration

## Master Session Hub Architecture

Each master session hub should follow this structure:

1. **Session Overview**
   - Date
   - Passage titles
   - Source platform
   - Primary CARS focus
   - Session status

2. **Editable Core Body**
   - Merge transcript, extracted text, and review reflections directly into the Notion page body.
   - Avoid treating editable source text as a mere attachment.

3. **Passage-Level Sections**
   - Passage text or passage summary
   - Questions and answer choices when available
   - Correct answer
   - User-selected answer
   - Official explanation
   - User reasoning and reflection

4. **Three-Layer Processed Passage Map**
   - Core flow
   - First-pass skip material
   - Deep-detail dropdowns
   - Marginal symbols

5. **Question Autopsies**
   - What happened
   - Why it happened
   - Fix rule
   - Trigger wording or pattern
   - Strategy status: Keep / Modify / Stop / Retest

6. **Transferable Rules**
   - Only include reusable rules that apply beyond the individual passage.

7. **Collapsed Source Archive**
   - Raw transcript names
   - PDF backup paths
   - RTF or DOCX source paths
   - Any duplicate or superseded exports

## Historical Hub Mapping

### Target Hub 1

**Title:** `[03/23] Jack Westin CARS | Test ID 281410: Master Session Hub`

- Merge editable text from:
  - `CARs JW 03232026 Audio Transcription Test ID 281410...docx`
- Preserve local backup reference:
  - `~/Desktop/mcat/JW Cars Passage Reviews/JW 03232026.pdf`

### Target Hub 2

**Title:** `[04/16] Jack Westin CARS | April 16 Passage Set: Master Session Hub`

- Preserve local backup reference:
  - `~/Desktop/mcat/JW Cars Passage Reviews/CARs Jack WEstin 04162026.pdf`

### Target Hub 3

**Title:** `[04/19] Jack Westin CARS | “The Archeology of Ecology” & “Camus’ Notebooks”: Master Session Hub`

- Extract and merge editable text from:
  - `CARs JW Practice Extract Text/04192026 CARS Jack Westin...rtf`
- Preserve local backup reference:
  - `~/Desktop/mcat/JW Cars Passage Reviews/04192026 CARS Jack Westin - Bill Lipe...pdf`

#### Target Hub 3 Staging Layout

1. Session overview
2. Passage 1 — Bill Lipe, “The Archeology of Ecology”
3. Passage 2 — Susan Sontag, “Camus’ Notebooks”
4. Editable extracted review text
5. Three-layer processed passage maps
6. Question autopsies
7. Transferable strategy rules
8. Collapsed source archive

Recommended question-autopsy template:

```text
What Happened:

Why:

Fix Rule:

Trigger:

Strategy Status: Keep / Modify / Stop / Retest
```

### Target Hub 4

**Title:** `[04/27] Jack Westin CARS | April 27 Review: Master Session Hub`

Place the contents of the following files inside a collapsed source archive at the bottom of the page:

- `04272026 Jack Westin part 1.pdf`
- `04272026 Jack Westin CARS part 2.pdf`

The April 27 review contains strategy observations that should be promoted into editable summary sections before the raw source archive, including:

- Do not scan the entire test if that creates overload.
- Reading the title and last sentence of each paragraph may help establish structure.
- Continue through temporary confusion rather than repeatedly restarting the passage.
- Distinguish retrieval questions from inference, assumption, role/function, and main-idea questions.
- Use grammar reduction on comma-heavy sentences by temporarily removing modifiers to expose the main clause.
- Evaluate whether an answer reflects the passage’s full relationship or only one direction of it.
- Avoid returning to the passage unless the question truly requires retrieval.

## Cumulative Strategy Engine

Create a master resource card at the top of the dashboard:

**Title:** `[Master Strategy] Jack Westin CARS | Cumulative Improvement Guide: Core Strategy Engine`

**Medium:** `Markdown / DOCX`

Merge and audit the definitive tactical rules from:

- `Neissa_CARS_Cumulative_Improvement_Guide_Through_05042026_PLAIN_ENGLISH.docx`
- `Neissa_CARS_Improvement_Guide_April_2026_AUDITED.docx`

Convert the final rules into an interactive checklist. Deduplicate overlapping rules and preserve only the newest confirmed version when strategies conflict.

## Source and Version-Control Policy

- Store workflow specifications, schemas, templates, and original user-authored strategy summaries in GitHub.
- Do not commit large duplicate PDFs merely because they exist locally.
- Keep commercial passage text and official answer explanations out of the repository unless there is a specific archival reason and permission to store them.
- Prefer local backup paths or Notion source archives for raw practice exports.
- When two exports contain the same session, identify one canonical source and mark the others as duplicate or superseded.
- Record strategy changes chronologically rather than silently overwriting prior approaches.

## Quality-Control Checklist

- [ ] Correct date and passage title
- [ ] Correct source files mapped to the session
- [ ] Editable text placed in the page body
- [ ] Raw files moved to the collapsed archive
- [ ] Three-layer visual engine applied consistently
- [ ] Question autopsies use the standard template
- [ ] Transferable rules separated from one-off observations
- [ ] Duplicate strategy rules removed
- [ ] Conflicting strategies preserve the latest tested conclusion
- [ ] Local backup path recorded
- [ ] Master Strategy relation added
