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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavoriteButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FavoriteButton(param) {\n    let { artPiecesState } = param;\n    const { artPiecesInfo, setArtPiecesInfo } = artPiecesState;\n    const toggleFavorite = (imageId)=>{\n        if (artPiecesInfo.includes(imageId)) {\n            setArtPiecesInfo(artPiecesInfo.filter((id)=>id !== imageId));\n        } else {\n            setArtPiecesInfo([\n                ...artPiecesInfo,\n                imageId\n            ]);\n        }\n    };\n    console.log(\"artPiecesInfo\", artPiecesInfo);\n    if (!artPiecesInfo) {\n        console.log(\"artPiecesInfo\", artPiecesInfo);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"toggleButton\",\n        children: artPiecesInfo.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>toggleFavorite(image.id),\n                    children: artPiecesInfo.includes(image.id) ? \"\\uD83D\\uDC4D\" : \"\\uD83D\\uDC4E\"\n                }, void 0, false, {\n                    fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, image.id, false, {\n                fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/cosma/spicedCopy/Cosma_Alex-Gallery/src/components/FavoriteButton.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = FavoriteButton;\nvar _c;\n$RefreshReg$(_c, \"FavoriteButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZUJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDLGVBQWUsS0FBa0I7UUFBbEIsRUFBRUMsY0FBYyxFQUFFLEdBQWxCO0lBQ3JDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHRjtJQUU1QyxNQUFNRyxpQkFBaUIsQ0FBQ0M7UUFDdEIsSUFBSUgsY0FBY0ksUUFBUSxDQUFDRCxVQUFVO1lBQ25DRixpQkFBaUJELGNBQWNLLE1BQU0sQ0FBQyxDQUFDQyxLQUFPQSxPQUFPSDtRQUN2RCxPQUFPO1lBQ0xGLGlCQUFpQjttQkFBSUQ7Z0JBQWVHO2FBQVE7UUFDOUM7SUFDRjtJQUNBSSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCUjtJQUU3QixJQUFJLENBQUNBLGVBQWU7UUFDbEJPLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJSO1FBQzdCLHFCQUFPLDhEQUFDUztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWlYsY0FBY1csR0FBRyxDQUFDLENBQUNDLHNCQUNsQiw4REFBQ0g7MEJBRUMsNEVBQUNJO29CQUFPQyxTQUFTLElBQU1aLGVBQWVVLE1BQU1OLEVBQUU7OEJBQzNDTixjQUFjSSxRQUFRLENBQUNRLE1BQU1OLEVBQUUsSUFBSSxpQkFBTzs7Ozs7O2VBSHJDTSxNQUFNTixFQUFFOzs7Ozs7Ozs7O0FBUzFCO0tBN0J3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmF2b3JpdGVCdXR0b24uanN4PzhiZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmF2b3JpdGVCdXR0b24oeyBhcnRQaWVjZXNTdGF0ZSB9KSB7XG4gIGNvbnN0IHsgYXJ0UGllY2VzSW5mbywgc2V0QXJ0UGllY2VzSW5mbyB9ID0gYXJ0UGllY2VzU3RhdGU7XG5cbiAgY29uc3QgdG9nZ2xlRmF2b3JpdGUgPSAoaW1hZ2VJZCkgPT4ge1xuICAgIGlmIChhcnRQaWVjZXNJbmZvLmluY2x1ZGVzKGltYWdlSWQpKSB7XG4gICAgICBzZXRBcnRQaWVjZXNJbmZvKGFydFBpZWNlc0luZm8uZmlsdGVyKChpZCkgPT4gaWQgIT09IGltYWdlSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXJ0UGllY2VzSW5mbyhbLi4uYXJ0UGllY2VzSW5mbywgaW1hZ2VJZF0pO1xuICAgIH1cbiAgfTtcbiAgY29uc29sZS5sb2coXCJhcnRQaWVjZXNJbmZvXCIsIGFydFBpZWNlc0luZm8pO1xuXG4gIGlmICghYXJ0UGllY2VzSW5mbykge1xuICAgIGNvbnNvbGUubG9nKFwiYXJ0UGllY2VzSW5mb1wiLCBhcnRQaWVjZXNJbmZvKTtcbiAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZUJ1dHRvblwiPlxuICAgICAge2FydFBpZWNlc0luZm8ubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW1hZ2UuaWR9PlxuICAgICAgICAgIHsvKiA8aW1nIHNyYz17aW1hZ2Uuc3JjfSBhbHQ9e2BJbWFnZSAke2ltYWdlLmlkfWB9IC8+ICovfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUoaW1hZ2UuaWQpfT5cbiAgICAgICAgICAgIHthcnRQaWVjZXNJbmZvLmluY2x1ZGVzKGltYWdlLmlkKSA/IFwi8J+RjVwiIDogXCLwn5GOXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGYXZvcml0ZUJ1dHRvbiIsImFydFBpZWNlc1N0YXRlIiwiYXJ0UGllY2VzSW5mbyIsInNldEFydFBpZWNlc0luZm8iLCJ0b2dnbGVGYXZvcml0ZSIsImltYWdlSWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FavoriteButton.jsx\n"));

/***/ })

});