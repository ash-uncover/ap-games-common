"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _MessageDispatcher = _interopRequireDefault(require("./MessageDispatcher"));
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useMessageDispatcher = function useMessageDispatcher() {
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    _MessageDispatcher["default"].register({
      context: _this,
      handleMessage: dispatch
    });
    return function () {
      return _MessageDispatcher["default"].unregister(_this);
    };
  }, []);
};
var _default = useMessageDispatcher();
exports["default"] = _default;