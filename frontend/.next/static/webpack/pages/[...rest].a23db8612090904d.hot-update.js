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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n// import Link from 'next/link';\n// const Post = ({post}) => {\n//     return <article>\n//         <h1>{post?.title.rendered}</h1>\n//         <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div>\n//     </article>\n// }\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${params.id}`);\n//     console.log(result);\n//     const post = await result.json();\n//     console.log(post);\n//     return {props: {post}, notFound: post?.data?.status === 404 }\n// }\n// export default Post;\n// import Link from 'next/link';\n\n\nvar _s = $RefreshSig$();\nvar Restful = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const { text, num1, num2 } = router.query;\n    // const { rest } = router.query;\n    // console.log(rest);\n    // console.log(rest[0]);\n    // console.log(rest[1]);\n    // console.log(rest[2]);\n    // console.log(rest[0]);\n    // console.log(rest[1]);\n    // console.log(rest[2]);\n    // console.log(text);\n    // console.log(text, num1, num2);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!router.isReady) return;\n        // codes using router.query\n        var rest = router.query.rest;\n        console.log(rest);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: \"qq\"\n        }, void 0, false, {\n            fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n            lineNumber: 50,\n            columnNumber: 16\n        }, _this1);\n    }, [\n        router.isReady\n    ]);\n// return <article>\n//     {/* <h1>{post?.title.rendered}</h1>\n//     <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div> */}\n//     {/* <h1>{requestedData?.url.text}</h1> */}\n//     <h1>fire</h1>\n//     {/* <p>{rest.length}</p> */}\n// </article>\n};\n_s(Restful, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Restful;\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/foobar/posts/${params.text}/${params.num1}/${params.num2}`);\n//     const requestedData = await result.json();\n//     return {props: {requestedData}, notFound: requestedData?.data?.status === 404 }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Restful);\nvar _c;\n$RefreshReg$(_c, \"Restful\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4ucmVzdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF5QkE7O0FBekJBLGdDQUFnQztBQUVoQyw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLDBDQUEwQztBQUMxQyxtRkFBbUY7QUFDbkYsaUJBQWlCO0FBQ2pCLElBQUk7QUFFSix5REFBeUQ7QUFDekQsaUdBQWlHO0FBQ2pHLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0Isd0NBQXdDO0FBQ3hDLHlCQUF5QjtBQUV6QixvRUFBb0U7QUFHcEUsSUFBSTtBQUVKLHVCQUF1QjtBQUV2QixnQ0FBZ0M7QUFFTztBQUNMOztBQUVsQyxJQUFNRSxPQUFPLEdBQUcsV0FBTTs7O0lBQ2xCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQiw2Q0FBNkM7SUFDN0MsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsaUNBQWlDO0lBRWpDQyxnREFBUyxDQUFDLFdBQUk7UUFDVixJQUFHLENBQUNFLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFLE9BQU87UUFFM0IsMkJBQTJCO1FBQzNCLElBQU0sSUFBTSxHQUFLRCxNQUFNLENBQUNHLEtBQUssQ0FBckJELElBQUk7UUFDWkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztRQUVqQixxQkFBTyw4REFBQ0ksTUFBSTtzQkFBQyxJQUFFOzs7OztrQkFBTztLQUV6QixFQUFFO1FBQUNOLE1BQU0sQ0FBQ0MsT0FBTztLQUFDLENBQUMsQ0FBQztBQUVyQixtQkFBbUI7QUFDbkIsMENBQTBDO0FBQzFDLG1GQUFtRjtBQUNuRixpREFBaUQ7QUFDakQsb0JBQW9CO0FBQ3BCLG1DQUFtQztBQUNuQyxhQUFhO0NBQ2hCO0dBaENLRixPQUFPOztRQUNNRixrREFBUzs7O0FBRHRCRSxLQUFBQSxPQUFPO0FBbUNiLHlEQUF5RDtBQUN6RCxpR0FBaUc7QUFDakcsa0lBQWtJO0FBQ2xJLGlEQUFpRDtBQUVqRCxzRkFBc0Y7QUFHdEYsSUFBSTtBQUVKLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvWy4uLnJlc3RdLnRzeD83ZmE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4vLyAgICAgcmV0dXJuIDxhcnRpY2xlPlxuLy8gICAgICAgICA8aDE+e3Bvc3Q/LnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4vLyAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Py5jb250ZW50LnJlbmRlcmVkIH19PjwvZGl2PlxuLy8gICAgIDwvYXJ0aWNsZT5cbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzL3RleHQvMS8yJyk7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vd3AvdjIvcG9zdHMvJHtwYXJhbXMuaWR9YCk7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhwb3N0KTtcblxuLy8gICAgIHJldHVybiB7cHJvcHM6IHtwb3N0fSwgbm90Rm91bmQ6IHBvc3Q/LmRhdGE/LnN0YXR1cyA9PT0gNDA0IH1cblxuXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXN0ZnVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIC8vIGNvbnN0IHsgdGV4dCwgbnVtMSwgbnVtMiB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIC8vIGNvbnN0IHsgcmVzdCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3QpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3RbMF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3RbMV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3RbMl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3RbMF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3RbMV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3RbMl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRleHQsIG51bTEsIG51bTIpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIFxuICAgICAgICAvLyBjb2RlcyB1c2luZyByb3V0ZXIucXVlcnlcbiAgICAgICAgY29uc3QgeyByZXN0IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3QpXG5cbiAgICAgICAgcmV0dXJuIDxtYWluPnFxPC9tYWluPlxuICAgIFxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gICAgLy8gcmV0dXJuIDxhcnRpY2xlPlxuICAgIC8vICAgICB7LyogPGgxPntwb3N0Py50aXRsZS5yZW5kZXJlZH08L2gxPlxuICAgIC8vICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdD8uY29udGVudC5yZW5kZXJlZCB9fT48L2Rpdj4gKi99XG4gICAgLy8gICAgIHsvKiA8aDE+e3JlcXVlc3RlZERhdGE/LnVybC50ZXh0fTwvaDE+ICovfVxuICAgIC8vICAgICA8aDE+ZmlyZTwvaDE+XG4gICAgLy8gICAgIHsvKiA8cD57cmVzdC5sZW5ndGh9PC9wPiAqL31cbiAgICAvLyA8L2FydGljbGU+XG59XG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzL3RleHQvMS8yJyk7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzLyR7cGFyYW1zLnRleHR9LyR7cGFyYW1zLm51bTF9LyR7cGFyYW1zLm51bTJ9YCk7XG4vLyAgICAgY29uc3QgcmVxdWVzdGVkRGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbi8vICAgICByZXR1cm4ge3Byb3BzOiB7cmVxdWVzdGVkRGF0YX0sIG5vdEZvdW5kOiByZXF1ZXN0ZWREYXRhPy5kYXRhPy5zdGF0dXMgPT09IDQwNCB9XG5cblxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0ZnVsOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJSZXN0ZnVsIiwicm91dGVyIiwiaXNSZWFkeSIsInJlc3QiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...rest].tsx\n");

/***/ })

});