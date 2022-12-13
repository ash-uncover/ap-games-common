"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestFullscreen = exports.exitFullscreen = exports.FullscreenHelper = void 0;
var requestFullscreen = function requestFullscreen(element) {
  try {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  } catch (error) {
    console.log('failed to apply full screen');
  }
};
exports.requestFullscreen = requestFullscreen;
var exitFullscreen = function exitFullscreen() {
  try {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } catch (error) {
    console.log('failed to exit fullscreen');
  }
};
exports.exitFullscreen = exitFullscreen;
var FullscreenHelper = {
  requestFullscreen: requestFullscreen,
  exitFullscreen: exitFullscreen
};
exports.FullscreenHelper = FullscreenHelper;