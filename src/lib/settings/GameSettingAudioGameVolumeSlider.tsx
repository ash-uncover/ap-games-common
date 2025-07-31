import React from 'react'
import { 
  Slider 
} from '@sol.ac/react-commons'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'

// #region Declaration
export interface GameSettingAudioGameVolumeSliderProperties {
  className?: string
  label: string
}
// #endregion

// #region Component
export const GameSettingAudioGameVolumeSlider = ({
  className,
  label
}: GameSettingAudioGameVolumeSliderProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const dispatch = React.useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: number }) {
    const action = GameSettingsActions.setAudioGameVolume(event.value)
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
      value={settingsContext.audioGameVolume}
      onChange={handleChange}
    />
  )
  // #endregion
}
// #endregion