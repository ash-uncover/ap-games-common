"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Panel.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Panel = function Panel(_ref) {
  var children = _ref.children,
    top = _ref.top,
    left = _ref.left,
    bottom = _ref.bottom,
    right = _ref.right,
    width = _ref.width,
    height = _ref.height;
  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel",
    style: {
      position: 'absolute',
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    }
  }, children);
};
var _default = Panel;
exports["default"] = _default;