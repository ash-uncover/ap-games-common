import React, { MouseEvent, ReactElement } from 'react'
import './MenuItem.css'

export interface MenuItemProperties {
  className?: string
  collapsed?: boolean
  disabled?: boolean
  icon?: ReactElement
  selected?: boolean
  text: string

  onClick: () => void
}

export const MenuItem = ({
  className,
  collapsed,
  disabled,
  icon,
  selected,
  text,

  onClick,
}: MenuItemProperties) => {

  // #region Events
  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    if (!disabled) {
      onClick()
    }
    return false
  }
  // #endregion

  // #region Rendering
  const classes = ['menu-item']
  if (className) {
    classes.push(className)
  }
  if (selected) {
    classes.push('menu-item--selected')
  }
  if (disabled) {
    classes.push('menu-item--disabled')
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
  )// #endregion
}
