import React from 'react'

import './Loader.css'

export interface LoaderProperties {
  className?: string
  text?: string
  value: number
  onClick?: () => void
}

export const Loader = ({
  className,
  text,
  value,
  onClick
}: LoaderProperties) => {

  // Events //

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  // Rendering //

  const classes = ['loader']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <div
        className='loader__content'
      >
        <div
          className='loader__text'
        >
          {text}
        </div>

        <div
          className='loader__bar'
        >
          <div
            className='loader__bar-inner'
            style={{
              width: `${Math.floor(Math.min(100, Math.max(0, value)))}%`
            }}
          />
          <div
            className='loader__bar-value'
          >
            {value}%
          </div>
        </div>
      </div>
    </div>
  )
}