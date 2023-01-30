const normalizeVolumeValue = (value: number) => {
  return Math.min(Math.max(0, value), 100)
}

const ALPHA_AUDIO = 'alpha-audio'
const USE_LOCAL_STORAGE = true

if (!USE_LOCAL_STORAGE) {
  localStorage.removeItem(ALPHA_AUDIO)
}

const store = (state: AudioVolume) => {
  localStorage.setItem(ALPHA_AUDIO, JSON.stringify({
    master: state.master,
    masterVolume: state.masterVolume,
    music: state.music,
    musicVolume: state.musicVolume,
    ui: state.ui,
    uiVolume: state.uiVolume,
    game: state.game,
    gameVolume: state.gameVolume,
  }))
}

const load: () => AudioVolume = () => {
  return JSON.parse(localStorage.getItem(ALPHA_AUDIO) || '{}')
}

interface AudioVolume {
  master: boolean
  masterVolume: number
  music: boolean
  musicVolume: number
  ui: boolean
  uiVolume: number
  game: boolean
  gameVolume: number
}

export class AudioVolumeManager implements AudioVolume {

  #master: boolean = true
  #masterVolume: number = 100
  #game: boolean = true
  #gameVolume: number = 100
  #music: boolean = true
  #musicVolume: number = 100
  #ui: boolean = true
  #uiVolume: number = 100

  constructor() {
    const store = load()
    if (typeof store.master !== 'undefined') {
      this.#master = store.master
    }
    if (typeof store.masterVolume !== 'undefined') {
      this.#masterVolume = store.masterVolume
    }
    if (typeof store.game !== 'undefined') {
      this.#game = store.game
    }
    if (typeof store.gameVolume !== 'undefined') {
      this.#gameVolume = store.gameVolume
    }
    if (typeof store.ui !== 'undefined') {
      this.#ui = store.ui
    }
    if (typeof store.uiVolume !== 'undefined') {
      this.#uiVolume = store.uiVolume
    }
    if (typeof store.music !== 'undefined') {
      this.#music = store.music
    }
    if (typeof store.musicVolume !== 'undefined') {
      this.#musicVolume = store.musicVolume
    }
  }

  // Getter & Setters //

  get master() {
    return this.#master
  }
  set master(on: boolean) {
    this.#master = on
    store(this)
  }
  get masterVolume() {
    return this.#masterVolume
  }
  set masterVolume(value: number) {
    this.#masterVolume = normalizeVolumeValue(value)
    store(this)
  }

  get music() {
    return this.#music
  }
  set music(on: boolean) {
    this.#music = on
    store(this)
  }
  get musicVolume() {
    return this.#musicVolume
  }
  set musicVolume(value: number) {
    this.#musicVolume = normalizeVolumeValue(value)
    store(this)
  }

  get ui() {
    return this.#ui
  }
  set ui(on: boolean) {
    this.#ui = on
    store(this)
  }
  get uiVolume() {
    return this.#uiVolume
  }
  set uiVolume(value: number) {
    this.#uiVolume = normalizeVolumeValue(value)
    store(this)
  }

  get game() {
    return this.#game
  }
  set game(on: boolean) {
    this.#game = on
    store(this)
  }
  get gameVolume() {
    return this.#gameVolume
  }
  set gameVolume(value: number) {
    this.#gameVolume = normalizeVolumeValue(value)
    store(this)
  }
}
