import React, { useState } from 'react'
// Components
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  Menu,
  Slider,
  Page,
  PageContent,
  PageMenu,
  Panel,
  Switch,
  Select
} from '../lib'

export const App = () => {

  // Hooks //

  const [selectEnabled, setSelectDisabled] = useState(true)
  const handleSelectDisabledChange = (v: boolean) => {
    setSelectDisabled(v)
  }

  const [selectValue, setSelectValue] = useState('1')
  const handleSelectChange = (v: string) => {
    setSelectValue(v)
  }

  const [sliderEnabled, setSliderDisabled] = useState(true)
  const handleSliderDisabledChange = (v: boolean) => {
    setSliderDisabled(v)
  }

  const [sliderValue, setSliderValue] = useState(50)
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
            label='Enable select'
            checked={selectEnabled}
            onChange={handleSelectDisabledChange}
          />
          <Select
            disabled={!selectEnabled}
            value={selectValue}
            values={[
              { id: '1', text: 'Value 1' },
              { id: '2', text: 'Value 2' },
              { id: '3', text: 'Value 3' }
            ]}
            onChange={handleSelectChange}
          />

          <Switch
            label='Enable slider'
            checked={sliderEnabled}
            onChange={handleSliderDisabledChange}
          />
          <Slider
            disabled={!sliderEnabled}
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