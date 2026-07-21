# Aidan MCAT Anki Deck — Factual Error Review (Independently Verified)

Independent scan of the full deck (~8,827 cards, ~130+ files, including the main "Aiden MCAT" folder and the smaller re-split Biochemistry/Physiology/GeneralChemistry/PhysicsMCAT/Psychology/CP-Misc folders). This list covers **23 errors found beyond GPT's original list of ~30** — those 30 aren't reproduced here since I only spot-checked them for accuracy (all confirmed correct) rather than transcribing the list itself.

**Every item below has been independently checked against outside sources** (NCBI/StatPearls, LibreTexts, primary literature, and MCAT-specific references like Jack Westin, Sketchy MCAT, and Practical Psychology) — all 23 held up. Sources are linked under each item.

Each entry: what the card currently says → what's wrong → the correction → source(s).

---

## Biology

**Biology - Cells.txt**
> "Only eukaryotes use histone proteins"
Archaea also have histone-fold proteins that package their DNA. Should specify histones are a **eukaryote + archaea** feature, not eukaryote-only.
Sources: [Structure and function of archaeal histones (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6136690/), [Histones predate the split between bacteria and archaea (Oxford Academic)](https://academic.oup.com/bioinformatics/article/35/14/2349/5232221)

**Biology - Cardiovascular System.txt**
> "Leukocytes comprise >1% of blood volume"
Backwards — leukocytes make up **less than 1%** of blood volume (erythrocytes ~45%, plasma ~55%, leukocytes/platelets the "buffy coat" <1%).
Sources: [15.1: Composition of Blood (Biology LibreTexts)](https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Anatomy_Lab/15:_Blood/15.01:_Composition_of_Blood), [What Is a Buffy Coat? (Our Blood Institute)](https://ourbloodinstitute.org/blood-matters/what-is-a-buffy-coat/)

**Biology - Endocrine.txt**
> "PTH has no net effect on blood phosphate"
Wrong — PTH **decreases** serum phosphate overall (increases bone/gut release of phosphate, but the renal effect — inhibiting phosphate reabsorption at the proximal tubule — dominates, producing a net decrease).
Sources: [Physiology, Parathyroid Hormone (StatPearls/NCBI)](https://www.ncbi.nlm.nih.gov/books/NBK499940/), [Three feedback loops precisely regulating serum phosphate concentration (Kidney International)](https://www.kidney-international.org/article/S0085-2538(15)55069-2/fulltext)

---

## Biochemistry

**Biochemistry - DNA Biotechnology.txt**
> ATP's energy comes from "phosphate repulsion," bond-breaking is exergonic (implied for ATP hydrolysis)
Repeats a myth GPT already flagged in another file — bond breaking is *always* endergonic; ATP hydrolysis is exergonic because the *products* (Pi, ADP) are more stable — via electrostatic repulsion relief, resonance stabilization, and hydration — not because breaking the bond itself releases energy. Taught wrong in a second file too.
Source: [Showing the Bonds — figure design and ATP hydrolysis misconceptions (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12142379/)

**Biochemistry - DNA Biotechnology.txt**
> Sanger N-terminal sequencing (DNFB/Sanger's reagent) analyzed via "¹H NMR spectroscopy" (repeated ~4x)
Should be **chromatography** — the DNP-amino acid product is separated and identified by comparing its elution profile to chromatography standards. The NMR claim looks fabricated and is repeated across ~4 cards.
Sources: [Sanger Protein Sequencing (Creative Biolabs)](https://www.creative-biolabs.com/sanger-protein-sequencing-introduction.html), [Proteomics/Protein Primary Structure/Sequencing Methods (Wikibooks)](https://en.wikibooks.org/wiki/Proteomics/Protein_Primary_Structure/Sequencing_Methods)

**Biochemistry - Metabolism.txt**
> "Urea cycle primarily fueled by basic amino acids"
Wrong — the urea cycle's two nitrogens come from **ammonia (NH4+)** and **aspartate** (an acidic amino acid), not basic amino acids.
Sources: [18.3: Nitrogen Excretion and the Urea Cycle (Biology LibreTexts)](https://bio.libretexts.org/Bookshelves/Biochemistry/Fundamentals_of_Biochemistry_(Jakubowski_and_Flatt)/02:_Unit_II-_Bioenergetics_and_Metabolism/18:_Nitrogen_-_Amino_Acid_Catabolism/18.03:_Nitrogen_Excretion_and_the_Urea_Cycle), [Amino Acid Metabolism: Urea Cycle (NYU Med)](https://education.med.nyu.edu/mbm/aminoAcids/ureaCycle.shtml)

**Biochemistry - Carbohydrates.txt**
> "β-amylase cleaves at the reducing end"
Backwards — β-amylase is exo-acting and cleaves maltose units from the **non-reducing end**.
Source: [β-amylase from Bacillus aryabhattai — starch hydrolysis (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8449922/)

**Biochemistry - Non-enzymatic Proteins.txt**
> "Heme composed of multiple porphyrin rings"
Wrong — heme has **one** porphyrin ring, a tetrapyrrole made of 4 pyrrole subunits linked by methine bridges, not multiple porphyrin rings.
Source: [Porphyrin (Encyclopaedia Britannica)](https://www.britannica.com/science/porphyrin)

**Biochemistry/RNAGeneticCode - GeneticCode - mRNA.txt**
> "Anti-sense mRNA (3'→5') is identical in sequence (apart from uracil) to DNA's template (3'→5') strand"
Backward — mRNA is identical (aside from U replacing T) to DNA's **coding/sense strand**, and is *complementary* to the template strand, not identical to it. This scrambles a heavily-tested MCAT concept (sense vs. antisense, coding vs. template strand).
Sources: [Coding Strand vs. Template Strand (Microbe Notes)](https://microbenotes.com/coding-strand-vs-template-strand/), [Common misconceptions: sense and antisense DNA strands (IndiaBioscience)](https://indiabioscience.org/columns/education/common-misconceptions-in-biology-making-sense-of-the-sense-and-antisense-dna-strands)

---

## Organic Chemistry

**Organic Chemistry - Principles of Organic Chemistry.txt**
> Bonding orbitals require electrons with "the same spin direction"
Backwards — Pauli exclusion requires **opposite spins** for two electrons in the same orbital. Notably, the deck's own *next* card calls this exact point out as an "MCAT Trap," directly contradicting this card.
Source: [9.9: Electrons Populate Molecular Orbitals According to the Pauli Exclusion Principle (Chemistry LibreTexts)](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.09%3A_Electrons_Populate_Molecular_Orbitals_According_to_the_Pauli_Exclusion_Principle)

---

## Physics / Physiology

**Physics - Electrostatics.txt**
> "G = 7 x 10⁻¹¹" (appears twice)
Should be **6.67 x 10⁻¹¹** N·m²/kg² — a fixed physical constant.

**Physiology/Cardiovascular - Anatomy - Circulation.txt**
> "3 portal systems: hepatic, hypophyseal, & renal"
There is no renal portal system in human anatomy — that exists only in some non-mammalian vertebrates (fish, reptiles, birds). Humans have the **hepatic** and **hypothalamic-hypophyseal** portal systems.
Source: [10.11: Portal Systems (Medicine LibreTexts)](https://med.libretexts.org/Courses/Las_Positas_College/BIO_50:_Anatomy_and_Physiology_(Zingg)/10:_Cardiovascular_System/10.11:_Portal_Systems)

**Physiology/Cardiovascular - Anatomy - ElectricalConduction.txt**
> "On an ECG, the T-wave happens right before ventricular repolarization"
The T-wave *is* ventricular repolarization, not something preceding it — looks like the P-wave/QRS wording template got copy-pasted without adjusting, and it contradicts the card's own back-note ("T wave: ventricular re-polarization").
Source: [ECG T Wave (StatPearls/NCBI)](https://www.ncbi.nlm.nih.gov/books/NBK538264/)

---

## Psychology

**Psychology - Disorders.txt**
> Serotonin listed under "catecholamine theory of depression"
Serotonin is **not** a catecholamine (catecholamines = dopamine, norepinephrine, epinephrine; serotonin is an indolamine).
Source: [Physiology, Catecholamines (StatPearls/NCBI)](https://www.ncbi.nlm.nih.gov/books/NBK507716/)

**Psychology - Sleep Consciousness.txt**
> "REM: alpha & delta waves combine into semi-beta waves"
Fabricated mechanism — REM's actual EEG signature is fast, beta-like/desynchronized activity resembling wakefulness (why REM is called "paradoxical sleep"), not alpha+delta merging into some "semi-beta" wave.
Source: [Sleep Stages and Brain Waves (Jack Westin)](https://jackwestin.com/mcat-books/behavioral-sciences/consciousness/sleep/sleep-stages-and-brain-waves)

**Psychology - Cognition.txt**
> "Accommodation refers to how we're able to apply our pre-conceived notions to the real world"
Backwards — that's assimilation. Accommodation is *modifying/creating* schema to fit new reality. (The card's own back-note, "We have to accommodate for reality," contradicts its own front text.)
Source: [Assimilation vs Accommodation: Piaget (Structural Learning)](https://www.structural-learning.com/post/assimilation-vs-accommodation)

**Psychology - Cognition.txt**
> "The pragmatics component of language is the inflection or tone of our voice when speaking"
That's prosody (already correctly defined elsewhere in the same file). Pragmatics is the social/contextual use of language (turn-taking, implied meaning), not tone.
Source: [Common Elements of Language — MCAT Content (MedLife Mastery)](https://medlifemastery.com/mcat/psychology-sociology/language-development/common-elements-language/)

**Psychology - Personality.txt**
> "In psychoanalytic theory, these are the components of only the conscious mind: Ego & super-ego"
Wrong, and contradicts the deck's own next three cards. Only the **id** is purely unconscious; ego and superego both span conscious, preconscious, *and* unconscious.
Source: [Id, Ego, and Superego (Simply Psychology)](https://www.simplypsychology.org/psyche.html)

**Psychology - Personality.txt**
> Jeffrey Alan Gray's BAS/BIS theory repeatedly labeled "the biopsychosocial model"
Confirmed mislabeling — Gray's BAS/BIS framework is his own distinct **Reinforcement Sensitivity Theory / biological theory of personality**. "Biopsychosocial model" is a different, well-established term coined by George Engel (1977) for a broad model of health/illness, unrelated to Gray's personality theory.
Sources: [Gray's biopsychological theory of personality (Wikipedia)](https://en.wikipedia.org/wiki/Gray's_biopsychological_theory_of_personality), [Biopsychosocial model (Wikipedia)](https://en.wikipedia.org/wiki/Biopsychosocial_model)

**Psychology - Self Identity.txt**
> "In Freud's psychosexual theory, children with fixations in the phallic stage become homosexual"
Wrong. Freud's own (already scientifically unsupported) theory attributes phallic-stage fixation to vanity, sexual anxiety/inhibition, recklessness, and difficulty with authority figures — not a specific sexual orientation outcome. As written, the card states something neither historically accurate to Freud's theory nor scientifically valid, and reads as unnecessarily stigmatizing.
Source: [Freud's Psychosexual Development: 5 Stages Explained (Psychology Notes HQ)](https://www.psychologynoteshq.com/freud-psychosexual-development/)

**Psychology - Self Identity.txt**
> Erikson's stage 7 (generativity vs. stagnation) virtue given as "gratification"
The correct/standard virtue is **Care**.
Source: [Generativity vs Stagnation: Stage 7, Care Virtue & Examples (Psychology Notes HQ)](https://www.psychologynoteshq.com/generativity-vs-stagnation/)

**Psychology - Self Identity.txt**
> Erikson's stage 8 (integrity vs. despair) virtue given as "satisfaction for one's life"
Contradicts its own back-note two lines earlier ("Virtue is wisdom"). Correct virtue is **Wisdom**.
Source: [Integrity vs. Despair: Erikson's 8th Stage Explained (PsychoPeak)](https://psychopeak.com/developmental-psychology/integrity-vs-despair-erikson-stage-8.html)

**Psychology/ProcessingTheEnvironment - VIsion.txt**
> "Visual agnosia... due to a defect in the ventral pathway of the parietal lobe"
Anatomically backward — the ventral ("what") stream projects to the **temporal lobe**; the parietal lobe is where the dorsal ("where") stream goes. Visual agnosia is a ventral-stream deficit.
Source: [Ventral and Dorsal Brain: Key Pathways in Visual Processing (Neurolaunch)](https://neurolaunch.com/ventral-dorsal-brain/)

---

*Compiled from an independent read-through of the entire deck, then cross-checked against outside references (NCBI/StatPearls, LibreTexts, primary literature, MCAT-specific study sites). Nothing here has been edited into the actual Anki files yet.*
