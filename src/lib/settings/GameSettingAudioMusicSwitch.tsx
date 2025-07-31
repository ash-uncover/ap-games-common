import React from 'react'
import { 
  Switch 
} from '@sol.ac/react-commons'
//
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'

// #region Declaration
export interface GameSettingAudioMusicSwitchProperties {
  className?: string
  label: string
}
// #endregion

// #region Component
export const GameSettingAudioMusicSwitch = ({
  className,
  label
}: GameSettingAudioMusicSwitchProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const dispatch = React.useContext(GameSettingsDispatchContext);
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
// #endregion