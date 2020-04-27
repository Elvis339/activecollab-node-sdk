export interface IClient {
  get: (path: string) => Promise<object>;
  post: (path: string, data: JSON | object) => Promise<object>;
  put: (path: string, data?: JSON | object) => Promise<object>;
  delete: (path: string) => Promise<object>;
}
