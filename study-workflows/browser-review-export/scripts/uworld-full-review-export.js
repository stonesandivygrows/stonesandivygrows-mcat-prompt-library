(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function parseQuestionCounts(text) {
    const counts = [];
    const re = /((?:question|q(?:uestion)?\.?)\s*)?(\d+)\s*(?:of|\/)\s*(\d+)/ig;
    let match;

    while ((match = re.exec(text || ''))) {
      const current = Number(match[2]);
      const total = Number(match[3]);
      if (!Number.isFinite(current) || !Number.isFinite(total)) continue;
      if (current < 1 || total < current) continue;
      counts.push({
        current,
        total,
        labeled: Boolean(match[1])
      });
    }

    return counts;
  }

  function chooseBestQuestionCount(counts) {
    if (!counts.length) return null;
    const labeledCounts = counts.filter(count => count.labeled);
    const pool = labeledCounts.length ? labeledCounts : counts;

    // UWorld pages can contain figure captions like "1 of 2"; the real
    // question counter is the plausible count with the largest total.
    return pool.reduce((best, count) => (
      count.total > best.total || (count.total === best.total && count.current > best.current)
        ? count
        : best
    ));
  }

  function getQuestionCount() {
    const counterTexts = [
      ...document.querySelectorAll(
        '[aria-label*="question" i], [class*="counter" i], [id*="counter" i], ' +
        '[class*="progress" i], [id*="progress" i], [class*="pagination" i], [id*="pagination" i]'
      )
    ].map(el => el.innerText || el.textContent || '');

    const scopedCount = chooseBestQuestionCount(counterTexts.flatMap(parseQuestionCounts));
    if (scopedCount) return scopedCount;

    return chooseBestQuestionCount(parseQuestionCounts(document.body.innerText));
  }

  function clickNext() {
    const next = document.querySelector('a[aria-label*="next" i]');
    if (!next) return false;
    next.click();
    return true;
  }

  // Preserve all styles and fonts.
  function getHeadHTML(baseURI) {
    const head = document.head.cloneNode(true);
    // Remove scripts so the copied page does not run UWorld's app code again.
    head.querySelectorAll('script').forEach(s => s.remove());
    return `<base href="${baseURI}">\n${head.innerHTML}`;
  }

  // Expand hidden diagrams or blue links in explanations.
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

    document.querySelectorAll('.modal, .popup, .dialog, [class*="popup"], [class*="modal"], [class*="dialog"]')
      .forEach(p => {
        p.style.display = 'block';
        p.style.visibility = 'visible';
      });
    await sleep(500);
  }

  // Clone the question content and remove height limits.
  function getQuestionHTML() {
    const center = document.getElementById('centerContent');
    if (!center) return null;
    const clone = center.cloneNode(true);

    clone.querySelectorAll('#pullovertab, #context-menu, .cdk-drag, .dot-container')
      .forEach(e => e.remove());

    clone.querySelectorAll('*').forEach(el => {
      el.style.maxHeight = 'none';
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });
    clone.style.maxHeight = 'none';
    clone.style.overflow = 'visible';
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
      const months = {Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',
                      Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'};
      return `${months[m[1]]}${m[2].padStart(2,'0')}${m[3]}`;
    }
    const today = new Date();
    return `${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}${today.getFullYear()}`;
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
    alert('Run this script from the UWorld review page, where a counter such as "1 of 30" is visible.');
    return;
  }

  let { current, total } = qInfo;
  console.log(`Starting — Question ${current} of ${total}`);

  if (current !== 1) {
    const nav = document.querySelector('a[aria-label="Navigator"]');
    if (nav) {
      nav.click();
      await sleep(1500);
      const q1 = document.querySelector('[data-question="1"]') ||
                 [...document.querySelectorAll('.question-list-item')].find(el => el.innerText.trim() === '1');
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
      alert('The script could not reach Question 1. Navigate to Question 1 manually and run it again.');
      return;
    }
    current = 1;
  }

  const baseURI = document.baseURI;
  const headHTML = getHeadHTML(baseURI);
  const questionsHTML = [];
  let abortReason = '';

  while (current <= total) {
    console.log(`Collecting UWorld question ${current} of ${total}…`);
    await sleep(800);
    await expandAllDiagrams();

    const content = getQuestionHTML();
    if (!content) {
      abortReason = `Question ${current} content was not found. No PDF was created.`;
      break;
    }

    const extraClass = current === 1 ? 'first-qblock' : '';
    questionsHTML.push(`
      <div class="qblock ${extraClass}">
        <h2>Question ${current} of ${total}</h2>
        ${content}
      </div>
    `);

    if (current === total) break;

    if (!clickNext()) {
      abortReason = `Next button was not found after Question ${current} of ${total}. No PDF was created.`;
      break;
    }

    let newInfo = null;
    for (let i = 0; i < 25; i++) {
      await sleep(400);
      newInfo = getQuestionCount();
      if (newInfo && newInfo.current !== current) break;
    }
    if (!newInfo || newInfo.current === current) {
      abortReason = `Navigation became stuck after Question ${current} of ${total}. No PDF was created.`;
      break;
    }
    if (newInfo.total !== total) {
      abortReason = `Question total changed from ${total} to ${newInfo.total}. No PDF was created.`;
      break;
    }
    if (newInfo.current !== current + 1) {
      abortReason = `Navigation skipped from Question ${current} to Question ${newInfo.current}. No PDF was created.`;
      break;
    }
    current = newInfo.current;
  }

  if (abortReason) {
    console.error(abortReason);
    alert(abortReason);
    return;
  }

  if (questionsHTML.length !== total || current !== total) {
    const message = `Only collected ${questionsHTML.length} of ${total} questions. No PDF was created.`;
    console.error(message);
    alert(message);
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
    body { margin:0.4in; font-family:Arial, sans-serif; font-size:11pt; }
    h1 { font-size:20pt; }
    .qblock { page-break-inside:avoid; margin-bottom:16px; }
    .qblock:not(.first-qblock) { page-break-before:always; }
    * { overflow:visible !important; max-height:none !important; height:auto !important; }
    #centerContent, #questionInformation, #questionAbstract, #answerContainer, #explanation-container {
      max-height:none !important; height:auto !important; overflow:visible !important;
    }
    img { max-width:100%; }
    .modal, .popup, .dialog, [class*="popup"], [class*="modal"], [class*="dialog"] {
      display:block !important; visibility:visible !important; position:static !important;
    }
    @page { margin:0.4in; }
  </style>
</head>
<body>
  <h1>UWorld Full Export — ${numQ} Questions</h1>
  ${questionsHTML.join('\n')}
  <script>setTimeout(() => window.print(), 1200);<\/script>
</body>
</html>`;

  const w = window.open('', '', 'width=800,height=600');
  if (!w) {
    alert('Chrome blocked the printable output window. Allow pop-ups for UWorld and run the script again.');
    return;
  }
  w.document.write(fullHTML);
  w.document.close();
  console.log(`Export complete. Suggested PDF name: ${docTitle}.pdf`);
})();
