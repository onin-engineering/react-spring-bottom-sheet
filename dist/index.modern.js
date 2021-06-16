import e from"@reach/portal";import n,{useRef as t,useDebugValue as r,useEffect as o,useLayoutEffect as a,useState as i,useCallback as c,useMemo as s,useImperativeHandle as l,forwardRef as u}from"react";import{useMachine as d}from"@xstate/react";import{useSpring as p,interpolate as g,animated as y,config as m}from"react-spring";import{useDrag as S,rubberbandIfOutOfBounds as v}from"react-use-gesture";import{createFocusTrap as f}from"focus-trap";import{disableBodyScroll as h,enableBodyScroll as E}from"body-scroll-lock";import{ResizeObserver as b}from"@juggle/resize-observer";import{Machine as R,assign as w}from"xstate";function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n.indexOf(t=a[r])>=0||(o[t]=e[t]);return o}const O="undefined"!=typeof window?a:o;function N(e,n,t){return n=(n=+n)==n?n:0,t=(t=+t)==t?t:0,(e=+e)==e&&(e=(e=e<=t?e:t)>=n?e:n),e}function H(e){const n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}const D={box:"border-box"};function k(e,{label:n,enabled:t,resizeSourceRef:o}){let[a,s]=i(0);r(`${n}: ${a}`);const l=c(e=>{s(e[0].borderBoxSize[0].blockSize),o.current="element"},[o]);return O(()=>{if(!e.current||!t)return;const n=new b(l);return n.observe(e.current,D),()=>{n.disconnect()}},[e,l,t]),t?a:0}function z(e=1e3){return new Promise(n=>setTimeout(n,e))}const P={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},A={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},L=R({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:x({},P,A)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:x({},P,A)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:x({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[w({y:(e,{payload:{y:n}})=>n,velocity:(e,{payload:{velocity:n}})=>n,snapSource:(e,{payload:{source:n="custom"}})=>n})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:(e,n)=>{console.log("onOpenCancel",{context:e,event:n})},onSnapCancel:(e,n)=>{console.log("onSnapCancel",{context:e,event:n})},onResizeCancel:(e,n)=>{console.log("onResizeCancel",{context:e,event:n})},onCloseCancel:(e,n)=>{console.log("onCloseCancel",{context:e,event:n})},onOpenEnd:(e,n)=>{console.log("onOpenCancel",{context:e,event:n})},onSnapEnd:(e,n)=>{console.log("onSnapEnd",{context:e,event:n})},onRezizeEnd:(e,n)=>{console.log("onRezizeEnd",{context:e,event:n})}},services:{onSnapStart:async()=>{await z()},onOpenStart:async()=>{await z()},onCloseStart:async()=>{await z()},onResizeStart:async()=>{await z()},onSnapEnd:async()=>{await z()},onOpenEnd:async()=>{await z()},onCloseEnd:async()=>{await z()},onResizeEnd:async()=>{await z()},renderVisuallyHidden:async(e,n)=>{console.group("renderVisuallyHidden"),console.log({context:e,event:n}),await z(),console.groupEnd()},activate:async(e,n)=>{console.group("activate"),console.log({context:e,event:n}),await z(),console.groupEnd()},deactivate:async(e,n)=>{console.group("deactivate"),console.log({context:e,event:n}),await z(),console.groupEnd()},openSmoothly:async(e,n)=>{console.group("openSmoothly"),console.log({context:e,event:n}),await z(),console.groupEnd()},openImmediately:async(e,n)=>{console.group("openImmediately"),console.log({context:e,event:n}),await z(),console.groupEnd()},snapSmoothly:async(e,n)=>{console.group("snapSmoothly"),console.log({context:e,event:n}),await z(),console.groupEnd()},resizeSmoothly:async(e,n)=>{console.group("resizeSmoothly"),console.log({context:e,event:n}),await z(),console.groupEnd()},closeSmoothly:async(e,n)=>{console.group("closeSmoothly"),console.log({context:e,event:n}),await z(),console.groupEnd()}},guards:{initiallyClosed:({initialState:e})=>"CLOSED"===e,initiallyOpen:({initialState:e})=>"OPEN"===e}}),T=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","disableDrag","onDrag"],M=["velocity"],I=["onRest","config"],{tension:G,friction:F}=m.default,Z=n.forwardRef(function(e,a){let{children:u,sibling:m,className:b,footer:R,header:w,open:D,initialState:z,lastSnapRef:P,initialFocusRef:A,onDismiss:Z,maxHeight:V,defaultSnap:q=B,snapPoints:K=j,blocking:J=!0,scrollLocking:Q=!0,style:U,onSpringStart:W,onSpringCancel:X,onSpringEnd:Y,reserveScrollBarGap:_=J,disableDrag:ee=!1,onDrag:ne=(e=>{})}=e,te=C(e,T);const{ready:re,registerReady:oe}=function(){const[e,n]=i(!1),[t,r]=i({}),a=c(e=>(console.count(`registerReady:${e}`),r(n=>x({},n,{[e]:!1})),()=>{console.count(`setReady:${e}`),r(n=>x({},n,{[e]:!0}))}),[]);return o(()=>{const e=Object.values(t);if(0===e.length)return void console.log("nope nothing registered yet");const r=e.every(Boolean);console.log("check if we are rready",t,r),r&&(console.warn("ready!"),n(!0))},[t]),{ready:e,registerReady:a}}(),ae=t(!1),ie=t(W),ce=t(X),se=t(Y);o(()=>{ie.current=W,ce.current=X,se.current=Y},[X,W,Y]);const[le,ue]=p(()=>({y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0})),de=t(null),pe=t(null),ge=t(null),ye=t(null),me=t(null),Se=t(null),ve=t(0),fe=t(),he=function(){const e=s(()=>"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null,[]),n=t(null==e?void 0:e.matches);return r(n.current?"reduce":"no-preference"),o(()=>{const t=e=>{n.current=e.matches};return null==e||e.addListener(t),()=>null==e?void 0:e.removeListener(t)},[e]),n}(),Ee=function({targetRef:e,enabled:n,reserveScrollBarGap:a}){const i=t({activate:()=>{throw new TypeError("Tried to activate scroll lock too early")},deactivate:()=>{}});return r(n?"Enabled":"Disabled"),o(()=>{if(!n)return i.current.deactivate(),void(i.current={activate:()=>{},deactivate:()=>{}});const t=e.current;let r=!1;i.current={activate:()=>{r||(r=!0,h(t,{allowTouchMove:e=>e.closest("[data-body-scroll-lock-ignore]"),reserveScrollBarGap:a}))},deactivate:()=>{r&&(r=!1,E(t))}}},[n,e,a]),i}({targetRef:pe,enabled:re&&Q,reserveScrollBarGap:_}),be=function({targetRef:e,enabled:n}){const a=t({activate:()=>{throw new TypeError("Tried to activate aria hider too early")},deactivate:()=>{}});return r(n?"Enabled":"Disabled"),o(()=>{if(!n)return a.current.deactivate(),void(a.current={activate:()=>{},deactivate:()=>{}});const t=e.current;let r=!1,o=[],i=[];a.current={activate:()=>{if(r)return;r=!0;const e=t.parentNode;document.querySelectorAll("body > *").forEach(n=>{if(n===e)return;let t=n.getAttribute("aria-hidden");null!==t&&"false"!==t||(o.push(t),i.push(n),n.setAttribute("aria-hidden","true"))})},deactivate:()=>{r&&(r=!1,i.forEach((e,n)=>{let t=o[n];null===t?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t)}),o=[],i=[])}}},[e,n]),a}({targetRef:de,enabled:re&&J}),Re=function({targetRef:e,fallbackRef:n,initialFocusRef:a,enabled:i}){const c=t({activate:()=>{throw new TypeError("Tried to activate focus trap too early")},deactivate:()=>{}});return r(i?"Enabled":"Disabled"),o(()=>{if(!i)return c.current.deactivate(),void(c.current={activate:()=>{},deactivate:()=>{}});const t=n.current,r=f(e.current,{onActivate:void 0,initialFocus:a?()=>(null==a?void 0:a.current)||t:void 0,fallbackFocus:t,escapeDeactivates:!1,clickOutsideDeactivates:!1});let o=!1;c.current={activate:async()=>{o||(o=!0,await r.activate(),await new Promise(e=>setTimeout(()=>e(void 0),0)))},deactivate:()=>{o&&(o=!1,r.deactivate())}}},[i,n,a,e]),c}({targetRef:de,fallbackRef:Se,initialFocusRef:A,enabled:re&&J}),{minSnap:we,maxSnap:xe,maxHeight:Ce,findSnap:Oe}=function({contentRef:e,controlledMaxHeight:n,footerEnabled:a,footerRef:c,getSnapPoints:l,headerEnabled:u,headerRef:d,heightRef:p,lastSnapRef:g,ready:y,registerReady:m,resizeSourceRef:S}){const{maxHeight:v,minHeight:f,headerHeight:h,footerHeight:E}=function({contentRef:e,controlledMaxHeight:n,footerEnabled:a,footerRef:c,headerEnabled:l,headerRef:u,registerReady:d,resizeSourceRef:p}){const g=s(()=>d("contentHeight"),[d]),y=function(e,n,a){const c=s(()=>n("maxHeight"),[n]),[l,u]=i(()=>H(e)||"undefined"!=typeof window?window.innerHeight:0),d=l>0,p=t(0);return r(e?"controlled":"auto"),o(()=>{d&&c()},[d,c]),O(()=>{if(e)return u(H(e)),void(a.current="maxheightprop");const n=()=>{p.current||(p.current=requestAnimationFrame(()=>{u(window.innerHeight),a.current="window",p.current=0}))};return window.addEventListener("resize",n),u(window.innerHeight),a.current="window",c(),()=>{window.removeEventListener("resize",n),cancelAnimationFrame(p.current)}},[e,c,a]),l}(n,d,p),m=k(u,{label:"headerHeight",enabled:l,resizeSourceRef:p}),S=k(e,{label:"contentHeight",enabled:!0,resizeSourceRef:p}),v=k(c,{label:"footerHeight",enabled:a,resizeSourceRef:p}),f=Math.min(y-m-v,S)+m+v;r(`minHeight: ${f}`);const h=S>0;return o(()=>{h&&g()},[h,g]),{maxHeight:y,minHeight:f,headerHeight:m,footerHeight:v}}({contentRef:e,controlledMaxHeight:n,footerEnabled:a,footerRef:c,headerEnabled:u,headerRef:d,registerReady:m,resizeSourceRef:S}),{snapPoints:b,minSnap:R,maxSnap:w}=function(e,n){const t=[].concat(e).map(H).reduce((e,t)=>(e.add(N(t,0,n)),e),new Set),r=Array.from(t),o=Math.min(...r);if(Number.isNaN(o))throw new TypeError("minSnap is NaN");const a=Math.max(...r);if(Number.isNaN(a))throw new TypeError("maxSnap is NaN");return{snapPoints:r,minSnap:o,maxSnap:a}}(y?l({height:p.current,footerHeight:E,headerHeight:h,minHeight:f,maxHeight:v}):[0],v);return r(`minSnap: ${R}, maxSnap:${w}`),{minSnap:R,maxSnap:w,findSnap:function(e){let n;n="function"==typeof e?e({footerHeight:E,headerHeight:h,height:p.current,minHeight:f,maxHeight:v,snapPoints:b,lastSnap:g.current}):e;const t=H(n);return b.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e,R)},maxHeight:v}}({contentRef:ge,controlledMaxHeight:V,footerEnabled:!!R,footerRef:me,getSnapPoints:K,headerEnabled:!1!==w,headerRef:ye,heightRef:ve,lastSnapRef:P,ready:re,registerReady:oe,resizeSourceRef:fe}),Ne=t(Ce),He=t(we),De=t(xe),ke=t(Oe),ze=t(0);O(()=>{Ne.current=Ce,De.current=xe,He.current=we,ke.current=Oe,ze.current=Oe(q)},[Oe,q,Ce,xe,we]);const Pe=c(e=>{let{onRest:n,config:{velocity:t=1}={}}=e,r=C(e.config,M),o=C(e,I);return new Promise(e=>ue(x({},o,{config:x({velocity:t},r,{mass:1,tension:G,friction:Math.max(F,F+(F-F*t))}),onRest:(...t)=>{e(...t),null==n||n(...t)}})))},[ue]),[Ae,Le]=d(L,{devTools:!1,actions:{onOpenCancel:c(()=>null==ce.current?void 0:ce.current({type:"OPEN"}),[]),onSnapCancel:c(e=>null==ce.current?void 0:ce.current({type:"SNAP",source:e.snapSource}),[]),onCloseCancel:c(()=>null==ce.current?void 0:ce.current({type:"CLOSE"}),[]),onResizeCancel:c(()=>null==ce.current?void 0:ce.current({type:"RESIZE",source:fe.current}),[]),onOpenEnd:c(()=>null==se.current?void 0:se.current({type:"OPEN"}),[]),onSnapEnd:c((e,n)=>null==se.current?void 0:se.current({type:"SNAP",source:e.snapSource}),[]),onResizeEnd:c(()=>null==se.current?void 0:se.current({type:"RESIZE",source:fe.current}),[])},context:{initialState:z},services:{onSnapStart:c(async(e,n)=>null==ie.current?void 0:ie.current({type:"SNAP",source:n.payload.source||"custom"}),[]),onOpenStart:c(async()=>null==ie.current?void 0:ie.current({type:"OPEN"}),[]),onCloseStart:c(async()=>null==ie.current?void 0:ie.current({type:"CLOSE"}),[]),onResizeStart:c(async()=>null==ie.current?void 0:ie.current({type:"RESIZE",source:fe.current}),[]),onSnapEnd:c(async(e,n)=>null==se.current?void 0:se.current({type:"SNAP",source:e.snapSource}),[]),onOpenEnd:c(async()=>null==se.current?void 0:se.current({type:"OPEN"}),[]),onCloseEnd:c(async()=>null==se.current?void 0:se.current({type:"CLOSE"}),[]),onResizeEnd:c(async()=>null==se.current?void 0:se.current({type:"RESIZE",source:fe.current}),[]),renderVisuallyHidden:c(async(e,n)=>{await Pe({y:ze.current,ready:0,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:!0})},[Pe]),activate:c(async(e,n)=>{ae.current=!0,await Promise.all([Ee.current.activate(),Re.current.activate(),be.current.activate()])},[be,Re,Ee]),deactivate:c(async()=>{Ee.current.deactivate(),Re.current.deactivate(),be.current.deactivate(),ae.current=!1},[be,Re,Ee]),openImmediately:c(async()=>{ve.current=ze.current,await Pe({y:ze.current,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:!0})},[Pe]),openSmoothly:c(async()=>{await Pe({y:0,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:!0}),ve.current=ze.current,await Pe({y:ze.current,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:he.current})},[Pe,he]),snapSmoothly:c(async(e,n)=>{const t=ke.current(e.y);ve.current=t,P.current=t,await Pe({y:t,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:He.current,immediate:he.current,config:{velocity:e.velocity}})},[Pe,P,he]),resizeSmoothly:c(async()=>{const e=ke.current(ve.current);ve.current=e,P.current=e,await Pe({y:e,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:He.current,immediate:"element"!==fe.current||he.current})},[Pe,P,he]),closeSmoothly:c(async(e,n)=>{Pe({minSnap:ve.current,immediate:!0}),ve.current=0,await Pe({y:0,maxHeight:Ne.current,maxSnap:De.current,immediate:he.current}),await Pe({ready:0,immediate:!0})},[Pe,he])}});o(()=>{re&&Le(D?"OPEN":"CLOSE")},[D,Le,re]),O(()=>{(Ce||xe||we)&&Le("RESIZE")},[Ce,xe,we,Le]),o(()=>()=>{Ee.current.deactivate(),Re.current.deactivate(),be.current.deactivate()},[be,Re,Ee]),l(a,()=>({snapTo:(e,{velocity:n=1,source:t="custom"}={})=>{Le("SNAP",{payload:{y:ke.current(e),velocity:n,source:t}})},get height(){return ve.current}}),[Le]);const Te=S(e=>{const{args:[{closeOnTap:n=!1}={}]=[],cancel:t,direction:[,r],down:o,first:a,last:i,memo:c=le.y.getValue(),movement:[,s],tap:l,velocity:u}=e;if(ee&&!l)return c;ne(e);const d=-1*s;if(!ae.current)return console.log("handleDrag cancelled dragging because canDragRef is false"),t(),c;if(Z&&n&&l)return t(),setTimeout(()=>Z(),0),c;if(l)return c;const p=c+d,g=d*u,y=Math.max(He.current,Math.min(De.current,p+2*g));if(!o&&Z&&r>0&&p+g<He.current/2)return t(),Z(),c;let m=o?Z||He.current!==De.current?v(p,Z?0:He.current,De.current,.55):p<He.current?v(p,He.current,2*De.current,.55):v(p,He.current/2,De.current,.55):y;return a&&Le("DRAG"),i?(Le("SNAP",{payload:{y:m,velocity:u>.05?u:1,source:"dragging"}}),c):(ue({y:m,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:He.current,immediate:!0,config:{velocity:u}}),c)},{filterTaps:!0});if(Number.isNaN(De.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(He.current))throw new TypeError("minSnapRef is NaN!!");const Me=function({spring:e}){const n=g([e.y,e.maxHeight],(e,n)=>`${Math.round(N(n-e,0,16))}px`),t=g([e.y,e.minSnap,e.maxSnap],(e,n,t)=>`${N(e,n,t)}px`),r=g([e.y,e.minSnap,e.maxSnap],(e,n,t)=>e<n?n-e+"px":e>t?t-e+"px":"0px"),o=g([e.y,e.maxSnap],(e,n)=>e>=n?Math.ceil(e-n):0);return{"--rsbs-content-opacity":g([e.y,e.minSnap],(e,n)=>{if(!n)return 0;const t=Math.max(n/2-45,0);return N((e-t)*(1/(Math.min(n/2+45,n)-t)+0),0,1)}),"--rsbs-backdrop-opacity":g([e.y,e.minSnap],(e,n)=>n?N(e/n,0,1):0),"--rsbs-antigap-scale-y":o,"--rsbs-overlay-translate-y":r,"--rsbs-overlay-rounded":n,"--rsbs-overlay-h":t}}({spring:le});return n.createElement(y.div,x({},te,{"data-rsbs-root":!0,"data-rsbs-state":$.find(Ae.matches),"data-rsbs-is-blocking":J,"data-rsbs-is-dismissable":!!Z,"data-rsbs-has-header":!!w,"data-rsbs-has-footer":!!R,className:b,ref:de,style:x({},Me,U,{opacity:le.ready})}),m,J&&n.createElement("div",x({key:"backdrop","data-rsbs-backdrop":!0},Te({closeOnTap:!0}))),n.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:Se,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),Z&&Z())}},!1!==w&&n.createElement("div",x({key:"header","data-rsbs-header":!0,ref:ye},Te()),w),n.createElement("div",{key:"scroll","data-rsbs-scroll":!0,ref:pe},n.createElement("div",{"data-rsbs-content":!0,ref:ge},u)),R&&n.createElement("div",x({key:"footer",ref:me,"data-rsbs-footer":!0},Te()),R)))}),$=["closed","opening","open","closing","dragging","snapping","resizing"];function B({snapPoints:e,lastSnap:n}){return null!=n?n:Math.min(...e)}function j({minHeight:e}){return e}const V=["onSpringStart","onSpringEnd","skipInitialTransition"],q=u(function(r,o){let{onSpringStart:a,onSpringEnd:s,skipInitialTransition:l}=r,u=C(r,V);const[d,p]=i(!1),g=t(),y=t(null),m=t(l&&u.open?"OPEN":"CLOSED");O(()=>{if(u.open)return cancelAnimationFrame(g.current),p(!0),()=>{m.current="CLOSED"}},[u.open]);const S=c(async function(e){await(null==a?void 0:a(e)),"OPEN"===e.type&&cancelAnimationFrame(g.current)},[a]),v=c(async function(e){await(null==s?void 0:s(e)),"CLOSE"===e.type&&(g.current=requestAnimationFrame(()=>p(!1)))},[s]);return d?n.createElement(e,{"data-rsbs-portal":!0},n.createElement(Z,x({},u,{lastSnapRef:y,ref:o,initialState:m.current,onSpringStart:S,onSpringEnd:v}))):null});export{q as BottomSheet};
//# sourceMappingURL=index.modern.js.map
