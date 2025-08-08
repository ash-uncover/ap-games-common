import React from 'react'
import { 
  Shell,
  useClasseName,
  useClasses 
} from '@sol.ac/react-commons'
//
import {
  GameSettingsContext,
  GameSettingsProvider,
} from './GameSettingsProvider'
// CSS
import './GameApp.css'

// #region Declaration
export interface GameAppProperties extends React.PropsWithChildren {
  className?: string
  lang?: string
  name: string
}
// #endregion

// #region Component
export const GameApp = ({
  className,
  lang,
  name,

  children
}: GameAppProperties) => {

  // #region > Render
  return (
    <GameSettingsProvider 
      name={name}
      lang={lang}
    >
      <GameAppInner className={className}>
        {children}
      </GameAppInner>
    </GameSettingsProvider>
  )
  // #endregion
}
// #endregion

interface GameAppInnerProperties extends React.PropsWithChildren {
  className?: string
}
const GameAppInner = ({
  className,
  children
}: GameAppInnerProperties) => {

  // #region > Hooks
  const settingsContext = React.useContext(GameSettingsContext)
  const [style, setStyle] = React.useState({})
  React.useEffect(() => {
    const {
      brightness,
      contrast
    } = settingsContext
    setStyle({
      filter: `brightness(${brightness}%) contrast(${contrast}%)`
    })
  }, [settingsContext])
  const { classBuilder, classes } = useClasses(['alpha-game-app'])
  useClasseName(classBuilder, className)
  // #endregion

  // #region > Event
  // #endregion

  // #region > Render
  return (
    <Shell
      className={classes}
      style={style}
    >
      {children}
    </Shell>
  )
  // #endregion
}
// #endregion