"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultGameSettings = getDefaultGameSettings;
function getDefaultGameSettings() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    audioMaster: options.audioMaster || true,
    audioMasterVolume: options.audioMasterVolume || 100,
    audioGame: options.audioGame || true,
    audioGameVolume: options.audioGameVolume || 100,
    audioMusic: options.audioMusic || true,
    audioMusicVolume: options.audioMusicVolume || 100,
    audioUi: options.audioUi || true,
    audioUiVolume: options.audioUiVolume || 100,
    brightness: options.brightness || 100,
    contrast: options.contrast || 100,
    fullScreen: options.fullScreen || false,
    lang: options.lang || null
  };
}