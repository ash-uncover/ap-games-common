"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameApp = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCommons = require("@sol.ac/react-commons");
var _GameSettingsProvider = require("./GameSettingsProvider");
require("./GameApp.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } //
// CSS
// #region Declaration

// #endregion

// #region Component
var GameApp = exports.GameApp = function GameApp(_ref) {
  var className = _ref.className,
    lang = _ref.lang,
    name = _ref.name,
    children = _ref.children;
  // #region > Render
  return /*#__PURE__*/_react["default"].createElement(_GameSettingsProvider.GameSettingsProvider, {
    name: name,
    lang: lang
  }, /*#__PURE__*/_react["default"].createElement(GameAppInner, {
    className: className
  }, children));
  // #endregion
};
// #endregion

var GameAppInner = function GameAppInner(_ref2) {
  var className = _ref2.className,
    children = _ref2.children;
  // #region > Hooks
  var settingsContext = _react["default"].useContext(_GameSettingsProvider.GameSettingsContext);
  var _React$useState = _react["default"].useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    style = _React$useState2[0],
    setStyle = _React$useState2[1];
  _react["default"].useEffect(function () {
    var brightness = settingsContext.brightness,
      contrast = settingsContext.contrast;
    setStyle({
      filter: "brightness(".concat(brightness, "%) contrast(").concat(contrast, "%)")
    });
  }, [settingsContext]);
  var _useClasses = (0, _reactCommons.useClasses)(['alpha-game-app', className]),
    classes = _useClasses.classes;
  // #endregion

  // #region > Event
  // #endregion

  // #region > Render
  return /*#__PURE__*/_react["default"].createElement(_reactCommons.Shell, {
    className: classes,
    style: style
  }, children);
  // #endregion
};
// #endregion