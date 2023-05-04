import{r as u,j as i,aC as oe,f as U,b2 as ae,aD as ie,ct as ce,a3 as Y,a5 as le,a8 as ue,aO as de,h as _,Y as me,cu as pe,af as fe,cv as he,cw as ye,cx as ge,aS as Te,bj as Ie,a9 as H,F as O,ax as $,S as Le,bP as be,l as x,B as j,az as Se,N as ve,q as Re,cy as Pe,e as N,Z as _e,u as Ce,cz as Ee,bc as F,cA as xe,cB as De,a0 as je,cC as we,cD as Oe,b8 as k,M as Fe,cE as Ae,cm as Me,cn as $e,ba as Ne,cF as ke,cG as qe,bR as q,bT as Be,cH as We,bK as Ue,bd as Ye,br as He,cI as ze,cJ as Ge,cK as Ke,bL as Ve}from"./sanity-4ac42c17.js";import{useDeskTool as Xe,useDeskToolSetting as B,Delay as Qe}from"./index-56aa5cc3-7146f496.js";import{P as Je}from"./PaneItem-9d0095a8-38429dab.js";import"./json-inspector-0acd503d.js";const W=100,A=2e3,z={by:[{field:"_updatedAt",direction:"desc"}]},Ze={};function et(e,s){return e._id?H(e._id):"item-".concat(s)}function tt(e){return we(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function st(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const n=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const r=n.slice(1),c=s[r];return typeof c=="string"?c:null}return n}function rt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(s=>[at(s),(s.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function at(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function it(e,s){const t=e.by.map(n=>{if(n.mapWith)return n;const r=ct(s,n.field);return r?ut(r,"datetime")?{...n,mapWith:"dateTime"}:r.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return t.every((n,r)=>n===e.by[r])?e:{...e,by:t}}function ct(e,s){const t=fe(s);let n=e;for(const r of t){if(!n)return;if(typeof r=="string"){n=lt(n,r);continue}if(!(he(r)||ye(r))||n.jsonType!=="array")return;const[o,a]=n.of||[];if(a||!o)return;if(!ge(o)){n=o;continue}const[m,h]=o.to||[];if(h||!m)return;n=m}return n}function lt(e,s){if(!("fields"in e))return;const t=e.fields.find(n=>n.name===s);return t?t.type:void 0}function ut(e,s){let t=e.type;for(;t;){if(t.name===s||!t.type&&t.jsonType===s)return!0;t=t.type}return!1}function dt(e){const{childItemId:s,error:t,filterIsSimpleTypeContraint:n,fullList:r,isActive:c,isLoading:o,items:a,layout:m,onListChange:h,onRetry:l,showIcons:y}=e,S=Y(),{collapsed:L}=Te(),{collapsed:b,index:g}=Ie(),[v,R]=u.useState(!1);u.useEffect(()=>{if(b)return;const d=setTimeout(()=>{R(!0)},0);return()=>{clearTimeout(d)}},[b]);const T=u.useCallback(d=>{const I=H(d._id),p=s===I;return i(Je,{icon:y===!1?!1:void 0,id:I,pressed:!c&&p,selected:c&&p,layout:m,schemaType:S.get(d._type),value:d})},[s,c,m,S,y]),f=u.useMemo(()=>{if(!v)return null;if(t)return i(O,{align:"center",direction:"column",height:"fill",justify:"center",children:i($,{width:1,children:_(Le,{paddingX:4,paddingY:5,space:4,children:[i(be,{as:"h3",children:"Could not fetch list items"}),_(x,{as:"p",children:["Error: ",i("code",{children:t.message})]}),l&&i(j,{children:i(U,{icon:Se,onClick:l,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(O,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Qe,{ms:300,children:_(ve,{children:[i(Re,{muted:!0}),i(j,{marginTop:3,children:i(x,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!o&&a.length===0)return i(O,{align:"center",direction:"column",height:"fill",justify:"center",children:i($,{width:1,children:i(j,{paddingX:4,paddingY:5,children:i(x,{align:"center",muted:!0,size:2,children:n?"No documents of this type":"No matching documents"})})})});const d=r&&a.length===A;return _(j,{padding:2,children:[a.length>0&&i(Pe,{gap:1,getItemKey:et,items:a,renderItem:T,onChange:h},"".concat(g,"-").concat(b)),o&&i(N,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(x,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&i(N,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:_(x,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",A," documents"]})})]})},[t,n,r,h,o,a,l,T,v,b,g]);return i(_e,{overflow:L?void 0:"auto",children:f})}const G=u.memo(e=>{let{index:s,initialValueTemplates:t=[],menuItems:n=[],menuItemGroups:r=[],setLayout:c,setSortOrder:o,title:a}=e;const{features:m}=Xe(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{o(l)}}),[c,o]);return i(oe,{backButton:m.backButton&&s>0&&i(U,{as:ae,"data-as":"a",icon:ie,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:h,menuItemGroups:r,menuItems:n})})});G.displayName="DocumentListPaneHeader";const mt={result:null,error:!1},pt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new Oe,n=t.next.bind(t);return e.pipe(k(o=>({client:o.client,query:o.query,params:o.params})),Fe(Ae),Me(1),$e()).pipe(Ne(o=>{const a=ke(o.client,o.query,o.params,s).pipe(k(pt),qe());return q(F({loading:!0}).pipe(Be(400),We(a)),a)})).pipe(Ue(mt),Ye((o,a)=>He(F(ft(o)),q(ze(window,"online"),t).pipe(Ge(1),Ke(a)))),Ve((o,a)=>({...o,...a,onRetry:n})))};function yt(e){var s;const{apiVersion:t,filter:n,params:r,sortOrder:c}=e,o=Ce(Ee),[a,m]=u.useState(!1),h=u.useRef(a),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,L=(l==null?void 0:l.loading)||l===null,b=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,v=u.useMemo(()=>g?tt(g):null,[g]),R=u.useMemo(()=>{const f=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),p=(c==null?void 0:c.by)||[],C=a?A:W,P=p.length>0?p:z.by,D=ot(P);if(f){const w=d.concat(f).join(",");return["*[".concat(n,"] {").concat(w,"}"),"order(".concat(D,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(n,"]|order(").concat(D,")[0...").concat(C,"]{").concat(I,"}")},[n,a,c]),T=u.useCallback(f=>{let{toIndex:d}=f;L||h.current||d>=W/2&&(m(!0),h.current=!0)},[L]);return u.useEffect(()=>{const f=a?p=>Boolean(p.result):()=>!0;y(p=>p?{...p,loading:!0}:null);const I=ht(F({client:o,query:R,params:r}),{apiVersion:t,tag:"desk.document-list"}).pipe(xe(f)).subscribe(y);return()=>I.unsubscribe()},[t,o,a,R,r]),u.useEffect(()=>{y(null),m(!1),h.current=!1},[n,r,c,t]),{error:S,fullList:a,handleListChange:T,isLoading:L,items:v,onRetry:b}}const M=[];function gt(e){const s=u.useRef(e);return De(s.current,e)||(s.current=e),s.current}const Tt=e=>{const{menuItems:s,sortOrderRaw:t,layout:n}=e;return s==null?void 0:s.map(r=>{var c,o,a,m;return(c=r.params)!=null&&c.layout?{...r,selected:n===((o=r.params)==null?void 0:o.layout)}:(a=r==null?void 0:r.params)!=null&&a.by?{...r,selected:je(t==null?void 0:t.by,((m=r==null?void 0:r.params)==null?void 0:m.by)||M)}:{...r,selected:!1}})},vt=u.memo(function(s){const{childItemId:t,index:n,isActive:r,isSelected:c,pane:o,paneKey:a}=s,m=Y(),{name:h}=le(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=M,menuItems:L,menuItemGroups:b,options:g,title:v}=o,{apiVersion:R,defaultOrdering:T=M,filter:f}=g,d=gt(g.params||Ze),I=o.source,p=u.useMemo(()=>st(f,d),[f,d]),C=(y==null?void 0:y.showIcons)!==!1,[P,D]=B(p,"layout",l),w=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:z,[T]),[E,K]=B(p,"sortOrder",w),V=p&&E?it(E,m.get(p)):E,X=ue(V),Q=rt(f),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=yt({filter:f,params:d,sortOrder:X,apiVersion:R}),re=u.useMemo(()=>Tt({menuItems:L,sortOrderRaw:E,layout:P}),[P,L,E]);return i(de,{name:I||h,children:_(me,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:c,children:[pe,i(G,{index:n,initialValueTemplates:S,menuItems:re,menuItemGroups:b,setLayout:D,setSortOrder:K,title:v}),i(dt,{childItemId:t,error:J,filterIsSimpleTypeContraint:Q,fullList:Z,isActive:r,isLoading:te,items:ne,layout:P,onListChange:ee,onRetry:se,showIcons:C})]})})});export{vt as default};
