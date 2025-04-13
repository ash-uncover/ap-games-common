import {
  AudioLoadState,
  AudioLoadStates
} from '../constants/AudioLoadState'
import { Logger } from '@sol.ac/js-utils-logger'

const LOGGER = new Logger('AudioLoader')

export class AudioLoader {

  // Attributes //

  #audios: {
    [key: string]: {
      state: AudioLoadState
      loader: Promise<void>
      audio?: HTMLAudioElement
    }
  } = {}

  // Constructor //

  constructor() {

  }

  // Getters & Setters //

  get audios () {
    return Object.keys(this.#audios).map(id => ({
      id,
      state: this.getAudioState(id)
    }))
  }

  getAudioState(id: string): AudioLoadState {
    return this.#audios[id]?.state || AudioLoadStates.NONE
  }

  // Public methods //

  async load(id: string) {
    const audioState = this.getAudioState(id)
    switch (audioState) {
      case AudioLoadStates.NONE: {
        this.#load(id)
      }
      case AudioLoadStates.LOADING: {
        return this.#audios[id].loader
      }
      case AudioLoadStates.LOAD_ERROR: {
        return Promise.reject()
      }
      case AudioLoadStates.LOADED: {
        return Promise.resolve()
      }
    }
  }

  // Internal methods //

  async #load(id: string) {
    const audio = new Audio()

    const loader = new Promise<void>((resolve, reject) => {
      LOGGER.debug(`load ${id}`)
      audio.addEventListener('canplaythrough', () => this.#loadSuccess(id, resolve))
      audio.addEventListener('error', () => this.#loadError(id, reject))
      audio.src = id
      audio.load()
    })

    this.#audios[id] = {
      audio,
      state: AudioLoadStates.LOADING,
      loader
    }
  }

  #loadSuccess(id: string, cb: () => void) {
    this.#audios[id].state = AudioLoadStates.LOADED
    LOGGER.debug(`load ${id} - canplaythrough`)
    cb()
  }

  #loadError(id: string, cb: () => void) {
    this.#audios[id].state = AudioLoadStates.LOAD_ERROR
    LOGGER.debug(`load ${id} - canplaythrough`)
    cb()
  }
}