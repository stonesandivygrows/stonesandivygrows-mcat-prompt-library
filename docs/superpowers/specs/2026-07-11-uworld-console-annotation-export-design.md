# UWorld Console Annotation Export Design

## Goal

Update `scripts/uworld/uworld-full-export-safe-dom.js`, which is pasted into the Chrome DevTools console on a UWorld review page, so the exported printable HTML/PDF preserves both visual annotations and typed notes for every question.

The export must remain searchable/selectable HTML rather than switching to full-page screenshots.

## Scope

The script will export:

- Native highlights
- Underlines
- Strikethroughs
- Typed annotation notes
- Existing question, answer, explanation, and linked blue-word diagram content

The script will not attempt to edit or create annotations inside UWorld.

## Recommended Approach

Use a hybrid capture strategy.

1. Clone the visible question DOM as the script already does.
2. Preserve inline annotation markup and computed visual styles when those annotations are inside the cloned question container.
3. Detect annotation markers, note buttons, or note overlays rendered outside `#centerContent`.
4. Open each note when needed, capture its text, close it safely, and associate it with the current question.
5. Place note text near its original marker when a reliable anchor can be matched.
6. Otherwise append the note to a clearly labeled `Annotations` section at the end of that question.
7. Warn in the console when an annotation marker is found but its content cannot be captured.

## Architecture

### 1. Annotation Discovery

Add a function that searches the live UWorld page for likely annotation elements using conservative selectors and evidence:

- Elements whose class, id, title, aria-label, or data attributes contain terms such as `highlight`, `underline`, `strike`, `annotation`, `note`, or `comment`
- Visible note icons or buttons associated with the current question
- Overlay elements that appear after clicking a note marker

Discovery must stay scoped to the current question and avoid global toolbar controls where possible.

### 2. Inline Style Preservation

Before or immediately after cloning `#centerContent`:

- Identify source elements that visually represent highlights, underlines, or strikethroughs
- Copy only the annotation-relevant computed styles to the corresponding cloned elements
- Preserve background color, text-decoration line/style/color, border or box-shadow when used as an annotation indicator
- Avoid copying layout-heavy computed styles that could damage equations or UWorld formatting

The existing math-safety behavior must remain unchanged.

### 3. Typed Note Capture

For each visible note marker:

- Record an anchor signature based on nearby text, marker attributes, and DOM position
- Click the marker only when necessary
- Wait for the note overlay or editor to appear
- Extract the typed note text from visible textareas, editable regions, dialog content, or note bodies
- Ignore blank notes and obvious UI labels
- Close the note overlay using existing popup-closing behavior or a note-specific close routine
- Deduplicate repeated note text within the same question

### 4. Note Placement

Preferred placement order:

1. Insert beside the matching cloned annotation marker when the source marker can be mapped reliably to the clone.
2. Insert directly after the nearest matching text block when a stable text anchor exists.
3. Append to a question-level `Annotations` section when exact placement is uncertain.

The fallback section should include:

- Annotation number
- Typed note text
- Nearby source text when available
- A label indicating that exact placement could not be guaranteed

No note should be silently dropped.

### 5. Export Integration

For each question, the export loop will:

1. Wait for the question to finish rendering.
2. Capture linked blue-word assets using the existing logic.
3. Capture annotations and typed notes.
4. Clone the question content with annotation styling preserved.
5. Inject any mapped note callouts.
6. Append fallback notes if needed.
7. Add the completed question block to the final printable document.

Existing naming, pagination, linked-diagram capture, image waiting, and print behavior must remain intact.

## Data Model

Use a lightweight in-memory annotation object per question:

```js
{
  type: 'highlight' | 'underline' | 'strikethrough' | 'note',
  text: '',
  nearbyText: '',
  sourceSignature: '',
  placementStatus: 'inline' | 'nearby' | 'fallback' | 'failed'
}
```

This keeps discovery, extraction, placement, and reporting separate and testable.

## Error Handling

The script must continue exporting even when annotation capture fails.

Use console messages with question numbers:

- `console.log` for annotation counts and successful capture
- `console.warn` for unmatched markers, empty note dialogs, or uncertain placement
- `console.error` only for unexpected failures that prevent a specific annotation from being processed

Failures in annotation capture must not stop navigation to the next question.

## Output Styling

Add print-safe styles for:

- Inline note callouts
- Fallback annotation sections
- Annotation labels and nearby-text references

Styles should be simple, high-contrast, and compatible with grayscale printing. They must not override UWorld's equation, table, or diagram layouts.

## Testing

Test the console script on review pages containing:

1. Highlight only
2. Underline only
3. Strikethrough only
4. Typed note only
5. Multiple annotation types on one question
6. Multiple typed notes on one question
7. Annotation marker rendered outside `#centerContent`
8. No annotations
9. Math-heavy explanation
10. Linked blue-word diagram plus annotations
11. A note that cannot be mapped to an exact location
12. A blank or deleted note marker

For each case, verify:

- Export completes
- Text remains searchable/selectable
- Equations remain intact
- Annotation appearance is preserved when possible
- Typed note text appears exactly once
- Uncertain notes appear in the fallback section
- Console warnings are specific and nonfatal

## Success Criteria

The change is successful when a user can paste the updated script into the Chrome DevTools console on a UWorld review page and obtain a printable export that includes both visual annotations and typed notes, while retaining the current searchable HTML output and linked-diagram functionality.
