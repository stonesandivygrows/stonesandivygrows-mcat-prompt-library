# Whimsical Anki Board Execution Rules

Date added: 2026-07-19

Use this before editing MCAT Whimsical Anki boards.

## Workflow

1. Fetch/read only first.
2. Check the most recent chats and Codex session context where the Whimsical connector was used. Use local memory summaries, rollout summaries, and recent Codex session logs when available.
3. Identify existing board content, comments, source/reference areas, duplicate diagrams, and reusable small diagrams.
4. Make one concise edit plan.
5. Wait for the user's explicit yes before editing or creating.
6. Execute only the approved board changes.
7. Fetch/read back the edited board and verify the intended changes are present.

## Usage Discipline

- GPT usage is the scarce resource, so be conservative with exploration and repeated rereads.
- Do not force edits to be tiny when education needs more work. Optimize for learning value per usage.
- Avoid rebuilding content that is already covered well.
- Prefer copying or adapting strong existing small diagrams into larger topic groups over recreating them from scratch.

## Board Selection

- Work by topic, not by broad subject.
- Prefer already-made Anki-style boards when they substantially cover a topic.
- If a topic is already covered well, build off that board with links, copied diagrams, or small companion additions.
- Create a new board only when no existing Anki-style board substantially covers the topic.
- Keep Anki-board work and interdisciplinary-board work separate.
- Do not edit interdisciplinary boards during an Anki-board workflow unless the user explicitly changes scope.

## Board Content Rules

- Do not put these execution rules, workflow instructions, or agent-facing process notes inside boards or maps.
- Boards should contain study-facing content only: concept hierarchy, process flow, decision cues, source/reference links, and useful labels.
- It is acceptable to mark weak, duplicate, or superseded diagrams inside a board and move them far aside for the user to delete later.
- Do not delete existing diagrams unless the user explicitly asks.
- Keep source/reference notes short and useful for study traceability.

## Context Sources To Check

Use the newest relevant source first, then fall back only as needed:

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
- Related Anki-style cell board: `Biology: Cells - MCAT Visual Study Board`
  - https://whimsical.com/LvWnUipz8Q4FSoceuU3Mo3

## Recent Correction

The Biology Cell final board should not contain agent-facing rules. Rule/workflow language was removed from that board; only study-facing labels, visual grammar, and related Anki-board references should remain.
