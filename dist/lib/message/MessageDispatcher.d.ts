import Message from './Message';
declare class MessageDispatcher {
    #private;
    constructor();
    get id(): string;
    init(handleMessage: ((message: Message) => void)): () => void;
    onMessage(message: Message): void;
    sendMessage(message: Message): void;
}
export default MessageDispatcher;
