"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Panel.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Styles

var Panel = function Panel(_ref) {
  var className = _ref.className,
    title = _ref.title,
    children = _ref.children;
  // Hooks //

  // Events //

  // Rendering //

  var classes = ['panel'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, title ? /*#__PURE__*/_react["default"].createElement("h3", null, title) : null, children);
};
exports.Panel = Panel;