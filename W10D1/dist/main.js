/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 115:0-14 */
/***/ ((module) => {

eval("\r\n\r\nclass DOMNodeCollection {\r\n\r\n    constructor(array) {\r\n        this.array = array;\r\n    }\r\n\r\n    html(string) {\r\n        if (typeof string === \"string\") {\r\n            this.array.forEach( e => {\r\n                e.innerHTML = string;\r\n            })\r\n        } else {\r\n            return this.array[0].innerHTML;\r\n        }\r\n    }\r\n\r\n    empty() {\r\n        this.html(\"\");\r\n    }\r\n\r\n    append(arg) {\r\n        if (arg instanceof DOMNodeCollection) {\r\n            for (let i = 0 ; i < this.array.length ; i++) {\r\n                this.array[i].innerHTML = this.array[i].innerHTML + arg.array[i].outerHTML;\r\n            }\r\n        }\r\n        if (arg instanceof HTMLElement) {\r\n            for (let i = 0 ; i < this.array.length ; i++) {\r\n                this.array[i].innerHTML = this.array[i].innerHTML + arg.outerHTML;\r\n            }\r\n        }\r\n        if (typeof arg === \"string\") {\r\n            for (let i = 0 ; i < this.array.length ; i++) {\r\n                this.array[i].innerHTML = this.array[i].innerHTML + arg;\r\n            }\r\n        }\r\n        return;\r\n    }\r\n\r\n    attr(attribute) {\r\n        return this.array[0].getAttribute(attribute);\r\n    }\r\n\r\n    addClass(className) {\r\n        this.array.forEach( e => {\r\n            e.setAttribute('class', className);\r\n        })\r\n    }\r\n\r\n    removeClass() {\r\n        this.array.forEach( e => {\r\n            e.removeAttribute('class');\r\n        })\r\n    }\r\n\r\n    children() {\r\n        let children = [];\r\n        this.array.forEach( e=> {\r\n            children.push(...e.children);\r\n        })\r\n\r\n        return new DOMNodeCollection(children)\r\n\r\n    }\r\n\r\n    parent() {\r\n        let parent = [];\r\n        this.array.forEach( e=> {\r\n            if(!parent.includes(e.parentElement)) {\r\n                parent.push(e.parentElement);\r\n            }\r\n        })\r\n\r\n        return new DOMNodeCollection(parent);\r\n    }\r\n\r\n    find(argument) {\r\n        let query = document.querySelectorAll(argument);\r\n        let arr = [];\r\n        query.forEach(e=> {\r\n            if (this.array.includes(e.parentNode)) {\r\n                arr.push(e);\r\n            }\r\n        })\r\n        return new DOMNodeCollection(arr);\r\n    }\r\n\r\n    remove() {\r\n        this.array.forEach( e => {\r\n            e.parentNode.removeChild(e);\r\n        })\r\n    }\r\n\r\n    on(type, callback) {\r\n        this.callback = callback;\r\n        this.array[0].addEventListener(type, callback);\r\n    }\r\n\r\n    off(type) {\r\n        this.array[0].removeEventListener(type, this.callback);\r\n    }\r\n\r\n    extend(...args) {\r\n        Object.assign(args[0], ...args.slice(1));\r\n    }\r\n\r\n    ajax() {\r\n        \r\n    }\r\n}\r\n\r\n\r\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// let collection = new DomNodeCollection([]);\r\n\r\nwindow.$l = function(selector) {\r\n    let arr = [];\r\n    let collection;\r\n    if (selector instanceof Function) {\r\n        let functionArr = [];\r\n        functionArr.push(selector);\r\n        window.addEventListener('DOMContentLoaded', function() {\r\n            while(functionArr.length) {\r\n                functionArr.shift()();\r\n            }\r\n        })\r\n\r\n    }\r\n    if (selector instanceof HTMLElement) {\r\n        collection = new (_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default())([selector]);\r\n    }\r\n    if (typeof selector === \"string\"){\r\n        let nodelist = document.querySelectorAll(selector);\r\n        arr = [...nodelist];\r\n        collection = new (_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default())(arr);\r\n    }\r\n    return collection;\r\n}\r\n\r\nfunction fullyLoaded() {\r\n    console.log(\"fully loaded\");\r\n}\r\n\r\nwindow.$l(fullyLoaded);\r\n\r\n// window.foo = function() {\r\n//     sideEffect();\r\n//     return true;\r\n// }\r\n// window.bar = function() {\r\n//     sideEffect();\r\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;