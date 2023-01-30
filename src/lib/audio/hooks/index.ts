import { useEffect, useState } from 'react'
import { AudioPlayOptions } from '../lib/AudioPlayOptions'
import { AudioPlayer } from '../lib/AudioPlayer'

const player = new AudioPlayer()

export const loadAudio = (
  path: string | string[],
  onProgress?: (value: number) => void
) => {
  return player.load(path, onProgress)
}

export const useAudioLoad = (
  path: string | string[],
  onProgress?: (value: number) => void
) => {
  useEffect(() => {
    loadAudio(path, onProgress)
  }, [])
}

export const useAudioEffect = (
  path: string | string[],
  options?: AudioPlayOptions
) => {
  useEffect(() => {
    const list = player.mount(path, options)
    list.play()
    return () => player.unmount(list)
  }, [])
}

export const useAudio = (
  path: string | string[],
  options?: AudioPlayOptions
) => {
  const [audio, setAudio] = useState({
    play: () => {},
    pause: () => {},
    stop: () => {},
    next: () => {},
    previous: () => {},
  })
  useEffect(() => {
    const list = player.mount(path, options)
    setAudio({
      play: () => list.play(),
      pause: () => list.pause(),
      stop: () => list.stop(),
      next: () => list.next(),
      previous: () => list.previous()
    })
    return () => player.unmount(list)
  }, [])
  return audio
}

export const useAudioVolume = () => {
  const [master, setMaster] = useState(player.master)
  const [masterVolume, setMasterVolume] = useState(player.masterVolume)
  const [game, setGame] = useState(player.game)
  const [gameVolume, setGameVolume] = useState(player.gameVolume)
  const [music, setMusic] = useState(player.music)
  const [musicVolume, setMusicVolume] = useState(player.musicVolume)
  const [ui, setUi] = useState(player.ui)
  const [uiVolume, setUiVolume] = useState(player.uiVolume)

  return {
    master,
    masterVolume,
    game,
    gameVolume,
    music,
    musicVolume,
    ui,
    uiVolume,

    setMaster: (on: boolean) => {
      player.master = on
      player.updateVolume()
      setMaster(on)
    },
    setMasterVolume: (volume: number) => {
      player.masterVolume = volume
      player.updateVolume()
      setMasterVolume(volume)
    },
    setGame: (on: boolean) => {
      player.game = on
      player.updateVolume()
      setGame(on)
    },
    setGameVolume: (volume: number) => {
      player.gameVolume = volume
      player.updateVolume()
      setGameVolume(volume)
    },
    setMusic: (on: boolean) => {
      player.music = on
      player.updateVolume()
      setMusic(on)
    },
    setMusicVolume: (volume: number) => {
      player.musicVolume = volume
      player.updateVolume()
      setMusicVolume(volume)
    },
    setUi: (on: boolean) => {
      player.ui = on
      player.updateVolume()
      setUi(on)
    },
    setUiVolume: (volume: number) => {
      player.uiVolume = volume
      player.updateVolume()
      setUiVolume(volume)
    },
  }
}