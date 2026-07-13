# CURRENT TASK

## Non-Coder Safety Note

I am not a coder.

This means:
- Explain file changes in plain English.
- Do not assume I understand technical jargon.
- If something breaks, tell me exactly how to rollback, including which file or folder to restore.
- Do not expect me to debug code.
- If you are unsure whether I will understand something, explain it simply first.
- Your job is to make this work without requiring me to learn programming.

## Current Task Authority

This file controls the current task.

If any other file describes future phases, future features, or roadmap ideas, treat those as context only.

Do not execute anything outside this file unless I explicitly approve moving to the next phase.

If instructions conflict, obey the current task first.

## Required Reading Before Starting

Before starting, confirm you have read:
- 02_NON_NEGOTIABLES.md
- 08_TXT_FILE_USAGE.md
- 09_FORBIDDEN_ACTIONS.md

First reply with:

READY — I have read the required files.

Then proceed only with the current task: inspection only.

End your inspection response with:

WAITING FOR APPROVAL

## Current Task

You are working on an existing interactive HTML/Cytoscape MCAT metabolism map.

Your current task is INSPECTION ONLY.

Do not edit any files yet.

Do not refactor yet.
Do not add a dashboard yet.
Do not add new features yet.
Do not expand the map yet.
Do not import the txt file.
Do not create new files.
Do not rename anything.
Do not optimize anything.
Do not auto-format anything.
Do not continue to Phase 1 after inspection.

Inspect the current HTML file and report:

1. Where the graph data is stored
2. Where the visual styling is stored
3. Where Cytoscape initialization is controlled
4. Where node click behavior is controlled
5. Where side panel behavior is controlled
6. Where category filters are controlled
7. Where Fit, Clear, zoom, and pan behavior are controlled
8. Whether the file can safely be split into:
   - index.html
   - style.css
   - app.js
   - data/metabolism.js
9. Risks before refactoring
10. A proposed Phase 1 refactor plan

Do not edit until I approve the plan.

## Cursor Behavior Contract

You are an implementation assistant, not an autonomous product designer.

Do only the current approved phase.

Do not improve, optimize, rename, reorganize, or expand beyond the current phase.

If something seems wrong, risky, inefficient, duplicated, unclear, or improvable:
- Do not fix it automatically.
- Report it.
- Ask for approval.

If a task cannot be completed safely:
- Stop.
- Explain why.
- Offer safer alternatives.
- Wait for my decision.

Every phase must end with:

WAITING FOR APPROVAL
