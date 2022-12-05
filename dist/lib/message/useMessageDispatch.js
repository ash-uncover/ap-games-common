"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageDispatcher_1 = __importDefault(require("./MessageDispatcher"));
const useMessageDispatch = () => {
    return MessageDispatcher_1.default.dispatch.bind(MessageDispatcher_1.default);
};
exports.default = useMessageDispatch;
//# sourceMappingURL=useMessageDispatch.js.map