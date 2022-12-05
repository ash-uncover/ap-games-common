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
var _MessageServiceClass_instances, _MessageServiceClass_id, _MessageServiceClass_dispatchers, _MessageServiceClass_services, _MessageServiceClass_handleMessage, _MessageServiceClass_addService;
Object.defineProperty(exports, "__esModule", { value: true });
const js_utils_1 = require("@uncover/js-utils");
const js_utils_logger_1 = __importDefault(require("@uncover/js-utils-logger"));
const MessageDispatcher_1 = __importDefault(require("./MessageDispatcher"));
const CONNECTION_REQUEST = '__CONNNECTION_REQUEST__';
const CONNECTION_ACKNOWLEDGE = '__CONNECTION_ACKNOWLEDGE__';
const LOGGER = new js_utils_logger_1.default('MessageService', 0);
class MessageServiceClass {
    // Constructor //
    constructor(id) {
        _MessageServiceClass_instances.add(this);
        // Attributes //
        _MessageServiceClass_id.set(this, `message-service-${js_utils_1.UUID.next()}`);
        _MessageServiceClass_dispatchers.set(this, []);
        _MessageServiceClass_services.set(this, []
        // Constructor //
        );
        __classPrivateFieldSet(this, _MessageServiceClass_id, id || `message-service-${js_utils_1.UUID.next()}`, "f");
        // Wait for registration of other services
        window.addEventListener('message', __classPrivateFieldGet(this, _MessageServiceClass_instances, "m", _MessageServiceClass_handleMessage).bind(this));
        if (window !== window.parent) {
            // Try to connect to a parent service
            LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] contact parent`);
            window.parent.postMessage({
                _serviceId: __classPrivateFieldGet(this, _MessageServiceClass_id, "f"),
                type: CONNECTION_REQUEST
            }, '*');
        }
    }
    // Getters & Setters //
    // Public Methods //
    addDispatcher(dispatcher) {
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] add dispatcher [${dispatcher.id}]`);
        if (!__classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").includes(dispatcher)) {
            __classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").push(dispatcher);
        }
        return () => this.removeDispatcher(dispatcher);
    }
    removeDispatcher(dispatcher) {
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] remove dispatcher [${dispatcher.id}]`);
        __classPrivateFieldSet(this, _MessageServiceClass_dispatchers, __classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").filter(disp => disp !== dispatcher), "f");
    }
    sendMessage(message) {
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] send message to ${__classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").length} dispatchers from ${message._dispatcherId}`);
        __classPrivateFieldGet(this, _MessageServiceClass_dispatchers, "f").forEach((dispatcher) => {
            if (dispatcher.id !== message._dispatcherId) {
                LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] send message on dispatcher [${dispatcher.id}]`);
                dispatcher.onMessage(Object.assign({ _serviceId: __classPrivateFieldGet(this, _MessageServiceClass_id, "f") }, message));
            }
        });
    }
}
_MessageServiceClass_id = new WeakMap(), _MessageServiceClass_dispatchers = new WeakMap(), _MessageServiceClass_services = new WeakMap(), _MessageServiceClass_instances = new WeakSet(), _MessageServiceClass_handleMessage = function _MessageServiceClass_handleMessage(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (((_a = event.data) === null || _a === void 0 ? void 0 : _a._serviceId) && ((_b = event.data) === null || _b === void 0 ? void 0 : _b.type) === CONNECTION_REQUEST) {
        // This is when a child service wants to connect
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] child trying to connect`);
        const wdow = event.source;
        __classPrivateFieldGet(this, _MessageServiceClass_instances, "m", _MessageServiceClass_addService).call(this, (_c = event.data) === null || _c === void 0 ? void 0 : _c._serviceId, wdow);
    }
    else if (((_d = event.data) === null || _d === void 0 ? void 0 : _d._serviceId) && ((_e = event.data) === null || _e === void 0 ? void 0 : _e.type) === CONNECTION_ACKNOWLEDGE) {
        // This is when a parent service has acknoledge connection
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] parent acknowledge connection`);
        const parentDispatcher = new MessageDispatcher_1.default((_f = event.data) === null || _f === void 0 ? void 0 : _f._dispatcherId);
        parentDispatcher.init((message) => {
            window.parent.postMessage(message, '*');
        });
        this.addDispatcher(parentDispatcher);
    }
    else if (((_g = event.data) === null || _g === void 0 ? void 0 : _g._serviceId) && ((_h = event.data) === null || _h === void 0 ? void 0 : _h._dispatcherId)) {
        // When receiving a post message
        LOGGER.info(`[${__classPrivateFieldGet(this, _MessageServiceClass_id, "f")}] received message`);
        this.sendMessage({
            type: (_j = event.data) === null || _j === void 0 ? void 0 : _j.type,
            payload: (_k = event.data) === null || _k === void 0 ? void 0 : _k.payload
        });
    }
}, _MessageServiceClass_addService = function _MessageServiceClass_addService(serviceId, wdow) {
    if (!__classPrivateFieldGet(this, _MessageServiceClass_services, "f").includes(serviceId)) {
        const childDispatcher = new MessageDispatcher_1.default();
        const handler = (message) => wdow.postMessage(message, '*');
        childDispatcher.init(handler);
        this.addDispatcher(childDispatcher);
        __classPrivateFieldGet(this, _MessageServiceClass_services, "f").push(serviceId);
        wdow.postMessage({
            _dispatcherId: childDispatcher.id,
            _serviceId: __classPrivateFieldGet(this, _MessageServiceClass_id, "f"),
            type: CONNECTION_ACKNOWLEDGE
        }, '*');
    }
};
const MessageService = new MessageServiceClass();
exports.default = MessageService;
//# sourceMappingURL=MessageService.js.map