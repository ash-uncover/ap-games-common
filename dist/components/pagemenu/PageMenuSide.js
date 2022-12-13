"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMenuSide = void 0;
var _react = _interopRequireDefault(require("react"));
var _PageMenuSideItem = require("./PageMenuSideItem");
var _PageMenuSideItems = require("./PageMenuSideItems");
require("./PageMenuSide.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var PageMenuSide = function PageMenuSide(_ref) {
  var collapsed = _ref.collapsed,
    title = _ref.title,
    items = _ref.items,
    onItemClick = _ref.onItemClick;
  // Events //

  var handleItemClicked = function handleItemClicked(id) {
    onItemClick(id);
  };

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-menu-side"
  }, title ? /*#__PURE__*/_react["default"].createElement("h1", {
    className: "page-menu-side__title"
  }, title) : null, /*#__PURE__*/_react["default"].createElement(_PageMenuSideItems.PageMenuSideItems, null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_PageMenuSideItem.PageMenuSideItem, _extends({
      key: item.id,
      collapsed: collapsed
    }, item, {
      onClick: function onClick() {
        return handleItemClicked(item.id);
      }
    }));
  })));
};
exports.PageMenuSide = PageMenuSide;