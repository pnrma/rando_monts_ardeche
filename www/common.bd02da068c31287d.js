"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(C,E,c)=>{c.d(E,{c:()=>u});var m=c(2361),t=c(7683),h=c(3139);const u=(l,o)=>{let e,n;const r=(p,f,v)=>{if("undefined"==typeof document)return;const g=document.elementFromPoint(p,f);g&&o(g)?g!==e&&(_(),i(g,v)):_()},i=(p,f)=>{e=p,n||(n=e);const v=e;(0,m.c)(()=>v.classList.add("ion-activated")),f()},_=(p=!1)=>{if(!e)return;const f=e;(0,m.c)(()=>f.classList.remove("ion-activated")),p&&n!==e&&e.click(),e=void 0};return(0,h.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:p=>r(p.currentX,p.currentY,t.a),onMove:p=>r(p.currentX,p.currentY,t.b),onEnd:()=>{_(!0),(0,t.h)(),n=void 0}})}},8685:(C,E,c)=>{c.d(E,{g:()=>m});const m=(o,e,n,r,i)=>h(o[1],e[1],n[1],r[1],i).map(_=>t(o[0],e[0],n[0],r[0],_)),t=(o,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-o*Math.pow(i-1,3),h=(o,e,n,r,i)=>l((r-=i)-3*(n-=i)+3*(e-=i)-(o-=i),3*n-6*e+3*o,3*e-3*o,o).filter(p=>p>=0&&p<=1),l=(o,e,n,r)=>{if(0===o)return((o,e,n)=>{const r=e*e-4*o*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*o),(-e-Math.sqrt(r))/(2*o)]})(e,n,r);const i=(3*(n/=o)-(e/=o)*e)/3,_=(2*e*e*e-9*e*n+27*(r/=o))/27;if(0===i)return[Math.pow(-_,1/3)];if(0===_)return[Math.sqrt(-i),-Math.sqrt(-i)];const p=Math.pow(_/2,2)+Math.pow(i/3,3);if(0===p)return[Math.pow(_/2,.5)-e/3];if(p>0)return[Math.pow(-_/2+Math.sqrt(p),1/3)-Math.pow(_/2+Math.sqrt(p),1/3)-e/3];const f=Math.sqrt(Math.pow(-i/3,3)),v=Math.acos(-_/(2*Math.sqrt(Math.pow(-i/3,3)))),g=2*Math.pow(f,1/3);return[g*Math.cos(v/3)-e/3,g*Math.cos((v+2*Math.PI)/3)-e/3,g*Math.cos((v+4*Math.PI)/3)-e/3]}},5062:(C,E,c)=>{c.d(E,{i:()=>m});const m=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(C,E,c)=>{c.r(E),c.d(E,{startFocusVisible:()=>u});const m="ion-focused",h=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],u=l=>{let o=[],e=!0;const n=l?l.shadowRoot:document,r=l||document.body,i=w=>{o.forEach(T=>T.classList.remove(m)),w.forEach(T=>T.classList.add(m)),o=w},_=()=>{e=!1,i([])},p=w=>{e=h.includes(w.key),e||i([])},f=w=>{if(e&&w.composedPath){const T=w.composedPath().filter(d=>!!d.classList&&d.classList.contains("ion-focusable"));i(T)}},v=()=>{n.activeElement===r&&i([])};return n.addEventListener("keydown",p),n.addEventListener("focusin",f),n.addEventListener("focusout",v),n.addEventListener("touchstart",_),n.addEventListener("mousedown",_),{destroy:()=>{n.removeEventListener("keydown",p),n.removeEventListener("focusin",f),n.removeEventListener("focusout",v),n.removeEventListener("touchstart",_),n.removeEventListener("mousedown",_)},setFocus:i}}},4118:(C,E,c)=>{c.d(E,{C:()=>l,a:()=>h,d:()=>u});var m=c(5861),t=c(1643);const h=function(){var o=(0,m.Z)(function*(e,n,r,i,_,p){var f;if(e)return e.attachViewToDom(n,r,_,i);if(!(p||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const v="string"==typeof r?null===(f=n.ownerDocument)||void 0===f?void 0:f.createElement(r):r;return i&&i.forEach(g=>v.classList.add(g)),_&&Object.assign(v,_),n.appendChild(v),yield new Promise(g=>(0,t.c)(v,g)),v});return function(n,r,i,_,p,f){return o.apply(this,arguments)}}(),u=(o,e)=>{if(e){if(o)return o.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},l=()=>{let o,e;return{attachViewToDom:function(){var i=(0,m.Z)(function*(_,p,f={},v=[]){var g,w;if(o=_,p){const d="string"==typeof p?null===(g=o.ownerDocument)||void 0===g?void 0:g.createElement(p):p;v.forEach(s=>d.classList.add(s)),Object.assign(d,f),o.appendChild(d),yield new Promise(s=>(0,t.c)(d,s))}else if(o.children.length>0){const d=null===(w=o.ownerDocument)||void 0===w?void 0:w.createElement("div");v.forEach(s=>d.classList.add(s)),d.append(...o.children),o.appendChild(d)}const T=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),o.parentNode.insertBefore(e,o),T.appendChild(o),o});return function(p,f){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&e&&(e.parentNode.insertBefore(o,e),e.remove()),Promise.resolve())}}},7683:(C,E,c)=>{c.d(E,{a:()=>h,b:()=>u,c:()=>t,d:()=>o,h:()=>l});const m={getEngine(){var e;const n=window;return n.TapticEngine||(null===(e=n.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.impact({style:r})},notification(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},t=()=>{m.selection()},h=()=>{m.selectionStart()},u=()=>{m.selectionChanged()},l=()=>{m.selectionEnd()},o=e=>{m.impact(e)}},1473:(C,E,c)=>{c.d(E,{a:()=>i,b:()=>f,f:()=>_,g:()=>r,p:()=>v,s:()=>p});var m=c(5861),t=c(1643),h=c(7208);const l="ion-content",o=".ion-content-scroll-host",e=`${l}, ${o}`,n=g=>g&&"ION-CONTENT"===g.tagName,r=function(){var g=(0,m.Z)(function*(w){return n(w)?(yield new Promise(T=>(0,t.c)(w,T)),w.getScrollElement()):w});return function(T){return g.apply(this,arguments)}}(),i=g=>g.querySelector(o)||g.querySelector(e),_=g=>g.closest(e),p=(g,w)=>n(g)?g.scrollToTop(w):Promise.resolve(g.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),f=(g,w,T,d)=>n(g)?g.scrollByPoint(w,T,d):Promise.resolve(g.scrollBy({top:T,left:w,behavior:d>0?"smooth":"auto"})),v=g=>(0,h.a)(g,l)},7208:(C,E,c)=>{c.d(E,{a:()=>h,b:()=>t,p:()=>m});const m=u=>console.warn(`[Ionic Warning]: ${u}`),t=(u,...l)=>console.error(`[Ionic Error]: ${u}`,...l),h=(u,...l)=>console.error(`<${u.tagName.toLowerCase()}> must be used inside ${l.join(" or ")}.`)},8439:(C,E,c)=>{c.d(E,{s:()=>m});const m=n=>{try{if(n instanceof class e{constructor(r){this.value=r}})return n.value;if(!u()||"string"!=typeof n||""===n)return n;const r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=n,o.forEach(v=>{const g=r.querySelectorAll(v);for(let w=g.length-1;w>=0;w--){const T=g[w];T.parentNode?T.parentNode.removeChild(T):r.removeChild(T);const d=h(T);for(let s=0;s<d.length;s++)t(d[s])}});const _=h(r);for(let v=0;v<_.length;v++)t(_[v]);const p=document.createElement("div");p.appendChild(r);const f=p.querySelector("div");return null!==f?f.innerHTML:p.innerHTML}catch(r){return console.error(r),""}},t=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let i=n.attributes.length-1;i>=0;i--){const _=n.attributes.item(i),p=_.name;if(!l.includes(p.toLowerCase())){n.removeAttribute(p);continue}const f=_.value;null!=f&&f.toLowerCase().includes("javascript:")&&n.removeAttribute(p)}const r=h(n);for(let i=0;i<r.length;i++)t(r[i])},h=n=>null!=n.children?n.children:n.childNodes,u=()=>{var n;const r=window,i=null===(n=null==r?void 0:r.Ionic)||void 0===n?void 0:n.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},l=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},8117:(C,E,c)=>{c.d(E,{a:()=>m,b:()=>_,c:()=>o,d:()=>p,e:()=>s,f:()=>h,g:()=>t,h:()=>T,i:()=>e,j:()=>r,k:()=>f,l:()=>n,m:()=>l,n:()=>u,o:()=>i,p:()=>v,q:()=>g,r:()=>w,s:()=>d});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(C,E,c)=>{c.r(E),c.d(E,{KEYBOARD_DID_CLOSE:()=>t,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>d,keyboardDidClose:()=>v,keyboardDidOpen:()=>p,keyboardDidResize:()=>f,resetKeyboardAssist:()=>e,setKeyboardClose:()=>_,setKeyboardOpen:()=>i,startKeyboardAssist:()=>n,trackViewportChanges:()=>T});const m="ionKeyboardDidShow",t="ionKeyboardDidHide";let u={},l={},o=!1;const e=()=>{u={},l={},o=!1},n=s=>{r(s),s.visualViewport&&(l=d(s.visualViewport),s.visualViewport.onresize=()=>{T(s),p()||f(s)?i(s):v(s)&&_(s)})},r=s=>{s.addEventListener("keyboardDidShow",a=>i(s,a)),s.addEventListener("keyboardDidHide",()=>_(s))},i=(s,a)=>{g(s,a),o=!0},_=s=>{w(s),o=!1},p=()=>!o&&u.width===l.width&&(u.height-l.height)*l.scale>150,f=s=>o&&!v(s),v=s=>o&&l.height===s.innerHeight,g=(s,a)=>{const x=new CustomEvent(m,{detail:{keyboardHeight:a?a.keyboardHeight:s.innerHeight-l.height}});s.dispatchEvent(x)},w=s=>{const a=new CustomEvent(t);s.dispatchEvent(a)},T=s=>{u=Object.assign({},l),l=d(s.visualViewport)},d=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},7741:(C,E,c)=>{c.d(E,{S:()=>t});const t={bubbles:{dur:1e3,circles:9,fn:(h,u,l)=>{const o=h*u/l-h+"ms",e=2*Math.PI*u/l;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(h,u,l)=>{const o=u/l,e=h*o-h+"ms",n=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(h,u)=>({r:6,style:{left:9-9*u+"px","animation-delay":-110*u+"ms"}})},lines:{dur:1e3,lines:8,fn:(h,u,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*u+(u<l/2?180:-180)}deg)`,"animation-delay":h*u/l-h+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(h,u,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*u+(u<l/2?180:-180)}deg)`,"animation-delay":h*u/l-h+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(h,u,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":h*u/l-h+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(h,u,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":h*u/l-h+"ms"}})}}},5713:(C,E,c)=>{c.r(E),c.d(E,{createSwipeBackGesture:()=>l});var m=c(1643),t=c(5062),h=c(3139);c(3509);const l=(o,e,n,r,i)=>{const _=o.ownerDocument.defaultView,p=(0,t.i)(o),v=s=>p?-s.deltaX:s.deltaX;return(0,h.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(s=>{const{startX:y}=s;return p?y>=_.innerWidth-50:y<=50})(s)&&e(),onStart:n,onMove:s=>{const y=v(s)/_.innerWidth;r(y)},onEnd:s=>{const a=v(s),y=_.innerWidth,x=a/y,M=(s=>p?-s.velocityX:s.velocityX)(s),k=M>=0&&(M>.2||a>y/2),D=(k?1-x:x)*y;let O=0;if(D>5){const I=D/Math.abs(M);O=Math.min(I,540)}i(k,x<=0?.01:(0,m.k)(0,x,.9999),O)}})}},2854:(C,E,c)=>{c.d(E,{c:()=>h,g:()=>l,h:()=>t,o:()=>e});var m=c(5861);const t=(n,r)=>null!==r.closest(n),h=(n,r)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},r):r,l=n=>{const r={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(n).forEach(i=>r[i]=!0),r},o=/^[a-z][a-z0-9+\-.]*:/,e=function(){var n=(0,m.Z)(function*(r,i,_,p){if(null!=r&&"#"!==r[0]&&!o.test(r)){const f=document.querySelector("ion-router");if(f)return null!=i&&i.preventDefault(),f.push(r,_,p)}return!1});return function(i,_,p,f){return n.apply(this,arguments)}}()},6289:(C,E,c)=>{c.d(E,{Y:()=>T});var m=c(655),t=c(7587),h=c(8317),u=c(5407),l=c(8413);function o(d,s){if(1&d){const a=t.EpF();t.TgZ(0,"ion-img",10),t.NdJ("ionError",function(){return t.CHM(a),t.oxw(2).onImgSrcError()}),t.qZA()}if(2&d){const a=t.oxw(2);t.Q6J("src",a.imgSrc)}}function e(d,s){if(1&d&&(t.TgZ(0,"div",4),t._uU(1),t.qZA()),2&d){const a=t.oxw(2);t.xp6(1),t.hij(" ",a.hydratedTrek.properties.departure," ")}}function n(d,s){if(1&d&&(t.TgZ(0,"div",4),t._uU(1),t.qZA()),2&d){const a=t.oxw(2);t.xp6(1),t.hij(" ",null==a.hydratedTrek.properties.departure_city?null:a.hydratedTrek.properties.departure_city.name," ")}}function r(d,s){if(1&d){const a=t.EpF();t.TgZ(0,"ion-img",11),t.NdJ("ionError",function(){return t.CHM(a),t.oxw(2).onImgPracticeSrcError()}),t.qZA()}if(2&d){const a=t.oxw(2);t.Udp("background-color",a.hydratedTrek.properties.practice.color),t.Q6J("src",a.imgPracticeSrc)}}function i(d,s){if(1&d&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&d){const a=t.oxw(3);t.xp6(1),t.hij("",t.xi3(2,1,a.hydratedTrek.properties.duration%1*60,"1.0-0"),"min")}}function _(d,s){if(1&d&&(t.TgZ(0,"div",8),t._uU(1),t.ALo(2,"number"),t.ALo(3,"lowerRound"),t.YNc(4,i,3,4,"span",12),t.qZA()),2&d){const a=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,2,t.lcZ(3,5,a.hydratedTrek.properties.duration),"1.0-0"),"h"),t.xp6(3),t.Q6J("ngIf",a.hydratedTrek.properties.duration%1>0)}}function p(d,s){if(1&d&&(t.TgZ(0,"div",8),t._uU(1),t.ALo(2,"number"),t.qZA()),2&d){const a=t.oxw(2);t.xp6(1),t.hij(" ",t.xi3(2,1,a.hydratedTrek.properties.duration/24,"1.0-0"),"j ")}}function f(d,s){if(1&d&&(t.TgZ(0,"div",8),t._uU(1),t.ALo(2,"number"),t.qZA()),2&d){const a=t.oxw(2);t.xp6(1),t.hij(" ",t.Dn7(2,1,a.hydratedTrek.properties.length/1e3,"1.1-1","fr")," km ")}}const v=function(d){return{"minimize-padding":d}},g=function(d){return{"minimize-title":d}};function w(d,s){if(1&d&&(t.TgZ(0,"ion-card",1),t._UZ(1,"ion-ripple-effect"),t.TgZ(2,"div"),t.YNc(3,o,1,1,"ion-img",2),t.TgZ(4,"ion-card-header",3)(5,"ion-card-title",3),t._uU(6),t.ALo(7,"translate"),t.qZA()()(),t.TgZ(8,"div")(9,"ion-card-content",3)(10,"div")(11,"div",4),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.YNc(14,e,2,1,"div",5),t.YNc(15,n,2,1,"div",5),t.qZA(),t.TgZ(16,"div",6)(17,"div"),t.YNc(18,r,1,3,"ion-img",7),t.qZA(),t.TgZ(19,"div",8),t._uU(20),t.qZA(),t.YNc(21,_,5,7,"div",9),t.YNc(22,p,3,4,"div",9),t.YNc(23,f,3,5,"div",9),t.qZA()()()()),2&d){const a=t.oxw();t.Q6J("routerLink",a.routerLink),t.xp6(3),t.Q6J("ngIf",a.imgSrc&&!a.hideImgSrc),t.xp6(1),t.Q6J("ngClass",t.VKq(19,v,!a.showAllData)),t.xp6(1),t.Q6J("ngClass",t.VKq(21,g,!a.showAllData)),t.xp6(1),t.AsE(" ",a.isStage?t.lcZ(7,15,"trek.details.stage")+" "+a.numStage+" - ":""," ",null==a.hydratedTrek.properties?null:a.hydratedTrek.properties.name," "),t.xp6(3),t.Q6J("ngClass",t.VKq(23,v,!a.showAllData)),t.xp6(3),t.Oqu(t.lcZ(13,17,"treks.departure")),t.xp6(2),t.Q6J("ngIf",a.hydratedTrek.properties.departure),t.xp6(1),t.Q6J("ngIf",!a.hydratedTrek.properties.departure&&a.hydratedTrek.properties.departure_city),t.xp6(3),t.Q6J("ngIf",a.imgPracticeSrc&&!a.hideImgPracticeSrc),t.xp6(2),t.hij(" ",null==a.hydratedTrek.properties.difficulty?null:a.hydratedTrek.properties.difficulty.name," "),t.xp6(1),t.Q6J("ngIf",a.hydratedTrek.properties.duration<24&&a.showAllData),t.xp6(1),t.Q6J("ngIf",a.hydratedTrek.properties.duration>=24&&a.showAllData),t.xp6(1),t.Q6J("ngIf",a.showAllData)}}let T=(()=>{class d{constructor(a,y,x){this.offlineTreks=a,this.onlineTreks=y,this.settings=x,this.offline=!1,this.isStage=!1,this.numStage=0,this.parentId=void 0,this.firstTryToLoadFromOnline=!0,this.hideImgPracticeSrc=!1,this.hideImgSrc=!1}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){const a=yield this.offlineTreks.trekIsAvailableOffline(this.trek.properties.id),y=this.offline||a?this.offlineTreks:this.onlineTreks;this.hydratedTrek=this.settings.getHydratedTrek(this.trek,yield y.getCommonImgSrc()),this.hydratedTrek.properties.practice&&(this.imgPracticeSrc=yield this.offlineTreks.getTrekImageSrc({},{url:this.hydratedTrek.properties.practice.pictogram})),this.imgSrc=this.offline||a?yield this.offlineTreks.getTrekImageSrc(this.trek):this.onlineTreks.getTrekImageSrc(this.trek),this.routerLink=this.isStage?`/trek-details${this.offline?"-offline":""}/${this.parentId}/${this.trek.properties.id}`:`/trek-details${this.offline?"-offline":""}/${this.trek.properties.id}`})}onImgSrcError(){this.hideImgSrc=!0}onImgPracticeSrcError(){this.hydratedTrek.properties.practice&&this.firstTryToLoadFromOnline?(this.firstTryToLoadFromOnline=!1,this.imgPracticeSrc=this.onlineTreks.getTrekImageSrc({},{url:this.hydratedTrek.properties.practice.pictogram})):this.hideImgPracticeSrc=!0}}return d.\u0275fac=function(a){return new(a||d)(t.Y36(h.U),t.Y36(u.a),t.Y36(l.g))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-trek-card"]],inputs:{trek:"trek",offline:"offline",showAllData:"showAllData",isStage:"isStage",numStage:"numStage",parentId:"parentId"},decls:1,vars:1,consts:[["class","no-outline pointer extand-card ion-activatable",3,"routerLink",4,"ngIf"],[1,"no-outline","pointer","extand-card","ion-activatable",3,"routerLink"],["class","min-size-img",3,"src","ionError",4,"ngIf"],[3,"ngClass"],[1,"ellipsis"],["class","ellipsis",4,"ngIf"],[1,"extra-content-card"],["class","picto-practice",3,"background-color","src","ionError",4,"ngIf"],[1,"ion-padding-start"],["class","ion-padding-start",4,"ngIf"],[1,"min-size-img",3,"src","ionError"],[1,"picto-practice",3,"src","ionError"],[4,"ngIf"]],template:function(a,y){1&a&&t.YNc(0,w,24,25,"ion-card",0),2&a&&t.Q6J("ngIf",y.hydratedTrek)},styles:[".extand-card[_ngcontent-%COMP%]{height:calc(100% - 20px);display:flex;flex-direction:column;justify-content:space-between}.picto-practice[_ngcontent-%COMP%]{max-width:24px;max-height:24px}.extra-content-card[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;margin-top:12px}.ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.minimize-title[_ngcontent-%COMP%]{font-size:16px}ion-card-header[_ngcontent-%COMP%]{padding:16px}ion-card-content[_ngcontent-%COMP%]{padding:0 16px 16px}ion-card-header.minimize-padding[_ngcontent-%COMP%]{padding:8px}ion-card-content.minimize-padding[_ngcontent-%COMP%]{padding:0 8px 8px}"]}),d})()},1931:(C,E,c)=>{c.d(E,{$:()=>l});var m=c(520),t=c(5722),h=c(7587),u=c(7232);let l=(()=>{class o{constructor(n,r){this.http=n,this.translate=r,this.baseUrl=t.N.onlineBaseUrl}getMoreItems(){const n={headers:new m.WM({"Accept-Language":this.translate.getDefaultLang()})};return this.http.get(`${this.baseUrl}/flatpages.json`,n)}getMoreItemById(n){const r={headers:new m.WM({"Accept-Language":this.translate.getDefaultLang()})};return this.http.get(`${this.baseUrl}/flatpages/${n}.json`,r)}}return o.\u0275fac=function(n){return new(n||o)(h.LFG(m.eN),h.LFG(u.sK))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8504:(C,E,c)=>{c.d(E,{H:()=>n,K:()=>e});var m=c(9808),t=c(2029),h=c(786),u=c(7232),l=c(6289),o=c(7587);let e=(()=>{class r{transform(_){return Math.floor(_)}}return r.\u0275fac=function(_){return new(_||r)},r.\u0275pipe=o.Yjl({name:"lowerRound",type:r,pure:!0}),r})(),n=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[m.ez,h.Pc,t.Bz,u.aw.forChild()]]}),r})();o.B6R(l.Y,[m.O5,h.PM,h.YI,t.rH,h.H$,h.Xz,h.Zi,m.mk,h.Dq,h.FN],[u.X$,m.JJ,e])}}]);