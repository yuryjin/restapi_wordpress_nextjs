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
exports.id = "pages/nono/aaa";
exports.ids = ["pages/nono/aaa"];
exports.modules = {

/***/ "./pages/nono/aaa.tsx":
/*!****************************!*\
  !*** ./pages/nono/aaa.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// import Link from 'next/link';\n// const Post = ({post}) => {\n//     return <article>\n//         <h1>{post?.title.rendered}</h1>\n//         <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div>\n//     </article>\n// }\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${params.id}`);\n//     console.log(result);\n//     const post = await result.json();\n//     console.log(post);\n//     return {props: {post}, notFound: post?.data?.status === 404 }\n// }\n// export default Post;\n// import Link from 'next/link';\nconst Restful = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"fire\"\n        }, void 0, false, {\n            fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/nono/aaa.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/nono/aaa.tsx\",\n        lineNumber: 27,\n        columnNumber: 12\n    }, undefined);\n};\nasync function getServerSideProps({ params  }) {\n    var ref;\n    // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n    const result = await fetch(`http://localhost:8000/?rest_route=/foobar/posts/${params.text}/${params.num1}/${params.num2}`);\n    const requestedData = await result.json();\n    return {\n        props: {\n            requestedData\n        },\n        notFound: (requestedData === null || requestedData === void 0 ? void 0 : (ref = requestedData.data) === null || ref === void 0 ? void 0 : ref.status) === 404\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restful);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub25vL2FhYS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXlCQTtBQXpCQSxnQ0FBZ0M7QUFFaEMsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsbUZBQW1GO0FBQ25GLGlCQUFpQjtBQUNqQixJQUFJO0FBRUoseURBQXlEO0FBQ3pELGlHQUFpRztBQUNqRyxpR0FBaUc7QUFDakcsMkJBQTJCO0FBQzNCLHdDQUF3QztBQUN4Qyx5QkFBeUI7QUFFekIsb0VBQW9FO0FBR3BFLElBQUk7QUFFSix1QkFBdUI7QUFFdkIsZ0NBQWdDO0FBRWhDLE1BQU1BLE9BQU8sR0FBRyxJQUFNO0lBQ2xCLHFCQUFPLDhEQUFDQyxTQUFPO2tCQUlYLDRFQUFDQyxJQUFFO3NCQUFDLE1BQUk7Ozs7O3FCQUFLOzs7OztpQkFDUDtDQUNiO0FBRU0sZUFBZUMsa0JBQWtCLENBQUMsRUFBRUMsTUFBTSxHQUFFLEVBQUU7UUFLUEMsR0FBbUI7SUFKN0QsMEZBQTBGO0lBQzFGLE1BQU1DLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxnREFBZ0QsRUFBRUgsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxFQUFFSixNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFDLEVBQUVMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxSCxNQUFNTCxhQUFhLEdBQUcsTUFBTUMsTUFBTSxDQUFDSyxJQUFJLEVBQUU7SUFFekMsT0FBTztRQUFDQyxLQUFLLEVBQUU7WUFBQ1AsYUFBYTtTQUFDO1FBQUVRLFFBQVEsRUFBRVIsQ0FBQUEsYUFBYSxhQUFiQSxhQUFhLFdBQU0sR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxDQUFBQSxHQUFtQixHQUFuQkEsYUFBYSxDQUFFUyxJQUFJLGNBQW5CVCxHQUFtQixjQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLEdBQW1CLENBQUVVLE1BQU0sQ0FBUixLQUFhLEdBQUc7S0FBRTtDQUdsRjtBQUVELGlFQUFlZixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL25vbm8vYWFhLnRzeD9hMWJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4vLyAgICAgcmV0dXJuIDxhcnRpY2xlPlxuLy8gICAgICAgICA8aDE+e3Bvc3Q/LnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4vLyAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Py5jb250ZW50LnJlbmRlcmVkIH19PjwvZGl2PlxuLy8gICAgIDwvYXJ0aWNsZT5cbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzL3RleHQvMS8yJyk7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vd3AvdjIvcG9zdHMvJHtwYXJhbXMuaWR9YCk7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhwb3N0KTtcblxuLy8gICAgIHJldHVybiB7cHJvcHM6IHtwb3N0fSwgbm90Rm91bmQ6IHBvc3Q/LmRhdGE/LnN0YXR1cyA9PT0gNDA0IH1cblxuXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFJlc3RmdWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxhcnRpY2xlPlxuICAgICAgICB7LyogPGgxPntwb3N0Py50aXRsZS5yZW5kZXJlZH08L2gxPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdD8uY29udGVudC5yZW5kZXJlZCB9fT48L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8aDE+e3JlcXVlc3RlZERhdGE/LnVybC50ZXh0fTwvaDE+ICovfVxuICAgICAgICA8aDE+ZmlyZTwvaDE+XG4gICAgPC9hcnRpY2xlPlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvdGV4dC8xLzInKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvJHtwYXJhbXMudGV4dH0vJHtwYXJhbXMubnVtMX0vJHtwYXJhbXMubnVtMn1gKTtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuICAgIHJldHVybiB7cHJvcHM6IHtyZXF1ZXN0ZWREYXRhfSwgbm90Rm91bmQ6IHJlcXVlc3RlZERhdGE/LmRhdGE/LnN0YXR1cyA9PT0gNDA0IH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RmdWw7Il0sIm5hbWVzIjpbIlJlc3RmdWwiLCJhcnRpY2xlIiwiaDEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXF1ZXN0ZWREYXRhIiwicmVzdWx0IiwiZmV0Y2giLCJ0ZXh0IiwibnVtMSIsIm51bTIiLCJqc29uIiwicHJvcHMiLCJub3RGb3VuZCIsImRhdGEiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nono/aaa.tsx\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/nono/aaa.tsx"));
module.exports = __webpack_exports__;

})();