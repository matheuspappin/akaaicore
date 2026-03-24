;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e587a5f0-f2eb-5f23-19db-a113e0db93e4")}catch(e){}}();
module.exports=[725818,a=>{"use strict";var b=a.i(68047),c=a.i(468195),d=a.i(332714),e=a.i(541487),f=a.i(961644),g=a.i(299574),h=a.i(770854),i=a.i(884980),j=a.i(507085),k=a.i(469617),l=a.i(1556),m=a.i(319113),n=a.i(103803),o=a.i(32267),p=a.i(584435),q=a.i(369964),r=a.i(553581),s=a.i(676929),t=a.i(285807),u=a.i(50286),v=a.i(206966),w=a.i(828894),x=a.i(74192),y=a.i(245526);let z={draft:{label:"Rascunho",color:"text-slate-400",bg:"bg-slate-400/10",icon:s.Clock},review:{label:"Em Revisão",color:"text-amber-400",bg:"bg-amber-400/10",icon:r.AlertTriangle},approved:{label:"Aprovado",color:"text-blue-400",bg:"bg-blue-400/10",icon:q.CheckCircle2},issued:{label:"Emitido",color:"text-emerald-400",bg:"bg-emerald-400/10",icon:q.CheckCircle2}},A={car:"Laudo CAR",desmatamento:"Desmatamento",ndvi:"NDVI / Vegetação",licenciamento:"Licenciamento Ambiental",impacto_ambiental:"Impacto Ambiental",supressao:"Supressão Vegetal"};function B(a,b){let c={car:"Laudo CAR — Cadastro Ambiental Rural",desmatamento:"Laudo de Desmatamento",ndvi:"Laudo NDVI / Cobertura Vegetal",licenciamento:"Laudo de Licenciamento Ambiental",impacto_ambiental:"Laudo de Impacto Ambiental",supressao:"Laudo de Supressão Vegetal"},{bg:d,color:e}={draft:{bg:"#f1f5f9",color:"#475569"},review:{bg:"#fef3c7",color:"#92400e"},approved:{bg:"#dbeafe",color:"#1e40af"},issued:{bg:"#d1fae5",color:"#065f46"}}[a.status]||{bg:"#f1f5f9",color:"#475569"},f=b.name||"AgroFlowAI",g=`${a.code}-${new Date().getFullYear()}`,h=[];b.address&&h.push(b.address),b.phone&&h.push(`Tel: ${b.phone}`),b.email&&h.push(b.email),b.cnpj&&h.push(`CNPJ: ${b.cnpj}`);let i=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>${a.code} — ${a.title}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; color: #1a1a1a; background: #fff; font-size: 11pt; line-height: 1.6; }
    .page { max-width: 820px; margin: 0 auto; padding: 48px 56px; }
    /* Header */
    .header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 20px; border-bottom: 3px solid #059669; margin-bottom: 30px; }
    .logo-area h1 { font-size: 20pt; font-weight: 900; color: #059669; letter-spacing: -0.5px; }
    .logo-area .tagline { font-size: 8.5pt; color: #64748b; margin-top: 3px; }
    .logo-area .company-info { font-size: 7.5pt; color: #94a3b8; margin-top: 6px; line-height: 1.5; }
    .doc-meta { text-align: right; }
    .doc-meta .code { font-size: 13pt; font-weight: 900; color: #059669; }
    .doc-meta .protocol { font-size: 8pt; color: #94a3b8; margin-top: 2px; }
    .doc-meta .date { font-size: 8.5pt; color: #64748b; margin-top: 4px; }
    .status-pill { display: inline-block; background: ${d}; color: ${e}; padding: 3px 11px; border-radius: 20px; font-size: 8pt; font-weight: 700; margin-top: 6px; border: 1px solid ${e}40; }
    /* Title block */
    .title-block { background: #f0fdf4; border-left: 5px solid #059669; padding: 18px 22px; margin-bottom: 28px; border-radius: 0 10px 10px 0; }
    .title-block .doc-type { font-size: 8pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #059669; margin-bottom: 5px; }
    .title-block h2 { font-size: 16pt; font-weight: 900; color: #0f172a; line-height: 1.3; }
    /* Sections */
    .section { margin-bottom: 26px; page-break-inside: avoid; }
    .section-title { font-size: 8.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 7px; margin-bottom: 14px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; }
    .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
    .field { margin-bottom: 4px; }
    .field label { font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; display: block; margin-bottom: 2px; }
    .field span { font-size: 10.5pt; color: #1e293b; font-weight: 500; }
    .field span.accent { color: #059669; font-weight: 700; }
    /* Description box */
    .desc-box { background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; font-size: 10pt; color: #374151; line-height: 1.7; min-height: 60px; }
    /* Declaration */
    .declaration { font-size: 9.5pt; color: #374151; line-height: 1.8; text-align: justify; }
    /* Legal note */
    .legal-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 14px 16px; font-size: 8.5pt; color: #78350f; line-height: 1.6; margin-top: 8px; }
    .legal-box strong { color: #92400e; }
    /* Signatures */
    .signature-area { margin-top: 52px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; page-break-inside: avoid; }
    .sig-box { text-align: center; }
    .sig-line { border-top: 1.5px solid #334155; padding-top: 8px; margin-top: 48px; }
    .sig-name { font-weight: 700; font-size: 10pt; color: #0f172a; }
    .sig-role { font-size: 8.5pt; color: #64748b; margin-top: 2px; }
    .sig-crea { font-size: 8pt; color: #059669; font-weight: 600; margin-top: 2px; }
    /* Footer */
    .footer { margin-top: 36px; padding-top: 12px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; font-size: 7.5pt; color: #94a3b8; }
    .footer .watermark { font-size: 7pt; color: #cbd5e1; }
    /* Print */
    @media print {
      body { font-size: 10pt; }
      .page { padding: 0; max-width: 100%; }
      @page { margin: 18mm 18mm 14mm 18mm; size: A4; }
      .section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
<div class="page">

  <div class="header">
    <div class="logo-area">
      <h1>${f}</h1>
      <div class="tagline">Consultoria de Compliance Ambiental e Engenharia</div>
      ${h.length?`<div class="company-info">${h.join(" &nbsp;·&nbsp; ")}</div>`:""}
    </div>
    <div class="doc-meta">
      <div class="code">${a.code}</div>
      <div class="protocol">Protocolo: ${g}</div>
      <div class="date">Data de emiss\xe3o: ${a.date}</div>
      <div class="status-pill">${{draft:"Rascunho",review:"Em Revisão",approved:"Aprovado",issued:"Emitido"}[a.status]||a.status}</div>
    </div>
  </div>

  <div class="title-block">
    <div class="doc-type">${c[a.type]||a.type}</div>
    <h2>${a.title}</h2>
  </div>

  <div class="section">
    <div class="section-title">1. Identifica\xe7\xe3o do Cliente e Propriedade</div>
    <div class="grid-2">
      <div class="field"><label>Cliente / Propriet\xe1rio Rural</label><span>${a.client||"—"}</span></div>
      <div class="field"><label>Propriedade / Im\xf3vel Rural</label><span>${a.property||"—"}</span></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">2. Responsabilidade T\xe9cnica</div>
    <div class="grid-3">
      <div class="field"><label>Engenheiro Respons\xe1vel</label><span>${a.engineer||"—"}</span></div>
      <div class="field"><label>N\xfamero ART</label><span class="accent">${a.art||"—"}</span></div>
      ${b.crea_responsible?`<div class="field"><label>CREA Respons\xe1vel</label><span>${b.crea_responsible}</span></div>`:"<div></div>"}
    </div>
  </div>

  <div class="section">
    <div class="section-title">3. Objeto e Descri\xe7\xe3o do Laudo</div>
    <div class="desc-box">
      ${a.description?a.description.replace(/\n/g,"<br>"):`Este laudo t\xe9cnico foi elaborado em atendimento \xe0s exig\xeancias da legisla\xe7\xe3o ambiental vigente,
           especificamente quanto ao ${c[a.type]||"tipo de serviço solicitado"} e normas complementares
           aplic\xe1veis. O profissional respons\xe1vel declara que as informa\xe7\xf5es contidas neste documento s\xe3o ver\xeddicas
           e baseadas em an\xe1lise t\xe9cnica.`}
    </div>
  </div>

  <div class="section">
    <div class="section-title">4. Declara\xe7\xe3o de Responsabilidade</div>
    <p class="declaration">
      O profissional abaixo identificado, detentor do presente laudo t\xe9cnico, declara para os devidos fins que
      as informa\xe7\xf5es, dados e conclus\xf5es aqui apresentadas s\xe3o fruto de an\xe1lise t\xe9cnica especializada, baseada em
      metodologias e normas vigentes. Este documento \xe9 v\xe1lido exclusivamente ap\xf3s assinatura do respons\xe1vel t\xe9cnico
      e registro da Anota\xe7\xe3o de Responsabilidade T\xe9cnica (ART) junto ao Conselho Regional de Engenharia e Agronomia
      (CREA) competente, nos termos da Lei Federal n.\xba 5.194/1966 e Resolu\xe7\xe3o CONFEA n.\xba 1.025/2009.
    </p>
    <div class="legal-box" style="margin-top:12px;">
      <strong>Base Legal:</strong> Lei n.\xba 12.651/2012 (C\xf3digo Florestal Brasileiro) \xb7 Instru\xe7\xe3o Normativa MMA
      n.\xba 02/2014 \xb7 Decreto n.\xba 7.830/2012 (SICAR) \xb7 Resolu\xe7\xe3o CONAMA vigente aplic\xe1vel ao tipo de laudo.
      Documento gerado eletronicamente pelo sistema AgroFlowAI — os dados e responsabilidades s\xe3o do profissional
      emitente.
    </div>
  </div>

  <div class="signature-area">
    <div class="sig-box">
      <div class="sig-line">
        <div class="sig-name">${a.engineer||"Engenheiro Responsável"}</div>
        <div class="sig-role">Engenheiro Ambiental / Agr\xf4nomo</div>
        ${a.art?`<div class="sig-crea">ART N\xba ${a.art}</div>`:""}
      </div>
    </div>
    <div class="sig-box">
      <div class="sig-line">
        <div class="sig-name">${b.responsible_name||f}</div>
        <div class="sig-role">Respons\xe1vel pela Consultoria</div>
        ${b.cnpj?`<div class="sig-crea">CNPJ: ${b.cnpj}</div>`:""}
      </div>
    </div>
  </div>

  <div class="footer">
    <span>${a.code} &nbsp;\xb7&nbsp; Gerado em ${new Date().toLocaleString("pt-BR")}</span>
    <span class="watermark">AgroFlowAI — Sistema de Gest\xe3o Ambiental &amp; Compliance</span>
  </div>

</div>
<script>window.onload = () => { window.print(); }</script>
</body>
</html>`,j=window.open("","_blank");j&&(j.document.write(i),j.document.close())}function C(){let[a,q]=(0,c.useState)([]),[r,s]=(0,c.useState)(!0),[C,D]=(0,c.useState)(""),[E,F]=(0,c.useState)("all"),[G,H]=(0,c.useState)(!1),[I,J]=(0,c.useState)(!1),[K,L]=(0,c.useState)(null),[M,N]=(0,c.useState)(null),[O,P]=(0,c.useState)({name:""}),{toast:Q}=(0,y.useToast)(),[R,S]=(0,c.useState)({title:"",client:"",property:"",type:"car",engineer:"",art:""}),T=()=>{try{return JSON.parse(localStorage.getItem("workflow_user")||"{}").studioId||""}catch{return""}};(0,c.useEffect)(()=>{let a=T();a?(fetch(`/api/agroflowai/configuracoes?studioId=${a}`).then(a=>a.ok?a.json():null).then(a=>{a&&P({name:a.name||"",cnpj:a.cnpj,phone:a.phone,address:a.address,crea_responsible:a.crea_responsible,responsible_name:a.responsible_name,email:a.email})}).catch(()=>{try{let a=JSON.parse(localStorage.getItem("workflow_user")||"{}");P({name:a.studioName||a.studio_name||""})}catch{}}),fetch(`/api/agroflowai/laudos?studioId=${a}`).then(a=>a.json()).then(a=>q(Array.isArray(a)?a:[])).catch(()=>q([])).finally(()=>s(!1))):s(!1)},[]);let U=async a=>{let b={draft:"review",review:"approved",approved:"issued",issued:null}[a.status];if(b){L(a.id),q(c=>c.map(c=>c.id===a.id?{...c,status:b}:c));try{let c=T();if(!(await fetch(`/api/agroflowai/laudos/${a.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({studioId:c,status:b})})).ok)throw Error();Q({title:`Laudo → ${{review:"Em Revisão",approved:"Aprovado",issued:"Emitido"}[b]||b}`})}catch{q(b=>b.map(b=>b.id===a.id?{...b,status:a.status}:b)),Q({title:"Erro ao atualizar laudo",variant:"destructive"})}finally{L(null)}}},V=async a=>{if(a.preventDefault(),!R.title)return void Q({title:"Informe o título do laudo",variant:"destructive"});J(!0);try{let a=T(),b=await fetch("/api/agroflowai/laudos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studioId:a,...R,type:R.type})}),c=await b.json();if(!b.ok)throw Error(c.error||"Erro ao criar laudo");q(a=>[c,...a]),Q({title:"Laudo criado!",description:`${c.code} adicionado como rascunho`}),H(!1),S({title:"",client:"",property:"",type:"car",engineer:"",art:""})}catch(a){Q({title:"Erro ao criar laudo",description:a.message,variant:"destructive"})}finally{J(!1)}},W=a.filter(a=>{let b=a.title.toLowerCase().includes(C.toLowerCase())||a.client.toLowerCase().includes(C.toLowerCase())||a.code.toLowerCase().includes(C.toLowerCase()),c="all"===E||a.status===E;return b&&c}),X={all:a.length,draft:a.filter(a=>"draft"===a.status).length,review:a.filter(a=>"review"===a.status).length,approved:a.filter(a=>"approved"===a.status).length,issued:a.filter(a=>"issued"===a.status).length};return(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-black text-white tracking-tight",children:"Laudos Técnicos"}),(0,b.jsx)("p",{className:"text-slate-400 mt-1",children:"Laudos ambientais, CAR, licenciamentos e regularizações"})]}),(0,b.jsxs)(e.Button,{onClick:()=>H(!0),className:"bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg",children:[(0,b.jsx)(i.Plus,{className:"w-4 h-4 mr-2"}),"Novo Laudo"]})]}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:[{key:"all",label:`Todos (${X.all})`},{key:"draft",label:`Rascunho (${X.draft})`},{key:"review",label:`Revis\xe3o (${X.review})`},{key:"approved",label:`Aprovados (${X.approved})`},{key:"issued",label:`Emitidos (${X.issued})`}].map(a=>(0,b.jsx)("button",{onClick:()=>F(a.key),className:(0,x.cn)("px-4 py-2 rounded-xl text-sm font-bold transition-all",E===a.key?"bg-violet-600 text-white":"bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"),children:a.label},a.key))}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(j.Search,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"}),(0,b.jsx)(f.Input,{placeholder:"Buscar laudos...",value:C,onChange:a=>D(a.target.value),className:"pl-10 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 rounded-xl h-11"})]}),G&&(0,b.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:(0,b.jsxs)(d.Card,{className:"w-full max-w-lg bg-slate-900 border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto",children:[(0,b.jsxs)(d.CardHeader,{className:"flex flex-row items-center justify-between",children:[(0,b.jsxs)(d.CardTitle,{className:"text-white flex items-center gap-2",children:[(0,b.jsx)(h.FileText,{className:"w-5 h-5 text-violet-400"}),"Novo Laudo Técnico"]}),(0,b.jsx)("button",{onClick:()=>H(!1),className:"text-slate-500 hover:text-white",children:(0,b.jsx)(o.X,{className:"w-5 h-5"})})]}),(0,b.jsx)(d.CardContent,{children:(0,b.jsxs)("form",{onSubmit:V,className:"space-y-4",children:[(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest",children:"Título do Laudo *"}),(0,b.jsx)(f.Input,{value:R.title,onChange:a=>S({...R,title:a.target.value}),placeholder:"Ex: Laudo de Regularização CAR...",required:!0,className:"bg-slate-800 border-slate-700 text-white rounded-xl"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest",children:"Cliente *"}),(0,b.jsx)(f.Input,{value:R.client,onChange:a=>S({...R,client:a.target.value}),placeholder:"Nome do cliente",required:!0,className:"bg-slate-800 border-slate-700 text-white rounded-xl"})]}),(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest",children:"Propriedade / Área"}),(0,b.jsx)(f.Input,{value:R.property,onChange:a=>S({...R,property:a.target.value}),placeholder:"Ex: Fazenda, ha...",className:"bg-slate-800 border-slate-700 text-white rounded-xl"})]})]}),(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest",children:"Tipo de Laudo"}),(0,b.jsx)("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(A).map(([a,c])=>(0,b.jsx)("button",{type:"button",onClick:()=>S({...R,type:a}),className:(0,x.cn)("py-2.5 px-3 rounded-xl text-xs font-bold text-left border transition-all",R.type===a?"border-violet-500 bg-violet-600/20 text-violet-400":"border-slate-700 bg-slate-800 text-slate-500 hover:border-slate-600"),children:c},a))})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest",children:"Engenheiro Responsável"}),(0,b.jsx)(f.Input,{value:R.engineer,onChange:a=>S({...R,engineer:a.target.value}),placeholder:"Nome do engenheiro",className:"bg-slate-800 border-slate-700 text-white rounded-xl"})]}),(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest",children:"Nº ART (opcional)"}),(0,b.jsx)(f.Input,{value:R.art,onChange:a=>S({...R,art:a.target.value}),placeholder:"ART-2026-...",className:"bg-slate-800 border-slate-700 text-white rounded-xl"})]})]}),(0,b.jsxs)("div",{className:"flex gap-3 pt-2",children:[(0,b.jsx)(e.Button,{type:"button",variant:"outline",onClick:()=>H(!1),className:"flex-1 border-slate-700 text-slate-400",children:"Cancelar"}),(0,b.jsx)(e.Button,{type:"submit",disabled:I,className:"flex-1 bg-violet-600 hover:bg-violet-700 text-white font-bold",children:I?(0,b.jsx)(p.Loader2,{className:"w-4 h-4 animate-spin"}):"Criar Laudo"})]})]})})]})}),0===W.length?(0,b.jsx)(d.Card,{className:"bg-slate-900/50 border-slate-800",children:(0,b.jsxs)(d.CardContent,{className:"flex flex-col items-center justify-center py-16 text-center",children:[(0,b.jsx)(h.FileText,{className:"w-16 h-16 text-slate-700 mb-4"}),(0,b.jsx)("p",{className:"text-slate-400 font-semibold text-lg",children:"Nenhum laudo encontrado"})]})}):(0,b.jsx)("div",{className:"space-y-3",children:W.map(a=>{let c=z[a.status],f=c.icon;return(0,b.jsx)(d.Card,{className:"bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors",children:(0,b.jsxs)(d.CardContent,{className:"p-5",children:[(0,b.jsxs)("div",{className:"flex items-start gap-4",children:[(0,b.jsx)("div",{className:"w-11 h-11 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0 mt-0.5",children:(0,b.jsx)(h.FileText,{className:"w-5 h-5 text-violet-400"})}),(0,b.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2 mb-1.5 flex-wrap",children:[(0,b.jsx)("span",{className:"text-xs font-black text-slate-500 font-mono",children:a.code}),(0,b.jsxs)(g.Badge,{className:(0,x.cn)("text-[10px] font-bold border-0",c.color,c.bg),children:[(0,b.jsx)(f,{className:"w-2.5 h-2.5 mr-1"}),c.label]}),(0,b.jsx)(g.Badge,{className:"text-[10px] font-bold border-0 text-teal-400 bg-teal-400/10",children:A[a.type]})]}),(0,b.jsx)("p",{className:"font-bold text-white mb-1",children:a.title}),(0,b.jsxs)("div",{className:"flex flex-wrap gap-3 text-xs text-slate-500",children:[(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(m.MapPin,{className:"w-3 h-3"}),a.client]}),a.property&&(0,b.jsx)("span",{children:a.property}),(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(n.User,{className:"w-3 h-3"}),a.engineer]}),(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(l.Calendar,{className:"w-3 h-3"}),a.date]}),a.art&&(0,b.jsx)("span",{className:"text-emerald-400 font-bold",children:a.art})]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-1.5 flex-shrink-0",children:["issued"!==a.status&&(K===a.id?(0,b.jsx)(p.Loader2,{className:"w-4 h-4 animate-spin text-slate-400"}):(0,b.jsxs)(e.Button,{size:"sm",onClick:()=>U(a),className:"h-7 px-2 text-xs bg-violet-600/20 hover:bg-violet-600/40 text-violet-400 border border-violet-500/20 rounded-lg font-bold",children:[(0,b.jsx)(v.ArrowRight,{className:"w-3 h-3 mr-1"}),"draft"===a.status?"Revisar":"review"===a.status?"Aprovar":"Emitir"]})),(0,b.jsx)(e.Button,{size:"sm",variant:"ghost",onClick:()=>B(a,O),className:"h-8 w-8 p-0 text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/10",title:"Gerar PDF do laudo",children:(0,b.jsx)(w.Printer,{className:"w-4 h-4"})}),(0,b.jsx)("button",{onClick:()=>N(M===a.id?null:a.id),className:"p-1.5 text-slate-500 hover:text-white transition-colors",children:M===a.id?(0,b.jsx)(u.ChevronUp,{className:"w-4 h-4"}):(0,b.jsx)(t.ChevronDown,{className:"w-4 h-4"})})]})]}),M===a.id&&(0,b.jsxs)("div",{className:"mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400",children:[(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-bold text-slate-500 uppercase tracking-wider block mb-1",children:"Cliente"}),(0,b.jsx)("span",{className:"text-slate-300",children:a.client||"—"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-bold text-slate-500 uppercase tracking-wider block mb-1",children:"Propriedade"}),(0,b.jsx)("span",{className:"text-slate-300",children:a.property||"—"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-bold text-slate-500 uppercase tracking-wider block mb-1",children:"Engenheiro"}),(0,b.jsx)("span",{className:"text-slate-300",children:a.engineer||"—"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-bold text-slate-500 uppercase tracking-wider block mb-1",children:"ART"}),(0,b.jsx)("span",{className:"text-emerald-400 font-bold",children:a.art||"—"})]})]}),(0,b.jsxs)(e.Button,{size:"sm",onClick:()=>B(a,O),className:"w-full mt-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/20 rounded-xl font-bold",children:[(0,b.jsx)(k.Download,{className:"w-3.5 h-3.5 mr-2"})," Gerar PDF do Laudo Técnico"]})]})]})},a.id)})})]})}a.s(["default",()=>C])}];

//# debugId=e587a5f0-f2eb-5f23-19db-a113e0db93e4
//# sourceMappingURL=apps_web_app_solutions_agroflowai_dashboard_laudos_page_tsx_ff2c7982._.js.map