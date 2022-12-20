"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridTiles = void 0;
var _react = _interopRequireDefault(require("react"));
var _GridContainer = require("./GridContainer");
require("./GridTiles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Components

var GridTiles = function GridTiles(_ref) {
  var className = _ref.className,
    height = _ref.height,
    width = _ref.width,
    children = _ref.children;
  // Rendering //

  var maxChildren = height * width;
  var renderChildren = function renderChildren() {
    if (Array.isArray(children)) {
      var result = [];
      for (var i = 0; i < maxChildren && i < children.length; i++) {
        result.push(renderChild(children[i], i + 1));
      }
      return result;
    }
    return renderChild(children);
  };
  var renderChild = function renderChild(element, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid-tiles-item",
      key: index ? "tile-".concat(index) : undefined,
      style: {
        width: "".concat(100 / width, "%")
      }
    }, element);
  };
  var classes = ['grid-tiles'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement(_GridContainer.GridContainer, {
    className: classes.join(' '),
    height: height,
    width: width
  }, renderChildren());
};
exports.GridTiles = GridTiles;