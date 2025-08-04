import React from 'react'
import {
  Select
} from '@sol.ac/react-commons'
//
import {
  GameSettingsActions,
  GameSettingsContext,
  GameSettingsDispatchContext,
} from './GameSettingsProvider'

// #region Declaration
export interface GameSettingGeneralLangSelectProperties {
  className?: string
  values: any[]
}
// #endregion

// #region Component
export const GameSettingGeneralLangSelect = ({
  className,
  values
}: GameSettingGeneralLangSelectProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const dispatch = React.useContext(GameSettingsDispatchContext);
  const [selectedLang, setSelectedLang] = React.useState('')
  React.useEffect(() => {
    if (values?.length) {
      if (settingsContext.lang && values.some(v => v.id === settingsContext.lang)) {
        setSelectedLang(settingsContext.lang)
      } else {
        setSelectedLang(values[0].id)
      }
    } else {
      setSelectedLang('')
    }
  }, [settingsContext, values])
  // #endregion

  // #region > Events
  function handleChange(event: { value: string }) {
    const action = GameSettingsActions.setLang(event.value)
    dispatch(action)
  }
  // #endregion

  // #region > Render
  return (
    <Select
      className={className}
      value={selectedLang}
      values={values}
      onChange={handleChange}
    />
  )
  // #endregion
}
// #endregion