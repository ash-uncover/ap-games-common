"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _MessageFrameDispatcher_instances, _MessageFrameDispatcher_id, _MessageFrameDispatcher_window, _MessageFrameDispatcher_handleMessage;
Object.defineProperty(exports, "__esModule", { value: true });
const js_utils_1 = require("@uncover/js-utils");
const js_utils_logger_1 = __importDefault(require("@uncover/js-utils-logger"));
const MessageService_1 = __importDefault(require("./MessageService"));
const LOGGER = new js_utils_logger_1.default('MessageFrameDispatcher', 0);
class MessageFrameDispatcher {
    // Constructor //
    constructor(wdow, id) {
        _MessageFrameDispatcher_instances.add(this);
        // Attributes //
        _MessageFrameDispatcher_id.set(this, void 0);
        _MessageFrameDispatcher_window.set(this, void 0);
        __classPrivateFieldSet(this, _MessageFrameDispatcher_id, id || `message-frame-dispatcher-${js_utils_1.UUID.next()}`, "f");
        __classPrivateFieldSet(this, _MessageFrameDispatcher_window, wdow, "f");
        window.addEventListener('message', __classPrivateFieldGet(this, _MessageFrameDispatcher_instances, "m", _MessageFrameDispatcher_handleMessage).bind(this));
    }
    // Getters & Setters //
    get id() {
        return __classPrivateFieldGet(this, _MessageFrameDispatcher_id, "f");
    }
    get idShort() {
        return __classPrivateFieldGet(this, _MessageFrameDispatcher_id, "f").substring(__classPrivateFieldGet(this, _MessageFrameDispatcher_id, "f").length - 3);
    }
    // Public Methods //
    onMessage(message) {
        LOGGER.info(`[${this.idShort}] onMessage`);
        __classPrivateFieldGet(this, _MessageFrameDispatcher_window, "f").postMessage(Object.assign(Object.assign({}, message), { _dispatcherId: __classPrivateFieldGet(this, _MessageFrameDispatcher_id, "f") }), '*');
    }
    sendMessage(message) {
        LOGGER.info(`[${this.idShort}] sendMessage`);
        MessageService_1.default.sendMessage(Object.assign(Object.assign({}, message), { _dispatcherId: this.id }));
    }
}
_MessageFrameDispatcher_id = new WeakMap(), _MessageFrameDispatcher_window = new WeakMap(), _MessageFrameDispatcher_instances = new WeakSet(), _MessageFrameDispatcher_handleMessage = function _MessageFrameDispatcher_handleMessage(event) {
    const data = event.data || {};
    if (data._serviceId && data._dispatcherId) {
        this.sendMessage({
            _dispatcherId: __classPrivateFieldGet(this, _MessageFrameDispatcher_id, "f"),
            type: data.type,
            payload: data.payload
        });
    }
};
exports.default = MessageFrameDispatcher;
//# sourceMappingURL=MessageFrameDispatcher.js.map