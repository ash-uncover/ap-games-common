"use strict";
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
var _AudioManager_instances, _AudioManager_basePath, _AudioManager_audios, _AudioManager_playing, _AudioManager_master, _AudioManager_masterVolume, _AudioManager_music, _AudioManager_musicVolume, _AudioManager_interface, _AudioManager_interfaceVolume, _AudioManager_game, _AudioManager_gameVolume, _AudioManager_updateVolumes, _AudioManager_addAudio;
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeVolumeValue = exports.AudioTypes = void 0;
const js_utils_1 = require("@uncover/js-utils");
exports.AudioTypes = {
    MUSIC: 'music',
    INTERFACE: 'interface',
    GAME: 'game'
};
const normalizeVolumeValue = (value) => {
    return Math.min(Math.max(0, value), 100);
};
exports.normalizeVolumeValue = normalizeVolumeValue;
class AudioManager {
    constructor(basePath) {
        _AudioManager_instances.add(this);
        _AudioManager_basePath.set(this, void 0);
        _AudioManager_audios.set(this, {});
        _AudioManager_playing.set(this, []);
        _AudioManager_master.set(this, true);
        _AudioManager_masterVolume.set(this, 100);
        _AudioManager_music.set(this, true);
        _AudioManager_musicVolume.set(this, 100);
        _AudioManager_interface.set(this, true);
        _AudioManager_interfaceVolume.set(this, 100);
        _AudioManager_game.set(this, true);
        _AudioManager_gameVolume.set(this, 100);
        __classPrivateFieldSet(this, _AudioManager_basePath, basePath, "f");
    }
    get master() { return __classPrivateFieldGet(this, _AudioManager_master, "f"); }
    set master(on) {
        __classPrivateFieldSet(this, _AudioManager_master, on, "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get masterVolume() { return __classPrivateFieldGet(this, _AudioManager_masterVolume, "f"); }
    set masterVolume(value) {
        __classPrivateFieldSet(this, _AudioManager_masterVolume, (0, exports.normalizeVolumeValue)(value), "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get music() { return __classPrivateFieldGet(this, _AudioManager_music, "f"); }
    set music(on) {
        __classPrivateFieldSet(this, _AudioManager_music, on, "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get musicVolume() { return __classPrivateFieldGet(this, _AudioManager_musicVolume, "f"); }
    set musicVolume(value) {
        __classPrivateFieldSet(this, _AudioManager_musicVolume, (0, exports.normalizeVolumeValue)(value), "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get interface() { return __classPrivateFieldGet(this, _AudioManager_interface, "f"); }
    set interface(on) {
        __classPrivateFieldSet(this, _AudioManager_interface, on, "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get interfaceVolume() { return __classPrivateFieldGet(this, _AudioManager_interfaceVolume, "f"); }
    set interfaceVolume(value) {
        __classPrivateFieldSet(this, _AudioManager_interfaceVolume, (0, exports.normalizeVolumeValue)(value), "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get game() { return __classPrivateFieldGet(this, _AudioManager_game, "f"); }
    set game(on) {
        __classPrivateFieldSet(this, _AudioManager_game, on, "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    get gameVolume() { return __classPrivateFieldGet(this, _AudioManager_gameVolume, "f"); }
    set gameVolume(value) {
        __classPrivateFieldSet(this, _AudioManager_gameVolume, (0, exports.normalizeVolumeValue)(value), "f");
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_updateVolumes).call(this);
    }
    play(path, type = exports.AudioTypes.GAME) {
        this.stop(path);
        switch (type) {
            case exports.AudioTypes.GAME: {
                if (__classPrivateFieldGet(this, _AudioManager_game, "f")) {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].volume = __classPrivateFieldGet(this, _AudioManager_gameVolume, "f") / 100;
                }
                else {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].volume = 0;
                }
                break;
            }
            case exports.AudioTypes.MUSIC: {
                if (__classPrivateFieldGet(this, _AudioManager_music, "f")) {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].volume = __classPrivateFieldGet(this, _AudioManager_musicVolume, "f") / 100;
                }
                else {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].volume = 0;
                }
                break;
            }
            case exports.AudioTypes.INTERFACE: {
                if (__classPrivateFieldGet(this, _AudioManager_interface, "f")) {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].volume = __classPrivateFieldGet(this, _AudioManager_interfaceVolume, "f") / 100;
                }
                else {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].volume = 0;
                }
                break;
            }
        }
        try {
            __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].play();
            __classPrivateFieldGet(this, _AudioManager_playing, "f").push({
                path,
                type
            });
        }
        catch (error) {
            return () => { };
        }
        return () => this.stop(path);
    }
    stop(path) {
        __classPrivateFieldGet(this, _AudioManager_instances, "m", _AudioManager_addAudio).call(this, path);
        const playing = __classPrivateFieldGet(this, _AudioManager_playing, "f").find(play => play.path === path);
        __classPrivateFieldSet(this, _AudioManager_playing, js_utils_1.ArrayUtils.removeElement(__classPrivateFieldGet(this, _AudioManager_playing, "f"), playing), "f");
        __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].pause();
        __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].currentTime = 0;
    }
}
_AudioManager_basePath = new WeakMap(), _AudioManager_audios = new WeakMap(), _AudioManager_playing = new WeakMap(), _AudioManager_master = new WeakMap(), _AudioManager_masterVolume = new WeakMap(), _AudioManager_music = new WeakMap(), _AudioManager_musicVolume = new WeakMap(), _AudioManager_interface = new WeakMap(), _AudioManager_interfaceVolume = new WeakMap(), _AudioManager_game = new WeakMap(), _AudioManager_gameVolume = new WeakMap(), _AudioManager_instances = new WeakSet(), _AudioManager_updateVolumes = function _AudioManager_updateVolumes() {
    __classPrivateFieldGet(this, _AudioManager_playing, "f").forEach((audio) => {
        switch (audio.type) {
            case exports.AudioTypes.GAME: {
                if (__classPrivateFieldGet(this, _AudioManager_game, "f")) {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[audio.path].volume = __classPrivateFieldGet(this, _AudioManager_gameVolume, "f") / 100;
                }
                else {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[audio.path].volume = 0;
                }
                break;
            }
            case exports.AudioTypes.MUSIC: {
                if (__classPrivateFieldGet(this, _AudioManager_music, "f")) {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[audio.path].volume = __classPrivateFieldGet(this, _AudioManager_musicVolume, "f") / 100;
                }
                else {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[audio.path].volume = 0;
                }
                break;
            }
            case exports.AudioTypes.INTERFACE: {
                if (__classPrivateFieldGet(this, _AudioManager_interface, "f")) {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[audio.path].volume = __classPrivateFieldGet(this, _AudioManager_interfaceVolume, "f") / 100;
                }
                else {
                    __classPrivateFieldGet(this, _AudioManager_audios, "f")[audio.path].volume = 0;
                }
                break;
            }
        }
    });
}, _AudioManager_addAudio = function _AudioManager_addAudio(path) {
    if (!__classPrivateFieldGet(this, _AudioManager_audios, "f")[path]) {
        __classPrivateFieldGet(this, _AudioManager_audios, "f")[path] = new Audio(`${__classPrivateFieldGet(this, _AudioManager_basePath, "f")}${path}`);
        __classPrivateFieldGet(this, _AudioManager_audios, "f")[path].addEventListener('ended', () => this.stop(path));
    }
};
exports.default = AudioManager;
