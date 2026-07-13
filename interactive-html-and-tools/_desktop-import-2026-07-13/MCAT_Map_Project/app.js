const IS_GENCHEM = typeof document !== 'undefined' && document.body && document.body.classList && document.body.classList.contains('map-genchem');

// Build elements array
const elements = [];

// Add background zone nodes
for(const z of bgZones){
  elements.push({
    data:{id:z.id, label:z.label, cat:'bg', color:z.color, w:z.w, h:z.h},
    position:{x:z.x, y:z.y},
    selectable:false, grabbable:false
  });
}
// Add real nodes
for(const n of rawNodes){
  elements.push({data:{id:n.id,label:n.label,cat:n.cat}, position:{x:n.x,y:n.y}});
}

// EDGES — [source, target, type, label] or [..., true] crosslink flag (Gen Chem)
// Metabolism types: produces, activates, inhibits, signals, transports
let eid = 0;
for(const row of rawEdges){
  const s=row[0], t=row[1], type=row[2], label=row[3]||'';
  const d={id:`e${eid++}`,source:s,target:t,etype:type,label};
  if(row[4]===true) d.crosslink='1';
  elements.push({data:d});
}

const CAT_COLOR = IS_GENCHEM ? {
  gc_atomic:'#2563eb', gc_periodic:'#2563eb', gc_bond:'#4f46e5', gc_imf:'#0f766e',
  gc_stoich:'#475569', gc_gas:'#0e7490', gc_acid:'#1d4ed8', gc_redox:'#4338ca',
  gc_thermo:'#7c3aed', gc_kin:'#0369a1', gc_eq:'#047857', gc_math:'#334155',
  gc_exp:'#64748b', bg:'transparent'
} : {
  cns:'#7c3aed', gi:'#15803d', hormone:'#be185d', blood:'#0e7490',
  organ:'#1d4ed8', cytoplasm:'#b45309', mito:'#be123c',
  etc:'#475569', urea:'#92400e', regulator:'#a16207', bg:'transparent'
};

const GENCHEM_BG_STYLE = {
  'shape':'round-rectangle',
  'width':'data(w)','height':'data(h)',
  'background-color':'data(color)',
  'background-opacity':0.045,
  'border-color':'data(color)',
  'border-width':1,'border-opacity':0.17,
  'border-style':'dashed',
  'label':'data(label)',
  'text-valign':'top','text-halign':'center',
  'font-size':'26px','font-weight':'300',
  'color':'#64748b','text-opacity':0.72,
  'text-margin-y':10,'letter-spacing':1.8,
  'events':'no','z-index':0,'font-family':'system-ui, "Segoe UI", Roboto, Verdana, sans-serif',
  'padding':'12px'
};

const METAB_BG_STYLE = {
  'shape':'round-rectangle',
  'width':'data(w)','height':'data(h)',
  'background-color':'data(color)',
  'background-opacity':0.11,
  'border-color':'data(color)',
  'border-width':1,'border-opacity':0.19,
  'label':'data(label)',
  'text-valign':'top','text-halign':'center',
  'font-size':'28px','font-weight':'400',
  'color':'data(color)','text-opacity':0.78,
  'text-margin-y':12,'letter-spacing':1.6,
  'events':'no','z-index':0,'font-family':'Verdana, Geneva, Tahoma, sans-serif',
  'padding':'12px'
};

const GENCHEM_NODE_STYLE = {
  'shape':'round-rectangle',
  'width':'label','height':'label',
  'padding':'8px',
  'background-color':'#f8fafc',
  'background-opacity':0.99,
  'border-color':function(n){return CAT_COLOR[n.data('cat')]||'#64748b'},
  'border-width':2.5,
  'label':'data(label)',
  'text-valign':'center','text-halign':'center',
  'color':function(n){return CAT_COLOR[n.data('cat')]||'#64748b'},
  'font-size':'13px','font-weight':'bold','font-family':'system-ui, "Segoe UI", Roboto, Verdana, sans-serif',
  'text-wrap':'wrap','text-max-width':'168px',
  'text-outline-width':2,'text-outline-color':'#f8fafc',
  'z-index':10,'min-width':'64px',
  'transition-property':'border-width,background-color,border-color,opacity',
  'transition-duration':'0.15s'
};

