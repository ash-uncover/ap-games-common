import { IMessageService } from './IMessageService';
import Message from './Message';
declare class MessageServiceClass {
    #private;
    constructor(id?: string);
    get id(): string;
    get idShort(): string;
    addDispatcher(dispatcher: IMessageService): () => void;
    removeDispatcher(dispatcher: IMessageService): void;
    sendMessage(message: Message): void;
}
declare const MessageService: MessageServiceClass;
export default MessageService;
