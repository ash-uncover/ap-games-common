import AudioManagerBase from './lib/AudioManager'
import DataManagerBase from './lib/DataManager'
import FullscreenHelperBase from './lib/FullscreenHelper'

import ShortcutManagerBase from './lib/ShortcutManager'

export * from './lib/AudioManager'
export * from './lib/DataManager'
export * from './lib/FullscreenHelper'
export * from './lib/ShortcutManager'

// Audio
export const AudioManager = AudioManagerBase
// Data
export const DataManager = DataManagerBase
// Fullscreen
export const FullscreenHelper = FullscreenHelperBase
// Shortcuts
export const ShortcutManager = ShortcutManagerBase
