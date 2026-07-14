# Bio/Biochem Section 04 — Nucleic Acids, DNA Replication, RNA & Transcription, Translation
**Source:** Aiden deck  
**Format:** Hierarchical tree | `⚠` = MCAT trap | `↔` = cross-reference  
**Companion:** Sections 01–03 in this directory; Lab Techniques visual for blot/PCR methods

---

## 4.1 Nucleotide Structure
```
Nucleotides
├── Components
│   ├── Nitrogenous base
│   ├── Pentose sugar (deoxyribose in DNA; ribose in RNA — has 2'-OH)
│   └── 1–3 phosphate groups
│       ├── NMP (mono) — nucleoside monophosphate; structural unit in polymers
│       ├── NDP (di) — substrate for some kinases
│       └── NTP (tri) — active substrate for polymerases; ATP/GTP also serve as energy currency
├── Nucleoside = base + sugar (NO phosphate)
│   ⚠ Nucleoside vs nucleotide: nucleoTIDE has phosTIDEs (phosphates)
├── N-glycosidic bond
│   ├── Links base N9 (purines) or N1 (pyrimidines) to C1' of sugar
│   └── β configuration in all natural nucleotides
└── Phosphodiester backbone
    ├── 3'-OH of one nucleotide + 5'-phosphate of next → condensation
    ├── Chain grows 5'→3' (new nucleotide added at 3'-OH end)
    └── ⚠ Polymerases synthesize only 5'→3'; template read 3'→5'
```

---

## 4.2 Purines vs Pyrimidines
```
Nitrogenous Bases
├── PURINES — double ring (purine = pure Ag, Silverback)
│   ├── Adenine (A)
│   ├── Guanine (G)
│   └── Memory: "Pure As Gold" → Purines = Adenine + Guanine
├── PYRIMIDINES — single ring (Cut with a Knife → single)
│   ├── Cytosine (C)
│   ├── Thymine (T) — DNA only
│   ├── Uracil (U) — RNA only; replaces thymine; no methyl group at C5
│   └── Memory: "CUT the Py" → Cytosine, Uracil, Thymine = pyrimidines
├── Base Pairing (Watson-Crick, antiparallel)
│   ├── A–T: 2 hydrogen bonds (DNA); A–U: 2 H-bonds (RNA)
│   ├── G–C: 3 hydrogen bonds
│   └── ⚠ More G-C pairs → higher Tm (melting temperature); higher stability
├── Tautomers
│   ├── Bases have keto/enol or amino/imino tautomers
│   └── ⚠ Wrong tautomer → mismatch pairing → mutation (transition)
└── Deamination
    ├── Cytosine → Uracil (spontaneous; repaired by base excision)
    └── ⚠ If unrepaired: C-G pair becomes U-A → G:C→A:T transition mutation
```

---

## 4.3 DNA Double Helix
```
DNA Structure
├── Antiparallel strands: one 5'→3', complementary strand 3'→5'
├── Right-handed B-form helix (standard; most common in MCAT)
│   ├── Major groove: wide, accessible to most proteins/TFs
│   └── Minor groove: narrow; some proteins/drugs bind here
├── Turns and dimensions
│   ├── ~10 bp per turn in B-DNA
│   ├── Pitch: 3.4 nm per turn
│   └── Diameter: ~2 nm
├── Stabilizing forces (NOT primarily H-bonds)
│   ├── Base stacking (hydrophobic, van der Waals) — major contributor
│   └── H-bonds between complementary bases — provide specificity, not main stability
│   ⚠ H-bonds give SPECIFICITY; base stacking provides most STABILITY
├── Supercoiling
│   ├── Positive supercoil: overwound (ahead of replication fork)
│   ├── Negative supercoil: underwound (promotes unwinding for transcription)
│   └── Topoisomerases relieve supercoiling (↔ 4.4 Topoisomerase)
└── Prokaryotic vs Eukaryotic
    ├── Prokaryotes: circular, double-stranded, no histones; nicked-open by gyrase
    └── Eukaryotes: linear chromosomes; DNA wound around histone octamers (nucleosomes)
        └── ↔ 4.9 Epigenetics
```

---

