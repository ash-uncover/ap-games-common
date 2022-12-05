import AudioManagerBase from './lib/AudioManager';
import DataManagerBase from './lib/DataManager';
export * from './lib/AudioManager';
export * from './lib/DataManager';
export * from './lib/FullscreenHelper';
export * from './lib/MessageDispatcher';
export * from './lib/ShortcutManager';
export declare const AudioManager: typeof AudioManagerBase;
export declare const DataManager: typeof DataManagerBase;
export declare const FullscreenHelper: {
    requestFullscreen: (element: HTMLElement) => void;
    exitFullscreen: () => void;
};
export declare const MessageDispatcher: {
    "__#3@#listeners": import("./lib/MessageDispatcher").MessageListener[];
    dispatch(message: import("./lib/MessageDispatcher").Message): void;
    register(listener: import("./lib/MessageDispatcher").MessageListener): void;
    registerWindow(wdow: Window, origin: string): void;
    unregister(context: any): void;
    "__#3@#handlePostMessage"(event: any): void;
};
export declare const ShortcutManager: {
    addShortcuts: (shortcuts: import("./lib/ShortcutManager").Shortcuts) => () => void;
    removeShortcuts: (id: string, update?: boolean | undefined) => void;
    reset: () => void;
};
