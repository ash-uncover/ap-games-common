"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _Panel = require("./Panel");
require("./PanelButton.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Components

// Styles

var PanelButton = function PanelButton(_ref) {
  var className = _ref.className,
    title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick;
  // Hooks //

  // Events //

  // Rendering //

  var classes = ['panel-button__button'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement(_Panel.Panel, {
    className: "panel-button"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: classes.join(' '),
    title: title,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("h3", null, children)));
};
exports.PanelButton = PanelButton;