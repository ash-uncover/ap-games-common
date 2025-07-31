export interface GameSettingsModel {
    audioMaster: boolean;
    audioMasterVolume: number;
    audioMusic: boolean;
    audioMusicVolume: number;
    audioGame: boolean;
    audioGameVolume: number;
    audioUi: boolean;
    audioUiVolume: number;
    brightness: number;
    contrast: number;
    lang: string | null;
}
export declare function getDefaultGameSettings(): GameSettingsModel;
