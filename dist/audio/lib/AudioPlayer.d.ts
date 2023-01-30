import { AudioLoader } from './AudioLoader';
import { AudioVolumeManager } from './AudioVolumeManager';
import { AudioPlayOptions } from './AudioPlayOptions';
import { AudioList } from './AudioList';
export interface AudioPlayerData {
    playing: AudioList[];
}
export declare class AudioPlayer {
    #private;
    constructor(loader?: AudioLoader, volumeManager?: AudioVolumeManager);
    get playing(): AudioList[];
    get master(): boolean;
    get masterVolume(): number;
    get game(): boolean;
    get gameVolume(): number;
    get music(): boolean;
    get musicVolume(): number;
    get ui(): boolean;
    get uiVolume(): number;
    set master(on: boolean);
    set masterVolume(volume: number);
    set game(on: boolean);
    set gameVolume(volume: number);
    set music(on: boolean);
    set musicVolume(volume: number);
    set ui(on: boolean);
    set uiVolume(volume: number);
    register(listener: (data: AudioPlayerData) => void): void;
    unregister(listener: (data: AudioPlayerData) => void): void;
    notify(): void;
    load(path: string | string[], onProgress?: (value: number) => void): Promise<void | PromiseSettledResult<void>[]>;
    mount(path: string | string[], options?: AudioPlayOptions): AudioList;
    unmount(list: AudioList): void;
    updateVolume(): void;
}
