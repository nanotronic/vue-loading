!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["vue-loading"]=n():t["vue-loading"]=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(10),i=r(o);e(41),n["default"]={params:["loadingOptions"],handleShow:function(){var t=window.getComputedStyle(this.el).position;"static"!==t&&""!==t||(this["static"]=!0,this.el.style.position="relative"),null!==this.loadingBox&&this.loadingBox.remove();var n=document.createElement("div");n.className="vue-loading",n.style.backgroundColor=this.options.bg,this.el.appendChild(n);var e=document.createElement("div");e.className="vue-loading-msg",e.textContent=this.options.text,n.appendChild(e),window.requestAnimationFrame(function(){n.style.opacity=1}),this.loadingBox=n},handleHide:function(){var t=this;this.loadingBox.addEventListener("transitionend",function(){t.loadingBox.remove(),t["static"]&&t.el.style.removeProperty("position")}),this.loadingBox.style.opacity=0},bind:function(){this["static"]=!1,this.loadingBox=null,this.first=!0,this.options={text:"Loading ...",bg:"rgba(230, 233, 236, 0.8)"},this.params.loadingOptions&&(0,i["default"])(this.options,this.params.loadingOptions)},update:function(t){if(t)this.first=!1,this.handleShow();else{if(this.first)return void(this.first=!1);this.handleHide()}}}},function(t,n,e){t.exports=!e(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(7),o=e(6);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports={"default":e(11),__esModule:!0}},function(t,n,e){e(37),t.exports=e(5).Object.assign},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(9),o=e(33),i=e(32);t.exports=function(t){return function(n,e,u){var a,s=r(n),f=o(s.length),c=i(u,f);if(t&&e!=e){for(;f>c;)if(a=s[c++],a!=a)return!0}else for(;f>c;c++)if((t||c in s)&&s[c]===e)return t||c||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(4),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(3),o=e(5),i=e(16),u=e(21),a="prototype",s=function(t,n,e){var f,c,l,p=t&s.F,d=t&s.G,h=t&s.S,v=t&s.P,g=t&s.B,x=t&s.W,y=d?o:o[n]||(o[n]={}),b=y[a],m=d?r:h?r[n]:(r[n]||{})[a];d&&(e=n);for(f in e)c=!p&&m&&void 0!==m[f],c&&f in y||(l=c?m[f]:e[f],y[f]=d&&"function"!=typeof m[f]?e[f]:g&&c?i(l,r):x&&m[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[a]=t[a],n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((y.virtual||(y.virtual={}))[f]=l,t&s.R&&b&&!b[f]&&u(b,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(24),o=e(29);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(1)&&!e(2)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(27),o=e(25),i=e(28),u=e(34),a=e(7),s=Object.assign;t.exports=!s||e(2)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r})?function(t,n){for(var e=u(t),s=arguments.length,f=1,c=o.f,l=i.f;s>f;)for(var p,d=a(arguments[f++]),h=c?r(d).concat(c(d)):r(d),v=h.length,g=0;v>g;)l.call(d,p=h[g++])&&(e[p]=d[p]);return e}:s},function(t,n,e){var r=e(13),o=e(22),i=e(35),u=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(a){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(20),o=e(9),i=e(14)(!1),u=e(30)("IE_PROTO");t.exports=function(t,n){var e,a=o(t),s=0,f=[];for(e in a)e!=u&&r(a,e)&&f.push(e);for(;n.length>s;)r(a,e=n[s++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(26),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(31)("keys"),o=e(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(3),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r=e(8),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(19);r(r.S+r.F,"Object",{assign:e(23)})},function(t,n,e){n=t.exports=e(39)(),n.push([t.id,".vue-loading{top:0;left:0;z-index:1000;padding:0;width:100%;height:100%;border:none;background-color:rgba(230,233,236,.8);opacity:0;-webkit-transition:opacity .4s;transition:opacity .4s}.vue-loading,.vue-loading-msg{position:absolute;margin:0;cursor:wait}.vue-loading-msg{box-sizing:content-box!important;z-index:1001;padding:0 35px;height:40px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;background-color:#f4f4f4;border-radius:4px;box-shadow:0 1px 8px rgba(0,0,0,.15);border:1px solid #bbb;-webkit-transform:translateX(-50%);transform:translateX(-50%)}",""])},function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var u=n[o];"number"==typeof u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),t.push(u))}},t}},function(t,n,e){function r(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],n))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(f(r.parts[i],n));d[r.id]={id:r.id,refs:1,parts:u}}}}function o(t){for(var n=[],e={},r=0;r<t.length;r++){var o=t[r],i=o[0],u=o[1],a=o[2],s=o[3],f={css:u,media:a,sourceMap:s};e[i]?e[i].parts.push(f):n.push(e[i]={id:i,parts:[f]})}return n}function i(t,n){var e=g(),r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),b.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function u(t){t.parentNode.removeChild(t);var n=b.indexOf(t);n>=0&&b.splice(n,1)}function a(t){var n=document.createElement("style");return n.type="text/css",i(t,n),n}function s(t){var n=document.createElement("link");return n.rel="stylesheet",i(t,n),n}function f(t,n){var e,r,o;if(n.singleton){var i=y++;e=x||(x=a(n)),r=c.bind(null,e,i,!1),o=c.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=s(n),r=p.bind(null,e),o=function(){u(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(n),r=l.bind(null,e),o=function(){u(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}function c(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(n,o);else{var i=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}function l(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function p(t,n){var e=n.css,r=n.sourceMap;r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([e],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(t){var n;return function(){return"undefined"==typeof n&&(n=t.apply(this,arguments)),n}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,y=0,b=[];t.exports=function(t,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=v()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var e=o(t);return r(e,n),function(t){for(var i=[],u=0;u<e.length;u++){var a=e[u],s=d[a.id];s.refs--,i.push(s)}if(t){var f=o(t);r(f,n)}for(var u=0;u<i.length;u++){var s=i[u];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var m=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n,e){var r=e(38);"string"==typeof r&&(r=[[t.id,r,""]]);e(40)(r,{});r.locals&&(t.exports=r.locals)}])});
//# sourceMappingURL=vue-loading.js.map