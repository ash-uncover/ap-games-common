import Message from './Message';
import MessageListener from './MessageListener';
declare class MessageDispatcherClass {
    #private;
    constructor();
    dispatch(message: Message): void;
    register(listener: MessageListener): void;
    registerWindow(wdow: Window, origin: string): void;
    unregister(context: any): void;
}
declare const MessageDispatcher: MessageDispatcherClass;
export default MessageDispatcher;
