"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlButton = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ControlButton.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ControlButton = function ControlButton(_ref) {
  var title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick;
  // Hooks //

  // Events //

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "control-button",
    title: title,
    onClick: onClick
  }, children);
};
exports.ControlButton = ControlButton;