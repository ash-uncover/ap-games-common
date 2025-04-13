import { ArrayUtils } from '@sol.ac/js-utils'
import { AudioPlayOptions } from './AudioPlayOptions'
import { AudioCategories } from '../constants/AudioCategory'

export interface AudioPlayEntry {

}

let callback: () => void

export class AudioList {

  // Attributes //

  #paths: string[]
  #current: number = 0
  #audio: HTMLAudioElement = new Audio()
  #options: AudioPlayOptions
  #volume: number = 100

  #onEnd: (() => void) | undefined

  // Constructor //

  constructor(paths: string[], options?: AudioPlayOptions) {
    callback = this.#handleEnd.bind(this)

    this.#options = options || {}
    this.#paths = paths
    if (this.#options.shufffle) {
      this.#paths = ArrayUtils.shuffle(this.#paths)
    }
    this.#prepare(0)
  }

  // Getters & Setters //

  set onEnd(listener: (() => void)) {
    this.#onEnd = listener
  }

  get category () {
    return this.#options.category || AudioCategories.NONE
  }

  set volume (v: number) {
    this.#volume = v
    this.#audio.volume = v / 100
  }

  // Public methods //

  previous() {
    if (this.#audio.currentTime > 1000) {
      this.stop()
      this.play()
    } else {
      this.pause()
      this.#prepare(this.#current - 1)
      this.play()
    }
  }

  next() {
    this.pause()
    this.#prepare(this.#current + 1)
    this.play()
  }

  stop() {
    this.pause()
    const audio = this.#audio
    audio.load()
  }

  pause() {
    const audio = this.#audio
    audio.pause()
  }

  play() {
    const audio = this.#audio
    audio.play()
  }

  // Internal methods //

  #prepare(index: number) {
    this.#audio.removeEventListener('ended', callback)
    const realIndex = (index + this.#paths.length) % this.#paths.length
    this.#current = realIndex
    this.#audio = new Audio(this.#paths[realIndex])
    this.#audio.volume = this.#volume / 100
    this.#audio.addEventListener('ended', callback)
  }

  #handleEnd() {
    if (this.#current < this.#paths.length - 1) {
      this.next()
    } else if (this.#options.loop && this.#current === this.#paths.length - 1) {
      this.next()
    } else if (!this.#options.loop && this.#current === this.#paths.length - 1 && this.#onEnd) {
      this.#onEnd()
    }
  }
}