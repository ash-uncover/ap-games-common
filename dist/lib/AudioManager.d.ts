export type AudioType = 'music' | 'interface' | 'game';
export declare const AudioTypes: {
    MUSIC: AudioType;
    INTERFACE: AudioType;
    GAME: AudioType;
};
export declare const normalizeVolumeValue: (value: number) => number;
declare class AudioManager {
    #private;
    constructor(basePath: string);
    get master(): boolean;
    set master(on: boolean);
    get masterVolume(): number;
    set masterVolume(value: number);
    get music(): boolean;
    set music(on: boolean);
    get musicVolume(): number;
    set musicVolume(value: number);
    get interface(): boolean;
    set interface(on: boolean);
    get interfaceVolume(): number;
    set interfaceVolume(value: number);
    get game(): boolean;
    set game(on: boolean);
    get gameVolume(): number;
    set gameVolume(value: number);
    play(path: string, type?: AudioType): () => void;
    stop(path: string): void;
}
export default AudioManager;
