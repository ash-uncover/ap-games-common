export type AudioLoadState =
  'NONE' |
  'LOADING' |
  'LOAD_ERROR' |
  'LOADED'
export const AudioLoadStates: {
  NONE: AudioLoadState
  LOADING: AudioLoadState
  LOAD_ERROR: AudioLoadState
  LOADED: AudioLoadState
} = {
  NONE: 'NONE',
  LOADING: 'LOADING',
  LOAD_ERROR: 'LOAD_ERROR',
  LOADED: 'LOADED',
}