const META_NODE_STYLE = {
  'shape':'round-rectangle',
  'width':'label','height':'label',
  'padding':'8px',
  'background-color':'#fef8f0',
  'background-opacity':0.99,
  'border-color':function(n){return CAT_COLOR[n.data('cat')]||'#64748b'},
  'border-width':2.5,
  'label':'data(label)',
  'text-valign':'center','text-halign':'center',
  'color':function(n){return CAT_COLOR[n.data('cat')]||'#64748b'},
  'font-size':'10.7px','font-weight':'bold','font-family':'Verdana, Geneva, Tahoma, sans-serif',
  'text-wrap':'wrap','text-max-width':'160px',
  'text-outline-width':2,'text-outline-color':'#fef8f0',
  'z-index':10,'min-width':'62px',
  'transition-property':'border-width,background-color,border-color,opacity',
  'transition-duration':'0.15s'
};

const GENCHEM_EDGE_DEFAULT = {
  'curve-style':'bezier',
  'target-arrow-shape':'triangle',
  'arrow-scale':0.72,
  'width':1.5,
  'line-color':'#475569','target-arrow-color':'#475569',
  'opacity':0.6,'z-index':5,
  'font-size':'8px','color':'#475569','label':'',
  'text-rotation':'autorotate','font-family':'system-ui, "Segoe UI", Roboto, Verdana, sans-serif'
};

const META_EDGE_DEFAULT = {
  'curve-style':'bezier',
  'target-arrow-shape':'triangle',
  'arrow-scale':0.95,
  'width':1.45,
  'line-color':'#4f46e5','target-arrow-color':'#4f46e5',
  'opacity':0.74,'z-index':5,
  'font-size':'8px','color':'#475569','label':'',
  'text-rotation':'autorotate','font-family':'Verdana, Geneva, Tahoma, sans-serif'
};

const GENCHEM_EDGE_RULES = [
  {selector:'edge[etype="causes_drives"]',style:{
    'line-color':'#475569','target-arrow-color':'#475569',
    'line-style':'solid','width':1.55,'opacity':0.62,'arrow-scale':0.72
  }},
  {selector:'edge[etype="produces_converts"]',style:{
    'line-color':'#475569','target-arrow-color':'#475569',
    'line-style':'solid','width':1.5,'opacity':0.6,'arrow-scale':0.72
  }},
  {selector:'edge[etype="increases"]',style:{
    'line-color':'#047857','target-arrow-color':'#047857',
    'line-style':'dashed','line-dash-pattern':[5,3],'width':1.45,'opacity':0.62,'arrow-scale':0.7
  }},
  {selector:'edge[etype="decreases"]',style:{
    'line-color':'#be123c','target-arrow-color':'#be123c',
    'line-style':'dashed','line-dash-pattern':[5,3],'width':1.45,'opacity':0.62,'arrow-scale':0.7
  }},
  {selector:'edge[etype="opposes"]',style:{
    'line-color':'#be123c','target-arrow-color':'#be123c',
    'target-arrow-shape':'tee','line-style':'solid','width':1.65,'opacity':0.65,'arrow-scale':0.72
  }},
  {selector:'edge[etype="requires"]',style:{
    'line-color':'#2563eb','target-arrow-color':'#2563eb',
    'line-style':'solid','width':1.5,'opacity':0.62,'arrow-scale':0.72
  }},
  {selector:'edge[etype="measured_by"]',style:{
    'line-color':'#0e7490','target-arrow-color':'#0e7490',
    'line-style':'dotted','width':1.45,'opacity':0.58,'arrow-scale':0.68
  }},
  {selector:'edge[etype="calculated_by"]',style:{
    'line-color':'#334155','target-arrow-color':'#334155',
    'line-style':'dotted','width':1.45,'opacity':0.58,'arrow-scale':0.68
  }},
  {selector:'edge[etype="example_of"]',style:{
    'line-color':'#64748b','target-arrow-color':'#64748b',
    'line-style':'dotted','width':1.4,'opacity':0.55,'arrow-scale':0.68
  }},
  {selector:'edge[etype="regulates_shifts"]',style:{
    'line-color':'#475569','target-arrow-color':'#475569',
    'line-style':'dashed','line-dash-pattern':[4,4],'width':1.45,'opacity':0.58,'arrow-scale':0.7
  }},
  {selector:'edge[etype="conceptual_link"]',style:{
    'line-color':'#94a3b8','target-arrow-color':'#94a3b8',
    'line-style':'dotted','width':1.35,'opacity':0.52,'arrow-scale':0.65
  }},
  {selector:'edge[crosslink="1"]',style:{
    'line-style':'dashed','line-dash-pattern':[4,4],
    'width':1,'opacity':0.3,
    'line-color':'#64748b','target-arrow-color':'#64748b',
    'arrow-scale':0.62
  }},
];

