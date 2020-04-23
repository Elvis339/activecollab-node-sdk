import { API } from "../constants";

export abstract class Authentication {
    public url: string;
    protected client_name: string;
    protected client_vendor: string;
    protected email: string;

    private password: string;
    private X_ANGIE_AUTH_API: string = "";

    constructor(email: string, password: string, client_name: string, client_vendor: string, url: string = API.BASE_URL) {
        this.email = email;
        this.password = password;
        this.client_name = client_name;
        this.client_vendor = client_vendor;
        this.url = url;
    }

    protected getEmail = (): string => this.email;

    protected getPassword = (): string => this.password;

    protected getToken = (): string => this.X_ANGIE_AUTH_API;

    public getUrl = (): string => this.url;

    public getClientName = (): string => this.client_name;

    public getClientVendor = (): string => this.client_vendor;

    protected setToken(newX_ANGIE_AUTH_API: string): string {
        return this.X_ANGIE_AUTH_API = newX_ANGIE_AUTH_API;
    }
}
