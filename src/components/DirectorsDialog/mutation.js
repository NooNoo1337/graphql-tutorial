import { gql } from 'apollo-boost';

export const DELETE_DIRECTOR_MUTATION = gql`
  mutation DeleteDirector($id: ID) {
    deleteDirector(id: $id) {
      id
    }
  }
`;
