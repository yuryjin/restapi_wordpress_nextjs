"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...rest]",{

/***/ "./pages/[...rest].tsx":
/*!*****************************!*\
  !*** ./pages/[...rest].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n// import Link from 'next/link';\n// const Post = ({post}) => {\n//     return <article>\n//         <h1>{post?.title.rendered}</h1>\n//         <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div>\n//     </article>\n// }\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${params.id}`);\n//     console.log(result);\n//     const post = await result.json();\n//     console.log(post);\n//     return {props: {post}, notFound: post?.data?.status === 404 }\n// }\n// export default Post;\n// import Link from 'next/link';\n\n\nvar _s = $RefreshSig$();\nfunction rendering() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"22\"\n    }, void 0, false, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, this);\n}\nvar Restful = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const { text, num1, num2 } = router.query;\n    // const { rest } = router.query;\n    // console.log(rest);\n    // console.log(rest[0]);\n    // console.log(rest[1]);\n    // console.log(rest[2]);\n    // console.log(rest[0]);\n    // console.log(rest[1]);\n    // console.log(rest[2]);\n    // console.log(text);\n    // console.log(text, num1, num2);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"useEffect triggered\");\n        if (!router.isReady) return;\n        // codes using router.query\n        var rest = router.query.rest;\n        console.log(rest);\n        rendering();\n    // return 'aa';\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"fire\"\n            }, void 0, false, {\n                fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: router.query.rest[0]\n            }, void 0, false, {\n                fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n        lineNumber: 61,\n        columnNumber: 12\n    }, _this);\n};\n_s(Restful, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Restful;\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/foobar/posts/${params.text}/${params.num1}/${params.num2}`);\n//     const requestedData = await result.json();\n//     return {props: {requestedData}, notFound: requestedData?.data?.status === 404 }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Restful);\nvar _c;\n$RefreshReg$(_c, \"Restful\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4ucmVzdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF5QkE7O0FBekJBLGdDQUFnQztBQUVoQyw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLDBDQUEwQztBQUMxQyxtRkFBbUY7QUFDbkYsaUJBQWlCO0FBQ2pCLElBQUk7QUFFSix5REFBeUQ7QUFDekQsaUdBQWlHO0FBQ2pHLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0Isd0NBQXdDO0FBQ3hDLHlCQUF5QjtBQUV6QixvRUFBb0U7QUFHcEUsSUFBSTtBQUVKLHVCQUF1QjtBQUV2QixnQ0FBZ0M7QUFFTztBQUNMOztBQUVsQyxTQUFTRSxTQUFTLEdBQUc7SUFDakIscUJBQU8sOERBQUNDLE1BQUk7a0JBQUMsSUFBRTs7Ozs7WUFBTztDQUN6QjtBQUVELElBQU1DLE9BQU8sR0FBRyxXQUFNOztJQUNsQixJQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsNkNBQTZDO0lBQzdDLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUVqQ0MsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLHFCQUFtQixDQUFFLENBQUM7UUFDbkMsSUFBRyxDQUFDRixNQUFNLENBQUNHLE9BQU8sRUFBRSxPQUFPO1FBRTNCLDJCQUEyQjtRQUMzQixJQUFNLElBQU0sR0FBS0gsTUFBTSxDQUFDSyxLQUFLLENBQXJCRCxJQUFJO1FBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxJQUFJLENBQUM7UUFFakJQLFNBQVMsRUFBRSxDQUFDO0lBRVosZUFBZTtLQUVsQixFQUFFO1FBQUNHLE1BQU0sQ0FBQ0csT0FBTztLQUFDLENBQUMsQ0FBQztJQUVyQixxQkFBTyw4REFBQ0csU0FBTzs7MEJBSVgsOERBQUNDLElBQUU7MEJBQUMsTUFBSTs7Ozs7cUJBQUs7MEJBQ2IsOERBQUNDLEdBQUM7MEJBQUVSLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztxQkFBSzs7Ozs7O2FBQ3ZCO0NBQ2I7R0FuQ0tMLE9BQU87O1FBQ01KLGtEQUFTOzs7QUFEdEJJLEtBQUFBLE9BQU87QUFzQ2IseURBQXlEO0FBQ3pELGlHQUFpRztBQUNqRyxrSUFBa0k7QUFDbEksaURBQWlEO0FBRWpELHNGQUFzRjtBQUd0RixJQUFJO0FBRUosK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bLi4ucmVzdF0udHN4PzdmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcbi8vICAgICByZXR1cm4gPGFydGljbGU+XG4vLyAgICAgICAgIDxoMT57cG9zdD8udGl0bGUucmVuZGVyZWR9PC9oMT5cbi8vICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3Q/LmNvbnRlbnQucmVuZGVyZWQgfX0+PC9kaXY+XG4vLyAgICAgPC9hcnRpY2xlPlxuLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvdGV4dC8xLzInKTtcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS93cC92Mi9wb3N0cy8ke3BhcmFtcy5pZH1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuXG4vLyAgICAgcmV0dXJuIHtwcm9wczoge3Bvc3R9LCBub3RGb3VuZDogcG9zdD8uZGF0YT8uc3RhdHVzID09PSA0MDQgfVxuXG5cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHJlbmRlcmluZygpIHtcbiAgICByZXR1cm4gPG1haW4+MjI8L21haW4+XG59XG5cbmNvbnN0IFJlc3RmdWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgLy8gY29uc3QgeyB0ZXh0LCBudW0xLCBudW0yIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgLy8gY29uc3QgeyByZXN0IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdCk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdFswXSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdFsxXSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdFsyXSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdFswXSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdFsxXSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdFsyXSk7XG4gICAgLy8gY29uc29sZS5sb2codGV4dCk7XG4gICAgLy8gY29uc29sZS5sb2codGV4dCwgbnVtMSwgbnVtMik7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coYHVzZUVmZmVjdCB0cmlnZ2VyZWRgKTtcbiAgICAgICAgaWYoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgXG4gICAgICAgIC8vIGNvZGVzIHVzaW5nIHJvdXRlci5xdWVyeVxuICAgICAgICBjb25zdCB7IHJlc3QgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdClcblxuICAgICAgICByZW5kZXJpbmcoKTtcblxuICAgICAgICAvLyByZXR1cm4gJ2FhJztcbiAgICBcbiAgICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuICAgIHJldHVybiA8YXJ0aWNsZT5cbiAgICAgICAgey8qIDxoMT57cG9zdD8udGl0bGUucmVuZGVyZWR9PC9oMT5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3Q/LmNvbnRlbnQucmVuZGVyZWQgfX0+PC9kaXY+ICovfVxuICAgICAgICB7LyogPGgxPntyZXF1ZXN0ZWREYXRhPy51cmwudGV4dH08L2gxPiAqL31cbiAgICAgICAgPGgxPmZpcmU8L2gxPlxuICAgICAgICA8cD57cm91dGVyLnF1ZXJ5LnJlc3RbMF19PC9wPlxuICAgIDwvYXJ0aWNsZT5cbn1cblxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvdGV4dC8xLzInKTtcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvJHtwYXJhbXMudGV4dH0vJHtwYXJhbXMubnVtMX0vJHtwYXJhbXMubnVtMn1gKTtcbi8vICAgICBjb25zdCByZXF1ZXN0ZWREYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuLy8gICAgIHJldHVybiB7cHJvcHM6IHtyZXF1ZXN0ZWREYXRhfSwgbm90Rm91bmQ6IHJlcXVlc3RlZERhdGE/LmRhdGE/LnN0YXR1cyA9PT0gNDA0IH1cblxuXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RmdWw7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInJlbmRlcmluZyIsIm1haW4iLCJSZXN0ZnVsIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJyZXN0IiwicXVlcnkiLCJhcnRpY2xlIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...rest].tsx\n");

/***/ })

});