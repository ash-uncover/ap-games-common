import { UUID } from '@uncover/js-utils'
import Logger from '@uncover/js-utils-logger'
import Message from './Message'
import MessageService from './MessageService'

const LOGGER = new Logger('MessageDispatcher', 0)

class MessageDispatcher {

  // Attributes //

  #id: string
  #init: boolean = false
  #handle: ((message: Message) => void) | null = null
  #closure: (() => void) | null = null

  // Constructor //

  constructor(id?: string) {
    this.#id = id || `message-dispatcher-${UUID.next()}`
  }

  // Getters & Setters //

  get id() {
    return this.#id
  }

  get idShort() {
    return this.#id.substring(this.#id.length - 3)
  }

  // Public //

  init(handleMessage: ((message: Message) => void)) {
    this.#init = true
    this.#handle = handleMessage
    this.#closure = MessageService.addDispatcher(this)
    LOGGER.info(`[${this.idShort}] starting`)
    return () => {
      LOGGER.info(`[${this.idShort}] closing`)
      this.#init = false
      this.#handle = null
      if (this.#closure) {
        this.#closure()
      }
    }
  }

  onMessage(message: Message) {
    if (this.#init && this.#handle) {
      LOGGER.info(`[${this.idShort}] (on message) sending message`)
      this.#handle(message)
    } else {
      console.warn(`Receive Message but not init: ${this.idShort}`)
    }
  }

  sendMessage(message: Message) {
    LOGGER.info(`[${this.idShort}] send message`)
    if (this.#init) {
      MessageService.sendMessage({
        ...message,
        _dispatcherId: this.id,
      })
    } else {
      console.warn(`Send Message but not init: ${this.idShort}`)
    }
  }
}

export default MessageDispatcher