import{j as a}from"./jsx-runtime-DdxpLdx6.js";import{fn as oe}from"./index-Cf3xVBfy.js";import{r as N}from"./index-Bk7LAl9r.js";import{a as L,g as Cr}from"./utils-CvxHGwbR.js";import{B as pr}from"./button-CDI4k_Ur.js";import{c as rn}from"./createLucideIcon-DO4rnCdN.js";import{C as zr,a as jr}from"./chevron-right-BAKq19RS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BGsY1BpV.js";/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ir=rn("arrow-left",Tr);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Pr=rn("arrow-right",Er);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Lr=rn("circle-x",kr);function _r(e){return Object.prototype.toString.call(e)==="[object Object]"}function pn(e){return _r(e)||Array.isArray(e)}function Ar(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function on(e,t){const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==o?!1:n.every(r=>{const u=e[r],l=t[r];return typeof u=="function"?`${u}`==`${l}`:!pn(u)||!pn(l)?u===l:on(u,l)})}function gn(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function Or(e,t){if(e.length!==t.length)return!1;const n=gn(e),s=gn(t);return n.every((i,o)=>{const r=s[o];return on(i,r)})}function an(e){return typeof e=="number"}function nn(e){return typeof e=="string"}function Kt(e){return typeof e=="boolean"}function hn(e){return Object.prototype.toString.call(e)==="[object Object]"}function H(e){return Math.abs(e)}function ln(e){return Math.sign(e)}function He(e,t){return H(e-t)}function Dr(e,t){if(e===0||t===0||H(e)<=H(t))return 0;const n=He(H(e),H(t));return H(n/e)}function Mr(e){return Math.round(e*100)/100}function $e(e){return Be(e).map(Number)}function ue(e){return e[Ue(e)]}function Ue(e){return Math.max(0,e.length-1)}function cn(e,t){return t===Ue(e)}function vn(e,t=0){return Array.from(Array(e),(n,s)=>t+s)}function Be(e){return Object.keys(e)}function gr(e,t){return[e,t].reduce((n,s)=>(Be(s).forEach(i=>{const o=n[i],r=s[i],u=hn(o)&&hn(r);n[i]=u?gr(o,r):r}),n),{})}function sn(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Vr(e,t){const n={start:s,center:i,end:o};function s(){return 0}function i(l){return o(l)/2}function o(l){return t-l}function r(l,c){return nn(e)?n[e](l):e(t,l,c)}return{measure:r}}function Ge(){let e=[];function t(i,o,r,u={passive:!0}){let l;if("addEventListener"in i)i.addEventListener(o,r,u),l=()=>i.removeEventListener(o,r,u);else{const c=i;c.addListener(r),l=()=>c.removeListener(r)}return e.push(l),s}function n(){e=e.filter(i=>i())}const s={add:t,clear:n};return s}function Rr(e,t,n,s){const i=Ge(),o=1e3/60;let r=null,u=0,l=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&f()})}function h(){y(),i.clear()}function m(b){if(!l)return;r||(r=b,n(),n());const d=b-r;for(r=b,u+=d;u>=o;)n(),u-=o;const v=u/o;s(v),l&&(l=t.requestAnimationFrame(m))}function p(){l||(l=t.requestAnimationFrame(m))}function y(){t.cancelAnimationFrame(l),r=null,u=0,l=0}function f(){r=null,u=0}return{init:c,destroy:h,start:p,stop:y,update:n,render:s}}function qr(e,t){const n=t==="rtl",s=e==="y",i=s?"y":"x",o=s?"x":"y",r=!s&&n?-1:1,u=h(),l=m();function c(f){const{height:g,width:b}=f;return s?g:b}function h(){return s?"top":n?"right":"left"}function m(){return s?"bottom":n?"left":"right"}function p(f){return f*r}return{scroll:i,cross:o,startEdge:u,endEdge:l,measureSize:c,direction:p}}function Ie(e=0,t=0){const n=H(e-t);function s(c){return c<e}function i(c){return c>t}function o(c){return s(c)||i(c)}function r(c){return o(c)?s(c)?e:t:c}function u(c){return n?c-n*Math.ceil((c-t)/n):c}return{length:n,max:t,min:e,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function hr(e,t,n){const{constrain:s}=Ie(0,e),i=e+1;let o=r(t);function r(p){return n?H((i+p)%i):s(p)}function u(){return o}function l(p){return o=r(p),m}function c(p){return h().set(u()+p)}function h(){return hr(e,u(),n)}const m={get:u,set:l,add:c,clone:h};return m}function Fr(e,t,n,s,i,o,r,u,l,c,h,m,p,y,f,g,b,d,v){const{cross:S,direction:T}=e,P=["INPUT","SELECT","TEXTAREA"],I={passive:!1},j=Ge(),C=Ge(),k=Ie(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},w={mouse:500,touch:600},M=f?43:25;let _=!1,Y=0,Z=0,pe=!1,ge=!1,de=!1,ae=!1;function z(x){if(!v)return;function A(U){(Kt(v)||v(x,U))&&ne(U)}const R=t;j.add(R,"dragstart",U=>U.preventDefault(),I).add(R,"touchmove",()=>{},I).add(R,"touchend",()=>{}).add(R,"touchstart",A).add(R,"mousedown",A).add(R,"touchcancel",$).add(R,"contextmenu",$).add(R,"click",ie,!0)}function ee(){j.clear(),C.clear()}function O(){const x=ae?n:t;C.add(x,"touchmove",J,I).add(x,"touchend",$).add(x,"mousemove",J,I).add(x,"mouseup",$)}function be(x){const A=x.nodeName||"";return P.includes(A)}function te(){return(f?w:D)[ae?"mouse":"touch"]}function Ne(x,A){const R=m.add(ln(x)*-1),U=h.byDistance(x,!f).distance;return f||H(x)<k?U:b&&A?U*.5:h.byIndex(R.get(),0).distance}function ne(x){const A=sn(x,s);ae=A,de=f&&A&&!x.buttons&&_,_=He(i.get(),r.get())>=2,!(A&&x.button!==0)&&(be(x.target)||(pe=!0,o.pointerDown(x),c.useFriction(0).useDuration(0),i.set(r),O(),Y=o.readPoint(x),Z=o.readPoint(x,S),p.emit("pointerDown")))}function J(x){if(!sn(x,s)&&x.touches.length>=2)return $(x);const R=o.readPoint(x),U=o.readPoint(x,S),K=He(R,Y),se=He(U,Z);if(!ge&&!ae&&(!x.cancelable||(ge=K>se,!ge)))return $(x);const q=o.pointerMove(x);K>g&&(de=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(T(q)),x.preventDefault()}function $(x){const R=h.byDistance(0,!1).index!==m.get(),U=o.pointerUp(x)*te(),K=Ne(T(U),R),se=Dr(U,K),q=M-10*se,fe=d+se/50;ge=!1,pe=!1,C.clear(),c.useDuration(q).useFriction(fe),l.distance(K,!f),ae=!1,p.emit("pointerUp")}function ie(x){de&&(x.stopPropagation(),x.preventDefault(),de=!1)}function G(){return pe}return{init:z,destroy:ee,pointerDown:G}}function Hr(e,t){let s,i;function o(m){return m.timeStamp}function r(m,p){const f=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(sn(m,t)?m:m.touches[0])[f]}function u(m){return s=m,i=m,r(m)}function l(m){const p=r(m)-r(i),y=o(m)-o(s)>170;return i=m,y&&(s=m),p}function c(m){if(!s||!i)return 0;const p=r(i)-r(s),y=o(m)-o(s),f=o(m)-o(i)>170,g=p/y;return y&&!f&&H(g)>.1?g:0}return{pointerDown:u,pointerMove:l,pointerUp:c,readPoint:r}}function $r(){function e(n){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=n;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:e}}function Br(e){function t(s){return e*(s/100)}return{measure:t}}function Gr(e,t,n,s,i,o,r){const u=[e].concat(s);let l,c,h=[],m=!1;function p(b){return i.measureSize(r.measure(b))}function y(b){if(!o)return;c=p(e),h=s.map(p);function d(v){for(const S of v){if(m)return;const T=S.target===e,P=s.indexOf(S.target),I=T?c:h[P],j=p(T?e:s[P]);if(H(j-I)>=.5){b.reInit(),t.emit("resize");break}}}l=new ResizeObserver(v=>{(Kt(o)||o(b,v))&&d(v)}),n.requestAnimationFrame(()=>{u.forEach(v=>l.observe(v))})}function f(){m=!0,l&&l.disconnect()}return{init:y,destroy:f}}function Ur(e,t,n,s,i,o){let r=0,u=0,l=i,c=o,h=e.get(),m=0;function p(){const I=s.get()-e.get(),j=!l;let C=0;return j?(r=0,n.set(s),e.set(s),C=I):(n.set(e),r+=I/l,r*=c,h+=r,e.add(r),C=h-m),u=ln(C),m=h,P}function y(){const I=s.get()-t.get();return H(I)<.001}function f(){return l}function g(){return u}function b(){return r}function d(){return S(i)}function v(){return T(o)}function S(I){return l=I,P}function T(I){return c=I,P}const P={direction:g,duration:f,velocity:b,seek:p,settled:y,useBaseFriction:v,useBaseDuration:d,useFriction:T,useDuration:S};return P}function Kr(e,t,n,s,i){const o=i.measure(10),r=i.measure(50),u=Ie(.1,.99);let l=!1;function c(){return!(l||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function h(y){if(!c())return;const f=e.reachedMin(t.get())?"min":"max",g=H(e[f]-t.get()),b=n.get()-t.get(),d=u.constrain(g/r);n.subtract(b*d),!y&&H(b)<o&&(n.set(e.constrain(n.get())),s.useDuration(25).useBaseFriction())}function m(y){l=!y}return{shouldConstrain:c,constrain:h,toggleActive:m}}function Wr(e,t,n,s,i){const o=Ie(-t+e,0),r=m(),u=h(),l=p();function c(f,g){return He(f,g)<=1}function h(){const f=r[0],g=ue(r),b=r.lastIndexOf(f),d=r.indexOf(g)+1;return Ie(b,d)}function m(){return n.map((f,g)=>{const{min:b,max:d}=o,v=o.constrain(f),S=!g,T=cn(n,g);return S?d:T||c(b,v)?b:c(d,v)?d:v}).map(f=>parseFloat(f.toFixed(3)))}function p(){if(t<=e+i)return[o.max];if(s==="keepSnaps")return r;const{min:f,max:g}=u;return r.slice(f,g)}return{snapsContained:l,scrollContainLimit:u}}function Xr(e,t,n){const s=t[0],i=n?s-e:ue(t);return{limit:Ie(i,s)}}function Jr(e,t,n,s){const o=t.min+.1,r=t.max+.1,{reachedMin:u,reachedMax:l}=Ie(o,r);function c(p){return p===1?l(n.get()):p===-1?u(n.get()):!1}function h(p){if(!c(p))return;const y=e*(p*-1);s.forEach(f=>f.add(y))}return{loop:h}}function Qr(e){const{max:t,length:n}=e;function s(o){const r=o-t;return n?r/-n:0}return{get:s}}function Yr(e,t,n,s,i){const{startEdge:o,endEdge:r}=e,{groupSlides:u}=i,l=m().map(t.measure),c=p(),h=y();function m(){return u(s).map(g=>ue(g)[r]-g[0][o]).map(H)}function p(){return s.map(g=>n[o]-g[o]).map(g=>-H(g))}function y(){return u(c).map(g=>g[0]).map((g,b)=>g+l[b])}return{snaps:c,snapsAligned:h}}function Zr(e,t,n,s,i,o){const{groupSlides:r}=i,{min:u,max:l}=s,c=h();function h(){const p=r(o),y=!e||t==="keepSnaps";return n.length===1?[o]:y?p:p.slice(u,l).map((f,g,b)=>{const d=!g,v=cn(b,g);if(d){const S=ue(b[0])+1;return vn(S)}if(v){const S=Ue(o)-ue(b)[0]+1;return vn(S,ue(b)[0])}return f})}return{slideRegistry:c}}function eo(e,t,n,s,i){const{reachedAny:o,removeOffset:r,constrain:u}=s;function l(f){return f.concat().sort((g,b)=>H(g)-H(b))[0]}function c(f){const g=e?r(f):u(f),b=t.map((v,S)=>({diff:h(v-g,0),index:S})).sort((v,S)=>H(v.diff)-H(S.diff)),{index:d}=b[0];return{index:d,distance:g}}function h(f,g){const b=[f,f+n,f-n];if(!e)return f;if(!g)return l(b);const d=b.filter(v=>ln(v)===g);return d.length?l(d):ue(b)-n}function m(f,g){const b=t[f]-i.get(),d=h(b,g);return{index:f,distance:d}}function p(f,g){const b=i.get()+f,{index:d,distance:v}=c(b),S=!e&&o(b);if(!g||S)return{index:d,distance:f};const T=t[d]-v,P=f+h(T,0);return{index:d,distance:P}}return{byDistance:p,byIndex:m,shortcut:h}}function to(e,t,n,s,i,o,r){function u(m){const p=m.distance,y=m.index!==t.get();o.add(p),p&&(s.duration()?e.start():(e.update(),e.render(1),e.update())),y&&(n.set(t.get()),t.set(m.index),r.emit("select"))}function l(m,p){const y=i.byDistance(m,p);u(y)}function c(m,p){const y=t.clone().set(m),f=i.byIndex(y.get(),p);u(f)}return{distance:l,index:c}}function no(e,t,n,s,i,o,r,u){const l={passive:!0,capture:!0};let c=0;function h(y){if(!u)return;function f(g){if(new Date().getTime()-c>10)return;r.emit("slideFocusStart"),e.scrollLeft=0;const v=n.findIndex(S=>S.includes(g));an(v)&&(i.useDuration(0),s.index(v,0),r.emit("slideFocus"))}o.add(document,"keydown",m,!1),t.forEach((g,b)=>{o.add(g,"focus",d=>{(Kt(u)||u(y,d))&&f(b)},l)})}function m(y){y.code==="Tab"&&(c=new Date().getTime())}return{init:h}}function Fe(e){let t=e;function n(){return t}function s(l){t=r(l)}function i(l){t+=r(l)}function o(l){t-=r(l)}function r(l){return an(l)?l:l.get()}return{get:n,set:s,add:i,subtract:o}}function vr(e,t){const n=e.scroll==="x"?r:u,s=t.style;let i=null,o=!1;function r(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function l(p){if(o)return;const y=Mr(e.direction(p));y!==i&&(s.transform=n(y),i=y)}function c(p){o=!p}function h(){o||(s.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:h,to:l,toggleActive:c}}function so(e,t,n,s,i,o,r,u,l){const h=$e(i),m=$e(i).reverse(),p=d().concat(v());function y(j,C){return j.reduce((k,D)=>k-i[D],C)}function f(j,C){return j.reduce((k,D)=>y(k,C)>0?k.concat([D]):k,[])}function g(j){return o.map((C,k)=>({start:C-s[k]+.5+j,end:C+t-.5+j}))}function b(j,C,k){const D=g(C);return j.map(w=>{const M=k?0:-n,_=k?n:0,Y=k?"end":"start",Z=D[w][Y];return{index:w,loopPoint:Z,slideLocation:Fe(-1),translate:vr(e,l[w]),target:()=>u.get()>Z?M:_}})}function d(){const j=r[0],C=f(m,j);return b(C,n,!1)}function v(){const j=t-r[0]-1,C=f(h,j);return b(C,-n,!0)}function S(){return p.every(({index:j})=>{const C=h.filter(k=>k!==j);return y(C,t)<=.1})}function T(){p.forEach(j=>{const{target:C,translate:k,slideLocation:D}=j,w=C();w!==D.get()&&(k.to(w),D.set(w))})}function P(){p.forEach(j=>j.translate.clear())}return{canLoop:S,clear:P,loop:T,loopPoints:p}}function ro(e,t,n){let s,i=!1;function o(l){if(!n)return;function c(h){for(const m of h)if(m.type==="childList"){l.reInit(),t.emit("slidesChanged");break}}s=new MutationObserver(h=>{i||(Kt(n)||n(l,h))&&c(h)}),s.observe(e,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function oo(e,t,n,s){const i={};let o=null,r=null,u,l=!1;function c(){u=new IntersectionObserver(f=>{l||(f.forEach(g=>{const b=t.indexOf(g.target);i[b]=g}),o=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:s}),t.forEach(f=>u.observe(f))}function h(){u&&u.disconnect(),l=!0}function m(f){return Be(i).reduce((g,b)=>{const d=parseInt(b),{isIntersecting:v}=i[d];return(f&&v||!f&&!v)&&g.push(d),g},[])}function p(f=!0){if(f&&o)return o;if(!f&&r)return r;const g=m(f);return f&&(o=g),f||(r=g),g}return{init:c,destroy:h,get:p}}function ao(e,t,n,s,i,o){const{measureSize:r,startEdge:u,endEdge:l}=e,c=n[0]&&i,h=f(),m=g(),p=n.map(r),y=b();function f(){if(!c)return 0;const v=n[0];return H(t[u]-v[u])}function g(){if(!c)return 0;const v=o.getComputedStyle(ue(s));return parseFloat(v.getPropertyValue(`margin-${l}`))}function b(){return n.map((v,S,T)=>{const P=!S,I=cn(T,S);return P?p[S]+h:I?p[S]+m:T[S+1][u]-v[u]}).map(H)}return{slideSizes:p,slideSizesWithGaps:y,startGap:h,endGap:m}}function io(e,t,n,s,i,o,r,u,l){const{startEdge:c,endEdge:h,direction:m}=e,p=an(n);function y(d,v){return $e(d).filter(S=>S%v===0).map(S=>d.slice(S,S+v))}function f(d){return d.length?$e(d).reduce((v,S,T)=>{const P=ue(v)||0,I=P===0,j=S===Ue(d),C=i[c]-o[P][c],k=i[c]-o[S][h],D=!s&&I?m(r):0,w=!s&&j?m(u):0,M=H(k-w-(C+D));return T&&M>t+l&&v.push(S),j&&v.push(d.length),v},[]).map((v,S,T)=>{const P=Math.max(T[S-1]||0);return d.slice(P,v)}):[]}function g(d){return p?y(d,n):f(d)}return{groupSlides:g}}function lo(e,t,n,s,i,o,r){const{align:u,axis:l,direction:c,startIndex:h,loop:m,duration:p,dragFree:y,dragThreshold:f,inViewThreshold:g,slidesToScroll:b,skipSnaps:d,containScroll:v,watchResize:S,watchSlides:T,watchDrag:P,watchFocus:I}=o,j=2,C=$r(),k=C.measure(t),D=n.map(C.measure),w=qr(l,c),M=w.measureSize(k),_=Br(M),Y=Vr(u,M),Z=!m&&!!v,pe=m||!!v,{slideSizes:ge,slideSizesWithGaps:de,startGap:ae,endGap:z}=ao(w,k,D,n,pe,i),ee=io(w,M,b,m,k,D,ae,z,j),{snaps:O,snapsAligned:be}=Yr(w,Y,k,D,ee),te=-ue(O)+ue(de),{snapsContained:Ne,scrollContainLimit:ne}=Wr(M,te,be,v,j),J=Z?Ne:be,{limit:$}=Xr(te,J,m),ie=hr(Ue(J),h,m),G=ie.clone(),V=$e(n),x=({dragHandler:ve,scrollBody:Xe,scrollBounds:Je,options:{loop:De}})=>{De||Je.constrain(ve.pointerDown()),Xe.seek()},A=({scrollBody:ve,translate:Xe,location:Je,offsetLocation:De,previousLocation:Pe,scrollLooper:ke,slideLooper:Qe,dragHandler:Ye,animation:Jt,eventHandler:Ze,scrollBounds:dn,options:{loop:Qt}},Ce)=>{const et=ve.settled(),tt=!dn.shouldConstrain(),Le=Qt?et:et&&tt,Me=Le&&!Ye.pointerDown();Me&&Jt.stop();const fn=Je.get()*Ce+Pe.get()*(1-Ce);De.set(fn),Qt&&(ke.loop(ve.direction()),Qe.loop()),Xe.to(De.get()),Me&&Ze.emit("settle"),Le||Ze.emit("scroll")},R=Rr(s,i,()=>x(xe),ve=>A(xe,ve)),U=.68,K=J[ie.get()],se=Fe(K),q=Fe(K),fe=Fe(K),W=Fe(K),ye=Ur(se,fe,q,W,p,U),we=eo(m,J,te,$,W),re=to(R,ie,G,ye,we,W,r),Q=Qr($),Ke=Ge(),he=oo(t,n,r,g),{slideRegistry:Oe}=Zr(Z,v,J,ne,ee,V),We=no(e,n,Oe,re,ye,Ke,r,I),xe={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:k,slideRects:D,animation:R,axis:w,dragHandler:Fr(w,e,s,i,W,Hr(w,i),se,R,re,ye,we,ie,r,_,y,f,d,U,P),eventStore:Ke,percentOfView:_,index:ie,indexPrevious:G,limit:$,location:se,offsetLocation:fe,previousLocation:q,options:o,resizeHandler:Gr(t,r,i,n,w,S,C),scrollBody:ye,scrollBounds:Kr($,fe,W,ye,_),scrollLooper:Jr(te,$,fe,[se,fe,q,W]),scrollProgress:Q,scrollSnapList:J.map(Q.get),scrollSnaps:J,scrollTarget:we,scrollTo:re,slideLooper:so(w,M,te,ge,de,O,J,fe,n),slideFocus:We,slidesHandler:ro(t,r,T),slidesInView:he,slideIndexes:V,slideRegistry:Oe,slidesToScroll:ee,target:W,translate:vr(w,t)};return xe}function co(){let e={},t;function n(c){t=c}function s(c){return e[c]||[]}function i(c){return s(c).forEach(h=>h(t,c)),l}function o(c,h){return e[c]=s(c).concat([h]),l}function r(c,h){return e[c]=s(c).filter(m=>m!==h),l}function u(){e={}}const l={init:n,emit:i,off:r,on:o,clear:u};return l}const uo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function fo(e){function t(o,r){return gr(o,r||{})}function n(o){const r=o.breakpoints||{},u=Be(r).filter(l=>e.matchMedia(l).matches).map(l=>r[l]).reduce((l,c)=>t(l,c),{});return t(o,u)}function s(o){return o.map(r=>Be(r.breakpoints||{})).reduce((r,u)=>r.concat(u),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:s}}function mo(e){let t=[];function n(o,r){return t=r.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(o,e)),r.reduce((u,l)=>Object.assign(u,{[l.name]:l}),{})}function s(){t=t.filter(o=>o.destroy())}return{init:n,destroy:s}}function Rt(e,t,n){const s=e.ownerDocument,i=s.defaultView,o=fo(i),r=mo(o),u=Ge(),l=co(),{mergeOptions:c,optionsAtMedia:h,optionsMediaQueries:m}=o,{on:p,off:y,emit:f}=l,g=w;let b=!1,d,v=c(uo,Rt.globalOptions),S=c(v),T=[],P,I,j;function C(){const{container:V,slides:x}=S;I=(nn(V)?e.querySelector(V):V)||e.children[0];const R=nn(x)?I.querySelectorAll(x):x;j=[].slice.call(R||I.children)}function k(V){const x=lo(e,I,j,s,i,V,l);if(V.loop&&!x.slideLooper.canLoop()){const A=Object.assign({},V,{loop:!1});return k(A)}return x}function D(V,x){b||(v=c(v,V),S=h(v),T=x||T,C(),d=k(S),m([v,...T.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",w)),S.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(G),d.eventHandler.init(G),d.resizeHandler.init(G),d.slidesHandler.init(G),d.options.loop&&d.slideLooper.loop(),I.offsetParent&&j.length&&d.dragHandler.init(G),P=r.init(G,T)))}function w(V,x){const A=ee();M(),D(c({startIndex:A},V),x),l.emit("reInit")}function M(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),r.destroy(),u.clear()}function _(){b||(b=!0,u.clear(),M(),l.emit("destroy"),l.clear())}function Y(V,x,A){!S.active||b||(d.scrollBody.useBaseFriction().useDuration(x===!0?0:S.duration),d.scrollTo.index(V,A||0))}function Z(V){const x=d.index.add(1).get();Y(x,V,-1)}function pe(V){const x=d.index.add(-1).get();Y(x,V,1)}function ge(){return d.index.add(1).get()!==ee()}function de(){return d.index.add(-1).get()!==ee()}function ae(){return d.scrollSnapList}function z(){return d.scrollProgress.get(d.offsetLocation.get())}function ee(){return d.index.get()}function O(){return d.indexPrevious.get()}function be(){return d.slidesInView.get()}function te(){return d.slidesInView.get(!1)}function Ne(){return P}function ne(){return d}function J(){return e}function $(){return I}function ie(){return j}const G={canScrollNext:ge,canScrollPrev:de,containerNode:$,internalEngine:ne,destroy:_,off:y,on:p,emit:f,plugins:Ne,previousScrollSnap:O,reInit:g,rootNode:J,scrollNext:Z,scrollPrev:pe,scrollProgress:z,scrollSnapList:ae,scrollTo:Y,selectedScrollSnap:ee,slideNodes:ie,slidesInView:be,slidesNotInView:te};return D(t,n),setTimeout(()=>l.emit("init"),0),G}Rt.globalOptions=void 0;function un(e={},t=[]){const n=N.useRef(e),s=N.useRef(t),[i,o]=N.useState(),[r,u]=N.useState(),l=N.useCallback(()=>{i&&i.reInit(n.current,s.current)},[i]);return N.useEffect(()=>{on(n.current,e)||(n.current=e,l())},[e,l]),N.useEffect(()=>{Or(s.current,t)||(s.current=t,l())},[t,l]),N.useEffect(()=>{if(Ar()&&r){Rt.globalOptions=un.globalOptions;const c=Rt(r,n.current,s.current);return o(c),()=>c.destroy()}else o(void 0)},[r,o]),[u,i]}un.globalOptions=void 0;const br=N.createContext(null);function Wt(){const e=N.useContext(br);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const qt=N.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:s,className:i,children:o,...r},u)=>{const[l,c]=un({...t,axis:e==="horizontal"?"x":"y"},s),[h,m]=N.useState(!1),[p,y]=N.useState(!1),f=N.useCallback(v=>{v&&(m(v.canScrollPrev()),y(v.canScrollNext()))},[]),g=N.useCallback(()=>{c==null||c.scrollPrev()},[c]),b=N.useCallback(()=>{c==null||c.scrollNext()},[c]),d=N.useCallback(v=>{v.key==="ArrowLeft"?(v.preventDefault(),g()):v.key==="ArrowRight"&&(v.preventDefault(),b())},[g,b]);return N.useEffect(()=>{!c||!n||n(c)},[c,n]),N.useEffect(()=>{if(c)return f(c),c.on("reInit",f),c.on("select",f),()=>{c==null||c.off("select",f)}},[c,f]),a.jsx(br.Provider,{value:{carouselRef:l,api:c,opts:t,orientation:e||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:g,scrollNext:b,canScrollPrev:h,canScrollNext:p},children:a.jsx("div",{ref:u,onKeyDownCapture:d,className:L("relative",i),role:"region","aria-roledescription":"carousel",...r,children:o})})});qt.displayName="Carousel";const Ft=N.forwardRef(({className:e,...t},n)=>{const{carouselRef:s,orientation:i}=Wt();return a.jsx("div",{ref:s,className:"overflow-hidden",children:a.jsx("div",{ref:n,className:L("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})});Ft.displayName="CarouselContent";const Ht=N.forwardRef(({className:e,...t},n)=>{const{orientation:s}=Wt();return a.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:L("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-4":"pt-4",e),...t})});Ht.displayName="CarouselItem";const $t=N.forwardRef(({className:e,variant:t="outline",size:n="icon",...s},i)=>{const{orientation:o,scrollPrev:r,canScrollPrev:u}=Wt();return a.jsxs(pr,{ref:i,variant:t,size:n,className:L("absolute h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:r,...s,children:[a.jsx(Ir,{className:"size-4"}),a.jsx("span",{className:"sr-only",children:"Previous slide"})]})});$t.displayName="CarouselPrevious";const Bt=N.forwardRef(({className:e,variant:t="outline",size:n="icon",...s},i)=>{const{orientation:o,scrollNext:r,canScrollNext:u}=Wt();return a.jsxs(pr,{ref:i,variant:t,size:n,className:L("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:r,...s,children:[a.jsx(Pr,{className:"size-4"}),a.jsx("span",{className:"sr-only",children:"Next slide"})]})});Bt.displayName="CarouselNext";try{qt.displayName="Carousel",qt.__docgenInfo={description:"",displayName:"Carousel",props:{opts:{defaultValue:null,description:"",name:"opts",required:!1,type:{name:"Partial<OptionsType>"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"CreatePluginType<LoosePluginType, {}>[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},setApi:{defaultValue:null,description:"",name:"setApi",required:!1,type:{name:"(api: EmblaCarouselType) => void"}}}}}catch{}try{Ft.displayName="CarouselContent",Ft.__docgenInfo={description:"",displayName:"CarouselContent",props:{}}}catch{}try{Ht.displayName="CarouselItem",Ht.__docgenInfo={description:"",displayName:"CarouselItem",props:{}}}catch{}try{$t.displayName="CarouselPrevious",$t.__docgenInfo={description:"",displayName:"CarouselPrevious",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'},{value:'"lg"'},{value:'"icon"'}]}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"destructive"'},{value:'"outline"'},{value:'"secondary"'},{value:'"ghost"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Bt.displayName="CarouselNext",Bt.__docgenInfo={description:"",displayName:"CarouselNext",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'},{value:'"lg"'},{value:'"icon"'}]}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"destructive"'},{value:'"outline"'},{value:'"secondary"'},{value:'"ghost"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const po=(e,t,n)=>{const s="relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",i={xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl"},o={default:"bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm rounded-md hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",minimal:"bg-transparent hover:bg-gray-100/50 text-gray-600 border-none rounded-md disabled:hover:bg-transparent",rounded:"bg-white rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",square:"bg-white rounded-none border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md disabled:hover:bg-white disabled:hover:shadow-sm",floating:"bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white text-gray-700 shadow-lg rounded-lg hover:shadow-xl disabled:hover:bg-white/90 disabled:hover:shadow-lg",outline:"bg-transparent border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-md disabled:hover:border-gray-300 disabled:hover:bg-transparent"},r={outside:"!static !transform-none",inside:"!absolute pointer-events-auto",overlay:"!absolute !z-10 pointer-events-auto"};return L(s,i[t]||i.md,o[e]||o.default,r[n]||r.outside)},bn=(e,t,n,s,i)=>{const o=L(n&&!i&&"opacity-0 transition-opacity duration-200",n&&!i&&s&&"opacity-100");return e==="inside"||e==="overlay"?L(o,t?"right-2 top-1/2 -translate-y-1/2":"left-2 top-1/2 -translate-y-1/2"):o},go=e=>{const t={xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7"};return t[e]||t.md},Gt=({config:e,currentSlide:t,totalSlides:n,canGoNext:s,canGoPrevious:i,onNext:o,onPrevious:r,isHovered:u})=>{const{variant:l="default",size:c="md",position:h="outside",showPrevious:m=!0,showNext:p=!0,showOnHover:y=!1,alwaysVisible:f=!0,className:g="",previousClassName:b="",nextClassName:d="",previousIcon:v,nextIcon:S,ariaLabels:T={}}=e,P=po(l,c,h),I=go(c),j=a.jsx(zr,{className:I}),C=a.jsx(jr,{className:I}),k=m&&a.jsx($t,{className:L(P,bn(h,!1,y,u,f),g,b),disabled:!i,onClick:r,"aria-label":T.previous||"Previous slide",title:T.previous||"Previous slide","data-testid":"carousel-previous-button",children:v||j}),D=p&&a.jsx(Bt,{className:L(P,bn(h,!0,y,u,f),g,d),disabled:!s,onClick:o,"aria-label":T.next||"Next slide",title:T.next||"Next slide","data-testid":"carousel-next-button",children:S||C});return h==="outside"?a.jsxs("div",{className:"flex items-center gap-2",children:[k,p&&m&&a.jsxs("div",{className:"mx-1 text-xs text-gray-400",children:[t+1," / ",n]}),D]}):a.jsxs(a.Fragment,{children:[k,D]})};try{Gt.displayName="CarouselNavigation",Gt.__docgenInfo={description:"",displayName:"CarouselNavigation",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"NavigationConfig"}},currentSlide:{defaultValue:null,description:"",name:"currentSlide",required:!0,type:{name:"number"}},totalSlides:{defaultValue:null,description:"",name:"totalSlides",required:!0,type:{name:"number"}},canGoNext:{defaultValue:null,description:"",name:"canGoNext",required:!0,type:{name:"boolean"}},canGoPrevious:{defaultValue:null,description:"",name:"canGoPrevious",required:!0,type:{name:"boolean"}},onNext:{defaultValue:null,description:"",name:"onNext",required:!0,type:{name:"() => void"}},onPrevious:{defaultValue:null,description:"",name:"onPrevious",required:!0,type:{name:"() => void"}},isHovered:{defaultValue:null,description:"",name:"isHovered",required:!0,type:{name:"boolean"}}}}}catch{}const yn=(e,t,n,s,i)=>{const o=L("transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50","disabled:opacity-50 disabled:cursor-not-allowed",!i&&"cursor-pointer");if(n&&t)return L(o,n);if(s&&!t)return L(o,s);const r={dots:L("size-2 rounded-full border-2 border-transparent",t?"bg-primary scale-110 border-primary/20":"bg-gray-300 hover:bg-gray-400 hover:scale-105"),lines:L("h-1 rounded-full transition-all duration-300",t?"w-8 bg-primary shadow-sm":"w-4 bg-gray-300 hover:bg-gray-400 hover:w-6"),numbers:L("min-w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center border-2",t?"bg-primary text-white border-primary shadow-sm scale-105":"bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400 hover:scale-105"),thumbnails:L("relative overflow-hidden rounded border-2 transition-all duration-200",t?"border-primary shadow-md scale-105":"border-gray-300 hover:border-gray-400 hover:scale-102 opacity-70 hover:opacity-90"),progress:L("h-1 bg-gray-300 rounded-full overflow-hidden","relative"),none:""};return L(o,r[e]||r.dots)},ho=(e,t,n)=>{const s={start:"justify-start",center:"justify-center",end:"justify-end"},i="flex",o=s[t]||s.center,r={top:"order-first",bottom:"order-last",left:"flex-col items-center",right:"flex-col items-center"},u={dots:"gap-2",lines:"gap-3",numbers:"gap-1",thumbnails:"gap-2",progress:"gap-0",none:""};return L(i,o,r[e],u[n],e==="left"||e==="right"?"py-2":"px-2")},vo=e=>{const t=e||40;return{width:`${t}px`,height:`${t}px`}},bo=({currentSlide:e,totalSlides:t,className:n})=>{const s=(e+1)/t*100;return a.jsx("div",{className:L("h-1 w-32 overflow-hidden rounded-full bg-gray-300",n),children:a.jsx("div",{className:"h-full rounded-full bg-primary transition-all duration-300 ease-out",style:{width:`${s}%`},role:"progressbar","aria-valuenow":e+1,"aria-valuemin":1,"aria-valuemax":t,"aria-label":`Slide ${e+1} of ${t}`})})},yo=({slide:e,index:t,isActive:n,onClick:s,onFocus:i,onBlur:o,size:r,className:u})=>{var c,h;const l=((c=e.metadata)==null?void 0:c.thumbnail)||((h=e.metadata)==null?void 0:h.image);return a.jsxs("button",{onClick:s,onFocus:i,onBlur:o,className:u,style:vo(r),role:"tab","aria-selected":n,"aria-label":e.ariaLabel||`Go to slide ${t+1}`,tabIndex:n?0:-1,"data-testid":`carousel-thumbnail-${t}`,children:[l?a.jsx("img",{src:l,alt:e.ariaLabel||`Slide ${t+1} thumbnail`,className:"size-full object-cover",loading:"lazy"}):a.jsx("div",{className:"flex size-full items-center justify-center bg-gray-200 text-xs text-gray-500",children:t+1}),n&&a.jsx("div",{className:"absolute inset-0 rounded bg-primary/20"})]})},Ae=({config:e,currentSlide:t,totalSlides:n,slides:s,api:i,onSlideChange:o,onFocus:r,onBlur:u})=>{const{variant:l="dots",position:c="bottom",alignment:h="center",className:m="",activeClassName:p,inactiveClassName:y,showNumbers:f=!1,clickable:g=!0,thumbnailSize:b=40,maxVisible:d,ariaLabel:v="Carousel navigation"}=e,S=N.useMemo(()=>{if(!d||d>=n)return{start:0,end:n-1};const w=Math.floor(d/2);let M=Math.max(0,t-w);const _=Math.min(n-1,M+d-1);return _-M+1<d&&(M=Math.max(0,_-d+1)),{start:M,end:_}},[t,n,d]),T=N.useCallback(w=>{g&&(i==null||i.scrollTo(w),o==null||o(w))},[i,g,o]),P=N.useCallback(w=>{r==null||r(w)},[r]),I=N.useCallback(w=>{u==null||u(w)},[u]),j=ho(c,h,l);if(l==="none"||n<=1)return null;if(l==="progress")return a.jsxs("div",{className:L(j,m),role:"progressbar",children:[a.jsx(bo,{currentSlide:t,totalSlides:n,className:"mx-auto"}),a.jsxs("div",{className:"sr-only","aria-live":"polite",children:["Slide ",t+1," of ",n]})]});const C=[],k=d?S.start:0,D=d?S.end:n-1;for(let w=k;w<=D;w++){const M=t===w,_=s[w];l==="thumbnails"?C.push(a.jsx(yo,{slide:_,index:w,isActive:M,onClick:()=>T(w),onFocus:()=>P(w),onBlur:()=>I(w),size:b,className:yn(l,M,p,y,_==null?void 0:_.disabled)},w)):C.push(a.jsx("button",{onClick:()=>T(w),onFocus:()=>P(w),onBlur:()=>I(w),className:yn(l,M,p,y,_==null?void 0:_.disabled),disabled:!g||(_==null?void 0:_.disabled),role:"tab","aria-selected":M,"aria-label":(_==null?void 0:_.ariaLabel)||`Go to slide ${w+1}`,tabIndex:M?0:-1,"data-testid":`carousel-indicator-${w}`,children:(l==="numbers"||f)&&a.jsx("span",{children:w+1})},w))}return d&&d<n&&(S.start>0&&C.unshift(a.jsx("div",{className:"flex items-center justify-center px-1 text-xs text-gray-400",children:"..."},"ellipsis-start")),S.end<n-1&&C.push(a.jsx("div",{className:"flex items-center justify-center px-1 text-xs text-gray-400",children:"..."},"ellipsis-end"))),a.jsxs("div",{className:L(j,m),role:"tablist","aria-label":v,"data-testid":"carousel-indicators",children:[C,a.jsxs("div",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:["Slide ",t+1," of ",n]})]})};try{Ae.displayName="CarouselIndicators",Ae.__docgenInfo={description:"",displayName:"CarouselIndicators",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IndicatorConfig"}},currentSlide:{defaultValue:null,description:"",name:"currentSlide",required:!0,type:{name:"number"}},totalSlides:{defaultValue:null,description:"",name:"totalSlides",required:!0,type:{name:"number"}},slides:{defaultValue:null,description:"",name:"slides",required:!0,type:{name:"CarouselSlide[]"}},api:{defaultValue:null,description:"",name:"api",required:!1,type:{name:"EmblaCarouselType"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!1,type:{name:"(index: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(index: number) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(index: number) => void"}}}}}catch{}const Zt={variant:"default",size:"md",position:"outside",showPrevious:!0,showNext:!0,showOnHover:!1,alwaysVisible:!0,ariaLabels:{previous:"Previous slide",next:"Next slide"}},en={variant:"dots",position:"bottom",alignment:"center",clickable:!0,ariaLabel:"Carousel navigation"},_e={colors:{primary:"hsl(var(--primary))",secondary:"hsl(var(--secondary))",background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",border:"hsl(var(--border))",accent:"hsl(var(--accent))"},spacing:{gap:"1rem",padding:"0.5rem",margin:"0"},borderRadius:{sm:"0.25rem",md:"0.375rem",lg:"0.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"}},xo=e=>{const t={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-6xl","2xl":"max-w-7xl",full:"max-w-full",auto:"max-w-none"};return t[e]||t.lg},So=e=>{const t=(e==null?void 0:e.responsive)||[],n={};return t.forEach(s=>{s.settings.slidesToShow&&(n["--slides-to-show"]=s.settings.slidesToShow.toString())}),n},No=e=>{const t={};return e.colors&&Object.entries(e.colors).forEach(([n,s])=>{s&&(t[`--carousel-${n}`]=s)}),e.spacing&&Object.entries(e.spacing).forEach(([n,s])=>{s&&(t[`--carousel-${n}`]=s)}),t},Ut=N.forwardRef(({slides:e,size:t="lg",navigation:n=!0,indicators:s=!0,options:i={},theme:o=_e,className:r="",contentClassName:u="",slideClassName:l="",style:c={},onSlideChange:h,onSlideClick:m,onBeforeSlideChange:p,onAfterSlideChange:y,onAutoPlayStart:f,onAutoPlayStop:g,onDragStart:b,onDragEnd:d,onSwipeStart:v,onSwipeEnd:S,onFocus:T,onBlur:P,renderSlide:I,renderNavigation:j,renderIndicators:C,loading:k=!1,loadingComponent:D,error:w,errorComponent:M,"aria-label":_="Image carousel","aria-describedby":Y,"data-testid":Z,role:pe="region",virtualized:ge=!1,itemHeight:de},ae)=>{const[z,ee]=N.useState(),[O,be]=N.useState(i.startIndex||0),[te,Ne]=N.useState(0),[ne,J]=N.useState(!0),[$,ie]=N.useState(!0),[G,V]=N.useState(!1),[x,A]=N.useState(!1),[R,U]=N.useState(!1),[K,se]=N.useState(!1),[q,fe]=N.useState(!1),W=N.useRef(),ye=N.useRef(null),we=N.useRef(null),re=N.useMemo(()=>typeof n=="boolean"?n?Zt:{...Zt,showPrevious:!1,showNext:!1}:{...Zt,...n},[n]),Q=N.useMemo(()=>typeof s=="boolean"?s?en:{...en,variant:"none"}:{...en,...s},[s]),Ke=N.useMemo(()=>({..._e,...o,colors:{..._e.colors,...o.colors},spacing:{..._e.spacing,...o.spacing},borderRadius:{..._e.borderRadius,...o.borderRadius},shadows:{..._e.shadows,...o.shadows}}),[o]),{autoPlay:he=!1,autoPlayInterval:Oe=3e3,autoPlayDirection:We="forward",infinite:xe=!0,draggable:ve=!0,swipeable:Xe=!0,touchThreshold:Je=50,dragThreshold:De=100,pauseOnHover:Pe=!0,pauseOnFocus:ke=!0,resumeOnBlur:Qe=!0,slidesToShow:Ye=1,slidesToScroll:Jt=1,centerMode:Ze=!1,variableWidth:dn=!1,transition:Qt="slide",transitionDuration:Ce,easing:et="ease-in-out",keyboard:tt=!0,focusOnSelect:Le=!0,announceSlideChanges:Me=!0,lazyLoad:fn=!1,preloadSlides:zo=1,responsive:jo=[]}=i,Ve=N.useCallback(()=>{!he||!z||W.current||!q||(G||(V(!0),f==null||f()),W.current=setInterval(()=>{Pe&&x||ke&&R||(We==="forward"?xe||ne?z.scrollNext():z.scrollTo(0):xe||$?z.scrollPrev():z.scrollTo(e.length-1))},Oe))},[he,z,Oe,We,xe,e.length,q,f,G,ne,$,Pe,ke,x,R]),ze=N.useCallback(()=>{W.current&&(clearInterval(W.current),W.current=void 0,G&&(V(!1),g==null||g()))},[G,g]),X=N.useCallback(async E=>{!z||E===O||K||!q||await(p==null?void 0:p(O,E))===!1||(se(!0),z.scrollTo(E))},[z,O,K,q,p]),je=N.useCallback(()=>{!z||K||!q||z.scrollNext()},[z,K,q]),Te=N.useCallback(()=>{!z||K||!q||z.scrollPrev()},[z,K,q]);N.useImperativeHandle(ae,()=>({goToSlide:X,goToNext:je,goToPrevious:Te,play:Ve,pause:ze,getCurrentSlide:()=>O,getTotalSlides:()=>e.length,refresh:()=>z==null?void 0:z.reInit()}),[X,je,Te,Ve,ze,O,e.length,z]);const Se=N.useCallback(()=>{if(!z)return;const E=z.selectedScrollSnap();if(E===void 0||isNaN(E)){console.warn("Carousel API not fully initialized yet");return}const F=z.canScrollPrev(),me=z.canScrollNext();if(Ne(O),be(E),ie(F),J(me),se(!1),q||fe(!0),Me&&we.current){const Yt=e[E],wr=(Yt==null?void 0:Yt.ariaLabel)||`Slide ${E+1} of ${e.length}`;we.current.textContent=wr}h&&e[E]&&h(E,e[E],te),y&&e[E]&&y(E,e[E])},[Me,z,O,q,y,h,te,e]);N.useEffect(()=>z?((()=>{const F=z.selectedScrollSnap();if(F!==void 0&&!isNaN(F))Se();else{const me=setTimeout(()=>{Se()},50);return()=>clearTimeout(me)}})(),z.on("select",Se),z.on&&typeof z.on=="function"&&(z.on("init",Se),z.on("reInit",Se)),()=>{z.off("select",Se),z.off&&typeof z.off=="function"&&(z.off("init",Se),z.off("reInit",Se))}):void 0,[z]),N.useEffect(()=>(he&&q&&!W.current?Ve():!he&&W.current&&ze(),()=>{ze()}),[he,q]),N.useEffect(()=>{if(!tt||!q)return;const E=F=>{var me;if((me=ye.current)!=null&&me.contains(F.target))switch(F.key){case"ArrowLeft":F.preventDefault(),Te();break;case"ArrowRight":F.preventDefault(),je();break;case"Home":F.preventDefault(),X(0);break;case"End":F.preventDefault(),X(e.length-1);break;case" ":case"Spacebar":F.preventDefault(),G?ze():Ve();break}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[tt,e.length,G,q]);const Re=N.useCallback(E=>{U(!0),Le&&q&&X(E),T==null||T(E)},[Le,X,T,q]),qe=N.useCallback(E=>{U(!1),P==null||P(E)},[P]),xr=N.useCallback((E,F,me)=>{E.disabled||m==null||m(E,F,me)},[m]);if(N.useEffect(()=>{!he||!q||(Pe&&x||ke&&R?ze():Qe&&!x&&!R&&!W.current&&Ve())},[he,q,Pe,ke,Qe,x,R]),k)return a.jsx("div",{className:L("flex items-center justify-center p-8",r),children:D||a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"mx-auto mb-2 size-8 animate-spin rounded-full border-b-2 border-primary"}),a.jsx("p",{className:"text-sm text-gray-500",children:"Loading carousel..."})]})});if(w)return a.jsx("div",{className:L("flex items-center justify-center p-8 text-red-500",r),children:M||a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-sm",children:"Failed to load carousel"}),typeof w=="string"&&a.jsx("p",{className:"mt-1 text-xs text-gray-500",children:w})]})});if(!e||e.length===0)return a.jsx("div",{className:L("flex items-center justify-center p-8 text-gray-500",r),children:"No slides to display"});const mn=re.showNext||re.showPrevious,nt=Q.variant!=="none",Sr=No(Ke),Nr=So(i);return a.jsxs("div",{ref:ye,className:L("relative w-full overflow-hidden",xo(t),r),style:{...Sr,...Nr,...c},onMouseEnter:()=>{A(!0)},onMouseLeave:()=>{A(!1)},role:pe,"aria-label":_,"aria-describedby":Y,"data-testid":Z,children:[a.jsx("div",{ref:we,className:"sr-only","aria-live":"polite","aria-atomic":"true"}),a.jsxs(qt,{setApi:ee,className:L("flex w-full flex-col",(Q.position==="top","gap-4")),opts:{loop:xe,dragFree:!1,watchDrag:ve,slidesToScroll:Jt,startIndex:i.startIndex||0,...Ce?{duration:Ce}:{}},children:[nt&&Q.position==="top"&&(C?C({currentSlide:O,totalSlides:e.length,slides:e,goToSlide:X}):a.jsx(Ae,{config:Q,currentSlide:O,totalSlides:e.length,slides:e,api:z,onSlideChange:X,onFocus:Re,onBlur:qe})),a.jsxs("div",{className:"relative flex items-center gap-2",children:[mn&&re.position==="outside"&&(j?j({currentSlide:O,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,goToNext:je,goToPrevious:Te,goToSlide:X}):a.jsx(Gt,{config:re,currentSlide:O,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,onNext:je,onPrevious:Te,isHovered:x})),a.jsx(Ft,{className:L("flex-1",u),style:{touchAction:ve?"pan-y pinch-zoom":"none",...Ce?{transition:`transform ${Ce}ms ${et}`}:{}},onDragStart:b,onDragEnd:d,onTouchStart:v,onTouchEnd:S,children:e.map((E,F)=>a.jsx(Ht,{className:L(Ye>1&&`basis-1/${Ye}`,Ze&&"transform transition-transform duration-300",E.disabled&&"cursor-not-allowed opacity-50",m&&!E.disabled&&"cursor-pointer",l,E.className),style:E.style,onClick:me=>xr(E,F,me),onFocus:()=>Re(F),onBlur:()=>qe(F),tabIndex:Le?0:-1,"aria-label":E.ariaLabel||`Slide ${F+1}`,role:"tabpanel","aria-hidden":O!==F,children:I?I(E,F,O===F):E.content},E.id?`slide_${F}_${E.id}`:Cr()))}),mn&&(re.position==="inside"||re.position==="overlay")&&a.jsx("div",{className:L("pointer-events-none absolute inset-0 flex items-center justify-between",re.position==="overlay"&&"z-10"),children:j?a.jsx("div",{className:"pointer-events-auto",children:j({currentSlide:O,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,goToNext:je,goToPrevious:Te,goToSlide:X})}):a.jsx(Gt,{config:{...re,position:"inside"},currentSlide:O,totalSlides:e.length,canGoNext:ne,canGoPrevious:$,onNext:je,onPrevious:Te,isHovered:x})})]}),nt&&Q.position==="bottom"&&(C?C({currentSlide:O,totalSlides:e.length,slides:e,goToSlide:X}):a.jsx(Ae,{config:Q,currentSlide:O,totalSlides:e.length,slides:e,api:z,onSlideChange:X,onFocus:Re,onBlur:qe})),nt&&Q.position==="left"&&a.jsx("div",{className:"absolute left-0 top-1/2 z-10 -translate-y-1/2",children:C?C({currentSlide:O,totalSlides:e.length,slides:e,goToSlide:X}):a.jsx(Ae,{config:Q,currentSlide:O,totalSlides:e.length,slides:e,api:z,onSlideChange:X,onFocus:Re,onBlur:qe})}),nt&&Q.position==="right"&&a.jsx("div",{className:"absolute right-0 top-1/2 z-10 -translate-y-1/2",children:C?C({currentSlide:O,totalSlides:e.length,slides:e,goToSlide:X}):a.jsx(Ae,{config:Q,currentSlide:O,totalSlides:e.length,slides:e,api:z,onSlideChange:X,onFocus:Re,onBlur:qe})})]})]})});Ut.displayName="InteractiveCarousel";try{Ut.displayName="InteractiveCarousel",Ut.__docgenInfo={description:"",displayName:"InteractiveCarousel",props:{slides:{defaultValue:null,description:"",name:"slides",required:!0,type:{name:"CarouselSlide[]"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"xs"'},{value:'"md"'},{value:'"xl"'},{value:'"2xl"'},{value:'"full"'},{value:'"auto"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:{value:""},description:"",name:"contentClassName",required:!1,type:{name:"string"}},slideClassName:{defaultValue:{value:""},description:"",name:"slideClassName",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},navigation:{defaultValue:{value:"true"},description:"",name:"navigation",required:!1,type:{name:"boolean | NavigationConfig"}},indicators:{defaultValue:{value:"true"},description:"",name:"indicators",required:!1,type:{name:"boolean | IndicatorConfig"}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"CarouselOptions"}},theme:{defaultValue:{value:`{
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
}`},description:"",name:"theme",required:!1,type:{name:"CarouselTheme"}},"aria-label":{defaultValue:{value:"Image carousel"},description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},role:{defaultValue:{value:"region"},description:"",name:"role",required:!1,type:{name:"string"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!1,type:{name:"(slide: CarouselSlide, index: number, isActive: boolean) => ReactNode"}},renderNavigation:{defaultValue:null,description:"",name:"renderNavigation",required:!1,type:{name:"(props: NavigationRenderProps) => ReactNode"}},renderIndicators:{defaultValue:null,description:"",name:"renderIndicators",required:!1,type:{name:"(props: IndicatorRenderProps) => ReactNode"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingComponent:{defaultValue:null,description:"",name:"loadingComponent",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | Error"}},errorComponent:{defaultValue:null,description:"",name:"errorComponent",required:!1,type:{name:"ReactNode"}},virtualized:{defaultValue:{value:"false"},description:"",name:"virtualized",required:!1,type:{name:"boolean"}},itemHeight:{defaultValue:null,description:"",name:"itemHeight",required:!1,type:{name:"number"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!1,type:{name:"(currentIndex: number, slide: CarouselSlide, previousIndex: number) => void"}},onSlideClick:{defaultValue:null,description:"",name:"onSlideClick",required:!1,type:{name:"(slide: CarouselSlide, index: number, event: MouseEvent<Element, MouseEvent>) => void"}},onBeforeSlideChange:{defaultValue:null,description:"",name:"onBeforeSlideChange",required:!1,type:{name:"(currentIndex: number, nextIndex: number) => boolean | Promise<boolean>"}},onAfterSlideChange:{defaultValue:null,description:"",name:"onAfterSlideChange",required:!1,type:{name:"(currentIndex: number, slide: CarouselSlide) => void"}},onAutoPlayStart:{defaultValue:null,description:"",name:"onAutoPlayStart",required:!1,type:{name:"() => void"}},onAutoPlayStop:{defaultValue:null,description:"",name:"onAutoPlayStop",required:!1,type:{name:"() => void"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"(event: DragEvent<Element>) => void"}},onSwipeStart:{defaultValue:null,description:"",name:"onSwipeStart",required:!1,type:{name:"(event: TouchEvent<Element>) => void"}},onSwipeEnd:{defaultValue:null,description:"",name:"onSwipeEnd",required:!1,type:{name:"(event: TouchEvent<Element>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(index: number) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(index: number) => void"}}}}}catch{}const le=e=>`/reusable-ui-monorepo/${e.startsWith("/")?e.slice(1):e}`,ce={MOUNTAIN_LANDSCAPE:"/images/moutain_landscape.jpeg",DESERT_SUNSET:"/images/desert_sunset.jpg",FOREST_PATH:"/images/forest_path.jpeg",OCEAN_WAVES:"/images/ocean_waves.jpg",COMPUTER_MOUSE:"/images/computer_mouse.jpeg",DESK_ORGANIZER:"/images/desk_organizer.jpeg",SMART_WATCH:"/images/smart_watch.jpeg",WIRELESS_HEADPHONES:"/images/wireless_headphones.jpeg",NETFLIX_THUMBNAIL:"/images/netflix_thumbnail.jpeg",MIKE_CHEN:"/images/mike_chen.jpeg",SARAH_JOHNSON:"/images/sarah_johnson.jpeg"},st=({src:e,alt:t,title:n})=>a.jsxs("div",{className:"relative h-64 w-full overflow-hidden rounded-lg bg-gray-100",children:[a.jsx("img",{src:e,alt:t,className:"size-full object-cover"}),n&&a.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4",children:a.jsx("h3",{className:"text-lg font-semibold text-white",children:n})})]}),tn=({title:e,description:t,color:n="bg-blue-500"})=>a.jsxs("div",{className:`${n} flex h-64 flex-col items-center justify-center rounded-lg p-8 text-center text-white`,children:[a.jsx("h2",{className:"mb-4 text-2xl font-bold",children:e}),a.jsx("p",{className:"text-lg opacity-90",children:t})]}),rt=({name:e,price:t,image:n})=>a.jsxs("div",{className:"overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",children:[a.jsx("img",{src:n,alt:e,className:"h-48 w-full object-cover"}),a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"mb-2 font-semibold text-gray-900",children:e}),a.jsx("p",{className:"text-lg font-bold text-blue-600",children:t})]})]}),B=[{id:1,content:a.jsx(st,{src:le(ce.MOUNTAIN_LANDSCAPE),alt:"Mountain landscape",title:"Mountain Adventure"}),metadata:{category:"nature",featured:!0}},{id:2,content:a.jsx(st,{src:le(ce.FOREST_PATH),alt:"Forest path",title:"Forest Trail"}),metadata:{category:"nature"}},{id:3,content:a.jsx(st,{src:le(ce.OCEAN_WAVES),alt:"Ocean waves",title:"Ocean Waves"}),metadata:{category:"nature"}},{id:4,content:a.jsx(st,{src:le(ce.DESERT_SUNSET),alt:"Desert sunset",title:"Desert Sunset"}),metadata:{category:"nature"}}],Xt=[{id:1,content:a.jsx(tn,{title:"Welcome to Our Platform",description:"Discover amazing features and capabilities",color:"bg-gradient-to-r from-blue-500 to-purple-600"})},{id:2,content:a.jsx(tn,{title:"Powerful Analytics",description:"Get insights that drive your business forward",color:"bg-gradient-to-r from-green-500 to-teal-600"})},{id:3,content:a.jsx(tn,{title:"Seamless Integration",description:"Connect with your favorite tools and services",color:"bg-gradient-to-r from-orange-500 to-red-600"})}],Ee=[{id:1,content:a.jsx(rt,{name:"Wireless Headphones",price:"$199.99",image:le(ce.WIRELESS_HEADPHONES)})},{id:2,content:a.jsx(rt,{name:"Smart Watch",price:"$299.99",image:le(ce.SMART_WATCH)})},{id:3,content:a.jsx(rt,{name:"Laptop Stand",price:"$79.99",image:le(ce.COMPUTER_MOUSE)})},{id:4,content:a.jsx(rt,{name:"Desk Organizer",price:"$49.99",image:le(ce.DESK_ORGANIZER)})}],wo=[{id:1,content:a.jsxs("div",{className:"relative h-64 w-full overflow-hidden rounded-lg bg-black",children:[a.jsxs("video",{className:"size-full object-cover",poster:le(ce.NETFLIX_THUMBNAIL),controls:!0,children:[a.jsx("source",{src:"https://www.w3schools.com/html/mov_bbb.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4",children:a.jsx("h3",{className:"text-lg font-semibold text-white",children:"Product Demo"})})]}),metadata:{type:"video",duration:"2:30"}},{id:2,content:a.jsxs("div",{className:"flex h-64 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-center text-white",children:[a.jsx("div",{className:"mb-4 flex size-16 items-center justify-center rounded-full bg-white/20",children:a.jsx("svg",{className:"size-8",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M8 5v14l11-7z"})})}),a.jsx("h2",{className:"mb-2 text-xl font-bold",children:"Interactive Tutorial"}),a.jsx("p",{className:"text-sm opacity-90",children:"Learn our platform in 5 minutes"})]}),metadata:{type:"interactive",category:"tutorial"}}],Co=[{id:1,content:a.jsx("div",{className:"h-64 rounded-lg border border-gray-200 bg-white p-8 shadow-lg",children:a.jsxs("div",{className:"flex h-full flex-col justify-between",children:[a.jsx("blockquote",{className:"text-lg italic leading-relaxed text-gray-600",children:'"This component has revolutionized how we display content. The flexibility and ease of use is incredible!"'}),a.jsxs("div",{className:"mt-6 flex items-center",children:[a.jsx("img",{src:le(ce.SARAH_JOHNSON),alt:"Sarah Johnson",className:"mr-4 size-12 rounded-full"}),a.jsxs("div",{children:[a.jsx("div",{className:"font-semibold text-gray-900",children:"Sarah Johnson"}),a.jsx("div",{className:"text-sm text-gray-500",children:"Frontend Developer"})]})]})]})}),metadata:{rating:5,role:"developer"}},{id:2,content:a.jsx("div",{className:"h-64 rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8",children:a.jsxs("div",{className:"flex h-full flex-col justify-between",children:[a.jsx("blockquote",{className:"text-lg italic leading-relaxed text-gray-700",children:'"The accessibility features and keyboard navigation make this perfect for our enterprise application."'}),a.jsxs("div",{className:"mt-6 flex items-center",children:[a.jsx("img",{src:le(ce.MIKE_CHEN),alt:"Mike Chen",className:"mr-4 size-12 rounded-full"}),a.jsxs("div",{children:[a.jsx("div",{className:"font-semibold text-gray-900",children:"Mike Chen"}),a.jsx("div",{className:"text-sm text-gray-500",children:"UX Designer"})]})]})]})}),metadata:{rating:5,role:"designer"}}],yr=[{id:1,content:a.jsxs("div",{className:"h-64 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 p-6 text-white",children:[a.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20",children:a.jsx("svg",{className:"size-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),a.jsx("h3",{className:"mb-2 text-xl font-bold",children:"Accessibility First"}),a.jsx("p",{className:"text-white/90",children:"Built with ARIA support, keyboard navigation, and screen reader announcements"})]})},{id:2,content:a.jsxs("div",{className:"h-64 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-6 text-white",children:[a.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20",children:a.jsx("svg",{className:"size-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),a.jsx("h3",{className:"mb-2 text-xl font-bold",children:"Highly Customizable"}),a.jsx("p",{className:"text-white/90",children:"Extensive theming options, custom renderers, and flexible configuration"})]})},{id:3,content:a.jsxs("div",{className:"h-64 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white",children:[a.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20",children:a.jsx("svg",{className:"size-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"})})}),a.jsx("h3",{className:"mb-2 text-xl font-bold",children:"Performance Optimized"}),a.jsx("p",{className:"text-white/90",children:"Lazy loading, virtualization support, and efficient rendering"})]})}],Do={title:"Interactive/Interactive Carousel",component:Ut,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{slides:{description:"Array of slide objects containing content and metadata",control:!1},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Overall size of the carousel container"},navigation:{description:"Navigation configuration or boolean to enable/disable",control:!1},indicators:{description:"Indicator configuration or boolean to enable/disable",control:!1},options:{description:"Carousel behavior options",control:!1},className:{control:"text",description:"Additional CSS classes for the carousel container"},contentClassName:{control:"text",description:"Additional CSS classes for the carousel content"},onSlideChange:{action:"slide-changed",description:"Callback fired when slide changes"},onSlideClick:{action:"slide-clicked",description:"Callback fired when a slide is clicked"}},args:{onSlideChange:oe(),onSlideClick:oe(),onBeforeSlideChange:oe(),onAfterSlideChange:oe(),onAutoPlayStart:oe(),onAutoPlayStop:oe(),onDragStart:oe(),onDragEnd:oe(),onSwipeStart:oe(),onSwipeEnd:oe(),onFocus:oe(),onBlur:oe()}},ot={args:{slides:B,size:"lg",navigation:!0,indicators:!0}},at={args:{slides:Xt,size:"lg",navigation:!0,indicators:!0}},it={args:{slides:Ee,size:"lg",navigation:!0,indicators:!0,options:{slidesToShow:3,slidesToScroll:1,infinite:!0}}},lt={args:{slides:Xt,size:"sm",navigation:!0,indicators:!0}},ct={args:{slides:B,size:"full",navigation:!0,indicators:!0},parameters:{layout:"fullscreen"}},ut={args:{slides:B,size:"lg",navigation:{variant:"minimal",size:"lg"},indicators:!0}},dt={args:{slides:B,size:"lg",navigation:{variant:"rounded",size:"md"},indicators:!0}},ft={args:{slides:B,size:"lg",navigation:!1,indicators:!0}},mt={args:{slides:B,size:"lg",navigation:!0,indicators:{variant:"lines",position:"bottom",alignment:"center"}}},pt={args:{slides:B,size:"lg",navigation:!0,indicators:{variant:"numbers",position:"bottom",alignment:"center"}}},gt={args:{slides:B,size:"lg",navigation:!0,indicators:{variant:"dots",position:"top",alignment:"center"}}},ht={args:{slides:B,size:"lg",navigation:!0,indicators:!1}},vt={args:{slides:B,size:"lg",navigation:!0,indicators:!0,options:{autoPlay:!0,autoPlayInterval:2e3,pauseOnHover:!0,infinite:!0}}},bt={args:{slides:Xt,size:"lg",navigation:!0,indicators:!0,options:{autoPlay:!0,autoPlayInterval:1e3,pauseOnHover:!1,infinite:!0}}},yt={args:{slides:Ee,size:"xl",navigation:!0,indicators:!0,options:{slidesToShow:2,slidesToScroll:1,infinite:!0}}},xt={args:{slides:[...Ee,...Ee],size:"full",navigation:!0,indicators:!0,options:{slidesToShow:3,slidesToScroll:2,infinite:!0}},parameters:{layout:"fullscreen"}},St={args:{slides:wo,size:"lg",navigation:{variant:"floating",size:"lg",position:"overlay"},indicators:{variant:"dots",position:"bottom"},options:{autoPlay:!1,pauseOnHover:!0,draggable:!0}},parameters:{docs:{description:{story:"Carousel optimized for video and interactive media content with overlay navigation."}}}},Nt={args:{slides:Co,size:"lg",navigation:{variant:"minimal",size:"md",position:"outside"},indicators:{variant:"lines",position:"bottom",alignment:"center"},options:{autoPlay:!0,autoPlayInterval:3e3,pauseOnHover:!0,infinite:!0,transition:"fade",transitionDuration:100}},parameters:{docs:{description:{story:"Perfect for displaying customer testimonials with fade transitions and auto-play."}}}},wt={args:{slides:yr,size:"lg",navigation:!0,indicators:{variant:"numbers",position:"bottom",alignment:"center"},options:{centerMode:!0,infinite:!0,focusOnSelect:!0}},parameters:{docs:{description:{story:"Showcase product features with center mode and focus selection."}}}},Ct={args:{slides:B,size:"lg",className:"shadow-2xl rounded-2xl overflow-hidden",contentClassName:"gap-4",navigation:{variant:"rounded",size:"lg",className:"shadow-lg"},indicators:{variant:"dots",position:"bottom",alignment:"center",className:"p-4",activeClassName:"bg-red-500 scale-125",inactiveClassName:"bg-gray-400 hover:bg-gray-500"}}},zt={args:{slides:B,size:"lg",navigation:!0,indicators:!0,options:{infinite:!1,draggable:!0}}},jt={args:{slides:B,size:"lg",navigation:!0,indicators:!0,options:{draggable:!1,infinite:!0}}},Tt={args:{slides:Ee.concat(Ee),size:"full",navigation:!0,indicators:!0,options:{slidesToShow:4,slidesToScroll:2,infinite:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}},parameters:{layout:"fullscreen",docs:{description:{story:"Responsive carousel that adapts slides count based on screen size. Resize your browser to see the effect."}}}},It={args:{slides:B,size:"xl",navigation:{variant:"rounded",size:"lg",position:"outside"},indicators:!0,options:{centerMode:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,focusOnSelect:!0}},parameters:{docs:{description:{story:"Center mode displays the active slide prominently with partial views of adjacent slides."}}}},Et={args:{slides:Xt,size:"lg",navigation:!0,indicators:!0,options:{keyboard:!0,focusOnSelect:!0,announceSlideChanges:!0}},parameters:{docs:{description:{story:"Demonstrates keyboard navigation. Use Arrow Keys (←/→), Home/End, and Spacebar to control the carousel."}}}},Pt={args:{slides:yr,size:"lg",navigation:{variant:"default",size:"lg",ariaLabels:{previous:"Go to previous feature",next:"Go to next feature"}},indicators:{variant:"dots",position:"bottom",ariaLabel:"Feature navigation"},"aria-label":"Product features carousel","aria-describedby":"carousel-description",options:{keyboard:!0,announceSlideChanges:!0,focusOnSelect:!0}},parameters:{docs:{description:{story:"Accessibility-focused carousel with custom ARIA labels and screen reader support."}}}},kt={args:{slides:B,size:"lg",className:"bg-gray-900 p-6 rounded-lg",navigation:{variant:"outline",size:"lg",className:"border-white text-white hover:bg-white hover:text-gray-900"},indicators:{variant:"dots",position:"bottom",activeClassName:"bg-white",inactiveClassName:"bg-gray-600 hover:bg-gray-400"},theme:{colors:{primary:"#ffffff",secondary:"#6b7280",background:"#1f2937",foreground:"#ffffff",border:"#374151",accent:"#3b82f6"}}},parameters:{docs:{description:{story:"Dark theme carousel with custom colors and styling."}}}},Lt={args:{slides:Ee,size:"lg",navigation:!0,indicators:!0,renderSlide:(e,t,n)=>a.jsxs("div",{className:`transition-all duration-300 ${n?"scale-105":"scale-95 opacity-70"}`,children:[e.content,a.jsx("div",{className:"mt-2 text-center",children:a.jsxs("span",{className:`rounded px-2 py-1 text-xs ${n?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-600"}`,children:["Slide ",t+1]})})]}),renderNavigation:({canGoNext:e,canGoPrevious:t,goToNext:n,goToPrevious:s})=>a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:s,disabled:!t,className:"rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50",children:"← Prev"}),a.jsx("button",{onClick:n,disabled:!e,className:"rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50",children:"Next →"})]}),options:{slidesToShow:1,infinite:!1}},parameters:{docs:{description:{story:"Custom slide and navigation renderers for complete control over appearance."}}}},_t={args:{slides:[...B,...B,...B],size:"lg",navigation:!0,indicators:!0,options:{lazyLoad:!0,preloadSlides:2,infinite:!0,autoPlay:!0,autoPlayInterval:3e3}},parameters:{docs:{description:{story:"Optimized for performance with lazy loading and slide preloading."}}}},At={args:{slides:B,size:"lg",navigation:!0,indicators:!0,onSlideChange:(e,t)=>{console.log("Slide changed:",{index:e,slide:t})},onSlideClick:(e,t)=>{var n;console.log("Slide clicked:",{slide:e,index:t}),alert(`Clicked slide ${t+1}: ${((n=e.metadata)==null?void 0:n.category)||"Unknown"}`)}}},Ot={args:{slides:[B[0]],size:"lg",navigation:!0,indicators:!0}},Dt={args:{slides:[],size:"lg",loading:!0,loadingComponent:a.jsxs("div",{className:"flex h-64 flex-col items-center justify-center space-y-4",children:[a.jsx("div",{className:"size-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500"}),a.jsx("p",{className:"text-gray-600",children:"Loading amazing content..."})]})},parameters:{docs:{description:{story:"Custom loading state with spinner and message."}}}},Mt={args:{slides:[],size:"lg",navigation:!0,indicators:!0}},Vt={args:{slides:[],size:"lg",error:"Failed to load carousel content",errorComponent:a.jsxs("div",{className:"flex h-64 flex-col items-center justify-center space-y-4 text-red-500",children:[a.jsx(Lr,{className:"size-12 text-current",viewBox:"0 0 24 24"}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"font-semibold",children:"Oops! Something went wrong"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Please try refreshing the page"})]})]})},parameters:{docs:{description:{story:"Custom error state with icon and helpful message."}}}};var xn,Sn,Nn;ot.parameters={...ot.parameters,docs:{...(xn=ot.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(Nn=(Sn=ot.parameters)==null?void 0:Sn.docs)==null?void 0:Nn.source}}};var wn,Cn,zn;at.parameters={...at.parameters,docs:{...(wn=at.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(zn=(Cn=at.parameters)==null?void 0:Cn.docs)==null?void 0:zn.source}}};var jn,Tn,In;it.parameters={...it.parameters,docs:{...(jn=it.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(In=(Tn=it.parameters)==null?void 0:Tn.docs)==null?void 0:In.source}}};var En,Pn,kn;lt.parameters={...lt.parameters,docs:{...(En=lt.parameters)==null?void 0:En.docs,source:{originalSource:`{
  args: {
    slides: contentSlides,
    size: "sm",
    navigation: true,
    indicators: true
  }
}`,...(kn=(Pn=lt.parameters)==null?void 0:Pn.docs)==null?void 0:kn.source}}};var Ln,_n,An;ct.parameters={...ct.parameters,docs:{...(Ln=ct.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "full",
    navigation: true,
    indicators: true
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...(An=(_n=ct.parameters)==null?void 0:_n.docs)==null?void 0:An.source}}};var On,Dn,Mn;ut.parameters={...ut.parameters,docs:{...(On=ut.parameters)==null?void 0:On.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: {
      variant: "minimal",
      size: "lg"
    },
    indicators: true
  }
}`,...(Mn=(Dn=ut.parameters)==null?void 0:Dn.docs)==null?void 0:Mn.source}}};var Vn,Rn,qn;dt.parameters={...dt.parameters,docs:{...(Vn=dt.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: {
      variant: "rounded",
      size: "md"
    },
    indicators: true
  }
}`,...(qn=(Rn=dt.parameters)==null?void 0:Rn.docs)==null?void 0:qn.source}}};var Fn,Hn,$n;ft.parameters={...ft.parameters,docs:{...(Fn=ft.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: false,
    indicators: true
  }
}`,...($n=(Hn=ft.parameters)==null?void 0:Hn.docs)==null?void 0:$n.source}}};var Bn,Gn,Un;mt.parameters={...mt.parameters,docs:{...(Bn=mt.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(Un=(Gn=mt.parameters)==null?void 0:Gn.docs)==null?void 0:Un.source}}};var Kn,Wn,Xn;pt.parameters={...pt.parameters,docs:{...(Kn=pt.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Xn=(Wn=pt.parameters)==null?void 0:Wn.docs)==null?void 0:Xn.source}}};var Jn,Qn,Yn;gt.parameters={...gt.parameters,docs:{...(Jn=gt.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Yn=(Qn=gt.parameters)==null?void 0:Qn.docs)==null?void 0:Yn.source}}};var Zn,es,ts;ht.parameters={...ht.parameters,docs:{...(Zn=ht.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: false
  }
}`,...(ts=(es=ht.parameters)==null?void 0:es.docs)==null?void 0:ts.source}}};var ns,ss,rs;vt.parameters={...vt.parameters,docs:{...(ns=vt.parameters)==null?void 0:ns.docs,source:{originalSource:`{
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
}`,...(rs=(ss=vt.parameters)==null?void 0:ss.docs)==null?void 0:rs.source}}};var os,as,is;bt.parameters={...bt.parameters,docs:{...(os=bt.parameters)==null?void 0:os.docs,source:{originalSource:`{
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
}`,...(is=(as=bt.parameters)==null?void 0:as.docs)==null?void 0:is.source}}};var ls,cs,us;yt.parameters={...yt.parameters,docs:{...(ls=yt.parameters)==null?void 0:ls.docs,source:{originalSource:`{
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
}`,...(us=(cs=yt.parameters)==null?void 0:cs.docs)==null?void 0:us.source}}};var ds,fs,ms;xt.parameters={...xt.parameters,docs:{...(ds=xt.parameters)==null?void 0:ds.docs,source:{originalSource:`{
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
}`,...(ms=(fs=xt.parameters)==null?void 0:fs.docs)==null?void 0:ms.source}}};var ps,gs,hs;St.parameters={...St.parameters,docs:{...(ps=St.parameters)==null?void 0:ps.docs,source:{originalSource:`{
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
}`,...(hs=(gs=St.parameters)==null?void 0:gs.docs)==null?void 0:hs.source}}};var vs,bs,ys;Nt.parameters={...Nt.parameters,docs:{...(vs=Nt.parameters)==null?void 0:vs.docs,source:{originalSource:`{
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
}`,...(ys=(bs=Nt.parameters)==null?void 0:bs.docs)==null?void 0:ys.source}}};var xs,Ss,Ns;wt.parameters={...wt.parameters,docs:{...(xs=wt.parameters)==null?void 0:xs.docs,source:{originalSource:`{
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
}`,...(Ns=(Ss=wt.parameters)==null?void 0:Ss.docs)==null?void 0:Ns.source}}};var ws,Cs,zs;Ct.parameters={...Ct.parameters,docs:{...(ws=Ct.parameters)==null?void 0:ws.docs,source:{originalSource:`{
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
}`,...(zs=(Cs=Ct.parameters)==null?void 0:Cs.docs)==null?void 0:zs.source}}};var js,Ts,Is;zt.parameters={...zt.parameters,docs:{...(js=zt.parameters)==null?void 0:js.docs,source:{originalSource:`{
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
}`,...(Is=(Ts=zt.parameters)==null?void 0:Ts.docs)==null?void 0:Is.source}}};var Es,Ps,ks;jt.parameters={...jt.parameters,docs:{...(Es=jt.parameters)==null?void 0:Es.docs,source:{originalSource:`{
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
}`,...(ks=(Ps=jt.parameters)==null?void 0:Ps.docs)==null?void 0:ks.source}}};var Ls,_s,As;Tt.parameters={...Tt.parameters,docs:{...(Ls=Tt.parameters)==null?void 0:Ls.docs,source:{originalSource:`{
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
}`,...(As=(_s=Tt.parameters)==null?void 0:_s.docs)==null?void 0:As.source}}};var Os,Ds,Ms;It.parameters={...It.parameters,docs:{...(Os=It.parameters)==null?void 0:Os.docs,source:{originalSource:`{
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
}`,...(Ms=(Ds=It.parameters)==null?void 0:Ds.docs)==null?void 0:Ms.source}}};var Vs,Rs,qs;Et.parameters={...Et.parameters,docs:{...(Vs=Et.parameters)==null?void 0:Vs.docs,source:{originalSource:`{
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
}`,...(qs=(Rs=Et.parameters)==null?void 0:Rs.docs)==null?void 0:qs.source}}};var Fs,Hs,$s;Pt.parameters={...Pt.parameters,docs:{...(Fs=Pt.parameters)==null?void 0:Fs.docs,source:{originalSource:`{
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
}`,...($s=(Hs=Pt.parameters)==null?void 0:Hs.docs)==null?void 0:$s.source}}};var Bs,Gs,Us;kt.parameters={...kt.parameters,docs:{...(Bs=kt.parameters)==null?void 0:Bs.docs,source:{originalSource:`{
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
}`,...(Us=(Gs=kt.parameters)==null?void 0:Gs.docs)==null?void 0:Us.source}}};var Ks,Ws,Xs;Lt.parameters={...Lt.parameters,docs:{...(Ks=Lt.parameters)==null?void 0:Ks.docs,source:{originalSource:`{
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
}`,...(Xs=(Ws=Lt.parameters)==null?void 0:Ws.docs)==null?void 0:Xs.source}}};var Js,Qs,Ys;_t.parameters={..._t.parameters,docs:{...(Js=_t.parameters)==null?void 0:Js.docs,source:{originalSource:`{
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
}`,...(Ys=(Qs=_t.parameters)==null?void 0:Qs.docs)==null?void 0:Ys.source}}};var Zs,er,tr;At.parameters={...At.parameters,docs:{...(Zs=At.parameters)==null?void 0:Zs.docs,source:{originalSource:`{
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
}`,...(tr=(er=At.parameters)==null?void 0:er.docs)==null?void 0:tr.source}}};var nr,sr,rr;Ot.parameters={...Ot.parameters,docs:{...(nr=Ot.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    slides: [imageSlides[0]],
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(rr=(sr=Ot.parameters)==null?void 0:sr.docs)==null?void 0:rr.source}}};var or,ar,ir;Dt.parameters={...Dt.parameters,docs:{...(or=Dt.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ir=(ar=Dt.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var lr,cr,ur;Mt.parameters={...Mt.parameters,docs:{...(lr=Mt.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    slides: [],
    size: "lg",
    navigation: true,
    indicators: true
  }
}`,...(ur=(cr=Mt.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var dr,fr,mr;Vt.parameters={...Vt.parameters,docs:{...(dr=Vt.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(mr=(fr=Vt.parameters)==null?void 0:fr.docs)==null?void 0:mr.source}}};const Mo=["Default","ContentCarousel","ProductShowcase","SmallSize","FullWidth","MinimalNavigation","RoundedNavigation","NoNavigation","LineIndicators","NumberIndicators","TopIndicators","NoIndicators","AutoPlay","AutoPlayFast","MultipleSlides","ThreeSlides","VideoMediaCarousel","TestimonialCarousel","FeatureHighlights","CustomStyling","NonInfinite","NonDraggable","ResponsiveCarousel","CenterModeCarousel","KeyboardNavigationDemo","AccessibilityFocused","DarkThemeCarousel","CustomRendererExample","LazyLoadingCarousel","WithCallbacks","SingleSlide","LoadingState","EmptySlides","ErrorState"];export{Pt as AccessibilityFocused,vt as AutoPlay,bt as AutoPlayFast,It as CenterModeCarousel,at as ContentCarousel,Lt as CustomRendererExample,Ct as CustomStyling,kt as DarkThemeCarousel,ot as Default,Mt as EmptySlides,Vt as ErrorState,wt as FeatureHighlights,ct as FullWidth,Et as KeyboardNavigationDemo,_t as LazyLoadingCarousel,mt as LineIndicators,Dt as LoadingState,ut as MinimalNavigation,yt as MultipleSlides,ht as NoIndicators,ft as NoNavigation,jt as NonDraggable,zt as NonInfinite,pt as NumberIndicators,it as ProductShowcase,Tt as ResponsiveCarousel,dt as RoundedNavigation,Ot as SingleSlide,lt as SmallSize,Nt as TestimonialCarousel,xt as ThreeSlides,gt as TopIndicators,St as VideoMediaCarousel,At as WithCallbacks,Mo as __namedExportsOrder,Do as default};
