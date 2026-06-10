const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const scriptPath = path.join(__dirname, 'uworld-full-export-safe-dom.js');
const script = fs.readFileSync(scriptPath, 'utf8');

function extractJavaScriptFences(markdown) {
  return [...markdown.matchAll(/```javascript\n([\s\S]*?)\n```/g)].map(match => match[1]);
}

test('standalone UWorld exporter remains syntactically valid', () => {
  assert.doesNotThrow(() => new vm.Script(script));
});

test('standalone UWorld exporter aborts before printing incomplete captures', () => {
  const guardIndex = script.indexOf('questionsHTML.length !== total');
  const openIndex = script.indexOf("window.open('', '', 'width=1000,height=800')");

  assert.notEqual(guardIndex, -1, 'missing incomplete-capture guard');
  assert.notEqual(openIndex, -1, 'missing print-window creation');
  assert.ok(guardIndex < openIndex, 'incomplete-capture guard must run before opening the print window');
  assert.match(script, /No PDF was generated because the export would be incomplete/);
});

test('standalone UWorld exporter scopes question-count parsing before body fallback', () => {
  assert.match(script, /function parseQuestionCountFromText\(text\)/);
  assert.match(script, /for \(const selector of selectors\)/);
  assert.match(script, /document\.querySelectorAll\(selector\)/);

  const selectorLoopIndex = script.indexOf('for (const selector of selectors)');
  const bodyFallbackIndex = script.indexOf('return parseQuestionCountFromText(document.body.innerText)');
  assert.ok(selectorLoopIndex < bodyFallbackIndex, 'body fallback should not run before scoped counter checks');
});

test('embedded Markdown JavaScript snippets remain syntactically valid', () => {
  const markdown = fs.readFileSync(path.join(__dirname, '..', 'export-scripts.md'), 'utf8');
  const snippets = extractJavaScriptFences(markdown);

  assert.equal(snippets.length, 2, 'expected Jack Westin and UWorld snippets');
  snippets.forEach((snippet, index) => {
    assert.doesNotThrow(() => new vm.Script(snippet), `snippet ${index + 1} should parse`);
  });
});
