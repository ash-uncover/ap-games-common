import AudioManagerBase from './lib/AudioManager';
import DataManagerBase from './lib/DataManager';
import MessageBase from './lib/message/Message';
import MessageListenerBase from './lib/message/MessageListener';
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
export type Message = MessageBase;
export type MessageListener = MessageListenerBase;
export declare const MessageDispatcher: {
    "__#3@#listeners": MessageListenerBase[];
    dispatch(message: MessageBase): void;
    register(listener: MessageListenerBase): void;
    registerWindow(wdow: Window, origin: string): void;
    unregister(context: any): void;
    "__#3@#handlePostMessage"(event: any): void;
};
export declare const useMessageDispatcher: () => (message: MessageBase) => void;
export declare const ShortcutManager: {
    addShortcuts: (shortcuts: import("./lib/ShortcutManager").Shortcuts) => () => void;
    removeShortcuts: (id: string, update?: boolean | undefined) => void;
    reset: () => void;
};
