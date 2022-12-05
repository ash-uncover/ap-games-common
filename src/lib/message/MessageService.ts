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

  constructor(id?: string) {
    this.#id = id || `message-service-${UUID.next()}`
    // Wait for registration of other services
    window.addEventListener(
      'message',
      this.#handleMessage.bind(this)
    )
    if (window !== window.parent) {
      // Try to connect to a parent service
      LOGGER.info(`[${this.#id}] contact parent`)
      window.parent.postMessage({
        _serviceId: this.#id,
        type: CONNECTION_REQUEST
      }, '*')
    }
  }

  // Getters & Setters //

  // Public Methods //

  addDispatcher(dispatcher: MessageDispatcher) {
    LOGGER.info(`[${this.#id}] add dispatcher [${dispatcher.id}]`)
    if (!this.#dispatchers.includes(dispatcher)) {
      this.#dispatchers.push(dispatcher)
    }
    return () => this.removeDispatcher(dispatcher)
  }

  removeDispatcher(dispatcher: MessageDispatcher) {
    LOGGER.info(`[${this.#id}] remove dispatcher [${dispatcher.id}]`)
    this.#dispatchers = this.#dispatchers.filter(disp => disp !== dispatcher)
  }

  sendMessage(message: Message) {
    LOGGER.info(`[${this.#id}] send message to ${this.#dispatchers.length} dispatchers from ${message._dispatcherId}`)
    this.#dispatchers.forEach((dispatcher) => {
      if (dispatcher.id !== message._dispatcherId) {
        LOGGER.info(`[${this.#id}] send message on dispatcher [${dispatcher.id}]`)
        dispatcher.onMessage({
          _serviceId: this.#id,
          ...message,
        })
      }
    })
  }

  // Private Methods //

  #handleMessage(event: MessageEvent) {
    if (event.data?._serviceId && event.data?.type === CONNECTION_REQUEST) {
      // This is when a child service wants to connect
      LOGGER.info(`[${this.#id}] child trying to connect`)
      const wdow = <Window>event.source!
      this.#addService(event.data?._serviceId, wdow)
    } else if (event.data?._serviceId && event.data?.type === CONNECTION_ACKNOWLEDGE) {
      // This is when a parent service has acknoledge connection
      LOGGER.info(`[${this.#id}] parent acknowledge connection`)
      const parentDispatcher = new MessageDispatcher(event.data?._dispatcherId)
      parentDispatcher.init((message) => {
        window.parent.postMessage(message, '*')
      })
      this.addDispatcher(parentDispatcher)
    } else if (event.data?._serviceId && event.data?._dispatcherId) {
      // When receiving a post message
      LOGGER.info(`[${this.#id}] received message`)
      this.sendMessage({
        type: event.data?.type,
        payload: event.data?.payload
      })
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
        _dispatcherId: childDispatcher.id,
        _serviceId: this.#id,
        type: CONNECTION_ACKNOWLEDGE
      }, '*')
    }
  }
}

const MessageService = new MessageServiceClass()

export default MessageService
