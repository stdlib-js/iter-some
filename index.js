// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSome=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,e,n,o,i;if(null==t)return v.call(t);e=t[m],i=m,r=null!=(o=t)&&d.call(o,i);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var g=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return y(t)||w(t)}function O(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",w);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,T="object"==typeof global?global:null;var I=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,A=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;p(N,"REGEXP",x);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function C(t){return null!==t&&"object"==typeof t}function V(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!B(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var F="function"==typeof t||"object"==typeof A||"function"==typeof P?function(t){return V(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?V(t).toLowerCase():r};function G(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===F(t)}(t.next)}function k(t){return"number"==typeof t}var L=Number,M=L.prototype.toString;var q=b();function R(t){return"object"==typeof t&&(t instanceof L||(q?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function U(t){return k(t)||R(t)}p(U,"isPrimitive",k),p(U,"isObject",R);var Y=Number.POSITIVE_INFINITY,X=L.NEGATIVE_INFINITY,z=Math.floor;function D(t){return t<Y&&t>X&&z(r=t)===r;var r}function H(t){return k(t)&&D(t)}function J(t){return R(t)&&D(t.valueOf())}function K(t){return H(t)||J(t)}function Q(t){return H(t)&&t>0}function W(t){return J(t)&&t.valueOf()>0}function Z(t){return Q(t)||W(t)}function $(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return p(K,"isPrimitive",H),p(K,"isObject",J),p(Z,"isPrimitive",Q),p(Z,"isObject",W),function(t,r){var e,n;if(!G(t))throw new TypeError($("0Cq48",t));if(!Q(r))throw new TypeError($("0Cq4I",r));for(e=0;;){if((n=t.next()).done)return!1;if(n.value&&(e+=1)===r)return!0}}}));
//# sourceMappingURL=index.js.map
