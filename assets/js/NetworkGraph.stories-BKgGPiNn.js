import{j as ie}from"./jsx-runtime-DdxpLdx6.js";import{r as V}from"./index-Bk7LAl9r.js";import{c as ui}from"./createLucideIcon-DO4rnCdN.js";import{C as Fi}from"./chevron-up-D7OYm28i.js";import{C as Hi}from"./chevron-down-BfzRN9Ux.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Xi=ui("maximize-2",Oi);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],Yi=ui("minimize-2",Bi);var ji={value:()=>{}};function tt(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Rt(n)}function Rt(e){this._=e}function Gi(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Rt.prototype=tt.prototype={constructor:Rt,on:function(e,t){var n=this._,r=Gi(e+"",n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=Ui(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=_n(n[i],e.name,t);else if(t==null)for(i in n)n[i]=_n(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Rt(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function Ui(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function _n(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=ji,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var nn="http://www.w3.org/1999/xhtml";const Cn={svg:"http://www.w3.org/2000/svg",xhtml:nn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Yt(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Cn.hasOwnProperty(t)?{space:Cn[t],local:e}:e}function Zi(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===nn&&t.documentElement.namespaceURI===nn?t.createElement(e):t.createElementNS(n,e)}}function Ji(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function hi(e){var t=Yt(e);return(t.local?Ji:Zi)(t)}function Qi(){}function fn(e){return e==null?Qi:function(){return this.querySelector(e)}}function Ki(e){typeof e!="function"&&(e=fn(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=new Array(o),u,l,c=0;c<o;++c)(u=a[c])&&(l=e.call(u,u.__data__,c,a))&&("__data__"in u&&(l.__data__=u.__data__),s[c]=l);return new fe(r,this._parents)}function ea(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function ta(){return[]}function di(e){return e==null?ta:function(){return this.querySelectorAll(e)}}function na(e){return function(){return ea(e.apply(this,arguments))}}function ra(e){typeof e=="function"?e=na(e):e=di(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,u,l=0;l<s;++l)(u=o[l])&&(r.push(e.call(u,u.__data__,l,o)),i.push(u));return new fe(r,i)}function fi(e){return function(){return this.matches(e)}}function gi(e){return function(t){return t.matches(e)}}var ia=Array.prototype.find;function aa(e){return function(){return ia.call(this.children,e)}}function oa(){return this.firstElementChild}function sa(e){return this.select(e==null?oa:aa(typeof e=="function"?e:gi(e)))}var la=Array.prototype.filter;function ca(){return Array.from(this.children)}function ua(e){return function(){return la.call(this.children,e)}}function ha(e){return this.selectAll(e==null?ca:ua(typeof e=="function"?e:gi(e)))}function da(e){typeof e!="function"&&(e=fi(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],u,l=0;l<o;++l)(u=a[l])&&e.call(u,u.__data__,l,a)&&s.push(u);return new fe(r,this._parents)}function pi(e){return new Array(e.length)}function fa(){return new fe(this._enter||this._groups.map(pi),this._parents)}function Wt(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Wt.prototype={constructor:Wt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function ga(e){return function(){return e}}function pa(e,t,n,r,i,a){for(var o=0,s,u=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new Wt(e,a[o]);for(;o<u;++o)(s=t[o])&&(i[o]=s)}function ma(e,t,n,r,i,a,o){var s,u,l=new Map,c=t.length,d=a.length,h=new Array(c),f;for(s=0;s<c;++s)(u=t[s])&&(h[s]=f=o.call(u,u.__data__,s,t)+"",l.has(f)?i[s]=u:l.set(f,u));for(s=0;s<d;++s)f=o.call(e,a[s],s,a)+"",(u=l.get(f))?(r[s]=u,u.__data__=a[s],l.delete(f)):n[s]=new Wt(e,a[s]);for(s=0;s<c;++s)(u=t[s])&&l.get(h[s])===u&&(i[s]=u)}function ya(e){return e.__data__}function ba(e,t){if(!arguments.length)return Array.from(this,ya);var n=t?ma:pa,r=this._parents,i=this._groups;typeof e!="function"&&(e=ga(e));for(var a=i.length,o=new Array(a),s=new Array(a),u=new Array(a),l=0;l<a;++l){var c=r[l],d=i[l],h=d.length,f=va(e.call(c,c&&c.__data__,l,r)),x=f.length,b=s[l]=new Array(x),y=o[l]=new Array(x),p=u[l]=new Array(h);n(c,d,b,y,p,f,t);for(var v=0,k=0,g,C;v<x;++v)if(g=b[v]){for(v>=k&&(k=v+1);!(C=y[k])&&++k<x;);g._next=C||null}}return o=new fe(o,r),o._enter=s,o._exit=u,o}function va(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function wa(){return new fe(this._exit||this._groups.map(pi),this._parents)}function xa(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function ka(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=new Array(i),u=0;u<o;++u)for(var l=n[u],c=r[u],d=l.length,h=s[u]=new Array(d),f,x=0;x<d;++x)(f=l[x]||c[x])&&(h[x]=f);for(;u<i;++u)s[u]=n[u];return new fe(s,this._parents)}function _a(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Ca(e){e||(e=Sa);function t(d,h){return d&&h?e(d.__data__,h.__data__):!d-!h}for(var n=this._groups,r=n.length,i=new Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,u=i[a]=new Array(s),l,c=0;c<s;++c)(l=o[c])&&(u[c]=l);u.sort(t)}return new fe(i,this._parents).order()}function Sa(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Na(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Ma(){return Array.from(this)}function Ea(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function Da(){let e=0;for(const t of this)++e;return e}function Ta(){return!this.node()}function $a(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function Aa(e){return function(){this.removeAttribute(e)}}function za(e){return function(){this.removeAttributeNS(e.space,e.local)}}function qa(e,t){return function(){this.setAttribute(e,t)}}function La(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Ra(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Va(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ia(e,t){var n=Yt(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?za:Aa:typeof t=="function"?n.local?Va:Ra:n.local?La:qa)(n,t))}function mi(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Pa(e){return function(){this.style.removeProperty(e)}}function Wa(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Fa(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Ha(e,t,n){return arguments.length>1?this.each((t==null?Pa:typeof t=="function"?Fa:Wa)(e,t,n??"")):He(this.node(),e)}function He(e,t){return e.style.getPropertyValue(t)||mi(e).getComputedStyle(e,null).getPropertyValue(t)}function Oa(e){return function(){delete this[e]}}function Xa(e,t){return function(){this[e]=t}}function Ba(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Ya(e,t){return arguments.length>1?this.each((t==null?Oa:typeof t=="function"?Ba:Xa)(e,t)):this.node()[e]}function yi(e){return e.trim().split(/^|\s+/)}function gn(e){return e.classList||new bi(e)}function bi(e){this._node=e,this._names=yi(e.getAttribute("class")||"")}bi.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function vi(e,t){for(var n=gn(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function wi(e,t){for(var n=gn(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function ja(e){return function(){vi(this,e)}}function Ga(e){return function(){wi(this,e)}}function Ua(e,t){return function(){(t.apply(this,arguments)?vi:wi)(this,e)}}function Za(e,t){var n=yi(e+"");if(arguments.length<2){for(var r=gn(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Ua:t?ja:Ga)(n,t))}function Ja(){this.textContent=""}function Qa(e){return function(){this.textContent=e}}function Ka(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function eo(e){return arguments.length?this.each(e==null?Ja:(typeof e=="function"?Ka:Qa)(e)):this.node().textContent}function to(){this.innerHTML=""}function no(e){return function(){this.innerHTML=e}}function ro(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function io(e){return arguments.length?this.each(e==null?to:(typeof e=="function"?ro:no)(e)):this.node().innerHTML}function ao(){this.nextSibling&&this.parentNode.appendChild(this)}function oo(){return this.each(ao)}function so(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function lo(){return this.each(so)}function co(e){var t=typeof e=="function"?e:hi(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function uo(){return null}function ho(e,t){var n=typeof e=="function"?e:hi(e),r=t==null?uo:typeof t=="function"?t:fn(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function fo(){var e=this.parentNode;e&&e.removeChild(this)}function go(){return this.each(fo)}function po(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function mo(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function yo(e){return this.select(e?mo:po)}function bo(e){return arguments.length?this.property("__data__",e):this.node().__data__}function vo(e){return function(t){e.call(this,t,this.__data__)}}function wo(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function xo(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function ko(e,t,n){return function(){var r=this.__on,i,a=vo(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function _o(e,t,n){var r=wo(e+""),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var u=0,l=s.length,c;u<l;++u)for(i=0,c=s[u];i<a;++i)if((o=r[i]).type===c.type&&o.name===c.name)return c.value}return}for(s=t?ko:xo,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function xi(e,t,n){var r=mi(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Co(e,t){return function(){return xi(this,e,t)}}function So(e,t){return function(){return xi(this,e,t.apply(this,arguments))}}function No(e,t){return this.each((typeof t=="function"?So:Co)(e,t))}function*Mo(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var ki=[null];function fe(e,t){this._groups=e,this._parents=t}function nt(){return new fe([[document.documentElement]],ki)}function Eo(){return this}fe.prototype=nt.prototype={constructor:fe,select:Ki,selectAll:ra,selectChild:sa,selectChildren:ha,filter:da,data:ba,enter:fa,exit:wa,join:xa,merge:ka,selection:Eo,order:_a,sort:Ca,call:Na,nodes:Ma,node:Ea,size:Da,empty:Ta,each:$a,attr:Ia,style:Ha,property:Ya,classed:Za,text:eo,html:io,raise:oo,lower:lo,append:co,insert:ho,remove:go,clone:yo,datum:bo,on:_o,dispatch:No,[Symbol.iterator]:Mo};function ee(e){return typeof e=="string"?new fe([[document.querySelector(e)]],[document.documentElement]):new fe([[e]],ki)}function Do(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Se(e,t){if(e=Do(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const To={passive:!1},Ze={capture:!0,passive:!1};function Qt(e){e.stopImmediatePropagation()}function Ie(e){e.preventDefault(),e.stopImmediatePropagation()}function _i(e){var t=e.document.documentElement,n=ee(e).on("dragstart.drag",Ie,Ze);"onselectstart"in t?n.on("selectstart.drag",Ie,Ze):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Ci(e,t){var n=e.document.documentElement,r=ee(e).on("dragstart.drag",null);t&&(r.on("click.drag",Ie,Ze),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const st=e=>()=>e;function rn(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:a,x:o,y:s,dx:u,dy:l,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:u,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:c}})}rn.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function $o(e){return!e.ctrlKey&&!e.button}function Ao(){return this.parentNode}function zo(e,t){return t??{x:e.x,y:e.y}}function qo(){return navigator.maxTouchPoints||"ontouchstart"in this}function Si(){var e=$o,t=Ao,n=zo,r=qo,i={},a=tt("start","drag","end"),o=0,s,u,l,c,d=0;function h(g){g.on("mousedown.drag",f).filter(r).on("touchstart.drag",y).on("touchmove.drag",p,To).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(g,C){if(!(c||!e.call(this,g,C))){var _=k(this,t.call(this,g,C),g,C,"mouse");_&&(ee(g.view).on("mousemove.drag",x,Ze).on("mouseup.drag",b,Ze),_i(g.view),Qt(g),l=!1,s=g.clientX,u=g.clientY,_("start",g))}}function x(g){if(Ie(g),!l){var C=g.clientX-s,_=g.clientY-u;l=C*C+_*_>d}i.mouse("drag",g)}function b(g){ee(g.view).on("mousemove.drag mouseup.drag",null),Ci(g.view,l),Ie(g),i.mouse("end",g)}function y(g,C){if(e.call(this,g,C)){var _=g.changedTouches,S=t.call(this,g,C),A=_.length,N,q;for(N=0;N<A;++N)(q=k(this,S,g,C,_[N].identifier,_[N]))&&(Qt(g),q("start",g,_[N]))}}function p(g){var C=g.changedTouches,_=C.length,S,A;for(S=0;S<_;++S)(A=i[C[S].identifier])&&(Ie(g),A("drag",g,C[S]))}function v(g){var C=g.changedTouches,_=C.length,S,A;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),S=0;S<_;++S)(A=i[C[S].identifier])&&(Qt(g),A("end",g,C[S]))}function k(g,C,_,S,A,N){var q=a.copy(),F=Se(N||_,C),K,te,m;if((m=n.call(g,new rn("beforestart",{sourceEvent:_,target:h,identifier:A,active:o,x:F[0],y:F[1],dx:0,dy:0,dispatch:q}),S))!=null)return K=m.x-F[0]||0,te=m.y-F[1]||0,function E(w,$,R){var M=F,z;switch(w){case"start":i[A]=E,z=o++;break;case"end":delete i[A],--o;case"drag":F=Se(R||$,C),z=o;break}q.call(w,g,new rn(w,{sourceEvent:$,subject:m,target:h,identifier:A,active:z,x:F[0]+K,y:F[1]+te,dx:F[0]-M[0],dy:F[1]-M[1],dispatch:q}),S)}}return h.filter=function(g){return arguments.length?(e=typeof g=="function"?g:st(!!g),h):e},h.container=function(g){return arguments.length?(t=typeof g=="function"?g:st(g),h):t},h.subject=function(g){return arguments.length?(n=typeof g=="function"?g:st(g),h):n},h.touchable=function(g){return arguments.length?(r=typeof g=="function"?g:st(!!g),h):r},h.on=function(){var g=a.on.apply(a,arguments);return g===a?h:g},h.clickDistance=function(g){return arguments.length?(d=(g=+g)*g,h):Math.sqrt(d)},h}function pn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Ni(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function rt(){}var Je=.7,Ft=1/Je,Pe="\\s*([+-]?\\d+)\\s*",Qe="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xe="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Lo=/^#([0-9a-f]{3,8})$/,Ro=new RegExp(`^rgb\\(${Pe},${Pe},${Pe}\\)$`),Vo=new RegExp(`^rgb\\(${xe},${xe},${xe}\\)$`),Io=new RegExp(`^rgba\\(${Pe},${Pe},${Pe},${Qe}\\)$`),Po=new RegExp(`^rgba\\(${xe},${xe},${xe},${Qe}\\)$`),Wo=new RegExp(`^hsl\\(${Qe},${xe},${xe}\\)$`),Fo=new RegExp(`^hsla\\(${Qe},${xe},${xe},${Qe}\\)$`),Sn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};pn(rt,Ke,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Nn,formatHex:Nn,formatHex8:Ho,formatHsl:Oo,formatRgb:Mn,toString:Mn});function Nn(){return this.rgb().formatHex()}function Ho(){return this.rgb().formatHex8()}function Oo(){return Mi(this).formatHsl()}function Mn(){return this.rgb().formatRgb()}function Ke(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Lo.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?En(t):n===3?new he(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?lt(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?lt(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ro.exec(e))?new he(t[1],t[2],t[3],1):(t=Vo.exec(e))?new he(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Io.exec(e))?lt(t[1],t[2],t[3],t[4]):(t=Po.exec(e))?lt(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Wo.exec(e))?$n(t[1],t[2]/100,t[3]/100,1):(t=Fo.exec(e))?$n(t[1],t[2]/100,t[3]/100,t[4]):Sn.hasOwnProperty(e)?En(Sn[e]):e==="transparent"?new he(NaN,NaN,NaN,0):null}function En(e){return new he(e>>16&255,e>>8&255,e&255,1)}function lt(e,t,n,r){return r<=0&&(e=t=n=NaN),new he(e,t,n,r)}function Xo(e){return e instanceof rt||(e=Ke(e)),e?(e=e.rgb(),new he(e.r,e.g,e.b,e.opacity)):new he}function an(e,t,n,r){return arguments.length===1?Xo(e):new he(e,t,n,r??1)}function he(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}pn(he,an,Ni(rt,{brighter(e){return e=e==null?Ft:Math.pow(Ft,e),new he(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Je:Math.pow(Je,e),new he(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new he(qe(this.r),qe(this.g),qe(this.b),Ht(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Dn,formatHex:Dn,formatHex8:Bo,formatRgb:Tn,toString:Tn}));function Dn(){return`#${ze(this.r)}${ze(this.g)}${ze(this.b)}`}function Bo(){return`#${ze(this.r)}${ze(this.g)}${ze(this.b)}${ze((isNaN(this.opacity)?1:this.opacity)*255)}`}function Tn(){const e=Ht(this.opacity);return`${e===1?"rgb(":"rgba("}${qe(this.r)}, ${qe(this.g)}, ${qe(this.b)}${e===1?")":`, ${e})`}`}function Ht(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function qe(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ze(e){return e=qe(e),(e<16?"0":"")+e.toString(16)}function $n(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ve(e,t,n,r)}function Mi(e){if(e instanceof ve)return new ve(e.h,e.s,e.l,e.opacity);if(e instanceof rt||(e=Ke(e)),!e)return new ve;if(e instanceof ve)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,u=(a+i)/2;return s?(t===a?o=(n-r)/s+(n<r)*6:n===a?o=(r-t)/s+2:o=(t-n)/s+4,s/=u<.5?a+i:2-a-i,o*=60):s=u>0&&u<1?0:o,new ve(o,s,u,e.opacity)}function Yo(e,t,n,r){return arguments.length===1?Mi(e):new ve(e,t,n,r??1)}function ve(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}pn(ve,Yo,Ni(rt,{brighter(e){return e=e==null?Ft:Math.pow(Ft,e),new ve(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Je:Math.pow(Je,e),new ve(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new he(Kt(e>=240?e-240:e+120,i,r),Kt(e,i,r),Kt(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new ve(An(this.h),ct(this.s),ct(this.l),Ht(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ht(this.opacity);return`${e===1?"hsl(":"hsla("}${An(this.h)}, ${ct(this.s)*100}%, ${ct(this.l)*100}%${e===1?")":`, ${e})`}`}}));function An(e){return e=(e||0)%360,e<0?e+360:e}function ct(e){return Math.max(0,Math.min(1,e||0))}function Kt(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Ei=e=>()=>e;function jo(e,t){return function(n){return e+n*t}}function Go(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Uo(e){return(e=+e)==1?Di:function(t,n){return n-t?Go(t,n,e):Ei(isNaN(t)?n:t)}}function Di(e,t){var n=t-e;return n?jo(e,n):Ei(isNaN(e)?t:e)}const zn=function e(t){var n=Uo(t);function r(i,a){var o=n((i=an(i)).r,(a=an(a)).r),s=n(i.g,a.g),u=n(i.b,a.b),l=Di(i.opacity,a.opacity);return function(c){return i.r=o(c),i.g=s(c),i.b=u(c),i.opacity=l(c),i+""}}return r.gamma=e,r}(1);function $e(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var on=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,en=new RegExp(on.source,"g");function Zo(e){return function(){return e}}function Jo(e){return function(t){return e(t)+""}}function Qo(e,t){var n=on.lastIndex=en.lastIndex=0,r,i,a,o=-1,s=[],u=[];for(e=e+"",t=t+"";(r=on.exec(e))&&(i=en.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,u.push({i:o,x:$e(r,i)})),n=en.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?u[0]?Jo(u[0].x):Zo(t):(t=u.length,function(l){for(var c=0,d;c<t;++c)s[(d=u[c]).i]=d.x(l);return s.join("")})}var qn=180/Math.PI,sn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ti(e,t,n,r,i,a){var o,s,u;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(u=e*n+t*r)&&(n-=e*u,r-=t*u),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,u/=s),e*r<t*n&&(e=-e,t=-t,u=-u,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*qn,skewX:Math.atan(u)*qn,scaleX:o,scaleY:s}}var ut;function Ko(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?sn:Ti(t.a,t.b,t.c,t.d,t.e,t.f)}function es(e){return e==null||(ut||(ut=document.createElementNS("http://www.w3.org/2000/svg","g")),ut.setAttribute("transform",e),!(e=ut.transform.baseVal.consolidate()))?sn:(e=e.matrix,Ti(e.a,e.b,e.c,e.d,e.e,e.f))}function $i(e,t,n,r){function i(l){return l.length?l.pop()+" ":""}function a(l,c,d,h,f,x){if(l!==d||c!==h){var b=f.push("translate(",null,t,null,n);x.push({i:b-4,x:$e(l,d)},{i:b-2,x:$e(c,h)})}else(d||h)&&f.push("translate("+d+t+h+n)}function o(l,c,d,h){l!==c?(l-c>180?c+=360:c-l>180&&(l+=360),h.push({i:d.push(i(d)+"rotate(",null,r)-2,x:$e(l,c)})):c&&d.push(i(d)+"rotate("+c+r)}function s(l,c,d,h){l!==c?h.push({i:d.push(i(d)+"skewX(",null,r)-2,x:$e(l,c)}):c&&d.push(i(d)+"skewX("+c+r)}function u(l,c,d,h,f,x){if(l!==d||c!==h){var b=f.push(i(f)+"scale(",null,",",null,")");x.push({i:b-4,x:$e(l,d)},{i:b-2,x:$e(c,h)})}else(d!==1||h!==1)&&f.push(i(f)+"scale("+d+","+h+")")}return function(l,c){var d=[],h=[];return l=e(l),c=e(c),a(l.translateX,l.translateY,c.translateX,c.translateY,d,h),o(l.rotate,c.rotate,d,h),s(l.skewX,c.skewX,d,h),u(l.scaleX,l.scaleY,c.scaleX,c.scaleY,d,h),l=c=null,function(f){for(var x=-1,b=h.length,y;++x<b;)d[(y=h[x]).i]=y.x(f);return d.join("")}}}var ts=$i(Ko,"px, ","px)","deg)"),ns=$i(es,", ",")",")"),rs=1e-12;function Ln(e){return((e=Math.exp(e))+1/e)/2}function is(e){return((e=Math.exp(e))-1/e)/2}function as(e){return((e=Math.exp(2*e))-1)/(e+1)}const os=function e(t,n,r){function i(a,o){var s=a[0],u=a[1],l=a[2],c=o[0],d=o[1],h=o[2],f=c-s,x=d-u,b=f*f+x*x,y,p;if(b<rs)p=Math.log(h/l)/t,y=function(S){return[s+S*f,u+S*x,l*Math.exp(t*S*p)]};else{var v=Math.sqrt(b),k=(h*h-l*l+r*b)/(2*l*n*v),g=(h*h-l*l-r*b)/(2*h*n*v),C=Math.log(Math.sqrt(k*k+1)-k),_=Math.log(Math.sqrt(g*g+1)-g);p=(_-C)/t,y=function(S){var A=S*p,N=Ln(C),q=l/(n*v)*(N*as(t*A+C)-is(C));return[s+q*f,u+q*x,l*N/Ln(t*A+C)]}}return y.duration=p*1e3*t/Math.SQRT2,y}return i.rho=function(a){var o=Math.max(.001,+a),s=o*o,u=s*s;return e(o,s,u)},i}(Math.SQRT2,2,4);var Oe=0,Ge=0,Ye=0,Ai=1e3,Ot,Ue,Xt=0,Le=0,jt=0,et=typeof performance=="object"&&performance.now?performance:Date,zi=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function mn(){return Le||(zi(ss),Le=et.now()+jt)}function ss(){Le=0}function Bt(){this._call=this._time=this._next=null}Bt.prototype=yn.prototype={constructor:Bt,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?mn():+n)+(t==null?0:+t),!this._next&&Ue!==this&&(Ue?Ue._next=this:Ot=this,Ue=this),this._call=e,this._time=n,ln()},stop:function(){this._call&&(this._call=null,this._time=1/0,ln())}};function yn(e,t,n){var r=new Bt;return r.restart(e,t,n),r}function ls(){mn(),++Oe;for(var e=Ot,t;e;)(t=Le-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Oe}function Rn(){Le=(Xt=et.now())+jt,Oe=Ge=0;try{ls()}finally{Oe=0,us(),Le=0}}function cs(){var e=et.now(),t=e-Xt;t>Ai&&(jt-=t,Xt=e)}function us(){for(var e,t=Ot,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ot=n);Ue=e,ln(r)}function ln(e){if(!Oe){Ge&&(Ge=clearTimeout(Ge));var t=e-Le;t>24?(e<1/0&&(Ge=setTimeout(Rn,e-et.now()-jt)),Ye&&(Ye=clearInterval(Ye))):(Ye||(Xt=et.now(),Ye=setInterval(cs,Ai)),Oe=1,zi(Rn))}}function Vn(e,t,n){var r=new Bt;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var hs=tt("start","end","cancel","interrupt"),ds=[],qi=0,In=1,cn=2,Vt=3,Pn=4,un=5,It=6;function Gt(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;fs(e,n,{name:t,index:r,group:i,on:hs,tween:ds,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:qi})}function bn(e,t){var n=we(e,t);if(n.state>qi)throw new Error("too late; already scheduled");return n}function ke(e,t){var n=we(e,t);if(n.state>Vt)throw new Error("too late; already running");return n}function we(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function fs(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=yn(a,0,n.time);function a(l){n.state=In,n.timer.restart(o,n.delay,n.time),n.delay<=l&&o(l-n.delay)}function o(l){var c,d,h,f;if(n.state!==In)return u();for(c in r)if(f=r[c],f.name===n.name){if(f.state===Vt)return Vn(o);f.state===Pn?(f.state=It,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete r[c]):+c<t&&(f.state=It,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete r[c])}if(Vn(function(){n.state===Vt&&(n.state=Pn,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=cn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===cn){for(n.state=Vt,i=new Array(h=n.tween.length),c=0,d=-1;c<h;++c)(f=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(i[++d]=f);i.length=d+1}}function s(l){for(var c=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(u),n.state=un,1),d=-1,h=i.length;++d<h;)i[d].call(e,c);n.state===un&&(n.on.call("end",e,e.__data__,n.index,n.group),u())}function u(){n.state=It,n.timer.stop(),delete r[t];for(var l in r)return;delete e.__transition}}function Pt(e,t){var n=e.__transition,r,i,a=!0,o;if(n){t=t==null?null:t+"";for(o in n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>cn&&r.state<un,r.state=It,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function gs(e){return this.each(function(){Pt(this,e)})}function ps(e,t){var n,r;return function(){var i=ke(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function ms(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var a=ke(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},u=0,l=i.length;u<l;++u)if(i[u].name===t){i[u]=s;break}u===l&&i.push(s)}a.tween=i}}function ys(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=we(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?ps:ms)(n,e,t))}function vn(e,t,n){var r=e._id;return e.each(function(){var i=ke(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return we(i,r).value[t]}}function Li(e,t){var n;return(typeof t=="number"?$e:t instanceof Ke?zn:(n=Ke(t))?(t=n,zn):Qo)(e,t)}function bs(e){return function(){this.removeAttribute(e)}}function vs(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ws(e,t,n){var r,i=n+"",a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function xs(e,t,n){var r,i=n+"",a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function ks(e,t,n){var r,i,a;return function(){var o,s=n(this),u;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),u=s+"",o===u?null:o===r&&u===i?a:(i=u,a=t(r=o,s)))}}function _s(e,t,n){var r,i,a;return function(){var o,s=n(this),u;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),u=s+"",o===u?null:o===r&&u===i?a:(i=u,a=t(r=o,s)))}}function Cs(e,t){var n=Yt(e),r=n==="transform"?ns:Li;return this.attrTween(e,typeof t=="function"?(n.local?_s:ks)(n,r,vn(this,"attr."+e,t)):t==null?(n.local?vs:bs)(n):(n.local?xs:ws)(n,r,t))}function Ss(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Ns(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ms(e,t){var n,r;function i(){var a=t.apply(this,arguments);return a!==r&&(n=(r=a)&&Ns(e,a)),n}return i._value=t,i}function Es(e,t){var n,r;function i(){var a=t.apply(this,arguments);return a!==r&&(n=(r=a)&&Ss(e,a)),n}return i._value=t,i}function Ds(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Yt(e);return this.tween(n,(r.local?Ms:Es)(r,t))}function Ts(e,t){return function(){bn(this,e).delay=+t.apply(this,arguments)}}function $s(e,t){return t=+t,function(){bn(this,e).delay=t}}function As(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ts:$s)(t,e)):we(this.node(),t).delay}function zs(e,t){return function(){ke(this,e).duration=+t.apply(this,arguments)}}function qs(e,t){return t=+t,function(){ke(this,e).duration=t}}function Ls(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?zs:qs)(t,e)):we(this.node(),t).duration}function Rs(e,t){if(typeof t!="function")throw new Error;return function(){ke(this,e).ease=t}}function Vs(e){var t=this._id;return arguments.length?this.each(Rs(t,e)):we(this.node(),t).ease}function Is(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ke(this,e).ease=n}}function Ps(e){if(typeof e!="function")throw new Error;return this.each(Is(this._id,e))}function Ws(e){typeof e!="function"&&(e=fi(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],u,l=0;l<o;++l)(u=a[l])&&e.call(u,u.__data__,l,a)&&s.push(u);return new Ee(r,this._parents,this._name,this._id)}function Fs(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=new Array(r),s=0;s<a;++s)for(var u=t[s],l=n[s],c=u.length,d=o[s]=new Array(c),h,f=0;f<c;++f)(h=u[f]||l[f])&&(d[f]=h);for(;s<r;++s)o[s]=t[s];return new Ee(o,this._parents,this._name,this._id)}function Hs(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Os(e,t,n){var r,i,a=Hs(t)?bn:ke;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function Xs(e,t){var n=this._id;return arguments.length<2?we(this.node(),n).on.on(e):this.each(Os(n,e,t))}function Bs(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Ys(){return this.on("end.remove",Bs(this._id))}function js(e){var t=this._name,n=this._id;typeof e!="function"&&(e=fn(e));for(var r=this._groups,i=r.length,a=new Array(i),o=0;o<i;++o)for(var s=r[o],u=s.length,l=a[o]=new Array(u),c,d,h=0;h<u;++h)(c=s[h])&&(d=e.call(c,c.__data__,h,s))&&("__data__"in c&&(d.__data__=c.__data__),l[h]=d,Gt(l[h],t,n,h,l,we(c,n)));return new Ee(a,this._parents,t,n)}function Gs(e){var t=this._name,n=this._id;typeof e!="function"&&(e=di(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var u=r[s],l=u.length,c,d=0;d<l;++d)if(c=u[d]){for(var h=e.call(c,c.__data__,d,u),f,x=we(c,n),b=0,y=h.length;b<y;++b)(f=h[b])&&Gt(f,t,n,b,h,x);a.push(h),o.push(c)}return new Ee(a,o,t,n)}var Us=nt.prototype.constructor;function Zs(){return new Us(this._groups,this._parents)}function Js(e,t){var n,r,i;return function(){var a=He(this,e),o=(this.style.removeProperty(e),He(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function Ri(e){return function(){this.style.removeProperty(e)}}function Qs(e,t,n){var r,i=n+"",a;return function(){var o=He(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function Ks(e,t,n){var r,i,a;return function(){var o=He(this,e),s=n(this),u=s+"";return s==null&&(u=s=(this.style.removeProperty(e),He(this,e))),o===u?null:o===r&&u===i?a:(i=u,a=t(r=o,s))}}function el(e,t){var n,r,i,a="style."+t,o="end."+a,s;return function(){var u=ke(this,e),l=u.on,c=u.value[a]==null?s||(s=Ri(t)):void 0;(l!==n||i!==c)&&(r=(n=l).copy()).on(o,i=c),u.on=r}}function tl(e,t,n){var r=(e+="")=="transform"?ts:Li;return t==null?this.styleTween(e,Js(e,r)).on("end.style."+e,Ri(e)):typeof t=="function"?this.styleTween(e,Ks(e,r,vn(this,"style."+e,t))).each(el(this._id,e)):this.styleTween(e,Qs(e,r,t),n).on("end.style."+e,null)}function nl(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function rl(e,t,n){var r,i;function a(){var o=t.apply(this,arguments);return o!==i&&(r=(i=o)&&nl(e,o,n)),r}return a._value=t,a}function il(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,rl(e,t,n??""))}function al(e){return function(){this.textContent=e}}function ol(e){return function(){var t=e(this);this.textContent=t??""}}function sl(e){return this.tween("text",typeof e=="function"?ol(vn(this,"text",e)):al(e==null?"":e+""))}function ll(e){return function(t){this.textContent=e.call(this,t)}}function cl(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&ll(i)),t}return r._value=e,r}function ul(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,cl(e))}function hl(){for(var e=this._name,t=this._id,n=Vi(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,u,l=0;l<s;++l)if(u=o[l]){var c=we(u,t);Gt(u,e,n,l,o,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Ee(r,this._parents,e,n)}function dl(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},u={value:function(){--i===0&&a()}};n.each(function(){var l=ke(this,r),c=l.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(u)),l.on=t}),i===0&&a()})}var fl=0;function Ee(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Vi(){return++fl}var Ce=nt.prototype;Ee.prototype={constructor:Ee,select:js,selectAll:Gs,selectChild:Ce.selectChild,selectChildren:Ce.selectChildren,filter:Ws,merge:Fs,selection:Zs,transition:hl,call:Ce.call,nodes:Ce.nodes,node:Ce.node,size:Ce.size,empty:Ce.empty,each:Ce.each,on:Xs,attr:Cs,attrTween:Ds,style:tl,styleTween:il,text:sl,textTween:ul,remove:Ys,tween:ys,delay:As,duration:Ls,ease:Vs,easeVarying:Ps,end:dl,[Symbol.iterator]:Ce[Symbol.iterator]};function gl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var pl={time:null,delay:0,duration:250,ease:gl};function ml(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function yl(e){var t,n;e instanceof Ee?(t=e._id,e=e._name):(t=Vi(),(n=pl).time=mn(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,u,l=0;l<s;++l)(u=o[l])&&Gt(u,e,t,l,o,n||ml(u,t));return new Ee(r,this._parents,e,t)}nt.prototype.interrupt=gs;nt.prototype.transition=yl;function bl(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var a,o=n.length,s,u=0,l=0;for(a=0;a<o;++a)s=n[a],u+=s.x,l+=s.y;for(u=(u/o-e)*r,l=(l/o-t)*r,a=0;a<o;++a)s=n[a],s.x-=u,s.y-=l}return i.initialize=function(a){n=a},i.x=function(a){return arguments.length?(e=+a,i):e},i.y=function(a){return arguments.length?(t=+a,i):t},i.strength=function(a){return arguments.length?(r=+a,i):r},i}function vl(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Ii(this.cover(t,n),t,n,e)}function Ii(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,a=e._root,o={data:r},s=e._x0,u=e._y0,l=e._x1,c=e._y1,d,h,f,x,b,y,p,v;if(!a)return e._root=o,e;for(;a.length;)if((b=t>=(d=(s+l)/2))?s=d:l=d,(y=n>=(h=(u+c)/2))?u=h:c=h,i=a,!(a=a[p=y<<1|b]))return i[p]=o,e;if(f=+e._x.call(null,a.data),x=+e._y.call(null,a.data),t===f&&n===x)return o.next=a,i?i[p]=o:e._root=o,e;do i=i?i[p]=new Array(4):e._root=new Array(4),(b=t>=(d=(s+l)/2))?s=d:l=d,(y=n>=(h=(u+c)/2))?u=h:c=h;while((p=y<<1|b)===(v=(x>=h)<<1|f>=d));return i[v]=a,i[p]=o,e}function wl(e){var t,n,r=e.length,i,a,o=new Array(r),s=new Array(r),u=1/0,l=1/0,c=-1/0,d=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(a=+this._y.call(null,t))||(o[n]=i,s[n]=a,i<u&&(u=i),i>c&&(c=i),a<l&&(l=a),a>d&&(d=a));if(u>c||l>d)return this;for(this.cover(u,l).cover(c,d),n=0;n<r;++n)Ii(this,o[n],s[n],e[n]);return this}function xl(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,a=(r=Math.floor(t))+1;else{for(var o=i-n||1,s=this._root,u,l;n>e||e>=i||r>t||t>=a;)switch(l=(t<r)<<1|e<n,u=new Array(4),u[l]=s,s=u,o*=2,l){case 0:i=n+o,a=r+o;break;case 1:n=i-o,a=r+o;break;case 2:i=n+o,r=a-o;break;case 3:n=i-o,r=a-o;break}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this}function kl(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function _l(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function oe(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function Cl(e,t,n){var r,i=this._x0,a=this._y0,o,s,u,l,c=this._x1,d=this._y1,h=[],f=this._root,x,b;for(f&&h.push(new oe(f,i,a,c,d)),n==null?n=1/0:(i=e-n,a=t-n,c=e+n,d=t+n,n*=n);x=h.pop();)if(!(!(f=x.node)||(o=x.x0)>c||(s=x.y0)>d||(u=x.x1)<i||(l=x.y1)<a))if(f.length){var y=(o+u)/2,p=(s+l)/2;h.push(new oe(f[3],y,p,u,l),new oe(f[2],o,p,y,l),new oe(f[1],y,s,u,p),new oe(f[0],o,s,y,p)),(b=(t>=p)<<1|e>=y)&&(x=h[h.length-1],h[h.length-1]=h[h.length-1-b],h[h.length-1-b]=x)}else{var v=e-+this._x.call(null,f.data),k=t-+this._y.call(null,f.data),g=v*v+k*k;if(g<n){var C=Math.sqrt(n=g);i=e-C,a=t-C,c=e+C,d=t+C,r=f.data}}return r}function Sl(e){if(isNaN(c=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e)))return this;var t,n=this._root,r,i,a,o=this._x0,s=this._y0,u=this._x1,l=this._y1,c,d,h,f,x,b,y,p;if(!n)return this;if(n.length)for(;;){if((x=c>=(h=(o+u)/2))?o=h:u=h,(b=d>=(f=(s+l)/2))?s=f:l=f,t=n,!(n=n[y=b<<1|x]))return this;if(!n.length)break;(t[y+1&3]||t[y+2&3]||t[y+3&3])&&(r=t,p=y)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):t?(a?t[y]=a:delete t[y],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[p]=n:this._root=n),this):(this._root=a,this)}function Nl(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function Ml(){return this._root}function El(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function Dl(e){var t=[],n,r=this._root,i,a,o,s,u;for(r&&t.push(new oe(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,a=n.x0,o=n.y0,s=n.x1,u=n.y1)&&r.length){var l=(a+s)/2,c=(o+u)/2;(i=r[3])&&t.push(new oe(i,l,c,s,u)),(i=r[2])&&t.push(new oe(i,a,c,l,u)),(i=r[1])&&t.push(new oe(i,l,o,s,c)),(i=r[0])&&t.push(new oe(i,a,o,l,c))}return this}function Tl(e){var t=[],n=[],r;for(this._root&&t.push(new oe(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var a,o=r.x0,s=r.y0,u=r.x1,l=r.y1,c=(o+u)/2,d=(s+l)/2;(a=i[0])&&t.push(new oe(a,o,s,c,d)),(a=i[1])&&t.push(new oe(a,c,s,u,d)),(a=i[2])&&t.push(new oe(a,o,d,c,l)),(a=i[3])&&t.push(new oe(a,c,d,u,l))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function $l(e){return e[0]}function Al(e){return arguments.length?(this._x=e,this):this._x}function zl(e){return e[1]}function ql(e){return arguments.length?(this._y=e,this):this._y}function wn(e,t,n){var r=new xn(t??$l,n??zl,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function xn(e,t,n,r,i,a){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function Wn(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var le=wn.prototype=xn.prototype;le.copy=function(){var e=new xn(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=Wn(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=Wn(r));return e};le.add=vl;le.addAll=wl;le.cover=xl;le.data=kl;le.extent=_l;le.find=Cl;le.remove=Sl;le.removeAll=Nl;le.root=Ml;le.size=El;le.visit=Dl;le.visitAfter=Tl;le.x=Al;le.y=ql;function se(e){return function(){return e}}function Ae(e){return(e()-.5)*1e-6}function Ll(e){return e.x+e.vx}function Rl(e){return e.y+e.vy}function Vl(e){var t,n,r,i=1,a=1;typeof e!="function"&&(e=se(e==null?1:+e));function o(){for(var l,c=t.length,d,h,f,x,b,y,p=0;p<a;++p)for(d=wn(t,Ll,Rl).visitAfter(s),l=0;l<c;++l)h=t[l],b=n[h.index],y=b*b,f=h.x+h.vx,x=h.y+h.vy,d.visit(v);function v(k,g,C,_,S){var A=k.data,N=k.r,q=b+N;if(A){if(A.index>h.index){var F=f-A.x-A.vx,K=x-A.y-A.vy,te=F*F+K*K;te<q*q&&(F===0&&(F=Ae(r),te+=F*F),K===0&&(K=Ae(r),te+=K*K),te=(q-(te=Math.sqrt(te)))/te*i,h.vx+=(F*=te)*(q=(N*=N)/(y+N)),h.vy+=(K*=te)*q,A.vx-=F*(q=1-q),A.vy-=K*q)}return}return g>f+q||_<f-q||C>x+q||S<x-q}}function s(l){if(l.data)return l.r=n[l.data.index];for(var c=l.r=0;c<4;++c)l[c]&&l[c].r>l.r&&(l.r=l[c].r)}function u(){if(t){var l,c=t.length,d;for(n=new Array(c),l=0;l<c;++l)d=t[l],n[d.index]=+e(d,l,t)}}return o.initialize=function(l,c){t=l,r=c,u()},o.iterations=function(l){return arguments.length?(a=+l,o):a},o.strength=function(l){return arguments.length?(i=+l,o):i},o.radius=function(l){return arguments.length?(e=typeof l=="function"?l:se(+l),u(),o):e},o}function Il(e){return e.index}function Fn(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function Pl(e){var t=Il,n=d,r,i=se(30),a,o,s,u,l,c=1;e==null&&(e=[]);function d(y){return 1/Math.min(s[y.source.index],s[y.target.index])}function h(y){for(var p=0,v=e.length;p<c;++p)for(var k=0,g,C,_,S,A,N,q;k<v;++k)g=e[k],C=g.source,_=g.target,S=_.x+_.vx-C.x-C.vx||Ae(l),A=_.y+_.vy-C.y-C.vy||Ae(l),N=Math.sqrt(S*S+A*A),N=(N-a[k])/N*y*r[k],S*=N,A*=N,_.vx-=S*(q=u[k]),_.vy-=A*q,C.vx+=S*(q=1-q),C.vy+=A*q}function f(){if(o){var y,p=o.length,v=e.length,k=new Map(o.map((C,_)=>[t(C,_,o),C])),g;for(y=0,s=new Array(p);y<v;++y)g=e[y],g.index=y,typeof g.source!="object"&&(g.source=Fn(k,g.source)),typeof g.target!="object"&&(g.target=Fn(k,g.target)),s[g.source.index]=(s[g.source.index]||0)+1,s[g.target.index]=(s[g.target.index]||0)+1;for(y=0,u=new Array(v);y<v;++y)g=e[y],u[y]=s[g.source.index]/(s[g.source.index]+s[g.target.index]);r=new Array(v),x(),a=new Array(v),b()}}function x(){if(o)for(var y=0,p=e.length;y<p;++y)r[y]=+n(e[y],y,e)}function b(){if(o)for(var y=0,p=e.length;y<p;++y)a[y]=+i(e[y],y,e)}return h.initialize=function(y,p){o=y,l=p,f()},h.links=function(y){return arguments.length?(e=y,f(),h):e},h.id=function(y){return arguments.length?(t=y,h):t},h.iterations=function(y){return arguments.length?(c=+y,h):c},h.strength=function(y){return arguments.length?(n=typeof y=="function"?y:se(+y),x(),h):n},h.distance=function(y){return arguments.length?(i=typeof y=="function"?y:se(+y),b(),h):i},h}const Wl=1664525,Fl=1013904223,Hn=4294967296;function Hl(){let e=1;return()=>(e=(Wl*e+Fl)%Hn)/Hn}function Ol(e){return e.x}function Xl(e){return e.y}var Bl=10,Yl=Math.PI*(3-Math.sqrt(5));function jl(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),a=0,o=.6,s=new Map,u=yn(d),l=tt("tick","end"),c=Hl();e==null&&(e=[]);function d(){h(),l.call("tick",t),n<r&&(u.stop(),l.call("end",t))}function h(b){var y,p=e.length,v;b===void 0&&(b=1);for(var k=0;k<b;++k)for(n+=(a-n)*i,s.forEach(function(g){g(n)}),y=0;y<p;++y)v=e[y],v.fx==null?v.x+=v.vx*=o:(v.x=v.fx,v.vx=0),v.fy==null?v.y+=v.vy*=o:(v.y=v.fy,v.vy=0);return t}function f(){for(var b=0,y=e.length,p;b<y;++b){if(p=e[b],p.index=b,p.fx!=null&&(p.x=p.fx),p.fy!=null&&(p.y=p.fy),isNaN(p.x)||isNaN(p.y)){var v=Bl*Math.sqrt(.5+b),k=b*Yl;p.x=v*Math.cos(k),p.y=v*Math.sin(k)}(isNaN(p.vx)||isNaN(p.vy))&&(p.vx=p.vy=0)}}function x(b){return b.initialize&&b.initialize(e,c),b}return f(),t={tick:h,restart:function(){return u.restart(d),t},stop:function(){return u.stop(),t},nodes:function(b){return arguments.length?(e=b,f(),s.forEach(x),t):e},alpha:function(b){return arguments.length?(n=+b,t):n},alphaMin:function(b){return arguments.length?(r=+b,t):r},alphaDecay:function(b){return arguments.length?(i=+b,t):+i},alphaTarget:function(b){return arguments.length?(a=+b,t):a},velocityDecay:function(b){return arguments.length?(o=1-b,t):1-o},randomSource:function(b){return arguments.length?(c=b,s.forEach(x),t):c},force:function(b,y){return arguments.length>1?(y==null?s.delete(b):s.set(b,x(y)),t):s.get(b)},find:function(b,y,p){var v=0,k=e.length,g,C,_,S,A;for(p==null?p=1/0:p*=p,v=0;v<k;++v)S=e[v],g=b-S.x,C=y-S.y,_=g*g+C*C,_<p&&(A=S,p=_);return A},on:function(b,y){return arguments.length>1?(l.on(b,y),t):l.on(b)}}}function Gl(){var e,t,n,r,i=se(-30),a,o=1,s=1/0,u=.81;function l(f){var x,b=e.length,y=wn(e,Ol,Xl).visitAfter(d);for(r=f,x=0;x<b;++x)t=e[x],y.visit(h)}function c(){if(e){var f,x=e.length,b;for(a=new Array(x),f=0;f<x;++f)b=e[f],a[b.index]=+i(b,f,e)}}function d(f){var x=0,b,y,p=0,v,k,g;if(f.length){for(v=k=g=0;g<4;++g)(b=f[g])&&(y=Math.abs(b.value))&&(x+=b.value,p+=y,v+=y*b.x,k+=y*b.y);f.x=v/p,f.y=k/p}else{b=f,b.x=b.data.x,b.y=b.data.y;do x+=a[b.data.index];while(b=b.next)}f.value=x}function h(f,x,b,y){if(!f.value)return!0;var p=f.x-t.x,v=f.y-t.y,k=y-x,g=p*p+v*v;if(k*k/u<g)return g<s&&(p===0&&(p=Ae(n),g+=p*p),v===0&&(v=Ae(n),g+=v*v),g<o&&(g=Math.sqrt(o*g)),t.vx+=p*f.value*r/g,t.vy+=v*f.value*r/g),!0;if(f.length||g>=s)return;(f.data!==t||f.next)&&(p===0&&(p=Ae(n),g+=p*p),v===0&&(v=Ae(n),g+=v*v),g<o&&(g=Math.sqrt(o*g)));do f.data!==t&&(k=a[f.data.index]*r/g,t.vx+=p*k,t.vy+=v*k);while(f=f.next)}return l.initialize=function(f,x){e=f,n=x,c()},l.strength=function(f){return arguments.length?(i=typeof f=="function"?f:se(+f),c(),l):i},l.distanceMin=function(f){return arguments.length?(o=f*f,l):Math.sqrt(o)},l.distanceMax=function(f){return arguments.length?(s=f*f,l):Math.sqrt(s)},l.theta=function(f){return arguments.length?(u=f*f,l):Math.sqrt(u)},l}function Ul(e){var t=se(.1),n,r,i;typeof e!="function"&&(e=se(e==null?0:+e));function a(s){for(var u=0,l=n.length,c;u<l;++u)c=n[u],c.vx+=(i[u]-c.x)*r[u]*s}function o(){if(n){var s,u=n.length;for(r=new Array(u),i=new Array(u),s=0;s<u;++s)r[s]=isNaN(i[s]=+e(n[s],s,n))?0:+t(n[s],s,n)}}return a.initialize=function(s){n=s,o()},a.strength=function(s){return arguments.length?(t=typeof s=="function"?s:se(+s),o(),a):t},a.x=function(s){return arguments.length?(e=typeof s=="function"?s:se(+s),o(),a):e},a}function Zl(e){var t=se(.1),n,r,i;typeof e!="function"&&(e=se(e==null?0:+e));function a(s){for(var u=0,l=n.length,c;u<l;++u)c=n[u],c.vy+=(i[u]-c.y)*r[u]*s}function o(){if(n){var s,u=n.length;for(r=new Array(u),i=new Array(u),s=0;s<u;++s)r[s]=isNaN(i[s]=+e(n[s],s,n))?0:+t(n[s],s,n)}}return a.initialize=function(s){n=s,o()},a.strength=function(s){return arguments.length?(t=typeof s=="function"?s:se(+s),o(),a):t},a.y=function(s){return arguments.length?(e=typeof s=="function"?s:se(+s),o(),a):e},a}const ht=e=>()=>e;function Jl(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Me(e,t,n){this.k=e,this.x=t,this.y=n}Me.prototype={constructor:Me,scale:function(e){return e===1?this:new Me(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Me(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var We=new Me(1,0,0);Fe.prototype=Me.prototype;function Fe(e){for(;!e.__zoom;)if(!(e=e.parentNode))return We;return e.__zoom}function tn(e){e.stopImmediatePropagation()}function je(e){e.preventDefault(),e.stopImmediatePropagation()}function Ql(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Kl(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function On(){return this.__zoom||We}function ec(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function tc(){return navigator.maxTouchPoints||"ontouchstart"in this}function nc(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],a=e.invertY(t[0][1])-n[0][1],o=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}function rc(){var e=Ql,t=Kl,n=nc,r=ec,i=tc,a=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],s=250,u=os,l=tt("start","zoom","end"),c,d,h,f=500,x=150,b=0,y=10;function p(m){m.property("__zoom",On).on("wheel.zoom",A,{passive:!1}).on("mousedown.zoom",N).on("dblclick.zoom",q).filter(i).on("touchstart.zoom",F).on("touchmove.zoom",K).on("touchend.zoom touchcancel.zoom",te).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(m,E,w,$){var R=m.selection?m.selection():m;R.property("__zoom",On),m!==R?C(m,E,w,$):R.interrupt().each(function(){_(this,arguments).event($).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},p.scaleBy=function(m,E,w,$){p.scaleTo(m,function(){var R=this.__zoom.k,M=typeof E=="function"?E.apply(this,arguments):E;return R*M},w,$)},p.scaleTo=function(m,E,w,$){p.transform(m,function(){var R=t.apply(this,arguments),M=this.__zoom,z=w==null?g(R):typeof w=="function"?w.apply(this,arguments):w,I=M.invert(z),X=typeof E=="function"?E.apply(this,arguments):E;return n(k(v(M,X),z,I),R,o)},w,$)},p.translateBy=function(m,E,w,$){p.transform(m,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof w=="function"?w.apply(this,arguments):w),t.apply(this,arguments),o)},null,$)},p.translateTo=function(m,E,w,$,R){p.transform(m,function(){var M=t.apply(this,arguments),z=this.__zoom,I=$==null?g(M):typeof $=="function"?$.apply(this,arguments):$;return n(We.translate(I[0],I[1]).scale(z.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof w=="function"?-w.apply(this,arguments):-w),M,o)},$,R)};function v(m,E){return E=Math.max(a[0],Math.min(a[1],E)),E===m.k?m:new Me(E,m.x,m.y)}function k(m,E,w){var $=E[0]-w[0]*m.k,R=E[1]-w[1]*m.k;return $===m.x&&R===m.y?m:new Me(m.k,$,R)}function g(m){return[(+m[0][0]+ +m[1][0])/2,(+m[0][1]+ +m[1][1])/2]}function C(m,E,w,$){m.on("start.zoom",function(){_(this,arguments).event($).start()}).on("interrupt.zoom end.zoom",function(){_(this,arguments).event($).end()}).tween("zoom",function(){var R=this,M=arguments,z=_(R,M).event($),I=t.apply(R,M),X=w==null?g(I):typeof w=="function"?w.apply(R,M):w,J=Math.max(I[1][0]-I[0][0],I[1][1]-I[0][1]),G=R.__zoom,j=typeof E=="function"?E.apply(R,M):E,U=u(G.invert(X).concat(J/G.k),j.invert(X).concat(J/j.k));return function(ne){if(ne===1)ne=j;else{var Z=U(ne),_e=J/Z[2];ne=new Me(_e,X[0]-Z[0]*_e,X[1]-Z[1]*_e)}z.zoom(null,ne)}})}function _(m,E,w){return!w&&m.__zooming||new S(m,E)}function S(m,E){this.that=m,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(m,E),this.taps=0}S.prototype={event:function(m){return m&&(this.sourceEvent=m),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(m,E){return this.mouse&&m!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&m!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&m!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(m){var E=ee(this.that).datum();l.call(m,this.that,new Jl(m,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:l}),E)}};function A(m,...E){if(!e.apply(this,arguments))return;var w=_(this,E).event(m),$=this.__zoom,R=Math.max(a[0],Math.min(a[1],$.k*Math.pow(2,r.apply(this,arguments)))),M=Se(m);if(w.wheel)(w.mouse[0][0]!==M[0]||w.mouse[0][1]!==M[1])&&(w.mouse[1]=$.invert(w.mouse[0]=M)),clearTimeout(w.wheel);else{if($.k===R)return;w.mouse=[M,$.invert(M)],Pt(this),w.start()}je(m),w.wheel=setTimeout(z,x),w.zoom("mouse",n(k(v($,R),w.mouse[0],w.mouse[1]),w.extent,o));function z(){w.wheel=null,w.end()}}function N(m,...E){if(h||!e.apply(this,arguments))return;var w=m.currentTarget,$=_(this,E,!0).event(m),R=ee(m.view).on("mousemove.zoom",X,!0).on("mouseup.zoom",J,!0),M=Se(m,w),z=m.clientX,I=m.clientY;_i(m.view),tn(m),$.mouse=[M,this.__zoom.invert(M)],Pt(this),$.start();function X(G){if(je(G),!$.moved){var j=G.clientX-z,U=G.clientY-I;$.moved=j*j+U*U>b}$.event(G).zoom("mouse",n(k($.that.__zoom,$.mouse[0]=Se(G,w),$.mouse[1]),$.extent,o))}function J(G){R.on("mousemove.zoom mouseup.zoom",null),Ci(G.view,$.moved),je(G),$.event(G).end()}}function q(m,...E){if(e.apply(this,arguments)){var w=this.__zoom,$=Se(m.changedTouches?m.changedTouches[0]:m,this),R=w.invert($),M=w.k*(m.shiftKey?.5:2),z=n(k(v(w,M),$,R),t.apply(this,E),o);je(m),s>0?ee(this).transition().duration(s).call(C,z,$,m):ee(this).call(p.transform,z,$,m)}}function F(m,...E){if(e.apply(this,arguments)){var w=m.touches,$=w.length,R=_(this,E,m.changedTouches.length===$).event(m),M,z,I,X;for(tn(m),z=0;z<$;++z)I=w[z],X=Se(I,this),X=[X,this.__zoom.invert(X),I.identifier],R.touch0?!R.touch1&&R.touch0[2]!==X[2]&&(R.touch1=X,R.taps=0):(R.touch0=X,M=!0,R.taps=1+!!c);c&&(c=clearTimeout(c)),M&&(R.taps<2&&(d=X[0],c=setTimeout(function(){c=null},f)),Pt(this),R.start())}}function K(m,...E){if(this.__zooming){var w=_(this,E).event(m),$=m.changedTouches,R=$.length,M,z,I,X;for(je(m),M=0;M<R;++M)z=$[M],I=Se(z,this),w.touch0&&w.touch0[2]===z.identifier?w.touch0[0]=I:w.touch1&&w.touch1[2]===z.identifier&&(w.touch1[0]=I);if(z=w.that.__zoom,w.touch1){var J=w.touch0[0],G=w.touch0[1],j=w.touch1[0],U=w.touch1[1],ne=(ne=j[0]-J[0])*ne+(ne=j[1]-J[1])*ne,Z=(Z=U[0]-G[0])*Z+(Z=U[1]-G[1])*Z;z=v(z,Math.sqrt(ne/Z)),I=[(J[0]+j[0])/2,(J[1]+j[1])/2],X=[(G[0]+U[0])/2,(G[1]+U[1])/2]}else if(w.touch0)I=w.touch0[0],X=w.touch0[1];else return;w.zoom("touch",n(k(z,I,X),w.extent,o))}}function te(m,...E){if(this.__zooming){var w=_(this,E).event(m),$=m.changedTouches,R=$.length,M,z;for(tn(m),h&&clearTimeout(h),h=setTimeout(function(){h=null},f),M=0;M<R;++M)z=$[M],w.touch0&&w.touch0[2]===z.identifier?delete w.touch0:w.touch1&&w.touch1[2]===z.identifier&&delete w.touch1;if(w.touch1&&!w.touch0&&(w.touch0=w.touch1,delete w.touch1),w.touch0)w.touch0[1]=this.__zoom.invert(w.touch0[0]);else if(w.end(),w.taps===2&&(z=Se(z,this),Math.hypot(d[0]-z[0],d[1]-z[1])<y)){var I=ee(this).on("dblclick.zoom");I&&I.apply(this,arguments)}}}return p.wheelDelta=function(m){return arguments.length?(r=typeof m=="function"?m:ht(+m),p):r},p.filter=function(m){return arguments.length?(e=typeof m=="function"?m:ht(!!m),p):e},p.touchable=function(m){return arguments.length?(i=typeof m=="function"?m:ht(!!m),p):i},p.extent=function(m){return arguments.length?(t=typeof m=="function"?m:ht([[+m[0][0],+m[0][1]],[+m[1][0],+m[1][1]]]),p):t},p.scaleExtent=function(m){return arguments.length?(a[0]=+m[0],a[1]=+m[1],p):[a[0],a[1]]},p.translateExtent=function(m){return arguments.length?(o[0][0]=+m[0][0],o[1][0]=+m[1][0],o[0][1]=+m[0][1],o[1][1]=+m[1][1],p):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},p.constrain=function(m){return arguments.length?(n=m,p):n},p.duration=function(m){return arguments.length?(s=+m,p):s},p.interpolate=function(m){return arguments.length?(u=m,p):u},p.on=function(){var m=l.on.apply(l,arguments);return m===l?p:m},p.clickDistance=function(m){return arguments.length?(b=(m=+m)*m,p):Math.sqrt(b)},p.tapDistance=function(m){return arguments.length?(y=+m,p):y},p}const Xn={circle:{width:40,height:40},square:{width:60,height:60},rectangle:{width:120,height:60},"rounded-square":{width:60,height:60},"rounded-rectangle":{width:120,height:60}},Ne=(e="rounded-square")=>Xn[e]||Xn["rounded-square"],Bn=(e,t=!0)=>{const n=e.shape||"rounded-square",r=e.style||{},i=Ne(n),a=r.width||i.width,o=r.height||i.height,s=r.padding||0;switch(n){case"circle":return Math.max(a,o)/2+s;case"square":case"rounded-square":return Math.sqrt(a*a+o*o)/2+s;case"rectangle":case"rounded-rectangle":return t?Math.max(a,o)/2+s:Math.min(a,o)/2+s;default:return Math.max(a,o)/2+s}},ic=e=>{const t=e.shape||"rounded-square",n=e.style||{},r=Ne(t),i=n.height||r.height,a=n.padding||0,o=15;switch(t){case"circle":return i/2+a+o;case"square":case"rounded-square":case"rectangle":case"rounded-rectangle":return i/2+a+o;default:return i/2+a+o}},ac=(e,t,n)=>{let r=null;return function(...a){const o=()=>{r=null,e(...a)};r&&clearTimeout(r),r=setTimeout(o,t)}},oc=(e,t=16/9)=>{const n=e.getBoundingClientRect(),r=n.width,i=Math.min(n.height,r/t);return{width:r,height:i}},sc=({containerRef:e,width:t,height:n,aspectRatio:r=16/9})=>{const[i,a]=V.useState({width:t||800,height:n||600}),o=V.useCallback(()=>{if(e.current)if(t&&n)a({width:t,height:n});else{const u=oc(e.current,r);a(u)}},[e,t,n,r]),s=V.useCallback(ac(o,150),[o]);return V.useEffect(()=>{if(o(),!t||!n){const u=new ResizeObserver(s);return e.current&&u.observe(e.current),window.addEventListener("resize",s),()=>{u.disconnect(),window.removeEventListener("resize",s)}}},[t,n,e]),{dimensions:i,updateDimensions:o}},lc=({svgRef:e,zoomBehaviorRef:t,minZoom:n=.1,maxZoom:r=4,onZoomChange:i})=>{const a=V.useCallback(c=>{if(!e.current||!t.current)return;const d=ee(e.current),h=Fe(d.node()),f=e.current.getBoundingClientRect(),x=f.width/2,b=f.height/2,y=We.translate(x,b).scale(c).translate(-x,-b).translate(h.x,h.y);d.call(t.current.transform,y),i&&i(c)},[e,t,i]),o=V.useCallback(()=>{if(!e.current||!t.current)return;const c=ee(e.current),d=c.select("g");if(!d.empty())try{const h=d.node().getBBox(),f=e.current.getBoundingClientRect();if(h.width===0||h.height===0)return;const x=50,b=(f.width-x*2)/h.width,y=(f.height-x*2)/h.height,p=Math.min(b,y,r),v=Math.max(n,Math.min(r,p)),k=f.width/2,g=f.height/2,C=h.x+h.width/2,_=h.y+h.height/2,S=We.translate(k,g).scale(v).translate(-C,-_);c.transition().duration(750).call(t.current.transform,S),i&&i(v)}catch(h){console.warn("Error fitting graph to container:",h)}},[e,t,n,r,i]),s=V.useCallback(()=>{if(!e.current||!t.current)return;const c=ee(e.current),d=Fe(c.node()),h=Math.min(d.k*1.5,r);c.transition().duration(300).call(t.current.scaleBy,h/d.k),i&&i(h)},[e,t,r,i]),u=V.useCallback(()=>{if(!e.current||!t.current)return;const c=ee(e.current),d=Fe(c.node()),h=Math.max(d.k/1.5,n);c.transition().duration(300).call(t.current.scaleBy,h/d.k),i&&i(h)},[e,t,n,i]),l=V.useCallback(()=>{if(!e.current||!t.current)return;ee(e.current).transition().duration(500).call(t.current.transform,We),i&&i(1)},[e,t,i]);return V.useMemo(()=>({handleZoom:a,fitGraphToContainer:o,zoomIn:s,zoomOut:u,resetZoom:l}),[a,o,s,u,l])},cc=({nodes:e,links:t,dimensions:n,config:r,centerForce:i=.1})=>{const a=V.useRef(null),o=V.useMemo(()=>({linkDistance:r.linkDistance||200,chargeStrength:r.chargeStrength||-4e3,collisionRadius:r.collisionRadius||100,alphaDecay:r.alphaDecay||.01,alphaMin:r.alphaMin||.001}),[r]);V.useEffect(()=>{if(!e.length||!n.width||!n.height)return;const u=jl(e).force("link",Pl(t).id(l=>l.id).distance(o.linkDistance).strength(.1)).force("charge",Gl().strength(o.chargeStrength)).force("center",bl(n.width/2,n.height/2).strength(i)).force("collision",Vl().radius(l=>{var f,x,b,y;const c=o.collisionRadius/10;if(l.shape==="circle")return(((f=l.style)==null?void 0:f.width)||((x=l.style)==null?void 0:x.height)||40)/2+c;const d=((b=l.style)==null?void 0:b.width)||80,h=((y=l.style)==null?void 0:y.height)||40;return Math.sqrt(d*d+h*h)/2+c}).strength(.5)).force("x",Ul(n.width/2).strength(.05)).force("y",Zl(n.height/2).strength(.05)).alphaDecay(o.alphaDecay).alphaMin(o.alphaMin);return e.forEach(l=>{}),a.current=u,()=>{a.current&&a.current.stop()}},[e,t,n,o,i]),V.useEffect(()=>{if(!a.current)return;a.current.nodes(e);const u=a.current.force("link");u&&u.links(t),a.current.alpha(.3).restart()},[e,t]),V.useEffect(()=>{if(!a.current)return;const u=a.current.force("link"),l=a.current.force("charge"),c=a.current.force("collision");u&&u.distance(o.linkDistance),l&&l.strength(o.chargeStrength),c&&c.radius(d=>{var b,y,p,v;const h=o.collisionRadius/10;if(d.shape==="circle")return(((b=d.style)==null?void 0:b.width)||((y=d.style)==null?void 0:y.height)||40)/2+h;const f=((p=d.style)==null?void 0:p.width)||80,x=((v=d.style)==null?void 0:v.height)||40;return Math.sqrt(f*f+x*x)/2+h}),a.current.alphaDecay(o.alphaDecay).alphaMin(o.alphaMin)},[o]);const s=V.useMemo(()=>({restart:()=>{a.current&&a.current.alpha(1).restart()},stop:()=>{a.current&&a.current.stop()},reheat:(u=.3)=>{a.current&&a.current.alpha(u).restart()},fixNode:(u,l,c)=>{const d=e.find(h=>h.id===u);d&&a.current&&(d.fx=l,d.fy=c,a.current.alpha(.1).restart())},releaseNode:u=>{const l=e.find(c=>c.id===u);l&&a.current&&(l.fx=null,l.fy=null,a.current.alpha(.1).restart())}}),[e]);return{simulation:a.current,...s}},uc=({simulation:e,enableDrag:t,onNodeDragStart:n,onNodeDrag:r,onNodeDragEnd:i})=>{const a=V.useCallback((c,d)=>{var h;(h=c.sourceEvent)==null||h.stopPropagation(),n&&n(d,c),e&&(c.active||e.alphaTarget(.3).restart(),d.fx=d.x,d.fy=d.y)},[e,n]),o=V.useCallback((c,d)=>{d.fx=c.x,d.fy=c.y,r&&r(d,c)},[r]),s=V.useCallback((c,d)=>{i&&i(d,c),e&&(c.active||e.alphaTarget(0))},[e,i]),u=V.useMemo(()=>t?Si().on("start",a).on("drag",o).on("end",s).filter(c=>!c.ctrlKey&&!c.metaKey&&c.button===0):null,[t,a,o,s]),l=V.useMemo(()=>({pinNode:(c,d)=>{const h=d.find(f=>f.id===c);h&&(h.fx=h.x,h.fy=h.y)},unpinNode:(c,d)=>{const h=d.find(f=>f.id===c);h&&(h.fx=null,h.fy=null,e&&e.alpha(.1).restart())},pinAllNodes:c=>{c.forEach(d=>{d.fx=d.x,d.fy=d.y})},unpinAllNodes:c=>{c.forEach(d=>{d.fx=null,d.fy=null}),e&&e.alpha(.3).restart()},isNodePinned:(c,d)=>{const h=d.find(f=>f.id===c);return h?h.fx!==null&&h.fx!==void 0:!1},getPinnedNodes:c=>c.filter(d=>d.fx!==null&&d.fx!==void 0),moveNodeTo:(c,d,h,f)=>{const x=f.find(b=>b.id===c);x&&(x.fx=d,x.fy=h,e&&e.alpha(.1).restart())}}),[e]);return{dragBehavior:u,...l}},hc=({svgRef:e,nodes:t,links:n,enableHover:r,onNodeHover:i,onNodeBlur:a,onLinkHover:o,onLinkBlur:s,onNodeClick:u,onLinkClick:l,onCanvasClick:c})=>{const d=V.useRef({hoveredNode:null,hoveredLink:null,highlightedNodes:new Set,highlightedLinks:new Set}),h=V.useCallback(v=>{const k=new Set,g=new Set;return k.add(v),n.forEach(C=>{const _=typeof C.source=="object"?C.source.id:C.source,S=typeof C.target=="object"?C.target.id:C.target;(_===v||S===v)&&(g.add(C.id||`${_}-${S}`),k.add(_),k.add(S))}),{connectedNodes:k,connectedLinks:g}},[n]),f=V.useCallback((v,k,g)=>{if(!e.current||!r)return;const C=ee(e.current);C.selectAll(".nodes g").style("opacity",_=>g?v.has(_.id)?1:.3:1).style("filter",_=>g&&v.has(_.id)?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"),C.selectAll(".links g").style("opacity",_=>{if(!g)return 1;const S=_.id||`${typeof _.source=="object"?_.source.id:_.source}-${typeof _.target=="object"?_.target.id:_.target}`;return k.has(S)?1:.1}),C.selectAll(".links path").style("stroke-width",_=>{var A,N,q;if(!g)return((A=_.style)==null?void 0:A.linkWidth)||2;const S=_.id||`${typeof _.source=="object"?_.source.id:_.source}-${typeof _.target=="object"?_.target.id:_.target}`;return k.has(S)?(((N=_.style)==null?void 0:N.linkWidth)||2)+1:((q=_.style)==null?void 0:q.linkWidth)||2})},[e,r]),x=V.useCallback((v,k)=>{if(!r)return;const g=d.current.hoveredNode;if(k){if((g==null?void 0:g.id)!==k.id){g&&a&&a(g,v||void 0);const{connectedNodes:C,connectedLinks:_}=h(k.id);d.current={...d.current,hoveredNode:k,highlightedNodes:C,highlightedLinks:_},f(C,_,!0),i&&i(k,v||void 0)}}else g&&(d.current={...d.current,hoveredNode:null,highlightedNodes:new Set,highlightedLinks:new Set},f(new Set,new Set,!1),a&&a(g,v||void 0))},[r,h,f,i,a]),b=V.useCallback((v,k)=>{if(!r)return;const g=d.current.hoveredLink;if(k){if(g!==k){g&&s&&s(g,v||void 0);const C=typeof k.source=="object"?k.source.id:k.source,_=typeof k.target=="object"?k.target.id:k.target,S=k.id||`${C}-${_}`,A=new Set([C,_]),N=new Set([S]);d.current={...d.current,hoveredLink:k,highlightedNodes:A,highlightedLinks:N},f(A,N,!0),o&&o(k,v||void 0)}}else g&&(d.current={...d.current,hoveredLink:null,highlightedNodes:new Set,highlightedLinks:new Set},f(new Set,new Set,!1),s&&s(g,v||void 0))},[r,f,o,s]),y=V.useCallback(v=>{d.current={hoveredNode:null,hoveredLink:null,highlightedNodes:new Set,highlightedLinks:new Set},f(new Set,new Set,!1),c&&c(v)},[f,c]),p={highlightElements:(v,k=[])=>{const g=new Set(v),C=new Set(k);d.current={...d.current,highlightedNodes:g,highlightedLinks:C},f(g,C,!0)},clearHighlights:()=>{d.current={hoveredNode:null,hoveredLink:null,highlightedNodes:new Set,highlightedLinks:new Set},f(new Set,new Set,!1)},getHoverState:()=>({...d.current}),highlightNodeConnections:v=>{const{connectedNodes:k,connectedLinks:g}=h(v);d.current={...d.current,highlightedNodes:k,highlightedLinks:g},f(k,g,!0)},highlightPath:(v,k)=>{const g=new Set,C=[{nodeId:v,path:[v]}];for(;C.length>0;){const{nodeId:_,path:S}=C.shift();if(_===k){const A=new Set;for(let N=0;N<S.length-1;N++){const q=n.find(F=>{const K=typeof F.source=="object"?F.source.id:F.source,te=typeof F.target=="object"?F.target.id:F.target;return K===S[N]&&te===S[N+1]||K===S[N+1]&&te===S[N]});if(q){const F=q.id||`${typeof q.source=="object"?q.source.id:q.source}-${typeof q.target=="object"?q.target.id:q.target}`;A.add(F)}}return p.highlightElements(S,Array.from(A)),S}g.has(_)||(g.add(_),n.forEach(A=>{const N=typeof A.source=="object"?A.source.id:A.source,q=typeof A.target=="object"?A.target.id:A.target;N===_&&!g.has(q)?C.push({nodeId:q,path:[...S,q]}):q===_&&!g.has(N)&&C.push({nodeId:N,path:[...S,N]})}))}return null}};return{handleNodeHover:x,handleLinkHover:b,handleCanvasClick:y,...p}},hn=({svgRef:e,zoomBehaviorRef:t,width:n=200,height:r=150,position:i="bottom-right",theme:a="light",className:o="",isCollapsible:s=!0,isResizable:u=!1,defaultCollapsed:l=!0,showControls:c=!0,backgroundColor:d,borderColor:h,viewportColor:f="#3b82f6",opacity:x=.9,minWidth:b=120,maxWidth:y=400,minHeight:p=80,maxHeight:v=300,onToggle:k,onResize:g})=>{const C=V.useRef(null),_=V.useRef(null),[S,A]=V.useState(l),[N,q]=V.useState({width:n,height:r,headerHeight:c?32:0,padding:8}),F=V.useRef(!1),K=V.useRef(!1);V.useEffect(()=>{if(e.current&&!K.current){const M=e.current.getBoundingClientRect(),z=M.width/M.height,I=Math.min(Math.max(r*z,b),y);q(X=>({...X,width:I}))}},[e.current,r,b,y]);const te=()=>{const M="absolute z-20";switch(i){case"top-left":return`${M} top-4 left-4`;case"top-right":return`${M} top-4 right-4`;case"bottom-left":return`${M} bottom-4 left-4`;case"bottom-right":default:return`${M} bottom-4 right-4`}},E=a==="dark"?{container:"bg-gray-800/90 border-gray-600 text-white",header:"text-gray-100",svg:"opacity-80 hover:opacity-100"}:{container:"bg-white/90 border-gray-200 text-gray-900",header:"text-gray-700",svg:"opacity-80 hover:opacity-100"},w=V.useCallback(()=>{const M=!S;A(M),k==null||k(M)},[S,k]),$=V.useCallback((M,z)=>{const I=Math.min(Math.max(M,b),y),X=Math.min(Math.max(z,p),v);q(J=>({...J,width:I,height:X})),g==null||g(I,X)},[b,y,p,v,g]);if(V.useEffect(()=>{var ot;if(!e.current||!_.current||!t.current||S)return;const M=ee(e.current),z=ee(_.current);z.selectAll("*").remove();const I=N.height-N.headerHeight;z.attr("width",N.width).attr("height",I);const X=z.append("g").attr("class","minimap-content"),J=e.current.querySelector("g");if(!J)return;const G=J.cloneNode(!0);(ot=X.node())==null||ot.appendChild(G);const j=J.getBBox();if(!j.width||!j.height)return;const U=N.width-N.padding*2,ne=I-N.padding*2,Z=Math.min(U/j.width,ne/j.height,.8),_e=(N.width-j.width*Z)/2-j.x*Z,me=(I-j.height*Z)/2-j.y*Z;ee(G).style("pointer-events","none").style("opacity","0.6").attr("transform",`translate(${_e},${me}) scale(${Z})`);const De=z.append("rect").attr("class","minimap-viewport").attr("fill","none").attr("stroke",f).attr("stroke-width",2).attr("stroke-dasharray","3,3").attr("pointer-events","all").style("cursor","move"),Re=()=>{const L=Fe(M.node()),H=e.current.getBoundingClientRect(),P=Math.min(H.width/L.k*Z,U),re=Math.min(H.height/L.k*Z,ne),de=Math.max(N.padding,Math.min(_e-L.x*Z/L.k,N.width-P-N.padding)),Ve=Math.max(N.padding,Math.min(me-L.y*Z/L.k,I-re-N.padding));De.attr("x",de).attr("y",Ve).attr("width",P).attr("height",re)},it=Si().on("start",()=>{F.current=!0,De.style("cursor","grabbing")}).on("drag",L=>{if(!t.current)return;const H=Fe(M.node()),P=L.dx/Z,re=L.dy/Z,de=H.translate(-P*H.k,-re*H.k);M.call(t.current.transform,de)}).on("end",()=>{F.current=!1,De.style("cursor","move")});De.call(it);const Ut=()=>{F.current||Re()};M.on("zoom.minimap",Ut),Re();const at=new MutationObserver(()=>{F.current||requestAnimationFrame(Re)});return at.observe(J,{attributes:!0,childList:!0,subtree:!0}),()=>{M.on("zoom.minimap",null),at.disconnect()}},[e.current,t.current,S,N,f]),!e.current)return null;const R={width:`${N.width}px`,height:S?`${N.headerHeight}px`:`${N.height}px`,backgroundColor:d,borderColor:h,opacity:x};return ie.jsxs("div",{ref:C,className:` ${te()} ${E.container} ${o} flex flex-col overflow-hidden rounded-lg border shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out`,style:R,children:[c&&ie.jsxs("div",{className:`flex min-h-[32px] flex-none items-center justify-between px-3 py-1 ${s?"cursor-pointer hover:bg-black/5":""} ${E.header} `,onClick:s?w:void 0,children:[ie.jsx("span",{className:"select-none text-xs font-medium",children:"Navigator"}),ie.jsxs("div",{className:"flex items-center gap-1",children:[u&&!S&&ie.jsx("button",{className:"rounded p-1 hover:bg-black/10",onClick:M=>{M.stopPropagation();const z=N.height===r?r*1.5:r;$(N.width,z)},children:N.height===r?ie.jsx(Xi,{className:"size-3"}):ie.jsx(Yi,{className:"size-3"})}),s&&ie.jsx("div",{className:"p-1",children:S?ie.jsx(Fi,{className:"size-3"}):ie.jsx(Hi,{className:"size-3"})})]})]}),!S&&ie.jsxs("div",{className:"relative flex flex-1 items-center justify-center overflow-hidden",children:[ie.jsx("svg",{ref:_,className:`size-full transition-opacity duration-200 ${E.svg}`}),u&&ie.jsx("div",{className:"absolute bottom-0 right-0 size-3 cursor-se-resize opacity-50 hover:opacity-100",onMouseDown:M=>{M.preventDefault(),K.current=!0;const z=M.clientX,I=M.clientY,X=N.width,J=N.height,G=U=>{const ne=U.clientX-z,Z=U.clientY-I;$(X+ne,J+Z)},j=()=>{K.current=!1,document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",G),document.addEventListener("mouseup",j)},children:ie.jsx("div",{className:"size-full translate-x-1/2 translate-y-1/2 rotate-45 bg-gray-400"})})]}),S&&s&&ie.jsx("div",{className:"absolute inset-0 cursor-pointer",onClick:w})]})};try{hn.displayName="Minimap",hn.__docgenInfo={description:"",displayName:"Minimap",props:{svgRef:{defaultValue:null,description:"",name:"svgRef",required:!0,type:{name:"RefObject<SVGSVGElement>"}},zoomBehaviorRef:{defaultValue:null,description:"",name:"zoomBehaviorRef",required:!0,type:{name:"MutableRefObject<ZoomBehavior<SVGSVGElement, unknown>>"}},width:{defaultValue:{value:"200"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"150"},description:"",name:"height",required:!1,type:{name:"number"}},position:{defaultValue:{value:"bottom-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},isCollapsible:{defaultValue:{value:"true"},description:"",name:"isCollapsible",required:!1,type:{name:"boolean"}},isResizable:{defaultValue:{value:"false"},description:"",name:"isResizable",required:!1,type:{name:"boolean"}},defaultCollapsed:{defaultValue:{value:"true"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},showControls:{defaultValue:{value:"true"},description:"",name:"showControls",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},viewportColor:{defaultValue:{value:"#3b82f6"},description:"",name:"viewportColor",required:!1,type:{name:"string"}},opacity:{defaultValue:{value:"0.9"},description:"",name:"opacity",required:!1,type:{name:"number"}},minWidth:{defaultValue:{value:"120"},description:"",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:{value:"400"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},minHeight:{defaultValue:{value:"80"},description:"",name:"minHeight",required:!1,type:{name:"number"}},maxHeight:{defaultValue:{value:"300"},description:"",name:"maxHeight",required:!1,type:{name:"number"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(collapsed: boolean) => void"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"(width: number, height: number) => void"}}}}}catch{}const dn=({nodes:e,links:t,width:n,height:r,className:i="",defaultNodeStyles:a={backgroundColor:"#222",padding:10,borderColor:"#999",borderWidth:0},defaultLinkStyles:o={linkColor:"#666",linkWidth:2,linkType:"solid"},defaultLabelStyles:s={fill:"#ffffff",fontSize:12,fontWeight:"normal",padding:4,backgroundColor:"rgba(0, 0, 0, 0.5)"},defaultMessageStyles:u={color:"#2445FF",fontSize:12,fontWeight:"normal",backgroundColor:"none"},enableMinimap:l=!0,enableZoom:c=!0,enableDrag:d=!0,enableHover:h=!0,simulationConfig:f={linkDistance:200,chargeStrength:-4e3,collisionRadius:100,alphaDecay:.01,alphaMin:.001},fitOnMount:x=!0,centerForce:b=.1,zoomLevel:y,minZoom:p=.1,maxZoom:v=4,theme:k="light",onNodeHover:g,onNodeBlur:C,onLinkHover:_,onLinkBlur:S,onNodeClick:A,onLinkClick:N,onCanvasClick:q,onZoomChange:F,onNodeDragStart:K,onNodeDrag:te,onNodeDragEnd:m,customNodeRenderer:E,customLinkRenderer:w,customLabelRenderer:$,enableVirtualization:R=!1,maxRenderNodes:M=1e3,maxRenderLinks:z=2e3})=>{const I=V.useRef(null),X=V.useRef(null),J=V.useRef(),G=V.useMemo(()=>e.map(L=>({...L,x:L.x||void 0,y:L.y||void 0,vx:L.vx||void 0,vy:L.vy||void 0,index:L.index||void 0})),[e]),j=V.useMemo(()=>t.map(L=>({...L,source:L.source||void 0,target:L.target||void 0,index:L.index||void 0})),[t]),U=V.useMemo(()=>{const L=k==="dark";return{nodeStyles:{backgroundColor:L?"#374151":"#f3f4f6",borderColor:L?"#6b7280":"#d1d5db",...a},linkStyles:{linkColor:L?"#9ca3af":"#6b7280",...o},labelStyles:{fill:L?"#ffffff":"#1f2937",backgroundColor:L?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.9)",...s}}},[k,a,o,s]),{dimensions:ne}=sc({containerRef:X,width:n,height:r}),{handleZoom:Z,fitGraphToContainer:_e}=lc({svgRef:I,zoomBehaviorRef:J,minZoom:p,maxZoom:v,onZoomChange:F}),me=cc({nodes:G,links:j,dimensions:ne,config:f,centerForce:b}),{dragBehavior:De}=uc({simulation:me.simulation,enableDrag:d,onNodeDragStart:K,onNodeDrag:te,onNodeDragEnd:m}),{handleNodeHover:Re,handleLinkHover:it,handleCanvasClick:Ut}=hc({svgRef:I,nodes:G,links:j,enableHover:h,onNodeHover:g,onNodeBlur:C,onLinkHover:_,onLinkBlur:S,onNodeClick:A,onLinkClick:N,onCanvasClick:q});V.useEffect(()=>{y&&Z&&Z(y)},[y]),V.useEffect(()=>{if(x&&_e){const L=setTimeout(()=>{_e()},100);return()=>clearTimeout(L)}},[x]);const at=V.useCallback((L,H)=>{var Ve;if(E)return E(L,H,U.nodeStyles);const P={...U.nodeStyles,...H.style},re={...U.labelStyles,...P.labelStyle},de=(O,Y,T=0)=>({width:O+T*2,height:Y+T*2,x:-(O/2+T),y:-(Y/2+T)});switch(H.shape){case"circle":{const O=P.width||P.height||Ne(H.shape).width,Y=P.padding||0,T=O+Y;if(L.append("circle").attr("r",T).attr("fill",P.backgroundColor).attr("stroke",P.borderColor).attr("stroke-width",P.borderWidth),H.image){const D=`clip-circle-${H.id}`;L.append("clipPath").attr("id",D).append("circle").attr("r",O),L.append("image").attr("href",H.image).attr("x",-O+Y/2).attr("y",-O+Y/2).attr("width",(O-Y/2)*2).attr("height",(O-Y/2)*2).attr("clip-path",`url(#${D})`)}break}case"square":case"rounded-square":{const O=P.padding||0,Y=(P.width||Ne(H.shape).width)-O,T=(P.height||Ne(H.shape).height)-O,D=de(Y,T,O),W=H.shape==="rounded-square";if(L.append("rect").attr("width",D.width).attr("height",D.height).attr("x",D.x).attr("y",D.y).attr("rx",W?P.borderRadius||10:0).attr("ry",W?P.borderRadius||10:0).attr("fill",P.backgroundColor).attr("stroke",P.borderColor).attr("stroke-width",P.borderWidth),H.image){const Q=`clip-${H.shape}-${H.id}`;L.append("clipPath").attr("id",Q).append("rect").attr("width",Y).attr("height",T).attr("x",-Y/2).attr("y",-T/2).attr("rx",W?P.borderRadius||10:0).attr("ry",W?P.borderRadius||10:0),L.append("image").attr("href",H.image).attr("x",-Y/2+O/2).attr("y",-T/2+O/2).attr("width",Y-O).attr("height",T-O).attr("clip-path",`url(#${Q})`)}break}case"rectangle":case"rounded-rectangle":{const O=P.padding||0,Y=(P.width||Ne(H.shape).width)-O,T=(P.height||Ne(H.shape).height)-O,D=de(Y,T,O),W=H.shape==="rounded-rectangle";if(L.append("rect").attr("width",D.width).attr("height",D.height).attr("x",D.x).attr("y",D.y).attr("rx",W?P.borderRadius||10:0).attr("ry",W?P.borderRadius||10:0).attr("fill",P.backgroundColor).attr("stroke",P.borderColor).attr("stroke-width",P.borderWidth),H.image){const Q=`clip-rect-${H.id}`;L.append("clipPath").attr("id",Q).append("rect").attr("width",Y).attr("height",T).attr("x",-Y/2).attr("y",-T/2).attr("rx",W?P.borderRadius||10:0).attr("ry",W?P.borderRadius||10:0),L.append("image").attr("href",H.image).attr("x",-Y/2+O/2).attr("y",-T/2+O/2).attr("width",Y-O).attr("height",T-O).attr("clip-path",`url(#${Q})`)}break}default:{const O=P.padding||0,Y=(P.width||Ne("rounded-square").width)-O,T=(P.height||Ne("rounded-square").height)-O,D=de(Y,T,O);L.append("rect").attr("width",D.width).attr("height",D.height).attr("x",D.x).attr("y",D.y).attr("rx",P.borderRadius||10).attr("ry",P.borderRadius||10).attr("fill",P.backgroundColor).attr("stroke",P.borderColor).attr("stroke-width",P.borderWidth)}}if(!H.image&&H.name&&L.append("text").attr("class",`node-name${H.name.length>8?" truncate":""}`).attr("text-anchor","middle").attr("dominant-baseline","central").attr("fill",P.backgroundColor==="#ffffff"?"#1E2023":"#ffffff").style("font-size","16px").style("font-weight","bold").text(H.name),H.label){const O=H.label.split(`
`),Y=L.append("g").attr("class","node-label-group").attr("transform",`translate(0, ${ic(H)})`),T=(D,W=10)=>D?D.split(`
`).flatMap(ce=>{const ye=ce.split(" "),ae=[];let B="";return ye.forEach(be=>{B.length+be.length<=W?B+=(B.length===0?"":" ")+be:(B.length>0&&ae.push(B),B=be)}),B.length>0&&ae.push(B),ae}):[];if(O.forEach((D,W)=>{const Q=T(D);Q.forEach((ce,ye)=>{Y.append("text").attr("class","node-label").attr("dy",(ye+W*Q.length)*(re.fontSize||12)*1.2).attr("text-anchor","middle").attr("fill",re.fill).style("font-size",`${re.fontSize}px`).style("font-weight",W===0?"500":re.fontWeight||"400").text(ce)})}),re.backgroundColor&&re.backgroundColor!=="none"){const D=(Ve=Y.node())==null?void 0:Ve.getBBox();D&&Y.insert("rect","text").attr("width",D.width+(re.padding||4)*2).attr("height",D.height+(re.padding||4)*2).attr("x",D.x-(re.padding||4)).attr("y",D.y-(re.padding||4)).attr("fill",re.backgroundColor).attr("opacity",.7).attr("rx",2).attr("ry",2)}}},[U,E]);V.useEffect(()=>{if(!I.current)return;const L=ee(I.current);L.selectAll("*").remove(),n&&L.attr("width",n),r&&L.attr("height",r),c&&(J.current=rc().scaleExtent([p,v]).on("zoom",T=>{H.attr("transform",T.transform),F&&F(T.transform.k)}),L.call(J.current));const H=L.append("g"),P=L.append("defs"),re=new Set(j.map(T=>{var D;return((D=T.style)==null?void 0:D.linkColor)||U.linkStyles.linkColor}));P.selectAll("marker").data(Array.from(re)).join("marker").attr("id",T=>`arrow-${T==null?void 0:T.replace("#","")}`).attr("viewBox","0 -5 10 10").attr("refX",8).attr("refY",0).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto").append("path").attr("fill",T=>T||U.linkStyles.linkColor).attr("d","M0,-5L10,0L0,5C1,3,1,-3,0,-5Z");const de=R?G.slice(0,M):G,Ve=R?j.slice(0,z):j,O=H.append("g").attr("class","links").selectAll("g").data(Ve).join("g");w?O.each(function(T){w(ee(this),T,U.linkStyles)}):(O.append("path").attr("stroke",D=>{var W;return((W=D.style)==null?void 0:W.linkColor)||U.linkStyles.linkColor}).attr("stroke-width",D=>{var W;return((W=D.style)==null?void 0:W.linkWidth)||U.linkStyles.linkWidth}).attr("stroke-dasharray",D=>{var W;return(((W=D.style)==null?void 0:W.linkType)||U.linkStyles.linkType)==="dashed"?"5,5":""}).attr("marker-end",D=>{var W;return`url(#arrow-${(((W=D.style)==null?void 0:W.linkColor)||U.linkStyles.linkColor).replace("#","")})`}).attr("fill","none"),O.append("g").attr("class","label-container").each(function(D){var B,be,Te;if(!D.label)return;const W=ee(this),Q={...U.labelStyles,...(B=D.style)==null?void 0:B.labelStyle},ce=W.append("rect").attr("rx",4).attr("ry",4).attr("fill",Q.backgroundColor).attr("opacity",.9).attr("stroke","white").attr("stroke-width",2),ae=(be=W.append("text").attr("class","link-label").attr("dy","0.35em").attr("text-anchor","middle").attr("fill",Q.fill).style("font-size",`${Q.fontSize}px`).style("font-weight",Q.fontWeight).style("pointer-events","none").text(D.label).node())==null?void 0:be.getBBox();if(ae){const ue=Q.padding||4;ce.attr("x",-ae.width/2-ue).attr("y",-ae.height/2-ue).attr("width",ae.width+ue*2).attr("height",ae.height+ue*2)}if(D.message){const ue={...u,...(Te=D.style)==null?void 0:Te.messageStyle};W.append("text").attr("class","link-message").attr("dy","-1.5em").attr("text-anchor","middle").attr("fill",ue.color).style("font-size",`${ue.fontSize}px`).style("font-weight",ue.fontWeight).style("pointer-events","none").text(D.message)}}));const Y=H.append("g").attr("class","nodes").selectAll("g").data(de).join("g");return d&&De&&Y.call(De),Y.each(function(T){at(ee(this),T)}),h&&(Y.on("mouseover",Re).on("mouseout",(T,D)=>Re(T,null)).on("click",(T,D)=>{T.stopPropagation(),A&&A(D,T)}),O.on("mouseover",it).on("mouseout",(T,D)=>it(T,null)).on("click",(T,D)=>{T.stopPropagation(),N&&N(D,T)}),L.on("click",Ut)),me&&me.simulation&&(me.simulation.on("tick",()=>{O.selectAll("path").attr("d",T=>{const D=de.find(Jt=>Jt.id===(T.source.id||T.source)),W=de.find(Jt=>Jt.id===(T.target.id||T.target));if(!D||!W)return"";const Q=Bn(D,!0),ce=Bn(W,!1),ye=(W.x||0)-(D.x||0),ae=(W.y||0)-(D.y||0),B=Math.atan2(ae,ye),be=(D.x||0)+Q*Math.cos(B),Te=(D.y||0)+Q*Math.sin(B),ue=(W.x||0)-ce*Math.cos(B),Xe=(W.y||0)-ce*Math.sin(B),Zt=(be+ue)/2,Be=(Te+Xe)/2,kn=T.shape==="curved"?.2:0,Pi=Zt-kn*(Xe-Te),Wi=Be+kn*(ue-be);return`M${be},${Te} Q${Pi},${Wi} ${ue},${Xe}`}),O.selectAll(".label-container").attr("transform",T=>{const D=de.find(Be=>Be.id===(T.source.id||T.source)),W=de.find(Be=>Be.id===(T.target.id||T.target));if(!D||!W)return"";const Q=D.x||0,ce=D.y||0,ye=W.x||0,ae=W.y||0,B=.5,be=(1-B)*(1-B)*Q+2*(1-B)*B*((Q+ye)/2)+B*B*ye,Te=(1-B)*(1-B)*ce+2*(1-B)*B*((ce+ae)/2)+B*B*ae,ue=2*(1-B)*((Q+ye)/2-Q)+2*B*(ye-(Q+ye)/2),Xe=2*(1-B)*((ce+ae)/2-ce)+2*B*(ae-(ce+ae)/2),Zt=Math.atan2(Xe,ue)*180/Math.PI;return`translate(${be},${Te}) rotate(${Zt})`}),Y.attr("transform",T=>`translate(${T.x},${T.y})`)}),me.simulation.alpha(1).restart()),()=>{me&&me.simulation&&me.simulation.stop()}},[G,j,ne,U,c,d,h,R,M,z,p,v,De,me]);const ot=["network-graph-container","relative size-full overflow-hidden rounded-lg",k==="dark"?"bg-gray-900":"bg-white","[&_svg]:cursor-default",i].filter(Boolean).join(" ");return ie.jsxs("div",{ref:X,className:ot,children:[ie.jsx("svg",{ref:I,className:"size-full"}),l&&ie.jsx(hn,{svgRef:I,zoomBehaviorRef:J})]})};try{dn.displayName="NetworkGraph",dn.__docgenInfo={description:"",displayName:"NetworkGraph",props:{nodes:{defaultValue:null,description:"",name:"nodes",required:!0,type:{name:"Node[]"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"Link[]"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},defaultNodeStyles:{defaultValue:{value:`{
    backgroundColor: "#222",
    padding: 10,
    borderColor: "#999",
    borderWidth: 0,
  }`},description:"",name:"defaultNodeStyles",required:!1,type:{name:"NodeStyle"}},defaultLinkStyles:{defaultValue:{value:`{
    linkColor: "#666",
    linkWidth: 2,
    linkType: "solid",
  }`},description:"",name:"defaultLinkStyles",required:!1,type:{name:"LinkStyle"}},defaultLabelStyles:{defaultValue:{value:`{
    fill: "#ffffff",
    fontSize: 12,
    fontWeight: "normal",
    padding: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }`},description:"",name:"defaultLabelStyles",required:!1,type:{name:"LabelStyle"}},defaultMessageStyles:{defaultValue:{value:`{
    color: "#2445FF",
    fontSize: 12,
    fontWeight: "normal",
    backgroundColor: "none",
  }`},description:"",name:"defaultMessageStyles",required:!1,type:{name:"MessageStyle"}},enableMinimap:{defaultValue:{value:"true"},description:"",name:"enableMinimap",required:!1,type:{name:"boolean"}},enableZoom:{defaultValue:{value:"true"},description:"",name:"enableZoom",required:!1,type:{name:"boolean"}},enableDrag:{defaultValue:{value:"true"},description:"",name:"enableDrag",required:!1,type:{name:"boolean"}},enableHover:{defaultValue:{value:"true"},description:"",name:"enableHover",required:!1,type:{name:"boolean"}},simulationConfig:{defaultValue:{value:`{
    linkDistance: 200,
    chargeStrength: -4000,
    collisionRadius: 100,
    alphaDecay: 0.01,
    alphaMin: 0.001,
  }`},description:"",name:"simulationConfig",required:!1,type:{name:"SimulationConfig"}},fitOnMount:{defaultValue:{value:"true"},description:"",name:"fitOnMount",required:!1,type:{name:"boolean"}},centerForce:{defaultValue:{value:"0.1"},description:"",name:"centerForce",required:!1,type:{name:"number"}},zoomLevel:{defaultValue:null,description:"",name:"zoomLevel",required:!1,type:{name:"number"}},minZoom:{defaultValue:{value:"0.1"},description:"",name:"minZoom",required:!1,type:{name:"number"}},maxZoom:{defaultValue:{value:"4"},description:"",name:"maxZoom",required:!1,type:{name:"number"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},onNodeHover:{defaultValue:null,description:"",name:"onNodeHover",required:!1,type:{name:"NodeEventHandler"}},onNodeBlur:{defaultValue:null,description:"",name:"onNodeBlur",required:!1,type:{name:"NodeEventHandler"}},onLinkHover:{defaultValue:null,description:"",name:"onLinkHover",required:!1,type:{name:"LinkEventHandler"}},onLinkBlur:{defaultValue:null,description:"",name:"onLinkBlur",required:!1,type:{name:"LinkEventHandler"}},onNodeClick:{defaultValue:null,description:"",name:"onNodeClick",required:!1,type:{name:"NodeEventHandler"}},onLinkClick:{defaultValue:null,description:"",name:"onLinkClick",required:!1,type:{name:"LinkEventHandler"}},onCanvasClick:{defaultValue:null,description:"",name:"onCanvasClick",required:!1,type:{name:"CanvasEventHandler"}},onZoomChange:{defaultValue:null,description:"",name:"onZoomChange",required:!1,type:{name:"ZoomEventHandler"}},onNodeDragStart:{defaultValue:null,description:"",name:"onNodeDragStart",required:!1,type:{name:"NodeDragHandler"}},onNodeDrag:{defaultValue:null,description:"",name:"onNodeDrag",required:!1,type:{name:"NodeDragHandler"}},onNodeDragEnd:{defaultValue:null,description:"",name:"onNodeDragEnd",required:!1,type:{name:"NodeDragHandler"}},customNodeRenderer:{defaultValue:null,description:"",name:"customNodeRenderer",required:!1,type:{name:"CustomNodeRenderer"}},customLinkRenderer:{defaultValue:null,description:"",name:"customLinkRenderer",required:!1,type:{name:"CustomLinkRenderer"}},customLabelRenderer:{defaultValue:null,description:"",name:"customLabelRenderer",required:!1,type:{name:"CustomLabelRenderer"}},enableVirtualization:{defaultValue:{value:"false"},description:"",name:"enableVirtualization",required:!1,type:{name:"boolean"}},maxRenderNodes:{defaultValue:{value:"1000"},description:"",name:"maxRenderNodes",required:!1,type:{name:"number"}},maxRenderLinks:{defaultValue:{value:"2000"},description:"",name:"maxRenderLinks",required:!1,type:{name:"number"}}}}}catch{}const bc={title:"Data Visualization/Network Graph",component:dn,parameters:{layout:"fullscreen",docs:{description:{component:`
