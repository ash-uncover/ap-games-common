"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridTiles = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GridContainer = require("./GridContainer");
require("./GridTiles.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // Components
var GridTiles = exports.GridTiles = function GridTiles(_ref) {
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