import axios, { AxiosPromise } from "axios";
import { Authentication } from "../Authentication/Authentication";
import { API, API_VERSION } from "../constants";
import { IClient } from "../constants/types";

export class Client extends Authentication implements IClient {
  private account_id?: number;

  constructor(
    email: string,
    password: string,
    client_name: string,
    client_vendor: string,
    account_id?: number,
    url?: string
  ) {
    super(email, password, client_name, client_vendor, url);
    this.account_id = account_id;
  }

  private isSelfHosted(): boolean {
    if (this.getUrl() === API.BASE_URL) {
      return false;
    }
    return true;
  }

  /**
   * @description Builds API endpoint
   * @returns String
   */
  protected endpoint(component?: string): string {
    const { TOKEN, BASE_URL } = API;

    if (this.isSelfHosted()) {
      return component
        ? `${this.getUrl()}${API_VERSION}/${component}`
        : `${this.getUrl()}${TOKEN.ISSUE_TOKEN}`;
    }
    return component
      ? `${BASE_URL}/${this.account_id}${API_VERSION}/${component}`
      : `${BASE_URL}/${this.account_id}${TOKEN.ISSUE_TOKEN_INTENT}`;
  }

  protected async fetchIntent(): Promise<string | undefined> {
    const res = await axios.post(API.EXTERNAL_LOGIN_URL, {
      email: this.getEmail(),
      password: this.getPassword(),
    });
    if (res.data.is_ok === 1) {
      return res.data.user.intent;
    } else {
      throw new Error("Could not fetch intent...");
    }
  }

  /**
   * @description Issues token based on the account_id
   * @returns String X-Angie-AuthApi Token
   */
  public async issueToken(): Promise<void> {
    try {
      let res = null;
      // Self Hosted
      if (this.isSelfHosted()) {
        res = await axios.post(this.endpoint(), {
          username: this.getEmail(),
          password: this.getPassword(),
          client_name: this.getClientName(),
          client_vendor: this.getClientVendor(),
        });
        res.data.is_ok ? this.setToken(res.data.token) : new Error();
      } else {
        const intent = await this.fetchIntent();
        res = await axios.post(this.endpoint(), {
          intent: intent,
          client_name: this.getClientName(),
          client_vendor: this.getClientVendor(),
        });
        res.data.is_ok ? this.setToken(res.data.token) : new Error();
      }
    } catch (e) {
      console.error(e.response);
    }
  }

  public async get(path: string): Promise<Array<object>> {
    return await axios.get(this.endpoint(path), {
      headers: {
        "X-Angie-AuthApiToken": this.getToken(),
      },
    });
  }

  public async post(path: string, data: JSON | object): Promise<object> {
    return await axios.post(this.endpoint(path), data, {
      headers: {
        "X-Angie-AuthApiToken": this.getToken(),
        "Content-Type": "application/json",
      },
    });
  }

  public async put(path: string, data?: JSON | object): Promise<object> {
    return await axios.put(this.endpoint(path), data, {
      headers: {
        "X-Angie-AuthApiToken": this.getToken(),
        "Content-Type": "application/json",
      },
    });
  }

  public async delete(path: string): Promise<object> {
    return await axios.delete(this.endpoint(path), {
      headers: {
        "X-Angie-AuthApiToken": this.getToken(),
      },
    });
  }
}
