"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioVolumeManager = void 0;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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
var AudioVolumeManager = exports.AudioVolumeManager = /*#__PURE__*/function () {
  function AudioVolumeManager() {
    _classCallCheck(this, AudioVolumeManager);
    _classPrivateFieldInitSpec(this, _master, true);
    _classPrivateFieldInitSpec(this, _masterVolume, 100);
    _classPrivateFieldInitSpec(this, _game, true);
    _classPrivateFieldInitSpec(this, _gameVolume, 100);
    _classPrivateFieldInitSpec(this, _music, true);
    _classPrivateFieldInitSpec(this, _musicVolume, 100);
    _classPrivateFieldInitSpec(this, _ui, true);
    _classPrivateFieldInitSpec(this, _uiVolume, 100);
    var store = load();
    if (typeof store.master !== 'undefined') {
      _classPrivateFieldSet(_master, this, store.master);
    }
    if (typeof store.masterVolume !== 'undefined') {
      _classPrivateFieldSet(_masterVolume, this, store.masterVolume);
    }
    if (typeof store.game !== 'undefined') {
      _classPrivateFieldSet(_game, this, store.game);
    }
    if (typeof store.gameVolume !== 'undefined') {
      _classPrivateFieldSet(_gameVolume, this, store.gameVolume);
    }
    if (typeof store.ui !== 'undefined') {
      _classPrivateFieldSet(_ui, this, store.ui);
    }
    if (typeof store.uiVolume !== 'undefined') {
      _classPrivateFieldSet(_uiVolume, this, store.uiVolume);
    }
    if (typeof store.music !== 'undefined') {
      _classPrivateFieldSet(_music, this, store.music);
    }
    if (typeof store.musicVolume !== 'undefined') {
      _classPrivateFieldSet(_musicVolume, this, store.musicVolume);
    }
  }

  // Getter & Setters //
  return _createClass(AudioVolumeManager, [{
    key: "master",
    get: function get() {
      return _classPrivateFieldGet(_master, this);
    },
    set: function set(on) {
      _classPrivateFieldSet(_master, this, on);
      store(this);
    }
  }, {
    key: "masterVolume",
    get: function get() {
      return _classPrivateFieldGet(_masterVolume, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_masterVolume, this, normalizeVolumeValue(value));
      store(this);
    }
  }, {
    key: "music",
    get: function get() {
      return _classPrivateFieldGet(_music, this);
    },
    set: function set(on) {
      _classPrivateFieldSet(_music, this, on);
      store(this);
    }
  }, {
    key: "musicVolume",
    get: function get() {
      return _classPrivateFieldGet(_musicVolume, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_musicVolume, this, normalizeVolumeValue(value));
      store(this);
    }
  }, {
    key: "ui",
    get: function get() {
      return _classPrivateFieldGet(_ui, this);
    },
    set: function set(on) {
      _classPrivateFieldSet(_ui, this, on);
      store(this);
    }
  }, {
    key: "uiVolume",
    get: function get() {
      return _classPrivateFieldGet(_uiVolume, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_uiVolume, this, normalizeVolumeValue(value));
      store(this);
    }
  }, {
    key: "game",
    get: function get() {
      return _classPrivateFieldGet(_game, this);
    },
    set: function set(on) {
      _classPrivateFieldSet(_game, this, on);
      store(this);
    }
  }, {
    key: "gameVolume",
    get: function get() {
      return _classPrivateFieldGet(_gameVolume, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_gameVolume, this, normalizeVolumeValue(value));
      store(this);
    }
  }]);
}();