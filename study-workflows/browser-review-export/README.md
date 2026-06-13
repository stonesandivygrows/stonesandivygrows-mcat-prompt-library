# MCAT Review Export Toolkit

A beginner-friendly workflow for turning completed **Jack Westin** and **UWorld** practice sets into stable review files.

This toolkit contains:

- a permanent style that hides Jack Westin explanation videos while leaving the written explanations visible;
- instructions for full-page screenshots with GoFullPage;
- a Jack Westin Console script that attempts to collect an entire completed review set into one printable document;
- a UWorld Console script that collects the questions and explanations from a completed review set into one printable document; and
- a question-by-question review method explaining what to do with the exported PDF after it is created.

## Important boundaries

- Use these tools only with practice material that **you are authorized to access**.
- The purpose is to create a private study archive and make personal review easier.
- Do not post or redistribute exported copyrighted passages, questions, answer choices, explanations, or images.
- Browser websites change. A script that works today may need updated selectors later.
- Never paste unknown code into the browser Console. Only use code you obtained from a source you trust and have reviewed.

## What this review style is trying to accomplish

The exported PDF is **not the review itself**. It is the complete source packet used during review.

The workflow is designed for a student who does not want to review only missed questions or depend on memory after closing a test. The goal is to preserve enough context to examine:

1. the passage, stimulus, table, graph, or experiment;
2. the complete question stem;
3. all answer choices;
4. the answer originally selected;
5. the correct answer;
6. the official written explanation; and
7. the student's own reasoning about why each answer is right or wrong.

Every question should be reviewed, including questions answered correctly. A correct answer can still hide weak reasoning, guessing, an unrecognized misconception, or an inefficient process that may fail on a harder version of the same problem.

The final purpose is to diagnose the **process that produced the answer**, not merely record the answer key.

## The full workflow at a glance

1. Complete the practice set normally.
2. Open the completed set in Review, Results, or Solutions mode.
3. Export the full set before doing the deep review.
4. Save the export with a clear test name, date, test ID, and question count.
5. Review the questions sequentially while looking at the exported file and the original website as needed.
6. For each question, explain the passage logic, reasoning, calculation, answer-choice elimination, and any misconception.
7. Turn the conversation or notes into a review guide that records durable lessons rather than copying the official explanation blindly.

## Files in this toolkit

- [`styles/jack-westin-hide-videos.user.css`](styles/jack-westin-hide-videos.user.css) — permanent Jack Westin video-hiding style for Stylus.
- [`scripts/jack-westin-full-review-export.js`](scripts/jack-westin-full-review-export.js) — Jack Westin multi-question printable export.
- [`scripts/uworld-full-review-export.js`](scripts/uworld-full-review-export.js) — UWorld multi-question printable export.

# Part 1 — Set up the browser

These instructions assume **Google Chrome on a Mac or Windows computer**. The Console scripts are not intended for an iPad or phone.

## Install Stylus for the Jack Westin video removal

Chrome's current **uBlock Origin Lite** does not provide the custom-filter workflow that the older full uBlock Origin instructions used. Stylus is therefore used here because it can apply a small CSS style to Jack Westin pages.

Install Stylus from the Chrome Web Store:

