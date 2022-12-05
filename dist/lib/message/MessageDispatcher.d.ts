import Message from './Message';
declare class MessageDispatcher {
    #private;
    constructor(handleMessage: ((message: Message) => void));
    get id(): string;
    init(): () => void;
    onMessage(message: Message): void;
    sendMessage(message: Message): void;
}
export default MessageDispatcher;
