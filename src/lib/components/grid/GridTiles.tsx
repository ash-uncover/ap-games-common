import React, { CSSProperties, ReactNode, useState } from 'react'
// Components
import { GridContainer } from './GridContainer'

import './GridTiles.css'

export interface GridTilesProperties {
  className?: string
  style?: CSSProperties

  height: number
  width: number

  children: ReactNode[]
}

export const GridTiles = ({
  className,
  style,

  height,
  width,

  children,
}: GridTilesProperties) => {

  // Hooks //

  const [ready, setReady] = useState(false)
  const [invert, setInvert] = useState(false)

  // Events //

  const handleSizeInvert = (invert: boolean) => {
    setReady(true)
    setInvert(invert)
  }

  // Rendering //

  const renderGrid = () => {
    const result = []
    const nbRows = invert ? width : height
    for (let indexRow = 0; indexRow < nbRows; indexRow++) {
      result.push(renderGridRow(indexRow))
    }
    return result
  }
  const renderGridRow = (indexRow: number) => {
    const result = []
    const nbCols = invert ? height : width
    for (let indexCol = 0; indexCol < nbCols; indexCol++) {
      result.push(renderGridCell(indexRow, indexCol))
    }
    return (
      <div
        className='grid-tiles-row'
        key={`grid-tiles-row-${indexRow}`}
      >
        {result}
      </div>
    )
  }
  const renderGridCell = (indexRow: number, indexCol: number) => {
    let element = null
    const indexCell = indexRow * (invert ? height : width) + indexCol
    if (indexCell < children.length) {
      element = children[indexCell]
    }
    return (
      <div
        className='grid-tiles-row-cell'
        key={`grid-cell-${indexRow}-${indexCol}`}
      >
        {element}
      </div>
    )
  }

  const classes = ['grid-tiles']
  if (className) {
    classes.push(className)
  }

  return (
    <GridContainer
      style={style}
      height={height}
      width={width}
      onSizeInvert={handleSizeInvert}
    >
      {ready ?
        <div className={classes.join(' ')}>
          {renderGrid()}
        </div>
      : null}
    </GridContainer>
  )
}