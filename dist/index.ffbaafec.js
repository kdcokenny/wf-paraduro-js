function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequire893e;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire893e=o),o.register("27Lyk",(function(n,r){var t,o;e(n.exports,"register",(()=>t),(e=>t=e)),e(n.exports,"resolve",(()=>o),(e=>o=e));var i={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)i[n[r]]=e[n[r]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("59GXs",(function(e,n){e.exports=import("./"+o("27Lyk").resolve("fQADl")).then((()=>o("8wuMp")))})),o.register("9cuxe",(function(e,n){e.exports=import("./"+o("27Lyk").resolve("74UK1")).then((()=>o("9wSYg")))})),o.register("1cOVO",(function(e,n){e.exports=o("fFMZG")(new URL(o("27Lyk").resolve("5TfA4"),import.meta.url).toString())})),o.register("fFMZG",(function(e,n){var r=o("lovBw");e.exports=r((function(e){return new Promise((function(n,r){var t=document.getElementsByTagName("link");if([].concat(t).some((function(n){return n.href===e&&n.rel.indexOf("stylesheet")>-1})))n();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("lovBw",(function(e,n){var r={},t={},o={};e.exports=function(e,n){return function(i){var a=function(e){switch(e){case"preload":return t;case"prefetch":return o;default:return r}}(n);return a[i]?a[i]:a[i]=e.apply(null,arguments).catch((function(e){throw delete a[i],e}))}}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.ffbaafec.js","fQADl":"date.3af3d433.js","74UK1":"dashboard.c2249a07.js","5TfA4":"shimmer.fa5f5804.css"}')),document.addEventListener("DOMContentLoaded",(()=>{const e=window.location.pathname;"/register"===e&&async function(){await o("59GXs")}(),"/velkommen/person"===e&&loadOnboardingSlideModule(),async function(){await o("9cuxe")}(),async function(){await o("1cOVO")}(),loadOnboardingUploadImageModule()})),console.log("init");
//# sourceMappingURL=index.ffbaafec.js.map
