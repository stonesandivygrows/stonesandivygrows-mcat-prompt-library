# UWorld Console Annotation Export Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the UWorld Chrome DevTools console exporter so printable HTML/PDF includes native highlights, underlines, strikethroughs, and typed notes for every question.

**Architecture:** Keep the current single-file async console script and add isolated helper functions for annotation discovery, computed-style copying, note extraction, note placement, fallback rendering, and logging. Preserve the searchable DOM export, existing question navigation, metadata naming, and diagram expansion behavior.

**Tech Stack:** Browser JavaScript, DOM APIs, computed styles, Chrome DevTools console, printable HTML/CSS.

## Global Constraints

- The script remains pasteable as one self-contained async IIFE in Chrome DevTools.
- The export remains searchable and selectable HTML.
- Annotation failures must be nonfatal and must not stop question navigation.
- No note may be silently dropped.
- Avoid global style resets that can damage equations, tables, or diagrams.
- Preserve existing PDF naming, page breaks, and diagram expansion behavior.

---

### Task 1: Preserve Visual Annotation Styling

**Files:**
- Modify: `scripts/uworld/uworld-full-export-safe-dom.js`

**Interfaces:**
- Consumes: the live `#centerContent` DOM and its deep clone.
- Produces: `copyAnnotationStyles(sourceRoot, cloneRoot): Array<object>` and `getQuestionHTML(annotationNotes): string`.

- [ ] **Step 1: Add annotation detection helpers**

Implement conservative detection for source elements whose class, id, title, aria-label, data attributes, tag name, or computed style indicate highlight, underline, or strikethrough.

```js
function getAnnotationType(el) {
  const attrs = [
    el.className,
    el.id,
    el.getAttribute('title'),
    el.getAttribute('aria-label'),
    el.getAttribute('data-annotation-type'),
    el.getAttribute('data-type')
  ].filter(Boolean).join(' ').toLowerCase();

  const cs = getComputedStyle(el);
  const decoration = `${cs.textDecorationLine} ${cs.textDecoration}`.toLowerCase();
  const background = cs.backgroundColor;

  if (/line-through|strike/.test(`${attrs} ${decoration}`)) return 'strikethrough';
  if (/underline/.test(`${attrs} ${decoration}`)) return 'underline';
  if (/highlight/.test(attrs) || (background && background !== 'rgba(0, 0, 0, 0)' && background !== 'transparent')) {
    return 'highlight';
  }
  return null;
}
```

- [ ] **Step 2: Copy only annotation-relevant computed styles**

```js
function copyAnnotationStyles(sourceRoot, cloneRoot) {
  const sourceEls = [sourceRoot, ...sourceRoot.querySelectorAll('*')];
  const cloneEls = [cloneRoot, ...cloneRoot.querySelectorAll('*')];
  const annotations = [];

  sourceEls.forEach((sourceEl, index) => {
    const cloneEl = cloneEls[index];
    if (!cloneEl) return;

    const type = getAnnotationType(sourceEl);
    if (!type) return;

    const cs = getComputedStyle(sourceEl);
    cloneEl.style.backgroundColor = cs.backgroundColor;
    cloneEl.style.textDecorationLine = cs.textDecorationLine;
    cloneEl.style.textDecorationStyle = cs.textDecorationStyle;
    cloneEl.style.textDecorationColor = cs.textDecorationColor;
    cloneEl.style.border = cs.border;
    cloneEl.style.boxShadow = cs.boxShadow;
    cloneEl.dataset.exportAnnotationType = type;

    annotations.push({
      type,
      text: (sourceEl.innerText || sourceEl.textContent || '').trim(),
      nearbyText: '',
      sourceSignature: buildSourceSignature(sourceEl),
      placementStatus: 'inline'
    });
  });

  return annotations;
}
```

- [ ] **Step 3: Verify manually on highlight, underline, and strikethrough examples**

Run the console script on one question containing each visual annotation type. Confirm the exported print preview preserves each annotation without changing equation layout.

- [ ] **Step 4: Commit**

```bash
git add scripts/uworld/uworld-full-export-safe-dom.js
git commit -m "feat: preserve UWorld visual annotations"
```

---

### Task 2: Capture Typed Notes

