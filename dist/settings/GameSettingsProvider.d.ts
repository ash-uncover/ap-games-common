import React, { ReactNode } from 'react';
import { GameSettingsModel } from './GameSettingsModel';
export declare const GameSettingsContext: React.Context<GameSettingsModel>;
export declare const GameSettingsDispatchContext: React.Context<React.Dispatch<any>>;
export interface GameSettingsProviderProperties {
    name: string;
    children: ReactNode;
}
export declare const GameSettingsProvider: ({ name, children }: GameSettingsProviderProperties) => React.JSX.Element;
declare function setAudioMaster(audioMaster: boolean): {
    type: string;
    audioMaster: boolean;
};
declare function setAudioMasterVolume(audioMasterVolume: number): {
    type: string;
    audioMasterVolume: number;
};
declare function setAudioGame(audioGame: boolean): {
    type: string;
    audioGame: boolean;
};
declare function setAudioGameVolume(audioGameVolume: number): {
    type: string;
    audioGameVolume: number;
};
declare function setAudioMusic(audioMusic: boolean): {
    type: string;
    audioMusic: boolean;
};
declare function setAudioMusicVolume(audioMusicVolume: number): {
    type: string;
    audioMusicVolume: number;
};
declare function setAudioUi(audioUi: boolean): {
    type: string;
    audioUi: boolean;
};
declare function setAudioUiVolume(audioUiVolume: number): {
    type: string;
    audioUiVolume: number;
};
declare function setBrightness(brightness: number): {
    type: string;
    brightness: number;
};
declare function setContrast(contrast: number): {
    type: string;
    contrast: number;
};
declare function setFullScreen(fullScreen: boolean): {
    type: string;
    fullScreen: boolean;
};
declare function setLang(lang: String): {
    type: string;
    lang: String;
};
export declare const GameSettingsActions: {
    setAudioGame: typeof setAudioGame;
    setAudioGameVolume: typeof setAudioGameVolume;
    setAudioMaster: typeof setAudioMaster;
    setAudioMasterVolume: typeof setAudioMasterVolume;
    setAudioMusic: typeof setAudioMusic;
    setAudioMusicVolume: typeof setAudioMusicVolume;
    setAudioUi: typeof setAudioUi;
    setAudioUiVolume: typeof setAudioUiVolume;
    setBrightness: typeof setBrightness;
    setContrast: typeof setContrast;
    setFullScreen: typeof setFullScreen;
    setLang: typeof setLang;
};
export {};
