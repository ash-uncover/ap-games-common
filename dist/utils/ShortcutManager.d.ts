export interface Shortcuts {
    id: string;
    priority: number;
    shortcuts: Shortcut[];
}
export interface ShortcutMap {
    [key: string]: Shortcut;
}
export interface ShortcutId {
    code: string;
    altKey?: boolean;
    ctrlKey?: boolean;
    shiftKey?: boolean;
}
export interface Shortcut extends ShortcutId {
    down?: boolean;
    priority?: number;
    callback: () => void;
}
export declare const getShortcutId: (shortcut: ShortcutId) => string;
export declare const updateShortcuts: () => void;
export declare const ShortcutManager: {
    addShortcuts: (shortcuts: Shortcuts) => () => void;
    removeShortcuts: (id: string, update?: boolean) => void;
    reset: () => void;
};