## 4.4 DNA Replication Enzymes
```
Replication (5'→3' synthesis, bidirectional from ORI)
├── Helicase
│   ├── Unwinds double helix at replication fork; breaks H-bonds
│   └── ⚠ Does NOT break phosphodiester bonds; breaks H-bonds
├── SSBPs (Single-Strand Binding Proteins)
│   └── Stabilize unwound single strands; prevent re-annealing
├── Topoisomerase (Gyrase in bacteria = type II topoisomerase)
│   ├── Relieves positive supercoiling ahead of fork
│   ├── Type I: cuts one strand, allows rotation, religates (no ATP)
│   ├── Type II (Gyrase): cuts BOTH strands, passes duplex through, religates (ATP)
│   └── ⚠ Gyrase = bacterial enzyme; target of fluoroquinolone antibiotics
├── Primase (RNA polymerase)
│   ├── Synthesizes short RNA primer (5–10 nt) to provide 3'-OH for DNA pol
│   └── ⚠ DNA polymerase CANNOT start a new chain de novo — needs primer
├── DNA Polymerase III (Prokaryotes) / DNA Pol δ/ε (Eukaryotes)
│   ├── Main replicative polymerase
│   ├── Adds dNTPs 5'→3' using template read 3'→5'
│   ├── 3'→5' exonuclease activity (proofreading)
│   └── ⚠ Synthesis is ALWAYS 5'→3'; template reading ALWAYS 3'→5'
├── DNA Polymerase I (Prokaryotes)
│   ├── Removes RNA primer (5'→3' exonuclease)
│   └── Fills gap with DNA
├── DNA Ligase
│   ├── Seals nicks between Okazaki fragments on lagging strand
│   └── Requires NAD⁺ (prokaryotes) or ATP (eukaryotes)
├── Leading strand: continuous synthesis 5'→3' toward fork
└── Lagging strand: discontinuous synthesis 5'→3' away from fork
    ├── Okazaki fragments (~1–2 kb in prokaryotes; ~100–200 nt in eukaryotes)
    └── ⚠ Both strands synthesized 5'→3' — lagging strand goes in the "opposite direction" relative to fork movement, not actual synthesis direction
```

---

## 4.5 RNA Types
```
RNA Types
├── mRNA (messenger RNA)
│   ├── Encodes protein sequence; codon = 3 nt → amino acid
│   ├── Eukaryotes: 5' 7-methylguanosine cap + 3' poly-A tail (added post-transcription)
│   └── Half-life: minutes to hours
├── tRNA (transfer RNA)
│   ├── Adaptor: carries amino acid to ribosome
│   ├── Anticodon loop (3 nt) base-pairs with mRNA codon
│   ├── Amino acid attached at 3'-CCA-OH end (all tRNAs end in CCA)
│   ├── Aminoacyl-tRNA synthetase charges tRNA with correct AA (uses ATP → AMP + PPi)
│   ├── Cloverleaf secondary structure; L-shaped 3D structure
│   └── ⚠ One aminoacyl-tRNA synthetase per amino acid (20 total), not per codon
├── rRNA (ribosomal RNA)
│   ├── Structural and catalytic component of ribosomes
│   ├── Prokaryotic ribosome: 70S (50S large + 30S small)
│   │   ├── 50S: 23S + 5S rRNA + proteins
│   │   └── 30S: 16S rRNA + proteins
│   ├── Eukaryotic ribosome: 80S (60S large + 40S small)
│   │   ├── 60S: 28S + 5.8S + 5S rRNA + proteins
│   │   └── 40S: 18S rRNA + proteins
│   └── ⚠ Ribosomes in mitochondria/chloroplasts are 70S (prokaryotic origin → endosymbiosis)
├── snRNA — splicing (spliceosome components)
├── miRNA/siRNA — post-transcriptional gene silencing (RNAi pathway)
└── ribozymes — catalytic RNA (e.g., self-splicing introns, peptidyl transferase activity of rRNA)
    ⚠ Peptide bond formation by ribosome is catalyzed by 23S/28S rRNA (ribozyme), not protein
```

---

