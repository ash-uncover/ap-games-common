export interface GameSettingsModel {
  audioMaster: boolean
  audioMasterVolume: number
  audioMusic: boolean
  audioMusicVolume: number
  audioGame: boolean
  audioGameVolume: number
  audioUi: boolean
  audioUiVolume: number
  brightness: number
  contrast: number
}

export function getDefaultGameSettings(): GameSettingsModel {
  return {
    audioMaster: true,
    audioMasterVolume: 100,
    audioGame: true,
    audioGameVolume: 100,
    audioMusic: true,
    audioMusicVolume: 100,
    audioUi: true,
    audioUiVolume: 100,
    brightness: 100,
    contrast: 100
  }
}