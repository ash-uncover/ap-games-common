import React from 'react'
// CSS
import './Input.css'

export interface InputProperties {
  className?: string
  disabled?: boolean
  value: string
  onChange: (value: string) => void
}
export const Input = ({
  className,
  disabled,
  value,
  onChange,
}: InputProperties) => {

  // #region Hooks
  // #endregion

  // #region Events
  // #endregion

  // #region Rendering
  const classes = ['menu-control input']
  if (className) {
    classes.push(className)
  }
  if (disabled) {
    classes.push('input--disabled')
  }
  return (
    <input
      className={classes.join(' ')}
      disabled={disabled}
    />
  )
  // #endregion
}
