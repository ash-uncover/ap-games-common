import React, { ReactNode, useEffect, useRef } from 'react'

import './GridContainer.css'

export interface GridContainerProperties {
  className?: string
  width: number
  height: number

  children: ReactNode
}

export const GridContainer = ({
  className,
  width,
  height,

  children,
}: GridContainerProperties) => {

  // Hooks //

  const container = useRef<HTMLDivElement>(null)
  const innerContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    updateSize()
  }, [width, height])

  useEffect(() => {
    const update = updateSize.bind(this)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const updateSize = () => {
    const currentContainer = container.current
    const ratio = width / height
    if (currentContainer) {
      const containerRatio = currentContainer.clientWidth / currentContainer.clientHeight
      if (containerRatio >= ratio) {
        currentContainer.classList.add('grid-container-h')
        currentContainer.classList.remove('grid-container-v')
      } else {
        currentContainer.classList.remove('grid-container-h')
        currentContainer.classList.add('grid-container-v')
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
      ref={container}
    >
      <div
        className='grid-container-inner'
        ref={innerContainer}
        style={{
          aspectRatio: width / height
        }}
      >
        {children}
      </div>
    </div>
  )
}