import Message from './Message';
import MessageDispatcher from './MessageDispatcher';
declare class MessageServiceClass {
    #private;
    constructor(id?: string);
    get id(): string;
    get idShort(): string;
    addDispatcher(dispatcher: MessageDispatcher): () => void;
    removeDispatcher(dispatcher: MessageDispatcher): void;
    sendMessage(message: Message): void;
}
declare const MessageService: MessageServiceClass;
export default MessageService;
