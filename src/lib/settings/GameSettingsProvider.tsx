import React, { createContext, ReactNode, useEffect, useReducer } from 'react'
import { GameSettingsModel, getDefaultGameSettings } from './GameSettingsModel'
import { normalizeVolumeValue } from '../audio/lib/AudioUtils'

// #region Context
export const GameSettingsContext = createContext<GameSettingsModel>({
  ...getDefaultGameSettings()
})
export const GameSettingsDispatchContext = createContext<React.Dispatch<any>>(
  () => {}
)
// #endregion

// #region Storage
const storeContext = (name: string, settings: GameSettingsModel) => {
  localStorage.setItem(`${name}-settings`, JSON.stringify(settings))
}
const loadContext = (name: string) => {
  return JSON.parse(localStorage.getItem(`${name}-settings`) || '{}')
}
// #endregion

// #region Provider
export interface GameSettingsProviderProperties {
  name: string
  children: ReactNode
}
export const GameSettingsProvider = ({
  name,
  children
}: GameSettingsProviderProperties) => {

  // #region > Hooks
  const [settings, dispatch] = useReducer(
    settingsReducer,
    {
      ...getDefaultGameSettings(),
      ...loadContext(name)
    }
  )
  useEffect(() => {
    storeContext(name, settings)
  }, [settings])
  // #endregion

  // #region > Rendering
  return (
    <GameSettingsContext.Provider value={settings}>
      <GameSettingsDispatchContext.Provider value={dispatch}>
        {children}
      </GameSettingsDispatchContext.Provider>
    </GameSettingsContext.Provider>
  )
  // #endregion
}
// #endregion

// #region Reducer
const SET_AUDIO_MASTER = 'SET_AUDIO_MASTER'
function setAudioMaster(audioMaster: boolean) {
  return {
    type: SET_AUDIO_MASTER,
    audioMaster
  }
}
const SET_AUDIO_MASTER_VOLUME = 'SET_AUDIO_MASTER_VOLUME'
function setAudioMasterVolume(audioMasterVolume: number) {
  return {
    type: SET_AUDIO_MASTER_VOLUME,
    audioMasterVolume
  }
}
const SET_AUDIO_GAME = 'SET_AUDIO_GAME'
function setAudioGame(audioGame: boolean) {
  return {
    type: SET_AUDIO_GAME,
    audioGame
  }
}
const SET_AUDIO_GAME_VOLUME = 'SET_AUDIO_GAME_VOLUME'
function setAudioGameVolume(audioGameVolume: number) {
  return {
    type: SET_AUDIO_GAME_VOLUME,
    audioGameVolume
  }
}
const SET_AUDIO_MUSIC = 'SET_AUDIO_MUSIC'
function setAudioMusic(audioMusic: boolean) {
  return {
    type: SET_AUDIO_MUSIC,
    audioMusic
  }
}
const SET_AUDIO_MUSIC_VOLUME = 'SET_AUDIO_MUSIC_VOLUME'
function setAudioMusicVolume(audioMusicVolume: number) {
  return {
    type: SET_AUDIO_MUSIC_VOLUME,
    audioMusicVolume
  }
}
const SET_AUDIO_UI = 'SET_AUDIO_UI'
function setAudioUi(audioUi: boolean) {
  return {
    type: SET_AUDIO_UI,
    audioUi
  }
}
const SET_AUDIO_UI_VOLUME = 'SET_AUDIO_UI_VOLUME'
function setAudioUiVolume(audioUiVolume: number) {
  return {
    type: SET_AUDIO_UI_VOLUME,
    audioUiVolume
  }
}
const SET_BRIGHTNESS = 'SET_BRIGHTNESS'
function setBrightness(brightness: number) {
  return {
    type: SET_BRIGHTNESS,
    brightness
  }
}
const SET_CONTRAST = 'SET_CONTRAST'
function setContrast(contrast: number) {
  return {
    type: SET_CONTRAST,
    contrast
  }
}
const SET_LANG = 'SET_LANG'
function setLang(lang: String) {
  return {
    type: SET_LANG,
    lang
  }
}
export const GameSettingsActions = {
  setAudioGame,
  setAudioGameVolume,
  setAudioMaster,
  setAudioMasterVolume,
  setAudioMusic,
  setAudioMusicVolume,
  setAudioUi,
  setAudioUiVolume,
  setBrightness,
  setContrast,
  setLang
}
function settingsReducer(settings: GameSettingsModel, action: any) {
  switch (action.type) {
    case SET_AUDIO_GAME: {
      return {
        ...settings,
        audioGame: Boolean(action.audioGame)
      }
    }
    case SET_AUDIO_GAME_VOLUME: {
      return {
        ...settings,
        audioGameVolume: normalizeVolumeValue(action.audioGameVolume)
      }
    }
    case SET_AUDIO_MASTER: {
      return {
        ...settings,
        audioMaster: Boolean(action.audioMaster)
      }
    }
    case SET_AUDIO_MASTER_VOLUME: {
      return {
        ...settings,
        audioMasterVolume: normalizeVolumeValue(action.audioMasterVolume)
      }
    }
    case SET_AUDIO_MUSIC: {
      return {
        ...settings,
        audioMusic: Boolean(action.audioMusic)
      }
    }
    case SET_AUDIO_MUSIC_VOLUME: {
      return {
        ...settings,
        audioMusicVolume: normalizeVolumeValue(action.audioMusicVolume)
      }
    }
    case SET_AUDIO_UI: {
      return {
        ...settings,
        audioUi: Boolean(action.audioUi)
      }
    }
    case SET_AUDIO_UI_VOLUME: {
      return {
        ...settings,
        audioUiVolume: normalizeVolumeValue(action.audioUiVolume)
      }
    }
    case SET_BRIGHTNESS: {
      return {
        ...settings,
        brightness: action.brightness
      }
    }
    case SET_CONTRAST: {
      return {
        ...settings,
        contrast: action.contrast
      }
    }
    case SET_LANG: {
      return {
        ...settings,
        lang: action.lang
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
// #endregion