import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MessageDispatcher from './MessageDispatcher'

const useMessageDispatcher = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    MessageDispatcher.register({
      context: this,
      handleMessage: dispatch
    })
    return () => MessageDispatcher.unregister(this)
  }, [])
  return MessageDispatcher.dispatch
}

export default useMessageDispatcher