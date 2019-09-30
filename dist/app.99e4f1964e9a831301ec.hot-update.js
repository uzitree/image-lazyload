webpackHotUpdateImageLazyload("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageLazyload; });\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n    * Merge two or more objects. Returns a new object.\n    * @private\n    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]\n    * @param {Object}   objects  The objects to merge together\n    * @returns {Object}          Merged values of defaults and options\n    */\nvar extend = function extend() {\n  var extended = {};\n  var deep = false;\n  var i = 0;\n  var length = arguments.length;\n  /* Check if a deep merge */\n\n  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {\n    deep = arguments[0];\n    i++;\n  }\n  /* Merge the object into the extended object */\n\n\n  var merge = function merge(obj) {\n    for (var prop in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n        /* If deep merge and property is an object, merge properties */\n        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {\n          extended[prop] = extend(true, extended[prop], obj[prop]);\n        } else {\n          extended[prop] = obj[prop];\n        }\n      }\n    }\n  };\n  /* Loop through each object and conduct a merge */\n\n\n  for (; i < length; i++) {\n    var obj = arguments[i];\n    merge(obj);\n  }\n\n  return extended;\n};\n\nvar defaults = {\n  src: 'data-src',\n  srcset: 'data-srcset',\n  // selector: '.lazyload',\n  root: null,\n  rootMargin: '0px',\n  threshold: 0,\n  placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'\n};\n\nvar ImageLazyload =\n/*#__PURE__*/\nfunction () {\n  function ImageLazyload(el, options) {\n    _classCallCheck(this, ImageLazyload);\n\n    if (typeof el === 'string') {\n      this.images = document.querySelectorAll(el);\n    } else {\n      this.images = el;\n    }\n\n    this.settings = extend(defaults, options || {});\n    this.observer = null; // 执行初始化\n\n    this.init();\n  }\n\n  _createClass(ImageLazyload, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      /* Without observers load everything and bail out early. */\n      if (!window.IntersectionObserver) {\n        this.loadImages();\n        return;\n      }\n\n      var observerConfig = {\n        root: this.settings.root,\n        rootMargin: this.settings.rootMargin,\n        threshold: [this.settings.threshold]\n      };\n      this.observer = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            _this.observer.unobserve(entry.target);\n\n            var _src = entry.target.getAttribute(_this.settings.src);\n\n            var srcset = entry.target.getAttribute(_this.settings.srcset);\n\n            if (entry.target.tagName.toLowerCase() === 'img') {\n              if (_src) {\n                entry.target.src = _src;\n              }\n\n              if (srcset) {\n                entry.target.srcset = srcset;\n              }\n            } else {\n              entry.target.style.backgroundImage = 'url(' + _src + ')';\n            }\n          }\n        });\n      }, observerConfig);\n      this.images.forEach(function (image) {\n        if (entry.target.tagName.toLowerCase() === 'img') {\n          if (src) {\n            entry.target.src = src;\n          }\n        } else {\n          entry.target.style.backgroundImage = 'url(' + src + ')';\n        }\n\n        _this.observer.observe(image);\n      });\n    }\n  }, {\n    key: \"loadAndDestroy\",\n    value: function loadAndDestroy() {\n      if (!this.settings) {\n        return;\n      }\n\n      this.loadImages();\n      this.destroy();\n    }\n  }, {\n    key: \"loadImages\",\n    value: function loadImages() {\n      var _this2 = this;\n\n      if (!this.settings) {\n        return;\n      }\n\n      this.images.forEach(function (image) {\n        var src = image.getAttribute(_this2.settings.src);\n        var srcset = image.getAttribute(_this2.settings.srcset);\n\n        if (image.tagName.toLowerCase() === 'img') {\n          if (src) {\n            image.src = src;\n          }\n\n          if (srcset) {\n            image.srcset = srcset;\n          }\n        } else {\n          image.style.backgroundImage = \"url('\" + src + \"')\";\n        }\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.settings) {\n        return;\n      }\n\n      this.observer.disconnect();\n      this.settings = null;\n    }\n  }]);\n\n  return ImageLazyload;\n}();\n\n\n\n//# sourceURL=webpack://ImageLazyload/./src/index.js?");

/***/ })

})