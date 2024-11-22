"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImages = void 0;
var _ImageLoader = require("./ImageLoader");
var loader = new _ImageLoader.ImageLoader();
var loadImages = exports.loadImages = function loadImages(path, onProgress) {
  return loader.loadImages(path, onProgress);
};