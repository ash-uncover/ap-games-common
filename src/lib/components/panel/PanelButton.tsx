import React, { ReactNode } from 'react'
// Components
import { Panel } from './Panel'
// Styles
import './PanelButton.css'

export interface PanelButtonProperties {
  className?: string
  title?: string
  children: ReactNode

  onClick: () => void
}

export const PanelButton = ({
  className,
  title,
  children,

  onClick
}: PanelButtonProperties) => {

  // Hooks //

  // Events //

  // Rendering //

  const classesButton = ['panel-button__button']
  if (className) {
    classesButton.push(className)
  }

  return (
    <Panel className='panel-button'>
      <button
        className={classesButton.join(' ')}
        title={title}
        onClick={onClick}
      >
        <h3>
          {children}
        </h3>
      </button>
    </Panel>
  )
}