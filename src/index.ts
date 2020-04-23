import { Client } from './Client/Client';

/**
 * Example
 * Using it for TS project -> Middleware or Services
 */
const middleware = async () => {
    try {
        // Init Cloud
        let client = new Client("your.email@email.com", "password", "client_name", "client_vendor", 123456);
        await client.issueToken();
        const projects = await client.get('projects');
        console.log(projects);
    } catch (error) {
        console.log(error)
    }
}
middleware()