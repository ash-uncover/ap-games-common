interface Message {
  _dispatcherId?: string
  type: string
  payload: any
}

export default Message