import { ArrayUtils, ObjectUtils } from '@uncover/js-utils'
import { AudioCategories } from '../constants/AudioCategory'
import { AudioLoader } from './AudioLoader'
import { AudioVolumeManager } from './AudioVolumeManager'
import { AudioPlayOptions } from './AudioPlayOptions'
import { AudioList } from './AudioList'

export interface AudioPlayerData {
  playing: AudioList[]
}

export class AudioPlayer {

  // Attributes //

  #loader: AudioLoader
  #volumeManager: AudioVolumeManager
  #playing: AudioList[]

  #listeners: ((data: AudioPlayerData) => void)[] = []

  // Constructor //

  constructor(loader?: AudioLoader, volumeManager?: AudioVolumeManager) {
    this.#loader = loader || new AudioLoader()
    this.#volumeManager = volumeManager || new AudioVolumeManager()
    this.#playing = []
  }

  // Getters & Setters //

  get playing () {
    return this.#playing
  }

  get master () {
    return this.#volumeManager.master
  }
  get masterVolume () {
    return this.#volumeManager.masterVolume
  }

  get game () {
    return this.#volumeManager.game
  }
  get gameVolume () {
    return this.#volumeManager.gameVolume
  }

  get music () {
    return this.#volumeManager.music
  }
  get musicVolume () {
    return this.#volumeManager.musicVolume
  }

  get ui () {
    return this.#volumeManager.ui
  }
  get uiVolume () {
    return this.#volumeManager.uiVolume
  }

  set master (on: boolean) {
    this.#volumeManager.master = on
  }
  set masterVolume (volume: number) {
    this.#volumeManager.masterVolume = volume
  }

  set game (on: boolean) {
    this.#volumeManager.game = on
  }
  set gameVolume (volume: number) {
    this.#volumeManager.gameVolume = volume
  }

  set music (on: boolean) {
    this.#volumeManager.music = on
  }
  set musicVolume (volume: number) {
    this.#volumeManager.musicVolume = volume
  }

  set ui (on: boolean) {
    this.#volumeManager.ui = on
  }
  set uiVolume (volume: number) {
    this.#volumeManager.uiVolume = volume
  }

  // Public methods //

  register(listener: (data: AudioPlayerData) => void) {
    this.#listeners.push(listener)
  }
  unregister(listener: (data: AudioPlayerData) => void) {
    this.#listeners = ArrayUtils.removeElement(this.#listeners, listener)
  }
  notify() {
    this.#listeners.forEach(listener => {
      listener({
        playing: this.playing
      })
    })
  }

  async load(path: string | string[], onProgress?: (value: number) => void) {
    const paths = ObjectUtils.arrayfy(path)
    if (path.length) {
      let loaded = 0
      return Promise.allSettled(paths.map((p) => {
        return this.#loader.load(p)
          .then(() => {
            if (onProgress) {
              loaded++
              onProgress(loaded)
            }
          })
          .catch((error) => {
            if (onProgress) {
              loaded++
              onProgress(loaded)
            }
            throw error
          })
      }))
    }
    return Promise.resolve()
  }

  mount(path: string | string[], options?: AudioPlayOptions) {
    const paths = ObjectUtils.arrayfy(path)
    const list = new AudioList(paths, options)
    this.#playing.push(list)
    this.updateVolume()
    return list
  }

  unmount (list: AudioList) {
    list.stop()
    this.#playing = ArrayUtils.removeElement(this.#playing, list)
  }

  updateVolume () {
    this.#playing.forEach((list: AudioList) => {
      switch(list.category) {
        case AudioCategories.NONE: {
          if (this.master) {
            list.volume = this.masterVolume
          } else {
            list.volume = 0
          }
          break
        }
        case AudioCategories.GAME: {
          if (this.master && this.game) {
            list.volume = (this.masterVolume * this.gameVolume) / 100
          } else {
            list.volume = 0
          }
          break
        }
        case AudioCategories.MUSIC: {
          if (this.master && this.music) {
            list.volume = (this.masterVolume * this.musicVolume) / 100
          } else {
            list.volume = 0
          }
          break
        }
        case AudioCategories.UI: {
          if (this.master && this.ui) {
            list.volume = (this.masterVolume * this.uiVolume) / 100
          } else {
            list.volume = 0
          }
          break
        }
      }
    })
  }
}