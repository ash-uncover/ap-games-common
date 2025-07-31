"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSettingDisplayBrightnessSlider = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCommons = require("@sol.ac/react-commons");
var _GameSettingsProvider = require("./GameSettingsProvider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//

// #region Declaration

// #endregion

// #region Component
var GameSettingDisplayBrightnessSlider = exports.GameSettingDisplayBrightnessSlider = function GameSettingDisplayBrightnessSlider(_ref) {
  var className = _ref.className,
    label = _ref.label;
  // #region > Hooks
  var settingsContext = _react["default"].useContext(_GameSettingsProvider.GameSettingsContext);
  var dispatch = _react["default"].useContext(_GameSettingsProvider.GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event) {
    var action = _GameSettingsProvider.GameSettingsActions.setBrightness(event.value);
    dispatch(action);
  }
  // #endregion

  // #region > Render
  return /*#__PURE__*/_react["default"].createElement(_reactCommons.Slider, {
    className: className
    // label={label}
    ,
    min: 0,
    max: 200,
    value: settingsContext.brightness,
    onChange: handleChange
  });
  // #endregion
};
// #endregion