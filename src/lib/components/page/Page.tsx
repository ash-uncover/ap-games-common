import React, { ReactNode } from 'react'
// Style
import './Page.css'

export type PageProperties = {
  children: ReactNode
}

export const Page = ({
  children
}: PageProperties) => {

  // Hooks //

  // Events //

  // Rendering //

  return (
    <div className='page'>
      {children}
    </div>
  )
}
