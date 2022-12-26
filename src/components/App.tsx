import React, { useState } from 'react'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Menu,
  Slider,
  Page,
  PageContent,
  PageMenu,
  Panel
} from '../lib'

export const App = () => {

  // Hooks //

  const [value, setValue] = useState(50)

  const handleValueChange = (v: number) => {
    setValue(v)
  }

  // Rendering //

  return (
    <Page>
      <PageMenu>
        <Menu
          title='Home'
          items={[{
            icon: <FontAwesomeIcon icon={['fas', 'gamepad']} />,
            selected: true,
            text: 'Play',
            onClick: () => { }
          }, {
            icon: <FontAwesomeIcon icon={['fas', 'gear']} />,
            text: 'Options',
            onClick: () => { }
          }, {
            icon: <FontAwesomeIcon icon={['fas', 'gifts']} />,
            text: 'Credits',
            onClick: () => { }
          }, {
            icon: <FontAwesomeIcon icon={['fas', 'right-from-bracket']} />,
            text: 'Exit',
            onClick: () => { }
          }]}
        />
      </PageMenu>
      <PageContent>
        <Panel>
          <h2>
            Big Title
          </h2>
        </Panel>

        <Panel title='Title'>
          <Slider
            label='Slider'
            min={50}
            max={100}
            value={value}
            onChange={handleValueChange}
          />
        </Panel>
      </PageContent>
    </Page>

  )
}