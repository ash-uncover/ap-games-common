import { useEffect } from 'react'
import MessageDispatcher from './MessageDispatcher'

const useMessageDispatcher = (callback: () => void) => {
  useEffect(() => {
    MessageDispatcher.register({
      context: this,
      handleMessage: callback
    })
    return () => MessageDispatcher.unregister(this)
  }, [])
}

export default useMessageDispatcher