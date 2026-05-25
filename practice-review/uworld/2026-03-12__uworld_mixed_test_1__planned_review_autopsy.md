# 2026-03-12 — UWorld Mixed Test 1: Planned Review Autopsy

## Status

This is the lightweight next-pass autopsy/review layer for UWorld Mixed Test 1 from March 12, 2026.

Purpose:
- Preserve the corrected review flow.
- Keep sticky corrections active before moving to later tests.
- Store the fixed MCAT biolab technique flowchart in GitHub as the source of record.
- Avoid duplicating the full final autopsy page.

## Placement

Notion target when connector access is available again:

- Parent: `03_REVIEW_AUTOPSIES — Mistake Repair Library`
- Related page: `[03/12] UWorld Mixed | Test 1 — Planned Review Notes`
- Related final autopsy: `[03/12] UWorld Mixed | Test 1: Final Autopsy + QC Guide`

GitHub path:

`practice-review/uworld/2026-03-12__uworld_mixed_test_1__planned_review_autopsy.md`

---

# Review Order

## 1. DNA synthesis + Sanger sequencing

Priority: high

Review:
- dNTP vs ddNTP
- why ddNTP stops synthesis after incorporation
- 3′-OH nucleophilic attack
- alpha phosphate of incoming dNTP
- pyrophosphate release and PPi hydrolysis
- Sanger gel reading bottom to top
- when to complement vs when to read the sequence directly

Sticky line:

**ddNTP can be incorporated, but once incorporated, it lacks the 3′-OH needed for the next phosphodiester bond.**

## 2. Phosphorylation logic

Priority: high

Review:
- hydroxyl group on serine, threonine, and tyrosine is phosphorylated
- aspartate and glutamate can mimic phosphorylation because of negative carboxylate charge
- alanine can remove phosphorylation potential
- phosphorylation site vs phosphomimetic trap

Sticky line:

**Hydroxyl gets phosphorylated. Carboxylate mimics phosphorylated.**

## 3. CFTR transport logic

Priority: medium-high

Review:
- ATP gating vs active transport
- passive movement down an electrochemical gradient
- chloride movement and osmotic water movement
- osmotic pressure vs oncotic pressure
- CFTR loss leading to thick secretions

Sticky line:

**ATP touching the channel does not automatically make ion movement active transport. Gradient direction decides transport type.**

## 4. Protein structure + SDS-PAGE + trypsin degradation

Priority: medium-high

Review:
- ΔF508 means phenylalanine deletion at position 508
- 3-base deletion can remove one amino acid without causing a frameshift
- phenylalanine is hydrophobic and aromatic
- mutation can disrupt protein folding
- SDS-PAGE separates mostly by size after SDS denatures and coats proteins
- fading band after trypsin means more degradation

Sticky line:

**Mutant band fading faster means mutant protein/domain is more protease-sensitive.**

## 5. Inclined-plane force components

Priority: high retention risk

Review:
- mg sinθ = component of gravity down the ramp
- mg cosθ = component into the ramp / normal-force basis
- N = mg cosθ
- friction = μN = μmg cosθ
- friction equals mg sinθ only if equilibrium or constant velocity implies balance

Sticky line:

**Sine slides; cosine squashes; friction uses μN.**

---

# Fixed Flowchart — MCAT Biolab Techniques

## Correction note

The original chart was mostly correct, but the conceptual order needed tightening. The best hierarchy is not just “what section it appears in”; it should be organized by what the technique does to the target molecule.

High-level categories:

1. Separate / purify molecules
2. Copy / amplify / sequence nucleic acids
3. Detect / identify / quantify targets
4. Measure expression / function / interaction

Important classification correction:

Western, Southern, and Northern blots often depend on separation first, but their test-day identity is **detection of a specific molecule**.

## Clean ASCII flowchart

