import React, { ReactNode } from 'react'
// Style
import './PageContent.css'

export interface PageContentProperties {
  children: ReactNode
}

export const PageContent = ({
  children
}: PageContentProperties) => {

  // Hooks //

  // Events //

  // Rendering //

  return (
    <div className='page-content'>
      {children}
    </div>
  )
}