## 4.6 Transcription
```
Transcription: DNA → RNA (always 5'→3'; template read 3'→5')

PROKARYOTIC (bacteria)
├── One RNA polymerase (core enzyme: α₂ββ'ω + sigma factor → holoenzyme)
├── Sigma factor: recognizes –10 (TATAAT) and –35 promoter elements
├── No nuclear membrane → translation begins while transcription continues (coupled)
├── mRNA is polycistronic (multiple genes per mRNA)
├── No 5' cap, no poly-A tail, no splicing
└── Termination
    ├── Rho-independent: GC-rich hairpin + U-run in mRNA → polymerase falls off
    └── Rho-dependent: Rho protein tracks mRNA and causes polymerase disassociation

EUKARYOTIC
├── Three RNA polymerases
│   ├── RNA Pol I: rRNA (28S, 18S, 5.8S)
│   ├── RNA Pol II: mRNA (and most snRNA, miRNA)
│   └── RNA Pol III: tRNA, 5S rRNA, small RNAs
│   ⚠ α-amanitin (mushroom toxin): inhibits RNA Pol II > Pol III >> Pol I (test question)
├── Pre-mRNA processing (before export from nucleus)
│   ├── 5' 7-methylguanosine cap: added co-transcriptionally; protects from exonuclease, aids ribosome binding
│   ├── 3' poly-A tail: added by poly-A polymerase after cleavage; aids stability and export
│   ├── Splicing: spliceosome removes introns; joins exons
│   │   ├── Branch point A attacks 5' splice site (lariat intermediate)
│   │   ├── 3' splice site attacked → lariat released → exons ligated
│   │   └── ⚠ Introns out (in-TRONS stay in nucleus → degraded); exons out to cytoplasm
│   └── Alternative splicing: same pre-mRNA → multiple protein isoforms
├── Promoter elements
│   ├── TATA box (–25 to –30): general transcription factor binding site
│   ├── Enhancers/silencers: distant regulatory elements (can be kb away)
│   └── Transcription factors recruit Pol II to promoter
└── Termination: polyadenylation signal (AAUAAA) → cleavage + poly-A addition
    ⚠ RNA Pol II runs past stop signal → processed off via poly-A cleavage
```

---

## 4.7 Translation
```
Translation: mRNA → protein (ribosomes, tRNA, GTP-driven)

Genetic Code
├── 64 codons total: 61 sense codons + 3 stop codons (UAA, UAG, UGA)
├── AUG: start codon (Met in eukaryotes; fMet in prokaryotes)
├── Degenerate (redundant): multiple codons → same AA (wobble at 3rd position)
│   ⚠ Degenerate ≠ ambiguous; one codon still maps to only one AA
└── Universal: same code in almost all organisms (mitochondria have minor variations)

Ribosomal Sites (A, P, E)
├── A site: Aminoacyl — incoming charged tRNA binds here
├── P site: Peptidyl — growing chain tRNA; peptide bond formed here (peptidyl transferase = rRNA)
└── E site: Exit — uncharged (deacylated) tRNA exits here

Initiation
├── Prokaryotes: Shine-Dalgarno sequence on mRNA aligns with 16S rRNA of 30S → AUG; IF1, IF2, IF3
└── Eukaryotes: 5' cap recognized → small subunit scans 5'→3' for AUG (Kozak sequence); eIFs

Elongation (repeating cycle, GTP-driven)
├── EF-Tu (prokaryote)/EF1α (eukaryote): delivers aminoacyl-tRNA to A site (GTP hydrolysis)
├── Peptidyl transferase (ribozyme) catalyzes peptide bond: transfers growing chain to new AA
└── Translocation: EF-G (prokaryote)/EF2 (eukaryote) moves mRNA one codon (GTP hydrolysis)
    → tRNA moves E→P→A relative to ribosome

Termination
├── Release factors (RF1/RF2 prokaryote; eRF1 eukaryote) recognize stop codons
├── RF enters A site → peptidyl transferase hydrolysis of bond → polypeptide released
└── RF3/eRF3 + GTP: promotes RF dissociation

Post-translational Modifications
├── Cleavage (signal peptide removal, prohormone processing, zymogen activation)
├── Phosphorylation (Ser, Thr, Tyr) — reversible; kinases/phosphatases
├── Glycosylation (N-linked in RER; O-linked in Golgi)
├── Ubiquitination: marks protein for proteasomal degradation
└── ⚠ Insulin is made as preproinsulin → signal peptide removed → proinsulin → C-peptide cleaved → active insulin

Polyribosomes (Polysomes)
└── Multiple ribosomes translating same mRNA simultaneously → efficient production
```

---

