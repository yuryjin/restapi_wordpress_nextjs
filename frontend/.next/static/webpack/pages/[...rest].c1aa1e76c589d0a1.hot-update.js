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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n// import Link from 'next/link';\n// const Post = ({post}) => {\n//     return <article>\n//         <h1>{post?.title.rendered}</h1>\n//         <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div>\n//     </article>\n// }\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${params.id}`);\n//     console.log(result);\n//     const post = await result.json();\n//     console.log(post);\n//     return {props: {post}, notFound: post?.data?.status === 404 }\n// }\n// export default Post;\n// import Link from 'next/link';\n\n\nvar _s = $RefreshSig$();\nfunction rendering() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"22\"\n    }, void 0, false, {\n        fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, this);\n}\nvar Restful = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const { text, num1, num2 } = router.query;\n    // const { rest } = router.query;\n    // console.log(rest);\n    // console.log(rest[0]);\n    // console.log(rest[1]);\n    // console.log(rest[2]);\n    // console.log(rest[0]);\n    // console.log(rest[1]);\n    // console.log(rest[2]);\n    // console.log(text);\n    // console.log(text, num1, num2);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"useEffect triggered\");\n        if (!router.isReady) return;\n        // codes using router.query\n        var rest = router.query.rest;\n        console.log(rest[0]);\n    // rendering();\n    // return 'aa';\n    }, [\n        router.isReady\n    ]);\n    if (router.isReady === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: \"aa\"\n        }, void 0, false, {\n            fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n            lineNumber: 62,\n            columnNumber: 16\n        }, _this);\n    }\n    if (router.isReady === false) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: \"bb\"\n        }, void 0, false, {\n            fileName: \"/home/aquinas/projects/devops/docker-servers/final_docker/frontend/pages/[...rest].tsx\",\n            lineNumber: 66,\n            columnNumber: 16\n        }, _this);\n    }\n// return <article>\n//     {/* <h1>{post?.title.rendered}</h1>\n//     <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }}></div> */}\n//     {/* <h1>{requestedData?.url.text}</h1> */}\n//     <h1>fire</h1>\n//     <p>{router.query.rest}</p>\n// </article>\n};\n_s(Restful, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Restful;\n// export async function getServerSideProps({ params }) {\n//     // const result = await fetch('http://localhost:8000/?rest_route=/foobar/posts/text/1/2');\n//     const result = await fetch(`http://localhost:8000/?rest_route=/foobar/posts/${params.text}/${params.num1}/${params.num2}`);\n//     const requestedData = await result.json();\n//     return {props: {requestedData}, notFound: requestedData?.data?.status === 404 }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Restful);\nvar _c;\n$RefreshReg$(_c, \"Restful\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4ucmVzdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF5QkE7O0FBekJBLGdDQUFnQztBQUVoQyw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLDBDQUEwQztBQUMxQyxtRkFBbUY7QUFDbkYsaUJBQWlCO0FBQ2pCLElBQUk7QUFFSix5REFBeUQ7QUFDekQsaUdBQWlHO0FBQ2pHLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0Isd0NBQXdDO0FBQ3hDLHlCQUF5QjtBQUV6QixvRUFBb0U7QUFHcEUsSUFBSTtBQUVKLHVCQUF1QjtBQUV2QixnQ0FBZ0M7QUFFTztBQUNMOztBQUVsQyxTQUFTRSxTQUFTLEdBQUc7SUFDakIscUJBQU8sOERBQUNDLE1BQUk7a0JBQUMsSUFBRTs7Ozs7WUFBTztDQUN6QjtBQUVELElBQU1DLE9BQU8sR0FBRyxXQUFNOztJQUNsQixJQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsNkNBQTZDO0lBQzdDLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUVqQ0MsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLHFCQUFtQixDQUFFLENBQUM7UUFDbkMsSUFBRyxDQUFDRixNQUFNLENBQUNHLE9BQU8sRUFBRSxPQUFPO1FBRTNCLDJCQUEyQjtRQUMzQixJQUFNLElBQU0sR0FBS0gsTUFBTSxDQUFDSyxLQUFLLENBQXJCRCxJQUFJO1FBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEIsZUFBZTtJQUVmLGVBQWU7S0FFbEIsRUFBRTtRQUFDSixNQUFNLENBQUNHLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFckIsSUFBSUgsTUFBTSxDQUFDRyxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQ3pCLHFCQUFPLDhEQUFDTCxNQUFJO3NCQUFDLElBQUU7Ozs7O2lCQUFPO0tBQ3pCO0lBRUQsSUFBSUUsTUFBTSxDQUFDRyxPQUFPLEtBQUssS0FBSyxFQUFFO1FBQzFCLHFCQUFPLDhEQUFDTCxNQUFJO3NCQUFDLElBQUU7Ozs7O2lCQUFPO0tBQ3pCO0FBRUQsbUJBQW1CO0FBQ25CLDBDQUEwQztBQUMxQyxtRkFBbUY7QUFDbkYsaURBQWlEO0FBQ2pELG9CQUFvQjtBQUNwQixpQ0FBaUM7QUFDakMsYUFBYTtDQUNoQjtHQTNDS0MsT0FBTzs7UUFDTUosa0RBQVM7OztBQUR0QkksS0FBQUEsT0FBTztBQThDYix5REFBeUQ7QUFDekQsaUdBQWlHO0FBQ2pHLGtJQUFrSTtBQUNsSSxpREFBaUQ7QUFFakQsc0ZBQXNGO0FBR3RGLElBQUk7QUFFSiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1suLi5yZXN0XS50c3g/N2ZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vLyBjb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xuLy8gICAgIHJldHVybiA8YXJ0aWNsZT5cbi8vICAgICAgICAgPGgxPntwb3N0Py50aXRsZS5yZW5kZXJlZH08L2gxPlxuLy8gICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdD8uY29udGVudC5yZW5kZXJlZCB9fT48L2Rpdj5cbi8vICAgICA8L2FydGljbGU+XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuLy8gICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvP3Jlc3Rfcm91dGU9L2Zvb2Jhci9wb3N0cy90ZXh0LzEvMicpO1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvP3Jlc3Rfcm91dGU9L3dwL3YyL3Bvc3RzLyR7cGFyYW1zLmlkfWApO1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2cocG9zdCk7XG5cbi8vICAgICByZXR1cm4ge3Byb3BzOiB7cG9zdH0sIG5vdEZvdW5kOiBwb3N0Py5kYXRhPy5zdGF0dXMgPT09IDQwNCB9XG5cblxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBQb3N0O1xuXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gcmVuZGVyaW5nKCkge1xuICAgIHJldHVybiA8bWFpbj4yMjwvbWFpbj5cbn1cblxuY29uc3QgUmVzdGZ1bCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zdCB7IHRleHQsIG51bTEsIG51bTIgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAvLyBjb25zdCB7IHJlc3QgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0WzBdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0WzFdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0WzJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0WzBdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0WzFdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN0WzJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0LCBudW0xLCBudW0yKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0IHRyaWdnZXJlZGApO1xuICAgICAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICBcbiAgICAgICAgLy8gY29kZXMgdXNpbmcgcm91dGVyLnF1ZXJ5XG4gICAgICAgIGNvbnN0IHsgcmVzdCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN0WzBdKVxuXG4gICAgICAgIC8vIHJlbmRlcmluZygpO1xuXG4gICAgICAgIC8vIHJldHVybiAnYWEnO1xuICAgIFxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gICAgaWYgKHJvdXRlci5pc1JlYWR5ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiA8bWFpbj5hYTwvbWFpbj5cbiAgICB9XG5cbiAgICBpZiAocm91dGVyLmlzUmVhZHkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiA8bWFpbj5iYjwvbWFpbj5cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gPGFydGljbGU+XG4gICAgLy8gICAgIHsvKiA8aDE+e3Bvc3Q/LnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4gICAgLy8gICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Py5jb250ZW50LnJlbmRlcmVkIH19PjwvZGl2PiAqL31cbiAgICAvLyAgICAgey8qIDxoMT57cmVxdWVzdGVkRGF0YT8udXJsLnRleHR9PC9oMT4gKi99XG4gICAgLy8gICAgIDxoMT5maXJlPC9oMT5cbiAgICAvLyAgICAgPHA+e3JvdXRlci5xdWVyeS5yZXN0fTwvcD5cbiAgICAvLyA8L2FydGljbGU+XG59XG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzL3RleHQvMS8yJyk7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8/cmVzdF9yb3V0ZT0vZm9vYmFyL3Bvc3RzLyR7cGFyYW1zLnRleHR9LyR7cGFyYW1zLm51bTF9LyR7cGFyYW1zLm51bTJ9YCk7XG4vLyAgICAgY29uc3QgcmVxdWVzdGVkRGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbi8vICAgICByZXR1cm4ge3Byb3BzOiB7cmVxdWVzdGVkRGF0YX0sIG5vdEZvdW5kOiByZXF1ZXN0ZWREYXRhPy5kYXRhPy5zdGF0dXMgPT09IDQwNCB9XG5cblxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0ZnVsOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJyZW5kZXJpbmciLCJtYWluIiwiUmVzdGZ1bCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJpc1JlYWR5IiwicmVzdCIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...rest].tsx\n");

/***/ })

});