A powerful and flexible network graph visualization component built with D3.js and React.

## Features
- **Interactive Visualization**: Zoom, pan, and drag nodes
- **Customizable Styling**: Flexible node shapes, colors, and link styles
- **Minimap Navigation**: Optional minimap for easy navigation of large graphs
- **Force Simulation**: Physics-based layout with customizable forces
- **Event Handling**: Rich set of interaction callbacks
- **Performance Optimized**: Virtualization support for large datasets
- **Accessible**: Keyboard and screen reader friendly
- **Responsive**: Adapts to container size changes

## Node Shapes
- Circle
- Square / Rounded Square
- Rectangle / Rounded Rectangle
- Custom shapes via renderer

## Themes
Supports both light and dark themes with automatic styling adjustments.
        `}}},argTypes:{nodes:{description:"Array of node objects to render",control:{type:"object"}},links:{description:"Array of link objects connecting nodes",control:{type:"object"}},width:{description:"Fixed width in pixels (optional)",control:{type:"number",min:200,max:2e3,step:50}},height:{description:"Fixed height in pixels (optional)",control:{type:"number",min:200,max:1200,step:50}},enableMinimap:{description:"Enable minimap navigation",control:{type:"boolean"}},enableZoom:{description:"Enable zoom functionality",control:{type:"boolean"}},enableDrag:{description:"Enable node dragging",control:{type:"boolean"}},enableHover:{description:"Enable hover effects and interactions",control:{type:"boolean"}},theme:{description:"Visual theme",control:{type:"select"},options:["light","dark"]},fitOnMount:{description:"Automatically fit graph to container on mount",control:{type:"boolean"}},minZoom:{description:"Minimum zoom level",control:{type:"number",min:.1,max:1,step:.1}},maxZoom:{description:"Maximum zoom level",control:{type:"number",min:2,max:10,step:.5}},enableVirtualization:{description:"Enable virtualization for large datasets",control:{type:"boolean"}},maxRenderNodes:{description:"Maximum nodes to render when virtualization is enabled",control:{type:"number",min:100,max:5e3,step:100}},maxRenderLinks:{description:"Maximum links to render when virtualization is enabled",control:{type:"number",min:100,max:1e4,step:100}}},args:{width:800,height:600,enableMinimap:!0,enableZoom:!0,enableDrag:!0,enableHover:!0,theme:"light",fitOnMount:!0,minZoom:.1,maxZoom:4,enableVirtualization:!1,maxRenderNodes:1e3,maxRenderLinks:2e3}},ge=e=>{const t=["circle","square","rectangle","rounded-square","rounded-rectangle"];return Array.from({length:e},(n,r)=>({id:`node-${r}`,name:`Node ${r+1}`,label:`Label for node ${r+1}`,shape:t[r%t.length],style:{backgroundColor:`hsl(${r*137.5%360}, 70%, 60%)`,borderColor:`hsl(${r*137.5%360}, 70%, 40%)`,borderWidth:2}}))},pe=e=>{const t=[];for(let n=0;n<e-1;n++)t.push({source:`node-${n}`,target:`node-${n+1}`,label:`Link ${n+1}`});for(let n=0;n<Math.min(e/2,10);n++){const r=Math.floor(Math.random()*e),i=Math.floor(Math.random()*e);r!==i&&t.push({source:`node-${r}`,target:`node-${i}`,style:{linkType:"dashed",linkColor:"#ff6b6b"}})}return t},dt={args:{nodes:ge(8),links:pe(8)}},ft={name:"Simple Network",args:{nodes:[{id:"1",name:"Root",shape:"circle",style:{backgroundColor:"#ff6b6b"}},{id:"2",name:"Child A",shape:"square",style:{backgroundColor:"#4ecdc4"}},{id:"3",name:"Child B",shape:"rectangle",style:{backgroundColor:"#45b7d1"}},{id:"4",name:"Grandchild",shape:"rounded-square",style:{backgroundColor:"#96ceb4"}}],links:[{source:"1",target:"2",label:"connects to"},{source:"1",target:"3",label:"links to"},{source:"2",target:"4",label:"parent of"}]}},gt={name:"Dark Theme",args:{theme:"dark",nodes:ge(6),links:pe(6)},parameters:{backgrounds:{default:"dark"}}},pt={name:"Light Theme",args:{theme:"light",nodes:ge(6),links:pe(6)}},mt={name:"Different Node Shapes",args:{nodes:[{id:"1",name:"Circle",shape:"circle",style:{backgroundColor:"#ff6b6b"}},{id:"2",name:"Square",shape:"square",style:{backgroundColor:"#4ecdc4"}},{id:"3",name:"Rectangle",shape:"rectangle",style:{backgroundColor:"#45b7d1"}},{id:"4",name:"Rounded Square",shape:"rounded-square",style:{backgroundColor:"#96ceb4"}},{id:"5",name:"Rounded Rectangle",shape:"rounded-rectangle",style:{backgroundColor:"#feca57"}}],links:[{source:"1",target:"2"},{source:"2",target:"3"},{source:"3",target:"4"},{source:"4",target:"5"},{source:"5",target:"1"}]}},yt={name:"Custom Node & Link Styling",args:{nodes:[{id:"1",name:"Server",label:`Main Server
