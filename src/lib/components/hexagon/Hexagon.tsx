import React from 'react'
import { useClasses } from '@sol.ac/react-commons'
//
import './Hexagon.css'

// #region Declaration
export interface HexagonProperties extends React.PropsWithChildren {
  className?: string
}
// #endregion

// #region Component
export const Hexagon = ({
  className,
  children,
}: HexagonProperties) => {

  // #region > Hooks
  const { classes } = useClasses(['ap-heaxagon', className])
  // #endregion

  // #region > Render

  const borderColor = 'red'
  const borderWidth = '2px'

  return (
    <div
      className={classes}
    >
      <div
        className='ap-hexagon__layer ap-hexagon__layer--border'
        style={{
          backgroundColor: borderColor
        }}
      >
        <div
          className='ap-hexagon__layer ap-hexagon__layer--content'
          style={{
            top: borderWidth,
            bottom: borderWidth,
            right: borderWidth,
            left: borderWidth,
          }}
        >
          <div
            className='ap-hexagon__layer ap-hexagon__layer--background '
            style={{
              top: `-${borderWidth}`,
              bottom: `-${borderWidth}`,
              right: `-${borderWidth}`,
              left: `-${borderWidth}`,
            }}
          >
            <img
              className='ap-hexagon__layer--background-image'
              draggable='false'
            />
          </div>
          <div
            className='ap-hexagon__layer ap-hexagon__layer-elements'
            style={{
              top: `-${borderWidth}`,
              bottom: `-${borderWidth}`,
              right: `-${borderWidth}`,
              left: `-${borderWidth}`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
// #endregion
