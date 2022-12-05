"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _listeners = /*#__PURE__*/new WeakMap();
var _handlePostMessage = /*#__PURE__*/new WeakSet();
var MessageDispatcherClass = /*#__PURE__*/function () {
  // Attributes //

  // Constructor //

  function MessageDispatcherClass() {
    _classCallCheck(this, MessageDispatcherClass);
    _classPrivateMethodInitSpec(this, _handlePostMessage);
    _classPrivateFieldInitSpec(this, _listeners, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _listeners, []);
    window.addEventListener('message', _classPrivateMethodGet(this, _handlePostMessage, _handlePostMessage2).bind(this));
  }

  // Getters & Setters //

  // Public //
  _createClass(MessageDispatcherClass, [{
    key: "dispatch",
    value: function dispatch(message) {
      var _this = this;
      _classPrivateFieldGet(this, _listeners).forEach(function (listener) {
        try {
          listener.handleMessage.call(listener.context, message);
        } catch (error) {
          // We do not want to crash the whole application
          _this.unregister(listener.context);
        }
      });
    }
  }, {
    key: "register",
    value: function register(listener) {
      if (_classPrivateFieldGet(this, _listeners).some(function (list) {
        return listener.context === list.context;
      })) {
        this.unregister(listener.context);
      }
      _classPrivateFieldGet(this, _listeners).push(listener);
    }
  }, {
    key: "registerWindow",
    value: function registerWindow(wdow, origin) {
      this.register({
        context: wdow,
        handleMessage: function handleMessage(message) {
          wdow.postMessage(message, origin);
        }
      });
    }
  }, {
    key: "unregister",
    value: function unregister(context) {
      _classPrivateFieldSet(this, _listeners, _classPrivateFieldGet(this, _listeners).filter(function (listener) {
        return listener.context !== context;
      }));
    }

    // Private //
  }]);
  return MessageDispatcherClass;
}();
function _handlePostMessage2(event) {
  var _event$data;
  if ((_event$data = event.data) !== null && _event$data !== void 0 && _event$data._xbuilder) {
    this.dispatch({
      type: event.data.type,
      payload: event.data.payload
    });
  }
}
var MessageDispatcher = new MessageDispatcherClass();
var _default = MessageDispatcher;
exports["default"] = _default;