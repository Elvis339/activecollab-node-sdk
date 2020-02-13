import { Client } from '../src/Client/Client'

const middleware = async () => {
    try {
        /**
         * @param Email @type String
         * @param Password @type String
         * @param Client_Name @type String
         * @param Client_Vendotr @type String
         * @param URL @type String
         * @param Account_ID @type number
         */
        const client = new Client('your@email.com', 'password', 'appName', 'organization-name', 'https://app.activecollab.com', 123456)
        await client.issueToken()
        const data = await client._get('projects')
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}