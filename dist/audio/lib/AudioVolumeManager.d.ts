interface AudioVolume {
    master: boolean;
    masterVolume: number;
    music: boolean;
    musicVolume: number;
    ui: boolean;
    uiVolume: number;
    game: boolean;
    gameVolume: number;
}
export declare class AudioVolumeManager implements AudioVolume {
    #private;
    constructor();
    get master(): boolean;
    set master(on: boolean);
    get masterVolume(): number;
    set masterVolume(value: number);
    get music(): boolean;
    set music(on: boolean);
    get musicVolume(): number;
    set musicVolume(value: number);
    get ui(): boolean;
    set ui(on: boolean);
    get uiVolume(): number;
    set uiVolume(value: number);
    get game(): boolean;
    set game(on: boolean);
    get gameVolume(): number;
    set gameVolume(value: number);
}
export {};
