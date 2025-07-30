"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeVolumeValue = normalizeVolumeValue;
function normalizeVolumeValue(value) {
  return Math.min(Math.max(0, value), 100);
}