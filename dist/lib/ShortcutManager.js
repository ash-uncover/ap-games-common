"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShortcuts = exports.getShortcutId = void 0;
const js_utils_1 = require("@uncover/js-utils");
let SHORTCUTS_DOWN = {};
let SHORTCUTS_UP = {};
let SHORTCUTS_SETS = [];
document.addEventListener('keydown', (event) => {
    const shortcutId = (0, exports.getShortcutId)(event);
    const shortcut = SHORTCUTS_DOWN[shortcutId];
    if (shortcut) {
        shortcut.callback();
    }
});
document.addEventListener('keyup', (event) => {
    const shortcutId = (0, exports.getShortcutId)(event);
    const shortcut = SHORTCUTS_UP[shortcutId];
    if (shortcut) {
        shortcut.callback();
    }
});
const getShortcutId = (shortcut) => {
    return `${shortcut.code}-${Boolean(shortcut.altKey)}-${Boolean(shortcut.ctrlKey)}-${Boolean(shortcut.shiftKey)}`;
};
exports.getShortcutId = getShortcutId;
const updateShortcuts = () => {
    SHORTCUTS_DOWN = SHORTCUTS_SETS.reduce((acc, shortcutSet) => {
        shortcutSet.shortcuts.forEach((shortcut) => {
            if (shortcut.down) {
                const shortcutId = (0, exports.getShortcutId)(shortcut);
                const currentShortcut = acc[shortcutId];
                if (!currentShortcut || (currentShortcut.priority && currentShortcut.priority < shortcutSet.priority)) {
                    acc[shortcutId] = shortcut;
                }
            }
        });
        return acc;
    }, {});
    SHORTCUTS_UP = SHORTCUTS_SETS.reduce((acc, shortcutSet) => {
        shortcutSet.shortcuts.forEach((shortcut) => {
            if (!shortcut.down) {
                const shortcutId = (0, exports.getShortcutId)(shortcut);
                const currentShortcut = acc[shortcutId];
                if (!currentShortcut || (currentShortcut.priority && currentShortcut.priority < shortcutSet.priority)) {
                    acc[shortcutId] = shortcut;
                }
            }
        });
        return acc;
    }, {});
};
exports.updateShortcuts = updateShortcuts;
const ShortcutManager = {
    addShortcuts: (shortcuts) => {
        ShortcutManager.removeShortcuts(shortcuts.id, false);
        SHORTCUTS_SETS.push(shortcuts);
        (0, exports.updateShortcuts)();
    },
    removeShortcuts: (id, update) => {
        const set = SHORTCUTS_SETS.find(set => set.id === id);
        SHORTCUTS_SETS = js_utils_1.ArrayUtils.removeElement(SHORTCUTS_SETS, set);
        if (update !== false) {
            (0, exports.updateShortcuts)();
        }
    },
    reset: () => {
        SHORTCUTS_DOWN = {};
        SHORTCUTS_UP = {};
        SHORTCUTS_SETS.length = 0;
    }
};
exports.default = ShortcutManager;
