"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSettingAudioMusicSwitch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GameSettingsProvider = require("./GameSettingsProvider");
var _reactCommons = require("@sol.ac/react-commons");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var GameSettingAudioMusicSwitch = exports.GameSettingAudioMusicSwitch = function GameSettingAudioMusicSwitch(_ref) {
  var className = _ref.className,
    label = _ref.label;
  // #region > Hooks
  var settingsContext = (0, _react.useContext)(_GameSettingsProvider.GameSettingsContext);
  var dispatch = (0, _react.useContext)(_GameSettingsProvider.GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event) {
    var action = _GameSettingsProvider.GameSettingsActions.setAudioMusic(event.value);
    dispatch(action);
  }
  // #endregion

  // #region > Render
  return /*#__PURE__*/_react["default"].createElement(_reactCommons.Switch, {
    className: className,
    label: label,
    checked: settingsContext.audioMusic,
    onChange: handleChange
  });
  // #endregion
};