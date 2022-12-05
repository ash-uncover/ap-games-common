import { UUID } from '@uncover/js-utils'
import Message from './Message'
import MessageService from './MessageService'

class MessageDispatcher {

  // Attributes //

  #id: string = `message-dispatcher-${UUID.next()}`
  #init: boolean = false
  #handle: ((message: Message) => void) | null = null
  #closure: (() => void) | null = null

  // Constructor //

  constructor() { }

  // Getters & Setters //

  get id() {
    return this.#id
  }

  // Public //

  init(handleMessage: ((message: Message) => void)) {
    this.#init = true
    this.#handle = handleMessage
    this.#closure = MessageService.addDispatcher(this)
    return () => {
      this.#init = false
      this.#handle = null
      if (this.#closure) {
        this.#closure()
      }
    }
  }

  onMessage(message: Message) {
    if (this.#init && this.#handle) {
      this.#handle(message)
    } else {
      console.warn(`Receive Message but not init: ${this.id}`)
    }
  }

  sendMessage(message: Message) {
    if (this.#init) {
      MessageService.sendMessage(this.id, message)
    } else {
      console.warn(`Send Message but not init: ${this.id}`)
    }
  }
}

export default MessageDispatcher