"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ControlButton = require("./ControlButton");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
require("./Slider.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DEFAULT_STEPS = 10;
var TOOLTIP_TIMEOUT;
var TOOLTIP_TIMEOUT_DELAY = 1000;
var Slider = function Slider(_ref) {
  var label = _ref.label,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    value = _ref.value,
    onChange = _ref.onChange;
  // Hooks //

  var sliderBar = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dragMode = _useState2[0],
    setDragMode = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showTooltip = _useState4[0],
    setShowTooltip = _useState4[1];
  var _useState5 = (0, _react.useState)(value || min || 0),
    _useState6 = _slicedToArray(_useState5, 2),
    currentValue = _useState6[0],
    setCurrentValue = _useState6[1];
  (0, _react.useEffect)(function () {
    if (value !== currentValue) {
      updateValue(value);
    }
  }, [value]);
  var updateValue = function updateValue(newValue) {
    var tmpValue = newValue;
    if (!isNaN(min) && tmpValue < min) {
      tmpValue = min;
    }
    if (!isNaN(max) && tmpValue > max) {
      tmpValue = max;
    }
    setCurrentValue(tmpValue);
    onChange(tmpValue);
    startTooltipTimeout();
  };
  var startTooltipTimeout = function startTooltipTimeout() {
    setShowTooltip(true);
    clearTimeout(TOOLTIP_TIMEOUT);
    TOOLTIP_TIMEOUT = setTimeout(function () {
      return setShowTooltip(false);
    }, TOOLTIP_TIMEOUT_DELAY);
  };

  // Events //

  var getStep = function getStep() {
    var realStep = step;
    if (!realStep) {
      realStep = Math.max(Math.round((max - min) / DEFAULT_STEPS), 1);
    }
    return realStep;
  };
  var moveSlider = function moveSlider(x) {
    if (sliderBar !== null && sliderBar !== void 0 && sliderBar.current) {
      var rectBar = sliderBar.current.getBoundingClientRect();
      var clientWidth = rectBar.width;
      var relativePosition = x - rectBar.left;
      var newValue = Math.round(min + relativePosition / clientWidth * (max - min));
      updateValue(newValue);
    }
  };
  var handleTouchStart = function handleTouchStart() {
    startTouch();
  };
  var handleMouseDown = function handleMouseDown() {
    startDrag();
  };
  var startTouch = function startTouch() {
    setShowTooltip(true);
    setDragMode(true);
    document.addEventListener('touchend', stopTouch);
    document.addEventListener('touchcancel', stopTouch);
    document.addEventListener('touchmove', doTouch);
  };
  var doTouch = function doTouch(event) {
    moveSlider(event.touches[0].clientX);
  };
  var stopTouch = function stopTouch(event) {
    startTooltipTimeout();
    moveSlider(event.changedTouches[0].clientX);
    setDragMode(false);
    document.removeEventListener('touchend', stopTouch);
    document.removeEventListener('touchcancel', stopTouch);
    document.removeEventListener('touchmove', doTouch);
  };
  var startDrag = function startDrag() {
    setShowTooltip(true);
    setDragMode(true);
    document.addEventListener('mouseleave', stopDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mousemove', doDrag);
  };
  var doDrag = function doDrag(event) {
    moveSlider(event.clientX);
  };
  var stopDrag = function stopDrag(event) {
    startTooltipTimeout();
    moveSlider(event.clientX);
    setDragMode(false);
    document.removeEventListener('mouseleave', stopDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('mousemove', doDrag);
  };
  var handleMouseEnter = function handleMouseEnter() {
    setShowTooltip(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    startTooltipTimeout();
  };
  var handleValueDown = function handleValueDown() {
    var realStep = getStep();
    var newValue = (Math.floor(currentValue / realStep) - 1) * realStep;
    if (currentValue % realStep) {
      newValue = Math.floor(currentValue / realStep) * realStep;
    }
    updateValue(newValue);
  };
  var handleValueUp = function handleValueUp() {
    var realStep = getStep();
    var newValue = (Math.floor(currentValue / realStep) + 1) * realStep;
    updateValue(newValue);
  };
  var handleSliderClick = function handleSliderClick(event) {
    moveSlider(event.clientX);
  };
  var handleChange = function handleChange(event) {
    updateValue(Number(event.target.value));
  };

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    style: {
      display: 'none'
    },
    type: "number",
    min: min,
    max: max,
    value: currentValue,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(_ControlButton.ControlButton, {
    onClick: handleValueDown
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', 'chevron-left']
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__control",
    onClick: handleSliderClick,
    onTouchStart: handleTouchStart,
    onMouseDown: handleMouseDown,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__control--bar",
    ref: sliderBar
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__control--bar slider__control--bar-active",
    style: {
      width: "".concat((currentValue - min) * 100 / (max - min), "%"),
      transition: dragMode ? 'none' : 'width 0.05s'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__control--indicator",
    tabIndex: 0
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__control--toolip",
    style: {
      pointerEvents: 'none',
      opacity: showTooltip ? 1 : 0,
      transition: 'opacity 0.5s'
    }
  }, currentValue, "%")))), /*#__PURE__*/_react["default"].createElement(_ControlButton.ControlButton, {
    onClick: handleValueUp
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', 'chevron-right']
  })));
};
exports.Slider = Slider;