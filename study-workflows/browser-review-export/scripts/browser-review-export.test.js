const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const SCRIPT_DIR = __dirname;

function makeElement({ innerText = '', outerHTML, attrs = {}, onClick } = {}) {
  return {
    innerText,
    textContent: innerText,
    innerHTML: outerHTML || innerText,
    outerHTML: outerHTML || `<div>${innerText}</div>`,
    style: {},
    getAttribute(name) {
      return attrs[name] ?? null;
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    cloneNode() {
      return makeElement({ innerText, outerHTML: this.outerHTML, attrs });
    },
    click() {
      if (onClick) onClick();
    },
    dispatchEvent() {
      if (onClick) onClick();
    },
    remove() {}
  };
}

async function runBrowserScript(fileName, contextOverrides) {
  const code = fs.readFileSync(path.join(SCRIPT_DIR, fileName), 'utf8');
  const alerts = [];
  const logs = [];
  const context = {
    alert(message) {
      alerts.push(String(message));
    },
    console: {
      log(message) {
        logs.push(['log', String(message)]);
      },
      warn(message) {
        logs.push(['warn', String(message)]);
      },
      error(message) {
        logs.push(['error', String(message)]);
      }
    },
    setTimeout(callback) {
      if (typeof callback === 'function') callback();
      return 0;
    },
    Date,
    Math,
    MouseEvent: class MouseEvent {
      constructor(type, init) {
        this.type = type;
        this.init = init;
      }
    },
    ...contextOverrides
  };
  context.globalThis = context;
  vm.createContext(context);
  const result = vm.runInContext(code, context);
  if (result && typeof result.then === 'function') {
    await result;
  }
  return { alerts, logs };
}

function createUWorldEnvironment({ total = 3, canNavigate = () => true } = {}) {
  let current = 1;
  const openedWindows = [];
  const centerContent = makeElement({
    outerHTML: `<main id="centerContent">Question payload ${current}</main>`
  });
  const head = makeElement({ outerHTML: '<meta name="test" content="uworld">' });
  head.innerHTML = '<meta name="test" content="uworld">';

  const document = {
    baseURI: 'https://example.test/uworld',
    head,
    body: {
      get innerText() {
        return [
          'Figure 1 of 2',
          `Question ${current} of ${total}`,
          'Test Id: 42',
          'Date : Jun 14, 2026',
          'Biology'
        ].join('\n');
      }
    },
    getElementById(id) {
      if (id === 'centerContent') {
        return {
          ...centerContent,
          cloneNode() {
            return makeElement({
              outerHTML: `<main id="centerContent">Question payload ${current}</main>`
            });
          }
        };
      }
      return null;
    },
    querySelector(selector) {
      if (selector === 'a[aria-label*="next" i]' && current < total && canNavigate(current)) {
        return makeElement({
          onClick() {
            current += 1;
          }
        });
      }
      return null;
    },
    querySelectorAll() {
      return [];
    }
  };

  const window = {
    open() {
      const opened = {
        html: '',
        document: {
          write(html) {
            opened.html += html;
          },
          close() {}
        }
      };
      openedWindows.push(opened);
      return opened;
    }
  };

  return { document, window, openedWindows };
}

test('UWorld exporter ignores incidental figure counters and captures the real total', async () => {
  const env = createUWorldEnvironment({ total: 3 });

  await runBrowserScript('uworld-full-review-export.js', {
    document: env.document,
    window: env.window
  });

  assert.equal(env.openedWindows.length, 1);
  assert.match(env.openedWindows[0].html, /UWorld Full Export — 3 Questions/);
  assert.match(env.openedWindows[0].html, /Question 3 of 3/);
});

test('UWorld exporter aborts instead of printing a partial PDF when next navigation is missing', async () => {
  const env = createUWorldEnvironment({ total: 3, canNavigate: () => false });

  const result = await runBrowserScript('uworld-full-review-export.js', {
    document: env.document,
    window: env.window
  });

  assert.equal(env.openedWindows.length, 0);
  assert.match(result.alerts.join('\n'), /Collected 1 of 3 questions\. No PDF was created/);
});

function createJackWestinStaleNavigationEnvironment() {
  const openedWindows = [];
  const questionText = 'This is the full text for the first visible Jack Westin question and explanation.';
  const rows = [1, 2].map(number => ({
    innerText: `Question ${number}`,
    querySelector() {
      return null;
    },
    dispatchEvent() {}
  }));
  const head = makeElement({ outerHTML: '<meta name="test" content="jw">' });
  head.innerHTML = '<meta name="test" content="jw">';

  const document = {
    title: 'JW Review',
    baseURI: 'https://example.test/jw',
    head,
    body: {
      innerText: 'Question 1\nQuestion 2'
    },
    querySelector(selector) {
      if (selector === '#question') {
        return makeElement({
          innerText: questionText,
          outerHTML: `<section id="question">${questionText}</section>`
        });
      }
      if (selector === '#passage') {
        return makeElement({
          innerText: 'Passage text',
          outerHTML: '<article id="passage">Passage text</article>'
        });
      }
      if (/pagecount/i.test(selector)) {
        return null;
      }
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '#nav tbody tr, #sortable-table tbody tr') {
        return rows;
      }
      return [];
    }
  };

  const window = {
    open() {
      const opened = {
        html: '',
        closed: false,
        document: {
          open() {
            opened.html = '';
          },
          write(html) {
            opened.html += html;
          },
          close() {}
        },
        close() {
          opened.closed = true;
        }
      };
      openedWindows.push(opened);
      return opened;
    }
  };

  return { document, window, openedWindows };
}

test('Jack Westin exporter aborts when navigation leaves stale question content visible', async () => {
  const env = createJackWestinStaleNavigationEnvironment();

  const result = await runBrowserScript('jack-westin-full-review-export.js', {
    document: env.document,
    window: env.window
  });

  assert.equal(env.openedWindows.length, 1);
  assert.equal(env.openedWindows[0].closed, true);
  assert.doesNotMatch(env.openedWindows[0].html, /Jack Westin Full Review Export/);
  assert.match(result.alerts.join('\n'), /could not load Jack Westin question 2 of 2/);
});
