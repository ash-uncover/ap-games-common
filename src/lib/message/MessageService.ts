import { UUID } from '@uncover/js-utils'
import Logger from '@uncover/js-utils-logger'
import { IMessageService } from './IMessageService'
import Message from './Message'
import MessageDispatcher from './MessageDispatcher'
import MessageFrameDispatcher from './MessageFrameDispatcher'

const CONNECTION_REQUEST = '__CONNNECTION_REQUEST__'
const CONNECTION_ACKNOWLEDGE = '__CONNECTION_ACKNOWLEDGE__'

const LOGGER = new Logger('MessageService', 0)

class MessageServiceClass {

  // Attributes //

  #id: string = `message-service-${UUID.next()}`
  #dispatchers: IMessageService[] = []
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
      LOGGER.info(`[${this.idShort}] contact parent`)
      window.parent.postMessage({
        _serviceId: this.#id,
        type: CONNECTION_REQUEST
      }, '*')
    }
  }

  // Getters & Setters //

  get id() {
    return this.#id
  }

  get idShort() {
    return this.#id.substring(this.#id.length - 3)
  }

  // Public Methods //

  addDispatcher(dispatcher: IMessageService) {
    LOGGER.info(`[${this.idShort}] add dispatcher [${dispatcher.idShort}]`)
    if (!this.#dispatchers.includes(dispatcher)) {
      this.#dispatchers.push(dispatcher)
    }
    return () => this.removeDispatcher(dispatcher)
  }

  removeDispatcher(dispatcher: IMessageService) {
    LOGGER.info(`[${this.idShort}] remove dispatcher [${dispatcher.idShort}]`)
    this.#dispatchers = this.#dispatchers.filter(disp => disp !== dispatcher)
  }

  sendMessage(message: Message) {
    LOGGER.info(`[${this.idShort}] send message to ${this.#dispatchers.length} dispatchers from ${message._dispatcherId?.substring(message._dispatcherId!.length - 3)}`)
    this.#dispatchers.forEach((dispatcher) => {
      if (dispatcher.id !== message._dispatcherId) {
        LOGGER.info(`[${this.idShort}] send message on dispatcher [${dispatcher.idShort}]`)
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
      this.#handleConnectionRequest(event)
    } else if (event.data?._serviceId && event.data?.type === CONNECTION_ACKNOWLEDGE) {
      this.#handleConnectionAcknowledge(event)
    }
  }

  #handleConnectionRequest(event: MessageEvent) {
    // This is when a child service wants to connect
    LOGGER.info(`[${this.idShort}] child trying to connect`)
    console.log(event)
    const serviceId = event.data?._serviceId
    const wdow = <Window>event.source!
    if (!this.#services.includes(serviceId)) {
      const childDispatcher = new MessageFrameDispatcher(wdow)
      this.addDispatcher(childDispatcher)
      this.#services.push(serviceId)
      childDispatcher.onMessage({
        _serviceId: this.#id,
        _dispatcherId: childDispatcher.id,
        type: CONNECTION_ACKNOWLEDGE,
        payload: null
      })
    }
  }

  #handleConnectionAcknowledge(event: MessageEvent) {
    // This is when a parent service has acknoledge connection
    LOGGER.info(`[${this.idShort}] parent acknowledge connection`)
    console.log(event)
    const parentDispatcher = new MessageFrameDispatcher(window.parent, event.data?._dispatcherId)
    this.addDispatcher(parentDispatcher)
  }
}

const MessageService = new MessageServiceClass()

export default MessageService
