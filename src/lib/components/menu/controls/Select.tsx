import React from 'react'
// Components
import { ControlButton } from './ControlButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Styles
import './Select.css'

export interface SelectProperties {
  className?: string
  disabled?: boolean
  value: string
  values: SelectValue[]
  onChange: (value: string) => void
}

export interface SelectValue {
  id: string
  text: string
}

export const Select = ({
  className,
  disabled,
  value,
  values,
  onChange,
}: SelectProperties) => {

  // Hooks //

  // Events //

  const handleValuePrevious = () => {
    const currentValueIndex: number = values.findIndex(v => v.id === value)
    const newValueIndex = (currentValueIndex + values.length - 1) % values.length
    const newValue = values[newValueIndex]
    onChange(newValue.id)
  }

  const handleValueNext = () => {
    const currentValueIndex: number = values.findIndex(v => v.id === value)
    const newValueIndex = (currentValueIndex + values.length + 1) % values.length
    const newValue = values[newValueIndex]
    onChange(newValue.id)
  }

  // Rendering //

  const classes = ['menu-control select']
  if (className) {
    classes.push(className)
  }
  if (disabled) {
    classes.push('select--disabled')
  }

  return (
    <div className={classes.join(' ')}>

      <ControlButton
        disabled={disabled}
        onClick={handleValuePrevious}
      >
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </ControlButton>

      <div className='select__value'>
        {values.find(v => v.id === value)!.text}
      </div>

      <ControlButton
        disabled={disabled}
        onClick={handleValueNext}
      >
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </ControlButton>

    </div>
  )
}
