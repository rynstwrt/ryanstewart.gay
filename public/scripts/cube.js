/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cube.js":
/*!*****************!*\
  !*** ./cube.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"../../../node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst canvas = document.getElementById(\"cubecanvas\");\r\nconst engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Engine(canvas);\r\n\r\nconst scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);\r\nscene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color4(0, 0, 0, 0);\r\n\r\nconst cube = babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox(\"cube\", {}, scene);\r\ncube.renderOutline = true;\r\ncube.outlineWidth = .5;\r\ncube.outlineColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3.FromHexString(\"#FAC9B8\");\r\n\r\nconst cubeMat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(\"cubemat\", scene);\r\ncubeMat.emissiveColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3.FromHexString(\"#495159\");\r\ncube.material = cubeMat;\r\n\r\nconst camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera(\"camera\", 0, 0, 7, new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), scene);\r\n\r\nconst inc = .01;\r\nengine.runRenderLoop(() =>\r\n{\r\n    scene.render();\r\n\r\n    cube.rotation.y += inc;\r\n    camera.beta += inc;\r\n    if (camera.beta >= Math.PI) camera.beta = -Math.PI;\r\n});\r\n\r\nwindow.addEventListener(\"resize\", () =>\r\n{\r\n   engine.resize();\r\n});\n\n//# sourceURL=webpack://ryanstewart.gay/./cube.js?");

/***/ }),

/***/ "../../../node_modules/babylonjs/babylon.js":
/*!**************************************************!*\
  !*** ../../../node_modules/babylonjs/babylon.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./cube.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;