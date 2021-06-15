import e from"@reach/portal";import n,{useRef as r,useDebugValue as t,useEffect as o,useLayoutEffect as i,useState as a,useCallback as c,useMemo as u,useImperativeHandle as s,forwardRef as l}from"react";import{useMachine as d}from"@xstate/react";import{useSpring as f,interpolate as v,animated as m,config as p}from"react-spring";import{useDrag as y,rubberbandIfOutOfBounds as h}from"react-use-gesture";import{createFocusTrap as g}from"focus-trap";import{disableBodyScroll as S,enableBodyScroll as P}from"body-scroll-lock";import{ResizeObserver as E}from"@juggle/resize-observer";import{Machine as b,assign as R}from"xstate";function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function O(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n.indexOf(r=i[t])>=0||(o[r]=e[r]);return o}var N="undefined"!=typeof window?i:o;function C(e,n,r){return n=(n=+n)==n?n:0,r=(r=+r)==r?r:0,(e=+e)==e&&(e=(e=e<=r?e:r)>=n?e:n),e}function w(e){var n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}var H={box:"border-box"};function D(e,n){var r=n.label,o=n.enabled,i=n.resizeSourceRef,u=a(0),s=u[0],l=u[1];t(r+": "+s);var d=c(function(e){l(e[0].borderBoxSize[0].blockSize),i.current="element"},[i]);return N(function(){if(e.current&&o){var n=new E(d);return n.observe(e.current,H),function(){n.disconnect()}}},[e,d,o]),o?s:0}function k(e){return void 0===e&&(e=1e3),new Promise(function(n){return setTimeout(n,e)})}var j={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},z={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},A=b({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:x({},j,z)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:x({},j,z)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:x({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[R({y:function(e,n){return n.payload.y},velocity:function(e,n){return n.payload.velocity},snapSource:function(e,n){var r=n.payload.source;return void 0===r?"custom":r}})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:function(e,n){},onSnapCancel:function(e,n){},onResizeCancel:function(e,n){},onCloseCancel:function(e,n){},onOpenEnd:function(e,n){},onSnapEnd:function(e,n){},onRezizeEnd:function(e,n){}},services:{onSnapStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onSnapEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},renderVisuallyHidden:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},activate:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},deactivate:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},openSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},openImmediately:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},snapSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},resizeSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},closeSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}}},guards:{initiallyClosed:function(e){return"CLOSED"===e.initialState},initiallyOpen:function(e){return"OPEN"===e.initialState}}}),L=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","disableDrag","onDrag"],M=["velocity"],T=["onRest","config"],I=p.default,G=I.tension,F=I.friction,Z=n.forwardRef(function(e,i){var l=e.children,p=e.sibling,E=e.className,b=e.footer,R=e.header,H=e.open,k=e.initialState,j=e.lastSnapRef,z=e.initialFocusRef,I=e.onDismiss,Z=e.maxHeight,K=e.defaultSnap,J=void 0===K?V:K,Q=e.snapPoints,U=void 0===Q?q:Q,W=e.blocking,X=void 0===W||W,Y=e.scrollLocking,$=void 0===Y||Y,_=e.style,ee=e.onSpringStart,ne=e.onSpringCancel,re=e.onSpringEnd,te=e.reserveScrollBarGap,oe=void 0===te?X:te,ie=e.disableDrag,ae=void 0!==ie&&ie,ce=e.onDrag,ue=void 0===ce?function(e){}:ce,se=O(e,L),le=function(){var e=a(!1),n=e[0],r=e[1],t=a({}),i=t[0],u=t[1],s=c(function(e){return u(function(n){var r;return x({},n,((r={})[e]=!1,r))}),function(){u(function(n){var r;return x({},n,((r={})[e]=!0,r))})}},[]);return o(function(){var e=Object.values(i);0!==e.length&&e.every(Boolean)&&r(!0)},[i]),{ready:n,registerReady:s}}(),de=le.ready,fe=le.registerReady,ve=r(!1),me=r(ee),pe=r(ne),ye=r(re);o(function(){me.current=ee,pe.current=ne,ye.current=re},[ne,ee,re]);var he,ge,Se=f(function(){return{y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0}}),Pe=Se[0],Ee=Se[1],be=r(null),Re=r(null),xe=r(null),Oe=r(null),Ne=r(null),Ce=r(null),we=r(0),He=r(),De=(he=u(function(){return"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null},[]),ge=r(null==he?void 0:he.matches),t(ge.current?"reduce":"no-preference"),o(function(){var e=function(e){ge.current=e.matches};return null==he||he.addListener(e),function(){return null==he?void 0:he.removeListener(e)}},[he]),ge),ke=function(e){var n=e.targetRef,i=e.enabled,a=e.reserveScrollBarGap,c=r({activate:function(){throw new TypeError("Tried to activate scroll lock too early")},deactivate:function(){}});return t(i?"Enabled":"Disabled"),o(function(){if(!i)return c.current.deactivate(),void(c.current={activate:function(){},deactivate:function(){}});var e=n.current,r=!1;c.current={activate:function(){r||(r=!0,S(e,{allowTouchMove:function(e){return e.closest("[data-body-scroll-lock-ignore]")},reserveScrollBarGap:a}))},deactivate:function(){r&&(r=!1,P(e))}}},[i,n,a]),c}({targetRef:Re,enabled:de&&$,reserveScrollBarGap:oe}),je=function(e){var n=e.targetRef,i=e.enabled,a=r({activate:function(){throw new TypeError("Tried to activate aria hider too early")},deactivate:function(){}});return t(i?"Enabled":"Disabled"),o(function(){if(!i)return a.current.deactivate(),void(a.current={activate:function(){},deactivate:function(){}});var e=n.current,r=!1,t=[],o=[];a.current={activate:function(){if(!r){r=!0;var n=e.parentNode;document.querySelectorAll("body > *").forEach(function(e){if(e!==n){var r=e.getAttribute("aria-hidden");null!==r&&"false"!==r||(t.push(r),o.push(e),e.setAttribute("aria-hidden","true"))}})}},deactivate:function(){r&&(r=!1,o.forEach(function(e,n){var r=t[n];null===r?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r)}),t=[],o=[])}}},[n,i]),a}({targetRef:be,enabled:de&&X}),ze=function(e){var n=e.targetRef,i=e.fallbackRef,a=e.initialFocusRef,c=e.enabled,u=r({activate:function(){throw new TypeError("Tried to activate focus trap too early")},deactivate:function(){}});return t(c?"Enabled":"Disabled"),o(function(){if(!c)return u.current.deactivate(),void(u.current={activate:function(){},deactivate:function(){}});var e=i.current,r=g(n.current,{onActivate:void 0,initialFocus:a?function(){return(null==a?void 0:a.current)||e}:void 0,fallbackFocus:e,escapeDeactivates:!1,clickOutsideDeactivates:!1}),t=!1;u.current={activate:function(){try{return t?Promise.resolve():(t=!0,Promise.resolve(r.activate()).then(function(){return Promise.resolve(new Promise(function(e){return setTimeout(function(){return e(void 0)},0)})).then(function(){})}))}catch(e){return Promise.reject(e)}},deactivate:function(){t&&(t=!1,r.deactivate())}}},[c,i,a,n]),u}({targetRef:be,fallbackRef:Ce,initialFocusRef:z,enabled:de&&X}),Ae=function(e){var n=e.getSnapPoints,i=e.heightRef,c=e.lastSnapRef,s=e.ready,l=function(e){var n=e.contentRef,i=e.controlledMaxHeight,c=e.footerEnabled,s=e.footerRef,l=e.headerEnabled,d=e.headerRef,f=e.registerReady,v=e.resizeSourceRef,m=u(function(){return f("contentHeight")},[f]),p=function(e,n,i){var c=u(function(){return n("maxHeight")},[n]),s=a(function(){return w(e)||"undefined"!=typeof window?window.innerHeight:0}),l=s[0],d=s[1],f=l>0,v=r(0);return t(e?"controlled":"auto"),o(function(){f&&c()},[f,c]),N(function(){if(e)return d(w(e)),void(i.current="maxheightprop");var n=function(){v.current||(v.current=requestAnimationFrame(function(){d(window.innerHeight),i.current="window",v.current=0}))};return window.addEventListener("resize",n),d(window.innerHeight),i.current="window",c(),function(){window.removeEventListener("resize",n),cancelAnimationFrame(v.current)}},[e,c,i]),l}(i,f,v),y=D(d,{label:"headerHeight",enabled:l,resizeSourceRef:v}),h=D(n,{label:"contentHeight",enabled:!0,resizeSourceRef:v}),g=D(s,{label:"footerHeight",enabled:c,resizeSourceRef:v}),S=Math.min(p-y-g,h)+y+g;t("minHeight: "+S);var P=h>0;return o(function(){P&&m()},[P,m]),{maxHeight:p,minHeight:S,headerHeight:y,footerHeight:g}}({contentRef:e.contentRef,controlledMaxHeight:e.controlledMaxHeight,footerEnabled:e.footerEnabled,footerRef:e.footerRef,headerEnabled:e.headerEnabled,headerRef:e.headerRef,registerReady:e.registerReady,resizeSourceRef:e.resizeSourceRef}),d=l.maxHeight,f=l.minHeight,v=l.headerHeight,m=l.footerHeight,p=function(e,n){var r=[].concat(e).map(w).reduce(function(e,r){return e.add(C(r,0,n)),e},new Set),t=Array.from(r),o=Math.min.apply(Math,t);if(Number.isNaN(o))throw new TypeError("minSnap is NaN");var i=Math.max.apply(Math,t);if(Number.isNaN(i))throw new TypeError("maxSnap is NaN");return{snapPoints:t,minSnap:o,maxSnap:i}}(s?n({height:i.current,footerHeight:m,headerHeight:v,minHeight:f,maxHeight:d}):[0],d),y=p.snapPoints,h=p.minSnap,g=p.maxSnap;return t("minSnap: "+h+", maxSnap:"+g),{minSnap:h,maxSnap:g,findSnap:function(e){var n=w("function"==typeof e?e({footerHeight:m,headerHeight:v,height:i.current,minHeight:f,maxHeight:d,snapPoints:y,lastSnap:c.current}):e);return y.reduce(function(e,r){return Math.abs(r-n)<Math.abs(e-n)?r:e},h)},maxHeight:d}}({contentRef:xe,controlledMaxHeight:Z,footerEnabled:!!b,footerRef:Ne,getSnapPoints:U,headerEnabled:!1!==R,headerRef:Oe,heightRef:we,lastSnapRef:j,ready:de,registerReady:fe,resizeSourceRef:He}),Le=Ae.minSnap,Me=Ae.maxSnap,Te=Ae.maxHeight,Ie=Ae.findSnap,Ge=r(Te),Fe=r(Le),Ze=r(Me),Be=r(Ie),Ve=r(0);N(function(){Ge.current=Te,Ze.current=Me,Fe.current=Le,Be.current=Ie,Ve.current=Ie(J)},[Ie,J,Te,Me,Le]);var qe=c(function(e){var n=e.onRest,r=e.config,t=(r=void 0===r?{}:r).velocity,o=void 0===t?1:t,i=O(r,M),a=O(e,T);return new Promise(function(e){return Ee(x({},a,{config:x({velocity:o},i,{mass:1,tension:G,friction:Math.max(F,F+(F-F*o))}),onRest:function(){var r=[].slice.call(arguments);e.apply(void 0,r),null==n||n.apply(void 0,r)}}))})},[Ee]),Ke=d(A,{devTools:!1,actions:{onOpenCancel:c(function(){return null==pe.current?void 0:pe.current({type:"OPEN"})},[]),onSnapCancel:c(function(e){return null==pe.current?void 0:pe.current({type:"SNAP",source:e.snapSource})},[]),onCloseCancel:c(function(){return null==pe.current?void 0:pe.current({type:"CLOSE"})},[]),onResizeCancel:c(function(){return null==pe.current?void 0:pe.current({type:"RESIZE",source:He.current})},[]),onOpenEnd:c(function(){return null==ye.current?void 0:ye.current({type:"OPEN"})},[]),onSnapEnd:c(function(e,n){return null==ye.current?void 0:ye.current({type:"SNAP",source:e.snapSource})},[]),onResizeEnd:c(function(){return null==ye.current?void 0:ye.current({type:"RESIZE",source:He.current})},[])},context:{initialState:k},services:{onSnapStart:c(function(e,n){try{return Promise.resolve(null==me.current?void 0:me.current({type:"SNAP",source:n.payload.source||"custom"}))}catch(e){return Promise.reject(e)}},[]),onOpenStart:c(function(){try{return Promise.resolve(null==me.current?void 0:me.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseStart:c(function(){try{return Promise.resolve(null==me.current?void 0:me.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeStart:c(function(){try{return Promise.resolve(null==me.current?void 0:me.current({type:"RESIZE",source:He.current}))}catch(e){return Promise.reject(e)}},[]),onSnapEnd:c(function(e,n){try{return Promise.resolve(null==ye.current?void 0:ye.current({type:"SNAP",source:e.snapSource}))}catch(e){return Promise.reject(e)}},[]),onOpenEnd:c(function(){try{return Promise.resolve(null==ye.current?void 0:ye.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseEnd:c(function(){try{return Promise.resolve(null==ye.current?void 0:ye.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeEnd:c(function(){try{return Promise.resolve(null==ye.current?void 0:ye.current({type:"RESIZE",source:He.current}))}catch(e){return Promise.reject(e)}},[]),renderVisuallyHidden:c(function(e,n){try{return Promise.resolve(qe({y:Ve.current,ready:0,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Ve.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[qe]),activate:c(function(e,n){try{return ve.current=!0,Promise.resolve(Promise.all([ke.current.activate(),ze.current.activate(),je.current.activate()])).then(function(){})}catch(e){return Promise.reject(e)}},[je,ze,ke]),deactivate:c(function(){try{return ke.current.deactivate(),ze.current.deactivate(),je.current.deactivate(),ve.current=!1,Promise.resolve()}catch(e){return Promise.reject(e)}},[je,ze,ke]),openImmediately:c(function(){try{return we.current=Ve.current,Promise.resolve(qe({y:Ve.current,ready:1,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Ve.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[qe]),openSmoothly:c(function(){try{return Promise.resolve(qe({y:0,ready:1,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Ve.current,immediate:!0})).then(function(){return we.current=Ve.current,Promise.resolve(qe({y:Ve.current,ready:1,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Ve.current,immediate:De.current})).then(function(){})})}catch(e){return Promise.reject(e)}},[qe,De]),snapSmoothly:c(function(e,n){try{var r=Be.current(e.y);return we.current=r,j.current=r,Promise.resolve(qe({y:r,ready:1,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Fe.current,immediate:De.current,config:{velocity:e.velocity}})).then(function(){})}catch(e){return Promise.reject(e)}},[qe,j,De]),resizeSmoothly:c(function(){try{var e=Be.current(we.current);return we.current=e,j.current=e,Promise.resolve(qe({y:e,ready:1,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Fe.current,immediate:"element"!==He.current||De.current})).then(function(){})}catch(e){return Promise.reject(e)}},[qe,j,De]),closeSmoothly:c(function(e,n){try{return qe({minSnap:we.current,immediate:!0}),we.current=0,Promise.resolve(qe({y:0,maxHeight:Ge.current,maxSnap:Ze.current,immediate:De.current})).then(function(){return Promise.resolve(qe({ready:0,immediate:!0})).then(function(){})})}catch(e){return Promise.reject(e)}},[qe,De])}}),Je=Ke[0],Qe=Ke[1];o(function(){de&&Qe(H?"OPEN":"CLOSE")},[H,Qe,de]),N(function(){(Te||Me||Le)&&Qe("RESIZE")},[Te,Me,Le,Qe]),o(function(){return function(){ke.current.deactivate(),ze.current.deactivate(),je.current.deactivate()}},[je,ze,ke]),s(i,function(){return{snapTo:function(e,n){var r=void 0===n?{}:n,t=r.velocity,o=void 0===t?1:t,i=r.source,a=void 0===i?"custom":i;Qe("SNAP",{payload:{y:Be.current(e),velocity:o,source:a}})},get height(){return we.current}}},[Qe]);var Ue=y(function(e){var n=e.args,r=(n=void 0===n?[]:n)[0],t=(r=void 0===r?{}:r).closeOnTap,o=void 0!==t&&t,i=e.cancel,a=e.direction[1],c=e.down,u=e.first,s=e.last,l=e.memo,d=void 0===l?Pe.y.getValue():l,f=e.movement[1],v=e.tap,m=e.velocity;if(ae)return d;ue(e);var p=-1*f;if(!ve.current)return i(),d;if(I&&o&&v)return i(),setTimeout(function(){return I()},0),d;if(v)return d;var y=d+p,g=p*m,S=Math.max(Fe.current,Math.min(Ze.current,y+2*g));if(!c&&I&&a>0&&y+g<Fe.current/2)return i(),I(),d;var P=c?I||Fe.current!==Ze.current?h(y,I?0:Fe.current,Ze.current,.55):y<Fe.current?h(y,Fe.current,2*Ze.current,.55):h(y,Fe.current/2,Ze.current,.55):S;return u&&Qe("DRAG"),s?(Qe("SNAP",{payload:{y:P,velocity:m>.05?m:1,source:"dragging"}}),d):(Ee({y:P,ready:1,maxHeight:Ge.current,maxSnap:Ze.current,minSnap:Fe.current,immediate:!0,config:{velocity:m}}),d)},{filterTaps:!0});if(Number.isNaN(Ze.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(Fe.current))throw new TypeError("minSnapRef is NaN!!");var We=function(e){var n,r=e.spring,t=v([r.y,r.maxHeight],function(e,n){return Math.round(C(n-e,0,16))+"px"}),o=v([r.y,r.minSnap,r.maxSnap],function(e,n,r){return C(e,n,r)+"px"}),i=v([r.y,r.minSnap,r.maxSnap],function(e,n,r){return e<n?n-e+"px":e>r?r-e+"px":"0px"}),a=v([r.y,r.maxSnap],function(e,n){return e>=n?Math.ceil(e-n):0}),c=v([r.y,r.minSnap],function(e,n){if(!n)return 0;var r=Math.max(n/2-45,0);return C((e-r)*(1/(Math.min(n/2+45,n)-r)+0),0,1)}),u=v([r.y,r.minSnap],function(e,n){return n?C(e/n,0,1):0});return(n={})["--rsbs-content-opacity"]=c,n["--rsbs-backdrop-opacity"]=u,n["--rsbs-antigap-scale-y"]=a,n["--rsbs-overlay-translate-y"]=i,n["--rsbs-overlay-rounded"]=t,n["--rsbs-overlay-h"]=o,n}({spring:Pe});return n.createElement(m.div,x({},se,{"data-rsbs-root":!0,"data-rsbs-state":B.find(Je.matches),"data-rsbs-is-blocking":X,"data-rsbs-is-dismissable":!!I,"data-rsbs-has-header":!!R,"data-rsbs-has-footer":!!b,className:E,ref:be,style:x({},We,_,{opacity:Pe.ready})}),p,X&&n.createElement("div",x({key:"backdrop","data-rsbs-backdrop":!0},Ue({closeOnTap:!0}))),n.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:Ce,onKeyDown:function(e){"Escape"===e.key&&(e.stopPropagation(),I&&I())}},!1!==R&&n.createElement("div",x({key:"header","data-rsbs-header":!0,ref:Oe},Ue()),R),n.createElement("div",{key:"scroll","data-rsbs-scroll":!0,ref:Re},n.createElement("div",{"data-rsbs-content":!0,ref:xe},l)),b&&n.createElement("div",x({key:"footer",ref:Ne,"data-rsbs-footer":!0},Ue()),b)))}),B=["closed","opening","open","closing","dragging","snapping","resizing"];function V(e){var n=e.lastSnap;return null!=n?n:Math.min.apply(Math,e.snapPoints)}function q(e){return e.minHeight}var K=["onSpringStart","onSpringEnd","skipInitialTransition"],J=l(function(t,o){var i=t.onSpringStart,u=t.onSpringEnd,s=t.skipInitialTransition,l=O(t,K),d=a(!1),f=d[0],v=d[1],m=r(),p=r(null),y=r(s&&l.open?"OPEN":"CLOSED");N(function(){if(l.open)return cancelAnimationFrame(m.current),v(!0),function(){y.current="CLOSED"}},[l.open]);var h=c(function(e){try{return Promise.resolve(null==i?void 0:i(e)).then(function(){"OPEN"===e.type&&cancelAnimationFrame(m.current)})}catch(e){return Promise.reject(e)}},[i]),g=c(function(e){try{return Promise.resolve(null==u?void 0:u(e)).then(function(){"CLOSE"===e.type&&(m.current=requestAnimationFrame(function(){return v(!1)}))})}catch(e){return Promise.reject(e)}},[u]);return f?n.createElement(e,{"data-rsbs-portal":!0},n.createElement(Z,x({},l,{lastSnapRef:p,ref:o,initialState:y.current,onSpringStart:h,onSpringEnd:g}))):null});export{J as BottomSheet};
//# sourceMappingURL=index.es.js.map
