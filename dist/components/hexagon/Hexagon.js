"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hexagon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCommons = require("@sol.ac/react-commons");
require("./Hexagon.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//

// #region Declaration

// #endregion

// #region Component
var Hexagon = exports.Hexagon = function Hexagon(_ref) {
  var className = _ref.className,
    children = _ref.children;
  // #region > Hooks
  var _useClasses = (0, _reactCommons.useClasses)(['ap-heaxagon', className]),
    classes = _useClasses.classes;
  // #endregion

  // #region > Render

  var borderColor = 'red';
  var borderWidth = '2px';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ap-hexagon__layer ap-hexagon__layer--border",
    style: {
      backgroundColor: borderColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ap-hexagon__layer ap-hexagon__layer--content",
    style: {
      top: borderWidth,
      bottom: borderWidth,
      right: borderWidth,
      left: borderWidth
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ap-hexagon__layer ap-hexagon__layer--background ",
    style: {
      top: "-".concat(borderWidth),
      bottom: "-".concat(borderWidth),
      right: "-".concat(borderWidth),
      left: "-".concat(borderWidth)
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "ap-hexagon__layer--background-image",
    draggable: "false"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ap-hexagon__layer ap-hexagon__layer-elements",
    style: {
      top: "-".concat(borderWidth),
      bottom: "-".concat(borderWidth),
      right: "-".concat(borderWidth),
      left: "-".concat(borderWidth)
    }
  }, children))));
};
// #endregion