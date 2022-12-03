declare class DataManager {
    #private;
    constructor(basePath: string);
    load<T>(url: string): Promise<T>;
}
export default DataManager;
