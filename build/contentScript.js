!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=9)}({1:function(e,o,n){"use strict";o.a={epoch:{initializeConnection:"initializeConnection",sayHello:"sayHello"},contentScript:{epochReceived:"messageReceivedEpoch",messageReceived:"messageReceived"},background:{placeholder:"placeholder"}}},9:function(e,o,n){"use strict";n.r(o);var t=n(1),r=t.a.epoch,c=t.a.contentScript;console.log("contentScript Running"),chrome.runtime.onMessage.addListener((function(e,o,n){if(e.type===r.sayHello){console.log("window",window),console.log("apollo",window.__APOLLO_CLIENT__);var t=window.__APOLLO_CLIENT__.localState.cache.data.data;console.log("Got a message from Epoch"),console.log("contentCache",t),t&&n({type:c.epochReceived,payload:t}),n({type:c.epochReceived,payload:"noCache"})}})),chrome.runtime.sendMessage({type:"helloFromContent",payload:"HelloPayload"},(function(e){console.log("contentScript received from Background"),console.log(e.type)}))}});