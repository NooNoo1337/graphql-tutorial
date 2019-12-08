import { gql } from 'apollo-boost';

export const addDMovieMutation = gql`
  mutation addMovie($name: String!, $genre: String!, $rate: Int!, $watched: Boolean, $directorId: ID) {
    addMovie(name: $name, genre: $genre, rate: $rate, watched: $watched, directorId: $directorId) {
      name
      genre
      watched
      rate
      director {
        name
      }
    }
  }
`;