US-East`,shape:"rectangle",style:{backgroundColor:"#2c3e50",borderColor:"#3498db",borderWidth:3,width:120,height:80}},{id:"2",name:"DB",label:`Database
PostgreSQL`,shape:"circle",style:{backgroundColor:"#e74c3c",borderColor:"#c0392b",borderWidth:2}},{id:"3",name:"Cache",label:"Redis Cache",shape:"rounded-square",style:{backgroundColor:"#f39c12",borderColor:"#e67e22",borderWidth:2}}],links:[{source:"1",target:"2",label:"queries",style:{linkColor:"#e74c3c",linkWidth:3,linkType:"solid"}},{source:"1",target:"3",label:"caches",style:{linkColor:"#f39c12",linkWidth:2,linkType:"dashed"}}]}},bt={name:"Large Network (100 nodes)",args:{nodes:ge(100),links:pe(100),enableVirtualization:!0,maxRenderNodes:50,maxRenderLinks:100}},vt={name:"Medium Network (25 nodes)",args:{nodes:ge(25),links:pe(25)}},wt={name:"Without Minimap",args:{nodes:ge(10),links:pe(10),enableMinimap:!1}},xt={name:"Zoom Disabled",args:{nodes:ge(8),links:pe(8),enableZoom:!1}},kt={name:"Drag Disabled",args:{nodes:ge(8),links:pe(8),enableDrag:!1}},_t={name:"Static Layout (No interactions)",args:{nodes:ge(8),links:pe(8),enableZoom:!1,enableDrag:!1,enableHover:!1,enableMinimap:!1}},Ct={name:"Organization Chart",args:{nodes:[{id:"ceo",name:"CEO",label:`Chief Executive Officer
John Smith`,shape:"rectangle",style:{backgroundColor:"#2c3e50",width:150,height:60}},{id:"cto",name:"CTO",label:`Chief Technology Officer
Jane Doe`,shape:"rectangle",style:{backgroundColor:"#3498db",width:140,height:60}},{id:"cfo",name:"CFO",label:`Chief Financial Officer
Bob Johnson`,shape:"rectangle",style:{backgroundColor:"#e74c3c",width:140,height:60}},{id:"dev1",name:"Dev 1",label:`Senior Developer
Alice Brown`,shape:"rounded-rectangle",style:{backgroundColor:"#95a5a6",width:120,height:50}},{id:"dev2",name:"Dev 2",label:`Junior Developer
Charlie Wilson`,shape:"rounded-rectangle",style:{backgroundColor:"#95a5a6",width:120,height:50}}],links:[{source:"ceo",target:"cto",label:"reports to"},{source:"ceo",target:"cfo",label:"reports to"},{source:"cto",target:"dev1",label:"manages"},{source:"cto",target:"dev2",label:"manages"}],simulationConfig:{linkDistance:150,chargeStrength:-2e3}}},St={name:"Network Topology",args:{nodes:[{id:"router",name:"Router",label:`Main Router
192.168.1.1`,shape:"rectangle",style:{backgroundColor:"#34495e",borderColor:"#2c3e50"}},{id:"switch1",name:"Switch 1",label:`Switch A
Port 24`,shape:"square",style:{backgroundColor:"#27ae60",borderColor:"#229954"}},{id:"switch2",name:"Switch 2",label:`Switch B
Port 16`,shape:"square",style:{backgroundColor:"#27ae60",borderColor:"#229954"}},{id:"pc1",name:"PC 1",label:`Workstation
192.168.1.10`,shape:"circle",style:{backgroundColor:"#3498db",borderColor:"#2980b9"}},{id:"pc2",name:"PC 2",label:`Workstation
192.168.1.11`,shape:"circle",style:{backgroundColor:"#3498db",borderColor:"#2980b9"}},{id:"server",name:"Server",label:`File Server
192.168.1.100`,shape:"rounded-rectangle",style:{backgroundColor:"#e74c3c",borderColor:"#c0392b",width:100,height:60}}],links:[{source:"router",target:"switch1",label:"Ethernet"},{source:"router",target:"switch2",label:"Ethernet"},{source:"switch1",target:"pc1",label:"1Gbps"},{source:"switch2",target:"pc2",label:"1Gbps"},{source:"router",target:"server",label:"10Gbps",style:{linkWidth:4,linkColor:"#e74c3c"}}],simulationConfig:{linkDistance:180,chargeStrength:-3e3}}},Nt={name:"Process Flow Chart",args:{nodes:[{id:"start",name:"Start",shape:"circle",style:{backgroundColor:"#27ae60",borderColor:"#229954"}},{id:"process1",name:"Process",label:"Validate Input",shape:"rectangle",style:{backgroundColor:"#3498db",borderColor:"#2980b9"}},{id:"decision",name:"Decision",label:"Valid?",shape:"square",style:{backgroundColor:"#f39c12",borderColor:"#e67e22"}},{id:"process2",name:"Process",label:"Save Data",shape:"rectangle",style:{backgroundColor:"#3498db",borderColor:"#2980b9"}},{id:"error",name:"Error",label:"Show Error",shape:"rectangle",style:{backgroundColor:"#e74c3c",borderColor:"#c0392b"}},{id:"end",name:"End",shape:"circle",style:{backgroundColor:"#95a5a6",borderColor:"#7f8c8d"}}],links:[{source:"start",target:"process1"},{source:"process1",target:"decision"},{source:"decision",target:"process2",label:"Yes",style:{linkColor:"#27ae60"}},{source:"decision",target:"error",label:"No",style:{linkColor:"#e74c3c"}},{source:"process2",target:"end"},{source:"error",target:"end"}]}},Mt={name:"Nodes with Images",args:{nodes:[{id:"1",name:"User",label:`John Doe
Admin`,shape:"circle",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=john",style:{backgroundColor:"#3498db",padding:5,width:80,height:80}},{id:"2",name:"User",label:`Jane Smith
Manager`,shape:"circle",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=jane",style:{backgroundColor:"#e74c3c",padding:5,width:80,height:80}},{id:"3",name:"User",label:`Bob Wilson
Developer`,shape:"circle",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=bob",style:{backgroundColor:"#27ae60",padding:5,width:80,height:80}}],links:[{source:"1",target:"2",label:"supervises"},{source:"2",target:"3",label:"manages"}]}},Et={name:"Interactive with Callbacks",args:{nodes:ge(6),links:pe(6),onNodeClick:(e,t)=>{console.log("Node clicked:",e),alert(`Clicked on ${e.name}`)},onLinkClick:(e,t)=>{console.log("Link clicked:",e),alert(`Clicked on link from ${e.source} to ${e.target}`)},onNodeHover:(e,t)=>{console.log("Node hovered:",e)},onZoomChange:e=>{console.log("Zoom changed:",e)}},parameters:{docs:{description:{story:"This example demonstrates the callback functions. Check the console and try clicking on nodes and links."}}}},Dt={name:"Custom Simulation Settings",args:{nodes:ge(12),links:pe(12),simulationConfig:{linkDistance:300,chargeStrength:-1e3,collisionRadius:50,alphaDecay:.005,alphaMin:.001},centerForce:.3},parameters:{docs:{description:{story:"Custom simulation with increased link distance and modified forces for a more spread out layout."}}}},Tt={name:"Message Flow Diagram",args:{nodes:[{id:"client",name:"Client",label:"Web Browser",shape:"rectangle",style:{backgroundColor:"#3498db"}},{id:"api",name:"API",label:`REST API
Gateway`,shape:"rectangle",style:{backgroundColor:"#f39c12"}},{id:"auth",name:"Auth",label:"Auth Service",shape:"rectangle",style:{backgroundColor:"#e74c3c"}},{id:"db",name:"Database",label:"PostgreSQL",shape:"circle",style:{backgroundColor:"#27ae60"}}],links:[{source:"client",target:"api",label:"HTTP Request",message:"1. POST /api/login",style:{linkColor:"#3498db"}},{source:"api",target:"auth",label:"Validate",message:"2. Check credentials",style:{linkColor:"#f39c12"}},{source:"auth",target:"db",label:"Query",message:"3. SELECT user",style:{linkColor:"#e74c3c"}}]}},$t={name:"Hierarchical Tree Structure",args:{nodes:[{id:"root",name:"Root",shape:"circle",style:{backgroundColor:"#2c3e50"}},{id:"branch1",name:"Branch 1",shape:"square",style:{backgroundColor:"#3498db"}},{id:"branch2",name:"Branch 2",shape:"square",style:{backgroundColor:"#3498db"}},{id:"leaf1",name:"Leaf 1",shape:"circle",style:{backgroundColor:"#27ae60"}},{id:"leaf2",name:"Leaf 2",shape:"circle",style:{backgroundColor:"#27ae60"}},{id:"leaf3",name:"Leaf 3",shape:"circle",style:{backgroundColor:"#27ae60"}},{id:"leaf4",name:"Leaf 4",shape:"circle",style:{backgroundColor:"#27ae60"}}],links:[{source:"root",target:"branch1"},{source:"root",target:"branch2"},{source:"branch1",target:"leaf1"},{source:"branch1",target:"leaf2"},{source:"branch2",target:"leaf3"},{source:"branch2",target:"leaf4"}],simulationConfig:{linkDistance:100,chargeStrength:-2e3}}},At={name:"Custom Zoom Levels",args:{nodes:ge(8),links:pe(8),minZoom:.2,maxZoom:8,zoomLevel:1.5},parameters:{docs:{description:{story:"Custom zoom levels with extended range and initial zoom level."}}}},zt={name:"Responsive (No Fixed Dimensions)",args:{nodes:ge(10),links:pe(10)},parameters:{docs:{description:{story:"Example without fixed width/height - the component will adapt to its container size."}}}},qt={name:"Different Link Types",args:{nodes:[{id:"1",name:"Node 1",shape:"circle",style:{backgroundColor:"#3498db"}},{id:"2",name:"Node 2",shape:"circle",style:{backgroundColor:"#e74c3c"}},{id:"3",name:"Node 3",shape:"circle",style:{backgroundColor:"#27ae60"}},{id:"4",name:"Node 4",shape:"circle",style:{backgroundColor:"#f39c12"}}],links:[{source:"1",target:"2",label:"Solid",style:{linkType:"solid",linkColor:"#3498db",linkWidth:2}},{source:"2",target:"3",label:"Dashed",style:{linkType:"dashed",linkColor:"#e74c3c",linkWidth:3}},{source:"3",target:"4",label:"Thick",style:{linkType:"solid",linkColor:"#27ae60",linkWidth:6}},{source:"1",target:"4",label:"Curved",shape:"curved",style:{linkType:"solid",linkColor:"#9b59b6",linkWidth:2}}]}},Lt={name:"Minimal Setup",args:{nodes:[{id:"A",name:"A"},{id:"B",name:"B"},{id:"C",name:"C"}],links:[{source:"A",target:"B"},{source:"B",target:"C"}]},parameters:{docs:{description:{story:"Minimal example showing the simplest possible configuration with just IDs and names."}}}};var Yn,jn,Gn;dt.parameters={...dt.parameters,docs:{...(Yn=dt.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8)
  }
}`,...(Gn=(jn=dt.parameters)==null?void 0:jn.docs)==null?void 0:Gn.source}}};var Un,Zn,Jn;ft.parameters={...ft.parameters,docs:{...(Un=ft.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  name: "Simple Network",
  args: {
    nodes: [{
      id: "1",
      name: "Root",
      shape: "circle",
      style: {
        backgroundColor: "#ff6b6b"
      }
    }, {
      id: "2",
      name: "Child A",
      shape: "square",
      style: {
        backgroundColor: "#4ecdc4"
      }
    }, {
      id: "3",
      name: "Child B",
      shape: "rectangle",
      style: {
        backgroundColor: "#45b7d1"
      }
    }, {
      id: "4",
      name: "Grandchild",
      shape: "rounded-square",
      style: {
        backgroundColor: "#96ceb4"
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "connects to"
    }, {
      source: "1",
      target: "3",
      label: "links to"
    }, {
      source: "2",
      target: "4",
      label: "parent of"
    }]
  }
}`,...(Jn=(Zn=ft.parameters)==null?void 0:Zn.docs)==null?void 0:Jn.source}}};var Qn,Kn,er;gt.parameters={...gt.parameters,docs:{...(Qn=gt.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
  name: "Dark Theme",
  args: {
    theme: "dark",
    nodes: generateNodes(6),
    links: generateLinks(6)
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(er=(Kn=gt.parameters)==null?void 0:Kn.docs)==null?void 0:er.source}}};var tr,nr,rr;pt.parameters={...pt.parameters,docs:{...(tr=pt.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: "Light Theme",
  args: {
    theme: "light",
    nodes: generateNodes(6),
    links: generateLinks(6)
  }
}`,...(rr=(nr=pt.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var ir,ar,or;mt.parameters={...mt.parameters,docs:{...(ir=mt.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  name: "Different Node Shapes",
  args: {
    nodes: [{
      id: "1",
      name: "Circle",
      shape: "circle",
      style: {
        backgroundColor: "#ff6b6b"
      }
    }, {
      id: "2",
      name: "Square",
      shape: "square",
      style: {
        backgroundColor: "#4ecdc4"
      }
    }, {
      id: "3",
      name: "Rectangle",
      shape: "rectangle",
      style: {
        backgroundColor: "#45b7d1"
      }
    }, {
      id: "4",
      name: "Rounded Square",
      shape: "rounded-square",
      style: {
        backgroundColor: "#96ceb4"
      }
    }, {
      id: "5",
      name: "Rounded Rectangle",
      shape: "rounded-rectangle",
      style: {
        backgroundColor: "#feca57"
      }
    }],
    links: [{
      source: "1",
      target: "2"
    }, {
      source: "2",
      target: "3"
    }, {
      source: "3",
      target: "4"
    }, {
      source: "4",
      target: "5"
    }, {
      source: "5",
      target: "1"
    }]
  }
}`,...(or=(ar=mt.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var sr,lr,cr;yt.parameters={...yt.parameters,docs:{...(sr=yt.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  name: "Custom Node & Link Styling",
  args: {
    nodes: [{
      id: "1",
      name: "Server",
      label: "Main Server\\nUS-East",
      shape: "rectangle",
      style: {
        backgroundColor: "#2c3e50",
        borderColor: "#3498db",
        borderWidth: 3,
        width: 120,
        height: 80
      }
    }, {
      id: "2",
      name: "DB",
      label: "Database\\nPostgreSQL",
      shape: "circle",
      style: {
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b",
        borderWidth: 2
      }
    }, {
      id: "3",
      name: "Cache",
      label: "Redis Cache",
      shape: "rounded-square",
      style: {
        backgroundColor: "#f39c12",
        borderColor: "#e67e22",
        borderWidth: 2
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "queries",
      style: {
        linkColor: "#e74c3c",
        linkWidth: 3,
        linkType: "solid"
      }
    }, {
      source: "1",
      target: "3",
      label: "caches",
      style: {
        linkColor: "#f39c12",
        linkWidth: 2,
        linkType: "dashed"
      }
    }]
  }
}`,...(cr=(lr=yt.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ur,hr,dr;bt.parameters={...bt.parameters,docs:{...(ur=bt.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  name: "Large Network (100 nodes)",
  args: {
    nodes: generateNodes(100),
    links: generateLinks(100),
    enableVirtualization: true,
    maxRenderNodes: 50,
    maxRenderLinks: 100
  }
}`,...(dr=(hr=bt.parameters)==null?void 0:hr.docs)==null?void 0:dr.source}}};var fr,gr,pr;vt.parameters={...vt.parameters,docs:{...(fr=vt.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  name: "Medium Network (25 nodes)",
  args: {
    nodes: generateNodes(25),
    links: generateLinks(25)
  }
}`,...(pr=(gr=vt.parameters)==null?void 0:gr.docs)==null?void 0:pr.source}}};var mr,yr,br;wt.parameters={...wt.parameters,docs:{...(mr=wt.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  name: "Without Minimap",
  args: {
    nodes: generateNodes(10),
    links: generateLinks(10),
    enableMinimap: false
  }
}`,...(br=(yr=wt.parameters)==null?void 0:yr.docs)==null?void 0:br.source}}};var vr,wr,xr;xt.parameters={...xt.parameters,docs:{...(vr=xt.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  name: "Zoom Disabled",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableZoom: false
  }
}`,...(xr=(wr=xt.parameters)==null?void 0:wr.docs)==null?void 0:xr.source}}};var kr,_r,Cr;kt.parameters={...kt.parameters,docs:{...(kr=kt.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  name: "Drag Disabled",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableDrag: false
  }
}`,...(Cr=(_r=kt.parameters)==null?void 0:_r.docs)==null?void 0:Cr.source}}};var Sr,Nr,Mr;_t.parameters={..._t.parameters,docs:{...(Sr=_t.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  name: "Static Layout (No interactions)",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableZoom: false,
    enableDrag: false,
    enableHover: false,
    enableMinimap: false
  }
}`,...(Mr=(Nr=_t.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var Er,Dr,Tr;Ct.parameters={...Ct.parameters,docs:{...(Er=Ct.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  name: "Organization Chart",
  args: {
    nodes: [{
      id: "ceo",
      name: "CEO",
      label: "Chief Executive Officer\\nJohn Smith",
      shape: "rectangle",
      style: {
        backgroundColor: "#2c3e50",
        width: 150,
        height: 60
      }
    }, {
      id: "cto",
      name: "CTO",
      label: "Chief Technology Officer\\nJane Doe",
      shape: "rectangle",
      style: {
        backgroundColor: "#3498db",
        width: 140,
        height: 60
      }
    }, {
      id: "cfo",
      name: "CFO",
      label: "Chief Financial Officer\\nBob Johnson",
      shape: "rectangle",
      style: {
        backgroundColor: "#e74c3c",
        width: 140,
        height: 60
      }
    }, {
      id: "dev1",
      name: "Dev 1",
      label: "Senior Developer\\nAlice Brown",
      shape: "rounded-rectangle",
      style: {
        backgroundColor: "#95a5a6",
        width: 120,
        height: 50
      }
    }, {
      id: "dev2",
      name: "Dev 2",
      label: "Junior Developer\\nCharlie Wilson",
      shape: "rounded-rectangle",
      style: {
        backgroundColor: "#95a5a6",
        width: 120,
        height: 50
      }
    }],
    links: [{
      source: "ceo",
      target: "cto",
      label: "reports to"
    }, {
      source: "ceo",
      target: "cfo",
      label: "reports to"
    }, {
      source: "cto",
      target: "dev1",
      label: "manages"
    }, {
      source: "cto",
      target: "dev2",
      label: "manages"
    }],
    simulationConfig: {
      linkDistance: 150,
      chargeStrength: -2000
    }
  }
}`,...(Tr=(Dr=Ct.parameters)==null?void 0:Dr.docs)==null?void 0:Tr.source}}};var $r,Ar,zr;St.parameters={...St.parameters,docs:{...($r=St.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  name: "Network Topology",
  args: {
    nodes: [{
      id: "router",
      name: "Router",
      label: "Main Router\\n192.168.1.1",
      shape: "rectangle",
      style: {
        backgroundColor: "#34495e",
        borderColor: "#2c3e50"
      }
    }, {
      id: "switch1",
      name: "Switch 1",
      label: "Switch A\\nPort 24",
      shape: "square",
      style: {
        backgroundColor: "#27ae60",
        borderColor: "#229954"
      }
    }, {
      id: "switch2",
      name: "Switch 2",
      label: "Switch B\\nPort 16",
      shape: "square",
      style: {
        backgroundColor: "#27ae60",
        borderColor: "#229954"
      }
    }, {
      id: "pc1",
      name: "PC 1",
      label: "Workstation\\n192.168.1.10",
      shape: "circle",
      style: {
        backgroundColor: "#3498db",
        borderColor: "#2980b9"
      }
    }, {
      id: "pc2",
      name: "PC 2",
      label: "Workstation\\n192.168.1.11",
      shape: "circle",
      style: {
        backgroundColor: "#3498db",
        borderColor: "#2980b9"
      }
    }, {
      id: "server",
      name: "Server",
      label: "File Server\\n192.168.1.100",
      shape: "rounded-rectangle",
      style: {
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b",
        width: 100,
        height: 60
      }
    }],
    links: [{
      source: "router",
      target: "switch1",
      label: "Ethernet"
    }, {
      source: "router",
      target: "switch2",
      label: "Ethernet"
    }, {
      source: "switch1",
      target: "pc1",
      label: "1Gbps"
    }, {
      source: "switch2",
      target: "pc2",
      label: "1Gbps"
    }, {
      source: "router",
      target: "server",
      label: "10Gbps",
      style: {
        linkWidth: 4,
        linkColor: "#e74c3c"
      }
    }],
    simulationConfig: {
      linkDistance: 180,
      chargeStrength: -3000
    }
  }
}`,...(zr=(Ar=St.parameters)==null?void 0:Ar.docs)==null?void 0:zr.source}}};var qr,Lr,Rr;Nt.parameters={...Nt.parameters,docs:{...(qr=Nt.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  name: "Process Flow Chart",
  args: {
    nodes: [{
      id: "start",
      name: "Start",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60",
        borderColor: "#229954"
      }
    }, {
      id: "process1",
      name: "Process",
      label: "Validate Input",
      shape: "rectangle",
      style: {
        backgroundColor: "#3498db",
        borderColor: "#2980b9"
      }
    }, {
      id: "decision",
      name: "Decision",
      label: "Valid?",
      shape: "square",
      style: {
        backgroundColor: "#f39c12",
        borderColor: "#e67e22"
      }
    }, {
      id: "process2",
      name: "Process",
      label: "Save Data",
      shape: "rectangle",
      style: {
        backgroundColor: "#3498db",
        borderColor: "#2980b9"
      }
    }, {
      id: "error",
      name: "Error",
      label: "Show Error",
      shape: "rectangle",
      style: {
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b"
      }
    }, {
      id: "end",
      name: "End",
      shape: "circle",
      style: {
        backgroundColor: "#95a5a6",
        borderColor: "#7f8c8d"
      }
    }],
    links: [{
      source: "start",
      target: "process1"
    }, {
      source: "process1",
      target: "decision"
    }, {
      source: "decision",
      target: "process2",
      label: "Yes",
      style: {
        linkColor: "#27ae60"
      }
    }, {
      source: "decision",
      target: "error",
      label: "No",
      style: {
        linkColor: "#e74c3c"
      }
    }, {
      source: "process2",
      target: "end"
    }, {
      source: "error",
      target: "end"
    }]
  }
}`,...(Rr=(Lr=Nt.parameters)==null?void 0:Lr.docs)==null?void 0:Rr.source}}};var Vr,Ir,Pr;Mt.parameters={...Mt.parameters,docs:{...(Vr=Mt.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  name: "Nodes with Images",
  args: {
    nodes: [{
      id: "1",
      name: "User",
      label: "John Doe\\nAdmin",
      shape: "circle",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      style: {
        backgroundColor: "#3498db",
        padding: 5,
        width: 80,
        height: 80
      }
    }, {
      id: "2",
      name: "User",
      label: "Jane Smith\\nManager",
      shape: "circle",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      style: {
        backgroundColor: "#e74c3c",
        padding: 5,
        width: 80,
        height: 80
      }
    }, {
      id: "3",
      name: "User",
      label: "Bob Wilson\\nDeveloper",
      shape: "circle",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
      style: {
        backgroundColor: "#27ae60",
        padding: 5,
        width: 80,
        height: 80
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "supervises"
    }, {
      source: "2",
      target: "3",
      label: "manages"
    }]
  }
}`,...(Pr=(Ir=Mt.parameters)==null?void 0:Ir.docs)==null?void 0:Pr.source}}};var Wr,Fr,Hr;Et.parameters={...Et.parameters,docs:{...(Wr=Et.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  name: "Interactive with Callbacks",
  args: {
    nodes: generateNodes(6),
    links: generateLinks(6),
    onNodeClick: (node, event) => {
      console.log("Node clicked:", node);
      alert(\`Clicked on \${node.name}\`);
    },
    onLinkClick: (link, event) => {
      console.log("Link clicked:", link);
      alert(\`Clicked on link from \${link.source} to \${link.target}\`);
    },
    onNodeHover: (node, event) => {
      console.log("Node hovered:", node);
    },
    onZoomChange: zoomLevel => {
      console.log("Zoom changed:", zoomLevel);
    }
  },
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates the callback functions. Check the console and try clicking on nodes and links."
      }
    }
  }
}`,...(Hr=(Fr=Et.parameters)==null?void 0:Fr.docs)==null?void 0:Hr.source}}};var Or,Xr,Br;Dt.parameters={...Dt.parameters,docs:{...(Or=Dt.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  name: "Custom Simulation Settings",
  args: {
    nodes: generateNodes(12),
    links: generateLinks(12),
    simulationConfig: {
      linkDistance: 300,
      chargeStrength: -1000,
      collisionRadius: 50,
      alphaDecay: 0.005,
      alphaMin: 0.001
    },
    centerForce: 0.3
  },
  parameters: {
    docs: {
      description: {
        story: "Custom simulation with increased link distance and modified forces for a more spread out layout."
      }
    }
  }
}`,...(Br=(Xr=Dt.parameters)==null?void 0:Xr.docs)==null?void 0:Br.source}}};var Yr,jr,Gr;Tt.parameters={...Tt.parameters,docs:{...(Yr=Tt.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  name: "Message Flow Diagram",
  args: {
    nodes: [{
      id: "client",
      name: "Client",
      label: "Web Browser",
      shape: "rectangle",
      style: {
        backgroundColor: "#3498db"
      }
    }, {
      id: "api",
      name: "API",
      label: "REST API\\nGateway",
      shape: "rectangle",
      style: {
        backgroundColor: "#f39c12"
      }
    }, {
      id: "auth",
      name: "Auth",
      label: "Auth Service",
      shape: "rectangle",
      style: {
        backgroundColor: "#e74c3c"
      }
    }, {
      id: "db",
      name: "Database",
      label: "PostgreSQL",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }],
    links: [{
      source: "client",
      target: "api",
      label: "HTTP Request",
      message: "1. POST /api/login",
      style: {
        linkColor: "#3498db"
      }
    }, {
      source: "api",
      target: "auth",
      label: "Validate",
      message: "2. Check credentials",
      style: {
        linkColor: "#f39c12"
      }
    }, {
      source: "auth",
      target: "db",
      label: "Query",
      message: "3. SELECT user",
      style: {
        linkColor: "#e74c3c"
      }
    }]
  }
}`,...(Gr=(jr=Tt.parameters)==null?void 0:jr.docs)==null?void 0:Gr.source}}};var Ur,Zr,Jr;$t.parameters={...$t.parameters,docs:{...(Ur=$t.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  name: "Hierarchical Tree Structure",
  args: {
    nodes: [{
      id: "root",
      name: "Root",
      shape: "circle",
      style: {
        backgroundColor: "#2c3e50"
      }
    }, {
      id: "branch1",
      name: "Branch 1",
      shape: "square",
      style: {
        backgroundColor: "#3498db"
      }
    }, {
      id: "branch2",
      name: "Branch 2",
      shape: "square",
      style: {
        backgroundColor: "#3498db"
      }
    }, {
      id: "leaf1",
      name: "Leaf 1",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }, {
      id: "leaf2",
      name: "Leaf 2",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }, {
      id: "leaf3",
      name: "Leaf 3",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }, {
      id: "leaf4",
      name: "Leaf 4",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }],
    links: [{
      source: "root",
      target: "branch1"
    }, {
      source: "root",
      target: "branch2"
    }, {
      source: "branch1",
      target: "leaf1"
    }, {
      source: "branch1",
      target: "leaf2"
    }, {
      source: "branch2",
      target: "leaf3"
    }, {
      source: "branch2",
      target: "leaf4"
    }],
    simulationConfig: {
      linkDistance: 100,
      chargeStrength: -2000
    }
  }
}`,...(Jr=(Zr=$t.parameters)==null?void 0:Zr.docs)==null?void 0:Jr.source}}};var Qr,Kr,ei;At.parameters={...At.parameters,docs:{...(Qr=At.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
  name: "Custom Zoom Levels",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    minZoom: 0.2,
    maxZoom: 8,
    zoomLevel: 1.5
  },
  parameters: {
    docs: {
      description: {
        story: "Custom zoom levels with extended range and initial zoom level."
      }
    }
  }
}`,...(ei=(Kr=At.parameters)==null?void 0:Kr.docs)==null?void 0:ei.source}}};var ti,ni,ri;zt.parameters={...zt.parameters,docs:{...(ti=zt.parameters)==null?void 0:ti.docs,source:{originalSource:`{
  name: "Responsive (No Fixed Dimensions)",
  args: {
    nodes: generateNodes(10),
    links: generateLinks(10)
    // No width/height specified - will be responsive
  },
  parameters: {
    docs: {
      description: {
        story: "Example without fixed width/height - the component will adapt to its container size."
      }
    }
  }
}`,...(ri=(ni=zt.parameters)==null?void 0:ni.docs)==null?void 0:ri.source}}};var ii,ai,oi;qt.parameters={...qt.parameters,docs:{...(ii=qt.parameters)==null?void 0:ii.docs,source:{originalSource:`{
  name: "Different Link Types",
  args: {
    nodes: [{
      id: "1",
      name: "Node 1",
      shape: "circle",
      style: {
        backgroundColor: "#3498db"
      }
    }, {
      id: "2",
      name: "Node 2",
      shape: "circle",
      style: {
        backgroundColor: "#e74c3c"
      }
    }, {
      id: "3",
      name: "Node 3",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }, {
      id: "4",
      name: "Node 4",
      shape: "circle",
      style: {
        backgroundColor: "#f39c12"
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "Solid",
      style: {
        linkType: "solid",
        linkColor: "#3498db",
        linkWidth: 2
      }
    }, {
      source: "2",
      target: "3",
      label: "Dashed",
      style: {
        linkType: "dashed",
        linkColor: "#e74c3c",
        linkWidth: 3
      }
    }, {
      source: "3",
      target: "4",
      label: "Thick",
      style: {
        linkType: "solid",
        linkColor: "#27ae60",
        linkWidth: 6
      }
    }, {
      source: "1",
      target: "4",
      label: "Curved",
      shape: "curved",
      style: {
        linkType: "solid",
        linkColor: "#9b59b6",
        linkWidth: 2
      }
    }]
  }
}`,...(oi=(ai=qt.parameters)==null?void 0:ai.docs)==null?void 0:oi.source}}};var si,li,ci;Lt.parameters={...Lt.parameters,docs:{...(si=Lt.parameters)==null?void 0:si.docs,source:{originalSource:`{
  name: "Minimal Setup",
  args: {
    nodes: [{
      id: "A",
      name: "A"
    }, {
      id: "B",
      name: "B"
    }, {
      id: "C",
      name: "C"
    }],
    links: [{
      source: "A",
      target: "B"
    }, {
      source: "B",
      target: "C"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal example showing the simplest possible configuration with just IDs and names."
      }
    }
  }
}`,...(ci=(li=Lt.parameters)==null?void 0:li.docs)==null?void 0:ci.source}}};const vc=["Default","SimpleNetwork","DarkTheme","LightTheme","NodeShapes","CustomStyling","LargeNetwork","MediumNetwork","WithoutMinimap","ZoomDisabled","DragDisabled","StaticLayout","OrganizationChart","NetworkTopology","FlowChart","WithImages","InteractiveCallbacks","CustomSimulation","MessageFlow","HierarchicalTree","ZoomLevels","ResponsiveLayout","CustomLinkTypes","MinimalExample"];export{qt as CustomLinkTypes,Dt as CustomSimulation,yt as CustomStyling,gt as DarkTheme,dt as Default,kt as DragDisabled,Nt as FlowChart,$t as HierarchicalTree,Et as InteractiveCallbacks,bt as LargeNetwork,pt as LightTheme,vt as MediumNetwork,Tt as MessageFlow,Lt as MinimalExample,St as NetworkTopology,mt as NodeShapes,Ct as OrganizationChart,zt as ResponsiveLayout,ft as SimpleNetwork,_t as StaticLayout,Mt as WithImages,wt as WithoutMinimap,xt as ZoomDisabled,At as ZoomLevels,vc as __namedExportsOrder,bc as default};
