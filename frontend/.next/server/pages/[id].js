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
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Post = ({ post  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post === null || post === void 0 ? void 0 : post.title.rendered\n            }, void 0, false, {\n                fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[id].tsx\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: post === null || post === void 0 ? void 0 : post.content.rendered\n                }\n            }, void 0, false, {\n                fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[id].tsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[id].tsx\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, undefined);\n};\nasync function getServerSideProps({ params  }) {\n    var ref;\n    // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n    const result = await fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${params.id}`);\n    const post = await result.json();\n    return {\n        props: {\n            post\n        },\n        notFound: (post === null || post === void 0 ? void 0 : (ref = post.data) === null || ref === void 0 ? void 0 : ref.status) === 404\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQyxFQUFDQyxJQUFJLEdBQUMsR0FBSztJQUNyQixxQkFBTyw4REFBQ0MsU0FBTzs7MEJBQ1gsOERBQUNDLElBQUU7MEJBQUVGLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsSUFBSSxDQUFFRyxLQUFLLENBQUNDLFFBQVE7Ozs7O3lCQUFNOzBCQUMvQiw4REFBQ0MsS0FBRztnQkFBQ0MsdUJBQXVCLEVBQUU7b0JBQUVDLE1BQU0sRUFBRVAsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVRLE9BQU8sQ0FBQ0osUUFBUTtpQkFBRTs7Ozs7eUJBQVE7Ozs7OztpQkFDbEU7Q0FDYjtBQUVNLGVBQWVLLGtCQUFrQixDQUFDLEVBQUVDLE1BQU0sR0FBRSxFQUFFO1FBS2hCVixHQUFVO0lBSjNDLDBGQUEwRjtJQUMxRixNQUFNVyxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsK0NBQStDLEVBQUVGLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RixNQUFNYixJQUFJLEdBQUcsTUFBTVcsTUFBTSxDQUFDRyxJQUFJLEVBQUU7SUFFaEMsT0FBTztRQUFDQyxLQUFLLEVBQUU7WUFBQ2YsSUFBSTtTQUFDO1FBQUVnQixRQUFRLEVBQUVoQixDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLENBQUFBLEdBQVUsR0FBVkEsSUFBSSxDQUFFaUIsSUFBSSxjQUFWakIsR0FBVSxjQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEdBQVUsQ0FBRWtCLE1BQU0sQ0FBUixLQUFhLEdBQUc7S0FBRTtDQUdoRTtBQUVELGlFQUFlbkIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9baWRdLnRzeD9jMzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gICAgcmV0dXJuIDxhcnRpY2xlPlxuICAgICAgICA8aDE+e3Bvc3Q/LnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Py5jb250ZW50LnJlbmRlcmVkIH19PjwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzL3RleHQvMS8yJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vd3AvdjIvcG9zdHMvJHtwYXJhbXMuaWR9YCk7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbiAgICByZXR1cm4ge3Byb3BzOiB7cG9zdH0sIG5vdEZvdW5kOiBwb3N0Py5kYXRhPy5zdGF0dXMgPT09IDQwNCB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsImFydGljbGUiLCJoMSIsInRpdGxlIiwicmVuZGVyZWQiLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXN1bHQiLCJmZXRjaCIsImlkIiwianNvbiIsInByb3BzIiwibm90Rm91bmQiLCJkYXRhIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/[id].tsx"));
module.exports = __webpack_exports__;

})();