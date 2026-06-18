const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const scriptsDir = __dirname;

function makeNode({ text = '', html = '<div></div>', onClick = null } = {}) {
  const node = {
    style: {},
    get innerText() {
      return text;
    },
    set innerText(value) {
      text = value;
    },
    get textContent() {
      return text;
    },
    set textContent(value) {
      text = value;
    },
    get outerHTML() {
      return html;
    },
    cloneNode() {
      return makeNode({ text, html, onClick });
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    remove() {},
    click() {
      if (onClick) onClick();
    },
    dispatchEvent() {
      if (onClick) onClick();
      return true;
    }
  };

  return node;
}

async function runBrowserScript(fileName, sandbox) {
  const source = fs.readFileSync(path.join(scriptsDir, fileName), 'utf8');
  const context = vm.createContext({
    console,
    Promise,
    setTimeout(callback) {
      callback();
      return 0;
    },
    clearTimeout() {},
    MouseEvent: function MouseEvent(type, init) {
      return { type, ...init };
    },
    ...sandbox
  });

  const result = vm.runInContext(source, context, { filename: fileName });
  if (result && typeof result.then === 'function') {
    await result;
  }
}

test('UWorld export aborts before printing when navigation is stuck', async () => {
  let openCount = 0;
  const alerts = [];
  const state = { current: 1, total: 30 };
  const centerContent = makeNode({
    text: 'Question content with answer choices and explanation.',
    html: '<main id="centerContent">Question content with explanation.</main>'
  });

  const document = {
    baseURI: 'https://example.test/uworld',
    title: 'UWorld Review',
    body: {
      get innerText() {
        return `Figure 1 of 2\nQuestion ${state.current} of ${state.total}\nTest Id: 123\nDate : Jun 18, 2026`;
      }
    },
    head: makeNode({ html: '<head></head>' }),
    getElementById(id) {
      return id === 'centerContent' ? centerContent : null;
    },
    querySelector(selector) {
      if (selector === 'a[aria-label*="next" i]') {
        return makeNode({ text: 'Next', html: '<a>Next</a>' });
      }
      return null;
    },
    querySelectorAll() {
      return [];
    }
  };

  await runBrowserScript('uworld-full-review-export.js', {
    document,
    alert(message) {
      alerts.push(message);
    },
    window: {
      open() {
        openCount += 1;
        return {
          document: {
            write() {},
            close() {}
          }
        };
      }
    }
  });

  assert.equal(openCount, 0);
  assert.equal(alerts.length, 1);
  assert.match(alerts[0], /Navigation became stuck after Question 1 of 30/);
});

test('Jack Westin export aborts before printing stale repeated content', async () => {
  let openCount = 0;
  const alerts = [];
  const state = { current: 1 };
  const questionText = 'Original Jack Westin question content with choices and explanation.';
  const questionNode = makeNode({
    text: questionText,
    html: '<section id="question">Original Jack Westin question content with choices and explanation.</section>'
  });
  const passageNode = makeNode({
    text: 'Passage content for the current Jack Westin set.',
    html: '<article id="passage">Passage content.</article>'
  });
  const rows = [
    makeNode({ text: 'Question 1' }),
    makeNode({
      text: 'Question 2',
      onClick() {
        state.current = 1;
      }
    })
  ];

  for (const row of rows) {
    row.querySelector = () => row;
  }

  const document = {
    baseURI: 'https://example.test/jackwestin',
    title: 'Jack Westin Review',
    body: { innerText: '' },
    head: makeNode({ html: '<head></head>' }),
    querySelector(selector) {
      if (selector === '.pagecount-number') {
        return makeNode({ text: `Question ${state.current} of 2` });
      }
      if (selector === '#question') return questionNode;
      if (selector === '#passage') return passageNode;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '#nav tbody tr, #sortable-table tbody tr') return rows;
      return [];
    }
  };

  await runBrowserScript('jack-westin-full-review-export.js', {
    document,
    alert(message) {
      alerts.push(message);
    },
    window: {
      open() {
        openCount += 1;
        return {
          document: {
            open() {},
            write() {},
            close() {}
          }
        };
      }
    }
  });

  assert.equal(openCount, 0);
  assert.equal(alerts.length, 1);
  assert.match(alerts[0], /Question 2 did not load expected content/);
});
