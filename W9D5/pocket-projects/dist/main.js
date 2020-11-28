/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Clock\n/* harmony export */ });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n// import { time } from \"console\";\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        this.printTime();\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // Use console.log to print it.\n        const clockHolder = document.getElementById('clock');\n        (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, clockHolder);\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        this.printTime();\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! namespace exports */
/*! export attachDogLinks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dogLinkCreator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dogLinkCreator\": () => /* binding */ dogLinkCreator,\n/* harmony export */   \"attachDogLinks\": () => /* binding */ attachDogLinks\n/* harmony export */ });\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreator = () => {\n  const arr = [];\n  Object.keys(dogs).forEach(el => {\n    let tempLink = document.createElement(\"a\");\n    tempLink.href = dogs[el];\n    tempLink.innerHTML = el;\n    let tempLi = document.createElement(\"li\");\n    tempLi.className = \"dog-link\";\n    tempLi.appendChild(tempLink);\n    arr.push(tempLi);\n  });\n  return arr;\n}\n\nconst attachDogLinks = () => {\n  let dogLinks = dogLinkCreator();\n  let ul = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach(function(el) {\n    ul.appendChild(el);\n  });\n}\n\nfunction handleEnter() {\n  let ul = document.querySelector('.drop-down-dog-nav').children[1];\n  ul.className = '.drop-down-dog-list visible';\n}\n\n\nfunction handleLeave() {\n  let ul = document.querySelector('.drop-down-dog-nav').children[1];\n  ul.className = '.drop-down-dog-list hidden';\n}\n\nconst dropdownNav = document.querySelector('.drop-down-dog-nav');\ndropdownNav.addEventListener(\"mouseenter\", handleEnter);\ndropdownNav.addEventListener(\"mouseleave\", handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n\n\n\n\n\n\nlet clock = new _clock__WEBPACK_IMPORTED_MODULE_1__.default();\n_drop_down__WEBPACK_IMPORTED_MODULE_2__.dogLinkCreator();\n_drop_down__WEBPACK_IMPORTED_MODULE_2__.attachDogLinks();\n_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoHandler();\n_todo_list__WEBPACK_IMPORTED_MODULE_3__.checkboxHandler();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! namespace exports */
/*! export checkboxHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export todoHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoHandler\": () => /* binding */ todoHandler,\n/* harmony export */   \"checkboxHandler\": () => /* binding */ checkboxHandler\n/* harmony export */ });\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\nconst todoList = document.querySelector(\".todos\");\nconst todoForm = document.querySelector(\".add-todo-form\");\npopulateList();\n\nconst addTodo = (e) => {\n    e.preventDefault();\n    let input = document.querySelector(\".add-todo\")\n    let inputValue = input.value;\n    input.value = \"\";  \n    todos.push({value: inputValue, done: false});\n    localStorage.setItem('todos', JSON.stringify(todos));\n    populateList();\n}\n\nfunction populateList() {\n    todoList.replaceChildren();\n    todos.forEach(function(todo) {\n        let checkbox = document.createElement(\"input\");\n        checkbox.checked = todo.done;\n        let label = document.createElement(\"label\");\n        label.innerHTML = todo.value;\n        checkbox.setAttribute(\"id\", `${todo.value}`)\n        checkbox.setAttribute(\"type\", \"checkbox\")\n        let li = document.createElement(\"li\");\n        li.appendChild(checkbox);\n        li.appendChild(label);\n        todoList.appendChild(li);\n    });\n}\n\nconst checkbox = (e) => {\n    todos.forEach(function(todo) {\n        // debugger;\n        if (todo.value === e.target.id) {\n            // debugger;\n            if (todo.done) {\n                todo.done = false;\n            } else {\n                todo.done = true;\n            }\n        }\n    })\n    localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nfunction todoHandler() {\n    const todoSubmit = document.querySelector(\".add-todo-form\");\n    todoSubmit.addEventListener(\"submit\", addTodo);\n}\n\nfunction checkboxHandler() {\n    const todos = document.querySelector('.todos');\n    todos.addEventListener(\"click\", checkbox);\n}\n\n\n// innerText will show the value as is and ignores any HTML formatting which may be included\n// innerHTML will show the value and apply any HTML formatting\n// label appears to be the same as innerText, so I can't see the difference\n// text appears to be the same as innerText but the jQuery shorthand version\n// textContent appears to the same as innerText but keeps formatting (such as \\n)\n// outerText appears to be the same as innerText\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! namespace exports */
/*! export htmlGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => /* binding */ htmlGenerator\n/* harmony export */ });\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    // debugger;\n    let paragraph = document.createElement(\"p\");\n    paragraph.textContent = string;\n    htmlElement.replaceChildren();\n    htmlElement.appendChild(paragraph);\n    // debugger;\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

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