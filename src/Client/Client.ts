import axios from 'axios'

export class Client {
    private account_id ?:number;
    private token :string = ''

    constructor(Token :string, Account_ID ?:number) {
        this.account_id = Account_ID
        this.token = Token
    }

    protected getURL(URI :string) :string { 
        return `https://app.activecollab.com/${this.account_id}/api/v1/${URI}` 
    }

    public async _get(component: string): Promise<any> {
        try {
            const res = await axios.get(this.getURL(component), {
                headers: {
                    'X-Angie-AuthApiToken': this.token
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }

    public async _post(component: string, data: any): Promise<any> {
        try {
            const res = await axios.post(this.getURL(component), data, {
                headers: {
                    'X-Angie-AuthApiToken': this.token
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }

    public async _put(component: string, data: any): Promise<any> {
        try {
            const res = await axios.put(this.getURL(component), data, {
                headers: {
                    'X-Angie-AuthApiToken': this.token
                }
            })
            return res.data
        } catch (error) {
            console.error(error.response)
        }
    }

    public async _delete(component: string): Promise<any> {
        try {
            const res = await axios.delete(this.getURL(component), {
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

