import { ImageLoader } from './ImageLoader'

const loader = new ImageLoader()

export const loadImages = (
  path: string | string[],
  onProgress?: (value: number) => void
) => {
  return loader.loadImages(path, onProgress)
}
