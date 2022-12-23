"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Page.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Style

var Page = function Page(_ref) {
  var children = _ref.children;
  // Hooks //

  // Events //

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page"
  }, children);
};
exports.Page = Page;