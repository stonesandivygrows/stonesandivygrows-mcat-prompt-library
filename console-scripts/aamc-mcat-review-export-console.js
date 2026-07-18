/*
 * AAMC MCAT Official Prep — Review Exporter v3
 *
 * Purpose:
 * - Paste into Chrome DevTools Console while viewing an OPENED AAMC review question.
 * - Exports the visible review questions into a printable/downloaded HTML file.
 *
 * Important use notes:
 * - Start from an opened review question, not the score/report/review table.
 * - The script captures visible/rendered content only. It does not bypass login, access controls, DRM, or hidden content.
 * - If it captures only one question, check the Console message:
 *   - "No enabled Next button found" = selector mismatch.
 *   - "question did not change" = AAMC single-page app did not accept scripted navigation.
 *
 * Main DOM assumptions from AAMC page code:
 * - Active review root: #exams_section999-6 .reviewable OR [id^='exams_section'] .reviewable
 * - Active question container: .answer-container.question-container with display:block
 * - Passage: [id^='current-passage-container'], .reading-passage
 * - Question/choices: [id^='current-question-container']
 * - Solution: #answer
 * - Result/timing/tags: .choices-container .result-wrapper
 * - Next: a.toolbar-btn.next[data-label='next'] / aria-label='Next'
 */

