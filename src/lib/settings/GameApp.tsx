import React, { 
  ReactNode, 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import {
  GameSettingsContext,
} from './GameSettingsProvider'

export interface GameAppProperties {
  className: string
  children: ReactNode
}
export const GameApp = ({
  className,
  children
}: GameAppProperties) => {

  // #region Hooks
  const settingsContext = useContext(GameSettingsContext)
  const [style, setStyle] = useState({})
  useEffect(() => {
    const {
      brightness,
      contrast
    } = settingsContext
    setStyle({
      filter: `brightness(${brightness / 100}) contrast(${contrast / 100})`
    })
  }, [settingsContext])
  // #endregion

  // #region Rendering
  const classes= ['alpha-game-app']
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
