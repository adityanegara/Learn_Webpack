/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/element.js":
/*!****************************!*\
  !*** ./src/app/element.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberOne\": () => (/* binding */ numberOne),\n/* harmony export */   \"numberTwo\": () => (/* binding */ numberTwo),\n/* harmony export */   \"plusButton\": () => (/* binding */ plusButton),\n/* harmony export */   \"result\": () => (/* binding */ result),\n/* harmony export */   \"alertMessage\": () => (/* binding */ alertMessage)\n/* harmony export */ });\nconst numberOne = document.getElementById('number-one');\r\nconst numberTwo = document.getElementById('number-two'); \r\nconst plusButton = document.getElementById('plus-button');\r\nconst result = document.getElementById('result');\r\nconst alertMessage = document.getElementById('alert-message');\r\n\n\n//# sourceURL=webpack://practice/./src/app/element.js?");

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ \"./src/app/element.js\");\n/* harmony import */ var _utils_checknumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/checknumber.js */ \"./src/app/utils/checknumber.js\");\n/* harmony import */ var _utils_showElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/showElement.js */ \"./src/app/utils/showElement.js\");\n/* harmony import */ var _utils_hideElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/hideElement.js */ \"./src/app/utils/hideElement.js\");\n\r\n\r\n\r\n\r\n\r\nconst main = () =>{\r\n    _element_js__WEBPACK_IMPORTED_MODULE_0__.plusButton.addEventListener('click', () =>{\r\n        if((0,_utils_checknumber_js__WEBPACK_IMPORTED_MODULE_1__.default)(_element_js__WEBPACK_IMPORTED_MODULE_0__.numberOne.value, _element_js__WEBPACK_IMPORTED_MODULE_0__.numberTwo.value)){\r\n            console.log(\"plus button true\");\r\n            _element_js__WEBPACK_IMPORTED_MODULE_0__.result.innerText = parseInt(_element_js__WEBPACK_IMPORTED_MODULE_0__.numberOne.value) + parseInt(_element_js__WEBPACK_IMPORTED_MODULE_0__.numberTwo.value);\r\n            (0,_utils_hideElement_js__WEBPACK_IMPORTED_MODULE_3__.default)(_element_js__WEBPACK_IMPORTED_MODULE_0__.alertMessage);\r\n        }else{\r\n            console.log(\"plus button false\");\r\n            _element_js__WEBPACK_IMPORTED_MODULE_0__.result.innerText = \"\";\r\n            (0,_utils_showElement_js__WEBPACK_IMPORTED_MODULE_2__.default)(_element_js__WEBPACK_IMPORTED_MODULE_0__.alertMessage);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://practice/./src/app/main.js?");

/***/ }),

/***/ "./src/app/utils/checknumber.js":
/*!**************************************!*\
  !*** ./src/app/utils/checknumber.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkNumber = (a,b) =>{\r\n    console.log(`Nilai A : ${a}, tipe A ${isNaN(a)}`);\r\n    console.log(`Nilai B : ${b}, tipe B ${isNaN(b)}`);\r\n    if((isNaN(a) != true) && (isNaN(b) != true)){\r\n        console.log(\"checknumber true\");\r\n        return true;\r\n    }else{\r\n        console.log(\"checknumber false\");\r\n        return false;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkNumber);\n\n//# sourceURL=webpack://practice/./src/app/utils/checknumber.js?");

/***/ }),

/***/ "./src/app/utils/hideElement.js":
/*!**************************************!*\
  !*** ./src/app/utils/hideElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hideElement = (element) =>{\r\n    element.classList.remove(\"block\");\r\n    element.classList.add(\"hidden\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideElement);\n\n//# sourceURL=webpack://practice/./src/app/utils/hideElement.js?");

/***/ }),

/***/ "./src/app/utils/showElement.js":
/*!**************************************!*\
  !*** ./src/app/utils/showElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showElement = (element) =>{\r\n    element.classList.remove(\"hidden\");\r\n    element.classList.add(\"block\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showElement);\n\n//# sourceURL=webpack://practice/./src/app/utils/showElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/main.js */ \"./src/app/main.js\");\n\r\n(0,_app_main_js__WEBPACK_IMPORTED_MODULE_0__.main)();\n\n//# sourceURL=webpack://practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;