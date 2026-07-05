# MCAT Nervous System Figma Concept Map — Coder-Facing Project Plan

## Status

Draft v0.1 for review.

This file is a **plan for a coder**, not the concept map itself.

The coder's job is not to draw the final map immediately. The coder's job is to help create a clean pipeline that turns Biology and Psychology source material into a structured, reviewable, Figma-ready knowledge graph.

---

## Final product context

The final visual output will live in **Figma**.

This GitHub folder is only for:

- planning
- source rules
- concept taxonomy
- data schema
- relationship vocabulary
- validation rules
- Figma handoff instructions

No final Figma design should be built from this file alone.

---

## Version 1 scope decision

Version 1 should use only two source domains:

1. **Biology**
2. **Psychology / Psychology and Sociology nervous-system-relevant content**

Other MCAT domains should not define Version 1.

Later versions may add:

- Biochemistry receptor/signaling details
- Physics optics/acoustics details
- Endocrine/stress details
- Sociology/illness behavior connections
- Immune/neuroinflammation connections

But the first architecture should be Biology + Psychology only.

---

## Why Biology + Psychology first

Biology provides the physical nervous system backbone:

- neurons
- glia
- brain
- spinal cord
- peripheral nerves
- sensory receptors
- synapses
- neurotransmitters
- autonomic nervous system
- motor output

Psychology provides the behavioral and cognitive overlay:

- sensation
- perception
- thresholds
- signal detection
- sensory adaptation
- learning
- memory
- emotion
- consciousness
- psychoactive drugs
- psychological disorders

The Figma map should show that psychology concepts are not floating vocabulary. They should be anchored to biological signaling.

Core organizing logic:

```text
Stimulus
  ↓
Sensory receptor
  ↓
Neural signal
  ↓
CNS processing
  ↓
Perception / emotion / memory / behavior
```

---

## Learner-fit requirements

The plan must match Neissa's established MCAT concept-map preferences from previous map-building work.

### Use

- structured dashboard layout
- readable sections
- medium text density
- explicit relationship arrows
- repeated entry paths for high-yield concepts
- correction/trap nodes for known confusion points
- Figma-ready visual grammar
- staged reviewable files

### Avoid

- one giant chaotic spiderweb
- unlabeled arrows
- purely decorative shapes
- tiny dense text everywhere
- a simple textbook outline
- duplicate definitions that can drift apart
- isolated Psychology vocabulary with no Biology anchor

---

## Core instruction to the coder

Do not build a traditional mind map.

Build a **knowledge graph specification** that can later be rendered as a Figma study dashboard.

A traditional mind map asks:

```text
Which branch does this belong under?
```

This project asks:

```text
What does this concept connect to, explain, depend on, modify, or get confused with?
```

---

## Required pipeline

The coder should create a workflow with these stages.

### Stage 1 — Source ingestion

Collect only approved Version 1 sources.

Approved source types:

- Biology Anki exports
- Psychology Anki exports
- existing Biology GitHub notes
- existing Psychology GitHub notes
- relevant Google Drive reference documents if explicitly identified

Do not include outside web resources unless a later review step requests them.

### Stage 2 — Concept extraction

Extract concepts from source files.

The extraction unit is **concept**, not individual Anki card.

Multiple Anki cards may map to one concept node.

Example:

```text
Absolute threshold
Just-noticeable difference
Weber's law
Signal detection theory
Sensory adaptation
```

Each should become a concept node, while repeated cards or alternate phrasings should be references attached to that node.

### Stage 3 — Classification

Assign each concept to one or more categories.

A concept may belong to multiple categories.

Minimum categories:

- Anatomy
- Cells / glia
- Electrical physiology
- Synapses
- Neurotransmitters
- Receptors
- Sensory systems
- Motor systems
- Autonomic nervous system
- Brain regions
- Sensation
- Perception
- Learning
- Memory
- Emotion / motivation
- Consciousness
- Psychoactive drugs
- Psychological disorders
- MCAT traps / confusions

### Stage 4 — Relationship mapping

Create labeled edges between concepts.

No unlabeled edges are allowed.

Example:

```text
Sensory receptor --transduces--> stimulus
Action potential --causes--> neurotransmitter release
Dopamine --associated with--> reward
Cocaine --inhibits reuptake of--> dopamine
```

### Stage 5 — Redundancy planning

High-yield concepts should be reachable from multiple paths.

Do not create conflicting duplicate definitions.

