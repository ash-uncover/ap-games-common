export interface Message {
  type: string
  payload: any
}

export interface MessageListener {
  context: any
  handleMessage: (message: Message) => void
}

class MessageDispatcherClass {

  // Attributes //

  #listeners: MessageListener[]

  // Constructor //

  constructor() {
    this.#listeners = []
    window.addEventListener('message', this.#handlePostMessage.bind(this))
  }

  // Getters & Setters //

  // Public //

  dispatch(message: Message) {
    this.#listeners.forEach((listener) => {
      try {
        listener.handleMessage.call(listener.context, message)
      } catch (error) {
        // We do not want to crash the whole application
        this.unregister(listener.context)
      }
    })
  }

  register(listener: MessageListener) {
    if (this.#listeners.some((list) => listener.context === list.context)) {
      this.unregister(listener.context)
    }
    this.#listeners.push(listener)
  }
  registerWindow(wdow: Window, origin: string) {
    this.register({
      context: wdow,
      handleMessage: (message) => {
        wdow.postMessage(message, origin)
      }
    })
  }

  unregister(context: any) {
    this.#listeners = this.#listeners.filter(listener => listener.context !== context)
  }

  // Private //

  #handlePostMessage(event: any) {
    if (event.data?._xbuilder) {
      this.dispatch({
        type: event.data.type,
        payload: event.data.payload,
      })
    }
  }
}

const MessageDispatcher = new MessageDispatcherClass()

export default MessageDispatcher