import React, { ReactNode } from 'react'

import './PageMenuSideItems.css'

export interface PageMenuSideItemsProperties {
  children: ReactNode
}

export const PageMenuSideItems = ({
  children,
}: PageMenuSideItemsProperties) => {

  // Rendering //

  return (
    <ul className='page-menu-side-items'>
      {children}
    </ul>
  )
}