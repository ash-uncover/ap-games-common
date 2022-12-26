import React, { ReactNode } from 'react'

import './ControlButton.css'

export interface ControlButtonProperties {
  title?: string
  children: ReactNode
  onClick: () => void
}

export const ControlButton = ({
  title,
  children,
  onClick,
}: ControlButtonProperties) => {

  // Hooks //

  // Events //

  // Rendering //

  return (
    <button
      className='control-button'
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
