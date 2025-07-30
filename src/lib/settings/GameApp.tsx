import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  GameSettingsContext,
  GameSettingsProvider,
} from './GameSettingsProvider'
// CSS
import './GameApp.css'

export interface GameAppProperties extends PropsWithChildren {
  className: string
  name: string
}
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
  // #endregion

  // #region > Render
  const classes = ['alpha-game-app']
  if (className) {
    classes.push(className)
  }
  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {children}
    </div>
  )
  // #endregion
}