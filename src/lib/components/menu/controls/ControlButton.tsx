import React, { ReactNode } from 'react'

import './ControlButton.css'

export interface ControlButtonProperties {
  className?: string
  disabled?: boolean
  title?: string
  children: ReactNode
  onClick: () => void
}

export const ControlButton = ({
  className,
  disabled,
  title,
  children,
  onClick,
}: ControlButtonProperties) => {

  // Hooks //

  // Events //

  const handleClick = () => {

  }

  // Rendering //

  const classes = ['control-button']
  if (className) {
    classes.push(className)
  }
  if (disabled) {
    classes.push('control-button--disabled')
  }

  return (
    <button
      className={classes.join(' ')}
      disabled={disabled}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
