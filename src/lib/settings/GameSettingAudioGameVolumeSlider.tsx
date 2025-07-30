import React, {
  useContext,
} from 'react'
import { 
  Slider 
} from '@sol.ac/react-commons'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'

export interface GameSettingAudioGameVolumeSliderProperties {
  className?: string
  label: string
}
export const GameSettingAudioGameVolumeSlider = ({
  className,
  label
}: GameSettingAudioGameVolumeSliderProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
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