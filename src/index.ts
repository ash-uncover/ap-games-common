import AudioManagerBase from './lib/AudioManager'
import DataManagerBase from './lib/DataManager'
import FullscreenHelperBase from './lib/FullscreenHelper'

import MessageBase from './lib/message/Message'
import MessageListenerBase from './lib/message/MessageListener'
import MessageDispatcherBase from './lib/message/MessageDispatcher'
import useMessageDispatcherBase from './lib/message/useMessageDispatcher'

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
export type MessageListener = MessageListenerBase
export const MessageDispatcher = MessageDispatcherBase
export const useMessageDispatcher = useMessageDispatcherBase
// Shortcuts
export const ShortcutManager = ShortcutManagerBase
