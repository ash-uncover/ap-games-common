import React from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Slider } from '@sol.ac/react-commons'

// #region Declaration
export interface GameSettingAudioMusicVolumeSliderProperties {
  className?: string
  label: string
}
// #endregion

// #region Component
export const GameSettingAudioMusicVolumeSlider = ({
  className,
  label
}: GameSettingAudioMusicVolumeSliderProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const dispatch = React.useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: number }) {
    const action = GameSettingsActions.setAudioMusicVolume(event.value)
    dispatch(action)
  }
  // #endregion

  // #region > Render
  return (
    <Slider
      className={className}
      // label={label}
      min={0}
      max={100}
      value={settingsContext.audioMusicVolume}
      onChange={handleChange}
    />
  )
  // #endregion
}
// #endregion