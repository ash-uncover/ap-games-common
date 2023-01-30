import { AudioPlayOptions } from './AudioPlayOptions';
export interface AudioPlayEntry {
}
export declare class AudioList {
    #private;
    constructor(paths: string[], options?: AudioPlayOptions);
    set onEnd(listener: (() => void));
    get category(): import("../constants/AudioCategory").AudioCategory;
    set volume(v: number);
    previous(): void;
    next(): void;
    stop(): void;
    pause(): void;
    play(): void;
}
