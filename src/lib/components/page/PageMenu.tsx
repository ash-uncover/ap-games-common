import React, { ReactNode } from 'react'
// Style
import './PageMenu.css'

export interface PageMenuProperties {
  children: ReactNode
}

export const PageMenu = ({
  children
}: PageMenuProperties) => {

  // Hooks //

  // Events //

  // Rendering //

  return (
    <div className='page-menu'>
      {children}
    </div>
  )
}
