import React from 'react'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Menu,
  Page
} from '../lib'

export const App = () => {

  // Hooks //

  // Rendering //

  const renderPageMenu = () => {
    return (
      <Menu
        title='Home'
        items={[{
          icon: <FontAwesomeIcon icon={['fas', 'gamepad']} />,
          selected: true,
          text: 'Play',
          onClick: () => {}
        },{
          icon: <FontAwesomeIcon icon={['fas', 'gear']} />,
          text: 'Options',
          onClick: () => {}
        },{
          icon: <FontAwesomeIcon icon={['fas', 'gifts']} />,
          text: 'Credits',
          onClick: () => {}
        }, {
          icon: <FontAwesomeIcon icon={['fas', 'right-from-bracket']} />,
          text: 'Exit',
          onClick: () => {}
        }]}
      />
    )
  }

  const renderPageContent = () => {
    return (
      <div
        style={{ background: '#888', height: '100%' }}
      />
    )
  }

  return (
    <Page
      menu={renderPageMenu()}
      content={renderPageContent()}
    />
  )
}