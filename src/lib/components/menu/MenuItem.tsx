import React, { MouseEvent, ReactElement } from 'react'
// Styles
import './MenuItem.css'

export interface MenuItemProperties {
  className?: string
  collapsed?: boolean
  icon?: ReactElement
  selected?: boolean
  text: string

  onClick: () => void
}

export const MenuItem = ({
  className,
  collapsed,
  icon,
  selected,
  text,

  onClick,
}: MenuItemProperties) => {

  // Events //

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    onClick()
    return false
  }

  // Rendering //

  const classes = ['menu-item']
  if (className) {
    classes.push(className)
  }
  if (selected) {
    classes.push('menu-item--selected')
  }

  return (
    <li
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <a
        className='menu-item__content'
        role='button'
        onClick={() => false}
      >
        {icon ?
          <span className='menu-item__icon'>
            {icon ? icon : null}
          </span>
        :null}
        <span className='menu-item__text'>
          {collapsed ? null : text}
        </span>
      </a>
    </li>
  )
}
