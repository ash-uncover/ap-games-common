"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DataManager_basePath;
Object.defineProperty(exports, "__esModule", { value: true });
class DataManager {
    // Constructor //
    constructor(basePath) {
        // Attributes //
        _DataManager_basePath.set(this, void 0);
        __classPrivateFieldSet(this, _DataManager_basePath, basePath, "f");
    }
    // Getters & Setters //
    // Public Methods //
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers();
            const request = {
                method: 'GET',
                headers
            };
            const response = yield fetch(`${__classPrivateFieldGet(this, _DataManager_basePath, "f")}${url}`, request);
            return yield response.json();
        });
    }
}
_DataManager_basePath = new WeakMap();
exports.default = DataManager;
