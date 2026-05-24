# Cursor Prompt — Behavioral Science MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Correct Source Hierarchy

```text
Primary basis = user's Anki deck/card groups, especially Pankow/Behavioral cards
Verification/fill gaps = Khan Academy + Kaplan Behavioral Science
Passage/trap framing = UWorld
Coverage validator = AAMC outline
```

Do not build the map from Kaplan or Khan Academy first. Start from the relevant Anki/Pankow cards, then use Khan Academy/Kaplan/UWorld/AAMC to verify, correct, expand, or fill missing explanation.

## Task

Build the Behavioral Science section of the MCAT hierarchy map system using Anki as the starting scaffold.

## Subject Folder

```text
MCAT_Hierarchy_Maps/04_Behavioral/
```

## Folder/File Structure

```text
04_Behavioral/
├── README.md
└── Psychology_Sociology/
    ├── Unit01_Biological_Bases_Behavior.md
    ├── Unit02_Sensation_Perception.md
    ├── Unit03_Learning_Memory.md
    ├── Unit04_Cognition_Consciousness_Language.md
    ├── Unit05_Development_Personality.md
    ├── Unit06_Motivation_Emotion_Stress.md
    ├── Unit07_Psychological_Disorders.md
    ├── Unit08_Social_Psychology.md
    ├── Unit09_Sociology_Demographics.md
    ├── Unit10_Social_Stratification_Inequality.md
    ├── Unit11_Research_Methods_Study_Design.md
    └── Unit12_Behavioral_Major_Traps.md
```

Unit/file names are scaffolds until verified against the Anki card group and Khan/Kaplan/AAMC coverage.

## Behavioral-Specific Rules

Behavioral terms should be organized as:

```text
Term
├── Anki card basis
├── Definition
├── Distinguishing cue
├── Contrast term
├── Example
└── MCAT trap
```

For theories:

```text
Theory
├── Anki card basis
├── Core claim
├── Key theorist if high-yield
├── Example cue
├── Similar theory
└── Trap
```

For sociology:

```text
Concept
├── Anki card basis
├── Level: micro / meso / macro
├── Institution or group involved
├── Mechanism
├── Example
└── Trap
```

For research methods:

```text
Study design concept
├── Anki card basis
├── Independent variable
├── Dependent variable
├── Operationalization
├── Validity/reliability
├── Bias/confound
├── Statistical interpretation
└── Trap
```

For similar terms:

```text
Distinction pair
├── Term A
│   ├── Anki card cue
│   ├── definition
│   └── recognition cue
├── Term B
│   ├── Anki card cue
│   ├── definition
│   └── recognition cue
└── Trap
    └── how MCAT tries to make them look similar
```

## Required Cross-Link Tags

```text
🧠 Behavior link = cognition, emotion, social behavior, identity
🧬 Bio link = nervous system, hormones, stress, sensory systems
↔ See Research Methods = study design, bias, or statistics connection
↔ See Social Stratification = inequality, SES, mobility, status
⚠ Trap = common MCAT mistake
★ Anchor = high-yield memory anchor
🧪 Experiment = study design/data interpretation connection
```

## Behavioral-Specific Trap Structure

Every unit should contain a Major Confusions section:

```text
Major Confusions
├── Similar terms
│   ├── Term A = cue
│   └── Term B = cue
├── Scenario wording trap
├── Individual vs group level trap
└── Correlation vs causation trap
```

## Batching Protocol

```text
Target output per batch: 1,200–2,000 tokens
Hard max: 2,500 tokens
```

Each response must begin:

```text
Batch: Behavioral / [Unit] / [Branch or Term Cluster]
Scope: [top-level only OR expanded branch OR revision]
Status: Draft
```

Each response must end:

```text
QC CHECK
├── Anki basis checked: pass / needs fix
├── Verification source checked: Khan / Kaplan / UWorld / AAMC / needs source check
├── Indentation: pass / needs fix
├── Duplications/conflicts removed: pass / needs fix
└── Next risk to audit: [specific issue]

STOP POINT
Next suggested batch: [specific next branch]
```

## Unit File Starter

```markdown
# [Unit Title]

Basis: user's Anki/Pankow card group. Khan Academy/Kaplan/UWorld/AAMC used to verify, correct, expand, and fill gaps.

## Hierarchy Map

```text
[UNIT TITLE]
│
├── 1. Anki-Based Identity / Concept Cluster
│   ├── Relevant Anki/Pankow card group
│   ├── What is the topic?
│   ├── What level is it? individual / group / society
│   ├── What does it explain?
│   └── MCAT trap
│
├── 2. Core Terms
│   ├── Definitions
│   ├── Recognition cues
│   ├── Contrast terms
│   └── Examples
│
├── 3. What Changes When...
│   ├── Individual state changes
│   ├── Social context changes
│   ├── Developmental stage changes
│   └── Stressor/reward/punishment changes
│
├── 4. Theories / Mechanisms
│   ├── Core theory
│   ├── Theorist if high-yield
│   ├── Scenario cue
│   └── Similar theory trap
│
├── 5. Applications / Research
│   ├── Scenario application
│   ├── Study design
│   ├── Bias/confounding
│   └── Data/statistical interpretation
│
└── 6. Major Confusions
    ├── Similar terms
    ├── Individual vs group level trap
    ├── Correlation vs causation trap
    └── Shortcut or anchor
```

## ▼ High-Yield Flashcard Review Layer

- [Paste exact targeted Anki/Pankow cards here after review]
```

## Start Command

Start by creating only the folder structure and empty skeletons. Do not fully expand any unit until the relevant Anki/Pankow card group is available.
