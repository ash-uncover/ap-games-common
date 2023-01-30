import { AudioPlayOptions } from '../lib/AudioPlayOptions';
export declare const loadAudio: (path: string | string[], onProgress?: ((value: number) => void) | undefined) => Promise<void | PromiseSettledResult<void>[]>;
export declare const useAudioLoad: (path: string | string[], onProgress?: ((value: number) => void) | undefined) => void;
export declare const useAudioEffect: (path: string | string[], options?: AudioPlayOptions) => void;
export declare const useAudio: (path: string | string[], options?: AudioPlayOptions) => {
    play: () => void;
    pause: () => void;
    stop: () => void;
    next: () => void;
    previous: () => void;
};
export declare const useAudioVolume: () => {
    master: boolean;
    masterVolume: number;
    game: boolean;
    gameVolume: number;
    music: boolean;
    musicVolume: number;
    ui: boolean;
    uiVolume: number;
    setMaster: (on: boolean) => void;
    setMasterVolume: (volume: number) => void;
    setGame: (on: boolean) => void;
    setGameVolume: (volume: number) => void;
    setMusic: (on: boolean) => void;
    setMusicVolume: (volume: number) => void;
    setUi: (on: boolean) => void;
    setUiVolume: (volume: number) => void;
};
