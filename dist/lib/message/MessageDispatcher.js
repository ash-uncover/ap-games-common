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
var _MessageDispatcherClass_instances, _MessageDispatcherClass_listeners, _MessageDispatcherClass_handlePostMessage;
Object.defineProperty(exports, "__esModule", { value: true });
class MessageDispatcherClass {
    // Constructor //
    constructor() {
        _MessageDispatcherClass_instances.add(this);
        // Attributes //
        _MessageDispatcherClass_listeners.set(this, void 0);
        __classPrivateFieldSet(this, _MessageDispatcherClass_listeners, [], "f");
        window.addEventListener('message', __classPrivateFieldGet(this, _MessageDispatcherClass_instances, "m", _MessageDispatcherClass_handlePostMessage).bind(this));
    }
    // Getters & Setters //
    // Public //
    dispatch(message) {
        __classPrivateFieldGet(this, _MessageDispatcherClass_listeners, "f").forEach((listener) => {
            try {
                listener.handleMessage.call(listener.context, message);
            }
            catch (error) {
                // We do not want to crash the whole application
                this.unregister(listener.context);
            }
        });
    }
    register(listener) {
        if (__classPrivateFieldGet(this, _MessageDispatcherClass_listeners, "f").some((list) => listener.context === list.context)) {
            this.unregister(listener.context);
        }
        __classPrivateFieldGet(this, _MessageDispatcherClass_listeners, "f").push(listener);
    }
    registerWindow(wdow, origin) {
        this.register({
            context: wdow,
            handleMessage: (message) => {
                wdow.postMessage(message, origin);
            }
        });
    }
    registerParent(origin) {
        if (window.parent) {
            this.registerWindow(window.parent, origin);
        }
    }
    unregister(context) {
        __classPrivateFieldSet(this, _MessageDispatcherClass_listeners, __classPrivateFieldGet(this, _MessageDispatcherClass_listeners, "f").filter(listener => listener.context !== context), "f");
    }
}
_MessageDispatcherClass_listeners = new WeakMap(), _MessageDispatcherClass_instances = new WeakSet(), _MessageDispatcherClass_handlePostMessage = function _MessageDispatcherClass_handlePostMessage(event) {
    var _a;
    if ((_a = event.data) === null || _a === void 0 ? void 0 : _a._xbuilder) {
        this.dispatch({
            type: event.data.type,
            payload: event.data.payload,
        });
    }
};
const MessageDispatcher = new MessageDispatcherClass();
exports.default = MessageDispatcher;
//# sourceMappingURL=MessageDispatcher.js.map