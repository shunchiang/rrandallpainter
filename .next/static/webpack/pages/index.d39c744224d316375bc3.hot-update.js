webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Jumbo.js":
/*!*****************************!*\
  !*** ./components/Jumbo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Jumbo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/Jumbo.module.scss */ \"./sass/Jumbo.module.scss\");\n/* harmony import */ var _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/kitchen1.png */ \"./images/kitchen1.png\");\n/* harmony import */ var _images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/desktopKitchen.jpg */ \"./images/desktopKitchen.jpg\");\n/* harmony import */ var _images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useWindowSize */ \"./utils/useWindowSize.js\");\nvar _jsxFileName = \"/Users/shunchiang/Documents/projects/rrandall/components/Jumbo.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Jumbo() {\n  _s();\n\n  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default.a),\n      mainPhoto = _useState[0],\n      setMainPhoto = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (size.width > 850) {\n      setMainPhoto(_images_desktopKitchen_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);\n    } else {\n      setMainPhoto(_images_kitchen1_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n    }\n  }, [size.width]);\n  return __jsx(\"div\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboTron,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heroImage,\n    src: mainPhoto,\n    alt: \"painting sample\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jumboText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Premium craftsmanship\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }), \"Competitive value\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), \"Maximum satisfaction\"), __jsx(\"button\", {\n    className: _sass_Jumbo_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ctaBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Get Quote\")));\n}\n\n_s(Jumbo, \"OCaXXYP7OPO+MsNXPula+71gc1Y=\", false, function () {\n  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Jumbo;\n\nvar _c;\n\n$RefreshReg$(_c, \"Jumbo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9KdW1iby5qcz9hYjU5Il0sIm5hbWVzIjpbIkp1bWJvIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImtpdGNoZW5QaG90byIsIm1haW5QaG90byIsInNldE1haW5QaG90byIsInVzZUVmZmVjdCIsIndpZHRoIiwiZGVza3RvcEtpdGNoZW4iLCJzdHlsZXMiLCJqdW1ib1Ryb24iLCJoZXJvSW1hZ2UiLCJqdW1ib0NvbnRlbnQiLCJqdW1ib1RleHQiLCJjdGFCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLElBQUksR0FBR0Msb0VBQWEsRUFBMUI7O0FBRDhCLGtCQUVJQyxzREFBUSxDQUFDQywyREFBRCxDQUZaO0FBQUEsTUFFdkJDLFNBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFJOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlOLElBQUksQ0FBQ08sS0FBTCxHQUFhLEdBQWpCLEVBQXNCO0FBQ3BCRixrQkFBWSxDQUFDRyxpRUFBRCxDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILGtCQUFZLENBQUNGLDJEQUFELENBQVo7QUFDRDtBQUNGLEdBTlEsRUFNTixDQUFDSCxJQUFJLENBQUNPLEtBQU4sQ0FOTSxDQUFUO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxTQUF2QjtBQUFrQyxPQUFHLEVBQUVQLFNBQXZDO0FBQWtELE9BQUcsRUFBQyxpQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVLLDhEQUFNLENBQUNHLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsdUJBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLHlCQURGLEVBUUU7QUFBUSxhQUFTLEVBQUVKLDhEQUFNLENBQUNLLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsQ0FGRixDQURGO0FBZUQ7O0dBM0J1QmYsSztVQUNURSw0RDs7O0tBRFNGLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0p1bWJvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3Nhc3MvSnVtYm8ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBraXRjaGVuUGhvdG8gZnJvbSBcIi4uL2ltYWdlcy9raXRjaGVuMS5wbmdcIjtcbmltcG9ydCBkZXNrdG9wS2l0Y2hlbiBmcm9tIFwiLi4vaW1hZ2VzL2Rlc2t0b3BLaXRjaGVuLmpwZ1wiO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3V0aWxzL3VzZVdpbmRvd1NpemVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSnVtYm8oKSB7XG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gIGNvbnN0IFttYWluUGhvdG8sIHNldE1haW5QaG90b10gPSB1c2VTdGF0ZShraXRjaGVuUGhvdG8pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpemUud2lkdGggPiA4NTApIHtcbiAgICAgIHNldE1haW5QaG90byhkZXNrdG9wS2l0Y2hlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1haW5QaG90byhraXRjaGVuUGhvdG8pO1xuICAgIH1cbiAgfSwgW3NpemUud2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuanVtYm9Ucm9ufT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlfSBzcmM9e21haW5QaG90b30gYWx0PVwicGFpbnRpbmcgc2FtcGxlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuanVtYm9Db250ZW50fT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuanVtYm9UZXh0fT5cbiAgICAgICAgICBQcmVtaXVtIGNyYWZ0c21hbnNoaXBcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBDb21wZXRpdGl2ZSB2YWx1ZVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIE1heGltdW0gc2F0aXNmYWN0aW9uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jdGFCdG59PkdldCBRdW90ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Jumbo.js\n");

/***/ })

})