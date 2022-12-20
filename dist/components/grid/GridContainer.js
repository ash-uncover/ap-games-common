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
var GridContainer = function GridContainer(_ref) {
  var className = _ref.className,
    width = _ref.width,
    height = _ref.height,
    children = _ref.children;
  // Hooks //

  var container = (0, _react.useRef)(null);
  var innerContainer = (0, _react.useRef)(null);
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
    var currentContainer = container.current;
    var ratio = width / height;
    if (currentContainer) {
      var containerRatio = currentContainer.clientWidth / currentContainer.clientHeight;
      if (containerRatio >= ratio) {
        currentContainer.classList.add('grid-container-h');
        currentContainer.classList.remove('grid-container-v');
      } else {
        currentContainer.classList.remove('grid-container-h');
        currentContainer.classList.add('grid-container-v');
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
    ref: container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid-container-inner",
    ref: innerContainer,
    style: {
      aspectRatio: width / height
    }
  }, children));
};
exports.GridContainer = GridContainer;