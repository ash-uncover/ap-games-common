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

  var renderGrid = function renderGrid() {
    var result = [];
    for (var indexRow = 0; indexRow < height; indexRow++) {
      result.push(renderGridRow(indexRow));
    }
    return result;
  };
  var renderGridRow = function renderGridRow(indexRow) {
    var result = [];
    for (var indexCol = 0; indexCol < width; indexCol++) {
      result.push(renderGridCell(indexRow, indexCol));
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid-tiles-row",
      key: "grid-tiles-row-".concat(indexRow)
    }, result);
  };
  var renderGridCell = function renderGridCell(indexRow, indexCol) {
    var element = null;
    var indexCell = indexRow * width + indexCol;
    if (indexCell < children.length) {
      element = children[indexCell];
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid-tiles-row-cell",
      key: "grid-cell-".concat(indexRow, "-").concat(indexCol)
    }, element);
  };
  var classes = ['grid-tiles'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement(_GridContainer.GridContainer, {
    height: height,
    width: width
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, renderGrid()));
};
exports.GridTiles = GridTiles;