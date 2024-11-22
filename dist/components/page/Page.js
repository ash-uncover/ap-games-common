"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Page.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Style

var Page = exports.Page = function Page(_ref) {
  var children = _ref.children;
  // Hooks //

  // Events //

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page"
  }, children);
};