(async function exportAAMCExamReviewWithWorkingNext() {
  const SETTINGS = {
    maxQuestions: 230,       // Change to 59 if only doing one section.
    waitAfterClickMs: 250,
    maxWaitForNextMs: 6000,
    autoPrintAtEnd: true,
    filePrefix: "AAMC_MCAT_Exam_Review_Export"
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const cleanText = (s) => (s || "").replace(/\s+/g, " ").trim();

  const nowStamp = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}_${p(d.getHours())}-${p(d.getMinutes())}`;
  };

  const isVisible = (el) => {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      style.opacity !== "0" &&
      rect.width > 0 &&
      rect.height > 0
    );
  };

  const getActiveExamReviewRoot = () => {
    const roots = Array.from(document.querySelectorAll(
      [
        "#exams_section999-6 .reviewable",
        "[id^='exams_section'] .reviewable.sidebar-shown",
        "[id^='exams_section'] .reviewable",
        ".reviewable.sidebar-shown",
        ".reviewable"
      ].join(",")
    ));

    const visibleRoots = roots.filter((root) => {
      const txt = cleanText(root.innerText);
      return isVisible(root) && /Question\s+\d+\s+of\s+\d+/i.test(txt);
    });

    return visibleRoots[0] || null;
  };

  const getQuestionTitle = () => {
    const root = getActiveExamReviewRoot();

    const titleEl =
      root?.querySelector(".answer-toolbar-wrapper header.text-header h2.title") ||
      root?.querySelector("header.text-header h2.title") ||
      document.querySelector("#exams_section999-6 .answer-toolbar-wrapper header.text-header h2.title") ||
      document.querySelector(".answer-toolbar-wrapper header.text-header h2.title");

    return cleanText(titleEl?.innerText) || "Question";
  };

  const getQuestionNums = () => {
    const title = getQuestionTitle();
    const m = title.match(/Question\s+(\d+)\s+of\s+(\d+)/i);

    return {
      title,
      current: m ? Number(m[1]) : null,
      total: m ? Number(m[2]) : null
    };
  };

  const getActiveQuestionContainer = () => {
    const root = getActiveExamReviewRoot();
    if (!root) return null;

    const candidates = Array.from(root.querySelectorAll(".answer-container.question-container"));

    return candidates.find((el) => {
      const txt = cleanText(el.innerText);
      return (
        txt.length > 50 &&
        /display\s*:\s*block/i.test(el.getAttribute("style") || "") &&
        el.querySelector("[id^='current-question-container']") &&
        el.querySelector("#answer")
      );
    }) || null;
  };

  const getActiveDataId = () => {
    return getActiveQuestionContainer()?.getAttribute("data-id") || "";
  };

  const getSectionName = () => {
    const body = cleanText(document.body.innerText);

    const sections = [
      "Chemical and Physical Foundations of Biological Systems",
      "Critical Analysis and Reasoning Skills",
      "Biological and Biochemical Foundations of Living Systems",
      "Psychological, Social, and Biological Foundations of Behavior"
    ];

    return sections.find((s) => body.includes(s)) || "";
  };

  const absolutizeURLs = (clone) => {
    clone.querySelectorAll("[src]").forEach((el) => {
      const src = el.getAttribute("src");
      if (src && src.startsWith("//")) el.setAttribute("src", "https:" + src);
      else if (src && src.startsWith("/")) el.setAttribute("src", location.origin + src);
    });

    clone.querySelectorAll("[href]").forEach((el) => {
      const href = el.getAttribute("href");
      if (href && href.startsWith("//")) el.setAttribute("href", "https:" + href);
      else if (href && href.startsWith("/")) el.setAttribute("href", location.origin + href);
    });
  };

  const sanitizeCloneHTML = (el) => {
    if (!el) return "";

    const clone = el.cloneNode(true);

    clone.querySelectorAll(
      [
        "script",
        "style",
        "noscript",
        "iframe",
        "button",
        "input",
        "textarea",
        "select",
        ".toolbar",
        ".answer-toolbar-wrapper",
        ".note-editor",
        ".highlighter-container",
        ".toolbox-container",
        ".toolbox-wrapper",
        ".toolbar-row",
        ".actions",
        ".icon-bar",
        ".question-flag",
        ".btn-drawer-top",
        ".topbar-container",
        ".sr-only"
      ].join(",")
    ).forEach((node) => node.remove());

    clone.querySelectorAll("*").forEach((node) => {
      [...node.attributes].forEach((attr) => {
        if (/^on/i.test(attr.name)) node.removeAttribute(attr.name);
      });

      const style = node.getAttribute("style");
      if (style) {
        const cleaned = style
          .replace(/position\s*:\s*fixed[^;]*;?/gi, "")
          .replace(/position\s*:\s*sticky[^;]*;?/gi, "")
          .replace(/z-index\s*:\s*[^;]*;?/gi, "")
          .replace(/display\s*:\s*none[^;]*;?/gi, "");

        if (cleaned.trim()) node.setAttribute("style", cleaned);
        else node.removeAttribute("style");
      }
    });

    clone.querySelectorAll(".is-hidden").forEach((node) => {
      node.classList.remove("is-hidden");
      node.style.display = "block";
    });

    clone.querySelectorAll(".expander-content").forEach((node) => {
      node.style.display = "block";
      node.removeAttribute("aria-hidden");
    });

    absolutizeURLs(clone);

    return clone.outerHTML;
  };

  const expandExtras = async () => {
    const root = getActiveExamReviewRoot();
    if (!root) return;

    const expanders = Array.from(root.querySelectorAll(
      ".expander-link, .plus-minus-controls, [aria-expanded='false']"
    ));

    for (const el of expanders) {
      const label = cleanText(
        `${el.innerText || ""} ${el.getAttribute("aria-label") || ""} ${el.getAttribute("title") || ""}`
      );

      if (/khan|lesson|solution|explanation|content|skills/i.test(label)) {
        try {
          el.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          }));
          await sleep(100);
        } catch (e) {}
      }
    }
  };

  const getSidebarResult = () => {
    const root = getActiveExamReviewRoot();
    if (!root) return null;

    return (
      root.querySelector(".choices-container .result-wrapper") ||
      root.querySelector(".result-wrapper[aria-label='Result']") ||
      root.querySelector(".sidebar-column .result-wrapper")
    );
  };

  const captureCurrentQuestion = async () => {
    await expandExtras();

    const root = getActiveExamReviewRoot();
    const active = getActiveQuestionContainer();
    const nums = getQuestionNums();
    const section = getSectionName();

    if (!root || !active) {
      return {
        ok: false,
        nums,
        signature: "failed-" + Date.now(),
        html: `
          <section class="question-block failed">
            <h2>Capture failed</h2>
            <p>No active AAMC question was found.</p>
            <p>Make sure you are on an opened review question, not the score/report table.</p>
          </section>
        `
      };
    }

    const passage = active.querySelector("[id^='current-passage-container'], .reading-passage");
    const question = active.querySelector("[id^='current-question-container']");
    const solution = active.querySelector("#answer, [role='region'][aria-label='Solution']");
    const sidebar = getSidebarResult();

    let html = `<section class="question-block">`;

    html += `<h2>${nums.title}</h2>`;

    if (section) {
      html += `<p class="meta"><strong>Section:</strong> ${section}</p>`;
    }

    html += `<p class="meta"><strong>Data ID:</strong> ${getActiveDataId()}</p>`;
    html += `<p class="meta"><strong>Captured:</strong> ${new Date().toLocaleString()}</p>`;

    if (passage) {
      html += `<h3>Passage</h3>`;
      html += `<div class="captured passage">${sanitizeCloneHTML(passage)}</div>`;
    }

    if (question) {
      html += `<h3>Question + Answer Choices</h3>`;
      html += `<div class="captured question">${sanitizeCloneHTML(question)}</div>`;
    }

    if (solution) {
      html += `<h3>Solution</h3>`;
      html += `<div class="captured solution">${sanitizeCloneHTML(solution)}</div>`;
    }

    if (sidebar) {
      html += `<h3>Result / Timing / Tags</h3>`;
      html += `<div class="captured result">${sanitizeCloneHTML(sidebar)}</div>`;
    }

    html += `</section>`;

    return {
      ok: true,
      nums,
      signature: `${nums.title}__${getActiveDataId()}__${cleanText(active.innerText).slice(0, 500)}`,
      html
    };
  };

  const findNextButton = () => {
    const root = getActiveExamReviewRoot();
    if (!root) return null;

    const buttons = Array.from(root.querySelectorAll(
      [
        ".answer-toolbar-wrapper a.toolbar-btn.next[data-label='next']",
        ".toolbar a.toolbar-btn.next[data-label='next']",
        "a.toolbar-btn.next[aria-label='Next']",
        "a[aria-label='Next'][data-label='next']"
      ].join(",")
    ));

    return buttons.find((btn) => {
      const cls = btn.className || "";
      return (
        isVisible(btn) &&
        !/\bis-disabled\b/i.test(cls) &&
        btn.getAttribute("aria-disabled") !== "true" &&
        btn.getAttribute("disabled") === null
      );
    }) || null;
  };

  const strongClick = (el) => {
    if (!el) return false;

    const events = ["mouseover", "mousedown", "mouseup", "click"];

    for (const type of events) {
      el.dispatchEvent(new MouseEvent(type, {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    }

    return true;
  };

  const waitForQuestionChange = async (beforeTitle, beforeDataId) => {
    const start = Date.now();

    while (Date.now() - start < SETTINGS.maxWaitForNextMs) {
      await sleep(200);

      const afterTitle = getQuestionTitle();
      const afterDataId = getActiveDataId();

      if (
        afterTitle &&
        afterTitle !== beforeTitle &&
        /Question\s+\d+\s+of\s+\d+/i.test(afterTitle)
      ) {
        return true;
      }

      if (afterDataId && beforeDataId && afterDataId !== beforeDataId) {
        return true;
      }
    }

    return false;
  };

  const buildFinalHTML = (blocks) => {
    const title = `${SETTINGS.filePrefix}_${nowStamp()}`;

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.45;
    color: #111;
    background: #fff;
    margin: 32px;
  }

  h1 {
    font-size: 24px;
    border-bottom: 3px solid #111;
    padding-bottom: 8px;
  }

  h2 {
    font-size: 20px;
    margin-top: 28px;
    border-bottom: 1px solid #999;
    padding-bottom: 5px;
  }

  h3 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  .meta {
    font-size: 12px;
    color: #444;
    margin: 4px 0;
  }

  .question-block {
    page-break-after: always;
    border-bottom: 2px dashed #aaa;
    padding-bottom: 28px;
    margin-bottom: 28px;
  }

  .captured {
    border: 1px solid #ddd;
    padding: 12px;
    margin: 8px 0 14px;
    background: #fafafa;
  }

  .solution {
    background: #fff;
    border-left: 4px solid #333;
  }

  .result {
    background: #f8f8f8;
  }

  img, svg, table {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  td, th {
    border: 1px solid #999;
    padding: 4px 6px;
  }

  .correct, .corrected {
    font-weight: bold;
  }

  .incorrect {
    text-decoration: underline;
  }

  .user-highlight {
    background: #fff59d;
  }

  .user-strikethrough {
    text-decoration: line-through;
  }

  @media print {
    body {
      margin: 0.5in;
    }

    .question-block {
      page-break-after: always;
    }
  }
</style>
</head>
<body>
<h1>${title}</h1>
<p class="meta"><strong>Total captured:</strong> ${blocks.length}</p>
${blocks.join("\n")}
</body>
</html>`;
  };

  const downloadHTML = (html, filename) => {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 5000);
  };

  const blocks = [];
  const seen = new Set();

  console.log("AAMC export started. Keep this tab active.");

  for (let i = 1; i <= SETTINGS.maxQuestions; i++) {
    const captured = await captureCurrentQuestion();

    if (!captured.ok) {
      console.warn("Capture failed. Stopping.");
      blocks.push(captured.html);
      break;
    }

    if (seen.has(captured.signature)) {
      console.warn("Repeated question detected. Stopping.");
      break;
    }

    seen.add(captured.signature);
    blocks.push(captured.html);

    console.log(`Captured ${captured.nums.title}`);

    if (
      captured.nums.current &&
      captured.nums.total &&
      captured.nums.current >= captured.nums.total
    ) {
      console.log("Reached final detected question.");
      break;
    }

    const beforeTitle = getQuestionTitle();
    const beforeDataId = getActiveDataId();

    const next = findNextButton();

    if (!next) {
      console.warn("No enabled Next button found. Stopping.");
      break;
    }

    strongClick(next);
    await sleep(SETTINGS.waitAfterClickMs);

    const changed = await waitForQuestionChange(beforeTitle, beforeDataId);

    if (!changed) {
      console.warn("Next was clicked, but the question did not change. Stopping to avoid duplicate capture.");
      break;
    }
  }

  const html = buildFinalHTML(blocks);
  const filename = `${SETTINGS.filePrefix}_${nowStamp()}.html`;

  downloadHTML(html, filename);

  const win = window.open("", "_blank");

  if (win) {
    win.document.open();
    win.document.write(html);
    win.document.close();

    if (SETTINGS.autoPrintAtEnd) {
      setTimeout(() => {
        win.focus();
        win.print();
      }, 1000);
    }
  } else {
    console.warn("Popup blocked. HTML file was still downloaded.");
  }

  console.log(`Done. Captured ${blocks.length} question(s). Downloaded: ${filename}`);
})();
