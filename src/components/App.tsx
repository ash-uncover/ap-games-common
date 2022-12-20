import React, { ReactNode } from 'react'
import { GridTiles } from '../lib/components/grid/GridTiles'

export const App = () => {

  // Rendering //

  const width = 4
  const height = 5

  const renderCells = () => {
    const result: ReactNode[] = []
    for (let h = 0 ; h < height;h++) {
      for (let w = 0 ; w < width;w++) {
        result.push(renderCell(h * width + w))
      }
    }
    return result
  }

  const renderCell = (index: number) => {
    return (
      <div
        style={{
          boxSizing: 'border-box',
          border: '1px solid red',
          height: '100%',
          width: '100%'
        }}
      >
        {index}
      </div>
    )
  }

  return (
    <div>
      <GridTiles
        width={width}
        height={height}
      >
        {renderCells()}
      </GridTiles>
    </div>
  )
}