- [Stylus — Chrome Web Store](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

After installation:

1. Click the puzzle-piece Extensions icon in Chrome.
2. Find **Stylus**.
3. Click the pin icon so Stylus remains visible beside the address bar.

## Install GoFullPage for ordinary full-page screenshots

Install:

- [GoFullPage — Full Page Screen Capture](https://chromewebstore.google.com/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl)

After installation:

1. Click the puzzle-piece Extensions icon.
2. Find **GoFullPage**.
3. Pin it to the Chrome toolbar.

GoFullPage is useful when one normal webpage contains everything you need. It is less reliable when a testing site places content inside separate scrolling panes or changes questions dynamically. That is why the Console exporters are included.

# Part 2 — Permanently hide Jack Westin explanation videos

This is an accessibility and focus modification. It hides video players and video controls but keeps the written passage, questions, answer choices, correctness information, and written explanations.

## Fast installation from the repository

1. Open [`jack-westin-hide-videos.user.css`](styles/jack-westin-hide-videos.user.css).
2. Click **Raw**.
3. Stylus should recognize the UserCSS file and open an installation screen.
4. Select **Install style**.
5. Open or refresh a Jack Westin explanation page.

If the automatic installation screen does not appear, use the manual method below.

## Manual Stylus setup

1. Open any page on `jackwestin.com`.
2. Click the Stylus icon.
3. Choose **Write style for jackwestin.com**.
4. Give the style a name such as:

   `Jack Westin — Hide Explanation Videos`

5. Paste the following CSS into the editor:

```css
.solution-player-container,
.solution-player,
.solution-toggle-video-wrapper,
.passage-solution-player,
.watch-video-wrap,
.jw-video,
.react-player,
video,
iframe[src*="youtube"],
iframe[src*="vimeo"],
[class*="video-player"] {
  display: none !important;
}
```

6. Confirm that the style applies only to URLs on the domain:

   `jackwestin.com`

7. Click **Save**.
8. Refresh the Jack Westin page.

## Turn the video removal on or off

1. Open a Jack Westin page.
2. Click the Stylus icon.
3. Toggle the Jack Westin style off or on.
4. Refresh the page if the change does not appear immediately.

# Part 3 — Take a full-page screenshot with GoFullPage

Use GoFullPage for a single long webpage, a passage page, a score page, or a page whose content is already expanded.

## Before capturing

1. Open the exact page you want to preserve.
2. Wait for all text and images to finish loading.
3. Expand every written explanation, chart, diagram, dropdown, or accordion that should be included.
4. Close unnecessary pop-ups.
5. Keep the Jack Westin video-hiding style enabled if videos should be omitted.
6. Return to the top of the page.

## Capture the page

1. Click the GoFullPage camera icon.
2. Do not scroll, type, click, or switch tabs while it captures.
3. The extension will automatically scroll through the webpage.
4. A new tab will open with the finished capture.
5. Save it as:
   - **PNG** when one long image is useful; or
   - **PDF** when the material will be printed, annotated, or combined with other files.

## When GoFullPage is not enough

Do not assume a partial capture means the missing material did not load. JW and UWorld may use:

- independent left and right scrolling panes;
- dynamically loaded questions;
- hidden navigation tables;
- explanation sections that appear only after a click; or
- app elements that do not behave like an ordinary webpage.

When GoFullPage captures only the current question or misses material inside a panel, use the appropriate Console export script.

# Part 4 — Understand the browser Console before using a script

The Console is a browser tool that can run JavaScript in the webpage that is currently open. The included scripts use it to read the visible review material, move between questions, copy the review content into a clean page, and open the browser's print dialog.

The scripts do **not** automatically save a PDF. Chrome still requires you to choose **Save as PDF** in the print window.

## Open the Console

### Mac

Press:

`Command + Option + J`

### Windows

Press:

`Ctrl + Shift + J`

You can also:

1. Right-click the webpage.
2. Select **Inspect**.
3. Select the **Console** tab.

Look for a blank line beside a `>` prompt.

## If Chrome warns you not to paste

Chrome may display a self-XSS warning because attackers sometimes trick people into pasting harmful code into the Console.

1. Read the warning.
2. Confirm that the script came from this repository and that you intend to run it.
3. Chrome may instruct you to type a phrase such as `allow pasting` manually.
4. Type the exact phrase Chrome requests and press Enter.
5. Paste the script only after pasting has been enabled.

Do not paste the phrase into the address bar. Type it in the Console beside the `>` prompt.

## How to copy a script from GitHub

1. Open the script file in this repository.
2. Click **Raw** or use GitHub's copy-file button.
3. Select and copy the entire file from the first line through the final `})();`.
4. Return to the testing site's review page.
5. Click beside the Console `>` prompt.
6. Paste the complete script.
7. Press Enter once.

# Part 5 — Export a complete Jack Westin review set

Use:

- [`scripts/jack-westin-full-review-export.js`](scripts/jack-westin-full-review-export.js)

## Start on the correct page

1. Complete the Jack Westin practice set.
2. Open the completed set in the page that shows the written solutions.
3. Confirm that the page contains:
   - a passage or stimulus;
   - a question;
   - answer choices;
   - your selected answer or correctness result; and
   - the written answer explanation.
4. Open the Navigation window once and confirm that it lists all questions. You may close it afterward; the table normally remains in the page structure.
5. It is safest to navigate to Question 1 before running the script.

## Run the script

1. Allow pop-ups for `jackwestin.com` before starting, or be ready to allow them if Chrome blocks the output.
2. Open the Console.
3. Open the Jack Westin script from this repository.
4. Copy the entire script.
5. Paste it beside the Console `>` prompt.
6. Press Enter.
7. Do not use the webpage while the script is collecting questions.

The Console should display progress messages similar to:

```text
Collecting Jack Westin question 1 of 17…
Collecting Jack Westin question 2 of 17…
```

The script attempts to:

- read the hidden Navigation table to determine the number of questions;
- move through each question;
- copy a passage when a new passage begins;
- copy the question, answer choices, correctness information, and written explanation;
- remove video players and interface clutter from the copied version;
- return the live review page to the question that was open before export; and
- create one printable document.

## Save the Jack Westin PDF

When the print window opens:

1. Set **Destination** to **Save as PDF**.
2. Set **Pages** to **All**.
3. Open **More settings**.
4. Turn **Headers and footers** off.
5. Turn **Background graphics** on when answer colors or highlighted material need to remain visible.
6. Start with **Scale: 90%**.
7. Reduce the scale to about **80–85%** if text or images are cut off.
8. Save the file.

Suggested filename:

`YYYY-MM-DD__JW_CARS__Set-or-Test-ID__17Q__Full-Review.pdf`

Example:

`2026-06-13__JW_CARS__Daily-Passage-Set__17Q__Full-Review.pdf`

# Part 6 — Export a complete UWorld review set

Use:

- [`scripts/uworld-full-review-export.js`](scripts/uworld-full-review-export.js)

## Start on the correct page

1. Complete the UWorld test.
2. Open it in **Review** mode.
3. Navigate manually to **Question 1**.
4. Confirm that a counter such as `1 of 30` is visible.
5. Make sure the answer and written explanation are revealed.
6. Wait for the question, explanation, figures, and images to finish loading.

The script is intended for the review page, not the active timed-testing screen.

## Run the script

1. Open the Console.
2. Open the UWorld script from this repository.
3. Copy the complete script.
4. Paste it beside the Console `>` prompt.
5. Press Enter.
6. Do not touch the UWorld page while the script is running.

The Console should display messages similar to:

```text
Starting — Question 1 of 30
Collecting UWorld question 1 of 30…
Collecting UWorld question 2 of 30…
```

The script attempts to:

- detect the current and total question numbers;
- begin from Question 1;
- open available explanation diagrams or blue explanation links;
- copy the full central review content;
- remove draggable dividers and obstructive interface elements;
- move to the next question;
- place each question into a combined printable document; and
- create a suggested filename containing the subject, date, test ID, and number of collected questions.

## Save the UWorld PDF

When the print window opens:

1. Choose **Save as PDF**.
2. Set **Pages** to **All**.
3. Turn **Headers and footers** off.
4. Turn **Background graphics** on.
5. Review several page previews before saving.
6. Reduce the scale if a graph, table, or explanation is cut off.
7. Save using the suggested filename or a consistent archive name.

Suggested filename:

`YYYY-MM-DD__UWorld__Subject__Test-ID__30Q__Full-Review.pdf`

Example:

`2026-06-13__UWorld__Chem-Phys__Test-03__30Q__Full-Review.pdf`

# Part 7 — What to do with the exported PDF

The exported file creates a stable reference. The student should still do active reasoning.

## Review every question

Review:

- incorrect questions;
- correct questions reached with uncertain reasoning;
- correct questions reached by elimination;
- correct questions that took too long;
- correct questions where the official explanation used a better route; and
- straightforward correct questions, briefly, to confirm the underlying reasoning and answer-choice rejection.

A question is complete only when the student can explain both **why the correct answer works** and **why each competing answer fails**.

## General question-by-question review sequence

For each question, record or explain:

1. **What the question was asking**
   - Translate the stem into ordinary language.
   - Identify the exact output requested.

2. **What information mattered**
   - Passage sentence, figure, variable, equation, experiment, or outside concept.

3. **The original reasoning**
   - What did the student notice first?
   - What assumption did the student make?
   - Was the answer calculated, inferred, eliminated, or guessed?

4. **The correct reasoning route**
   - State the shortest defensible path from evidence to answer.

5. **Every answer choice**
   - Explain why the correct answer is correct.
   - Explain the specific defect in every wrong answer.
   - Avoid vague labels such as “it sounds wrong.” Name the contradiction, scope error, concept error, unit error, or unsupported assumption.

6. **The error category**
   - content gap;
   - passage misunderstanding;
   - missed qualifier;
   - math setup;
   - units;
   - graph or table interpretation;
   - answer-choice comparison;
   - overthinking;
   - timing or attention;
   - unsupported assumption; or
   - correct answer reached through fragile reasoning.

7. **The durable correction**
   - Write one reusable lesson, decision rule, or concept repair.
   - Do not merely copy the official explanation.

## Jack Westin and CARS review

For CARS, the review should identify:

- the passage's central claim or governing relationship;
- the author's attitude and degree of commitment;
- paragraph roles and major transitions;
- whose viewpoint is being discussed;
- the exact passage evidence supporting the answer;
- whether the question asks for passage fact, inference, function, application, or main idea;
- why each wrong answer exceeds, narrows, distorts, reverses, or leaves the passage; and
- what reading or answer-choice process should be repeated or changed next time.

Do not replace passage reasoning with the official explanation. First reconstruct what the passage itself permits. Then compare that reasoning with the explanation.

## UWorld science review

For UWorld science questions, the review should identify:

- the scientific concept being tested;
- whether the problem is passage-based, data-based, calculation-based, or discrete;
- the relevant variables and units;
- the setup before arithmetic;
- what each graph axis, table column, or experimental group means;
- which information is relevant and which is distractor information;
- why each answer choice is scientifically correct or incorrect; and
- whether the student's reasoning would still work if the numbers or surface wording changed.

When calculations are involved, separate:

1. identifying the target quantity;
2. choosing the relationship or equation;
3. organizing units and conversions;
4. estimating magnitude and sign; and
5. performing arithmetic.

This makes it possible to determine whether the error came from conceptual setup or calculation execution.

# Part 8 — Troubleshooting

## The videos still appear on Jack Westin

- Confirm that Stylus is enabled.
- Confirm that the style is enabled specifically on `jackwestin.com`.
- Refresh the page.
- Open the style editor and verify that the CSS was saved.
- Jack Westin may have changed a class name. Add the new video container selector to the style if necessary.

## GoFullPage captured only the visible panel

The content is probably inside an independent scrolling container. Use the Console export instead.

## The Console script did nothing

- Confirm that the cursor was beside the Console `>` prompt.
- Confirm that the entire script was pasted.
- Press Enter once.
- Check the Console for a red error message.
- Confirm that the page is a completed review or solutions page.

## Chrome says pasting is disabled

Follow the exact self-XSS instruction displayed by Chrome. Type the requested phrase manually in the Console, then paste the trusted script.

## Only one question was exported

- Return to Question 1.
- Verify that the page's Navigation list contains all questions.
- Rerun the correct script for that website.
- Do not use the JW script on UWorld or the UWorld script on JW.

## The script stopped midway

- Read the final Console message to identify the last collected question.
- Refresh the review page.
- Return to Question 1.
- Wait for the page to fully load.
- Rerun the script without interacting with the page.

## A blank page or no print window appeared

- Allow pop-ups for the testing website.
- Close the blank output tab.
- Rerun the script.
- Check whether a print window opened behind the browser.

## Images or diagrams are missing

- Wait for all images to load before starting.
- Open expandable diagrams manually if the script does not detect them.
- Turn **Background graphics** on in the print settings.
- Use GoFullPage for an individual diagram page if the website renders it in a separate overlay that cannot be copied.

## Text is cut off in the PDF

- Lower the print scale.
- Use portrait or landscape depending on the content.
- Confirm that **Pages: All** is selected.
- Inspect the print preview before saving.

## The site changed and the script no longer works

Copy the red Console error and note:

- which website was used;
- the page type;
- the visible question counter;
- the last question collected; and
- whether the passage, question, or explanation was missing.

The selectors in the script can then be updated to match the new page structure.
