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
  fullScreen: boolean
  lang: string | null
}

export interface GameSettingsModelOptions {
  audioMaster?: boolean
  audioMasterVolume?: number
  audioMusic?: boolean
  audioMusicVolume?: number
  audioGame?: boolean
  audioGameVolume?: number
  audioUi?: boolean
  audioUiVolume?: number
  brightness?: number
  contrast?: number
  fullScreen?: boolean
  lang?: string | null
}

export function getDefaultGameSettings(options: GameSettingsModelOptions = {}): GameSettingsModel {
  return {
    audioMaster: options.audioMaster || true,
    audioMasterVolume: options.audioMasterVolume || 100,
    audioGame: options.audioGame || true,
    audioGameVolume: options.audioGameVolume || 100,
    audioMusic: options.audioMusic || true,
    audioMusicVolume: options.audioMusicVolume || 100,
    audioUi: options.audioUi || true,
    audioUiVolume: options.audioUiVolume || 100,
    brightness: options.brightness || 100,
    contrast: options.contrast || 100,
    fullScreen: options.fullScreen || false,
    lang: options.lang || null
  }
}