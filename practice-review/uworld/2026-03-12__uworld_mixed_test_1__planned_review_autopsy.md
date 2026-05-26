# 2026-03-12 — UWorld Mixed Test 1: Planned Review Autopsy

## Status

This is the lightweight next-pass autopsy/review layer for UWorld Mixed Test 1 from March 12, 2026.

Purpose:
- Preserve the corrected review flow.
- Keep sticky corrections active before moving to later tests.
- Store the fixed MCAT biolab technique flowchart in GitHub as the source of record.
- Track newly discovered problem areas from follow-up audio review.
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
- template strand vs newly synthesized complementary strand
- Sanger is not automatically cDNA
- Taq polymerase is PCR-associated, but Sanger default wording is DNA polymerase
- agarose is not the best default assumption for Sanger sequencing fragments

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
- ATP controls the channel gate; the chloride gradient drives the ion movement

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
- SDS makes proteins negatively charged; reduction does not make them negative
- reducing agents like DTT or beta-mercaptoethanol break disulfide bonds
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

## 6. Electrophoresis physics: voltage, electric field, current

Priority: high

Review:
- voltage is not “run through” the gel; a voltage difference is applied across the gel
- voltage difference creates an electric field
- electric field exerts force on charged molecules: F = qE
- DNA has a negative phosphate backbone, so q is negative
- negative DNA moves opposite the electric field, toward the positive anode
- positive molecules would move with the electric field
- neutral molecules have no meaningful net electrophoretic migration because q ≈ 0
- current means movement of charge, not only movement of electrons
- in gel/buffer, current is carried mostly by small ions in the buffer
- the circular loop field around a current-carrying wire is magnetic field, not electric field

Sticky line:

**Voltage creates the electric field; the electric field moves charged molecules; buffer ions carry most of the current.**

## 7. SDS-PAGE vs Sanger electrophoresis current confusion

Priority: high

Review:
- both SDS-PAGE and Sanger gel/capillary electrophoresis require an applied voltage/current
- DNA does not “make the current” in Sanger sequencing
- Sanger DNA fragments are already negative because of the phosphate backbone
- SDS-PAGE proteins become negative because SDS coats them
- SDS denatures proteins and gives a similar charge-to-mass ratio
- SDS-PAGE separates proteins mostly by size
- Sanger separates DNA fragments by size, often differing by one nucleotide

Sticky line:

**Sanger: DNA is naturally negative. SDS-PAGE: SDS makes proteins negative. Both need applied voltage/current.**

## 8. CFTR membrane protein domains and folding

Priority: medium-high

Review:
- CFTR is an integral transmembrane protein
- CFTR functions as a chloride channel/regulated transporter-family protein
- TMD = transmembrane domain, embedded in lipid bilayer, forms the chloride pathway
- NBD = nucleotide-binding domain, cytosolic, binds ATP
- R domain = regulatory domain, controlled by phosphorylation
- domains are not separate proteins; one protein can contain multiple domains
- primary, secondary, tertiary, and quaternary structure are levels of organization, not separate molecules
- transmembrane segments in eukaryotic membrane proteins are commonly alpha helices
- beta sheets can form transmembrane beta barrels in special contexts, but CFTR-style TMD logic is alpha-helical
- hydrophobic amino acids are expected on membrane-facing surfaces
- polar/charged residues are expected in cytosolic or extracellular aqueous regions
- exact NBD fold is not a required MCAT memorization target unless passage provides it

Sticky line:

**TMD makes the membrane path; NBD binds ATP; R domain regulates. The same protein contains all these domains.**

## 9. Sanger technique classification cleanup

Priority: medium-high

Review:
- Sanger sequencing is DNA polymerase extension plus ddNTP chain termination plus size separation
- if the target DNA was first amplified by PCR, PCR is the prep step, not the sequencing step itself
- cDNA only applies when starting from RNA/mRNA and using reverse transcriptase
- do not call the newly synthesized strand “cDNA” unless it was made from RNA
- template strand = strand read by polymerase
- newly synthesized strand = strand being built, complementary to the template
- Sanger gel is better associated with PAGE-like high-resolution separation or capillary electrophoresis, not basic agarose by default

Sticky line:

**Sanger = DNA synthesis + chain termination + size separation. cDNA only enters if RNA was converted to DNA first.**

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

# Added Physics-to-Biochemistry Bridge

## Electrophoresis force model

```text
Voltage difference applied across gel
        ↓
Electric field forms across buffer/gel
        ↓
Charged molecules feel force: F = qE
        ↓
DNA has q < 0 because phosphate backbone is negative
        ↓
DNA force is opposite electric field
        ↓
DNA migrates toward positive anode
        ↓
Gel matrix sieves by size
        ↓
Smaller fragments migrate farther
```

## Electric field vs current vs magnetic field

```text
Voltage difference → creates electric field
Electric field → drives charged particle motion
Charged particle motion → current
Current in gel/buffer → mostly ion movement, not electron flow
Circular field around a wire/current → magnetic field, not electric field
```

## Sanger vs SDS-PAGE charge source

```text
Sanger sequencing:
DNA fragments are naturally negative because of phosphate backbone.

SDS-PAGE:
Proteins become negative because SDS coats them.

Reducing agents:
DTT or beta-mercaptoethanol break disulfide bonds; they do not create the main negative charge.
```

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
21. Does Sanger sequencing require applied voltage/current?
22. Does DNA create the current in a Sanger gel?
23. What creates the electric field in electrophoresis?
24. What equation explains the force on DNA in an electric field?
25. Why does a neutral molecule not migrate meaningfully in electrophoresis?
26. In SDS-PAGE, what makes proteins negative?
27. What does a reducing agent do in SDS-PAGE?
28. What is the difference between electric field and magnetic field around a current?
29. In CFTR, what does the TMD do?
30. In CFTR, what does the NBD do?
31. In CFTR, what does the R domain do?
32. Are protein domains separate proteins or regions of the same protein?
33. Are CFTR transmembrane regions more likely alpha-helical or beta-sheet for MCAT purposes?
34. When does cDNA enter the Sanger/PCR conversation?
35. What is the strand being built by DNA polymerase called?
36. Why is PAGE/capillary electrophoresis a better Sanger association than regular agarose gel?

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
- Electrophoresis charge/field/current logic
- Anode/cathode sign confusion
- Electric field vs magnetic field confusion
- SDS vs reducing agent confusion
- cDNA vs newly synthesized complementary DNA confusion
- Membrane protein domain classification
- Domain vs separate protein confusion

---

# Next Action

Before opening the next test review, do a 5-minute oral pass through the Mini Retention Quiz. Anything missed becomes a repeat weak point in the next autopsy.
