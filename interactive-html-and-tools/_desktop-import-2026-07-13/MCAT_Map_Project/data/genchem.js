/* MCAT General Chemistry v1 — fixed polar “bicycle wheel” layout (no auto-layout). */
(function () {
  const cx = 5200;
  const cy = 5200;
  const RINGS = [330, 515, 700, 885, 1070, 1255, 1440, 1625];
  const rawNodes = [];
  const DESC = {};
  const rawEdges = [];

  function spokesXY(k, ringIdx) {
    const th = -Math.PI / 2 + k * (Math.PI / 6);
    const r = RINGS[ringIdx];
    return { x: cx + r * Math.cos(th), y: cy + r * Math.sin(th) };
  }
  function expXY(j) {
    const th = -Math.PI / 2 + Math.PI / 12 + j * (Math.PI / 6);
    const r = 250;
    return { x: cx + r * Math.cos(th), y: cy + r * Math.sin(th) };
  }

  function add(id, label, cat, x, y, zLab, desc) {
    rawNodes.push({ id, label, cat, x, y });
    DESC[id] = { cat: zLab, desc };
  }

  function chain(ids, et, lb) {
    for (let i = 0; i < ids.length - 1; i++) rawEdges.push([ids[i], ids[i + 1], et, lb || '']);
  }
  function xlink(a, b, et, lb) {
    rawEdges.push([a, b, et, lb || '', true]);
  }

  const SPOKES = [
    {
      k: 0,
      cat: 'gc_atomic',
      z: 'Atomic structure',
      items: [
        ['gc_at_z', 'Atomic number Z', 'Proton count; defines the element in the periodic table.'],
        ['gc_at_a', 'Mass number A', 'Protons + neutrons in one nuclide.'],
        ['gc_at_iso', 'Isotopes', 'Same Z, different neutron number; similar chemistry.'],
        ['gc_at_e', 'Electrons & charge', 'Negative charge carriers; neutral atom: e⁻ = Z.'],
        ['gc_at_n', 'Quantum number n', 'Shell / principal level; sets average distance & energy.'],
        ['gc_at_orb', 'Orbitals s,p,d,f', 'Shapes and directional bonding character.'],
        ['gc_at_aufbau', 'Aufbau filling', 'Build-up order: lower (n+l) fills first.'],
        ['gc_at_spin', 'Pauli & Hund', 'Max two e⁻ per orbital (paired); degenerate orbitals fill singly first.']
      ]
    },
    {
      k: 1,
      cat: 'gc_periodic',
      z: 'Periodic trends',
      items: [
        ['gc_pr_ar', 'Atomic radius', 'Increases down a group; decreases across a period (Zeff effect).'],
        ['gc_pr_ir', 'Ionic radius', 'Cations smaller than atoms; anions larger; same trend drivers.'],
        ['gc_pr_ie', 'Ionization energy', 'Energy to remove an e⁻; trends opposite to atomic radius.'],
        ['gc_pr_ea', 'Electron affinity', 'Energy change adding an e⁻; halogens most exothermic.'],
        ['gc_pr_en', 'Electronegativity', 'Pull on shared e⁻ in a bond; F highest on Pauling scale.'],
        ['gc_pr_met', 'Metallic character', 'Increases down/left; relates to IE and EN.'],
        ['gc_pr_zeff', 'Effective Z (Zeff)', 'Core shielding reduces nuclear pull on valence e⁻.'],
        ['gc_pr_diag', 'Diagonal relationships', 'Li~Mg, Be~Al, B~Si — periodicity “echoes” for review.']
      ]
    },
    {
      k: 2,
      cat: 'gc_bond',
      z: 'Bonding & molecular structure',
      items: [
        ['gc_bo_ionic', 'Ionic bonding', 'Electrons transferred; lattice of cations and anions.'],
        ['gc_bo_cov', 'Covalent bonding', 'Electrons shared; dominates nonmetal–nonmetal.'],
        ['gc_bo_enpd', 'ΔEN & polarity', 'Large ΔEN → more ionic character; dipole moment possible.'],
        ['gc_bo_ve', 'Valence electrons', 'Lewis structures: count e⁻ groups around each atom.'],
        ['gc_bo_vsepr', 'VSEPR geometry', 'Electron groups repel → molecular shape + bond angles.'],
        ['gc_bo_hyb', 'Hybridization', 'sp, sp², sp³ explains bond angles in organic-style frameworks.'],
        ['gc_bo_sigma', 'σ vs π bonds', 'Single σ; double = σ+π; triple = σ+2π.'],
        ['gc_bo_len', 'Bond length & energy', 'Shorter bonds often stronger; compare bond order.']
      ]
    },
    {
      k: 3,
      cat: 'gc_imf',
      z: 'Intermolecular forces',
      items: [
        ['gc_im_london', 'London dispersion', 'Temporary dipoles; strength grows with polarizability/size.'],
        ['gc_im_dip', 'Dipole–dipole', 'Permanent dipoles attract; stronger than London for similar size.'],
        ['gc_im_hbond', 'Hydrogen bonding', 'H bonded to N,O,F; strongest IMF; elevates bp of water.'],
        ['gc_im_rank', 'IMF ranking', 'Ion–ion > H-bond > dipole > London (typical MCAT framing).'],
        ['gc_im_vp', 'Vapor pressure', 'Higher IMF → lower VP at a given T.'],
        ['gc_im_bp', 'Boiling point', 'Higher IMF → higher bp (other factors equal).'],
        ['gc_im_st', 'Surface tension', 'Cohesive forces at a liquid surface.'],
        ['gc_im_visc', 'Viscosity', 'Resistance to flow; rises with IMF and molecular complexity.']
      ]
    },
    {
      k: 4,
      cat: 'gc_stoich',
      z: 'Stoichiometry',
      items: [
        ['gc_st_mole', 'Mole concept', '1 mol = Avogadro’s number of particles; central unit.'],
        ['gc_st_avo', 'Avogadro’s number', '6.022×10²³ items per mole (particles, not “grams”).'],
        ['gc_st_mm', 'Molar mass', 'g/mol from formula; converts mass ↔ moles.'],
        ['gc_st_emp', 'Empirical formula', 'Simplest integer ratio from composition data.'],
        ['gc_st_mol', 'Molecular formula', 'True atom counts; may be a multiple of empirical.'],
        ['gc_st_lim', 'Limiting reactant', 'Runs out first; caps product moles in a reaction mixture.'],
        ['gc_st_theo', 'Theoretical yield', 'Moles product from stoichiometry if reaction completes.'],
        ['gc_st_pct', 'Percent yield', '100 × actual / theoretical; flags side reactions or loss.']
      ]
    },
    {
      k: 5,
      cat: 'gc_gas',
      z: 'Gases & solutions',
      items: [
        ['gc_gs_ig', 'Ideal gas law', 'PV = nRT; ideal dilute particles, negligible volume.'],
        ['gc_gs_boyle', 'Boyle’s law', 'P vs V at constant n,T: inverse proportionality.'],
        ['gc_gs_charles', 'Charles’s law', 'V vs T at constant n,P: linear (absolute temperature).'],
        ['gc_gs_avo', 'Avogadro’s law', 'V vs n at constant P,T: moles and volume scale together.'],
        ['gc_gs_pmix', 'Partial pressures', 'Dalton: P_total = Σ P_i; mole fraction × P_total.'],
        ['gc_gs_kmt', 'Kinetic molecular theory', 'Microscopic model behind temperature as avg KE.'],
        ['gc_gs_rms', 'RMS speed', 'u_rms ∝ √(T/M); lighter molecules move faster at same T.'],
        ['gc_gs_real', 'Real gas deviations', 'High P or low T: finite volume + attractions matter.']
      ]
    },
    {
      k: 6,
      cat: 'gc_acid',
      z: 'Acids & bases',
      items: [
        ['gc_ab_arr', 'Arrhenius', 'Acid releases H⁺ in water; base releases OH⁻ (aqueous framing).'],
        ['gc_ab_bl', 'Brønsted–Lowry', 'Acid donates H⁺; base accepts H⁺ (conjugate pairs).'],
        ['gc_ab_lew', 'Lewis acids/bases', 'Acid accepts e⁻ pair; base donates e⁻ pair.'],
        ['gc_ab_ph', 'pH & pOH', 'pH = −log[H⁺]; pKw = 14 at 25 °C in water.'],
        ['gc_ab_pka', 'Ka & pKa', 'Strength: larger Ka → smaller pKa → stronger acid.'],
        ['gc_ab_buf', 'Buffers', 'Weak acid + conjugate base resists pH change near pKa.'],
        ['gc_ab_hh', 'Henderson–Hasselbalch', 'pH = pKa + log([A⁻]/[HA]) for buffer calculations.'],
        ['gc_ab_titr', 'Titration curve', 'Equivalence: moles acid = moles base; midpoint ≈ pKa (weak).']
      ]
    },
    {
      k: 7,
      cat: 'gc_redox',
      z: 'Redox & electrochemistry',
      items: [
        ['gc_rx_oxn', 'Oxidation numbers', 'Bookkeeping for e⁻ transfer; rules for organics simplified.'],
        ['gc_rx_reda', 'Reducing agent', 'Gets oxidized (loses e⁻); “reduces” something else.'],
        ['gc_rx_oxa', 'Oxidizing agent', 'Gets reduced (gains e⁻); “oxidizes” something else.'],
        ['gc_rx_galv', 'Galvanic (voltaic) cell', 'Spontaneous; cathode +, anode −; chemical → electrical work.'],
        ['gc_rx_elec', 'Electrolytic cell', 'Nonspontaneous driven by external voltage; signs flip vs galvanic.'],
        ['gc_rx_ecell', 'Standard potentials E°', 'Larger E°red → stronger oxidizing agent (reduction table).'],
        ['gc_rx_nernst', 'Nernst (concept)', 'E shifts with Q vs standard state; ties to ΔG.'],
        ['gc_rx_far', 'Faraday & charge', 'moles e⁻ ↔ coulombs; links current × time to chemistry.']
      ]
    },
    {
      k: 8,
      cat: 'gc_thermo',
      z: 'Thermodynamics',
      items: [
        ['gc_th_sys', 'System vs surroundings', 'Universe = system + surroundings; energy bookkeeping.'],
        ['gc_th_h', 'Enthalpy ΔH', 'Heat at constant pressure; products−reactants from tables.'],
        ['gc_th_s', 'Entropy ΔS', 'Dispersal of energy/matter; gases > liquids > solids (often).'],
        ['gc_th_g', 'Gibbs ΔG', 'ΔG = ΔH − TΔS; sign predicts spontaneity at constant T,P.'],
        ['gc_th_exo', 'Exo vs endo', 'ΔH < 0 releases heat; ΔH > 0 absorbs heat.'],
        ['gc_th_hess', "Hess’s law", 'ΔH pathways add; flip reaction → sign flip; scale stoichiometry.'],
        ['gc_th_bond', 'Bond enthalpies', 'Estimate ΔH from bonds broken minus bonds formed (approx).'],
        ['gc_th_eqg', 'ΔG° and K', 'ΔG° = −RT ln K; ties thermodynamics to equilibrium.']
      ]
    },
    {
      k: 9,
      cat: 'gc_kin',
      z: 'Kinetics',
      items: [
        ['gc_kin_rate', 'Reaction rate', 'Change in concentration per time; use stoichiometric coefficients.'],
        ['gc_kin_law', 'Rate law', 'Rate = k[A]^m…; orders from experiments, not stoichiometry alone.'],
        ['gc_kin_ord', 'Reaction order', 'Sum of exponents; sets how rate scales with concentration.'],
        ['gc_kin_half', 'Half-life', 'Order-dependent; first-order t½ constant (radioactive decay style).'],
        ['gc_kin_coll', 'Collision model', 'Molecules must collide with enough energy & orientation.'],
        ['gc_kin_ea', 'Activation energy Ea', 'Barrier height; Arrhenius links k and temperature.'],
        ['gc_kin_cat', 'Catalyst', 'Lowers Ea; faster equilibration without changing ΔG or K.'],
        ['gc_kin_rds', 'Rate-determining step', 'Slow step sets overall rate in a mechanism.']
      ]
    },
    {
      k: 10,
      cat: 'gc_eq',
      z: 'Equilibrium',
      items: [
        ['gc_eq_dyn', 'Dynamic equilibrium', 'Forward rate = reverse rate; concentrations plateau.'],
        ['gc_eq_kc', 'Kc & expressions', 'Products/reactants with exponents = coefficients; pure solids/liquids omit.'],
        ['gc_eq_kp', 'Kp for gases', 'Partial pressures; relate Kp to Kc via (RT)^Δn.'],
        ['gc_eq_q', 'Reaction quotient Q', 'Same form as K with current concentrations; Q vs K predicts shift.'],
        ['gc_eq_lec', 'Le Châtelier', 'Stress → system shifts to partially counteract (conceptual predictions).'],
        ['gc_eq_ice', 'ICE table', 'Initial, Change, Equilibrium — organize stoichiometry + K math.'],
        ['gc_eq_pt', 'Pressure / volume', 'Gas equilibrium: compression favors fewer moles of gas.'],
        ['gc_eq_ht', 'Temperature change', 'Heat as reactant/product; K increases or decreases with T.']
      ]
    },
    {
      k: 11,
      cat: 'gc_math',
      z: 'Math & equations',
      items: [
        ['gc_ma_si', 'SI prefixes', 'nano, micro, milli, kilo… — convert units before plugging in.'],
        ['gc_ma_den', 'Density ρ = m/V', 'Mass per volume; watch units in mixture problems.'],
        ['gc_ma_dil', 'Dilution M1V1=M2V2', 'Moles solute conserved when solvent added.'],
        ['gc_ma_ig', 'Ideal gas algebra', 'Solve PV=nRT for the unknown; R matches unit set.'],
        ['gc_ma_log', 'Logs in chemistry', 'pH, pKa, Arrhenius, and ΔG° = −RT ln K use log rules.'],
        ['gc_ma_quad', 'Quadratic need', 'Some K expressions need quadratic formula (positive root).'],
        ['gc_ma_lin', 'Linearization', 'Arrhenius ln k vs 1/T; integrated rate laws as straight lines.'],
        ['gc_ma_dim', 'Dimensional analysis', 'Track units through a calculation to catch algebra errors.']
      ]
    }
  ];

  for (const sp of SPOKES) {
    const ids = [];
    sp.items.forEach((row, i) => {
      const p = spokesXY(sp.k, i);
      add(row[0], row[1], sp.cat, p.x, p.y, sp.z, row[2]);
      ids.push(row[0]);
    });
    chain(ids, 'produces_converts', '');
  }

  const EXP = [
    ['gc_ex_sig', 'Significant figures', 'Final answer precision limited by the least-precise measurement.'],
    ['gc_ex_rand', 'Random vs systematic error', 'Scatter vs consistent bias; affects how you trust means.'],
    ['gc_ex_cal', 'Calibration', 'Relate instrument reading to true value with standards.'],
    ['gc_ex_beer', 'Beer–Lambert (concept)', 'Absorbance scales with concentration and path length.'],
    ['gc_ex_lin', 'Line fits', 'Slope/intercept from calibration curves; watch outliers.'],
    ['gc_ex_unc', 'Precision terminology', 'Repeatability vs accuracy; error bars on graphs.'],
    ['gc_ex_titr', 'Buret & endpoint', 'Volume delivered; indicator or pH trace marks endpoint.'],
    ['gc_ex_gas', 'Gas over water', 'Collect wet gas; subtract water vapor pressure (Dalton).'],
    ['gc_ex_sep', 'Separations', 'Chromatography / extraction basics for purity and Rf ideas.'],
    ['gc_ex_grav', 'Gravimetric idea', 'Mass-based analysis; filtration and drying matter.'],
    ['gc_ex_spec', 'Spectroscopy readout', 'Absorption/emission linked to electronic transitions (high level).'],
    ['gc_ex_dat', 'Rate from data', 'Initial rates or slopes give rate laws experimentally.']
  ];

  EXP.forEach((row, j) => {
    const p = expXY(j);
    add(row[0], row[1], 'gc_exp', p.x, p.y, 'Experimental / data', row[2]);
  });
  for (let j = 0; j < EXP.length; j++) {
    const a = EXP[j][0];
    const b = EXP[(j + 1) % EXP.length][0];
    rawEdges.push([a, b, 'conceptual_link', '']);
  }

  /* Minimal cross-links: thin/dashed styling applied in app (crosslink flag). */
  xlink('gc_at_e', 'gc_pr_en', 'conceptual_link', '');
  xlink('gc_bo_enpd', 'gc_pr_en', 'example_of', '');
  xlink('gc_bo_ve', 'gc_at_orb', 'requires', '');
  xlink('gc_im_hbond', 'gc_ab_buf', 'conceptual_link', '');
  xlink('gc_st_mole', 'gc_ma_si', 'calculated_by', '');
  xlink('gc_st_lim', 'gc_st_mol', 'requires', '');
  xlink('gc_gs_ig', 'gc_ma_ig', 'calculated_by', '');
  xlink('gc_gs_pmix', 'gc_gs_ig', 'causes_drives', '');
  xlink('gc_ab_pka', 'gc_eq_kc', 'conceptual_link', '');
  xlink('gc_ab_hh', 'gc_ma_log', 'calculated_by', '');
  xlink('gc_rx_ecell', 'gc_th_eqg', 'conceptual_link', '');
  xlink('gc_rx_galv', 'gc_th_g', 'causes_drives', '');
  xlink('gc_th_eqg', 'gc_eq_kc', 'calculated_by', '');
  xlink('gc_th_g', 'gc_eq_kc', 'regulates_shifts', '');
  xlink('gc_kin_cat', 'gc_kin_ea', 'decreases', '');
  xlink('gc_kin_rds', 'gc_kin_rate', 'causes_drives', '');
  xlink('gc_eq_lec', 'gc_eq_q', 'requires', '');
  xlink('gc_eq_dyn', 'gc_kin_rate', 'conceptual_link', '');
  xlink('gc_ex_dat', 'gc_kin_law', 'measured_by', '');
  xlink('gc_ex_sig', 'gc_st_pct', 'requires', '');

  window.bgZones = [
    { id: 'gc_bg_str', label: 'STRUCTURE', x: 5200, y: 4100, w: 3600, h: 2600, color: '#2563eb' },
    { id: 'gc_bg_phy', label: 'PHYSICAL CHEM', x: 6700, y: 5600, w: 2800, h: 3400, color: '#7c3aed' },
    { id: 'gc_bg_rx', label: 'REACTIONS & SOLUTIONS', x: 3700, y: 5900, w: 3200, h: 3000, color: '#0e7490' },
    { id: 'gc_bg_core', label: 'CORE SKILLS', x: 5200, y: 5200, w: 1400, h: 1200, color: '#64748b' }
  ];

  window.rawNodes = rawNodes;
  window.rawEdges = rawEdges;
  window.DESC = DESC;
})();
