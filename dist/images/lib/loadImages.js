"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImages = void 0;
var _ImageLoader = require("./ImageLoader");
var loader = new _ImageLoader.ImageLoader();
var loadImages = function loadImages(path, onProgress) {
  return loader.loadImages(path, onProgress);
};
exports.loadImages = loadImages;