Preferred model:

- one canonical node per concept
- repeated visual references or backlinks in multiple frames
- relationship labels showing why the concept appears in each place

Example:

```text
Dopamine can be reached from:

Neurotransmitters
Reward
Movement / basal ganglia
Parkinson disease
Schizophrenia
Stimulants
Learning / reinforcement
Motivation
```

### Stage 6 — Figma handoff preparation

The coder should produce structured data that a Figma builder can use.

Recommended handoff formats:

- Markdown outline for human review
- CSV or JSON for concept nodes
- CSV or JSON for relationship edges
- frame-by-frame layout notes
- visual grammar specification

The coder should not assume the first output is the final Figma canvas.

---

## Node schema

Every concept node should support the following fields:

```yaml
id: stable-machine-readable-id
name: human-readable concept name
source_domain: Biology | Psychology | Both
category:
  - one or more categories
short_definition: one-sentence student-facing definition
mcat_precision_note: optional corrected wording
parent_concepts:
  - broader concepts
child_concepts:
  - narrower concepts
prerequisites:
  - concepts needed first
explains:
  - downstream concepts this helps explain
related_concepts:
  - lateral links
drugs_or_disorders:
  - linked drug/disorder concepts if applicable
common_confusions:
  - trap nodes or incorrect assumptions
source_refs:
  - file/card/source references
figma_frame_suggestions:
  - one or more planned frames
```

---

## Edge schema

Every relationship edge should support the following fields:

```yaml
source_node_id: starting concept
relationship_type: controlled vocabulary term
target_node_id: ending concept
plain_language_label: wording to show on the Figma arrow
confidence: high | medium | low
source_refs:
  - supporting source references
notes: optional
```

---

## Controlled relationship vocabulary

Use a controlled vocabulary so the map does not become ambiguous.

Allowed relationship types for Version 1:

```text
is_a
part_of
contains
located_in
projects_to
travels_through
receives_input_from
sends_output_to
transduces
activates
inhibits
releases
binds_to
opens
closes
increases
decreases
requires
causes
modulates
associated_with
treated_by
blocked_by
mimics
confused_with
contrasts_with
example_of
```

The Figma arrow may use friendlier labels, but the underlying data should use stable relationship types.

---

## Proposed GitHub folder structure

Build this planning folder in digestible parts:

```text
mcat-concept-maps/nervous-system-figma-plan/

00-coder-facing-project-plan.md
01-source-scope.md
02-concept-taxonomy.md
03-node-and-edge-schema.md
04-relationship-vocabulary.md
05-figma-visual-system.md
06-frame-layout-plan.md
07-biology-backbone-requirements.md
08-psychology-overlay-requirements.md
09-redundancy-and-crosslink-rules.md
10-validation-checklist.md
11-implementation-roadmap.md
```

Each file should be independently reviewable.

---

## Planned Figma frame architecture

The coder should prepare data/layout notes for multiple Figma frames, not one uncontrolled canvas.

### Frame 1 — Master Overview

Purpose: show the whole nervous system dashboard.

Includes:

- CNS / PNS split
- input vs output
- somatic vs autonomic
- sensation/perception overlay
- neurotransmitter/receptor legend
- drug/disorder entry points

### Frame 2 — Signal Flow Template

Purpose: reusable pathway model.

```text
Stimulus → receptor → transduction → afferent signal → CNS processing → efferent output → response
```

### Frame 3 — Nervous System Anatomy

Purpose: structural backbone.

Includes:

- CNS
- PNS
- brain
- spinal cord
- cranial nerves
- peripheral nerves
- ganglia

### Frame 4 — Neuron and Synapse Physiology

Purpose: cellular mechanism layer.

Includes:

- resting membrane potential
- action potential
- saltatory conduction
- synapse
- neurotransmitter release
- EPSP / IPSP

### Frame 5 — Sensation and Perception

Purpose: connect Psychology cards to Biology.

Includes:

- absolute threshold
- just-noticeable difference
- Weber's law
- signal detection theory
- sensory adaptation
- bottom-up processing
- top-down processing
- Gestalt principles
- visual depth cues

### Frame 6 — Autonomic Nervous System Relay

Purpose: resolve sympathetic / parasympathetic confusion.

Includes:

- CNS control
- preganglionic neuron
- autonomic ganglion
- postganglionic neuron
- target organ
- adrenal medulla exception
- ACh / NE / epinephrine distinctions