const META_EDGE_RULES = [
  {selector:'edge[etype="activates"]',style:{
    'line-color':'#15803d','target-arrow-color':'#15803d',
    'line-style':'dashed','line-dash-pattern':[6,3],'width':1.75,'opacity':0.82
  }},
  {selector:'edge[etype="inhibits"]',style:{
    'line-color':'#be123c','target-arrow-color':'#be123c',
    'target-arrow-shape':'tee','width':2,'opacity':0.85
  }},
  {selector:'edge[etype="signals"]',style:{
    'line-color':'#7c3aed','target-arrow-color':'#7c3aed',
    'line-style':'dashed','line-dash-pattern':[4,4],'width':1.55,'opacity':0.8
  }},
  {selector:'edge[etype="transports"]',style:{
    'line-color':'#0e7490','target-arrow-color':'#0e7490',
    'line-style':'dotted','width':1.55,'opacity':0.8
  }},
];

const cy = cytoscape({
  container: document.getElementById('cy'),
  elements,
  layout:{name:'preset'},
  style:[
    {selector:'node[cat="bg"]',style: IS_GENCHEM ? GENCHEM_BG_STYLE : METAB_BG_STYLE},
    {selector:'node[cat!="bg"]',style: IS_GENCHEM ? GENCHEM_NODE_STYLE : META_NODE_STYLE},
    {selector:'node.highlighted',style: IS_GENCHEM ? {
      'border-width':3.5,'background-color':'#e0f2fe','z-index':20
    } : {
      'border-width':3.5,'background-color':'#fff4e8','z-index':20
    }},
    {selector:'node.faded',style:{'opacity':0.24}},
    {selector:'node.selected',style: IS_GENCHEM ? {
      'border-width':4,'background-color':'#dbeafe','z-index':30
    } : {
      'border-width':4,'background-color':'#ffedd5','z-index':30
    }},
    {selector:'node.search-hit',style: IS_GENCHEM ? {
      'border-width':3.5,'background-color':'#e0f2fe','z-index':21
    } : {
      'border-width':3.5,'background-color':'#fff4e8','z-index':21
    }},
    {selector:'node.search-dim',style:{'opacity':0.17}},
    {selector:'node.pathway-hit',style: IS_GENCHEM ? {
      'border-width':3.5,'background-color':'#e0f2fe','z-index':22
    } : {
      'border-width':3.5,'background-color':'#fff4e8','z-index':22
    }},
    {selector:'node.pathway-dim',style:{'opacity':0.14}},
    {selector:'edge',style: IS_GENCHEM ? GENCHEM_EDGE_DEFAULT : META_EDGE_DEFAULT},
    ...(IS_GENCHEM ? GENCHEM_EDGE_RULES : META_EDGE_RULES),
    {selector:'edge.highlighted',style:{'opacity':1,'width':2.8,'z-index':25}},
    {selector:'edge.faded',style:{'opacity':0.055}},
    {selector:'edge.pathway-hit',style:{'opacity':1,'width':2.35,'z-index':24}},
    {selector:'edge.pathway-dim',style:{'opacity':0.06,'z-index':4}},
  ],
  minZoom:0.03,maxZoom:2.5,
  userZoomingEnabled:true,userPanningEnabled:true,
  autoungrabify:true,
});

cy.fit(undefined,40);

const DEFAULT_PANEL_HTML=IS_GENCHEM
  ? '<h2>Node Info</h2><p class="ph">Click any node for MCAT General Chemistry details and relationships</p>'
  : '<h2>Node Info</h2><p class="ph">Click any node to see MCAT-relevant details and connections</p>';

function mcatPanelEdgeStyle(etype){
  if(IS_GENCHEM){
    const cls={
      causes_drives:'gcd', produces_converts:'gcp', increases:'gci', decreases:'gcdw', opposes:'gco',
      requires:'gcr', measured_by:'gcm', calculated_by:'gcq', example_of:'gce', regulates_shifts:'gcx', conceptual_link:'gcl'
    };
    const sym={
      causes_drives:'→', produces_converts:'→', increases:'↑', decreases:'↓', opposes:'⊣', requires:'⊢',
      measured_by:'∿', calculated_by:'≈', example_of:'◇', regulates_shifts:'⇌', conceptual_link:'·'
    };
    return { cls:cls[etype]||'gcl', sym:sym[etype]||'·' };
  }
  const cls={produces:'cp',activates:'ca',inhibits:'cb',signals:'cs',transports:'ct'};
  const sym={produces:'→',activates:'✦',inhibits:'✗',signals:'◈',transports:'⇢'};
  return { cls:cls[etype]||'cp', sym:sym[etype]||'→' };
}

function mcatEscapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
}

function resetPathwayHighlight(){
  cy.elements().removeClass('pathway-hit pathway-dim');
}

