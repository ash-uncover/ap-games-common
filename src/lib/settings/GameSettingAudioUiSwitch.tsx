import React from 'react'
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'
import { Switch } from '@sol.ac/react-commons'

// #region Declaration
export interface GameSettingAudioUiSwitchProperties {
  className?: string
  label: string
}
// #endregion

// #region Component
export const GameSettingAudioUiSwitch = ({
  className,
  label
}: GameSettingAudioUiSwitchProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const dispatch = React.useContext(GameSettingsDispatchContext);
  // #endregion

  // #region > Events
  function handleChange(event: { value: boolean }) {
    const action = GameSettingsActions.setAudioUi(event.value)
    dispatch(action)
  }
  // #endregion

  // #region > Render
  return (
    <Switch
      className={className}
      label={label}
      checked={settingsContext.audioUi}
      onChange={handleChange}
    />
  )
  // #endregion
}
// #endregion