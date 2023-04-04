import axios, { AxiosInstance } from 'axios';
import { API } from './constants';
import { buildUrl } from './utils';

export class SelfHosted {
  client: AxiosInstance = axios.create();

  constructor(
    public url: string,
    public client_name: string,
    public client_vendor: string,
    private email: string,
    private password: string,
  ) {}

  doBuildUrl(path: string) {
    return buildUrl({
      url: this.url,
      type: 'selfHosted',
      path,
    });
  }

  async issueToken() {
    const url = this.doBuildUrl('issue-token');
    const response = await this.client.post(url, {
      username: this.email,
      password: this.password,
      client_name: this.client_name,
      client_vendor: this.client_vendor,
    });
    this.client.defaults.headers.common['X-Angie-AuthApiToken'] = response.data.token;
    return response.data.token;
  }

  // wire guard

  async get(path: string) {
    return this.client.get(this.doBuildUrl(path));
  }

  async post(path: string, data: unknown) {
    return this.client.post(this.doBuildUrl(path), data);
  }

  async put(path: string, data?: unknown) {
    return this.client.put(this.doBuildUrl(path), data);
  }

  async delete(path: string) {
    return this.client.delete(this.doBuildUrl(path));
  }
}
