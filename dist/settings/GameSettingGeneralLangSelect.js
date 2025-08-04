"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSettingGeneralLangSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCommons = require("@sol.ac/react-commons");
var _GameSettingsProvider = require("./GameSettingsProvider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } //
// #region Declaration

// #endregion

// #region Component
var GameSettingGeneralLangSelect = exports.GameSettingGeneralLangSelect = function GameSettingGeneralLangSelect(_ref) {
  var className = _ref.className,
    values = _ref.values;
  // #region > Hooks
  var settingsContext = _react["default"].useContext(_GameSettingsProvider.GameSettingsContext);
  var dispatch = _react["default"].useContext(_GameSettingsProvider.GameSettingsDispatchContext);
  var _React$useState = _react["default"].useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedLang = _React$useState2[0],
    setSelectedLang = _React$useState2[1];
  _react["default"].useEffect(function () {
    if (values !== null && values !== void 0 && values.length) {
      if (settingsContext.lang && values.some(function (v) {
        return v.id === settingsContext.lang;
      })) {
        setSelectedLang(settingsContext.lang);
      } else {
        setSelectedLang(values[0].id);
      }
    } else {
      setSelectedLang('');
    }
  }, [settingsContext, values]);
  // #endregion

  // #region > Events
  function handleChange(event) {
    var action = _GameSettingsProvider.GameSettingsActions.setLang(event.value);
    dispatch(action);
  }
  // #endregion

  // #region > Render
  return /*#__PURE__*/_react["default"].createElement(_reactCommons.Select, {
    className: className,
    value: selectedLang,
    values: values,
    onChange: handleChange
  });
  // #endregion
};
// #endregion