**Files:**
- Modify: `scripts/uworld/uworld-full-export-safe-dom.js`

**Interfaces:**
- Consumes: the current live question page.
- Produces: `captureTypedNotes(questionNumber): Promise<Array<object>>`.

- [ ] **Step 1: Add marker discovery and source signatures**

Use conservative selectors for annotation and note markers, while excluding obvious global toolbar controls.

```js
function buildSourceSignature(el) {
  const nearby = getNearbyText(el);
  const attrs = [
    el.id,
    el.className,
    el.getAttribute('title'),
    el.getAttribute('aria-label'),
    el.getAttribute('data-annotation-id'),
    el.getAttribute('data-note-id')
  ].filter(Boolean).join('|');
  return `${attrs}|${nearby.slice(0, 160)}`;
}

function findNoteMarkers() {
  const selectors = [
    '[class*="annotation" i]',
    '[id*="annotation" i]',
    '[class*="note" i]',
    '[id*="note" i]',
    '[title*="note" i]',
    '[aria-label*="note" i]',
    '[data-annotation-id]',
    '[data-note-id]'
  ].join(',');

  return [...document.querySelectorAll(selectors)].filter(el => {
    if (!isVisible(el)) return false;
    if (el.closest('header, nav, [role="toolbar"]')) return false;
    return !!el.closest('#centerContent, #questionInformation, #questionAbstract, #answerContainer, #explanation, #first-explanation') ||
      /annotation|note|comment/i.test([el.className, el.id, el.title, el.getAttribute('aria-label')].join(' '));
  });
}
```

- [ ] **Step 2: Add visible note text extraction**

Extract user-entered content from visible textareas, inputs, contenteditable regions, and dialogs. Ignore placeholders and blank UI labels.

```js
function extractVisibleNoteText() {
  const roots = [...document.querySelectorAll(
    'textarea, input[type="text"], [contenteditable="true"], [role="dialog"], .modal, .popup, [class*="note" i], [class*="annotation" i]'
  )].filter(isVisible);

  const values = roots.map(el => {
    if (el.matches('textarea, input[type="text"]')) return el.value || '';
    return el.innerText || el.textContent || '';
  }).map(text => text.trim()).filter(text => text.length > 0);

  return values.find(text => !/^(save|cancel|close|delete|edit|note|annotation)$/i.test(text)) || '';
}
```

- [ ] **Step 3: Add nonfatal note capture loop**

For each marker, click, wait, extract, deduplicate, close, and log question-specific results. Empty or inaccessible notes must create warnings rather than terminate the export.

```js
async function captureTypedNotes(questionNumber) {
  const notes = [];
  const seen = new Set();
  const markers = findNoteMarkers();

  for (const marker of markers) {
    const sourceSignature = buildSourceSignature(marker);
    const nearbyText = getNearbyText(marker);

    try {
      marker.scrollIntoView({ block: 'center', inline: 'nearest' });
      marker.click();
      await sleep(450);

      const text = extractVisibleNoteText();
      if (!text) {
        console.warn(`Question ${questionNumber}: note marker found but no typed note text was captured.`);
        closeVisiblePopups();
        await sleep(200);
        continue;
      }

      const key = `${text}|${sourceSignature}`;
      if (!seen.has(key)) {
        seen.add(key);
        notes.push({
          type: 'note',
          text,
          nearbyText,
          sourceSignature,
          placementStatus: 'fallback'
        });
      }

      closeVisiblePopups();
      await sleep(200);
    } catch (error) {
      console.error(`Question ${questionNumber}: failed to capture one note.`, error);
      closeVisiblePopups();
    }
  }

  console.log(`Question ${questionNumber}: captured ${notes.length} typed note(s).`);
  return notes;
}
```

- [ ] **Step 4: Verify manually with one, multiple, blank, and deleted notes**

Confirm each nonblank note appears once. Confirm blank/deleted markers produce a warning but do not stop export.

- [ ] **Step 5: Commit**

```bash
git add scripts/uworld/uworld-full-export-safe-dom.js
git commit -m "feat: capture UWorld typed notes"
```

---

### Task 3: Place Notes and Render Fallback Annotation Sections

**Files:**
- Modify: `scripts/uworld/uworld-full-export-safe-dom.js`

