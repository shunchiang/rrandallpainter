webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_Login_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/Login.module.scss */ \"./sass/Login.module.scss\");\n/* harmony import */ var _sass_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_Login_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/pages/login.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  }),\n      formState = _useState[0],\n      setFormState = _useState[1];\n\n  var onInputChange = function onInputChange(event) {\n    var newFormData = _objectSpread(_objectSpread({}, formState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value));\n\n    setFormState(newFormData);\n  };\n\n  var onSubmit = function onSubmit(event) {\n    event.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"https://localhost:3080/login\", formState).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      return console.log(err.res);\n    });\n    console.log(formState);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: _sass_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loginContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _sass_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loginBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Login\"), __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    value: formState.username,\n    placeholder: \"username\",\n    onChange: onInputChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"password\",\n    value: formState.password,\n    placeholder: \"password\",\n    onChange: onInputChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Submit\")))));\n}\n\n_s(Login, \"T4d1XJY5a/nWhzm/US1ayZVq2Eo=\");\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5ld0Zvcm1EYXRhIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3R5bGUiLCJsb2dpbkNvbnRhaW5lciIsImxvZ2luQm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUM7QUFBRUMsWUFBUSxFQUFFLEVBQVo7QUFBZ0JDLFlBQVEsRUFBRTtBQUExQixHQUFELENBRFo7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxZQURZOztBQUU5QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQixRQUFNQyxXQUFXLG1DQUNaSixTQURZLHFHQUVkRyxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFGQyxFQUVNSCxLQUFLLENBQUNFLE1BQU4sQ0FBYUUsS0FGbkIsRUFBakI7O0FBSUFOLGdCQUFZLENBQUNHLFdBQUQsQ0FBWjtBQUNELEdBTkQ7O0FBT0EsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsS0FBRCxFQUFXO0FBQzFCQSxTQUFLLENBQUNNLGNBQU47QUFDQUMsZ0RBQUssQ0FDRkMsSUFESCxDQUNRLDhCQURSLEVBQ3dDWCxTQUR4QyxFQUVHWSxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNHLEdBQUQ7QUFBQSxhQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBRyxDQUFDSCxHQUFoQixDQUFUO0FBQUEsS0FMVDtBQU1BQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsU0FBWjtBQUNELEdBVEQ7O0FBVUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRWlCLDhEQUFLLENBQUNDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsOERBQUssQ0FBQ0UsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQU0sWUFBUSxFQUFFWCxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsU0FBSyxFQUFFUixTQUFTLENBQUNGLFFBSG5CO0FBSUUsZUFBVyxFQUFDLFVBSmQ7QUFLRSxZQUFRLEVBQUVJLGFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsU0FBSyxFQUFFRixTQUFTLENBQUNELFFBSG5CO0FBSUUsZUFBVyxFQUFDLFVBSmQ7QUFLRSxZQUFRLEVBQUVHLGFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLENBRkYsQ0FERixDQURGLENBREY7QUEwQkQ7O0dBN0N1Qk4sSzs7S0FBQUEsSyIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zYXNzL0xvZ2luLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmV3Rm9ybURhdGEgPSB7XG4gICAgICAuLi5mb3JtU3RhdGUsXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfTtcbiAgICBzZXRGb3JtU3RhdGUobmV3Rm9ybURhdGEpO1xuICB9O1xuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzA4MC9sb2dpblwiLCBmb3JtU3RhdGUpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5yZXMpKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtU3RhdGUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW5Db250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW5Cb3h9PlxuICAgICAgICAgIDxwPkxvZ2luPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})