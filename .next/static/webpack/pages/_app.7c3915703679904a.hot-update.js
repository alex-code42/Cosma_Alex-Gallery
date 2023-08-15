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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout */ \"./src/components/layout.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst artURL = \"https://example-apis.vercel.app/api/art\";\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(artURL, fetcher);\n    const [artPiecesInfo, setArtPiecesInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data) {\n            const updatedArtPiecesInfo = data.map((artPiece)=>({\n                    id: artPiece.slug,\n                    isFavourite: false\n                }));\n            setArtPiecesInfo(updatedArtPiecesInfo);\n            console.log(\"artPiecesInfo\", updatedArtPiecesInfo);\n        }\n    }, [\n        data\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n            lineNumber: 24,\n            columnNumber: 12\n        }, this);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        injectFirst: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            data: data,\n            error: error,\n            isLoading: isLoading,\n            artPiecesState: {\n                artPiecesInfo: artPiecesInfo,\n                setArtPiecesInfo: setArtPiecesInfo\n            }\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/_app.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"aQxUlR7bPFl4PjTGqw3CKCiVj6U=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNXO0FBQ2hCO0FBQzBCO0FBRW5ELE1BQU1LLFVBQVU7cUNBQUlDO1FBQUFBOztXQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFFO0FBQ3BFLE1BQU1DLFNBQVM7QUFFQSxTQUFTQyxJQUFJLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCOztJQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR2hCLCtDQUFNQSxDQUFDVSxRQUFRTjtJQUNsRCxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JERCxnREFBU0EsQ0FBQztRQUNSLElBQUlZLE1BQU07WUFDUixNQUFNSyx1QkFBdUJMLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQyxXQUFjO29CQUNuREMsSUFBSUQsU0FBU0UsSUFBSTtvQkFDakJDLGFBQWE7Z0JBQ2Y7WUFDQU4saUJBQWlCQztZQUNqQk0sUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlA7UUFDL0I7SUFDRixHQUFHO1FBQUNMO0tBQUs7SUFFVCxJQUFJQyxPQUFPO1FBQ1QscUJBQU8sOERBQUNZOztnQkFBSTtnQkFBUVo7Ozs7Ozs7SUFDdEI7SUFFQSxJQUFJQyxXQUFXO1FBQ2IscUJBQU8sOERBQUNXO3NCQUFJOzs7Ozs7SUFDZDtJQUNBLHFCQUNFLDhEQUFDNUIsMERBQU1BO1FBQUM2QixXQUFXO2tCQUNqQiw0RUFBQ2hCO1lBQ0UsR0FBR0MsU0FBUztZQUNiQyxNQUFNQTtZQUNOQyxPQUFPQTtZQUNQQyxXQUFXQTtZQUNYYSxnQkFBZ0I7Z0JBQ2RaLGVBQWVBO2dCQUNmQyxrQkFBa0JBO1lBQ3BCOzs7Ozs7Ozs7OztBQUlSO0dBbkN3QlA7O1FBQ2FYLDJDQUFNQTs7O0tBRG5CVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmNvbnN0IGFydFVSTCA9IFwiaHR0cHM6Ly9leGFtcGxlLWFwaXMudmVyY2VsLmFwcC9hcGkvYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoYXJ0VVJMLCBmZXRjaGVyKTtcbiAgY29uc3QgW2FydFBpZWNlc0luZm8sIHNldEFydFBpZWNlc0luZm9dID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQXJ0UGllY2VzSW5mbyA9IGRhdGEubWFwKChhcnRQaWVjZSkgPT4gKHtcbiAgICAgICAgaWQ6IGFydFBpZWNlLnNsdWcsXG4gICAgICAgIGlzRmF2b3VyaXRlOiBmYWxzZSxcbiAgICAgIH0pKTtcbiAgICAgIHNldEFydFBpZWNlc0luZm8odXBkYXRlZEFydFBpZWNlc0luZm8pO1xuICAgICAgY29uc29sZS5sb2coXCJhcnRQaWVjZXNJbmZvXCIsIHVwZGF0ZWRBcnRQaWVjZXNJbmZvKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XG4gIH1cblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaW5qZWN0Rmlyc3Q+XG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIGFydFBpZWNlc1N0YXRlPXt7XG4gICAgICAgICAgYXJ0UGllY2VzSW5mbzogYXJ0UGllY2VzSW5mbyxcbiAgICAgICAgICBzZXRBcnRQaWVjZXNJbmZvOiBzZXRBcnRQaWVjZXNJbmZvLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTV1IiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYXJ0VVJMIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwiYXJ0UGllY2VzSW5mbyIsInNldEFydFBpZWNlc0luZm8iLCJ1cGRhdGVkQXJ0UGllY2VzSW5mbyIsIm1hcCIsImFydFBpZWNlIiwiaWQiLCJzbHVnIiwiaXNGYXZvdXJpdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaW5qZWN0Rmlyc3QiLCJhcnRQaWVjZXNTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});