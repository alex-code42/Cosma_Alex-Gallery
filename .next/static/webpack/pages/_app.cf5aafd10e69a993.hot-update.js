"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst artURL = \"https://example-apis.vercel.app/api/art\";\n(0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n    if (data) {\n        const updatedArtPiecesInfo = data.map((artPiece)=>({\n                id: artPiece.slug,\n                isFavourite: false\n            }));\n        setArtPiecesInfo(updatedArtPiecesInfo);\n        console.log(\"artPiecesInfo\", updatedArtPiecesInfo);\n    }\n}, [\n    data\n]);\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const { data: data1, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(artURL, fetcher);\n    const [artPiecesInfo, setArtPiecesInfo1] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n            lineNumber: 25,\n            columnNumber: 12\n        }, this);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        injectFirst: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            data: data1,\n            error: error,\n            isLoading: isLoading,\n            artPiecesState: {\n                artPiecesInfo: {\n                    artPiecesInfo\n                },\n                setArtPiecesInfo: {\n                    setArtPiecesInfo: setArtPiecesInfo1\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"Kv+lPAJskSsbj/qwYPornzWnMBA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNXO0FBQ2hCO0FBQzBCO0FBRW5ELE1BQU1LLFVBQVU7cUNBQUlDO1FBQUFBOztXQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFFO0FBQ3BFLE1BQU1DLFNBQVM7QUFFZlIsZ0RBQVNBLENBQUM7SUFDUixJQUFJUyxNQUFNO1FBQ1IsTUFBTUMsdUJBQXVCRCxLQUFLRSxHQUFHLENBQUMsQ0FBQ0MsV0FBYztnQkFDbkRDLElBQUlELFNBQVNFLElBQUk7Z0JBQ2pCQyxhQUFhO1lBQ2Y7UUFDQUMsaUJBQWlCTjtRQUNqQk8sUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlI7SUFDL0I7QUFDRixHQUFHO0lBQUNEO0NBQUs7QUFFTSxTQUFTVSxJQUFJLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCOztJQUMxQixNQUFNLEVBQUVaLE1BQUFBLEtBQUksRUFBRWEsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR3pCLCtDQUFNQSxDQUFDVSxRQUFRTjtJQUNsRCxNQUFNLENBQUNzQixlQUFlUixrQkFBaUIsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUVyRCxJQUFJcUIsT0FBTztRQUNULHFCQUFPLDhEQUFDRzs7Z0JBQUk7Z0JBQVFIOzs7Ozs7O0lBQ3RCO0lBRUEsSUFBSUMsV0FBVztRQUNiLHFCQUFPLDhEQUFDRTtzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxxQkFDRSw4REFBQzVCLDBEQUFNQTtRQUFDNkIsV0FBVztrQkFDakIsNEVBQUNOO1lBQ0UsR0FBR0MsU0FBUztZQUNiWixNQUFNQTtZQUNOYSxPQUFPQTtZQUNQQyxXQUFXQTtZQUNYSSxnQkFBZ0I7Z0JBQ2RILGVBQWU7b0JBQUVBO2dCQUFjO2dCQUMvQlIsa0JBQWtCO29CQUFFQSxrQkFBQUE7Z0JBQWlCO1lBQ3ZDOzs7Ozs7Ozs7OztBQUlSO0dBekJ3Qkc7O1FBQ2FyQiwyQ0FBTUE7OztLQURuQnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgYXJ0VVJMID0gXCJodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRcIjtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zdCB1cGRhdGVkQXJ0UGllY2VzSW5mbyA9IGRhdGEubWFwKChhcnRQaWVjZSkgPT4gKHtcbiAgICAgIGlkOiBhcnRQaWVjZS5zbHVnLFxuICAgICAgaXNGYXZvdXJpdGU6IGZhbHNlLFxuICAgIH0pKTtcbiAgICBzZXRBcnRQaWVjZXNJbmZvKHVwZGF0ZWRBcnRQaWVjZXNJbmZvKTtcbiAgICBjb25zb2xlLmxvZyhcImFydFBpZWNlc0luZm9cIiwgdXBkYXRlZEFydFBpZWNlc0luZm8pO1xuICB9XG59LCBbZGF0YV0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKGFydFVSTCwgZmV0Y2hlcik7XG4gIGNvbnN0IFthcnRQaWVjZXNJbmZvLCBzZXRBcnRQaWVjZXNJbmZvXSA9IHVzZVN0YXRlKFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBpbmplY3RGaXJzdD5cbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgYXJ0UGllY2VzU3RhdGU9e3tcbiAgICAgICAgICBhcnRQaWVjZXNJbmZvOiB7IGFydFBpZWNlc0luZm8gfSxcbiAgICAgICAgICBzZXRBcnRQaWVjZXNJbmZvOiB7IHNldEFydFBpZWNlc0luZm8gfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU1dSIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFydFVSTCIsImRhdGEiLCJ1cGRhdGVkQXJ0UGllY2VzSW5mbyIsIm1hcCIsImFydFBpZWNlIiwiaWQiLCJzbHVnIiwiaXNGYXZvdXJpdGUiLCJzZXRBcnRQaWVjZXNJbmZvIiwiY29uc29sZSIsImxvZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImVycm9yIiwiaXNMb2FkaW5nIiwiYXJ0UGllY2VzSW5mbyIsImRpdiIsImluamVjdEZpcnN0IiwiYXJ0UGllY2VzU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});