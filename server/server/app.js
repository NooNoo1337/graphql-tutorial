const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

// Connect to database
mongoose.connect(
  'mongodb+srv://Mikhail:123321@graphql-tutorial-sl5p9.mongodb.net/',
  { dbName: 'graphql-tutorial', useUnifiedTopology: true, useNewUrlParser: true }
);

// for Cross-Origin Resource Sharing
app.use(cors());

// GraphiQl - an in-browser IDE for exploring GraphQL.
app.use('/graphql', graphqlHTTP({ schema, graphiql: true, pretty: true }));

const dbConnection = mongoose.connection;
dbConnection.on('error', error => console.log(`Connection to DB is failed: ${error}`));
dbConnection.once('open', () => console.log(`Connected to DB!`));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running http://localhost:${PORT}/`);
});
