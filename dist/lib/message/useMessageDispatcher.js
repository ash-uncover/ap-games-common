"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const MessageDispatcher_1 = __importDefault(require("./MessageDispatcher"));
const useMessageDispatcher = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        MessageDispatcher_1.default.register({
            context: this,
            handleMessage: dispatch
        });
        return () => MessageDispatcher_1.default.unregister(this);
    }, []);
};
exports.default = useMessageDispatcher;
//# sourceMappingURL=useMessageDispatcher.js.map