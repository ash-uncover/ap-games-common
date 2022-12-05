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

  // Public //

  init(handleMessage: ((message: Message) => void)) {
    this.#init = true
    this.#handle = handleMessage
    this.#closure = MessageService.addDispatcher(this)
    LOGGER.info(`[${this.#id}] starting`)
    return () => {
      LOGGER.info(`[${this.#id}] closing`)
      this.#init = false
      this.#handle = null
      if (this.#closure) {
        this.#closure()
      }
    }
  }

  onMessage(message: Message) {
    if (this.#init && this.#handle) {
      LOGGER.info(`[${this.#id}] (on message) sending message`)
      this.#handle(message)
    } else {
      console.warn(`Receive Message but not init: ${this.id}`)
    }
  }

  sendMessage(message: Message) {
    LOGGER.info(`[${this.#id}] send message`)
    if (this.#init) {
      MessageService.sendMessage({
        _dispatcherId: this.id,
        ...message
      })
    } else {
      console.warn(`Send Message but not init: ${this.id}`)
    }
  }
}

export default MessageDispatcher