"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameFooterAction = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
require("./GameFooterAction.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Components

var GameFooterAction = function GameFooterAction(_ref) {
  var icon = _ref.icon,
    selected = _ref.selected,
    title = _ref.title,
    onClick = _ref.onClick;
  // Rendering //

  var classes = ['game-footer-action'];
  if (selected) {
    classes.push('selected');
  }
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: classes.join(' '),
    title: title,
    onClick: onClick,
    style: {
      padding: icon ? undefined : '0.5rem 1rem'
    }
  }, icon ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  }) : title);
};
exports.GameFooterAction = GameFooterAction;