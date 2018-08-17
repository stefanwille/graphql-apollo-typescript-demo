import { ApolloServer, gql } from "apollo-server";

import { readFileSync } from "fs";
import resolvers from "./resolvers";

const typeDefsString = readFileSync("./src/schema.graphql", {
  encoding: "utf8",
});

const typeDefs = gql(typeDefsString);

const apolloServer: ApolloServer = new ApolloServer({ typeDefs, resolvers: resolvers as any });

export default apolloServer;
