# MCAT Physics — Waves & Sound Hierarchy Flowchart

## Mind Map Rules

```text
MIND MAP RULES

1. Source and QC rule
   ├── Primary build source = Anki cards
   ├── Kaplan = verification source
   ├── Use Kaplan to confirm accuracy, hierarchy, and MCAT framing
   ├── QC check every new branch against Anki before treating it as primary content
   ├── QC check Kaplan when a branch seems unclear, missing, or possibly misleading
   ├── Do not add major content that is absent from Anki unless Kaplan confirms it is necessary
   └── If a concept is Kaplan-only, label it as Kaplan verification or support

2. GitHub and QC rule
   ├── GitHub = locked storage and version history
   ├── Obsidian = editing workspace
   ├── ChatGPT = QC and cleanup workspace
   ├── Do not treat GitHub like Google Docs
   ├── Only finalized or QC-approved sections should be committed to GitHub
   ├── Commit full-section replacements when possible
   ├── Commit message should state the content change clearly
   └── Before GitHub update, check:
       ├── source rule followed
       ├── tree indentation preserved
       ├── branch labels placed correctly
       ├── arrows avoided except ↑ and ↓
       ├── slash avoided except inside equations
       └── traps marked with ⚠

3. Branch label rule
   ├── Structural branch labels go in front
   │   └── Example: [2.2] Wave speed equation
   │
   └── Cross-reference labels go at the end
       └── Example: Speed depends on medium ↔ [1.2 Medium Requirement]

4. Symbol rule
   ├── ∝ = proportional to
   ├── ∝ 1/x = inversely proportional to x
   ├── = must always be written as =
   ├── ↑ = increase only
   ├── ↓ = decrease only
   ├── ↔ = related idea appears elsewhere
   ├── ≠ = not equal
   ├── ≈ = approximately
   └── ⚠ = MCAT trap

5. Arrow rule
   ├── Use ↑ and ↓ only for increase and decrease
   ├── Avoid →, ←, and ⇒
   └── Use words instead:
       ├── causes
       ├── creates
       ├── leads to
       ├── affects
       ├── changes
       ├── matches
       ├── forms
       └── depends on

6. Slash rule
   ├── Avoid slash unless it is inside an equation
   ├── Use words instead:
   │   ├── and
   │   ├── or
   │   ├── per
   │   ├── compared with
   │   └── relative to
   │
   └── Example:
       ├── Avoid: Sound Level slash dB
       └── Use: Sound Level and dB

7. Hierarchy rule
   ├── Do not split opposite directions into separate major branches unless needed
   ├── Use:
   │   ├── Relationship
   │   ├── Direction
   │   ├── Special case
   │   └── Trap
   │
   └── Example:
       ├── Relationship: Intensity ∝ amplitude²
       ├── Direction: ↑Amplitude means ↑Intensity
       └── Trap: Amplitude changes loudness, not pitch

8. Cross-reference rule
   ├── Do not tag every line
   ├── Only tag bridge concepts
   ├── Good bridge concepts:
   │   ├── medium requirement
   │   ├── wave speed equation
   │   ├── intensity
   │   ├── Doppler effect
   │   ├── standing waves
   │   ├── resonance
   │   └── optics links
   │
   └── Too many tags make the map harder to study

9. Section purpose rule
   ├── Section 1 = identity
   ├── Section 2 = variables
   ├── Section 3 = reasoning hub
   └── Later sections = detailed formulas and applications

10. Copy-paste formatting rule
    ├── Keep tree indentation consistent
    ├── Use code blocks for Obsidian and GitHub
    ├── Avoid broken tree bars
    └── Replace full sections instead of piecemeal edits when possible
```

## Hierarchy Flowchart

```text
WAVES & SOUND
│
├── 1. Wave Identity / Wave Concept
│   ├── What is a wave?
│   ├── Does it need a medium?
│   ├── Which direction does the medium move?
│   └── Space example
│
├── 2. Core Wave Variables
│   ├── Displacement & amplitude
│   ├── Wavelength
│   ├── Frequency & period
│   └── Wave speed equation
│
├── 3. What Changes When...
│   ├── Amplitude changes
│   ├── Distance changes
│   ├── Relative motion changes
│   ├── Medium changes
│   └── Driving frequency changes
│
├── 4. Intensity & Sound Level
│   ├── Intensity
│   ├── Inverse-square spreading
│   ├── Sound level and decibels
│   └── Loudness
│
├── 5. Doppler Effect
│   ├── Source and observer move toward each other
│   ├── Source and observer move away from each other
│   ├── Zero relative motion
│   └── Pitch change
│
├── 6. Superposition & Interference
│   ├── Superposition
│   ├── Constructive interference
│   ├── Destructive interference
│   └── Phase relationship
│
├── 7. Standing Waves & Harmonics
│   ├── Nodes and antinodes
│   ├── Strings
│   ├── Open pipes
│   └── Closed pipes
│
├── 8. Resonance & Damping
│   ├── Resonance
│   ├── Natural frequency
│   ├── Damping
│   └── Attenuation
│
├── 9. Shock Waves
│   ├── Source reaches or exceeds sound speed
│   ├── Wavefronts pile up
│   └── Sonic boom
│
├── 10. Medical Applications
│   ├── Ultrasound imaging
│   ├── Doppler ultrasound
│   └── Therapeutic ultrasound
│
└── 11. Major Traps
    ├── Medium versus no medium
    ├── Pitch versus loudness
    ├── Decibels versus intensity
    ├── Amplitude measurement
    └── Closed-pipe formulas
```