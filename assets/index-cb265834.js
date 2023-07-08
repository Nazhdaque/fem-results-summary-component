var Q=Object.defineProperty;var X=(i,t,e)=>t in i?Q(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var A=(i,t,e)=>(X(i,typeof t!="symbol"?t+"":t,e),e),tt=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var M=(i,t,e)=>(tt(i,t,"read from private field"),e?e.call(i):t.get(i)),U=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var y;class et{constructor(t){U(this,y,(t,e,n)=>fetch(this.baseURL+e,{method:t,headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then(s=>{if(!s.ok)throw new Error("API issues.");return s.json()}));A(this,"get",t=>fetch(this.baseURL+t).then(e=>{if(!e.ok)throw new Error("API issues.");return e.json()}));A(this,"put",(t,e)=>M(this,y).call(this,"put",t,e));A(this,"post",(t,e)=>M(this,y).call(this,"post",t,e));A(this,"delete",(t,e)=>M(this,y).call(this,"delete",t,e));this.baseURL=t}}y=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const T=window,w=T.trustedTypes,O=w?w.createPolicy("lit-html",{createHTML:i=>i}):void 0,E="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Z="?"+_,st=`<${Z}>`,f=document,H=()=>f.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",G=Array.isArray,it=i=>G(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",P=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,j=/>/g,m=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,q=/"/g,Y=/^(?:script|style|textarea|title)$/i,nt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ot=nt(1),C=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),D=new WeakMap,g=f.createTreeWalker(f,129,null,!1);function J(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return O!==void 0?O.createHTML(t):t}const rt=(i,t)=>{const e=i.length-1,n=[];let s,o=t===2?"<svg>":"",r=b;for(let a=0;a<e;a++){const l=i[a];let h,c,u=-1,p=0;for(;p<l.length&&(r.lastIndex=p,c=r.exec(l),c!==null);)p=r.lastIndex,r===b?c[1]==="!--"?r=V:c[1]!==void 0?r=j:c[2]!==void 0?(Y.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=m):c[3]!==void 0&&(r=m):r===m?c[0]===">"?(r=s??b,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,h=c[1],r=c[3]===void 0?m:c[3]==='"'?q:B):r===q||r===B?r=m:r===V||r===j?r=b:(r=m,s=void 0);const $=r===m&&i[a+1].startsWith("/>")?" ":"";o+=r===b?l+st:u>=0?(n.push(h),l.slice(0,u)+E+l.slice(u)+_+$):l+_+(u===-2?(n.push(void 0),a):$)}return[J(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),n]};class R{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let o=0,r=0;const a=t.length-1,l=this.parts,[h,c]=rt(t,e);if(this.el=R.createElement(h,n),g.currentNode=this.el.content,e===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(s=g.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const p of s.getAttributeNames())if(p.endsWith(E)||p.startsWith(_)){const $=c[r++];if(u.push(p),$!==void 0){const K=s.getAttribute($.toLowerCase()+E).split(_),I=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:I[2],strings:K,ctor:I[1]==="."?ht:I[1]==="?"?ct:I[1]==="@"?ut:k})}else l.push({type:6,index:o})}for(const p of u)s.removeAttribute(p)}if(Y.test(s.tagName)){const u=s.textContent.split(_),p=u.length-1;if(p>0){s.textContent=w?w.emptyScript:"";for(let $=0;$<p;$++)s.append(u[$],H()),g.nextNode(),l.push({type:2,index:++o});s.append(u[p],H())}}}else if(s.nodeType===8)if(s.data===Z)l.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(_,u+1))!==-1;)l.push({type:7,index:o}),u+=_.length-1}o++}}static createElement(t,e){const n=f.createElement("template");return n.innerHTML=t,n}}function x(i,t,e=i,n){var s,o,r,a;if(t===C)return t;let l=n!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[n]:e._$Cl;const h=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,e,n)),n!==void 0?((r=(a=e)._$Co)!==null&&r!==void 0?r:a._$Co=[])[n]=l:e._$Cl=l),l!==void 0&&(t=x(i,l._$AS(i,t.values),l,n)),t}class lt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:f).importNode(n,!0);g.currentNode=o;let r=g.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new S(r,r.nextSibling,this,t):h.type===1?c=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(c=new dt(r,this,t)),this._$AV.push(c),h=s[++l]}a!==(h==null?void 0:h.index)&&(r=g.nextNode(),a++)}return g.currentNode=f,o}v(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class S{constructor(t,e,n,s){var o;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):it(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(f.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(J(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(n);else{const r=new lt(o,this),a=r.u(this.options);r.v(n),this.$(a),this._$AH=r}}_$AC(t){let e=D.get(t.strings);return e===void 0&&D.set(t.strings,e=new R(t)),e}T(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const o of t)s===e.length?e.push(n=new S(this.k(H()),this.k(H()),this,this.options)):n=e[s],n._$AI(o),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class k{constructor(t,e,n,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,s){const o=this.strings;let r=!1;if(o===void 0)t=x(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==C,r&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=x(this,a[n+l],e,l),h===C&&(h=this._$AH[l]),r||(r=!N(h)||h!==this._$AH[l]),h===d?t=d:t!==d&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ht extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}const at=w?w.emptyScript:"";class ct extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==d?this.element.setAttribute(this.name,at):this.element.removeAttribute(this.name)}}class ut extends k{constructor(t,e,n,s,o){super(t,e,n,s,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=x(this,t,e,0))!==null&&n!==void 0?n:d)===C)return;const s=this._$AH,o=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==d&&(s===d||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const W=T.litHtmlPolyfillSupport;W==null||W(R,S),((L=T.litHtmlVersions)!==null&&L!==void 0?L:T.litHtmlVersions=[]).push("2.7.5");const pt=(i,t,e)=>{var n,s;const o=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:t;let r=o._$litPart$;if(r===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new S(t.insertBefore(H(),a),a,void 0,e??{})}return r._$AI(i),r},$t=i=>i[0].toUpperCase()+i.substring(1).toLowerCase(),z={terrible:"Most likely you are dying... or dishonestly answered questions",bad:"Hope you get better",tolerably:"Well... not bad",normal:"Congratulations! You're normal",great:"You scored higher than 65% of the people who have taken these tests",impressive:"Are you a Ghostrunner?",cheater:"Well, how did it happen, may I ask?"},v=i=>{const t=Object.keys(z)[i];document.querySelector("#rank").textContent=$t(t),document.querySelector("#desc").textContent=z[t]},At=i=>{i<=10?v(0):i<=30?v(1):i<=50?v(2):i<=70?v(3):i<=90?v(4):i<=100?v(5):v(6)};class _t{constructor(t,e){A(this,"get100percent",()=>(this.maxValue=this.scoreSum*100/this.knownRating,this.maxValue=401.3,this));A(this,"getRoundedTo10",()=>(this.percent=Math.round(this.maxValue/10)*10,this));A(this,"getRoundedPercent",()=>Math.round(this.scoreSum*100/this.percent));this.scoreSum=t,this.knownRating=e}set knownRating(t){this._knownRating=Number.parseInt(t,10)}get knownRating(){return this._knownRating}}const mt=i=>window.location.href+"images/icons.svg#icon-"+i,vt=(i,t)=>ot`
	<li class="summary-item">
		<div class="summary-item__caption-group">
			<svg class="summary-item__icon">
				<use href="${mt(i.toLowerCase())}"></use>
			</svg>
			<h3 class="summary-item__title">${i}</h3>
		</div>

		<p class="summary-item__score"><span class="score">${t}</span> / 100</p>
	</li>
`,gt=(i,t,e)=>{100/e.length};let F=0;const ft=new et("");ft.get("data.json").then(i=>{const t=[];i.forEach(({category:s,score:o})=>{t.push(vt(s,o)),F+=Number.parseInt(o,10),gt(s,o,i)}),pt(t,document.querySelector(".summary-items"));const n=new _t(F,76).get100percent().getRoundedTo10().getRoundedPercent();document.querySelector("#rating").textContent=n,At(n)});console.log(`%cCoded by ✨Nazhdaque✨
https://www.frontendmentor.io/profile/Nazhdaque/solutions`,"background: #222; color: chartreuse; font-size: 1.25rem");