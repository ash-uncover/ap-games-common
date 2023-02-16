"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridContainer = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./GridContainer.css");
var _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GridContainer = function GridContainer(_ref) {
  var className = _ref.className,
    style = _ref.style,
    width = _ref.width,
    height = _ref.height,
    children = _ref.children;
  // Hooks //

  var containerRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    invert = _useState2[0],
    setInvert = _useState2[1];
  (0, _react.useEffect)(function () {
    updateSize();
  }, [width, height]);
  (0, _react.useEffect)(function () {
    var update = updateSize.bind(_this);
    window.addEventListener('resize', update);
    return function () {
      return window.removeEventListener('resize', update);
    };
  }, []);
  var updateSize = function updateSize() {
    var container = containerRef.current;
    if (container) {
      var ratioBase = width / height;
      var containerRatio = container.clientWidth / container.clientHeight;
      if (ratioBase >= 1) {
        if (containerRatio >= 1) {
          setInvert(false);
          if (containerRatio >= ratioBase) {
            container.classList.add('grid-container-h');
            container.classList.remove('grid-container-v');
          } else {
            container.classList.remove('grid-container-h');
            container.classList.add('grid-container-v');
          }
        } else {
          setInvert(true);
          if (containerRatio <= 1 / ratioBase) {
            container.classList.remove('grid-container-h');
            container.classList.add('grid-container-v');
          } else {
            container.classList.add('grid-container-h');
            container.classList.remove('grid-container-v');
          }
        }
      } else {
        if (containerRatio >= 1) {
          setInvert(true);
          if (containerRatio <= 1 / ratioBase) {
            container.classList.remove('grid-container-h');
            container.classList.add('grid-container-v');
          } else {
            container.classList.add('grid-container-h');
            container.classList.remove('grid-container-v');
          }
        } else {
          setInvert(false);
          if (containerRatio >= ratioBase) {
            container.classList.add('grid-container-h');
            container.classList.remove('grid-container-v');
          } else {
            container.classList.remove('grid-container-h');
            container.classList.add('grid-container-v');
          }
        }
      }
    }
  };

  // Rendering //

  var classes = ['grid-container'];
  if (className) {
    classes.push(className);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' '),
    style: style,
    ref: containerRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-container-inner",
    style: {
      aspectRatio: invert ? height / width : width / height
    }
  }, children));
};
exports.GridContainer = GridContainer;