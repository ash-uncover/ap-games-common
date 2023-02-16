import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'

import './GridContainer.css'

export interface GridContainerProperties {
  className?: string
  style?: CSSProperties

  width: number
  height: number

  children?: ReactNode
}

export const GridContainer = ({
  className,
  style,

  width,
  height,

  children,
}: GridContainerProperties) => {

  // Hooks //

  const containerRef = useRef<HTMLDivElement>(null)

  const [invert, setInvert] = useState(false)

  useEffect(() => {
    updateSize()
  }, [width, height])

  useEffect(() => {
    const update = updateSize.bind(this)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const updateSize = () => {
    const container = containerRef.current
    if (container) {
      const ratioBase = width / height
      const containerRatio = container.clientWidth / container.clientHeight

      if (ratioBase >= 1) {
        if (containerRatio >= 1) {
          setInvert(false)
          if (containerRatio >= ratioBase) {
            container.classList.add('grid-container-h')
            container.classList.remove('grid-container-v')
          } else {
            container.classList.remove('grid-container-h')
            container.classList.add('grid-container-v')
          }
        } else {
          setInvert(true)
          if (containerRatio <= (1 / ratioBase)) {
            container.classList.remove('grid-container-h')
            container.classList.add('grid-container-v')
          } else {
            container.classList.add('grid-container-h')
            container.classList.remove('grid-container-v')
          }
        }
      } else {
        if (containerRatio >= 1) {
          setInvert(true)
          if (containerRatio <= (1 / ratioBase)) {
            container.classList.remove('grid-container-h')
            container.classList.add('grid-container-v')
          } else {
            container.classList.add('grid-container-h')
            container.classList.remove('grid-container-v')
          }
        } else {
          setInvert(false)
          if (containerRatio >= ratioBase) {
            container.classList.add('grid-container-h')
            container.classList.remove('grid-container-v')
          } else {
            container.classList.remove('grid-container-h')
            container.classList.add('grid-container-v')
          }
        }
      }
    }
  }

  // Rendering //

  const classes = ['grid-container']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
      ref={containerRef}
    >
      <div
        className='grid-container-inner'
        style={{
          aspectRatio: invert ? height / width : width / height
        }}
      >
        {children}
      </div>
    </div>
  )
}