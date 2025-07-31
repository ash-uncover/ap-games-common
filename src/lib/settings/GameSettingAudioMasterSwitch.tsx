import React, {
  useContext,
} from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Switch } from '@sol.ac/react-commons'

export interface GameSettingAudioMasterSwitchProperties {
  className?: string
  label: string
}
export const GameSettingAudioMasterSwitch = ({
  className,
  label
}: GameSettingAudioMasterSwitchProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const dispatch = useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: boolean }) {
    const action = GameSettingsActions.setAudioMaster(event.value)
    dispatch(action)
  }
  // #endregion

  // #region > Render
  return (
    <Switch
      className={className}
      label={label}
      checked={settingsContext.audioMaster}
      onChange={handleChange}
    />
  )
  // #endregion
}