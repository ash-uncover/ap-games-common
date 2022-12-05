import Message from './Message';
interface MessageListener {
    context: any;
    handleMessage: (message: Message) => void;
}
export default MessageListener;
