## Node/TypeScript SDK for ActiveCollab 5 and 6 API
Official API documentation: https://developers.activecollab.com/api-documentation/  
Get help: https://stackoverflow.com/questions/tagged/activecollab

### How it works?
Code is written in asynchronous manner. Which means it has to be called inside of a async function.<br/>
**issueToken method has to be called on initialization of the client, so you can make requests**<br/>
**Before every request (_get, _post, _put, _delete) await has to be called.**

### Quick Links
1. [Use it with Node](#Use-it-with-Node)<br/>
2. [Use it with TypeScript](#Use-it-with-TypeScript)<br/>
3. [NPM Commands](#NPM-Commands)<br/>
4. [Connect Cloud Account](#Connect-Active-Collab-Cloud-Accounts)<br/>
5. [Connect Self-Hosted Account](#Connecting-to-Self-Hosted-Active-Collab-Accounts)<br/>

## Use it with Node
1. Install module: ```npm i activecollab_node_sdk```
2. Import Client from ```activecollab_node_sdk```

```
const { Client } = require('activecollab_node_sdk')

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
        const data = await client._get('projects/ID-OF-PROJECT')
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
middleware();
```

## Use it with TypeScript
To use it with TypeScript, dont use npm to install it.  
It's better to use it as a service.  
1. Clone this repository to your project  

```
import { Client } from 'your-place/Client';

/**
 * Example
 * Using it for TS project -> Middleware or Services
 */
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
        const data = await client._get('projects/ID-OF-PROJECT')
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
middleware();
```

### NPM Commands

| Command      | Description |
| ----------- | ----------- |
| npm install     | Installs dependencies       |
| npm run build   | Compiles TS to JS        |
| npm run tsc:w   | Run TS watch
| npm run dev   | Run compiled app


### Connect Active Collab Cloud Accounts
```
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
        const data = await client._get('projects/ID-OF-PROJECT')
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
```

### Connecting to Self-Hosted Active Collab Accounts
```
const middleware = async () => {
    try {
        /**
         * @param Email @type String
         * @param Password @type String
         * @param Client_Name @type String
         * @param Client_Vendotr @type String
         * @param URL @type String
         */
        const client = new Client('your@email.com', 'password', 'appName', 'organization-name', 'http://localhost:8080')
        await client.issueToken()
        const data = await client._get('projects/ID-OF-PROJECT')
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
```

#### To create a task, simply send a POST request:
```
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
        const data = await client._post('projects/65/tasks', {
            "name": "This is a task name",
            "assignee_id": 48
        })
        console.log(data)
    } catch (error) {
        console.error(error)
    }
```
#### IF YOU HAVE ANY QUESTION OR IMPORVEMENT, PLEASE SUBMIT PULL REQUEST