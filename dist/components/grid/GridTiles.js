"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridTiles = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GridContainer = require("./GridContainer");
require("./GridTiles.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GridTiles = function GridTiles(_ref) {
  var className = _ref.className,
    style = _ref.style,
    height = _ref.height,
    width = _ref.width,
    children = _ref.children;
  // Hooks //

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    ready = _useState2[0],
    setReady = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    invert = _useState4[0],
    setInvert = _useState4[1];

  // Events //

  var handleSizeInvert = function handleSizeInvert(invert) {
    setReady(true);
    setInvert(invert);
  };

  // Rendering //

  var renderGrid = function renderGrid() {
    var result = [];
    var nbRows = invert ? width : height;
    for (var indexRow = 0; indexRow < nbRows; indexRow++) {
      result.push(renderGridRow(indexRow));
    }
    return result;
  };
  var renderGridRow = function renderGridRow(indexRow) {
    var result = [];
    var nbCols = invert ? height : width;
    for (var indexCol = 0; indexCol < nbCols; indexCol++) {
      result.push(renderGridCell(indexRow, indexCol));
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid-tiles-row",
      key: "grid-tiles-row-".concat(indexRow)
    }, result);
  };
  var renderGridCell = function renderGridCell(indexRow, indexCol) {
    var element = null;
    var indexCell = indexRow * (invert ? height : width) + indexCol;
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
    style: style,
    height: height,
    width: width,
    onSizeInvert: handleSizeInvert
  }, ready ? /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, renderGrid()) : null);
};
exports.GridTiles = GridTiles;