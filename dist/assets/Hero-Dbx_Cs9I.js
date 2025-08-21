import{c as C,r as p,j as d,m as A}from"./index-DDQq1ZQP.js";import{S as _}from"./SocialIcons-tLpuZp62.js";import{I as R}from"./ImageWithFallback-BoWUS0em.js";import{m as I}from"./proxy-Cu_CNKkS.js";import"./github-Bgi1L_1S.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=C("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=C("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);let T={data:""},U=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||T,Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,B=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,h=(e,t)=>{let r="",o="",i="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+a+";":o+=s[1]=="f"?h(a,s):s+"{"+h(a,s[1]=="k"?"":t)+"}":typeof a=="object"?o+=h(a,t?t.replace(/([^,])+/g,n=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=h.p?h.p(s,a):s+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+o},f={},P=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+P(e[r]);return t}return e},W=(e,t,r,o,i)=>{let s=P(e),a=f[s]||(f[s]=(l=>{let m=0,u=11;for(;m<l.length;)u=101*u+l.charCodeAt(m++)>>>0;return"go"+u})(s));if(!f[a]){let l=s!==e?e:(m=>{let u,x,b=[{}];for(;u=Z.exec(m.replace(B,""));)u[4]?b.shift():u[3]?(x=u[3].replace(z," ").trim(),b.unshift(b[0][x]=b[0][x]||{})):b[0][u[1]]=u[2].replace(z," ").trim();return b[0]})(e);f[a]=h(i?{["@keyframes "+a]:l}:l,r?"":"."+a)}let n=r&&f.g?f.g:null;return r&&(f.g=f[a]),((l,m,u,x)=>{x?m.data=m.data.replace(x,l):m.data.indexOf(l)===-1&&(m.data=u?l+m.data:m.data+l)})(f[a],t,o,n),a},J=(e,t,r)=>e.reduce((o,i,s)=>{let a=t[s];if(a&&a.call){let n=a(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;a=l?"."+l:n&&typeof n=="object"?n.props?"":h(n,""):n===!1?"":n}return o+i+(a??"")},"");function j(e){let t=this||{},r=e.call?e(t.p):e;return W(r.unshift?r.raw?J(r,[].slice.call(arguments,1),t.p):r.reduce((o,i)=>Object.assign(o,i&&i.call?i(t.p):i),{}):r,U(t.target),t.g,t.o,t.k)}let S,N,$;j.bind({g:1});let g=j.bind({k:1});function K(e,t,r,o){h.p=t,S=e,N=r,$=o}function y(e,t){let r=this||{};return function(){let o=arguments;function i(s,a){let n=Object.assign({},s),l=n.className||i.className;r.p=Object.assign({theme:N&&N()},n),r.o=/ *go\d+/.test(l),n.className=j.apply(r,o)+(l?" "+l:"");let m=e;return e[0]&&(m=n.as||e,delete n.as),$&&m[0]&&$(n),S(m,n)}return i}}var Q=e=>typeof e=="function",E=(e,t)=>Q(e)?e(t):e,V=(()=>{let e=0;return()=>(++e).toString()})(),Y=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),G=20,L="default",O=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:o}=t;return O(e,{type:e.toasts.find(a=>a.id===o.id)?1:0,toast:o});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},X=[],ee={toasts:[],pausedAt:void 0,settings:{toastLimit:G}},v={},F=(e,t=L)=>{v[t]=O(v[t]||ee,e),X.forEach(([r,o])=>{r===t&&o(v[t])})},H=e=>Object.keys(v).forEach(t=>F(e,t)),te=e=>Object.keys(v).find(t=>v[t].toasts.some(r=>r.id===e)),D=(e=L)=>t=>{F(t,e)},re=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||V()}),w=e=>(t,r)=>{let o=re(t,e,r);return D(o.toasterId||te(o.id))({type:2,toast:o}),o.id},c=(e,t)=>w("blank")(e,t);c.error=w("error");c.success=w("success");c.loading=w("loading");c.custom=w("custom");c.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):H(r)};c.dismissAll=e=>c.dismiss(void 0,e);c.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):H(r)};c.removeAll=e=>c.remove(void 0,e);c.promise=(e,t,r)=>{let o=c.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let s=t.success?E(t.success,i):void 0;return s?c.success(s,{id:o,...r,...r==null?void 0:r.success}):c.dismiss(o),i}).catch(i=>{let s=t.error?E(t.error,i):void 0;s?c.error(s,{id:o,...r,...r==null?void 0:r.error}):c.dismiss(o)}),e};var ae=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,oe=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ie=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${oe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,le=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,de=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ce=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,me=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pe=y("div")`
  position: absolute;
`,ue=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,he=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?p.createElement(ge,null,t):t:r==="blank"?null:p.createElement(ue,null,p.createElement(le,{...o}),r!=="loading"&&p.createElement(pe,null,r==="error"?p.createElement(ie,{...o}):p.createElement(me,{...o})))},ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,be="0%{opacity:0;} 100%{opacity:1;}",ve="0%{opacity:1;} 100%{opacity:0;}",we=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,je=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ke=(e,t)=>{let r=e.includes("top")?1:-1,[o,i]=Y()?[be,ve]:[ye(r),xe(r)];return{animation:t?`${g(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};p.memo(({toast:e,position:t,style:r,children:o})=>{let i=e.height?ke(e.position||t||"top-center",e.visible):{opacity:0},s=p.createElement(he,{toast:e}),a=p.createElement(je,{...e.ariaProps},E(e.message,e));return p.createElement(we,{className:e.className,style:{...i,...r,...e.style}},typeof o=="function"?o({icon:s,message:a}):p.createElement(p.Fragment,null,s,a))});K(p.createElement);j`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var k=c;const Ne="/Portfolio/assets/profile-DlllJHKZ.jpg",ze=({data:e})=>{const t=async r=>{r.preventDefault();try{const i="/Portfolio/Boominathan-A_AIDS.pdf".replace("//","/");(await fetch(i,{method:"HEAD"})).ok?(window.open(i,"_blank"),k.success("Resume download started!",{duration:3e3,position:"bottom-right"})):(console.error("Resume file not found"),k.error("Resume is temporarily unavailable. Please check back later.",{duration:4e3,position:"bottom-right"}))}catch(o){console.error("Error downloading resume:",o),k.error("Unable to download resume. Please try again later.",{duration:4e3,position:"bottom-right"})}};return d.jsxs("section",{id:"home",className:"min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden",children:[d.jsx("div",{className:"absolute -top-40 -left-40 w-80 h-80 bg-primary-200/30 dark:bg-primary-900/20 rounded-full filter blur-3xl"}),d.jsx("div",{className:"absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full filter blur-3xl"}),d.jsxs("div",{className:"section-container",children:[d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-12 items-center",children:[d.jsxs(I.div,{className:"lg:col-span-3 z-10",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[d.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold mb-4",children:["Hi, I'm ",d.jsx("span",{className:"text-primary-500",children:e.name.split(" ")[0]})]}),d.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6",children:e.title}),d.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl",children:e.bio}),d.jsxs("div",{className:"flex flex-wrap gap-4 mb-8",children:[d.jsxs("a",{href:"/Portfolio/Boominathan-A_AIDS.pdf",onClick:t,className:"btn-primary flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer",children:[d.jsx(q,{size:18}),"Download CV"]}),d.jsx(A.Link,{to:"contact",smooth:!0,duration:800,className:"px-6 py-2.5 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-800 dark:text-gray-200 rounded-md transition-all duration-300 font-medium cursor-pointer",children:"Contact Me"})]}),d.jsx(_,{social:e.social})]}),d.jsx(I.div,{className:"lg:col-span-2 flex justify-center lg:justify-end z-10",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.2},children:d.jsx("div",{className:"relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-100",children:d.jsx(R,{src:Ne,alt:e.name,className:"w-full h-full object-cover"})})})]}),d.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:d.jsx(A.Link,{to:"about",smooth:!0,duration:800,className:"cursor-pointer",children:d.jsx(M,{className:"w-8 h-8 text-primary-500"})})})]})]})};export{ze as default};
