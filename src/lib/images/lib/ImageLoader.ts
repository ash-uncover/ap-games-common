import { ObjectUtils } from '@uncover/js-utils'
import {
  ImageLoadState,
  ImageLoadStates
} from '../constants/ImageLoadState'
import Logger from '@uncover/js-utils-logger'

const LOGGER = new Logger('ImageLoader')

export class ImageLoader {

  // Attributes //

  #images: {
    [key: string]: {
      state: ImageLoadState
      loader: Promise<void>
      image?: HTMLImageElement
    }
  } = {}

  // Constructor //

  constructor() {

  }

  // Getters & Setters //

  get images () {
    return Object.keys(this.#images).map(id => ({
      id,
      state: this.getImageState(id)
    }))
  }

  getImageState(id: string): ImageLoadState {
    return this.#images[id]?.state || ImageLoadStates.NONE
  }

  // Public methods //

  async loadImages(path: string | string[], onProgress?: (value: number) => void) {
    const paths = ObjectUtils.arrayfy(path)
    if (path.length) {
      let loaded = 0
      return Promise.allSettled(paths.map((p) => {
        return this.load(p)
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

  async load(id: string) {
    const state = this.getImageState(id)
    switch (state) {
      case ImageLoadStates.NONE: {
        this.#load(id)
      }
      case ImageLoadStates.LOADING: {
        return this.#images[id].loader
      }
      case ImageLoadStates.LOAD_ERROR: {
        return Promise.reject()
      }
      case ImageLoadStates.LOADED: {
        return Promise.resolve()
      }
    }
  }

  // Internal methods //

  async #load(id: string) {
    const image = new Image()

    const loader = new Promise<void>((resolve, reject) => {
      LOGGER.debug(`load ${id}`)
      image.addEventListener('load', () => this.#loadSuccess(id, resolve))
      image.addEventListener('error', () => this.#loadError(id, reject))
      image.src = id
    })

    this.#images[id] = {
      image,
      state: ImageLoadStates.LOADING,
      loader
    }
  }

  #loadSuccess(id: string, cb: () => void) {
    this.#images[id].state = ImageLoadStates.LOADED
    LOGGER.debug(`load ${id} - canplaythrough`)
    cb()
  }

  #loadError(id: string, cb: () => void) {
    this.#images[id].state = ImageLoadStates.LOAD_ERROR
    LOGGER.debug(`load ${id} - canplaythrough`)
    cb()
  }
}