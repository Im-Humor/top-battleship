"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktop_battleship"] = self["webpackChunktop_battleship"] || []).push([["gameboard"],{

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Gameboard {\n  constructor(size) {\n    this.size = size;\n    this.boardArray = [];\n    this.shipArray = [];\n  }\n  populate() {\n    for (let x = 0; x < this.size; x++) {\n      let tempArray = [];\n      for (let y = 0; y < this.size; y++) {\n        tempArray.push(new Gamesquare());\n      }\n      this.boardArray[x] = tempArray;\n    }\n  }\n  addShip(ship) {\n    //set x and y coordinates based on direction and size\n    if (ship.direction == \"vertical\") {\n      for (let x = 0; x < ship.size; x++) {\n        ship.xCoords.push(x + ship.startLoc[0]);\n      }\n      ship.yCoords.push(ship.startLoc[1]);\n    } else if (ship.direction == \"horizontal\") {\n      for (let y = 0; y < ship.size; y++) {\n        ship.yCoords.push(y + ship.startLoc[1]);\n      }\n      ship.xCoords.push(ship.startLoc[0]);\n    }\n    this.shipArray.push(ship);\n  }\n  fillShips() {\n    for (let i = 0; i < this.shipArray.length; i++) {\n      for (let j = 0; j < this.shipArray[i].xCoords.length; j++) {\n        for (let k = 0; k < this.shipArray[i].yCoords.length; k++) {\n          this.boardArray[this.shipArray[i].xCoords[j]][this.shipArray[i].yCoords[k]].filled = true;\n        }\n      }\n    }\n  }\n  draw() {}\n}\nclass Gamesquare {\n  constructor() {\n    this.filled = false;\n  }\n}\n\n//# sourceURL=webpack://top-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(size, direction) {\n    let startLoc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];\n    this.size = size;\n    this.direction = direction;\n    this.startLoc = startLoc;\n    this.xCoords = [];\n    this.yCoords = [];\n  }\n}\n\n//# sourceURL=webpack://top-battleship/./src/ship.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameboard.js"));
/******/ }
]);