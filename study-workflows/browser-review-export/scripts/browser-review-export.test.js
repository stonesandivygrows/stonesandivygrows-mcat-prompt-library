const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const scriptsDir = __dirname;

function runScript(fileName, context) {
  const source = fs.readFileSync(path.join(scriptsDir, fileName), 'utf8');
  return vm.runInNewContext(source, context, { filename: fileName, timeout: 1000 });
}

function createHead() {
  return {
    innerHTML: '',
    cloneNode() {
      return {
        innerHTML: '',
        querySelectorAll() {
          return [];
        }
      };
    }
  };
}

function createClone(outerHTML) {
  return {
    outerHTML,
    style: {},
    querySelectorAll() {
      return [];
    }
  };
}

function createQuestionNode(text, outerHTML = `<div>${text}</div>`) {
  return {
    innerText: text,
    style: {},
    outerHTML,
    cloneNode() {
      return createClone(outerHTML);
    }
  };
}

function createBaseContext() {
  const alerts = [];
  const openedWindows = [];

  return {
    alerts,
    openedWindows,
    console: {
      log() {},
      warn() {},
      error() {}
    },
    alert(message) {
      alerts.push(String(message));
    },
    setTimeout(callback) {
      callback();
      return 0;
    },
    window: {
      open() {
        openedWindows.push({});
        return {
          document: {
            open() {},
            write() {},
            close() {}
          }
        };
      },
      dispatchEvent() {}
    },
    KeyboardEvent: class KeyboardEvent {},
    MouseEvent: class MouseEvent {
      constructor(type, options) {
        this.type = type;
        this.options = options;
      }
    }
  };
}

test('UWorld exporter aborts before printing when Next is missing after a labelled count', async () => {
  const context = createBaseContext();
  const center = {
    style: {},
    cloneNode() {
      return createClone('<main id="centerContent">Question 1 full content</main>');
    }
  };

  context.document = {
    baseURI: 'https://example.test/uworld',
    head: createHead(),
    body: {
      innerText: 'Figure 1 of 4\nQuestion 1 of 2\nTest Id: 12345\nDate : Jun 20, 2026\nBiology'
    },
    getElementById(id) {
      return id === 'centerContent' ? center : null;
    },
    querySelector(selector) {
      if (selector === 'a[aria-label*="next" i]') return null;
      return null;
    },
    querySelectorAll() {
      return [];
    }
  };

  await runScript('uworld-full-review-export.js', context);

  assert.equal(context.openedWindows.length, 0);
  assert.match(context.alerts.at(-1), /after question 1 of 2/);
});

test('UWorld exporter aborts before printing when navigation skips a question', async () => {
  const context = createBaseContext();
  const center = {
    style: {},
    cloneNode() {
      return createClone('<main id="centerContent">Question content</main>');
    }
  };
  const next = {
    click() {
      context.document.body.innerText = 'Question 3 of 3\nTest Id: 12345\nDate : Jun 20, 2026\nChemistry';
    }
  };

  context.document = {
    baseURI: 'https://example.test/uworld',
    head: createHead(),
    body: {
      innerText: 'Question 1 of 3\nTest Id: 12345\nDate : Jun 20, 2026\nChemistry'
    },
    getElementById(id) {
      return id === 'centerContent' ? center : null;
    },
    querySelector(selector) {
      if (selector === 'a[aria-label*="next" i]') return next;
      return null;
    },
    querySelectorAll() {
      return [];
    }
  };

  await runScript('uworld-full-review-export.js', context);

  assert.equal(context.openedWindows.length, 0);
  assert.match(context.alerts.at(-1), /skipped from question 1 to question 3/);
});

test('Jack Westin exporter aborts before opening a print window on stale question content', async () => {
  const context = createBaseContext();
  const rows = [
    {
      innerText: 'Question 1',
      querySelector() { return this; },
      dispatchEvent() {}
    },
    {
      innerText: 'Question 2',
      querySelector() { return this; },
      dispatchEvent() {}
    }
  ];
  const questionText = 'This is the unchanged first question content with enough length.';
  const questionNode = createQuestionNode(questionText, `<section id="question">${questionText}</section>`);

  context.document = {
    title: 'Jack Westin Review',
    baseURI: 'https://example.test/jack-westin',
    head: createHead(),
    body: {
      innerText: 'Question 1 of 2'
    },
    querySelector(selector) {
      if (selector === '#question') return questionNode;
      if (selector === '#passage') return null;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '#nav tbody tr, #sortable-table tbody tr') return rows;
      return [];
    }
  };

  await runScript('jack-westin-full-review-export.js', context);

  assert.equal(context.openedWindows.length, 0);
  assert.match(context.alerts.at(-1), /question 2 did not load new, verified content/);
});
