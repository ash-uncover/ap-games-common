import { AudioLoadState } from '../constants/AudioLoadState';
export declare class AudioLoader {
    #private;
    constructor();
    get audios(): {
        id: string;
        state: AudioLoadState;
    }[];
    getAudioState(id: string): AudioLoadState;
    load(id: string): Promise<void>;
}
