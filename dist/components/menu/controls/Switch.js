"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Switch.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Switch = exports.Switch = function Switch(_ref) {
  var checked = _ref.checked,
    label = _ref.label,
    onChange = _ref.onChange;
  // Hooks //

  var id = (0, _react.useId)();

  // Events //

  var handleChange = function handleChange(event) {
    onChange(event.currentTarget.checked);
  };

  // Rendering //

  var classes = ['menu-control switch'];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: id,
    className: "switch__input",
    type: "checkbox",
    style: {
      display: 'none'
    },
    name: label,
    checked: checked,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: "switch__label"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "switch__control"
  }), label));
};