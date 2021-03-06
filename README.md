## Node/TypeScript SDK for ActiveCollab 5 and 6 API

Official API documentation: https://developers.activecollab.com/api-documentation/  
Get help: https://stackoverflow.com/questions/tagged/activecollab

### How it works?

Code is written in asynchronous manner.  
Which means it has to be called inside of a async function.<br/>
**issueToken method has to be called on initialization of the client, so you can make requests**<br/>
**Before every request (get, post, put, delete) await has to be called.**

### Quick Links

1. [Use it with Node](#Use-it-with-Node)<br/>
2. [Use it with TypeScript](#Use-it-with-TypeScript)<br/>
3. [NPM Commands](#NPM-Commands)<br/>

## Use it with Node

To use it with Node, dont use `npm` to install it.  
It's better to use it as a **service**.

1. Clone this repository to your project
2. Run `npm run build` and place the build directory in your project.

```javascript
const { Client } = require("../path-to-build/Client/Client.js");

const middleware = async () => {
  try {
    // Cloud connection
    const client = new Client(
      "your@email.com",
      "password",
      "appName",
      "organization-name",
      ACCOUNT_ID
    );
    await client.issueToken();

    // Self-Hosted connection
    const client = new Client(
      "your@email.com",
      "password",
      "appName",
      "organization-name",
      undefined,
      "YOUR-URL"
    );
    // For the accout number use undefined as the value
    await client.issueToken();

    // SAME FOR BOTH
    const data = await client.get("projects/ID-OF-PROJECT");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
middleware();
```

## Use it with TypeScript

1. Install module: `npm i activecollab_node_sdk`
2. Import Client from `activecollab_node_sdk`

```javascript
import { Client } from "activecollab_node_sdk";
```

The rest is same as the above, only the import changes if you use TS.

### NPM Commands

| Command       | Description           |
| ------------- | --------------------- |
| npm install   | Installs dependencies |
| npm run build | Compiles TS to JS     |
| npm run tsc:w | Run TS watch          |
| npm run dev   | Run compiled app      |

#### To create a task, simply send a POST request:

```javascript
try {
  // Cloud
  const client = new Client(
    "your@email.com",
    "password",
    "appName",
    "organization-name",
    123456
  );
  await client.issueToken();
  const data = await client.post("projects/65/tasks", {
    name: "This is a task name",
    assignee_id: 48,
  });

  // Self-Hosted
  const client = new Client(
    "your@email.com",
    "password",
    "appName",
    "organization-name",
    undefined,
    "YOUR-URL"
  );
  await client.issueToken();
  const data = await client.post("projects/65/tasks", {
    name: "This is a task name",
    assignee_id: 48,
  });
} catch (error) {
  console.error(error);
}
```

#### IF YOU HAVE ANY QUESTION OR IMPORVEMENT, PLEASE SUBMIT PULL REQUEST