function renderPathwayPanel(pw, missing){
  const panel=document.getElementById('panel');
  const missBlock=missing.length
    ? `<div class="pct">Skipped IDs (not on graph)</div><p class="pd" style="font-size:10px">${missing.map(mcatEscapeHtml).join(', ')}</p>`
    : '';
  panel.innerHTML=`
    <h2>Pathway focus</h2>
    <div class="pn" style="color:#6d28d9">${mcatEscapeHtml(pw.name)}</div>
    <div class="pct">Trigger / state</div><p class="pd">${mcatEscapeHtml(pw.trigger)}</p>
    <div class="pct">Locations</div><p class="pd">${mcatEscapeHtml(pw.locations)}</p>
    <div class="pct">Hormones / signals</div><p class="pd">${mcatEscapeHtml(pw.hormonesSignals)}</p>
    <div class="pct">Main sequence</div><p class="pd">${mcatEscapeHtml(pw.sequence)}</p>
    <div class="pct">MCAT-core connections</div><p class="pd">${mcatEscapeHtml(pw.mcatCore)}</p>
    <div class="pct">Clinical (short)</div><p class="pd">${mcatEscapeHtml(pw.clinicalShort)}</p>
    ${missBlock}
  `;
}

function applyPathwayFocus(pathwayId){
  const list=window.MCAT_PATHWAYS;
  if(!pathwayId||!list||!list.length){
    resetPathwayHighlight();
    document.getElementById('panel').innerHTML=DEFAULT_PANEL_HTML;
    return;
  }
  const pw=list.find(p=>p.id===pathwayId);
  if(!pw) return;
  clearSearchFilter();
  cy.nodes('[cat!="bg"]').removeClass('search-hit search-dim');
  cy.elements().removeClass('highlighted faded selected');
  cy.elements().removeClass('pathway-hit pathway-dim');
  const present=[], missing=[];
  for(const nid of pw.nodeIds){
    if(cy.$('#'+nid).length>0) present.push(nid);
    else missing.push(nid);
  }
  const set=new Set(present);
  cy.nodes('[cat!="bg"]').forEach(n=>{
    if(set.has(n.id())) n.addClass('pathway-hit');
    else n.addClass('pathway-dim');
  });
  cy.edges().forEach(e=>{
    const s=e.source().id(), t=e.target().id();
    if(set.has(s)&&set.has(t)) e.addClass('pathway-hit');
    else e.addClass('pathway-dim');
  });
  renderPathwayPanel(pw, missing);
}

function onPathwaySelectChange(){
  const ps=document.getElementById('pathwaySelect');
  if(!ps) return;
  if(!ps.value){
    resetPathwayHighlight();
    document.getElementById('panel').innerHTML=DEFAULT_PANEL_HTML;
    return;
  }
  applyPathwayFocus(ps.value);
}

function initPathwaySelect(){
  const ps=document.getElementById('pathwaySelect');
  const list=window.MCAT_PATHWAYS;
  if(!ps||!list||!list.length) return;
  while(ps.options.length>1) ps.remove(1);
  list.forEach(p=>{
    const o=document.createElement('option');
    o.value=p.id;
    o.textContent=p.name;
    ps.appendChild(o);
  });
  ps.addEventListener('change',onPathwaySelectChange);
}
initPathwaySelect();

function mcatExportLog(type, filename, meta){
  try{
    console.log('[MCAT export]', type, filename, meta||{});
  }catch(_e){}
}

function mcatTryDownloadPng(type, filename, baseOpts){
  const scales=[4,3,2,1.5];
  const maxDataUrlChars=4500000;
  const minBlob=500;

  for(const scale of scales){
    const core=Object.assign({ bg:'#ffffff' }, baseOpts, { scale });

    let uri=null;
    try{
      uri=cy.png(Object.assign({}, core, { output:'base64uri' }));
    }catch(e){
      mcatExportLog(type, filename, { attempt:'dataUrl', scale, ok:false, error:String(e) });
    }

    const uriOk=(typeof uri==='string' && uri.indexOf('data:image/png')===0 && uri.length>=1000 && uri.length<=maxDataUrlChars);
    if(uriOk){
      mcatExportLog(type, filename, { attempt:'dataUrl', scale, ok:true, uriLen:uri.length });
      if(mcatTriggerDownloadFromDataUrl(uri, filename)) return { ok:true, scale, method:'dataUrl', uriLen:uri.length };
    }else{
      mcatExportLog(type, filename, { attempt:'dataUrl', scale, ok:false, uriLen:uri && uri.length, tooLarge:typeof uri==='string' && uri.length>maxDataUrlChars });
    }

    let blob=null;
    try{
      blob=cy.png(Object.assign({}, core, { output:'blob' }));
    }catch(e){
      mcatExportLog(type, filename, { attempt:'blob', scale, ok:false, error:String(e) });
    }

    const blobOk=(blob instanceof Blob && blob.size>=minBlob);
    mcatExportLog(type, filename, { attempt:'blob', scale, ok:blobOk, blobSize:blob && blob.size });
    if(blobOk){
      downloadBlob(blob, filename);
      return { ok:true, scale, method:'blob', blobSize:blob.size };
    }
  }

  mcatExportLog(type, filename, { ok:false, message:'all scales failed' });
  return { ok:false };
}

