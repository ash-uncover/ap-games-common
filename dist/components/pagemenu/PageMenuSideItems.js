"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMenuSideItems = void 0;
var _react = _interopRequireDefault(require("react"));
require("./PageMenuSideItems.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PageMenuSideItems = function PageMenuSideItems(_ref) {
  var children = _ref.children;
  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "page-menu-side-items"
  }, children);
};
exports.PageMenuSideItems = PageMenuSideItems;