## 4.8 DNA Mutations
```
Mutation Types
├── Point mutations (single base change)
│   ├── Transition: purine↔purine or pyrimidine↔pyrimidine (A↔G; C↔T)
│   ├── Transversion: purine↔pyrimidine (less common)
│   ├── Missense: codon changes → different AA
│   ├── Nonsense: codon changes → stop codon → truncated protein
│   ├── Silent (synonymous): codon changes → SAME AA (wobble position)
│   └── ⚠ Silent mutation does NOT mean no effect — can affect splicing or translation efficiency
├── Frameshift mutations (insertions or deletions NOT in multiples of 3)
│   ├── Shift reading frame → completely altered AA sequence downstream
│   └── Often introduces premature stop codon → truncated protein
├── Insertion/Deletion (indels) in multiples of 3 → whole AA inserted/deleted, frame intact
└── Trinucleotide repeat expansion
    └── Huntington's: CAG repeats in HTT gene; Fragile X: CGG in FMR1
        ⚠ Anticipation: severity increases each generation as repeat expands

Mutation Consequences
├── Loss-of-function (recessive phenotype usually)
├── Gain-of-function (often dominant, e.g., constitutively active receptor)
└── Dominant negative: mutant protein interferes with WT protein function (e.g., p53)
```

---

## 4.9 DNA Repair
```
DNA Repair Mechanisms
├── Mismatch Repair (MMR)
│   ├── Fixes errors after replication (wrong base pair)
│   ├── MutS recognizes mismatch → MutL/MutH recruited → strand removed and resynthesized
│   └── ⚠ MMR deficiency → microsatellite instability (MSI); Lynch syndrome
├── Nucleotide Excision Repair (NER)
│   ├── Fixes bulky lesions: thymine dimers (UV), chemical adducts
│   ├── ~30 nt removed; DNA Pol fills gap; Ligase seals
│   └── ⚠ Defect → Xeroderma pigmentosum (UV sensitivity, skin cancer)
├── Base Excision Repair (BER)
│   ├── Fixes small, non-helix-distorting lesions: deamination (C→U), oxidative damage (8-oxoG)
│   ├── DNA glycosylase removes damaged base → AP site → AP endonuclease → short-patch repair
│   └── ⚠ Uracil in DNA removed by BER (UNG glycosylase); NOT the same as splicing
├── Direct Repair
│   └── Photolyase (plants, bacteria): uses light energy to break thymine dimer directly
├── Double-Strand Break Repair
│   ├── Homologous Recombination (HR): faithful; uses sister chromatid as template; S/G2 phase
│   └── Non-Homologous End Joining (NHEJ): error-prone; G1 phase; may cause deletions
└── SOS response (prokaryotes)
    └── Error-prone repair under extreme damage → increased mutation rate; last resort
```

---

## 4.10 Epigenetics
```
Epigenetic Regulation (heritable changes in expression without DNA sequence change)
├── DNA Methylation
│   ├── Methyl group on CpG cytosines → transcriptional repression (gene silencing)
│   ├── CpG islands in promoters: normally unmethylated → gene ON; methylated → gene OFF
│   └── ⚠ Cancer: promoter hypermethylation of tumor suppressors → silences them
├── Histone Modifications
│   ├── Acetylation (histone acetyltransferase, HAT): neutralizes + charge → loose chromatin → transcription ↑
│   ├── Deacetylation (HDAC): restores + charge → compact chromatin → transcription ↓
│   ├── Methylation: effect depends on which residue (H3K4me3 → active; H3K9me3 → repressive)
│   └── Phosphorylation: associated with chromatin condensation (mitosis)
├── Chromatin States
│   ├── Euchromatin: loosely packed, transcriptionally active
│   └── Heterochromatin: tightly packed, transcriptionally silent
│       └── Constitutive: always silent (e.g., centromeres, telomeres)
│       └── Facultative: context-dependent (e.g., Xi, one X chromosome inactivated → Barr body)
└── X-Inactivation (Lyon hypothesis)
    ├── Random in somatic cells; one X silenced per cell; patchy phenotype in carriers
    └── Xist RNA coats and inactivates one X; persists as Barr body
    ↔ 4.8 Dosage compensation; ↔ genetics notes on sex-linked inheritance
```

---

## 4.11 Cross-References & Section Gaps
```
Connected topics built in other sections:
├── Enzymes (Section 02): restriction enzymes, DNA polymerase kinetics
├── Lab Techniques (study-notes/bio-biochem/lab-techniques/): Southern, Northern, Western blots; PCR
├── Cellular Respiration (Section 02): ATP produced; used in NTP/primer synthesis
└── Cell Division (Section 03): S phase replication; mitosis checkpoints; telomerase

Sections still needed in this series:
├── Section 05: Genetics, Mendelian, population genetics
├── Section 06: Metabolism (glycolysis, TCA, ETC, FA oxidation)
├── Section 07: Organ systems — circulatory, respiratory, renal
├── Section 08: Endocrine and reproduction
├── Section 09: Nervous system and muscle
└── Section 10: Behavioral sciences (separate from Aiden deck extractions in 04- file)
```
