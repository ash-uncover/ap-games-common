import React, {
  useContext,
} from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Slider } from '@sol.ac/react-commons'

export interface GameSettingAudioUiVolumeSliderProperties {
  className?: string
  label: string
}
export const GameSettingAudioUiVolumeSlider = ({
  className,
  label
}: GameSettingAudioUiVolumeSliderProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: number }) {
    const action = GameSettingsActions.setAudioUiVolume(event.value)
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
      value={settingsContext.audioUiVolume}
      onChange={handleChange}
    />
  )
  // #endregion
}