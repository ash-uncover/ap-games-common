export const requestFullscreen = (element: HTMLElement) => {
  try {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
  } catch (error) {
    console.log('failed to apply full screen')
  }
}

export const exitFullscreen = () => {
  try {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  } catch (error) {
    console.log('failed to exit fullscreen')
  }
}

const FullscreenHelper = {
  requestFullscreen,
  exitFullscreen
}

export default FullscreenHelper
