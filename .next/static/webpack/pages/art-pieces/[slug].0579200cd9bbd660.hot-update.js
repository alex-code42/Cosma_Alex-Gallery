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

/***/ "./src/pages/art-pieces/[slug].js":
/*!****************************************!*\
  !*** ./src/pages/art-pieces/[slug].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowArtPieceDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ArtPieceDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ArtPieceDetails */ \"./src/components/ArtPieceDetails.jsx\");\n/* harmony import */ var _components_CommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CommentForm */ \"./src/components/CommentForm.jsx\");\n/* harmony import */ var _components_CommentForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_CommentForm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FavoriteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FavoriteButton */ \"./src/components/FavoriteButton.jsx\");\n\n\n\n\nfunction ShowArtPieceDetails(param) {\n    let { data, artPiecesState } = param;\n    console.log(\"dataaaaaaaaaaaa\", data);\n    const { image, title, artist, year, genre } = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieceDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            data: data,\n            artPiecesState: artPiecesState\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n} // image,\n //   title,\n //   artist,\n //   year,\n //   genre,\n //   artPiecesState,\n_c = ShowArtPieceDetails;\nvar _c;\n$RefreshReg$(_c, \"ShowArtPieceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDUjtBQUNNO0FBRTFDLFNBQVNHLG9CQUFvQixLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLGNBQWMsRUFBRSxHQUF4QjtJQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkg7SUFDL0IsTUFBTSxFQUFFSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHUjtJQUM5QyxxQkFDRSw4REFBQ1M7a0JBQ0MsNEVBQUNiLG1FQUFlQTtZQUFDSSxNQUFNQTtZQUFNQyxnQkFBZ0JBOzs7Ozs7Ozs7OztBQUluRCxFQUVBLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7Q0FDVixXQUFXO0NBQ1gsb0JBQW9CO0tBaEJJRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanM/MzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0UGllY2VEZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvQXJ0UGllY2VEZXRhaWxzXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9Db21tZW50Rm9ybVwiO1xuaW1wb3J0IEZhdm9yaXRlQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvRmF2b3JpdGVCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd0FydFBpZWNlRGV0YWlscyh7IGRhdGEsIGFydFBpZWNlc1N0YXRlIH0pIHtcbiAgY29uc29sZS5sb2coXCJkYXRhYWFhYWFhYWFhYWFcIiwgZGF0YSk7XG4gIGNvbnN0IHsgaW1hZ2UsIHRpdGxlLCBhcnRpc3QsIHllYXIsIGdlbnJlIH0gPSBkYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QXJ0UGllY2VEZXRhaWxzIGRhdGE9e2RhdGF9IGFydFBpZWNlc1N0YXRlPXthcnRQaWVjZXNTdGF0ZX0gLz5cbiAgICAgIHsvKiA8Q29tbWVudEZvcm0vPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gaW1hZ2UsXG4vLyAgIHRpdGxlLFxuLy8gICBhcnRpc3QsXG4vLyAgIHllYXIsXG4vLyAgIGdlbnJlLFxuLy8gICBhcnRQaWVjZXNTdGF0ZSxcbiJdLCJuYW1lcyI6WyJBcnRQaWVjZURldGFpbHMiLCJDb21tZW50Rm9ybSIsIkZhdm9yaXRlQnV0dG9uIiwiU2hvd0FydFBpZWNlRGV0YWlscyIsImRhdGEiLCJhcnRQaWVjZXNTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsInRpdGxlIiwiYXJ0aXN0IiwieWVhciIsImdlbnJlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/art-pieces/[slug].js\n"));

/***/ })

});