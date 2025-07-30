"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Panel.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CSS

var Panel = exports.Panel = function Panel(_ref) {
  var className = _ref.className,
    title = _ref.title,
    children = _ref.children;
  // #region > Hooks
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  var classes = ['panel'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, title ? /*#__PURE__*/_react["default"].createElement("h3", null, title) : null, children);
  // #endregion
};