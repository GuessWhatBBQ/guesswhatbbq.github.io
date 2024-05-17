(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))s(v);new MutationObserver(v=>{for(const y of v)if(y.type==="childList")for(const h of y.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function l(v){const y={};return v.integrity&&(y.integrity=v.integrity),v.referrerPolicy&&(y.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?y.credentials="include":v.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function s(v){if(v.ep)return;v.ep=!0;const y=l(v);fetch(v.href,y)}})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jquery={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(o){(function(r,l){o.exports=r.document?l(r,!0):function(s){if(!s.document)throw new Error("jQuery requires a window with a document");return l(s)}})(typeof window<"u"?window:commonjsGlobal,function(r,l){var s=[],v=Object.getPrototypeOf,y=s.slice,h=s.flat?function(e){return s.flat.call(e)}:function(e){return s.concat.apply([],e)},A=s.push,F=s.indexOf,S={},W=S.toString,ae=S.hasOwnProperty,pe=ae.toString,_e=pe.call(Object),U={},te=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},ye=function(t){return t!=null&&t===t.window},O=r.document,B={type:!0,src:!0,nonce:!0,noModule:!0};function Y(e,t,n){n=n||O;var u,c,_=n.createElement("script");if(_.text=e,t)for(u in B)c=t[u]||t.getAttribute&&t.getAttribute(u),c&&_.setAttribute(u,c);n.head.appendChild(_).parentNode.removeChild(_)}function Ce(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?S[W.call(e)]||"object":typeof e}var V="3.7.1",ze=/HTML$/i,i=function(e,t){return new i.fn.init(e,t)};i.fn=i.prototype={jquery:V,constructor:i,length:0,toArray:function(){return y.call(this)},get:function(e){return e==null?y.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=i.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return i.each(this,e)},map:function(e){return this.pushStack(i.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(i.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(i.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:A,sort:s.sort,splice:s.splice},i.extend=i.fn.extend=function(){var e,t,n,u,c,_,p=arguments[0]||{},L=1,C=arguments.length,N=!1;for(typeof p=="boolean"&&(N=p,p=arguments[L]||{},L++),typeof p!="object"&&!te(p)&&(p={}),L===C&&(p=this,L--);L<C;L++)if((e=arguments[L])!=null)for(t in e)u=e[t],!(t==="__proto__"||p===u)&&(N&&u&&(i.isPlainObject(u)||(c=Array.isArray(u)))?(n=p[t],c&&!Array.isArray(n)?_=[]:!c&&!i.isPlainObject(n)?_={}:_=n,c=!1,p[t]=i.extend(N,_,u)):u!==void 0&&(p[t]=u));return p},i.extend({expando:"jQuery"+(V+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!e||W.call(e)!=="[object Object]"?!1:(t=v(e),t?(n=ae.call(t,"constructor")&&t.constructor,typeof n=="function"&&pe.call(n)===_e):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){Y(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,u=0;if(ce(e))for(n=e.length;u<n&&t.call(e[u],u,e[u])!==!1;u++);else for(u in e)if(t.call(e[u],u,e[u])===!1)break;return e},text:function(e){var t,n="",u=0,c=e.nodeType;if(!c)for(;t=e[u++];)n+=i.text(t);return c===1||c===11?e.textContent:c===9?e.documentElement.textContent:c===3||c===4?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return e!=null&&(ce(Object(e))?i.merge(n,typeof e=="string"?[e]:e):A.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:F.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!ze.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,u=0,c=e.length;u<n;u++)e[c++]=t[u];return e.length=c,e},grep:function(e,t,n){for(var u,c=[],_=0,p=e.length,L=!n;_<p;_++)u=!t(e[_],_),u!==L&&c.push(e[_]);return c},map:function(e,t,n){var u,c,_=0,p=[];if(ce(e))for(u=e.length;_<u;_++)c=t(e[_],_,n),c!=null&&p.push(c);else for(_ in e)c=t(e[_],_,n),c!=null&&p.push(c);return h(p)},guid:1,support:U}),typeof Symbol=="function"&&(i.fn[Symbol.iterator]=s[Symbol.iterator]),i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){S["[object "+t+"]"]=t.toLowerCase()});function ce(e){var t=!!e&&"length"in e&&e.length,n=Ce(e);return te(e)||ye(e)?!1:n==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}function Be(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var Ge=s.pop,Ne=s.sort,He=s.splice,Ee="[\\x20\\t\\r\\n\\f]",Re=new RegExp("^"+Ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ee+"+$","g");i.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&n.nodeType===1&&(e.contains?e.contains(n):e.compareDocumentPosition&&e.compareDocumentPosition(n)&16))};var _t=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function jt(e,t){return t?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}i.escapeSelector=function(e){return(e+"").replace(_t,jt)};var pt=O,Ut=A;(function(){var e,t,n,u,c,_=Ut,p,L,C,N,J,oe=i.expando,j=0,me=0,Ke=_r(),lt=_r(),et=_r(),zt=_r(),Pt=function(E,R){return E===R&&(c=!0),0},Fn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",In="(?:\\\\[\\da-fA-F]{1,6}"+Ee+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ot="\\["+Ee+"*("+In+")(?:"+Ee+"*([*^$|!~]?=)"+Ee+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+In+"))|)"+Ee+"*\\]",tr=":("+In+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ot+")*)|.*)\\)|)",ct=new RegExp(Ee+"+","g"),It=new RegExp("^"+Ee+"*,"+Ee+"*"),sr=new RegExp("^"+Ee+"*([>+~]|"+Ee+")"+Ee+"*"),vr=new RegExp(Ee+"|>"),Rn=new RegExp(tr),fr=new RegExp("^"+In+"$"),$n={ID:new RegExp("^#("+In+")"),CLASS:new RegExp("^\\.("+In+")"),TAG:new RegExp("^("+In+"|[*])"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+tr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Ee+"*(even|odd|(([+-]|)(\\d*)n|)"+Ee+"*(?:([+-]|)"+Ee+"*(\\d+)|))"+Ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Fn+")$","i"),needsContext:new RegExp("^"+Ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Ee+"*((?:-\\d)?\\d*)"+Ee+"*\\)|)(?=[^-]|$)","i")},Gn=/^(?:input|select|textarea|button)$/i,Vn=/^h\d$/i,hn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gr=/[+~]/,Hn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Ee+"?|\\\\([^\\r\\n\\f])","g"),Mn=function(E,R){var P="0x"+E.slice(1)-65536;return R||(P<0?String.fromCharCode(P+65536):String.fromCharCode(P>>10|55296,P&1023|56320))},Br=function(){Kn()},Or=pr(function(E){return E.disabled===!0&&Be(E,"fieldset")},{dir:"parentNode",next:"legend"});function Hr(){try{return p.activeElement}catch{}}try{_.apply(s=y.call(pt.childNodes),pt.childNodes),s[pt.childNodes.length].nodeType}catch{_={apply:function(R,P){Ut.apply(R,y.call(P))},call:function(R){Ut.apply(R,y.call(arguments,1))}}}function mt(E,R,P,G){var ue,Te,$e,Pe,Se,nt,Ve,Je=R&&R.ownerDocument,rt=R?R.nodeType:9;if(P=P||[],typeof E!="string"||!E||rt!==1&&rt!==9&&rt!==11)return P;if(!G&&(Kn(R),R=R||p,C)){if(rt!==11&&(Se=hn.exec(E)))if(ue=Se[1]){if(rt===9)if($e=R.getElementById(ue)){if($e.id===ue)return _.call(P,$e),P}else return P;else if(Je&&($e=Je.getElementById(ue))&&mt.contains(R,$e)&&$e.id===ue)return _.call(P,$e),P}else{if(Se[2])return _.apply(P,R.getElementsByTagName(E)),P;if((ue=Se[3])&&R.getElementsByClassName)return _.apply(P,R.getElementsByClassName(ue)),P}if(!zt[E+" "]&&(!N||!N.test(E))){if(Ve=E,Je=R,rt===1&&(vr.test(E)||sr.test(E))){for(Je=gr.test(E)&&yr(R.parentNode)||R,(Je!=R||!U.scope)&&((Pe=R.getAttribute("id"))?Pe=i.escapeSelector(Pe):R.setAttribute("id",Pe=oe)),nt=lr(E),Te=nt.length;Te--;)nt[Te]=(Pe?"#"+Pe:":scope")+" "+dr(nt[Te]);Ve=nt.join(",")}try{return _.apply(P,Je.querySelectorAll(Ve)),P}catch{zt(E,!0)}finally{Pe===oe&&R.removeAttribute("id")}}}return Fr(E.replace(Re,"$1"),R,P,G)}function _r(){var E=[];function R(P,G){return E.push(P+" ")>t.cacheLength&&delete R[E.shift()],R[P+" "]=G}return R}function Cn(E){return E[oe]=!0,E}function ur(E){var R=p.createElement("fieldset");try{return!!E(R)}catch{return!1}finally{R.parentNode&&R.parentNode.removeChild(R),R=null}}function Mr(E){return function(R){return Be(R,"input")&&R.type===E}}function Pr(E){return function(R){return(Be(R,"input")||Be(R,"button"))&&R.type===E}}function Lr(E){return function(R){return"form"in R?R.parentNode&&R.disabled===!1?"label"in R?"label"in R.parentNode?R.parentNode.disabled===E:R.disabled===E:R.isDisabled===E||R.isDisabled!==!E&&Or(R)===E:R.disabled===E:"label"in R?R.disabled===E:!1}}function nr(E){return Cn(function(R){return R=+R,Cn(function(P,G){for(var ue,Te=E([],P.length,R),$e=Te.length;$e--;)P[ue=Te[$e]]&&(P[ue]=!(G[ue]=P[ue]))})})}function yr(E){return E&&typeof E.getElementsByTagName<"u"&&E}function Kn(E){var R,P=E?E.ownerDocument||E:pt;return P==p||P.nodeType!==9||!P.documentElement||(p=P,L=p.documentElement,C=!i.isXMLDoc(p),J=L.matches||L.webkitMatchesSelector||L.msMatchesSelector,L.msMatchesSelector&&pt!=p&&(R=p.defaultView)&&R.top!==R&&R.addEventListener("unload",Br),U.getById=ur(function(G){return L.appendChild(G).id=i.expando,!p.getElementsByName||!p.getElementsByName(i.expando).length}),U.disconnectedMatch=ur(function(G){return J.call(G,"*")}),U.scope=ur(function(){return p.querySelectorAll(":scope")}),U.cssHas=ur(function(){try{return p.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),U.getById?(t.filter.ID=function(G){var ue=G.replace(Hn,Mn);return function(Te){return Te.getAttribute("id")===ue}},t.find.ID=function(G,ue){if(typeof ue.getElementById<"u"&&C){var Te=ue.getElementById(G);return Te?[Te]:[]}}):(t.filter.ID=function(G){var ue=G.replace(Hn,Mn);return function(Te){var $e=typeof Te.getAttributeNode<"u"&&Te.getAttributeNode("id");return $e&&$e.value===ue}},t.find.ID=function(G,ue){if(typeof ue.getElementById<"u"&&C){var Te,$e,Pe,Se=ue.getElementById(G);if(Se){if(Te=Se.getAttributeNode("id"),Te&&Te.value===G)return[Se];for(Pe=ue.getElementsByName(G),$e=0;Se=Pe[$e++];)if(Te=Se.getAttributeNode("id"),Te&&Te.value===G)return[Se]}return[]}}),t.find.TAG=function(G,ue){return typeof ue.getElementsByTagName<"u"?ue.getElementsByTagName(G):ue.querySelectorAll(G)},t.find.CLASS=function(G,ue){if(typeof ue.getElementsByClassName<"u"&&C)return ue.getElementsByClassName(G)},N=[],ur(function(G){var ue;L.appendChild(G).innerHTML="<a id='"+oe+"' href='' disabled='disabled'></a><select id='"+oe+"-\r\\' disabled='disabled'><option selected=''></option></select>",G.querySelectorAll("[selected]").length||N.push("\\["+Ee+"*(?:value|"+Fn+")"),G.querySelectorAll("[id~="+oe+"-]").length||N.push("~="),G.querySelectorAll("a#"+oe+"+*").length||N.push(".#.+[+~]"),G.querySelectorAll(":checked").length||N.push(":checked"),ue=p.createElement("input"),ue.setAttribute("type","hidden"),G.appendChild(ue).setAttribute("name","D"),L.appendChild(G).disabled=!0,G.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),ue=p.createElement("input"),ue.setAttribute("name",""),G.appendChild(ue),G.querySelectorAll("[name='']").length||N.push("\\["+Ee+"*name"+Ee+"*="+Ee+`*(?:''|"")`)}),U.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),Pt=function(G,ue){if(G===ue)return c=!0,0;var Te=!G.compareDocumentPosition-!ue.compareDocumentPosition;return Te||(Te=(G.ownerDocument||G)==(ue.ownerDocument||ue)?G.compareDocumentPosition(ue):1,Te&1||!U.sortDetached&&ue.compareDocumentPosition(G)===Te?G===p||G.ownerDocument==pt&&mt.contains(pt,G)?-1:ue===p||ue.ownerDocument==pt&&mt.contains(pt,ue)?1:u?F.call(u,G)-F.call(u,ue):0:Te&4?-1:1)}),p}mt.matches=function(E,R){return mt(E,null,null,R)},mt.matchesSelector=function(E,R){if(Kn(E),C&&!zt[R+" "]&&(!N||!N.test(R)))try{var P=J.call(E,R);if(P||U.disconnectedMatch||E.document&&E.document.nodeType!==11)return P}catch{zt(R,!0)}return mt(R,p,null,[E]).length>0},mt.contains=function(E,R){return(E.ownerDocument||E)!=p&&Kn(E),i.contains(E,R)},mt.attr=function(E,R){(E.ownerDocument||E)!=p&&Kn(E);var P=t.attrHandle[R.toLowerCase()],G=P&&ae.call(t.attrHandle,R.toLowerCase())?P(E,R,!C):void 0;return G!==void 0?G:E.getAttribute(R)},mt.error=function(E){throw new Error("Syntax error, unrecognized expression: "+E)},i.uniqueSort=function(E){var R,P=[],G=0,ue=0;if(c=!U.sortStable,u=!U.sortStable&&y.call(E,0),Ne.call(E,Pt),c){for(;R=E[ue++];)R===E[ue]&&(G=P.push(ue));for(;G--;)He.call(E,P[G],1)}return u=null,E},i.fn.uniqueSort=function(){return this.pushStack(i.uniqueSort(y.apply(this)))},t=i.expr={cacheLength:50,createPseudo:Cn,match:$n,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(E){return E[1]=E[1].replace(Hn,Mn),E[3]=(E[3]||E[4]||E[5]||"").replace(Hn,Mn),E[2]==="~="&&(E[3]=" "+E[3]+" "),E.slice(0,4)},CHILD:function(E){return E[1]=E[1].toLowerCase(),E[1].slice(0,3)==="nth"?(E[3]||mt.error(E[0]),E[4]=+(E[4]?E[5]+(E[6]||1):2*(E[3]==="even"||E[3]==="odd")),E[5]=+(E[7]+E[8]||E[3]==="odd")):E[3]&&mt.error(E[0]),E},PSEUDO:function(E){var R,P=!E[6]&&E[2];return $n.CHILD.test(E[0])?null:(E[3]?E[2]=E[4]||E[5]||"":P&&Rn.test(P)&&(R=lr(P,!0))&&(R=P.indexOf(")",P.length-R)-P.length)&&(E[0]=E[0].slice(0,R),E[2]=P.slice(0,R)),E.slice(0,3))}},filter:{TAG:function(E){var R=E.replace(Hn,Mn).toLowerCase();return E==="*"?function(){return!0}:function(P){return Be(P,R)}},CLASS:function(E){var R=Ke[E+" "];return R||(R=new RegExp("(^|"+Ee+")"+E+"("+Ee+"|$)"))&&Ke(E,function(P){return R.test(typeof P.className=="string"&&P.className||typeof P.getAttribute<"u"&&P.getAttribute("class")||"")})},ATTR:function(E,R,P){return function(G){var ue=mt.attr(G,E);return ue==null?R==="!=":R?(ue+="",R==="="?ue===P:R==="!="?ue!==P:R==="^="?P&&ue.indexOf(P)===0:R==="*="?P&&ue.indexOf(P)>-1:R==="$="?P&&ue.slice(-P.length)===P:R==="~="?(" "+ue.replace(ct," ")+" ").indexOf(P)>-1:R==="|="?ue===P||ue.slice(0,P.length+1)===P+"-":!1):!0}},CHILD:function(E,R,P,G,ue){var Te=E.slice(0,3)!=="nth",$e=E.slice(-4)!=="last",Pe=R==="of-type";return G===1&&ue===0?function(Se){return!!Se.parentNode}:function(Se,nt,Ve){var Je,rt,je,yt,rn,Xt=Te!==$e?"nextSibling":"previousSibling",mn=Se.parentNode,Sn=Pe&&Se.nodeName.toLowerCase(),or=!Ve&&!Pe,en=!1;if(mn){if(Te){for(;Xt;){for(je=Se;je=je[Xt];)if(Pe?Be(je,Sn):je.nodeType===1)return!1;rn=Xt=E==="only"&&!rn&&"nextSibling"}return!0}if(rn=[$e?mn.firstChild:mn.lastChild],$e&&or){for(rt=mn[oe]||(mn[oe]={}),Je=rt[E]||[],yt=Je[0]===j&&Je[1],en=yt&&Je[2],je=yt&&mn.childNodes[yt];je=++yt&&je&&je[Xt]||(en=yt=0)||rn.pop();)if(je.nodeType===1&&++en&&je===Se){rt[E]=[j,yt,en];break}}else if(or&&(rt=Se[oe]||(Se[oe]={}),Je=rt[E]||[],yt=Je[0]===j&&Je[1],en=yt),en===!1)for(;(je=++yt&&je&&je[Xt]||(en=yt=0)||rn.pop())&&!((Pe?Be(je,Sn):je.nodeType===1)&&++en&&(or&&(rt=je[oe]||(je[oe]={}),rt[E]=[j,en]),je===Se)););return en-=ue,en===G||en%G===0&&en/G>=0}}},PSEUDO:function(E,R){var P,G=t.pseudos[E]||t.setFilters[E.toLowerCase()]||mt.error("unsupported pseudo: "+E);return G[oe]?G(R):G.length>1?(P=[E,E,"",R],t.setFilters.hasOwnProperty(E.toLowerCase())?Cn(function(ue,Te){for(var $e,Pe=G(ue,R),Se=Pe.length;Se--;)$e=F.call(ue,Pe[Se]),ue[$e]=!(Te[$e]=Pe[Se])}):function(ue){return G(ue,0,P)}):G}},pseudos:{not:Cn(function(E){var R=[],P=[],G=Cr(E.replace(Re,"$1"));return G[oe]?Cn(function(ue,Te,$e,Pe){for(var Se,nt=G(ue,null,Pe,[]),Ve=ue.length;Ve--;)(Se=nt[Ve])&&(ue[Ve]=!(Te[Ve]=Se))}):function(ue,Te,$e){return R[0]=ue,G(R,null,$e,P),R[0]=null,!P.pop()}}),has:Cn(function(E){return function(R){return mt(E,R).length>0}}),contains:Cn(function(E){return E=E.replace(Hn,Mn),function(R){return(R.textContent||i.text(R)).indexOf(E)>-1}}),lang:Cn(function(E){return fr.test(E||"")||mt.error("unsupported lang: "+E),E=E.replace(Hn,Mn).toLowerCase(),function(R){var P;do if(P=C?R.lang:R.getAttribute("xml:lang")||R.getAttribute("lang"))return P=P.toLowerCase(),P===E||P.indexOf(E+"-")===0;while((R=R.parentNode)&&R.nodeType===1);return!1}}),target:function(E){var R=r.location&&r.location.hash;return R&&R.slice(1)===E.id},root:function(E){return E===L},focus:function(E){return E===Hr()&&p.hasFocus()&&!!(E.type||E.href||~E.tabIndex)},enabled:Lr(!1),disabled:Lr(!0),checked:function(E){return Be(E,"input")&&!!E.checked||Be(E,"option")&&!!E.selected},selected:function(E){return E.parentNode&&E.parentNode.selectedIndex,E.selected===!0},empty:function(E){for(E=E.firstChild;E;E=E.nextSibling)if(E.nodeType<6)return!1;return!0},parent:function(E){return!t.pseudos.empty(E)},header:function(E){return Vn.test(E.nodeName)},input:function(E){return Gn.test(E.nodeName)},button:function(E){return Be(E,"input")&&E.type==="button"||Be(E,"button")},text:function(E){var R;return Be(E,"input")&&E.type==="text"&&((R=E.getAttribute("type"))==null||R.toLowerCase()==="text")},first:nr(function(){return[0]}),last:nr(function(E,R){return[R-1]}),eq:nr(function(E,R,P){return[P<0?P+R:P]}),even:nr(function(E,R){for(var P=0;P<R;P+=2)E.push(P);return E}),odd:nr(function(E,R){for(var P=1;P<R;P+=2)E.push(P);return E}),lt:nr(function(E,R,P){var G;for(P<0?G=P+R:P>R?G=R:G=P;--G>=0;)E.push(G);return E}),gt:nr(function(E,R,P){for(var G=P<0?P+R:P;++G<R;)E.push(G);return E})}},t.pseudos.nth=t.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=Mr(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=Pr(e);function wr(){}wr.prototype=t.filters=t.pseudos,t.setFilters=new wr;function lr(E,R){var P,G,ue,Te,$e,Pe,Se,nt=lt[E+" "];if(nt)return R?0:nt.slice(0);for($e=E,Pe=[],Se=t.preFilter;$e;){(!P||(G=It.exec($e)))&&(G&&($e=$e.slice(G[0].length)||$e),Pe.push(ue=[])),P=!1,(G=sr.exec($e))&&(P=G.shift(),ue.push({value:P,type:G[0].replace(Re," ")}),$e=$e.slice(P.length));for(Te in t.filter)(G=$n[Te].exec($e))&&(!Se[Te]||(G=Se[Te](G)))&&(P=G.shift(),ue.push({value:P,type:Te,matches:G}),$e=$e.slice(P.length));if(!P)break}return R?$e.length:$e?mt.error(E):lt(E,Pe).slice(0)}function dr(E){for(var R=0,P=E.length,G="";R<P;R++)G+=E[R].value;return G}function pr(E,R,P){var G=R.dir,ue=R.next,Te=ue||G,$e=P&&Te==="parentNode",Pe=me++;return R.first?function(Se,nt,Ve){for(;Se=Se[G];)if(Se.nodeType===1||$e)return E(Se,nt,Ve);return!1}:function(Se,nt,Ve){var Je,rt,je=[j,Pe];if(Ve){for(;Se=Se[G];)if((Se.nodeType===1||$e)&&E(Se,nt,Ve))return!0}else for(;Se=Se[G];)if(Se.nodeType===1||$e)if(rt=Se[oe]||(Se[oe]={}),ue&&Be(Se,ue))Se=Se[G]||Se;else{if((Je=rt[Te])&&Je[0]===j&&Je[1]===Pe)return je[2]=Je[2];if(rt[Te]=je,je[2]=E(Se,nt,Ve))return!0}return!1}}function Er(E){return E.length>1?function(R,P,G){for(var ue=E.length;ue--;)if(!E[ue](R,P,G))return!1;return!0}:E[0]}function Wr(E,R,P){for(var G=0,ue=R.length;G<ue;G++)mt(E,R[G],P);return P}function hr(E,R,P,G,ue){for(var Te,$e=[],Pe=0,Se=E.length,nt=R!=null;Pe<Se;Pe++)(Te=E[Pe])&&(!P||P(Te,G,ue))&&($e.push(Te),nt&&R.push(Pe));return $e}function Tr(E,R,P,G,ue,Te){return G&&!G[oe]&&(G=Tr(G)),ue&&!ue[oe]&&(ue=Tr(ue,Te)),Cn(function($e,Pe,Se,nt){var Ve,Je,rt,je,yt=[],rn=[],Xt=Pe.length,mn=$e||Wr(R||"*",Se.nodeType?[Se]:Se,[]),Sn=E&&($e||!R)?hr(mn,yt,E,Se,nt):mn;if(P?(je=ue||($e?E:Xt||G)?[]:Pe,P(Sn,je,Se,nt)):je=Sn,G)for(Ve=hr(je,rn),G(Ve,[],Se,nt),Je=Ve.length;Je--;)(rt=Ve[Je])&&(je[rn[Je]]=!(Sn[rn[Je]]=rt));if($e){if(ue||E){if(ue){for(Ve=[],Je=je.length;Je--;)(rt=je[Je])&&Ve.push(Sn[Je]=rt);ue(null,je=[],Ve,nt)}for(Je=je.length;Je--;)(rt=je[Je])&&(Ve=ue?F.call($e,rt):yt[Je])>-1&&($e[Ve]=!(Pe[Ve]=rt))}}else je=hr(je===Pe?je.splice(Xt,je.length):je),ue?ue(null,Pe,je,nt):_.apply(Pe,je)})}function xr(E){for(var R,P,G,ue=E.length,Te=t.relative[E[0].type],$e=Te||t.relative[" "],Pe=Te?1:0,Se=pr(function(Je){return Je===R},$e,!0),nt=pr(function(Je){return F.call(R,Je)>-1},$e,!0),Ve=[function(Je,rt,je){var yt=!Te&&(je||rt!=n)||((R=rt).nodeType?Se(Je,rt,je):nt(Je,rt,je));return R=null,yt}];Pe<ue;Pe++)if(P=t.relative[E[Pe].type])Ve=[pr(Er(Ve),P)];else{if(P=t.filter[E[Pe].type].apply(null,E[Pe].matches),P[oe]){for(G=++Pe;G<ue&&!t.relative[E[G].type];G++);return Tr(Pe>1&&Er(Ve),Pe>1&&dr(E.slice(0,Pe-1).concat({value:E[Pe-2].type===" "?"*":""})).replace(Re,"$1"),P,Pe<G&&xr(E.slice(Pe,G)),G<ue&&xr(E=E.slice(G)),G<ue&&dr(E))}Ve.push(P)}return Er(Ve)}function jr(E,R){var P=R.length>0,G=E.length>0,ue=function(Te,$e,Pe,Se,nt){var Ve,Je,rt,je=0,yt="0",rn=Te&&[],Xt=[],mn=n,Sn=Te||G&&t.find.TAG("*",nt),or=j+=mn==null?1:Math.random()||.1,en=Sn.length;for(nt&&(n=$e==p||$e||nt);yt!==en&&(Ve=Sn[yt])!=null;yt++){if(G&&Ve){for(Je=0,!$e&&Ve.ownerDocument!=p&&(Kn(Ve),Pe=!C);rt=E[Je++];)if(rt(Ve,$e||p,Pe)){_.call(Se,Ve);break}nt&&(j=or)}P&&((Ve=!rt&&Ve)&&je--,Te&&rn.push(Ve))}if(je+=yt,P&&yt!==je){for(Je=0;rt=R[Je++];)rt(rn,Xt,$e,Pe);if(Te){if(je>0)for(;yt--;)rn[yt]||Xt[yt]||(Xt[yt]=Ge.call(Se));Xt=hr(Xt)}_.apply(Se,Xt),nt&&!Te&&Xt.length>0&&je+R.length>1&&i.uniqueSort(Se)}return nt&&(j=or,n=mn),rn};return P?Cn(ue):ue}function Cr(E,R){var P,G=[],ue=[],Te=et[E+" "];if(!Te){for(R||(R=lr(E)),P=R.length;P--;)Te=xr(R[P]),Te[oe]?G.push(Te):ue.push(Te);Te=et(E,jr(ue,G)),Te.selector=E}return Te}function Fr(E,R,P,G){var ue,Te,$e,Pe,Se,nt=typeof E=="function"&&E,Ve=!G&&lr(E=nt.selector||E);if(P=P||[],Ve.length===1){if(Te=Ve[0]=Ve[0].slice(0),Te.length>2&&($e=Te[0]).type==="ID"&&R.nodeType===9&&C&&t.relative[Te[1].type]){if(R=(t.find.ID($e.matches[0].replace(Hn,Mn),R)||[])[0],R)nt&&(R=R.parentNode);else return P;E=E.slice(Te.shift().value.length)}for(ue=$n.needsContext.test(E)?0:Te.length;ue--&&($e=Te[ue],!t.relative[Pe=$e.type]);)if((Se=t.find[Pe])&&(G=Se($e.matches[0].replace(Hn,Mn),gr.test(Te[0].type)&&yr(R.parentNode)||R))){if(Te.splice(ue,1),E=G.length&&dr(Te),!E)return _.apply(P,G),P;break}}return(nt||Cr(E,Ve))(G,R,!C,P,!R||gr.test(E)&&yr(R.parentNode)||R),P}U.sortStable=oe.split("").sort(Pt).join("")===oe,Kn(),U.sortDetached=ur(function(E){return E.compareDocumentPosition(p.createElement("fieldset"))&1}),i.find=mt,i.expr[":"]=i.expr.pseudos,i.unique=i.uniqueSort,mt.compile=Cr,mt.select=Fr,mt.setDocument=Kn,mt.tokenize=lr,mt.escape=i.escapeSelector,mt.getText=i.text,mt.isXML=i.isXMLDoc,mt.selectors=i.expr,mt.support=i.support,mt.uniqueSort=i.uniqueSort})();var Rt=function(e,t,n){for(var u=[],c=n!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(c&&i(e).is(n))break;u.push(e)}return u},$t=function(e,t){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n},it=i.expr.match.needsContext,gt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function q(e,t,n){return te(t)?i.grep(e,function(u,c){return!!t.call(u,c,u)!==n}):t.nodeType?i.grep(e,function(u){return u===t!==n}):typeof t!="string"?i.grep(e,function(u){return F.call(t,u)>-1!==n}):i.filter(t,e,n)}i.filter=function(e,t,n){var u=t[0];return n&&(e=":not("+e+")"),t.length===1&&u.nodeType===1?i.find.matchesSelector(u,e)?[u]:[]:i.find.matches(e,i.grep(t,function(c){return c.nodeType===1}))},i.fn.extend({find:function(e){var t,n,u=this.length,c=this;if(typeof e!="string")return this.pushStack(i(e).filter(function(){for(t=0;t<u;t++)if(i.contains(c[t],this))return!0}));for(n=this.pushStack([]),t=0;t<u;t++)i.find(e,c[t],n);return u>1?i.uniqueSort(n):n},filter:function(e){return this.pushStack(q(this,e||[],!1))},not:function(e){return this.pushStack(q(this,e||[],!0))},is:function(e){return!!q(this,typeof e=="string"&&it.test(e)?i(e):e||[],!1).length}});var H,b=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,M=i.fn.init=function(e,t,n){var u,c;if(!e)return this;if(n=n||H,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?u=[null,e,null]:u=b.exec(e),u&&(u[1]||!t))if(u[1]){if(t=t instanceof i?t[0]:t,i.merge(this,i.parseHTML(u[1],t&&t.nodeType?t.ownerDocument||t:O,!0)),gt.test(u[1])&&i.isPlainObject(t))for(u in t)te(this[u])?this[u](t[u]):this.attr(u,t[u]);return this}else return c=O.getElementById(u[2]),c&&(this[0]=c,this.length=1),this;else return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(te(e))return n.ready!==void 0?n.ready(e):e(i)}return i.makeArray(e,this)};M.prototype=i.fn,H=i(O);var X=/^(?:parents|prev(?:Until|All))/,ne={children:!0,contents:!0,next:!0,prev:!0};i.fn.extend({has:function(e){var t=i(e,this),n=t.length;return this.filter(function(){for(var u=0;u<n;u++)if(i.contains(this,t[u]))return!0})},closest:function(e,t){var n,u=0,c=this.length,_=[],p=typeof e!="string"&&i(e);if(!it.test(e)){for(;u<c;u++)for(n=this[u];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(p?p.index(n)>-1:n.nodeType===1&&i.find.matchesSelector(n,e))){_.push(n);break}}return this.pushStack(_.length>1?i.uniqueSort(_):_)},index:function(e){return e?typeof e=="string"?F.call(i(e),this[0]):F.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(i.uniqueSort(i.merge(this.get(),i(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function ve(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}i.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return Rt(e,"parentNode")},parentsUntil:function(e,t,n){return Rt(e,"parentNode",n)},next:function(e){return ve(e,"nextSibling")},prev:function(e){return ve(e,"previousSibling")},nextAll:function(e){return Rt(e,"nextSibling")},prevAll:function(e){return Rt(e,"previousSibling")},nextUntil:function(e,t,n){return Rt(e,"nextSibling",n)},prevUntil:function(e,t,n){return Rt(e,"previousSibling",n)},siblings:function(e){return $t((e.parentNode||{}).firstChild,e)},children:function(e){return $t(e.firstChild)},contents:function(e){return e.contentDocument!=null&&v(e.contentDocument)?e.contentDocument:(Be(e,"template")&&(e=e.content||e),i.merge([],e.childNodes))}},function(e,t){i.fn[e]=function(n,u){var c=i.map(this,t,n);return e.slice(-5)!=="Until"&&(u=n),u&&typeof u=="string"&&(c=i.filter(u,c)),this.length>1&&(ne[e]||i.uniqueSort(c),X.test(e)&&c.reverse()),this.pushStack(c)}});var de=/[^\x20\t\r\n\f]+/g;function he(e){var t={};return i.each(e.match(de)||[],function(n,u){t[u]=!0}),t}i.Callbacks=function(e){e=typeof e=="string"?he(e):i.extend({},e);var t,n,u,c,_=[],p=[],L=-1,C=function(){for(c=c||e.once,u=t=!0;p.length;L=-1)for(n=p.shift();++L<_.length;)_[L].apply(n[0],n[1])===!1&&e.stopOnFalse&&(L=_.length,n=!1);e.memory||(n=!1),t=!1,c&&(n?_=[]:_="")},N={add:function(){return _&&(n&&!t&&(L=_.length-1,p.push(n)),function J(oe){i.each(oe,function(j,me){te(me)?(!e.unique||!N.has(me))&&_.push(me):me&&me.length&&Ce(me)!=="string"&&J(me)})}(arguments),n&&!t&&C()),this},remove:function(){return i.each(arguments,function(J,oe){for(var j;(j=i.inArray(oe,_,j))>-1;)_.splice(j,1),j<=L&&L--}),this},has:function(J){return J?i.inArray(J,_)>-1:_.length>0},empty:function(){return _&&(_=[]),this},disable:function(){return c=p=[],_=n="",this},disabled:function(){return!_},lock:function(){return c=p=[],!n&&!t&&(_=n=""),this},locked:function(){return!!c},fireWith:function(J,oe){return c||(oe=oe||[],oe=[J,oe.slice?oe.slice():oe],p.push(oe),t||C()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!u}};return N};function Ie(e){return e}function Ye(e){throw e}function ut(e,t,n,u){var c;try{e&&te(c=e.promise)?c.call(e).done(t).fail(n):e&&te(c=e.then)?c.call(e,t,n):t.apply(void 0,[e].slice(u))}catch(_){n.apply(void 0,[_])}}i.extend({Deferred:function(e){var t=[["notify","progress",i.Callbacks("memory"),i.Callbacks("memory"),2],["resolve","done",i.Callbacks("once memory"),i.Callbacks("once memory"),0,"resolved"],["reject","fail",i.Callbacks("once memory"),i.Callbacks("once memory"),1,"rejected"]],n="pending",u={state:function(){return n},always:function(){return c.done(arguments).fail(arguments),this},catch:function(_){return u.then(null,_)},pipe:function(){var _=arguments;return i.Deferred(function(p){i.each(t,function(L,C){var N=te(_[C[4]])&&_[C[4]];c[C[1]](function(){var J=N&&N.apply(this,arguments);J&&te(J.promise)?J.promise().progress(p.notify).done(p.resolve).fail(p.reject):p[C[0]+"With"](this,N?[J]:arguments)})}),_=null}).promise()},then:function(_,p,L){var C=0;function N(J,oe,j,me){return function(){var Ke=this,lt=arguments,et=function(){var Pt,Fn;if(!(J<C)){if(Pt=j.apply(Ke,lt),Pt===oe.promise())throw new TypeError("Thenable self-resolution");Fn=Pt&&(typeof Pt=="object"||typeof Pt=="function")&&Pt.then,te(Fn)?me?Fn.call(Pt,N(C,oe,Ie,me),N(C,oe,Ye,me)):(C++,Fn.call(Pt,N(C,oe,Ie,me),N(C,oe,Ye,me),N(C,oe,Ie,oe.notifyWith))):(j!==Ie&&(Ke=void 0,lt=[Pt]),(me||oe.resolveWith)(Ke,lt))}},zt=me?et:function(){try{et()}catch(Pt){i.Deferred.exceptionHook&&i.Deferred.exceptionHook(Pt,zt.error),J+1>=C&&(j!==Ye&&(Ke=void 0,lt=[Pt]),oe.rejectWith(Ke,lt))}};J?zt():(i.Deferred.getErrorHook?zt.error=i.Deferred.getErrorHook():i.Deferred.getStackHook&&(zt.error=i.Deferred.getStackHook()),r.setTimeout(zt))}}return i.Deferred(function(J){t[0][3].add(N(0,J,te(L)?L:Ie,J.notifyWith)),t[1][3].add(N(0,J,te(_)?_:Ie)),t[2][3].add(N(0,J,te(p)?p:Ye))}).promise()},promise:function(_){return _!=null?i.extend(_,u):u}},c={};return i.each(t,function(_,p){var L=p[2],C=p[5];u[p[1]]=L.add,C&&L.add(function(){n=C},t[3-_][2].disable,t[3-_][3].disable,t[0][2].lock,t[0][3].lock),L.add(p[3].fire),c[p[0]]=function(){return c[p[0]+"With"](this===c?void 0:this,arguments),this},c[p[0]+"With"]=L.fireWith}),u.promise(c),e&&e.call(c,c),c},when:function(e){var t=arguments.length,n=t,u=Array(n),c=y.call(arguments),_=i.Deferred(),p=function(L){return function(C){u[L]=this,c[L]=arguments.length>1?y.call(arguments):C,--t||_.resolveWith(u,c)}};if(t<=1&&(ut(e,_.done(p(n)).resolve,_.reject,!t),_.state()==="pending"||te(c[n]&&c[n].then)))return _.then();for(;n--;)ut(c[n],p(n),_.reject);return _.promise()}});var at=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;i.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&at.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},i.readyException=function(e){r.setTimeout(function(){throw e})};var Ze=i.Deferred();i.fn.ready=function(e){return Ze.then(e).catch(function(t){i.readyException(t)}),this},i.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--i.readyWait:i.isReady)||(i.isReady=!0,!(e!==!0&&--i.readyWait>0)&&Ze.resolveWith(O,[i]))}}),i.ready.then=Ze.then;function Et(){O.removeEventListener("DOMContentLoaded",Et),r.removeEventListener("load",Et),i.ready()}O.readyState==="complete"||O.readyState!=="loading"&&!O.documentElement.doScroll?r.setTimeout(i.ready):(O.addEventListener("DOMContentLoaded",Et),r.addEventListener("load",Et));var Lt=function(e,t,n,u,c,_,p){var L=0,C=e.length,N=n==null;if(Ce(n)==="object"){c=!0;for(L in n)Lt(e,t,L,n[L],!0,_,p)}else if(u!==void 0&&(c=!0,te(u)||(p=!0),N&&(p?(t.call(e,u),t=null):(N=t,t=function(J,oe,j){return N.call(i(J),j)})),t))for(;L<C;L++)t(e[L],n,p?u:u.call(e[L],L,t(e[L],n)));return c?e:N?t.call(e):C?t(e[0],n):_},cn=/^-ms-/,Dt=/-([a-z])/g;function Tt(e,t){return t.toUpperCase()}function Xe(e){return e.replace(cn,"ms-").replace(Dt,Tt)}var tn=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function _n(){this.expando=i.expando+_n.uid++}_n.uid=1,_n.prototype={cache:function(e){var t=e[this.expando];return t||(t={},tn(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var u,c=this.cache(e);if(typeof t=="string")c[Xe(t)]=n;else for(u in t)c[Xe(u)]=t[u];return c},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Xe(t)]},access:function(e,t,n){return t===void 0||t&&typeof t=="string"&&n===void 0?this.get(e,t):(this.set(e,t,n),n!==void 0?n:t)},remove:function(e,t){var n,u=e[this.expando];if(u!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Xe):(t=Xe(t),t=t in u?[t]:t.match(de)||[]),n=t.length;n--;)delete u[t[n]];(t===void 0||i.isEmptyObject(u))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!i.isEmptyObject(t)}};var De=new _n,Ot=new _n,Jn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,a=/[A-Z]/g;function Pn(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Jn.test(e)?JSON.parse(e):e}function un(e,t,n){var u;if(n===void 0&&e.nodeType===1)if(u="data-"+t.replace(a,"-$&").toLowerCase(),n=e.getAttribute(u),typeof n=="string"){try{n=Pn(n)}catch{}Ot.set(e,t,n)}else n=void 0;return n}i.extend({hasData:function(e){return Ot.hasData(e)||De.hasData(e)},data:function(e,t,n){return Ot.access(e,t,n)},removeData:function(e,t){Ot.remove(e,t)},_data:function(e,t,n){return De.access(e,t,n)},_removeData:function(e,t){De.remove(e,t)}}),i.fn.extend({data:function(e,t){var n,u,c,_=this[0],p=_&&_.attributes;if(e===void 0){if(this.length&&(c=Ot.get(_),_.nodeType===1&&!De.get(_,"hasDataAttrs"))){for(n=p.length;n--;)p[n]&&(u=p[n].name,u.indexOf("data-")===0&&(u=Xe(u.slice(5)),un(_,u,c[u])));De.set(_,"hasDataAttrs",!0)}return c}return typeof e=="object"?this.each(function(){Ot.set(this,e)}):Lt(this,function(L){var C;if(_&&L===void 0)return C=Ot.get(_,e),C!==void 0||(C=un(_,e),C!==void 0)?C:void 0;this.each(function(){Ot.set(this,e,L)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ot.remove(this,e)})}}),i.extend({queue:function(e,t,n){var u;if(e)return t=(t||"fx")+"queue",u=De.get(e,t),n&&(!u||Array.isArray(n)?u=De.access(e,t,i.makeArray(n)):u.push(n)),u||[]},dequeue:function(e,t){t=t||"fx";var n=i.queue(e,t),u=n.length,c=n.shift(),_=i._queueHooks(e,t),p=function(){i.dequeue(e,t)};c==="inprogress"&&(c=n.shift(),u--),c&&(t==="fx"&&n.unshift("inprogress"),delete _.stop,c.call(e,p,_)),!u&&_&&_.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return De.get(e,n)||De.access(e,n,{empty:i.Callbacks("once memory").add(function(){De.remove(e,[t+"queue",n])})})}}),i.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?i.queue(this[0],e):t===void 0?this:this.each(function(){var u=i.queue(this,e,t);i._queueHooks(this,e),e==="fx"&&u[0]!=="inprogress"&&i.dequeue(this,e)})},dequeue:function(e){return this.each(function(){i.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,u=1,c=i.Deferred(),_=this,p=this.length,L=function(){--u||c.resolveWith(_,[_])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";p--;)n=De.get(_[p],e+"queueHooks"),n&&n.empty&&(u++,n.empty.add(L));return L(),c.promise(t)}});var An=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Dn=new RegExp("^(?:([+-])=|)("+An+")([a-z%]*)$","i"),St=["Top","Right","Bottom","Left"],nn=O.documentElement,qt=function(e){return i.contains(e.ownerDocument,e)},dn={composed:!0};nn.getRootNode&&(qt=function(e){return i.contains(e.ownerDocument,e)||e.getRootNode(dn)===e.ownerDocument});var pn=function(e,t){return e=t||e,e.style.display==="none"||e.style.display===""&&qt(e)&&i.css(e,"display")==="none"};function Yt(e,t,n,u){var c,_,p=20,L=u?function(){return u.cur()}:function(){return i.css(e,t,"")},C=L(),N=n&&n[3]||(i.cssNumber[t]?"":"px"),J=e.nodeType&&(i.cssNumber[t]||N!=="px"&&+C)&&Dn.exec(i.css(e,t));if(J&&J[3]!==N){for(C=C/2,N=N||J[3],J=+C||1;p--;)i.style(e,t,J+N),(1-_)*(1-(_=L()/C||.5))<=0&&(p=0),J=J/_;J=J*2,i.style(e,t,J+N),n=n||[]}return n&&(J=+J||+C||0,c=n[1]?J+(n[1]+1)*n[2]:+n[2],u&&(u.unit=N,u.start=J,u.end=c)),c}var vn={};function Xn(e){var t,n=e.ownerDocument,u=e.nodeName,c=vn[u];return c||(t=n.body.appendChild(n.createElement(u)),c=i.css(t,"display"),t.parentNode.removeChild(t),c==="none"&&(c="block"),vn[u]=c,c)}function kt(e,t){for(var n,u,c=[],_=0,p=e.length;_<p;_++)u=e[_],u.style&&(n=u.style.display,t?(n==="none"&&(c[_]=De.get(u,"display")||null,c[_]||(u.style.display="")),u.style.display===""&&pn(u)&&(c[_]=Xn(u))):n!=="none"&&(c[_]="none",De.set(u,"display",n)));for(_=0;_<p;_++)c[_]!=null&&(e[_].style.display=c[_]);return e}i.fn.extend({show:function(){return kt(this,!0)},hide:function(){return kt(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){pn(this)?i(this).show():i(this).hide()})}});var Ht=/^(?:checkbox|radio)$/i,bn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,on=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=O.createDocumentFragment(),t=e.appendChild(O.createElement("div")),n=O.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),U.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",U.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",U.option=!!t.lastChild})();var Wt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Wt.tbody=Wt.tfoot=Wt.colgroup=Wt.caption=Wt.thead,Wt.th=Wt.td,U.option||(Wt.optgroup=Wt.option=[1,"<select multiple='multiple'>","</select>"]);function xt(e,t){var n;return typeof e.getElementsByTagName<"u"?n=e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?n=e.querySelectorAll(t||"*"):n=[],t===void 0||t&&Be(e,t)?i.merge([e],n):n}function kn(e,t){for(var n=0,u=e.length;n<u;n++)De.set(e[n],"globalEval",!t||De.get(t[n],"globalEval"))}var Nt=/<|&#?\w+;/;function Mt(e,t,n,u,c){for(var _,p,L,C,N,J,oe=t.createDocumentFragment(),j=[],me=0,Ke=e.length;me<Ke;me++)if(_=e[me],_||_===0)if(Ce(_)==="object")i.merge(j,_.nodeType?[_]:_);else if(!Nt.test(_))j.push(t.createTextNode(_));else{for(p=p||oe.appendChild(t.createElement("div")),L=(bn.exec(_)||["",""])[1].toLowerCase(),C=Wt[L]||Wt._default,p.innerHTML=C[1]+i.htmlPrefilter(_)+C[2],J=C[0];J--;)p=p.lastChild;i.merge(j,p.childNodes),p=oe.firstChild,p.textContent=""}for(oe.textContent="",me=0;_=j[me++];){if(u&&i.inArray(_,u)>-1){c&&c.push(_);continue}if(N=qt(_),p=xt(oe.appendChild(_),"script"),N&&kn(p),n)for(J=0;_=p[J++];)on.test(_.type||"")&&n.push(_)}return oe}var an=/^([^.]*)(?:\.(.+)|)/;function Gt(){return!0}function At(){return!1}function wt(e,t,n,u,c,_){var p,L;if(typeof t=="object"){typeof n!="string"&&(u=u||n,n=void 0);for(L in t)wt(e,L,n,u,t[L],_);return e}if(u==null&&c==null?(c=n,u=n=void 0):c==null&&(typeof n=="string"?(c=u,u=void 0):(c=u,u=n,n=void 0)),c===!1)c=At;else if(!c)return e;return _===1&&(p=c,c=function(C){return i().off(C),p.apply(this,arguments)},c.guid=p.guid||(p.guid=i.guid++)),e.each(function(){i.event.add(this,t,c,u,n)})}i.event={global:{},add:function(e,t,n,u,c){var _,p,L,C,N,J,oe,j,me,Ke,lt,et=De.get(e);if(tn(e))for(n.handler&&(_=n,n=_.handler,c=_.selector),c&&i.find.matchesSelector(nn,c),n.guid||(n.guid=i.guid++),(C=et.events)||(C=et.events=Object.create(null)),(p=et.handle)||(p=et.handle=function(zt){return typeof i<"u"&&i.event.triggered!==zt.type?i.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(de)||[""],N=t.length;N--;)L=an.exec(t[N])||[],me=lt=L[1],Ke=(L[2]||"").split(".").sort(),me&&(oe=i.event.special[me]||{},me=(c?oe.delegateType:oe.bindType)||me,oe=i.event.special[me]||{},J=i.extend({type:me,origType:lt,data:u,handler:n,guid:n.guid,selector:c,needsContext:c&&i.expr.match.needsContext.test(c),namespace:Ke.join(".")},_),(j=C[me])||(j=C[me]=[],j.delegateCount=0,(!oe.setup||oe.setup.call(e,u,Ke,p)===!1)&&e.addEventListener&&e.addEventListener(me,p)),oe.add&&(oe.add.call(e,J),J.handler.guid||(J.handler.guid=n.guid)),c?j.splice(j.delegateCount++,0,J):j.push(J),i.event.global[me]=!0)},remove:function(e,t,n,u,c){var _,p,L,C,N,J,oe,j,me,Ke,lt,et=De.hasData(e)&&De.get(e);if(!(!et||!(C=et.events))){for(t=(t||"").match(de)||[""],N=t.length;N--;){if(L=an.exec(t[N])||[],me=lt=L[1],Ke=(L[2]||"").split(".").sort(),!me){for(me in C)i.event.remove(e,me+t[N],n,u,!0);continue}for(oe=i.event.special[me]||{},me=(u?oe.delegateType:oe.bindType)||me,j=C[me]||[],L=L[2]&&new RegExp("(^|\\.)"+Ke.join("\\.(?:.*\\.|)")+"(\\.|$)"),p=_=j.length;_--;)J=j[_],(c||lt===J.origType)&&(!n||n.guid===J.guid)&&(!L||L.test(J.namespace))&&(!u||u===J.selector||u==="**"&&J.selector)&&(j.splice(_,1),J.selector&&j.delegateCount--,oe.remove&&oe.remove.call(e,J));p&&!j.length&&((!oe.teardown||oe.teardown.call(e,Ke,et.handle)===!1)&&i.removeEvent(e,me,et.handle),delete C[me])}i.isEmptyObject(C)&&De.remove(e,"handle events")}},dispatch:function(e){var t,n,u,c,_,p,L=new Array(arguments.length),C=i.event.fix(e),N=(De.get(this,"events")||Object.create(null))[C.type]||[],J=i.event.special[C.type]||{};for(L[0]=C,t=1;t<arguments.length;t++)L[t]=arguments[t];if(C.delegateTarget=this,!(J.preDispatch&&J.preDispatch.call(this,C)===!1)){for(p=i.event.handlers.call(this,C,N),t=0;(c=p[t++])&&!C.isPropagationStopped();)for(C.currentTarget=c.elem,n=0;(_=c.handlers[n++])&&!C.isImmediatePropagationStopped();)(!C.rnamespace||_.namespace===!1||C.rnamespace.test(_.namespace))&&(C.handleObj=_,C.data=_.data,u=((i.event.special[_.origType]||{}).handle||_.handler).apply(c.elem,L),u!==void 0&&(C.result=u)===!1&&(C.preventDefault(),C.stopPropagation()));return J.postDispatch&&J.postDispatch.call(this,C),C.result}},handlers:function(e,t){var n,u,c,_,p,L=[],C=t.delegateCount,N=e.target;if(C&&N.nodeType&&!(e.type==="click"&&e.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(e.type==="click"&&N.disabled===!0)){for(_=[],p={},n=0;n<C;n++)u=t[n],c=u.selector+" ",p[c]===void 0&&(p[c]=u.needsContext?i(c,this).index(N)>-1:i.find(c,this,null,[N]).length),p[c]&&_.push(u);_.length&&L.push({elem:N,handlers:_})}}return N=this,C<t.length&&L.push({elem:N,handlers:t.slice(C)}),L},addProp:function(e,t){Object.defineProperty(i.Event.prototype,e,{enumerable:!0,configurable:!0,get:te(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(n){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:n})}})},fix:function(e){return e[i.expando]?e:new i.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Ht.test(t.type)&&t.click&&Be(t,"input")&&gn(t,"click",!0),!1},trigger:function(e){var t=this||e;return Ht.test(t.type)&&t.click&&Be(t,"input")&&gn(t,"click"),!0},_default:function(e){var t=e.target;return Ht.test(t.type)&&t.click&&Be(t,"input")&&De.get(t,"click")||Be(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function gn(e,t,n){if(!n){De.get(e,t)===void 0&&i.event.add(e,t,Gt);return}De.set(e,t,!1),i.event.add(e,t,{namespace:!1,handler:function(u){var c,_=De.get(this,t);if(u.isTrigger&1&&this[t]){if(_)(i.event.special[t]||{}).delegateType&&u.stopPropagation();else if(_=y.call(arguments),De.set(this,t,_),this[t](),c=De.get(this,t),De.set(this,t,!1),_!==c)return u.stopImmediatePropagation(),u.preventDefault(),c}else _&&(De.set(this,t,i.event.trigger(_[0],_.slice(1),this)),u.stopPropagation(),u.isImmediatePropagationStopped=Gt)}})}i.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},i.Event=function(e,t){if(!(this instanceof i.Event))return new i.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Gt:At,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&i.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[i.expando]=!0},i.Event.prototype={constructor:i.Event,isDefaultPrevented:At,isPropagationStopped:At,isImmediatePropagationStopped:At,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Gt,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Gt,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Gt,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},i.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},i.event.addProp),i.each({focus:"focusin",blur:"focusout"},function(e,t){function n(u){if(O.documentMode){var c=De.get(this,"handle"),_=i.event.fix(u);_.type=u.type==="focusin"?"focus":"blur",_.isSimulated=!0,c(u),_.target===_.currentTarget&&c(_)}else i.event.simulate(t,u.target,i.event.fix(u))}i.event.special[e]={setup:function(){var u;if(gn(this,e,!0),O.documentMode)u=De.get(this,t),u||this.addEventListener(t,n),De.set(this,t,(u||0)+1);else return!1},trigger:function(){return gn(this,e),!0},teardown:function(){var u;if(O.documentMode)u=De.get(this,t)-1,u?De.set(this,t,u):(this.removeEventListener(t,n),De.remove(this,t));else return!1},_default:function(u){return De.get(u.target,e)},delegateType:t},i.event.special[t]={setup:function(){var u=this.ownerDocument||this.document||this,c=O.documentMode?this:u,_=De.get(c,t);_||(O.documentMode?this.addEventListener(t,n):u.addEventListener(e,n,!0)),De.set(c,t,(_||0)+1)},teardown:function(){var u=this.ownerDocument||this.document||this,c=O.documentMode?this:u,_=De.get(c,t)-1;_?De.set(c,t,_):(O.documentMode?this.removeEventListener(t,n):u.removeEventListener(e,n,!0),De.remove(c,t))}}}),i.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){i.event.special[e]={delegateType:t,bindType:t,handle:function(n){var u,c=this,_=n.relatedTarget,p=n.handleObj;return(!_||_!==c&&!i.contains(c,_))&&(n.type=p.origType,u=p.handler.apply(this,arguments),n.type=t),u}}}),i.fn.extend({on:function(e,t,n,u){return wt(this,e,t,n,u)},one:function(e,t,n,u){return wt(this,e,t,n,u,1)},off:function(e,t,n){var u,c;if(e&&e.preventDefault&&e.handleObj)return u=e.handleObj,i(e.delegateTarget).off(u.namespace?u.origType+"."+u.namespace:u.origType,u.selector,u.handler),this;if(typeof e=="object"){for(c in e)this.off(c,t,e[c]);return this}return(t===!1||typeof t=="function")&&(n=t,t=void 0),n===!1&&(n=At),this.each(function(){i.event.remove(this,e,n,t)})}});var yn=/<script|<style|<link/i,Wn=/checked\s*(?:[^=]|=\s*.checked.)/i,jn=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ln(e,t){return Be(e,"table")&&Be(t.nodeType!==11?t:t.firstChild,"tr")&&i(e).children("tbody")[0]||e}function w(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function Un(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ct(e,t){var n,u,c,_,p,L,C;if(t.nodeType===1){if(De.hasData(e)&&(_=De.get(e),C=_.events,C)){De.remove(t,"handle events");for(c in C)for(n=0,u=C[c].length;n<u;n++)i.event.add(t,c,C[c][n])}Ot.hasData(e)&&(p=Ot.access(e),L=i.extend({},p),Ot.set(t,L))}}function dt(e,t){var n=t.nodeName.toLowerCase();n==="input"&&Ht.test(e.type)?t.checked=e.checked:(n==="input"||n==="textarea")&&(t.defaultValue=e.defaultValue)}function vt(e,t,n,u){t=h(t);var c,_,p,L,C,N,J=0,oe=e.length,j=oe-1,me=t[0],Ke=te(me);if(Ke||oe>1&&typeof me=="string"&&!U.checkClone&&Wn.test(me))return e.each(function(lt){var et=e.eq(lt);Ke&&(t[0]=me.call(this,lt,et.html())),vt(et,t,n,u)});if(oe&&(c=Mt(t,e[0].ownerDocument,!1,e,u),_=c.firstChild,c.childNodes.length===1&&(c=_),_||u)){for(p=i.map(xt(c,"script"),w),L=p.length;J<oe;J++)C=c,J!==j&&(C=i.clone(C,!0,!0),L&&i.merge(p,xt(C,"script"))),n.call(e[J],C,J);if(L)for(N=p[p.length-1].ownerDocument,i.map(p,Un),J=0;J<L;J++)C=p[J],on.test(C.type||"")&&!De.access(C,"globalEval")&&i.contains(N,C)&&(C.src&&(C.type||"").toLowerCase()!=="module"?i._evalUrl&&!C.noModule&&i._evalUrl(C.src,{nonce:C.nonce||C.getAttribute("nonce")},N):Y(C.textContent.replace(jn,""),C,N))}return e}function Ft(e,t,n){for(var u,c=t?i.filter(t,e):e,_=0;(u=c[_])!=null;_++)!n&&u.nodeType===1&&i.cleanData(xt(u)),u.parentNode&&(n&&qt(u)&&kn(xt(u,"script")),u.parentNode.removeChild(u));return e}i.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var u,c,_,p,L=e.cloneNode(!0),C=qt(e);if(!U.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!i.isXMLDoc(e))for(p=xt(L),_=xt(e),u=0,c=_.length;u<c;u++)dt(_[u],p[u]);if(t)if(n)for(_=_||xt(e),p=p||xt(L),u=0,c=_.length;u<c;u++)Ct(_[u],p[u]);else Ct(e,L);return p=xt(L,"script"),p.length>0&&kn(p,!C&&xt(e,"script")),L},cleanData:function(e){for(var t,n,u,c=i.event.special,_=0;(n=e[_])!==void 0;_++)if(tn(n)){if(t=n[De.expando]){if(t.events)for(u in t.events)c[u]?i.event.remove(n,u):i.removeEvent(n,u,t.handle);n[De.expando]=void 0}n[Ot.expando]&&(n[Ot.expando]=void 0)}}}),i.fn.extend({detach:function(e){return Ft(this,e,!0)},remove:function(e){return Ft(this,e)},text:function(e){return Lt(this,function(t){return t===void 0?i.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=t)})},null,e,arguments.length)},append:function(){return vt(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Ln(this,e);t.appendChild(e)}})},prepend:function(){return vt(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Ln(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return vt(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return vt(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(i.cleanData(xt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return i.clone(this,e,t)})},html:function(e){return Lt(this,function(t){var n=this[0]||{},u=0,c=this.length;if(t===void 0&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!yn.test(t)&&!Wt[(bn.exec(t)||["",""])[1].toLowerCase()]){t=i.htmlPrefilter(t);try{for(;u<c;u++)n=this[u]||{},n.nodeType===1&&(i.cleanData(xt(n,!1)),n.innerHTML=t);n=0}catch{}}n&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return vt(this,arguments,function(t){var n=this.parentNode;i.inArray(this,e)<0&&(i.cleanData(xt(this)),n&&n.replaceChild(t,this))},e)}}),i.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){i.fn[e]=function(n){for(var u,c=[],_=i(n),p=_.length-1,L=0;L<=p;L++)u=L===p?this:this.clone(!0),i(_[L])[t](u),A.apply(c,u.get());return this.pushStack(c)}});var Qt=new RegExp("^("+An+")(?!px)[a-z%]+$","i"),bt=/^--/,sn=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=r),t.getComputedStyle(e)},Qe=function(e,t,n){var u,c,_={};for(c in t)_[c]=e.style[c],e.style[c]=t[c];u=n.call(e);for(c in t)e.style[c]=_[c];return u},we=new RegExp(St.join("|"),"i");(function(){function e(){if(N){C.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",nn.appendChild(C).appendChild(N);var J=r.getComputedStyle(N);n=J.top!=="1%",L=t(J.marginLeft)===12,N.style.right="60%",_=t(J.right)===36,u=t(J.width)===36,N.style.position="absolute",c=t(N.offsetWidth/3)===12,nn.removeChild(C),N=null}}function t(J){return Math.round(parseFloat(J))}var n,u,c,_,p,L,C=O.createElement("div"),N=O.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",U.clearCloneStyle=N.style.backgroundClip==="content-box",i.extend(U,{boxSizingReliable:function(){return e(),u},pixelBoxStyles:function(){return e(),_},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),L},scrollboxSize:function(){return e(),c},reliableTrDimensions:function(){var J,oe,j,me;return p==null&&(J=O.createElement("table"),oe=O.createElement("tr"),j=O.createElement("div"),J.style.cssText="position:absolute;left:-11111px;border-collapse:separate",oe.style.cssText="box-sizing:content-box;border:1px solid",oe.style.height="1px",j.style.height="9px",j.style.display="block",nn.appendChild(J).appendChild(oe).appendChild(j),me=r.getComputedStyle(oe),p=parseInt(me.height,10)+parseInt(me.borderTopWidth,10)+parseInt(me.borderBottomWidth,10)===oe.offsetHeight,nn.removeChild(J)),p}}))})();function wn(e,t,n){var u,c,_,p,L=bt.test(t),C=e.style;return n=n||sn(e),n&&(p=n.getPropertyValue(t)||n[t],L&&p&&(p=p.replace(Re,"$1")||void 0),p===""&&!qt(e)&&(p=i.style(e,t)),!U.pixelBoxStyles()&&Qt.test(p)&&we.test(t)&&(u=C.width,c=C.minWidth,_=C.maxWidth,C.minWidth=C.maxWidth=C.width=p,p=n.width,C.width=u,C.minWidth=c,C.maxWidth=_)),p!==void 0?p+"":p}function Vt(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var Nn=["Webkit","Moz","ms"],st=O.createElement("div").style,ln={};function Bn(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Nn.length;n--;)if(e=Nn[n]+t,e in st)return e}function Kt(e){var t=i.cssProps[e]||ln[e];return t||(e in st?e:ln[e]=Bn(e)||e)}var En=/^(none|table(?!-c[ea]).+)/,Jt={position:"absolute",visibility:"hidden",display:"block"},Bt={letterSpacing:"0",fontWeight:"400"};function On(e,t,n){var u=Dn.exec(t);return u?Math.max(0,u[2]-(n||0))+(u[3]||"px"):t}function Tn(e,t,n,u,c,_){var p=t==="width"?1:0,L=0,C=0,N=0;if(n===(u?"border":"content"))return 0;for(;p<4;p+=2)n==="margin"&&(N+=i.css(e,n+St[p],!0,c)),u?(n==="content"&&(C-=i.css(e,"padding"+St[p],!0,c)),n!=="margin"&&(C-=i.css(e,"border"+St[p]+"Width",!0,c))):(C+=i.css(e,"padding"+St[p],!0,c),n!=="padding"?C+=i.css(e,"border"+St[p]+"Width",!0,c):L+=i.css(e,"border"+St[p]+"Width",!0,c));return!u&&_>=0&&(C+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-_-C-L-.5))||0),C+N}function D(e,t,n){var u=sn(e),c=!U.boxSizingReliable()||n,_=c&&i.css(e,"boxSizing",!1,u)==="border-box",p=_,L=wn(e,t,u),C="offset"+t[0].toUpperCase()+t.slice(1);if(Qt.test(L)){if(!n)return L;L="auto"}return(!U.boxSizingReliable()&&_||!U.reliableTrDimensions()&&Be(e,"tr")||L==="auto"||!parseFloat(L)&&i.css(e,"display",!1,u)==="inline")&&e.getClientRects().length&&(_=i.css(e,"boxSizing",!1,u)==="border-box",p=C in e,p&&(L=e[C])),L=parseFloat(L)||0,L+Tn(e,t,n||(_?"border":"content"),p,u,L)+"px"}i.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=wn(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,u){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var c,_,p,L=Xe(t),C=bt.test(t),N=e.style;if(C||(t=Kt(L)),p=i.cssHooks[t]||i.cssHooks[L],n!==void 0){if(_=typeof n,_==="string"&&(c=Dn.exec(n))&&c[1]&&(n=Yt(e,t,c),_="number"),n==null||n!==n)return;_==="number"&&!C&&(n+=c&&c[3]||(i.cssNumber[L]?"":"px")),!U.clearCloneStyle&&n===""&&t.indexOf("background")===0&&(N[t]="inherit"),(!p||!("set"in p)||(n=p.set(e,n,u))!==void 0)&&(C?N.setProperty(t,n):N[t]=n)}else return p&&"get"in p&&(c=p.get(e,!1,u))!==void 0?c:N[t]}},css:function(e,t,n,u){var c,_,p,L=Xe(t),C=bt.test(t);return C||(t=Kt(L)),p=i.cssHooks[t]||i.cssHooks[L],p&&"get"in p&&(c=p.get(e,!0,n)),c===void 0&&(c=wn(e,t,u)),c==="normal"&&t in Bt&&(c=Bt[t]),n===""||n?(_=parseFloat(c),n===!0||isFinite(_)?_||0:c):c}}),i.each(["height","width"],function(e,t){i.cssHooks[t]={get:function(n,u,c){if(u)return En.test(i.css(n,"display"))&&(!n.getClientRects().length||!n.getBoundingClientRect().width)?Qe(n,Jt,function(){return D(n,t,c)}):D(n,t,c)},set:function(n,u,c){var _,p=sn(n),L=!U.scrollboxSize()&&p.position==="absolute",C=L||c,N=C&&i.css(n,"boxSizing",!1,p)==="border-box",J=c?Tn(n,t,c,N,p):0;return N&&L&&(J-=Math.ceil(n["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(p[t])-Tn(n,t,"border",!1,p)-.5)),J&&(_=Dn.exec(u))&&(_[3]||"px")!=="px"&&(n.style[t]=u,u=i.css(n,t)),On(n,u,J)}}}),i.cssHooks.marginLeft=Vt(U.reliableMarginLeft,function(e,t){if(t)return(parseFloat(wn(e,"marginLeft"))||e.getBoundingClientRect().left-Qe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),i.each({margin:"",padding:"",border:"Width"},function(e,t){i.cssHooks[e+t]={expand:function(n){for(var u=0,c={},_=typeof n=="string"?n.split(" "):[n];u<4;u++)c[e+St[u]+t]=_[u]||_[u-2]||_[0];return c}},e!=="margin"&&(i.cssHooks[e+t].set=On)}),i.fn.extend({css:function(e,t){return Lt(this,function(n,u,c){var _,p,L={},C=0;if(Array.isArray(u)){for(_=sn(n),p=u.length;C<p;C++)L[u[C]]=i.css(n,u[C],!1,_);return L}return c!==void 0?i.style(n,u,c):i.css(n,u)},e,t,arguments.length>1)}});function I(e,t,n,u,c){return new I.prototype.init(e,t,n,u,c)}i.Tween=I,I.prototype={constructor:I,init:function(e,t,n,u,c,_){this.elem=e,this.prop=n,this.easing=c||i.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=u,this.unit=_||(i.cssNumber[n]?"":"px")},cur:function(){var e=I.propHooks[this.prop];return e&&e.get?e.get(this):I.propHooks._default.get(this)},run:function(e){var t,n=I.propHooks[this.prop];return this.options.duration?this.pos=t=i.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):I.propHooks._default.set(this),this}},I.prototype.init.prototype=I.prototype,I.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=i.css(e.elem,e.prop,""),!t||t==="auto"?0:t)},set:function(e){i.fx.step[e.prop]?i.fx.step[e.prop](e):e.elem.nodeType===1&&(i.cssHooks[e.prop]||e.elem.style[Kt(e.prop)]!=null)?i.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},i.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},i.fx=I.prototype.init,i.fx.step={};var k,Q,be=/^(?:toggle|show|hide)$/,Fe=/queueHooks$/;function We(){Q&&(O.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(We):r.setTimeout(We,i.fx.interval),i.fx.tick())}function Ue(){return r.setTimeout(function(){k=void 0}),k=Date.now()}function Oe(e,t){var n,u=0,c={height:e};for(t=t?1:0;u<4;u+=2-t)n=St[u],c["margin"+n]=c["padding"+n]=e;return t&&(c.opacity=c.width=e),c}function qe(e,t,n){for(var u,c=(g.tweeners[t]||[]).concat(g.tweeners["*"]),_=0,p=c.length;_<p;_++)if(u=c[_].call(n,t,e))return u}function f(e,t,n){var u,c,_,p,L,C,N,J,oe="width"in t||"height"in t,j=this,me={},Ke=e.style,lt=e.nodeType&&pn(e),et=De.get(e,"fxshow");n.queue||(p=i._queueHooks(e,"fx"),p.unqueued==null&&(p.unqueued=0,L=p.empty.fire,p.empty.fire=function(){p.unqueued||L()}),p.unqueued++,j.always(function(){j.always(function(){p.unqueued--,i.queue(e,"fx").length||p.empty.fire()})}));for(u in t)if(c=t[u],be.test(c)){if(delete t[u],_=_||c==="toggle",c===(lt?"hide":"show"))if(c==="show"&&et&&et[u]!==void 0)lt=!0;else continue;me[u]=et&&et[u]||i.style(e,u)}if(C=!i.isEmptyObject(t),!(!C&&i.isEmptyObject(me))){oe&&e.nodeType===1&&(n.overflow=[Ke.overflow,Ke.overflowX,Ke.overflowY],N=et&&et.display,N==null&&(N=De.get(e,"display")),J=i.css(e,"display"),J==="none"&&(N?J=N:(kt([e],!0),N=e.style.display||N,J=i.css(e,"display"),kt([e]))),(J==="inline"||J==="inline-block"&&N!=null)&&i.css(e,"float")==="none"&&(C||(j.done(function(){Ke.display=N}),N==null&&(J=Ke.display,N=J==="none"?"":J)),Ke.display="inline-block")),n.overflow&&(Ke.overflow="hidden",j.always(function(){Ke.overflow=n.overflow[0],Ke.overflowX=n.overflow[1],Ke.overflowY=n.overflow[2]})),C=!1;for(u in me)C||(et?"hidden"in et&&(lt=et.hidden):et=De.access(e,"fxshow",{display:N}),_&&(et.hidden=!lt),lt&&kt([e],!0),j.done(function(){lt||kt([e]),De.remove(e,"fxshow");for(u in me)i.style(e,u,me[u])})),C=qe(lt?et[u]:0,u,j),u in et||(et[u]=C.start,lt&&(C.end=C.start,C.start=0))}}function d(e,t){var n,u,c,_,p;for(n in e)if(u=Xe(n),c=t[u],_=e[n],Array.isArray(_)&&(c=_[1],_=e[n]=_[0]),n!==u&&(e[u]=_,delete e[n]),p=i.cssHooks[u],p&&"expand"in p){_=p.expand(_),delete e[u];for(n in _)n in e||(e[n]=_[n],t[n]=c)}else t[u]=c}function g(e,t,n){var u,c,_=0,p=g.prefilters.length,L=i.Deferred().always(function(){delete C.elem}),C=function(){if(c)return!1;for(var oe=k||Ue(),j=Math.max(0,N.startTime+N.duration-oe),me=j/N.duration||0,Ke=1-me,lt=0,et=N.tweens.length;lt<et;lt++)N.tweens[lt].run(Ke);return L.notifyWith(e,[N,Ke,j]),Ke<1&&et?j:(et||L.notifyWith(e,[N,1,0]),L.resolveWith(e,[N]),!1)},N=L.promise({elem:e,props:i.extend({},t),opts:i.extend(!0,{specialEasing:{},easing:i.easing._default},n),originalProperties:t,originalOptions:n,startTime:k||Ue(),duration:n.duration,tweens:[],createTween:function(oe,j){var me=i.Tween(e,N.opts,oe,j,N.opts.specialEasing[oe]||N.opts.easing);return N.tweens.push(me),me},stop:function(oe){var j=0,me=oe?N.tweens.length:0;if(c)return this;for(c=!0;j<me;j++)N.tweens[j].run(1);return oe?(L.notifyWith(e,[N,1,0]),L.resolveWith(e,[N,oe])):L.rejectWith(e,[N,oe]),this}}),J=N.props;for(d(J,N.opts.specialEasing);_<p;_++)if(u=g.prefilters[_].call(N,e,J,N.opts),u)return te(u.stop)&&(i._queueHooks(N.elem,N.opts.queue).stop=u.stop.bind(u)),u;return i.map(J,qe,N),te(N.opts.start)&&N.opts.start.call(e,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),i.fx.timer(i.extend(C,{elem:e,anim:N,queue:N.opts.queue})),N}i.Animation=i.extend(g,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return Yt(n.elem,e,Dn.exec(t),n),n}]},tweener:function(e,t){te(e)?(t=e,e=["*"]):e=e.match(de);for(var n,u=0,c=e.length;u<c;u++)n=e[u],g.tweeners[n]=g.tweeners[n]||[],g.tweeners[n].unshift(t)},prefilters:[f],prefilter:function(e,t){t?g.prefilters.unshift(e):g.prefilters.push(e)}}),i.speed=function(e,t,n){var u=e&&typeof e=="object"?i.extend({},e):{complete:n||!n&&t||te(e)&&e,duration:e,easing:n&&t||t&&!te(t)&&t};return i.fx.off?u.duration=0:typeof u.duration!="number"&&(u.duration in i.fx.speeds?u.duration=i.fx.speeds[u.duration]:u.duration=i.fx.speeds._default),(u.queue==null||u.queue===!0)&&(u.queue="fx"),u.old=u.complete,u.complete=function(){te(u.old)&&u.old.call(this),u.queue&&i.dequeue(this,u.queue)},u},i.fn.extend({fadeTo:function(e,t,n,u){return this.filter(pn).css("opacity",0).show().end().animate({opacity:t},e,n,u)},animate:function(e,t,n,u){var c=i.isEmptyObject(e),_=i.speed(t,n,u),p=function(){var L=g(this,i.extend({},e),_);(c||De.get(this,"finish"))&&L.stop(!0)};return p.finish=p,c||_.queue===!1?this.each(p):this.queue(_.queue,p)},stop:function(e,t,n){var u=function(c){var _=c.stop;delete c.stop,_(n)};return typeof e!="string"&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var c=!0,_=e!=null&&e+"queueHooks",p=i.timers,L=De.get(this);if(_)L[_]&&L[_].stop&&u(L[_]);else for(_ in L)L[_]&&L[_].stop&&Fe.test(_)&&u(L[_]);for(_=p.length;_--;)p[_].elem===this&&(e==null||p[_].queue===e)&&(p[_].anim.stop(n),c=!1,p.splice(_,1));(c||!n)&&i.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=De.get(this),u=n[e+"queue"],c=n[e+"queueHooks"],_=i.timers,p=u?u.length:0;for(n.finish=!0,i.queue(this,e,[]),c&&c.stop&&c.stop.call(this,!0),t=_.length;t--;)_[t].elem===this&&_[t].queue===e&&(_[t].anim.stop(!0),_.splice(t,1));for(t=0;t<p;t++)u[t]&&u[t].finish&&u[t].finish.call(this);delete n.finish})}}),i.each(["toggle","show","hide"],function(e,t){var n=i.fn[t];i.fn[t]=function(u,c,_){return u==null||typeof u=="boolean"?n.apply(this,arguments):this.animate(Oe(t,!0),u,c,_)}}),i.each({slideDown:Oe("show"),slideUp:Oe("hide"),slideToggle:Oe("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){i.fn[e]=function(n,u,c){return this.animate(t,n,u,c)}}),i.timers=[],i.fx.tick=function(){var e,t=0,n=i.timers;for(k=Date.now();t<n.length;t++)e=n[t],!e()&&n[t]===e&&n.splice(t--,1);n.length||i.fx.stop(),k=void 0},i.fx.timer=function(e){i.timers.push(e),i.fx.start()},i.fx.interval=13,i.fx.start=function(){Q||(Q=!0,We())},i.fx.stop=function(){Q=null},i.fx.speeds={slow:600,fast:200,_default:400},i.fn.delay=function(e,t){return e=i.fx&&i.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(n,u){var c=r.setTimeout(n,e);u.stop=function(){r.clearTimeout(c)}})},function(){var e=O.createElement("input"),t=O.createElement("select"),n=t.appendChild(O.createElement("option"));e.type="checkbox",U.checkOn=e.value!=="",U.optSelected=n.selected,e=O.createElement("input"),e.value="t",e.type="radio",U.radioValue=e.value==="t"}();var x,T=i.expr.attrHandle;i.fn.extend({attr:function(e,t){return Lt(this,i.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){i.removeAttr(this,e)})}}),i.extend({attr:function(e,t,n){var u,c,_=e.nodeType;if(!(_===3||_===8||_===2)){if(typeof e.getAttribute>"u")return i.prop(e,t,n);if((_!==1||!i.isXMLDoc(e))&&(c=i.attrHooks[t.toLowerCase()]||(i.expr.match.bool.test(t)?x:void 0)),n!==void 0){if(n===null){i.removeAttr(e,t);return}return c&&"set"in c&&(u=c.set(e,n,t))!==void 0?u:(e.setAttribute(t,n+""),n)}return c&&"get"in c&&(u=c.get(e,t))!==null?u:(u=i.find.attr(e,t),u??void 0)}},attrHooks:{type:{set:function(e,t){if(!U.radioValue&&t==="radio"&&Be(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,u=0,c=t&&t.match(de);if(c&&e.nodeType===1)for(;n=c[u++];)e.removeAttribute(n)}}),x={set:function(e,t,n){return t===!1?i.removeAttr(e,n):e.setAttribute(n,n),n}},i.each(i.expr.match.bool.source.match(/\w+/g),function(e,t){var n=T[t]||i.find.attr;T[t]=function(u,c,_){var p,L,C=c.toLowerCase();return _||(L=T[C],T[C]=p,p=n(u,c,_)!=null?C:null,T[C]=L),p}});var z=/^(?:input|select|textarea|button)$/i,K=/^(?:a|area)$/i;i.fn.extend({prop:function(e,t){return Lt(this,i.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[i.propFix[e]||e]})}}),i.extend({prop:function(e,t,n){var u,c,_=e.nodeType;if(!(_===3||_===8||_===2))return(_!==1||!i.isXMLDoc(e))&&(t=i.propFix[t]||t,c=i.propHooks[t]),n!==void 0?c&&"set"in c&&(u=c.set(e,n,t))!==void 0?u:e[t]=n:c&&"get"in c&&(u=c.get(e,t))!==null?u:e[t]},propHooks:{tabIndex:{get:function(e){var t=i.find.attr(e,"tabindex");return t?parseInt(t,10):z.test(e.nodeName)||K.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),U.optSelected||(i.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),i.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){i.propFix[this.toLowerCase()]=this});function Z(e){var t=e.match(de)||[];return t.join(" ")}function se(e){return e.getAttribute&&e.getAttribute("class")||""}function ie(e){return Array.isArray(e)?e:typeof e=="string"?e.match(de)||[]:[]}i.fn.extend({addClass:function(e){var t,n,u,c,_,p;return te(e)?this.each(function(L){i(this).addClass(e.call(this,L,se(this)))}):(t=ie(e),t.length?this.each(function(){if(u=se(this),n=this.nodeType===1&&" "+Z(u)+" ",n){for(_=0;_<t.length;_++)c=t[_],n.indexOf(" "+c+" ")<0&&(n+=c+" ");p=Z(n),u!==p&&this.setAttribute("class",p)}}):this)},removeClass:function(e){var t,n,u,c,_,p;return te(e)?this.each(function(L){i(this).removeClass(e.call(this,L,se(this)))}):arguments.length?(t=ie(e),t.length?this.each(function(){if(u=se(this),n=this.nodeType===1&&" "+Z(u)+" ",n){for(_=0;_<t.length;_++)for(c=t[_];n.indexOf(" "+c+" ")>-1;)n=n.replace(" "+c+" "," ");p=Z(n),u!==p&&this.setAttribute("class",p)}}):this):this.attr("class","")},toggleClass:function(e,t){var n,u,c,_,p=typeof e,L=p==="string"||Array.isArray(e);return te(e)?this.each(function(C){i(this).toggleClass(e.call(this,C,se(this),t),t)}):typeof t=="boolean"&&L?t?this.addClass(e):this.removeClass(e):(n=ie(e),this.each(function(){if(L)for(_=i(this),c=0;c<n.length;c++)u=n[c],_.hasClass(u)?_.removeClass(u):_.addClass(u);else(e===void 0||p==="boolean")&&(u=se(this),u&&De.set(this,"__className__",u),this.setAttribute&&this.setAttribute("class",u||e===!1?"":De.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,u=0;for(t=" "+e+" ";n=this[u++];)if(n.nodeType===1&&(" "+Z(se(n))+" ").indexOf(t)>-1)return!0;return!1}});var fe=/\r/g;i.fn.extend({val:function(e){var t,n,u,c=this[0];return arguments.length?(u=te(e),this.each(function(_){var p;this.nodeType===1&&(u?p=e.call(this,_,i(this).val()):p=e,p==null?p="":typeof p=="number"?p+="":Array.isArray(p)&&(p=i.map(p,function(L){return L==null?"":L+""})),t=i.valHooks[this.type]||i.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||t.set(this,p,"value")===void 0)&&(this.value=p))})):c?(t=i.valHooks[c.type]||i.valHooks[c.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(c,"value"))!==void 0?n:(n=c.value,typeof n=="string"?n.replace(fe,""):n??"")):void 0}}),i.extend({valHooks:{option:{get:function(e){var t=i.find.attr(e,"value");return t??Z(i.text(e))}},select:{get:function(e){var t,n,u,c=e.options,_=e.selectedIndex,p=e.type==="select-one",L=p?null:[],C=p?_+1:c.length;for(_<0?u=C:u=p?_:0;u<C;u++)if(n=c[u],(n.selected||u===_)&&!n.disabled&&(!n.parentNode.disabled||!Be(n.parentNode,"optgroup"))){if(t=i(n).val(),p)return t;L.push(t)}return L},set:function(e,t){for(var n,u,c=e.options,_=i.makeArray(t),p=c.length;p--;)u=c[p],(u.selected=i.inArray(i.valHooks.option.get(u),_)>-1)&&(n=!0);return n||(e.selectedIndex=-1),_}}}}),i.each(["radio","checkbox"],function(){i.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=i.inArray(i(e).val(),t)>-1}},U.checkOn||(i.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var le=r.location,ke={guid:Date.now()},Me=/\?/;i.parseXML=function(e){var t,n;if(!e||typeof e!="string")return null;try{t=new r.DOMParser().parseFromString(e,"text/xml")}catch{}return n=t&&t.getElementsByTagName("parsererror")[0],(!t||n)&&i.error("Invalid XML: "+(n?i.map(n.childNodes,function(u){return u.textContent}).join(`
`):e)),t};var ee=/^(?:focusinfocus|focusoutblur)$/,Le=function(e){e.stopPropagation()};i.extend(i.event,{trigger:function(e,t,n,u){var c,_,p,L,C,N,J,oe,j=[n||O],me=ae.call(e,"type")?e.type:e,Ke=ae.call(e,"namespace")?e.namespace.split("."):[];if(_=oe=p=n=n||O,!(n.nodeType===3||n.nodeType===8)&&!ee.test(me+i.event.triggered)&&(me.indexOf(".")>-1&&(Ke=me.split("."),me=Ke.shift(),Ke.sort()),C=me.indexOf(":")<0&&"on"+me,e=e[i.expando]?e:new i.Event(me,typeof e=="object"&&e),e.isTrigger=u?2:3,e.namespace=Ke.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+Ke.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=t==null?[e]:i.makeArray(t,[e]),J=i.event.special[me]||{},!(!u&&J.trigger&&J.trigger.apply(n,t)===!1))){if(!u&&!J.noBubble&&!ye(n)){for(L=J.delegateType||me,ee.test(L+me)||(_=_.parentNode);_;_=_.parentNode)j.push(_),p=_;p===(n.ownerDocument||O)&&j.push(p.defaultView||p.parentWindow||r)}for(c=0;(_=j[c++])&&!e.isPropagationStopped();)oe=_,e.type=c>1?L:J.bindType||me,N=(De.get(_,"events")||Object.create(null))[e.type]&&De.get(_,"handle"),N&&N.apply(_,t),N=C&&_[C],N&&N.apply&&tn(_)&&(e.result=N.apply(_,t),e.result===!1&&e.preventDefault());return e.type=me,!u&&!e.isDefaultPrevented()&&(!J._default||J._default.apply(j.pop(),t)===!1)&&tn(n)&&C&&te(n[me])&&!ye(n)&&(p=n[C],p&&(n[C]=null),i.event.triggered=me,e.isPropagationStopped()&&oe.addEventListener(me,Le),n[me](),e.isPropagationStopped()&&oe.removeEventListener(me,Le),i.event.triggered=void 0,p&&(n[C]=p)),e.result}},simulate:function(e,t,n){var u=i.extend(new i.Event,n,{type:e,isSimulated:!0});i.event.trigger(u,null,t)}}),i.fn.extend({trigger:function(e,t){return this.each(function(){i.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return i.event.trigger(e,t,n,!0)}});var ge=/\[\]$/,xe=/\r?\n/g,Ae=/^(?:submit|button|image|reset|file)$/i,ft=/^(?:input|select|textarea|keygen)/i;function ht(e,t,n,u){var c;if(Array.isArray(t))i.each(t,function(_,p){n||ge.test(e)?u(e,p):ht(e+"["+(typeof p=="object"&&p!=null?_:"")+"]",p,n,u)});else if(!n&&Ce(t)==="object")for(c in t)ht(e+"["+c+"]",t[c],n,u);else u(e,t)}i.param=function(e,t){var n,u=[],c=function(_,p){var L=te(p)?p():p;u[u.length]=encodeURIComponent(_)+"="+encodeURIComponent(L??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!i.isPlainObject(e))i.each(e,function(){c(this.name,this.value)});else for(n in e)ht(n,e[n],t,c);return u.join("&")},i.fn.extend({serialize:function(){return i.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=i.prop(this,"elements");return e?i.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!i(this).is(":disabled")&&ft.test(this.nodeName)&&!Ae.test(e)&&(this.checked||!Ht.test(e))}).map(function(e,t){var n=i(this).val();return n==null?null:Array.isArray(n)?i.map(n,function(u){return{name:t.name,value:u.replace(xe,`\r
`)}}):{name:t.name,value:n.replace(xe,`\r
`)}}).get()}});var tt=/%20/g,Zt=/#.*$/,xn=/([?&])_=[^&]*/,qn=/^(.*?):[ \t]*([^\r\n]*)$/mg,Yn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Qn=/^(?:GET|HEAD)$/,Zn=/^\/\//,rr={},zn={},er="*/".concat("*"),ir=O.createElement("a");ir.href=le.href;function cr(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var u,c=0,_=t.toLowerCase().match(de)||[];if(te(n))for(;u=_[c++];)u[0]==="+"?(u=u.slice(1)||"*",(e[u]=e[u]||[]).unshift(n)):(e[u]=e[u]||[]).push(n)}}function Ar(e,t,n,u){var c={},_=e===zn;function p(L){var C;return c[L]=!0,i.each(e[L]||[],function(N,J){var oe=J(t,n,u);if(typeof oe=="string"&&!_&&!c[oe])return t.dataTypes.unshift(oe),p(oe),!1;if(_)return!(C=oe)}),C}return p(t.dataTypes[0])||!c["*"]&&p("*")}function mr(e,t){var n,u,c=i.ajaxSettings.flatOptions||{};for(n in t)t[n]!==void 0&&((c[n]?e:u||(u={}))[n]=t[n]);return u&&i.extend(!0,e,u),e}function Ir(e,t,n){for(var u,c,_,p,L=e.contents,C=e.dataTypes;C[0]==="*";)C.shift(),u===void 0&&(u=e.mimeType||t.getResponseHeader("Content-Type"));if(u){for(c in L)if(L[c]&&L[c].test(u)){C.unshift(c);break}}if(C[0]in n)_=C[0];else{for(c in n){if(!C[0]||e.converters[c+" "+C[0]]){_=c;break}p||(p=c)}_=_||p}if(_)return _!==C[0]&&C.unshift(_),n[_]}function Rr(e,t,n,u){var c,_,p,L,C,N={},J=e.dataTypes.slice();if(J[1])for(p in e.converters)N[p.toLowerCase()]=e.converters[p];for(_=J.shift();_;)if(e.responseFields[_]&&(n[e.responseFields[_]]=t),!C&&u&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),C=_,_=J.shift(),_){if(_==="*")_=C;else if(C!=="*"&&C!==_){if(p=N[C+" "+_]||N["* "+_],!p){for(c in N)if(L=c.split(" "),L[1]===_&&(p=N[C+" "+L[0]]||N["* "+L[0]],p)){p===!0?p=N[c]:N[c]!==!0&&(_=L[0],J.unshift(L[1]));break}}if(p!==!0)if(p&&e.throws)t=p(t);else try{t=p(t)}catch(oe){return{state:"parsererror",error:p?oe:"No conversion from "+C+" to "+_}}}}return{state:"success",data:t}}i.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:le.href,type:"GET",isLocal:Yn.test(le.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":er,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":i.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?mr(mr(e,i.ajaxSettings),t):mr(i.ajaxSettings,e)},ajaxPrefilter:cr(rr),ajaxTransport:cr(zn),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var n,u,c,_,p,L,C,N,J,oe,j=i.ajaxSetup({},t),me=j.context||j,Ke=j.context&&(me.nodeType||me.jquery)?i(me):i.event,lt=i.Deferred(),et=i.Callbacks("once memory"),zt=j.statusCode||{},Pt={},Fn={},In="canceled",ot={readyState:0,getResponseHeader:function(ct){var It;if(C){if(!_)for(_={};It=qn.exec(c);)_[It[1].toLowerCase()+" "]=(_[It[1].toLowerCase()+" "]||[]).concat(It[2]);It=_[ct.toLowerCase()+" "]}return It==null?null:It.join(", ")},getAllResponseHeaders:function(){return C?c:null},setRequestHeader:function(ct,It){return C==null&&(ct=Fn[ct.toLowerCase()]=Fn[ct.toLowerCase()]||ct,Pt[ct]=It),this},overrideMimeType:function(ct){return C==null&&(j.mimeType=ct),this},statusCode:function(ct){var It;if(ct)if(C)ot.always(ct[ot.status]);else for(It in ct)zt[It]=[zt[It],ct[It]];return this},abort:function(ct){var It=ct||In;return n&&n.abort(It),tr(0,It),this}};if(lt.promise(ot),j.url=((e||j.url||le.href)+"").replace(Zn,le.protocol+"//"),j.type=t.method||t.type||j.method||j.type,j.dataTypes=(j.dataType||"*").toLowerCase().match(de)||[""],j.crossDomain==null){L=O.createElement("a");try{L.href=j.url,L.href=L.href,j.crossDomain=ir.protocol+"//"+ir.host!=L.protocol+"//"+L.host}catch{j.crossDomain=!0}}if(j.data&&j.processData&&typeof j.data!="string"&&(j.data=i.param(j.data,j.traditional)),Ar(rr,j,t,ot),C)return ot;N=i.event&&j.global,N&&i.active++===0&&i.event.trigger("ajaxStart"),j.type=j.type.toUpperCase(),j.hasContent=!Qn.test(j.type),u=j.url.replace(Zt,""),j.hasContent?j.data&&j.processData&&(j.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(j.data=j.data.replace(tt,"+")):(oe=j.url.slice(u.length),j.data&&(j.processData||typeof j.data=="string")&&(u+=(Me.test(u)?"&":"?")+j.data,delete j.data),j.cache===!1&&(u=u.replace(xn,"$1"),oe=(Me.test(u)?"&":"?")+"_="+ke.guid+++oe),j.url=u+oe),j.ifModified&&(i.lastModified[u]&&ot.setRequestHeader("If-Modified-Since",i.lastModified[u]),i.etag[u]&&ot.setRequestHeader("If-None-Match",i.etag[u])),(j.data&&j.hasContent&&j.contentType!==!1||t.contentType)&&ot.setRequestHeader("Content-Type",j.contentType),ot.setRequestHeader("Accept",j.dataTypes[0]&&j.accepts[j.dataTypes[0]]?j.accepts[j.dataTypes[0]]+(j.dataTypes[0]!=="*"?", "+er+"; q=0.01":""):j.accepts["*"]);for(J in j.headers)ot.setRequestHeader(J,j.headers[J]);if(j.beforeSend&&(j.beforeSend.call(me,ot,j)===!1||C))return ot.abort();if(In="abort",et.add(j.complete),ot.done(j.success),ot.fail(j.error),n=Ar(zn,j,t,ot),!n)tr(-1,"No Transport");else{if(ot.readyState=1,N&&Ke.trigger("ajaxSend",[ot,j]),C)return ot;j.async&&j.timeout>0&&(p=r.setTimeout(function(){ot.abort("timeout")},j.timeout));try{C=!1,n.send(Pt,tr)}catch(ct){if(C)throw ct;tr(-1,ct)}}function tr(ct,It,sr,vr){var Rn,fr,$n,Gn,Vn,hn=It;C||(C=!0,p&&r.clearTimeout(p),n=void 0,c=vr||"",ot.readyState=ct>0?4:0,Rn=ct>=200&&ct<300||ct===304,sr&&(Gn=Ir(j,ot,sr)),!Rn&&i.inArray("script",j.dataTypes)>-1&&i.inArray("json",j.dataTypes)<0&&(j.converters["text script"]=function(){}),Gn=Rr(j,Gn,ot,Rn),Rn?(j.ifModified&&(Vn=ot.getResponseHeader("Last-Modified"),Vn&&(i.lastModified[u]=Vn),Vn=ot.getResponseHeader("etag"),Vn&&(i.etag[u]=Vn)),ct===204||j.type==="HEAD"?hn="nocontent":ct===304?hn="notmodified":(hn=Gn.state,fr=Gn.data,$n=Gn.error,Rn=!$n)):($n=hn,(ct||!hn)&&(hn="error",ct<0&&(ct=0))),ot.status=ct,ot.statusText=(It||hn)+"",Rn?lt.resolveWith(me,[fr,hn,ot]):lt.rejectWith(me,[ot,hn,$n]),ot.statusCode(zt),zt=void 0,N&&Ke.trigger(Rn?"ajaxSuccess":"ajaxError",[ot,j,Rn?fr:$n]),et.fireWith(me,[ot,hn]),N&&(Ke.trigger("ajaxComplete",[ot,j]),--i.active||i.event.trigger("ajaxStop")))}return ot},getJSON:function(e,t,n){return i.get(e,t,n,"json")},getScript:function(e,t){return i.get(e,void 0,t,"script")}}),i.each(["get","post"],function(e,t){i[t]=function(n,u,c,_){return te(u)&&(_=_||c,c=u,u=void 0),i.ajax(i.extend({url:n,type:t,dataType:_,data:u,success:c},i.isPlainObject(n)&&n))}}),i.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),i._evalUrl=function(e,t,n){return i.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(u){i.globalEval(u,t,n)}})},i.fn.extend({wrapAll:function(e){var t;return this[0]&&(te(e)&&(e=e.call(this[0])),t=i(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(e){return te(e)?this.each(function(t){i(this).wrapInner(e.call(this,t))}):this.each(function(){var t=i(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=te(e);return this.each(function(n){i(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){i(this).replaceWith(this.childNodes)}),this}}),i.expr.pseudos.hidden=function(e){return!i.expr.pseudos.visible(e)},i.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},i.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var $r={0:200,1223:204},ar=i.ajaxSettings.xhr();U.cors=!!ar&&"withCredentials"in ar,U.ajax=ar=!!ar,i.ajaxTransport(function(e){var t,n;if(U.cors||ar&&!e.crossDomain)return{send:function(u,c){var _,p=e.xhr();if(p.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(_ in e.xhrFields)p[_]=e.xhrFields[_];e.mimeType&&p.overrideMimeType&&p.overrideMimeType(e.mimeType),!e.crossDomain&&!u["X-Requested-With"]&&(u["X-Requested-With"]="XMLHttpRequest");for(_ in u)p.setRequestHeader(_,u[_]);t=function(L){return function(){t&&(t=n=p.onload=p.onerror=p.onabort=p.ontimeout=p.onreadystatechange=null,L==="abort"?p.abort():L==="error"?typeof p.status!="number"?c(0,"error"):c(p.status,p.statusText):c($r[p.status]||p.status,p.statusText,(p.responseType||"text")!=="text"||typeof p.responseText!="string"?{binary:p.response}:{text:p.responseText},p.getAllResponseHeaders()))}},p.onload=t(),n=p.onerror=p.ontimeout=t("error"),p.onabort!==void 0?p.onabort=n:p.onreadystatechange=function(){p.readyState===4&&r.setTimeout(function(){t&&n()})},t=t("abort");try{p.send(e.hasContent&&e.data||null)}catch(L){if(t)throw L}},abort:function(){t&&t()}}}),i.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),i.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return i.globalEval(e),e}}}),i.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),i.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(u,c){t=i("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(_){t.remove(),n=null,_&&c(_.type==="error"?404:200,_.type)}),O.head.appendChild(t[0])},abort:function(){n&&n()}}}});var br=[],Dr=/(=)\?(?=&|$)|\?\?/;i.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=br.pop()||i.expando+"_"+ke.guid++;return this[e]=!0,e}}),i.ajaxPrefilter("json jsonp",function(e,t,n){var u,c,_,p=e.jsonp!==!1&&(Dr.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Dr.test(e.data)&&"data");if(p||e.dataTypes[0]==="jsonp")return u=e.jsonpCallback=te(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,p?e[p]=e[p].replace(Dr,"$1"+u):e.jsonp!==!1&&(e.url+=(Me.test(e.url)?"&":"?")+e.jsonp+"="+u),e.converters["script json"]=function(){return _||i.error(u+" was not called"),_[0]},e.dataTypes[0]="json",c=r[u],r[u]=function(){_=arguments},n.always(function(){c===void 0?i(r).removeProp(u):r[u]=c,e[u]&&(e.jsonpCallback=t.jsonpCallback,br.push(u)),_&&te(c)&&c(_[0]),_=c=void 0}),"script"}),U.createHTMLDocument=function(){var e=O.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),i.parseHTML=function(e,t,n){if(typeof e!="string")return[];typeof t=="boolean"&&(n=t,t=!1);var u,c,_;return t||(U.createHTMLDocument?(t=O.implementation.createHTMLDocument(""),u=t.createElement("base"),u.href=O.location.href,t.head.appendChild(u)):t=O),c=gt.exec(e),_=!n&&[],c?[t.createElement(c[1])]:(c=Mt([e],t,_),_&&_.length&&i(_).remove(),i.merge([],c.childNodes))},i.fn.load=function(e,t,n){var u,c,_,p=this,L=e.indexOf(" ");return L>-1&&(u=Z(e.slice(L)),e=e.slice(0,L)),te(t)?(n=t,t=void 0):t&&typeof t=="object"&&(c="POST"),p.length>0&&i.ajax({url:e,type:c||"GET",dataType:"html",data:t}).done(function(C){_=arguments,p.html(u?i("<div>").append(i.parseHTML(C)).find(u):C)}).always(n&&function(C,N){p.each(function(){n.apply(this,_||[C.responseText,N,C])})}),this},i.expr.pseudos.animated=function(e){return i.grep(i.timers,function(t){return e===t.elem}).length},i.offset={setOffset:function(e,t,n){var u,c,_,p,L,C,N,J=i.css(e,"position"),oe=i(e),j={};J==="static"&&(e.style.position="relative"),L=oe.offset(),_=i.css(e,"top"),C=i.css(e,"left"),N=(J==="absolute"||J==="fixed")&&(_+C).indexOf("auto")>-1,N?(u=oe.position(),p=u.top,c=u.left):(p=parseFloat(_)||0,c=parseFloat(C)||0),te(t)&&(t=t.call(e,n,i.extend({},L))),t.top!=null&&(j.top=t.top-L.top+p),t.left!=null&&(j.left=t.left-L.left+c),"using"in t?t.using.call(e,j):oe.css(j)}},i.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(c){i.offset.setOffset(this,e,c)});var t,n,u=this[0];if(u)return u.getClientRects().length?(t=u.getBoundingClientRect(),n=u.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,u=this[0],c={top:0,left:0};if(i.css(u,"position")==="fixed")t=u.getBoundingClientRect();else{for(t=this.offset(),n=u.ownerDocument,e=u.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&i.css(e,"position")==="static";)e=e.parentNode;e&&e!==u&&e.nodeType===1&&(c=i(e).offset(),c.top+=i.css(e,"borderTopWidth",!0),c.left+=i.css(e,"borderLeftWidth",!0))}return{top:t.top-c.top-i.css(u,"marginTop",!0),left:t.left-c.left-i.css(u,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&i.css(e,"position")==="static";)e=e.offsetParent;return e||nn})}}),i.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=t==="pageYOffset";i.fn[e]=function(u){return Lt(this,function(c,_,p){var L;if(ye(c)?L=c:c.nodeType===9&&(L=c.defaultView),p===void 0)return L?L[t]:c[_];L?L.scrollTo(n?L.pageXOffset:p,n?p:L.pageYOffset):c[_]=p},e,u,arguments.length)}}),i.each(["top","left"],function(e,t){i.cssHooks[t]=Vt(U.pixelPosition,function(n,u){if(u)return u=wn(n,t),Qt.test(u)?i(n).position()[t]+"px":u})}),i.each({Height:"height",Width:"width"},function(e,t){i.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,u){i.fn[u]=function(c,_){var p=arguments.length&&(n||typeof c!="boolean"),L=n||(c===!0||_===!0?"margin":"border");return Lt(this,function(C,N,J){var oe;return ye(C)?u.indexOf("outer")===0?C["inner"+e]:C.document.documentElement["client"+e]:C.nodeType===9?(oe=C.documentElement,Math.max(C.body["scroll"+e],oe["scroll"+e],C.body["offset"+e],oe["offset"+e],oe["client"+e])):J===void 0?i.css(C,N,L):i.style(C,N,J,L)},t,p?c:void 0,p)}})}),i.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){i.fn[t]=function(n){return this.on(t,n)}}),i.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,u){return this.on(t,e,n,u)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){i.fn[t]=function(n,u){return arguments.length>0?this.on(t,null,n,u):this.trigger(t)}});var Sr=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;i.proxy=function(e,t){var n,u,c;if(typeof t=="string"&&(n=e[t],t=e,e=n),!!te(e))return u=y.call(arguments,2),c=function(){return e.apply(t||this,u.concat(y.call(arguments)))},c.guid=e.guid=e.guid||i.guid++,c},i.holdReady=function(e){e?i.readyWait++:i.ready(!0)},i.isArray=Array.isArray,i.parseJSON=JSON.parse,i.nodeName=Be,i.isFunction=te,i.isWindow=ye,i.camelCase=Xe,i.type=Ce,i.now=Date.now,i.isNumeric=function(e){var t=i.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},i.trim=function(e){return e==null?"":(e+"").replace(Sr,"$1")};var kr=r.jQuery,Nr=r.$;return i.noConflict=function(e){return r.$===i&&(r.$=Nr),e&&r.jQuery===i&&(r.jQuery=kr),i},typeof l>"u"&&(r.jQuery=r.$=i),i})})(jquery);var jqueryExports=jquery.exports;const $=getDefaultExportFromCjs(jqueryExports);var jquery_terminal={exports:{}},wcwidth={exports:{}},clone={exports:{}},hasRequiredClone;function requireClone(){return hasRequiredClone||(hasRequiredClone=1,function(o){var r=function(){function l(F,S,W,ae){typeof S=="object"&&(W=S.depth,ae=S.prototype,S.filter,S=S.circular);var pe=[],_e=[],U=typeof Buffer<"u";typeof S>"u"&&(S=!0),typeof W>"u"&&(W=1/0);function te(ye,O){if(ye===null)return null;if(O==0)return ye;var B,Y;if(typeof ye!="object")return ye;if(l.__isArray(ye))B=[];else if(l.__isRegExp(ye))B=new RegExp(ye.source,A(ye)),ye.lastIndex&&(B.lastIndex=ye.lastIndex);else if(l.__isDate(ye))B=new Date(ye.getTime());else{if(U&&Buffer.isBuffer(ye))return Buffer.allocUnsafe?B=Buffer.allocUnsafe(ye.length):B=new Buffer(ye.length),ye.copy(B),B;typeof ae>"u"?(Y=Object.getPrototypeOf(ye),B=Object.create(Y)):(B=Object.create(ae),Y=ae)}if(S){var Ce=pe.indexOf(ye);if(Ce!=-1)return _e[Ce];pe.push(ye),_e.push(B)}for(var V in ye){var ze;Y&&(ze=Object.getOwnPropertyDescriptor(Y,V)),!(ze&&ze.set==null)&&(B[V]=te(ye[V],O-1))}return B}return te(F,W)}l.clonePrototype=function(S){if(S===null)return null;var W=function(){};return W.prototype=S,new W};function s(F){return Object.prototype.toString.call(F)}l.__objToStr=s;function v(F){return typeof F=="object"&&s(F)==="[object Date]"}l.__isDate=v;function y(F){return typeof F=="object"&&s(F)==="[object Array]"}l.__isArray=y;function h(F){return typeof F=="object"&&s(F)==="[object RegExp]"}l.__isRegExp=h;function A(F){var S="";return F.global&&(S+="g"),F.ignoreCase&&(S+="i"),F.multiline&&(S+="m"),S}return l.__getRegExpFlags=A,l}();o.exports&&(o.exports=r)}(clone)),clone.exports}var defaults,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults;hasRequiredDefaults=1;var o=requireClone();return defaults=function(r,l){return r=r||{},Object.keys(l).forEach(function(s){typeof r[s]>"u"&&(r[s]=o(l[s]))}),r},defaults}var combining,hasRequiredCombining;function requireCombining(){return hasRequiredCombining||(hasRequiredCombining=1,combining=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531],[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]]),combining}var hasRequiredWcwidth;function requireWcwidth(){if(hasRequiredWcwidth)return wcwidth.exports;hasRequiredWcwidth=1;var o=requireDefaults(),r=requireCombining(),l={nul:0,control:0};wcwidth.exports=function(A){return s(A,l)},wcwidth.exports.config=function(h){return h=o(h||{},l),function(F){return s(F,h)}};function s(h,A){if(typeof h!="string")return v(h,A);for(var F=0,S=0;S<h.length;S++){var W=v(h.charCodeAt(S),A);if(W<0)return-1;F+=W}return F}function v(h,A){return h===0?A.nul:h<32||h>=127&&h<160?A.control:y(h)?0:1+(h>=4352&&(h<=4447||h==9001||h==9002||h>=11904&&h<=42191&&h!=12351||h>=44032&&h<=55203||h>=63744&&h<=64255||h>=65040&&h<=65049||h>=65072&&h<=65135||h>=65280&&h<=65376||h>=65504&&h<=65510||h>=131072&&h<=196605||h>=196608&&h<=262141))}function y(h){var A=0,F=r.length-1,S;if(h<r[0][0]||h>r[F][1])return!1;for(;F>=A;)if(S=Math.floor((A+F)/2),h>r[S][1])A=S+1;else if(h<r[S][0])F=S-1;else return!0;return!1}return wcwidth.exports}/**@license
 *       __ _____                     ________                              __
 *      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 * /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 * \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *           \/              /____/                              version 2.41.1
 *
 * This file is part of jQuery Terminal. https://terminal.jcubic.pl
 *
 * Copyright (c) 2010-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under the MIT license
 *
 * Contains:
 *
 * Storage plugin Distributed under the MIT License
 * modified to work from Data URIs that block storage and cookies in Chrome
 * Copyright (c) 2010 Dave Schindler
 *
 * jQuery Timers licenced with the WTFPL
 * <http://jquery.offput.ca/timers/>
 *
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 *
 * jQuery Caret
 * Copyright (c) 2009, Gideon Sireling
 * 3 clause BSD License
 *
 * sprintf.js
 * Copyright (c) 2007-2013 Alexandru Marasteanu <hello at alexei dot ro>
 * licensed under 3 clause BSD license
 *
 * debounce function from Lodash
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * The MIT License
 *
 * emoji regex v9.0.0 by Mathias Bynens
 * MIT license
 *
 * broken image by Sophia Bai from the Noun Project (CC-BY)
 *
 * Date: Mon, 29 Apr 2024 16:20:55 +0000
 */var hasRequiredJquery_terminal;function requireJquery_terminal(){return hasRequiredJquery_terminal||(hasRequiredJquery_terminal=1,function(module){(function(o){var r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};r.format=function(y,h){var A=1,F=y.length,S="",W,ae=[],pe,_e,U,te,ye,O;for(pe=0;pe<F;pe++)if(S=s(y[pe]),S==="string")ae.push(y[pe]);else if(S==="array"){if(U=y[pe],U[2])for(W=h[A],_e=0;_e<U[2].length;_e++){if(!W.hasOwnProperty(U[2][_e]))throw r('[sprintf] property "%s" does not exist',U[2][_e]);W=W[U[2][_e]]}else U[1]?W=h[U[1]]:W=h[A++];if(/[^s]/.test(U[8])&&s(W)!=="number")throw r("[sprintf] expecting number but found %s",s(W));switch(U[8]){case"b":W=W.toString(2);break;case"c":W=String.fromCharCode(W);break;case"d":W=parseInt(W,10);break;case"e":W=U[7]?W.toExponential(U[7]):W.toExponential();break;case"f":W=U[7]?parseFloat(W).toFixed(U[7]):parseFloat(W);break;case"o":W=W.toString(8);break;case"s":W=(W=String(W))&&U[7]?W.slice(0,U[7]):W;break;case"u":W=W>>>0;break;case"x":W=W.toString(16);break;case"X":W=W.toString(16).toUpperCase();break}W=/[def]/.test(U[8])&&U[3]&&W>=0?" +"+W:W,ye=U[4]?U[4]==="0"?"0":U[4].charAt(1):" ",O=U[6]-String(W).length,te=U[6]?v(ye,O):"",ae.push(U[5]?W+te:te+W)}return ae.join("")},r.cache={},r.parse=function(y){for(var h=y,A=[],F=[],S=0;h;){if((A=/^[^\x25]+/.exec(h))!==null)F.push(A[0]);else if((A=/^\x25{2}/.exec(h))!==null)F.push("%");else if((A=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(h))!==null){if(A[2]){S|=1;var W=[],ae=A[2],pe=[];if((pe=/^([a-z_][a-z_\d]*)/i.exec(ae))!==null)for(W.push(pe[1]);(ae=ae.slice(pe[0].length))!=="";)if((pe=/^\.([a-z_][a-z_\d]*)/i.exec(ae))!==null)W.push(pe[1]);else if((pe=/^\[(\d+)\]/.exec(ae))!==null)W.push(pe[1]);else throw"[sprintf] huh?";else throw"[sprintf] huh?";A[2]=W}else S|=2;if(S===3)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";F.push(A)}else throw"[sprintf] huh?";h=h.slice(A[0].length)}return F};var l=function(y,h,A){return A=h.slice(0),A.splice(0,0,y),r.apply(null,A)};function s(y){return Object.prototype.toString.call(y).slice(8,-1).toLowerCase()}function v(y,h){for(var A=[];h>0;A[--h]=y);return A.join("")}o.sprintf=r,o.vsprintf=l})(typeof commonjsGlobal<"u"?commonjsGlobal:self||window),function(o,r){var l;if(typeof window<"u")l=window;else if(typeof self<"u")l=self;else if(typeof commonjsGlobal<"u")l=commonjsGlobal;else throw new Error("Unknow context");module.exports?module.exports=function(s,v,y){return v===r&&(typeof window<"u"?v=jqueryExports:v=jqueryExports(s)),y===r&&(y=requireWcwidth()),o(v,y,s),v}:(l.jQuery||(l.$=l.cash),o(l.jQuery||l.cash,l.wcwidth,l))}(function($,wcwidth,root,undefined$1){function debug(o){}function DelayQueue(){var o=$.Callbacks(),r=!1,l=this;this.resolve=function(){o.fire(),l.resolved=r=!0},this.add=function(s){r?s():o.add(s)}}$.omap=function(o,r){var l={};return $.each(o,function(s,v){l[s]=r.call(o,s,v)}),l},$.fn.text_length=function(){return this.map(function(){return $(this).text().length}).get().reduce(function(o,r){return o+r},0)};var Clone={clone_object:function(o){var r={};if(typeof o=="object"){if(Array.isArray(o))return this.clone_array(o);if(o===null)return o;for(var l in o)Array.isArray(o[l])?r[l]=this.clone_array(o[l]):typeof o[l]=="object"?r[l]=this.clone_object(o[l]):r[l]=o[l]}return r},clone_array:function(o){if(!is_function(Array.prototype.map))throw new Error("Your browser don't support ES5 array map use es5-shim");return o.slice(0).map((function(r){return typeof r=="object"?this.clone_object(r):r}).bind(this))}},clone=function(o){return Clone.clone_object(o)};"Map"in root&&!("clear"in Map.prototype)&&(Map.prototype.clear=function(){this.forEach(function(o,r,l){l.delete(r)})});var localStorage;(function(){var o=function(){try{var S="test",W=window.localStorage;return W.setItem(S,"1"),W.removeItem(S),!0}catch{return!1}},r=function(){try{return document.cookie.split(";"),!0}catch{return!1}},l=o();function s(S,W){var ae;if(typeof S=="string"&&typeof W=="string")return localStorage[S]=W,!0;if(typeof S=="object"&&typeof W>"u"){for(ae in S)S.hasOwnProperty(ae)&&(localStorage[ae]=S[ae]);return!0}return!1}function v(S,W){var ae,pe,_e;if(ae=new Date,ae.setTime(ae.getTime()+31536e6),pe="; expires="+ae.toGMTString(),typeof S=="string"&&typeof W=="string")return document.cookie=S+"="+W+pe+"; path=/",!0;if(typeof S=="object"&&typeof W>"u"){for(_e in S)S.hasOwnProperty(_e)&&(document.cookie=_e+"="+S[_e]+pe+"; path=/");return!0}return!1}function y(S){return localStorage[S]}function h(S){var W,ae,pe,_e;for(W=S+"=",ae=document.cookie.split(";"),pe=0;pe<ae.length;pe++){for(_e=ae[pe];_e.charAt(0)===" ";)_e=_e.slice(1,_e.length);if(_e.indexOf(W)===0)return _e.slice(W.length,_e.length)}return null}function A(S){return delete localStorage[S]}function F(S){return v(S,"")}!r()&&!l?(localStorage={},$.extend({Storage:{set:s,get:y,remove:A}})):(l&&(localStorage=window.localStorage),$.extend({Storage:{set:l?s:v,get:l?y:h,remove:l?A:F}}))})();var debounce=function(){var o="Expected a function";function r(s){var v=typeof s;return s!=null&&(v=="object"||v=="function")}function l(){return Date.now()}return function(v,y,h){var A=Math.max,F=Math.min,S,W,ae,pe,_e,U,te=0,ye=!1,O=!1,B=!0;if(typeof v!="function")throw new TypeError(o);y=y||0,r(h)&&(ye=!!h.leading,O="maxWait"in h,ae=O?A(h.maxWait||0,y):ae,B="trailing"in h?!!h.trailing:B);function Y(He){var Ee=S,Re=W;return S=W=undefined$1,te=He,pe=v.apply(Re,Ee),pe}function Ce(He){return te=He,_e=setTimeout(i,y),ye?Y(He):pe}function V(He){var Ee=He-U,Re=He-te,_t=y-Ee;return O?F(_t,ae-Re):_t}function ze(He){var Ee=He-U,Re=He-te;return U===undefined$1||Ee>=y||Ee<0||O&&Re>=ae}function i(){var He=l();if(ze(He))return ce(He);_e=setTimeout(i,V(He))}function ce(He){return _e=undefined$1,B&&S?Y(He):(S=W=undefined$1,pe)}function Be(){_e!==undefined$1&&clearTimeout(_e),te=0,S=U=W=_e=undefined$1}function Ge(){return _e===undefined$1?pe:ce(l())}function Ne(){var He=l(),Ee=ze(He);if(S=arguments,W=this,U=He,Ee){if(_e===undefined$1)return Ce(U);if(O)return _e=setTimeout(i,y),Y(U)}return _e===undefined$1&&(_e=setTimeout(i,y)),pe}return Ne.cancel=Be,Ne.flush=Ge,Ne}}(),jQuery=$;(function(o){jQuery.fn.extend({everyTime:function(r,l,s,v,y){return this.each(function(){jQuery.timer.add(this,r,l,s,v,y)})},oneTime:function(r,l,s){return this.each(function(){jQuery.timer.add(this,r,l,s,1)})},stopTime:function(r,l){return this.each(function(){jQuery.timer.remove(this,r,l)})}}),jQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1e3,das:1e4,hs:1e5,ks:1e6},timeParse:function(r){if(r===undefined$1||r===null)return null;var l=this.regex.exec(r.toString().trim());if(l[2]){var s=parseInt(l[1],10),v=this.powers[l[2]]||1;return s*v}else return r},add:function(r,l,s,v,y,h){var A=0;if(typeof s=="function"&&(y||(y=v),v=s,s=l),l=jQuery.timer.timeParse(l),!(typeof l!="number"||isNaN(l)||l<=0)){y&&y.constructor!==Number&&(h=!!y,y=0),y=y||0,h=h||!1,r.$timers||(r.$timers={}),r.$timers[s]||(r.$timers[s]={}),v.$timerID=v.$timerID||this.guid++;var F=function(){h&&F.inProgress||(F.inProgress=!0,(++A>y&&y!==0||v.call(r,A)===!1)&&jQuery.timer.remove(r,s,v),F.inProgress=!1)};F.$timerID=v.$timerID,r.$timers[s][v.$timerID]||(r.$timers[s][v.$timerID]=setInterval(F,l)),this.global[s]||(this.global[s]=[]),this.global[s].push(r)}},remove:function(r,l,s){var v=r.$timers,y;if(v){if(l){if(v[l]){if(s)s.$timerID&&(clearInterval(v[l][s.$timerID]),delete v[l][s.$timerID]);else for(var A in v[l])v[l].hasOwnProperty(A)&&(clearInterval(v[l][A]),delete v[l][A]);for(y in v[l])if(v[l].hasOwnProperty(y))break;y||(y=null,delete v[l])}}else for(var h in v)v.hasOwnProperty(h)&&this.remove(r,h,s);for(y in v)if(v.hasOwnProperty(y))break;y||(r.$timers=null)}}}}),/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())&&o(window).one("unload",function(){var r=jQuery.timer.global;for(var l in r)if(r.hasOwnProperty(l))for(var s=r[l],v=s.length;--v;)jQuery.timer.remove(s[v],l)})})(jQuery),function(o){if(String.prototype.split.toString().match(/\[native/)){var r=String.prototype.split,l=/()??/.exec("")[1]===o,s;return s=function(v,y,h){if(Object.prototype.toString.call(y)!=="[object RegExp]")return r.call(v,y,h);var A=[],F=(y.ignoreCase?"i":"")+(y.multiline?"m":"")+(y.extended?"x":"")+(y.sticky?"y":""),S=0,W,ae,pe,_e;for(y=new RegExp(y.source,F+"g"),v+="",l||(W=new RegExp("^"+y.source+"$(?!\\s)",F)),h=h===o?-1>>>0:h>>>0;(ae=y.exec(v))&&(pe=ae.index+ae[0].length,!(pe>S&&(A.push(v.slice(S,ae.index)),!l&&ae.length>1&&ae[0].replace(W,function(){for(var U=1;U<arguments.length-2;U++)arguments[U]===o&&(ae[U]=o)}),ae.length>1&&ae.index<v.length&&Array.prototype.push.apply(A,ae.slice(1)),_e=ae[0].length,S=pe,A.length>=h)));)y.lastIndex===ae.index&&y.lastIndex++;return S===v.length?(_e||!y.test(""))&&A.push(""):A.push(v.slice(S)),A.length>h?A.slice(0,h):A},String.prototype.split=function(v,y){return s(this,v,y)},s}}(),$.fn.caret=function(o){var r=this[0],l=r.contentEditable==="true";if(arguments.length===0){if(window.getSelection){if(l){this.is(":focus")||r.focus();var s=window.getSelection().getRangeAt(0),v=s.cloneRange();return v.selectNodeContents(r),v.setEnd(s.endContainer,s.endOffset),v.toString().length}return r.selectionStart}if(document.selection){if(r.focus(),l){var s=document.selection.createRange(),v=document.body.createTextRange();return v.moveToElementText(r),v.setEndPoint("EndToEnd",s),v.text.length}var o=0,y=r.createTextRange(),v=document.selection.createRange().duplicate(),h=v.getBookmark();for(y.moveToBookmark(h);y.moveStart("character",-1)!==0;)o++;return o}return 0}if(o===-1&&(o=this[l?"text":"val"]().length),window.getSelection)if(l){this.is(":focus")||r.focus();var A=window.getSelection();A.collapse(A.focusNode,o)}else r.setSelectionRange(o,o);else if(document.body.createTextRange){var y=document.body.createTextRange();y.moveToElementText(r),y.moveStart("character",o),y.collapse(!0),y.select()}return!l&&!this.is(":focus")&&r.focus(),o};function make_callback_plugin(o){var r=$.extend({init:$.noop,destroy:$.noop,name:"event"},o);return function(l,s){var v=arguments.length===0,y=arguments[0]==="unbind";if(!v&&!y&&!is_function(l))throw new Error('Invalid argument, it need to a function or string "unbind" or no arguments.');y&&(l=is_function(arguments[1])?arguments[1]:null);var h="callbacks_"+r.name;return this.each(function(){var A=$(this),F;function S(W){F.fireWith(A,[W])}v||y?(F=A.data(h),v?F&&F.fire():(l&&F?(F.remove(l),F.has()||(F=null)):F=null,F||(A.removeData(h),r.destroy.call(this,S,s)))):A.data(h)?$(this).data(h).add(l):(F=$.Callbacks(),F.add(l),A.data(h,F),r.init.call(this,S,s))})}}$.fn.resizer=make_callback_plugin({name:"resize",init:function(o,r){var l=$.extend({prefix:""},r),s=$(this),v,y=!0;if(s.is("body"))$(window).on("resize.resizer",o);else if(window.ResizeObserver)v=new ResizeObserver(function(){y||setTimeout(o,0),y=!1}),v.observe(this),s.data("observer",v);else{var h=$("<iframe/>").addClass(l.prefix+"resizer").appendTo(this)[0];$(h.contentWindow).on("resize",o)}},destroy:function(){var o=$(this);if(window.ResizeObserver){var r=o.data("observer");r&&(r.unobserve(this),o.removeData("observer"))}else{var l=o.find('> iframe[class$="resizer"]');l.length?($(l[0].contentWindow).off("resize").remove(),l.remove()):o.is("body")&&$(window).off("resize.resizer")}}}),$.fn.touch_scroll=make_callback_plugin({name:"touch",init:function(o){var r,l;$(this).on("touchstart.scroll",function(s){s=s.originalEvent,s.target.tagName.toLowerCase()!=="a"&&s.touches.length===1&&(l=r=s.touches[0])}).on("touchmove.scroll",function(s){if(s=s.originalEvent,r&&s.touches.length===1){var v=s.touches[0],y=o({origin:r,previous:l,current:v});y===!1&&s.preventDefault(),l=v}}).on("touchend.scroll",function(){(r||l)&&(r=l=null)})},destroy:function(){$(this).off("touchstart.scroll touchmove.scroll touchend.scroll")}}),$.fn.on_load=function(o){var r=$.extend({error:$.noop,load:$.noop,done:$.noop},o),l=[];return this.find("img,iframe").each(function(){var s=$(this),v=new $.Deferred;s.on("load",v.resolve).on("error",function(){r.error(s),v.reject()}),l.push(v)}),r.load(!!l.length),l.length?$.when.apply($,l).then(function(){r.done(!0)}):r.done(!1),this};function jquery_resolve(o){var r=jQuery.Deferred();return r.resolve(o),r.promise()}function unpromise(o,r,l){if(o!==undefined$1){if(is_promise(o)){if(is_function(o.catch)&&is_function(l)&&o.catch(l),is_function(o.done))return o.done(r);if(is_function(o.then))return o.then(r)}else if(o instanceof Array){var s=o.filter(function(y){return y&&(is_function(y.done)||is_function(y.then))});if(s.length){var v=$.when.apply($,o).then(function(){return r([].slice.call(arguments))});return is_function(v.catch)&&(v=v.catch(l)),v}}return r(o)}}function always(o){return o===undefined$1?!0:o}$.fn.is_fully_in_viewport=function(){function o(r,l){var s=r.getBoundingClientRect(),v=l[0].getBoundingClientRect(),y=s.top-v.top,h=s.bottom-v.top,A=l.height();return h>0&&y<=A}return root.IntersectionObserver?function(r){var l=this[0],s=jQuery.Deferred(),v=new root.IntersectionObserver(function(y){s.resolve(y[0].isIntersecting&&y[0].ratio===1),v.unobserve(l)},{root:r[0]});return v.observe(l),s.promise()}:function(r){return jquery_resolve(o(this[0],r))}}();var entity_re=/(&(?:[a-z\d]+|#\d+|#x[a-f\d]+);)/i,space_re=/\s/,combine_chr_re=/(.(?:[\u0300-\u036F]|[\u1AB0-\u1abE]|[\u1DC0-\u1DF9]|[\u1DFB-\u1DFF]|[\u20D0-\u20F0]|[\uFE20-\uFE2F])+)/,astral_symbols_re=/([\uD800-\uDBFF][\uDC00-\uDFFF])/,emoji_re=/(\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F?|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD]))/,mobile_re=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,tablet_re=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,format_split_re=/(\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\](?:[^\]\\]*(?:\\\\)*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)\]?)/i,format_parts_re=/\[\[((?:-?[@!gbiuso])*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]\\]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]+)\]?/gi,format_re=/\[\[((?:-?[@!gbiuso])*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)\]?/gi,format_exist_re=/\[\[((?:-?[@!gbiuso])*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)\]/gi,format_full_re=/^(\[\[(?:(?:-?[@!gbiuso])*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\])([^\]]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)(\])$/i,format_begin_re=/(\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\])/i,format_start_re=/^(\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\])/i,format_end_re=/\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\]?$/i,self_closing_re=/^(?:\[\[)?[^;]*@[^;]*;/,color_re=/^(?:#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})|rgba?\([^)]+\)|hsla?\([^)]+\))$/i,url_re=/(\b(?:file|ftp|https?):\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'\\<>\][)])+)/gi,url_nf_re=/\b(?![^"\s[\]]*])(https?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'\\<>\][)])+)/gi,email_re=/((([^<>('")[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g,url_full_re=/^(https?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'<>\\\][)])+)$/gi,email_full_re=/^((([^<>('")[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/g,command_re=/((?:"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimsuy]*(?=\s|$)|(?:\\\s|\S))+)(?=\s|$)/gi,extended_command_re=/^\s*((terminal|cmd)::([a-z_]+)\(([\s\S]*)\))\s*$/,format_exec_split_re=/(\[\[(?:-?[@!gbiuso])*;[^\]]+\](?:\\[[\]]|[^\]])*\]|\[\[[\s\S]+?\]\])/,format_exec_re=/(\[\[[\s\S]+?\]\])/,float_re=/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/,re_re=/^\/((?:\\\/|[^/]|\[[^\]]*\/[^\]]*\])+)\/([gimsuy]*)$/,string_re=/("(?:[^"\\]|\\(?:\\\\)*"|\\\\)*"|'(?:[^'\\]|\\(?:\\\\)*'|\\\\)*'|`(?:[^`\\]|\\(?:\\\\)*`|\\\\)*`)/,unclosed_strings_re=/^(?=((?:[^"']+|"[^"\\]*(?:\\[^][^"\\]*)*"|'[^'\\]*(?:\\[^][^'\\]*)*')*))\1./,broken_image='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14"><title id="title2">rounded</title><path id="terminal-broken-image" d="m 14,10 h 2 v 1 a 3,3 0 0 1 -3,3 H 3 A 3,3 0 0 1 0,11 H 4.5 A 1.00012,1.00012 0 0 0 5.207,10.707 L 6.5,9.414 7.793,10.707 a 0.99963,0.99963 0 0 0 1.41406,0 l 2.36719,-2.36719 1.80127,1.44092 A 0.99807,0.99807 0 0 0 14,10 Z M 16,3 V 8 H 14.35059 L 12.12451,6.21924 A 0.99846,0.99846 0 0 0 10.793,6.293 L 8.5,8.586 7.207,7.293 a 0.99962,0.99962 0 0 0 -1.41406,0 L 4.08594,9 H 0 V 3 A 3,3 0 0 1 3,0 h 10 a 3,3 0 0 1 3,3 z M 6,4.5 A 1.5,1.5 0 1 0 4.5,6 1.5,1.5 0 0 0 6,4.5 Z" /></svg>',use_broken_image='<svg class="terminal-broken-image" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#terminal-broken-image"/></svg>',animation_supported=function(){if(typeof document>"u")return!1;var o=!1,r="Webkit Moz O ms Khtml".split(" "),l=document.createElement("div");if(l.style.animationName&&(o=!0),o===!1)for(var s=0;s<r.length;s++){var v=r[s]+"AnimationName";if(l.style[v]!==undefined$1){o=!0;break}}return l=null,o}(),agent=(root.navigator||window.navigator).userAgent,is_IE=/MSIE|Trident/.test(agent)||/rv:11.0/i.test(agent),is_IEMobile=/IEMobile/.test(agent),is_ch_unit_supported=function(){if(is_IE&&!is_IEMobile)return!1;if(typeof document>"u")return!0;var o=document.createElement("div");return o.style.width="1ch",o.style.width==="1ch"}(),is_css_variables_supported=root.CSS&&root.CSS.supports&&root.CSS.supports("(--fake-var: 0)"),is_android=navigator.userAgent.toLowerCase().indexOf("android")!==-1,is_key_native=function(){if(!("KeyboardEvent"in root&&"key"in root.KeyboardEvent.prototype))return!1;var r=root.KeyboardEvent.prototype,l=Object.getOwnPropertyDescriptor(r,"key").get;return!!l.toString().match(/\[native code\]/)}(),is_browser=function(){try{return this===window}catch{return!1}}(),is_mobile=function(o){var r=!1;return(mobile_re.test(o)||tablet_re.test(o.substr(0,4)))&&(r=!0),navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?!0:r}(navigator.userAgent||navigator.vendor||root.opera),ch_unit_bug=!1;is_browser&&$(function(){function o(v){return v[0].getBoundingClientRect().width}var r='<span style="font-family: monospace;visibility:hidden;',l=$(r+'width:1ch;overflow: hidden">&nbsp;</span>');l.appendTo("body");var s=$(r+'">&nbsp;</span>').appendTo("body");ch_unit_bug=Math.abs(o(l)-o(s))>1e-4,l.remove(),s.remove()});function css(o,r,l){if(o instanceof $.fn.init)o.each(function(){css(this,r)});else if($.isPlainObject(r))Object.keys(r).forEach(function(s){o.style.setProperty(s,r[s])});else return o.style.getPropertyValue(r)}function style_prop(o,r,l){var s=[o+":"+r+"px",o+":calc("+r+"px / var(--pixel-density, 1))"];return l&&(s=s.map(function(v){return v+" !important"})),s.join(";")}function a11y_hide(o){o.attr({role:"presentation","aria-hidden":"true"})}var excepctions=[];function alert_exception(o,r){arguments[0]instanceof $.terminal.Exception&&(o=arguments[0].type,r=arguments[0]);var l=(o?o+": ":"")+exception_message(r);excepctions.indexOf(l)===-1&&(excepctions.push(l),setTimeout(function(){throw r},0))}function generate_id(){var o=Math.random()*46656|0,r=Math.random()*46656|0;return o=("000"+o.toString(36)).slice(-3),r=("000"+r.toString(36)).slice(-3),o+r}function scrollbar_event(o,r,l){l=l||1;var s=r.offset().left,v=r.outerWidth()*l;return v<=o.clientX-s}function exception_message(o){return typeof o=="string"?o:typeof o.fileName=="string"?o.fileName+": "+o.message:o.message}function Cycle(){var o=[].slice.call(arguments),r=0;$.extend(this,{get:function(){return o},index:function(){return r},rotate:function(l,s){if(s===undefined$1)s=r;else if(s===r)return;if(!l){var v=o.filter(function(y){return typeof y<"u"});if(!v.length)return}if(o.length)return o.length===1?o[0]:(r===o.length-1?r=0:++r,typeof o[r]<"u"?o[r]:this.rotate(!0,s))},length:function(){return o.length},remove:function(l){delete o[l]},set:function(l){for(var s=o.length;s--;)if(o[s]===l){r=s;return}this.append(l),r=o.length-1},front:function(){if(o.length){for(var l=r,s=!1;!o[l];)if(l++,l>o.length){if(s)break;l=0,s=!0}return o[l]}},map:function(l){return o.map(function(s,v){return typeof s<"u"?l(s,v):null}).filter(Boolean)},forEach:function(l){return o.forEach(function(s,v){typeof s<"u"&&l(s,v)})},append:function(l){o.push(l)}})}function Stack(o){var r=is_array(o)?o:o?[o]:[];$.extend(this,{data:function(){return r},map:function(l){return $.map(r,l)},size:function(){return r.length},pop:function(){if(r.length===0)return null;var l=r[r.length-1];return r=r.slice(0,r.length-1),l},push:function(l){return r=r.concat([l]),l},top:function(){return r.length>0?r[r.length-1]:null},clone:function(){return new Stack(r.slice(0))}})}function WorkerCache(o){var r=$.extend({validation:$.noop,action:$.noop,onCache:$.noop},o);this._onCache=r.onCache.bind(this),this._action=r.action.bind(this),this._validation=r.validation.bind(this),"Map"in root&&(this._cache=new Map)}WorkerCache.prototype.validate=function(o){var r=this._validation(o),l=r===undefined$1||r===!0;return l||this._cache.clear(),l},WorkerCache.prototype.clear=function(){this._cache.clear()},WorkerCache.prototype.get=function(o){if(!this._cache)return this._action(o);var r;return this.validate(o)&&this._cache.has(o)?(r=this._cache.get(o),this._onCache({cache:r}),r):(r=this._action(o),this._cache.set(o,r),r)};function History(o,r,l){var s=!0,v="";typeof o=="string"&&o!==""&&(v=o+"_"),v+="commands";var y;l?y=[]:(y=$.Storage.get(v),y=y?JSON.parse(y):[]);var h=y.length-1;$.extend(this,{append:function(A){s&&y[y.length-1]!==A&&(y.push(A),r&&y.length>r&&(y=y.slice(-r)),h=y.length-1,l||$.Storage.set(v,JSON.stringify(y)))},set:function(A){is_array(A)&&(y=A,l||$.Storage.set(v,JSON.stringify(y)))},data:function(){return y},reset:function(){h=y.length-1},last:function(){return y[y.length-1]},end:function(){return h===y.length-1},position:function(){return h},current:function(){return y[h]},next:function(){var A=h;if(h<y.length-1&&++h,A!==h)return y[h]},previous:function(){var A=h;if(h>0&&--h,A!==h)return y[h]},clear:function(){y=[],this.purge()},enabled:function(){return s},enable:function(){s=!0},purge:function(){l||$.Storage.remove(v)},disable:function(){s=!1},toggle:function(A){typeof A>"u"?s=!s:s=A}})}function OutputLines(o){this._settings=o,this._lines=[],this._snapshot=[]}OutputLines.prototype.make_snapshot=function(o){this._snapshot.push(o)},OutputLines.prototype.get_partial=function(){if(!this._snapshot.length)return[];var o=this._snapshot[this._snapshot.length-1];return o},OutputLines.prototype.update_snapshot=function(o,r){this._snapshot[o]=r},OutputLines.prototype.limit_snapshot=function(o){this._snapshot=this._snapshot.slice(o)},OutputLines.prototype.clear_snapshot=function(){this._snapshot=[]},OutputLines.prototype.get_snapshot=function(){return this._snapshot.reduce(function(o,r){return r?o.concat(r):o},[]).join(`
`)},OutputLines.prototype.join=function(){var o=[].slice.call(arguments);return o.some(is_function)?function(){return o.reduce(function(r,l){return is_function(r)&&(r=r()),is_function(l)&&(l=l()),is_promise(r)||is_promise(l)?$.when(r,l).then(function(s,v){return s+v}):l})}:o.some(is_promise)?o.reduce(function(r,l){return $.when(r,l).then(function(s,v){return s+v})}):o.join("")},OutputLines.prototype.import=function(o){this._lines=o},OutputLines.prototype.push=function(o){var r=o[0],l=o[1];if(this.has_newline())this._lines.push(o);else{var s=this.last_line();s[0]=this.join(s[0],r),s[1].newline=l.newline}},OutputLines.prototype.clear=function(o){this._lines.forEach(function(r,l){var s=r[1];is_function(s.onClear)&&s.onClear.call(self,o(l))}),this._lines=[],this._snapshot=[]},OutputLines.prototype.data=function(){return this._lines.filter(Boolean)},OutputLines.prototype.has_newline=function(){return this._lines.length===0?!0:this.last_line()[1].newline},OutputLines.prototype.unmount=function(o){var r=o.data("index"),l=this._lines[r];if(l){var s=l[1];is_function(s.unmount)&&s.unmount.call(self,o)}},OutputLines.prototype.last_line=function(){var o=this.data(),r=o.length;return o[r-1]},OutputLines.prototype.update=function(o,r,l){if(r===null)delete this._lines[o],delete this._snapshot[o];else return this._lines[o][0]=r,l&&(this._lines[o][1]=$.extend(this._lines[o][1],l)),this._lines[o][1]},OutputLines.prototype.length=function(){return this._lines.length},OutputLines.prototype.valid_index=function(o){return!!this._lines[o]},OutputLines.prototype.render=function(o,r){var l=this._settings(),s=[];if(this._snapshot=[],l.outputLimit>=0){var v;l.outputLimit===0?v=o:v=l.outputLimit,this._lines.forEach(function(h,A){var F=h[0],S=h[1];s.push({value:F,index:A,options:S})});var y=s.length-v-1;s=s.slice(y)}else s=this._lines.map(function(h,A){return{value:h[0],index:A,options:h[1]}});return r(s)};function FormatBuffer(o){this._options=o,"Map"in root&&(this._format_cache=new Map),this._output_buffer=[]}FormatBuffer.NEW_LINE=1,FormatBuffer.prototype.format=function(r,l,s){var v=this._format_cache&&this._settings.useCache;if(v){var y=JSON.stringify([r,this._settings]);if(this._format_cache.has(y))return this._format_cache.get(y)}var h={line:$.terminal.format(r,this._settings),raw:s,newline:l};return v&&this._format_cache.set(y,h),h},FormatBuffer.prototype.empty=function(){return!this._output_buffer.length},FormatBuffer.prototype.append=function(o,r,l,s){if(this._settings=$.extend({useCache:!0},this._options(l)),this._output_buffer.push(FormatBuffer.NEW_LINE),o instanceof Array)for(var v=s.split(`
`),y=0,h=o.length;y<h;++y)if(o[y]===""||o[y]==="\r")this._output_buffer.push({line:"",raw:""});else{var A=this.format(o[y],y===h-1,v[y]);this._output_buffer.push(A)}else l.raw?this._output_buffer.push({line:o,raw:s}):this._output_buffer.push(this.format(o,!1,s));this._output_buffer.push({finalize:l.finalize,index:r,raw:l.raw,newline:l.newline})},FormatBuffer.prototype.clear_cache=function(){this._format_cache&&this._format_cache.clear()},FormatBuffer.prototype.output=function(){return this._output_buffer.slice()},FormatBuffer.prototype.is_empty=function(){return!this._output_buffer.length},FormatBuffer.prototype.clear=function(){this._output_buffer=[]},FormatBuffer.prototype.forEach=function(o){for(var r=0;r<this._output_buffer.length;){var l=this._output_buffer[r++];l===FormatBuffer.NEW_LINE?o():o(l)}},FormatBuffer.prototype.flush=function(o){this.forEach(o),this.clear()};function with_prompt(o,r,l){function s(A){var F=$.terminal.escape_brackets("[ERR]> ");r("[[;red;]"+F+"]"),alert_exception("Prompt",A)}function v(A){r(A),y.resolve()}var y=new $.Deferred;switch(typeof o){case"string":v(o);break;case"function":try{var h=o.call(l,function(A){v(A)});typeof h=="string"&&v(h),h&&h.then&&h.then(v).catch(s)}catch(A){s(A)}break}return y.promise()}var cmd_index=0;$.cmd={defaults:{mask:!1,caseSensitiveSearch:!0,historySize:60,prompt:"> ",enabled:!0,history:!0,onPositionChange:$.noop,onCommandChange:$.noop,inputStyle:"textarea",mobileDelete:is_mobile,onPaste:$.noop,clickTimeout:200,holdTimeout:400,holdRepeatTimeout:200,mobileIngoreAutoSpace:[],repeatTimeoutKeys:[],tabindex:1,tabs:4}},$.fn.cmd=function(o){var r=$.extend({},$.cmd.defaults,o);function l(D){return r.mobileIngoreAutoSpace.length&&r.mobileIngoreAutoSpace.indexOf(D)!==-1&&is_android}var s=this,v=s.data("cmd");if(v)return v;var y=cmd_index++;s.addClass("cmd");var h=$('<div class="cmd-wrapper"/>').appendTo(s);h.append('<span class="cmd-prompt"></span>'),h.append('<div class="cmd-cursor-line"><span></span><span class="cmd-cursor"><span data-text class="end"><span>&nbsp;</span></span></span><span></span></div>');var A=h.find(".cmd-cursor-line");a11y_hide(A);var F;is_mobile?(F=function(){var D=$('<div class="cmd-editable" contenteditable/>').attr({autocapitalize:"off",autocorrect:"off",spellcheck:"false",tabindex:r.tabindex}).insertAfter(s);D.on("focus",function(){s.enable()}).on("blur",function(){s.disable()});var I,k={$node:D,val:function(Q){if(typeof Q>"u")return D.text();D.html(Q)},reset:function(){clearTimeout(I),I=setTimeout(function(){D.css({top:"",bottom:""})},100)},focus:function(){css(D[0],{top:"calc(var(--terminal-scroll, 0) * 1px)"}),k.reset()},blur:function(){D.css({top:"100%",bottom:0}).blur(),window.getSelection().removeAllRanges(),k.reset()}};return k}(),s.addClass("cmd-mobile")):(F=function(){var D=generate_id(),I=$("<textarea>").attr({autocapitalize:"off",spellcheck:"false",id:D,tabindex:r.tabindex}).addClass("cmd-clipboard").appendTo(s);return I.before('<label class="visually-hidden" for="'+D+'">Clipboard textarea for jQuery Terminal</label>'),{$node:I,val:function(k){return typeof k>"u"?I.val():I.val(k)}}}(),F.val(" ")),r.width&&s.width(r.width);var S,W,ae,pe,_e,U=0,te,ye=s.find(".cmd-prompt"),O=!1,B="",Y=null,Ce,V="",ze,i="",ce=0,Be,Ge,Ne=0,He,Ee,Re=s.find(".cmd-cursor"),_t,jt,pt=0,Ut="￿",Rt=/\uFFFF$/,$t=/^\uFFFF$/;function it(D){var I=$(D.target);if(I.is("span,img,a"))return I=I.closest("[data-text]"),I.index()+I.parent("span").prevAll().find("[data-text]").length+I.closest('[role="presentation"]').prevUntil(".cmd-prompt").find("[data-text]").length;if(I.is('div[role="presentation"]')){var k=!I.next().length;return I.find("[data-text]").length+I.prevUntil(".cmd-prompt").find("[data-text]").length-(k?0:1)}}var gt={SPACEBAR:" ",UP:"ArrowUP",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",DEL:"Delete",MULTIPLY:"*",DIVIDE:"/",SUBTRACT:"-",ADD:"+"};function q(D){var I=D.key.toUpperCase();return gt[I]?gt[I]:I}function H(D){if(D.key){var I=q(D).toUpperCase();if(I==="CONTROL")return"CTRL";var k=[];return D.ctrlKey&&k.push("CTRL"),D.metaKey&&I!=="META"&&k.push("META"),D.shiftKey&&I!=="SHIFT"&&k.push("SHIFT"),D.altKey&&I!=="ALT"&&k.push("ALT"),k.length&&I===" "&&(I="SPACEBAR"),D.key&&k.push(I),k.join("+")}}var b={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"},M;for(M=1;M<25;M++)b[111+M]="F"+M;var X="";for(M=65;M<91;M++)X=String.fromCharCode(M),b[M]=[X.toLowerCase(),X.toUpperCase()];var ne={};Object.keys(b).forEach(function(D){is_array(b[D])?b[D].forEach(function(I){ne[I.toUpperCase()]=D}):ne[b[D].toUpperCase()]=D});var ve,de={"ALT+D":he({clipboard:!0}),"HOLD+ALT+D":he({clipboard:!0,hold:!0}),"HOLD+DELETE":he({clipboard:!1,hold:!0}),"HOLD+SHIFT+DELETE":he({clipboard:!1,hold:!0}),ENTER:function(){Ee&&V&&!r.mask&&(is_function(r.historyFilter)&&r.historyFilter(V)||r.historyFilter instanceof RegExp&&V.match(r.historyFilter)||!r.historyFilter)&&Ee.append(V);var D=V;is_mobile||F.$node.blur(),Ee.reset(),sn="",Ct=!0;var I;return r.commands&&(I=r.commands.call(s,D)),is_function(Be)&&(I&&is_function(I.then)?I.then(function(){At()}):At()),s.set(""),F.val(""),is_mobile||F.$node.focus(),!1},"SHIFT+ENTER":function(){return s.insert(`
`),!0},BACKSPACE:tn,"SHIFT+BACKSPACE":tn,TAB:function(){s.insert("	")},"CTRL+D":function(){return s.delete(1),!1},DELETE:function(){return s.delete(1),!0},"HOLD+ARROWUP":Tt,ARROWUP:Tt,"CTRL+ARROWUP":Ze,"CTRL+P":Ze,ARROWDOWN:Xe,"HOLD+ARROWDOWN":Xe,"CTRL+N":Et,"CTRL+ARROWDOWN":Et,ARROWLEFT:_n,"HOLD+ARROWLEFT":debounce(_n,10),"CTRL+B":_n,"CTRL+ARROWLEFT":function(){var D=ce-1,I=0;V[D]===" "&&--D;for(var k=D;k>0;--k)if(V[k]===" "&&V[k+1]!==" "){I=k+1;break}else if(V[k]===`
`&&V[k+1]!==`
`){I=k;break}s.position(I)},"CTRL+R":function(){return O?qt(!0):(Ce=Be,St(),ze=V,s.set(""),Nt(),O=!0),!1},"CTRL+G":function(){if(O)return Be=Ce,At(),s.set(ze),Nt(),O=!1,B="",!1},ARROWRIGHT:De,"HOLD+ARROWRIGHT":debounce(De,10),"CTRL+F":De,"CTRL+ARROWRIGHT":function(){V[ce]===" "&&++ce;var D=/\S[\n\s]{2,}|[\n\s]+\S?/,I=V.slice(ce).match(D);!I||I[0].match(/^\s+$/)?s.position(bare_text(V).length):I[0][0]!==" "?ce+=I.index+1:(ce+=I.index+I[0].length-1,I[0][I[0].length-1]!==" "&&--ce),Nt()},F12:Ye,END:Jn(!0),"CTRL+END":Jn(),"CTRL+E":Jn(),HOME:Ot(!0),"CTRL+HOME":Ot(),"CTRL+A":Ot(),"SHIFT+INSERT":ut,"CTRL+SHIFT+T":Ye,"CTRL+W":Ie({clipboard:!0,hold:!1}),"CTRL+BACKSPACE":Ie({clipboard:!0,hold:!1}),"HOLD+BACKSPACE":Ie({clipboard:!1,hold:!0}),"HOLD+SHIFT+BACKSPACE":Ie({clipboard:!1,hold:!0}),"CTRL+H":function(){return V!==""&&ce>0&&s.delete(-1),!1},"CTRL+X":Ye,"CTRL+C":function(){return get_selected_html()===""},"CTRL+T":Ye,"CTRL+Y":function(){i!==""&&s.insert(i)},"CTRL+V":ut,"META+V":ut,"CTRL+K":function(){var D=text(V).length;return D>ce&&(i=s.delete(D-ce),text_to_clipboard(F.$node,i)),!1},"CTRL+U":function(){return V!==""&&ce!==0&&(i=s.delete(-ce),text_to_clipboard(F.$node,i)),!1},"CTRL+TAB":function(){return!1},"META+`":Ye,"META+R":Ye,"META+L":Ye};function he(D){return D=D||{},D.hold&&!r.mobileDelete?function(){return s.delete(1),!1}:function(){var k=/ *[^ ]+ *(?= )|[^ ]+$/,Q=V.slice(ce),be=Q.match(k);return be&&(i=be[0],D.clipboard&&text_to_clipboard(F.$node,i)),s.set(V.slice(0,ce)+V.slice(ce).replace(k,""),!0),!1}}function Ie(D){return D=D||{},D.hold&&!r.mobileDelete?function(){s.delete(-1)}:function(){if(V!==""&&ce!==0){var k=V.slice(0,ce).match(/([^ ]* *$)/);k[0].length&&(i=s.delete(-k[0].length),D.clipboard&&text_to_clipboard(F.$node,i))}return!1}}function Ye(){return!0}function ut(){return F.val(""),pt=0,s.isenabled()&&!F.$node.is(":focus")&&F.$node.trigger("focus",[!0]),F.$node.one("input",at),!0}function at(){if(pt++>0)return;function D(){F.val(V),un()}function I(k){s.insert(k),D()}s.isenabled()&&s.oneTime(100,function(){var k=F.val().replace(/\r/g,"");if(is_function(r.onPaste)){var Q=r.onPaste.call(s,{target:s,text:k});if(Q!==undefined$1){Q&&is_function(Q.then||Q.done)?(Q.then||Q.done).call(Q,I):typeof Q=="string"?I(Q):Q===!1&&D();return}}I(k)})}function Ze(){return yn?(ze=V,s.set(Ee.current())):s.set(Ee.previous()),yn=!1,!1}function Et(){return Ee.end()?(yn=!0,s.set(ze)):s.set(Ee.next()),!1}function Lt(D){return D.match(/\n/)}function cn(D,I){var k=D.split(`
`).map(function(be){return $.terminal.length(be)});I&&(k[0]+=I);var Q=k.filter(function(be){return be>=S});return!!Q.length}function Dt(D){var I=ae,k=$.terminal.split_equal(I+D,S),Q=new RegExp("^"+$.terminal.escape_regex(I));return k=k.map($.terminal.unescape_brackets),k[0]=k[0].replace(Q,""),k}function Tt(){var D=$.terminal.substring(V,0,ce),I=s.column(),k=s.find(".cmd-cursor-line"),Q=k.prevUntil("span").length;if(Q===1&&I<=te)return s.position(0),!1;if(Q===0)return Ze();if(Lt(D)||cn(D,te)){var be=k.prev(),Fe=be.is(".cmd-end-line"),We=Dt(V);be=We[Q-1];var Ue=We[Q].substring(I).length,Oe;return Ue>0?(Oe=I,Q-1===0&&(Oe-=te),Oe=I+be.substring(Oe).length,Fe&&++Oe):Oe=I+1,s.position(-Oe,!0),!1}else return Ze()}function Xe(){var D=$.terminal.substring(V,ce);if(Lt(D)||cn(D)){var I=Dt(V),k=s.column(),Q=s.find(".cmd-cursor-line"),be=Q.prevUntil("span"),Fe=be.length,We=Q.is(".cmd-end-line"),Ue=Q.next().is(".cmd-end-line"),Oe=I[Fe+1];if(!Oe)return Et();var qe=I[Fe].substring(k).length,f;return qe===0?(f=Oe.length,Ue&&f++):(f=Math.min(k,Oe.length)+qe,Fe===0&&(f+=te),We&&(f+=1)),s.position(f,!0),!1}else return Et()}function tn(){O?(B=B.slice(0,-1),St()):V!==""&&ce>0&&s.delete(-1),s.oneTime(1,function(){Ct=!0})}function _n(){ce>0&&s.position(-1,!0)}function De(){return ce<bare_text(V).length&&s.position(1,!0),!1}function Ot(D){function I(){s.position(0)}return D?function(){if(V.match(/\n/)){var k=V.substring(0,s.position());s.position(k.lastIndexOf(`
`)+1)}else I()}:I}function Jn(D){function I(){s.position(text(V).length)}return D?function(){if(V.match(/\n/)){for(var k=V.split(`
`),Q=s.position(),be=0,Fe=0;Fe<k.length;++Fe)if(be+=k[Fe].length,be>Q){s.position(be+Fe);return}}I()}:I}function a(){var D=F.$node,I=D.is(":focus");Ge?s.oneTime(10,function(){!D.is(":focus")&&Ge&&D.trigger("focus",[!0])}):I&&!Ge&&D.trigger("blur",[!0])}function Pn(){if(animation_supported){var D=window.getComputedStyle(Re[0]),I=D.getPropertyValue("--animation");I=I.replace(/^\s*|\s*$/g,"");var k=s.attr("class");if(k.match(/-animation/)&&(k=k.replace(/[a-z]+-animation/g,"")),I&&!I.match(/blink/)){var Q=I.replace(/terminal-/,"")+"-animation";k.match(Q)||(k+=" "+Q)}k=k.replace(/\s+/g," "),k!==s.attr("class").replace(/\s+/g," ")&&s.attr("class",k)}}function un(D){s.isenabled()&&s.oneTime(10,function(){!is_mobile&&F.val()!==V&&!D&&F.val(" "+V),Ge&&s.oneTime(10,function(){try{var I=is_mobile?ce:ce+1;F.$node.caret()!==I&&F.$node.caret(I)}catch{}})})}if(animation_supported&&!is_android)_t=function(D){D?Re.addClass("cmd-blink"):Re.removeClass("cmd-blink")},jt=function(){var D=Re.clone();D.insertBefore(Re),Re.remove(),Re=D};else{var An=!1;_t=function(D){D&&!An?(An=!0,Re.addClass("cmd-inverted cmd-blink"),s.everyTime(500,"blink",Dn)):An&&!D&&(An=!1,s.stopTime("blink",Dn),Re.removeClass("cmd-inverted cmd-blink"))},jt=function(){_t(!1),_t(!0)}}function Dn(){Re.toggleClass("cmd-inverted")}function St(){Be="(reverse-i-search)`"+B+"': ",At()}function nn(){Be=Ce,O=!1,Y=null,B=""}function qt(D){var I=Ee.data(),k,Q,be=I.length;if(D&&Y>0&&(be-=Y),B.length>0)for(var Fe=B.length;Fe>0;Fe--){Q=$.terminal.escape_regex(B.slice(0,Fe)),r.caseSensitiveSearch?k=new RegExp(Q):k=new RegExp(Q,"i");for(var We=be;We--;)if(k.test(I[We])){Y=I.length-We,s.position(I[We].indexOf(Q)),s.set(I[We],!0),Nt(),B.length!==Fe&&(B=B.slice(0,Fe),St());return}}B=""}function dn(){var D=s.find(".cmd-prompt"),I=D.html();D.html("<span>&nbsp;</span>");var k=D.find("span").get(0).getBoundingClientRect().width;return D.html(I),k}function pn(D){var I=s.width();return Math.floor(I/D)}function Yt(D){function I(x){return $.terminal.split_equal(x,S)}function k(x){var T=[];return x.forEach(function(z,K){$.terminal.strip(z).match($t)?(T[K]=!1,K>0&&(T[K-1]+=Ut)):T[K]=x[K]}),T.filter(function(z){return z!==!1})}var Q=ye.find(".cmd-line"),be;Q.length?be=Q.nextUntil(".cmd-line").text():be=ye.text(),be=be.replace("​",""),be=$.terminal.escape_brackets(be);var Fe=an(),We=new RegExp("^"+Fe+$.terminal.escape_regex(be)),Ue;if(D.match(/\n/)){for(var Oe=D.split(`
`),qe=S-te-1,f=0;f<Oe.length-1;++f)Oe[f]+=Ut;for(strlen(Oe[0])>qe?(Ue=I(be+Oe[0]),Ue[0]=Ue[0].replace(We,""),Ue=k(Ue)):Ue=[Oe[0]],f=1;f<Oe.length;++f)if(strlen(Oe[f])>S){var d=I(Oe[f]);f<Oe.length-1&&(d=k(d)),Ue=Ue.concat(d)}else Ue.push(Oe[f])}else Ue=I(Fe+be+D),Ue[0]=Ue[0].replace(We,"");if(Ue.length>1){var g=$.terminal.length(Ue[Ue.length-1]);g===S&&Ue.push("")}return Ue}var vn=new WorkerCache({validation:function(D){var I=!1;return(!this._previous_value||this._previous_value===D)&&(!this._cols||this._cols===S)&&(I=!0),this._previous_value=D,this._cols=S,I},action:Yt});function Xn(D){return vn.get(D)}function kt(D,I){try{D=$.terminal.escape_formatting(D);var k=$.extend({},r,{unixFormattingEscapeBrackets:!0,position:ce,command:!0}),Q=$.terminal.apply_formatters(D,k),be=$.terminal.normalize(Q[0]),Fe=$.terminal.length(be);return I||(Ne=Q[1],Ne>Fe&&(Ne=Fe)),be}catch(We){return alert_exception("[Formatting]",We.stack),D}}function Ht(D,I){var k=$.terminal.encode(bn(D),{tabs:r.tabs,before:I});return $.terminal.format(k,{charWidth:r.charWidth,allowedAttributes:r.allowedAttributes||[]})}function bn(D){return $.terminal.partition(D).join("")}function on(D,I){return $.terminal.length(D,I)}function Wt(D){var I=strlen(text(D));return I>0&&I>S-te-1||D.match(/\n/)}function xt(D,I,k){return $.terminal.substring(D,I,k)}function kn(D){return $.terminal.is_formatting(D)?D.replace(format_parts_re,"$4").match(/^emoji /):!1}var Nt=function(){var D=Re.prev(),I=Re.next(),k=Re.parent();function Q(Oe,qe){var f=Oe.match(Rt);f&&(Oe=Oe.replace(Rt," ")),k.toggleClass("cmd-end-line",!!f);var d=!1,g=$.extend({prompt:"",last:!1},qe),x=g.position,T=on(Oe),z=g.prompt,K;if(x===T)D.html(Ht(Oe)),K="&nbsp;",Fe(),I.html("");else if(x===0)D.html(""),K=xt(Oe,0,1),Re.html(Ht(K)),I.html(Ht(xt(Oe,1),z+K));else{var Z=$.terminal.substring(Oe,0,x);D.html(Ht(Z,z)),K=xt(Oe,x,x+1);var se=(z+Z).replace(/^.*\t/,"");Re.html(Ht(K,se)),x===T-1?(d=!0,I.html("")):(K.match(/\t/)?se="":se+=K,I.html(Ht(xt(Oe,x+1),se)))}if(ch_unit_bug)if(typeof wcwidth<"u"){var ie=strlen(text(K));ie===1&&kn(K)&&(ie=2),Re.width(W*ie)}else Re.width(W);Re.toggleClass("cmd-end-line",d),Pn();var fe=$.terminal.length(Re.text());if(fe>1){var le=Re.find("[data-text]")[0];le.style.setProperty("--length",fe)}jt()}function be(Oe,qe){var f=Oe.match(Rt),d='<div role="presentation" aria-hidden="true"';return f&&(Oe=Oe.replace(Rt," "),d+=' class="cmd-end-line"'),d+=">"+Ht(Oe,qe||"")+"</div>",d}function Fe(){Re.html('<span data-text class="end"><span>&nbsp;<span></span>')}function We(Oe){var qe=k;$.each(Oe,function(f,d){qe=$(be(d)).insertAfter(qe)})}function Ue(Oe){$.each(Oe,function(qe,f){k.before(be(f,qe===0?pe:""))})}return function(){var Oe;switch(typeof r.mask){case"boolean":Oe=r.mask?V.replace(/./g,"*"):V;break;case"string":Oe=V.replace(/./g,r.mask);break}var qe=kt(Oe),f;on(qe)===text(Oe).length?f=ce:f=Ne;var d;if(h.css({display:"none"}),h.find("div:not(.cmd-cursor-line)").remove(),D.html(""),Wt(qe)){var g=qe.match(/\t/g),x=qe;g&&(qe=qe.replace(/\t/g,"\0\0\0\0"));var T=Xn(qe);g&&(T=$.map(T,function(ge){return ge.replace(/\x00\x00\x00\x00/g,"	")}));var z=on(T[0]);if(!(z===0&&T.length===1))if(f<z)Q(T[0],{length:T.length,position:f,prompt:pe}),We(T.slice(1));else if(f===z)k.before(be(T[0],pe)),Q(T[1]||"",{length:T.length,position:0,last:T.length<=2}),T.length>2&&We(T.slice(2));else{var K=T.slice(-1)[0],Z=on(x),se=Z-f,ie=on(K),fe=0;if(se===-1&&(se=0),se<=ie)Ue(T.slice(0,-1)),ie===se?fe=0:fe=ie-se,Q(K,{length:T.length,position:fe,last:!0});else{var le,ke;for(fe=f,d=0;d<T.length;++d){var Me=$.terminal.length(T[d]);if(fe>Me)fe-=Me;else break}if(ke=T[d],le=d,fe===on(ke)&&(fe=0,ke=T[++le],ke===undefined$1)){var ee=$.terminal.defaults.strings.redrawError;throw new Error(ee)}Q(ke,{length:T.length,position:fe}),Ue(T.slice(0,le)),We(T.slice(le+1))}}s.find(".cmd-cursor-line ~ div:last-of-type").append("<span></span>")}else qe===""?(D.html(""),Fe(),I.html("")):Q(qe,{length:1,position:f});var Le=k.prevUntil(".cmd-prompt").length;is_css_variables_supported?s[0].style.setProperty("--cursor-line",Le):F.$node.css("top",Le*14+"px"),h.css({display:""})}}(),Mt=function(){function D(k,Q){var be=$.extend({},r,{position:Q,command:!0});return $.terminal.apply_formatters(k,be)[1]}function I(k,Q,be){var Fe=D(be,Q);if(Fe===k){var We=D(be,Q+1);return We>k?0:1}else return Fe<k?1:-1}return function(k,Q){if(Q===0)return 0;k=bare_text(k);var be=k.length,Fe=$.terminal.escape_brackets(V),We=binary_search(0,be,Q,I,[Fe]),Ue=$.terminal.split_characters(k);if(be>Ue.length){for(var Oe=0,qe=0;qe<Ue.length;++qe)if(Oe+=Ue[qe].length,Oe>=We)return Oe}return We}}();function an(){return U?new Array(U+1).join("￿"):""}var Gt,At=function(){function D(k){if(!k)return _e=0,te=U,k;var Q=an(),be=Q+k,Fe=$.terminal.split_equal(be,S);Fe=Fe.map(function(qe){return qe.replace(/^\uFFFF+/,"")}),Fe=Fe.map(function(qe){return $.terminal.have_formatting(qe)?$.terminal.format_split(qe).map(function(f){return $.terminal.is_formatting(f)?f:"[[;;]"+$.terminal.escape_brackets(f)+"]"}).join(""):"[[;;]"+$.terminal.escape_brackets(qe)+"]"});var We={charWidth:r.charWidth};pe=Fe[Fe.length-1];var Ue=$.terminal.encode(Fe[Fe.length-1],{tabs:r.tabs}),Oe=$.terminal.format(Ue,We);return _e=strlen(text(Ue)),te=_e+U,Fe.slice(0,-1).map(function(qe){return qe=$.terminal.encode(qe,{tabs:r.tabs}),'<span class="cmd-line">'+$.terminal.format(qe,We)+"</span>"}).concat([Oe]).join(`
`)}function I(k,Q){k&&((Q&&Q.formatters||!Q)&&(k=$.terminal.apply_formatters(k,{prompt:!0}),k=$.terminal.normalize(k)),k=crlf(k));var be=D(k);if(ae=k,be=be||$.terminal.format("[[;;]​]"),ye.html()!==be){ye.html(be);var Fe=ye.find("> span span");F.$node.attr("data-cmd-prompt",ye.text()),is_ch_unit_supported&&(ye.hide(),Fe.each(function(){var We=$(this),Ue=strlen(We.text());Ue===0?We.css("width",1):We.css("width",Ue+"ch")}),ye.show())}}return function(k){Gt&&Gt.set&&(Gt.set=$.noop,Gt=null);var Q=Gt={set:I};with_prompt(Be,function(be){Q.set(be,k)},s)}}();function wt(){is_function(r.onCommandChange)&&r.onCommandChange.call(s,V)}function gn(D,I,k){var Q=D.substring(0,I);if(I===0||!D.length)return 0;var be=/\n?([^\n]*)$/,Fe=Q.match(be),We=Fe[1].length;return!Lt(Q)&&(k||cn(Q,te))&&(We+=te),We===0?We:(We%=S,We===0?S:We)}$.extend(s,{option:function(D,I){return typeof I>"u"?r[D]:(r[D]=I,s)},name:function(D){if(D!==undefined$1){He=D;var I=Ee&&Ee.enabled()||!Ee;return Ee=new History(He,r.historySize,r.history==="memory"),I||Ee.disable(),s}else return He},purge:function(){return Ee.clear(),s},history:function(){return Ee},delete:function(D,I){var k,Q;return D===0?"":(D<0?ce>0&&(k=V.slice(0,ce).slice(D),Q=bare_text(V),Q=Q.slice(0,ce+D)+Q.slice(ce,Q.length),I||s.position(ce+D)):V!==""&&(Q=text(V),ce<Q.length&&(k=Q.slice(ce).slice(0,D),Q=Q.slice(0,ce)+Q.slice(ce+D,Q.length))),k&&(V=Q),Nt(),un(),wt(),k)},set:function(D,I,k){if(D!==undefined$1){var Q=D!==V;V=D,I||s.position(bare_text(V).length),Nt(),un(),!k&&Q&&wt()}return s},keymap:function(D,I){function k(Q,be){var Fe=de[Q];return is_function(Fe)&&(Fe=Fe.bind(s)),function(We){return be.call(s,We,Fe)}}if(D===null)return ve=de,s;if(typeof D>"u")return ve;if(typeof D=="string")if(typeof I>"u"){if(ve[D])return ve[D];if(de[D])return de[D]}else ve[D]=k(D,I);else return ve=$.extend({},ve||de,$.omap(D||{},k)),s},insert:function(D,I){var k=bare_text(V),Q=bare_text(D).length;return ce===k.length?D=k+D:ce===0?D=D+k:D=k.slice(0,ce)+D+k.slice(ce),V=D,I||s.position(Q,!0,!0),un(),Nt(),wt(),s},get:function(){return V},commands:function(D){return D&&(r.commands=D,s)},destroy:function(){return Kt.unbind("keypress.cmd",En),Kt.unbind("keydown.cmd",ln),Kt.unbind("input.cmd",Tn),s.stopTime("blink",Dn),s.find(".cmd-wrapper").remove(),s.find(".cmd-prompt, .cmd-clipboard, .cmd-editable").remove(),s.removeClass("cmd").removeData("cmd").off(".cmd"),s},display_column:function(D){var I=kt(V);return I=$.terminal.strip(I),gn(I,Ne,D)},column:function(D){return gn(V,ce,D)},line:function(){var D=V.substring(0,ce);return ce===0||!V.length?0:D.split(/\n/).length-1},__set_prompt_margin:function(D){U=D,te=_e+U},prompt:function(D,I){if(D===!0)return ae;if(D===undefined$1)return Be;var k=D!==Be;if(typeof D=="string"||typeof D=="function")Be=D;else throw new Error("prompt must be a function or string");return k&&(At(I),Nt()),s},kill_text:function(){return i},position:function(D,I,k){if(typeof D=="number"){var Q=ce,be=bare_text(V).length;return I?ce+=D:D<0?ce=0:D>be?ce=be:ce=D,Q!==ce&&(Nt(),!k&&is_function(r.onPositionChange)&&r.onPositionChange(ce,Ne),un(!0)),s}else return ce},refresh:function(){return At(),Nt(),un(!0),s},display_position:function(D,I){if(D===undefined$1)return Ne;var k=kt($.terminal.escape_formatting(V),!0),Q=on(k),be=bare_text(V).length,Fe;if(I?Fe=Ne+D:D>Q?Fe=Q:Fe=D,Q===be)return Ne=Fe,s.position(Fe);if(Q===Fe)return Ne=Fe,s.position(be);var We=Mt(V,Fe);return We!==-1&&(Ne=Fe,s.position(We)),s},visible:function(){var D=s.visible;return function(){return D.apply(s,[]),Nt(),At(),s}}(),show:function(){var D=s.show;return function(){return D.apply(s,[]),Nt(),At(),s}}(),resize:function(D){W=dn();var I;return typeof D=="number"?I=D:I=pn(W),(S!==I||arguments[0]===!0)&&(S=I,At(),Nt()),s},clear_cache:"Map"in root?function(){vn.clear()}:function(){return s},invoke_key:function(D){Ge||warn('invoke_key("'+D+'") called on disabled terminal');var I=D.toUpperCase().split("+"),k=I.pop(),Q=I.indexOf("CTRL")!==-1,be=I.indexOf("SHIFT")!==-1,Fe=I.indexOf("ALT")!==-1,We=I.indexOf("META")!==-1,Ue=$.Event("keydown",{ctrlKey:Q,shiftKey:be,altKey:Fe,metaKey:We,which:ne[k],key:k}),Oe=$(document.documentElement||window);return Oe.trigger(Ue),Ue=$.Event("keypress"),Ue.key=k,Ue.which=Ue.keyCode=0,Oe.trigger(Ue),s},clip:function(){return F},enable:function(D){if(!Ge){Ge=!0,s.addClass("enabled");try{F.$node.is(":focus")||F.$node.focus(),F.$node.caret(ce)}catch{}_t(!0),!D&&is_function(Be)&&At(),Pn(),un()}return a(),s},isenabled:function(){return Ge},disable:function(D){return Ge=!1,s.removeClass("enabled"),_t(!1),D||a(),s},mask:function(D){return typeof D>"u"?r.mask:(r.mask=D,Nt(),s)}}),s.name(r.name||r.prompt||""),W=dn(),S=pn(W),r.prompt!==!1&&(Be=r.prompt,At()),r.enabled===!0&&s.enable(),r.history||Ee.disable();var yn=!0,Wn=!1,jn=!1,Ln=!1,w=!1,Un=!1,Ct=!0,dt=!1,vt=!1,Ft=!1,Qt=!1,bt,sn="",Qe;function we(D){return D.key.toUpperCase()==="BACKSPACE"||D.which===8}function wn(D){return D.key&&D.key.length===1&&!D.ctrlKey}function Vt(D){var I=["HOLD+SHIFT+BACKSPACE","HOLD+BACKSPACE"];return I.indexOf(D)!==-1&&r.mobileDelete||r.repeatTimeoutKeys.indexOf(D)!==-1}function Nn(D){return D.which===35||D.which===36||D.which===37||D.which===38||D.which===39||D.which===40||D.which===13||D.which===27}var st=!1;function ln(D){""+D.key+D.fake+D.which;var I;vt=(D.key||"").toLowerCase()==="process"||D.which===0,jn=w&&Ln&&!we(D);try{D.fake||(Ln=wn(D),Un=String(D.key).toLowerCase()==="unidentified",dt=we(D))}catch{}if(D.key==="Unidentified"){Ct=!0;return}!D.fake&&["meta","os"].indexOf(D.key.toLowerCase())===-1&&(Ct=!1),w=!0,F.$node.off("input",at);var k=H(D);if(is_function(r.keydown)&&(D.key=q(D),I=r.keydown.call(s,D),I!==undefined$1))return I||(bt=!0),I;if(k!==Qe&&Bn(),Ge||k==="CTRL+C"&&is_terminal_selected(s)){if(Ft){if(Qe=k,k="HOLD+"+k,Qt)return;r.holdRepeatTimeout>0&&Vt(k)&&(Qt=!0,s.oneTime(r.holdRepeatTimeout,"delay",function(){Qt=!1}))}else s.oneTime(r.holdTimeout,"hold",function(){Ft=!0}),Qe=k;if(!D.fake&&is_android){if(st)return Bn(),st=!1,!1;l(k)?st=!0:l(Qe)&&(st=!1)}if(jt(),bt=["CTRL+V","META+V"].indexOf(k)!==-1,k.toLowerCase()==="enter"&&(yn=!0),O&&Nn(D))nn(),At(),D.which===27&&s.set(""),Nt(),D.which===13&&ln.call(this,D);else if(is_function(ve[k])){if(I=ve[k](D),I===!0)return;if(I!==undefined$1)return I}else{if(D.altKey)return;Wn=!1;return}}}function Bn(){s.stopTime("hold"),s.stopTime("delay"),Qt=Ft=!1}var Kt=$(document.documentElement||window);s.keymap(r.keymap||{});function En(D){""+D.key+D.fake,Bn();var I;if(D.fake||(w=!1),!((D.ctrlKey||D.metaKey)&&!D.altKey)&&!Wn){if(is_function(r.keypress)&&(I=r.keypress.call(s,D),I!==undefined$1))return I||(bt=!0),I;if(Ge){if(D.fake)return;var k;if(is_key_native){k=D.key;var Q=k.toUpperCase();gt[Q]&&(k=gt[Q])}if((!k||Un)&&(k=String.fromCharCode(D.which)),$.inArray(D.which,[13,0,8])>-1)return D.keyCode===123?void 0:!1;k&&(!D.ctrlKey||D.ctrlKey&&D.ctrlKey)&&(!(D.altKey&&D.which===100)||D.altKey)&&!jn&&(O?(B+=k,qt(),St()):k.length===1&&s.insert(k))}}}function Jt(D,I,k){var Q=$.Event(D);Q.which=k,Q.key=I,Q.fake=!0,Kt.trigger(Q)}var Bt=!1;function On(){sn=V,bt=!1,Ct=!0}function Tn(){var D=F.val();if(is_mobile||(D=D.replace(/^ /,"")),Ct||vt||(w||jn)&&!bt&&(Ln||Un)&&!dt){if(D&&D===V){is_android&&Ct&&Jt("keydown","Enter",13),On();return}var I=ce;if(Ct){var k=sn;dt=k.slice(0,k.length-1).length===D.length}if(Bt){Bt=!1,F.val(V);return}if(O)B=D,qt(),St();else{var Q=D.slice(ce);if(Q.length===1||dt){var be=get_next_character(Q);if(l(be)&&(Bt=!0),Ct){var Fe;dt?Fe=8:Fe=Q.toUpperCase().charCodeAt(0),Jt("keydown",dt?"Backspace":Q,Fe)}w&&!dt&&Jt("keypress",be,Q.charCodeAt(0))}if(dt){sn=V;return}if(bt){bt=!1;return}s.set(D)}dt?s.position(I-1):s.position(I+Math.abs(D.length-sn.length))}On()}return Kt.bind("keypress.cmd",En),Kt.bind("keydown.cmd",ln),Kt.bind("keyup.cmd",Bn),Kt.bind("input.cmd",Tn),function(){if(is_mobile){$(s[0]).add(F.$node).on("touchstart.cmd",function(){s.isenabled()?F.blur():F.focus()}),s.disable();return}var D=!1,I=0;s.on("mousedown.cmd",function(){D=!0}).on("mouseup.cmd",function(k){function Q(){var Ue=$(k.target),Oe=Ue.is(".cmd-prompt");!Oe&&We&&get_selected_html()===""&&Ge&&(Ue.is(".cmd")?s.position(text(V).length):s.display_position(it(k))),I=0}var be;if(k.originalEvent===undefined$1?be=k.button:be=k.originalEvent.button,be===0&&get_selected_html()===""){var Fe="click_"+y;if(++I===1){var We=D;Ge?r.clickTimeout===0?Q():s.oneTime(r.clickTimeout,Fe,Q):I=0}else s.stopTime(Fe),I=0}D=!1})}(),s.data("cmd",s),"KeyboardEvent"in window&&"key"in window.KeyboardEvent.prototype||setTimeout(function(){throw new Error("key event property not supported try https://github.com/inexorabletash/polyfill/blob/master/keyboard.js")},0),s};var strlen=function(){return typeof wcwidth>"u"?function(o){return o=o.replace(/\u200B/g,""),$.terminal.length(o)}:wcwidth}();function count_selfclosing_formatting(o){var r=0;if($.terminal.have_formatting(o)){var l=new RegExp(format_parts_re.source,"i");$.terminal.format_split(o).forEach(function(s){if($.terminal.is_formatting(s)){var v=s.match(l);v&&v[1].match(/@/)&&v[6]===""&&r++}})}return r}var entities={"&amp;":"&","&lt;":"<","&gt;":">","&Agrave;":"À","&Aacute;":"Á","&Acirc;":"Â","&Atilde;":"Ã","&Auml;":"Ä","&Aring;":"Å","&AElig;":"Æ","&Ccedil;":"Ç","&Egrave;":"È","&Eacute;":"É","&Ecirc;":"Ê","&Euml;":"Ë","&Igrave;":"Ì","&Iacute;":"Í","&Icirc;":"Î","&Iuml;":"Ï","&ETH;":"Ð","&Ntilde;":"Ñ","&Ograve;":"Ò","&Oacute;":"Ó","&Ocirc;":"Ô","&Otilde;":"Õ","&Ouml;":"Ö","&Oslash;":"Ø","&Ugrave;":"Ù","&Uacute;":"Ú","&Ucirc;":"Û","&Uuml;":"Ü","&Yacute;":"Ý","&THORN;":"Þ","&szlig;":"ß","&agrave;":"à","&aacute;":"á","&acirc;":"â","&atilde;":"ã","&auml;":"ä","&aring;":"å","&aelig;":"æ","&ccedil;":"ç","&egrave;":"è","&eacute;":"é","&ecirc;":"ê","&euml;":"ë","&igrave;":"ì","&iacute;":"í","&icirc;":"î","&iuml;":"ï","&eth;":"ð","&ntilde;":"ñ","&ograve;":"ò","&oacute;":"ó","&ocirc;":"ô","&otilde;":"õ","&ouml;":"ö","&oslash;":"ø","&ugrave;":"ù","&uacute;":"ú","&ucirc;":"û","&uuml;":"ü","&yacute;":"ý","&thorn;":"þ","&yuml;":"ÿ","&nbsp;":" ","&iexcl;":"¡","&cent;":"¢","&pound;":"£","&curren;":"¤","&yen;":"¥","&brvbar;":"¦","&sect;":"§","&uml;":"¨","&copy;":"©","&ordf;":"ª","&laquo;":"«","&not;":"¬","&shy;":"­","&reg;":"®","&macr;":"¯","&deg;":"°","&plusmn;":"±","&sup2;":"²","&sup3;":"³","&acute;":"´","&micro;":"µ","&para;":"¶","&cedil;":"¸","&sup1;":"¹","&ordm;":"º","&raquo;":"»","&frac14;":"¼","&frac12;":"½","&frac34;":"¾","&iquest;":"¿","&times;":"×","&divide;":"÷","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&fnof;":"ƒ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&bull;":"•","&hellip;":"…","&permil;":"‰","&prime;":"′","&Prime;":"″","&lsaquo;":"‹","&rsaquo;":"›","&oline;":"‾","&euro;":"€","&trade;":"™","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"};function render_entities(o){return o.replace(/&#(x?)([0-9]+);/g,function(r,l,s){return s=parseInt(s,l?16:10),String.fromCharCode(s)}).replace(/(&[^;]+;)/g,function(r,l){return entities[l]||l})}function bare_text(o){return o.match(/&/)?render_entities(safe(o)):o}function text(o){return bare_text($.terminal.strip(o))}function safe(o){return o.match(/[<>&]/)?o.replace(/&(?![^;]+;)/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;"):o}function crlf(o){return o.replace(/\r/g,"")}function char_len(o){return entity_re.test(o)?1:o.length}function make_re_fn(o){return function(l){var s=l.match(o);if(starts_with(s))return s[1]}}function starts_with(o){return o&&o.index===0}function is_simple_text(o){for(var r=[entity_re,emoji_re,combine_chr_re,astral_symbols_re],l=0;l<r.length;++l)if(r[l].test(o))return!1;return!0}function make_next_char_fun(o){var r=[];return[entity_re,emoji_re,combine_chr_re].forEach(function(l){l.test(o)&&r.push(make_re_fn(l))}),astral_symbols_re.test(o)&&r.push(function(s){var v=s.match(astral_symbols_re);if(starts_with(v)){var y=s.match(combine_chr_re);return y&&y.index===1?s.slice(0,3):v[1]}}),function(s){for(var v=0;v<r.length;++v){var y=r[v],h=y(s);if(h)return h}return s[0]}}function get_next_character(o){var r=o.match(entity_re);if(starts_with(r))return r[1];var l=o.match(combine_chr_re);if(starts_with(l))return l[1];var s=o.match(emoji_re);if(starts_with(s))return s[1];if(o.charCodeAt(0)<255)return o[0];var v=o.match(astral_symbols_re);return starts_with(v)?(l=o.match(combine_chr_re),l&&l.index===1?o.slice(0,3):o.slice(0,2)):o[0]}function normalize_position(o,r){if(r===0)return r;o=$.terminal.strip(o);var l=$.terminal.split_characters(o).reduce(function(s,v){if(typeof s=="number")return s;var y=s.length+char_len(v);return y>=r?s.position+1:{position:s.position+1,length:y}},{position:0,length:0});return typeof l=="number"?l:l.position}function style_to_string(o){return Object.keys(o).map(function(r){return r+":"+o[r]}).join(";")}function escape_html_attr(o){return o.replace(/"/g,"&quot;")}function char_width_object(o,r){var l={};return o===0?l.width="1px":is_ch_unit_supported?l.width=o+"ch":is_css_variables_supported?l["--length"]=o:r.charWidth&&(l.width=r.charWidth*o+"px"),l}function char_width_prop(o,r){return style_to_string(char_width_object(o,r))}function extra_css(o,r){if(typeof wcwidth<"u"){var l=bare_text(o),s=strlen(l);if(s>1&&s!==$.terminal.length(l))return char_width_object(s,r)}}function wide_characters(o,r){if(typeof wcwidth<"u"){var l=bare_text(o),s=$.terminal.split_characters(l);if(s.length===1)return o;var v=s.map(function(A){return{len:strlen(A),chr:A}}).reduce(function(A,F){var S=A[A.length-1];return S?S.len!==F.len?A.concat([{sum:F.len,len:F.len,specs:[F]}]):(A.pop(),A.concat([{sum:S.sum+F.len,len:S.len,specs:S.specs.concat(F)}])):[{sum:F.len,specs:[F],len:F.len}]},[]);return v.map(function(A){if(A.len===1)return y(A);var F=char_width_prop(A.sum,r);return A.sum===s.length||!F.length?"<span>"+y(A)+"</span>":A.specs.length>1?h(F,A.specs.map(function(S){return h(char_width_prop(S.len),S.chr)}).join("")):h(F,y(A))}).join("")}function y(A){return A.specs.map(function(F){return F.chr}).join("")}function h(A,F){return'<span style="'+A+'">'+F+"</span>"}return o}function binary_search(o,r,l,s,v){var y=r-o,h=o+Math.floor(y/2),A=[l,h].concat(v),F=s.apply(null,A);return F===0?h:F>0&&y>1?binary_search(h,r,l,s,v):F<0&&y>1?binary_search(o,h,l,s,v):-1}function is_terminal_selected(o){if(is_function(window.getSelection)){var r=window.getSelection();if(r.toString()){var l=r.getRangeAt(0).startContainer.parentNode,s=$(l).closest(".terminal");return s.length&&(o&&s.find(".cmd").is(o)||!o)}}}function get_selected_html(){var o="";if(is_function(window.getSelection)){var r=window.getSelection();if(r.rangeCount){for(var l=document.createElement("div"),s=0,v=r.rangeCount;s<v;++s)l.appendChild(r.getRangeAt(s).cloneContents());o=l.innerHTML}}return o}function with_selection(o){var r="",l=[];if(is_function(window.getSelection)){var s=window.getSelection();if(s.rangeCount){for(var v=document.createElement("div"),y=0,h=s.rangeCount;y<h;++y){var A=s.getRangeAt(y).cloneRange();l.push(A),v.appendChild(A.cloneContents())}r=v.innerHTML}}return o(r),l.length&&(s.removeAllRanges(),l.forEach(function(F){s.addRange(F)})),r!==""}function process_selected_line(){var o=$(this),r=o.text();return o.hasClass("cmd-end-line")&&(r+=`
`),r}function process_div(o){return $(o).find("> div, > span").map(process_selected_line).get().join(`
`).replace(/\n$/,"")}function process_selected_html(o){var r,l="",s=$("<div>"+o+"</div>");o.match(/<\/div>/)&&(r=s.find("div[data-index]").map(function(){return process_div(this)}).get().join(`
`),!r&&o.match(/style="width: 100%;?"/)&&(r=process_div(s)),l=r);var v=s.find(".cmd-prompt");v.length&&(l.length&&(l+=`
`),l+=v.text());var y=s.find('[role="presentation"]');return y.length&&(l+=y.map(process_selected_line).get().join("")),!l.length&&o&&(l=s.text()),l.replace(/\xA0/g," ")}var support_copy=function(){return typeof document>"u"||!is_function(document.queryCommandSupported)?!1:document.queryCommandSupported("copy")}(),text_to_clipboard;support_copy?text_to_clipboard=function(r,l){var s=r.val(),v=r.is(":focus"),y=r.caret();if(window.navigator&&window.navigator.clipboard)navigator.clipboard.writeText(l);else if(v)r.val(l).focus(),r[0].select(),document.execCommand("copy"),r.val(s),r.caret(y);else{var h=$("<textarea/>").css({position:"fixed",top:0,left:0}).appendTo("body");h.val(l).focus(),h[0].select(),document.execCommand("copy"),h.blur(),h.remove()}return!0}:text_to_clipboard=$.noop;var get_textarea_selection=function(){function o(){return""}if(typeof document>"u")return o;var r=document.createElement("textarea"),l="selectionStart"in r;return r=null,l?function(s){var v=s.selectionEnd-s.selectionStart;return s.value.substr(s.selectionStart,v)}:document.selection?function(){var s=document.selection.createRange();return s.text()}:o}();function clear_textarea_selection(o){o.selectionStart=o.selectionEnd=0}function common_string(o,r,l){if(!r.length)return"";for(var s=string_case(o),v=[],y=o.length;y<r[0].length;++y){for(var h=!1,A=r[0].charAt(y),F=A.toLowerCase(),S=1;S<r.length;++S){h=!0;var W=r[S].charAt(y),ae=W.toLowerCase();if(A!==W)if(l||s==="mixed"){h=!1;break}else if(F===ae)if(s==="lower")A=A.toLowerCase();else if(s==="upper")A=A.toUpperCase();else{h=!1;break}else{h=!1;break}}if(h)v.push(A);else break}return o+v.join("")}function trigger_terminal_change(o){terminals.forEach(function(r){r.settings().onTerminalChange.call(r,o)})}var select=function(){if(root.getSelection){var o=root.getSelection();return o.setBaseAndExtent?function(r,l){var s=root.getSelection();s.setBaseAndExtent(r,0,l,1)}:function(r,l){var s=root.getSelection(),v=document.createRange();v.setStart(r,0),v.setEnd(l,l.childNodes.length),s.removeAllRanges(),s.addRange(v)}}else return $.noop}();function process_command(o,r){var l=o.trim(),s=l.match(command_re)||[];if(s.length){var v=s.shift(),y=$.map(s,function(F){return F.match(/^["']/)?(F=F.replace(/\n/g,"\\u0000\\u0000\\u0000\\u0000"),F=r(F),F.replace(/\x00\x00\x00\x00/g,`
`)):r(F)}),h=$.map(s,function(F){var S=F.match(/^(['"`]).*\1$/);return S&&S[1]||""}),A=l.slice(v.length).trim();return{command:o,name:v,args:y,args_quotes:h,rest:A}}else return{command:o,name:"",args:[],args_quotes:[],rest:""}}function on_height_change(o){var r=window.visualViewport.scale,l=Math.round(window.visualViewport.height*r);o(l),window.visualViewport.addEventListener("resize",function(){var s=window.visualViewport.scale,v=Math.round(window.visualViewport.height*s);l!==v&&(l=v,o(l))})}$.terminal={version:"2.41.1",date:"Mon, 29 Apr 2024 16:20:55 +0000",color_names:["transparent","currentcolor","black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen","rebeccapurple"],Cycle,History,Stack,valid_color:function(r){return r.match(color_re)?!0:$.inArray(r.toLowerCase(),$.terminal.color_names)!==-1},unclosed_strings:function(r){return!!r.match(unclosed_strings_re)},escape_regex:function(r){if(typeof r=="string"){var l=/([-\\^$[\]()+{}?*.|])/g;return r.replace(l,"\\$1")}},have_formatting:function(r){return typeof r=="string"&&!!r.match(format_exist_re)},is_formatting:function(r){return typeof r=="string"&&!!r.match(format_full_re)},is_extended_command:function(r){return typeof r=="string"&&r.match(format_exec_re)&&!$.terminal.is_formatting(r)},each_extended_command:function(o,r){var l=o.split(format_exec_split_re);return $.map(l,function(s){if($.terminal.is_extended_command(s)){var v=s.replace(/^\[\[|\]\]$/g,"");return r(v)||""}return s}).join("")},format_split:function(r){return r.split(format_split_re).filter(Boolean)},tracking_replace:function(r,l,s,v){if(!(l instanceof RegExp))throw new Error("tracking_replace: Second argument need to be RegExp");function y(te,ye,O){return te.slice(ye,O)}function h(te){return $.terminal.strip(te).length}var A="",F,S=0,W,ae=v,pe;for(l.lastIndex=0;F=l.exec(r);){if(l.global){var _e=h(y(r,0,l.lastIndex));pe=_e-h(F[0])}else pe=F.index,_e=pe+h(F[0]);if(S<pe&&(A+=y(r,S,pe)),S=_e,typeof s=="function"?W=s.apply(null,F):W=s.replace(/\$(\$|\d)/g,function(te,ye){return ye==="$"?"$":F[ye]}),A+=W,pe<v){var U=h(W);U+=count_selfclosing_formatting(W),_e<v?ae=Math.max(0,ae+U-h(F[0])):ae+=U-(v-pe)}if(!l.global)break}return S<h(r)&&(A+=y(r,S)),r===A?[r,v]:[A,ae]},iterate_formatting:function(r,l){function s(it){return it===" "||it==="	"||it===`
`}function v(it){return ye&&r.slice(it-6,it)==="&nbsp;"||s(r[it-1])}function y(it){return ye?r.slice(it).match(entity_re):null}function h(it){return r[it]==="["&&r[it+1]==="["}function A(it){return r[it-1]!=="\\"&&r[it]==="\\"&&r[it+1]==="]"}function F(it){return r[it]==="]"||r[it]==="["}function S(it){return Re&&!_t&&(r[it]!=="]"&&!Ee||!te)||B&&!O}var W=make_next_char_fun(r);function ae(){var it=W(He);return it.length>1&&$.terminal.length(He)>1?it.length-1:0}function pe(){return v(Ne)&&(Re||_t)&&(V===-1&&i!==Ne||V!==-1)}var _e=!1;function U(){return Ne===r.length-1&&!_e?_e=!0:_e=O&&!!He.match(/^.]$/),_e}for(var te=$.terminal.have_formatting(r),ye=entity_re.test(r),O="",B=!1,Y=0,Ce,V=-1,ze=-1,i,ce=0,Be=0,Ge=/(&[^;]+);$/,Ne=0;Ne<r.length;Ne++){var He=r.slice(Ne),Ee=!1;Ce=He.match(format_start_re),Ce?(O=Ce[1],B=!1):O?r[Ne]==="]"&&(Ee=B,B?(O="",B=!1):B=!0):B=!0;var Re=O&&B||!O,_t=h(Ne);pe()&&(V=Ne,ze=Y);var jt=F(Ne);if(Be=0,Re)if(r[Ne]==="&"){if(Ce=y(Ne),Ce){Ne+=Ce[1].length-2;continue}++Y,++ce}else A(Ne)?(++Y,++ce,Be=1,Ne+=1):(!jt||!te||B&&!O)&&(++Y,++ce);if(S(Ne)){strlen(r[Ne])===2&&ce++;var pt=W(He),Ut=pt.length;pt===";"&&(Ce=r.slice(0,Ne+1).match(Ge),Ce&&(Be=Ce[1].length,Ut=Be+1));var Rt={last:U(),count:Y,index:Ne-Be,formatting:O,length:ce,text:B,size:Ut,space:V,space_count:ze},$t=l(Rt);if($t===!1)break;if($t&&($t.count!==undefined$1&&(Y=$t.count),$t.length!==undefined$1&&(ce=$t.length),$t.space!==undefined$1&&(i=V,V=$t.space),$t.index!==undefined$1)){Ne=$t.index;continue}}else Ne===r.length-1&&!_e&&l({last:!0,count:Y+1,index:Ne,formatting:O,length:0,text:B,space:V});B&&(Ne+=ae())}},partition:function(r,l){var s=$.extend({wrap:!0},l);if(!$.terminal.have_formatting(r)){var v=$.terminal.split_characters(r);return v.map(h)}var y=[];function h(F){return F.match(/\\$/)&&(F+="\\"),"[[;;]"+F+"]"}function A(F){return $.terminal.is_formatting(F)?F.match(/\\]$/)&&(F=F.replace(/\\]/g,"\\\\]")):s.wrap&&(F=h(F)),F}return $.terminal.iterate_formatting(r,function(S){if(S.text){var W=[];S.formatting&&W.push(S.formatting),W.push(r.substring(S.index,S.index+S.size)),S.formatting&&W.push("]"),y.push(A(W.join("")))}}),y},substring:function(r,l,s){var v=$.terminal.split_characters(r);if(!v.slice(l,s).length)return"";if(!$.terminal.have_formatting(r))return v.slice(l,s).join("");var y=0,h,A="",F="",S,W=1;return $.terminal.iterate_formatting(r,function(pe){l&&pe.count===l+1&&(y=pe.index,pe.formatting&&(A=pe.formatting)),s&&pe.count===s&&(F=pe.formatting,S=pe.index,W=pe.size),pe.count===s+1&&(h=pe.index,pe.formatting&&(h=S+W))}),l&&!y?"":(h===undefined$1&&(h=r.length),r=A+r.slice(y,h),F&&(r=r.replace(/(\[\[^\]]+)?\]$/,""),r+="]"),r)},normalize:function(r){return r=r.replace(format_re,function(s,v,y){if(v.match(self_closing_re)&&y==="")return"[["+v+"] ]";if(y==="")return"";function h(ae){return ae.replace(/\\\]/g,"&#93;").replace(/\n/g,"\\n").replace(/&nbsp;/g," ")}v=h(v);var A=v.match(/;/g).length;if(A>=4){var F=v.split(/;/),S=F.slice(0,4).join(";"),W=F.slice(4).join(";");return"[["+S+";"+(W||y)+"]"+y+"]"}else A===2?A=";;":A===3&&(A=";");return v+=A+h(y),"[["+v+"]"+y+"]"}),$.terminal.amp(r)},split_equal:function(r,l,s){typeof s=="boolean"&&(s={keepWords:s});for(var v=$.extend({trim:!1,keepWords:!1},s),y="",h=[],A=$.terminal.normalize(r).split(/\n/g),F=$.terminal.have_formatting(r),S=0,W=A.length;S<W;++S){if(A[S]===""){h.push("");continue}var ae=A[S],pe=make_next_char_fun(ae),_e=0,U,te=ae.length,ye=/\[\[[^\]]+\](?:[^\][]|\\\])+\]$/.test(ae),O=/^(&nbsp;|\s)/.test(ae);if(!F&&te<l){h.push(ae);continue}$.terminal.iterate_formatting(ae,function(Y){var Ce,V;if(Y.length>=l||Y.last||Y.length===l-1&&strlen(ae[Y.index+1])===2){var ze=!1;if(v.keepWords&&Y.space!==-1){var i=text(ae).substring(Y.space_count);i=i.slice(0,l).replace(/\s+$/,"");var ce=strlen(i);(space_re.test(i)||ce<l)&&(ze=!0)}var Be=Y.index+Y.size;ye&&(Be+=1);var Ge;if(v.keepWords&&Y.space!==-1&&Be!==te&&ze?(U=ae.slice(_e,Y.space),Ge=Y.space-1):(V=ae.slice(Y.index),Ce=pe(V),U=ae.slice(_e,Y.index)+Ce,Y.last&&ye&&Ce!=="]"&&(U+="]"),Ge=Y.index+Ce.length-1),(v.trim||v.keepWords)&&(U=U.replace(/(&nbsp;|\s)+$/g,"")),!O&&!y&&(U=U.replace(/^(&nbsp;|\s)+/g,"")),_e=(Ge||Y.index)+1,y){var Ne=/^[^\]]*\]/.test(U);U=y+U,Ne&&(y="")}var He=U.match(format_re);if(He){var Ee=He[He.length-1];Ee[Ee.length-1]!=="]"?(y=Ee.match(format_begin_re)[1],U+="]"):format_end_re.test(U)&&(U=U.replace(format_end_re,""),y=Ee.match(format_begin_re)[1])}return h.push(U),{index:Ge,length:0,space:-1}}})}return h},amp:function(r){return r.replace(/&(?!#[0-9]+;|#x[0-9a-f]+;|[a-z]+;)/gi,"&amp;")},encode:function(r,l){var s=$.extend({tabs:4,before:""},l);return $.terminal.amp(r).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").split(`
`).map(function(v){var y=v.split(/((?:\[\[[^\]]+\])?\t(?:\])?)/);return y=y.filter(Boolean),y.map(function(h,A){return h.match(/\t/)?h.replace(/\t([^\t]*)$/,function(F,S){if(A!==0&&y[A-1].match(/\t\]?$/)){var W=new Array(s.tabs+1).join("&nbsp;");return W+S}else{var ae=y.slice(A-1,A).join("");s.before&&A<=1&&(ae=s.before+ae);var pe=$.terminal.length(ae),_e=s.tabs-pe%s.tabs;return _e===0&&(_e=4),new Array(_e+1).join("&nbsp;")+S}}):h}).join("")}).join(`
`)},nested_formatting:function(r){if(!$.terminal.have_formatting(r))return r;var l=[],s=/((?:\[\[(?:[^\][]|\\\])+\])?(?:[^\][]|\\\])*\]?)/,v=/\[\[([^\][]+)\][\s\S]*/,y=/^\[\[([^;]*);([^;]*);([^\]]*)\]/,h=3,A=5;function F(O,B,Y){return Y.indexOf(O)===B}function S(O,B){return O=W(O),B?$.extend(B,O):O}function W(O){var B={};return O.split(/\s*;\s*/).forEach(function(Y){var Ce=Y.split(":").map(function(i){return i.trim()}),V=Ce[0],ze=Ce[1];B[V]=ze}),B}function ae(O){var B=O.slice();return O[A]&&(B[A]=_e(O[A])),O[h]&&(B[h]=U(O[h])),B[0]=pe(O[0]),B.join(";")}function pe(O){var B=O.filter(function(Y){return Y[0]==="-"}).map(function(Y){return Y[1]});return O.filter(function(Y){return B.indexOf(Y)===-1&&B.indexOf(Y[1])===-1}).join("")}function _e(O){return JSON.stringify(O,function(B,Y){return B==="style"?te(Y):Y})}function U(O){return O.filter(F).join(" ")}function te(O){return Object.keys(O).map(function(B){return B+":"+O[B]}).join(";")}function ye(O){function B(Ne){Y[A]||(Y[A]={});try{var He=JSON.parse(Ne);if(He.style){var Ee=He.style,Re=Y[A].style;He.style=S(Ee,Re),Y[A]=$.extend(He,Y[A],{style:S(Ee,Re)})}else Y[A]=$.extend(He,Y[A])}catch{warn("Invalid JSON "+Ne)}}var Y=[[],"",""];if(!O.length)return Y;for(var Ce=O.length;Ce--;){var V=$.terminal.parse_formatting(O[Ce]);if(V.length>5){var ze=V.slice(5).join(";");V=V.slice(0,5).concat(ze)}var i=V[0].split(/(-?[@!gbiuso])/g).filter(Boolean);i.forEach(function(Ne){Y[0].indexOf(Ne)===-1&&Y[0].push(Ne)});for(var ce=1;ce<V.length;++ce){var Be=V[ce].trim();if(Be)if(ce===h){Y[h]||(Y[h]=[]);var Ge=Be.split(/\s+/);Y[h]=Y[h].concat(Ge)}else ce===A?B(Be):Y[ce]||(Y[ce]=Be)}}return ae(Y)}return r.split(s).filter(Boolean).map(function(O){var B;if(O.match(/^\[\[/)&&!$.terminal.is_extended_command(O)){var Y=O.replace(v,"$1"),Ce=$.terminal.is_formatting(O);O=O.replace(y,""),l.push(Y),$.terminal.nested_formatting.__inherit__?B=ye(l):B=Y,Ce?l.pop():O+="]",O="[["+B+"]"+O}else{var V=!1;O.match(/\]/)&&(V=!0),l.length&&($.terminal.nested_formatting.__inherit__?B=ye(l):B=l[l.length-1],O="[["+B+"]"+O),V?l.pop():l.length&&(O+="]")}return O}).join("")},escape_formatting:function(r){return $.terminal.escape_brackets(r)},apply_formatters:function(r,l){if(r==="")return l&&typeof l.position=="number"?["",l.position]:"";function s(U,te,ye,O){!U.__no_warn__&&$.terminal.length(ye)!==$.terminal.length(O)&&warn("Your formatter["+te+"] change length of the string, you should use [regex, replacement] formatter or function  that return [replacement, position] instead")}function v(U){if(!l||!U)return!0;var te=["echo","command","prompt"],ye=te.some(function(Y){return U[Y]===!0});if(!ye)return!0;for(var O=te.length;O--;){var B=te[O];if(U[B]===!0&&l[B]===!0)return!0}return!1}l=l||{};var y=l.formatters||$.terminal.defaults.formatters,h=0;function A(U,te){var ye=$.extend({},l,{position:te[1]}),O=U(te[0],ye);return typeof O=="string"?(s(U,h-1,O,te[0]),typeof O=="string"?[O,ye.position]:te):is_array(O)&&O.length===2?O:te}var F;typeof l.position=="number"?F=[r,l.position]:F=[r,0];try{var S=y.reduce(function(U,te){if(h++,typeof te=="function"&&te.__meta__)return A(te,U);var ye=0,O=!1,B=$.terminal.format_split(U[0]),Y=B.map(function(Ge){var Ne,He=text(Ge).length;U[1]<ye+He&&!O?(Ne=U[1]-ye,O=!0):O?Ne=-1:Ne=U[1];var Ee=ye,Re;if(ye+=He,$.terminal.is_formatting(Ge))return O?[Ge,Ne]:[Ge,-1];if(is_array(te)){var _t=te[2]||{};if(Re=[Ge,Ne<0?0:Ne],Re[0].match(te[0])&&v(te[2]))if(_t.loop)for(;Re[0].match(te[0]);)Re=$.terminal.tracking_replace(Re[0],te[0],te[1],Re[1]);else Re=$.terminal.tracking_replace(Re[0],te[0],te[1],Re[1]);if(Ne<0)return[Re[0],-1]}else typeof te=="function"&&(Re=A(te,[Ge,Ne]));if(typeof Re<"u"){Re[1]!==-1&&(Re[1]+=Ee);var jt=text(Re[0]).length;return Re}return[Ge,-1]}),Ce=Y.filter(function(Ge){return Ge[1]!==-1})[0],V=Y.map(function(Ge){return Ge[0]}).join(""),ze;typeof Ce>"u"?ze=U[1]:ze=Ce[1];var i=text(V).length;if(i+=count_selfclosing_formatting(V),ze>i&&(ze=i),V===U[0])return U;var ce=$.terminal.strip(U[0]),Be=$.terminal.strip(V);return ce===Be?[V,U[1]]:[V,ze]},F);if(typeof l.position=="number"){var W=$.terminal.strip(S[0]).length;if($.terminal.length(S[0])<W){var ae=S[1];ae=normalize_position(S[0],ae);var pe=$.terminal.length(S[0]);ae>pe&&(ae=pe),S[1]=ae}return S}else return S[0]}catch(U){var _e="Error in formatter ["+(h-1)+"]";throw y.splice(h-1),new $.terminal.Exception("formatting",_e,U.stack)}},escape_brackets:function(r){return r.replace(/\[/g,"&#91;").replace(/\]/g,"&#93;").replace(/\\/g,"&#92;")},unescape_brackets:function(r){return r.replace(/&#91;/g,"[").replace(/&#93;/g,"]").replace(/&#92;/g,"\\")},length:function(r,l){return r?$.terminal.split_characters(l?r:text(r)).length:0},split_characters:function(r){if(is_simple_text(r))return r.split("");for(var l=[],s=make_next_char_fun(r);r.length;){var v=s(r);r=r.slice(v.length),l.push(v)}return l},columns:function(r,l,s){r=r.map(function(_e){return typeof _e!="string"?String(_e):_e});var v=r.map(function(_e){return $.terminal.strip(_e)}),y=v.map(function(_e){return strlen(_e)});typeof s>"u"&&(s=4);var h=Math.max.apply(null,y)+s,A=Math.floor(l/h)-1;if(A<1)return r.join(`
`);for(var F=[],S=0,W=r.length;S<W;S+=A){var ae=r.slice(S,S+A),pe=ae.pop();F.push(ae.reduce(function(_e,U){var te=$.terminal.strip(U),ye=new Array(h-te.length+1).join(" ");return _e.push(U+ye),_e},[]).join("")+pe)}return F.join(`
`)},strip:function(r){return $.terminal.have_formatting(r)?$.terminal.format_split(r).map(function(l){return $.terminal.is_formatting(l)?(l=l.replace(format_parts_re,"$6"),l.replace(/\\([[\]])/g,function(s,v){return v})):l}).join(""):r},active:function(){return terminals.front()},last_id:function(){var r=terminals.length();return r-1},parse_argument:function(r,l){function s(y){return y.split(string_re).map(function(h){if(h.match(/^['"`]/)){if(h==='""'||h==="''"||h==="``")return"";var A=h[0],F=new RegExp("(\\\\\\\\(?:\\\\\\\\)*)"+A,"g");h=h.replace(F,"$1").replace(/^[`'"]|[`'"]$/g,""),A==="'"&&(h=h.replace(/"/g,'\\"'))}return h='"'+h+'"',JSON.parse(h)}).join("")}if(l===!1)return r[0]==="'"&&r[r.length-1]==="'"?r.replace(/^'|'$/g,""):r[0]==="`"&&r[r.length-1]==="`"?r.replace(/^`|`$/g,""):r[0]==='"'&&r[r.length-1]==='"'?r.replace(/^"|"$/g,"").replace(/\\([" ])/g,"$1"):r.match(/\/.*\/[gimy]*$/)?r:r.match(/['"`]]/)?s(r):r.replace(/\\ /g," ");if(r==="true")return!0;if(r==="false")return!1;var v=r.match(re_re);return v?new RegExp(v[1],v[2]):r.match(/['"`]/)?s(r):r.match(/^-?[0-9]+n?$/)?r.match(/n$/)?BigInt(r.replace(/n$/,"")):parseInt(r,10):r.match(float_re)?parseFloat(r):r.replace(/\\(['"() ])/g,"$1")},parse_arguments:function(r){return $.map(r.match(command_re)||[],$.terminal.parse_argument)},split_arguments:function(r){return $.map(r.match(command_re)||[],function(l){return $.terminal.parse_argument(l,!1)})},parse_command:function(r){return process_command(r,$.terminal.parse_argument)},split_command:function(r){return process_command(r,function(l){return $.terminal.parse_argument(l,!1)})},parse_options:function o(r,l){var s=$.extend({},{boolean:[]},l);if(typeof r=="string")return o($.terminal.split_arguments(r),l);var v={_:[]};function y(A){this.value=A}var h=r.reduce(function(A,F){var S=typeof F=="string"?F:"";if(S.match(/^--?[^-]/)&&A instanceof y&&(v[A.value]=!0),S.match(/^--[^-]/)){var W=S.replace(/^--/,"");if(s.boolean.indexOf(W)===-1)return new y(W);v[W]=!0}else if(S.match(/^-[^-]/)){var ae=S.replace(/^-/,"").split("");if(s.boolean.indexOf(ae.slice(-1)[0])===-1)var pe=ae.pop();if(ae.forEach(function(_e){v[_e]=!0}),pe)return new y(pe)}else A instanceof y?v[A.value]=F:F&&v._.push(F);return null},null);return h instanceof y&&(v[h.value]=!0),v},parse_formatting:function(o){var r=$.terminal.unescape_brackets(o).split(";"),l=4;if(r.length>=5){var s=$.terminal.escape_brackets(r[l]);r[l]=s}return r},extended_command:function extended_command(term,string,options){var settings=$.extend({invokeMethods:!1},options),deferred=new $.Deferred;try{change_hash=!1;var m=string.match(extended_command_re);if(m)if(!settings.invokeMethods)warn("To invoke terminal or cmd methods you need to enable invokeMethods option"),deferred.reject();else{string=m[1];var obj=m[2]==="terminal"?term:term.cmd(),fn=m[3];try{var args=eval("["+m[4]+"]");if(!obj[fn])term.error("Unknow function "+fn);else{var ret=obj[fn].apply(term,args);if(ret&&ret.then)return ret}deferred.resolve()}catch(o){term.error("Invalid invocation in "+$.terminal.escape_brackets(string)),deferred.reject()}}else return term.exec(string,!0).done(function(){change_hash=!0})}catch(o){deferred.reject()}return deferred.promise()},iterator:function(o){function r(y){return $.terminal.is_formatting(y)&&y.match(/\]\\\]/)&&(y=y.replace(/\]\\\]/g,"]\\\\]")),y}if(typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"){var l=$.terminal.length(o),s=0,v={};return v[Symbol.iterator]=function(){return{next:function(){if(s<l){var y=$.terminal.substring(o,s,s+1);return s++,{value:r(y)}}else return{done:!0}}}},v}},formatter:new function(){try{this[Symbol.split]=function(o){return $.terminal.format_split(o)},this[Symbol.match]=function(o){return o.match(format_re)},this[Symbol.replace]=function(o,r){return o.replace(format_parts_re,r)},this[Symbol.search]=function(o){return o.search(format_re)}}catch{}},process_formatting:function(o){return $.terminal.format_split(o).map(function(r){if($.terminal.is_formatting(r)){for(var l=r.match(new RegExp(format_parts_re,"i")),s=l.pop(),v=1;v<=2;++v)$.terminal.valid_color(l[v])||(l[v]="");return l.slice(1,4).concat(s)}else return["","","",r]})},new_formatter:function(o){$.terminal.defaults.formatters.unshift(o)}},function(){function o(s,v){return s===""?v:s.replace(/&#93;/g,"]").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function r(s){return s.match(/^\.{1,2}\//)||s.match(/^\//)||!(s.match(/\//)||s.match(/^[^:]+:/))}function l(s,v){return function(y){if(v.anyLinks)return!0;var h=s(y);return h||warn("Invalid URL "+y+" only http(s) ftp and path are allowed"),h}}$.terminal.format=function(v,y){var h=$.extend({},{linksNoReferrer:!1,linksNoFollow:!1,allowedAttributes:[],charWidth:undefined$1,escape:!0,anyLinks:!1},y||{}),A=l(function(B){return B.match(/^((https?|file|ftp):\/\/|\.{0,2}\/)/)||r(B)},h),F=l(function(B){return B.match(/^(https?:|file:|blob:|data:)/)||r(B)},h);function S(B){return B.length&&h.allowedAttributes.length?B.filter(function(Y){if(Y==="data-text")return!1;for(var Ce=!1,V=h.allowedAttributes,ze=0;ze<V.length;++ze)if(V[ze]instanceof RegExp){if(V[ze].test(Y)){Ce=!0;break}}else if(V[ze]===Y){Ce=!0;break}return Ce}):[]}function W(B,Y,Ce){if(Y&&Ce.length){var V,ze=Ce.map(function(i){if(Y[i]===null)return"";if(Y[i]===!0)return i;var ce=escape_html_attr(Y[i]);return i==="style"&&(B&&(ce=ce?B+";"+ce:B),V=!0),i+'="'+ce+'"'}).filter(Boolean);return ze.length?(!V&&B&&ze.push('style="'+B+'"'),ze.join(" ")):""}return B?'style="'+B+'"':""}function ae(){var B=["noopener"];return h.linksNoReferrer&&B.unshift("noreferrer"),h.linksNoFollow&&B.unshift("nofollow"),B}var pe=ae().join(" ");function _e(B,Y,Ce){if(B.match(email_re))return'<a href="mailto:'+B+'"';var V=["<a"];return B&&A(B)&&V.push('href="'+B+'"'),Y?(Ce.includes("target")&&Y.target===undefined$1&&(Y.target="_blank"),Ce.includes("rel")&&Y.rel===undefined$1&&(Y.rel=pe)):(V.push('rel="'+pe+'"'),V.push('target="_blank"')),V.join(" ")}function U(B,Y){var Ce="<img";return F(B)&&(Ce+=' src="'+B+'"',Y&&(Ce+=' alt="'+Y+'"')),Ce}function te(B){for(var Y=0,Ce=!1;Y<B.length;){if(B[Y]==="&")Ce=!0;else{if(B[Y]===";"&&!Ce)return Y;B[Y]===";"&&(Ce=!1)}Y++}return-1}function ye(B,Y,Ce,V,ze,i,ce){var Be,Ge=[];if(i.match(/;/))try{var Ne=te(i);if(Ne!==-1){var He=i.substring(Ne+1);He=He.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">"),He.match(/^\s*\{[^}]*\}\s*$/)&&(Be=JSON.parse(He),Ge=S(Object.keys(Be)),i=i.substring(0,Ne))}}catch{}if(ce===""&&!Y.match(/@/))return"";ce=safe(ce),ce=ce.replace(/\\\]/g,"&#93;"),h.escape&&(ce=ce.replace(/\\\\/g,"\\"));var Ee={};Y.indexOf("b")!==-1&&(Ee["font-weight"]="bold");var Re=[];Y.indexOf("u")!==-1&&Re.push("underline"),Y.indexOf("s")!==-1&&Re.push("line-through"),Y.indexOf("o")!==-1&&Re.push("overline"),Re.length&&(Ee["text-decoration"]=Re.join(" ")),Y.indexOf("i")!==-1&&(Ee["font-style"]="italic"),$.terminal.valid_color(Ce)&&($.extend(Ee,{color:Ce,"--color":Ce,"--original-color":Ce}),Y.indexOf("!")!==-1&&(Ee["--link-color"]=Ce),Y.indexOf("g")!==-1&&(Ee["text-shadow"]="0 0 5px "+Ce)),$.terminal.valid_color(V)&&$.extend(Ee,{"background-color":V,"--background":V});var _t=o(i,ce),jt=extra_css(ce,h);jt&&(ce=wide_characters(ce,h),$.extend(Ee,jt));var pt,Ut=style_to_string(Ee);Y.indexOf("!")!==-1?pt=_e(_t,Be,Ge):Y.indexOf("@")!==-1?pt=U(_t,ce):pt="<span";var Rt=W(Ut,Be,Ge);return Rt&&(pt+=" "+Rt),ze!==""&&(pt+=' class="'+ze+'"'),Y.indexOf("!")!==-1?pt+=" data-text>"+ce+"</a>":Y.indexOf("@")!==-1?pt+=" data-text/>":pt+=' data-text="'+_t+'"><span>'+ce+"</span></span>",pt}if(typeof v=="string"){var O=$.terminal.format_split(v);return v=$.map(O,function(B){if(B==="")return B;if($.terminal.is_formatting(B))return B=B.replace(/\[\[[^\]]+\]/,function(ze){return ze.replace(/&nbsp;/g," ")}),B.replace(format_parts_re,ye);B=safe(B),B=B.replace(/\\\]/,"&#93;");var Y=o(B),Ce=extra_css(B,h),V;return Ce?(B=wide_characters(B,h),V='<span style="'+style_to_string(Ce)+'"'):V="<span",V+' data-text="'+Y+'">'+B+"</span>"}).join(""),v.replace(/<span><br\s*\/?><\/span>/gi,"<br/>")}else return""}}(),$.terminal.Exception=function o(r,l,s){arguments.length===1?(this.message=arguments[0],this.type="TERMINAL"):(this.type=r,this.message=l,s&&(this.stack=s))},$.terminal.Exception.prototype=new Error,$.terminal.Exception.prototype.toString=function(){return this.message+`
`+this.stack},$.fn.visible=function(){return this.css("visibility","visible")},$.fn.hidden=function(){return this.css("visibility","hidden")};var warnings=[];function warn(o){o="[jQuery Terminal] "+o,warnings.indexOf(o)===-1&&(warnings.push(o),console?console.warn?console.warn(o):console.log&&console.log(o):setTimeout(function(){throw new Error("WARN: "+o)},0))}var ids={};$.jrpc=function(o,r,l,s,v){var y=new $.Deferred,h;$.isPlainObject(o)?h=o:h={url:o,method:r,params:l,success:s,error:v};function A(W){return typeof W.id=="number"&&(typeof W.result<"u"||typeof W.error<"u")}ids[h.url]=ids[h.url]||0;var F={jsonrpc:"2.0",method:h.method,params:h.params,id:++ids[h.url]};function S(W,ae,pe,_e){A(W)||h.method==="system.describe"?(h.success&&h.success(W,pe,_e),y.resolve(W)):(h.error&&h.error(_e,"Invalid JSON-RPC"),y.reject({message:"Invalid JSON-RPC",response:ae}))}return $.ajax({url:h.url,beforeSend:function(ae,pe){is_function(h.request)&&h.request(ae,F),pe.data=JSON.stringify(F)},success:function(ae,pe,_e){var U=_e.getResponseHeader("Content-Type");U.match(/(application|text)\/json/)||warn("Response Content-Type is neither application/json nor text/json");var te;try{te=JSON.parse(ae)}catch(O){if(h.error)h.error(_e,"Invalid JSON",O);else throw new $.terminal.Exception("JSON","Invalid JSON",O.stack);y.reject({message:"Invalid JSON",response:ae});return}if(is_function(h.response)&&h.response(_e,te),is_function(h.intercept)){var ye=h.intercept(F,te);if(ye)return unpromise(ye,function(O){var B=JSON.stringify(O);S(O,B,pe,_e)})}S(te,ae,pe,_e)},error:h.error,contentType:"application/json",dataType:"text",async:!0,cache:!1,type:"POST"}),y.promise()},$.rpc=function(o,r,l){var s=new $.Deferred;function v(h){h.error?s.reject(h.error):s.resolve(h.result)}function y(h,A,F){s.reject({message:F})}return $.jrpc(o,r,l,v,y),s.promise()};function terminal_ready(o){return!!(o.closest("body").length&&o.is(":visible")&&o.find(".cmd-prompt").length)}function format_stack_trace(o){return o=$.terminal.escape_brackets(o),o.split(/\n/g).map(function(r){return"[[;;;terminal-error]"+r.replace(url_re,function(l){return"]"+l+"[[;;;terminal-error]"})+"]"}).join(`
`)}function get_char_size(o){var r;if(terminal_ready(o)){var l=o.find(".cmd-prompt").clone().css({visiblity:"hidden",position:"absolute"});l.appendTo(o.find(".cmd")).html("&nbsp;").wrap('<div class="cmd-wrapper"/>'),r={width:l.width(),height:l.height()},l.parent().remove()}else{var s=$('<div class="terminal terminal-temp"><div class="terminal-wrapper"><div class="terminal-output"><div><div class="terminal-line" style="float: left"><span>&nbsp;</span></div></div></div><div class="terminal-pixel"></div></div>').appendTo("body");if(s.addClass(o.attr("class")).attr("id",o.attr("id")),o){var v=o.attr("style");v&&(v=v.split(/\s*;\s*/).filter(function(h){return!h.match(/display\s*:\s*none/i)}).join(";"),s.attr("style",v))}var y=s.find(".terminal-line");r={width:y.width(),height:y.height()},s.remove()}return r}function get_num_chars(o,r){var l=o.find(".terminal-fill").width(),s=Math.floor(l/r.width);return s||1e3}function get_num_rows(o,r){var l=o.find(".terminal-fill"),s=l.height();return Math.floor(s/r.height)}function all(o,r){var l=o.filter(function(s){return s[r]()===s});return l.length===o.length}function string_case(o){var r=o.split("");return all(r,"toLowerCase")?"lower":all(r,"toUpperCase")?"upper":"mixed"}function same_case(o){return string_case(o)!=="mixed"}function is_function(o){return get_type(o)==="function"}function is_string(o){return get_type(o)==="string"}function is_object(o){return o&&typeof o=="object"}function is_promise(o){return is_object(o)&&is_function(o.then||o.done)}function is_big_int(o){return typeof o=="bigint"}function is_deferred(o){return is_promise(o)&&is_function(o.promise)}Array.isArray||(Array.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"});function is_array(o){return Array.isArray(o)}function have_custom_font(o){var r=$(o).css("--font");if(!r)return!1;var l=Array.from(document.fonts.keys()),s=l.find(function(v){return v.family===r});return!!s}function get_type(o){return typeof o=="function"?"function":o===null?o+"":Array.isArray(o)?"array":o instanceof String?"string":typeof o=="object"?"object":typeof o}var version_set=!$.terminal.version.match(/^\{\{/),copyright="Copyright (c) 2011-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>",version_string=version_set?" v. "+$.terminal.version:" ",reg=new RegExp(" {"+version_string.length+"}$"),name_ver="jQuery Terminal Emulator"+(version_set?version_string:""),signatures=[["jQuery Terminal","(c) 2011-2023 jcubic"],[name_ver,copyright.replace(/^Copyright | *<.*>/g,"")],[name_ver,copyright.replace(/^Copyright /,"")],["      _______                 ________                        __","     / / _  /_ ____________ _/__  ___/______________  _____  / /"," __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /","/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__","\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/_/_/_/_/  \\/\\__\\_\\___/","         \\/          /____/                                   ".replace(reg," ")+version_string,copyright],["      __ _____                     ________                              __","     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /"," __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /","/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__","\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/","          \\/              /____/                                          ".replace(reg,"")+version_string,copyright]];$.terminal.nested_formatting.__meta__=!0,$.terminal.nested_formatting.__inherit__=!0,$.terminal.nested_formatting.__no_warn__=!0,$.terminal.defaults={prompt:"> ",history:!0,exit:!0,clear:!0,enabled:!0,maskChar:"*",wrap:!0,checkArity:!0,raw:!1,tabindex:1,invokeMethods:!1,exceptionHandler:null,pauseEvents:!0,softPause:!1,mousewheel:null,touchscroll:null,memory:!1,cancelableAjax:!0,processArguments:!0,execAnimation:!1,execAnimationDelay:100,linksNoReferrer:!1,externalPause:!0,useCache:!0,anyLinks:!1,linksNoFollow:!1,processRPCResponse:null,completionEscape:!0,mobileDelete:is_mobile,convertLinks:!0,extra:{},tabs:4,historySize:60,scrollObject:null,historyState:!1,importHistory:!1,historyFilter:null,echoCommand:!0,scrollOnEcho:!0,login:null,outputLimit:-1,formatters:[$.terminal.nested_formatting],unixFormatting:{escapeBrackets:!1,ansiParser:{},ansiArt:!1},onAjaxError:null,pasteImage:!0,scrollBottomOffset:20,wordAutocomplete:!0,caseSensitiveAutocomplete:!0,caseSensitiveSearch:!0,clickTimeout:200,holdTimeout:400,holdRepeatTimeout:200,repeatTimeoutKeys:[],mobileIngoreAutoSpace:[],request:$.noop,response:$.noop,describe:"procs",onRPCError:null,keymap:null,doubleTab:null,doubleTabEchoCommand:!1,completion:!1,onInit:$.noop,onClear:$.noop,onBlur:$.noop,onFocus:$.noop,onTerminalChange:$.noop,onExit:$.noop,onPush:$.noop,onPop:$.noop,keypress:$.noop,keydown:$.noop,renderHandler:null,onAfterRedraw:$.noop,onEchoCommand:$.noop,onPaste:$.noop,onFlush:$.noop,onBeforeCommand:null,onAfterCommand:null,onBeforeEcho:null,onAfterEcho:null,onBeforeLogin:null,onAfterLogout:null,onBeforeLogout:null,onCommandChange:null,onPositionChange:null,allowedAttributes:["title","target","rel",/^aria-/,"id",/^data-/],strings:{comletionParameters:"From version 1.0.0 completion function need to have two arguments",wrongPasswordTryAgain:"Wrong username or password try again!",wrongPassword:"Wrong username or password!",ajaxAbortError:"Error while aborting ajax call!",wrongArity:"Wrong number of arguments. Function '%s' expects %s got %s!",commandNotFound:"Command '%s' Not Found!",oneRPCWithIgnore:"You can use only one rpc with describe == false or rpc without system.describe",oneInterpreterFunction:"You can't use more than one function (rpc without system.describe or with option describe == false counts as one)",loginFunctionMissing:"You didn't specify a login function",noTokenError:"Access denied (no token)",serverResponse:"Server responded",wrongGreetings:"Wrong value of greetings parameter",notWhileLogin:"You can't call `%s' function while in login",loginIsNotAFunction:"Authenticate must be a function",canExitError:"You can't exit from main interpreter",invalidCompletion:"Invalid completion",invalidSelector:"Sorry, but terminal said that you use invalid selector!",invalidTerminalId:"Invalid Terminal ID",login:"login",password:"password",recursiveLoop:"Recursive loop in echo detected, skip",notAString:"%s function: argument is not a string",redrawError:"Internal error, wrong position in cmd redraw",invalidStrings:"Command %s have unclosed strings",invalidMask:"Invalid mask used only string or boolean allowed",defunctTerminal:"You can't call method on terminal that was destroyed"}};var requests=[],terminals=new Cycle,save_state=[],hash_commands,change_hash=!1,fire_hash_change=!0,first_instance=!0;$.fn.terminal=function(o,r){function l(f){f&&(this.storage={}),this.set=function(d,g){f?this.storage[d]=g:$.Storage.set(d,g)},this.get=function(d){return f?this.storage[d]:$.Storage.get(d)},this.remove=function(d){f?delete this.storage[d]:$.Storage.remove(d)}}function s(f){if($.terminal.unclosed_strings(f)){var d=$.terminal.escape_brackets(f),g=sprintf(De().invalidStrings,"`"+d+"`");throw new $.terminal.Exception(g)}else return is_function(w.processArguments)?process_command(f,w.processArguments):w.processArguments?$.terminal.parse_command(f):$.terminal.split_command(f)}function v(f,d){return d=d||{},$.terminal.Animation&&f instanceof $.terminal.Animation?(f.start(a),!1):is_function(w.renderHandler)?unpromise(f,function(g){try{var x=w.renderHandler.call(a,g,d,a);return x===!1?!1:typeof x=="string"||F(x)||is_promise(x)?x:g}catch(T){return["[[;red;]"+T.message+"]",format_stack_trace(T.stack)].join(`
`)}}):f}function y(f,d){if(F(f)){var g=$.extend({},d,{raw:!0,finalize:function(x){x.find(".terminal-render-item").replaceWith(f),d&&is_function(d.finalize)&&d.finalize(x,a)}});return['<div class="terminal-render-item"/>',g]}}function h(f,d){var g=y(f,d);if(g)return a.echo.apply(a,g),!0}function A(f){return Yt.find("[data-index="+f+"]")}function F(f){return f instanceof $.fn.init||f instanceof Element}function S(f){f=v(f),f!==!1&&(h(f)||(is_string(f)?a.echo(f):is_array(f)?a.echo($.map(f,function(d){return JSON.stringify(d)}).join(" ")):typeof f=="object"?a.echo(JSON.stringify(f)):a.echo(f)))}function W(f,d){var g=/(.*):([0-9]+):([0-9]+)$/,x=f.match(g);x&&(a.pause(w.softPause),$.get(x[1],function(T){var z=x[1],K=T.split(`
`),Z=+x[2]-1,se=Z>2?Z-2:0,ie=K.slice(se,Z+3).map(function(fe,le){var ke="["+(Z+le-1)+"]: ",Me=d-ke.length-4;return fe.length>Me&&(fe=fe.substring(0,Me)+"..."),(Z>2?le===2:le===Z)&&(fe="[[;#f00;]"+$.terminal.escape_brackets(fe)+"]"),ke+fe}).filter(Boolean).join(`
`);ie.length&&(a.echo("[[b;white;]"+z+"]"),a.echo(ie).resume())},"text"))}function ae(f){if(is_function(w.onRPCError))w.onRPCError.call(a,f);else if(a.error("&#91;RPC&#93; "+f.message),f.error&&f.error.message){f=f.error;var d="	"+f.message;f.file&&(d+=' in file "'+f.file.replace(/.*\//,"")+'"'),f.at&&(d+=" at line "+f.at),a.error(d)}}function pe(f,d){var g;w.rpc&&(g=function(){return w.rpc.apply(a,arguments)});var x=function(T,z){a.pause(w.softPause),$.jrpc({url:f,method:T,params:z,request:function(K,Z){try{w.request.call(a,K,Z,a)}catch(se){B(se,"USER")}},intercept:g,response:function(K,Z){try{w.response.call(a,K,Z,a)}catch(se){B(se,"USER")}},success:function(Z){Z.error?ae(Z.error):is_function(w.processRPCResponse)?w.processRPCResponse.call(a,Z.result,a):Z.result!==null&&S(Z.result),a.resume()},error:U})};return function(T,z){if(T!==""){try{T=s(T)}catch(Z){B(Z,"TERMINAL (get_processed_command)");return}if(!d||T.name==="help")x(T.name,T.args);else{var K=z.token(!0);K?x(T.name,[K].concat(T.args)):z.error("&#91;AUTH&#93; "+De().noTokenError)}}}}function _e(f,d,g,x){return function(T,z){if(T!==""){var K;try{K=s(T)}catch(fe){is_function(w.exception)?w.exception(fe,a):a.error("Error: "+(fe.message||fe));return}var Z=f[K.name],se=get_type(Z);if(se==="function")if(d&&Z.length!==K.args.length)a.error("&#91;Arity&#93; "+sprintf(De().wrongArity,K.name,Z.length,K.args.length));else return Z.apply(a,K.args);else if(se==="object"||se==="string"){var ie=[];se==="object"&&(ie=Object.keys(Z),Z=_e(Z,d)),z.push(Z,{prompt:K.name+"> ",name:K.name,completion:se==="object"?ie:undefined$1})}else is_function(x)?x(T,a):is_function(w.onCommandNotFound)?w.onCommandNotFound.call(a,T,a):z.error(sprintf(De().commandNotFound,K.name))}}}function U(f,d,g){a.resume(),is_function(w.onAjaxError)?w.onAjaxError.call(a,f,d,g):d!=="abort"&&a.error("&#91;AJAX&#93; "+d+" - "+De().serverResponse+`:
`+$.terminal.escape_brackets(f.responseText))}function te(f,d,g){function x(Z){Z.error?ae(Z.error):is_function(w.processRPCResponse)?w.processRPCResponse.call(a,Z.result,a):S(Z.result),a.resume()}function T(Z,se){try{w.request.call(a,Z,se,a)}catch(ie){B(ie,"USER")}}function z(Z,se){try{w.response.call(a,Z,se,a)}catch(ie){B(ie,"USER")}}function K(Z){var se=Z;if(w.describe!==!1&&w.describe!==""&&w.describe.split(".").forEach(function(le){se=se[le]}),se&&se.length){var ie={};$.each(se,function(le,ke){$.isPlainObject(ke)&&typeof ke.name=="string"&&(ie[ke.name]=function(){var Me=d&&ke.name!=="help",ee=Array.prototype.slice.call(arguments),Le=ee.length+(Me?1:0);if(w.checkArity&&ke.params&&ke.params.length!==Le)a.error("&#91;Arity&#93; "+sprintf(De().wrongArity,ke.name,ke.params.length,Le));else{if(a.pause(w.softPause),Me){var ge=a.token(!0);ge?ee=[ge].concat(ee):a.error("&#91;AUTH&#93; "+De().noTokenError)}$.jrpc({url:f,method:ke.name,params:ee,request:T,response:z,success:x,error:U})}})});var fe=typeof d=="string"?d:"login";ie.help=ie.help||function(le){if(typeof le>"u"){var ke=se.map(function(Le){return Le.name}).join(", ")+", help";a.echo("Available commands: "+ke)}else{var Me=!1;if($.each(se,function(Le,ge){if(ge.name===le){Me=!0;var xe="";if(xe+="[[bu;;]"+ge.name+"]",ge.params){var Ae=ge.params;d&&ge.name!==fe&&(Ae=Ae.slice(1)),xe+=" "+Ae.join(" ")}return ge.help&&(xe+=`
`+ge.help),a.echo(xe),!1}}),!Me)if(le==="help")a.echo(`[[bu;;]help] [method]
display help for the method or list of methods if not specified`);else{var ee="Method `"+le+"' not found ";a.error(ee)}}},g(ie)}else g(null)}return $.jrpc({url:f,method:"system.describe",params:[],success:K,request:T,response:z,error:function(){g(null)}})}function ye(f,d,g){g=g||$.noop;var x=get_type(f),T,z={},K=0,Z;if(x==="array")T={},function ie(fe,le){if(fe.length){var ke=fe[0],Me=fe.slice(1),ee=get_type(ke);ee==="string"?w.describe===!1?(++K===1?Z=pe(ke,d):a.error(De().oneRPCWithIgnore),ie(Me,le)):(a.pause(w.softPause),te(ke,d,function(Le){Le?$.extend(T,Le):++K===1?Z=pe(ke,d):a.error(De().oneRPCWithIgnore),a.resume(),ie(Me,le)})):ee==="function"?(Z?a.error(De().oneInterpreterFunction):Z=ke,ie(Me,le)):ee==="object"&&($.extend(T,ke),ie(Me,le))}else le()}(f,function(){g({interpreter:_e(T,!1,d,Z&&Z.bind(a)),completion:Object.keys(T)})});else if(x==="string")w.describe===!1?(T={interpreter:pe(f,d)},Array.isArray(w.completion)&&(T.completion=w.completion),g(T)):(a.pause(w.softPause),te(f,d,function(ie){ie?(z.interpreter=_e(ie,!1),z.completion=Object.keys(ie)):z.interpreter=pe(f,d),g(z),a.resume()}));else if(x==="object")g({interpreter:_e(f,w.checkArity),completion:Object.keys(f)});else{if(x==="undefined")f=$.noop;else if(x!=="function"){var se=x+" is invalid interpreter value";throw new $.terminal.Exception(se)}g({interpreter:f,completion:w.completion})}}function O(f,d){var g=get_type(d)==="boolean"?"login":d;return function(x,T,z){a.pause(w.softPause),$.jrpc({url:f,method:g,params:[x,T],request:function(K,Z){try{w.request.call(a,K,Z,a)}catch(se){B(se,"USER")}},response:function(K,Z){try{w.response.call(a,K,Z,a)}catch(se){B(se,"USER")}},success:function(Z){!Z.error&&Z.result?z(Z.result):z(null),a.resume()},error:U})}}function B(f,d,g){is_function(w.exceptionHandler)?w.exceptionHandler.call(a,f,d):(a.exception(f,d),g||setTimeout(function(){throw f},0))}function Y(f){function d(x,T,z,K,Z,se,ie){function fe(ee,Le){return"[["+[T+(ee||""),z,K,Z,Le||se].join(";")+"]"}function le(ee){return"]"+fe("!",ee)+ee+"]"+fe()}if(!T.match(/!/)){var ke=ie.match(email_full_re)||ie.match(url_full_re);if(ke)return fe("!",ke[1])+ie+"]";if(ie.match(email_re)||ie.match(url_nf_re)){var Me=ie.replace(email_re,le).replace(url_nf_re,le);return fe("",se)+Me+"]"}}return x}function g(x){return x.replace(email_re,"[[!;;]$1]").replace(url_nf_re,"[[!;;]$1]")}return $.terminal.have_formatting(f)?$.terminal.format_split(f).map(function(x){return $.terminal.is_formatting(x)?x.replace(format_parts_re,d):g(x)}).join(""):g(f)}function Ce(f,d){return(strlen(text(f))>d.cols||f.match(/\n/))&&(w.wrap===!0&&d.wrap===undefined$1||w.wrap===!1&&d.wrap===!0)}var V;"Map"in root&&(V=new Map);function ze(f,d,g){return g.exec||d.options.clear_exec?$.terminal.each_extended_command(f,function(x){if(g.exec){d.options.exec=!1,d.options.clear_exec=!0;var T=x.trim();dn&&dn===T?(dn="",a.error(De().recursiveLoop)):(dn=T,$.terminal.extended_command(a,x,{invokeMethods:g.invokeMethods}).then(function(){dn=""}))}}):f}function i(f){try{var d=!is_function(f.value),g=$.extend({exec:!0,raw:!1,finalize:$.noop,useCache:d,invokeMethods:!1,formatters:!0,convertLinks:w.convertLinks},f.options||{}),x=We(f.value);if(x&&is_function(x.then))return x.then(function(fe){i($.extend(f,{value:fe,options:g}))});if(x!==""){if(!g.raw){if(w.useCache&&g.useCache){var T=x;if(V&&V.has(T)){var z=V.get(T);return Ct.append(z.input,f.index,g,z.raw),!0}}if(g.formatters)try{x=$.terminal.apply_formatters(x,$.extend(w,{echo:!0}))}catch(fe){B(fe,"FORMATTING")}if(x=ze(x,f,g),x==="")return;g.convertLinks&&(x=Y(x));var K=x;x=crlf($.terminal.normalize(x)),x=$.terminal.encode(x,{tabs:w.tabs});var Z,se=g.cols=a.cols();Ce(x,g)?Z=$.terminal.split_equal(x,se,{keepWords:g.keepWords,trim:!0}):x.match(/\n/)&&(Z=x.split(/\n/))}}else K="";var ie=Z||x;V&&T&&d&&V.set(T,{input:ie,raw:K}),Ct.append(ie,f.index,g,K)}catch(fe){Ct.clear(),is_function(w.exceptionHandler)?w.exceptionHandler.call(a,fe,"TERMINAL"):alert_exception("[Internal Exception(process_line)]",fe)}return!0}function ce(f){if(f=$.extend({},{update:!1,scroll:!0},f||{}),!f.update){we.resize(kt);var d=Yt.empty().detach()}try{Ct.clear(),unpromise(dt.render(a.rows(),function(g){return g.map(i)}),function(){a.flush(f),f.update||we.before(d),H("onAfterRedraw")})}catch(g){is_function(w.exceptionHandler)?w.exceptionHandler.call(a,g,"TERMINAL (redraw)"):alert_exception("[redraw]",g)}}function Be(){if(w.outputLimit>=0){var f;w.outputLimit===0?f=a.rows():f=w.outputLimit;var d=Yt.find("> div > div");if(d.length+1>f){var g=d.length-f+1,x=d.slice(0,g),T=x.parent();x.remove(),T.each(function(){var z=$(this);z.is(":empty")&&(dt.unmount(z),z.remove())}),dt.limit_snapshot(g)}}}function Ge(){w.greetings===undefined$1?a.echo(a.signature,{finalize:a11y_hide,formatters:!1}):w.greetings&&(is_string(w.greetings)?a.echo(w.greetings):is_function(w.greetings)?a.echo(function(){try{var f=new $.Deferred,d=w.greetings.call(a,f.resolve);return d&&f.resolve(d),f.promise()}catch(g){w.greetings=null,B(g,"greetings")}}):a.error(De().wrongGreetings))}function Ne(f){var d=we.mask();switch(typeof d){case"string":return f.replace(/./g,d);case"boolean":return d?f.replace(/./g,w.maskChar):$.terminal.escape_formatting(f)}throw new $.terminal.Exception(De().invalidMask)}function He(f){typeof f>"u"&&(f=a.get_command());var d=we.prompt(!0);f=Ne(f);var g={exec:!1,formatters:!1,convertLinks:!1,finalize:function(T){a11y_hide(T.addClass("terminal-command")),H("onEchoCommand",[T,f])}};f=$.terminal.apply_formatters(f,{command:!0}),a.echo(d+f,g)}function Ee(){return En.outerWidth()!==a.outerWidth()}function Re(f){var d=terminals.get()[f[0]];if(!d)throw new $.terminal.Exception(De().invalidTerminalId);var g=f[1];if(save_state[g])d.import_view(save_state[g]);else{change_hash=!1;var x=f[2];x&&d.exec(x).done(function(){change_hash=!0,save_state[g]=d.export_view()})}}function _t(f){return function(d){a.error("["+f+"] "+(d.message||d)).resume()}}function jt(){change_hash&&(fire_hash_change=!1,location.hash="#"+JSON.stringify(hash_commands),setTimeout(function(){fire_hash_change=!0},100))}var pt=!0,Ut=[];function Rt(f,d,g){function x(){(w.historyState||w.execHash&&g)&&(save_state.length?a.save_state(null):a.save_state())}function T(){g||(change_hash=!0,w.historyState&&a.save_state(f,!1),change_hash=le)}function z(){fe.resolve(),H("onAfterCommand",[f])}function K(Me,ee){typeof Me<"u"&&S(Me),z(),ee&&a.resume()}function Z(Me){return is_function(Me.done||Me.then)&&xt}function se(){var Me=ie.interpreter.call(a,f,a);if(T(),Me){Xn||(Z(Me)?bt=!0:is_promise(Me)&&a.pause(w.softPause)),Xn=!1;var ee=_t("Command");return is_function(Me.done||Me.then)?unpromise(Me,function(Le){K(Le,!0)},ee):$.when(Me).done(K).catch(ee)}else if(g&&we.refresh(),bt?Ut.push(function(){z()}):z(),g)return fe.promise()}pt&&(pt=!1,x());try{if(H("onBeforeCommand",[f])===!1)return;g?(dn=f.trim(),qt=$.terminal.split_command(dn)):qt=$.terminal.split_command(f),he()||g&&(is_function(w.historyFilter)&&w.historyFilter(f)||f.match(w.historyFilter))&&we.history().append(f);var ie=Qe.top();!d&&w.echoCommand&&He(f);var fe=new $.Deferred,le=change_hash;if(f.match(/^\s*login\s*$/)&&a.token(!0))T(),a.level()>1?a.logout(!0):a.logout(),z();else if(w.exit&&f.match(/^\s*exit\s*$/)&&!wt){T();var ke=a.level();(ke===1&&a.get_token()||ke>1)&&(a.get_token(!0)&&a.set_token(undefined$1,!0),a.pop()),z()}else if(w.clear&&f.match(/^\s*clear\s*$/)&&!wt)T(),a.clear(),z();else return se();return fe.promise()}catch(Me){if(B(Me,"USER",g),a.resume(),g)throw Me}}function $t(){H("onBeforeLogout",[],!0)!==!1&&(it(),H("onAfterlogout",[],!0),a.login(k,!0,ve))}function it(){var f=a.prefix_name(!0)+"_";vt.remove(f+"token"),vt.remove(f+"login")}function gt(f){var d=a.prefix_name()+"_interpreters",g=vt.get(d);g?g=JSON.parse(g):g=[],$.inArray(f,g)===-1&&(g.push(f),vt.set(d,JSON.stringify(g)))}function q(f){var d=Qe.top(),g=a.prefix_name(!0);he()||gt(g);var x=a.login_name(!0);we.name(g+(x?"_"+x:""));var T=d.prompt;is_function(T)&&(T=Ue(T));var z=is_function(d.prompt);(z||T!==we.prompt())&&(z&&we.prompt(""),we.prompt(d.prompt)),typeof d.history<"u"&&a.history().toggle(d.history),$.isPlainObject(d.keymap)&&we.keymap(null).keymap($.extend({},qe,$.omap(d.keymap,function(K,Z){return function(){var se=[].slice.call(arguments);try{return Z.apply(a,se)}catch(ie){B(ie,"USER KEYMAP")}}}))),we.set(""),!f&&is_function(d.onStart)&&d.onStart.call(a,a)}function H(f,d,g){d=(d||[]).concat([a]);var x=Qe&&Qe.top();if(x&&is_function(x[f])&&!g)try{return x[f].apply(a,d)}catch(T){delete x[f],B(T,f)}else if(is_function(w[f]))try{return w[f].apply(a,d)}catch(T){w[f]=null,B(T,f)}}var b=function(){function f(d){if(!d)try{return a.scroll_to(a.find(".cmd-cursor-line")),!0}catch{return!0}}return typeof commonjsGlobal<"u"&&typeof commonjsGlobal.it=="function"?f:debounce(f,100,{leading:!0,trailing:!1})}();function M(){var f=a.find(".cmd-cursor-line");return f.is_fully_in_viewport(a).then(b)}function X(f){if(typeof history<"u"&&history.replaceState){var d="#"+JSON.stringify(f),g=location.href.replace(/#.*$/,d);history.replaceState(null,"",g)}}function ne(){if(fire_hash_change&&w.execHash)try{if(location.hash){var f=location.hash.replace(/^#/,"");hash_commands=JSON.parse(decodeURIComponent(f))}else hash_commands=[];hash_commands.length?Re(hash_commands[hash_commands.length-1]):save_state[0]&&a.import_view(save_state[0])}catch(d){B(d,"TERMINAL")}}function ve(){q(),Nt.resolve(),Ge()}function de(){dt.length&&St.length&&$.when.apply($,St);function f(){gn=$.noop,!d&&a.enabled()&&a.resume(!0)}var d=!1;if(is_function(w.onInit)){gn=function(){d=!0};var g;try{g=w.onInit.call(a,a)}catch(x){B(x,"OnInit")}finally{is_promise(g)?g.then(f).catch(function(x){B(x,"OnInit"),f()}):f()}}first_instance&&(first_instance=!1,$(window).on("hashchange",ne))}function he(){return wt||we.mask()!==!1}function Ie(f){var d,g=Qe.top();if(is_function(g.keydown)){if(d=g.keydown.call(a,f,a),d!==undefined$1)return d}else if(is_function(w.keydown)&&(d=w.keydown.call(a,f,a),d!==undefined$1))return d}var Ye={"CTRL+D":function(f,d){return wt||(we.get()===""?Qe.size()>1||is_function(k)?a.pop(""):a.resume():d()),!1},"CTRL+C":function(){return with_selection(function(f){if(f===""){var d=a.get_command(),g=a.get_position();d=d.slice(0,g)+"^C"+d.slice(g+2),He(d),a.set_command("")}else{var x=a.find("textarea");text_to_clipboard(x,process_selected_html(f))}}),!1},"CTRL+L":function(){return a.clear(),!1},TAB:function(f,d){var g=Qe.top(),x,T;typeof g.caseSensitiveAutocomplete<"u"?T=g.caseSensitiveAutocomplete:T=w.caseSensitiveAutocomplete,w.completion&&get_type(w.completion)!=="boolean"&&g.completion===undefined$1?x=w.completion:x=g.completion,x==="settings"&&(x=w.completion);function z(ie){ie=ie.slice(),a.before_cursor(!1).match(/\s/)||(w.clear&&$.inArray("clear",ie)===-1&&ie.push("clear"),w.exit&&$.inArray("exit",ie)===-1&&ie.push("exit")),a.complete(ie,{echo:!0,word:w.wordAutocomplete,escape:w.completionEscape,caseSensitive:T,echoCommand:w.doubleTabEchoCommand,doubleTab:w.doubleTab})}if(x)switch(get_type(x)){case"function":var K=a.before_cursor(w.wordAutocomplete);if(x.length===3){var Z=new Error(De().comletionParameters);return B(Z,"USER"),!1}var se=x.call(a,K,z);unpromise(se,z,_t("Completion"));break;case"array":z(x);break;default:throw new $.terminal.Exception(De().invalidCompletion)}else d();return!1},"CTRL+V":function(f,d){return d(f),a.oneTime(200,function(){a.scroll_to_bottom()}),!0},"CTRL+TAB":function(){if(terminals.length()>1)return a.focus(!1),!1},PAGEDOWN:function(){a.scroll(a.height())},PAGEUP:function(){a.scroll(-a.height())}};function ut(f){var d,g;if(xt)return!1;if(a.enabled())if(a.paused()){if(!w.pauseEvents&&(d=Ie(f),d!==undefined$1))return d;if(f.which===68&&f.ctrlKey){if(w.pauseEvents&&(d=Ie(f),d!==undefined$1))return d;if(requests.length){for(g=requests.length;g--;){var x=requests[g];if(x.readyState!==4)try{x.abort()}catch{is_function(w.exceptionHandler)?w.exceptionHandler.call(a,f,"AJAX ABORT"):a.error(De().ajaxAbortError)}}requests=[]}a.resume()}return!1}else{if(d=Ie(f),d!==undefined$1)return d;f.which!==9&&(pn=0)}}function at(f){var d=Qe.top();if(Ft&&(!bt||!w.pauseEvents)){if(is_function(d.keypress))return d.keypress.call(a,f,a);if(is_function(w.keypress))return w.keypress.call(a,f,a)}}function Ze(f,d){return function(x,T){var z=$.terminal.apply_formatters(x,{animation:!0});z=$.terminal.normalize(z);var K=!1;if(T&&typeof T.keepWords<"u"&&(K=T.keepWords),d)var Z=$.terminal.split_equal(z,a.cols(),{keepWords:K});xt=!0;var se=a.get_prompt(),ie=0,fe=$.terminal.length(z);if(fe>0){var le="";T.prompt?le=$.terminal.apply_formatters(T.prompt,{prompt:!0}):a.set_prompt("");var ke=a.is_bottom(),Me=0;if(d)var ee=Z.map(function(Ae){return{formatted:Ae,chars:$.terminal.partition(Ae,{wrap:!1}),len:$.terminal.length(Ae)}});else var Le=$.terminal.partition(z,{wrap:!1});var ge,xe=setInterval(function(){var Ae,ft,ht;if(kn){a.skip_stop();var Yn=$.terminal.substring(z,ie,fe);le+=Yn,we.prompt(le,{formatters:!1}),ge=!0}else{d?(Ae=ee[Me].formatted,ft=ee[Me].chars,ht=ee[Me].len):(Ae=z,ft=Le,ht=fe);var tt=ft[ie];if(T.mask){var Zt=we.mask();typeof Zt=="string"?tt=Zt:Zt&&(tt=w.maskChar)}if(le+=tt,we.prompt(le,{formatters:!1}),ke&&(tt===`
`||!a.is_bottom())&&a.scroll_to_bottom(),ie++,ie===ht&&d){var xn=a.last_index();Me===ee.length-1?a.set_prompt(se):a.set_prompt("");var qn=!!Yt.find(".partial").length;a.echo(Ae,$.extend({},T,{formatters:!1,finalize:null,typing:!1})),ee[Me].index=xn+1,le="",++Me,ie=0}}d?ge=Me===ee.length:ge=ie===fe,ge&&(clearInterval(xe),setTimeout(function(){if(qn||T.newline===!1){var Qn=a.last_index(),Zn=Yt.find('[data-index="'+Qn+'"]');T.finalize(Zn)}else d&&ee.forEach(function(rr){a.remove_line(rr.index)}),f(x,se,T);xt=!1},T.delay))},T.delay)}}}var Et=Ze(function(f,d,g){a.set_prompt(f),g.finalize()},!0),Lt=function(){var f=Ze(function(d,g,x){a.set_prompt(g),a.insert(d),x.finalize()});return function(d,g,x){return f(g,$.extend({},x,{prompt:d+a.get_command()}))}}(),cn=Ze(function(f,d,g){a.set_prompt(d),a.echo(f,$.extend({},g,{typing:!1}))},!0),Dt=function(){var f=Ze(function(d,g,x){a.set_prompt(g),with_prompt(g,function(T){var z=Ne(d);T=$.terminal.apply_formatters(T,{prompt:!0}),z=$.terminal.apply_formatters(z,{command:!0});var K=T+z;x=$.extend({},x,{typing:!1,formatters:!1,convertLinks:!1}),a.echo(K,x)},a)});return function(d,g,x){return f(g,$.extend({},x,{prompt:d,mask:!0}))}}();function Tt(f,d,g){return function(T,z){var K=new $.Deferred;return Mt(function(){var se=$.extend({typing:!1,delay:w.execAnimationDelay},z);if(se.typing){if(typeof T!="string")return K.reject(f+": Typing animation require string");if(typeof se.delay!="number"||isNaN(se.delay))return K.reject(f+": Invalid argument, delay need to be a number");var ie=a.typing(f,se.delay,T,se);ie.then(function(){K.resolve()})}else d(T,se);is_function(g)&&g(T,se)}),z&&z.typing?K.promise():a}}function Xe(f,d,g){var x=H("onBeforeLogin",[f,d]);return unpromise(always(x),g,"validate_login")}function tn(f,d,g,x){w.history&&we.history().disable();var T=a.level();Z();function z(){for(;a.level()>T;)a.pop(undefined$1,!0);w.history&&we.history().enable()}function K(ie,fe){var le=a.prefix_name(!0)+"_";vt.set(le+"token",fe),vt.set(le+"login",ie)}function Z(){var ie=a.prefix_name(!0)+"_";vt.remove(ie+"token"),vt.remove(ie+"login")}function se(ie,fe,le){var ke;fe?(z(),K(ie,fe),wt=!1,H("onAfterLogin",[ie,fe]),ke=g):(d?(le||a.error(De().wrongPasswordTryAgain),a.pop(undefined$1,!0).set_mask(!1)):(wt=!1,le||a.error(De().wrongPassword),a.pop(undefined$1,!0).pop(undefined$1,!0)),ke=x),a.paused()&&a.resume(),is_function(ke)&&ke(),a.off("terminal.autologin")}a.on("terminal.autologin",function(ie,fe,le,ke){Xe(fe,le,function(Me){Me!==!1&&se(fe,le,ke)})}),a.push(function(ie){a.set_mask(w.maskChar).push(function(fe){try{Xe(ie,fe,function(le){if(le===!1){z();return}a.pause();try{var ke=[ie,fe,function(ee,Le){se(ie,ee,Le)}],Me=f.apply(a,ke);unpromise(Me,function(ee){se(ie,ee)},function(ee){a.pop(undefined$1,!0).pop(undefined$1,!0),a.error(ee.message),is_function(x)&&x(),a.paused()&&a.resume(),a.off("terminal.autologin")})}catch(ee){B(ee,"AUTH")}})}catch(le){B(le,"AUTH")}},{prompt:De().password+": ",name:"password"})},{prompt:De().login+": ",name:"login"})}function _n(f){return function(d){f.add(d)}}function De(){return $.extend({},$.terminal.defaults.strings,w&&w.strings||{})}function Ot(f,d){return parseInt(f.getPropertyValue(d),10)||0}function Jn(){var f=window.getComputedStyle(En[0]);function d(K){return Ot(f,"padding-"+K)}var g=d("left"),x=d("right"),T=d("top"),z=d("bottom");return{top:T,left:g,right:x,bottom:z}}var a=this;if(this.length>1)return this.each(function(){$.fn.terminal.call($(this),o,$.extend({name:a.selector},r))});var Pn;if(a.is("body,html")){if(a.hasClass("full-screen-terminal")){var un=a.find("> .terminal").data("terminal");if(un)return un}Pn=a,a=$("<div/>").appendTo("body"),$("body").addClass("full-screen-terminal")}else if(a.data("terminal"))return a.data("terminal");var An=$.omap({id:function(){return vn},clear:function(){return H("onClear")!==!1&&(Ct.clear(),dt.clear(function(f){return A(f)}),Yt[0].innerHTML="",a.prop({scrollTop:0})),a},export_view:function(){var f=H("onExport");return f=f||{},$.extend({},{focus:Ft,mask:we.mask(),prompt:a.get_prompt(),command:a.get_command(),position:we.position(),lines:clone(dt.data()),interpreters:Qe.clone(),history:we.history().data},f)},import_view:function(f){if(wt)throw new Error(sprintf(De().notWhileLogin,"import_view"));return H("onImport",[f]),Mt(function(){a.set_prompt(f.prompt),a.set_command(f.command),we.position(f.position),we.mask(f.mask),f.focus&&a.focus(),dt.import(clone(f.lines).filter(function(g){return g[0]})),f.interpreters instanceof Stack&&(Qe=f.interpreters),w.importHistory&&we.history().set(f.history),ce()}),a},save_state:function(f,d,g){if(typeof g<"u"?save_state[g]=a.export_view():save_state.push(a.export_view()),Array.isArray(hash_commands)||(hash_commands=[]),f!==undefined$1&&!d){var x=[vn,save_state.length-1,f];hash_commands.push(x),jt()}return a},exec:function(f,d,g){function x(K){var Z=Rt(f,K,!0);unpromise(Z,function(){qt=null,z.resolve()},function(){qt=null,z.reject()})}d&&typeof d=="object"&&(g=d,d=null);var T=$.extend({deferred:null,silent:!1,typing:!1,delay:w.execAnimationDelay},g);d===null&&(d=T.silent),is_deferred(T.deferred)||(T.deferred=new $.Deferred);var z=T.deferred;return an(function(){if(Array.isArray(f))(function ie(){var fe=f.shift();fe?a.exec(fe,d,g).done(ie):z.resolve()})();else if(bt)Ln.push([f,d,T]);else if(T.typing&&!d){var Z=T.delay;bt=!0;var se=a.typing("enter",Z,f,{delay:Z});se.then(function(){bt=!1,x(!0)}),z.then(function(){bt=!1})}else x(d)}),z.promise()},autologin:function(f,d,g){return a.trigger("terminal.autologin",[f,d,g]),a},login:function(f,d,g,x){if(on.push([].slice.call(arguments)),wt)throw new Error(sprintf(De().notWhileLogin,"login"));if(!is_function(f))throw new Error(De().loginIsNotAFunction);if(wt=!0,a.token()&&a.level()===1&&!sn)wt=!1,a.logout(!0);else{var T=a.token(!0),z=a.login_name(!0);T&&z?(wt=!1,a.pause(),Xe(z,T,function(K){K!==!1?is_function(g)&&g():(a.resume(),tn(f,d,g,x))})):tn(f,d,g,x)}return a},settings:function(){return w},before_cursor:function(f){var d=we.position(),g=we.get().slice(0,d),x=g.split(/\s/),T;if(f)if(x.length===1)T=x[0];else{var z=g.match(/(\\?")/g),K=z?z.filter(function(ie){return!ie.match(/^\\/)}).length:0;z=g.match(/'/g);var Z=z?z.length:0;if(Z%2===1)T=g.match(/('[^']*)$/)[0];else if(K%2===1)T=g.match(/("(?:[^"]|\\")*)$/)[0];else for(T=x[x.length-1],D=x.length-1;D>0;D--){var se=x[D-1];if(se[se.length-1]==="\\")T=x[D-1]+" "+T;else break}}else T=g;return T},complete:function(f,d){d=$.extend({word:!0,echo:!1,escape:!0,echoCommand:!1,caseSensitive:!0,doubleTab:null},d||{});var g=d.caseSensitive,x=a.before_cursor(d.word).replace(/\\"/g,'"'),T=!1;if(d.word&&(x.match(/^"/)?T='"':x.match(/^'/)&&(T="'"),T&&(x=x.replace(/^["']/,""))),pn%2===0)bn=a.before_cursor(d.word);else{var z=a.before_cursor(d.word);if(z!==bn)return}var K=$.terminal.escape_regex(x);d.escape&&(K=K.replace(/(\\+)(["'() ])/g,function(ge,xe,Ae){return Ae.match(/[()]/)?xe+"\\?\\"+Ae:xe+"?"+Ae}));function Z(ge){return T==='"'&&(ge=ge.replace(/"/g,'\\"')),!T&&d.escape&&(ge=ge.replace(/(["'() ])/g,"\\$1")),ge}function se(){for(var ge=[],xe=f.length;xe--;)if(f[xe].match(/\n/)&&d.word&&warn("If you use commands with newlines you should use word option for complete or wordAutocomplete terminal option"),fe.test(f[xe])){var Ae=Z(f[xe]);!g&&same_case(Ae)&&(x.toLowerCase()===x?Ae=Ae.toLowerCase():x.toUpperCase()===x&&(Ae=Ae.toUpperCase())),ge.push(Ae)}return ge}var ie=g?"":"i",fe=new RegExp("^"+K,ie),le=se();function ke(ge,xe){var Ae=a.get_command(),ft=a.get_position(),ht=new RegExp("^"+ge,"i"),tt=Ae.slice(0,ft),Zt=Ae.slice(ft),xn=xe.replace(ht,"")+(T||"");a.set_command(tt+xn+Zt),a.set_position((tt+xn).length)}if(le.length===1)return d.escape?ke(K,le[0]):a.insert(le[0].replace(fe,"")+(T||"")),bn=a.before_cursor(d.word),!0;if(le.length>1)if(++pn>=2){if(pn=0,d.echo){if(is_function(d.doubleTab)){d.echoCommand&&He();var Me=d.doubleTab.call(a,x,le,He);return typeof Me>"u"?!0:Me}else if(d.doubleTab!==!1){He();var ee=le.slice().reverse().join("		");a.echo($.terminal.escape_brackets(ee),{keepWords:!0,formatters:!1})}return!0}}else{var Le=common_string(Z(x),le,g);if(Le)return ke(K,Le),bn=a.before_cursor(d.word),!0}},commands:function(){return Qe.top().interpreter},set_interpreter:function(f,d){var g=$.Deferred();function x(){a.pause(w.softPause),ye(f,d,function(T){a.resume();var z=Qe.top();$.extend(z,T),q(!0),g.resolve()})}return is_function(d)?a.login(d,!0,x):get_type(f)==="string"&&d?a.login(O(f,d),!0,x):x(),g.promise()},greetings:function(){return Ge(),a},paused:function(){return bt},pause:function(f){return an(function(){gn(),bt=!0,we.disable(f||is_android),f||we.find(".cmd-prompt").hidden(),H("onPause")}),a},resume:function(f){return an(function(){bt=!1,Ft&&terminals.front()===a&&we.enable(f),we.find(".cmd-prompt").visible();var g=Ln;Ln=[];for(var x=0;x<g.length;++x)a.exec.apply(a,g[x]);a.trigger("resume");var T=Ut.shift();T&&T(),H("onResume")!==!1&&a.scroll_to_bottom()}),a},skip:function(){kn=!0},skip_stop:function(){kn=!1},animating:function(){return xt},cols:function(){return w.numChars?w.numChars:((!kt||kt===1e3)&&(kt=get_num_chars(a,Bt)),kt)},rows:function(){return w.numRows?w.numRows:(Ht||(Ht=get_num_rows(a,Bt)),Ht)},history:function(){return we.history()},geometry:function(){var f=Jn();return{terminal:{padding:{left:f.left,right:f.right,top:f.top,bottom:f.bottom},width:yn+f.left+f.right,height:Wn+f.top+f.bottom},density:Jt,char:Bt,cols:this.cols(),rows:this.rows()}},history_state:function(f){function d(){w.historyState=!0,save_state.length?terminals.length()>1&&a.save_state(null):a.save_state()}return f?typeof window.setImmediate>"u"?setTimeout(d,0):setImmediate(d):w.historyState=!1,a},clear_history_state:function(){return hash_commands=[],save_state=[],a},next:function(){if(terminals.length()===1)return a;terminals.front().disable();var f=terminals.rotate().enable(),d=f.offset().top-50;$("html,body").animate({scrollTop:d},500);try{trigger_terminal_change(f)}catch(g){B(g,"onTerminalChange")}return f},focus:function(f,d){return an(function(){if(terminals.length()===1)f===!1?a.disable(d):a.enable(d);else if(f===!1)a.next();else{var x=terminals.front();if(x!==a&&(terminals.forEach(function(T){T!==a&&T.enabled()&&T.disable(d)}),!d))try{trigger_terminal_change(a)}catch(T){B(T,"onTerminalChange")}terminals.set(a),a.enable(d)}}),a},blur:function(f){return this.focus(!1,f)},freeze:function(f){return Mt(function(){f?(a.disable(),Qt=!0):(Qt=!1,a.enable())}),a},frozen:function(){return Qt},enable:function(f){return!Ft&&!Qt&&(kt===undefined$1&&a.resize(),an(function(){var g;!f&&!Ft&&H("onFocus"),(!f&&g===undefined$1||f)&&(Ft=!0,a.paused()||we.enable(!0))})),a},clear_cache:"Map"in root?function(){return Ct.clear_cache(),V.clear(),we.clear_cache(),a}:function(){return a},disable:function(f){return an(function(){var g;!f&&Ft&&(g=H("onBlur")),(!f&&g===undefined$1||f)&&(Ft=!1,we.disable())}),a},enabled:function(){return Ft},signature:function(){for(var f=a.cols(),d=signatures.length;d--;){var g=signatures[d].map(function(x){return x.length});if(Math.max.apply(null,g)<=f)return signatures[d].join(`
`).replace(/\s+$/m,"")+`
`}return""},version:function(){return $.terminal.version},cmd:function(){return we},get_command:function(){return we.get()},enter:Tt("enter",He),set_command:function(f,d){return Mt(function(){typeof f!="string"&&(f=JSON.stringify(f)),we.set(f,undefined$1,d)}),a},set_position:function(f,d){return Mt(function(){we.position(f,d)}),a},get_position:function(){return we.position()},insert:function(f,d){if(typeof f=="string"){var g,x={stay:!1,typing:!1,delay:100};is_object(d)||(d={stay:d}),g=$.extend(x,d);var T=new $.Deferred;return Mt(function(){function K(){(w.scrollOnEcho||Z)&&a.scroll_to_bottom()}var Z=a.is_bottom();if(g.typing){var se=g.delay,ie=a.typing("insert",se,f,w);ie.then(function(){K(),T.resolve()})}else we.insert(f,w.stay),K()}),g.typing?T.promise():a}else throw new Error(sprintf(De().notAString,"insert"))},set_prompt:Tt("prompt",function(f){is_function(f)?we.prompt(function(d){return f.call(a,d,a)}):we.prompt(f)},function(f){Qe.top().prompt=f}),get_prompt:function(){return Qe.top().prompt},set_mask:function(f){return Mt(function(){we.mask(f===!0?w.maskChar:f)}),a},get_mask:function(){return we.mask()},get_output:function(f){return f?dt.data():dt.get_snapshot()},resize:function(f,d){if(!a.is(":visible"))a.stopTime("resize"),a.oneTime(500,"resize",function(){a.resize(f,d)});else{if(f&&d&&(a.width(f),a.height(d)),f=a.width(),d=a.height(),typeof w.numChars<"u"||typeof w.numRows<"u"){typeof w.numChars<"u"&&(we.resize(w.numChars),a.refresh()),H("onResize");return}var g=get_num_chars(a,Bt),x=get_num_rows(a,Bt);if(g!==kt||x!==Ht){a.clear_cache();var T=g!==kt;kt=g,Ht=x,T&&(we.resize(kt),a.refresh()),H("onResize")}}return a},refresh:function(){return Bt.width!==0&&css(a[0],{"--char-width":Bt.width,"--pixel-density":Jt}),a.clear_cache(),bn&&we.resize(),ce({scroll:!1,update:!0}),a},flush:function(f){return f=$.extend({},{update:!1,scroll:!0},f||{}),Mt(function(){try{if(Ct.is_empty())return a;var g=a.is_bottom(),x=w.scrollOnEcho&&f.scroll||g,T,z=!0,K=!1,Z=$(),se,ie=[];f.update||(Z=a.find(".partial"),se=dt.get_partial()),Ct.flush(function(xe){if(!xe)Z.length?z&&(z=!1,K=!0,T=Z):(T=$("<div/>"),se=[]);else if(is_function(xe.finalize)){if(f.update&&xe.raw===!0&&xe.newline)return;if(x&&T.find("img").on("load",function(){a.scroll_to_bottom()}),f.update){dt.update_snapshot(xe.index,se);var Ae=A(xe.index);Ae.html()!==T.html()&&Ae.replaceWith(T)}else T.appendTo(Yt),Z.length||dt.make_snapshot(se);T.attr("data-index",xe.index),K=!xe.newline,T.toggleClass("partial",K),ie.push({node:T,finalize:xe.finalize}),K?Z=T:xe.newline&&Z.length&&(T=$("<div/>"),Z=$())}else{var ft=xe.line,ht;typeof xe.raw=="string"&&(K?se[se.length-1]+=xe.raw:se.push(xe.raw)),K?(ht=T.children().last().append(ft),K=!1):(ht=$("<div/>").html(ft),xe.newline&&ht.addClass("cmd-end-line"),T.append(ht)),ht.css("width","100%")}}),Z=a.find(".partial"),ie.forEach(function(xe){xe.finalize(xe.node)});var fe;if(Z.length===0)css(we[0],{"--prompt-offset":"",top:""}),we.__set_prompt_margin(0),fe=a.find(".terminal-output div:last-child div:last-child"),fe.css("display")==="inline-block"&&fe.css({width:"100%",display:""});else if(se.length&&se[se.length-1]){var le=$.terminal.length(se[se.length-1]);le%=a.cols(),fe=Z.children().last();var ke=fe[0].getBoundingClientRect(),Me=is_ch_unit_supported?le+"ch":le+"px";css(we[0],{top:-ke.height/Jt+"px","--prompt-offset":Me}),we.__set_prompt_margin(le)}Be(),H("onFlush");var ee=a.find(".cmd-cursor"),Le=a.find(".cmd").offset(),ge=a.offset();a.stopTime("flush").oneTime(10,"flush",function(){var xe=Yt.height(),Ae=we.height();css(a[0],{"--terminal-height":a.height(),"--terminal-x":Le.left-ge.left,"--terminal-y":Le.top-ge.top,"--terminal-scroll":st.prop("scrollTop"),"--cmd-top":xe,"--cmd-height":Ae}),Ft&&!is_mobile&&(ee.hide(),a.oneTime(1,"flush",function(){ee.show()}))}),T.on_load({done:function(){x&&a.scroll_to_bottom()}})}catch(xe){if(is_function(w.exceptionHandler))try{w.exceptionHandler.call(a,xe,"TERMINAL (Flush)")}catch(Ae){w.exceptionHandler=$.noop,alert_exception("[exceptionHandler]",Ae)}else alert_exception("[Flush]",xe)}finally{Ct.clear()}}),a},update:function(f,d,g){return Mt(function(){if(f<0&&(f=dt.length()+f),!dt.valid_index(f))a.error("Invalid line number "+f);else if(d===null)dt.update(f,null),A(f).remove();else{if(d=v(d,{update:!0,line:f}),d===!1)return a;unpromise(d,function(T){var z=y(T,g);z&&(T=z[0],g=z[1]),g=dt.update(f,T,g);var K=i({value:T,index:f,options:g});unpromise(K,function(){a.flush({scroll:!1,update:!0})})})}}),a},remove_line:function(f){return a.update(f,null)},last_index:function(){return dt.length()-1},echo:function(f,d,g){var x=arguments.length>0,T=g||new $.Deferred;function z(){nn=!1;var fe=St;St=[];for(var le=0;le<fe.length;++le)a.echo.apply(a,fe[le])}function K(fe){z(),B(fe,"ECHO",!0)}function Z(fe){try{var le=$.extend({flush:!0,exec:!0,raw:w.raw,finalize:$.noop,unmount:$.noop,delay:w.execAnimationDelay,ansi:!1,typing:!1,externalPause:!0,keepWords:!1,invokeMethods:w.invokeMethods,onClear:null,formatters:!0,allowedAttributes:w.allowedAttributes,newline:!0},d||{}),ke=w.externalPause&&le.externalPause;if(function(ge){F(fe)||(le.finalize=function(xe){le.raw&&xe.addClass("raw"),le.ansi&&xe.addClass("ansi");try{is_function(ge)&&ge.call(a,xe),xe.on_load({error:function(Ae){Ae.replaceWith(use_broken_image),ke&&a.resume()},done:function(Ae){Ae&&ke&&a.resume()},load:function(Ae){Ae&&ke&&a.pause()}})}catch(Ae){B(Ae,"USER:echo(finalize)"),ge=null}})}(le.finalize),le.flush&&(Ct.empty()||a.flush()),H("onBeforeEcho",[fe])===!1)return;if(le.typing){if(typeof fe!="string")return T.reject("echo: Typing animation require string or promise that resolve to string");if(typeof le.delay!="number"||isNaN(le.delay))return T.reject("echo: Invalid argument, delay need to be a number");var Me=a.typing("echo",le.delay,fe,le);Me.then(function(){T.resolve()});return}var ee;if(typeof fe=="function")ee=fe.bind(a);else if(typeof fe>"u")x?ee=String(fe):ee="";else{var Le=v(fe);if(Le===!1)return a;ee=Le}is_promise(ee)&&(nn=!0),unpromise(ee,function(ge){if(!(is_promise(Le)&&ge===!1)){if(h(ge,le))return a;var xe=dt.length(),Ae=dt.has_newline();Ae||xe--,!le.newline&&ge[ge.length-1]===`
`&&(ge=ge.slice(0,-1),le.newline=!0);var ft=i({value:ge,options:le,index:xe});is_promise(ft)&&(nn=!0),dt.push([ge,le]),unpromise(ft,function(){le.flush&&(a.flush(),H("onAfterEcho",[fe])),z()},K)}},K)}catch(ge){is_function(w.exceptionHandler)?w.exceptionHandler.call(a,ge,"TERMINAL (echo)"):alert_exception("[Terminal.echo]",ge)}}var se=d&&d.typing;if(nn){var ie=[f,d];se&&ie.push(T),St.push(ie)}else Z(f);return se?T.promise():a},typing:function(f,d,g,x){var T=new $.Deferred,z,K;typeof x=="object"?(K=x.finalize||$.noop,z=$.extend({},x,{delay:d,finalize:Z})):(K=x||$.noop,z={delay:d,finalize:Z});function Z(){T.resolve(),is_function(K)&&K.apply(a,arguments)}var se=["prompt","echo","enter","insert"];function ie(){return se.indexOf(f)>=0}return Mt(function(){ie()?f==="prompt"?Et(g,z):f==="echo"?cn(g,z):f==="enter"?with_prompt(a.get_prompt(),function(le){Dt(le,g,z)},a):f==="insert"&&with_prompt(a.get_prompt(),function(le){Lt(le,g,z)},a):T.reject("Invalid type only `echo` and `prompt` are supported")}),T.promise()},error:function(f,d){d=$.extend({},d,{raw:!1,formatters:!1});function g(x){typeof x!="string"&&(x=String(x));var T=$.terminal.escape_brackets(x).replace(/\\$/,"&#92;").replace(url_re,"]$1[[;;;terminal-error]");return"[[;;;terminal-error]"+T+"]"}return typeof f=="function"?a.echo(function(){return g(f.call(a))},d):f&&f.then?(f.then(function(x){a.echo(g(x))}).catch(_t("Echo Error")),a):a.echo(g(f),d)},exception:function(f,d){var g=exception_message(f);if(d&&(g="&#91;"+d+"&#93;: "+g),g&&a.error(g,{finalize:function(T){T.addClass("terminal-exception terminal-message")},keepWords:!0}),typeof f.fileName=="string"){var x=a.paused();x||a.pause(w.softPause),$.get(f.fileName,function(T){var z=f.lineNumber-1,K=T.split(`
`)[z];K&&a.error("["+f.lineNumber+"]: "+K),x||a.resume()},"text")}return f.stack&&a.echo(format_stack_trace(f.stack),{finalize:function(T){T.addClass("terminal-exception terminal-stack-trace")},formatters:!1}),a},scroll:function(f){var d;return f=Math.round(f),a.prop,f>st.prop("scrollTop")&&f>0&&st.prop("scrollTop",0),d=st.prop("scrollTop"),st.scrollTop(d+f),a},logout:function(f){if(wt)throw new Error(sprintf(De().notWhileLogin,"logout"));return Mt(function(){if(f){var g=on.pop();a.set_token(undefined$1,!0),a.login.apply(a,g)}else if(Qe.size()===1&&a.token())a.logout(!0);else for(;Qe.size()>1;)a.token()?a.logout(!0).pop().pop():a.pop()}),a},token:function(f){return vt.get(a.prefix_name(f)+"_token")},set_token:function(f,d){var g=a.prefix_name(d)+"_token";return typeof f>"u"?vt.remove(g):vt.set(g,f),a},get_token:function(f){return a.token(f)},login_name:function(f){return vt.get(a.prefix_name(f)+"_login")},name:function(){return Qe.top().name},prefix_name:function(f,d){var g=(w.name?w.name+"_":"")+vn;if(f&&Qe.size()>1){var x=Qe.map(function(T){return T.name||""}).slice(1,d).join("_");x&&(g+="_"+x)}return g},read:function(f,d,g){var x;if(typeof arguments[1]=="object"?x=$.extend({typing:!1,delay:w.execAnimationDelay,success:$.noop,cancel:$.noop},arguments[1]):x={typing:!1,success:d||$.noop,cancel:g||$.noop},x.typing){var T=a.get_prompt();return x.typing=!1,a.typing("prompt",x.delay,f).then(function(){return a.set_prompt(T).read(f,x)})}Xn=!0;var z=jQuery.Deferred(),K=!1;return a.push(function(Z){K=!0,z.resolve(Z),is_function(x.success)&&x.success(Z),a.pop(),w.history&&we.history().enable()},{name:"read",history:!1,prompt:f||"",onExit:function(){K||(z.reject(),is_function(x.cancel)&&x.cancel())}}),w.history&&we.history().disable(),is_function(x.onReady)&&x.onReady.call(a),z.promise()},push:function(f,d){return an(function(){d=d||{};var x={infiniteLogin:!1},T=$.extend({},x,d);!T.name&&qt&&(T.name=qt.name),T.prompt===undefined$1&&(T.prompt=(T.name||">")+" ");var z=Qe.top();z&&(z.mask=we.mask());var K=bt;function Z(){H("onPush",[z,Qe.top()]),q()}ye(f,d.login,function(se){if(Qe.push($.extend({},se,T)),T.completion===!0&&(Array.isArray(se.completion)?Qe.top().completion=se.completion:se.completion||(Qe.top().completion=!1)),T.login){var ie,fe=get_type(T.login);fe==="function"?(ie=T.infiniteLogin?$.noop:a.pop,a.login(T.login,T.infiniteLogin,Z,ie)):(get_type(f)==="string"&&fe==="string"||fe==="boolean")&&(ie=T.infiniteLogin?$.noop:a.pop,a.login(O(f,T.login),T.infiniteLogin,Z,ie))}else Z();!K&&a.enabled()&&a.resume()})}),a},pop:function(f,d){f!==undefined$1&&He(f);var g=a.token(!0),x;if(Qe.size()===1)x=Qe.top(),w.login?(d||H("onPop",[x,null]),$t(),H("onExit")):a.error(De().canExitError);else{g&&it();var T=Qe.pop();if(x=Qe.top(),q(),a.set_mask(x.mask),d||H("onPop",[T,x]),wt&&a.get_prompt()!==De().login+": "&&(wt=!1),is_function(T.onExit))try{T.onExit.call(a,a)}catch(z){T.onExit=$.noop,B(z,"onExit")}}return a},option:function(f,d){if(typeof d>"u"){if(typeof f=="string")return w[f];typeof f=="object"&&$.each(f,function(g,x){w[g]=x})}else w[f]=d,f.match(/^num(Chars|Rows)$/)&&ce();return a},invoke_key:function(f){return we.invoke_key(f),a},keymap:function(f,d){if(arguments.length===0)return we.keymap();if(typeof d>"u"){if(typeof f=="string")return we.keymap(f);$.isPlainObject(f)&&(f=$.extend({},qe,$.omap(f||{},function(x,T){return qe[x]?function(z,K){return T.call(a,z,function(){return qe[x](z,K)})}:T.bind(a)})),we.keymap(null).keymap(f))}else if(typeof d=="function"){var g=f;qe[g]?we.keymap(g,function(x,T){return d.call(a,x,function(){return qe[g](x,T)})}):we.keymap(g,d.bind(a))}},level:function(){return Qe.size()},reset:function(){return Mt(function(){for(a.clear();Qe.size()>1;)Qe.pop();q(),Ge(),de()}),a},purge:function(){return Mt(function(){var d=a.prefix_name()+"_",g=vt.get(d+"interpreters");g&&$.each(JSON.parse(g),function(x,T){vt.remove(T+"_commands"),vt.remove(T+"_token"),vt.remove(T+"_login")}),we.purge(),vt.remove(d+"interpreters")}),a},destroy:function(){return Mt(function(){we.destroy().remove(),a.resizer("unbind"),a.touch_scroll("unbind"),Bn.resizer("unbind").remove(),Kt.resizer("unbind").remove(),$(document).unbind(".terminal_"+a.id()),$(window).unbind(".terminal_"+a.id()),a.unbind("click mousedown mouseup"),a.removeData("terminal").removeClass("terminal").unbind(".terminal"),w.width&&a.css("width",""),w.height&&a.css("height",""),$(window).off("blur",Fe).off("focus",Q),a.find(".terminal-fill, .terminal-font, .terminal-font-forcer").remove(),a.stopTime(),terminals.remove(vn),Vt&&(Vt.unobserve?Vt.unobserve(a[0]):clearInterval(Vt));var d=a.find(".terminal-scroll-marker");if(At&&At.unobserve(d[0]),d.remove(),Nn&&Nn.disconnect(),terminals.length()||$(window).off("hashchange"),is_mobile&&a.off(["touchstart.terminal","touchmove.terminal","touchend.terminal"].join(" ")),Yt.remove(),st.remove(),Pn){var g=$(Pn);g.attr("class")==="full-screen-terminal"?g.removeAttr("class"):g.removeClass("full-screen-terminal"),a.remove()}Un=!0}),a},scroll_to:function(f){var d=st.scrollTop()-a.offset().top+$(f).offset().top;return st.scrollTop(d),a},scroll_to_bottom:function(){var f;return a.prop?f=st.prop("scrollHeight"):f=st.attr("scrollHeight"),st.scrollTop(f),a},is_bottom:function(){if(w.scrollBottomOffset===-1)return!1;if(typeof Gt=="boolean")return Gt;var f,d,g;f=st[0].scrollHeight,d=st[0].scrollTop,g=st[0].offsetHeight;var x=f-w.scrollBottomOffset;return d+g>x},duplicate:function(){var f=$(a);return $.extend(f,An)},get_output_buffer:function(f){var d=$.extend({html:!1},f),g=[],x=!1;return Ct.forEach(function(T){if(T)if(is_function(T.finalize))x=!T.newline;else{var z;if(d.html?z=T.line:z=T.raw,x){var K=g.length-1;g[K]+=z}else g.push(z)}}),d.html?g.map(function(T){return"<div>"+T+"</div>"}).join(`
`):g.join(`
`)},clear_buffer:function(){return Ct.clear(),a}},function(f,d){return function(){if(Un&&!w.exceptionHandler)throw new $.terminal.Exception(De().defunctTerminal);try{return d.apply(a,[].slice.apply(arguments))}catch(g){if(f!=="exec"&&f!=="resume"&&B(g,g.type||"TERMINAL",!0),!w.exceptionHandler)throw g}}});if($.extend(a,An),a.length===0){var Dn=sprintf(De().invalidSelector);throw new $.terminal.Exception(Dn)}a.data("terminal",a);var St=[],nn=!1,qt,dn,pn=0,Yt,vn=terminals.length(),Xn=!1,kt,Ht,bn,on=new Stack,Wt=new DelayQueue,xt=!1,kn=!1,Nt=new DelayQueue,Mt=_n(Nt),an=_n(Wt),Gt,At,wt=!1,gn=$.noop,yn,Wn,jn,Ln=[],w=$.extend({},$.terminal.defaults,{name:a.selector,exit:!!(r&&r.login||!r)},r||{});typeof w.width=="number"&&a.width(w.width),typeof w.height=="number"&&a.height(w.height),delete w.formatters;var Un=!1,Ct=new FormatBuffer(function(f){return{linksNoReferrer:w.linksNoReferrer,linksNoFollow:w.linksNoFollow,anyLinks:w.anyLinks,charWidth:Bt.width,useCache:w.useCache,escape:!1,allowedAttributes:f.allowedAttributes||[]}}),dt=new OutputLines(function(){return w}),vt=new l(w.memory),Ft=w.enabled,Qt=!1,bt=!1,sn=!0,Qe,we,wn,Vt,Nn;w.ignoreSystemDescribe===!0&&(w.describe=!1),$(document).bind("ajaxSend.terminal_"+a.id(),function(f,d){requests.push(d)});var st=$('<div class="terminal-scroller"/>').appendTo(a),ln=$('<div class="terminal-wrapper"/>').appendTo(st);$(broken_image).hide().appendTo(ln);var Bn=$('<div class="terminal-font">&nbsp;</div>').appendTo(a),Kt=$('<div class="terminal-pixel"/>').appendTo(a),En=$('<div class="terminal-fill"/>').appendTo(st);Yt=$("<div>").addClass("terminal-output").attr("role","log").appendTo(ln),a.addClass("terminal");var Jt=be(),Bt=get_char_size(a),On=!terminal_ready(a);w.login&&H("onBeforeLogin")===!1&&(sn=!1);var Tn;if(typeof o=="string")Tn=o;else if(is_array(o)){for(var D=0,I=o.length;D<I;++D)if(typeof o[D]=="string"){Tn=o[D];break}}var k;is_function(w.login)?k=w.login:Tn&&(typeof w.login=="string"||w.login===!0)&&(k=O(Tn,w.login)),terminals.append(a);function Q(){wn&&(a.focus(),a.scroll_to_bottom())}function be(){var f=Kt[0].getBoundingClientRect();return f.width||1}function Fe(){wn=Ft,a.disable().find(".cmd textarea").trigger("blur",[!0])}function We(f){if(is_function(f)&&(f=f()),f&&is_function(f.then))return f.then(We);if(get_type(f)!=="string")if(is_function(w.parseObject)){var d=w.parseObject(f);get_type(d)==="string"&&(f=d)}else if(is_array(f))f=$.terminal.columns(f,a.cols(),w.tabs);else{var g=is_big_int(f);f=String(f),g&&(f+="n")}return f}function Ue(f){if(f.proxy)return f;var d=function(g){return f.call(a,g,a)};return d.proxy=!0,d}function Oe(f){f=f.originalEvent;function d(ie,fe){return ie.type.indexOf(fe)!==-1}function g(ie){a.echo('<img src="'+ie+'"/>',{raw:!0})}function x(ie){var fe=window.URL||window.webkitURL;return fe.createObjectURL(ie)}function T(ie,fe){if(fe)ie instanceof Blob?g(x(ie)):typeof ie=="string"&&(ie.match(/^(data:|blob:)/)?g(ie):a.insert(ie));else{var le={target:a};typeof ie=="string"?le.text=ie:ie instanceof Blob&&(le.image=x(ie));var ke=H("onPaste",[le]);if(ke){if(is_function(ke.then||ke.done))return(ke.then||ke.done).call(ke,function(Me){T(Me,!0)});T(ke,!0)}else ke!==!1&&T(le.image||le.text,!0)}}if(f.clipboardData&&a.enabled()){var z=f.clipboardData.items;if(z)for(var K=0;K<z.length;K++)if(d(z[K],"image")&&w.pasteImage){var Z=z[K].getAsFile();T(Z)}else d(z[K],"text/plain")&&z[K].getAsString(function(ie){T(ie.replace(/\r/g,""))});else if(f.clipboardData.getData){var se=f.clipboardData.getData("text/plain");T(se.replace(/\r/g,""))}return!1}}$(document).on("paste.terminal_"+a.id(),Oe);var qe=$.extend({},Ye,$.omap(w.keymap||{},function(f,d){return Ye[f]?function(g,x){return d.call(a,g,function(){return Ye[f](g,x)})}:d.bind(a)}));return ye(o,w.login,function(f){(w.completion&&typeof w.completion!="boolean"||!w.completion)&&(f.completion="settings");var d=w.prompt;is_function(d)&&(d=Ue(d)),Qe=new Stack($.extend({},w.extra,{name:w.name,prompt:d,keypress:w.keypress,keydown:w.keydown,resize:w.onResize,greetings:w.greetings,mousewheel:w.mousewheel,history:w.history,keymap:qe},f)),we=$("<div/>").appendTo(ln).cmd({tabindex:w.tabindex,mobileDelete:w.mobileDelete,mobileIngoreAutoSpace:w.mobileIngoreAutoSpace,prompt:k?!1:d,history:w.memory?"memory":w.history,historyFilter:w.historyFilter,historySize:w.historySize,caseSensitiveSearch:w.caseSensitiveSearch,onPaste:w.onPaste,width:"100%",enabled:!1,charWidth:Bt.width,keydown:ut,keymap:qe,clickTimeout:w.clickTimeout,holdTimeout:w.holdTimeout,holdRepeatTimeout:w.holdRepeatTimeout,repeatTimeoutKeys:w.repeatTimeoutKeys,allowedAttributes:w.allowedAttributes,keypress:at,tabs:w.tabs,onPositionChange:function(){var ee=[].slice.call(arguments);M(),H("onPositionChange",ee)},onCommandChange:function(ee){yn!==En.width()&&a.resizer(),H("onCommandChange",[ee]),M()},commands:Rt});function g(ee){if(!is_mobile&&(ee=ee.originalEvent,ee&&ee.isTrusted)){var Le=document.elementFromPoint(ee.clientX,ee.clientY);!$(Le).closest(".terminal").length&&a.enabled()&&a.disable()}}a.oneTime(100,function(){$(document).bind("click.terminal_"+a.id(),g).bind("contextmenu.terminal_"+a.id(),g)});var x=$(window);if(document.addEventListener("resume",function(){a.disable()}),is_mobile)(function(){a.addClass("terminal-mobile");var ee,Le,ge,xe=3,Ae=we.clip(),ft=200,ht;Ae.$node.off("touchstart.cmd"),a.on("touchstart.terminal",function(tt){if(tt=tt.originalEvent,window.touch_event=tt,tt.target.tagName.toLowerCase()!=="a"&&!Qt&&tt.touches.length===1){ge=a.enabled();var Zt=tt.touches[0];ee={x:Zt.clientX,y:Zt.clientY},ht=setTimeout(function(){ee=null},ft)}}).on("touchmove.terminal",function(tt){if(tt.touches.length===1&&ee){var Zt=tt.touches[0],xn=Math.abs(Zt.clientX-ee.x),qn=Math.abs(Zt.clientY-ee.y);(xn>xe||qn>xe)&&(Le=!0)}}).on("touchend.terminal",function(){ee&&(clearTimeout(ht),Le||(ge?(Ae.blur(),a.disable()):(Ae.focus(),a.focus(),setTimeout(function(){a.scroll_to_bottom()},100)))),Le=!1,ee=null})})(),"visualViewport"in window&&on_height_change(function(ee){css(document.documentElement,{"--terminal-force-height":ee+"px"})});else{x.on("focus.terminal_"+a.id(),Q).on("blur.terminal_"+a.id(),Fe);var T;(function(){var ee=0,Le,ge="click_"+a.id(),xe=a.find(".cmd textarea");function Ae(){if(Le.is(".terminal")||Le.is(".terminal-scroller")||Le.is(".terminal-wrapper")){var tt=a.get_command().length;a.set_position(tt)}else Le.closest(".cmd-prompt").length&&a.set_position(0);xe.is(":focus")||xe.focus(),ft()}function ft(){ee=0,Le=null}var ht=".terminal-output textarea,.terminal-output input";a.mousedown(function(tt){scrollbar_event(tt,En,Jt)||(Le=$(tt.target))}).mouseup(function(){if(T){T=!1;return}if(Le&&Le.closest(ht).length)Ft&&a.disable();else if(get_selected_html()===""&&Le)if(++ee===1){if(!Qt)if(!Ft)a.focus(),a.scroll_to_bottom();else{var tt=w.clickTimeout;a.oneTime(tt,ge,Ae);return}}else a.stopTime(ge);ft()}).dblclick(function(){ft(),a.stopTime(ge)})})(),function(){var ee=we.clip().$node;function Le(xe){return xe.type==="mousedown"&&xe.buttons===2||xe.type==="contextmenu"}var ge;"oncontextmenu"in window?ge="contextmenu.terminal":ge="mousedown.terminal",a.on(ge,function(xe){if(T=get_selected_html()===""&&Le(xe)&&!xe.ctrlKey,T){var Ae=$(xe.target);if(Ae.is("img,value,audio,object,canvas,a"))return;a.enabled()||a.enable();var ft=we.offset(),ht=we[0].getBoundingClientRect(),tt=a.offset(),Zt=tt.top-ft.top,xn=Math.max(xe.pageY-ft.top-20,Zt),qn=xe.pageX-ft.left-20,Yn=4*14,Qn=5*14,Zn=a[0].getBoundingClientRect(),rr=En.outerWidth()*Jt,zn=xn+ht.top+Yn;zn=zn-Zn.height-Zn.top;var er=qn+ht.left+Qn;er=er-rr-Zn.left,zn>0&&(Yn-=Math.ceil(zn)),er>0&&(Qn-=Math.ceil(er)),ee.attr("style",[style_prop("left",qn,!0),style_prop("top",xn,!0),style_prop("width",Qn,!0),style_prop("height",Yn,!0)].join(";")),ee.is(":focus")||ee.focus(),a.stopTime("textarea"),a.oneTime(100,"textarea",function(){var ir={left:"",top:"",width:"",height:""};if(!is_css_variables_supported){var cr=a.find(".cmd .cmd-cursor-line").prevUntil(".cmd-prompt").length;ir.top=cr*14+"px"}ee.css(ir)}),a.stopTime("selection"),a.everyTime(20,"selection",function(){ee[0].selection!==ee[0].value&&get_textarea_selection(ee[0])&&(clear_textarea_selection(ee[0]),select(a.find(".terminal-output")[0],a.find(".cmd div:last-of-type")[0]),a.stopTime("selection"))})}})}(),a.on("scroll",function(){var ee=a.find("textarea"),Le=a[0].getBoundingClientRect(),ge=a[0].scrollHeight,xe=st.scrollTop(),Ae=ge-(xe+Le.height);Ae===0?ee.css("top",""):ee.css("top",-Ae)})}a.on("click","a",function(ee){var Le=$(this);if(Le.closest(".terminal-exception").length){var ge=Le.attr("href");ge.match(/:[0-9]+$/)&&(ee.preventDefault(),W(ge,a.cols()))}Ft&&a.find(".cmd textarea").focus()});function z(){var ee=Bt.width;Bt=get_char_size(a),ee!==Bt.width&&we.option("charWidth",Bt.width).refresh()}K();function K(){if(a.is(":visible")){var ee=st.width(),Le=En.height();Jt=be(),css(a[0],{"--pixel-density":Jt}),On&&(On=!terminal_ready(a),On||(Bt=get_char_size(a),z())),(Wn!==Le||yn!==ee||Jt!==jn)&&a.resize(),Wn=Le,yn=ee,jn=Jt}}function Z(){var ee={prefix:"terminal-"};a.resizer("unbind").resizer(K,ee),Bn.resizer("unbind").resizer(function(){z(),a.resize()},ee),Kt.resizer("unbind").resizer(function(){Jt=be(),a.refresh()},ee),$('<div class="terminal-font-forcer terminal-hidden">x<div>').appendTo(a)}function se(ee){Gt=ee[0].intersectionRatio>=.9}function ie(){if(window.IntersectionObserver){var ee=$('<div class="terminal-scroll-marker"/>').appendTo(st),Le=ee;if(w.scrollBottomOffset!==-1){var ge=style_prop("height",w.scrollBottomOffset);Le=$('<div style="'+ge+'"/>').appendTo(ee)}At=new IntersectionObserver(se,{root:st[0],rootMargin:"0px",threshold:1}),At.observe(Le[0])}}ie(),a.is(":visible")&&Z();function fe(){Vt&&(Vt.unobserve?Vt.unobserve(a[0]):clearInterval(Vt));var ee=a.enabled(),Le=a.is(":visible");ee&&!Le&&a.disable(),Le?Z():ln.css("visibility","hidden");function ge(){a.is(":visible")&&!Le?(Le=!0,Z(),z(),K(),ee&&a.enable(),ln.css("visibility","")):Le&&!a.is(":visible")&&(Le=!1,ee=$.terminal.active()===a&&a.enabled(),a.disable(),ln.css("visibility","hidden"))}window.IntersectionObserver&&a.css("position")!=="fixed"?(Vt=new IntersectionObserver(ge,{root:null}),Vt.observe(a[0])):Vt=setInterval(ge,100)}var le=!!a.closest("body").length,ke=window.MutationObserver||window.WebKitMutationObserver;ke&&(Nn=new ke(function(){a.closest("body").length?(le||(a.scroll_to_bottom(),fe(),K()),le=!0):le&&(le=!1)}),Nn.observe(document.body,{childList:!0})),le&&fe(),document.fonts&&document.fonts.ready?document.fonts.ready.then(function(){have_custom_font(a)&&(z(),a.resize()),Wt.resolve()}):Wt.resolve(),Ft&&a.is(":visible")&&!is_mobile?a.focus(undefined$1,!0):a.disable(),is_function(k)?(a.login(k,!0,ve),Nt.resolve(),de()):(ve(),de());function Me(ee,Le){var ge=terminals.get()[ee[0]],xe=$.Deferred();if(ge&&vn===ge.id())return ee[2]?bt?(Ut.push(function(){return ge.exec(ee[2],Le).done(function(){ge.save_state(ee[2],!0,ee[1]),xe.resolve()})}),xe.promise()):ge.exec(ee[2],Le).done(function(){ge.save_state(ee[2],!0,ee[1])}):(xe.resolve(),xe.promise())}w.execHash&&location.hash?setTimeout(function(){try{var ee=location.hash.replace(/^#/,"");hash_commands=JSON.parse(decodeURIComponent(ee)),ee.match(/\[/)||X(hash_commands);var Le=0,ge={typing:w.execAnimation,delay:w.execAnimationDelay};(function xe(){var Ae=hash_commands[Le++];Ae?Me(Ae,ge).done(xe):change_hash=!0})()}catch{}}):change_hash=!0,function(){var ee=!1;$(document).bind("keydown.terminal_"+a.id(),function(Ae){Ae.shiftKey&&(ee=!0)}).bind("keyup.terminal_"+a.id(),function(Ae){(Ae.shiftKey||Ae.which===16)&&(ee=!1)});function Le(Ae,ft){if(!ee){var ht=Qe.top(),tt;if(is_function(ht.mousewheel)?tt=ht.mousewheel(Ae,ft,a):is_function(w.mousewheel)&&(tt=w.mousewheel(Ae,ft,a)),tt===!0)return;if((Ee()||tt===!1)&&!Ae.ctrlKey&&(Ae.stopPropagation(),Ae.preventDefault()),tt===!1)return!1;ft>0?a.scroll(-40):a.scroll(40)}}if($.event.special.mousewheel)st.on("mousewheel",Le);else{var ge,xe=document.createElement("div");"onwheel"in xe?ge="wheel":document.onmousewheel!==undefined$1?ge="mousewheel":ge="DOMMouseScroll",xe=null,a.on(ge,function(Ae){var ft;ge==="mousewheel"?ft=-1/40*Ae.originalEvent.wheelDelta:ft=Ae.originalEvent.deltaY||Ae.originalEvent.detail,Le(Ae,-ft)})}st.touch_scroll(function(Ae){var ft=Ae.current.clientY-Ae.previous.clientY,ht,tt=Qe.top();if(is_function(tt.touchscroll)?ht=tt.touchscroll(Ae,ft,a):is_function(w.touchscroll)&&(ht=w.touchscroll(Ae,ft,a)),css(a[0],{"--terminal-scroll":st.prop("scrollTop")}),ht!==!0)return!1})}()}),a}})}(jquery_terminal)),jquery_terminal.exports}var jquery_terminalExports=requireJquery_terminal();const terminal=getDefaultExportFromCjs(jquery_terminalExports);var figlet$1={exports:{}};(function(o){const r=(()=>{const h={},A={font:"Standard",fontPath:"./fonts"};function F(q,H){let b={},M,X,ne,ve,de=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(M=H!==null?H:q,X=0,ne=de.length;X<ne;)ve=de[X],M>=ve[0]?(M=M-ve[0],b[ve[1]]=typeof b[ve[1]]>"u"?ve[2]:b[ve[1]]):ve[1]!=="vLayout"&&ve[1]!=="hLayout"&&(b[ve[1]]=!1),X++;return typeof b.hLayout>"u"?q===0?b.hLayout=1:q===-1?b.hLayout=0:b.hRule1||b.hRule2||b.hRule3||b.hRule4||b.hRule5||b.hRule6?b.hLayout=3:b.hLayout=2:b.hLayout===2&&(b.hRule1||b.hRule2||b.hRule3||b.hRule4||b.hRule5||b.hRule6)&&(b.hLayout=3),typeof b.vLayout>"u"?b.vRule1||b.vRule2||b.vRule3||b.vRule4||b.vRule5?b.vLayout=3:b.vLayout=0:b.vLayout===2&&(b.vRule1||b.vRule2||b.vRule3||b.vRule4||b.vRule5)&&(b.vLayout=3),b}function S(q,H,b){return q===H&&q!==b?q:!1}function W(q,H){let b="|/\\[]{}()<>";if(q==="_"){if(b.indexOf(H)!==-1)return H}else if(H==="_"&&b.indexOf(q)!==-1)return q;return!1}function ae(q,H){let b="| /\\ [] {} () <>",M=b.indexOf(q),X=b.indexOf(H);if(M!==-1&&X!==-1&&M!==X&&Math.abs(M-X)!==1){const ne=Math.max(M,X),ve=ne+1;return b.substring(ne,ve)}return!1}function pe(q,H){let b="[] {} ()",M=b.indexOf(q),X=b.indexOf(H);return M!==-1&&X!==-1&&Math.abs(M-X)<=1?"|":!1}function _e(q,H){let b="/\\ \\/ ><",M={0:"|",3:"Y",6:"X"},X=b.indexOf(q),ne=b.indexOf(H);return X!==-1&&ne!==-1&&ne-X===1?M[X]:!1}function U(q,H,b){return q===b&&H===b?b:!1}function te(q,H){return q===H?q:!1}function ye(q,H){let b="|/\\[]{}()<>";if(q==="_"){if(b.indexOf(H)!==-1)return H}else if(H==="_"&&b.indexOf(q)!==-1)return q;return!1}function O(q,H){let b="| /\\ [] {} () <>",M=b.indexOf(q),X=b.indexOf(H);if(M!==-1&&X!==-1&&M!==X&&Math.abs(M-X)!==1){const ne=Math.max(M,X),ve=ne+1;return b.substring(ne,ve)}return!1}function B(q,H){return q==="-"&&H==="_"||q==="_"&&H==="-"?"=":!1}function Y(q,H){return q==="|"&&H==="|"?"|":!1}function Ce(q,H,b){return H===" "||H===""||H===b&&q!==" "?q:H}function V(q,H,b){if(b.fittingRules.vLayout===0)return"invalid";let M,X=Math.min(q.length,H.length),ne,ve,de=!1,he;if(X===0)return"invalid";for(M=0;M<X;M++)if(ne=q.substring(M,M+1),ve=H.substring(M,M+1),ne!==" "&&ve!==" "){if(b.fittingRules.vLayout===1)return"invalid";if(b.fittingRules.vLayout===2)return"end";if(Y(ne,ve)){de=de||!1;continue}if(he=!1,he=b.fittingRules.vRule1?te(ne,ve):he,he=!he&&b.fittingRules.vRule2?ye(ne,ve):he,he=!he&&b.fittingRules.vRule3?O(ne,ve):he,he=!he&&b.fittingRules.vRule4?B(ne,ve):he,de=!0,!he)return"invalid"}return de?"end":"valid"}function ze(q,H,b){let M=q.length,X=q.length;H.length;let ne,ve,de,he=1,Ie,Ye,ut;for(;he<=M;){for(ne=q.slice(Math.max(0,X-he),X),ve=H.slice(0,Math.min(M,he)),de=ve.length,ut="",Ie=0;Ie<de;Ie++)if(Ye=V(ne[Ie],ve[Ie],b),Ye==="end")ut=Ye;else if(Ye==="invalid"){ut=Ye;break}else ut===""&&(ut="valid");if(ut==="invalid"){he--;break}if(ut==="end")break;ut==="valid"&&he++}return Math.min(M,he)}function i(q,H,b){let M,X=Math.min(q.length,H.length),ne,ve,de="",he;for(M=0;M<X;M++)ne=q.substring(M,M+1),ve=H.substring(M,M+1),ne!==" "&&ve!==" "?b.fittingRules.vLayout===1||b.fittingRules.vLayout===2?de+=Ce(ne,ve):(he=!1,he=b.fittingRules.vRule5?Y(ne,ve):he,he=!he&&b.fittingRules.vRule1?te(ne,ve):he,he=!he&&b.fittingRules.vRule2?ye(ne,ve):he,he=!he&&b.fittingRules.vRule3?O(ne,ve):he,he=!he&&b.fittingRules.vRule4?B(ne,ve):he,de+=he):de+=Ce(ne,ve);return de}function ce(q,H,b,M){let X=q.length,ne=H.length,ve=q.slice(0,Math.max(0,X-b)),de=q.slice(Math.max(0,X-b),X),he=H.slice(0,Math.min(b,ne)),Ie,Ye,ut,at=[],Ze,Et=[];for(Ye=de.length,Ie=0;Ie<Ye;Ie++)Ie>=ne?ut=de[Ie]:ut=i(de[Ie],he[Ie],M),at.push(ut);return Ze=H.slice(Math.min(b,ne),ne),Et.concat(ve,at,Ze)}function Be(q,H){let b,M=q.length,X="";for(b=0;b<H;b++)X+=" ";for(b=0;b<M;b++)q[b]+=X}function Ge(q,H,b){let M=q[0].length,X=H[0].length,ne;return M>X?Be(H,M-X):X>M&&Be(q,X-M),ne=ze(q,H,b),ce(q,H,ne,b)}function Ne(q,H,b){if(b.fittingRules.hLayout===0)return 0;let M,X=q.length,ne=H.length,ve=X,de=1,he=!1,Ie=!1,Ye,ut,at,Ze;if(X===0)return 0;e:for(;de<=ve;){const Et=X-de;for(Ye=q.substring(Et,Et+de),ut=H.substring(0,Math.min(de,ne)),M=0;M<Math.min(de,ne);M++)if(at=Ye.substring(M,M+1),Ze=ut.substring(M,M+1),at!==" "&&Ze!==" "){if(b.fittingRules.hLayout===1){de=de-1;break e}else if(b.fittingRules.hLayout===2){(at===b.hardBlank||Ze===b.hardBlank)&&(de=de-1);break e}else if(he=!0,Ie=!1,Ie=b.fittingRules.hRule1?S(at,Ze,b.hardBlank):Ie,Ie=!Ie&&b.fittingRules.hRule2?W(at,Ze,b.hardBlank):Ie,Ie=!Ie&&b.fittingRules.hRule3?ae(at,Ze,b.hardBlank):Ie,Ie=!Ie&&b.fittingRules.hRule4?pe(at,Ze,b.hardBlank):Ie,Ie=!Ie&&b.fittingRules.hRule5?_e(at,Ze,b.hardBlank):Ie,Ie=!Ie&&b.fittingRules.hRule6?U(at,Ze,b.hardBlank):Ie,!Ie){de=de-1;break e}}if(he)break;de++}return Math.min(ve,de)}function He(q,H,b,M){let X,ne,ve=[],de,he,Ie,Ye,ut,at,Ze,Et;for(X=0;X<M.height;X++){Ze=q[X],Et=H[X],ut=Ze.length,at=Et.length,de=ut-b,he=Ze.substr(0,Math.max(0,de)),Ie="";const tn=Math.max(0,ut-b);var Lt=Ze.substring(tn,tn+b),cn=Et.substring(0,Math.min(b,at));for(ne=0;ne<b;ne++){var Dt=ne<ut?Lt.substring(ne,ne+1):" ",Tt=ne<at?cn.substring(ne,ne+1):" ";if(Dt!==" "&&Tt!==" ")if(M.fittingRules.hLayout===1)Ie+=Ce(Dt,Tt,M.hardBlank);else if(M.fittingRules.hLayout===2)Ie+=Ce(Dt,Tt,M.hardBlank);else{var Xe="";Xe=!Xe&&M.fittingRules.hRule1?S(Dt,Tt,M.hardBlank):Xe,Xe=!Xe&&M.fittingRules.hRule2?W(Dt,Tt,M.hardBlank):Xe,Xe=!Xe&&M.fittingRules.hRule3?ae(Dt,Tt,M.hardBlank):Xe,Xe=!Xe&&M.fittingRules.hRule4?pe(Dt,Tt,M.hardBlank):Xe,Xe=!Xe&&M.fittingRules.hRule5?_e(Dt,Tt,M.hardBlank):Xe,Xe=!Xe&&M.fittingRules.hRule6?U(Dt,Tt,M.hardBlank):Xe,Xe=Xe||Ce(Dt,Tt,M.hardBlank),Ie+=Xe}else Ie+=Ce(Dt,Tt,M.hardBlank)}b>=at?Ye="":Ye=Et.substring(b,b+Math.max(0,at-b)),ve[X]=he+Ie+Ye}return ve}function Ee(q){let H=[],b;for(b=0;b<q;b++)H[b]="";return H}const Re=function(q){return Math.max.apply(Math,q.map(function(H,b){return H.length}))};function _t(q,H,b){return q.reduce(function(M,X){return He(M,X.fig,X.overlap,b)},Ee(H))}function jt(q,H,b){const M={};for(let X=q.length;--X;){let ne=_t(q.slice(0,X),H,b);if(Re(ne)<=b.width){M.outputFigText=ne,X<q.length?M.chars=q.slice(X):M.chars=[];break}}return M}function pt(q,H,b){let M,X,ne=0,ve,de,he,Ie=b.height,Ye=[],ut,at,Ze=[],Et,Lt,cn,Dt,Tt;for(de=Ee(Ie),b.width>0&&b.whitespaceBreak&&(at={chars:[],overlap:ne}),b.printDirection===1&&(q=q.split("").reverse().join("")),he=q.length,M=0;M<he;M++)if(Et=q.substring(M,M+1),Lt=Et.match(/\s/),X=H[Et.charCodeAt(0)],Dt=null,X){if(b.fittingRules.hLayout!==0){for(ne=1e4,ve=0;ve<b.height;ve++)ne=Math.min(ne,Ne(de[ve],X[ve],b));ne=ne===1e4?0:ne}if(b.width>0&&(b.whitespaceBreak?(cn=_t(at.chars.concat([{fig:X,overlap:ne}]),Ie,b),Dt=_t(Ze.concat([{fig:cn,overlap:at.overlap}]),Ie,b),ut=Re(Dt)):(Dt=He(de,X,ne,b),ut=Re(Dt)),ut>=b.width&&M>0&&(b.whitespaceBreak?(de=_t(Ze.slice(0,-1),Ie,b),Ze.length>1&&(Ye.push(de),de=Ee(Ie)),Ze=[]):(Ye.push(de),de=Ee(Ie)))),b.width>0&&b.whitespaceBreak&&((!Lt||M===he-1)&&at.chars.push({fig:X,overlap:ne}),Lt||M===he-1)){for(Tt=null;Dt=_t(at.chars,Ie,b),ut=Re(Dt),ut>=b.width;)Tt=jt(at.chars,Ie,b),at={chars:Tt.chars},Ye.push(Tt.outputFigText);ut>0&&(Tt?Ze.push({fig:Dt,overlap:1}):Ze.push({fig:Dt,overlap:at.overlap})),Lt&&(Ze.push({fig:X,overlap:ne}),de=Ee(Ie)),M===he-1&&(de=_t(Ze,Ie,b)),at={chars:[],overlap:ne};continue}de=He(de,X,ne,b)}return Re(de)>0&&Ye.push(de),b.showHardBlanks!==!0&&Ye.forEach(function(Xe){for(he=Xe.length,ve=0;ve<he;ve++)Xe[ve]=Xe[ve].replace(new RegExp("\\"+b.hardBlank,"g")," ")}),Ye}const Ut=function(q,H){let b=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],M={},X;if(q==="default")for(X=0;X<b.length;X++)M[b[X]]=H.fittingRules[b[X]];else if(q==="full")M={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(q==="fitted")M={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(q==="controlled smushing")M={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(q==="universal smushing")M={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return M},Rt=function(q,H){let b=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],M={},X;if(q==="default")for(X=0;X<b.length;X++)M[b[X]]=H.fittingRules[b[X]];else if(q==="full")M={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(q==="fitted")M={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(q==="controlled smushing")M={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(q==="universal smushing")M={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return M},$t=function(q,H,b){b=b.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let M=b.split(`
`),X=[],ne,ve,de;for(ve=M.length,ne=0;ne<ve;ne++)X=X.concat(pt(M[ne],h[q],H));for(ve=X.length,de=X[0],ne=1;ne<ve;ne++)de=Ge(de,X[ne],H);return de?de.join(`
`):""};function it(q,H){let b=JSON.parse(JSON.stringify(q)),M,X;if(typeof H.horizontalLayout<"u"){M=Ut(H.horizontalLayout,q);for(X in M)M.hasOwnProperty(X)&&(b.fittingRules[X]=M[X])}if(typeof H.verticalLayout<"u"){M=Rt(H.verticalLayout,q);for(X in M)M.hasOwnProperty(X)&&(b.fittingRules[X]=M[X])}return b.printDirection=typeof H.printDirection<"u"?H.printDirection:q.printDirection,b.showHardBlanks=H.showHardBlanks||!1,b.width=H.width||-1,b.whitespaceBreak=H.whitespaceBreak||!1,b}const gt=function(q,H,b){return gt.text(q,H,b)};return gt.text=async function(q,H,b){let M="";return q=q+"",typeof arguments[1]=="function"&&(b=H,H={},H.font=A.font),typeof H=="string"?(M=H,H={}):(H=H||{},M=H.font||A.font),await new Promise((X,ne)=>{gt.loadFont(M,function(ve,de){if(ve){ne(ve),b&&b(ve);return}const he=$t(M,it(de,H),q);X(he),b&&b(null,he)})})},gt.textSync=function(q,H){let b="";q=q+"",typeof H=="string"?(b=H,H={}):(H=H||{},b=H.font||A.font);var M=it(gt.loadFontSync(b),H);return $t(b,M,q)},gt.metadata=function(q,H){q=q+"",gt.loadFont(q,function(b,M){if(b){H(b);return}H(null,M,h[q].comment)})},gt.defaults=function(q){if(typeof q=="object"&&q!==null)for(var H in q)q.hasOwnProperty(H)&&(A[H]=q[H]);return JSON.parse(JSON.stringify(A))},gt.parseFont=function(q,H){H=H.replace(/\r\n/g,`
`).replace(/\r/g,`
`),h[q]={};var b=H.split(`
`),M=b.splice(0,1)[0].split(" "),X=h[q],ne={};if(ne.hardBlank=M[0].substr(5,1),ne.height=parseInt(M[1],10),ne.baseline=parseInt(M[2],10),ne.maxLength=parseInt(M[3],10),ne.oldLayout=parseInt(M[4],10),ne.numCommentLines=parseInt(M[5],10),ne.printDirection=M.length>=6?parseInt(M[6],10):0,ne.fullLayout=M.length>=7?parseInt(M[7],10):null,ne.codeTagCount=M.length>=8?parseInt(M[8],10):null,ne.fittingRules=F(ne.oldLayout,ne.fullLayout),X.options=ne,ne.hardBlank.length!==1||isNaN(ne.height)||isNaN(ne.baseline)||isNaN(ne.maxLength)||isNaN(ne.oldLayout)||isNaN(ne.numCommentLines))throw new Error("FIGlet header contains invalid values.");let ve=[],de;for(de=32;de<=126;de++)ve.push(de);if(ve=ve.concat(196,214,220,228,246,252,223),b.length<ne.numCommentLines+ne.height*ve.length)throw new Error("FIGlet file is missing data.");let he,Ie,Ye=!1;for(X.comment=b.splice(0,ne.numCommentLines).join(`
`),X.numChars=0;b.length>0&&X.numChars<ve.length;){for(he=ve[X.numChars],X[he]=b.splice(0,ne.height),de=0;de<ne.height;de++)typeof X[he][de]>"u"?X[he][de]="":(Ie=new RegExp("\\"+X[he][de].substr(X[he][de].length-1,1)+"+$"),X[he][de]=X[he][de].replace(Ie,""));X.numChars++}for(;b.length>0;){if(he=b.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(he))he=parseInt(he,16);else if(/^0[0-7]+$/.test(he))he=parseInt(he,8);else if(/^[0-9]+$/.test(he))he=parseInt(he,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(he))he=parseInt(he,16);else{if(he==="")break;console.log("Invalid data:"+he),Ye=!0;break}for(X[he]=b.splice(0,ne.height),de=0;de<ne.height;de++)typeof X[he][de]>"u"?X[he][de]="":(Ie=new RegExp("\\"+X[he][de].substr(X[he][de].length-1,1)+"+$"),X[he][de]=X[he][de].replace(Ie,""));X.numChars++}if(Ye===!0)throw new Error("Error parsing data.");return ne},gt.loadFont=function(q,H){if(h[q]){H(null,h[q].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(A.fontPath+"/"+q+".flf").then(function(b){if(b.ok)return b.text();throw console.log("Unexpected response",b),new Error("Network response was not ok.")}).then(function(b){H(null,gt.parseFont(q,b))}).catch(H)},gt.loadFontSync=function(q){if(h[q])return h[q].options;throw new Error("synchronous font loading is not implemented for the browser")},gt.preloadFonts=function(q,H){let b=[];q.reduce(function(M,X){return M.then(function(){return fetch(A.fontPath+"/"+X+".flf").then(ne=>ne.text()).then(function(ne){b.push(ne)})})},Promise.resolve()).then(function(M){for(var X in q)q.hasOwnProperty(X)&&gt.parseFont(q[X],b[X]);H&&H()})},gt.figFonts=h,gt})();o.exports=r})(figlet$1);var figletExports=figlet$1.exports;const figlet=getDefaultExportFromCjs(figletExports),standard=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;var xml_formatting$1={exports:{}};/**@license
 *       __ _____                     ________                              __
 *      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 * /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 * \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *           \/              /____/
 * http://terminal.jcubic.pl
 *
 * This is example of custom formatter for jQuery Terminal
 *
 * Copyright (c) 2014-2023 Jakub Jankiewicz <https://jcubic.pl/me>
 * Released under the MIT license
 *
 */(function(o){(function(r){var l;if(typeof window<"u")l=window;else if(typeof self<"u")l=self;else if(typeof commonjsGlobal<"u")l=commonjsGlobal;else throw new Error("Unknow context");o.exports?o.exports=function(s,v){return v===void 0&&(typeof window<"u"?v=jqueryExports:v=jqueryExports(s)),v.fn.terminal||(typeof window<"u"?requireJquery_terminal():requireJquery_terminal()(v)),r(v),v}:r(l.jQuery)})(function(r){if(!r.terminal)throw new Error("$.terminal is not defined");var l={font:function(h){var A=[];"size"in h&&A.push("--size:"+h.size),"spacing"in h&&A.push("letter-spacing: "+h.spacing);var F=h.background||"",S=h.color||"",W=A.length?'{"style": "'+A.join(";")+'"}':"";return"[[;"+S+";"+F+";;;"+W+"]"},img:function(h){var A=h.class||"",F=h.alt||"",S=h.src||"";delete h.alt,delete h.class,delete h.src;var W=["@","","",A,S,JSON.stringify(h)];return"[["+W.join(";")+"]"+F+"]"},bold:s("b"),overline:s("o"),strike:s("s"),underline:s("u"),glow:s("g"),italic:s("i"),span:function(h){var A=h.class||"";delete h.class;var F=["","","",A,"",JSON.stringify(h)];return"[["+F.join(";")+"]"},link:function(h){var A=h.class||"",F=h.href||"";delete h.class,delete h.href;var S=["!","","",A,F,JSON.stringify(h)];return"[["+S.join(";")+"]"}};function s(h){return function(A){var F=A.class||"";delete A.class;var S=[h,"","",F,"",JSON.stringify(A)];return"[["+S.join(";")+"]"}}l.b=l.bold,l.a=l.link,l.i=l.italic;var v=/(<\/?\s*[a-zA-Z]+(?:\s?[^>]+)?>)/;function y(h){return h.split(v).map(function(A){if(A.match(v)){if(A[1]==="/")return"]";A=A.replace(/^<|>$/g,"");var F=A.match(/^([a-zA-Z]+)(?:\s*(.+))?/);if(!F)return A;var S=F[1].toLowerCase(),W={};if(F[2])for(var ae=F[2],pe=/([\w-]+)\s*=\s*"([^"]+)"/g,_e;_e=pe.exec(ae);){var U=_e[1],te=_e[2];W[U]=te}if(l[S])return l[S](W);var ye=W.class||"",O=["",S,"",ye,"",JSON.stringify(W)];return"[["+O.join(";")+"]"}return A.replace(/&lt;/g,"<").replace(/&gt;/g,">")}).join("")}y.__no_warn__=!0,y.tags=l,r.terminal.defaults.allowedAttributes.push("style"),r.terminal.xml_formatter=y,r.terminal.new_formatter(y)})})(xml_formatting$1);var xml_formattingExports=xml_formatting$1.exports;const xml_formatting=getDefaultExportFromCjs(xml_formattingExports);terminal($);xml_formatting($);const font="Standard";figlet.parseFont(font,standard);function print_dirs(){term.echo(dirs.map(o=>`<blue class="directory">${o}</blue>`).join(`
`))}const root="~";let cwd=root;const directories={education:["<white>education</white>",'* <a href="https://www.iutoic-dhaka.edu">Islamic University of Technology</a> <yellow>"Bsc in Software Engineering"</yellow> 2020-2024','* <a href="https://scholasticabd.com/">Scholastica</a> 2003-2019'],projects:["<white>Open Source projects</white>",[["FantechX9ThorDriver","https://github.com/GuessWhatBBQ/FantechX9ThorDriver","open-source driver for the Fantech X9 Thor RGB gaming mouse targeted for linux systems"],["N/A","web.site","N/A"]].map(([o,r,l=""])=>`* <a href="${r}">${o}</a> &mdash; <white>${l}</white>`)].flat(),skills:["<white>languages</white>",["JavaScript","Python","SQL","C#","Bash"].map(o=>`* <yellow>${o}</yellow>`),"<white>libraries</white>",["React.js","Redux","Jest"].map(o=>`* <green>${o}</green>`),"<white>tools</white>",["Docker","git","GNU/Linux"].map(o=>`* <blue>${o}</blue>`)].flat()},dirs=Object.keys(directories),commands={help(){term.echo(`List of available commands: ${help}`,{delay:10,typing:!0})},echo(...o){o.length>0&&term.echo(o.join(" "))},cd(o=null){o===null||o===".."&&cwd!==root?cwd=root:o.startsWith("~/")&&dirs.includes(o.substring(2))?cwd=o:dirs.includes(o)?cwd=root+"/"+o:this.error("Wrong directory")},ls(o=null){if(o)if(o.startsWith("~/")){const l=o.substring(2).split("/");if(l.length>1)this.error("Invalid directory");else{const s=l[0];this.echo(directories[s].join(`
`))}}else cwd===root?o in directories?this.echo(directories[o].join(`
`)):this.error("Invalid directory"):o===".."?print_dirs():this.error("Invalid directory");else if(cwd===root)print_dirs();else{const r=cwd.substring(2);this.echo(directories[r].join(`
`))}},cat(){if(cwd!==root){const o=cwd.substring(2);let r=this;async function l(){const s=r.get_prompt();r.set_prompt("");for(const v of directories[o])console.log(v),await r.echo(v,{delay:10,typing:!0});r.set_prompt(s)}l(),console.log("Done")}}},formatter=new Intl.ListFormat("en",{style:"long",type:"conjunction"}),command_list=Object.keys(commands),formatted_list=command_list.map(o=>`<white class="command">${o}</white>`),help=formatter.format(formatted_list),user="guest",server="portfolio";function prompt(){return`<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `}const term=$("body").terminal(commands,{greetings:!1,checkArity:!1,completion:!0,prompt});term.on("click",".command",function(){const o=$(this).text();term.exec(o)});term.on("click",".directory",function(){const o=$(this).text();term.exec(`cd ~/${o}`)});function rainbow(o){return lolcat.rainbow(function(r,l){return r=$.terminal.escape_brackets(r),`[[;${hex(l)};]${r}]`},o).join(`
`)}function hex(o){return"#"+[o.red,o.green,o.blue].map(r=>r.toString(16).padStart(2,"0")).join("")}const re=new RegExp(`^s*(${command_list.join("|")}) (.*)`);$.terminal.new_formatter(function(o){return o.replace(re,function(r,l,s){return`<white>${l}</white> <aqua>${s}</aqua>`})});$.terminal.xml_formatter.tags.green=o=>"[[;#44D544;]";$.terminal.xml_formatter.tags.blue=o=>`[[;#55F;;${o.class}]`;figlet.parseFont("Standard",standard);function render(o,r){const l=term.cols();return figlet.text(o,{font,width:l,whitespaceBreak:!0},r)}render("Md Samin Yasar Islam",(o,r)=>{term.echo(()=>rainbow(r)).echo('<white>Type <orange class="command">help</orange> to find all the supported commands</white>')});
