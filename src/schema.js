const { makeExecutableSchema } = require('graphql-tools');
const { readFileSync } = require('fs');
const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf8' });

const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
