"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitFullscreen = exports.requestFullscreen = void 0;
const requestFullscreen = (element) => {
    try {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    }
    catch (error) {
        console.log('failed to apply full screen');
    }
};
exports.requestFullscreen = requestFullscreen;
const exitFullscreen = () => {
    try {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
    catch (error) {
        console.log('failed to exit fullscreen');
    }
};
exports.exitFullscreen = exitFullscreen;
const FullscreenHelper = {
    requestFullscreen: exports.requestFullscreen,
    exitFullscreen: exports.exitFullscreen
};
exports.default = FullscreenHelper;
//# sourceMappingURL=FullscreenHelper.js.map