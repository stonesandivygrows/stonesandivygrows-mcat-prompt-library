# CARS Study Garden

This folder is the canonical GitHub and Obsidian-compatible home for CARS strategy, pattern reports, session hubs, passage autopsies, and raw-review routing.

The organization combines two requirements:

1. **Parent/child hierarchy** so every file has a predictable home.
2. **Study-vibes presentation** so parent pages feel like calm dashboards and child pages feel like focused workrooms.

## Parent/child map

```text
cars/
├── README.md                                  # Parent command center
├── analysis-prompts.md                        # Reusable analysis prompts
├── 01-strategy-garden/
│   └── 3-layer-operational-autopsy.md         # Stable reading/autopsy rules
├── 02-pattern-reports/                        # Cross-passage trend reports
├── 03-jack-westin-session-hubs/
│   └── 2026/
│       ├── 2026-05-15__may-15-16-session-hub.md
│       └── 2026-05-15__may-15-16/
│           └── doctors-as-educators.md
├── 04-passage-autopsies/                      # Standalone passage library
└── 05-raw-transcripts-inbox/                  # Temporary cleanup queue
```

Empty lanes are created when the first durable file belongs there; raw source dumps should not be added merely to make a folder appear complete.

## Navigation

### 01 — Strategy Garden

Stable rules that should transfer across passages:

- [3-Layer Operational Autopsy System](01-strategy-garden/3-layer-operational-autopsy.md)
- question-type triggers
- timing rules
- syntax interruption rules
- answer-choice comparison rules

A rule that applies only to one passage stays inside that passage autopsy.

### 02 — Pattern Reports

Cross-passage diagnoses belong here:

- ADHD cognitive-fatigue patterns
- recurring timing breakdowns
- repeated syntax failures
- answer-choice trap trends
- strategy keep/modify/stop decisions

### 03 — Jack Westin Session Hubs

Each dated practice block receives one parent hub. Individual passages are children of that session.

- [May 15/16, 2026 Session Hub](03-jack-westin-session-hubs/2026/2026-05-15__may-15-16-session-hub.md)
  - [Doctors as Educators](03-jack-westin-session-hubs/2026/2026-05-15__may-15-16/doctors-as-educators.md)

### 04 — Passage Autopsies

Use this lane for clean, standalone passage autopsies that are not best housed only inside one dated session. Session-specific passage pages may be linked here later without duplicating their content.

### 05 — Raw Transcripts Inbox

Temporary holding area for Otter logs, dictation dumps, and unprocessed review notes.

Cleanup flow:

**raw transcript → cleaned passage map → question autopsy → pattern report → archive/link**

## Non-negotiable question autopsy

Every missed, guessed, stuck, or unstable question uses this exact sequence:

**What Happened → Why → Fix Rule → Trigger → Strategy Status**

## 3-Layer landmark key

- **★** Main Claim
- **⚠️** Contrast or pivot
- **→** Cause/effect
- **EX** Example

See the [full operational specification](01-strategy-garden/3-layer-operational-autopsy.md).

## Storage rule

- **GitHub:** canonical, versioned Markdown; prompts; indexes; durable reports; cleaned autopsies.
- **Obsidian:** active navigation, backlinks, local parent/child browsing, and study use.
- **Local/cloud archive:** raw PDFs, screenshots, audio, giant exports, and source files unless a small excerpt is required for a durable analysis.

Notion is not the canonical active hierarchy for this folder.