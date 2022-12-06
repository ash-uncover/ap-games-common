import { UUID } from '@uncover/js-utils'
import Logger from '@uncover/js-utils-logger'
import { IMessageService } from './IMessageService'
import Message from './Message'
import MessageService from './MessageService'

const LOGGER = new Logger('MessageFrameDispatcher', 0)

class MessageFrameDispatcher implements IMessageService {

  // Attributes //

  #id: string
  #window: Window

  // Constructor //

  constructor(wdow: Window, id?: string) {
    this.#id = id || `message-frame-dispatcher-${UUID.next()}`
    this.#window = wdow
    window.addEventListener(
      'message',
      this.#handleMessage.bind(this)
    )
  }

  // Getters & Setters //

  get id() {
    return this.#id
  }

  get idShort() {
    return this.#id.substring(this.#id.length - 3)
  }

  // Public Methods //

  onMessage(message: Message) {
    LOGGER.info(`[${this.idShort}] onMessage`)
    this.#window.postMessage({
      ...message,
      _dispatcherId: this.#id
    }, '*')
  }

  sendMessage(message: Message) {
    LOGGER.info(`[${this.idShort}] sendMessage`)
    MessageService.sendMessage({
      ...message,
      _dispatcherId: this.id,
    })
  }

  // Private Methods //

  #handleMessage(event: MessageEvent) {
    const data = event.data || {}
    if (data._serviceId && data._dispatcherId) {
      this.sendMessage({
        _dispatcherId: this.#id,
        type: data.type,
        payload: data.payload
      })
    }
  }
}

export default MessageFrameDispatcher