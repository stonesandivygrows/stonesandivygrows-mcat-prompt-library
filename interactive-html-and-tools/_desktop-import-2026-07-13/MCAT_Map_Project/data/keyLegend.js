/* Starter map key data — expand in later phases; keep in sync with filter labels / edge styles. */
window.MCAT_KEY_LEGEND = {
  categories: [
    { id: 'cns', name: 'CNS', color: '#7c3aed', description: 'Central nervous system / behavioral' },
    { id: 'gi', name: 'GI Tract', color: '#15803d', description: 'Digestive tract' },
    { id: 'hormone', name: 'Hormones', color: '#be185d', description: 'Endocrine signals' },
    { id: 'blood', name: 'Blood', color: '#0e7490', description: 'Blood & extracellular transport' },
    { id: 'organ', name: 'Organs', color: '#1d4ed8', description: 'Organ-level metabolism' },
    { id: 'cytoplasm', name: 'Cytoplasm', color: '#b45309', description: 'Cytosolic pathways' },
    { id: 'mito', name: 'Mito', color: '#be123c', description: 'Mitochondrial metabolism' },
    { id: 'etc', name: 'ETC', color: '#475569', description: 'Electron transport chain' },
    { id: 'urea', name: 'Urea', color: '#92400e', description: 'Urea cycle' },
    { id: 'regulator', name: 'Regulators', color: '#a16207', description: 'Allosteric & energy regulators' }
  ],
  edges: [
    { label: 'Produces / Converts', summary: 'Solid indigo line with arrow; default pathway or conversion step.', preview: { borderTop: '1.5px solid #4f46e5' } },
    { label: 'Activates', summary: 'Dashed green line; stimulatory regulation (✦ in the side panel).', preview: { borderTop: '2px dashed #15803d' }, accentSymbol: '✦' },
    { label: 'Inhibits', summary: 'Solid red line with “tee” arrowhead; inhibition (✗ in the side panel).', preview: { borderTop: '2px solid #be123c' }, accentSymbol: '✗' },
    { label: 'Signals', summary: 'Dashed purple; signaling (hormone/neural style) (◈ in the side panel).', preview: { borderTop: '1.5px dashed #7c3aed' }, accentSymbol: '◈' },
    { label: 'Transports', summary: 'Dotted teal; movement between compartments (⇢ in the side panel).', preview: { borderTop: '1.5px dotted #0e7490' }, accentSymbol: '⇢' }
  ],
  abbreviationsPlaceholder: 'Abbreviation entries will be added in a later phase. No full abbreviation list yet.',
  priorityLabelsPlaceholder: 'Priority labels (for example MCAT-core vs MCAT-adjacent) will be listed here in a future phase.',
  shapesPlaceholder: 'Node shape and silhouette meanings will be documented when that visual system is enabled.'
};
