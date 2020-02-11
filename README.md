## Node/TypeScript SDK for ActiveCollab 5 and 6 API
Official API documentation: https://developers.activecollab.com/api-documentation/  
Get help: https://stackoverflow.com/questions/tagged/activecollab

### Installation

| Command      | Description |
| ----------- | ----------- |
| npm install     | Installs dependencies       |
| npm run build   | Compiles TS to JS        |
| npm run tsc:w   | Run TS watch
| npm run dev   | Run compiled app

### How it works?
Code is written in asynchronous manner. Which means it has to be called inside of a async function.  
**Before every request (_get, _post, _put, _delete) await has to be called.**

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
        await client.issueToken() <-- **ISSUE TOKEN SO YOU CAN MAKE REQUESTS**
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
        await client.issueToken() <-- **ISSUE TOKEN SO YOU CAN MAKE REQUESTS**
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
        await client.issueToken() <-- **ISSUE TOKEN SO YOU CAN MAKE REQUESTS**
        const data = await client._post('projects/65/tasks', {
            "name": "This is a task name",
            "assignee_id": 48
        })
        console.log(data)
    } catch (error) {
        console.error(error)
    }
```
