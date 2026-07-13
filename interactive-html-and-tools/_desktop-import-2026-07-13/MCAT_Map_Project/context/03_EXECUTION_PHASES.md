# EXECUTION PHASES

Only complete one phase at a time.

## Phase Approval Rule

Phases are sequential and approval-gated.

After each phase:
1. Stop.
2. Provide the required QC report.
3. End with: WAITING FOR APPROVAL
4. Wait for my explicit approval before starting the next phase.

Do not auto-continue to Phase N+1.
Do not combine phases.
Do not begin the next phase even if the current phase appears successful.

If a phase fails, do not start the next phase.
Fix the failed phase or restore from backup first, but only after I approve the next action.

Example:
During Phase 1 refactor, do not improve colors, add search, change layout, add dashboard, or add silhouettes.
Even if those changes are planned later, they are not part of Phase 1.

---

## Phase 0: Inspect Only

Do not edit.

Understand the current HTML architecture.

Report:
1. Where graph data lives
2. Where CSS/theme lives
3. Where Cytoscape initialization lives
4. Where category filters live
5. Where side panel behavior lives
6. Where Fit, Clear, zoom, and pan are controlled
7. Whether safe refactor is possible
8. Risks
9. Proposed Phase 1 plan

Do not create files.
Do not rename files.
Do not refactor.
Do not add features.

End with:

WAITING FOR APPROVAL

---

## Phase 1: Safe Refactor

Goal:
Split the existing single HTML file into separate files while preserving identical behavior.

Allowed files to create during Phase 1:
- index.html
- style.css
- app.js
- data/metabolism.js

Do not create additional files during Phase 1 unless explicitly approved.

Do not use ES6 modules/import/export unless I approve.
Use traditional script loading and global variables during Phase 1 if needed for Safari/local-file compatibility.

Do not change the Cytoscape version.
Do not update CDN links unless they are broken.
If a CDN is broken, report it and ask before changing.

Do not add default node positions if nodes do not already have positions.
Preserve the existing layout system exactly as-is.
If positions are missing, report this and ask how to handle it.

During Phase 1, do not change HTML structure, CSS classes, or JavaScript logic except as required to move existing code into separate files.
Only move existing code to new files.
Do not rewrite, refactor, optimize, or improve the code itself.

### Backup Procedure

Before editing:
1. Copy the original file to:
   `metabolism_map_BACKUP_[YYYY-MM-DD].html`

   Example:
   `metabolism_map_BACKUP_2026-05-05.html`

2. Test that the backup opens and works.
3. Keep the backup in the same folder as the project.
4. Do not delete the backup until all phases pass.

### If the HTML File Is Very Large

If the original file is over 5,000 lines or over 500KB:
1. Report the size.
2. Ask if I want to:
   - Proceed with the split, which may create large files
   - Extract only CSS first, as a smaller change
   - Keep as a single file for now
3. Wait for my decision.

### What "Identical Behavior" Means

After refactor, these must work exactly the same:
- Same nodes in same positions
- Same node labels and descriptions
- Same edges and edge types
- Same colors, fonts, sizes
- Same zoom/pan behavior
- Same Fit/Clear behavior
- Same side panel content and layout
- Same category filter results
- Same performance, with no new lag added

"Identical" does not mean:
- The code looks the same, because code can move into separate files
- File names are the same, because files will be split
- Comments are the same, because comments may move with code

Test:
If I cannot tell the refactored version from the original just by using it, behavior is identical.

### If the HTML Cannot Be Safely Split

If the HTML cannot be safely split:
1. Stop.
2. Do not force the split.
3. Explain which parts are tightly coupled.
4. Explain why splitting may break behavior.
5. Suggest a safer alternative:
   - keep as a single HTML file for now
   - extract CSS only
   - extract data only
   - create a backup and test branch
6. Wait for my decision.

After editing:
- Provide a list of every file changed.
- Explain how to open and test the refactored app.
- Confirm whether behavior appears identical.
- End with: WAITING FOR APPROVAL

---

## Phase 2: Dashboard Shell

Create a dashboard/homepage.

Only the current Metabolism Map is active.

Future maps may appear as Coming Soon only.

Do not build new maps yet.

Do not add new map content.

Preserve existing metabolism map behavior.

Keep shared app code reusable.

Dashboard groups:

1. Body & Metabolism
   - Food & Metabolism — active prototype using current Metabolism Map
   - Disease, Symptoms & Injury — coming soon
   - Bio + Biochem Systems — coming soon

2. Molecular Foundations
   - Cell & Molecular Biology — coming soon
   - Genetics, Gene Expression & Evolution — coming soon
   - Reproduction & Development — coming soon

3. Chemistry Logic
   - Organic Chemistry Logic — coming soon
   - General Chemistry Logic — coming soon

4. Physics & Math
   - Physics & Physiological Forces — coming soon
   - Units, Equations & Dimensional Reasoning — coming soon

5. Evidence & Testing
   - Lab Techniques, Experimental Evidence & Research Reasoning — coming soon

6. Behavior
   - Psych, Behavior & Mental Health — coming soon
   - Drug Effects & Homeostasis — coming soon

7. Personal Review
   - My Mistake Traps / Error Patterns — coming soon

End with:

WAITING FOR APPROVAL

---

## Phase 3: Navigation / Help

Add better navigation controls without changing graph content.

