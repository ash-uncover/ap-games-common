"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSettingDisplayContrastSlider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GameSettingsProvider = require("./GameSettingsProvider");
var _Slider = require("../components/slider/Slider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var GameSettingDisplayContrastSlider = exports.GameSettingDisplayContrastSlider = function GameSettingDisplayContrastSlider(_ref) {
  var className = _ref.className,
    label = _ref.label;
  // #region Hooks
  var settingsContext = (0, _react.useContext)(_GameSettingsProvider.GameSettingsContext);
  var dispatch = (0, _react.useContext)(_GameSettingsProvider.GameSettingsDispatchContext);
  // #endregion

  // #region Events
  function handleChange(contrast) {
    var action = _GameSettingsProvider.GameSettingsActions.setContrast(contrast);
    dispatch(action);
  }
  // #endregion

  // #region Rendering
  return /*#__PURE__*/_react["default"].createElement(_Slider.Slider, {
    className: className,
    label: label,
    min: 0,
    max: 200,
    value: settingsContext.contrast,
    onChange: handleChange
  });
  // #endregion
};