"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Input.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CSS

var Input = exports.Input = function Input(_ref) {
  var className = _ref.className,
    disabled = _ref.disabled,
    value = _ref.value,
    onChange = _ref.onChange;
  // #region > Hooks
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  var classes = ['menu-control input'];
  if (className) {
    classes.push(className);
  }
  if (disabled) {
    classes.push('input--disabled');
  }
  return /*#__PURE__*/_react["default"].createElement("input", {
    className: classes.join(' '),
    disabled: disabled
  });
  // #endregion
};