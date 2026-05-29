const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const scriptPath = path.join(__dirname, 'uworld-full-export-safe-dom.js');
const scriptSource = fs.readFileSync(scriptPath, 'utf8');

class FakeElement {
  constructor({ innerText = '', textContent = '', innerHTML = '', outerHTML = '<div></div>' } = {}) {
    this.innerText = innerText;
    this.textContent = textContent || innerText;
    this.innerHTML = innerHTML;
    this.outerHTML = outerHTML;
    this.style = {};
    this.className = '';
    this.id = '';
  }

  querySelectorAll() {
    return [];
  }

  querySelector() {
    return null;
  }

  cloneNode() {
    return new FakeElement({
      innerText: this.innerText,
      textContent: this.textContent,
      innerHTML: this.innerHTML,
      outerHTML: this.outerHTML
    });
  }

  closest() {
    return null;
  }

  contains() {
    return false;
  }

  getBoundingClientRect() {
    return { width: 100, height: 40 };
  }

  remove() {}

  replaceWith() {}

  scrollIntoView() {}

  click() {}
}

async function runExporter({
  total = 3,
  nextBehavior = 'advance',
  scopedCounter = true,
  bodyText
} = {}) {
  const state = {
    current: 1,
    alerts: [],
    opened: false,
    writtenHTML: ''
  };

  const body = new FakeElement();
  Object.defineProperty(body, 'innerText', {
    get() {
      if (bodyText) return bodyText(state);
      return `Question ${state.current} of ${total}\nDate: May 29, 2026\nBiology\nTest Id: 12345`;
    }
  });

  const center = new FakeElement({
    outerHTML: '<main id="centerContent"><p>Question content</p></main>'
  });

  const head = new FakeElement({
    innerHTML: '<style>.uworld{}</style>'
  });

  const next = new FakeElement();
  next.click = () => {
    if (nextBehavior === 'advance' && state.current < total) {
      state.current += 1;
    } else if (nextBehavior === 'jump' && state.current + 2 <= total) {
      state.current += 2;
    }
  };

  const document = {
    body,
    head,
    baseURI: 'https://example.test/review',
    fonts: { ready: Promise.resolve() },
    getElementById(id) {
      return id === 'centerContent' ? center : null;
    },
    querySelector(selector) {
      if (selector === 'a[aria-label*="next" i]') return next;
      return null;
    },
    querySelectorAll(selector) {
      if (selector.includes('[class*="question" i]') && scopedCounter) {
        return [new FakeElement({ innerText: `Question ${state.current} of ${total}` })];
      }
      return [];
    },
    dispatchEvent() {
      return true;
    }
  };

  const context = {
    alert(message) {
      state.alerts.push(String(message));
    },
    console,
    document,
    Element: FakeElement,
    KeyboardEvent: class KeyboardEvent {},
    Promise,
    setTimeout(callback) {
      callback();
      return 0;
    },
    window: {
      dispatchEvent() {
        return true;
      },
      getComputedStyle() {
        return { display: 'block', visibility: 'visible', opacity: '1' };
      },
      open() {
        state.opened = true;
        return {
          document: {
            write(html) {
              state.writtenHTML += html;
            },
            close() {}
          }
        };
      }
    }
  };
  context.globalThis = context;

  await vm.runInNewContext(scriptSource, context, { filename: scriptPath });
  return state;
}

test('aborts before opening a PDF when navigation does not advance', async () => {
  const state = await runExporter({ nextBehavior: 'stuck' });

  assert.equal(state.opened, false);
  assert.match(state.alerts[0], /Navigation did not advance after Question 1/);
});

test('aborts before opening a PDF when navigation skips a question', async () => {
  const state = await runExporter({ total: 4, nextBehavior: 'jump' });

  assert.equal(state.opened, false);
  assert.match(state.alerts[0], /Expected Question 2 of 4/);
});

test('ignores incidental N of M figure text when reading the question counter', async () => {
  const state = await runExporter({
    total: 5,
    scopedCounter: false,
    bodyText: ({ current }) =>
      `Figure 1 of 3\nQuestion ${current} of 5\nDate: May 29, 2026\nBiology\nTest Id: 12345`
  });

  assert.equal(state.opened, true);
  assert.match(state.writtenHTML, /UWorld Full Export/);
  assert.match(state.writtenHTML, /Question 5 of 5/);
});
