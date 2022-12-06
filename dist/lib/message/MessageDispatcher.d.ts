import Message from './Message';
declare class MessageDispatcher {
    #private;
    constructor(id?: string);
    get id(): string;
    get idShort(): string;
    init(handleMessage: ((message: Message) => void)): () => void;
    onMessage(message: Message): void;
    sendMessage(message: Message): void;
}
export default MessageDispatcher;