**Interfaces:**
- Consumes: cloned question DOM and `Array<annotation>`.
- Produces: printable inline callouts or fallback `Annotations` HTML.

- [ ] **Step 1: Add placement helpers**

Attempt exact signature mapping first, nearby-text matching second, and fallback rendering last.

```js
function injectTypedNotes(clone, notes) {
  const fallback = [];

  notes.forEach((note, index) => {
    const target = findCloneTarget(clone, note.sourceSignature, note.nearbyText);
    if (!target) {
      fallback.push({ ...note, placementStatus: 'fallback' });
      return;
    }

    const callout = document.createElement('aside');
    callout.className = 'export-annotation-callout';
    callout.innerHTML = `<strong>Annotation ${index + 1}</strong><div>${escapeHTML(note.text)}</div>`;
    target.insertAdjacentElement('afterend', callout);
    note.placementStatus = 'nearby';
  });

  return fallback;
}
```

- [ ] **Step 2: Add fallback section rendering**

```js
function renderFallbackAnnotations(notes) {
  if (!notes.length) return '';

  return `
    <section class="export-annotations">
      <h3>Annotations</h3>
      ${notes.map((note, index) => `
        <article class="export-annotation-fallback">
          <strong>Annotation ${index + 1}</strong>
          <div>${escapeHTML(note.text)}</div>
          ${note.nearbyText ? `<div class="annotation-nearby"><strong>Near:</strong> ${escapeHTML(note.nearbyText)}</div>` : ''}
          <div class="annotation-placement-warning">Exact placement could not be guaranteed.</div>
        </article>
      `).join('')}
    </section>
  `;
}
```

- [ ] **Step 3: Integrate capture into the export loop**

The order per question must be: wait, expand diagrams, capture typed notes, clone with visual styles, place notes, append fallback notes, add the completed question block.

```js
const typedNotes = await captureTypedNotes(current);
const { html: content, fallbackNotes } = getQuestionHTML(typedNotes);
const annotationsHTML = renderFallbackAnnotations(fallbackNotes);
```

- [ ] **Step 4: Add print-safe CSS**

```css
.export-annotation-callout,
.export-annotation-fallback {
  margin: 8px 0;
  padding: 8px 10px;
  border: 1px solid #555;
  background: #fff;
  break-inside: avoid;
  page-break-inside: avoid;
}

.export-annotations {
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px solid #777;
}

.annotation-nearby,
.annotation-placement-warning {
  margin-top: 5px;
  font-size: 9.5pt;
}
```

- [ ] **Step 5: Remove the global `* { height:auto }` print reset**

Replace the global wildcard reset with targeted overflow rules so MathJax, SVG, canvas, and diagram dimensions are not flattened.

- [ ] **Step 6: Run the full manual matrix**

Verify highlight only, underline only, strikethrough only, note only, multiple note types, no annotations, math-heavy content, diagrams plus notes, unmapped notes, and blank notes.

- [ ] **Step 7: Commit**

```bash
git add scripts/uworld/uworld-full-export-safe-dom.js
git commit -m "feat: export UWorld annotations and notes"
```

---

### Task 4: Final Verification and Usage Documentation

**Files:**
- Modify: `scripts/uworld/uworld-full-export-safe-dom.js`
- Modify or create: `scripts/uworld/README.md`

**Interfaces:**
- Produces: a paste-ready console script and user-facing test instructions.

- [ ] **Step 1: Verify syntax**

Paste the entire script into Chrome DevTools on a UWorld review page. Expected result: no syntax errors and the export begins at Question 1.

- [ ] **Step 2: Verify nonfatal behavior**

Force one annotation selector to fail. Expected result: the console logs a question-specific warning and continues to the next question.

- [ ] **Step 3: Verify final print preview**

Expected result: selectable text, intact equations, all questions included, typed notes shown once, visual annotations preserved when possible, and uncertain notes placed in the fallback section.

- [ ] **Step 4: Document usage and limitations**

Document that UWorld DOM selectors may change and that the script logs unmatched annotation markers rather than silently dropping them.

- [ ] **Step 5: Commit**

```bash
git add scripts/uworld/uworld-full-export-safe-dom.js scripts/uworld/README.md
git commit -m "docs: explain UWorld annotation export"
```
