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

export interface GameSettingDisplayContrastSliderProperties {
  className?: string
  label: string
}
export const GameSettingDisplayContrastSlider = ({
  className,
  label
}: GameSettingDisplayContrastSliderProperties) => {

  // #region Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
  // #endregion

  // #region Events
  function handleChange(contrast: number) {
    const action = GameSettingsActions.setContrast(contrast)
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
      value={settingsContext.contrast}
      onChange={handleChange}
    />
  )
  // #endregion
}