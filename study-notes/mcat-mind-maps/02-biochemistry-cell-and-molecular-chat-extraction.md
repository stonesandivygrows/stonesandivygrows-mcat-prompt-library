# MCAT Mind Maps from Anki Project Chats: Biochemistry, Cell, and Molecular Biology

**Status:** Mapped with targeted verification queue  
**Part:** 3 of 7  
**Covers:** Amino acids, proteins, enzymes, carbohydrates, metabolism, membranes, signaling, molecular genetics, and biochemical techniques

## 1. Map architecture

    BIOCHEMISTRY, CELL, AND MOLECULAR BIOLOGY
    ├── Amino acids and acid-base behavior
    ├── Peptide bonds and protein structure
    ├── Enzymes and protein modification
    ├── Carbohydrates and glycogen
    ├── Central metabolism and shuttle systems
    ├── Plasma membrane structure
    ├── Membrane-protein taxonomy
    ├── Transport and electrochemical gradients
    ├── Receptors and signal transduction
    ├── DNA, RNA, and epigenetics
    └── Protein and nucleic-acid techniques

The recurring personalized rule is:

> Track **identity, compartment, protonation state, and job** separately. A molecule can keep the same name while changing location or role, and different molecules can temporarily carry the same carbon skeleton or electrons.

## 2. Amino acids and their chemical jobs

### Structure map

    Alpha amino acid
    ├── alpha carbon
    ├── amino group
    ├── carboxyl group
    ├── hydrogen
    └── side chain

    Stereochemistry
    ├── glycine is achiral
    ├── proteinogenic amino acids are L
    ├── most L amino acids are S
    └── cysteine is R because sulfur changes priority

### Nucleophilic amino-acid side chains

| Residue | Nucleophilic site | MCAT condition |
|---|---|---|
| Serine | hydroxyl oxygen | More reactive when deprotonated or enzyme-activated |
| Threonine | hydroxyl oxygen | Same logic as serine; extra methyl adds steric bulk |
| Tyrosine | phenolic oxygen | Phenol is less nucleophilic unless activated |
| Cysteine | thiol sulfur | Thiolate is a strong biological nucleophile |
| Lysine | side-chain amino nitrogen | Nucleophilic when sufficiently unprotonated |
| Histidine | imidazole nitrogen | Common acid-base catalyst near physiological pH |

The user's original memorized list was largely correct, but the deeper rule is **available lone pair plus correct protonation state**, not “these six always attack.”

### Heterocycle and side-chain memory map

| Term | Home concept | Distinction and memory cue |
|---|---|---|
| Pyrrolidine | Proline side-chain ring | Saturated five-membered nitrogen ring; proline's nitrogen is tied into the backbone ring |
| Pyrrole | Five-membered aromatic N ring | Nitrogen lone pair contributes to aromaticity and is less available as a base |
| Imidazole | Histidine side chain | Five-membered aromatic ring with two nitrogens; useful proton shuttle |
| Indole | Tryptophan side chain | Fused benzene plus pyrrole-like ring |
| Guanidinium | Arginine side chain | Resonance-stabilized positive group; strongly basic conjugate acid |

Memory logic:

- **-idine** often signals a more saturated nitrogen ring.
- **imidazole** belongs to **His** and proton handling.
- **indole** belongs to **Trp** and a fused aromatic system.
- **guanidinium** belongs to **Arg** and a delocalized positive charge.

## 3. Amino-acid charge, titration, and pI

| Question or confusion | Correction |
|---|---|
| Amphoteric or amphiprotic was mixed with amphipathic. | Amino acids are amphiprotic because they can donate and accept protons. Amphipathic means separate hydrophilic and hydrophobic regions. |
| “Halfway” in titration felt like one molecule being partly deprotonated. | It describes the population: equal concentrations of the protonated and deprotonated forms for that step. |
| Histidine, lysine, and arginine were grouped as equally basic. | All are basic side chains, but histidine's conjugate-acid pKa is much lower. Histidine changes protonation near physiological pH and raises pI less than Lys or Arg. |
| Which pKa values are averaged for pI? | Average the two pKa values that flank the net-zero species. Neutral side chain: alpha COOH and alpha NH3+. Acidic side chain: the two acidic pKa values. Basic side chain: the two highest/basic pKa values. |

Titration backbone for a neutral amino acid:

    0 equivalents base → fully protonated, net +1
    0.5 equivalents → pH = pKa1, first buffer midpoint
    1.0 equivalents → zwitterion predominates, near pI
    1.5 equivalents → pH = pKa2, second buffer midpoint
    2.0 equivalents → fully deprotonated, net -1

