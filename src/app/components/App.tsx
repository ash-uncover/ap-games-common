import React from 'react'
import * as ReactI18n from 'react-i18next'
import { Panel, Shell } from '@sol.ac/react-commons'
//
import { GameApp, GameSettingGeneralLangSelect } from '../../lib'
// CSS
import './App.css'

// #region Declaration
export interface AppProperties extends React.PropsWithChildren {
}
// #endregion

// #region Component
export const App = ({
}: AppProperties) => {

  // #region > Hooks
  const { t } = ReactI18n.useTranslation()
  // #endregion

  // #region > Render
  return (
    <GameApp
      name='test'
      lang='en'
    >
      <Shell>
        <Panel title={t('home.settings.game.lang.title')}>
          <GameSettingGeneralLangSelect
            values={[
              { text: 'Anglais', id: 'en' },
              { text: 'Francais', id: 'fr' }
            ]}
          />
        </Panel>
      </Shell>
    </GameApp>
  )
  // #endregion
}
// #endregion