```text
                           ┌───────────────────────────────┐
                           │     MCAT BIOLAB TECHNIQUES    │
                           │  organized by what they DO     │
                           └───────────────┬───────────────┘
                                           │
        ┌──────────────────┬───────────────┼───────────────┬──────────────────┐
        ▼                  ▼               ▼               ▼                  
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 1. SEPARATE /   │ │ 2. COPY /       │ │ 3. DETECT /     │ │ 4. MEASURE      │
│    PURIFY       │ │    SEQUENCE     │ │    IDENTIFY     │ │    FUNCTION /   │
│                 │ │                 │ │                 │ │    INTERACTION  │
└────────┬────────┘ └────────┬────────┘ └────────┬────────┘ └────────┬────────┘
         │                   │                   │                   │
         ├─ Gel electrophoresis                  ├─ Western blot      ├─ Enzyme kinetics
         │  ├─ Native PAGE                        │  └─ Detects a      │  ├─ Km
         │  │  └─ shape + charge + size           │     specific       │  ├─ Vmax
         │  ├─ SDS-PAGE                           │     protein        │  └─ inhibitors
         │  │  └─ size mostly                     │                   │
         │  └─ Agarose gel                        ├─ Southern blot     ├─ Binding assays
         │     └─ DNA/RNA size                    │  └─ Detects a      │  ├─ affinity
         │                                        │     specific DNA   │  └─ specificity
         ├─ Chromatography                        │                   │
         │  ├─ Size-exclusion / gel filtration    ├─ Northern blot     ├─ Reporter assays
         │  │  └─ separates by size               │  └─ Detects a      │  └─ promoter or
         │  ├─ Ion-exchange                       │     specific RNA   │     gene activity
         │  │  └─ separates by charge             │                   │
         │  ├─ Affinity                           ├─ ELISA             └─ Functional cell assays
         │  │  └─ separates by binding            │  └─ Detects or        └─ phenotype / output
         │  └─ TLC                                │     quantifies
         │     └─ separates by polarity           │     protein or
         │                                        │     antibody
         └─ Centrifugation / extraction           │
            └─ separates by density, phase,       ├─ DNA microarray
               solubility, or compartment         │  └─ Measures many
                                                  │     mRNA expression
                                                  │     levels at once
                                                  │
                                                  └─ qPCR / RT-qPCR
                                                     └─ Quantifies DNA
                                                        or RNA-derived cDNA
```

## Condensed MCAT version

```text
MCAT BIOLAB TECHNIQUES
├─ Separate / purify
│  ├─ Gel electrophoresis
│  │  ├─ Native PAGE: shape + charge + size
│  │  ├─ SDS-PAGE: size mostly
│  │  └─ Agarose gel: DNA/RNA size
│  ├─ Chromatography
│  │  ├─ Size-exclusion: size
│  │  ├─ Ion-exchange: charge
│  │  ├─ Affinity: binding specificity
│  │  └─ TLC: polarity / affinity for stationary vs mobile phase
│  └─ Centrifugation / extraction: density, solubility, phase, compartment
│
├─ Copy / amplify / sequence
│  ├─ PCR: amplifies DNA
│  ├─ RT-PCR: RNA → cDNA, then amplification
│  ├─ qPCR / RT-qPCR: quantifies DNA or RNA-derived cDNA
│  └─ Sanger sequencing: reads base order using ddNTP termination
│
├─ Detect / identify / quantify
│  ├─ Western blot: specific protein
│  ├─ Southern blot: specific DNA
│  ├─ Northern blot: specific RNA
│  ├─ ELISA: protein/antibody detection or quantification
│  └─ DNA microarray: many gene-expression levels at once
│
└─ Function / interaction
   ├─ Enzyme kinetics: Km, Vmax, inhibition
   ├─ Binding assays: affinity and specificity
   ├─ Reporter assays: gene/promoter activity
   └─ Functional cell assays: phenotype or output
```

## Sticky decision rules

- If the method asks “where did it move?” think **separation**.
- If the method asks “did the target exist?” think **blot / ELISA / probe detection**.
- If the method asks “how much starting DNA/RNA was there?” think **qPCR / RT-qPCR**.
- If the method asks “what is the exact sequence?” think **Sanger sequencing**.
- If the method asks “which genes are more expressed?” think **microarray or RNA expression assay**.
- If the method asks “what does the enzyme do?” think **enzyme kinetics**.

---

# Mini Retention Quiz

Answer orally before moving to the next UWorld review.

1. Why does a ddNTP stop DNA synthesis?
2. In Sanger sequencing, why do you read the gel bottom to top?
3. What is the difference between a dNTP and a ddNTP?
4. What does NBD stand for?
5. What does TMD stand for?
6. Why can ATP be involved even when transport is passive?
7. What functional group is phosphorylated on serine, threonine, and tyrosine?
8. Why do aspartate and glutamate mimic phosphorylation?
9. What does ΔF508 mean?
10. In SDS-PAGE, do smaller proteins/fragments travel farther or less far?
11. What does a fading band mean after trypsin exposure?
12. On an incline, what is mg sinθ?
13. On an incline, what is mg cosθ?
14. What is the general friction equation?
15. Which lab techniques are primarily separation techniques?
16. Which blot detects protein?
17. Which blot detects DNA?
18. Which blot detects RNA?
19. What does ELISA usually detect or quantify?
20. What is the difference between RT-PCR and qPCR?

---

# Repeat Weak-Point Flags

Mark these if missed again:

- Directionality
- Experimental design
- Wording trap
- Protein structure
- Molecular biology
- Phosphorylation logic
- Lab technique classification
- Math tools / physics components

---

# Next Action

Before opening the next test review, do a 5-minute oral pass through the Mini Retention Quiz. Anything missed becomes a repeat weak point in the next autopsy.
