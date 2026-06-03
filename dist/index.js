"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=s(function(g,a){
var o=require('@stdlib/assert-is-iterator-like/dist'),v=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e){var i,t;if(!o(r))throw new TypeError(u('0Pr3v',r));if(!v(e))throw new TypeError(u('0Pr45',e));for(i=0;;){if(t=r.next(),t.done)return!1;if(t.value&&(i+=1,i===e))return!0}}a.exports=m
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
