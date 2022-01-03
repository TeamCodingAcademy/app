import{a as q}from"./chunk-TGZPT4BF.js";import{e as $}from"./chunk-XTCRJIG3.js";import{B as S,H as O,I as h,K as M,L as N,M as w,O as L,Q as U,V as x,Y as n,Z as _,a as k,e as y,g as t,j as r,k as s,m as P,o as f,p as j,z as I}from"./chunk-BD7K35BI.js";t();r();s();t();r();s();var c=y(P());t();r();s();var E=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`,D=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 900px;
`,V=n.h1``,F=n.h5``;t();r();s();t();r();s();var T=y(P());t();r();s();t();r();s();var W=y(P());t();r();s();function R(o){return N("MuiPaper",o)}var pe=w("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var A=y(S()),X=["className","component","elevation","square","variant"],z=o=>{let e;return o<1?e=5.11916*k(o,2):e=4.5*Math.log(o+1)+2,(e/100).toFixed(2)},Y=o=>{let{square:e,elevation:a,variant:i,classes:u}=o,d={root:["root",i,!e&&"rounded",i==="elevation"&&`elevation${a}`]};return M(d,R,u)},Z=U("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:a}=o;return[e.root,e[a.variant],!a.square&&e.rounded,a.variant==="elevation"&&e[`elevation${a.elevation}`]]}})(({theme:o,ownerState:e})=>f({backgroundColor:o.palette.background.paper,color:o.palette.text.primary,transition:o.transitions.create("box-shadow")},!e.square&&{borderRadius:o.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${o.palette.divider}`},e.variant==="elevation"&&f({boxShadow:o.shadows[e.elevation]},o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${h("#fff",z(e.elevation))}, ${h("#fff",z(e.elevation))})`}))),ee=W.forwardRef(function(e,a){let i=L({props:e,name:"MuiPaper"}),{className:u,component:d="div",elevation:v=1,square:H=!1,variant:J="elevation"}=i,K=j(i,X),g=f({},i,{component:d,elevation:v,square:H,variant:J}),Q=Y(g);return(0,A.jsx)(Z,f({as:d,ownerState:g,className:O(Q.root,u),ref:a},K))}),C=ee;t();r();s();var B=n.div`
  display: flex;
  padding: 5px 10px;
`,G=n.p``;var oe=({task:o})=>{let{t:e}=x();return T.default.createElement(C,{elevation:3},T.default.createElement(B,null,T.default.createElement(G,null,e(o.title))))},b=oe;var te=()=>{let{t:o}=x(),{pathname:e}=I(),a=e.substring(e.lastIndexOf("/")+1),{title:i,description:u,tasks:d}=$(q(a));return c.default.createElement(E,null,c.default.createElement(D,null,c.default.createElement(V,null,o(i)),c.default.createElement(F,null,o(u)),d.map(v=>c.default.createElement(_,{to:`/task/${v.id}`},c.default.createElement(b,{task:v,key:v.id})))))},re=te;export{re as default};
