const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const scriptsDir = __dirname;

class FakeElement {
  constructor({ innerText = '', outerHTML = '<div></div>', innerHTML = '', onClick = null } = {}) {
    this.innerText = innerText;
    this.outerHTML = outerHTML;
    this.innerHTML = innerHTML;
    this.onClick = onClick;
    this.style = {};
  }

  click() {
    if (this.onClick) this.onClick();
  }

  dispatchEvent() {
    this.click();
    return true;
  }

  cloneNode() {
    return new FakeElement({
      innerText: this.innerText,
      outerHTML: this.outerHTML,
      innerHTML: this.innerHTML
    });
  }

  querySelector() {
    return null;
  }

  querySelectorAll() {
    return [];
  }

  remove() {}
}

function createWritableWindow(openedWindows) {
  const writableDocument = {
    html: '',
    open() {
      this.html = '';
    },
    write(html) {
      this.html += html;
    },
    close() {}
  };
  const win = {
    document: writableDocument,
    close() {
      this.closed = true;
    }
  };
  openedWindows.push(win);
  return win;
}

async function runBrowserScript(scriptName, { document, window, alerts }) {
  const code = fs.readFileSync(path.join(scriptsDir, scriptName), 'utf8');
  const context = vm.createContext({
    console,
    document,
    window,
    alert(message) {
      alerts.push(String(message));
    },
    MouseEvent: class MouseEvent {},
    setTimeout(callback) {
      callback();
      return 0;
    }
  });

  await vm.runInContext(code, context, { filename: scriptName });
}

function createUWorldDocument({ bodyText, centerHTML = '<main id="centerContent">Question body</main>' }) {
  const center = new FakeElement({
    innerText: 'Question body with explanation content',
    outerHTML: centerHTML
  });

  return {
    baseURI: 'https://example.test/uworld',
    body: {
      get innerText() {
        return bodyText;
      }
    },
    head: new FakeElement({ innerHTML: '<style></style>' }),
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById(id) {
      return id === 'centerContent' ? center : null;
    }
  };
}

test('UWorld exporter chooses the question counter over earlier figure captions', async () => {
  const openedWindows = [];
  const alerts = [];
  const document = createUWorldDocument({
    bodyText: [
      'Figure 1 of 2',
      'Question 1 of 1',
      'Test Id: 410735433',
      'Date : Jun 15, 2026',
      'Chemistry'
    ].join('\n')
  });

  await runBrowserScript('uworld-full-review-export.js', {
    document,
    alerts,
    window: {
      open() {
        return createWritableWindow(openedWindows);
      }
    }
  });

  assert.deepEqual(alerts, []);
  assert.equal(openedWindows.length, 1);
  assert.match(openedWindows[0].document.html, /UWorld Full Export/);
  assert.match(openedWindows[0].document.html, /1 Questions/);
});

test('UWorld exporter does not open a printable PDF after incomplete navigation', async () => {
  const openedWindows = [];
  const alerts = [];
  const document = createUWorldDocument({
    bodyText: [
      'Question 1 of 3',
      'Test Id: 410735433',
      'Date : Jun 15, 2026',
      'Chemistry'
    ].join('\n')
  });

  await runBrowserScript('uworld-full-review-export.js', {
    document,
    alerts,
    window: {
      open() {
        return createWritableWindow(openedWindows);
      }
    }
  });

  assert.equal(openedWindows.length, 0);
  assert.equal(alerts.length, 1);
  assert.match(alerts[0], /No PDF was created/);
});

function createJackWestinDocument() {
  const rows = [
    new FakeElement({ innerText: 'Question 1' }),
    new FakeElement({ innerText: 'Question 2' })
  ];
  const question = new FakeElement({
    innerText: 'This is the first question stem with enough content to pass the length check.',
    outerHTML: '<section id="question">First question stale content</section>'
  });
  const passage = new FakeElement({
    innerText: 'Passage text for the first question.',
    outerHTML: '<article id="passage">Passage text</article>'
  });

  return {
    baseURI: 'https://example.test/jack-westin',
    title: 'Jack Westin Test',
    body: {
      innerText: 'Question 1 of 2'
    },
    head: new FakeElement({ innerHTML: '<style></style>' }),
    querySelector(selector) {
      if (selector === '#question') return question;
      if (selector === '#passage') return passage;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '#nav tbody tr, #sortable-table tbody tr') return rows;
      return [];
    }
  };
}

test('Jack Westin exporter aborts instead of printing stale duplicated question content', async () => {
  const openedWindows = [];
  const alerts = [];

  await runBrowserScript('jack-westin-full-review-export.js', {
    document: createJackWestinDocument(),
    alerts,
    window: {
      open() {
        return createWritableWindow(openedWindows);
      }
    }
  });

  assert.equal(openedWindows.length, 0);
  assert.equal(alerts.length, 1);
  assert.match(alerts[0], /Export stopped at Question 2 of 2/);
  assert.match(alerts[0], /No PDF was created/);
});
