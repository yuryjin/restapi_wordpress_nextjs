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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n// import Link from 'next/link';\n// const Post = ({post}) => {\n//     return <article>\n//         <h1>{post?.title.rendered}</h1>\n//         <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div>\n//     </article>\n// }\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${params.id}`);\n//     console.log(result);\n//     const post = await result.json();\n//     console.log(post);\n//     return {props: {post}, notFound: post?.data?.status === 404 }\n// }\n// export default Post;\n// import Link from 'next/link';\n\nvar _s = $RefreshSig$();\nvar Restful = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const { text, num1, num2 } = router.query;\n    var rest = router.query.rest;\n    console.log(router.query);\n    // console.log(text);\n    // console.log(text, num1, num2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"fire\"\n        }, void 0, false, {\n            fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, _this);\n};\n_s(Restful, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Restful;\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/foobar/posts/${params.text}/${params.num1}/${params.num2}`);\n//     const requestedData = await result.json();\n//     return {props: {requestedData}, notFound: requestedData?.data?.status === 404 }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Restful);\nvar _c;\n$RefreshReg$(_c, \"Restful\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4ucmVzdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBeUJBOztBQXpCQSxnQ0FBZ0M7QUFFaEMsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsbUZBQW1GO0FBQ25GLGlCQUFpQjtBQUNqQixJQUFJO0FBRUoseURBQXlEO0FBQ3pELGlHQUFpRztBQUNqRyxpR0FBaUc7QUFDakcsMkJBQTJCO0FBQzNCLHdDQUF3QztBQUN4Qyx5QkFBeUI7QUFFekIsb0VBQW9FO0FBR3BFLElBQUk7QUFFSix1QkFBdUI7QUFFdkIsZ0NBQWdDO0FBRU87O0FBRXZDLElBQU1DLE9BQU8sR0FBRyxXQUFNOztJQUNsQixJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsNkNBQTZDO0lBQzdDLElBQU1HLElBQUksR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNELElBQUk7SUFDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUNFLEtBQUssQ0FBQyxDQUFDO0lBQzFCLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFFakMscUJBQU8sOERBQUNHLFNBQU87a0JBSVgsNEVBQUNDLElBQUU7c0JBQUMsTUFBSTs7Ozs7aUJBQUs7Ozs7O2FBQ1A7Q0FDYjtHQWRLUCxPQUFPOztRQUNNRCxrREFBUzs7O0FBRHRCQyxLQUFBQSxPQUFPO0FBZ0JiLHlEQUF5RDtBQUN6RCxpR0FBaUc7QUFDakcsa0lBQWtJO0FBQ2xJLGlEQUFpRDtBQUVqRCxzRkFBc0Y7QUFHdEYsSUFBSTtBQUVKLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvWy4uLnJlc3RdLnRzeD83ZmE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4vLyAgICAgcmV0dXJuIDxhcnRpY2xlPlxuLy8gICAgICAgICA8aDE+e3Bvc3Q/LnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4vLyAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Py5jb250ZW50LnJlbmRlcmVkIH19PjwvZGl2PlxuLy8gICAgIDwvYXJ0aWNsZT5cbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzL3RleHQvMS8yJyk7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vd3AvdjIvcG9zdHMvJHtwYXJhbXMuaWR9YCk7XG4vLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhwb3N0KTtcblxuLy8gICAgIHJldHVybiB7cHJvcHM6IHtwb3N0fSwgbm90Rm91bmQ6IHBvc3Q/LmRhdGE/LnN0YXR1cyA9PT0gNDA0IH1cblxuXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBSZXN0ZnVsID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIC8vIGNvbnN0IHsgdGV4dCwgbnVtMSwgbnVtMiB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnN0IHJlc3QgPSByb3V0ZXIucXVlcnkucmVzdDtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRleHQsIG51bTEsIG51bTIpO1xuXG4gICAgcmV0dXJuIDxhcnRpY2xlPlxuICAgICAgICB7LyogPGgxPntwb3N0Py50aXRsZS5yZW5kZXJlZH08L2gxPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdD8uY29udGVudC5yZW5kZXJlZCB9fT48L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8aDE+e3JlcXVlc3RlZERhdGE/LnVybC50ZXh0fTwvaDE+ICovfVxuICAgICAgICA8aDE+ZmlyZTwvaDE+XG4gICAgPC9hcnRpY2xlPlxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvdGV4dC8xLzInKTtcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9yZXN0X3JvdXRlPS9mb29iYXIvcG9zdHMvJHtwYXJhbXMudGV4dH0vJHtwYXJhbXMubnVtMX0vJHtwYXJhbXMubnVtMn1gKTtcbi8vICAgICBjb25zdCByZXF1ZXN0ZWREYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuLy8gICAgIHJldHVybiB7cHJvcHM6IHtyZXF1ZXN0ZWREYXRhfSwgbm90Rm91bmQ6IHJlcXVlc3RlZERhdGE/LmRhdGE/LnN0YXR1cyA9PT0gNDA0IH1cblxuXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RmdWw7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlc3RmdWwiLCJyb3V0ZXIiLCJyZXN0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...rest].tsx\n");

/***/ })

});