"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultGameSettings = getDefaultGameSettings;
function getDefaultGameSettings() {
  return {
    audioMaster: true,
    audioMasterVolume: 100,
    audioGame: true,
    audioGameVolume: 100,
    audioMusic: true,
    audioMusicVolume: 100,
    audioUi: true,
    audioUiVolume: 100,
    brightness: 100,
    contrast: 100,
    lang: null
  };
}