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

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nyamushka-builder/./src/styles/app.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const product = document.querySelectorAll('.product-item');\n\n    const testProductInfo = [\n        {\n            name: 'foieGras',\n            amount: 3,\n            selectedText: 'Печень утки разварная с артишоками.',\n            disabledText: 'Печалька, с фуа-гра закончился.',\n        },\n        {\n            name: 'fish',\n            amount: 8,\n            selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',\n            disabledText: 'Печалька, с рыбой закончился.',\n        },\n        {\n            name: 'chicken',\n            amount: 0,\n            selectedText: 'Филе из цыплят с трюфелями в бульоне.',\n            disabledText: 'Печалька, с курой закончился.',\n        },\n    ];\n\n    testProductInfo.forEach((itemsObj) => {\n        let item = document.querySelector(`#${itemsObj.name}`);\n\n        item.addEventListener('click', () => {\n            if (itemsObj.amount <= 0) {\n                handlePurchaseError(item, itemsObj.disabledText);\n            } else {\n                selectPurchase(item);\n            }\n        });\n    })\n\n    if (!isMobile() && !isTablet()) {\n        Array.from(product).forEach((item) => {\n            let currentElem = null;\n            let target = item;\n            item.onmouseover = function(event) {\n                if (currentElem) return;\n                let target = event.target.closest('.product-item');\n                if (!target) return;\n\n                currentElem = target;\n\n                if (item.classList.contains('selected')) {\n                    return;\n                }\n                target.classList.add('onmouseover');\n                target.classList.remove('onmouseout');\n            };\n\n            item.onmouseout = function(event) {\n                if (!currentElem) return;\n                let relatedTarget = event.relatedTarget;\n\n                while (relatedTarget) {\n                    if (relatedTarget === target) return;\n                    relatedTarget = relatedTarget.parentNode;\n                }\n                currentElem.classList.add('onmouseout');\n                currentElem.classList.remove('onmouseover');\n                currentElem = null;\n            };\n        });\n    }\n});\n\nfunction selectPurchase(item) {\n    item.classList.toggle('selected');\n}\n\nfunction handlePurchaseError(item, text) {\n    item.classList.toggle('disabled');\n    item.querySelector('.product-item__text').innerText = text;\n}\n\nfunction isMobile() {\n    const navigator = window.navigator.userAgent || window.navigator.vendor || window.opera;\n    const devicesArr = [\n        /Android/i,\n        /webOS/i,\n        /iPhone/i,\n        /iPad/i,\n        /iPod/i,\n        /BlackBerry/i,\n        /Windows Phone/i\n    ];\n\n    return devicesArr.some((device) => {\n        return navigator.match(device);\n    });\n}\n\nfunction isTablet() {\n    const navigator = window.navigator.userAgent || window.navigator.vendor || window.opera;\n    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.toLowerCase());\n}\n\n\n//# sourceURL=webpack://nyamushka-builder/./src/app.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;