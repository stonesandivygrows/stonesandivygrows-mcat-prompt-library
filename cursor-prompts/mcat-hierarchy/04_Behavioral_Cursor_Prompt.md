# Cursor Prompt — Behavioral Science MCAT Hierarchy Maps

Paste this into Cursor after reading `00_Global_Rules_and_Batching.md`.

## Task

Build the Behavioral Science section of my MCAT hierarchy map system.

## Subject Folder

```text
MCAT_Hierarchy_Maps/04_Behavioral/
```

## Folder/File Structure

Create:

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

## Behavioral-Specific Rules

Use Khan Academy/Pankow-style organization when it is more detailed than Kaplan.

Behavioral terms should be organized as:

```text
Term
├── Definition
├── Distinguishing cue
├── Contrast term
├── Example
└── MCAT trap
```

For theories:

```text
Theory
├── Core claim
├── Key theorist if high-yield
├── Example cue
├── Similar theory
└── Trap
```

For sociology:

```text
Concept
├── Level: micro / meso / macro
├── Institution or group involved
├── Mechanism
├── Example
└── Trap
```

For research methods:

```text
Study design concept
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
│   ├── definition
│   └── recognition cue
├── Term B
│   ├── definition
│   └── recognition cue
└── Trap
    └── how MCAT tries to make them look similar
```

## Required Cross-Link Tags

Use these when helpful:

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

Follow this strictly:

```text
Target output per batch: 1,200–2,000 tokens
Hard max: 2,500 tokens
```

One batch may be:

```text
├── subject README only
├── one unit top-level hierarchy only
├── one small cluster of related terms only
├── one distinction-pair cluster only
└── one revision pass only
```

Never generate all Behavioral Science units in one batch.

Each response must begin:

```text
Batch: Behavioral / [Unit] / [Branch or Term Cluster]
Scope: [top-level only OR expanded branch OR revision]
Status: Draft
```

Each response must end:

```text
STOP POINT
Next suggested batch: [specific next branch]
```

## Output Format for Unit Files

Every file should start like this:

```markdown
# [Unit Title]

Source spine: Khan Academy/Pankow/Kaplan Behavioral Science. UWorld/Anki used only for high-yield reinforcement.

## Hierarchy Map

```text
[UNIT TITLE]
│
├── 1. Identity / Concept Cluster
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

- [Add exact targeted cards here after review]
```

## Start Command

Start by creating only:

1. `04_Behavioral/README.md`
2. The folder structure
3. Top-level index file for Behavioral Science
4. Empty unit skeletons only

Do not fully expand any unit yet.
