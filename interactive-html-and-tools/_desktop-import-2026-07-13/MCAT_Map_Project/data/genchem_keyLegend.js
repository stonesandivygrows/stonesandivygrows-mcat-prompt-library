/* General Chemistry map — category colors and edge meanings (cool theme). */
window.MCAT_KEY_LEGEND = {
  categories: [
    { id: 'gc_atomic', name: 'Atomic structure', color: '#2563eb', description: 'Nucleus, electrons, quantum numbers' },
    { id: 'gc_periodic', name: 'Periodic trends', color: '#2563eb', description: 'Radius, IE, EA, electronegativity (same blue family as atomic)' },
    { id: 'gc_bond', name: 'Bonding & structure', color: '#4f46e5', description: 'Ionic/covalent, VSEPR, hybridization' },
    { id: 'gc_imf', name: 'IMFs & phases', color: '#0f766e', description: 'Forces between molecules, phase behavior' },
    { id: 'gc_stoich', name: 'Stoichiometry', color: '#475569', description: 'Moles, yields, reaction accounting' },
    { id: 'gc_gas', name: 'Gases & solutions', color: '#0e7490', description: 'Gas laws, KMT, concentration' },
    { id: 'gc_acid', name: 'Acids & bases', color: '#1d4ed8', description: 'pH, buffers, titrations' },
    { id: 'gc_redox', name: 'Redox & electrochem', color: '#4338ca', description: 'Oxidation states, cells, potentials' },
    { id: 'gc_thermo', name: 'Thermodynamics', color: '#7c3aed', description: 'Enthalpy, entropy, Gibbs energy' },
    { id: 'gc_kin', name: 'Kinetics', color: '#0369a1', description: 'Rates, mechanisms, activation energy' },
    { id: 'gc_eq', name: 'Equilibrium', color: '#047857', description: 'K, Q, Le Châtelier' },
    { id: 'gc_math', name: 'Math & equations', color: '#334155', description: 'Rearranging formulas, logs, units' },
    { id: 'gc_exp', name: 'Experimental / data', color: '#64748b', description: 'Measurements, error, graphs' }
  ],
  edges: [
    { label: 'Causes / drives', summary: 'Solid slate arrow; direct causal influence on the target idea.', preview: { borderTop: '1.5px solid #475569' } },
    { label: 'Produces / converts', summary: 'Solid slate arrow; stoichiometric or conceptual conversion step.', preview: { borderTop: '1.5px solid #64748b' } },
    { label: 'Increases', summary: 'Dashed green; raises the quantity on the target when the source rises.', preview: { borderTop: '2px dashed #047857' }, accentSymbol: '↑' },
    { label: 'Decreases', summary: 'Dashed red; lowers the quantity on the target when the source rises.', preview: { borderTop: '2px dashed #be123c' }, accentSymbol: '↓' },
    { label: 'Opposes', summary: 'Solid red with bar arrowhead; antagonistic effect.', preview: { borderTop: '2px solid #be123c' }, accentSymbol: '⊣' },
    { label: 'Requires', summary: 'Solid blue; prerequisite condition or reagent.', preview: { borderTop: '1.5px solid #2563eb' } },
    { label: 'Regulates / shifts', summary: 'Dashed slate; pushes equilibrium or response (Le Châtelier-style).', preview: { borderTop: '1.5px dashed #475569' } },
    { label: 'Measured by', summary: 'Dotted line; experimental readout link.', preview: { borderTop: '1.5px dotted #0e7490' } },
    { label: 'Calculated by', summary: 'Dotted line; formula or derivation link.', preview: { borderTop: '1.5px dotted #334155' } },
    { label: 'Example of', summary: 'Dotted line; illustrative instance.', preview: { borderTop: '1.5px dotted #64748b' } },
    { label: 'Conceptual link', summary: 'Dotted gray; light cross-topic connection (also shown faint on the map).', preview: { borderTop: '1.5px dotted #94a3b8' } }
  ],
  abbreviationsPlaceholder: 'Use the side panel while studying; abbreviation expansion can be added later.',
  priorityLabelsPlaceholder: 'No priority tier labels on this v1 map.',
  shapesPlaceholder: 'Nodes use rounded rectangles only; no silhouettes on the Gen Chem map.'
};