function clearSearchFilter(){
  cy.nodes().removeClass('search-hit search-dim');
  const inp=document.getElementById('nodeSearchInput');
  const res=document.getElementById('nodeSearchResults');
  if(inp){
    inp.value='';
    inp.setAttribute('aria-expanded','false');
  }
  if(res){
    res.hidden=true;
    res.innerHTML='';
  }
}

function clearMapHighlight(){
  clearSearchFilter();
  const ps=document.getElementById('pathwaySelect');
  if(ps) ps.value='';
  resetPathwayHighlight();
  cy.elements().removeClass('highlighted faded selected');
  document.getElementById('panel').innerHTML=DEFAULT_PANEL_HTML;
}

function applyNodeSelection(n){
  if(n.data('cat')==='bg') return;
  clearSearchFilter();
  cy.elements().removeClass('highlighted faded selected');
  n.addClass('selected');
  const connected=n.connectedEdges();
  const neighbors=n.neighborhood().nodes();
  cy.elements('node[cat!="bg"]').not(n).not(neighbors).addClass('faded');
  cy.elements('edge').not(connected).addClass('faded');
  connected.addClass('highlighted');
  neighbors.addClass('highlighted');
  showPanel(n);
}

function runNodeSearch(){
  const inp=document.getElementById('nodeSearchInput');
  const resBox=document.getElementById('nodeSearchResults');
  if(!inp||!resBox) return;
  const ps=document.getElementById('pathwaySelect');
  if(ps&&ps.value){
    ps.value='';
    resetPathwayHighlight();
  }
  const q=inp.value.trim().toLowerCase();
  cy.nodes('[cat!="bg"]').removeClass('search-hit search-dim');
  if(!q){
    resBox.hidden=true;
    resBox.innerHTML='';
    inp.setAttribute('aria-expanded','false');
    return;
  }
  const matches=[];
  cy.nodes('[cat!="bg"]').forEach(n=>{
    const id=n.id();
    const lab=(n.data('label')||'').replace(/\n/g,' ').toLowerCase();
    let desc='';
    const d=DESC[id];
    if(d&&d.desc) desc=d.desc.toLowerCase();
    const hit=lab.includes(q)||desc.includes(q);
    if(hit){
      n.addClass('search-hit');
      matches.push(n);
    }else{
      n.addClass('search-dim');
    }
  });
  matches.sort((a,b)=>{
    const la=(a.data('label')||'').split('\n')[0].toLowerCase();
    const lb=(b.data('label')||'').split('\n')[0].toLowerCase();
    return la.localeCompare(lb);
  });
  resBox.innerHTML='';
  if(!matches.length){
    const empty=document.createElement('div');
    empty.className='search-empty';
    empty.setAttribute('role','presentation');
    empty.textContent='No matching nodes';
    resBox.appendChild(empty);
  }else{
    matches.forEach(n=>{
      const id=n.id();
      const line=(n.data('label')||id).split('\n')[0];
      const b=document.createElement('button');
      b.type='button';
      b.className='search-result-item';
      b.setAttribute('data-node-id',id);
      b.setAttribute('role','option');
      b.textContent=line;
      resBox.appendChild(b);
    });
  }
  resBox.hidden=false;
  inp.setAttribute('aria-expanded','true');
}

const helpOverlay=document.getElementById('helpOverlay');
const keyOverlay=document.getElementById('keyOverlay');
function setHelpOpen(open){
  if(!helpOverlay) return;
  if(open&&keyOverlay&&keyOverlay.classList.contains('open')){
    keyOverlay.classList.remove('open');
    keyOverlay.setAttribute('aria-hidden','true');
  }
  helpOverlay.classList.toggle('open',!!open);
  helpOverlay.setAttribute('aria-hidden',open?'false':'true');
}
function setKeyOpen(open){
  if(!keyOverlay) return;
  if(open&&helpOverlay&&helpOverlay.classList.contains('open')){
    helpOverlay.classList.remove('open');
    helpOverlay.setAttribute('aria-hidden','true');
  }
  keyOverlay.classList.toggle('open',!!open);
  keyOverlay.setAttribute('aria-hidden',open?'false':'true');
}

