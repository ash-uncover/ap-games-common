import React, {
  useContext,
} from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Slider } from '@sol.ac/react-commons'

export interface GameSettingAudioMusicVolumeSliderProperties {
  className?: string
  label: string
}
export const GameSettingAudioMusicVolumeSlider = ({
  className,
  label
}: GameSettingAudioMusicVolumeSliderProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
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