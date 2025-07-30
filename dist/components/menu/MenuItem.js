"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;
var _react = _interopRequireDefault(require("react"));
require("./MenuItem.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MenuItem = exports.MenuItem = function MenuItem(_ref) {
  var className = _ref.className,
    collapsed = _ref.collapsed,
    disabled = _ref.disabled,
    icon = _ref.icon,
    selected = _ref.selected,
    text = _ref.text,
    onClick = _ref.onClick;
  // #region > Events  
  var handleClick = function handleClick(event) {
    event.preventDefault();
    if (!disabled) {
      onClick();
    }
    return false;
  };
  // #endregion

  // #region > Render
  var classes = ['menu-item'];
  if (className) {
    classes.push(className);
  }
  if (selected) {
    classes.push('menu-item--selected');
  }
  if (disabled) {
    classes.push('menu-item--disabled');
  }
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: classes.join(' '),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "menu-item__content",
    role: "button",
    onClick: function onClick() {
      return false;
    }
  }, icon ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "menu-item__icon"
  }, icon ? icon : null) : null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "menu-item__text"
  }, collapsed ? null : text)));
  // #endregion
};