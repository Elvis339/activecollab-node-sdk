import axios from 'axios';

export abstract class Authentication {
    private email: string;
    private password: string;
    private intent: string;
    private X_Angie_AuthApi: string;
    private client_name: string;
    private client_vendor: string;
    protected URL: string;

    constructor(Email: string, Password: string, Client_Name: string, Client_Vendor: string, Url = 'https://app.activecollab.com') {
        this.email = Email
        this.password = Password
        this.client_name = Client_Name
        this.client_vendor = Client_Vendor
        this.intent = ''
        this.X_Angie_AuthApi = ''
        this.URL = Url
    }

    protected getToken(): string { return this.X_Angie_AuthApi }
    protected setToken(newToken: string): string { return this.X_Angie_AuthApi = newToken }
    protected setIntent(newIntent: string): string { return this.intent = newIntent }
    protected getEmail(): string { return this.email }
    protected getPassword(): string { return this.password }
    public getURL(): string { return this.URL }
    public setURL(newUrl: string): string { return this.URL = newUrl }
    public getClientName(): string { return this.client_name }
    public getClientVendor(): string { return this.client_vendor}

    protected async fetchIntent(): Promise<any>{
        try {
            const res = await axios.post(`https://activecollab.com/api/v1/external/login`, {
                email: this.getEmail(),
                password: this.getPassword()
            })
            if (res.data.is_ok === 1) return this.setIntent(res.data.user.intent)
        } catch (error) {
            console.error(error.response)
        }
    }

    abstract async issueToken(account_id?: number): Promise<any>;
}