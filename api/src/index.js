import startServer from "./startServer.js";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

startServer({ typeDefs, resolvers });
