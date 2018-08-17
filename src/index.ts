import { ApolloServer, gql, ServerInfo } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const apolloServer: ApolloServer = new ApolloServer({ typeDefs, resolvers: resolvers as any });
const PORT = 4000;
apolloServer.listen(PORT).then(({ url }: ServerInfo) => {
  console.log(`Server listening at ${url}`);
});