## 4. Peptide bonds and hydrolysis

### Formation

    amino group attacks carboxyl-derived carbonyl
    → condensation produces amide or peptide bond
    → proteins are synthesized N terminus to C terminus
    → peptide C-N has resonance and partial double-bond character
    → peptide bond is planar and rotation is restricted

### Hydrolysis-card correction

The user's card said:

1. Water attacks the carbonyl carbon.
2. The carbonyl “opens.”
3. The N terminus is ejected and the double bond reforms.

The user's concern that the carbonyl oxygen might need protonation first was reasonable.

Correct boundary:

- In **acid-catalyzed hydrolysis**, carbonyl-oxygen protonation increases carbonyl electrophilicity before water attack.
- In **base-promoted hydrolysis**, hydroxide attacks without that initial protonation.
- In **enzyme-catalyzed hydrolysis**, catalytic residues activate the nucleophile and leaving group through a pathway specific to the protease.
- A free amine is a poor leaving group, so proton transfer must make departure feasible.

Mechanism map:

    activate carbonyl or nucleophile
    → nucleophilic attack
    → tetrahedral intermediate
    → proton transfers
    → carbonyl reforms
    → C-N bond cleaves

Thermodynamic versus kinetic correction:

- Peptide hydrolysis is thermodynamically favorable.
- It is slow without catalysis because the activation barrier is high and the amide is resonance-stabilized.

## 5. Protein structure is not a mandatory four-stage ladder

| User thought or confusion | Correction |
|---|---|
| Every protein obligatorily progresses primary → secondary → tertiary → quaternary. | These are description levels, not mandatory chronological stations. A single-chain protein can have primary, secondary, and tertiary structure but no quaternary structure. |
| Could different parts of one polypeptide fold differently? | **Yes.** One chain may contain alpha helices, beta sheets, loops, and multiple domains. |
| Is a domain always a separate protein? | **No.** A domain is a functional or structural region that may exist within one polypeptide. |
| Does each domain have its own primary structure? | It has a local amino-acid sequence as part of the chain's overall primary structure, plus local secondary and three-dimensional organization. |

### Alpha helix correction

- Backbone carbonyl oxygen hydrogen-bonds to backbone amide hydrogen about four residues ahead: i to i+4.
- The hydrogen bonds are **backbone-to-backbone**, not side-chain-to-side-chain.
- Side chains point outward.
- Proline disrupts helices because its ring restricts backbone geometry and its amide nitrogen lacks the usual hydrogen.
- Glycine can disrupt helices through excessive flexibility.

### Stability map

    Native protein stability
    ├── hydrophobic effect
    ├── hydrogen bonding
    ├── ionic interactions and salt bridges
    ├── dispersion and dipole interactions
    └── disulfide bonds

The native state generally occupies a lower-free-energy basin under its physiological conditions. “Stable” means relatively resistant to change, not unreactive forever.

## 6. Post-translational modifications and enzyme control

| Modification | Typical target or result | Confusion boundary |
|---|---|---|
| Phosphorylation | Ser, Thr, or Tyr; alters activity/localization/interactions | Enzymatic covalent modification |
| Glycosylation | Asn or Ser/Thr; folding, recognition, targeting | Not the same as nonenzymatic glycation |
| Ubiquitination | Often Lys; frequently degradation or signaling | Not automatically immediate proteolysis |
| Acetylation/methylation | Proteins or histones; changes interactions and gene regulation | Does not change nucleotide sequence |
| Proteolytic cleavage | Zymogen activation or processing | Irreversible covalent change |
| Disulfide formation | Cysteine to cystine linkage | Common in oxidizing extracellular/ER environments |

Enzyme-versus-reaction rule:

- An enzyme lowers activation energy.
- It does not change ΔG, equilibrium position, or the energies of reactants and products.
- Catalysis accelerates forward and reverse reactions.

## 7. Sugars, glycosides, and reducing ends

| Question or confusion | Correction |
|---|---|
| D-glucose and L-glucose were called both epimers and enantiomers. | They are enantiomers because every corresponding stereocenter is inverted. Epimers differ at one stereocenter and are diastereomers. |
| Reducing end was assumed to be right and nonreducing end left. | Orientation is a drawing convention. A reducing end has a free anomeric carbon that can open to a carbonyl form. |
| What makes a glycoside? | The anomeric OH is replaced by an OR or NR group, creating an acetal-like linkage that locks that anomeric center. |
| Why is a glycosidically locked anomeric carbon nonreducing? | It cannot readily open to the free aldehyde or ketone needed for oxidation. |
| What is an aldonic acid? | Oxidation of an aldose aldehyde to a carboxylic acid gives an aldonic acid, such as glucose to gluconic acid. |
| Pyranose/furanose was mixed with aldonic acid. | Pyranose/furanose describes ring size; aldonic acid describes oxidation state. |

