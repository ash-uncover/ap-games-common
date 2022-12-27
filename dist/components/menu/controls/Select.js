"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireDefault(require("react"));
var _ControlButton = require("./ControlButton");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
require("./Select.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Components

// Styles

var Select = function Select(_ref) {
  var className = _ref.className,
    disabled = _ref.disabled,
    value = _ref.value,
    values = _ref.values,
    onChange = _ref.onChange;
  // Hooks //

  // Events //

  var handleValuePrevious = function handleValuePrevious() {
    var currentValueIndex = values.findIndex(function (v) {
      return v.id === value;
    });
    var newValueIndex = (currentValueIndex + values.length - 1) % values.length;
    var newValue = values[newValueIndex];
    onChange(newValue.id);
  };
  var handleValueNext = function handleValueNext() {
    var currentValueIndex = values.findIndex(function (v) {
      return v.id === value;
    });
    var newValueIndex = (currentValueIndex + values.length + 1) % values.length;
    var newValue = values[newValueIndex];
    onChange(newValue.id);
  };

  // Rendering //

  var classes = ['select'];
  if (className) {
    classes.push(className);
  }
  if (disabled) {
    classes.push('select--disabled');
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_ControlButton.ControlButton, {
    disabled: disabled,
    onClick: handleValuePrevious
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', 'chevron-left']
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "select__value"
  }, values.find(function (v) {
    return v.id === value;
  }).text), /*#__PURE__*/_react["default"].createElement(_ControlButton.ControlButton, {
    disabled: disabled,
    onClick: handleValueNext
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', 'chevron-right']
  })));
};
exports.Select = Select;