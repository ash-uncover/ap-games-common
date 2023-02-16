import React, { FormEvent, useId } from 'react'

import './Switch.css'

export interface SwitchProperties {
  checked: boolean
  label: string
  onChange: (arg: boolean) => void
}

export const Switch = ({
  checked,
  label,
  onChange,
}: SwitchProperties) => {

  // Hooks //

  const id = useId()

  // Events //

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked)
  }

  // Rendering //

  const classes = ['menu-control switch']

  return (
    <div className={classes.join(' ')}>
      <input
        id={id}
        className='switch__input'
        type='checkbox'
        style= {{
          display: 'none'
        }}
        name={label}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className='switch__label'
      >
        <div
          className='switch__control'
        />
        {label}
      </label>
    </div>
  )
}
