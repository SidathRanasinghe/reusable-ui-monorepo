import{j as a}from"./jsx-runtime-DdxpLdx6.js";import{fn as oe}from"./index-Cf3xVBfy.js";import{r as w}from"./index-Bk7LAl9r.js";import{a as L,g as wr}from"./utils-CvxHGwbR.js";import{B as fr}from"./button-CDI4k_Ur.js";import{c as nn}from"./createLucideIcon-DO4rnCdN.js";import{C as Nr,a as Cr}from"./chevron-right-BAKq19RS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BGsY1BpV.js";/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],jr=nn("arrow-left",zr);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Tr=nn("arrow-right",Ir);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Pr=nn("circle-x",kr);function Er(e){return Object.prototype.toString.call(e)==="[object Object]"}function fn(e){return Er(e)||Array.isArray(e)}function Lr(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function sn(e,t){const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==o?!1:n.every(r=>{const u=e[r],l=t[r];return typeof u=="function"?`${u}`==`${l}`:!fn(u)||!fn(l)?u===l:sn(u,l)})}function mn(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function _r(e,t){if(e.length!==t.length)return!1;const n=mn(e),s=mn(t);return n.every((i,o)=>{const r=s[o];return sn(i,r)})}function rn(e){return typeof e=="number"}function en(e){return typeof e=="string"}function Gt(e){return typeof e=="boolean"}function pn(e){return Object.prototype.toString.call(e)==="[object Object]"}function H(e){return Math.abs(e)}function on(e){return Math.sign(e)}function Fe(e,t){return H(e-t)}function Dr(e,t){if(e===0||t===0||H(e)<=H(t))return 0;const n=Fe(H(e),H(t));return H(n/e)}function Vr(e){return Math.round(e*100)/100}function Re(e){return He(e).map(Number)}function le(e){return e[Be(e)]}function Be(e){return Math.max(0,e.length-1)}function an(e,t){return t===Be(e)}function gn(e,t=0){return Array.from(Array(e),(n,s)=>t+s)}function He(e){return Object.keys(e)}function mr(e,t){return[e,t].reduce((n,s)=>(He(s).forEach(i=>{const o=n[i],r=s[i],u=pn(o)&&pn(r);n[i]=u?mr(o,r):r}),n),{})}function tn(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Ar(e,t){const n={start:s,center:i,end:o};function s(){return 0}function i(l){return o(l)/2}function o(l){return t-l}function r(l,c){return en(e)?n[e](l):e(t,l,c)}return{measure:r}}function $e(){let e=[];function t(i,o,r,u={passive:!0}){let l;if("addEventListener"in i)i.addEventListener(o,r,u),l=()=>i.removeEventListener(o,r,u);else{const c=i;c.addListener(r),l=()=>c.removeListener(r)}return e.push(l),s}function n(){e=e.filter(i=>i())}const s={add:t,clear:n};return s}function Or(e,t,n,s){const i=$e(),o=1e3/60;let r=null,u=0,l=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&f()})}function h(){y(),i.clear()}function m(b){if(!l)return;r||(r=b,n(),n());const d=b-r;for(r=b,u+=d;u>=o;)n(),u-=o;const v=u/o;s(v),l&&(l=t.requestAnimationFrame(m))}function p(){l||(l=t.requestAnimationFrame(m))}function y(){t.cancelAnimationFrame(l),r=null,u=0,l=0}function f(){r=null,u=0}return{init:c,destroy:h,start:p,stop:y,update:n,render:s}}function Mr(e,t){const n=t==="rtl",s=e==="y",i=s?"y":"x",o=s?"x":"y",r=!s&&n?-1:1,u=h(),l=m();function c(f){const{height:g,width:b}=f;return s?g:b}function h(){return s?"top":n?"right":"left"}function m(){return s?"bottom":n?"left":"right"}function p(f){return f*r}return{scroll:i,cross:o,startEdge:u,endEdge:l,measureSize:c,direction:p}}function je(e=0,t=0){const n=H(e-t);function s(c){return c<e}function i(c){return c>t}function o(c){return s(c)||i(c)}function r(c){return o(c)?s(c)?e:t:c}function u(c){return n?c-n*Math.ceil((c-t)/n):c}return{length:n,max:t,min:e,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function pr(e,t,n){const{constrain:s}=je(0,e),i=e+1;let o=r(t);function r(p){return n?H((i+p)%i):s(p)}function u(){return o}function l(p){return o=r(p),m}function c(p){return h().set(u()+p)}function h(){return pr(e,u(),n)}const m={get:u,set:l,add:c,clone:h};return m}function qr(e,t,n,s,i,o,r,u,l,c,h,m,p,y,f,g,b,d,v){const{cross:S,direction:I}=e,P=["INPUT","SELECT","TEXTAREA"],T={passive:!1},j=$e(),C=$e(),E=je(50,225).constrain(y.measure(20)),A={mouse:300,touch:400},N={mouse:500,touch:600},O=f?43:25;let _=!1,Y=0,Z=0,fe=!1,me=!1,ce=!1,ae=!1;function z(x){if(!v)return;function D(U){(Gt(v)||v(x,U))&&ne(U)}const q=t;j.add(q,"dragstart",U=>U.preventDefault(),T).add(q,"touchmove",()=>{},T).add(q,"touchend",()=>{}).add(q,"touchstart",D).add(q,"mousedown",D).add(q,"touchcancel",$).add(q,"contextmenu",$).add(q,"click",ie,!0)}function ee(){j.clear(),C.clear()}function V(){const x=ae?n:t;C.add(x,"touchmove",W,T).add(x,"touchend",$).add(x,"mousemove",W,T).add(x,"mouseup",$)}function he(x){const D=x.nodeName||"";return P.includes(D)}function te(){return(f?N:A)[ae?"mouse":"touch"]}function xe(x,D){const q=m.add(on(x)*-1),U=h.byDistance(x,!f).distance;return f||H(x)<E?U:b&&D?U*.5:h.byIndex(q.get(),0).distance}function ne(x){const D=tn(x,s);ae=D,ce=f&&D&&!x.buttons&&_,_=Fe(i.get(),r.get())>=2,!(D&&x.button!==0)&&(he(x.target)||(fe=!0,o.pointerDown(x),c.useFriction(0).useDuration(0),i.set(r),V(),Y=o.readPoint(x),Z=o.readPoint(x,S),p.emit("pointerDown")))}function W(x){if(!tn(x,s)&&x.touches.length>=2)return $(x);const q=o.readPoint(x),U=o.readPoint(x,S),K=Fe(q,Y),se=Fe(U,Z);if(!me&&!ae&&(!x.cancelable||(me=K>se,!me)))return $(x);const F=o.pointerMove(x);K>g&&(ce=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(I(F)),x.preventDefault()}function $(x){const q=h.byDistance(0,!1).index!==m.get(),U=o.pointerUp(x)*te(),K=xe(I(U),q),se=Dr(U,K),F=O-10*se,ue=d+se/50;me=!1,fe=!1,C.clear(),c.useDuration(F).useFriction(ue),l.distance(K,!f),ae=!1,p.emit("pointerUp")}function ie(x){ce&&(x.stopPropagation(),x.preventDefault(),ce=!1)}function G(){return fe}return{init:z,destroy:ee,pointerDown:G}}function Fr(e,t){let s,i;function o(m){return m.timeStamp}function r(m,p){const f=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(tn(m,t)?m:m.touches[0])[f]}function u(m){return s=m,i=m,r(m)}function l(m){const p=r(m)-r(i),y=o(m)-o(s)>170;return i=m,y&&(s=m),p}function c(m){if(!s||!i)return 0;const p=r(i)-r(s),y=o(m)-o(s),f=o(m)-o(i)>170,g=p/y;return y&&!f&&H(g)>.1?g:0}return{pointerDown:u,pointerMove:l,pointerUp:c,readPoint:r}}function Rr(){function e(n){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=n;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:e}}function Hr(e){function t(s){return e*(s/100)}return{measure:t}}function $r(e,t,n,s,i,o,r){const u=[e].concat(s);let l,c,h=[],m=!1;function p(b){return i.measureSize(r.measure(b))}function y(b){if(!o)return;c=p(e),h=s.map(p);function d(v){for(const S of v){if(m)return;const I=S.target===e,P=s.indexOf(S.target),T=I?c:h[P],j=p(I?e:s[P]);if(H(j-T)>=.5){b.reInit(),t.emit("resize");break}}}l=new ResizeObserver(v=>{(Gt(o)||o(b,v))&&d(v)}),n.requestAnimationFrame(()=>{u.forEach(v=>l.observe(v))})}function f(){m=!0,l&&l.disconnect()}return{init:y,destroy:f}}function Br(e,t,n,s,i,o){let r=0,u=0,l=i,c=o,h=e.get(),m=0;function p(){const T=s.get()-e.get(),j=!l;let C=0;return j?(r=0,n.set(s),e.set(s),C=T):(n.set(e),r+=T/l,r*=c,h+=r,e.add(r),C=h-m),u=on(C),m=h,P}function y(){const T=s.get()-t.get();return H(T)<.001}function f(){return l}function g(){return u}function b(){return r}function d(){return S(i)}function v(){return I(o)}function S(T){return l=T,P}function I(T){return c=T,P}const P={direction:g,duration:f,velocity:b,seek:p,settled:y,useBaseFriction:v,useBaseDuration:d,useFriction:I,useDuration:S};return P}function Gr(e,t,n,s,i){const o=i.measure(10),r=i.measure(50),u=je(.1,.99);let l=!1;function c(){return!(l||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function h(y){if(!c())return;const f=e.reachedMin(t.get())?"min":"max",g=H(e[f]-t.get()),b=n.get()-t.get(),d=u.constrain(g/r);n.subtract(b*d),!y&&H(b)<o&&(n.set(e.constrain(n.get())),s.useDuration(25).useBaseFriction())}function m(y){l=!y}return{shouldConstrain:c,constrain:h,toggleActive:m}}function Ur(e,t,n,s,i){const o=je(-t+e,0),r=m(),u=h(),l=p();function c(f,g){return Fe(f,g)<=1}function h(){const f=r[0],g=le(r),b=r.lastIndexOf(f),d=r.indexOf(g)+1;return je(b,d)}function m(){return n.map((f,g)=>{const{min:b,max:d}=o,v=o.constrain(f),S=!g,I=an(n,g);return S?d:I||c(b,v)?b:c(d,v)?d:v}).map(f=>parseFloat(f.toFixed(3)))}function p(){if(t<=e+i)return[o.max];if(s==="keepSnaps")return r;const{min:f,max:g}=u;return r.slice(f,g)}return{snapsContained:l,scrollContainLimit:u}}function Kr(e,t,n){const s=t[0],i=n?s-e:le(t);return{limit:je(i,s)}}function Xr(e,t,n,s){const o=t.min+.1,r=t.max+.1,{reachedMin:u,reachedMax:l}=je(o,r);function c(p){return p===1?l(n.get()):p===-1?u(n.get()):!1}function h(p){if(!c(p))return;const y=e*(p*-1);s.forEach(f=>f.add(y))}return{loop:h}}function Jr(e){const{max:t,length:n}=e;function s(o){const r=o-t;return n?r/-n:0}return{get:s}}function Wr(e,t,n,s,i){const{startEdge:o,endEdge:r}=e,{groupSlides:u}=i,l=m().map(t.measure),c=p(),h=y();function m(){return u(s).map(g=>le(g)[r]-g[0][o]).map(H)}function p(){return s.map(g=>n[o]-g[o]).map(g=>-H(g))}function y(){return u(c).map(g=>g[0]).map((g,b)=>g+l[b])}return{snaps:c,snapsAligned:h}}function Qr(e,t,n,s,i,o){const{groupSlides:r}=i,{min:u,max:l}=s,c=h();function h(){const p=r(o),y=!e||t==="keepSnaps";return n.length===1?[o]:y?p:p.slice(u,l).map((f,g,b)=>{const d=!g,v=an(b,g);if(d){const S=le(b[0])+1;return gn(S)}if(v){const S=Be(o)-le(b)[0]+1;return gn(S,le(b)[0])}return f})}return{slideRegistry:c}}function Yr(e,t,n,s,i){const{reachedAny:o,removeOffset:r,constrain:u}=s;function l(f){return f.concat().sort((g,b)=>H(g)-H(b))[0]}function c(f){const g=e?r(f):u(f),b=t.map((v,S)=>({diff:h(v-g,0),index:S})).sort((v,S)=>H(v.diff)-H(S.diff)),{index:d}=b[0];return{index:d,distance:g}}function h(f,g){const b=[f,f+n,f-n];if(!e)return f;if(!g)return l(b);const d=b.filter(v=>on(v)===g);return d.length?l(d):le(b)-n}function m(f,g){const b=t[f]-i.get(),d=h(b,g);return{index:f,distance:d}}function p(f,g){const b=i.get()+f,{index:d,distance:v}=c(b),S=!e&&o(b);if(!g||S)return{index:d,distance:f};const I=t[d]-v,P=f+h(I,0);return{index:d,distance:P}}return{byDistance:p,byIndex:m,shortcut:h}}function Zr(e,t,n,s,i,o,r){function u(m){const p=m.distance,y=m.index!==t.get();o.add(p),p&&(s.duration()?e.start():(e.update(),e.render(1),e.update())),y&&(n.set(t.get()),t.set(m.index),r.emit("select"))}function l(m,p){const y=i.byDistance(m,p);u(y)}function c(m,p){const y=t.clone().set(m),f=i.byIndex(y.get(),p);u(f)}return{distance:l,index:c}}function eo(e,t,n,s,i,o,r,u){const l={passive:!0,capture:!0};let c=0;function h(y){if(!u)return;function f(g){if(new Date().getTime()-c>10)return;r.emit("slideFocusStart"),e.scrollLeft=0;const v=n.findIndex(S=>S.includes(g));rn(v)&&(i.useDuration(0),s.index(v,0),r.emit("slideFocus"))}o.add(document,"keydown",m,!1),t.forEach((g,b)=>{o.add(g,"focus",d=>{(Gt(u)||u(y,d))&&f(b)},l)})}function m(y){y.code==="Tab"&&(c=new Date().getTime())}return{init:h}}function qe(e){let t=e;function n(){return t}function s(l){t=r(l)}function i(l){t+=r(l)}function o(l){t-=r(l)}function r(l){return rn(l)?l:l.get()}return{get:n,set:s,add:i,subtract:o}}function gr(e,t){const n=e.scroll==="x"?r:u,s=t.style;let i=null,o=!1;function r(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function l(p){if(o)return;const y=Vr(e.direction(p));y!==i&&(s.transform=n(y),i=y)}function c(p){o=!p}function h(){o||(s.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:h,to:l,toggleActive:c}}function to(e,t,n,s,i,o,r,u,l){const h=Re(i),m=Re(i).reverse(),p=d().concat(v());function y(j,C){return j.reduce((E,A)=>E-i[A],C)}function f(j,C){return j.reduce((E,A)=>y(E,C)>0?E.concat([A]):E,[])}function g(j){return o.map((C,E)=>({start:C-s[E]+.5+j,end:C+t-.5+j}))}function b(j,C,E){const A=g(C);return j.map(N=>{const O=E?0:-n,_=E?n:0,Y=E?"end":"start",Z=A[N][Y];return{index:N,loopPoint:Z,slideLocation:qe(-1),translate:gr(e,l[N]),target:()=>u.get()>Z?O:_}})}function d(){const j=r[0],C=f(m,j);return b(C,n,!1)}function v(){const j=t-r[0]-1,C=f(h,j);return b(C,-n,!0)}function S(){return p.every(({index:j})=>{const C=h.filter(E=>E!==j);return y(C,t)<=.1})}function I(){p.forEach(j=>{const{target:C,translate:E,slideLocation:A}=j,N=C();N!==A.get()&&(E.to(N),A.set(N))})}function P(){p.forEach(j=>j.translate.clear())}return{canLoop:S,clear:P,loop:I,loopPoints:p}}function no(e,t,n){let s,i=!1;function o(l){if(!n)return;function c(h){for(const m of h)if(m.type==="childList"){l.reInit(),t.emit("slidesChanged");break}}s=new MutationObserver(h=>{i||(Gt(n)||n(l,h))&&c(h)}),s.observe(e,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function so(e,t,n,s){const i={};let o=null,r=null,u,l=!1;function c(){u=new IntersectionObserver(f=>{l||(f.forEach(g=>{const b=t.indexOf(g.target);i[b]=g}),o=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:s}),t.forEach(f=>u.observe(f))}function h(){u&&u.disconnect(),l=!0}function m(f){return He(i).reduce((g,b)=>{const d=parseInt(b),{isIntersecting:v}=i[d];return(f&&v||!f&&!v)&&g.push(d),g},[])}function p(f=!0){if(f&&o)return o;if(!f&&r)return r;const g=m(f);return f&&(o=g),f||(r=g),g}return{init:c,destroy:h,get:p}}function ro(e,t,n,s,i,o){const{measureSize:r,startEdge:u,endEdge:l}=e,c=n[0]&&i,h=f(),m=g(),p=n.map(r),y=b();function f(){if(!c)return 0;const v=n[0];return H(t[u]-v[u])}function g(){if(!c)return 0;const v=o.getComputedStyle(le(s));return parseFloat(v.getPropertyValue(`margin-${l}`))}function b(){return n.map((v,S,I)=>{const P=!S,T=an(I,S);return P?p[S]+h:T?p[S]+m:I[S+1][u]-v[u]}).map(H)}return{slideSizes:p,slideSizesWithGaps:y,startGap:h,endGap:m}}function oo(e,t,n,s,i,o,r,u,l){const{startEdge:c,endEdge:h,direction:m}=e,p=rn(n);function y(d,v){return Re(d).filter(S=>S%v===0).map(S=>d.slice(S,S+v))}function f(d){return d.length?Re(d).reduce((v,S,I)=>{const P=le(v)||0,T=P===0,j=S===Be(d),C=i[c]-o[P][c],E=i[c]-o[S][h],A=!s&&T?m(r):0,N=!s&&j?m(u):0,O=H(E-N-(C+A));return I&&O>t+l&&v.push(S),j&&v.push(d.length),v},[]).map((v,S,I)=>{const P=Math.max(I[S-1]||0);return d.slice(P,v)}):[]}function g(d){return p?y(d,n):f(d)}return{groupSlides:g}}function ao(e,t,n,s,i,o,r){const{align:u,axis:l,direction:c,startIndex:h,loop:m,duration:p,dragFree:y,dragThreshold:f,inViewThreshold:g,slidesToScroll:b,skipSnaps:d,containScroll:v,watchResize:S,watchSlides:I,watchDrag:P,watchFocus:T}=o,j=2,C=Rr(),E=C.measure(t),A=n.map(C.measure),N=Mr(l,c),O=N.measureSize(E),_=Hr(O),Y=Ar(u,O),Z=!m&&!!v,fe=m||!!v,{slideSizes:me,slideSizesWithGaps:ce,startGap:ae,endGap:z}=ro(N,E,A,n,fe,i),ee=oo(N,O,b,m,E,A,ae,z,j),{snaps:V,snapsAligned:he}=Wr(N,Y,E,A,ee),te=-le(V)+le(ce),{snapsContained:xe,scrollContainLimit:ne}=Ur(O,te,he,v,j),W=Z?xe:he,{limit:$}=Kr(te,W,m),ie=pr(Be(W),h,m),G=ie.clone(),M=Re(n),x=({dragHandler:ge,scrollBody:Ke,scrollBounds:Xe,options:{loop:De}})=>{De||Xe.constrain(ge.pointerDown()),Ke.seek()},D=({scrollBody:ge,translate:Ke,location:Xe,offsetLocation:De,previousLocation:Te,scrollLooper:ke,slideLooper:Je,dragHandler:We,animation:Xt,eventHandler:Qe,scrollBounds:cn,options:{loop:Jt}},we)=>{const Ye=ge.settled(),Ze=!cn.shouldConstrain(),Pe=Jt?Ye:Ye&&Ze,Ve=Pe&&!We.pointerDown();Ve&&Xt.stop();const un=Xe.get()*we+Te.get()*(1-we);De.set(un),Jt&&(ke.loop(ge.direction()),Je.loop()),Ke.to(De.get()),Ve&&Qe.emit("settle"),Pe||Qe.emit("scroll")},q=Or(s,i,()=>x(be),ge=>D(be,ge)),U=.68,K=W[ie.get()],se=qe(K),F=qe(K),ue=qe(K),X=qe(K),ve=Br(se,ue,F,X,p,U),Se=Yr(m,W,te,$,X),re=Zr(q,ie,G,ve,Se,X,r),Q=Jr($),Ge=$e(),pe=so(t,n,r,g),{slideRegistry:_e}=Qr(Z,v,W,ne,ee,M),Ue=eo(e,n,_e,re,ve,Ge,r,T),be={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:E,slideRects:A,animation:q,axis:N,dragHandler:qr(N,e,s,i,X,Fr(N,i),se,q,re,ve,Se,ie,r,_,y,f,d,U,P),eventStore:Ge,percentOfView:_,index:ie,indexPrevious:G,limit:$,location:se,offsetLocation:ue,previousLocation:F,options:o,resizeHandler:$r(t,r,i,n,N,S,C),scrollBody:ve,scrollBounds:Gr($,ue,X,ve,_),scrollLooper:Xr(te,$,ue,[se,ue,F,X]),scrollProgress:Q,scrollSnapList:W.map(Q.get),scrollSnaps:W,scrollTarget:Se,scrollTo:re,slideLooper:to(N,O,te,me,ce,V,W,ue,n),slideFocus:Ue,slidesHandler:no(t,r,I),slidesInView:pe,slideIndexes:M,slideRegistry:_e,slidesToScroll:ee,target:X,translate:gr(N,t)};return be}function io(){let e={},t;function n(c){t=c}function s(c){return e[c]||[]}function i(c){return s(c).forEach(h=>h(t,c)),l}function o(c,h){return e[c]=s(c).concat([h]),l}function r(c,h){return e[c]=s(c).filter(m=>m!==h),l}function u(){e={}}const l={init:n,emit:i,off:r,on:o,clear:u};return l}const lo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function co(e){function t(o,r){return mr(o,r||{})}function n(o){const r=o.breakpoints||{},u=He(r).filter(l=>e.matchMedia(l).matches).map(l=>r[l]).reduce((l,c)=>t(l,c),{});return t(o,u)}function s(o){return o.map(r=>He(r.breakpoints||{})).reduce((r,u)=>r.concat(u),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:s}}function uo(e){let t=[];function n(o,r){return t=r.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(o,e)),r.reduce((u,l)=>Object.assign(u,{[l.name]:l}),{})}function s(){t=t.filter(o=>o.destroy())}return{init:n,destroy:s}}function Ot(e,t,n){const s=e.ownerDocument,i=s.defaultView,o=co(i),r=uo(o),u=$e(),l=io(),{mergeOptions:c,optionsAtMedia:h,optionsMediaQueries:m}=o,{on:p,off:y,emit:f}=l,g=N;let b=!1,d,v=c(lo,Ot.globalOptions),S=c(v),I=[],P,T,j;function C(){const{container:M,slides:x}=S;T=(en(M)?e.querySelector(M):M)||e.children[0];const q=en(x)?T.querySelectorAll(x):x;j=[].slice.call(q||T.children)}function E(M){const x=ao(e,T,j,s,i,M,l);if(M.loop&&!x.slideLooper.canLoop()){const D=Object.assign({},M,{loop:!1});return E(D)}return x}function A(M,x){b||(v=c(v,M),S=h(v),I=x||I,C(),d=E(S),m([v,...I.map(({options:D})=>D)]).forEach(D=>u.add(D,"change",N)),S.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(G),d.eventHandler.init(G),d.resizeHandler.init(G),d.slidesHandler.init(G),d.options.loop&&d.slideLooper.loop(),T.offsetParent&&j.length&&d.dragHandler.init(G),P=r.init(G,I)))}function N(M,x){const D=ee();O(),A(c({startIndex:D},M),x),l.emit("reInit")}function O(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),r.destroy(),u.clear()}function _(){b||(b=!0,u.clear(),O(),l.emit("destroy"),l.clear())}function Y(M,x,D){!S.active||b||(d.scrollBody.useBaseFriction().useDuration(x===!0?0:S.duration),d.scrollTo.index(M,D||0))}function Z(M){const x=d.index.add(1).get();Y(x,M,-1)}function fe(M){const x=d.index.add(-1).get();Y(x,M,1)}function me(){return d.index.add(1).get()!==ee()}function ce(){return d.index.add(-1).get()!==ee()}function ae(){return d.scrollSnapList}function z(){return d.scrollProgress.get(d.offsetLocation.get())}function ee(){return d.index.get()}function V(){return d.indexPrevious.get()}function he(){return d.slidesInView.get()}function te(){return d.slidesInView.get(!1)}function xe(){return P}function ne(){return d}function W(){return e}function $(){return T}function ie(){return j}const G={canScrollNext:me,canScrollPrev:ce,containerNode:$,internalEngine:ne,destroy:_,off:y,on:p,emit:f,plugins:xe,previousScrollSnap:V,reInit:g,rootNode:W,scrollNext:Z,scrollPrev:fe,scrollProgress:z,scrollSnapList:ae,scrollTo:Y,selectedScrollSnap:ee,slideNodes:ie,slidesInView:he,slidesNotInView:te};return A(t,n),setTimeout(()=>l.emit("init"),0),G}Ot.globalOptions=void 0;function ln(e={},t=[]){const n=w.useRef(e),s=w.useRef(t),[i,o]=w.useState(),[r,u]=w.useState(),l=w.useCallback(()=>{i&&i.reInit(n.current,s.current)},[i]);return w.useEffect(()=>{sn(n.current,e)||(n.current=e,l())},[e,l]),w.useEffect(()=>{_r(s.current,t)||(s.current=t,l())},[t,l]),w.useEffect(()=>{if(Lr()&&r){Ot.globalOptions=ln.globalOptions;const c=Ot(r,n.current,s.current);return o(c),()=>c.destroy()}else o(void 0)},[r,o]),[u,i]}ln.globalOptions=void 0;const hr=w.createContext(null);function Ut(){const e=w.useContext(hr);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const Mt=w.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:s,className:i,children:o,...r},u)=>{const[l,c]=ln({...t,axis:e==="horizontal"?"x":"y"},s),[h,m]=w.useState(!1),[p,y]=w.useState(!1),f=w.useCallback(v=>{v&&(m(v.canScrollPrev()),y(v.canScrollNext()))},[]),g=w.useCallback(()=>{c==null||c.scrollPrev()},[c]),b=w.useCallback(()=>{c==null||c.scrollNext()},[c]),d=w.useCallback(v=>{v.key==="ArrowLeft"?(v.preventDefault(),g()):v.key==="ArrowRight"&&(v.preventDefault(),b())},[g,b]);return w.useEffect(()=>{!c||!n||n(c)},[c,n]),w.useEffect(()=>{if(c)return f(c),c.on("reInit",f),c.on("select",f),()=>{c==null||c.off("select",f)}},[c,f]),a.jsx(hr.Provider,{value:{carouselRef:l,api:c,opts:t,orientation:e||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:g,scrollNext:b,canScrollPrev:h,canScrollNext:p},children:a.jsx("div",{ref:u,onKeyDownCapture:d,className:L("relative",i),role:"region","aria-roledescription":"carousel",...r,children:o})})});Mt.displayName="Carousel";const qt=w.forwardRef(({className:e,...t},n)=>{const{carouselRef:s,orientation:i}=Ut();return a.jsx("div",{ref:s,className:"overflow-hidden",children:a.jsx("div",{ref:n,className:L("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})});qt.displayName="CarouselContent";const Ft=w.forwardRef(({className:e,...t},n)=>{const{orientation:s}=Ut();return a.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:L("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-4":"pt-4",e),...t})});Ft.displayName="CarouselItem";const Rt=w.forwardRef(({className:e,variant:t="outline",size:n="icon",...s},i)=>{const{orientation:o,scrollPrev:r,canScrollPrev:u}=Ut();return a.jsxs(fr,{ref:i,variant:t,size:n,className:L("absolute h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:r,...s,children:[a.jsx(jr,{className:"size-4"}),a.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Rt.displayName="CarouselPrevious";const Ht=w.forwardRef(({className:e,variant:t="outline",size:n="icon",...s},i)=>{const{orientation:o,scrollNext:r,canScrollNext:u}=Ut();return a.jsxs(fr,{ref:i,variant:t,size:n,className:L("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:r,...s,children:[a.jsx(Tr,{className:"size-4"}),a.jsx("span",{className:"sr-only",children:"Next slide"})]})});Ht.displayName="CarouselNext";try{Mt.displayName="Carousel",Mt.__docgenInfo={description:"",displayName:"Carousel",props:{opts:{defaultValue:null,description:"",name:"opts",required:!1,type:{name:"Partial<OptionsType>"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"CreatePluginType<LoosePluginType, {}>[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},setApi:{defaultValue:null,description:"",name:"setApi",required:!1,type:{name:"(api: EmblaCarouselType) => void"}}}}}catch{}try{qt.displayName="CarouselContent",qt.__docgenInfo={description:"",displayName:"CarouselContent",props:{}}}catch{}try{Ft.displayName="CarouselItem",Ft.__docgenInfo={description:"",displayName:"CarouselItem",props:{}}}catch{}try{Rt.displayName="CarouselPrevious",Rt.__docgenInfo={description:"",displayName:"CarouselPrevious",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'},{value:'"lg"'},{value:'"icon"'}]}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"destructive"'},{value:'"outline"'},{value:'"secondary"'},{value:'"ghost"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Ht.displayName="CarouselNext",Ht.__docgenInfo={description:"",displayName:"CarouselNext",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'},{value:'"lg"'},{value:'"icon"'}]}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"destructive"'},{value:'"outline"'},{value:'"secondary"'},{value:'"ghost"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const fo=(e,t,n)=>{const s="relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",i={xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl"},o={default:"bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm rounded-md hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",minimal:"bg-transparent hover:bg-gray-100/50 text-gray-600 border-none rounded-md disabled:hover:bg-transparent",rounded:"bg-white rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",square:"bg-white rounded-none border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",floating:"bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white text-gray-700 shadow-lg rounded-lg hover:shadow-xl disabled:hover:bg-white/90 disabled:hover:shadow-lg",outline:"bg-transparent border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-md disabled:hover:border-gray-300 disabled:hover:bg-transparent"},r={outside:"!static !transform-none",inside:"!absolute pointer-events-auto",overlay:"!absolute !z-10 pointer-events-auto"};return L(s,i[t]||i.md,o[e]||o.default,r[n]||r.outside)},hn=(e,t,n,s,i)=>{const o=L(n&&!i&&"opacity-0 transition-opacity duration-200",n&&!i&&s&&"opacity-100");return e==="inside"||e==="overlay"?L(o,t?"right-2 top-1/2 -translate-y-1/2":"left-2 top-1/2 -translate-y-1/2"):o},mo=e=>{const t={xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7"};return t[e]||t.md},$t=({config:e,currentSlide:t,totalSlides:n,canGoNext:s,canGoPrevious:i,onNext:o,onPrevious:r,isHovered:u})=>{const{variant:l="default",size:c="md",position:h="outside",showPrevious:m=!0,showNext:p=!0,showOnHover:y=!1,alwaysVisible:f=!0,className:g="",previousClassName:b="",nextClassName:d="",previousIcon:v,nextIcon:S,ariaLabels:I={}}=e,P=fo(l,c,h),T=mo(c),j=a.jsx(Nr,{className:T}),C=a.jsx(Cr,{className:T}),E=m&&a.jsx(Rt,{className:L(P,hn(h,!1,y,u,f),g,b),disabled:!i,onClick:r,"aria-label":I.previous||"Previous slide",title:I.previous||"Previous slide","data-testid":"carousel-previous-button",children:v||j}),A=p&&a.jsx(Ht,{className:L(P,hn(h,!0,y,u,f),g,d),disabled:!s,onClick:o,"aria-label":I.next||"Next slide",title:I.next||"Next slide","data-testid":"carousel-next-button",children:S||C});return h==="outside"?a.jsxs("div",{className:"flex items-center gap-2",children:[E,p&&m&&a.jsxs("div",{className:"mx-1 text-xs text-gray-400",children:[t+1," / ",n]}),A]}):a.jsxs(a.Fragment,{children:[E,A]})};try{$t.displayName="CarouselNavigation",$t.__docgenInfo={description:"",displayName:"CarouselNavigation",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"NavigationConfig"}},currentSlide:{defaultValue:null,description:"",name:"currentSlide",required:!0,type:{name:"number"}},totalSlides:{defaultValue:null,description:"",name:"totalSlides",required:!0,type:{name:"number"}},canGoNext:{defaultValue:null,description:"",name:"canGoNext",required:!0,type:{name:"boolean"}},canGoPrevious:{defaultValue:null,description:"",name:"canGoPrevious",required:!0,type:{name:"boolean"}},onNext:{defaultValue:null,description:"",name:"onNext",required:!0,type:{name:"() => void"}},onPrevious:{defaultValue:null,description:"",name:"onPrevious",required:!0,type:{name:"() => void"}},isHovered:{defaultValue:null,description:"",name:"isHovered",required:!0,type:{name:"boolean"}}}}}catch{}const vn=(e,t,n,s,i)=>{const o=L("transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50","disabled:opacity-50 disabled:cursor-not-allowed",!i&&"cursor-pointer");if(n&&t)return L(o,n);if(s&&!t)return L(o,s);const r={dots:L("size-2 rounded-full border-2 border-transparent",t?"bg-primary scale-110 border-primary/20":"bg-gray-300 hover:bg-gray-400 hover:scale-105"),lines:L("h-1 rounded-full transition-all duration-300",t?"w-8 bg-primary shadow-sm":"w-4 bg-gray-300 hover:bg-gray-400 hover:w-6"),numbers:L("min-w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center border-2",t?"bg-primary text-white border-primary shadow-sm scale-105":"bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400 hover:scale-105"),thumbnails:L("relative overflow-hidden rounded border-2 transition-all duration-200",t?"border-primary shadow-md scale-105":"border-gray-300 hover:border-gray-400 hover:scale-102 opacity-70 hover:opacity-90"),progress:L("h-1 bg-gray-300 rounded-full overflow-hidden","relative"),none:""};return L(o,r[e]||r.dots)},po=(e,t,n)=>{const s={start:"justify-start",center:"justify-center",end:"justify-end"},i="flex",o=s[t]||s.center,r={top:"order-first",bottom:"order-last",left:"flex-col items-center",right:"flex-col items-center"},u={dots:"gap-2",lines:"gap-3",numbers:"gap-1",thumbnails:"gap-2",progress:"gap-0",none:""};return L(i,o,r[e],u[n],e==="left"||e==="right"?"py-2":"px-2")},go=e=>{const t=e||40;return{width:`${t}px`,height:`${t}px`}},ho=({currentSlide:e,totalSlides:t,className:n})=>{const s=(e+1)/t*100;return a.jsx("div",{className:L("h-1 w-32 overflow-hidden rounded-full bg-gray-300",n),children:a.jsx("div",{className:"h-full rounded-full bg-primary transition-all duration-300 ease-out",style:{width:`${s}%`},role:"progressbar","aria-valuenow":e+1,"aria-valuemin":1,"aria-valuemax":t,"aria-label":`Slide ${e+1} of ${t}`})})},vo=({slide:e,index:t,isActive:n,onClick:s,onFocus:i,onBlur:o,size:r,className:u})=>{var c,h;const l=((c=e.metadata)==null?void 0:c.thumbnail)||((h=e.metadata)==null?void 0:h.image);return a.jsxs("button",{onClick:s,onFocus:i,onBlur:o,className:u,style:go(r),role:"tab","aria-selected":n,"aria-label":e.ariaLabel||`Go to slide ${t+1}`,tabIndex:n?0:-1,"data-testid":`carousel-thumbnail-${t}`,children:[l?a.jsx("img",{src:l,alt:e.ariaLabel||`Slide ${t+1} thumbnail`,className:"size-full object-cover",loading:"lazy"}):a.jsx("div",{className:"flex size-full items-center justify-center bg-gray-200 text-xs text-gray-500",children:t+1}),n&&a.jsx("div",{className:"absolute inset-0 rounded bg-primary/20"})]})},Le=({config:e,currentSlide:t,totalSlides:n,slides:s,api:i,onSlideChange:o,onFocus:r,onBlur:u})=>{const{variant:l="dots",position:c="bottom",alignment:h="center",className:m="",activeClassName:p,inactiveClassName:y,showNumbers:f=!1,clickable:g=!0,thumbnailSize:b=40,maxVisible:d,ariaLabel:v="Carousel navigation"}=e,S=w.useMemo(()=>{if(!d||d>=n)return{start:0,end:n-1};const N=Math.floor(d/2);let O=Math.max(0,t-N);const _=Math.min(n-1,O+d-1);return _-O+1<d&&(O=Math.max(0,_-d+1)),{start:O,end:_}},[t,n,d]),I=w.useCallback(N=>{g&&(i==null||i.scrollTo(N),o==null||o(N))},[i,g,o]),P=w.useCallback(N=>{r==null||r(N)},[r]),T=w.useCallback(N=>{u==null||u(N)},[u]),j=po(c,h,l);if(l==="none"||n<=1)return null;if(l==="progress")return a.jsxs("div",{className:L(j,m),role:"progressbar",children:[a.jsx(ho,{currentSlide:t,totalSlides:n,className:"mx-auto"}),a.jsxs("div",{className:"sr-only","aria-live":"polite",children:["Slide ",t+1," of ",n]})]});const C=[],E=d?S.start:0,A=d?S.end:n-1;for(let N=E;N<=A;N++){const O=t===N,_=s[N];l==="thumbnails"?C.push(a.jsx(vo,{slide:_,index:N,isActive:O,onClick:()=>I(N),onFocus:()=>P(N),onBlur:()=>T(N),size:b,className:vn(l,O,p,y,_==null?void 0:_.disabled)},N)):C.push(a.jsx("button",{onClick:()=>I(N),onFocus:()=>P(N),onBlur:()=>T(N),className:vn(l,O,p,y,_==null?void 0:_.disabled),disabled:!g||(_==null?void 0:_.disabled),role:"tab","aria-selected":O,"aria-label":(_==null?void 0:_.ariaLabel)||`Go to slide ${N+1}`,tabIndex:O?0:-1,"data-testid":`carousel-indicator-${N}`,children:(l==="numbers"||f)&&a.jsx("span",{children:N+1})},N))}return d&&d<n&&(S.start>0&&C.unshift(a.jsx("div",{className:"flex items-center justify-center px-1 text-xs text-gray-400",children:"..."},"ellipsis-start")),S.end<n-1&&C.push(a.jsx("div",{className:"flex items-center justify-center px-1 text-xs text-gray-400",children:"..."},"ellipsis-end"))),a.jsxs("div",{className:L(j,m),role:"tablist","aria-label":v,"data-testid":"carousel-indicators",children:[C,a.jsxs("div",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:["Slide ",t+1," of ",n]})]})};try{Le.displayName="CarouselIndicators",Le.__docgenInfo={description:"",displayName:"CarouselIndicators",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IndicatorConfig"}},currentSlide:{defaultValue:null,description:"",name:"currentSlide",required:!0,type:{name:"number"}},totalSlides:{defaultValue:null,description:"",name:"totalSlides",required:!0,type:{name:"number"}},slides:{defaultValue:null,description:"",name:"slides",required:!0,type:{name:"CarouselSlide[]"}},api:{defaultValue:null,description:"",name:"api",required:!1,type:{name:"EmblaCarouselType"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!1,type:{name:"(index: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(index: number) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(index: number) => void"}}}}}catch{}const Qt={variant:"default",size:"md",position:"outside",showPrevious:!0,showNext:!0,showOnHover:!1,alwaysVisible:!0,ariaLabels:{previous:"Previous slide",next:"Next slide"}},Yt={variant:"dots",position:"bottom",alignment:"center",clickable:!0,ariaLabel:"Carousel navigation"},Ee={colors:{primary:"hsl(var(--primary))",secondary:"hsl(var(--secondary))",background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",border:"hsl(var(--border))",accent:"hsl(var(--accent))"},spacing:{gap:"1rem",padding:"0.5rem",margin:"0"},borderRadius:{sm:"0.25rem",md:"0.375rem",lg:"0.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"}},bo=e=>{const t={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-6xl","2xl":"max-w-7xl",full:"max-w-full",auto:"max-w-none"};return t[e]||t.lg},yo=e=>{const t=(e==null?void 0:e.responsive)||[],n={};return t.forEach(s=>{s.settings.slidesToShow&&(n["--slides-to-show"]=s.settings.slidesToShow.toString())}),n},xo=e=>{const t={};return e.colors&&Object.entries(e.colors).forEach(([n,s])=>{s&&(t[`--carousel-${n}`]=s)}),e.spacing&&Object.entries(e.spacing).forEach(([n,s])=>{s&&(t[`--carousel-${n}`]=s)}),t},Bt=w.forwardRef(({slides:e,size:t="lg",navigation:n=!0,indicators:s=!0,options:i={},theme:o=Ee,className:r="",contentClassName:u="",slideClassName:l="",style:c={},onSlideChange:h,onSlideClick:m,onBeforeSlideChange:p,onAfterSlideChange:y,onAutoPlayStart:f,onAutoPlayStop:g,onDragStart:b,onDragEnd:d,onSwipeStart:v,onSwipeEnd:S,onFocus:I,onBlur:P,renderSlide:T,renderNavigation:j,renderIndicators:C,loading:E=!1,loadingComponent:A,error:N,errorComponent:O,"aria-label":_="Image carousel","aria-describedby":Y,"data-testid":Z,role:fe="region",virtualized:me=!1,itemHeight:ce},ae)=>{const[z,ee]=w.useState(),[V,he]=w.useState(i.startIndex||0),[te,xe]=w.useState(0),[ne,W]=w.useState(!0),[$,ie]=w.useState(!0),[G,M]=w.useState(!1),[x,D]=w.useState(!1),[q,U]=w.useState(!1),[K,se]=w.useState(!1),[F,ue]=w.useState(!1),X=w.useRef(),ve=w.useRef(null),Se=w.useRef(null),re=w.useMemo(()=>typeof n=="boolean"?n?Qt:{...Qt,showPrevious:!1,showNext:!1}:{...Qt,...n},[n]),Q=w.useMemo(()=>typeof s=="boolean"?s?Yt:{...Yt,variant:"none"}:{...Yt,...s},[s]),Ge=w.useMemo(()=>({...Ee,...o,colors:{...Ee.colors,...o.colors},spacing:{...Ee.spacing,...o.spacing},borderRadius:{...Ee.borderRadius,...o.borderRadius},shadows:{...Ee.shadows,...o.shadows}}),[o]),{autoPlay:pe=!1,autoPlayInterval:_e=3e3,autoPlayDirection:Ue="forward",infinite:be=!0,draggable:ge=!0,swipeable:Ke=!0,touchThreshold:Xe=50,dragThreshold:De=100,pauseOnHover:Te=!0,pauseOnFocus:ke=!0,resumeOnBlur:Je=!0,slidesToShow:We=1,slidesToScroll:Xt=1,centerMode:Qe=!1,variableWidth:cn=!1,transition:Jt="slide",transitionDuration:we,easing:Ye="ease-in-out",keyboard:Ze=!0,focusOnSelect:Pe=!0,announceSlideChanges:Ve=!0,lazyLoad:un=!1,preloadSlides:No=1,responsive:Co=[]}=i,Ae=w.useCallback(()=>{!pe||!z||X.current||!F||(G||(M(!0),f==null||f()),X.current=setInterval(()=>{Te&&x||ke&&q||(Ue==="forward"?be||ne?z.scrollNext():z.scrollTo(0):be||$?z.scrollPrev():z.scrollTo(e.length-1))},_e))},[pe,z,_e,Ue,be,e.length,F,f,G,ne,$,Te,ke,x,q]),Ne=w.useCallback(()=>{X.current&&(clearInterval(X.current),X.current=void 0,G&&(M(!1),g==null||g()))},[G,g]),J=w.useCallback(async k=>{!z||k===V||K||!F||await(p==null?void 0:p(V,k))===!1||(se(!0),z.scrollTo(k))},[z,V,K,F,p]),Ce=w.useCallback(()=>{!z||K||!F||z.scrollNext()},[z,K,F]),ze=w.useCallback(()=>{!z||K||!F||z.scrollPrev()},[z,K,F]);w.useImperativeHandle(ae,()=>({goToSlide:J,goToNext:Ce,goToPrevious:ze,play:Ae,pause:Ne,getCurrentSlide:()=>V,getTotalSlides:()=>e.length,refresh:()=>z==null?void 0:z.reInit()}),[J,Ce,ze,Ae,Ne,V,e.length,z]);const ye=w.useCallback(()=>{if(!z)return;const k=z.selectedScrollSnap();if(k===void 0||isNaN(k)){console.warn("Carousel API not fully initialized yet");return}const R=z.canScrollPrev(),de=z.canScrollNext();if(xe(V),he(k),ie(R),W(de),se(!1),F||ue(!0),Ve&&Se.current){const Wt=e[k],Sr=(Wt==null?void 0:Wt.ariaLabel)||`Slide ${k+1} of ${e.length}`;Se.current.textContent=Sr}h&&e[k]&&h(k,e[k],te),y&&e[k]&&y(k,e[k])},[Ve,z,V,F,y,h,te,e]);w.useEffect(()=>z?((()=>{const R=z.selectedScrollSnap();if(R!==void 0&&!isNaN(R))ye();else{const de=setTimeout(()=>{ye()},50);return()=>clearTimeout(de)}})(),z.on("select",ye),z.on&&typeof z.on=="function"&&(z.on("init",ye),z.on("reInit",ye)),()=>{z.off("select",ye),z.off&&typeof z.off=="function"&&(z.off("init",ye),z.off("reInit",ye))}):void 0,[z]),w.useEffect(()=>(pe&&F&&!X.current?Ae():!pe&&X.current&&Ne(),()=>{Ne()}),[pe,F]),w.useEffect(()=>{if(!Ze||!F)return;const k=R=>{var de;if((de=ve.current)!=null&&de.contains(R.target))switch(R.key){case"ArrowLeft":R.preventDefault(),ze();break;case"ArrowRight":R.preventDefault(),Ce();break;case"Home":R.preventDefault(),J(0);break;case"End":R.preventDefault(),J(e.length-1);break;case" ":case"Spacebar":R.preventDefault(),G?Ne():Ae();break}};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[Ze,e.length,G,F]);const Oe=w.useCallback(k=>{U(!0),Pe&&F&&J(k),I==null||I(k)},[Pe,J,I,F]),Me=w.useCallback(k=>{U(!1),P==null||P(k)},[P]),br=w.useCallback((k,R,de)=>{k.disabled||m==null||m(k,R,de)},[m]);if(w.useEffect(()=>{!pe||!F||(Te&&x||ke&&q?Ne():Je&&!x&&!q&&!X.current&&Ae())},[pe,F,Te,ke,Je,x,q]),E)return a.jsx("div",{className:L("flex items-center justify-center p-8",r),children:A||a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"mx-auto mb-2 size-8 animate-spin rounded-full border-b-2 border-primary"}),a.jsx("p",{className:"text-sm text-gray-500",children:"Loading carousel..."})]})});if(N)return a.jsx("div",{className:L("flex items-center justify-center p-8 text-red-500",r),children:O||a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-sm",children:"Failed to load carousel"}),typeof N=="string"&&a.jsx("p",{className:"mt-1 text-xs text-gray-500",children:N})]})});if(!e||e.length===0)return a.jsx("div",{className:L("flex items-center justify-center p-8 text-gray-500",r),children:"No slides to display"});const dn=re.showNext||re.showPrevious,et=Q.variant!=="none",yr=xo(Ge),xr=yo(i);return a.jsxs("div",{ref:ve,className:L("relative w-full overflow-hidden",bo(t),r),style:{...yr,...xr,...c},onMouseEnter:()=>{D(!0)},onMouseLeave:()=>{D(!1)},role:fe,"aria-label":_,"aria-describedby":Y,"data-testid":Z,children:[a.jsx("div",{ref:Se,className:"sr-only","aria-live":"polite","aria-atomic":"true"}),a.jsxs(Mt,{setApi:ee,className:L("flex w-full flex-col",(Q.position==="top","gap-4")),opts:{loop:be,dragFree:!1,watchDrag:ge,slidesToScroll:Xt,startIndex:i.startIndex||0,...we?{duration:we}:{}},children:[et&&Q.position==="top"&&(C?C({currentSlide:V,totalSlides:e.length,slides:e,goToSlide:J}):a.jsx(Le,{config:Q,currentSlide:V,totalSlides:e.length,slides:e,api:z,onSlideChange:J,onFocus:Oe,onBlur:Me})),a.jsxs("div",{className:"relative flex items-center gap-2",children:[dn&&re.position==="outside"&&(j?j({currentSlide:V,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,goToNext:Ce,goToPrevious:ze,goToSlide:J}):a.jsx($t,{config:re,currentSlide:V,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,onNext:Ce,onPrevious:ze,isHovered:x})),a.jsx(qt,{className:L("flex-1",u),style:{touchAction:ge?"pan-y pinch-zoom":"none",...we?{transition:`transform ${we}ms ${Ye}`}:{}},onDragStart:b,onDragEnd:d,onTouchStart:v,onTouchEnd:S,children:e.map((k,R)=>a.jsx(Ft,{className:L(We>1&&`basis-1/${We}`,Qe&&"transform transition-transform duration-300",k.disabled&&"cursor-not-allowed opacity-50",m&&!k.disabled&&"cursor-pointer",l,k.className),style:k.style,onClick:de=>br(k,R,de),onFocus:()=>Oe(R),onBlur:()=>Me(R),tabIndex:Pe?0:-1,"aria-label":k.ariaLabel||`Slide ${R+1}`,role:"tabpanel","aria-hidden":V!==R,children:T?T(k,R,V===R):k.content},k.id?`slide_${R}_${k.id}`:wr()))}),dn&&(re.position==="inside"||re.position==="overlay")&&a.jsx("div",{className:L("pointer-events-none absolute inset-0 flex items-center justify-between",re.position==="overlay"&&"z-10"),children:j?a.jsx("div",{className:"pointer-events-auto",children:j({currentSlide:V,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,goToNext:Ce,goToPrevious:ze,goToSlide:J})}):a.jsx($t,{config:{...re,position:"inside"},currentSlide:V,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,onNext:Ce,onPrevious:ze,isHovered:x})})]}),et&&Q.position==="bottom"&&(C?C({currentSlide:V,totalSlides:e.length,slides:e,goToSlide:J}):a.jsx(Le,{config:Q,currentSlide:V,totalSlides:e.length,slides:e,api:z,onSlideChange:J,onFocus:Oe,onBlur:Me})),et&&Q.position==="left"&&a.jsx("div",{className:"absolute left-0 top-1/2 z-10 -translate-y-1/2",children:C?C({currentSlide:V,totalSlides:e.length,slides:e,goToSlide:J}):a.jsx(Le,{config:Q,currentSlide:V,totalSlides:e.length,slides:e,api:z,onSlideChange:J,onFocus:Oe,onBlur:Me})}),et&&Q.position==="right"&&a.jsx("div",{className:"absolute right-0 top-1/2 z-10 -translate-y-1/2",children:C?C({currentSlide:V,totalSlides:e.length,slides:e,goToSlide:J}):a.jsx(Le,{config:Q,currentSlide:V,totalSlides:e.length,slides:e,api:z,onSlideChange:J,onFocus:Oe,onBlur:Me})})]})]})});Bt.displayName="InteractiveCarousel";try{Bt.displayName="InteractiveCarousel",Bt.__docgenInfo={description:"",displayName:"InteractiveCarousel",props:{slides:{defaultValue:null,description:"",name:"slides",required:!0,type:{name:"CarouselSlide[]"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"xs"'},{value:'"md"'},{value:'"xl"'},{value:'"2xl"'},{value:'"full"'},{value:'"auto"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:{value:""},description:"",name:"contentClassName",required:!1,type:{name:"string"}},slideClassName:{defaultValue:{value:""},description:"",name:"slideClassName",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},navigation:{defaultValue:{value:"true"},description:"",name:"navigation",required:!1,type:{name:"boolean | NavigationConfig"}},indicators:{defaultValue:{value:"true"},description:"",name:"indicators",required:!1,type:{name:"boolean | IndicatorConfig"}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"CarouselOptions"}},theme:{defaultValue:{value:`{
  colors: {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    border: "hsl(var(--border))",
    accent: "hsl(var(--accent))",
  },
  spacing: {
    gap: "1rem",
    padding: "0.5rem",
    margin: "0",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
}`},description:"",name:"theme",required:!1,type:{name:"CarouselTheme"}},"aria-label":{defaultValue:{value:"Image carousel"},description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},role:{defaultValue:{value:"region"},description:"",name:"role",required:!1,type:{name:"string"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!1,type:{name:"(slide: CarouselSlide, index: number, isActive: boolean) => ReactNode"}},renderNavigation:{defaultValue:null,description:"",name:"renderNavigation",required:!1,type:{name:"(props: NavigationRenderProps) => ReactNode"}},renderIndicators:{defaultValue:null,description:"",name:"renderIndicators",required:!1,type:{name:"(props: IndicatorRenderProps) => ReactNode"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingComponent:{defaultValue:null,description:"",name:"loadingComponent",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | Error"}},errorComponent:{defaultValue:null,description:"",name:"errorComponent",required:!1,type:{name:"ReactNode"}},virtualized:{defaultValue:{value:"false"},description:"",name:"virtualized",required:!1,type:{name:"boolean"}},itemHeight:{defaultValue:null,description:"",name:"itemHeight",required:!1,type:{name:"number"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!1,type:{name:"(currentIndex: number, slide: CarouselSlide, previousIndex: number) => void"}},onSlideClick:{defaultValue:null,description:"",name:"onSlideClick",required:!1,type:{name:"(slide: CarouselSlide, index: number, event: MouseEvent<Element, MouseEvent>) => void"}},onBeforeSlideChange:{defaultValue:null,description:"",name:"onBeforeSlideChange",required:!1,type:{name:"(currentIndex: number, nextIndex: number) => boolean | Promise<boolean>"}},onAfterSlideChange:{defaultValue:null,description:"",name:"onAfterSlideChange",required:!1,type:{name:"(currentIndex: number, slide: CarouselSlide) => void"}},onAutoPlayStart:{defaultValue:null,description:"",name:"onAutoPlayStart",required:!1,type:{name:"() => void"}},onAutoPlayStop:{defaultValue:null,description:"",name:"onAutoPlayStop",required:!1,type:{name:"() => void"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},onSwipeStart:{defaultValue:null,description:"",name:"onSwipeStart",required:!1,type:{name:"(event: TouchEvent<Element>) => void"}},onSwipeEnd:{defaultValue:null,description:"",name:"onSwipeEnd",required:!1,type:{name:"(event: TouchEvent<Element>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(index: number) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(index: number) => void"}}}}}catch{}const tt=({src:e,alt:t,title:n})=>a.jsxs("div",{className:"relative h-64 w-full overflow-hidden rounded-lg bg-gray-100",children:[a.jsx("img",{src:e,alt:t,className:"size-full object-cover"}),n&&a.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4",children:a.jsx("h3",{className:"text-lg font-semibold text-white",children:n})})]}),Zt=({title:e,description:t,color:n="bg-blue-500"})=>a.jsxs("div",{className:`${n} flex h-64 flex-col items-center justify-center rounded-lg p-8 text-center text-white`,children:[a.jsx("h2",{className:"mb-4 text-2xl font-bold",children:e}),a.jsx("p",{className:"text-lg opacity-90",children:t})]}),nt=({name:e,price:t,image:n})=>a.jsxs("div",{className:"overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",children:[a.jsx("img",{src:n,alt:e,className:"h-48 w-full object-cover"}),a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"mb-2 font-semibold text-gray-900",children:e}),a.jsx("p",{className:"text-lg font-bold text-blue-600",children:t})]})]}),B=[{id:1,content:a.jsx(tt,{src:"/images/moutain_landscape.jpeg",alt:"Mountain landscape",title:"Mountain Adventure"}),metadata:{category:"nature",featured:!0}},{id:2,content:a.jsx(tt,{src:"/images/forest_path.jpeg",alt:"Forest path",title:"Forest Trail"}),metadata:{category:"nature"}},{id:3,content:a.jsx(tt,{src:"/images/ocean_waves.jpg",alt:"Ocean waves",title:"Ocean Waves"}),metadata:{category:"nature"}},{id:4,content:a.jsx(tt,{src:"/images/desert_sunset.jpg",alt:"Desert sunset",title:"Desert Sunset"}),metadata:{category:"nature"}}],Kt=[{id:1,content:a.jsx(Zt,{title:"Welcome to Our Platform",description:"Discover amazing features and capabilities",color:"bg-gradient-to-r from-blue-500 to-purple-600"})},{id:2,content:a.jsx(Zt,{title:"Powerful Analytics",description:"Get insights that drive your business forward",color:"bg-gradient-to-r from-green-500 to-teal-600"})},{id:3,content:a.jsx(Zt,{title:"Seamless Integration",description:"Connect with your favorite tools and services",color:"bg-gradient-to-r from-orange-500 to-red-600"})}],Ie=[{id:1,content:a.jsx(nt,{name:"Wireless Headphones",price:"$199.99",image:"/images/wireless_headphones.jpeg"})},{id:2,content:a.jsx(nt,{name:"Smart Watch",price:"$299.99",image:"/images/smart_watch.jpeg"})},{id:3,content:a.jsx(nt,{name:"Laptop Stand",price:"$79.99",image:"/images/computer_mouse.jpeg"})},{id:4,content:a.jsx(nt,{name:"Desk Organizer",price:"$49.99",image:"/images/desk_organizer.jpeg"})}],So=[{id:1,content:a.jsxs("div",{className:"relative h-64 w-full overflow-hidden rounded-lg bg-black",children:[a.jsxs("video",{className:"size-full object-cover",poster:"/images/netflix_thumbnail.jpeg",controls:!0,children:[a.jsx("source",{src:"https://www.w3schools.com/html/mov_bbb.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4",children:a.jsx("h3",{className:"text-lg font-semibold text-white",children:"Product Demo"})})]}),metadata:{type:"video",duration:"2:30"}},{id:2,content:a.jsxs("div",{className:"flex h-64 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-center text-white",children:[a.jsx("div",{className:"mb-4 flex size-16 items-center justify-center rounded-full bg-white/20",children:a.jsx("svg",{className:"size-8",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M8 5v14l11-7z"})})}),a.jsx("h2",{className:"mb-2 text-xl font-bold",children:"Interactive Tutorial"}),a.jsx("p",{className:"text-sm opacity-90",children:"Learn our platform in 5 minutes"})]}),metadata:{type:"interactive",category:"tutorial"}}],wo=[{id:1,content:a.jsx("div",{className:"h-64 rounded-lg border border-gray-200 bg-white p-8 shadow-lg",children:a.jsxs("div",{className:"flex h-full flex-col justify-between",children:[a.jsx("blockquote",{className:"text-lg italic leading-relaxed text-gray-600",children:'"This component has revolutionized how we display content. The flexibility and ease of use is incredible!"'}),a.jsxs("div",{className:"mt-6 flex items-center",children:[a.jsx("img",{src:"/images/sarah_johnson.jpeg",alt:"Sarah Johnson",className:"mr-4 size-12 rounded-full"}),a.jsxs("div",{children:[a.jsx("div",{className:"font-semibold text-gray-900",children:"Sarah Johnson"}),a.jsx("div",{className:"text-sm text-gray-500",children:"Frontend Developer"})]})]})]})}),metadata:{rating:5,role:"developer"}},{id:2,content:a.jsx("div",{className:"h-64 rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8",children:a.jsxs("div",{className:"flex h-full flex-col justify-between",children:[a.jsx("blockquote",{className:"text-lg italic leading-relaxed text-gray-700",children:'"The accessibility features and keyboard navigation make this perfect for our enterprise application."'}),a.jsxs("div",{className:"mt-6 flex items-center",children:[a.jsx("img",{src:"/images/mike_chen.jpeg",alt:"Mike Chen",className:"mr-4 size-12 rounded-full"}),a.jsxs("div",{children:[a.jsx("div",{className:"font-semibold text-gray-900",children:"Mike Chen"}),a.jsx("div",{className:"text-sm text-gray-500",children:"UX Designer"})]})]})]})}),metadata:{rating:5,role:"designer"}}],vr=[{id:1,content:a.jsxs("div",{className:"h-64 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 p-6 text-white",children:[a.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20",children:a.jsx("svg",{className:"size-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),a.jsx("h3",{className:"mb-2 text-xl font-bold",children:"Accessibility First"}),a.jsx("p",{className:"text-white/90",children:"Built with ARIA support, keyboard navigation, and screen reader announcements"})]})},{id:2,content:a.jsxs("div",{className:"h-64 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-6 text-white",children:[a.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20",children:a.jsx("svg",{className:"size-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),a.jsx("h3",{className:"mb-2 text-xl font-bold",children:"Highly Customizable"}),a.jsx("p",{className:"text-white/90",children:"Extensive theming options, custom renderers, and flexible configuration"})]})},{id:3,content:a.jsxs("div",{className:"h-64 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white",children:[a.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20",children:a.jsx("svg",{className:"size-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"})})}),a.jsx("h3",{className:"mb-2 text-xl font-bold",children:"Performance Optimized"}),a.jsx("p",{className:"text-white/90",children:"Lazy loading, virtualization support, and efficient rendering"})]})}],Do={title:"Interactive/Interactive Carousel",component:Bt,parameters:{layout:"centered",docs:{description:{component:`
A comprehensive, highly customizable carousel component built for modern React applications. Perfect for image galleries, product showcases, testimonials, feature highlights, and more.

## ✨ Key Features

- **🎯 Fully Accessible** - WCAG compliant with ARIA support, keyboard navigation, and screen reader announcements
- **📱 Responsive Design** - Adaptive layouts with configurable breakpoints
- **🎨 Extensive Theming** - Dark/light themes, custom colors, and complete style control
- **⚡ Performance Optimized** - Lazy loading, virtualization support, and efficient rendering
- **🔧 Highly Configurable** - 50+ options for complete customization
- **🎮 Interactive Controls** - Touch/swipe support, drag & drop, keyboard navigation
- **🎭 Multiple Variants** - Navigation styles, indicator types, and layout options
- **📊 Event Handling** - Comprehensive callback system for all interactions
- **🎬 Auto-play Support** - Smart auto-play with pause/resume functionality
- **🔄 Infinite Loop** - Seamless infinite scrolling option
- **🎯 Center Mode** - Highlight active slides with partial adjacent views
- **📐 Flexible Sizing** - From compact to full-screen layouts
- **🎨 Custom Renderers** - Complete control over slide and navigation rendering
- **⚠️ Error Handling** - Built-in loading and error states
- **🧪 TypeScript Ready** - Full type safety and IntelliSense support

## 🚀 Usage Examples

The component supports various use cases from simple image galleries to complex product showcases. Check out the stories below to see different configurations and capabilities.
        `}}},tags:["autodocs"],argTypes:{slides:{description:"Array of slide objects containing content and metadata",control:!1},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Overall size of the carousel container"},navigation:{description:"Navigation configuration or boolean to enable/disable",control:!1},indicators:{description:"Indicator configuration or boolean to enable/disable",control:!1},options:{description:"Carousel behavior options",control:!1},className:{control:"text",description:"Additional CSS classes for the carousel container"},contentClassName:{control:"text",description:"Additional CSS classes for the carousel content"},onSlideChange:{action:"slide-changed",description:"Callback fired when slide changes"},onSlideClick:{action:"slide-clicked",description:"Callback fired when a slide is clicked"}},args:{onSlideChange:oe(),onSlideClick:oe(),onBeforeSlideChange:oe(),onAfterSlideChange:oe(),onAutoPlayStart:oe(),onAutoPlayStop:oe(),onDragStart:oe(),onDragEnd:oe(),onSwipeStart:oe(),onSwipeEnd:oe(),onFocus:oe(),onBlur:oe()}},st={args:{slides:B,size:"lg",navigation:!0,indicators:!0}},rt={args:{slides:Kt,size:"lg",navigation:!0,indicators:!0}},ot={args:{slides:Ie,size:"lg",navigation:!0,indicators:!0,options:{slidesToShow:3,slidesToScroll:1,infinite:!0}}},at={args:{slides:Kt,size:"sm",navigation:!0,indicators:!0}},it={args:{slides:B,size:"full",navigation:!0,indicators:!0},parameters:{layout:"fullscreen"}},lt={args:{slides:B,size:"lg",navigation:{variant:"minimal",size:"lg"},indicators:!0}},ct={args:{slides:B,size:"lg",navigation:{variant:"rounded",size:"md"},indicators:!0}},ut={args:{slides:B,size:"lg",navigation:!1,indicators:!0}},dt={args:{slides:B,size:"lg",navigation:!0,indicators:{variant:"lines",position:"bottom",alignment:"center"}}},ft={args:{slides:B,size:"lg",navigation:!0,indicators:{variant:"numbers",position:"bottom",alignment:"center"}}},mt={args:{slides:B,size:"lg",navigation:!0,indicators:{variant:"dots",position:"top",alignment:"center"}}},pt={args:{slides:B,size:"lg",navigation:!0,indicators:!1}},gt={args:{slides:B,size:"lg",navigation:!0,indicators:!0,options:{autoPlay:!0,autoPlayInterval:2e3,pauseOnHover:!0,infinite:!0}}},ht={args:{slides:Kt,size:"lg",navigation:!0,indicators:!0,options:{autoPlay:!0,autoPlayInterval:1e3,pauseOnHover:!1,infinite:!0}}},vt={args:{slides:Ie,size:"xl",navigation:!0,indicators:!0,options:{slidesToShow:2,slidesToScroll:1,infinite:!0}}},bt={args:{slides:[...Ie,...Ie],size:"full",navigation:!0,indicators:!0,options:{slidesToShow:3,slidesToScroll:2,infinite:!0}},parameters:{layout:"fullscreen"}},yt={args:{slides:So,size:"lg",navigation:{variant:"floating",size:"lg",position:"overlay"},indicators:{variant:"dots",position:"bottom"},options:{autoPlay:!1,pauseOnHover:!0,draggable:!0}},parameters:{docs:{description:{story:"Carousel optimized for video and interactive media content with overlay navigation."}}}},xt={args:{slides:wo,size:"lg",navigation:{variant:"minimal",size:"md",position:"outside"},indicators:{variant:"lines",position:"bottom",alignment:"center"},options:{autoPlay:!0,autoPlayInterval:3e3,pauseOnHover:!0,infinite:!0,transition:"fade",transitionDuration:100}},parameters:{docs:{description:{story:"Perfect for displaying customer testimonials with fade transitions and auto-play."}}}},St={args:{slides:vr,size:"lg",navigation:!0,indicators:{variant:"numbers",position:"bottom",alignment:"center"},options:{centerMode:!0,infinite:!0,focusOnSelect:!0}},parameters:{docs:{description:{story:"Showcase product features with center mode and focus selection."}}}},wt={args:{slides:B,size:"lg",className:"shadow-2xl rounded-2xl overflow-hidden",contentClassName:"gap-4",navigation:{variant:"rounded",size:"lg",className:"shadow-lg"},indicators:{variant:"dots",position:"bottom",alignment:"center",className:"p-4",activeClassName:"bg-red-500 scale-125",inactiveClassName:"bg-gray-400 hover:bg-gray-500"}}},Nt={args:{slides:B,size:"lg",navigation:!0,indicators:!0,options:{infinite:!1,draggable:!0}}},Ct={args:{slides:B,size:"lg",navigation:!0,indicators:!0,options:{draggable:!1,infinite:!0}}},zt={args:{slides:Ie.concat(Ie),size:"full",navigation:!0,indicators:!0,options:{slidesToShow:4,slidesToScroll:2,infinite:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}},parameters:{layout:"fullscreen",docs:{description:{story:"Responsive carousel that adapts slides count based on screen size. Resize your browser to see the effect."}}}},jt={args:{slides:B,size:"xl",navigation:{variant:"rounded",size:"lg",position:"outside"},indicators:!0,options:{centerMode:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,focusOnSelect:!0}},parameters:{docs:{description:{story:"Center mode displays the active slide prominently with partial views of adjacent slides."}}}},It={args:{slides:Kt,size:"lg",navigation:!0,indicators:!0,options:{keyboard:!0,focusOnSelect:!0,announceSlideChanges:!0}},parameters:{docs:{description:{story:"Demonstrates keyboard navigation. Use Arrow Keys (←/→), Home/End, and Spacebar to control the carousel."}}}},Tt={args:{slides:vr,size:"lg",navigation:{variant:"default",size:"lg",ariaLabels:{previous:"Go to previous feature",next:"Go to next feature"}},indicators:{variant:"dots",position:"bottom",ariaLabel:"Feature navigation"},"aria-label":"Product features carousel","aria-describedby":"carousel-description",options:{keyboard:!0,announceSlideChanges:!0,focusOnSelect:!0}},parameters:{docs:{description:{story:"Accessibility-focused carousel with custom ARIA labels and screen reader support."}}}},kt={args:{slides:B,size:"lg",className:"bg-gray-900 p-6 rounded-lg",navigation:{variant:"outline",size:"lg",className:"border-white text-white hover:bg-white hover:text-gray-900"},indicators:{variant:"dots",position:"bottom",activeClassName:"bg-white",inactiveClassName:"bg-gray-600 hover:bg-gray-400"},theme:{colors:{primary:"#ffffff",secondary:"#6b7280",background:"#1f2937",foreground:"#ffffff",border:"#374151",accent:"#3b82f6"}}},parameters:{docs:{description:{story:"Dark theme carousel with custom colors and styling."}}}},Pt={args:{slides:Ie,size:"lg",navigation:!0,indicators:!0,renderSlide:(e,t,n)=>a.jsxs("div",{className:`transition-all duration-300 ${n?"scale-105":"scale-95 opacity-70"}`,children:[e.content,a.jsx("div",{className:"mt-2 text-center",children:a.jsxs("span",{className:`rounded px-2 py-1 text-xs ${n?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-600"}`,children:["Slide ",t+1]})})]}),renderNavigation:({canGoNext:e,canGoPrevious:t,goToNext:n,goToPrevious:s})=>a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:s,disabled:!t,className:"rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50",children:"← Prev"}),a.jsx("button",{onClick:n,disabled:!e,className:"rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50",children:"Next →"})]}),options:{slidesToShow:1,infinite:!1}},parameters:{docs:{description:{story:"Custom slide and navigation renderers for complete control over appearance."}}}},Et={args:{slides:[...B,...B,...B],size:"lg",navigation:!0,indicators:!0,options:{lazyLoad:!0,preloadSlides:2,infinite:!0,autoPlay:!0,autoPlayInterval:3e3}},parameters:{docs:{description:{story:"Optimized for performance with lazy loading and slide preloading."}}}},Lt={args:{slides:B,size:"lg",navigation:!0,indicators:!0,onSlideChange:(e,t)=>{console.log("Slide changed:",{index:e,slide:t})},onSlideClick:(e,t)=>{var n;console.log("Slide clicked:",{slide:e,index:t}),alert(`Clicked slide ${t+1}: ${((n=e.metadata)==null?void 0:n.category)||"Unknown"}`)}}},_t={args:{slides:[B[0]],size:"lg",navigation:!0,indicators:!0}},Dt={args:{slides:[],size:"lg",loading:!0,loadingComponent:a.jsxs("div",{className:"flex h-64 flex-col items-center justify-center space-y-4",children:[a.jsx("div",{className:"size-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500"}),a.jsx("p",{className:"text-gray-600",children:"Loading amazing content..."})]})},parameters:{docs:{description:{story:"Custom loading state with spinner and message."}}}},Vt={args:{slides:[],size:"lg",navigation:!0,indicators:!0}},At={args:{slides:[],size:"lg",error:"Failed to load carousel content",errorComponent:a.jsxs("div",{className:"flex h-64 flex-col items-center justify-center space-y-4 text-red-500",children:[a.jsx(Pr,{className:"size-12 text-current",viewBox:"0 0 24 24"}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"font-semibold",children:"Oops! Something went wrong"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Please try refreshing the page"})]})]})},parameters:{docs:{description:{story:"Custom error state with icon and helpful message."}}}};var bn,yn,xn;st.parameters={...st.parameters,docs:{...(bn=st.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(xn=(yn=st.parameters)==null?void 0:yn.docs)==null?void 0:xn.source}}};var Sn,wn,Nn;rt.parameters={...rt.parameters,docs:{...(Sn=rt.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(Nn=(wn=rt.parameters)==null?void 0:wn.docs)==null?void 0:Nn.source}}};var Cn,zn,jn;ot.parameters={...ot.parameters,docs:{...(Cn=ot.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  args: {
    slides: productSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }
}`,...(jn=(zn=ot.parameters)==null?void 0:zn.docs)==null?void 0:jn.source}}};var In,Tn,kn;at.parameters={...at.parameters,docs:{...(In=at.parameters)==null?void 0:In.docs,source:{originalSource:`{
  args: {
    slides: contentSlides,
    size: "sm",
    navigation: true,
    indicators: true
  }
}`,...(kn=(Tn=at.parameters)==null?void 0:Tn.docs)==null?void 0:kn.source}}};var Pn,En,Ln;it.parameters={...it.parameters,docs:{...(Pn=it.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "full",
    navigation: true,
    indicators: true
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...(Ln=(En=it.parameters)==null?void 0:En.docs)==null?void 0:Ln.source}}};var _n,Dn,Vn;lt.parameters={...lt.parameters,docs:{...(_n=lt.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: {
      variant: "minimal",
      size: "lg"
    },
    indicators: true
  }
}`,...(Vn=(Dn=lt.parameters)==null?void 0:Dn.docs)==null?void 0:Vn.source}}};var An,On,Mn;ct.parameters={...ct.parameters,docs:{...(An=ct.parameters)==null?void 0:An.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: {
      variant: "rounded",
      size: "md"
    },
    indicators: true
  }
}`,...(Mn=(On=ct.parameters)==null?void 0:On.docs)==null?void 0:Mn.source}}};var qn,Fn,Rn;ut.parameters={...ut.parameters,docs:{...(qn=ut.parameters)==null?void 0:qn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: false,
    indicators: true
  }
}`,...(Rn=(Fn=ut.parameters)==null?void 0:Fn.docs)==null?void 0:Rn.source}}};var Hn,$n,Bn;dt.parameters={...dt.parameters,docs:{...(Hn=dt.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "lines",
      position: "bottom",
      alignment: "center"
    }
  }
}`,...(Bn=($n=dt.parameters)==null?void 0:$n.docs)==null?void 0:Bn.source}}};var Gn,Un,Kn;ft.parameters={...ft.parameters,docs:{...(Gn=ft.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "numbers",
      position: "bottom",
      alignment: "center"
    }
  }
}`,...(Kn=(Un=ft.parameters)==null?void 0:Un.docs)==null?void 0:Kn.source}}};var Xn,Jn,Wn;mt.parameters={...mt.parameters,docs:{...(Xn=mt.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "dots",
      position: "top",
      alignment: "center"
    }
  }
}`,...(Wn=(Jn=mt.parameters)==null?void 0:Jn.docs)==null?void 0:Wn.source}}};var Qn,Yn,Zn;pt.parameters={...pt.parameters,docs:{...(Qn=pt.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: false
  }
}`,...(Zn=(Yn=pt.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var es,ts,ns;gt.parameters={...gt.parameters,docs:{...(es=gt.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      autoPlay: true,
      autoPlayInterval: 2000,
      pauseOnHover: true,
      infinite: true
    }
  }
}`,...(ns=(ts=gt.parameters)==null?void 0:ts.docs)==null?void 0:ns.source}}};var ss,rs,os;ht.parameters={...ht.parameters,docs:{...(ss=ht.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      autoPlay: true,
      autoPlayInterval: 1000,
      pauseOnHover: false,
      infinite: true
    }
  }
}`,...(os=(rs=ht.parameters)==null?void 0:rs.docs)==null?void 0:os.source}}};var as,is,ls;vt.parameters={...vt.parameters,docs:{...(as=vt.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    slides: productSlides,
    size: "xl",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true
    }
  }
}`,...(ls=(is=vt.parameters)==null?void 0:is.docs)==null?void 0:ls.source}}};var cs,us,ds;bt.parameters={...bt.parameters,docs:{...(cs=bt.parameters)==null?void 0:cs.docs,source:{originalSource:`{
  args: {
    slides: [...productSlides, ...productSlides],
    // Duplicate for more slides
    size: "full",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true
    }
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...(ds=(us=bt.parameters)==null?void 0:us.docs)==null?void 0:ds.source}}};var fs,ms,ps;yt.parameters={...yt.parameters,docs:{...(fs=yt.parameters)==null?void 0:fs.docs,source:{originalSource:`{
  args: {
    slides: videoSlides,
    size: "lg",
    navigation: {
      variant: "floating",
      size: "lg",
      position: "overlay"
    },
    indicators: {
      variant: "dots",
      position: "bottom"
    },
    options: {
      autoPlay: false,
      // Don't auto-play with video content
      pauseOnHover: true,
      draggable: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Carousel optimized for video and interactive media content with overlay navigation."
      }
    }
  }
}`,...(ps=(ms=yt.parameters)==null?void 0:ms.docs)==null?void 0:ps.source}}};var gs,hs,vs;xt.parameters={...xt.parameters,docs:{...(gs=xt.parameters)==null?void 0:gs.docs,source:{originalSource:`{
  args: {
    slides: testimonialSlides,
    size: "lg",
    navigation: {
      variant: "minimal",
      size: "md",
      position: "outside"
    },
    indicators: {
      variant: "lines",
      position: "bottom",
      alignment: "center"
    },
    options: {
      autoPlay: true,
      autoPlayInterval: 3000,
      pauseOnHover: true,
      infinite: true,
      transition: "fade",
      transitionDuration: 100
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Perfect for displaying customer testimonials with fade transitions and auto-play."
      }
    }
  }
}`,...(vs=(hs=xt.parameters)==null?void 0:hs.docs)==null?void 0:vs.source}}};var bs,ys,xs;St.parameters={...St.parameters,docs:{...(bs=St.parameters)==null?void 0:bs.docs,source:{originalSource:`{
  args: {
    slides: featureSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "numbers",
      position: "bottom",
      alignment: "center"
    },
    options: {
      centerMode: true,
      infinite: true,
      focusOnSelect: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Showcase product features with center mode and focus selection."
      }
    }
  }
}`,...(xs=(ys=St.parameters)==null?void 0:ys.docs)==null?void 0:xs.source}}};var Ss,ws,Ns;wt.parameters={...wt.parameters,docs:{...(Ss=wt.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    className: "shadow-2xl rounded-2xl overflow-hidden",
    contentClassName: "gap-4",
    navigation: {
      variant: "rounded",
      size: "lg",
      className: "shadow-lg"
    },
    indicators: {
      variant: "dots",
      position: "bottom",
      alignment: "center",
      className: "p-4",
      activeClassName: "bg-red-500 scale-125",
      inactiveClassName: "bg-gray-400 hover:bg-gray-500"
    }
  }
}`,...(Ns=(ws=wt.parameters)==null?void 0:ws.docs)==null?void 0:Ns.source}}};var Cs,zs,js;Nt.parameters={...Nt.parameters,docs:{...(Cs=Nt.parameters)==null?void 0:Cs.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      infinite: false,
      draggable: true
    }
  }
}`,...(js=(zs=Nt.parameters)==null?void 0:zs.docs)==null?void 0:js.source}}};var Is,Ts,ks;Ct.parameters={...Ct.parameters,docs:{...(Is=Ct.parameters)==null?void 0:Is.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      draggable: false,
      infinite: true
    }
  }
}`,...(ks=(Ts=Ct.parameters)==null?void 0:Ts.docs)==null?void 0:ks.source}}};var Ps,Es,Ls;zt.parameters={...zt.parameters,docs:{...(Ps=zt.parameters)==null?void 0:Ps.docs,source:{originalSource:`{
  args: {
    slides: productSlides.concat(productSlides),
    // More slides for better demo
    size: "full",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Responsive carousel that adapts slides count based on screen size. Resize your browser to see the effect."
      }
    }
  }
}`,...(Ls=(Es=zt.parameters)==null?void 0:Es.docs)==null?void 0:Ls.source}}};var _s,Ds,Vs;jt.parameters={...jt.parameters,docs:{...(_s=jt.parameters)==null?void 0:_s.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "xl",
    navigation: {
      variant: "rounded",
      size: "lg",
      position: "outside"
    },
    indicators: true,
    options: {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      focusOnSelect: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Center mode displays the active slide prominently with partial views of adjacent slides."
      }
    }
  }
}`,...(Vs=(Ds=jt.parameters)==null?void 0:Ds.docs)==null?void 0:Vs.source}}};var As,Os,Ms;It.parameters={...It.parameters,docs:{...(As=It.parameters)==null?void 0:As.docs,source:{originalSource:`{
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      keyboard: true,
      focusOnSelect: true,
      announceSlideChanges: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates keyboard navigation. Use Arrow Keys (←/→), Home/End, and Spacebar to control the carousel."
      }
    }
  }
}`,...(Ms=(Os=It.parameters)==null?void 0:Os.docs)==null?void 0:Ms.source}}};var qs,Fs,Rs;Tt.parameters={...Tt.parameters,docs:{...(qs=Tt.parameters)==null?void 0:qs.docs,source:{originalSource:`{
  args: {
    slides: featureSlides,
    size: "lg",
    navigation: {
      variant: "default",
      size: "lg",
      ariaLabels: {
        previous: "Go to previous feature",
        next: "Go to next feature"
      }
    },
    indicators: {
      variant: "dots",
      position: "bottom",
      ariaLabel: "Feature navigation"
    },
    "aria-label": "Product features carousel",
    "aria-describedby": "carousel-description",
    options: {
      keyboard: true,
      announceSlideChanges: true,
      focusOnSelect: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Accessibility-focused carousel with custom ARIA labels and screen reader support."
      }
    }
  }
}`,...(Rs=(Fs=Tt.parameters)==null?void 0:Fs.docs)==null?void 0:Rs.source}}};var Hs,$s,Bs;kt.parameters={...kt.parameters,docs:{...(Hs=kt.parameters)==null?void 0:Hs.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    className: "bg-gray-900 p-6 rounded-lg",
    navigation: {
      variant: "outline",
      size: "lg",
      className: "border-white text-white hover:bg-white hover:text-gray-900"
    },
    indicators: {
      variant: "dots",
      position: "bottom",
      activeClassName: "bg-white",
      inactiveClassName: "bg-gray-600 hover:bg-gray-400"
    },
    theme: {
      colors: {
        primary: "#ffffff",
        secondary: "#6b7280",
        background: "#1f2937",
        foreground: "#ffffff",
        border: "#374151",
        accent: "#3b82f6"
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Dark theme carousel with custom colors and styling."
      }
    }
  }
}`,...(Bs=($s=kt.parameters)==null?void 0:$s.docs)==null?void 0:Bs.source}}};var Gs,Us,Ks;Pt.parameters={...Pt.parameters,docs:{...(Gs=Pt.parameters)==null?void 0:Gs.docs,source:{originalSource:`{
  args: {
    slides: productSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    renderSlide: (slide, index, isActive) => <div className={\`transition-all duration-300 \${isActive ? "scale-105" : "scale-95 opacity-70"}\`}>
        {slide.content}
        <div className="mt-2 text-center">
          <span className={\`rounded px-2 py-1 text-xs \${isActive ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}\`}>
            Slide {index + 1}
          </span>
        </div>
      </div>,
    renderNavigation: ({
      canGoNext,
      canGoPrevious,
      goToNext,
      goToPrevious
    }) => <div className="flex gap-2">
        <button onClick={goToPrevious} disabled={!canGoPrevious} className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50">
          ← Prev
        </button>
        <button onClick={goToNext} disabled={!canGoNext} className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50">
          Next →
        </button>
      </div>,
    options: {
      slidesToShow: 1,
      infinite: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Custom slide and navigation renderers for complete control over appearance."
      }
    }
  }
}`,...(Ks=(Us=Pt.parameters)==null?void 0:Us.docs)==null?void 0:Ks.source}}};var Xs,Js,Ws;Et.parameters={...Et.parameters,docs:{...(Xs=Et.parameters)==null?void 0:Xs.docs,source:{originalSource:`{
  args: {
    slides: [...imageSlides, ...imageSlides, ...imageSlides],
    // Triple slides for demo
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      lazyLoad: true,
      preloadSlides: 2,
      infinite: true,
      autoPlay: true,
      autoPlayInterval: 3000
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Optimized for performance with lazy loading and slide preloading."
      }
    }
  }
}`,...(Ws=(Js=Et.parameters)==null?void 0:Js.docs)==null?void 0:Ws.source}}};var Qs,Ys,Zs;Lt.parameters={...Lt.parameters,docs:{...(Qs=Lt.parameters)==null?void 0:Qs.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    onSlideChange: (index, slide) => {
      console.log("Slide changed:", {
        index,
        slide
      });
    },
    onSlideClick: (slide, index) => {
      console.log("Slide clicked:", {
        slide,
        index
      });
      alert(\`Clicked slide \${index + 1}: \${slide.metadata?.category || "Unknown"}\`);
    }
  }
}`,...(Zs=(Ys=Lt.parameters)==null?void 0:Ys.docs)==null?void 0:Zs.source}}};var er,tr,nr;_t.parameters={..._t.parameters,docs:{...(er=_t.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    slides: [imageSlides[0]],
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(nr=(tr=_t.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var sr,rr,or;Dt.parameters={...Dt.parameters,docs:{...(sr=Dt.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    slides: [],
    size: "lg",
    loading: true,
    loadingComponent: <div className="flex h-64 flex-col items-center justify-center space-y-4">
        <div className="size-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500" />
        <p className="text-gray-600">Loading amazing content...</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "Custom loading state with spinner and message."
      }
    }
  }
}`,...(or=(rr=Dt.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var ar,ir,lr;Vt.parameters={...Vt.parameters,docs:{...(ar=Vt.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    slides: [],
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(lr=(ir=Vt.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var cr,ur,dr;At.parameters={...At.parameters,docs:{...(cr=At.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    slides: [],
    size: "lg",
    error: "Failed to load carousel content",
    errorComponent: <div className="flex h-64 flex-col items-center justify-center space-y-4 text-red-500">
        <CircleX className="size-12 text-current" viewBox="0 0 24 24" />
        <div className="text-center">
          <p className="font-semibold">Oops! Something went wrong</p>
          <p className="mt-1 text-sm text-gray-500">
            Please try refreshing the page
          </p>
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "Custom error state with icon and helpful message."
      }
    }
  }
}`,...(dr=(ur=At.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};const Vo=["Default","ContentCarousel","ProductShowcase","SmallSize","FullWidth","MinimalNavigation","RoundedNavigation","NoNavigation","LineIndicators","NumberIndicators","TopIndicators","NoIndicators","AutoPlay","AutoPlayFast","MultipleSlides","ThreeSlides","VideoMediaCarousel","TestimonialCarousel","FeatureHighlights","CustomStyling","NonInfinite","NonDraggable","ResponsiveCarousel","CenterModeCarousel","KeyboardNavigationDemo","AccessibilityFocused","DarkThemeCarousel","CustomRendererExample","LazyLoadingCarousel","WithCallbacks","SingleSlide","LoadingState","EmptySlides","ErrorState"];export{Tt as AccessibilityFocused,gt as AutoPlay,ht as AutoPlayFast,jt as CenterModeCarousel,rt as ContentCarousel,Pt as CustomRendererExample,wt as CustomStyling,kt as DarkThemeCarousel,st as Default,Vt as EmptySlides,At as ErrorState,St as FeatureHighlights,it as FullWidth,It as KeyboardNavigationDemo,Et as LazyLoadingCarousel,dt as LineIndicators,Dt as LoadingState,lt as MinimalNavigation,vt as MultipleSlides,pt as NoIndicators,ut as NoNavigation,Ct as NonDraggable,Nt as NonInfinite,ft as NumberIndicators,ot as ProductShowcase,zt as ResponsiveCarousel,ct as RoundedNavigation,_t as SingleSlide,at as SmallSize,xt as TestimonialCarousel,bt as ThreeSlides,mt as TopIndicators,yt as VideoMediaCarousel,Lt as WithCallbacks,Vo as __namedExportsOrder,Do as default};
