# Whimsical Anki Board Execution Rules

Date added: 2026-07-19
Last updated: 2026-07-20

Use this before editing MCAT Whimsical boards that repackage Anki flashcard content into learnable diagrams, maps, and visual study boards.

GitHub is the durable output and workflow record. Do not put raw copyrighted/private study sources in GitHub. Keep persistent artifacts concise and repo-appropriate.

## Workflow

1. Read this GitHub workflow note first.
2. Check the most recent hidden chats and Codex session context where the Whimsical connector was used. Use local memory summaries, rollout summaries, and recent Codex session logs when available.
3. Fetch/read the target Whimsical board before planning edits.
4. Identify existing board content, source/reference areas, duplicate diagrams, reusable small diagrams, and any user-visible hidden-chat context that affects the board.
5. Make one concise edit plan.
6. Wait for the user's explicit yes before editing or creating.
7. Execute only the approved board changes.
8. Fetch/read back the edited board and verify the intended changes are present.
9. Update only concise GitHub metadata after verification: tracker row, update-log entry, and any short handoff note if needed.

## Usage Discipline

- GPT usage is the scarce resource, so be conservative with exploration and repeated rereads.
- Do not force edits to be tiny when education needs more work. Optimize for learning value per usage.
- Avoid rebuilding content that is already covered well.
- Prefer copying or adapting strong existing small diagrams into larger topic groups over recreating them from scratch.
- Use the Whimsical AI copy/paste workflow when a small diagram or branch should be reused instead of rebuilt. If the connector cannot duplicate a useful diagram cleanly, ask the user to copy/paste it manually and then continue from the pasted version.

## Board Selection

- Work by topic, not by broad subject.
- These boards are not merely Anki-style. They are complete Anki flashcard content repackaged in Whimsical so the same content, facts, and topics are displayed visually rather than omitted.
- Prefer already-made Anki-repackaged Whimsical boards when they substantially cover a topic.
- If a topic is already covered well, build off that board with links, copied diagrams, or companion additions.
- Create a new board only when no existing Anki-repackaged board substantially covers the topic.
- Keep Anki-repackaged board work and interdisciplinary-board work separate.
- Do not edit interdisciplinary boards during an Anki-repackaged board workflow unless the user explicitly changes scope.
- Avoid Periodic Table, nucleic/DNA/RNA, and interdisciplinary boards unless the user explicitly reopens them.

## Accuracy and Source Authority

- Aidan/Aiden Anki, MCATalyst Anki, Obsidian MCAT vault notes, and Captain Hook Anki are detail and coverage sources, not final accuracy authorities.
- Preserve the coverage and useful detail from those sources, but fact-check before building or logging a board.
- Kaplan or UWorld may serve as the final accuracy checker; both are not required. If neither is available, use strong public sources only as a fallback and state that fallback in the concise log.
- Treat `content-review/anki-deck-audit/2026-07-20__aidan-deck-factual-error-review.md` as required context before boards touching flagged topics.
- Known flagged correction for Endocrine: PTH decreases serum phosphate overall. Do not repeat the erroneous `no net effect on blood phosphate` framing.
- If a source conflict affects the board, use the final checker and add a short study-facing correction/confusion note if it helps learning.

## Board Content Rules

- Do not put these execution rules, workflow instructions, or agent-facing process notes inside boards or maps.
- Boards should contain study-facing content only: concept hierarchy, process flow, decision cues, source/reference links, and useful labels.
- It is acceptable to mark weak, duplicate, or superseded diagrams inside a board and move them far aside for the user to delete later.
- Do not delete existing diagrams unless the user explicitly asks.
- Keep source/reference notes short and useful for study traceability.
- When a large or buggy mind map has one dense branch doing too much, consider pulling that branch out into its own branch, companion mini-map, or nearby flowchart instead of rebuilding the whole map.
- Flag 1-2 spots where concepts overlap or could cause confusion and ask the user for clarity before committing to an ambiguous structure.

## Visual Formatting Rules

- Visual text emphasis is nonnegotiable for MCAT Whimsical study boards. Without emphasis, every node looks the same and high-yield terms go unnoticed.
- Use available formatting intentionally: bold key terms, italicize nuance/exceptions, use bullets or short grouped lines for multi-part facts, and use labels, spacing, colors, shapes, and arrows to show hierarchy and relationships.
- Important anchor terms, exceptions, equations, trend directions, and decision cues should be visually distinguished from supporting explanation.
- If the Whimsical connector or a specific diagram type cannot preserve rich text formatting inside nodes, use the closest reliable visual substitute: concise node labels, capitalization for anchor terms, separate child nodes, color grouping, shape grouping, or nearby callout notes.
- Do not flatten study content into uniform plain text when the board is meant for learning or review.

## Branching Style

Use the user's finished Atomic Nuclei board as the preferred style reference:

- `(Anki Physics) Atomic Nuclei & Nuclear Decay`: https://whimsical.com/9gU4EsKhwPqzcS5NuqVj7G

Structural preferences:

- Max 3-4 child branches per node.
- Never output a flat structure where 5 or more child nodes hang directly under one parent node.
- If a concept has 5-8 details, cluster them into 2-3 intermediate subcategories based on shared mechanism, property, or theme before listing details.
- Prefer depth over breadth: Root -> Intermediate category -> Subcategory -> Detail.
- Use a compact main map, small focused flowcharts, tables for clean comparison grids, and 1-2 study-facing confusion/caution notes where overlap is likely.

## Context Sources To Check

Use the newest relevant source first, then fall back only as needed:

- Current or most recent hidden chat where Whimsical board context was discussed.
- Current or most recent Codex chat where the Whimsical connector was used.
- Recent local Codex session logs under `~/.codex/sessions/` that include `mcp__codex_apps__whimsical` calls.
- Memory registry entries for Whimsical board work in `~/.codex/memories/MEMORY.md`.
- Whimsical rollout summaries under `~/.codex/memories/rollout_summaries/`.
- Board fetch/read-back from Whimsical itself.
- `study-notes/mcat-mind-maps/09-whimsical-anki-board-tracker.md` for current topic status.
- `study-notes/mcat-mind-maps/10-whimsical-anki-board-resume-handoff.md` for current cross-model resume context.

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

## Current Resume State

As of 2026-07-20, the last completed board is `Biology::Embryogenesis`:

- https://whimsical.com/D1V2j1rNeiV2Yo97ciFgeN

The next planned eligible topic is `Biology::Endocrine`:

- 191 notes in the tracker.
- Status: `new-board-needed`.
- Planned style: Atomic Nuclei branching constraints, with coverage preserved from Aidan/Aiden, MCATalyst, Obsidian MCAT vault, and Captain Hook, then accuracy-checked against Kaplan or UWorld.
- Known clarity spots to resolve before/while planning: endocrine vs exocrine pancreas overlap with Digestion; adrenal cortex vs adrenal medulla overlap with Embryogenesis and endocrine hormone control.

## Recent Correction

The Biology Cell final board should not contain agent-facing rules. Rule/workflow language was removed from that board; only study-facing labels, visual grammar, and related Anki-board references should remain.
