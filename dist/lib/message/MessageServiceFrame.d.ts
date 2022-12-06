import { IMessageService } from './IMessageService';
import Message from './Message';
declare class MessageServiceFrame implements IMessageService {
    #private;
    constructor(wdow: Window, id?: string);
    get id(): string;
    get idShort(): string;
    onMessage(message: Message): void;
    sendMessage(message: Message): void;
}
export default MessageServiceFrame;
