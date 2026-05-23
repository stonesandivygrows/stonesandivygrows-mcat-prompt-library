const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(
  new URL('./uworld-full-export-safe-dom.js', `file://${__dirname}/`),
  'utf8'
);

function extractBetween(startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert.notEqual(start, -1, `Could not find ${startNeedle}`);

  const end = source.indexOf(endNeedle, start + startNeedle.length);
  assert.notEqual(end, -1, `Could not find ${endNeedle}`);

  return source.slice(start, end);
}

const helpers = vm.runInNewContext(`
  ${extractBetween('function collectQuestionCounts', '\n\n  function chooseQuestionCount')}
  ${extractBetween('function chooseQuestionCount', '\n\n  function getQuestionCount')}
  ({ collectQuestionCounts, chooseQuestionCount });
`);

test('question counter prefers the real test total over smaller asset captions', () => {
  const matches = helpers.collectQuestionCounts(`
    1 of 2
    Question 1 of 59
  `);

  assert.deepEqual(helpers.chooseQuestionCount(matches), { current: 1, total: 59 });
});

test('question counter ignores non-question prose and impossible counts', () => {
  const matches = helpers.collectQuestionCounts(`
    Figure 1 of 2 shows the pathway.
    Question 60 of 59
    12 of 59
  `);

  assert.deepEqual(matches, [{ current: 12, total: 59 }]);
});

test('exporter refuses to print when navigation is incomplete or unverifiable', () => {
  assert.match(source, /questionsHTML\.length !== total/);
  assert.match(source, /newInfo\.total === total && newInfo\.current === current \+ 1/);
  assert.match(source, /No PDF was opened/);
});

test('popup cleanup is scoped to detected popups, not global close controls', () => {
  assert.match(source, /popup\.querySelectorAll\(closeSelectors\)/);
  assert.doesNotMatch(source, /\[\.\.\.document\.querySelectorAll\(closeSelectors\)\]/);
});
