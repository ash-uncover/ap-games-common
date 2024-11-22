"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameLayout = void 0;
var _react = _interopRequireDefault(require("react"));
require("./GameLayout.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var GameLayout = exports.GameLayout = function GameLayout(_ref) {
  var className = _ref.className,
    header = _ref.header,
    content = _ref.content,
    footer = _ref.footer;
  // Hooks //

  // Rendering //

  var classes = ['game-layout'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, header ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "game-layout__header"
  }, header) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "game-layout__content"
  }, content), footer ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "game-layout__footer"
  }, footer) : null);
};