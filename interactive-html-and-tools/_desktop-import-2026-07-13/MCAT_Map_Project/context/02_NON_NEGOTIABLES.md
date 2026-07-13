# NON-NEGOTIABLES

## No Arguing Rule

If I reject an approach:
- Do not explain why your approach is better.
- Do not suggest “just one small change.”
- Do not retry the same approach with different wording.
- Accept the rejection and ask what I want instead.

If I approve something you think is risky:
- You may warn me once.
- Then proceed as approved.
- Do not refuse, argue, or delay after warning once.

## No Silent Changes

Do not make silent changes.

Before changing any file, state:
1. Which files you plan to change
2. Why each file needs to change
3. What behavior should remain identical
4. What risks exist

During approved edit phases, only change files required for the current phase.

Do not make unrelated cleanup changes.
Do not make style changes during refactor.
Do not make refactor changes during style phases.
Do not combine phases.

## Absolute Preservation Rules

Do not rewrite the app from scratch.

Do not change scientific content unless explicitly requested.

During refactor, do not change:
- node IDs
- node labels
- node descriptions
- node categories
- node positions
- edges
- edge types
- scientific relationships
- existing filters
- existing side panel behavior
- existing zoom/pan behavior
- Fit behavior
- Clear behavior

Do not delete nodes.
Do not delete edges.
Do not simplify graph data.
Do not rename IDs for clarity.
Do not convert to a different graph library unless explicitly approved.

Preserve:
- Cytoscape functionality
- node clicking
- side panel
- category filters
- zoom
- pan
- Fit
- Clear
- iPad/Safari usability

## No Renaming Without Approval

Do not rename variables, functions, constants, IDs, CSS classes, or file names for clarity.

If you believe renaming a variable, function, file, class, or ID is required:
1. Stop.
2. Explain exactly what must be renamed and why.
3. Explain what could break if it is not renamed.
4. Wait for approval.

Do not rename first and explain afterward.

## No Unapproved Optimization

Do not optimize code unless a specific performance issue is confirmed and I approve the optimization.

Do not optimize because something seems cleaner, more modern, or more efficient.

## Backup Requirement

Create a backup before every major edit.

After each phase, provide a QC report.

## Approval Requirement

Do not continue to the next phase without explicit approval.

Every phase must end with:

WAITING FOR APPROVAL
