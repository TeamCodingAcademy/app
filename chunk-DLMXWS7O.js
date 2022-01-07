import{L as E,O as k,P as I,_ as y,a as d,ea as P,g as r,ha as T,i as s,k as i,l as n,m as w,p,q as f}from"./chunk-I7RM2OKH.js";s();i();n();var v=r(y());function g(o){return(0,v.generateUtilityClass)("MuiPaper",o)}var V=(0,v.generateUtilityClasses)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]),D=V;s();i();n();var C=r(w());var j=r(k());var $=r(y()),m=r(I());var N=r(E()),L=["className","component","elevation","square","variant"],O=o=>{let e;return o<1?e=5.11916*d(o,2):e=4.5*Math.log(o+1)+2,(e/100).toFixed(2)},W=o=>{let{square:e,elevation:t,variant:a,classes:u}=o,l={root:["root",a,!e&&"rounded",a==="elevation"&&`elevation${t}`]};return(0,$.unstable_composeClasses)(l,g,u)},A=T("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:t}=o;return[e.root,e[t.variant],!t.square&&e.rounded,t.variant==="elevation"&&e[`elevation${t.elevation}`]]}})(({theme:o,ownerState:e})=>p({backgroundColor:o.palette.background.paper,color:o.palette.text.primary,transition:o.transitions.create("box-shadow")},!e.square&&{borderRadius:o.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${o.palette.divider}`},e.variant==="elevation"&&p({boxShadow:o.shadows[e.elevation]},o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${(0,m.alpha)("#fff",O(e.elevation))}, ${(0,m.alpha)("#fff",O(e.elevation))})`}))),F=C.forwardRef(function(e,t){let a=P({props:e,name:"MuiPaper"}),{className:u,component:l="div",elevation:R=1,square:M=!1,variant:U="elevation"}=a,_=f(a,L),c=p({},a,{component:l,elevation:R,square:M,variant:U}),q=W(c);return(0,N.jsx)(A,p({as:l,ownerState:c,className:(0,j.default)(q.root,u),ref:t},_))}),z=F;s();i();n();export{g as a,D as b,z as c};