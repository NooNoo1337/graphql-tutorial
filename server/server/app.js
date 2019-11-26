const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');

const app = express();
const PORT = 3005;

/**
 * GraphiQl - an in-browser IDE for exploring GraphQL.
 */
app.use('/graphql', graphqlHTTP({ schema, graphiql: true, pretty: true }));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running http://localhost:${PORT}/`);
});
