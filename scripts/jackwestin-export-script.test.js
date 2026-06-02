const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

class FakeElement {
  constructor({ html = "", text = "", tagName = "DIV", className = "", visible = true } = {}) {
    this.outerHTML = html;
    this.innerText = text;
    this.tagName = tagName;
    this.className = className;
    this.style = {};
    this.offsetWidth = visible ? 1 : 0;
    this.offsetHeight = visible ? 1 : 0;
  }

  getClientRects() {
    return this.offsetWidth || this.offsetHeight ? [{}] : [];
  }

  cloneNode() {
    return new FakeElement({
      html: this.outerHTML,
      text: this.innerText,
      tagName: this.tagName,
      className: this.className,
      visible: !!(this.offsetWidth || this.offsetHeight),
    });
  }

  querySelectorAll() {
    return [];
  }

  remove() {}
}

class FakeNavRow extends FakeElement {
  constructor(index, onClick) {
    super({ html: `<tr><td class="index" data-sort="${index}">${index + 1}</td></tr>`, text: `${index + 1}`, tagName: "TR" });
    this.index = index;
    this.onClick = onClick;
  }

  querySelector(selector) {
    if (selector === ".index") {
      return {
        getAttribute: attribute => (attribute === "data-sort" ? String(this.index) : null),
      };
    }
    return null;
  }

  scrollIntoView() {}

  click() {
    this.onClick(this.index + 1);
  }
}

class FakeDocument {
  constructor(pages) {
    this.pages = pages;
    this.currentQuestion = 1;
    this.body = new FakeElement({ text: this.bodyText });
    this.writes = [];
  }

  get bodyText() {
    return `Question ${this.currentQuestion}\n${this.pages.length} questions`;
  }

  querySelector(selector) {
    if (selector === "#questionreview" || selector === "#examContent") {
      return new FakeElement({ html: "<div id=\"questionreview\"></div>" });
    }
    if (selector === "#nav") {
      return new FakeElement({ html: "<table id=\"nav\"></table>" });
    }
    if (selector === "h2") {
      return new FakeElement({ html: `<h2>Question ${this.currentQuestion}</h2>`, text: `Question ${this.currentQuestion}`, tagName: "H2" });
    }
    if (selector === ".jwpassage" || selector === "#leftside" || selector === ".passage" || selector === "[class*='passage']" || selector === "#passage") {
      const passage = this.pages[this.currentQuestion - 1].passage;
      return new FakeElement({ html: `<section class="jwpassage">${passage}</section>`, text: passage, tagName: "SECTION", className: "jwpassage" });
    }
    if (selector === "#centerContent" || selector === "#questionreview" || selector === "main") {
      const question = this.pages[this.currentQuestion - 1].question;
      return new FakeElement({ html: `<main id="centerContent">${question}</main>`, text: question, tagName: "MAIN" });
    }
    return null;
  }

  querySelectorAll(selector) {
    if (selector === "#nav tbody tr") {
      return this.pages.map((_, index) => new FakeNavRow(index, question => {
        this.currentQuestion = question;
        this.body.innerText = this.bodyText;
      }));
    }
    return [];
  }

  write(html) {
    this.writes.push(html);
  }

  close() {}
}

function loadJackWestinScript() {
  const markdownPath = path.join(__dirname, "export-scripts.md");
  const markdown = fs.readFileSync(markdownPath, "utf8");
  const match = markdown.match(/```javascript\n([\s\S]*?)\n```/);
  assert.ok(match, "expected a JavaScript code block in export-scripts.md");
  return match[1];
}

async function runScriptWithPages(pages) {
  const document = new FakeDocument(pages);
  const popupDocument = new FakeDocument(pages);
  const alerts = [];
  const sandbox = {
    console,
    document,
    alert: message => alerts.push(message),
    setTimeout: callback => callback(),
    window: {
      open: () => ({ document: popupDocument }),
    },
  };

  const result = vm.runInNewContext(loadJackWestinScript(), sandbox);
  await result;

  return { alerts, output: popupDocument.writes.join("") };
}

test("Jack Westin export keeps each passage with its question group", async () => {
  const { alerts, output } = await runScriptWithPages([
    { passage: "Passage A", question: "Question 1 content" },
    { passage: "Passage A", question: "Question 2 content" },
    { passage: "Passage B", question: "Question 3 content" },
    { passage: "Passage B", question: "Question 4 content" },
  ]);

  assert.deepEqual(alerts, []);
  assert.equal((output.match(/class="passage-section"/g) || []).length, 2);
  assert.match(output, /Passage for Question 1[\s\S]*Passage A/);
  assert.match(output, /Passage for Question 3[\s\S]*Passage B/);
  assert.ok(output.indexOf("Passage A") < output.indexOf("Question 1 content"));
  assert.ok(output.indexOf("Question 2 content") < output.indexOf("Passage B"));
  assert.ok(output.indexOf("Passage B") < output.indexOf("Question 3 content"));
});
