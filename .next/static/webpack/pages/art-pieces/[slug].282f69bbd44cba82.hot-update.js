"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/art-pieces/[slug]",{

/***/ "./src/components/FavoriteButton.jsx":
/*!*******************************************!*\
  !*** ./src/components/FavoriteButton.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavoriteButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FavoriteButton(param) {\n    let { artPiecesState } = param;\n    const { artPiecesInfo = [], setArtPiecesInfo } = artPiecesState;\n    //   const toggleFavorite = (imageId) => {\n    //     if (artPiecesInfo.includes(imageId)) {\n    //       setArtPiecesInfo(artPiecesInfo.filter((id) => id !== imageId));\n    //     } else {\n    //       setArtPiecesInfo([...artPiecesInfo, imageId]);\n    //     }\n    //   };\n    console.log(\"artPiecesInfo\", artPiecesInfo);\n    if (!artPiecesInfo) {\n        console.log(\"artPiecesInfo\", artPiecesInfo);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"toggleButton\",\n        children: artPiecesInfo.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>toggleFavorite(image.id),\n                    children: artPiecesInfo.includes(image.id) ? \"\\uD83D\\uDC4D\" : \"\\uD83D\\uDC4E\"\n                }, void 0, false, {\n                    fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, image.id, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = FavoriteButton;\nvar _c;\n$RefreshReg$(_c, \"FavoriteButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZUJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDLGVBQWUsS0FBa0I7UUFBbEIsRUFBRUMsY0FBYyxFQUFFLEdBQWxCO0lBQ3JDLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUUsRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0Y7SUFFakQsMENBQTBDO0lBQzFDLDZDQUE2QztJQUM3Qyx3RUFBd0U7SUFDeEUsZUFBZTtJQUNmLHVEQUF1RDtJQUN2RCxRQUFRO0lBQ1IsT0FBTztJQUNQRyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSDtJQUU3QixJQUFJLENBQUNBLGVBQWU7UUFDbEJFLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJIO1FBQzdCLHFCQUFPLDhEQUFDSTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWkwsY0FBY00sR0FBRyxDQUFDLENBQUNDLHNCQUNsQiw4REFBQ0g7MEJBRUMsNEVBQUNJO29CQUFPQyxTQUFTLElBQU1DLGVBQWVILE1BQU1JLEVBQUU7OEJBQzNDWCxjQUFjWSxRQUFRLENBQUNMLE1BQU1JLEVBQUUsSUFBSSxpQkFBTzs7Ozs7O2VBSHJDSixNQUFNSSxFQUFFOzs7Ozs7Ozs7O0FBUzFCO0tBN0J3QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmF2b3JpdGVCdXR0b24uanN4PzhiZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmF2b3JpdGVCdXR0b24oeyBhcnRQaWVjZXNTdGF0ZSB9KSB7XG4gIGNvbnN0IHsgYXJ0UGllY2VzSW5mbyA9IFtdLCBzZXRBcnRQaWVjZXNJbmZvIH0gPSBhcnRQaWVjZXNTdGF0ZTtcblxuICAvLyAgIGNvbnN0IHRvZ2dsZUZhdm9yaXRlID0gKGltYWdlSWQpID0+IHtcbiAgLy8gICAgIGlmIChhcnRQaWVjZXNJbmZvLmluY2x1ZGVzKGltYWdlSWQpKSB7XG4gIC8vICAgICAgIHNldEFydFBpZWNlc0luZm8oYXJ0UGllY2VzSW5mby5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gaW1hZ2VJZCkpO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0QXJ0UGllY2VzSW5mbyhbLi4uYXJ0UGllY2VzSW5mbywgaW1hZ2VJZF0pO1xuICAvLyAgICAgfVxuICAvLyAgIH07XG4gIGNvbnNvbGUubG9nKFwiYXJ0UGllY2VzSW5mb1wiLCBhcnRQaWVjZXNJbmZvKTtcblxuICBpZiAoIWFydFBpZWNlc0luZm8pIHtcbiAgICBjb25zb2xlLmxvZyhcImFydFBpZWNlc0luZm9cIiwgYXJ0UGllY2VzSW5mbyk7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGVCdXR0b25cIj5cbiAgICAgIHthcnRQaWVjZXNJbmZvLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2ltYWdlLmlkfT5cbiAgICAgICAgICB7LyogPGltZyBzcmM9e2ltYWdlLnNyY30gYWx0PXtgSW1hZ2UgJHtpbWFnZS5pZH1gfSAvPiAqL31cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUZhdm9yaXRlKGltYWdlLmlkKX0+XG4gICAgICAgICAgICB7YXJ0UGllY2VzSW5mby5pbmNsdWRlcyhpbWFnZS5pZCkgPyBcIvCfkY1cIiA6IFwi8J+RjlwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmF2b3JpdGVCdXR0b24iLCJhcnRQaWVjZXNTdGF0ZSIsImFydFBpZWNlc0luZm8iLCJzZXRBcnRQaWVjZXNJbmZvIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwiYnV0dG9uIiwib25DbGljayIsInRvZ2dsZUZhdm9yaXRlIiwiaWQiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FavoriteButton.jsx\n"));

/***/ })

});