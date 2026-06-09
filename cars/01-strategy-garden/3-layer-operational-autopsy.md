# 3-Layer Operational Autopsy System

## Purpose

This is the canonical CARS reading and mistake-review framework for reducing ADHD working-memory load without flattening passage meaning.

It governs:

- syntax-interruption handling
- voice and evidence tracking
- passage landmarks
- question-by-question autopsies
- strategy keep/modify/stop decisions

## Layer 1 — Background / Reading Priority

### Sky Blue — Core Flow

Read on the first pass.

Keep:

- subject
- main verb
- central claim
- contrast or pivot
- cause/effect relationship
- conclusion

In plain Markdown, core flow remains normal text.

### Slate Gray — Skip First Pass

Temporarily deprioritize only when the phrase interrupts the sentence skeleton.

Typical candidates:

- appositives
- parenthetical clarifications
- descriptive insertions
- dates, credentials, or titles that do not change the immediate claim
- long examples embedded inside a sentence

In plain Markdown, wrap this material in backticks: `skip-first-pass detail`.

Do **not** use the rule “skip commas.” Commas can mark essential clauses, contrasts, or lists. The decision is functional, not punctuation-based.

Operational question:

**Can I remove this phrase temporarily and still preserve who did what and why?**

### Mint Green — Return If Asked

Keep available for targeted retrieval, but do not carry it in working memory throughout the passage.

Typical candidates:

- dates
- names
- study locations
- exact examples
- supporting factual details
- narrow definitions

In Notion, place these in a toggle or deep-detail block when useful. In Markdown, place them under a clearly labeled “Return If Asked” subsection.

## Layer 2 — Text Color / Voice

These colors represent who is speaking and what epistemic job the sentence performs.

- **Dark Red — Author thesis or judgment:** the author’s conclusion, evaluation, criticism, or recommendation.
- **Black — Neutral narration:** setup, chronology, or description without a clear evaluative stance.
- **Dark Green — Author paraphrasing another view:** the author reports someone else’s position without necessarily endorsing it.
- **Purple — Direct quote:** quoted speech or wording from another source.
- **Dark Blue — Hard evidence:** study result, documented observation, concrete data, or factual support.

When color is unavailable, label voice only when ambiguity matters:

- **AUTHOR:**
- **NARRATION:**
- **PARAPHRASE:**
- **QUOTE:**
- **EVIDENCE:**

## Layer 3 — Functional Landmarks

Inject these symbols into passage margins or paragraph maps:

- **★ Main Claim** — thesis, paragraph point, or controlling conclusion
- **⚠️ Contrast** — pivot, qualification, exception, or disagreement
- **→ Cause/Effect** — mechanism, consequence, or argumentative progression
- **EX Example** — illustration, case, analogy, or application

Landmarks identify function, not merely content.

## Syntax-Interruption Procedure

When punctuation overloads a sentence:

1. Find the grammatical subject.
2. Find the main verb.
3. State the core claim in plain language.
4. Put interrupting material in backticks.
5. Restore skipped material only if it changes the claim or a question asks about it.

Use the script:

**Subject → Verb → Point**

Example structure:

> The general practitioners `who participated in the multi-year study` described education as preventive lifestyle advice.

Core flow:

> The general practitioners described education as preventive lifestyle advice.

The inserted clause remains available but does not control the first-pass meaning.

## Question-Type Routing

- **According to / states / mentions** → retrieval
- **Suggests / implies** → one supported step beyond the text
- **Assumes** → required hidden bridge; reason backward
- **Function / role / why mention** → what the material does in the argument
- **Analogy / application** → same relationship in a new setting
- **Strengthen / weaken / validity** → test the argument’s support beam
- **Main idea / author likely agrees** → preserve the passage’s full relationship, scope, and direction

Do not return to the passage by default. Return when the task requires local evidence, precise wording, or retrieval.

## Strict Question Autopsy

Every missed, guessed, stuck, or unstable question uses this exact order:

### What Happened →

Describe the observable decision error without moral judgment.

### Why →

Identify the mechanism: task misclassification, scope error, relationship reversal, retrieval overuse, syntax overload, outside knowledge, time pressure, or another specific cause.

### Fix Rule →

State one executable replacement behavior.

### Trigger →

Name the word, stem type, sentence feature, or internal signal that should activate the fix.

### Strategy Status →

Use one:

- **Keep** — strategy worked as intended
- **Modify** — useful strategy with a defined correction
- **Stop** — strategy reliably adds confusion or time cost
- **Retest** — insufficient evidence; test under controlled conditions
- **Resolved** — demonstrated across multiple later questions

## Passage-Level Output Standard

Each cleaned passage autopsy should contain:

1. Passage-level diagnosis
2. Main claim and central contrast
3. Cause/effect chain
4. Paragraph functions
5. Compressed passage skeleton
6. Trap forecast
7. Strict question autopsies
8. Transferable rules
9. Source note distinguishing verbatim text from reconstruction

## Guardrails

- Do not convert every comma phrase into skip material.
- Do not label an author paraphrase as the author’s own thesis.
- Do not treat an example as the main claim.
- Do not preserve raw commercial passage text in GitHub when a durable paraphrased map is sufficient.
- Do not promote a one-passage observation into a universal rule without repeated evidence.
- Record strategy changes instead of silently overwriting earlier methods.

## Compact Test-Day Reminder

```text
CORE: subject → verb → point
VOICE: author / other view / quote / evidence
LANDMARKS: ★ claim | ⚠️ contrast | → cause | EX example
QUESTION: What job is the stem asking me to do?
AUTOPSY: What Happened → Why → Fix Rule → Trigger → Status
```
