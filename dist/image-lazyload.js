!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ImageLazyload=e():t.ImageLazyload=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function t(){var e={},r=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(r=arguments[0],n++);for(var s=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=t(!0,e[o],n[o]):e[o]=n[o])};n<o;n++){var i=arguments[n];s(i)}return e};function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.d(e,"default",(function(){return i}));var s={src:"data-src",srcset:"data-srcset",root:null,rootMargin:"0px",threshold:0,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M8fPjwfwAH5ANKxO/wYQAAAABJRU5ErkJggg=="},i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.images="string"==typeof e?document.querySelectorAll(e):e,this.settings=n(s,r||{}),this.observer=null,this.init()}var e,r,i;return e=t,(r=[{key:"init",value:function(){var t=this;if(window.IntersectionObserver){var e={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){t.observer.unobserve(e.target);var r=e.target.getAttribute(t.settings.src),n=e.target.getAttribute(t.settings.srcset);"img"===e.target.tagName.toLowerCase()?(r&&(e.target.src=r),n&&(e.target.srcset=n)):e.target.style.backgroundImage="url("+r+")"}}))}),e),this.images.forEach((function(e){t.settings.placeholder&&("img"===e.tagName.toLowerCase()?e.src=t.settings.placeholder:e.style.backgroundImage="url("+t.settings.placeholder+")"),t.observer.observe(e)}))}else this.loadImages()}},{key:"loadAndDestroy",value:function(){this.settings&&(this.loadImages(),this.destroy())}},{key:"loadImages",value:function(){var t=this;this.settings&&this.images.forEach((function(e){var r=e.getAttribute(t.settings.src),n=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),n&&(e.srcset=n)):e.style.backgroundImage="url('"+r+"')"}))}},{key:"destroy",value:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}}])&&o(e.prototype,r),i&&o(e,i),t}()}]).default}));