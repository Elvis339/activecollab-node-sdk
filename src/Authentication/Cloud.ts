import axios from 'axios';
import { Authentication } from './Authentication';

export class Cloud extends Authentication{
    constructor(Email: string, Password: string, Client_Name: string, Client_Vendor: string, Url = 'https://app.activecollab.com') {
        super(Email, Password, Client_Name, Client_Vendor, Url = 'https://app.activecollab.com')
        this.URL = Url
    }

    async issueToken(account_id: number): Promise<any>{
        try {
            let intent = await this.fetchIntent()
            const res = await axios.post(`${this.getURL()}/${account_id}/api/v1/issue-token-intent`, {
                intent,
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

