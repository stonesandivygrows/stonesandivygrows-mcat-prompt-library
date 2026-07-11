# Anki Project Chats to MCAT Mind Maps: Final Cross-Link, Contradiction, and Gap Audit

**Status:** Final architecture complete; located content mapped; residual source rechecks documented  
**Created:** 2026-07-11  
**Scope:** MCAT-relevant conversations located in ChatGPT project Anki through 2026-07-11  
**Exclusions:** Medical-school applications, unrelated personal chats, and non-MCAT work

## 1. Deliverable set

| File | Purpose | Commit |
|---|---|---|
| 00-anki-project-chat-coverage-and-map-architecture.md | Master ledger, schema, source policy, and resumption system | 8d7d356901d3b30189364b91f1ee18eded0a4106 |
| 01-foundational-sciences-chat-extraction.md | General chemistry, organic chemistry, physics, math, and lab foundations | b0a420f754fa2d12834d5c94409e6915051df81e |
| 02-biochemistry-cell-and-molecular-chat-extraction.md | Amino acids, proteins, carbs, metabolism, membranes, signaling, molecular genetics | 4f5be9785dbeb4f15b76362b6f288ad5d8976721 |
| 03-biological-systems-chat-extraction.md | Nervous and organ systems, tissues, immunity, physiology | 4542357e3491254e3628da8d1d748607b1b11bb1 |
| 04-behavioral-sciences-chat-extraction.md | Psychology, sociology, development, social psychology, learning and perception | 7f008989d4019b3b14936db497283bac2ceb4b9a |
| 05-reasoning-cars-and-test-strategy-chat-extraction.md | CARS, science passages, experimental reasoning, calculations, test execution | 1021f0c752ddb77e0a5ef694cb5d0a8bb1a2a329 |
| 06-anki-and-map-production-workflows.md | Anki, HyperTTS, PDF review, source bundles, GitHub, and visual production | f6f74fa77dc9e58bd53432d3bc1c3f355b8cc9bd |
| 07-final-cross-link-contradiction-and-gap-audit.md | This final audit and build queue | Current commit |

## 2. Coverage verdict

### Mapped

- All major conversation families located by project-history searches
- All named recent July questions in the supplied project context
- Recurrent user confusions and correction patterns
- Anki/PDF/HyperTTS workflow decisions
- CARS and UWorld strategy conclusions
- Nervous-system and social-psychology map projects
- Attached-source roles and copyright boundaries

### Not represented as fully extracted

- Hidden or inaccessible chat bodies not returned by project history
- Every low-frequency card inside multi-thousand-card exports
- Every verbatim question from copyrighted UWorld/JW sources
- Incomplete conversation fragments whose title or exact wording could not be recovered

The system therefore distinguishes:

- **Mapped:** accessible substantive learning content has a canonical home.
- **Needs Recheck:** a complete source body is still needed to prove question-level exhaustiveness.

## 3. Global cross-link hubs

### A. Sign, direction, and reference

Links:

- negative atomic energy
- electric potential versus potential energy
- work by field versus external work
- ΔG and spontaneity
- ΔH and heat flow
- reduction potential and oxidation direction
- charge and current direction
- graph increases/decreases

Master rule:

> Name the quantity, process, reference, and agent before interpreting the sign.

### B. Gradient and transport

Links:

- electric field and voltage
- electrochemical gradients
- membrane channels, carriers, and pumps
- Na+/K+ ATPase
- mitochondrial proton-motive force
- blood pressure and fluid flow
- glucose versus glucose-6-phosphate transport
- malate-aspartate shuttle

Master rule:

> A gradient stores directional potential; a transporter or process determines whether movement is passive, coupled, or energy-driven.

### C. Structure determines function

Links:

- hybridization and electron proximity
- protein primary through quaternary structure
- alpha-helix hydrogen bonding
- membrane-protein location versus function
- glycogen branching and solubility
- cytoskeleton and tissue mechanics
- receptor structure and signaling speed
- stereochemistry and reaction behavior

Master rule:

> Identify the structural feature, state the physical or chemical consequence, then state the biological function.

### D. Signal and regulation

Links:

- GPCR pathways
- ligand-gated ion channels
- action potentials and synapses
- autonomic neurotransmitters
- endocrine signaling
- glycogen regulation
- second messengers
- sensory transduction
- social influence and behavioral response

Master rule:

> Separate detector, transducer, messenger, effector, and response.

### E. Information flow

Links:

- DNA sequence versus methylation
- transcription and mature mRNA
- Sanger sequencing
- aminoacyl-tRNA charging
- translation direction
- nervous-system afferent/efferent flow
- passage actor/action/target

Master rule:

> Track what information is encoded, what carries it, and which direction it travels.

### F. Category versus subtype

Links:

