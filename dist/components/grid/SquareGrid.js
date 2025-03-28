"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SquareGrid = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./SquareGrid.css");
var _this = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SquareGrid = exports.SquareGrid = function SquareGrid(_ref) {
  var children = _ref.children;
  // Hooks //

  var container = (0, _react.useRef)(null);
  var innerContainer = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    lines = _useState4[0],
    setLines = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    lineItems = _useState6[0],
    setLineItems = _useState6[1];
  (0, _react.useEffect)(function () {
    updateSize();
  }, [children]);
  (0, _react.useEffect)(function () {
    var update = updateSize.bind(_this);
    window.addEventListener('resize', update);
    return function () {
      return window.removeEventListener('resize', update);
    };
  }, []);
  var updateSize = function updateSize() {
    if (container.current.clientWidth > container.current.clientHeight) {
      container.current.classList.add('square-grid-h');
      container.current.classList.remove('square-grid-v');
    } else {
      container.current.classList.remove('square-grid-h');
      container.current.classList.add('square-grid-v');
    }
    var containerRatio = innerContainer.current.clientWidth / innerContainer.current.clientHeight;
    var nbItems = children.length;
    var lines = 1;
    var currentRatio = nbItems / lines / lines;
    while (currentRatio > containerRatio) {
      lines += 1;
      currentRatio = nbItems / lines / lines;
    }
    setLines(lines);
    setLineItems(Math.ceil(nbItems / lines));
    setShow(true);
  };

  // Events //

  // Rendering //

  var renderBody = function renderBody() {
    var result = [];
    for (var rowIndex = 0; rowIndex < lines; rowIndex++) {
      result.push(renderRow(rowIndex));
    }
    return /*#__PURE__*/_react["default"].createElement("tbody", {
      className: "square-grid-table-body"
    }, result);
  };
  var renderRow = function renderRow(rowIndex) {
    var result = [];
    for (var itemIndex = 0; itemIndex < lineItems && lineItems * rowIndex + itemIndex < children.length; itemIndex++) {
      result.push(renderCell(rowIndex, itemIndex, children[lineItems * rowIndex + itemIndex]));
    }
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: "row-".concat(rowIndex),
      className: "square-grid-table-row"
    }, result);
  };
  var renderCell = function renderCell(rowIndex, itemIndex, node) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      key: "item-".concat(rowIndex, "-").concat(itemIndex),
      className: "square-grid-table-cell"
    }, node);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: container,
    className: "square-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: innerContainer,
    className: "square-grid-inner"
  }, show ? /*#__PURE__*/_react["default"].createElement("table", {
    className: "square-grid-table"
  }, renderBody()) : null));
};