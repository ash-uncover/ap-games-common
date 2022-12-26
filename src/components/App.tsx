import React, { useState } from 'react'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Menu,
  Slider,
  Page,
  PageContent,
  PageMenu,
  Panel,
  Switch
} from '../lib'

export const App = () => {

  // Hooks //

  const [sliderValue, setSliderValue] = useState(50)
  const [switchValue, setSwitchValue] = useState(false)

  const handleSwitchChange = (v: boolean) => {
    setSwitchValue(v)
  }

  const handleValueChange = (v: number) => {
    setSliderValue(v)
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
          <Switch
            label='Switch'
            checked={switchValue}
            onChange={handleSwitchChange}
          />
          <Slider
            label='Slider'
            min={50}
            max={100}
            value={sliderValue}
            onChange={handleValueChange}
          />
        </Panel>
      </PageContent>
    </Page>

  )
}