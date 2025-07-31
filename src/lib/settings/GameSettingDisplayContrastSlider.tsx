import React from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Slider } from '@sol.ac/react-commons'

// #region Declaration
export interface GameSettingDisplayContrastSliderProperties {
  className?: string
  label: string
}
// #endregion

// #region Component
export const GameSettingDisplayContrastSlider = ({
  className,
  label
}: GameSettingDisplayContrastSliderProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const dispatch = React.useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: number }) {
    const action = GameSettingsActions.setContrast(event.value)
    dispatch(action)
  }
  // #endregion

  // #region > Render
  return (
    <Slider
      className={className}
      // label={label}
      min={0}
      max={200}
      value={settingsContext.contrast}
      onChange={handleChange}
    />
  )
  // #endregion
}
// #endregion