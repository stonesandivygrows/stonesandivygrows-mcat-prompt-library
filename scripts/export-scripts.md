# Jack Westin and UWorld Export Scripts

Consolidated from legacy gist export `7c6035811efedc42aac40a51bf98ead5-14cc96bac182ab7d917a10599b4a00c784d7e157`.

## The full export script:

```javascript
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // ---------- small DOM helpers ----------
  const txt = el => (el ? el.innerText.trim() : "");
  const visibleEnough = el => !!el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);

  function clickNavigationButton() {
    const candidates = [
      ...document.querySelectorAll("button, [role='button'], a")
    ].filter(el => /navigation/i.test(txt(el)) || /navigator/i.test(txt(el)) || /nav/i.test(txt(el)));
    for (const c of candidates) {
      c.click();
      return true;
    }
    return false;
  }

  function getQuestionNumberFromPage() {
    const title = document.querySelector("h2")?.innerText || document.body.innerText;
    const m = title.match(/question\s*(\d+)/i);
    return m ? Number(m[1]) : null;
  }

  function getPassageHTML() {
    const passage = document.querySelector(".jwpassage") ||
                    document.querySelector("#leftside") ||
                    document.querySelector(".passage") ||
                    document.querySelector("[class*='passage']") ||
                    document.querySelector("#passage");
    return passage ? cleanClone(passage).outerHTML : "";
  }

  function getMainContent() {
    return document.querySelector("#centerContent") ||
           document.querySelector("#questionreview") ||
           document.querySelector("main") ||
           document.body;
  }

  function cleanClone(node) {
    const clone = node.cloneNode(true);
    clone.querySelectorAll("script, style, noscript, iframe").forEach(n => n.remove());
    clone.querySelectorAll("button, .btn, .icon, .tooltip, .popover, .sr-only").forEach(n => {
      if (/navigation/i.test(txt(n)) || /next/i.test(txt(n)) || /previous/i.test(txt(n))) return;
      // remove control buttons/icons but preserve substantive content
      if (n.tagName === "BUTTON" || n.className.toString().match(/btn|icon|tooltip|popover/)) n.remove();
    });
    clone.querySelectorAll("*").forEach(el => {
      el.style.maxHeight = "none";
      el.style.height = "auto";
      el.style.overflow = "visible";
      el.style.position = "static";
      el.style.transform = "none";
    });
    return clone;
  }

  function getResultsPageHTML() {
    const root = document.querySelector("main") || document.querySelector("#root") || document.body;
    return cleanClone(root).outerHTML;
  }

  async function clickQuestionFromNav(n) {
    const row = [...document.querySelectorAll("#nav tbody tr")].find(tr => {
      const idx = tr.querySelector(".index")?.getAttribute("data-sort");
      return idx !== null && Number(idx) + 1 === n;
    });
    if (!row) return false;

    row.scrollIntoView({ block: "center" });
    row.click();

    // wait for question page to load
    for (let i = 0; i < 25; i++) {
      await sleep(300);
      const qn = getQuestionNumberFromPage();
      if (qn === n) return true;
    }
    return false;
  }

  // ---------- PHASE 1: capture results page if present ----------
  let resultsHTML = "";
  let startOnReview = false;

  if (/score summary|test results|results/i.test(document.body.innerText) && !document.querySelector("#questionreview")) {
    console.log("Capturing results page...");
    resultsHTML = getResultsPageHTML();

    // Click first question review link/button
    const reviewLink = [...document.querySelectorAll("a, button, [role='button']")].find(el =>
      /review question|question review|review/i.test(txt(el))
    );
    if (!reviewLink) {
      alert("Could not find a question review link from the results page.");
      return;
    }
    reviewLink.click();
    await sleep(2000);
    startOnReview = true;
  } else if (document.querySelector("#questionreview") || document.querySelector("#nav") || document.querySelector("#examContent")) {
    console.log("Already on question review page.");
    startOnReview = true;
  } else {
    alert("Please run this script on the Jack Westin test results page or question review page.");
    return;
  }

  if (!startOnReview) return;

  // 2. Ensure navigation panel is open (if hidden)
  if (!document.querySelector("#nav") || !visibleEnough(document.querySelector("#nav"))) {
    console.log("Opening navigation panel...");
    if (!clickNavigationButton()) {
      alert("Navigation panel not found. Make sure you're on the practice test page.");
      return;
    }
    await sleep(1000);
  }

  // 3. Click through each question and scrape
  const firstQuestion = getQuestionNumberFromPage() || 1;
  let current = firstQuestion;
  let maxQuestions = 0;

  // Determine total number of questions
  const navRows = document.querySelectorAll("#nav tbody tr");
  if (navRows.length > 0) {
    maxQuestions = Math.max(...[...navRows].map(r => {
      const sort = r.querySelector(".index")?.getAttribute("data-sort");
      return sort ? Number(sort) + 1 : 0;
    }));
  } else {
    // Fallback: guess from body text
    const m = txt(document.body).match(/(\d+)\s+questions/i);
    maxQuestions = m ? Number(m[1]) : 53;
  }

  console.log(`Total questions: ${maxQuestions}. Starting scrape from question ${current}...`);
  const collected = [];

  // If we aren't on question 1, go back to it
  if (current !== 1) {
    const clicked = await clickQuestionFromNav(1);
    if (clicked) {
      current = 1;
      await sleep(800);
    } else {
      alert("Export aborted: could not navigate back to Question 1. No partial PDF was generated.");
      return;
    }
  }

  for (let q = 1; q <= maxQuestions; q++) {
    console.log(`Scraping question ${q}...`);
    await sleep(300);

    if (q > 1) {
      const moved = await clickQuestionFromNav(q);
      if (!moved) {
        alert(`Export aborted: could not navigate to question ${q}. No partial PDF was generated.`);
        return;
      }
    }

    const passageHTML = getPassageHTML();
    const qHTML = cleanClone(getMainContent()).outerHTML;
    collected.push({ q, passageHTML, qHTML });
  }

  if (collected.length !== maxQuestions) {
    alert(`Export aborted: captured ${collected.length} of ${maxQuestions} questions. No partial PDF was generated.`);
    return;
  }

  function renderCollectedSections(items) {
    let lastPassageHTML = null;

    return items.map(item => {
      const passageSection = item.passageHTML && item.passageHTML !== lastPassageHTML
        ? `<div class="passage-section"><h2>Passage for Question ${item.q}</h2>${item.passageHTML}</div>`
        : "";

      if (item.passageHTML) lastPassageHTML = item.passageHTML;

      return `${passageSection}
        <div class="qblock" data-q="${item.q}">
          <h2>Question ${item.q}</h2>
          ${item.qHTML}
        </div>`;
    }).join("\n");
  }

  // 5. Build the final export page
  const fullPage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Jack Westin Full Export</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.35;
      color: #000;
      background: #fff;
      margin: 0.45in;
    }
    h1 { font-size: 20pt; margin-bottom: 18px; }
    .results-section { page-break-after: always; margin-bottom: 30px; border-bottom: 3px solid #000; padding-bottom: 20px; }
    .passage-section { page-break-after: always; }
    .qblock {
      page-break-before: always;
      page-break-inside: avoid;
      border-bottom: 2px dashed #ccc;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
    .qblock h2 { font-size: 15pt; margin-top: 10px; border-top: 2px solid #000; padding-top: 10px; }
    * { overflow: visible !important; max-height: none !important; height: auto !important; position: static !important; box-shadow: none !important; }
    img { max-width: 100%; }
    @page { margin: 0.45in; }
  </style>
</head>
<body>
  <h1>Jack Westin Full Export</h1>
  ${resultsHTML ? `<div class="results-section"><h2>Test Results</h2>${resultsHTML}</div>` : ""}
  ${renderCollectedSections(collected)}
  <script>setTimeout(() => window.print(), 900);</script>
</body>
</html>`;

  const w = window.open("", "JackWestinFullExport", "width=800,height=600");
  if (!w) {
    alert("Popup blocked. Allow popups for Jack Westin, then run the script again.");
    return;
  }

  w.document.write(fullPage);
  w.document.close();
  console.log(`Export complete – ${collected.length} questions collected. Print dialog opening...`);
})();
```

---

## Uworld script:

```javascript
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // ---------- HELPERS ----------
  function parseQuestionCountFromText(text) {
    const matches = [...String(text || '').matchAll(/\b(\d{1,3})\s+of\s+(\d{1,3})\b/gi)]
      .map(match => ({ current: Number(match[1]), total: Number(match[2]) }))
      .filter(count => count.current >= 1 && count.total >= count.current && count.total <= 300);

    if (!matches.length) return null;
    return matches.sort((a, b) => b.total - a.total || a.current - b.current)[0];
  }

  function getQuestionCount() {
    const selectors = [
      '[aria-label*="question" i]',
      '[class*="question" i]',
      '[id*="question" i]',
      '[class*="counter" i]',
      '[class*="progress" i]',
      '[id*="counter" i]',
      '[id*="progress" i]'
    ];

    for (const selector of selectors) {
      for (const el of document.querySelectorAll(selector)) {
        const count = parseQuestionCountFromText(el.innerText || el.textContent || '');
        if (count) return count;
      }
    }

    return parseQuestionCountFromText(document.body.innerText);
  }

  function clickNext() {
    const next = document.querySelector('a[aria-label*="next" i]');
    if (!next) return false;
    next.click();
    return true;
  }

  function getTestDate() {
    const body = document.body.innerText;
    const match = body.match(/([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})/);
    if (match) {
      const months = {Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'};
      const month = months[match[1]] || '00';
      const day = match[2].padStart(2,'0');
      const year = match[3];
      return `${month}${day}${year}`;
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
    if (/\bbehavioral\s+sciences\b/.test(body)) subjects.push('BehavioralScience');
    if (/\borganic\s+chemistry\b/.test(body)) subjects.push('OrganicChemistry');
    if (/\bgeneral\s+chemistry\b/.test(body)) subjects.push('GeneralChemistry');
    if (subjects.length === 0) return 'Mixed';
    if (subjects.length === 1) return subjects[0];
    return 'Mixed';
  }

  function getHeadHTML(baseURI) {
    const head = document.head.cloneNode(true);
    head.querySelectorAll('script').forEach(s => s.remove());
    return `<base href="${baseURI}">\n${head.innerHTML}`;
  }

  function getQuestionHTML() {
    const center = document.getElementById('centerContent');
    if (!center) return '<p>Content not found.</p>';
    const clone = center.cloneNode(true);
    clone.querySelectorAll('#pullovertab, #context-menu, .cdk-drag, .dot-container').forEach(e => e.remove());
    clone.querySelectorAll('*').forEach(el => {
      el.style.maxHeight = 'none';
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });
    clone.style.maxHeight = 'none';
    clone.style.overflow = 'visible';
    return clone.outerHTML;
  }

  // ---------- MAIN ----------
  let qInfo = getQuestionCount();
  if (!qInfo) {
    alert('Run this script from a UWorld review page (e.g., "1 of 30").');
    return;
  }

  let { current, total } = qInfo;

  if (current !== 1) {
    const nav = document.querySelector('a[aria-label="Navigator"]');
    if (nav) {
      nav.click();
      await sleep(1500);
      const q1 = document.querySelector('[data-question="1"]') || [...document.querySelectorAll('.question-list-item')].find(el => el.innerText.trim() === '1');
      if (q1) {
        q1.click();
        for (let i = 0; i < 20; i++) {
          await sleep(500);
          const newInfo = getQuestionCount();
          if (newInfo && newInfo.current === 1) break;
        }
      }
    }
    qInfo = getQuestionCount();
    if (!qInfo || qInfo.current !== 1) {
      alert('Could not go to Question 1. Please navigate manually and re-run.');
      return;
    }
    current = 1;
  }

  const baseURI = document.baseURI;
  const headHTML = getHeadHTML(baseURI);
  const questionsHTML = [];

  while (current <= total) {
    console.log(`📸 Question ${current}…`);
    await sleep(800);

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

  if (questionsHTML.length !== total) {
    alert(
      `Export aborted: captured ${questionsHTML.length} of ${total} questions. ` +
      'No PDF was generated because the export would be incomplete.'
    );
    return;
  }

  const dateStr = getTestDate();
  const site = 'UWorld';
  const subject = getSubject();
  const docTitle = `${dateStr}_${site}_${subject}`;

  const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${docTitle}</title>
  ${headHTML}
  <style>
    body { margin:0.4in; font-family: Arial, sans-serif; font-size:11pt; }
    h1 { font-size:20pt; }
    .qblock { page-break-inside:avoid; margin-bottom:16px; }
    .qblock:not(.first-qblock) { page-break-before:always; }
    * { overflow:visible !important; max-height:none !important; height:auto !important; }
    #centerContent, #questionInformation, #questionAbstract, #answerContainer, #explanation-container {
      max-height:none !important; height:auto !important; overflow:visible !important;
    }
    img { max-width:100%; }
    @page { margin:0.4in; }
  </style>
</head>
<body>
  <h1>UWorld Full Export – ${questionsHTML.length} Questions</h1>
  ${questionsHTML.join('\n')}
  <script>setTimeout(() => window.print(), 1200);</script>
</body>
</html>`;

  const w = window.open('', '', 'width=800,height=600');
  if (!w) {
    alert('Popup blocked. Allow popups for UWorld, then run the script again.');
    return;
  }

  w.document.write(fullHTML);
  w.document.close();
  console.log(`✅ ${questionsHTML.length} questions exported. PDF will be named: ${docTitle}.pdf`);
})();
```
