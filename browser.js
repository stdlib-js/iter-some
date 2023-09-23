// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(t=(-o).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=o.toString(r),o||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var f=Math.abs,p=String.prototype.toLowerCase,s=String.prototype.toUpperCase,b=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,_=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,o=parseFloat(e.arg);if(!isFinite(o)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);o=e.arg}switch(e.specifier){case"e":case"E":t=o.toExponential(e.precision);break;case"f":case"F":t=o.toFixed(e.precision);break;case"g":case"G":f(o)<1e-4?((r=e.precision)>0&&(r-=1),t=o.toExponential(r)):t=o.toPrecision(e.precision),e.alternate||(t=b.call(t,w,"$1e"),t=b.call(t,h,"e"),t=b.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=b.call(t,d,"e+0$1"),t=b.call(t,y,"e-0$1"),e.alternate&&(t=b.call(t,_,"$1."),t=b.call(t,g,"$1.e")),o>=0&&e.sign&&(t=e.sign+t),t=e.specifier===s.call(e.specifier)?s.call(t):p.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var S=String.fromCharCode,O=isNaN,P=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,c,f,p,s;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",f=1,p=0;p<e.length;p++)if(l(n=e[p]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,o;for(t=[],o=0,n=x.exec(e);n;)(r=e.slice(o,x.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),o=x.lastIndex,n=x.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function I(e){return"string"==typeof e}function F(e){var r,t,n;if(!I(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var C,G=Object.prototype,N=G.toString,$=G.__defineGetter__,B=G.__defineSetter__,R=G.__lookupGetter__,L=G.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var Z=C;function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=X()?function(e){var r,t,n,o,i;if(null==e)return Y.call(e);t=e[D],i=D,r=null!=(o=e)&&z.call(o,i);try{e[D]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[D]=t:delete e[D],n}:function(e){return Y.call(e)},J=Boolean,K=Boolean.prototype.toString,Q=X();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function re(e){return U(e)||ee(e)}function te(){return new Function("return this;")()}M(re,"isPrimitive",U),M(re,"isObject",ee);var ne,oe="object"==typeof self?self:null,ie="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!U(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ae)return ae;if(oe)return oe;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ce.document&&ce.document.childNodes,le=Int8Array,fe="function"==typeof Object.defineProperty?Object.defineProperty:null,pe=Object.defineProperty,se=Object.prototype,be=se.toString,de=se.__defineGetter__,ye=se.__defineSetter__,_e=se.__lookupGetter__,ge=se.__lookupSetter__;ne=function(){try{return fe({},"x",{}),!0}catch(e){return!1}}()?pe:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===be.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===be.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(_e.call(e,r)||ge.call(e,r)?(n=e.__proto__,e.__proto__=se,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&de&&de.call(e,r,t.get),a&&ye&&ye.call(e,r,t.set),e};var ve=ne;function he(e,r,t){ve(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function we(){return/^\s*function\s*([^(]*)/i}var me=/^\s*function\s*([^(]*)/i;he(we,"REGEXP",me);var je=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Ee(e){return null!==e&&"object"==typeof e}function Se(e){var r,t,n,o;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=me.exec(n.toString()))return r[1]}return Ee(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}he(Ee,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!je(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ee));var Oe="function"==typeof e||"object"==typeof le||"function"==typeof ue?function(e){return Se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Se(e).toLowerCase():r};function Pe(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&function(e){return"function"===Oe(e)}(e.next)}var Te,ke="function"==typeof Object.defineProperty?Object.defineProperty:null,xe=Object.defineProperty,Ae=Object.prototype,Ve=Ae.toString,Ie=Ae.__defineGetter__,Fe=Ae.__defineSetter__,Ce=Ae.__lookupGetter__,Ge=Ae.__lookupSetter__;Te=function(){try{return ke({},"x",{}),!0}catch(e){return!1}}()?xe:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Ve.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ve.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Ce.call(e,r)||Ge.call(e,r)?(n=e.__proto__,e.__proto__=Ae,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ie&&Ie.call(e,r,t.get),a&&Fe&&Fe.call(e,r,t.set),e};var Ne=Te;function $e(e,r,t){Ne(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Be,Re="function"==typeof Object.defineProperty?Object.defineProperty:null,Le=Object.defineProperty,Ze=Object.prototype,Me=Ze.toString,Ue=Ze.__defineGetter__,We=Ze.__defineSetter__,Xe=Ze.__lookupGetter__,Ye=Ze.__lookupSetter__;Be=function(){try{return Re({},"x",{}),!0}catch(e){return!1}}()?Le:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Me.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Me.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Xe.call(e,r)||Ye.call(e,r)?(n=e.__proto__,e.__proto__=Ze,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ue&&Ue.call(e,r,t.get),a&&We&&We.call(e,r,t.set),e};var ze=Be;function qe(e,r,t){ze(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var De,He="function"==typeof Object.defineProperty?Object.defineProperty:null,Je=Object.defineProperty,Ke=Object.prototype,Qe=Ke.toString,er=Ke.__defineGetter__,rr=Ke.__defineSetter__,tr=Ke.__lookupGetter__,nr=Ke.__lookupSetter__;De=function(){try{return He({},"x",{}),!0}catch(e){return!1}}()?Je:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Qe.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Qe.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(tr.call(e,r)||nr.call(e,r)?(n=e.__proto__,e.__proto__=Ke,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&er&&er.call(e,r,t.get),a&&rr&&rr.call(e,r,t.set),e};var or=De;function ir(e,r,t){or(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ar(e){return"number"==typeof e}var cr=Number,ur=cr.prototype.toString,lr=X();function fr(e){return"object"==typeof e&&(e instanceof cr||(lr?function(e){try{return ur.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function pr(e){return ar(e)||fr(e)}ir(pr,"isPrimitive",ar),ir(pr,"isObject",fr);var sr=Number.POSITIVE_INFINITY,br=cr.NEGATIVE_INFINITY,dr=Math.floor;function yr(e){return e<sr&&e>br&&dr(r=e)===r;var r}function _r(e){return ar(e)&&yr(e)}function gr(e){return fr(e)&&yr(e.valueOf())}function vr(e){return _r(e)||gr(e)}function hr(e){return _r(e)&&e>0}function wr(e){return gr(e)&&e.valueOf()>0}function mr(e){return hr(e)||wr(e)}function jr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return qe(vr,"isPrimitive",_r),qe(vr,"isObject",gr),$e(mr,"isPrimitive",hr),$e(mr,"isObject",wr),function(e,r){var t,n;if(!Pe(e))throw new TypeError(jr("0Pr3v,IA",e));if(!hr(r))throw new TypeError(jr("0Pr45,IB",r));for(t=0;;){if((n=e.next()).done)return!1;if(n.value&&(t+=1)===r)return!0}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterSome=r();
//# sourceMappingURL=browser.js.map
