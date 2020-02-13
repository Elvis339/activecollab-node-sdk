import { Client } from './Client/Client';

/**
 * Example
 * Using it for TS project -> Middleware or Services
 */
const middleware = () => {
    try {
        // Init Cloud
        let client = new Client('email', 'password', 'client-name', 'client-vendor', 'https://app.activecollab.com', 123456)
        let token = await client.issueToken()
        let data = await client._get('projects')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
middleware()