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

/***/ "./src/components/ArtPiecePreview.jsx":
/*!********************************************!*\
  !*** ./src/components/ArtPiecePreview.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FavoriteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FavoriteButton */ \"./src/components/FavoriteButton.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ArtPiecePreview(param) {\n    let { image, title, artist, artPiecesState } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FavoriteButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                artPiecesState: artPiecesState,\n                slug: image.slug\n            }, void 0, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/ArtPiecePreview.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                width: 360,\n                height: 360,\n                alt: title,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/art-pieces/[slug]\",\n                        as: \"/art-pieces/\".concat(image.slug)\n                    }, void 0, false, {\n                        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/ArtPiecePreview.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/ArtPiecePreview.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                \"data-testid\": \"title\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/ArtPiecePreview.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Artist: \"\n            }, void 0, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/ArtPiecePreview.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                \"data-testid\": \"artist\",\n                children: artist\n            }, void 0, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/ArtPiecePreview.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = ArtPiecePreview;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcnRQaWVjZVByZXZpZXcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNlO0FBQ2pCO0FBRWQsU0FBU0csZ0JBQWdCLEtBS3ZDO1FBTHVDLEVBQ3RDQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxjQUFjLEVBQ2YsR0FMdUM7SUFNdEMscUJBQ0U7OzBCQUNFLDhEQUFDTix1REFBY0E7Z0JBQUNNLGdCQUFnQkE7Z0JBQWdCQyxNQUFNSixNQUFNSSxJQUFJOzs7Ozs7MEJBRWhFLDhEQUFDUixtREFBS0E7Z0JBQUNTLEtBQUtMO2dCQUFPTSxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFLUDs7a0NBQy9DLDhEQUFDSCxrREFBSUE7d0JBQUNXLE1BQUs7d0JBQXFCQyxJQUFJLGVBQTBCLE9BQVhWLE1BQU1JLElBQUk7Ozs7OztvQkFBTzs7Ozs7OzswQkFFdEUsOERBQUNPO2dCQUFFQyxlQUFZOzBCQUFTWDs7Ozs7OzBCQUN4Qiw4REFBQ1k7MEJBQUs7Ozs7OzswQkFDTiw4REFBQ0E7Z0JBQUtELGVBQVk7MEJBQVVWOzs7Ozs7OztBQUdsQztLQWxCd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy5qc3g/Njg5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBGYXZvcml0ZUJ1dHRvbiBmcm9tIFwiLi9GYXZvcml0ZUJ1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRQaWVjZVByZXZpZXcoe1xuICBpbWFnZSxcbiAgdGl0bGUsXG4gIGFydGlzdCxcbiAgYXJ0UGllY2VzU3RhdGUsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGYXZvcml0ZUJ1dHRvbiBhcnRQaWVjZXNTdGF0ZT17YXJ0UGllY2VzU3RhdGV9IHNsdWc9e2ltYWdlLnNsdWd9IC8+XG5cbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17MzYwfSBoZWlnaHQ9ezM2MH0gYWx0PXt0aXRsZX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0LXBpZWNlcy9bc2x1Z11cIiBhcz17YC9hcnQtcGllY2VzLyR7aW1hZ2Uuc2x1Z31gfSAvPntcIiBcIn1cbiAgICAgIDwvSW1hZ2U+XG4gICAgICA8cCBkYXRhLXRlc3RpZD1cInRpdGxlXCI+e3RpdGxlfTwvcD5cbiAgICAgIDxzcGFuPkFydGlzdDogPC9zcGFuPlxuICAgICAgPHNwYW4gZGF0YS10ZXN0aWQ9XCJhcnRpc3RcIj57YXJ0aXN0fTwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZhdm9yaXRlQnV0dG9uIiwiTGluayIsIkFydFBpZWNlUHJldmlldyIsImltYWdlIiwidGl0bGUiLCJhcnRpc3QiLCJhcnRQaWVjZXNTdGF0ZSIsInNsdWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImhyZWYiLCJhcyIsInAiLCJkYXRhLXRlc3RpZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ArtPiecePreview.jsx\n"));

/***/ })

});