import{c as y,r as n,j as t}from"./index-B28XppfY.js";import{M as T,u as R,P as q,a as S,b as $,L as A,m as V}from"./proxy-w9wylvW4.js";import{G as F}from"./github-B_mrlVl1.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=y("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=y("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=y("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=y("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=y("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=y("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=y("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);class Y extends n.Component{getSnapshotBeforeUpdate(o){const e=this.props.childRef.current;if(e&&o.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=e.offsetHeight||0,s.width=e.offsetWidth||0,s.top=e.offsetTop,s.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function _({children:r,isPresent:o}){const e=n.useId(),s=n.useRef(null),C=n.useRef({width:0,height:0,top:0,left:0}),{nonce:f}=n.useContext(T);return n.useInsertionEffect(()=>{const{width:d,height:a,top:p,left:i}=C.current;if(o||!s.current||!d||!a)return;s.current.dataset.motionPopId=e;const l=document.createElement("style");return f&&(l.nonce=f),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${a}px !important;
            top: ${p}px !important;
            left: ${i}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[o]),t.jsx(Y,{isPresent:o,childRef:s,sizeRef:C,children:n.cloneElement(r,{ref:s})})}const B=({children:r,initial:o,isPresent:e,onExitComplete:s,custom:C,presenceAffectsLayout:f,mode:d})=>{const a=R(W),p=n.useId(),i=n.useCallback(h=>{a.set(h,!0);for(const k of a.values())if(!k)return;s&&s()},[a,s]),l=n.useMemo(()=>({id:p,initial:o,isPresent:e,custom:C,onExitComplete:i,register:h=>(a.set(h,!1),()=>a.delete(h))}),f?[Math.random(),i]:[e,i]);return n.useMemo(()=>{a.forEach((h,k)=>a.set(k,!1))},[e]),n.useEffect(()=>{!e&&!a.size&&s&&s()},[e]),d==="popLayout"&&(r=t.jsx(_,{isPresent:e,children:r})),t.jsx(q.Provider,{value:l,children:r})};function W(){return new Map}const w=r=>r.key||"";function N(r){const o=[];return n.Children.forEach(r,e=>{n.isValidElement(e)&&o.push(e)}),o}const J=({children:r,custom:o,initial:e=!0,onExitComplete:s,presenceAffectsLayout:C=!0,mode:f="sync",propagate:d=!1})=>{const[a,p]=S(d),i=n.useMemo(()=>N(r),[r]),l=d&&!a?[]:i.map(w),h=n.useRef(!0),k=n.useRef(i),v=R(()=>new Map),[I,L]=n.useState(i),[m,M]=n.useState(i);$(()=>{h.current=!1,k.current=i;for(let u=0;u<m.length;u++){const c=w(m[u]);l.includes(c)?v.delete(c):v.get(c)!==!0&&v.set(c,!1)}},[m,l.length,l.join("-")]);const g=[];if(i!==I){let u=[...i];for(let c=0;c<m.length;c++){const x=m[c],b=w(x);l.includes(b)||(u.splice(c,0,x),g.push(x))}f==="wait"&&g.length&&(u=g),M(N(u)),L(i);return}const{forceRender:j}=n.useContext(A);return t.jsx(t.Fragment,{children:m.map(u=>{const c=w(u),x=d&&!a?!1:i===m||l.includes(c),b=()=>{if(v.has(c))v.set(c,!0);else return;let z=!0;v.forEach(P=>{P||(z=!1)}),z&&(j==null||j(),M(k.current),d&&(p==null||p()),s&&s())};return t.jsx(B,{isPresent:x,initial:!h.current||e?void 0:!1,custom:x?void 0:o,presenceAffectsLayout:C,mode:f,onExitComplete:x?void 0:b,children:u},c)})})},Q=({text:r,children:o})=>{const[e,s]=n.useState(!1);return t.jsxs("div",{className:"relative flex items-center justify-center",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[o,t.jsx(J,{children:e&&t.jsxs(V.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:5,scale:.95},transition:{duration:.15,ease:"easeOut"},className:"absolute bottom-full mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap z-50 shadow-xl pointer-events-none",children:[r,t.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-x-[5px] border-x-transparent border-t-[5px] border-t-gray-900"})]})})]})},te=({social:r})=>{const o=e=>{switch(e.toLowerCase()){case"github":return t.jsx(F,{className:"h-5 w-5"});case"linkedin":return t.jsx(H,{className:"h-5 w-5"});case"code":return t.jsx(E,{className:"h-5 w-5"});case"terminal":return t.jsx(K,{className:"h-5 w-5"});case"facebook":return t.jsx(G,{className:"h-5 w-5"});case"twitter":return t.jsx(O,{className:"h-5 w-5"});case"instagram":return t.jsx(D,{className:"h-5 w-5"});case"youtube":return t.jsx(U,{className:"h-5 w-5"});default:return t.jsx(E,{className:"h-5 w-5"})}};return t.jsx("div",{className:"flex space-x-4",children:r.map(e=>t.jsx(Q,{text:e.name,children:t.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"social-icon","aria-label":e.name,children:o(e.icon)})},e.name))})};export{te as S};
