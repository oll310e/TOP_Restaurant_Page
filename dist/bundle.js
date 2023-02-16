(()=>{"use strict";var e,t,n,r,a,o,i,c,s,d,l,u,p,m,f={890:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),s=n.n(c),d=new URL(n(579),n.b),l=i()(a()),u=s()(d);l.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-blue: rgb(167, 167, 241);\n  --gold-orange: rgb(255, 183, 0);\n  --hover-gray: rgb(59, 124, 156);\n}\n\nbody {\n  background-color: var(--background-blue);\n}\n\n#container {\n  margin: 0 auto;\n  height: 100vh;\n  width: 100vw;\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  min-width: 400px;\n  align-items: center;\n  gap: 20px;\n}\n\n#tab_menu {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template: 1fr / 50% 50%;\n  justify-content: space-around;\n  margin-bottom: -20px;\n}\n\n#tab_menu > .btn {\n  background-color: var(--gold-orange);\n  border: 2px solid black;\n}\n\n#tab_menu > .btn:hover {\n  background-color: var(--gold-orange);\n  border: 2px solid var(--hover-gray);\n  color: var(--hover-gray);\n  cursor: pointer;\n}\n\n.tab {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\n#title_img {\n  background: url("+u+");\n  width: 100%;\n  height: 40vw;\n  max-height: 400px;\n  max-width: 1000px;\n  background-size: cover;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#headline {\n  color: var(--gold-orange);\n  -webkit-text-stroke: 1.5px black;\n  font-size: 50px;\n  margin-left: 40px;\n}\n\n#brag {\n  margin: 0 40px;\n  font-size: 20px;\n  text-align: center;\n}\n",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},579:(e,t,n)=>{e.exports=n.p+"60e80f369c501ac5950b.jpeg"}},h={};function b(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return f[e](n,n.exports,b),n.exports}b.m=f,b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),b.p="",b.b=document.baseURI||self.location.href,b.nc=void 0,e=b(379),t=b.n(e),n=b(795),r=b.n(n),a=b(569),o=b.n(a),i=b(565),c=b.n(i),s=b(216),d=b.n(s),l=b(589),u=b.n(l),p=b(890),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.getElementById("container"),t=document.createElement("div");t.id="tab_menu";const n=document.createElement("button");n.setAttribute("data-tab-content","home"),n.classList.add("btn"),n.innerText="Home";const r=document.createElement("button");r.classList.add("btn"),r.setAttribute("data-tab-content","about"),r.innerText="About",t.appendChild(n),t.appendChild(r);const a=document.createElement("div");a.id="title_img";const o=document.createElement("h1");o.id="headline",o.innerText="SeaSalt MoonBar";const i=document.createElement("div");i.setAttribute("data-tab-target","home"),i.classList.add("active"),i.classList.add("tab");const c=document.createElement("p");c.id="brag",c.innerText="We are the best bar under the moon, and with the ocean at our feet, there is no better place to relax and enjoy a good drink",i.appendChild(c);const s=document.createElement("div");s.setAttribute("data-tab-target","about"),s.classList.add("tab");const d=document.createElement("p");d.id="brag",d.innerHTML='We are a happy crew with great enthusiasm and love for the craft and the ocean. \nPress <a href="/">here</a> to find out more',s.appendChild(d),a.appendChild(o),e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(s)}(),function(){document.querySelector("#container");const e=document.querySelectorAll("[data-tab-target]"),t=document.querySelectorAll(".btn");console.log(e,t),t.forEach((t=>{t.addEventListener("click",(n=>{let r=t.getAttribute("data-tab-content");var a;a=document.querySelector(`[data-tab-target="${r}"`),e.forEach((e=>{e.classList.remove("active")})),a.classList.add("active")}))}))}()})();