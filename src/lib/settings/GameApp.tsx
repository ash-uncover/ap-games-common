import React from 'react'
import { 
  Shell,
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
  className: string
  name: string
}
// #endregion

// #region Component
export const GameApp = ({
  className,
  name,
  children
}: GameAppProperties) => {

  // #region > Render
  return (
    <GameSettingsProvider name={name}>
      <GameAppInner className={className}>
        {children}
      </GameAppInner>
    </GameSettingsProvider>
  )
  // #endregion
}
// #endregion

interface GameAppInnerProperties extends React.PropsWithChildren {
  className: string
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
  const { classes } = useClasses(['alpha-game-app', className])
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