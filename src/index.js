const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const myGraphQLSchema = require('./schema');

const PORT = 4000;
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.listen(PORT);
