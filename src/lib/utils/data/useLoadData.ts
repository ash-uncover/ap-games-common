import { useEffect } from 'react'
import { loadAudio } from 'src/lib/audio/hooks'
import { loadImages } from 'src/lib/images/lib/loadImages'

interface useLoadDataPayload {
  images: string[]
  audios: string[]
  delayed?: boolean
}

export const useLoadData = (
  {
    images,
    audios,
    delayed
  }: useLoadDataPayload,
  onProgress: (value: number) => void,
  onLoaded?: () => void
) => {
  useEffect(() => {
    let audiosLoaded = 0
    let imagesLoaded = 0
    const handleAudioProgress = () => {
      audiosLoaded++
      handleProgress()
    }
    const handleImageProgress = () => {
      imagesLoaded++
      handleProgress()
    }
    const handleProgress = () => {
      onProgress(Math.floor((audiosLoaded + imagesLoaded) * 100 / ((audios.length + images.length))))
    }
    if (delayed !== false) {

      Promise.allSettled([
        loadAudio(audios, handleAudioProgress),
        loadImages(images, handleImageProgress),
      ])
        .then(() => {
          if (onLoaded) {
            onLoaded()
          }
        })
    }
  }, [images, audios, delayed])
}