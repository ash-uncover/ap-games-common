export declare class DataManager {
    #private;
    constructor(basePath: string);
    load<T>(url: string, options?: object): Promise<T>;
}
