/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello world!\");\n  let canvas = document.getElementById(\"record_player\");\n  let context = canvas.getContext(\"2d\");\n  // let windew_height = window.innerHeight;\n  // let window_width = window.innerWidth;\n\n  // canvas.width = window_width;\n  // canvas.height = windew_height;\n  canvas.style.background = \"#ff8\";\n  context.translate(100, 100);\n  class Record {\n    constructor() {}\n    draw() {\n      context.save();\n      context.beginPath();\n      context.arc(0, 0, 100, 0, 2 * Math.PI);\n      context.fill();\n      context.arc(0, 0, 20, 0, 2 * Math.PI);\n      context.strokeStyle = \"white\";\n      context.stroke();\n      context.closePath();\n      context.restore();\n    }\n    update() {\n      context.rotate(1 * Math.PI / 360);\n    }\n  }\n  ;\n  const record = new Record();\n  function animate() {\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    record.update();\n    record.draw();\n    requestAnimationFrame(animate);\n  }\n  animate();\n  let play = document.getElementsByClassName(\"btn\");\n  function playMusic() {\n    let audio = new Audio(\"\");\n    audio.play();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInN0eWxlIiwiYmFja2dyb3VuZCIsInRyYW5zbGF0ZSIsIlJlY29yZCIsImNvbnN0cnVjdG9yIiwiZHJhdyIsInNhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwidXBkYXRlIiwicm90YXRlIiwicmVjb3JkIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGxheSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwbGF5TXVzaWMiLCJhdWRpbyIsIkF1ZGlvIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNvcmRfcGxheWVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQhXCIpO1xuXG5cbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNvcmRfcGxheWVyXCIpXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIGxldCB3aW5kZXdfaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vIGxldCB3aW5kb3dfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vIGNhbnZhcy53aWR0aCA9IHdpbmRvd193aWR0aDtcbiAgICAvLyBjYW52YXMuaGVpZ2h0ID0gd2luZGV3X2hlaWdodDtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmOFwiO1xuICAgICBcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgxMDAsMTAwKVxuICAgIFxuICAgIGNsYXNzIFJlY29yZCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgICAgICB9XG4gICBcblxuICAgIGRyYXcoKXtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKDAsIDAsIDEwMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuYXJjKDAsIDAsIDIwLCAwLCAyKk1hdGguUEkpXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfTtcbiAgXG4gICAgdXBkYXRlKCl7XG4gICAgICBjb250ZXh0LnJvdGF0ZSgxICogTWF0aC5QSS8zNjApXG4gICAgfVxuIH07XG5jb25zdCByZWNvcmQgPSBuZXcgUmVjb3JkKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKXtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZWNvcmQudXBkYXRlKCk7XG4gICAgcmVjb3JkLmRyYXcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmFuaW1hdGUoKTtcblxubGV0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuXCIpO1xuZnVuY3Rpb24gcGxheU11c2ljKCl7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiXCIpO1xuICAgIGF1ZGlvLnBsYXkoKTtcblxufVxuXG59KTsiXSwibWFwcGluZ3MiOiJBQUVBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUczQixJQUFJQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUNyRCxJQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQztFQUNBOztFQUVBO0VBQ0E7RUFDQUgsTUFBTSxDQUFDSSxLQUFLLENBQUNDLFVBQVUsR0FBRyxNQUFNO0VBRWhDSCxPQUFPLENBQUNJLFNBQVMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0VBRTFCLE1BQU1DLE1BQU0sQ0FBQztJQUNUQyxXQUFXQSxDQUFBLEVBQUUsQ0FFYjtJQUdKQyxJQUFJQSxDQUFBLEVBQUU7TUFDTlAsT0FBTyxDQUFDUSxJQUFJLENBQUMsQ0FBQztNQUNkUixPQUFPLENBQUNTLFNBQVMsQ0FBQyxDQUFDO01BQ25CVCxPQUFPLENBQUNVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUUsQ0FBQztNQUN0Q1osT0FBTyxDQUFDYSxJQUFJLENBQUMsQ0FBQztNQUNkYixPQUFPLENBQUNVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDQyxJQUFJLENBQUNDLEVBQUUsQ0FBQztNQUNuQ1osT0FBTyxDQUFDYyxXQUFXLEdBQUcsT0FBTztNQUM3QmQsT0FBTyxDQUFDZSxNQUFNLENBQUMsQ0FBQztNQUNoQmYsT0FBTyxDQUFDZ0IsU0FBUyxDQUFDLENBQUM7TUFFbkJoQixPQUFPLENBQUNpQixPQUFPLENBQUMsQ0FBQztJQUNqQjtJQUVBQyxNQUFNQSxDQUFBLEVBQUU7TUFDTmxCLE9BQU8sQ0FBQ21CLE1BQU0sQ0FBQyxDQUFDLEdBQUdSLElBQUksQ0FBQ0MsRUFBRSxHQUFDLEdBQUcsQ0FBQztJQUNqQztFQUNIO0VBQUM7RUFDRixNQUFNUSxNQUFNLEdBQUcsSUFBSWYsTUFBTSxDQUFDLENBQUM7RUFFM0IsU0FBU2dCLE9BQU9BLENBQUEsRUFBRTtJQUNkckIsT0FBTyxDQUFDc0IsU0FBUyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUV4QixNQUFNLENBQUN5QixLQUFLLEVBQUV6QixNQUFNLENBQUMwQixNQUFNLENBQUM7SUFDckRKLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDLENBQUM7SUFDZkUsTUFBTSxDQUFDYixJQUFJLENBQUMsQ0FBQztJQUNia0IscUJBQXFCLENBQUNKLE9BQU8sQ0FBQztFQUNsQztFQUVBQSxPQUFPLENBQUMsQ0FBQztFQUVULElBQUlLLElBQUksR0FBR2hDLFFBQVEsQ0FBQ2lDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztFQUNqRCxTQUFTQyxTQUFTQSxDQUFBLEVBQUU7SUFDaEIsSUFBSUMsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDekJELEtBQUssQ0FBQ0gsSUFBSSxDQUFDLENBQUM7RUFFaEI7QUFFQSxDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNvcmRfcGxheWVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;