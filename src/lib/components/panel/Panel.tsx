import React, { PropsWithChildren } from 'react'
// CSS
import './Panel.css'

export interface PanelProperties extends PropsWithChildren {
  className?: string
  title?: string
}
export const Panel = ({
  className,
  title,
  children,
}: PanelProperties) => {

  // #region > Hooks
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  const classes = ['panel']
  if (className) {
    classes.push(className)
  }
  return (
    <div className={classes.join(' ')}>
      {title ?
        <h3>
          {title}
        </h3>
        : null}
      {children}
    </div>
  )
  // #endregion
}