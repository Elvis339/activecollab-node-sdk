## Node/TypeScript SDK for ActiveCollab

Official API documentation: https://developers.activecollab.com/api-documentation/  
Get help: https://stackoverflow.com/questions/tagged/activecollab

### NPM Commands

| Command       | Description           |
| ------------- | --------------------- |
| npm install   | Installs dependencies |
| npm run build | Compiles TS to JS     |
| npm run tsc:w | Run TS watch          |

## Examples

#### Cloud

```typescript
const c = new Cloud('AcmeINC', 'AcmeINC', '123', 'email@email.com', 'password');
await c.issueTokenIntent();

// Attach interceptors
c.client.interceptors.request.use(onSuccess, onError);

// task lists
const taskLists = await cloud.get('/projects/1/task-lists');
console.log(taskLists.data);
```

#### Self-hosted

```typescript
const sh = new SelfHosted('https://your-url-here.com', 'AcmeINC', 'AcmeINC', '123', 'email@email.com', 'password');
await sh.issueTokenIntent();

// Attach interceptors
sh.client.interceptors.request.use(onSuccess, onError);

// task lists
const taskLists = await cloud.get('/projects/1/task-lists');
console.log(taskLists.data);
```

#### IF YOU HAVE ANY QUESTION OR IMPROVEMENT, PLEASE SUBMIT PULL REQUEST
