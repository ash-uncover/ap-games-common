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
var _MessageDispatcher_id, _MessageDispatcher_init, _MessageDispatcher_handle, _MessageDispatcher_closure;
Object.defineProperty(exports, "__esModule", { value: true });
const js_utils_1 = require("@uncover/js-utils");
const js_utils_logger_1 = __importDefault(require("@uncover/js-utils-logger"));
const MessageService_1 = __importDefault(require("./MessageService"));
const LOGGER = new js_utils_logger_1.default('MessageDispatcher', 0);
class MessageDispatcher {
    // Constructor //
    constructor(id) {
        // Attributes //
        _MessageDispatcher_id.set(this, void 0);
        _MessageDispatcher_init.set(this, false);
        _MessageDispatcher_handle.set(this, null);
        _MessageDispatcher_closure.set(this, null
        // Constructor //
        );
        __classPrivateFieldSet(this, _MessageDispatcher_id, id || `message-dispatcher-${js_utils_1.UUID.next()}`, "f");
    }
    // Getters & Setters //
    get id() {
        return __classPrivateFieldGet(this, _MessageDispatcher_id, "f");
    }
    // Public //
    init(handleMessage) {
        __classPrivateFieldSet(this, _MessageDispatcher_init, true, "f");
        __classPrivateFieldSet(this, _MessageDispatcher_handle, handleMessage, "f");
        __classPrivateFieldSet(this, _MessageDispatcher_closure, MessageService_1.default.addDispatcher(this), "f");
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageDispatcher_id, "f").substring(__classPrivateFieldGet(this, _MessageDispatcher_id, "f").length - 3)}] starting`);
        return () => {
            LOGGER.info(`[${__classPrivateFieldGet(this, _MessageDispatcher_id, "f").substring(__classPrivateFieldGet(this, _MessageDispatcher_id, "f").length - 3)}] closing`);
            __classPrivateFieldSet(this, _MessageDispatcher_init, false, "f");
            __classPrivateFieldSet(this, _MessageDispatcher_handle, null, "f");
            if (__classPrivateFieldGet(this, _MessageDispatcher_closure, "f")) {
                __classPrivateFieldGet(this, _MessageDispatcher_closure, "f").call(this);
            }
        };
    }
    onMessage(message) {
        if (__classPrivateFieldGet(this, _MessageDispatcher_init, "f") && __classPrivateFieldGet(this, _MessageDispatcher_handle, "f")) {
            LOGGER.info(`[${__classPrivateFieldGet(this, _MessageDispatcher_id, "f").substring(__classPrivateFieldGet(this, _MessageDispatcher_id, "f").length - 3)}] (on message) sending message`);
            __classPrivateFieldGet(this, _MessageDispatcher_handle, "f").call(this, message);
        }
        else {
            console.warn(`Receive Message but not init: ${this.id}`);
        }
    }
    sendMessage(message) {
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageDispatcher_id, "f").substring(__classPrivateFieldGet(this, _MessageDispatcher_id, "f").length - 3)}] send message`);
        if (__classPrivateFieldGet(this, _MessageDispatcher_init, "f")) {
            MessageService_1.default.sendMessage(Object.assign({ _dispatcherId: this.id }, message));
        }
        else {
            console.warn(`Send Message but not init: ${this.id}`);
        }
    }
}
_MessageDispatcher_id = new WeakMap(), _MessageDispatcher_init = new WeakMap(), _MessageDispatcher_handle = new WeakMap(), _MessageDispatcher_closure = new WeakMap();
exports.default = MessageDispatcher;
//# sourceMappingURL=MessageDispatcher.js.map