function buildKeyPanel(){
  const mount=document.getElementById('keyPanelMount');
  const data=window.MCAT_KEY_LEGEND;
  if(!mount) return;
  mount.textContent='';
  if(!data){
    const p=document.createElement('p');
    p.className='key-placeholder';
    p.textContent='Key data could not be loaded.';
    mount.appendChild(p);
    return;
  }
  const catSec=document.createElement('section');
  catSec.className='key-section';
  const catH=document.createElement('h3');
  catH.textContent='Category colors';
  catSec.appendChild(catH);
  const catUl=document.createElement('ul');
  catUl.className='key-cat-list';
  (data.categories||[]).forEach(c=>{
    const li=document.createElement('li');
    li.className='key-cat-row';
    const sw=document.createElement('span');
    sw.className='key-swatch';
    const col=c.color||'#999';
    sw.style.backgroundColor=(document.body && document.body.classList && document.body.classList.contains('map-genchem'))
      ? 'rgba(248,250,252,.96)' : 'rgba(255,253,248,.92)';
    sw.style.borderColor=col;
    const txt=document.createElement('div');
    txt.className='key-cat-text';
    const strong=document.createElement('strong');
    strong.textContent=c.name;
    txt.appendChild(strong);
    if(c.description){
      const desc=document.createElement('span');
      desc.className='key-cat-desc';
      desc.textContent=' — '+c.description;
      txt.appendChild(desc);
    }
    li.appendChild(sw);
    li.appendChild(txt);
    catUl.appendChild(li);
  });
  catSec.appendChild(catUl);
  mount.appendChild(catSec);

  const edgeSec=document.createElement('section');
  edgeSec.className='key-section';
  const edgeH=document.createElement('h3');
  edgeH.textContent='Edges & arrows';
  edgeSec.appendChild(edgeH);
  const edgeUl=document.createElement('ul');
  edgeUl.className='key-edge-list';
  (data.edges||[]).forEach(ed=>{
    const li=document.createElement('li');
    li.className='key-edge-row';
    const prev=document.createElement('div');
    prev.className='key-edge-preview';
    const line=document.createElement('div');
    line.className='key-edge-line';
    if(ed.preview&&ed.preview.borderTop) line.style.borderTop=ed.preview.borderTop;
    prev.appendChild(line);
    const body=document.createElement('div');
    body.className='key-edge-body';
    const strong=document.createElement('strong');
    strong.textContent=ed.accentSymbol?ed.label+' ('+ed.accentSymbol+')':ed.label;
    body.appendChild(strong);
    const sum=document.createElement('div');
    sum.textContent=ed.summary||'';
    body.appendChild(sum);
    li.appendChild(prev);
    li.appendChild(body);
    edgeUl.appendChild(li);
  });
  edgeSec.appendChild(edgeUl);
  mount.appendChild(edgeSec);

  function addPlaceholder(title,text){
    const sec=document.createElement('section');
    sec.className='key-section';
    const h=document.createElement('h3');
    h.textContent=title;
    sec.appendChild(h);
    const p=document.createElement('p');
    p.className='key-placeholder';
    p.textContent=text;
    sec.appendChild(p);
    mount.appendChild(sec);
  }
  if(data.abbreviationsPlaceholder) addPlaceholder('Abbreviations',data.abbreviationsPlaceholder);
  if(data.priorityLabelsPlaceholder) addPlaceholder('Priority labels',data.priorityLabelsPlaceholder);
  if(data.shapesPlaceholder) addPlaceholder('Shapes & silhouettes',data.shapesPlaceholder);
}
buildKeyPanel();

function downloadBlob(blob, filename){
  if(!blob||!(blob instanceof Blob)||blob.size<400){
    console.error('MCAT export: invalid or empty blob — download skipped', filename, blob&&blob.size);
    return;
  }
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1500);
}

function mcatTriggerDownloadFromDataUrl(dataUrl, filename){
  if(typeof dataUrl!=='string'||dataUrl.indexOf('data:image/png')!==0||dataUrl.length<1000){
    console.error('MCAT export: invalid PNG data URL — download skipped', filename, dataUrl&&dataUrl.length);
    return false;
  }
  const a=document.createElement('a');
  a.href=dataUrl;
  a.download=filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  return true;
}

