"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMenu = void 0;
var _react = _interopRequireDefault(require("react"));
require("./PageMenu.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Style

var PageMenu = function PageMenu(_ref) {
  var children = _ref.children;
  // Hooks //

  // Events //

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-menu"
  }, children);
};
exports.PageMenu = PageMenu;