# CONTENT SCOPE RULES

## Priority Labels

Use:
- MCAT-core
- MCAT-adjacent
- Clinical extension
- Tool/lab evidence
- Personal trap / mistake pattern

Classify by MCAT relevance, not by whether the topic sounds clinical.

Do not label every disease as clinical extension.

Diabetes, genetic diseases, neurodevelopmental disorders, psychological disorders, immune dysfunction, cancer/cell-cycle concepts, and metabolic disorders can be MCAT-core or MCAT-adjacent when connected to MCAT mechanisms.

Clinical extension should be used for:
- overly detailed drug-specific mechanisms
- treatment details
- advanced pathology
- detailed diagnostic differentials
- medication-specific metabolism beyond MCAT scope

## Priority Label Examples

MCAT-core:
- insulin increases glucose uptake
- glucagon increases glycogenolysis
- diabetes connected to insulin, glucose, ketones, osmotic effects, or endocrine regulation
- mutations affecting proteins
- psychological disorders at MCAT overview level

MCAT-adjacent:
- fruity/acetone breath as a ketone clue
- edema as a fluid balance or osmotic pressure concept
- scurvy as a collagen/vitamin C connection

Clinical extension:
- medication dosing
- detailed diagnostic workups
- detailed NSAID hepatic metabolism
- advanced heart attack management
- Ozempic brand-specific treatment details

## Scientific Assumption Rule

A scientific assumption is any new mechanism, causal pathway, disease connection, symptom explanation, drug effect, or clinical note added by Cursor that was not already present in the existing map.

If scientific assumptions are added:
- List each one.
- Classify each as:
  - directly supported by existing content
  - inferred from MCAT-level knowledge
  - uncertain / needs review
- Do not present uncertain assumptions as fact.
- Do not add advanced clinical detail unless marked Clinical extension.

## Terminology Corrections

Use:
- gallbladder
- silhouette
- heart attack
- opioids/opiates
- visual system
- defecation pathway
- cardiac conduction system
- renal/nephron system
- dilute/pale urine
- dark urine
- fruity/acetone breath

Avoid:
- gallblader
- silouette
- silhoueete
- hreat attack
- opiods
- pooping in formal labels
- sight as a system label

## Abbreviation and Key Rules

Avoid abbreviations for:
- organs
- organelles
- tissues
- body systems
- action verbs
- pathway verbs
- symptom names
- disease names when space allows

Use full words instead of abbreviations when possible.

Examples:
- GI → gastrointestinal tract, digestive tract, or intestine depending on meaning
- CNS → central nervous system
- mito → mitochondria
- cyto → cytoplasm
- gluconeogen. → gluconeogenesis
- glycogenol. → glycogenolysis
- ↑ → increases, if used in labels
- ↓ → decreases, if used in labels

Allowed abbreviations:
Keep standard MCAT/science abbreviations when they are commonly tested or when spelling them out would make nodes too large.

Examples:
- ATP
- ADP
- AMP
- NADH
- NAD+
- FADH2
- DNA
- RNA
- mRNA
- tRNA
- GLUT
- TCA
- ETC
- pH
- CO2
- O2
- H+
- Na+
- K+
- Ca2+
- Cl-
- cAMP

Label vs side panel rule:
Node labels should be readable and concise.
Side panel entries should contain the full expanded term.

Example:
Node label: ETC
Side panel title: Electron Transport Chain (ETC)

## Abbreviation Implementation

Keep abbreviation data modular.

Do not hard-code a huge key inside app.js.

Use data/abbreviations.json or docs/abbreviation-key.md if a full abbreviation key is later created.

Do not create the full abbreviation key during Phase 1.
