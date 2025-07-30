"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSlider = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./ImageSlider.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // Libs
// Components
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
var ImageSlider = exports.ImageSlider = function ImageSlider(_ref) {
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
    document.addEventListener('touchend', _stopDrag);
    document.addEventListener('touchcancel', _stopDrag);
    document.addEventListener('touchmove', doDrag);
  };
  var doDrag = function doDrag(event) {
    var offset = (event.touches[0].clientX - dragInfo.x) / dragInfo.target.offsetWidth;
    offset = Math.max(-1, Math.min(1, offset));
    setOffsetX(offset);
  };
  var _stopDrag = function stopDrag(event) {
    var finalOffset = 0;
    finalOffset = (event.changedTouches[0].clientX - dragInfo.x) / dragInfo.target.offsetWidth;
    finalOffset = Math.max(-1, Math.min(1, finalOffset));
    document.removeEventListener('touchend', _stopDrag);
    document.removeEventListener('touchcancel', _stopDrag);
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