## 8. Glycogen architecture and metabolism

### Why branching increases solubility

Branching:

- disrupts tight chain-to-chain packing
- exposes more hydroxyl groups to water
- favors polymer-water hydrogen bonding over polymer-polymer association
- creates many nonreducing ends for rapid synthesis and degradation

Do not explain this mainly through electron donation.

### Glycogen bond map

    linear segments = alpha-1,4 glycosidic bonds
    branch points = alpha-1,6 glycosidic bonds

    glycogen phosphorylase
    ├── removes glucose units from alpha-1,4 links
    ├── releases glucose-1-phosphate
    └── stops near branch points

    debranching enzyme
    ├── transferase moves a short glucose block
    └── alpha-1,6-glucosidase hydrolyzes branch bond
        └── releases one free glucose

Correction to “degrades amylopectin in starch and glycogen”:

- The statement means debranching activity resolves alpha-1,6 intersections in branched glucose polymers.
- It does not mean one generic enzyme performs all digestion of both dietary starch and intracellular glycogen in every tissue.

### Liver versus muscle

| Question or confusion | Correction |
|---|---|
| Glucose-6-phosphatase sounded like a gluconeogenesis-only enzyme. | It performs the final G6P → glucose + Pi step for both gluconeogenesis and liver glycogenolysis. |
| Why can only liver glycogen regulate blood glucose? | Liver expresses glucose-6-phosphatase and can release free glucose. Muscle lacks it and uses glycogen-derived G6P locally in glycolysis. |
| Why can free glucose leave but G6P cannot? | The phosphate gives G6P a strong negative charge and traps it in the cell. GLUT transporters carry unphosphorylated glucose, not G6P. |
| Is glucose-6-phosphatase only in liver? | MCAT shorthand emphasizes liver. Kidney and intestinal tissues can also express it; skeletal muscle does not. |

Compartment detail:

- Cytosolic G6P enters the ER for dephosphorylation.
- Free glucose returns to cytosol and can exit through GLUT transport.

## 9. Central metabolism and pathway classification

### Glucose-6-phosphate branch point

    Glucose-6-phosphate
    ├── glycolysis
    ├── glycogenesis
    ├── pentose phosphate pathway
    └── liver/kidney dephosphorylation for blood glucose

### Catabolism versus anabolism

- Catabolic pathways generally oxidize fuels, generate ATP, and reduce NAD+ or FAD.
- Anabolic pathways generally consume ATP and use NADPH as reducing power.
- NADH is commonly associated with energy extraction and oxidative phosphorylation.
- NADPH is commonly associated with biosynthesis and antioxidant defense.

## 10. Malate-aspartate shuttle with identity tracking

The user's key difficulty was that oxaloacetate, malate, and aspartate seemed to “swap identities,” making it impossible to see what actually crossed.

### What the shuttle transports

The shuttle transfers **cytosolic NADH reducing equivalents** into the mitochondrial matrix. NADH itself does not cross the inner mitochondrial membrane.

### Compartment-labeled flow

    CYTOSOL
    cytosolic OAA + cytosolic NADH
    → cytosolic malate + NAD+

    TRANSPORT
    malate enters matrix in exchange for alpha-ketoglutarate

    MATRIX
    matrix malate + NAD+
    → matrix OAA + matrix NADH

    matrix OAA + glutamate
    → aspartate + alpha-ketoglutarate

    TRANSPORT
    aspartate exits in exchange for glutamate

    CYTOSOL
    aspartate + alpha-ketoglutarate
    → cytosolic OAA + glutamate

### Character analogy

Preserve the located characters:

- **Olivia** is cytosolic oxaloacetate.
- When Olivia accepts the reducing-equivalent “travel gear” from NADH, she becomes **Marty the malate**, a form that can cross.
- In the matrix, Marty gives up that gear, regenerating oxaloacetate and matrix NADH.
- Oxaloacetate cannot directly cross, so it exchanges an amino-group “uniform” and becomes aspartate for the return trip.

