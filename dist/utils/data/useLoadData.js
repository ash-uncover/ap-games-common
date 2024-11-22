"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoadData = void 0;
var _react = require("react");
var _hooks = require("../../audio/hooks");
var _loadImages = require("../../images/lib/loadImages");
var useLoadData = exports.useLoadData = function useLoadData(_ref, onProgress, onLoaded) {
  var images = _ref.images,
    audios = _ref.audios,
    delayed = _ref.delayed;
  (0, _react.useEffect)(function () {
    var audiosLoaded = 0;
    var imagesLoaded = 0;
    var handleAudioProgress = function handleAudioProgress() {
      audiosLoaded++;
      handleProgress();
    };
    var handleImageProgress = function handleImageProgress() {
      imagesLoaded++;
      handleProgress();
    };
    var handleProgress = function handleProgress() {
      onProgress(Math.floor((audiosLoaded + imagesLoaded) * 100 / (audios.length + images.length)));
    };
    if (delayed !== false) {
      Promise.allSettled([(0, _hooks.loadAudio)(audios, handleAudioProgress), (0, _loadImages.loadImages)(images, handleImageProgress)]).then(function () {
        if (onLoaded) {
          onLoaded();
        }
      });
    }
  }, [images, audios, delayed]);
};