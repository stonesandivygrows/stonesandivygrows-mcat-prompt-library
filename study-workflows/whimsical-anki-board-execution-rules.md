# Whimsical Anki Board Execution Rules

Date added: 2026-07-19

Use this before editing MCAT Whimsical boards that repackage Anki flashcard content into learnable diagrams, maps, and visual study boards.

## Workflow

1. Read this GitHub workflow note first.
2. Check the most recent hidden chats and Codex session context where the Whimsical connector was used. Use local memory summaries, rollout summaries, and recent Codex session logs when available.
3. Fetch/read the target Whimsical board before planning edits.
4. Identify existing board content, source/reference areas, duplicate diagrams, reusable small diagrams, and any user-visible hidden-chat context that affects the board.
5. Make one concise edit plan.
6. Wait for the user's explicit yes before editing or creating.
7. Execute only the approved board changes.
8. Fetch/read back the edited board and verify the intended changes are present.

## Usage Discipline

- GPT usage is the scarce resource, so be conservative with exploration and repeated rereads.
- Do not force edits to be tiny when education needs more work. Optimize for learning value per usage.
- Avoid rebuilding content that is already covered well.
- Prefer copying or adapting strong existing small diagrams into larger topic groups over recreating them from scratch.
- If the connector cannot duplicate a useful diagram cleanly, ask the user to copy/paste it manually and then continue from the pasted version.

## Board Selection

- Work by topic, not by broad subject.
- These boards are not merely Anki-style. They are complete Anki flashcard content repackaged in Whimsical so the same content, facts, and topics are displayed visually rather than omitted.
- Prefer already-made Anki-repackaged Whimsical boards when they substantially cover a topic.
- If a topic is already covered well, build off that board with links, copied diagrams, or companion additions.
- Create a new board only when no existing Anki-repackaged board substantially covers the topic.
- Keep Anki-repackaged board work and interdisciplinary-board work separate.
- Do not edit interdisciplinary boards during an Anki-repackaged board workflow unless the user explicitly changes scope.

## Board Content Rules

- Do not put these execution rules, workflow instructions, or agent-facing process notes inside boards or maps.
- Boards should contain study-facing content only: concept hierarchy, process flow, decision cues, source/reference links, and useful labels.
- It is acceptable to mark weak, duplicate, or superseded diagrams inside a board and move them far aside for the user to delete later.
- Do not delete existing diagrams unless the user explicitly asks.
- Keep source/reference notes short and useful for study traceability.
- When a large or buggy mind map has one dense branch doing too much, consider pulling that branch out into its own branch, companion mini-map, or nearby flowchart instead of rebuilding the whole map.

## Context Sources To Check

Use the newest relevant source first, then fall back only as needed:

- Current or most recent hidden chat where Whimsical board context was discussed.
- Current or most recent Codex chat where the Whimsical connector was used.
- Recent local Codex session logs under `~/.codex/sessions/` that include `mcp__codex_apps__whimsical` calls.
- Memory registry entries for Whimsical board work in `~/.codex/memories/MEMORY.md`.
- Whimsical rollout summaries under `~/.codex/memories/rollout_summaries/`.
- Board fetch/read-back from Whimsical itself.

Known useful rollout summaries as of 2026-07-19:

- `2026-07-16T20-11-50-VHML-whimsical_mcat_cells_mindmap_flowchart_continuation.md`
- `2026-07-16T21-01-32-9F3U-whimsical_mcat_periodic_table_study_map.md`
- `2026-07-16T22-00-37-1ota-whimsical_mcat_study_maps_social_psych_and_units.md`

## Biology Cell Current State

- Active final study board: `FINAL - AIDEN - BIOLOGY CELL - Study Home`
  - https://whimsical.com/HtfEHDxZEXNeDUU3W22tki
- Source/reference board: `Biology Cell Aiden`
  - https://whimsical.com/BLLr8vLf3bKhNuHpaC4js2
- Related Anki-repackaged cell board: `Biology: Cells - MCAT Visual Study Board`
  - https://whimsical.com/LvWnUipz8Q4FSoceuU3Mo3

## Recent Correction

The Biology Cell final board should not contain agent-facing rules. Rule/workflow language was removed from that board; only study-facing labels, visual grammar, and related Anki-board references should remain.
