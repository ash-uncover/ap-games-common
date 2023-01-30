export type ImageLoadState =
  'NONE' |
  'LOADING' |
  'LOAD_ERROR' |
  'LOADED'
export const ImageLoadStates: {
  NONE: ImageLoadState
  LOADING: ImageLoadState
  LOAD_ERROR: ImageLoadState
  LOADED: ImageLoadState
} = {
  NONE: 'NONE',
  LOADING: 'LOADING',
  LOAD_ERROR: 'LOAD_ERROR',
  LOADED: 'LOADED',
}