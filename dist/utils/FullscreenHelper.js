"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestFullscreen = exports.exitFullscreen = exports.FullscreenHelper = void 0;
var requestFullscreen = exports.requestFullscreen = function requestFullscreen(element) {
  try {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  } catch (error) {
    console.log('failed to apply full screen');
  }
};
var exitFullscreen = exports.exitFullscreen = function exitFullscreen() {
  try {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } catch (error) {
    console.log('failed to exit fullscreen');
  }
};
var FullscreenHelper = exports.FullscreenHelper = {
  requestFullscreen: requestFullscreen,
  exitFullscreen: exitFullscreen
};