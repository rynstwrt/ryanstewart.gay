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

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/***/ }),

/***/ "./js/background.ts":
/*!**************************!*\
  !*** ./js/background.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar babylonjs_1 = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\r\nvar canvas = document.getElementsByTagName(\"canvas\")[0];\r\nvar engine = new babylonjs_1.Engine(canvas);\r\nvar scene = new babylonjs_1.Scene(engine);\r\nscene.clearColor = new babylonjs_1.Color4(0, 0, 0, 0);\r\nvar knot = babylonjs_1.Mesh.CreateTorusKnot(\"knot\", 7, 17, 1000, 10, 50, 50, scene);\r\nknot.scaling = babylonjs_1.Vector3.Zero();\r\nknot.receiveShadows = false;\r\nvar knotMat = new babylonjs_1.StandardMaterial(\"knotmat\", scene);\r\nknotMat.emissiveColor = babylonjs_1.Color3.FromHexString(\"#252525\");\r\nknotMat.wireframe = true;\r\nknot.material = knotMat;\r\nnew babylonjs_1.ArcRotateCamera(\"camera\", 0, Math.PI / 3, 500, knot.position, scene, true);\r\nvar doneScaling = false;\r\nvar doneFirstPopup = false;\r\nvar doneSecondPopup = false;\r\nengine.runRenderLoop(function () {\r\n    scene.render();\r\n    knot.rotation.x += .0010;\r\n    knot.rotation.y += .0010;\r\n    knot.rotation.z += .0010;\r\n    if (!doneScaling) {\r\n        if (knot.scaling.y >= 150) {\r\n            if (!doneFirstPopup) {\r\n                doneFirstPopup = true;\r\n                document.getElementById(\"welcome\").style.transform = \"scale(1)\";\r\n            }\r\n        }\r\n        if (knot.scaling.y >= 275) {\r\n            if (!doneSecondPopup) {\r\n                doneSecondPopup = true;\r\n                document.getElementById(\"welcome2\").style.transform = \"scale(1)\";\r\n            }\r\n        }\r\n        if (knot.scaling.y >= 300)\r\n            doneScaling = true;\r\n        else\r\n            knot.scaling = knot.scaling.add(new babylonjs_1.Vector3(1, 1, 1));\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://ryanstewart.gay/./js/background.ts?");

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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/background.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;