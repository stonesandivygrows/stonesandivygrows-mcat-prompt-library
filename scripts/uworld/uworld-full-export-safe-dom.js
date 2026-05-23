// UWorld Full Export — Safe DOM Clone + Linked Diagram Capture Version
// Purpose: Export UWorld review questions to a printable PDF while avoiding broken equation rendering.
// Usage: Open a UWorld review page that shows "1 of 30" / "1 of 59", paste this entire script into Chrome DevTools Console, and press Enter.
// Notes:
// - This version avoids global CSS resets like * { height: auto }, which can break UWorld equation layouts.
// - This version also clicks blue linked explanation terms and captures opened image/diagram popups outside the main question container.
// - If equations still render incorrectly in the print preview, do not save that PDF; use a screenshot-based export approach instead.

(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function getQuestionCount() {
    const m = document.body.innerText.match(/(\d+)\s+of\s+(\d+)/);
    return m ? { current: Number(m[1]), total: Number(m[2]) } : null;
  }

  function clickNext() {
    const next = document.querySelector('a[aria-label*="next" i]');
    if (!next) return false;
    next.click();
    return true;
  }

  function getHeadHTML(baseURI) {
    const head = document.head.cloneNode(true);
    head.querySelectorAll('script').forEach(s => s.remove());
    return `<base href="${baseURI}">\n${head.innerHTML}`;
  }

  function isMathLike(el) {
    return !!el.closest(
      '.MathJax, mjx-container, .katex, svg, math, [class*="math"], [class*="Math"], [id*="math"], [id*="Math"]'
    );
  }

  function isVisible(el) {
    if (!el || !(el instanceof Element)) return false;
    const cs = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return cs.display !== 'none' &&
           cs.visibility !== 'hidden' &&
           cs.opacity !== '0' &&
           rect.width > 20 &&
           rect.height > 20;
  }

  function looksLikeUsablePopup(el) {
    const center = document.getElementById('centerContent');
    if (center && center.contains(el)) return false;

    const hasMedia = !!el.querySelector('img, svg, canvas, table, figure');
    const text = (el.innerText || '').trim();

    // Blue UWorld links commonly open a small modal with an image/diagram, but some include explanatory text.
    return hasMedia || text.length > 20;
  }

  function convertCanvasesToImages(sourceRoot, cloneRoot) {
    const sourceCanvases = [...sourceRoot.querySelectorAll('canvas')];
    const cloneCanvases = [...cloneRoot.querySelectorAll('canvas')];

    sourceCanvases.forEach((canvas, i) => {
      const cloneCanvas = cloneCanvases[i];
      if (!cloneCanvas) return;

      try {
        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');
        img.alt = 'Captured canvas diagram';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        cloneCanvas.replaceWith(img);
      } catch (e) {
        // Some canvases can be tainted by cross-origin images. Leave them as-is if conversion fails.
      }
    });
  }

  function forcePopupClonePrintable(clone) {
    clone.querySelectorAll('script, noscript, iframe').forEach(el => el.remove());

    const printableTargets = [
      clone,
      ...clone.querySelectorAll(
        '.modal, .popup, .dialog, [role="dialog"], .cdk-overlay-container, .cdk-overlay-pane, .mat-dialog-container, [class*="popup"], [class*="modal"], [class*="dialog"], [class*="overlay"]'
      )
    ];

    printableTargets.forEach(el => {
      if (isMathLike(el)) return;
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = '1';
      el.style.position = 'static';
      el.style.inset = 'auto';
      el.style.transform = 'none';
      el.style.maxHeight = 'none';
      el.style.overflow = 'visible';
      el.style.width = 'auto';
      el.style.maxWidth = '100%';
    });

    clone.querySelectorAll('img').forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });

    return clone;
  }

  function captureVisiblePopupHTML(linkLabel, seenSignatures) {
    const popupSelectors = [
      '.modal',
      '.popup',
      '.dialog',
      '[role="dialog"]',
      '.cdk-overlay-container',
      '.cdk-overlay-pane',
      '.mat-dialog-container',
      '[class*="popup"]',
      '[class*="modal"]',
      '[class*="dialog"]',
      '[class*="overlay"]'
    ].join(', ');

    const popups = [...document.querySelectorAll(popupSelectors)]
      .filter(el => isVisible(el) && looksLikeUsablePopup(el));

    const captured = [];

    for (const popup of popups) {
      const clone = popup.cloneNode(true);
      convertCanvasesToImages(popup, clone);
      forcePopupClonePrintable(clone);

      const imgSources = [...clone.querySelectorAll('img')].map(img => img.currentSrc || img.src || '').join('|');
      const signature = `${clone.innerText.trim().slice(0, 300)}|${imgSources}|svg:${clone.querySelectorAll('svg').length}|canvas:${clone.querySelectorAll('canvas').length}`;

      if (seenSignatures.has(signature)) continue;
      seenSignatures.add(signature);

      captured.push(`
        <div class="linked-asset">
          <div class="linked-asset-source">Linked blue-word asset: ${escapeHTML(linkLabel || 'opened diagram')}</div>
          <div class="linked-asset-content">${clone.outerHTML}</div>
        </div>
      `);
    }

    return captured;
  }

  function closeVisiblePopups() {
    const closeSelectors = [
      'button[aria-label*="close" i]',
      'button[title*="close" i]',
      '[aria-label*="close" i]',
      '[title*="close" i]',
      '.close',
      '[class*="close"]'
    ].join(', ');

    const candidates = [...document.querySelectorAll(closeSelectors)]
      .filter(el => isVisible(el) && !el.closest('#centerContent'));

    // Click the first few close controls only; this avoids accidentally clicking a hidden/global control.
    candidates.slice(0, 3).forEach(el => {
      try { el.click(); } catch (e) {}
    });

    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    } catch (e) {}
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  async function expandAndCaptureBlueLinkedAssets() {
    const center = document.getElementById('centerContent') || document.body;
    const seenSignatures = new Set();
    const capturedAssets = [];

    const linkSelectors = [
      '#explanation a[href="javascript:void(0)"]',
      '#first-explanation a[href="javascript:void(0)"]',
      '#centerContent a[href="javascript:void(0)"]'
    ].join(', ');

    const links = [...center.querySelectorAll(linkSelectors)]
      .filter(link => {
        const text = (link.innerText || '').trim();
        if (text.length < 2) return false;
        if (!isVisible(link)) return false;
        return true;
      });

    for (const link of links) {
      const label = (link.innerText || link.textContent || 'opened diagram').trim();

      try {
        link.scrollIntoView({ block: 'center', inline: 'nearest' });
      } catch (e) {}

      await sleep(150);

      try {
        link.click();
      } catch (e) {
        continue;
      }

      // Give UWorld time to insert/open the diagram/modal.
      await sleep(700);

      capturedAssets.push(...captureVisiblePopupHTML(label, seenSignatures));

      // Some links expand inline rather than opening a popup. Those will be included when centerContent is cloned.
      // Close external popups so the next linked term can be opened and captured cleanly.
      closeVisiblePopups();
      await sleep(350);
    }

    if (!capturedAssets.length) return '';

    return `
      <section class="linked-assets">
        <h3>Linked blue-word diagrams / images</h3>
        ${capturedAssets.join('\n')}
      </section>
    `;
  }

  function unlockOnlyLargeScrollContainers(clone) {
    const candidates = clone.querySelectorAll('*');

    candidates.forEach(el => {
      if (isMathLike(el)) return;

      const style = el.getAttribute('style') || '';
      const className = typeof el.className === 'string' ? el.className : '';

      const likelyScrollBox =
        /overflow\s*:\s*(auto|scroll|hidden)/i.test(style) ||
        /scroll|viewport|panel|container|abstract|explanation|question/i.test(className) ||
        ['centerContent', 'questionInformation', 'questionAbstract', 'answerContainer', 'explanation-container']
          .includes(el.id);

      if (likelyScrollBox) {
        el.style.maxHeight = 'none';
        el.style.overflow = 'visible';
      }
    });

    clone.style.maxHeight = 'none';
    clone.style.overflow = 'visible';
  }

  function getQuestionHTML() {
    const center = document.getElementById('centerContent');
    if (!center) return '<p>Question content not found.</p>';

    const clone = center.cloneNode(true);

    clone.querySelectorAll('#pullovertab, #context-menu, .cdk-drag, .dot-container')
      .forEach(e => e.remove());

    unlockOnlyLargeScrollContainers(clone);

    return clone.outerHTML;
  }

  function getTestID() {
    const body = document.body.innerText;
    const m = body.match(/Test\s*Id:\s*(\d+)/i) || body.match(/Custom\s*Test\s*Id:\s*(\d+)/i);
    return m ? m[1] : 'NoID';
  }

  function getTestDate() {
    const body = document.body.innerText;
    const m = body.match(/Date\s*:\s*([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})/);

    if (m) {
      const months = {
        Jan: '01', Feb: '02', Mar: '03', Apr: '04',
        May: '05', Jun: '06', Jul: '07', Aug: '08',
        Sep: '09', Oct: '10', Nov: '11', Dec: '12'
      };

      return `${months[m[1]]}${m[2].padStart(2, '0')}${m[3]}`;
    }

    const today = new Date();
    return `${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}${today.getFullYear()}`;
  }

  function getSubject() {
    const body = document.body.innerText.toLowerCase();
    const subjects = [];

    if (/\bbiology\b/.test(body)) subjects.push('Biology');
    if (/\bcars\b/.test(body)) subjects.push('CARS');
    if (/\bpsychology\b/.test(body)) subjects.push('Psychology');
    if (/\bchemistry\b/.test(body)) subjects.push('Chemistry');
    if (/\bphysics\b/.test(body)) subjects.push('Physics');
    if (/\bbiochemistry\b/.test(body)) subjects.push('Biochemistry');
    if (/\bbehavioral\s+sciences\b/.test(body)) subjects.push('BehavSci');

    if (subjects.length === 1) return subjects[0];
    return subjects.length > 1 ? 'Mixed' : 'Unknown';
  }

  let qInfo = getQuestionCount();

  if (!qInfo) {
    alert('Run this script from the UWorld review page, where it shows something like "1 of 30".');
    return;
  }

  let { current, total } = qInfo;
  console.log(`Starting – Question ${current} of ${total}`);

  if (current !== 1) {
    const nav = document.querySelector('a[aria-label="Navigator"]');

    if (nav) {
      nav.click();
      await sleep(1500);

      const q1 = document.querySelector('[data-question="1"]') ||
                 [...document.querySelectorAll('.question-list-item')]
                   .find(el => el.innerText.trim() === '1');

      if (q1) {
        q1.click();

        for (let i = 0; i < 20; i++) {
          await sleep(500);
          if (getQuestionCount()?.current === 1) break;
        }
      }
    }

    qInfo = getQuestionCount();

    if (!qInfo || qInfo.current !== 1) {
      alert('Could not go to Question 1. Please manually go to Question 1 and re-run.');
      return;
    }

    current = 1;
  }

  const baseURI = document.baseURI;
  const headHTML = getHeadHTML(baseURI);
  const questionsHTML = [];

  while (current <= total) {
    console.log(`Exporting Question ${current}...`);
    await sleep(1200);

    const linkedAssetsHTML = await expandAndCaptureBlueLinkedAssets();
    const content = getQuestionHTML();
    const extraClass = current === 1 ? 'first-qblock' : '';

    questionsHTML.push(`
      <div class="qblock ${extraClass}">
        <h2>Question ${current} of ${total}</h2>
        ${content}
        ${linkedAssetsHTML}
      </div>
    `);

    if (current === total) break;

    if (!clickNext()) {
      console.warn('Next button not found – stopping.');
      break;
    }

    let newInfo = null;

    for (let i = 0; i < 25; i++) {
      await sleep(400);
      newInfo = getQuestionCount();
      if (newInfo && newInfo.current !== current) break;
    }

    if (!newInfo || newInfo.current === current) {
      console.warn('Navigation stuck – stopping.');
      break;
    }

    current = newInfo.current;
  }

  const testID = getTestID();
  const date = getTestDate();
  const subject = getSubject();
  const numQ = questionsHTML.length;

  const docTitle = `UWorld_${subject}_${date}_ID${testID}_${numQ}Q`.replace(/_{2,}/g, '_');

  const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${docTitle}</title>
  ${headHTML}

  <style>
    body {
      margin: 0.4in;
      font-family: Arial, sans-serif;
      font-size: 11pt;
      background: white;
    }

    h1 {
      font-size: 20pt;
    }

    h2 {
      font-size: 15pt;
      margin-top: 20px;
    }

    h3 {
      font-size: 12pt;
      margin-top: 12px;
    }

    .qblock {
      margin-bottom: 24px;
      break-inside: auto;
      page-break-inside: auto;
    }

    .qblock:not(.first-qblock) {
      break-before: page;
      page-break-before: always;
    }

    #centerContent,
    #questionInformation,
    #questionAbstract,
    #answerContainer,
    #explanation-container {
      max-height: none !important;
      overflow: visible !important;
    }

    img {
      max-width: 100%;
    }

    .linked-assets {
      margin-top: 14px;
      padding-top: 10px;
      border-top: 1px solid #bfbfbf;
    }

    .linked-asset {
      margin: 10px 0;
      padding: 8px;
      border: 1px solid #d0d0d0;
      background: #fff;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .linked-asset-source {
      font-size: 10pt;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .linked-asset-content img,
    .linked-asset-content svg {
      max-width: 100%;
      height: auto;
    }

    .linked-asset-content .modal,
    .linked-asset-content .popup,
    .linked-asset-content .dialog,
    .linked-asset-content [role="dialog"],
    .linked-asset-content .cdk-overlay-container,
    .linked-asset-content .cdk-overlay-pane,
    .linked-asset-content .mat-dialog-container,
    .linked-asset-content [class*="popup"],
    .linked-asset-content [class*="modal"],
    .linked-asset-content [class*="dialog"],
    .linked-asset-content [class*="overlay"] {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      position: static !important;
      inset: auto !important;
      transform: none !important;
      max-height: none !important;
      overflow: visible !important;
      max-width: 100% !important;
    }

    @page {
      margin: 0.4in;
    }
  </style>
</head>

<body>
  <h1>UWorld Full Export – ${numQ} Questions</h1>

  ${questionsHTML.join('\n')}

  <script>
    (async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      await Promise.all(
        [...document.images].map(img =>
          img.complete
            ? Promise.resolve()
            : new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
              })
        )
      );

      setTimeout(() => window.print(), 3000);
    })();
  </script>
</body>
</html>`;

  const w = window.open('', '', 'width=1000,height=800');

  if (!w) {
    alert('Popup blocked. Allow popups for UWorld, then run the script again.');
    return;
  }

  w.document.write(fullHTML);
  w.document.close();

  console.log(`Done. Suggested PDF name: ${docTitle}.pdf`);
})();
