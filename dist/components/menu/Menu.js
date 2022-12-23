"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
var _react = _interopRequireDefault(require("react"));
var _MenuItem = require("./MenuItem");
require("./Menu.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Menu = function Menu(_ref) {
  var collapsed = _ref.collapsed,
    title = _ref.title,
    items = _ref.items;
  // Events //

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "menu"
  }, title ? /*#__PURE__*/_react["default"].createElement("h1", {
    className: "menu__title"
  }, title) : null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "menu__items"
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem.MenuItem, _extends({}, item, {
      collapsed: collapsed
    }));
  })));
};
exports.Menu = Menu;