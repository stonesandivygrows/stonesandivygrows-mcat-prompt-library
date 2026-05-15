// UWorld Full Export — Safe DOM Clone Version
// Purpose: Export UWorld review questions to a printable PDF while avoiding broken equation rendering.
// Usage: Open a UWorld review page that shows "1 of 30" / "1 of 59", paste this entire script into Chrome DevTools Console, and press Enter.
// Notes:
// - This version avoids global CSS resets like * { height: auto }, which can break UWorld equation layouts.
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

  async function expandAllDiagrams() {
    const links = document.querySelectorAll(
      '#explanation a[href="javascript:void(0)"], #first-explanation a[href="javascript:void(0)"]'
    );

    for (const link of links) {
      if ((link.innerText || '').trim().length > 2) {
        link.click();
        await sleep(300);
      }
    }

    await sleep(800);
  }

  function isMathLike(el) {
    return !!el.closest(
      '.MathJax, mjx-container, .katex, svg, math, [class*="math"], [class*="Math"], [id*="math"], [id*="Math"]'
    );
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
  let abortReason = '';

  while (current <= total) {
    console.log(`Exporting Question ${current}...`);
    await sleep(1200);

    await expandAllDiagrams();

    const content = getQuestionHTML();
    const extraClass = current === 1 ? 'first-qblock' : '';

    questionsHTML.push(`
      <div class="qblock ${extraClass}">
        <h2>Question ${current} of ${total}</h2>
        ${content}
      </div>
    `);

    if (current === total) break;

    if (!clickNext()) {
      abortReason = `Next button not found after exporting Question ${current}.`;
      console.warn(`${abortReason} Export aborted to avoid a partial PDF.`);
      break;
    }

    let newInfo = null;

    for (let i = 0; i < 25; i++) {
      await sleep(400);
      newInfo = getQuestionCount();
      if (newInfo && newInfo.current !== current) break;
    }

    if (!newInfo || newInfo.current === current) {
      abortReason = `Navigation did not advance after exporting Question ${current}.`;
      console.warn(`${abortReason} Export aborted to avoid a partial PDF.`);
      break;
    }

    current = newInfo.current;
  }

  if (abortReason || questionsHTML.length !== total) {
    alert(
      `Export incomplete: captured ${questionsHTML.length} of ${total} questions.\n\n` +
      `${abortReason || 'The exported question count did not match the UWorld total.'}\n\n` +
      'No PDF was opened. Please fix navigation or manually export from the missing question and re-run.'
    );
    return;
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
