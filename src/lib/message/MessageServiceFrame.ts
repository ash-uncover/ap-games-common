import { UUID } from '@uncover/js-utils'
import Logger from '@uncover/js-utils-logger'
import { IMessageService } from './IMessageService'
import Message from './Message'
import MessageDispatcher from './MessageDispatcher'

const LOGGER = new Logger('MessageServiceFrame', 0)

class MessageServiceFrame implements IMessageService {

  // Attributes //

  #id: string
  #window: Window

  // Constructor //

  constructor(wdow: Window, id?: string) {
    this.#id = id || `message-service-frame-${UUID.next()}`
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
      _serviceId: this.#id
    }, '*')
  }

  sendMessage(message: Message) {
    LOGGER.info(`[${this.idShort}] sendMessage`)
    MessageDispatcher.sendMessage({
      ...message,
      _serviceId: this.id,
    })
  }

  // Private Methods //

  #handleMessage(event: MessageEvent) {
    const data = event.data || {}
    if (data._serviceId && data._dispatcherId) {
      this.sendMessage({
        _serviceId: this.#id,
        type: data.type,
        payload: data.payload
      })
    }
  }
}

export default MessageServiceFrame