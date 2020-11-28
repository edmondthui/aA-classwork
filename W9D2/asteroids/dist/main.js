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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\n\r\nfunction Asteroid (game, pos, vel = Utils.randomVec(20), radius = 25, color = \"gray\") {\r\n    // debugger;\r\n    MovingObject.call(this, game, pos, vel, radius, color);\r\n    // debugger;\r\n}\r\n\r\nUtils.inherits(Asteroid,MovingObject);\r\nmodule.exports = Asteroid;\r\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\r\nconst asteroids = [];\r\nlet all_objects = [];\r\n\r\nwindow.Game = function (DIM_X, DIM_Y) {\r\n    this.DIM_X = DIM_X,\r\n    this.DIM_Y = DIM_Y\r\n    this.ship = new Ship(this);\r\n}\r\n\r\nGame.NUM_ASTEROIDS = 20; \r\nGame.prototype.addAsteroids = function() {\r\n    for(let i =0 ; i < Game.NUM_ASTEROIDS; i ++) {\r\n        let asteroid = new Asteroid(this, this.randomPosition());\r\n        asteroids.push(asteroid);\r\n    }\r\n    this.allObjects();\r\n    debugger;\r\n\r\n}\r\n\r\nGame.prototype.allObjects = function() {\r\n    all_objects = asteroids.concat(this.ship);\r\n\r\n}\r\n\r\n\r\nGame.prototype.randomPosition = function() {\r\n    return [(Math.random() * this.DIM_X), (Math.random() * this.DIM_Y)];\r\n}\r\n\r\nGame.prototype.draw = function(ctx) {\r\n    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);\r\n    // debugger;\r\n    for(let i =0 ; i < all_objects.length; i++){\r\n        // debugger;\r\n        all_objects[i].draw(ctx)\r\n        // debugger;\r\n    };\r\n}\r\n\r\nGame.prototype.moveObjects = function() {\r\n    for (let i = 0; i < all_objects.length; i++) {\r\n        all_objects[i].move();\r\n    };\r\n}\r\n\r\nGame.prototype.wrap = function (pos) {\r\n    let x = pos[0];\r\n    let y = pos[1];\r\n    if (x > this.DIM_X){\r\n        return [0, y];\r\n    }\r\n    if (y > this.DIM_Y){\r\n        return [x, 0];\r\n    }\r\n    if (x < 0){\r\n        return [this.DIM_X, y];\r\n    }\r\n    if (y < 0){\r\n        return [x, this.DIM_Y];\r\n    }\r\n    return pos;\r\n}\r\n\r\nGame.prototype.checkCollisions = function(){\r\n    // let firstAst;\r\n    // let secondAst;\r\n\r\n    for(let i = 0 ; i< all_objects.length - 1; i++) {\r\n        for (let j = i+1; j < all_objects.length; j++) {\r\n            if (all_objects[i].isCollidedWith(all_objects[j])) {\r\n                // alert(\"COLLISION\");\r\n                // this.remove(i);\r\n                // this.remove(j);\r\n                all_objects[i].collideWith(all_objects[j]);\r\n\r\n            }\r\n        }\r\n    }\r\n    // this.remove(firstAst);\r\n    // this.remove(secondAst);\r\n    \r\n}\r\n\r\nGame.prototype.step = function(){\r\n    this.checkCollisions();\r\n    this.moveObjects();\r\n}\r\n\r\nGame.prototype.remove = function(remove_asteroid){\r\n    let remove_index = all_objects.indexOf(remove_asteroid);\r\n    all_objects.splice(remove_index, 1);\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("// const Game = require(\"./game.js\")\r\n\r\nfunction GameView (game, context) {\r\n    this.game = game;\r\n    this.context = context;\r\n\r\n}\r\n\r\nGameView.prototype.start = function () {\r\n    this.game.addAsteroids();\r\n    setInterval(this.game.step.bind(this.game), 50);\r\n    setInterval(this.game.draw.bind(this.game, this.context), 50);\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("// const Game = require(\"./game.js\");\r\n\r\nfunction MovingObject (game, pos, vel, radius, color){\r\n    this.game = game;\r\n    this.pos = pos;\r\n    this.vel = vel;\r\n    this.radius = radius;\r\n    this.color = color;\r\n}\r\n\r\nMovingObject.prototype.draw =  function(ctx){\r\n    ctx.beginPath();\r\n    ctx.fillStyle = this.color;\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius,0, 2 * Math.PI );\r\n    ctx.fill(); //https://www.w3schools.com/tags/canvas_fill.asp\r\n}\r\n\r\nMovingObject.prototype.move = function() {\r\n    this.pos[0] += this.vel[0];\r\n    this.pos[1] += this.vel[1];\r\n    this.pos = this.game.wrap.call(this.game, this.pos);\r\n\r\n}\r\n// this is math, not JavaScript\r\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\r\n\r\n// A vector has a norm, a.k.a. magnitude or length. The norm of a velocity\r\n//  vector is a speed. If obj.vel = [3, 4] (3 horizontal pixels and 4 vertical \r\n// pixels per unit time) then the overall speed is 5 pixels per unit time. \r\n// You can easily calculate the norm of a vector using your distance function:\r\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\r\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\r\n\r\nMovingObject.prototype.isCollidedWith = function(otherObject) {\r\n    // let origin1 = this.radius;\r\n    let dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\r\n    return ((this.radius+otherObject.radius) > dist);\r\n}\r\n\r\nMovingObject.prototype.collideWith = function(otherObject) {\r\n    this.game.remove(this);\r\n    this.game.remove(otherObject);\r\n}\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 12:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\n\r\nfunction Ship (game, pos, vel = [1,1], radius = 25, color = \"red\") {\r\n    // debugger;\r\n    MovingObject.call(this, game, pos, vel, radius, color);\r\n    this.pos = game.randomPosition();\r\n    // debugger;\r\n}\r\n\r\nUtils.inherits(Ship, MovingObject);\r\nmodule.exports = Ship;\r\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\r\nconst Util = {\r\n    \r\n    inherits(childClass, parentClass) {\r\n        function Surrogate(){};\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    // Return a randomly oriented vector with the given length.\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n    \r\n    // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n\r\n};\r\n  \r\n\r\n\r\n\r\n\r\n// var Util = {\r\n// inherits: function (childClass, parentClass) {\r\n//   function Surrogate() {}\r\n\r\n//     Surrogate.prototype = parentClass.prototype;\r\n//     childClass.prototype = new Surrogate();\r\n//     childClass.prototype.constructor = childClass;\r\n//   }\r\n// };\r\n\r\nmodule.exports = Util;\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("console.log(\"Webpack is working!\");\r\n// const MovingObject = require(\"./moving_object.js\");\r\n// const Asteroid = require('./asteroid.js');\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\r\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    const canvas = document.getElementById('game-canvas')\r\n    // canvas.width = 1600;\r\n    // canvas.height = 900;\r\n    canvas.width = window.innerWidth *.98;\r\n    canvas.height = window.innerHeight *.98;\r\n    const ctx = canvas.getContext('2d');\r\n    // let ast1 = new Asteroid([100,50]);\r\n    // ast1.draw(ctx);\r\n    // Game.draw(ctx)\r\n\r\n    let game = new Game(canvas.width, canvas.height);\r\n    let gameView = new GameView(game, ctx);\r\n    gameView.start();\r\n    // const mov1 = new MovingObject([25,25],[300,300], 10, \"red\");\r\n    // mov1.draw(ctx);\r\n    // mov1.move();\r\n    // mov1.draw(ctx);\r\n});\r\n// console.log(\"TEST\")\r\n// window.MovingObject = MovingObject;\r\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;