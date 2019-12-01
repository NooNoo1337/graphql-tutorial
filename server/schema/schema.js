const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

// const movies = [
//   { "name": "Pulp Fiction", "genre": "Crime", "directorId": "5de0389e1c9d440000c28547" },
//   { "name": "1984", "genre": "Sci-Fi", "directorId": "5de038be1c9d440000c28549" },
//   { "name": "V for vendetta", "genre": "Sci-Fi-Triller", "directorId": "5de038d81c9d440000c2854c" },
//   { "name": "Snatch", "genre": "Crime-Comedy", "directorId": "5de038eb1c9d440000c2854f" },
//   { "name": "Reservoir Dogs", "genre": "Crime", "directorId": "5de0389e1c9d440000c28547" },
//   { "name": "The Hateful Eight", "genre": "Crime", "directorId": "5de0389e1c9d440000c28547" },
//   { "name": "Inglourious Basterds", "genre": "Crime", "directorId": "5de0389e1c9d440000c28547" },
//   { "name": "Lock, Stock and Two Smoking Barrels", "genre": "Crime-Comedy", "directorId": "5de038eb1c9d440000c2854f" },
// ];

const movies = [
  { id: '1', name: "Pulp Fiction", genre: "Crime", directorId: "1" },
  { id: '2', name: "1984", genre: "Sci-Fi", directorId: "2" },
  { id: '3', name: "V for vendetta", genre: "Sci-Fi-Triller", directorId: "3" },
  { id: '4', name: "Snatch", genre: "Crime-Comedy", directorId: "4" },
  { id: '5', name: "Reservoir Dogs", genre: "Crime", directorId: "1" },
  { id: '6', name: "The Hateful Eight", genre: "Crime", directorId: "1" },
  { id: '7', name: "Inglourious Basterds", genre: "Crime", directorId: "1" },
  { id: '8', name: "Lock, Stock and Two Smoking Barrels", genre: "Crime-Comedy", directorId: "4" },
];

const directors = [
  { id: '1', name: 'Quentin Tarantino', age: 55 },
  { id: '2', name: 'Michael Radford', age: 72 },
  { id: '3', name: 'James McTeigue', age: 51 },
  { id: '4', name: 'Guy Ritchie', age: 50 },
];

// described GraphQl type
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent) {
        return directors.find(({ id }) => id === parent.id)
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent) {
        return movies.filter(({ directorId }) => directorId === parent.id)
      }
    }
  })
});

// root query
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find(({ id }) => id === args.id)
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return movies;
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve() {
        return directors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
});
