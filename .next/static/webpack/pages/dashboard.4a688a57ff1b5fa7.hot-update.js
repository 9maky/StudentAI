/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/Components/dashboard/todo.tsx":
/*!*******************************************!*\
  !*** ./src/Components/dashboard/todo.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/dashboard/to_do.module.scss */ \"./src/styles/dashboard/to_do.module.scss\");\n/* harmony import */ var _styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TodoComps_to_do_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoComps/to_do_form */ \"./src/Components/dashboard/TodoComps/to_do_form.tsx\");\n/* harmony import */ var _TodoComps_to_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoComps/to_do */ \"./src/Components/dashboard/TodoComps/to_do.tsx\");\n/* harmony import */ var _Data_todo_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Data/todo_data */ \"./src/Data/todo_data.tsx\");\n/* harmony import */ var _Data_todo_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Data_todo_data__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\n\n\n\n\n\nvar Todos = function() {\n    var addTask = function(title) {\n        var newTasks = [\n            {\n                title: title\n            }\n        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Data_todo_data__WEBPACK_IMPORTED_MODULE_4__.tasks));\n        (0,_Data_todo_data__WEBPACK_IMPORTED_MODULE_4__.setTasks)(newTasks);\n    };\n    var removeTask = function(index) {\n        var newTasks = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Data_todo_data__WEBPACK_IMPORTED_MODULE_4__.tasks);\n        newTasks.splice(index, 1);\n        (0,_Data_todo_data__WEBPACK_IMPORTED_MODULE_4__.setTasks)(newTasks);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_6___default().todos_cont),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_6___default().todo_scroll),\n                children: _Data_todo_data__WEBPACK_IMPORTED_MODULE_4__.tasks.map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoComps_to_do__WEBPACK_IMPORTED_MODULE_3__.Todo, {\n                        task: task,\n                        index: index,\n                        removeTask: removeTask\n                    }, index + task.title, false, {\n                        fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_dashboard_to_do_module_scss__WEBPACK_IMPORTED_MODULE_6___default().to_do_form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoComps_to_do_form__WEBPACK_IMPORTED_MODULE_2__.TodoForm, {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\makyp\\\\OneDrive\\\\Radna površina\\\\StudentGPT\\\\src\\\\Components\\\\dashboard\\\\todo.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9kYXNoYm9hcmQvdG9kby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF3QztBQUNzQjtBQUNaO0FBRVQ7QUFDYztBQUd2RCxJQUFNTSxLQUFLLEdBQUcsV0FBTTtJQUdsQixJQUFNQyxPQUFPLEdBQUcsU0FBQ0MsS0FBYSxFQUFLO1FBQ2pDLElBQU1DLFFBQVEsR0FBb0I7WUFBQztnQkFBRUQsS0FBSyxFQUFFQSxLQUFLO2FBQUU7U0FBVyxDQUE1QixNQUE0QixDQUFULHFGQUFHSixrREFBSyxDQUFMQSxDQUFNO1FBQzlEQyx5REFBUSxDQUFDSSxRQUFRLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQUNDLEtBQWEsRUFBSztRQUNwQyxJQUFNRixRQUFRLEdBQXFCLHFGQUFHTCxrREFBSyxDQUFMQTtRQUN0Q0ssUUFBUSxDQUFDRyxNQUFNLENBQUNELEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQk4seURBQVEsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBRWIsdUZBQWlCOzswQkFDL0IsOERBQUNZLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWIsd0ZBQWtCOzBCQUMvQkcsc0RBQVMsQ0FBQyxTQUFDYyxJQUFJLEVBQUVQLEtBQUs7eUNBQ3JCLDhEQUFDUixrREFBSTt3QkFDSGUsSUFBSSxFQUFFQSxJQUFJO3dCQUNWUCxLQUFLLEVBQUVBLEtBQUs7d0JBQ1pELFVBQVUsRUFBRUEsVUFBVTt1QkFDakJDLEtBQUssR0FBR08sSUFBSSxDQUFDVixLQUFLOzs7OzZCQUN2QjtpQkFDSCxDQUFDOzs7OztxQkFDRTswQkFDTiw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFFYix1RkFBaUI7MEJBQy9CLDRFQUFDQywyREFBUTtvQkFBQ0ssT0FBTyxFQUFFQSxPQUFPOzs7Ozt5QkFBSTs7Ozs7cUJBQzFCOzs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztBQS9CS0QsS0FBQUEsS0FBSztBQWdDWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL2Rhc2hib2FyZC90b2RvLnRzeD81ODZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZGFzaGJvYXJkL3RvX2RvLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IFRvZG9Gb3JtIH0gZnJvbSBcIi4vVG9kb0NvbXBzL3RvX2RvX2Zvcm1cIjtcclxuaW1wb3J0IHsgdG9fZG9fY29udGVudCB9IGZyb20gXCIuLi8uLi90eXBlcy90b19kb190eXBlc1wiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vVG9kb0NvbXBzL3RvX2RvXCI7XHJcbmltcG9ydCB7IHRhc2tzLCBzZXRUYXNrcyB9IGZyb20gXCIuLi8uLi9EYXRhL3RvZG9fZGF0YVwiO1xyXG5cclxuXHJcbmNvbnN0IFRvZG9zID0gKCkgPT4ge1xyXG4gIFxyXG5cclxuICBjb25zdCBhZGRUYXNrID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG5ld1Rhc2tzOiB0b19kb19jb250ZW50W10gPSBbeyB0aXRsZTogdGl0bGUgfSwgLi4udGFza3NdO1xyXG4gICAgc2V0VGFza3MobmV3VGFza3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFza3M6IHRvX2RvX2NvbnRlbnRbXSA9IFsuLi50YXNrc107XHJcbiAgICBuZXdUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0VGFza3MobmV3VGFza3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9zX2NvbnR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9fc2Nyb2xsfT5cclxuICAgICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFRvZG9cclxuICAgICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICByZW1vdmVUYXNrPXtyZW1vdmVUYXNrfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgdGFzay50aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvX2RvX2Zvcm19PlxyXG4gICAgICAgIDxUb2RvRm9ybSBhZGRUYXNrPXthZGRUYXNrfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJUb2RvRm9ybSIsIlRvZG8iLCJ0YXNrcyIsInNldFRhc2tzIiwiVG9kb3MiLCJhZGRUYXNrIiwidGl0bGUiLCJuZXdUYXNrcyIsInJlbW92ZVRhc2siLCJpbmRleCIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9zX2NvbnQiLCJ0b2RvX3Njcm9sbCIsIm1hcCIsInRhc2siLCJ0b19kb19mb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/dashboard/todo.tsx\n"));

/***/ }),

/***/ "./src/Data/todo_data.tsx":
/*!********************************!*\
  !*** ./src/Data/todo_data.tsx ***!
  \********************************/
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


/***/ })

});