The carbon skeleton is converted rather than one unchanged person walking through every door. The analogy must therefore show **costume/role conversion plus transport**, not imply that cytosolic oxaloacetate itself crosses.

### Separate nearby pathways

| Pathway | Primary cargo/purpose | Do not confuse with |
|---|---|---|
| Malate-aspartate shuttle | Cytosolic NADH reducing equivalents into matrix | Moving acetyl-CoA |
| Glycerol-3-phosphate shuttle | Cytosolic electrons enter ETC through FAD-linked route | Malate/OAA carbon exchange |
| Citrate shuttle | Acetyl-CoA equivalents leave matrix for fatty-acid/cholesterol synthesis | NADH transfer |
| TCA cycle | Oxidizes acetyl-CoA and regenerates OAA | Shuttle transport loop |
| Gluconeogenic malate movement | Moves OAA carbon equivalent and can supply cytosolic NADH | Automatically being the same operational goal as the shuttle |

TCA restart correction:

- The cycle is considered regenerated when oxaloacetate is available to condense with acetyl-CoA to form citrate.
- Malate → oxaloacetate produces NADH but does not by itself “restart” the cycle until acetyl-CoA condenses.

## 11. Fluid mosaic model

### Two words, two ideas

    FLUID
    ├── lipids and many proteins move laterally
    ├── unsaturation increases fluidity
    ├── cholesterol buffers temperature effects
    └── flip-flop is unfavorable and uses flippases

    MOSAIC
    ├── diverse lipids
    ├── proteins with different locations and jobs
    ├── carbohydrates on extracellular face
    └── dynamic domains such as lipid rafts

### Membrane-component map

- Phospholipids form the semipermeable bilayer.
- Sphingolipids include sphingomyelin, cerebrosides, and gangliosides.
- Cholesterol restrains movement at high temperature and prevents tight packing at low temperature.
- Carbohydrates are displayed on the extracellular surface as glycoproteins and glycolipids.
- ER lumen, Golgi lumen, and extracellular space are topologically equivalent during trafficking.

## 12. Membrane-protein classification uses two axes

The user's confusion came from mixing **location** categories with **function** categories.

### Axis 1: relationship to the membrane

    Membrane association
    ├── peripheral
    ├── integral or embedded
    ├── transmembrane
    └── lipid-anchored

Integral includes proteins embedded strongly in the bilayer; transmembrane proteins span it.

### Axis 2: function

    Function
    ├── transport
    │   ├── channels
    │   ├── carriers or transporters
    │   └── pumps
    ├── signaling
    │   ├── GPCRs
    │   ├── receptor tyrosine kinases
    │   └── ligand-gated ion channels
    ├── recognition
    │   ├── glycoproteins
    │   └── glycolipids
    ├── adhesion
    │   └── integrins and junction proteins
    └── enzymatic activity

### Transport distinctions

| Type | What it does | Energy and saturation |
|---|---|---|
| Channel | Hydrophilic pore; may be gated | Passive down electrochemical gradient; very rapid |
| Carrier | Alternating-access binding and conformational change | Passive or secondary active; saturable |
| Pump | Primary active transporter | Directly uses energy such as ATP |
| Symporter | Moves solutes in same direction | Often secondary active |
| Antiporter | Moves solutes in opposite directions | Often secondary active |
| Uniporter | Moves one solute type | Often facilitated diffusion |

A receptor detects a signal. A transporter moves material. Some proteins combine jobs, such as ligand-gated ion channels, which are both receptors and channels.

## 13. GPCRs are receptors, not ion transporters

### Core cascade

    ligand binds GPCR
    → receptor changes conformation
    → heterotrimeric G protein exchanges GDP for GTP on alpha
    → alpha and beta-gamma components regulate effectors
    → second messengers form
    → kinases/channels/enzymes alter cell activity
    → alpha hydrolyzes GTP
    → subunits reassociate and signal terminates

### Major pathways

| G protein | Effector | Second-messenger result |
|---|---|---|
| Gs | stimulates adenylyl cyclase | ↑cAMP → PKA |
| Gi | inhibits adenylyl cyclase | ↓cAMP |
| Gq | activates phospholipase C | IP3 + DAG; Ca2+ release and PKC |

### User's recurring confusion

| Question | Correction |
|---|---|
| Is GPCR one thing in neurons and another thing in endocrine/cAMP signaling? | It is the same receptor class. Different ligands, G proteins, effectors, and cell types produce different outcomes. |
| Does a GPCR initiate an action potential by directly opening? | GPCRs are metabotropic. They can indirectly change ion-channel activity and excitability through cascades. |
| Is a GPCR a channel? | **No.** It is a seven-transmembrane receptor that activates G proteins. |
| How is a ligand-gated channel different? | It directly opens an ion pore after ligand binding and acts faster. |

