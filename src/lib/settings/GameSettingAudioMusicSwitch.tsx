import React, {
  useContext,
} from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Switch } from '@sol.ac/react-commons'

export interface GameSettingAudioMusicSwitchProperties {
  className?: string
  label: string
}
export const GameSettingAudioMusicSwitch = ({
  className,
  label
}: GameSettingAudioMusicSwitchProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: boolean }) {
    const action = GameSettingsActions.setAudioMusic(event.value)
    dispatch(action)
  }
  // #endregion

  // #region > Render
  return (
    <Switch
      className={className}
      label={label}
      checked={settingsContext.audioMusic}
      onChange={handleChange}
    />
  )
  // #endregion
}