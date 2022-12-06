import AudioManagerBase from './lib/AudioManager'
import DataManagerBase from './lib/DataManager'
import FullscreenHelperBase from './lib/FullscreenHelper'

import MessageBase from './lib/message/Message'
import MessageDispatcherBase from './lib/message/MessageService'

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
// Message
export type Message = MessageBase
export const MessageDispatcher = MessageDispatcherBase
// Shortcuts
export const ShortcutManager = ShortcutManagerBase
