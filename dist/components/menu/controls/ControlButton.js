"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlButton = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ControlButton.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ControlButton = exports.ControlButton = function ControlButton(_ref) {
  var className = _ref.className,
    disabled = _ref.disabled,
    title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick;
  // Hooks //

  // Events //

  var handleClick = function handleClick() {};

  // Rendering //

  var classes = ['control-button'];
  if (className) {
    classes.push(className);
  }
  if (disabled) {
    classes.push('control-button--disabled');
  }
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: classes.join(' '),
    disabled: disabled,
    title: title,
    onClick: onClick
  }, children);
};