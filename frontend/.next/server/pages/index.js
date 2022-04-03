"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Home = ({ posts  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"REST Demo\"\n        }, void 0, false, {\n            fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/index.tsx\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, undefined);\n};\nasync function getServerSideProps() {\n    // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n    const result = await fetch(\"http://localhost:8000/?rest_route=/wp/v2/posts\");\n    const posts = await result.json();\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUMsRUFBQ0MsS0FBSyxHQUFDLEdBQUs7SUFDdEIscUJBQU8sOERBQUNDLE1BQUk7a0JBQ1IsNEVBQUNDLElBQUU7c0JBQUMsV0FBUzs7Ozs7cUJBQUs7Ozs7O2lCQVFmO0NBQ1Y7QUFFTSxlQUFlQyxrQkFBa0IsR0FBRztJQUN2QywwRkFBMEY7SUFDMUYsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQztJQUM1RSxNQUFNTCxLQUFLLEdBQUcsTUFBTUksTUFBTSxDQUFDRSxJQUFJLEVBQUU7SUFFakMsT0FBTztRQUFDQyxLQUFLLEVBQUU7WUFBQ1AsS0FBSztTQUFDO0tBQUM7Q0FHMUI7QUFFRCxpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBIb21lID0gKHtwb3N0c30pID0+IHtcbiAgICByZXR1cm4gPG1haW4+XG4gICAgICAgIDxoMT5SRVNUIERlbW88L2gxPlxuICAgICAgICB7LyogPHVsPlxuICAgICAgICAgICAge3Bvc3RzPy5tYXAocG9zdCA9PiA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntwb3N0Py50aXRsZT8ucmVuZGVyZWR9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+KX1cbiAgICAgICAgPC91bD4gKi99XG4gICAgPC9tYWluPlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvP3Jlc3Rfcm91dGU9L2Zvb2Jhci9wb3N0cy90ZXh0LzEvMicpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvP3Jlc3Rfcm91dGU9L3dwL3YyL3Bvc3RzJyk7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXG4gICAgcmV0dXJuIHtwcm9wczoge3Bvc3RzfX1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkhvbWUiLCJwb3N0cyIsIm1haW4iLCJoMSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3VsdCIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();