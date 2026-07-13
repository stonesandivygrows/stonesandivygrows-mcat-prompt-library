/**
 * MCAT pathway focus definitions — node IDs only; must match data/metabolism.js.
 * Do not add nodes/edges here; reference existing IDs only.
 */
window.MCAT_PATHWAYS = [
  {
    id: 'fed_glycolysis',
    name: 'Fed Glucose / Glycolysis Focus',
    trigger: 'Fed state — post-meal, ample blood glucose, insulin favoring glucose disposal',
    locations: 'Blood → hepatocyte/cytosol (GLUT-mediated uptake on map); cytosolic glycolytic sequence',
    hormonesSignals: 'Insulin (map) supports PFK-1 side (F2,6-BP node); AMP/ATP nodes as local energy cues',
    sequence: 'Blood glucose → glucose-6-P → fructose-6-P → PFK-1 → fructose-1,6-BP → triose stage → pyruvate',
    mcatCore: 'PFK-1 is the signature regulated step; trace from blood_glucose through pyruvate_cyto. Parallel glycogen synthesis from G6P exists on the map but is not the spine of this focus.',
    clinicalShort: 'Insulin resistance (e.g. T2DM): less effective fed-state glucose uptake — overview only.',
    nodeIds: [
      'blood_glucose', 'glucose_cyto', 'g6p', 'f6p', 'pfk1', 'f16bp', 'g3p_dhap', 'pyruvate_cyto',
      'insulin', 'f26bp', 'atp_reg', 'amp'
    ]
  },
  {
    id: 'fasting_gng',
    name: 'Fasting / Gluconeogenesis Focus',
    trigger: 'Fasting / low glucose — glucagon (+ cortisol/epinephrine where shown) favoring glucose output',
    locations: 'Liver (and kidney GNG on map); Cori/Ala cycle inputs to pyruvate; cytosolic GNG bypasses + G6Pase',
    hormonesSignals: 'Glucagon, cortisol, epinephrine tie to glycogenolysis, GNG enzymes, and opposing glycolysis where edges exist',
    sequence: 'Lactate/alanine → pyruvate → oxaloacetate (pyruvate carboxylase) → PEP (PEPCK) → fructose-1,6-BP bypass (FBPase-1) → G6P → G6Pase → glucose; glycogen → G6P arm parallel',
    mcatCore: 'Two GNG bypasses + G6Pase; map shows pepck, pyruvate_carboxylase, fbpase1, g6pase with hormonal regulation edges.',
    clinicalShort: 'von Gierke (G6Pase deficiency): blocks glucose export from liver — classic board tie to G6Pase node.',
    nodeIds: [
      'glucagon', 'cortisol', 'epinephrine',
      'glycogen', 'glycogen_phosphorylase', 'g6p', 'g6pase', 'glucose_cyto',
      'fbpase1', 'f16bp', 'f6p', 'pep', 'pepck', 'oaa_cyto', 'pyruvate_carboxylase', 'pyruvate_cyto',
      'lactate', 'alanine', 'liver_organ', 'kidney_organ', 'blood_glucose'
    ]
  },
  {
    id: 'lipid_lpl',
    name: 'Lipid Transport / Chylomicron–VLDL–LPL Focus',
    trigger: 'Post-absorptive lipid handling — chylomicrons from gut transport; hepatic VLDL; capillary LPL lipolysis',
    locations: 'GI absorption / micelles; blood / chylomicrons / VLDL; capillary LPL; liver VLDL secretion',
    hormonesSignals: 'CCK/bile/micelles/absorption chain on map leads into chylomicrons; insulin context exists elsewhere but not required for this trail',
    sequence: 'Dietary fat handling (micelles, absorption) → chylomicrons → LPL → blood FFA; liver → VLDL → LPL',
    mcatCore: 'Follow absorption → chylomicrons → lpl → blood_ffa and liver_organ → vldl → lpl.',
    clinicalShort: 'LPL defect or familial chylomicronemia: impaired TG clearance — tie to LPL node only.',
    nodeIds: [
      'bile', 'micelles', 'absorption', 'brush_border', 'chylomicrons', 'lpl', 'blood_ffa', 'vldl', 'liver_organ'
    ]
  },
  {
    id: 'urea_aa',
    name: 'Urea Cycle / Amino Acid Catabolism Focus',
    trigger: 'Amino acid nitrogen disposal — transamination → NH4+ → urea cycle; aspartate supplies second nitrogen',
    locations: 'Mitochondria (CPS-I, OTC branch) ↔ cytosolic urea steps; links to TCA via fumarate',
    hormonesSignals: 'NAG activates CPS-I on map; GDH releases NH4+ from glutamate',
    sequence: 'AA catabolism → glutamate → NH4+ → carbamoyl phosphate → citrulline → argininosuccinate → arginine → urea + ornithine; fumarate bridge to TCA',
    mcatCore: 'nh4+ → cpsi → carbamoyl_p → citrulline → argininosuccinate (with aspartate_uc) → arginine_uc → urea_out; fumarate_uc → fumarate_mito.',
    clinicalShort: 'OTC deficiency / hyperammonemia: first-step integration concept only — not full genetics.',
    nodeIds: [
      'aa_catabolism', 'alanine', 'glutamate', 'nh4_plus', 'nag', 'cpsi', 'carbamoyl_p', 'ornithine', 'citrulline',
      'aspartate_uc', 'argininosuccinate', 'arginine_uc', 'urea_out', 'fumarate_uc', 'fumarate_mito', 'oaa_mito',
      'alpha_keto_acids', 'kidney_organ'
    ]
  }
];
