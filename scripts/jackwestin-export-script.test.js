const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const markdownPath = path.join(__dirname, 'export-scripts.md');
const markdown = fs.readFileSync(markdownPath, 'utf8');
const snippets = [...markdown.matchAll(/```javascript\n([\s\S]*?)\n```/g)].map(match => match[1]);
const jackWestinScript = snippets[0];
const uworldScript = snippets[1];

test('embedded exporter snippets parse as JavaScript', () => {
  assert.equal(snippets.length, 2, 'expected Jack Westin and UWorld snippets');
  assert.doesNotThrow(() => new vm.Script(jackWestinScript));
  assert.doesNotThrow(() => new vm.Script(uworldScript));
});

test('Jack Westin exporter captures passage HTML with each question', () => {
  assert.match(jackWestinScript, /const passageHTML = getPassageHTML\(\);\n\s+const qHTML = cleanClone\(getMainContent\(\)\)\.outerHTML;/);
  assert.match(jackWestinScript, /collected\.push\(\{ q, passageHTML, qHTML \}\)/);
  assert.match(jackWestinScript, /function renderCollectedSections\(items\)/);
  assert.doesNotMatch(jackWestinScript, /<div class="passage-section"><h2>Passage<\/h2>\$\{passageHTML/);
});

test('Jack Westin exporter aborts instead of printing partial captures', () => {
  const incompleteGuardIndex = jackWestinScript.indexOf('collected.length !== maxQuestions');
  const openIndex = jackWestinScript.indexOf('window.open("", "JackWestinFullExport"');

  assert.notEqual(incompleteGuardIndex, -1, 'missing incomplete-capture guard');
  assert.notEqual(openIndex, -1, 'missing print-window creation');
  assert.ok(incompleteGuardIndex < openIndex, 'incomplete-capture guard must run before opening the print window');
  assert.match(jackWestinScript, /could not navigate to question \$\{q\}/);
  assert.match(jackWestinScript, /could not navigate back to Question 1/);
});

test('embedded UWorld exporter aborts incomplete captures before opening a print window', () => {
  const guardIndex = uworldScript.indexOf('questionsHTML.length !== total');
  const openIndex = uworldScript.indexOf("window.open('', '', 'width=800,height=600')");

  assert.notEqual(guardIndex, -1, 'missing incomplete-capture guard');
  assert.notEqual(openIndex, -1, 'missing print-window creation');
  assert.ok(guardIndex < openIndex, 'incomplete-capture guard must run before opening the print window');
  assert.match(uworldScript, /Popup blocked\. Allow popups for UWorld/);
});
