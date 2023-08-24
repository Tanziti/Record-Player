/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello world!\");\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDd0M7QUFFeENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRTNCLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlOLHdEQUFPLENBQUNLLElBQUksQ0FBQztBQUNyQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNvcmRfcGxheWVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZCFcIik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBFeGFtcGxlKG1haW4pO1xufSk7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nlet state = false;\nlet btn = document.querySelector(\".btn\");\nlet record = document.querySelector(\".record\");\nlet toneArm = document.querySelector(\".tone-arm\");\nlet song = document.querySelector(\".my-song\");\nlet slider = document.querySelector(\".slider\");\nbtn.addEventListener(\"click\", () => {\n  if (state == false) {\n    record.classList.add(\"on\");\n    toneArm.classList.add(\"play\");\n    setTimeout(() => {\n      song.play();\n    }, 1000);\n  } else {\n    record.classList.remove(\"on\");\n    toneArm.classList.remove(\"play\");\n    song.pause();\n  }\n  state = !state;\n});\nslider.addEventListener(\"input\", e => {\n  song.volume = Number(e.target.value);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxLQUFLLEdBQUcsS0FBSztBQUNqQixJQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUM5QyxJQUFJRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNqRCxJQUFJRyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUM3QyxJQUFJSSxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUU5Q0YsR0FBRyxDQUFDTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtFQUNsQyxJQUFJUixLQUFLLElBQUksS0FBSyxFQUFFO0lBQ2xCSSxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztJQUMxQkwsT0FBTyxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0JDLFVBQVUsQ0FBQyxNQUFNO01BQ2ZMLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxNQUFNO0lBQ0xSLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCUixPQUFPLENBQUNJLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQ1AsSUFBSSxDQUFDUSxLQUFLLENBQUMsQ0FBQztFQUNkO0VBQ0FkLEtBQUssR0FBRyxDQUFDQSxLQUFLO0FBQ2hCLENBQUMsQ0FBQztBQUVGTyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR08sQ0FBQyxJQUFLO0VBQ3RDVCxJQUFJLENBQUNVLE1BQU0sR0FBR0MsTUFBTSxDQUFDRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGLCtEQUFlQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjb3JkX3BsYXllci8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3RhdGUgPSBmYWxzZTtcbmxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcbmxldCByZWNvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY29yZFwiKTtcbmxldCB0b25lQXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b25lLWFybVwiKTtcbmxldCBzb25nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1zb25nXCIpO1xubGV0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHN0YXRlID09IGZhbHNlKSB7XG4gICAgcmVjb3JkLmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcbiAgICB0b25lQXJtLmNsYXNzTGlzdC5hZGQoXCJwbGF5XCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc29uZy5wbGF5KCk7XG4gICAgfSwgMTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcbiAgICB0b25lQXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5XCIpO1xuICAgIHNvbmcucGF1c2UoKTtcbiAgfVxuICBzdGF0ZSA9ICFzdGF0ZTtcbn0pO1xuXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gIHNvbmcudm9sdW1lID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJzdGF0ZSIsImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlY29yZCIsInRvbmVBcm0iLCJzb25nIiwic2xpZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJwbGF5IiwicmVtb3ZlIiwicGF1c2UiLCJlIiwidm9sdW1lIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJFeGFtcGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNvcmRfcGxheWVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;