"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioList = void 0;
var _jsUtils = require("@uncover/js-utils");
var _AudioCategory = require("../constants/AudioCategory");
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
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var callback;
var _paths = /*#__PURE__*/new WeakMap();
var _current = /*#__PURE__*/new WeakMap();
var _audio = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _volume = /*#__PURE__*/new WeakMap();
var _onEnd = /*#__PURE__*/new WeakMap();
var _prepare = /*#__PURE__*/new WeakSet();
var _handleEnd = /*#__PURE__*/new WeakSet();
var AudioList = /*#__PURE__*/function () {
  // Attributes //

  // Constructor //

  function AudioList(paths, options) {
    _classCallCheck(this, AudioList);
    _classPrivateMethodInitSpec(this, _handleEnd);
    _classPrivateMethodInitSpec(this, _prepare);
    _classPrivateFieldInitSpec(this, _paths, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _current, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _audio, {
      writable: true,
      value: new Audio()
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _volume, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _onEnd, {
      writable: true,
      value: void 0
    });
    callback = _classPrivateMethodGet(this, _handleEnd, _handleEnd2).bind(this);
    _classPrivateFieldSet(this, _options, options || {});
    _classPrivateFieldSet(this, _paths, paths);
    if (_classPrivateFieldGet(this, _options).shufffle) {
      _classPrivateFieldSet(this, _paths, _jsUtils.ArrayUtils.shuffle(_classPrivateFieldGet(this, _paths)));
    }
    _classPrivateMethodGet(this, _prepare, _prepare2).call(this, 0);
  }

  // Getters & Setters //
  _createClass(AudioList, [{
    key: "onEnd",
    set: function set(listener) {
      _classPrivateFieldSet(this, _onEnd, listener);
    }
  }, {
    key: "category",
    get: function get() {
      return _classPrivateFieldGet(this, _options).category || _AudioCategory.AudioCategories.NONE;
    }
  }, {
    key: "volume",
    set: function set(v) {
      _classPrivateFieldSet(this, _volume, v);
      _classPrivateFieldGet(this, _audio).volume = v / 100;
    }

    // Public methods //
  }, {
    key: "previous",
    value: function previous() {
      if (_classPrivateFieldGet(this, _audio).currentTime > 1000) {
        this.stop();
        this.play();
      } else {
        this.pause();
        _classPrivateMethodGet(this, _prepare, _prepare2).call(this, _classPrivateFieldGet(this, _current) - 1);
        this.play();
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.pause();
      _classPrivateMethodGet(this, _prepare, _prepare2).call(this, _classPrivateFieldGet(this, _current) + 1);
      this.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      var audio = _classPrivateFieldGet(this, _audio);
      audio.load();
    }
  }, {
    key: "pause",
    value: function pause() {
      var audio = _classPrivateFieldGet(this, _audio);
      audio.pause();
    }
  }, {
    key: "play",
    value: function play() {
      var audio = _classPrivateFieldGet(this, _audio);
      audio.play();
    }

    // Internal methods //
  }]);
  return AudioList;
}();
exports.AudioList = AudioList;
function _prepare2(index) {
  _classPrivateFieldGet(this, _audio).removeEventListener('ended', callback);
  var realIndex = (index + _classPrivateFieldGet(this, _paths).length) % _classPrivateFieldGet(this, _paths).length;
  _classPrivateFieldSet(this, _current, realIndex);
  _classPrivateFieldSet(this, _audio, new Audio(_classPrivateFieldGet(this, _paths)[realIndex]));
  _classPrivateFieldGet(this, _audio).volume = _classPrivateFieldGet(this, _volume) / 100;
  _classPrivateFieldGet(this, _audio).addEventListener('ended', callback);
}
function _handleEnd2() {
  if (_classPrivateFieldGet(this, _current) < _classPrivateFieldGet(this, _paths).length - 1) {
    this.next();
  } else if (_classPrivateFieldGet(this, _options).loop && _classPrivateFieldGet(this, _current) === _classPrivateFieldGet(this, _paths).length - 1) {
    this.next();
  } else if (!_classPrivateFieldGet(this, _options).loop && _classPrivateFieldGet(this, _current) === _classPrivateFieldGet(this, _paths).length - 1 && _classPrivateFieldGet(this, _onEnd)) {
    _classPrivateFieldGet(this, _onEnd).call(this);
  }
}