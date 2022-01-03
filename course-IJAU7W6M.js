import{a as E}from"./chunk-ORVGC3NK.js";import{e as $}from"./chunk-WGXGUKYO.js";import{$ as q,A as X,G as O,H as h,J as M,K as N,L as w,N as L,P as U,U as x,Z as n,_,a as k,e as y,g as t,i as r,j as s,l as P,n as f,o as j,y as I}from"./chunk-VVVVV7MP.js";t();r();s();t();r();s();var c=y(P());t();r();s();var D=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`,V=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 900px;
`,F=n.h1``,R=n.h5``;t();r();s();t();r();s();var T=y(P());t();r();s();t();r();s();var A=y(P());t();r();s();function W(o){return N("MuiPaper",o)}var le=w("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var z=y(X()),Y=["className","component","elevation","square","variant"],B=o=>{let e;return o<1?e=5.11916*k(o,2):e=4.5*Math.log(o+1)+2,(e/100).toFixed(2)},Z=o=>{let{square:e,elevation:a,variant:i,classes:u}=o,d={root:["root",i,!e&&"rounded",i==="elevation"&&`elevation${a}`]};return M(d,W,u)},ee=U("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:a}=o;return[e.root,e[a.variant],!a.square&&e.rounded,a.variant==="elevation"&&e[`elevation${a.elevation}`]]}})(({theme:o,ownerState:e})=>f({backgroundColor:o.palette.background.paper,color:o.palette.text.primary,transition:o.transitions.create("box-shadow")},!e.square&&{borderRadius:o.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${o.palette.divider}`},e.variant==="elevation"&&f({boxShadow:o.shadows[e.elevation]},o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${h("#fff",B(e.elevation))}, ${h("#fff",B(e.elevation))})`}))),oe=A.forwardRef(function(e,a){let i=L({props:e,name:"MuiPaper"}),{className:u,component:d="div",elevation:v=1,square:J=!1,variant:K="elevation"}=i,Q=j(i,Y),g=f({},i,{component:d,elevation:v,square:J,variant:K}),S=Z(g);return(0,z.jsx)(ee,f({as:d,ownerState:g,className:O(S.root,u),ref:a},Q))}),C=oe;t();r();s();var G=n.div`
  display: flex;
  padding: 5px 10px;
`,H=n.p``;var te=({task:o})=>{let{t:e}=x();return T.default.createElement(C,{elevation:3},T.default.createElement(G,null,T.default.createElement(H,null,e(o.title))))},b=te;var re=()=>{let{t:o}=x(),{pathname:e}=I(),a=e.substring(e.lastIndexOf("/")+1),{title:i,description:u,tasks:d}=$(E(a));return c.default.createElement(D,null,c.default.createElement(V,null,c.default.createElement(F,null,o(i)),c.default.createElement(R,null,o(u)),d.map(v=>c.default.createElement(_,{to:q(`/task/${v.id}`)},c.default.createElement(b,{task:v,key:v.id})))))},se=re;export{se as default};
