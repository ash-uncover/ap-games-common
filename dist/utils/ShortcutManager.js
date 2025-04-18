"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateShortcuts = exports.getShortcutId = exports.ShortcutManager = void 0;
var _jsUtils = require("@sol.ac/js-utils");
var SHORTCUTS_DOWN = {};
var SHORTCUTS_UP = {};
var SHORTCUTS_SETS = [];
document.addEventListener('keydown', function (event) {
  var shortcutId = getShortcutId(event);
  var shortcut = SHORTCUTS_DOWN[shortcutId];
  if (shortcut) {
    shortcut.callback();
  }
});
document.addEventListener('keyup', function (event) {
  var shortcutId = getShortcutId(event);
  var shortcut = SHORTCUTS_UP[shortcutId];
  if (shortcut) {
    shortcut.callback();
  }
});
var getShortcutId = exports.getShortcutId = function getShortcutId(shortcut) {
  return "".concat(shortcut.code, "-").concat(Boolean(shortcut.altKey), "-").concat(Boolean(shortcut.ctrlKey), "-").concat(Boolean(shortcut.shiftKey));
};
var updateShortcuts = exports.updateShortcuts = function updateShortcuts() {
  SHORTCUTS_DOWN = SHORTCUTS_SETS.reduce(function (acc, shortcutSet) {
    shortcutSet.shortcuts.forEach(function (shortcut) {
      if (shortcut.down) {
        var shortcutId = getShortcutId(shortcut);
        var currentShortcut = acc[shortcutId];
        if (!currentShortcut || currentShortcut.priority && currentShortcut.priority < shortcutSet.priority) {
          acc[shortcutId] = shortcut;
        }
      }
    });
    return acc;
  }, {});
  SHORTCUTS_UP = SHORTCUTS_SETS.reduce(function (acc, shortcutSet) {
    shortcutSet.shortcuts.forEach(function (shortcut) {
      if (!shortcut.down) {
        var shortcutId = getShortcutId(shortcut);
        var currentShortcut = acc[shortcutId];
        if (!currentShortcut || currentShortcut.priority && currentShortcut.priority < shortcutSet.priority) {
          acc[shortcutId] = shortcut;
        }
      }
    });
    return acc;
  }, {});
};
var ShortcutManager = exports.ShortcutManager = {
  addShortcuts: function addShortcuts(shortcuts) {
    ShortcutManager.removeShortcuts(shortcuts.id, false);
    SHORTCUTS_SETS.push(shortcuts);
    updateShortcuts();
    return function () {
      return ShortcutManager.removeShortcuts(shortcuts.id);
    };
  },
  removeShortcuts: function removeShortcuts(id, update) {
    var set = SHORTCUTS_SETS.find(function (set) {
      return set.id === id;
    });
    SHORTCUTS_SETS = _jsUtils.ArrayUtils.removeElement(SHORTCUTS_SETS, set);
    if (update !== false) {
      updateShortcuts();
    }
  },
  reset: function reset() {
    SHORTCUTS_DOWN = {};
    SHORTCUTS_UP = {};
    SHORTCUTS_SETS.length = 0;
  }
};