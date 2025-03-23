import React, {
  useContext,
} from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import {
  Slider
} from '../components/menu/controls/Slider'

export interface GameSettingDisplayBrightnessSliderProperties {
  className?: string
  label: string
}
export const GameSettingDisplayBrightnessSlider = ({
  className,
  label
}: GameSettingDisplayBrightnessSliderProperties) => {

  // #region Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
  // #endregion

  // #region Events
  function handleChange(brightness: number) {
    const action = GameSettingsActions.setBrightness(brightness)
    dispatch(action)
  }
  // #endregion

  // #region Rendering
  return (
    <Slider
      className={className}
      label={label}
      min={0}
      max={200}
      value={settingsContext.brightness}
      onChange={handleChange}
    />
  )
  // #endregion
}