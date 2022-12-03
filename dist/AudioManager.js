"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeVolumeValue = exports["default"] = exports.AudioTypes = void 0;
var _jsUtils = require("@uncover/js-utils");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var AudioTypes = {
  MUSIC: 'music',
  INTERFACE: 'interface',
  GAME: 'game'
};
exports.AudioTypes = AudioTypes;
var normalizeVolumeValue = function normalizeVolumeValue(value) {
  return Math.min(Math.max(0, value), 100);
};
exports.normalizeVolumeValue = normalizeVolumeValue;
var _basePath = /*#__PURE__*/new WeakMap();
var _audios = /*#__PURE__*/new WeakMap();
var _playing = /*#__PURE__*/new WeakMap();
var _master = /*#__PURE__*/new WeakMap();
var _masterVolume = /*#__PURE__*/new WeakMap();
var _music = /*#__PURE__*/new WeakMap();
var _musicVolume = /*#__PURE__*/new WeakMap();
var _interface = /*#__PURE__*/new WeakMap();
var _interfaceVolume = /*#__PURE__*/new WeakMap();
var _game = /*#__PURE__*/new WeakMap();
var _gameVolume = /*#__PURE__*/new WeakMap();
var _updateVolumes = /*#__PURE__*/new WeakSet();
var AudioManager = /*#__PURE__*/function () {
  function AudioManager(basePath) {
    _classCallCheck(this, AudioManager);
    _classPrivateMethodInitSpec(this, _updateVolumes);
    _classPrivateFieldInitSpec(this, _basePath, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _audios, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _playing, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _master, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _masterVolume, {
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
    _classPrivateFieldInitSpec(this, _interface, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _interfaceVolume, {
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
    _classPrivateFieldSet(this, _basePath, basePath);
  }
  _createClass(AudioManager, [{
    key: "master",
    get: function get() {
      return _classPrivateFieldGet(this, _master);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _master, on);
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "masterVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _masterVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _masterVolume, normalizeVolumeValue(value));
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "music",
    get: function get() {
      return _classPrivateFieldGet(this, _music);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _music, on);
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "musicVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _musicVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _musicVolume, normalizeVolumeValue(value));
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "interface",
    get: function get() {
      return _classPrivateFieldGet(this, _interface);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _interface, on);
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "interfaceVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _interfaceVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _interfaceVolume, normalizeVolumeValue(value));
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "game",
    get: function get() {
      return _classPrivateFieldGet(this, _game);
    },
    set: function set(on) {
      _classPrivateFieldSet(this, _game, on);
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "gameVolume",
    get: function get() {
      return _classPrivateFieldGet(this, _gameVolume);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _gameVolume, normalizeVolumeValue(value));
      _classPrivateMethodGet(this, _updateVolumes, _updateVolumes2).call(this);
    }
  }, {
    key: "play",
    value: function play(path) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AudioTypes.GAME;
      this.stop(path);
      switch (type) {
        case AudioTypes.GAME:
          {
            if (_classPrivateFieldGet(this, _game)) {
              _classPrivateFieldGet(this, _audios)[path].volume = _classPrivateFieldGet(this, _gameVolume) / 100;
            } else {
              _classPrivateFieldGet(this, _audios)[path].volume = 0;
            }
            break;
          }
        case AudioTypes.MUSIC:
          {
            if (_classPrivateFieldGet(this, _music)) {
              _classPrivateFieldGet(this, _audios)[path].volume = _classPrivateFieldGet(this, _musicVolume) / 100;
            } else {
              _classPrivateFieldGet(this, _audios)[path].volume = 0;
            }
            break;
          }
        case AudioTypes.INTERFACE:
          {
            if (_classPrivateFieldGet(this, _interface)) {
              _classPrivateFieldGet(this, _audios)[path].volume = _classPrivateFieldGet(this, _interfaceVolume) / 100;
            } else {
              _classPrivateFieldGet(this, _audios)[path].volume = 0;
            }
            break;
          }
      }
      try {
        _classPrivateFieldGet(this, _audios)[path].play();
        _classPrivateFieldGet(this, _playing).push({
          path: path,
          type: type
        });
      } catch (error) {
        return false;
      }
      return true;
    }
  }, {
    key: "stop",
    value: function stop(path) {
      var _this = this;
      if (!_classPrivateFieldGet(this, _audios)[path]) {
        _classPrivateFieldGet(this, _audios)[path] = new Audio("".concat(_classPrivateFieldGet(this, _basePath)).concat(path));
        _classPrivateFieldGet(this, _audios)[path].addEventListener('ended', function () {
          return _this.stop(path);
        });
      }
      var playing = _classPrivateFieldGet(this, _playing).find(function (play) {
        return play.path === path;
      });
      _classPrivateFieldSet(this, _playing, _jsUtils.ArrayUtils.removeElement(_classPrivateFieldGet(this, _playing), playing));
      _classPrivateFieldGet(this, _audios)[path].pause();
      _classPrivateFieldGet(this, _audios)[path].currentTime = 0;
    }
  }]);
  return AudioManager;
}();
function _updateVolumes2() {
  var _this2 = this;
  _classPrivateFieldGet(this, _playing).forEach(function (audio) {
    switch (audio.type) {
      case AudioTypes.GAME:
        {
          if (_classPrivateFieldGet(_this2, _game)) {
            _classPrivateFieldGet(_this2, _audios)[audio.path].volume = _classPrivateFieldGet(_this2, _gameVolume) / 100;
          } else {
            _classPrivateFieldGet(_this2, _audios)[audio.path].volume = 0;
          }
          break;
        }
      case AudioTypes.MUSIC:
        {
          if (_classPrivateFieldGet(_this2, _music)) {
            _classPrivateFieldGet(_this2, _audios)[audio.path].volume = _classPrivateFieldGet(_this2, _musicVolume) / 100;
          } else {
            _classPrivateFieldGet(_this2, _audios)[audio.path].volume = 0;
          }
          break;
        }
      case AudioTypes.INTERFACE:
        {
          if (_classPrivateFieldGet(_this2, _interface)) {
            _classPrivateFieldGet(_this2, _audios)[audio.path].volume = _classPrivateFieldGet(_this2, _interfaceVolume) / 100;
          } else {
            _classPrivateFieldGet(_this2, _audios)[audio.path].volume = 0;
          }
          break;
        }
    }
  });
}
var _default = AudioManager;
exports["default"] = _default;