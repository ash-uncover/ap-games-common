"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
var _react = _interopRequireDefault(require("react"));
var _MenuItem = require("./MenuItem");
require("./Menu.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // Components
// Styles
var Menu = exports.Menu = function Menu(_ref) {
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
    return /*#__PURE__*/_react["default"].createElement(_MenuItem.MenuItem, _extends({
      key: item.text
    }, item, {
      collapsed: collapsed
    }));
  })));
};