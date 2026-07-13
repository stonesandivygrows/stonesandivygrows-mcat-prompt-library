# QUALITY CONTROL CHECKPOINTS

## Required QC Report

After every phase, stop and provide this report:

1. Files changed:
2. Features changed:
3. Content changed, if any:
4. Node IDs changed? yes/no
5. Node labels changed? yes/no
6. Edges changed? yes/no
7. Scientific assumptions added? yes/no
8. What should I test manually?
9. Known risks or possible breakage:
10. Safe to continue? yes/no

End every phase response with:

WAITING FOR APPROVAL

---

## Non-Coder Testing Guide

After every phase, I will test in this order:

1. **Does the app open?**
   - Double-click index.html or open it in a browser.
   - If there is a blank screen or error, the phase failed.

2. **Does the map appear?**
   - I should see nodes and edges immediately.
   - If nothing loads, the phase failed.

3. **Can I click a node?**
   - Click any node.
   - The side panel should update with a description.
   - If the side panel does not update, the phase failed.

4. **Do filters work?**
   - Click a category filter.
   - Some nodes should hide/show or visually change.
   - If nothing changes, the phase failed.

5. **Does Fit work?**
   - Click Fit.
   - The map should zoom to show everything.
   - If the map does not move or refit, the phase failed.

6. **Does Clear work?**
   - Click Clear.
   - Filters/selections should reset and hidden/faded nodes should reappear.
   - If the map stays filtered, the phase failed.

7. **Can I zoom and pan?**
   - Scroll/pinch to zoom.
   - Drag to pan.
   - If the map does not respond, the phase failed.

8. **Safari/iPad check, if available:**
   - Open on iPad Safari.
   - Test touch pan/zoom.
   - Test node clicking.
   - Test side panel readability.
   - If any fail, the phase failed for iPad.

If ANY test fails, I will report "Phase failed" and Cursor must rollback or wait for my instructions.

---

## Manual Test Checklist

I should be able to confirm:
- The app opens.
- The map loads.
- Nodes appear.
- Edges appear.
- Zoom works.
- Pan works.
- Node click works.
- Side panel updates.
- Category filters work.
- Fit works.
- Clear works.
- Search works if implemented.
- Key opens/closes if implemented.
- Dashboard navigation works if implemented.
- No scientific content changed unless explicitly requested.
- The app remains study-friendly.
- App remains usable in Safari/iPad if tested there.
- Touch pan/zoom still works.
- UI buttons are large enough to tap.
- Side panel does not make the map unusable on iPad.

If any test fails:
Stop adding features.
Fix the broken phase before continuing.

---

## Rollback Rule

If "Safe to continue?" = NO, or if I say "No, rollback," "This broke something," "Phase failed," "Revert," or "Undo":

1. Stop immediately.
2. Do not start the next phase.
3. Restore from the most recent backup.
4. Document what broke.
5. Document which files were restored.
6. Document whether any changes remain after restore.
7. Ask: "Should I try a different approach, or wait for new instructions?"
8. Do not retry the same approach without explicit approval.

If restore fails:
1. Stop immediately.
2. Explain why restore failed.
3. List the files affected.
4. Ask for instructions before attempting another fix.

---

## If I Reject a Phase Plan

If I reject a phase plan:
1. Do not edit.
2. Do not argue.
3. Ask what part of the plan I want changed, or propose a safer smaller version.
4. Do not retry the same plan unless I explicitly approve it.
5. Keep the current files unchanged.

---

## Unsafe Phase Rule

If you determine that a phase cannot be completed safely:

Stop and report:
1. Why the phase is risky
2. What would need to change to make it safe
3. Whether a safer alternative exists
4. Whether the phase should be skipped, delayed, or modified

Do not attempt the risky phase.
Do not invent a workaround.
Wait for my decision before proceeding.

---

## Safari / iPad Blocking Rule

If desktop works but iPad/Safari fails, the phase is not fully passed.

Treat iPad/Safari failure as blocking unless I explicitly choose to defer it.

If Safari/iPad breaks after any phase:
1. Stop.
2. Do not continue to the next phase.
3. Identify whether the issue is likely layout, touch controls, script loading, side panel sizing, or viewport behavior.
4. Restore from backup if needed.
5. Ask whether to fix Safari/iPad now or rollback.

Do not treat Safari/iPad breakage as minor.

---

## Phase-Specific Checkpoints

### QC Checkpoint 0: Inspection Approval

Before editing, confirm:
- Cursor identified where graph data lives.
- Cursor identified where CSS/theme lives.
- Cursor identified where Cytoscape behavior lives.
- Cursor identified category filters, side panel, Fit, Clear, zoom, pan, and node click behavior.
- Cursor did not suggest rewriting the app from scratch.
- Cursor did not suggest importing All Decks(1).txt into the app.
- Cursor gave a clear refactor plan.