- enantiomer versus epimer
- amphiprotic versus amphipathic
- opioid versus opiate
- leukocyte versus lymphocyte
- plasma versus plasma cell
- influence versus persuasion
- halo versus attractiveness stereotype
- culture/subculture/microculture
- receptor/channel/transporter/pump

Master rule:

> Ask whether the answer is an umbrella, sibling, subtype, mechanism, or example.

### G. Detection versus interpretation

Links:

- sensation versus perception
- sensory adaptation versus habituation
- signal-detection sensitivity versus criterion
- graph observation versus causal conclusion
- CARS text evidence versus interpretation

Master rule:

> First state what was detected or measured; only then state what it means.

## 4. Contradiction and supersession register

| Earlier rule or artifact | Current controlling rule | Reason |
|---|---|---|
| Primary CARS skimming experiment | **Skimming banned; controlled skipping allowed** | Skimming lost actor-action-target and passage anchors |
| Preview many CARS questions | **No full-test preview; answer-choice triangulation only when useful** | Broad preview scattered attention |
| Return through answer choices | **Return through original passage anchor** | Choices overwrite passage pattern |
| Punctuation as main guide | **Grammar structure first; punctuation secondary** | OCR/copied punctuation may not clarify |
| Full sentences visible in every map node | **Full detail in Markdown; visible node uses term plus 3-7 words** | Preserves density without unreadable maps |
| One huge chaotic web | **One registry plus bounded topic maps and backlinks** | Redundancy without duplicate definitions |
| Figma as information organizer | **Graph built first; Figma is a renderer** | Protects hierarchy and traceability |
| Figma always final | **Renderer selected per task** | User later chose Whimsical/Atlas for several maps |
| New standalone file for every note | **Running documents by default; standalone for major guides/templates** | Reduces repository overwhelm |
| Anki app as mandatory medium | **Capped app or printed/PDF/physical retrieval** | Low-friction recall improves adherence |
| Clear entire backlog | **Target weak cards; cap daily volume** | Prevents Anki replacing passage practice |
| Exporting counts as review | **Independent answer, retest, and delayed retrieval** | Artifacts do not prove mastery |
| Requested 10-day learning setup | **Verify current scheduler before changing settings** | Button appearance should not override learning logic |
| Microculture cannot last a lifespan | **Microcultures are typically small/temporary** | Avoids turning tendency into law |
| D/L-glucose are epimers and enantiomers | **They are enantiomers, not epimers** | Epimers differ at one stereocenter |
| Methylation is a SNP | **Epigenetic mark versus sequence variation** | Methylation does not change base identity |
| Metal atoms are always cations | **Elemental atoms are neutral; ions become cationic** | Separates element from ion |
| Frequency and intensity both raise photoelectron KE | **Frequency affects energy/KE; intensity affects count** | Photoelectric mechanism |
| Freud phallic fixation causes homosexuality | **False; exclude from study content** | Prejudicial and scientifically invalid |

## 5. Recurring confusion index

### Foundational Sciences

- ionization energy versus electron affinity
- binding-energy magnitude versus system energy
- ΔH versus ΔG
- negative scalar versus vector
- voltage versus electric potential energy
- current versus electron flow
- voltage/current/power
- frequency versus intensity
- conformational versus configurational isomers
- enantiomer versus epimer
- nucleophilicity versus basicity
- SN1 solvation versus protonation
- reducing end versus drawing orientation

### Biochemistry and Cell

- amino-acid list versus protonation-dependent reactivity
- protein structural descriptions versus stages
- peptide hydrolysis mechanism and catalysis
- backbone versus side-chain hydrogen bonding
- glycoside versus ring form versus oxidation product
- glycogen phosphorylase versus debranching enzyme
- glycogenolysis versus gluconeogenesis use of G6Pase
- glucose versus G6P transport
- TCA versus malate-aspartate versus citrate shuttle
- membrane attachment category versus protein function
- GPCR versus ion channel
- methylation versus SNP
- migrate versus elute

### Biological Systems

- basement membrane versus plasma membrane
- ECM versus CAM versus cytoskeleton
- myogenic versus neurogenic
- afferent versus efferent
- preganglionic versus postganglionic
- EPSP versus action potential
- epinephrine versus norepinephrine
- cilia versus peristalsis
- defensins versus interferons
- plasma versus plasma cell
- leukocyte versus lymphocyte
- opioid versus opiate

### Behavioral Sciences

- halo versus reverse halo versus attractiveness stereotype
- influence versus persuasion
- conformity versus compliance versus obedience
- reinforcement versus punishment
- positive/negative versus good/bad
- sensory adaptation versus habituation
- sensation versus perception
- sensitivity versus response criterion
- microculture versus subculture
- syncretism versus amalgamation
- Piaget versus Erikson versus Kohlberg versus Freud

### Reasoning

