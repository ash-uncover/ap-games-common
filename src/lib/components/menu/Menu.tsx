import React from 'react'
// Components
import { MenuItem, MenuItemProperties } from './MenuItem'
// Styles
import './Menu.css'

export interface MenuProperties {
  collapsed?: boolean
  title?: string
  items: MenuItemProperties[]

  onMenuToggle?: () => void
}

export const Menu = ({
  collapsed,
  title,
  items,
}: MenuProperties) => {

  // Events //

  // Rendering //

  return (
    <div className='menu'>

      {title ?
        <h1 className='menu__title'>
          {title}
        </h1>
        : null}

      <ul className='menu__items'>
        {items.map((item) => {
          return (
            <MenuItem
              key={item.text}
              {...item}
              collapsed={collapsed}
            />
          )
        })}
      </ul>

    </div>
  )
}