function buildQuadrantTilesFromFullBb(full){
  const x1=full.x1,y1=full.y1,x2=full.x2,y2=full.y2,w=full.w,h=full.h;
  const midX=x1+w/2,midY=y1+h/2;
  const ox=(w/2)*0.08,oy=(h/2)*0.08;
  return{
    1:{bb:{x1,y1,x2:midX+ox,y2:midY+oy},name:'top-left'},
    2:{bb:{x1:midX-ox,y1,x2,y2:midY+oy},name:'top-right'},
    3:{bb:{x1,y1:midY-oy,x2:midX+ox,y2},name:'bottom-left'},
    4:{bb:{x1:midX-ox,y1:midY-oy,x2,y2},name:'bottom-right'}
  };
}

function exportStudyTile(tileIndex){
  const full=cy.elements().boundingBox({includeLabels:true});
  const tiles=buildQuadrantTilesFromFullBb(full);
  const t=tiles[tileIndex];
  if(!t) return;
  const z0=cy.zoom();
  const p0={x:cy.pan().x,y:cy.pan().y};
  try{
    cy.fit(t.bb,4);
    const mapSlug=IS_GENCHEM?'mcat-genchem':'mcat-metabolism';
    const fname=`${mapSlug}-tile-${tileIndex}-${t.name}.png`;
    const res=mcatTryDownloadPng('study-tile-'+tileIndex, fname, { full:false });
    if(!res.ok){
      alert('Could not export '+fname+' at any scale. Try another tile.');
    }
  }finally{
    cy.viewport({zoom:z0,pan:p0});
  }
}

const tileExportBar=document.getElementById('tileExportBar');
const exportTilesToggle=document.getElementById('exportTilesToggle');
function setTileExportOpen(open){
  if(!tileExportBar||!exportTilesToggle) return;
  tileExportBar.hidden=!open;
  exportTilesToggle.setAttribute('aria-expanded',open?'true':'false');
}
function toggleTileExport(){
  if(!tileExportBar) return;
  setTileExportOpen(tileExportBar.hidden);
}

function isTypingTarget(el){
  if(!el||el.nodeType!==1) return false;
  const tag=el.tagName;
  if(tag==='TEXTAREA'||tag==='SELECT') return true;
  if(tag==='INPUT'){
    const ty=(el.type||'').toLowerCase();
    if(ty==='button'||ty==='submit'||ty==='reset'||ty==='checkbox'||ty==='radio'||ty==='file') return false;
    return true;
  }
  if(el.isContentEditable) return true;
  return false;
}

// Node info panel
function showPanel(node){
  const id=node.id(), d=DESC[id]||{cat:node.data('cat'),desc: IS_GENCHEM ? 'MCAT General Chemistry concept node.' : 'Biochemical node in the MCAT metabolism map.'};
  const panel=document.getElementById('panel');
  const catColor = CAT_COLOR[node.data('cat')]||'#64748b';
  let connsHtml = '';
  const connected = node.connectedEdges();
  const out=[], inE=[];
  connected.forEach(e=>{
    const isOut = e.data('source')===id;
    const other = isOut ? cy.$('#'+e.data('target')) : cy.$('#'+e.data('source'));
    const oLabel = other.data('label')||other.id();
    const shortLabel = oLabel.split('\n')[0];
    const t=e.data('etype'), lbl=e.data('label')||'';
    const ps=mcatPanelEdgeStyle(t);
    const cls=ps.cls, sym=ps.sym;
    if(isOut) out.push(`<div class="ci ${cls}">${sym} ${shortLabel}${lbl?' ('+lbl+')':''}</div>`);
    else inE.push(`<div class="ci ${cls}">${sym} ${shortLabel}${lbl?' ('+lbl+')':''}</div>`);
  });
  panel.innerHTML = `
    <h2>Node Info</h2>
    <div class="pn" style="color:${catColor}">${node.data('label').replace(/\n/g,'<br>')}</div>
    <div class="pc" style="color:${catColor}">${d.cat||node.data('cat')}</div>
    <div class="pd">${d.desc}</div>
    ${out.length?`<div class="pct">OUTPUTS</div>${out.join('')}`:''}
    ${inE.length?`<div class="pct">INPUTS</div>${inE.join('')}`:''}
  `;
}

cy.on('tap','node',function(e){
  applyNodeSelection(e.target);
});

cy.on('tap',function(e){
  if(e.target===cy){
    clearMapHighlight();
  }
});

// Filter buttons
const catVisible = {};
document.querySelectorAll('.btn[data-cat]').forEach(btn=>{
  const cat=btn.dataset.cat;
  catVisible[cat]=true;
  btn.addEventListener('click',()=>{
    catVisible[cat]=!catVisible[cat];
    btn.classList.toggle('on',catVisible[cat]);
    cy.nodes(`[cat="${cat}"]`).style('display',catVisible[cat]?'element':'none');
    cy.edges().forEach(e=>{
      const sc=cy.$('#'+e.data('source')).data('cat');
      const tc=cy.$('#'+e.data('target')).data('cat');
      const show=(catVisible[sc]!==false)&&(catVisible[tc]!==false);
      e.style('display',show?'element':'none');
    });
  });
});

