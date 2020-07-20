import pkg from "../package.json";
import schemas from "./schemas/index.js";
import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import preStartup from "./preStartup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Custom plugin event",
    name: "custom-plugin-event",
    version: pkg.version,
    functionsByType: {
      preStartup: [preStartup],
    },
    graphQL: {
      schemas,
      resolvers
    },
    queries,
  });
}
