import React, { ReactNode } from 'react'

import './PageMenuContent.css'

export interface PageMenuContentProperties {
  children: ReactNode
}

export const PageMenuContent = ({
  children,
}: PageMenuContentProperties) => {

  // Rendering //

  return (
    <div className='page-menu-content'>
      {children}
    </div>
  )
}