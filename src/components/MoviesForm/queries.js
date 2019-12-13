import { gql } from 'apollo-boost';

export const DIRECTORS_QUERY = gql`
  query DirectorsQuery($name: String) {
    directors(name: $name) {
      id
      name
    }
  }
`;
