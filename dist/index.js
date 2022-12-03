"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortcutManager = exports.DataManager = exports.AudioManager = void 0;
const AudioManager_1 = __importDefault(require("./lib/AudioManager"));
const DataManager_1 = __importDefault(require("./lib/DataManager"));
const ShortcutManager_1 = __importDefault(require("./lib/ShortcutManager"));
__exportStar(require("./lib/AudioManager"), exports);
__exportStar(require("./lib/DataManager"), exports);
__exportStar(require("./lib/ShortcutManager"), exports);
exports.AudioManager = AudioManager_1.default;
exports.DataManager = DataManager_1.default;
exports.ShortcutManager = ShortcutManager_1.default;
