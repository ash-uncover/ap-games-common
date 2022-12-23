import React, { ReactNode } from 'react'
// Components
import { PageMenu } from './PageMenu'
import { PageContent } from './PageContent'
// Style
import './Page.css'

export interface PageProperties {
  menu: ReactNode
  content: ReactNode
}

export const Page = ({
  menu,
  content
}: PageProperties) => {

  // Hooks //

  // Events //

  // Rendering //

  return (
    <div className='page'>
      <PageMenu>
        {menu}
      </PageMenu>
      <PageContent>
        {content}
      </PageContent>
    </div>
  )
}