Pass condition:
I understand the plan, and Cursor is only refactoring the existing map first.

### QC Checkpoint 1: Refactor Safety Check

Open the refactored app and test:
- Map loads.
- Nodes appear.
- Edges appear.
- Original layout/positions are preserved.
- Zoom works.
- Pan works.
- Node click works.
- Side panel updates.
- Category filters work.
- Fit works.
- Clear works.
- No scientific content changed.
- No node labels, IDs, descriptions, categories, or edges changed.

Pass condition:
The refactored version behaves like the original.

### QC Checkpoint 2: Dashboard Check

Test:
- Dashboard opens.
- Metabolism map opens from dashboard.
- Back/home navigation works.
- Coming-soon maps do not break anything.
- Current map still works exactly as before.
- Shared theme does not distort the map.
- App still opens locally and can be hosted later.

Pass condition:
The dashboard works and the existing map is still usable.

### QC Checkpoint 3A: Navigation Check

Test:
- Arrow-key panning works if implemented.
- + / - zoom works if implemented.
- 0 fits map if implemented.
- Esc clears selection if implemented.
- Keyboard shortcuts do not interfere with search fields.
- Mouse/trackpad panning feels easier.
- iPad/Safari usability is not worse.
- Fit and Clear still work.

Pass condition:
Navigation is easier and core map behavior is preserved.

### QC Checkpoint 3B: Search Check

Test:
- Search finds nodes by label.
- Search finds nodes by description if implemented.
- Search highlights results.
- Nonmatches fade.
- Clicking a result focuses that node.
- Side panel updates after clicking result.
- Clear search restores full map.
- Typing in search does not trigger map keyboard shortcuts.

Pass condition:
Search helps find nodes without breaking navigation.

### QC Checkpoint 4: Key System Check

Test:
- Key button opens.
- Key button closes.
- Key does not cover the whole map permanently.
- Abbreviation data is stored separately, not hard-coded into app.js.
- Color/category key matches the actual map colors.
- Edge/arrow key matches actual edge styles.
- Shape/silhouette key matches actual node styles.
- Priority label key is understandable.
- The key is helpful, not overwhelming.

Pass condition:
The key is modular, hidden by default, and accurate.

### QC Checkpoint 5: Visual Readability Check

Test:
- Text is readable on nodes.
- Text is readable in the side panel.
- Colors are distinguishable.
- Palette is not too pale.
- The map is still cute/light, not dark.
- Nodes are not too plump.
- Nodes do not overlap worse than before.
- Edges are visible but not visually overwhelming.
- Print preview is readable if print mode was added.

Pass condition:
The map looks better and is easier to read, not just prettier.

### QC Checkpoint 5B: Print Check

Test:
- Print preview opens.
- Background is not dark.
- Text is visible.
- UI controls do not clutter the print.
- Colors remain distinguishable.
- It does not waste excessive ink.

Pass condition:
Print preview is usable enough for reference.

### QC Checkpoint 6: Silhouette Check

Test:
- Silhouettes are used only for major organs, cells, organelles, or blood structures.
- Labels are still readable.
- Silhouettes do not replace text.
- Molecules, enzymes, metabolites, and small regulators are not turned into organ shapes.
- The map does not become visually noisy.
- Node sizes do not become much larger.
- iPad performance is still okay.

Pass condition:
Silhouettes help recognition without hurting readability.

### QC Checkpoint 7: Pathway Focus Check

Test each pathway:
- Selecting pathway highlights relevant nodes.
- Unrelated nodes fade.
- Clear pathway restores the whole map.
- Side panel shows a pathway story.
- Pathway story has trigger → organs → mechanism → outcome.
- No unsupported clinical claims were added.
- New nodes, if any, are clearly listed.
- MCAT-core / MCAT-adjacent / clinical extension labels make sense.

Pass condition:
Each pathway helps me understand a story without cluttering the entire map.

If Cursor invents science, use this instruction:

Pause. List every scientific assumption you made in this pathway and classify each as confirmed, uncertain, or needs source review.

### QC Checkpoint 8: Expansion Readiness Check

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

Pass condition:
The current metabolism app is stable enough to expand.

### QC Checkpoint 9: Content Expansion Check

Review:
- All new nodes are listed.
- All new edges are listed.
- Added organs make sense.
- Added pathways are not too clinical.
- Diabetes is not automatically labeled clinical extension.
- Genetic, neurodevelopmental, immune, cancer/cell-cycle, and metabolic disease topics are classified by MCAT relevance.
- No duplicate nodes were created.
- No old metabolism nodes were deleted.
- No old relationships were accidentally changed.
- Map is still navigable.

Pass condition:
The expansion adds useful content without damaging the original metabolism map.
