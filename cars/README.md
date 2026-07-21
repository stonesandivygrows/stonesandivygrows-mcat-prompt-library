# CARS Study Garden

> **AI handoff:** Before changing this folder, read [`../AI_RESUME_CONTEXT.md`](../AI_RESUME_CONTEXT.md), [`../PROJECT_HANDOFF_INDEX.md`](../PROJECT_HANDOFF_INDEX.md), and [`../TASK_LEDGER.md`](../TASK_LEDGER.md). This README is the folder-level command center. Update the task ledger before stopping a long CARS task so another model can resume without reconstructing the chat.

This folder is the canonical GitHub and Obsidian-compatible home for CARS strategy, pattern reports, session hubs, passage autopsies, and raw-review routing.

The organization combines two requirements:

1. **Parent/child hierarchy** so every file has a predictable home.
2. **Study-vibes presentation** so parent pages feel like calm dashboards and child pages feel like focused workrooms.

## AI resume block

- **Authoritative files:** this README for routing; `01-strategy-garden/cars-operating-system-and-decision-tree.md` for live solving; `01-strategy-garden/cars-timing-whiteboard-and-skipping-protocol.md` for pacing; `04-passage-autopsies/question-by-question-game-tape-template.md` for review output.
- **Current student rules:** do not default to skimming; use the opening as an anchor; read paragraphs for jobs; translate the stem before choosing a strategy; hop-and-return is allowed; final paragraphs are often high-value but not an absolute rule; use start-time checkpoints.
- **Quality boundary:** do not assign one generic distractor taxonomy to every CARS question. Each question must be classified and tied to exact passage evidence.
- **Storage boundary:** raw commercial passages, screenshots, and large exports remain private/local. GitHub stores original analysis, workflows, indexes, and bounded searchable anchors.
- **Resume instruction:** identify the active passage/session in `TASK_LEDGER.md`, open the source file listed there, continue from the exact next question, and update the relevant pattern report only after the question-level autopsy is complete.

## Parent/child map

```text
cars/
├── README.md                                  # Parent command center
├── analysis-prompts.md                        # Reusable analysis prompts
├── master-guides/
│   └── cars-master-guide-for-online-sharing.md
├── 01-strategy-garden/
│   ├── 3-layer-operational-autopsy.md
│   ├── cars-operating-system-and-decision-tree.md
│   ├── cars-timing-whiteboard-and-skipping-protocol.md
│   ├── question-stem-translations-and-boundaries.md
│   └── syntax-proper-nouns-quotes-and-punctuation-protocol.md
├── 02-pattern-reports/
│   └── 2026-05__core-strategy-failures.md
├── 03-jack-westin-session-hubs/
│   └── 2026/
│       ├── 2026-05-15__may-15-16-session-hub.md
│       └── 2026-05-15__may-15-16/
│           └── doctors-as-educators.md
├── 04-passage-autopsies/
│   └── question-by-question-game-tape-template.md
└── 05-raw-transcripts-inbox/                  # Temporary cleanup queue
```

Empty lanes are created when the first durable file belongs there; raw source dumps should not be added merely to make a folder appear complete.

## Navigation

### Master Guides

Shareable, polished versions of the CARS system belong here:
- [CARS Master Guide for Online Sharing](master-guides/cars-master-guide-for-online-sharing.md)

The master guide is written for outside readers. It should stay free of raw commercial passage text, private transcript details, and overly personalized notes.

### 01 — Strategy Garden

Stable rules that should transfer across passages:
- [3-Layer Operational Autopsy System](01-strategy-garden/3-layer-operational-autopsy.md)
- [CARS Operating System and Decision Tree](01-strategy-garden/cars-operating-system-and-decision-tree.md)
- [CARS Timing, Whiteboard, and Skipping Protocol](01-strategy-garden/cars-timing-whiteboard-and-skipping-protocol.md)
- [Question Stem Translations and Strategy Boundaries](01-strategy-garden/question-stem-translations-and-boundaries.md)
- [Syntax, Proper Nouns, Quotes, and Punctuation Protocol](01-strategy-garden/syntax-proper-nouns-quotes-and-punctuation-protocol.md)

The operating system is the live play-by-play plan. The timing file is the canonical whiteboard and pacing page. The stem guide selects the correct question strategy. The syntax protocol handles dense sentences, names, titles, quotations, and punctuation.

A rule that applies only to one passage stays inside that passage autopsy.

### 02 — Pattern Reports

Cross-passage diagnoses belong here:

- [May 2026 Core Strategy Failures](02-pattern-reports/2026-05__core-strategy-failures.md)
- ADHD cognitive-fatigue patterns
- recurring timing breakdowns
- repeated syntax failures
- answer-choice trap trends
- strategy keep/modify/stop decisions

### 03 — Jack Westin Session Hubs

Each dated practice block receives one parent hub. Individual passages are children of that session.

- [May 15/16, 2026 Session Hub](03-jack-westin-session-hubs/2026/2026-05-15__may-15-16-session-hub.md)
  - [Doctors as Educators](03-jack-westin-session-hubs/2026/2026-05-15__may-15-16/doctors-as-educators.md)

Use the **Jack Westin website date** as the canonical practice date, even when the audio review or local file was created later.

### 04 — Passage Autopsies

Use this lane for clean, standalone passage autopsies that are not best housed only inside one dated session. Session-specific passage pages may be linked here later without duplicating their content.

- [Question-by-Question CARS Game-Tape Template](04-passage-autopsies/question-by-question-game-tape-template.md)

The game-tape template embeds enough question, answer-choice, reasoning, and passage context to remain understandable without reopening the source export.

### 05 — Raw Transcripts Inbox

Temporary holding area for Otter logs, dictation dumps, and unprocessed review notes.

Cleanup flow:

**raw transcript → cleaned passage map → question autopsy → pattern report → archive/link**

## Non-negotiable question autopsy

Every missed, guessed, stuck, or unstable question uses this sequence:

**Context → What Happened → Why → Correct Route → Strategy That Belonged → Strategy That Did Not Belong → Fix Rule → Trigger → Strategy Status**

Capture every audio-transcript question, note to self, future plan, confusion, strategy trial, and self-correction. Do not let these disappear into a broad summary.

## Strategy-selection rule

A major source of error is not lacking strategies but mixing strategies that answer different tasks.

Before solving:

1. Translate the stem.
2. Identify the question type.
3. Use one matching strategy.
4. Escalate only if that strategy fails.

Examples:

- inference works forward
- assumption works backward
- analogy matches mechanism
- function asks why something was included
- detail uses targeted retrieval

## 3-Layer landmark key

- **★** Main Claim
- **⚠️** Contrast or pivot
- **→** Cause/effect
- **EX** Example

See the [full operational specification](01-strategy-garden/3-layer-operational-autopsy.md).

## Storage rule

- **GitHub:** canonical, versioned Markdown; prompts; indexes; durable reports; cleaned autopsies.
- **Obsidian:** active navigation, backlinks, local parent/child browsing, and study use.
- **Notion:** mirrored study-vibes dashboard and editable working hierarchy for active review.
- **Local/cloud archive:** raw PDFs, screenshots, audio, giant exports, and source files unless a small excerpt is required for a durable analysis.

GitHub remains the version-controlled source of truth; Notion mirrors the parent/child organization for active study and editable review.
