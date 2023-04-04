import axios, { AxiosInstance } from 'axios';
import { API } from './constants';
import { buildUrl } from './utils';

export class Cloud {
  client: AxiosInstance = axios.create();

  constructor(
    public client_name: string,
    public client_vendor: string,
    public account_id: string,
    private email: string,
    private password: string,
  ) {}

  protected async fetchIntent() {
    return this.client.post(API.EXTERNAL_LOGIN_URL, {
      email: this.email,
      password: this.password,
    });
  }

  doBuildUrl(path: string) {
    return buildUrl({
      type: 'cloud',
      accountId: this.account_id,
      path,
    });
  }

  async issueTokenIntent() {
    const intentResponse = await this.fetchIntent();
    const url = this.doBuildUrl('issue-token-intent');
    const response = await this.client.post(url, {
      intent: intentResponse.data?.user?.intent,
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
