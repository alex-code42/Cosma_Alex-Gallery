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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_ArtGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ArtGallery */ \"./src/components/ArtGallery.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst artURL = \"https://example-apis.vercel.app/api/art\";\nfunction ArtPiecePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    // Fetch the art pieces data using useSWR\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(artURL, fetcher);\n    console.log(\"My Data\", filteredArtist);\n    console.log(\"My Data\", filteredArtist.slug);\n    console.log(\"Slug: \", filteredArtist.slug);\n    console.log(\"Artist: \", filteredArtist.artist);\n    const filteredArtist = data.find((artist)=>{\n        console.log(\"movie.slug, slug\", artist.slug, slug);\n        return artist.slug === slug;\n    });\n    console.log(\"My Filtered Artist\", filteredArtist);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this) : !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Post: \",\n                        slug\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data[0].slug\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data[0].artist\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data[0].year\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtPiecePage, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ArtPiecePage;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDNEI7QUFFckQsTUFBTUcsVUFBVTtxQ0FBSUM7UUFBQUE7O1dBQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBQUU7QUFDcEUsTUFBTUMsU0FBUztBQUVBLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3Qix5Q0FBeUM7SUFDekMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHZCwrQ0FBTUEsQ0FBQ1EsUUFBUU47SUFDdkNhLFFBQVFDLEdBQUcsQ0FBQyxXQUFVQztJQUN0QkYsUUFBUUMsR0FBRyxDQUFDLFdBQVVDLGVBQWVOLElBQUk7SUFDekNJLFFBQVFDLEdBQUcsQ0FBQyxVQUFTQyxlQUFlTixJQUFJO0lBQ3hDSSxRQUFRQyxHQUFHLENBQUMsWUFBV0MsZUFBZUMsTUFBTTtJQUU1QyxNQUFNRCxpQkFBaUJKLEtBQUtNLElBQUksQ0FBQyxDQUFDRDtRQUNoQ0gsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkUsT0FBT1AsSUFBSSxFQUFFQTtRQUM3QyxPQUFPTyxPQUFPUCxJQUFJLEtBQUtBO0lBQUk7SUFFM0JJLFFBQVFDLEdBQUcsQ0FBQyxzQkFBcUJDO0lBSW5DLHFCQUNFLDhEQUFDRztrQkFDRU4sc0JBQ0MsOERBQUNPO3NCQUFFOzs7OzttQkFDRCxDQUFDUixxQkFDSCw4REFBQ1E7c0JBQUU7Ozs7O2lDQUVIOzs4QkFHRSw4REFBQ0E7O3dCQUFFO3dCQUFPVjs7Ozs7Ozs4QkFDViw4REFBQ1U7Ozs7OzhCQUNELDhEQUFDQTs4QkFBR1IsSUFBSSxDQUFDLEVBQUUsQ0FBQ0YsSUFBSTs7Ozs7OzhCQUNoQiw4REFBQ1U7OEJBQUdSLElBQUksQ0FBQyxFQUFFLENBQUNLLE1BQU07Ozs7Ozs4QkFDbEIsOERBQUNHOzhCQUFHUixJQUFJLENBQUMsRUFBRSxDQUFDUyxJQUFJOzs7Ozs7OEJBQ2hCLDhEQUFDRDs7Ozs7Ozs7Ozs7O0FBS1g7R0F2Q3dCWjs7UUFDUFYsa0RBQVNBO1FBSUFDLDJDQUFNQTs7O0tBTFJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcnQtcGllY2VzL1tzbHVnXS5qcz8zMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBBcnRHYWxsZXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FydEdhbGxlcnlcIjtcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgYXJ0VVJMID0gXCJodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0UGllY2VQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgLy8gRmV0Y2ggdGhlIGFydCBwaWVjZXMgZGF0YSB1c2luZyB1c2VTV1JcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGFydFVSTCwgZmV0Y2hlcik7XG4gIGNvbnNvbGUubG9nKFwiTXkgRGF0YVwiLGZpbHRlcmVkQXJ0aXN0KVxuICBjb25zb2xlLmxvZyhcIk15IERhdGFcIixmaWx0ZXJlZEFydGlzdC5zbHVnKVxuICBjb25zb2xlLmxvZyhcIlNsdWc6IFwiLGZpbHRlcmVkQXJ0aXN0LnNsdWcpXG4gIGNvbnNvbGUubG9nKFwiQXJ0aXN0OiBcIixmaWx0ZXJlZEFydGlzdC5hcnRpc3QpXG5cbiAgY29uc3QgZmlsdGVyZWRBcnRpc3QgPSBkYXRhLmZpbmQoKGFydGlzdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92aWUuc2x1Zywgc2x1Z1wiLCBhcnRpc3Quc2x1Zywgc2x1Zyk7XG4gICAgcmV0dXJuIGFydGlzdC5zbHVnID09PSBzbHVnfSlcblxuICAgIGNvbnNvbGUubG9nKFwiTXkgRmlsdGVyZWQgQXJ0aXN0XCIsZmlsdGVyZWRBcnRpc3QpXG5cbiAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPHA+RXJyb3IgbG9hZGluZyBkYXRhPC9wPlxuICAgICAgKSA6ICFkYXRhID8gKFxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7LyogPEFydEdhbGxlcnkgcGllY2VzPXtkYXRhfSBlcnJvcj17ZXJyb3J9IC8+ICovfVxuICAgICAgICAgIFxuICAgICAgICAgIDxwPlBvc3Q6IHtzbHVnfTwvcD5cbiAgICAgICAgICA8cD57fTwvcD5cbiAgICAgICAgICA8cD57ZGF0YVswXS5zbHVnfTwvcD5cbiAgICAgICAgICA8cD57ZGF0YVswXS5hcnRpc3R9PC9wPlxuICAgICAgICAgIDxwPntkYXRhWzBdLnllYXJ9PC9wPlxuICAgICAgICAgIDxwPnt9PC9wPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU1dSIiwiQXJ0R2FsbGVyeSIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFydFVSTCIsIkFydFBpZWNlUGFnZSIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZEFydGlzdCIsImFydGlzdCIsImZpbmQiLCJkaXYiLCJwIiwieWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/art-pieces/[slug].js\n"));

/***/ })

});