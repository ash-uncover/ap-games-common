import React, { CSSProperties, ReactNode } from 'react'

import './Loader.css'

export interface LoaderProperties {
  className?: string
  style?: CSSProperties

  children?: ReactNode

  value: number
  onClick?: () => void
}

export const Loader = ({
  className,
  style,
  children,
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
      style={style}
      onClick={handleClick}
    >
      <div
        className='loader__content'
      >
        {children ?
          <div
            className='loader__control'
          >
            {children}
          </div>
          : null}

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