"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSettingsProvider = exports.GameSettingsDispatchContext = exports.GameSettingsContext = exports.GameSettingsActions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GameSettingsModel = require("./GameSettingsModel");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// #region Context
var GameSettingsContext = exports.GameSettingsContext = /*#__PURE__*/(0, _react.createContext)(_objectSpread({}, (0, _GameSettingsModel.getDefaultGameSettings)()));
var GameSettingsDispatchContext = exports.GameSettingsDispatchContext = /*#__PURE__*/(0, _react.createContext)(function () {});
// #endregion

// #region Storage
var storeContext = function storeContext(name, settings) {
  localStorage.setItem("".concat(name, "-settings"), JSON.stringify(settings));
};
var loadContext = function loadContext(name) {
  return JSON.parse(localStorage.getItem("".concat(name, "-settings")) || '{}');
};
// #endregion

// #region Provider

var GameSettingsProvider = exports.GameSettingsProvider = function GameSettingsProvider(_ref) {
  var name = _ref.name,
    children = _ref.children;
  // #region > Hooks
  var _useReducer = (0, _react.useReducer)(settingsReducer, _objectSpread(_objectSpread({}, (0, _GameSettingsModel.getDefaultGameSettings)()), loadContext(name))),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    settings = _useReducer2[0],
    dispatch = _useReducer2[1];
  (0, _react.useEffect)(function () {
    storeContext(name, settings);
  }, [settings]);
  // #endregion

  // #region > Rendering
  return /*#__PURE__*/_react["default"].createElement(GameSettingsContext.Provider, {
    value: settings
  }, /*#__PURE__*/_react["default"].createElement(GameSettingsDispatchContext.Provider, {
    value: dispatch
  }, children));
  // #endregion
};
// #endregion

// #region Reducer
var SET_BRIGHTNESS = 'SET_BRIGHTNESS';
function setBrightness(brightness) {
  return {
    type: SET_BRIGHTNESS,
    brightness: brightness
  };
}
var SET_CONTRAST = 'SET_CONTRAST';
function setContrast(contrast) {
  return {
    type: SET_CONTRAST,
    contrast: contrast
  };
}
var GameSettingsActions = exports.GameSettingsActions = {
  setBrightness: setBrightness,
  setContrast: setContrast
};
function settingsReducer(settings, action) {
  switch (action.type) {
    case SET_BRIGHTNESS:
      {
        return _objectSpread(_objectSpread({}, settings), {}, {
          brightness: action.brightness
        });
      }
    case SET_CONTRAST:
      {
        return _objectSpread(_objectSpread({}, settings), {}, {
          contrast: action.contrast
        });
      }
    default:
      {
        throw Error('Unknown action: ' + action.type);
      }
  }
}
// #endregion