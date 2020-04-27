import { Client } from "./Client/Client";

/**
 * Example
 * Using it for TS project -> Middleware or Services
 */
const middleware = async () => {
  try {
    // Init Self-Hosted
    let client = new Client(
      "xxx@xxx.com",
      "xxxx",
      "xxx",
      "xxx",
      undefined,
      "http://localhost:8080"
    );
    await client.issueToken();
    const projects = await client.get("projects");
    console.log(projects);
  } catch (error) {
    console.log(error);
  }
};
middleware();
