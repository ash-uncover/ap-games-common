import React, {
  useContext,
} from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Slider } from '@sol.ac/react-commons'

export interface GameSettingDisplayBrightnessSliderProperties {
  className?: string
  label: string
}
export const GameSettingDisplayBrightnessSlider = ({
  className,
  label
}: GameSettingDisplayBrightnessSliderProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: number }) {
    const action = GameSettingsActions.setBrightness(event.value)
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
      value={settingsContext.brightness}
      onChange={handleChange}
    />
  )
  // #endregion
}