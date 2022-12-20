import React, { ReactNode } from 'react'
// Components
import { GridContainer } from './GridContainer'

import './GridTiles.css'

export interface GridTilesProperties {
  className?: string
  height: number
  width: number

  children: ReactNode[]
}

export const GridTiles = ({
  className,
  height,
  width,

  children,
}: GridTilesProperties) => {

  // Rendering //

  const renderGrid = () => {
    const result = []
    for (let indexRow = 0; indexRow < height; indexRow++) {
      result.push(renderGridRow(indexRow))
    }
    return result
  }
  const renderGridRow = (indexRow: number) => {
    const result = []
    for (let indexCol = 0; indexCol < width; indexCol++) {
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
    const indexCell = indexRow * width + indexCol
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
      height={height}
      width={width}
    >
      <div className={classes.join(' ')}>
        {renderGrid()}
      </div>
    </GridContainer>
  )
}