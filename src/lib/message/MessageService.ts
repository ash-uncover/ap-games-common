import { UUID } from '@uncover/js-utils'
import Logger from '@uncover/js-utils-logger'
import Message from './Message'
import MessageDispatcher from './MessageDispatcher'

const CONNECTION_REQUEST = '__CONNNECTION_REQUEST__'
const CONNECTION_ACKNOWLEDGE = '__CONNECTION_ACKNOWLEDGE__'

const LOGGER = new Logger('MessageService', 0)

class MessageServiceClass {

  // Attributes //

  #id: string = `message-service-${UUID.next()}`
  #dispatchers: MessageDispatcher[] = []
  #services: string[] = []

  // Constructor //

  constructor() {
    // Wait for registration of other services
    window.addEventListener(
      'message',
      this.#handleMessage.bind(this)
    )
    if (window !== window.parent) {
      // Try to connect to a parent service
      window.parent.postMessage({
        _messageService: this.#id,
        type: CONNECTION_REQUEST
      }, '*')
    }
  }

  // Getters & Setters //

  // Public Methods //

  addDispatcher(dispatcher: MessageDispatcher) {
    if (!this.#dispatchers.includes(dispatcher)) {
      this.#dispatchers.push(dispatcher)
    }
    return () => this.removeDispatcher(dispatcher)
  }

  removeDispatcher(dispatcher: MessageDispatcher) {
    this.#dispatchers = this.#dispatchers.filter(disp => disp !== dispatcher)
  }

  sendMessage(dispatcherId: string, message: Message) {
    LOGGER.info(`[${this.#id}] send message`)
    this.#dispatchers.forEach((dispatcher) => {
      if (dispatcher.id !== dispatcherId) {
        dispatcher.onMessage(message)
      }
    })
  }

  // Private Methods //

  #handleMessage(event: MessageEvent) {
    if (event.data?._messageService && event.data?.type === CONNECTION_REQUEST) {
      // This is when a child service wants to connect
      LOGGER.info(`[${this.#id}] child trying to connect`)
      const wdow = <Window>event.source!
      this.#addService(event.data?._messageService, wdow)
    }
    if (event.data?._messageService && event.data?.type === CONNECTION_ACKNOWLEDGE) {
      // This is when a parent service has acknoledge connection
      LOGGER.info(`[${this.#id}] parent acknowledge connection`)
      LOGGER.info(JSON.stringify(event))
      const parentDispatcher = new MessageDispatcher()
      parentDispatcher.init((message) => {
        window.parent.postMessage(message, '*')
      })
      this.addDispatcher(parentDispatcher)
    }
  }

  #addService(serviceId: string, wdow: Window) {
    if (!this.#services.includes(serviceId)) {
      const childDispatcher = new MessageDispatcher()
      const handler = (message: Message) => wdow.postMessage(message, '*')
      childDispatcher.init(handler)
      this.addDispatcher(childDispatcher)
      this.#services.push(serviceId)
      wdow.postMessage({
        _messageService: this.#id,
        type: CONNECTION_ACKNOWLEDGE
      }, '*')
    }
  }
}

const MessageService = new MessageServiceClass()

export default MessageService
