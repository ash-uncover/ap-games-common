"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _ = require(".");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // Components
var App = exports.App = function App() {
  // Hooks //

  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    selectEnabled = _useState2[0],
    setSelectDisabled = _useState2[1];
  var handleSelectDisabledChange = function handleSelectDisabledChange(v) {
    setSelectDisabled(v);
  };
  var _useState3 = (0, _react.useState)('1'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectValue = _useState4[0],
    setSelectValue = _useState4[1];
  var handleSelectChange = function handleSelectChange(v) {
    setSelectValue(v);
  };
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    sliderEnabled = _useState6[0],
    setSliderDisabled = _useState6[1];
  var handleSliderDisabledChange = function handleSliderDisabledChange(v) {
    setSliderDisabled(v);
  };
  var _useState7 = (0, _react.useState)(50),
    _useState8 = _slicedToArray(_useState7, 2),
    sliderValue = _useState8[0],
    setSliderValue = _useState8[1];
  var handleValueChange = function handleValueChange(v) {
    setSliderValue(v);
  };

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement(_.Page, null, /*#__PURE__*/_react["default"].createElement(_.PageMenu, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
    title: "Home",
    items: [{
      icon: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fas', 'gamepad']
      }),
      selected: true,
      text: 'Play',
      onClick: function onClick() {}
    }, {
      icon: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fas', 'gear']
      }),
      text: 'Options',
      onClick: function onClick() {}
    }, {
      icon: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fas', 'gifts']
      }),
      text: 'Credits',
      onClick: function onClick() {}
    }, {
      icon: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fas', 'right-from-bracket']
      }),
      text: 'Exit',
      onClick: function onClick() {}
    }]
  })), /*#__PURE__*/_react["default"].createElement(_.PageContent, null, /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Big Title")), /*#__PURE__*/_react["default"].createElement(_.Panel, {
    title: "Grid"
  }, /*#__PURE__*/_react["default"].createElement(_.GridTiles, {
    style: {
      width: '100%',
      height: '300px'
    },
    width: 4,
    height: 2
  }, /*#__PURE__*/_react["default"].createElement("div", null, "1"), /*#__PURE__*/_react["default"].createElement("div", null, "2"), /*#__PURE__*/_react["default"].createElement("div", null, "3"), /*#__PURE__*/_react["default"].createElement("div", null, "4"), /*#__PURE__*/_react["default"].createElement("div", null, "5"), /*#__PURE__*/_react["default"].createElement("div", null, "6"), /*#__PURE__*/_react["default"].createElement("div", null, "7"), /*#__PURE__*/_react["default"].createElement("div", null, "8"))), /*#__PURE__*/_react["default"].createElement(_.Panel, {
    title: "Title"
  }, /*#__PURE__*/_react["default"].createElement(_.Switch, {
    label: "Enable select",
    checked: selectEnabled,
    onChange: handleSelectDisabledChange
  }), /*#__PURE__*/_react["default"].createElement(_.Select, {
    disabled: !selectEnabled,
    value: selectValue,
    values: [{
      id: '1',
      text: 'Value 1'
    }, {
      id: '2',
      text: 'Value 2'
    }, {
      id: '3',
      text: 'Value 3'
    }],
    onChange: handleSelectChange
  }), /*#__PURE__*/_react["default"].createElement(_.Switch, {
    label: "Enable slider",
    checked: sliderEnabled,
    onChange: handleSliderDisabledChange
  }), /*#__PURE__*/_react["default"].createElement(_.Slider, {
    disabled: !sliderEnabled,
    label: "Slider",
    min: 50,
    max: 100,
    value: sliderValue,
    onChange: handleValueChange
  }))));
};