Allowed features:
- Help button explaining pan, zoom, node click, filters, Fit, and Clear
- Keyboard shortcuts only if they do not interfere with typing:
  - Arrow keys = pan
  - + / - = zoom
  - 0 = fit map
  - Esc = clear selection
- Improved mouse/trackpad panning if safe

Do not change node data.
Do not change scientific content.
Preserve iPad/Safari usability.

End with:

WAITING FOR APPROVAL

---

## Phase 4: Search

Add node search.

Requirements:
- Search by node label
- Search by node description if feasible
- Matching nodes highlight
- Nonmatching nodes fade
- Clicking a result focuses/zooms to that node
- Clicking a result updates the side panel
- Clear search restores the map

Do not change graph content.

End with:

WAITING FOR APPROVAL

---

## Phase 5: Modular Key System

Add a modular key system.

Requirements:
- Do not hard-code a huge key inside app.js or index.html.
- Keep key data modular.
- Key panel must be hidden by default.
- Key panel should not overwhelm the map.

Optional modular files only if approved or clearly required:
- data/abbreviations.json
- data/edgeTypes.json
- data/shapeLegend.json
- data/priorityLabels.json

The Key should eventually support:
- abbreviation key
- color/category key
- edge/arrow meaning key
- shape/silhouette meaning key
- priority label key

For now, create only a small starter key.

Do not expand all abbreviations yet.

End with:

WAITING FOR APPROVAL

---

## Phase 6: Theme / Readability

Improve the visual theme for readability and studying.

Goals:
- Cute, light, study-friendly theme
- Higher contrast than pale pastel
- Print-friendly colors
- Readable when zoomed out
- Darker text
- Medium-saturation borders
- No dark theme
- No pale text on pale backgrounds
- Compact nodes
- Avoid making nodes too plump

Do not change graph content.
Do not change node IDs, labels, descriptions, edges, categories, or positions.

End with:

WAITING FOR APPROVAL

---

## Phase 7: Print Mode

Add print-friendly CSS.

Requirements:
- Light background
- Avoid wasting ink
- Keep labels readable
- Hide unnecessary UI controls when printing
- Preserve map content
- Do not change graph data

End with:

WAITING FOR APPROVAL

---

## Phase 8: Silhouettes / Category Shapes

Add silhouette-style visual identity only for major organs, cells, organelles, and blood-related structures.

When I say icons, I mean silhouettes, not decorative emoji/icons.

Existing UI icons/buttons are fine.

Do not replace labels with silhouettes.
Labels must remain readable.

Do not apply silhouettes to every node.

Do not use silhouettes for every:
- enzyme
- metabolite
- hormone
- pathway
- molecule
- regulator

Use silhouettes only where helpful:
- brain
- liver
- pancreas
- gallbladder
- stomach
- small intestine
- large intestine
- kidney
- heart
- lungs
- eyes
- blood / red blood cell
- mitochondria
- nucleus / cell if relevant

If true silhouettes are too difficult or harm readability, use subtle silhouette backgrounds inside readable rounded cards.

End with:

WAITING FOR APPROVAL

---

## Phase 9: Pathway Focus Mode

Add Pathway Focus Mode.

Goal:
When I choose a pathway, relevant nodes and edges should highlight, unrelated nodes should fade, and the side panel should show a pathway story.

Start with only these pathway modes:
1. Fed state
2. Fasting state
3. Starvation
4. Kidney/nephron system
5. Digestive tract
6. Defecation pathway
7. Cardiac conduction system
8. Visual system
9. Respiratory gas exchange
10. Immune/inflammation response

Requirements:
- Do not show all pathways at once.
- Put pathways in a dropdown/menu, not as too many buttons across the top.
- Each pathway should include:
  - trigger
  - major organs
  - major hormones/signals if relevant
  - main pathway sequence
  - MCAT-core connections
  - clinical extension notes only if useful
- Do not change existing node content unless necessary.
- If a needed node does not exist yet, create a small placeholder node only if clearly necessary and label it as new.
- List all scientific assumptions.

End with:

WAITING FOR APPROVAL

---

## Phase 10: Expansion Readiness Check

Before expanding content, confirm:
- Refactor works.
- Dashboard works.
- Search works.
- Key system works.
- Theme is readable.
- Navigation is usable.
- Existing metabolism content is preserved.
- Backups exist.
- Cursor can list current nodes and edges.

If any of these are false, do not expand content yet.

End with:

WAITING FOR APPROVAL

---

## Phase 11: Food & Metabolism Expansion

Only after prior phases pass.

Expand the current Metabolism map into the broader Food & Metabolism map.

Scope:
- Keep the existing metabolism content.
- Add digestion and absorption connections.
- Add food source pathways:
  - carbohydrates/sugars
  - fats/lipids
  - proteins/amino acids
- Add organ-system connections:
  - mouth
  - esophagus
  - stomach
  - small intestine
  - large intestine
  - rectum/anus
  - liver
  - pancreas
  - gallbladder
  - blood
  - adipose tissue
  - muscle
  - brain
  - kidney
  - lymphatic system

Important:
- Do not over-expand clinical details.
- Mark priority:
  - MCAT-core
  - MCAT-adjacent
  - Clinical extension
- Diabetes should be MCAT-core or MCAT-adjacent when connected to insulin, glucagon, glucose transport, ketones, osmotic effects, endocrine regulation, or metabolism.
- Do not label all diseases as clinical extension automatically.

After editing, list all new nodes and edges for review.

End with:

WAITING FOR APPROVAL
