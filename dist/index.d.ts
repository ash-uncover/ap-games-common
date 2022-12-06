import AudioManagerBase from './lib/AudioManager';
import DataManagerBase from './lib/DataManager';
export * from './lib/AudioManager';
export * from './lib/DataManager';
export * from './lib/FullscreenHelper';
export * from './lib/ShortcutManager';
export declare const AudioManager: typeof AudioManagerBase;
export declare const DataManager: typeof DataManagerBase;
export declare const FullscreenHelper: {
    requestFullscreen: (element: HTMLElement) => void;
    exitFullscreen: () => void;
};
export declare const ShortcutManager: {
    addShortcuts: (shortcuts: import("./lib/ShortcutManager").Shortcuts) => () => void;
    removeShortcuts: (id: string, update?: boolean | undefined) => void;
    reset: () => void;
};
