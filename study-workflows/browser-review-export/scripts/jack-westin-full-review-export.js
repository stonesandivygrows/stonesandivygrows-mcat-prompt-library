(async () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const videoSelectors = [
    '.solution-player-container',
    '.solution-player',
    '.solution-toggle-video-wrapper',
    '.passage-solution-player',
    '.watch-video-wrap',
    'video',
    'iframe[src*="youtube"]',
    'iframe[src*="vimeo"]',
    '[class*="video-player"]'
  ].join(', ');

  function getNavigationRows() {
    return [...document.querySelectorAll('#nav tbody tr, #sortable-table tbody tr')]
      .filter((row) => /question\s*\d+/i.test(row.innerText || ''));
  }

  function getCurrentQuestionNumber() {
    const pageCounterText = [
      document.querySelector('.pagecount-number')?.innerText,
      document.querySelector('.pagecount')?.innerText,
      document.querySelector('[class*="pagecount"]')?.innerText
    ].filter(Boolean).join(' ');

    let match = pageCounterText.match(/(?:question\s*)?(\d+)\s*(?:of|\/)\s*(\d+)/i);
    if (!match) {
      match = document.body.innerText.match(/question\s*(\d+)\s*(?:of|\/)\s*(\d+)/i);
    }
    if (!match) {
      match = document.body.innerText.match(/(?:^|\s)(\d+)\s+of\s+(\d+)(?:\s|$)/i);
    }

    return match ? { current: Number(match[1]), total: Number(match[2]) } : null;
  }

  function getHeadHTML(baseURI) {
    const head = document.head.cloneNode(true);
    head.querySelectorAll('script').forEach((script) => script.remove());
    return `<base href="${baseURI}">\n${head.innerHTML}`;
  }

  function cleanClone(node) {
    if (!node) return null;

    const clone = node.cloneNode(true);
    clone.querySelectorAll(videoSelectors).forEach((element) => element.remove());
    clone.querySelectorAll(
      '#nav, .nav-1, .nav-2, .nav-3, #aamc-configuration, .setting-solution, ' +
      '.current-time, .timing, .flag, .feedback, #feedbackTrigger, script, style'
    ).forEach((element) => element.remove());

    clone.querySelectorAll('*').forEach((element) => {
      element.style.maxHeight = 'none';
      element.style.height = 'auto';
      element.style.overflow = 'visible';
    });

    clone.style.maxHeight = 'none';
    clone.style.height = 'auto';
    clone.style.overflow = 'visible';
    return clone;
  }

  function getVisibleText(node) {
    return (node?.innerText || '').replace(/\s+/g, ' ').trim();
  }

  async function goToQuestion(index, expectedNumber, options = {}) {
    const { allowSameContent = false } = options;
    const before = getCurrentQuestionNumber()?.current;
    const beforeQuestionText = getVisibleText(document.querySelector('#question'));
    const rows = getNavigationRows();
    const row = rows[index];
    if (!row) return false;

    const clickable = row.querySelector('td, span, a, button') || row;
    clickable.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));

    for (let attempt = 0; attempt < 30; attempt += 1) {
      await sleep(300);
      const info = getCurrentQuestionNumber();
      const current = info?.current;
      const questionText = getVisibleText(document.querySelector('#question'));
      const contentChanged = questionText && questionText !== beforeQuestionText;
      const expectedCounterLoaded = current === expectedNumber &&
        (allowSameContent || current === before || contentChanged || !beforeQuestionText);
      const unlabeledContentLoaded = !info &&
        questionText.length > 20 &&
        (allowSameContent || contentChanged || !beforeQuestionText);

      if (questionText.length > 20 && (expectedCounterLoaded || unlabeledContentLoaded)) {
        await sleep(500);
        return true;
      }
    }

    // Some JW builds update the content even when the counter selector is unusual.
    await sleep(1200);
    const fallbackInfo = getCurrentQuestionNumber();
    const fallbackQuestionText = getVisibleText(document.querySelector('#question'));
    return fallbackQuestionText.length > 20 &&
      (allowSameContent || fallbackQuestionText !== beforeQuestionText || !beforeQuestionText) &&
      (!fallbackInfo || fallbackInfo.current === expectedNumber);
  }

  const rows = getNavigationRows();
  if (!rows.length) {
    alert(
      'No Jack Westin navigation table was found. Open a completed practice set in Review/Solutions mode, then run the script again.'
    );
    return;
  }

  const originalQuestion = getCurrentQuestionNumber()?.current || 1;
  const baseURI = document.baseURI;
  const headHTML = getHeadHTML(baseURI);
  const questionBlocks = [];
  let previousPassageText = '';

  for (let index = 0; index < rows.length; index += 1) {
    const questionNumber = index + 1;
    console.log(`Collecting Jack Westin question ${questionNumber} of ${rows.length}…`);

    const moved = await goToQuestion(index, questionNumber, { allowSameContent: index === 0 });
    if (!moved) {
      alert(
        `Export stopped at Question ${questionNumber} of ${rows.length}. ` +
        'No PDF was created because the page did not load the expected question.'
      );
      return;
    }

    const passageNode = document.querySelector('#passage');
    const questionNode = document.querySelector('#question');

    if (!questionNode || getVisibleText(questionNode).length <= 20) {
      alert(
        `Export stopped at Question ${questionNumber} of ${rows.length}. ` +
        'No PDF was created because question content was missing.'
      );
      return;
    }

    const passageText = getVisibleText(passageNode);
    const passageChanged = passageText && passageText !== previousPassageText;
    if (passageChanged) previousPassageText = passageText;

    const passageClone = passageChanged ? cleanClone(passageNode) : null;
    const questionClone = cleanClone(questionNode);

    questionBlocks.push(`
      <section class="question-block">
        <h2>Question ${questionNumber} of ${rows.length}</h2>
        ${passageClone ? `<div class="passage-block"><h3>Passage</h3>${passageClone.outerHTML}</div>` : ''}
        <div class="answer-block">${questionClone.outerHTML}</div>
      </section>
    `);
  }

  // Return the live review page to the question that was open before export.
  const restoreIndex = Math.max(0, Math.min(rows.length - 1, originalQuestion - 1));
  await goToQuestion(restoreIndex, originalQuestion);

  const date = new Date();
  const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const titleText = (document.title || 'Jack Westin Review')
    .replace(/\s+/g, ' ')
    .replace(/[\\/:*?"<>|]/g, '-')
    .trim();
  const documentTitle = `Jack_Westin_${dateString}_${rows.length}Q_${titleText}`;

  const fullHTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${documentTitle}</title>
  ${headHTML}
  <style>
    body {
      margin: 0.42in;
      font-family: Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.45;
      background: white !important;
      color: black !important;
    }
    h1 { font-size: 20pt; margin: 0 0 18px; }
    h2 { font-size: 16pt; margin: 0 0 12px; }
    h3 { font-size: 13pt; margin: 0 0 8px; }
    .question-block { margin-bottom: 20px; }
    .question-block:not(:first-of-type) { break-before: page; page-break-before: always; }
    .passage-block { margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid #bbb; }
    .answer-block { margin-top: 10px; }
    ${videoSelectors} { display: none !important; }
    #passage, #question, .tab-pane, .custom-scroll, .content-wrap,
    .answers-detail, .answers-detail-item, .passage-solution-content {
      display: block !important;
      position: static !important;
      float: none !important;
      width: auto !important;
      max-width: none !important;
      max-height: none !important;
      height: auto !important;
      overflow: visible !important;
    }
    img { max-width: 100% !important; height: auto !important; }
    button, .nav-1, .nav-2, .nav-3, #nav, #aamc-configuration,
    .setting-solution, .current-time, .timing, .flag, #feedbackTrigger {
      display: none !important;
    }
    @page { margin: 0.42in; }
  </style>
</head>
<body>
  <h1>Jack Westin Full Review Export — ${questionBlocks.length} Questions</h1>
  ${questionBlocks.join('\n')}
  <script>setTimeout(() => window.print(), 1200);<\/script>
</body>
</html>`;

  const outputWindow = window.open('', '_blank');
  if (!outputWindow) {
    alert('Chrome blocked the output window. Allow pop-ups for jackwestin.com, then run the script again.');
    return;
  }

  outputWindow.document.open();
  outputWindow.document.write(fullHTML);
  outputWindow.document.close();
  console.log(`Export complete: ${questionBlocks.length} questions collected.`);
})();
