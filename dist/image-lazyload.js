!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImageLazyload=t():e.ImageLazyload=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",(function(){return o}));var i="undefined"!=typeof window,o=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i){this.el=t,this.elements=document.querySelectorAll(this.el),this.elements=Array.from(this.elements);var r={threshold:0,event:"scroll",container:window,data_attribute:"src",skip_invisible:!1,appear:null,loaded:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};this.settings=Object.assign(r,n),this.appearEvent=new CustomEvent("appear"),this.init()}}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this;this.elements.forEach((function(t,n,r){"IMG"===t.tagName&&""===t.src&&(t.src=e.settings.placeholder),t.addEventListener("appear",(function(n){var r=t.getAttribute("data-"+e.settings.data_attribute),i=document.createElement("img");i.addEventListener("load",(function(){t.style.display="none","img"===t.tagName.toLowerCase()?t.src=r:t.style.backgroundImage.length<6&&(t.style.backgroundImage="url("+r+")"),t.style.display="",t.loaded=!0,e.elements=e.elements.filter((function(e){return!e.loaded})),e.settings.loaded&&e.settings.loaded.call(e,t)})),i.src=r}),{once:!0})})),0===this.settings.event.indexOf("scroll")&&this.settings.container.addEventListener("scroll",(function(t){e.update()})),window.addEventListener("load",(function(){e.update()})),window.addEventListener("resize",(function(){e.update()}))}},{key:"update",value:function(){var e=this;this.elements.forEach((function(t,n,r){e.checkInView(t)&&e.dispatchEvent(t,event)}))}},{key:"dispatchEvent",value:function(e,t){e.dispatchEvent?e.dispatchEvent(this.appearEvent):e.fireEvent(this.appearEvent)}},{key:"checkInView",value:function(e){var t=e.getBoundingClientRect();return console.log(t),t.top<window.innerHeight+this.settings.threshold&&t.bottom>0&&t.left<window.innerWidth+this.settings.threshold&&t.right>0}}])&&r(t.prototype,n),o&&r(t,o),e}()}]).default}));