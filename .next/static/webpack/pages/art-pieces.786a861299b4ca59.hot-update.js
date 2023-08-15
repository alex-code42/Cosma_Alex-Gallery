"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/art-pieces",{

/***/ "./src/components/FavoriteButton.jsx":
/*!*******************************************!*\
  !*** ./src/components/FavoriteButton.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavoriteButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FavoriteButton(param) {\n    let { artPiecesState, slug } = param;\n    if (!artPiecesState) {\n        console.log(\"error\", artPiecesState);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading.....\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n            lineNumber: 6,\n            columnNumber: 12\n        }, this);\n    }\n    const { artPiecesInfo, setArtPiecesInfo } = artPiecesState;\n    const toggleFavorite = (imageId)=>{\n        setArtPiecesInfo(artPiecesInfo.map((piece)=>piece.id !== imageId ? piece : {\n                ...piece,\n                isFavourite: !piece.isFavourite\n            }));\n    };\n    if (!artPiecesInfo) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(\"can i find the item?\", slug, artPiecesInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"toggleButton\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>toggleFavorite(slug),\n            children: artPiecesInfo.find((item)=>item.id === slug).isFavourite ? \"\\uD83D\\uDC4D\" : \"\\uD83D\\uDC4E\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = FavoriteButton;\nvar _c;\n$RefreshReg$(_c, \"FavoriteButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZUJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDLGVBQWUsS0FBd0I7UUFBeEIsRUFBRUMsY0FBYyxFQUFFQyxJQUFJLEVBQUUsR0FBeEI7SUFDckMsSUFBSSxDQUFDRCxnQkFBZ0I7UUFDbkJFLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSDtRQUNyQixxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNkO0lBQ0EsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdOO0lBRTVDLE1BQU1PLGlCQUFpQixDQUFDQztRQUN0QkYsaUJBQ0VELGNBQWNJLEdBQUcsQ0FBQyxDQUFDQyxRQUNqQkEsTUFBTUMsRUFBRSxLQUFLSCxVQUNURSxRQUNBO2dCQUFFLEdBQUdBLEtBQUs7Z0JBQUVFLGFBQWEsQ0FBQ0YsTUFBTUUsV0FBVztZQUFDO0lBR3REO0lBRUEsSUFBSSxDQUFDUCxlQUFlO1FBQ2xCLHFCQUFPLDhEQUFDRDtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQUYsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkYsTUFBTUk7SUFDMUMscUJBQ0UsOERBQUNEO1FBQUlTLFdBQVU7a0JBRWIsNEVBQUNDO1lBQU9DLFNBQVMsSUFBTVIsZUFBZU47c0JBQ25DSSxjQUFjVyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS04sRUFBRSxLQUFLVixNQUFNVyxXQUFXLEdBQ3ZELGlCQUNBOzs7Ozs7Ozs7OztBQUlaO0tBaEN3QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmF2b3JpdGVCdXR0b24uanN4PzhiZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmF2b3JpdGVCdXR0b24oeyBhcnRQaWVjZXNTdGF0ZSwgc2x1ZyB9KSB7XG4gIGlmICghYXJ0UGllY2VzU3RhdGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGFydFBpZWNlc1N0YXRlKTtcbiAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgeyBhcnRQaWVjZXNJbmZvLCBzZXRBcnRQaWVjZXNJbmZvIH0gPSBhcnRQaWVjZXNTdGF0ZTtcblxuICBjb25zdCB0b2dnbGVGYXZvcml0ZSA9IChpbWFnZUlkKSA9PiB7XG4gICAgc2V0QXJ0UGllY2VzSW5mbyhcbiAgICAgIGFydFBpZWNlc0luZm8ubWFwKChwaWVjZSkgPT5cbiAgICAgICAgcGllY2UuaWQgIT09IGltYWdlSWRcbiAgICAgICAgICA/IHBpZWNlXG4gICAgICAgICAgOiB7IC4uLnBpZWNlLCBpc0Zhdm91cml0ZTogIXBpZWNlLmlzRmF2b3VyaXRlIH1cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIGlmICghYXJ0UGllY2VzSW5mbykge1xuICAgIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImNhbiBpIGZpbmQgdGhlIGl0ZW0/XCIsIHNsdWcsIGFydFBpZWNlc0luZm8pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlQnV0dG9uXCI+XG4gICAgICB7LyogPGltZyBzcmM9e2ltYWdlLnNyY30gYWx0PXtgSW1hZ2UgJHtpbWFnZS5pZH1gfSAvPiAqL31cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUoc2x1Zyl9PlxuICAgICAgICB7YXJ0UGllY2VzSW5mby5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzbHVnKS5pc0Zhdm91cml0ZVxuICAgICAgICAgID8gXCLwn5GNXCJcbiAgICAgICAgICA6IFwi8J+RjlwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGYXZvcml0ZUJ1dHRvbiIsImFydFBpZWNlc1N0YXRlIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJhcnRQaWVjZXNJbmZvIiwic2V0QXJ0UGllY2VzSW5mbyIsInRvZ2dsZUZhdm9yaXRlIiwiaW1hZ2VJZCIsIm1hcCIsInBpZWNlIiwiaWQiLCJpc0Zhdm91cml0ZSIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmaW5kIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FavoriteButton.jsx\n"));

/***/ })

});