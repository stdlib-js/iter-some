// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,i){var o,n;if(!r(s))throw new TypeError(t("0Cq48",s));if(!e(i))throw new TypeError(t("0Cq4I",i));for(o=0;;){if((n=s.next()).done)return!1;if(n.value&&(o+=1)===i)return!0}}export{s as default};
//# sourceMappingURL=index.mjs.map
