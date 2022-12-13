"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMenuContent = void 0;
var _react = _interopRequireDefault(require("react"));
require("./PageMenuContent.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PageMenuContent = function PageMenuContent(_ref) {
  var children = _ref.children;
  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-menu-content"
  }, children);
};
exports.PageMenuContent = PageMenuContent;