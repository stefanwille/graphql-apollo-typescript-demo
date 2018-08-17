import { ApolloServer, gql } from "apollo-server-express";

import { readFileSync } from "fs";
import resolvers from "./resolvers";

const r: any = resolvers;

const typeDefsString = readFileSync("./src/schema.graphql", {
  encoding: "utf8",
});

const typeDefs = gql(typeDefsString);

const apolloServer = new ApolloServer({ typeDefs, resolvers: r });

export default apolloServer;
