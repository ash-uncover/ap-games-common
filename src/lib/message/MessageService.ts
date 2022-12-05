import { UUID } from '@uncover/js-utils'
import Message from './Message'
import MessageDispatcher from './MessageDispatcher'

const CONNECTION_REQUEST = '__CONNNECTION_REQUEST__'
const CONNECTION_ACKNOWLEDGE = '__CONNECTION_ACKNOWLEDGE__'

class MessageServiceClass {

  // Attributes //

  #id: string = `message-service-${UUID.next()}`
  #dispatchers: MessageDispatcher[] = []
  #services: MessageDispatcher[] = []

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
      })
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
      console.log('child trying to connect')
      console.log(event)
    }
    if (event.data?._messageService && event.data?.type === CONNECTION_ACKNOWLEDGE) {
      // This is when a parent service has acknoledge connection
      console.log('parent acknowledge connection')
      console.log(event)
    }
  }
}

const MessageService = new MessageServiceClass()

export default MessageService