document.querySelectorAll('.btn[data-action]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const act=btn.dataset.action;
    if(act==='export-tiles-panel'){
      toggleTileExport();
      return;
    }
    if(act==='export-tiles-close'){
      setTileExportOpen(false);
      return;
    }
    if(act==='fit') cy.fit(undefined,40);
    if(act==='clear') clearMapHighlight();
    if(act==='help') setHelpOpen(true);
    if(act==='key') setKeyOpen(true);
  });
});

document.querySelectorAll('[data-tile-export]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const i=parseInt(btn.getAttribute('data-tile-export'),10);
    if(i>=1&&i<=4) exportStudyTile(i);
  });
});

const helpClose=document.getElementById('helpClose');
if(helpClose) helpClose.addEventListener('click',()=>setHelpOpen(false));
if(helpOverlay){
  helpOverlay.addEventListener('click',e=>{
    if(e.target===helpOverlay) setHelpOpen(false);
  });
}
const keyClose=document.getElementById('keyClose');
if(keyClose) keyClose.addEventListener('click',()=>setKeyOpen(false));
if(keyOverlay){
  keyOverlay.addEventListener('click',e=>{
    if(e.target===keyOverlay) setKeyOpen(false);
  });
}

const PAN_STEP=56;
document.addEventListener('keydown',e=>{
  const helpOpen=helpOverlay&&helpOverlay.classList.contains('open');
  if(helpOpen){
    if(e.key==='Escape'){
      e.preventDefault();
      setHelpOpen(false);
    }
    return;
  }
  const keyOpen=keyOverlay&&keyOverlay.classList.contains('open');
  if(keyOpen){
    if(e.key==='Escape'){
      e.preventDefault();
      setKeyOpen(false);
    }
    return;
  }
  if(isTypingTarget(e.target)) return;
  const rp={x:cy.width()/2,y:cy.height()/2};
  if(e.key==='ArrowLeft'){ e.preventDefault(); cy.panBy({ x:-PAN_STEP,y:0 }); return; }
  if(e.key==='ArrowRight'){ e.preventDefault(); cy.panBy({ x:PAN_STEP,y:0 }); return; }
  if(e.key==='ArrowUp'){ e.preventDefault(); cy.panBy({ x:0,y:-PAN_STEP }); return; }
  if(e.key==='ArrowDown'){ e.preventDefault(); cy.panBy({ x:0,y:PAN_STEP }); return; }
  if(e.key==='+'||e.key==='='&&e.shiftKey||e.code==='NumpadAdd'){
    e.preventDefault();
    cy.zoom({level:cy.zoom()*1.25,renderedPosition:rp});
    return;
  }
  if(e.key==='-'||e.code==='NumpadSubtract'){
    e.preventDefault();
    cy.zoom({level:cy.zoom()/1.25,renderedPosition:rp});
    return;
  }
  if(e.key==='0'&&(e.code==='Digit0'||e.code==='Numpad0')){
    e.preventDefault();
    cy.fit(undefined,40);
    return;
  }
  if(e.key==='Escape'){
    e.preventDefault();
    clearMapHighlight();
  }
});

document.getElementById('zi').addEventListener('click',()=>cy.zoom({level:cy.zoom()*1.25,renderedPosition:{x:cy.width()/2,y:cy.height()/2}}));
document.getElementById('zo').addEventListener('click',()=>cy.zoom({level:cy.zoom()/1.25,renderedPosition:{x:cy.width()/2,y:cy.height()/2}}));

const nodeSearchInput=document.getElementById('nodeSearchInput');
const nodeSearchClear=document.getElementById('nodeSearchClear');
const nodeSearchResults=document.getElementById('nodeSearchResults');
if(nodeSearchInput){
  nodeSearchInput.addEventListener('input',runNodeSearch);
  nodeSearchInput.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      e.preventDefault();
      e.stopPropagation();
      clearSearchFilter();
    }
  });
}
if(nodeSearchClear) nodeSearchClear.addEventListener('click',clearSearchFilter);
if(nodeSearchResults){
  nodeSearchResults.addEventListener('click',e=>{
    const btn=e.target.closest('.search-result-item[data-node-id]');
    if(!btn) return;
    const id=btn.getAttribute('data-node-id');
    const n=cy.$('#'+id);
    if(!n.length) return;
    applyNodeSelection(n);
    cy.fit(n,56);
  });
}
