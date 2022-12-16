"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Hexagon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Hexagon = function Hexagon(_ref) {
  var children = _ref.children;
  // Rendering //

  var borderColor = 'red';
  var borderWidth = '2px';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "hexagon"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer layer-border",
    style: {
      backgroundColor: borderColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer layer-content",
    style: {
      top: borderWidth,
      bottom: borderWidth,
      right: borderWidth,
      left: borderWidth
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer layer-background ",
    style: {
      top: "-".concat(borderWidth),
      bottom: "-".concat(borderWidth),
      right: "-".concat(borderWidth),
      left: "-".concat(borderWidth)
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "image",
    draggable: "false"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer layer-elements",
    style: {
      top: "-".concat(borderWidth),
      bottom: "-".concat(borderWidth),
      right: "-".concat(borderWidth),
      left: "-".concat(borderWidth)
    }
  }, children))));
};
var _default = Hexagon;
exports["default"] = _default;