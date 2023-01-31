interface useLoadDataPayload {
    images: string[];
    audios: string[];
    delayed?: boolean;
}
export declare const useLoadData: ({ images, audios, delayed }: useLoadDataPayload, onProgress: (value: number) => void, onLoaded?: () => void) => void;
export {};
