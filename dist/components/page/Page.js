"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _react = _interopRequireDefault(require("react"));
var _PageMenu = require("./PageMenu");
var _PageContent = require("./PageContent");
require("./Page.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Components

// Style

var Page = function Page(_ref) {
  var menu = _ref.menu,
    content = _ref.content;
  // Hooks //

  // Events //

  // Rendering //

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page"
  }, /*#__PURE__*/_react["default"].createElement(_PageMenu.PageMenu, null, menu), /*#__PURE__*/_react["default"].createElement(_PageContent.PageContent, null, content));
};
exports.Page = Page;