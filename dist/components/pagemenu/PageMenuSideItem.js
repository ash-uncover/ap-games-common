"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMenuSideItem = void 0;
var _react = _interopRequireDefault(require("react"));
require("./PageMenuSideItem.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PageMenuSideItem = function PageMenuSideItem(_ref) {
  var collapsed = _ref.collapsed,
    icon = _ref.icon,
    selected = _ref.selected,
    text = _ref.text,
    onClick = _ref.onClick;
  // Events //

  var handleClick = function handleClick(event) {
    event.preventDefault();
    onClick();
    return false;
  };

  // Rendering //

  var classes = ['page-menu-side-item'];
  if (selected) {
    classes.push('selected');
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classes.join(' '),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "page-menu-side-item__content",
    role: "button",
    onClick: function onClick() {
      return false;
    }
  }, icon ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "page-menu-side-item__icon"
  }, icon ? icon : null) : null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "page-menu-side-item__text"
  }, collapsed ? null : text)));
};
exports.PageMenuSideItem = PageMenuSideItem;