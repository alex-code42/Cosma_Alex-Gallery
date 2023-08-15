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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_ArtGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ArtGallery */ \"./src/components/ArtGallery.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst artURL = \"https://example-apis.vercel.app/api/art\";\nfunction ArtPiecePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    // Fetch the art pieces data using useSWR\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(artURL, fetcher);\n    const filteredArtist = data.find((artist)=>{\n        console.log(\"movie.slug, slug\", artist.slug, slug);\n        return artist.slug === slug;\n    });\n    console.log(\"My Filtered Artist\", filteredArtist);\n    console.log(\"My Data\", filteredArtist);\n    console.log(\"My Data\", filteredArtist.slug);\n    console.log(\"Slug: \", filteredArtist.slug);\n    console.log(\"Artist: \", filteredArtist.artist);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this) : !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Detail Page:\"\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Artist Name: \",\n                        filteredArtist.artist.toUpperCase()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: filteredArtist.slug\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: filteredArtist.genre\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: filteredArtist.year\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtPiecePage, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ArtPiecePage;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDNEI7QUFFckQsTUFBTUcsVUFBVTtxQ0FBSUM7UUFBQUE7O1dBQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBQUU7QUFDcEUsTUFBTUMsU0FBUztBQUVBLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3Qix5Q0FBeUM7SUFDekMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHZCwrQ0FBTUEsQ0FBQ1EsUUFBUU47SUFHdkMsTUFBTWEsaUJBQWlCRixLQUFLRyxJQUFJLENBQUMsQ0FBQ0M7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGLE9BQU9OLElBQUksRUFBRUE7UUFDN0MsT0FBT00sT0FBT04sSUFBSSxLQUFLQTtJQUFJO0lBRTNCTyxRQUFRQyxHQUFHLENBQUMsc0JBQXFCSjtJQUNqQ0csUUFBUUMsR0FBRyxDQUFDLFdBQVVKO0lBQ3RCRyxRQUFRQyxHQUFHLENBQUMsV0FBVUosZUFBZUosSUFBSTtJQUN6Q08sUUFBUUMsR0FBRyxDQUFDLFVBQVNKLGVBQWVKLElBQUk7SUFDeENPLFFBQVFDLEdBQUcsQ0FBQyxZQUFXSixlQUFlRSxNQUFNO0lBSTlDLHFCQUNFLDhEQUFDRztrQkFDRU4sc0JBQ0MsOERBQUNPO3NCQUFFOzs7OzttQkFDRCxDQUFDUixxQkFDSCw4REFBQ1E7c0JBQUU7Ozs7O2lDQUVIOzs4QkFFRSw4REFBQ0E7OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0E7O3dCQUFFO3dCQUFjTixlQUFlRSxNQUFNLENBQUNLLFdBQVc7Ozs7Ozs7OEJBQ2xELDhEQUFDRDs4QkFBR04sZUFBZUosSUFBSTs7Ozs7OzhCQUN2Qiw4REFBQ1U7OEJBQUdOLGVBQWVRLEtBQUs7Ozs7Ozs4QkFDeEIsOERBQUNGOzhCQUFHTixlQUFlUyxJQUFJOzs7Ozs7Ozs7Ozs7O0FBS2pDO0dBdEN3QmY7O1FBQ1BWLGtEQUFTQTtRQUlBQywyQ0FBTUE7OztLQUxSUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanM/MzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgQXJ0R2FsbGVyeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcnRHYWxsZXJ5XCI7XG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmNvbnN0IGFydFVSTCA9IFwiaHR0cHM6Ly9leGFtcGxlLWFwaXMudmVyY2VsLmFwcC9hcGkvYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydFBpZWNlUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIC8vIEZldGNoIHRoZSBhcnQgcGllY2VzIGRhdGEgdXNpbmcgdXNlU1dSXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihhcnRVUkwsIGZldGNoZXIpO1xuXG5cbiAgY29uc3QgZmlsdGVyZWRBcnRpc3QgPSBkYXRhLmZpbmQoKGFydGlzdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92aWUuc2x1Zywgc2x1Z1wiLCBhcnRpc3Quc2x1Zywgc2x1Zyk7XG4gICAgcmV0dXJuIGFydGlzdC5zbHVnID09PSBzbHVnfSlcblxuICAgIGNvbnNvbGUubG9nKFwiTXkgRmlsdGVyZWQgQXJ0aXN0XCIsZmlsdGVyZWRBcnRpc3QpXG4gICAgY29uc29sZS5sb2coXCJNeSBEYXRhXCIsZmlsdGVyZWRBcnRpc3QpXG4gICAgY29uc29sZS5sb2coXCJNeSBEYXRhXCIsZmlsdGVyZWRBcnRpc3Quc2x1ZylcbiAgICBjb25zb2xlLmxvZyhcIlNsdWc6IFwiLGZpbHRlcmVkQXJ0aXN0LnNsdWcpXG4gICAgY29uc29sZS5sb2coXCJBcnRpc3Q6IFwiLGZpbHRlcmVkQXJ0aXN0LmFydGlzdClcblxuICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2Vycm9yID8gKFxuICAgICAgICA8cD5FcnJvciBsb2FkaW5nIGRhdGE8L3A+XG4gICAgICApIDogIWRhdGEgPyAoXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiA8QXJ0R2FsbGVyeSBwaWVjZXM9e2RhdGF9IGVycm9yPXtlcnJvcn0gLz4gKi99XG4gICAgICAgICAgPHA+RGV0YWlsIFBhZ2U6PC9wPlxuICAgICAgICAgIDxwPkFydGlzdCBOYW1lOiB7ZmlsdGVyZWRBcnRpc3QuYXJ0aXN0LnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgICAgIDxwPntmaWx0ZXJlZEFydGlzdC5zbHVnfTwvcD5cbiAgICAgICAgICA8cD57ZmlsdGVyZWRBcnRpc3QuZ2VucmV9PC9wPlxuICAgICAgICAgIDxwPntmaWx0ZXJlZEFydGlzdC55ZWFyfTwvcD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIkFydEdhbGxlcnkiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhcnRVUkwiLCJBcnRQaWVjZVBhZ2UiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmaWx0ZXJlZEFydGlzdCIsImZpbmQiLCJhcnRpc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsInRvVXBwZXJDYXNlIiwiZ2VucmUiLCJ5ZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/art-pieces/[slug].js\n"));

/***/ })

});