Examples linking maps:

- beta-adrenergic receptor → Gs → cAMP → PKA
- olfactory receptor → G protein cascade → downstream channel opening
- muscarinic acetylcholine receptors are GPCRs
- nicotinic acetylcholine receptors are ligand-gated ion channels

## 14. DNA sequence variation versus epigenetic modification

| Question or confusion | Correction |
|---|---|
| Is methylation a single nucleotide polymorphism because it affects one nucleotide? | **No.** DNA methylation adds a chemical group, often to cytosine, without changing the base sequence. A SNP is a sequence variation in which one nucleotide position differs among genomes. |
| Does “polymorphism” mean one nucleotide morphs into many nucleotides? | **No.** It means multiple sequence variants exist in a population at that locus. “Single nucleotide” identifies the size of the sequence difference. |
| Can methylation change gene expression? | Yes. Promoter-region methylation is commonly associated with reduced transcription, though effects depend on context. |
| Is methylation inherited? | Epigenetic marks can persist through cell division, but that is distinct from changing the DNA sequence and from guaranteed germline inheritance. |

### Molecular-biology distinctions

- ORF is the translated coding region between start and stop codons in mature mRNA.
- The 5' cap and poly-A tail are not part of the ORF.
- Aminoacyl-tRNA charging uses ATP → AMP + PPi, costing two high-energy phosphate-bond equivalents.
- Translation grows the polypeptide from N terminus to C terminus while the ribosome reads mRNA 5' to 3'.

## 15. Protein and nucleic-acid techniques

| Technique | What determines movement or readout | Correct term |
|---|---|---|
| Native PAGE | Charge, mass, and shape | Proteins **migrate** |
| SDS-PAGE | Primarily mass after denaturation and SDS coating | Proteins **migrate** |
| Reducing SDS-PAGE | Mass of separated subunits after disulfide reduction | Proteins **migrate** |
| DNA gel/Sanger separation | Fragment size; DNA charge comes from phosphate backbone | Fragments **migrate** |
| Chromatography | Interaction with stationary/mobile phases | Compounds **elute** |

Corrections:

- Reducing agent breaks disulfide bonds; SDS supplies the strong negative coating.
- Same-mass proteins can migrate differently in native PAGE because charge and compactness differ.
- In SDS-PAGE, denaturation minimizes shape effects and separation is mainly by molecular mass.
- Sanger and SDS-PAGE both require an applied electric field; DNA does not generate its own current.

## 16. Personalized biochemistry error engine

Before answering:

1. Name the molecule.
2. Label cytosol, matrix, ER lumen, membrane, or extracellular space.
3. Mark protonated versus deprotonated form.
4. Separate structure category from function category.
5. Ask whether a protein directly performs an action or triggers a cascade.
6. Ask whether the question concerns carbon atoms, electrons, amino groups, or whole molecules.
7. Do not treat nearby pathways that share malate or OAA as the same pathway.

Highest-priority repairs:

- **Backbone hydrogen bonds stabilize secondary structure.**
- **Protein structural levels are descriptions, not a compulsory ladder.**
- **Free anomeric carbon defines reducing ability, not page direction.**
- **Glucose-6-phosphatase serves both gluconeogenesis and glycogenolysis.**
- **Transport function and membrane attachment are separate axes.**
- **GPCR means indirect cascade; ionotropic receptor means direct channel.**
- **Methylation changes chemical marking, not nucleotide identity.**

## 17. Cross-links and verification queue

Cross-links:

- glycogen regulation by hormones → Biological Systems shard
- neuronal GPCRs, ion channels, and action potentials → Biological Systems shard
- developmental gene regulation and age theories → Behavioral Sciences shard
- Sanger/SDS experimental reasoning → Reasoning shard
- Atlas v2 layout and source rules → Workflow shard

Verification queue:

- Recover the complete final group-chat version of the malate-aspartate shuttle analogy; current map preserves the located Olivia/Marty mapping and accurate compartment flow.
- Audit any original card that calls acetal formation a free carbocation.
- Check low-frequency protein-modification cards against the bounded Biochemistry source pool before marking them Verified.

**Checkpoint:** Major biochemistry, cell, molecular, membrane, signaling, and metabolism confusions surfaced from the Anki project are routed.
