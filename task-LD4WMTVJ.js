import{D as K,F as Q,p as D,v as E}from"./chunk-O62GEJC4.js";import{r as M}from"./chunk-2OEJQCSV.js";import{b as X}from"./chunk-7AQN2Y2S.js";import{d as W}from"./chunk-HRSSXKV2.js";import{A as z,L as $,O as me,ea as R,g as x,ha as H,i as e,k as t,l as o,m as v,ma as J,p as N,q as j,ra as h}from"./chunk-I7RM2OKH.js";e();t();o();e();t();o();var a=x(v());e();t();o();e();t();o();var c=x(v());var Y=x($()),Z=c.createContext(null);function ue(){let[r,s]=c.useState(null);return c.useEffect(()=>{s(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),r}function k(r){let{children:s,value:n}=r,d=ue(),f=c.useMemo(()=>({idPrefix:d,value:n}),[d,n]);return(0,Y.jsx)(Z.Provider,{value:f,children:s})}function B(){return c.useContext(Z)}function I(r,s){let{idPrefix:n}=r;return n===null?null:`${r.idPrefix}-P-${s}`}function F(r,s){let{idPrefix:n}=r;return n===null?null:`${r.idPrefix}-T-${s}`}e();t();o();e();t();o();var C=x(v());var ee=x($()),fe=["children"],ce=C.forwardRef(function(s,n){let{children:d}=s,f=j(s,fe),u=B();if(u===null)throw new TypeError("No TabContext provided");let m=C.Children.map(d,b=>C.isValidElement(b)?C.cloneElement(b,{"aria-controls":I(u,b.props.value),id:F(u,b.props.value)}):null);return(0,ee.jsx)(K,N({},f,{ref:n,value:u.value,children:m}))}),G=ce;e();t();o();e();t();o();var se=x(v());var ae=x(me());e();t();o();e();t();o();e();t();o();function w(r,s,n){let d={};return Object.keys(r).forEach(f=>{d[f]=r[f].reduce((u,m)=>(m&&(n&&n[m]&&u.push(n[m]),u.push(s(m))),u),[]).join(" ")}),d}e();t();o();e();t();o();e();t();o();e();t();o();e();t();o();var te=r=>r,xe=()=>{let r=te;return{configure(s){r=s},generate(s){return r(s)},reset(){r=te}}},be=xe(),oe=be;var ye={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function P(r,s){return ye[s]||`${oe.generate(r)}-${s}`}function L(r,s){let n={};return s.forEach(d=>{n[d]=P(r,d)}),n}e();t();o();function re(r){return P("MuiTabPanel",r)}var xt=L("MuiTabPanel",["root"]);var ne=x($()),Te=["children","className","value"],Ce=r=>{let{classes:s}=r;return w({root:["root"]},re,s)},Pe=H("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(r,s)=>s.root})(({theme:r})=>({padding:r.spacing(3)})),he=se.forwardRef(function(s,n){let d=R({props:s,name:"MuiTabPanel"}),{children:f,className:u,value:m}=d,b=j(d,Te),_=N({},d),O=Ce(_),y=B();if(y===null)throw new TypeError("No TabContext provided");let T=I(y,m),V=F(y,m);return(0,ne.jsx)(Pe,N({"aria-labelledby":V,className:(0,ae.default)(O.root,u),hidden:m!==y.value,id:T,ref:n,role:"tabpanel",ownerState:_},b,{children:m===y.value&&f}))}),S=he;e();t();o();var le=h.h1``,ie=h.h5``;e();t();o();e();t();o();var q=x(v());e();t();o();var pe=h.div`
  min-height: 500px;
`,de=h.iframe`
  height: 100%;
  min-height: 500px;
  width: calc(100vw - 100px);
`;var Ue=({sandboxName:r="new"})=>q.default.createElement(pe,null,q.default.createElement(de,{src:`https://codesandbox.io/embed/${r}?autoresize=1`})),A=Ue;var ge=()=>{let{t:r}=J(),{pathname:s}=z(),n=s.substring(s.lastIndexOf("/")+1),d=W(X(n)),[f,u]=(0,a.useState)("1");if(!d)return a.default.createElement(Q,null);let m=(U,g)=>{u(g)},{title:b,description:_,criteria:O,sandbox:y,usefulLinks:T}=d,V=!!(T==null?void 0:T.length);return a.default.createElement(D,{sx:{width:"100%",typography:"body1"}},a.default.createElement(k,{value:f},a.default.createElement(D,{sx:{borderBottom:1,borderColor:"divider"}},a.default.createElement(G,{onChange:m,"aria-label":"lab API tabs example"},a.default.createElement(E,{label:r(M.requirements),value:"1"}),V&&a.default.createElement(E,{label:r(M.hints),value:"2"}),y&&a.default.createElement(E,{label:r(M.example),value:"3"}))),a.default.createElement(S,{value:"1"},a.default.createElement(le,null,r(b)),a.default.createElement(ie,null,r(_)),a.default.createElement("ul",null,O.map((U,g)=>a.default.createElement("li",{key:g},r(U))))),a.default.createElement(S,{value:"2"},a.default.createElement("h2",null,r(M.links)),T==null?void 0:T.map((U,g)=>a.default.createElement("li",{key:g},a.default.createElement("a",{href:U,target:"_blank",rel:"noreferrer nofollow noopener"},U)))),a.default.createElement(S,{value:"3"},a.default.createElement(A,{sandboxName:y}))))},ve=ge;export{ve as default};
/** @license MUI v5.0.0-alpha.63
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
