"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _MessageDispatcher = _interopRequireDefault(require("./MessageDispatcher"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useMessageDispatch = function useMessageDispatch() {
  return _MessageDispatcher["default"].dispatch.bind(_MessageDispatcher["default"]);
};
var _default = useMessageDispatch;
exports["default"] = _default;