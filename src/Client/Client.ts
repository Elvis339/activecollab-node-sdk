import axios from 'axios'
import { Authentication } from '../Authentication/Authentication'

export class Client extends Authentication {
    private account_id?: number;
    private token: string = ''

    constructor(Email: string, Password: string, Client_Name: string, Client_Vendor: string, URL = 'https://app.activecollab.com', Account_ID?: number) {
        super(Email, Password, Client_Name, Client_Vendor)
        super.setURL(URL)
        this.account_id = Account_ID
    }

    async issueToken(): Promise<any> {
        try {
            if (typeof this.account_id === 'undefined') {
                const res = await axios.post(this.tokenURL(this.account_id), {
                    username: this.getEmail(),
                    password: this.getPassword(),
                    client_name: this.getClientName(),
                    client_vendor: this.getClientVendor()
                })
                if (res.data.is_ok) return this.setToken(res.data.token)
                return this.getToken()
            } else {
                let intent = await this.fetchIntent()
                const res = await axios.post(this.tokenURL(this.account_id), {
                    intent,
                    client_name: this.getClientName(),
                    client_vendor: this.getClientVendor()
                })
                if (res.data.is_ok) return this.setToken(res.data.token)
                return this.getToken()
            }
        } catch (error) {
            console.error(error.response)
        }
    }

    private apiURL(component: string): string {
        if (typeof this.account_id === 'undefined') {
            return `${this.getURL()}/api/v1/${component}`
        }
        return `${this.getURL()}/${this.account_id}/api/v1/${component}/`
    }

    public async _get(component: string): Promise<any> {
        try {
            const res = await axios.get(this.apiURL(component), {
                headers: {
                    'X-Angie-AuthApiToken': this.getToken()
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }

    public async _post(component: string, data: any): Promise<any> {
        try {
            const res = await axios.post(this.apiURL(component), data, {
                headers: {
                    'X-Angie-AuthApiToken': this.getToken()
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }

    public async _put(component: string, data: any): Promise<any> {
        try {
            const res = await axios.put(this.apiURL(component), data, {
                headers: {
                    'X-Angie-AuthApiToken': this.getToken()
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }

    public async _delete(component: string): Promise<any> {
        try {
            const res = await axios.delete(this.apiURL(component), {
                headers: {
                    'X-Angie-AuthApiToken': this.token
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }
}

