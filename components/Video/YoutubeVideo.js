!function(t,n){for(var e in n)t[e]=n[e]}(exports,function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=36)}([function(t,n){t.exports=require("react")},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(27),o=e(31);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(11)("wks"),o=e(12),u=e(1).Symbol,i="function"==typeof u;(t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(4),o=e(1),u=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(22)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){"use strict";var r,o,u=e(25),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,f=(r=/a/,o=/b*/g,i.call(r,"a"),i.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(f||l)&&(a=function(t){var n,e,r,o,a=this;return l&&(e=new RegExp("^"+a.source+"$(?!\\s)",u.call(a))),f&&(n=a.lastIndex),r=i.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),l&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,n,e){var r=e(1),o=e(5),u=e(32),i=e(12)("src"),c=e(33),a=(""+c).split("toString");e(4).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(u(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(u(e,i)||o(e,i,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||c.call(this)}))},function(t,n,e){"use strict";var r=e(2),o=e(16),u=e(17),i=e(19);e(23)("match",1,(function(t,n,e,c){return[function(e){var r=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=c(e,t,this);if(n.done)return n.value;var a=r(t),f=String(this);if(!a.global)return i(a,f);var l=a.unicode;a.lastIndex=0;for(var s,p=[],v=0;null!==(s=i(a,f));){var d=String(s[0]);p[v]=d,""===d&&(a.lastIndex=u(f,o(a.lastIndex),l)),v++}return 0===v?null:p}]}))},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(18)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(8),o=e(9);t.exports=function(t){return function(n,e){var u,i,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(u=c.charCodeAt(a))<55296||u>56319||a+1===f||(i=c.charCodeAt(a+1))<56320||i>57343?t?c.charAt(a):u:t?c.slice(a,a+2):i-56320+(u-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(20),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var u=e.call(t,n);if("object"!=typeof u)throw new TypeError("RegExp exec method returned something other than an Object or null");return u}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){var r=e(21),o=e(10)("toStringTag"),u="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:u?r(n):"Object"==(i=r(n))&&"function"==typeof n.callee?"Arguments":i}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=!1},function(t,n,e){"use strict";e(24);var r=e(14),o=e(5),u=e(7),i=e(9),c=e(10),a=e(13),f=c("species"),l=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=c(t),v=!u((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=v?!u((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[f]=function(){return e}),e[p](""),!n})):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!s){var x=/./[p],y=e(i,p,""[t],(function(t,n,e,r,o){return n.exec===a?v&&!o?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),g=y[0],h=y[1];r(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return h.call(t,this,n)}:function(t){return h.call(t,this)})}}},function(t,n,e){"use strict";var r=e(13);e(26)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){"use strict";var r=e(2);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(1),o=e(4),u=e(5),i=e(14),c=e(34),a=function(t,n,e){var f,l,s,p,v=t&a.F,d=t&a.G,x=t&a.S,y=t&a.P,g=t&a.B,h=d?r:x?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),m=b.prototype||(b.prototype={});for(f in d&&(e=n),e)s=((l=!v&&h&&void 0!==h[f])?h:e)[f],p=g&&l?c(s,r):y&&"function"==typeof s?c(Function.call,s):s,h&&i(h,f,s,t&a.U),b[f]!=s&&u(b,f,p),y&&m[f]!=s&&(m[f]=s)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(2),o=e(28),u=e(30),i=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(6)&&!e(7)((function(){return 7!=Object.defineProperty(e(29)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=e(11)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(35);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),u=(e(15),function(t){var n=t.url;return Object(r.useEffect)((function(){console.log("Youtube")}),[]),o.a.createElement("div",{style:{overflow:"hidden",paddingBottom:"56.25%",position:"relative",height:0}},o.a.createElement("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(function(t){var n=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!n||11!=n[7].length)&&n[7]}(n)),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))});n.default=function(t){var n=t.url;return o.a.createElement(u,{url:n})}}]));