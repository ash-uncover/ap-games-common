import { ImageLoadState } from '../constants/ImageLoadState';
export declare class ImageLoader {
    #private;
    constructor();
    get images(): {
        id: string;
        state: ImageLoadState;
    }[];
    getImageState(id: string): ImageLoadState;
    loadImages(path: string | string[], onProgress?: (value: number) => void): Promise<void | PromiseSettledResult<void>[]>;
    load(id: string): Promise<void>;
}
