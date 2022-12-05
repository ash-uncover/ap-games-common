"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MessageServiceClass_instances, _MessageServiceClass_id, _MessageServiceClass_dispatchers, _MessageServiceClass_services, _MessageServiceClass_handleMessage;
Object.defineProperty(exports, "__esModule", { value: true });
const js_utils_1 = require("@uncover/js-utils");
const CONNECTION_REQUEST = '__CONNNECTION_REQUEST__';
const CONNECTION_ACKNOWLEDGE = '__CONNECTION_ACKNOWLEDGE__';
class MessageServiceClass {
    // Constructor //
    constructor() {
        _MessageServiceClass_instances.add(this);
        // Attributes //
        _MessageServiceClass_id.set(this, `message-service-${js_utils_1.UUID.next()}`);
        _MessageServiceClass_dispatchers.set(this, []);
        _MessageServiceClass_services.set(this, []
        // Constructor //
        );
        // Wait for registration of other services
        window.addEventListener('message', __classPrivateFieldGet(this, _MessageServiceClass_instances, "m", _MessageServiceClass_handleMessage).bind(this));
        if (window !== window.parent) {
            // Try to connect to a parent service
            window.parent.postMessage({
                _messageService: __classPrivateFieldGet(this, _MessageServiceClass_id, "f"),
                type: CONNECTION_REQUEST
            }, '*');
        }
    }
    // Getters & Setters //
    // Public Methods //
    addDispatcher(dispatcher) {
        if (!__classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").includes(dispatcher)) {
            __classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").push(dispatcher);
        }
        return () => this.removeDispatcher(dispatcher);
    }
    removeDispatcher(dispatcher) {
        __classPrivateFieldSet(this, _MessageServiceClass_dispatchers, __classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").filter(disp => disp !== dispatcher), "f");
    }
    sendMessage(dispatcherId, message) {
        __classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").forEach((dispatcher) => {
            if (dispatcher.id !== dispatcherId) {
                dispatcher.onMessage(message);
            }
        });
    }
}
_MessageServiceClass_id = new WeakMap(), _MessageServiceClass_dispatchers = new WeakMap(), _MessageServiceClass_services = new WeakMap(), _MessageServiceClass_instances = new WeakSet(), _MessageServiceClass_handleMessage = function _MessageServiceClass_handleMessage(event) {
    var _a, _b, _c, _d;
    if (((_a = event.data) === null || _a === void 0 ? void 0 : _a._messageService) && ((_b = event.data) === null || _b === void 0 ? void 0 : _b.type) === CONNECTION_REQUEST) {
        // This is when a child service wants to connect
        console.log('child trying to connect');
        console.log(event);
    }
    if (((_c = event.data) === null || _c === void 0 ? void 0 : _c._messageService) && ((_d = event.data) === null || _d === void 0 ? void 0 : _d.type) === CONNECTION_ACKNOWLEDGE) {
        // This is when a parent service has acknoledge connection
        console.log('parent acknowledge connection');
        console.log(event);
    }
};
const MessageService = new MessageServiceClass();
exports.default = MessageService;
//# sourceMappingURL=MessageService.js.map