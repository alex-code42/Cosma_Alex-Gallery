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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst artURL = \"https://example-apis.vercel.app/api/art\";\nfunction ArtPiecePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    // Fetch the art pieces data using useSWR\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(artURL, fetcher);\n    const filteredArtist = data.find((artist)=>{\n        console.log(\"movie.slug, slug\", artist.slug, slug);\n        return artist.slug === slug;\n    });\n    console.log(\"My Filtered Artist\", filteredArtist);\n    console.log(\"My Data\", filteredArtist);\n    console.log(\"My Data\", filteredArtist.slug);\n    console.log(\"Slug: \", filteredArtist.slug);\n    console.log(\"Artist: \", filteredArtist.artist);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this) : !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: filteredArtist.name\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: filteredArtist.imageSource,\n                    width: 450,\n                    height: 450,\n                    alt: \"Picture of the author\"\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Artist Name: \",\n                        filteredArtist.artist.toUpperCase()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: filteredArtist.year\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: filteredArtist.genre\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/art-pieces\",\n                    children: \"Back to Art Pieces\"\n                }, void 0, false, {\n                    fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/benutzer/Desktop/Cosma_Alex-Gallery/src/pages/art-pieces/[slug].js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtPiecePage, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ArtPiecePage;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0LXBpZWNlcy9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDSztBQUNEO0FBRTdCLE1BQU1JLFVBQVU7cUNBQUlDO1FBQUFBOztXQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFFO0FBQ3BFLE1BQU1DLFNBQVM7QUFFQSxTQUFTQzs7SUFDdEIsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IseUNBQXlDO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR2YsK0NBQU1BLENBQUNTLFFBQVFOO0lBR3ZDLE1BQU1hLGlCQUFpQkYsS0FBS0csSUFBSSxDQUFDLENBQUNDO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CRixPQUFPTixJQUFJLEVBQUVBO1FBQzdDLE9BQU9NLE9BQU9OLElBQUksS0FBS0E7SUFBSTtJQUUzQk8sUUFBUUMsR0FBRyxDQUFDLHNCQUFxQko7SUFDakNHLFFBQVFDLEdBQUcsQ0FBQyxXQUFVSjtJQUN0QkcsUUFBUUMsR0FBRyxDQUFDLFdBQVVKLGVBQWVKLElBQUk7SUFDekNPLFFBQVFDLEdBQUcsQ0FBQyxVQUFTSixlQUFlSixJQUFJO0lBQ3hDTyxRQUFRQyxHQUFHLENBQUMsWUFBV0osZUFBZUUsTUFBTTtJQUk5QyxxQkFDRSw4REFBQ0c7a0JBQ0VOLHNCQUNDLDhEQUFDTztzQkFBRTs7Ozs7bUJBQ0QsQ0FBQ1IscUJBQ0gsOERBQUNRO3NCQUFFOzs7OztpQ0FFSDs7OEJBR0UsOERBQUNBOzhCQUFHTixlQUFlTyxJQUFJOzs7Ozs7OEJBQ3ZCLDhEQUFDdEIsbURBQUtBO29CQUNBdUIsS0FBS1IsZUFBZVMsV0FBVztvQkFDL0JDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUk7Ozs7Ozs4QkFFViw4REFBQ047O3dCQUFFO3dCQUFjTixlQUFlRSxNQUFNLENBQUNXLFdBQVc7Ozs7Ozs7OEJBQ2xELDhEQUFDUDs4QkFBR04sZUFBZWMsSUFBSTs7Ozs7OzhCQUN2Qiw4REFBQ1I7OEJBQUdOLGVBQWVlLEtBQUs7Ozs7Ozs4QkFDeEIsOERBQUM3QixrREFBSUE7b0JBQUM4QixNQUFLOzhCQUFjOzs7Ozs7Ozs7Ozs7O0FBTW5DO0dBOUN3QnRCOztRQUNQWCxrREFBU0E7UUFJQUMsMkNBQU1BOzs7S0FMUlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydC1waWVjZXMvW3NsdWddLmpzPzMwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5jb25zdCBhcnRVUkwgPSBcImh0dHBzOi8vZXhhbXBsZS1hcGlzLnZlcmNlbC5hcHAvYXBpL2FydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRQaWVjZVBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAvLyBGZXRjaCB0aGUgYXJ0IHBpZWNlcyBkYXRhIHVzaW5nIHVzZVNXUlxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYXJ0VVJMLCBmZXRjaGVyKTtcblxuXG4gIGNvbnN0IGZpbHRlcmVkQXJ0aXN0ID0gZGF0YS5maW5kKChhcnRpc3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmllLnNsdWcsIHNsdWdcIiwgYXJ0aXN0LnNsdWcsIHNsdWcpO1xuICAgIHJldHVybiBhcnRpc3Quc2x1ZyA9PT0gc2x1Z30pXG5cbiAgICBjb25zb2xlLmxvZyhcIk15IEZpbHRlcmVkIEFydGlzdFwiLGZpbHRlcmVkQXJ0aXN0KVxuICAgIGNvbnNvbGUubG9nKFwiTXkgRGF0YVwiLGZpbHRlcmVkQXJ0aXN0KVxuICAgIGNvbnNvbGUubG9nKFwiTXkgRGF0YVwiLGZpbHRlcmVkQXJ0aXN0LnNsdWcpXG4gICAgY29uc29sZS5sb2coXCJTbHVnOiBcIixmaWx0ZXJlZEFydGlzdC5zbHVnKVxuICAgIGNvbnNvbGUubG9nKFwiQXJ0aXN0OiBcIixmaWx0ZXJlZEFydGlzdC5hcnRpc3QpXG5cbiAgXG4gICAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPHA+RXJyb3IgbG9hZGluZyBkYXRhPC9wPlxuICAgICAgKSA6ICFkYXRhID8gKFxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7LyogPEFydEdhbGxlcnkgcGllY2VzPXtkYXRhfSBlcnJvcj17ZXJyb3J9IC8+ICovfVxuICAgICAgICAgIHsvKiA8cD5EZXRhaWwgUGFnZTo8L3A+ICovfVxuICAgICAgICAgIDxwPntmaWx0ZXJlZEFydGlzdC5uYW1lfTwvcD5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e2ZpbHRlcmVkQXJ0aXN0LmltYWdlU291cmNlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXs0NTB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8cD5BcnRpc3QgTmFtZToge2ZpbHRlcmVkQXJ0aXN0LmFydGlzdC50b1VwcGVyQ2FzZSgpfTwvcD5cbiAgICAgICAgICA8cD57ZmlsdGVyZWRBcnRpc3QueWVhcn08L3A+XG4gICAgICAgICAgPHA+e2ZpbHRlcmVkQXJ0aXN0LmdlbnJlfTwvcD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2FydC1waWVjZXNcIj5CYWNrIHRvIEFydCBQaWVjZXM8L0xpbms+XG4gICAgICAgICAgXG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJJbWFnZSIsIkxpbmsiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhcnRVUkwiLCJBcnRQaWVjZVBhZ2UiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmaWx0ZXJlZEFydGlzdCIsImZpbmQiLCJhcnRpc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsIm5hbWUiLCJzcmMiLCJpbWFnZVNvdXJjZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidG9VcHBlckNhc2UiLCJ5ZWFyIiwiZ2VucmUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/art-pieces/[slug].js\n"));

/***/ })

});