### Frame 7 — Neurotransmitter and Receptor Web

Purpose: connect molecules, receptor types, behavior, and drugs.

Includes:

- acetylcholine
- dopamine
- norepinephrine
- epinephrine
- serotonin
- GABA
- glutamate
- endorphins
- ionotropic receptors
- metabotropic / GPCR receptors

### Frame 8 — Drugs and Disorders Overlay

Purpose: show mechanism-based links.

Includes:

- stimulants
- depressants
- opioids
- hallucinogens
- antipsychotics
- antidepressants
- Parkinson disease
- schizophrenia
- depression
- anxiety
- Alzheimer disease

### Frame 9 — MCAT Trap Board

Purpose: collect known confusion points.

Examples:

- afferent vs efferent
- sensation vs perception
- sensory adaptation vs habituation
- epinephrine vs norepinephrine
- hormone vs neurotransmitter
- sympathetic postganglionic default transmitter
- GPCR vs ligand-gated ion channel
- EPSP vs action potential
- CNS control vs PNS execution

---

## Visual grammar requirements for later Figma build

The coder should preserve these visual rules in the handoff notes.

### Shape meanings

```text
large rounded rectangle = major system/category
medium rectangle = concept/topic
small pill = vocabulary term
circle = neurotransmitter or molecule
hexagon = receptor
triangle/warning = MCAT trap or correction
dotted box = repeated reference / backlink
```

### Arrow rules

```text
solid arrow = direct pathway
dashed arrow = association
double arrow = bidirectional or feedback relationship
red/alert arrow = inhibition/blocking
purple arrow = drug effect
blue arrow = sensory input flow
orange arrow = motor/autonomic output
```

### Text-density rule

Use medium text.

Each visible node should usually contain:

```text
Term
short phrase / function
```

Long explanations should go into notes, side panels, or supporting GitHub files, not the main Figma node.

---

## Known correction/trap requirements

The plan should explicitly preserve common confusion points as trap nodes.

Required trap nodes:

### CNS control vs PNS execution

Correction:

The CNS controls autonomic output, but sympathetic and parasympathetic nerves are PNS pathways.

### Epinephrine vs norepinephrine

Correction:

Most sympathetic postganglionic neurons release norepinephrine. Epinephrine is mainly released into the bloodstream by the adrenal medulla.

### Preganglionic autonomic neurons

Correction:

All autonomic preganglionic neurons release acetylcholine.

### Sensation vs perception

Correction:

Sensation is detection/transduction of stimulus information. Perception is CNS interpretation of that information.

### Sensory adaptation vs habituation

Correction:

Sensory adaptation occurs at the receptor/neural response level. Habituation is decreased behavioral response after repeated exposure.

### GPCR vs ion channel

Correction:

Ionotropic receptors directly open channels. Metabotropic receptors, including GPCRs, act through signaling cascades.

---

## Validation checklist

Before data is handed to a Figma builder, each concept should answer:

- Does this concept come from Biology, Psychology, or both?
- Does it have one canonical definition?
- Is it connected to at least one parent or broader category?
- Does it have a useful downstream relationship?
- Are all arrows labeled?
- Is the concept duplicated only as a reference/backlink, not as competing definitions?
- Is any known MCAT trap captured?
- Does the concept belong in Version 1, or should it wait for a later subject expansion?

---

## Review questions for Neissa

1. Should Version 1 include only Anki-derived concepts, or should it also include missing but required MCAT Biology/Psychology concepts?
2. Should the coder prepare the data as Markdown first, CSV/JSON first, or both?
3. Should Figma be optimized for iPad studying, computer navigation, or printable export?
4. Should drug/disorder content be integrated immediately or only after anatomy and signal-flow frames are stable?
5. Should every Anki card be traceable to a concept node, even if multiple cards collapse into the same node?

Recommended defaults:

- Use Anki as the primary student-language source.
- Add missing MCAT concepts only when needed to make Biology/Psychology pathways coherent.
- Prepare both Markdown and JSON/CSV handoff files.
- Optimize Figma for iPad/computer review first, printable export second.
- Collapse duplicate Anki cards into unique concept nodes while preserving traceability.

---

## Immediate next planning files

After this charter is reviewed, create:

1. `01-source-scope.md`
2. `02-concept-taxonomy.md`
3. `03-node-and-edge-schema.md`

Do not proceed to Figma construction until those three files are reviewed.
