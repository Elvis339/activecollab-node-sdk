import axios from 'axios';
import { Authentication } from './Authentication';

export class Self_Hosted extends Authentication {
    constructor(Email: string, Password: string, Client_Name: string, Client_Vendor: string, URL: string) {
        super(Email, Password, Client_Name, Client_Vendor)
        super.setURL(URL)
    }

    async issueToken(): Promise<any> {
        try {
            const res = await axios.post(`${this.getURL()}/api/v1/issue-token`, {
                username: this.getEmail(),
                password: this.getPassword(),
                client_name: this.getClientName(),
                client_vendor: this.getClientVendor()
            })
            if (res.data.is_ok) return this.setToken(res.data.token) 
            return this.getToken()
        } catch (error) {
            console.error(error.response)
        }
    }
}