- content gap versus execution error
- true detail versus answer to the stem's job
- broad interpretation versus narrow supported claim
- passage evidence versus outside knowledge
- visible mean difference versus statistical significance
- graph observation versus causal inference
- formula recall versus variable/unit meaning
- returning to choices versus restoring passage anchor
- transcript/export existence versus reviewed mastery

## 6. Verification and missing-source queue

### Highest priority

1. Full General Chemistry Review transcript for low-frequency cards.
2. Full Organic Chemistry Anki Cards chat for remaining mechanisms.
3. Full Pankow Review body, especially the microculture fragment.
4. Full May/June CARS autopsies for question-level wording.
5. Full Biology deck help chats for low-frequency organ/genetics questions.
6. Original final malate-aspartate group-chat analogy.

### Content source checks

- Erikson virtue cards
- acetal mechanism card using “free carbocation”
- current native AnkiMobile TTS syntax
- current filtered-deck queries and scheduler settings
- all Aidan/Pankow cards flagged as inaccurate

### Additional visual families

- optics and vision
- solutions, concentration, osmosis, and osmotic pressure
- genetics, gene expression, and evolution
- reproduction and embryology
- renal/homeostasis
- endocrine feedback
- laboratory methods master map
- calculation and units master map

## 7. Recommended visual build queue

1. **Sign and Direction Atlas**
2. **Electricity, Potential, Current, and Circuits Web**
3. **Isomer Classification Decision Map**
4. **Acid/Base, pH/pKa, and Amino-Acid Titration Map**
5. **Carbonyl and Nucleophilic-Reaction Map**
6. **Amino Acids, Protein Structure, and Nucleophiles Atlas**
7. **Carbohydrate, Glycoside, and Glycogen Map**
8. **Metabolic Compartments and Shuttle Map**
9. **Fluid Mosaic and Membrane-Protein Taxonomy**
10. **GPCR, Ionotropic Receptor, and Signal-Transduction Map**
11. **Nervous System Master Map**
12. **Autonomic Relay Map**
13. **Innate versus Adaptive Immunity Map**
14. **Cardiovascular Pressure and Myogenic-Control Map**
15. **MCAT Age Timeline**
16. **Social Psychology Master Hierarchy**
17. **Learning and Conditioning Confusion Grid**
18. **Sensation, Perception, and Signal Detection Map**
19. **Science-Passage Experiment Decoder**
20. **CARS Author-Machine and Stem-Scope Map**

## 8. Map-to-map edge registry

| Source node | Relationship | Target node |
|---|---|---|
| Electric potential | determines with charge | Electric potential energy |
| Electrochemical gradient | drives | Membrane transport |
| Na+/K+ ATPase | maintains gradients for | Action potential |
| GPCR | is a type of | Metabotropic receptor |
| Ligand-gated channel | contrasts with | GPCR |
| Beta-adrenergic receptor | activates through Gs | cAMP/PKA |
| Glucagon receptor | regulates | Glycogen metabolism |
| G6Pase | enables | Blood-glucose release |
| Glycogen branching | increases | Solubility and enzyme access |
| Malate-aspartate shuttle | transfers | NADH reducing equivalents |
| Alpha helix | stabilized by | Backbone hydrogen bonds |
| Amino-acid protonation | controls | Nucleophilicity and charge |
| Free anomeric carbon | enables | Reducing-sugar behavior |
| Cytoskeleton | supports | Cilia and muscle/cell movement |
| Opioid receptor | GPCR that suppresses | Respiratory drive |
| Sensory receptor | transduces | Stimulus into neural signal |
| Sensation | precedes | Perception |
| Sensory adaptation | contrasts with | Habituation |
| Halo effect | contains subtype | Attractiveness stereotype |
| Social influence | contains | Persuasion |
| Grammar structure | resolves | Ambiguous CARS punctuation |
| Unit cancellation | validates | Equation selection |
| Practice error | generates | Correction/trap node |
| Correction node | triggers | Retest and delayed retrieval |

## 9. Quality-control checklist

Before marking a map Final:

- Every concept has one canonical definition.
- Every visible arrow has a verb.
- Every recurring confusion has a warning/comparison node.
- Visible definitions stay concise.
- Expanded explanations remain in Markdown or side panels.
- Source basis is recorded.
- No copyrighted deck/book dump is embedded.
- Newest user-edited note is protected.
- Relevant cross-links are present.
- Diagram direction does not masquerade as a definition.
- A review or retest activity is attached.
- The map is visually verified for legibility.

## 10. Final status

The project now has:

- a master conversation ledger
- six bounded content/workflow shards
- one cross-topic audit
- a contradiction/supersession register
- a recurring-confusion index
- a verification queue
- a prioritized visual-build queue
- a labeled cross-map edge registry

The architecture is complete for the currently located Anki-project history. Future recovered chats should be appended to the relevant shard and entered in the master ledger instead of starting a parallel system.
