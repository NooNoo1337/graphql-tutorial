import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
  mutation addMovie(
    $name: String!
    $genre: String!
    $rate: Int!
    $watched: Boolean
    $directorId: ID
  ) {
    addMovie(
      name: $name
      genre: $genre
      rate: $rate
      watched: $watched
      directorId: $directorId
    ) {
      name
      genre
      watched
      rate
      director {
        id
        name
      }
    }
  }
`;

export const updateMovieMutation = gql`
  mutation updateMovie(
    $id: ID
    $name: String!
    $genre: String!
    $rate: Int!
    $watched: Boolean
    $directorId: ID
  ) {
    updateMovie(
      id: $id
      name: $name
      genre: $genre
      rate: $rate
      watched: $watched
      directorId: $directorId
    ) {
      id
      name
      genre
      watched
      rate
      director {
        id
        name
      }
    }
  }
`;
