var e=require("@reach/portal"),n=require("react"),r=require("@xstate/react"),t=require("react-spring"),o=require("react-use-gesture"),a=require("focus-trap"),i=require("body-scroll-lock"),c=require("@juggle/resize-observer"),u=require("xstate");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=s(e),f=s(n);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function v(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n.indexOf(r=a[t])>=0||(o[r]=e[r]);return o}var p="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function m(e,n,r){return n=(n=+n)==n?n:0,r=(r=+r)==r?r:0,(e=+e)==e&&(e=(e=e<=r?e:r)>=n?e:n),e}function y(e){var n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}var h={box:"border-box"};function g(e,r){var t=r.label,o=r.enabled,a=r.resizeSourceRef,i=n.useState(0),u=i[0],s=i[1];n.useDebugValue(t+": "+u);var l=n.useCallback(function(e){s(e[0].borderBoxSize[0].blockSize),a.current="element"},[a]);return p(function(){if(e.current&&o){var n=new c.ResizeObserver(l);return n.observe(e.current,h),function(){n.disconnect()}}},[e,l,o]),o?u:0}function S(e){return void 0===e&&(e=1e3),new Promise(function(n){return setTimeout(n,e)})}var b={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},E={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},P=u.Machine({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:d({},b,E)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:d({},b,E)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:d({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[u.assign({y:function(e,n){return n.payload.y},velocity:function(e,n){return n.payload.velocity},snapSource:function(e,n){var r=n.payload.source;return void 0===r?"custom":r}})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:function(e,n){},onSnapCancel:function(e,n){},onResizeCancel:function(e,n){},onCloseCancel:function(e,n){},onOpenEnd:function(e,n){},onSnapEnd:function(e,n){},onRezizeEnd:function(e,n){}},services:{onSnapStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onSnapEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},renderVisuallyHidden:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},activate:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},deactivate:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},openSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},openImmediately:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},snapSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},resizeSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},closeSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}}},guards:{initiallyClosed:function(e){return"CLOSED"===e.initialState},initiallyOpen:function(e){return"OPEN"===e.initialState}}}),R=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","disableDrag"],C=["velocity"],k=["onRest","config"],x=t.config.default,O=x.tension,N=x.friction,D=f.default.forwardRef(function(e,c){var u=e.children,s=e.sibling,l=e.className,h=e.footer,S=e.header,b=e.open,E=e.initialState,x=e.lastSnapRef,D=e.initialFocusRef,z=e.onDismiss,A=e.maxHeight,M=e.defaultSnap,L=void 0===M?H:M,T=e.snapPoints,I=void 0===T?j:T,B=e.blocking,F=void 0===B||B,G=e.scrollLocking,q=void 0===G||G,V=e.style,Z=e.onSpringStart,K=e.onSpringCancel,J=e.onSpringEnd,Q=e.reserveScrollBarGap,U=void 0===Q?F:Q,W=e.disableDrag,X=void 0!==W&&W,Y=v(e,R),$=function(){var e=n.useState(!1),r=e[0],t=e[1],o=n.useState({}),a=o[0],i=o[1],c=n.useCallback(function(e){return i(function(n){var r;return d({},n,((r={})[e]=!1,r))}),function(){i(function(n){var r;return d({},n,((r={})[e]=!0,r))})}},[]);return n.useEffect(function(){var e=Object.values(a);0!==e.length&&e.every(Boolean)&&t(!0)},[a]),{ready:r,registerReady:c}}(),_=$.ready,ee=$.registerReady,ne=n.useRef(!1),re=n.useRef(Z),te=n.useRef(K),oe=n.useRef(J);n.useEffect(function(){re.current=Z,te.current=K,oe.current=J},[K,Z,J]);var ae,ie,ce=t.useSpring(function(){return{y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0}}),ue=ce[0],se=ce[1],le=n.useRef(null),fe=n.useRef(null),de=n.useRef(null),ve=n.useRef(null),pe=n.useRef(null),me=n.useRef(null),ye=n.useRef(0),he=n.useRef(),ge=(ae=n.useMemo(function(){return"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null},[]),ie=n.useRef(null==ae?void 0:ae.matches),n.useDebugValue(ie.current?"reduce":"no-preference"),n.useEffect(function(){var e=function(e){ie.current=e.matches};return null==ae||ae.addListener(e),function(){return null==ae?void 0:ae.removeListener(e)}},[ae]),ie),Se=function(e){var r=e.targetRef,t=e.enabled,o=e.reserveScrollBarGap,a=n.useRef({activate:function(){throw new TypeError("Tried to activate scroll lock too early")},deactivate:function(){}});return n.useDebugValue(t?"Enabled":"Disabled"),n.useEffect(function(){if(!t)return a.current.deactivate(),void(a.current={activate:function(){},deactivate:function(){}});var e=r.current,n=!1;a.current={activate:function(){n||(n=!0,i.disableBodyScroll(e,{allowTouchMove:function(e){return e.closest("[data-body-scroll-lock-ignore]")},reserveScrollBarGap:o}))},deactivate:function(){n&&(n=!1,i.enableBodyScroll(e))}}},[t,r,o]),a}({targetRef:fe,enabled:_&&q,reserveScrollBarGap:U}),be=function(e){var r=e.targetRef,t=e.enabled,o=n.useRef({activate:function(){throw new TypeError("Tried to activate aria hider too early")},deactivate:function(){}});return n.useDebugValue(t?"Enabled":"Disabled"),n.useEffect(function(){if(!t)return o.current.deactivate(),void(o.current={activate:function(){},deactivate:function(){}});var e=r.current,n=!1,a=[],i=[];o.current={activate:function(){if(!n){n=!0;var r=e.parentNode;document.querySelectorAll("body > *").forEach(function(e){if(e!==r){var n=e.getAttribute("aria-hidden");null!==n&&"false"!==n||(a.push(n),i.push(e),e.setAttribute("aria-hidden","true"))}})}},deactivate:function(){n&&(n=!1,i.forEach(function(e,n){var r=a[n];null===r?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r)}),a=[],i=[])}}},[r,t]),o}({targetRef:le,enabled:_&&F}),Ee=function(e){var r=e.targetRef,t=e.fallbackRef,o=e.initialFocusRef,i=e.enabled,c=n.useRef({activate:function(){throw new TypeError("Tried to activate focus trap too early")},deactivate:function(){}});return n.useDebugValue(i?"Enabled":"Disabled"),n.useEffect(function(){if(!i)return c.current.deactivate(),void(c.current={activate:function(){},deactivate:function(){}});var e=t.current,n=a.createFocusTrap(r.current,{onActivate:void 0,initialFocus:o?function(){return(null==o?void 0:o.current)||e}:void 0,fallbackFocus:e,escapeDeactivates:!1,clickOutsideDeactivates:!1}),u=!1;c.current={activate:function(){try{return u?Promise.resolve():(u=!0,Promise.resolve(n.activate()).then(function(){return Promise.resolve(new Promise(function(e){return setTimeout(function(){return e(void 0)},0)})).then(function(){})}))}catch(e){return Promise.reject(e)}},deactivate:function(){u&&(u=!1,n.deactivate())}}},[i,t,o,r]),c}({targetRef:le,fallbackRef:me,initialFocusRef:D,enabled:_&&F}),Pe=function(e){var r=e.getSnapPoints,t=e.heightRef,o=e.lastSnapRef,a=e.ready,i=function(e){var r=e.contentRef,t=e.controlledMaxHeight,o=e.footerEnabled,a=e.footerRef,i=e.headerEnabled,c=e.headerRef,u=e.registerReady,s=e.resizeSourceRef,l=n.useMemo(function(){return u("contentHeight")},[u]),f=function(e,r,t){var o=n.useMemo(function(){return r("maxHeight")},[r]),a=n.useState(function(){return y(e)||"undefined"!=typeof window?window.innerHeight:0}),i=a[0],c=a[1],u=i>0,s=n.useRef(0);return n.useDebugValue(e?"controlled":"auto"),n.useEffect(function(){u&&o()},[u,o]),p(function(){if(e)return c(y(e)),void(t.current="maxheightprop");var n=function(){s.current||(s.current=requestAnimationFrame(function(){c(window.innerHeight),t.current="window",s.current=0}))};return window.addEventListener("resize",n),c(window.innerHeight),t.current="window",o(),function(){window.removeEventListener("resize",n),cancelAnimationFrame(s.current)}},[e,o,t]),i}(t,u,s),d=g(c,{label:"headerHeight",enabled:i,resizeSourceRef:s}),v=g(r,{label:"contentHeight",enabled:!0,resizeSourceRef:s}),m=g(a,{label:"footerHeight",enabled:o,resizeSourceRef:s}),h=Math.min(f-d-m,v)+d+m;n.useDebugValue("minHeight: "+h);var S=v>0;return n.useEffect(function(){S&&l()},[S,l]),{maxHeight:f,minHeight:h,headerHeight:d,footerHeight:m}}({contentRef:e.contentRef,controlledMaxHeight:e.controlledMaxHeight,footerEnabled:e.footerEnabled,footerRef:e.footerRef,headerEnabled:e.headerEnabled,headerRef:e.headerRef,registerReady:e.registerReady,resizeSourceRef:e.resizeSourceRef}),c=i.maxHeight,u=i.minHeight,s=i.headerHeight,l=i.footerHeight,f=function(e,n){var r=[].concat(e).map(y).reduce(function(e,r){return e.add(m(r,0,n)),e},new Set),t=Array.from(r),o=Math.min.apply(Math,t);if(Number.isNaN(o))throw new TypeError("minSnap is NaN");var a=Math.max.apply(Math,t);if(Number.isNaN(a))throw new TypeError("maxSnap is NaN");return{snapPoints:t,minSnap:o,maxSnap:a}}(a?r({height:t.current,footerHeight:l,headerHeight:s,minHeight:u,maxHeight:c}):[0],c),d=f.snapPoints,v=f.minSnap,h=f.maxSnap;return n.useDebugValue("minSnap: "+v+", maxSnap:"+h),{minSnap:v,maxSnap:h,findSnap:function(e){var n=y("function"==typeof e?e({footerHeight:l,headerHeight:s,height:t.current,minHeight:u,maxHeight:c,snapPoints:d,lastSnap:o.current}):e);return d.reduce(function(e,r){return Math.abs(r-n)<Math.abs(e-n)?r:e},v)},maxHeight:c}}({contentRef:de,controlledMaxHeight:A,footerEnabled:!!h,footerRef:pe,getSnapPoints:I,headerEnabled:!1!==S,headerRef:ve,heightRef:ye,lastSnapRef:x,ready:_,registerReady:ee,resizeSourceRef:he}),Re=Pe.minSnap,Ce=Pe.maxSnap,ke=Pe.maxHeight,xe=Pe.findSnap,Oe=n.useRef(ke),Ne=n.useRef(Re),De=n.useRef(Ce),we=n.useRef(xe),He=n.useRef(0);p(function(){Oe.current=ke,De.current=Ce,Ne.current=Re,we.current=xe,He.current=xe(L)},[xe,L,ke,Ce,Re]);var je=n.useCallback(function(e){var n=e.onRest,r=e.config,t=(r=void 0===r?{}:r).velocity,o=void 0===t?1:t,a=v(r,C),i=v(e,k);return new Promise(function(e){return se(d({},i,{config:d({velocity:o},a,{mass:1,tension:O,friction:Math.max(N,N+(N-N*o))}),onRest:function(){var r=[].slice.call(arguments);e.apply(void 0,r),null==n||n.apply(void 0,r)}}))})},[se]),ze=r.useMachine(P,{devTools:!1,actions:{onOpenCancel:n.useCallback(function(){return null==te.current?void 0:te.current({type:"OPEN"})},[]),onSnapCancel:n.useCallback(function(e){return null==te.current?void 0:te.current({type:"SNAP",source:e.snapSource})},[]),onCloseCancel:n.useCallback(function(){return null==te.current?void 0:te.current({type:"CLOSE"})},[]),onResizeCancel:n.useCallback(function(){return null==te.current?void 0:te.current({type:"RESIZE",source:he.current})},[]),onOpenEnd:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"OPEN"})},[]),onSnapEnd:n.useCallback(function(e,n){return null==oe.current?void 0:oe.current({type:"SNAP",source:e.snapSource})},[]),onResizeEnd:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"RESIZE",source:he.current})},[])},context:{initialState:E},services:{onSnapStart:n.useCallback(function(e,n){try{return Promise.resolve(null==re.current?void 0:re.current({type:"SNAP",source:n.payload.source||"custom"}))}catch(e){return Promise.reject(e)}},[]),onOpenStart:n.useCallback(function(){try{return Promise.resolve(null==re.current?void 0:re.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseStart:n.useCallback(function(){try{return Promise.resolve(null==re.current?void 0:re.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeStart:n.useCallback(function(){try{return Promise.resolve(null==re.current?void 0:re.current({type:"RESIZE",source:he.current}))}catch(e){return Promise.reject(e)}},[]),onSnapEnd:n.useCallback(function(e,n){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"SNAP",source:e.snapSource}))}catch(e){return Promise.reject(e)}},[]),onOpenEnd:n.useCallback(function(){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseEnd:n.useCallback(function(){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeEnd:n.useCallback(function(){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"RESIZE",source:he.current}))}catch(e){return Promise.reject(e)}},[]),renderVisuallyHidden:n.useCallback(function(e,n){try{return Promise.resolve(je({y:He.current,ready:0,maxHeight:Oe.current,maxSnap:De.current,minSnap:He.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[je]),activate:n.useCallback(function(e,n){try{return ne.current=!0,Promise.resolve(Promise.all([Se.current.activate(),Ee.current.activate(),be.current.activate()])).then(function(){})}catch(e){return Promise.reject(e)}},[be,Ee,Se]),deactivate:n.useCallback(function(){try{return Se.current.deactivate(),Ee.current.deactivate(),be.current.deactivate(),ne.current=!1,Promise.resolve()}catch(e){return Promise.reject(e)}},[be,Ee,Se]),openImmediately:n.useCallback(function(){try{return ye.current=He.current,Promise.resolve(je({y:He.current,ready:1,maxHeight:Oe.current,maxSnap:De.current,minSnap:He.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[je]),openSmoothly:n.useCallback(function(){try{return Promise.resolve(je({y:0,ready:1,maxHeight:Oe.current,maxSnap:De.current,minSnap:He.current,immediate:!0})).then(function(){return ye.current=He.current,Promise.resolve(je({y:He.current,ready:1,maxHeight:Oe.current,maxSnap:De.current,minSnap:He.current,immediate:ge.current})).then(function(){})})}catch(e){return Promise.reject(e)}},[je,ge]),snapSmoothly:n.useCallback(function(e,n){try{var r=we.current(e.y);return ye.current=r,x.current=r,Promise.resolve(je({y:r,ready:1,maxHeight:Oe.current,maxSnap:De.current,minSnap:Ne.current,immediate:ge.current,config:{velocity:e.velocity}})).then(function(){})}catch(e){return Promise.reject(e)}},[je,x,ge]),resizeSmoothly:n.useCallback(function(){try{var e=we.current(ye.current);return ye.current=e,x.current=e,Promise.resolve(je({y:e,ready:1,maxHeight:Oe.current,maxSnap:De.current,minSnap:Ne.current,immediate:"element"!==he.current||ge.current})).then(function(){})}catch(e){return Promise.reject(e)}},[je,x,ge]),closeSmoothly:n.useCallback(function(e,n){try{return je({minSnap:ye.current,immediate:!0}),ye.current=0,Promise.resolve(je({y:0,maxHeight:Oe.current,maxSnap:De.current,immediate:ge.current})).then(function(){return Promise.resolve(je({ready:0,immediate:!0})).then(function(){})})}catch(e){return Promise.reject(e)}},[je,ge])}}),Ae=ze[0],Me=ze[1];n.useEffect(function(){_&&Me(b?"OPEN":"CLOSE")},[b,Me,_]),p(function(){(ke||Ce||Re)&&Me("RESIZE")},[ke,Ce,Re,Me]),n.useEffect(function(){return function(){Se.current.deactivate(),Ee.current.deactivate(),be.current.deactivate()}},[be,Ee,Se]),n.useImperativeHandle(c,function(){return{snapTo:function(e,n){var r=void 0===n?{}:n,t=r.velocity,o=void 0===t?1:t,a=r.source,i=void 0===a?"custom":a;Me("SNAP",{payload:{y:we.current(e),velocity:o,source:i}})},get height(){return ye.current}}},[Me]);var Le=o.useDrag(function(e){var n=e.args,r=(n=void 0===n?[]:n)[0],t=(r=void 0===r?{}:r).closeOnTap,a=void 0!==t&&t,i=e.cancel,c=e.direction[1],u=e.down,s=e.first,l=e.last,f=e.memo,d=void 0===f?ue.y.getValue():f,v=e.tap,p=e.velocity;if(X)return d;var m=-1*e.movement[1];if(!ne.current)return i(),d;if(z&&a&&v)return i(),setTimeout(function(){return z()},0),d;if(v)return d;var y=d+m,h=m*p,g=Math.max(Ne.current,Math.min(De.current,y+2*h));if(!u&&z&&c>0&&y+h<Ne.current/2)return i(),z(),d;var S=u?z||Ne.current!==De.current?o.rubberbandIfOutOfBounds(y,z?0:Ne.current,De.current,.55):y<Ne.current?o.rubberbandIfOutOfBounds(y,Ne.current,2*De.current,.55):o.rubberbandIfOutOfBounds(y,Ne.current/2,De.current,.55):g;return s&&Me("DRAG"),l?(Me("SNAP",{payload:{y:S,velocity:p>.05?p:1,source:"dragging"}}),d):(se({y:S,ready:1,maxHeight:Oe.current,maxSnap:De.current,minSnap:Ne.current,immediate:!0,config:{velocity:p}}),d)},{filterTaps:!0});if(Number.isNaN(De.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(Ne.current))throw new TypeError("minSnapRef is NaN!!");var Te=function(e){var n,r=e.spring,o=t.interpolate([r.y,r.maxHeight],function(e,n){return Math.round(m(n-e,0,16))+"px"}),a=t.interpolate([r.y,r.minSnap,r.maxSnap],function(e,n,r){return m(e,n,r)+"px"}),i=t.interpolate([r.y,r.minSnap,r.maxSnap],function(e,n,r){return e<n?n-e+"px":e>r?r-e+"px":"0px"}),c=t.interpolate([r.y,r.maxSnap],function(e,n){return e>=n?Math.ceil(e-n):0}),u=t.interpolate([r.y,r.minSnap],function(e,n){if(!n)return 0;var r=Math.max(n/2-45,0);return m((e-r)*(1/(Math.min(n/2+45,n)-r)+0),0,1)}),s=t.interpolate([r.y,r.minSnap],function(e,n){return n?m(e/n,0,1):0});return(n={})["--rsbs-content-opacity"]=u,n["--rsbs-backdrop-opacity"]=s,n["--rsbs-antigap-scale-y"]=c,n["--rsbs-overlay-translate-y"]=i,n["--rsbs-overlay-rounded"]=o,n["--rsbs-overlay-h"]=a,n}({spring:ue});return f.default.createElement(t.animated.div,d({},Y,{"data-rsbs-root":!0,"data-rsbs-state":w.find(Ae.matches),"data-rsbs-is-blocking":F,"data-rsbs-is-dismissable":!!z,"data-rsbs-has-header":!!S,"data-rsbs-has-footer":!!h,className:l,ref:le,style:d({},Te,V,{opacity:ue.ready})}),s,F&&f.default.createElement("div",d({key:"backdrop","data-rsbs-backdrop":!0},Le({closeOnTap:!0}))),f.default.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:me,onKeyDown:function(e){"Escape"===e.key&&(e.stopPropagation(),z&&z())}},!1!==S&&f.default.createElement("div",d({key:"header","data-rsbs-header":!0,ref:ve},Le()),S),f.default.createElement("div",{key:"scroll","data-rsbs-scroll":!0,ref:fe},f.default.createElement("div",{"data-rsbs-content":!0,ref:de},u)),h&&f.default.createElement("div",d({key:"footer",ref:pe,"data-rsbs-footer":!0},Le()),h)))}),w=["closed","opening","open","closing","dragging","snapping","resizing"];function H(e){var n=e.lastSnap;return null!=n?n:Math.min.apply(Math,e.snapPoints)}function j(e){return e.minHeight}var z=["onSpringStart","onSpringEnd","skipInitialTransition"],A=n.forwardRef(function(e,r){var t=e.onSpringStart,o=e.onSpringEnd,a=e.skipInitialTransition,i=v(e,z),c=n.useState(!1),u=c[0],s=c[1],m=n.useRef(),y=n.useRef(null),h=n.useRef(a&&i.open?"OPEN":"CLOSED");p(function(){if(i.open)return cancelAnimationFrame(m.current),s(!0),function(){h.current="CLOSED"}},[i.open]);var g=n.useCallback(function(e){try{return Promise.resolve(null==t?void 0:t(e)).then(function(){"OPEN"===e.type&&cancelAnimationFrame(m.current)})}catch(e){return Promise.reject(e)}},[t]),S=n.useCallback(function(e){try{return Promise.resolve(null==o?void 0:o(e)).then(function(){"CLOSE"===e.type&&(m.current=requestAnimationFrame(function(){return s(!1)}))})}catch(e){return Promise.reject(e)}},[o]);return u?f.default.createElement(l.default,{"data-rsbs-portal":!0},f.default.createElement(D,d({},i,{lastSnapRef:y,ref:r,initialState:h.current,onSpringStart:g,onSpringEnd:S}))):null});exports.BottomSheet=A;
//# sourceMappingURL=index.js.map
