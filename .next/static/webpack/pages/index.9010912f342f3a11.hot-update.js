/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Spotlight.jsx":
/*!**************************************!*\
  !*** ./src/components/Spotlight.jsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Spotlight */ \"./src/components/Spotlight.jsx\");\n/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Spotlight__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst artURL = \"https://example-apis.vercel.app/api/art\";\nfunction Home() {\n    _s();\n    // const [images, updateImages] = useState([]);\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(artURL, fetcher);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"error occurred: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, this);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    // updateImages(data);\n    // console.log(images);\n    console.log(\"data:\", data);\n    const spotlight = data[Math.floor(Math.random() * 11)];\n    console.log(\"spotlight\", spotlight);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Spotlight\"\n            }, void 0, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Spotlight__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: \"Spotlight\"\n                    }, void 0, false, {\n                        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/art-pieces\",\n                        children: \"Art Pieces\"\n                    }, void 0, false, {\n                        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/favourites\",\n                        children: \"Favourites\"\n                    }, void 0, false, {\n                        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"3etLDUffADz62tD7g9gJKxYxEy4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFSdUI7QUFDRTtBQUVlO0FBQ3JCO0FBQ0k7QUFDa0I7QUFHL0MsTUFBTU8sVUFBVTtxQ0FBSUM7UUFBQUE7O1dBQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBQUU7QUFDcEUsTUFBTUMsU0FBUztBQUVBLFNBQVNDOztJQUN0QiwrQ0FBK0M7SUFDL0MsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdiLCtDQUFNQSxDQUFDUyxRQUFRTjtJQUVsRCxJQUFJUyxPQUFPO1FBQ1QscUJBQU8sOERBQUNFOztnQkFBSTtnQkFBaUJGOzs7Ozs7O0lBQy9CO0lBQ0EsSUFBSUMsV0FBVztRQUNiLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCQyxRQUFRQyxHQUFHLENBQUMsU0FBU0w7SUFFckIsTUFBTU0sWUFBWU4sSUFBSSxDQUFDTyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxJQUFJO0lBQ3RETCxRQUFRQyxHQUFHLENBQUMsYUFBYUM7SUFFekIscUJBQ0U7OzBCQUNFLDhEQUFDSTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDbkIsOERBQVNBOzs7OzswQkFDViw4REFBQ29CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3RCLGtEQUFJQTt3QkFBQ3VCLE1BQUs7a0NBQUk7Ozs7OztrQ0FDZiw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDeEIsa0RBQUlBO3dCQUFDdUIsTUFBSztrQ0FBYzs7Ozs7O2tDQUN6Qiw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDeEIsa0RBQUlBO3dCQUFDdUIsTUFBSztrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7QUFJakM7R0EvQndCZDs7UUFFYVYsMkNBQU1BOzs7S0FGbkJVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTcG90bGlnaHQgZnJvbSBcIkAvY29tcG9uZW50cy9TcG90bGlnaHRcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgYXJ0VVJMID0gXCJodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW2ltYWdlcywgdXBkYXRlSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoYXJ0VVJMLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5lcnJvciBvY2N1cnJlZDoge2Vycm9yfTwvZGl2PjtcbiAgfVxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIC8vIHVwZGF0ZUltYWdlcyhkYXRhKTtcbiAgLy8gY29uc29sZS5sb2coaW1hZ2VzKTtcbiAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcblxuICBjb25zdCBzcG90bGlnaHQgPSBkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKV07XG4gIGNvbnNvbGUubG9nKFwic3BvdGxpZ2h0XCIsIHNwb3RsaWdodCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlNwb3RsaWdodDwvaDE+XG4gICAgICA8U3BvdGxpZ2h0IC8+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlNwb3RsaWdodDwvTGluaz5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0LXBpZWNlc1wiPkFydCBQaWVjZXM8L0xpbms+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIj5GYXZvdXJpdGVzPC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTV1IiLCJMaW5rIiwiU3BvdGxpZ2h0IiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYXJ0VVJMIiwiSG9tZSIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJzcG90bGlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoMSIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});