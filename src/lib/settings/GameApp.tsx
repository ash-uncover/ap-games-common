import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import { 
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
export interface GameAppProperties extends PropsWithChildren {
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

interface GameAppInnerProperties extends PropsWithChildren {
  className: string
}
const GameAppInner = ({
  className,
  children
}: GameAppInnerProperties) => {

  // #region > Hooks
  const settingsContext = useContext(GameSettingsContext)
  const [style, setStyle] = useState({})
  useEffect(() => {
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
    <div
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
  // #endregion
}
// #endregion