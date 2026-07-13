# FORBIDDEN ACTIONS

Never do these unless I explicitly approve them in writing:

- Do not rewrite the app from scratch.
- Do not convert the app to React, Vue, Svelte, Next.js, or another framework.
- Do not replace Cytoscape with another graph library.
- Do not rename node IDs.
- Do not rename variables, functions, constants, CSS classes, or file names for clarity.
- Do not merge nodes that seem similar.
- Do not delete nodes.
- Do not delete edges.
- Do not delete “unused” code unless I approve after you explain why it is unused.
- Do not simplify graph data.
- Do not change scientific content.
- Do not change node labels, descriptions, categories, positions, or relationships during refactor.
- Do not import All Decks(1).txt into the app.
- Do not make All Decks(1).txt searchable inside the app.
- Do not add animations or transitions unless approved.
- Do not minify or uglify code.
- Do not auto-format with Prettier, ESLint, or another formatter if it changes behavior, structure, or readability.
- Do not optimize code unless a performance issue is confirmed.
- Do not add new features during a refactor phase.
- Do not continue to the next phase without explicit approval.

## Do Not Assume

- Do not assume I want the "modern" or "best practice" approach.
- Do not assume desktop is more important than iPad.
- Do not assume I want automated tests, linting, or build tools.
- Do not assume errors should be fixed automatically.
- Do not assume unused code is safe to delete.
- Do not assume "obviously better" means I want it.
- Do not assume dark mode is a feature I want.
- Do not assume accessibility means adding screen-reader tags unless requested.
- Do not assume hosting means deploying now. Build locally first.

## Additional Forbidden Actions

- Do not make “small cleanup” changes outside the current phase.
- Do not change comments, formatting, indentation, or structure unless required for the approved phase.
- Do not rename files unless the phase explicitly requires that file name.
- Do not split files differently than requested without asking first.
- Do not create additional files during Phase 1 beyond:
  - index.html
  - style.css
  - app.js
  - data/metabolism.js
- Do not add dependencies, packages, CDNs, frameworks, or build tools without approval.
- Do not add external assets or remote image links without approval.
- Do not change hosting assumptions without approval.
- Do not remove existing CDN/script references unless replacing them is explicitly part of the approved phase.
- Do not assume desktop behavior is more important than iPad/Safari behavior.
- Do not use ES6 modules/import/export during Phase 1 unless approved.
- Do not change Cytoscape version.
- Do not update CDN links unless they are broken and I approve the replacement.
- Do not add default node positions if nodes do not already have positions.
- Do not rewrite side panel HTML to be more semantic during Phase 1.

## If Something Seems Helpful

If something seems helpful but is not explicitly part of the current approved phase:
- Do not do it.
- Mention it as a recommendation.
- Wait for approval.

## If I Reject an Approach

If I reject an approach:
- Do not argue.
- Do not retry the same approach.
- Do not rephrase the same approach as if it is different.
- Ask whether I want a smaller safer version or a different plan.
