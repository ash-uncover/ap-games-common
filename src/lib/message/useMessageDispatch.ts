import MessageDispatcher from './MessageDispatcher'

const useMessageDispatch = () => {
  return MessageDispatcher.dispatch.bind(MessageDispatcher)
}

export default useMessageDispatch