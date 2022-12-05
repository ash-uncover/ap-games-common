import Message from './Message';
import MessageDispatcher from './MessageDispatcher';
declare class MessageServiceClass {
    #private;
    constructor();
    addDispatcher(dispatcher: MessageDispatcher): () => void;
    removeDispatcher(dispatcher: MessageDispatcher): void;
    sendMessage(dispatcherId: string, message: Message): void;
}
declare const MessageService: MessageServiceClass;
export default MessageService;
