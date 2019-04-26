webpackHotUpdate("static/development/pages/hello.js",{

/***/ "./pages/hello.js":
/*!************************!*\
  !*** ./pages/hello.js ***!
  \************************/
/*! exports provided: withMsg, withHello, Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMsg", function() { return withMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHello", function() { return withHello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/akira/Project/HoCs-sample/pages/hello.js";

var withMsg = function withMsg(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      msg: "hello",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }));
  };
};
var withHello = function withHello(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      hello: "msg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  };
};
var Component = function Component(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "".concat(props.msg, " ").concat(props.hello));
};
/* harmony default export */ __webpack_exports__["default"] = (withMsg(withHello(Component)));

/***/ })

})
//# sourceMappingURL=hello.js.02b99a00f43478ec1ebe.hot-update.js.map