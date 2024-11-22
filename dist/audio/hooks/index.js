"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAudioVolume = exports.useAudioLoad = exports.useAudioEffect = exports.useAudio = exports.loadAudio = void 0;
var _react = require("react");
var _AudioPlayer = require("../lib/AudioPlayer");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var player = new _AudioPlayer.AudioPlayer();
var loadAudio = exports.loadAudio = function loadAudio(path, onProgress) {
  return player.load(path, onProgress);
};
var useAudioLoad = exports.useAudioLoad = function useAudioLoad(path, onProgress) {
  (0, _react.useEffect)(function () {
    loadAudio(path, onProgress);
  }, []);
};
var useAudioEffect = exports.useAudioEffect = function useAudioEffect(path, options) {
  (0, _react.useEffect)(function () {
    var list = player.mount(path, options);
    list.play();
    return function () {
      return player.unmount(list);
    };
  }, []);
};
var useAudio = exports.useAudio = function useAudio(path, options) {
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
var useAudioVolume = exports.useAudioVolume = function useAudioVolume() {
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