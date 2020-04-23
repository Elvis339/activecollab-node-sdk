export interface IClient {
    get: (path: string) => Promise<object>;
    post: (path: string) => Promise<object>;
    put: (path: string) => Promise<object>;
    delete: (path: string) => Promise<object>;
}
