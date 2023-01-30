"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioVolumeManager = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var normalizeVolumeValue = function normalizeVolumeValue(value) {
  return Math.min(Math.max(0, value), 100);
};
var ALPHA_AUDIO = 'alpha-audio';
var USE_LOCAL_STORAGE = true;
if (!USE_LOCAL_STORAGE) {
  localStorage.removeItem(ALPHA_AUDIO);
}
var store = function store(state) {
  localStorage.setItem(ALPHA_AUDIO, JSON.stringify({
    master: state.master,
    masterVolume: state.masterVolume,
    music: state.music,
    musicVolume: state.musicVolume,
    ui: state.ui,
    uiVolume: state.uiVolume,
    game: state.game,
    gameVolume: state.gameVolume
  }));
};
var load = function load() {
  return JSON.parse(localStorage.getItem(ALPHA_AUDIO) || '{}');
};
var _master = /*#__PURE__*/new WeakMap();
var _masterVolume = /*#__PURE__*/new WeakMap();
var _game = /*#__PURE__*/new WeakMap();
var _gameVolume = /*#__PURE__*/new WeakMap();
var _music = /*#__PURE__*/new WeakMap();
var _musicVolume = /*#__PURE__*/new WeakMap();
var _ui = /*#__PURE__*/new WeakMap();
var _uiVolume = /*#__PURE__*/new WeakMap();
var AudioVolumeManager = /*#__PURE__*/function () {
  function AudioVolumeManager() {
    _classCallCheck(this, AudioVolumeManager);
    _classPrivateFieldInitSpec(this, _master, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _masterVolume, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _game, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _gameVolume, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _music, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _musicVolume, {
      writable: true,
      value: 100
    });
    _classPrivateFieldInitSpec(this, _ui, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _uiVolume, {
      writable: true,
      value: 100
    });
    var store = load();
    if (typeof store.master !== 'undefined') {
      _classPrivateFieldSet(this, _master, store.master);
    }
    if (typeof store.masterVolume !== 'undefined') {
      _classPrivateFieldSet(this, _masterVolume, store.masterVolume);
    }
    if (typeof store.game !== 'undefined') {
      _classPrivateFieldSet(this, _game, store.game);
    }
    if (typeof store.gameVolume !== 'undefined') {
      _classPrivateFieldSet(this, _gameVolume, store.gameVolume);
    }
    if (typeof store.ui !== 'undefined') {
      _classPrivateFieldSet(this, _ui, store.ui);
    }
    if (typeof store.uiVolume !== 'undefined') {
      _classPrivateFieldSet(this, _uiVolume, store.uiVolume);
    }
    if (typeof store.music !== 'undefined') {
      _classPrivateFieldSet(this, _music, store.music);
    }
    if (typeof store.musicVolume !== 'undefined') {
      _classPrivateFieldSet(this, _musicVolume, store.musicVolume);
    }
  }

  // Getter & Setters //
  _createClass(AudioVolumeManager, [{
    key: "master",
    get: function get() {
      return _classPrivateFieldGet(this, _master);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _master, on);
      store(this);
    }
  }, {
    key: "masterVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _masterVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _masterVolume, normalizeVolumeValue(value));
      store(this);
    }
  }, {
    key: "music",
    get: function get() {
      return _classPrivateFieldGet(this, _music);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _music, on);
      store(this);
    }
  }, {
    key: "musicVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _musicVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _musicVolume, normalizeVolumeValue(value));
      store(this);
    }
  }, {
    key: "ui",
    get: function get() {
      return _classPrivateFieldGet(this, _ui);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _ui, on);
      store(this);
    }
  }, {
    key: "uiVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _uiVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _uiVolume, normalizeVolumeValue(value));
      store(this);
    }
  }, {
    key: "game",
    get: function get() {
      return _classPrivateFieldGet(this, _game);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _game, on);
      store(this);
    }
  }, {
    key: "gameVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _gameVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _gameVolume, normalizeVolumeValue(value));
      store(this);
    }
  }]);
  return AudioVolumeManager;
}();
exports.AudioVolumeManager = AudioVolumeManager;