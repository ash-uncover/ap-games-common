"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSlider = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ImageSlider.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ANIMATE = {
  PREVIOUS_BEFORE: 'animate-previous-before',
  PREVIOUS_AFTER: 'animate-previous-after',
  NEXT_BEFORE: 'animate-next-before',
  NEXT_AFTER: 'animate-next-after'
};
var dragInfo = {
  x: -1
};
var DRAG_THRESHOLD = 0.25;
var ImageSlider = function ImageSlider(_ref) {
  var image = _ref.image,
    onChangePrevious = _ref.onChangePrevious,
    onChangeNext = _ref.onChangeNext;
  // Hooks //

  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    animationMode = _useState2[0],
    setAnimationMode = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    offsetX = _useState4[0],
    setOffsetX = _useState4[1];

  // Events //

  var handleTouchStart = function handleTouchStart(event) {
    if (!animationMode) {
      dragInfo.x = event.touches[0].clientX;
      dragInfo.target = event.touches[0].target;
      startDrag();
    }
  };
  var startDrag = function startDrag() {
    document.addEventListener('touchend', stopDrag);
    document.addEventListener('touchcancel', stopDrag);
    document.addEventListener('touchmove', doDrag);
  };
  var doDrag = function doDrag(event) {
    var offset = (event.touches[0].clientX - dragInfo.x) / dragInfo.target.offsetWidth;
    offset = Math.max(-1, Math.min(1, offset));
    setOffsetX(offset);
  };
  var stopDrag = function stopDrag(event) {
    var finalOffset = 0;
    finalOffset = (event.changedTouches[0].clientX - dragInfo.x) / dragInfo.target.offsetWidth;
    finalOffset = Math.max(-1, Math.min(1, finalOffset));
    document.removeEventListener('touchend', stopDrag);
    document.removeEventListener('touchcancel', stopDrag);
    document.removeEventListener('touchmove', doDrag);
    dragInfo.x = -1;
    if (finalOffset >= DRAG_THRESHOLD) {
      setAnimationMode(ANIMATE.PREVIOUS_BEFORE);
    } else if (finalOffset <= -DRAG_THRESHOLD) {
      setAnimationMode(ANIMATE.NEXT_BEFORE);
    }
    setOffsetX(0);
  };
  var handleTransitionEnd = function handleTransitionEnd() {
    switch (animationMode) {
      case ANIMATE.PREVIOUS_BEFORE:
        {
          setAnimationMode(ANIMATE.PREVIOUS_AFTER);
          onChangePrevious();
          break;
        }
      case ANIMATE.PREVIOUS_AFTER:
        {
          setAnimationMode('');
          break;
        }
      case ANIMATE.NEXT_BEFORE:
        {
          setAnimationMode(ANIMATE.NEXT_AFTER);
          onChangeNext();
          break;
        }
      case ANIMATE.NEXT_AFTER:
        {
          setAnimationMode('');
          break;
        }
    }
  };

  // Rendering //

  var classes = ['image-slider'];
  if (animationMode) {
    classes.push(animationMode);
  }
  var style = {};
  if (offsetX) {
    style.transition = 'none', style.transform = "translateX(".concat(offsetX * 100, "%)");
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "image-slider__image",
    style: style,
    src: image,
    onTouchStart: handleTouchStart,
    onTransitionEnd: handleTransitionEnd
  }));
};
exports.ImageSlider = ImageSlider;