"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Loader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Loader = function Loader(_ref) {
  var text = _ref.text,
    value = _ref.value;
  // Rendering //

  var classes = ['loader'];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader__content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader__text"
  }, text), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader__bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader__bar-inner",
    style: {
      width: "".concat(Math.floor(Math.min(100, Math.max(0, value))), "%")
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader__bar-value"
  }, value, "%"))));
};
exports.Loader = Loader;