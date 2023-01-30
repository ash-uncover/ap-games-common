"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAudioVolume = exports.useAudioLoad = exports.useAudioEffect = exports.useAudio = exports.loadAudio = void 0;
var _react = require("react");
var _AudioPlayer = require("../lib/AudioPlayer");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var player = new _AudioPlayer.AudioPlayer();
var loadAudio = function loadAudio(path, onProgress) {
  return player.load(path, onProgress);
};
exports.loadAudio = loadAudio;
var useAudioLoad = function useAudioLoad(path, onProgress) {
  (0, _react.useEffect)(function () {
    loadAudio(path, onProgress);
  }, []);
};
exports.useAudioLoad = useAudioLoad;
var useAudioEffect = function useAudioEffect(path, options) {
  (0, _react.useEffect)(function () {
    var list = player.mount(path, options);
    list.play();
    return function () {
      return player.unmount(list);
    };
  }, []);
};
exports.useAudioEffect = useAudioEffect;
var useAudio = function useAudio(path, options) {
  var _useState = (0, _react.useState)({
      play: function play() {},
      pause: function pause() {},
      stop: function stop() {},
      next: function next() {},
      previous: function previous() {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    audio = _useState2[0],
    setAudio = _useState2[1];
  (0, _react.useEffect)(function () {
    var list = player.mount(path, options);
    setAudio({
      play: function play() {
        return list.play();
      },
      pause: function pause() {
        return list.pause();
      },
      stop: function stop() {
        return list.stop();
      },
      next: function next() {
        return list.next();
      },
      previous: function previous() {
        return list.previous();
      }
    });
    return function () {
      return player.unmount(list);
    };
  }, []);
  return audio;
};
exports.useAudio = useAudio;
var useAudioVolume = function useAudioVolume() {
  var _useState3 = (0, _react.useState)(player.master),
    _useState4 = _slicedToArray(_useState3, 2),
    master = _useState4[0],
    _setMaster = _useState4[1];
  var _useState5 = (0, _react.useState)(player.masterVolume),
    _useState6 = _slicedToArray(_useState5, 2),
    masterVolume = _useState6[0],
    _setMasterVolume = _useState6[1];
  var _useState7 = (0, _react.useState)(player.game),
    _useState8 = _slicedToArray(_useState7, 2),
    game = _useState8[0],
    _setGame = _useState8[1];
  var _useState9 = (0, _react.useState)(player.gameVolume),
    _useState10 = _slicedToArray(_useState9, 2),
    gameVolume = _useState10[0],
    _setGameVolume = _useState10[1];
  var _useState11 = (0, _react.useState)(player.music),
    _useState12 = _slicedToArray(_useState11, 2),
    music = _useState12[0],
    _setMusic = _useState12[1];
  var _useState13 = (0, _react.useState)(player.musicVolume),
    _useState14 = _slicedToArray(_useState13, 2),
    musicVolume = _useState14[0],
    _setMusicVolume = _useState14[1];
  var _useState15 = (0, _react.useState)(player.ui),
    _useState16 = _slicedToArray(_useState15, 2),
    ui = _useState16[0],
    _setUi = _useState16[1];
  var _useState17 = (0, _react.useState)(player.uiVolume),
    _useState18 = _slicedToArray(_useState17, 2),
    uiVolume = _useState18[0],
    _setUiVolume = _useState18[1];
  return {
    master: master,
    masterVolume: masterVolume,
    game: game,
    gameVolume: gameVolume,
    music: music,
    musicVolume: musicVolume,
    ui: ui,
    uiVolume: uiVolume,
    setMaster: function setMaster(on) {
      player.master = on;
      player.updateVolume();
      _setMaster(on);
    },
    setMasterVolume: function setMasterVolume(volume) {
      player.masterVolume = volume;
      player.updateVolume();
      _setMasterVolume(volume);
    },
    setGame: function setGame(on) {
      player.game = on;
      player.updateVolume();
      _setGame(on);
    },
    setGameVolume: function setGameVolume(volume) {
      player.gameVolume = volume;
      player.updateVolume();
      _setGameVolume(volume);
    },
    setMusic: function setMusic(on) {
      player.music = on;
      player.updateVolume();
      _setMusic(on);
    },
    setMusicVolume: function setMusicVolume(volume) {
      player.musicVolume = volume;
      player.updateVolume();
      _setMusicVolume(volume);
    },
    setUi: function setUi(on) {
      player.ui = on;
      player.updateVolume();
      _setUi(on);
    },
    setUiVolume: function setUiVolume(volume) {
      player.uiVolume = volume;
      player.updateVolume();
      _setUiVolume(volume);
    }
  };
};
exports.useAudioVolume = useAudioVolume;