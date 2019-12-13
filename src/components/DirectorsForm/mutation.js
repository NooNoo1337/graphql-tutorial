import { gql } from 'apollo-boost';

export const ADD_DIRECTOR_MUTATION = gql`
  mutation AddDirector($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
      name
      age
    }
  }
`;

export const UPDATE_DIRECTOR_MUTATION = gql`
  mutation UpdateDirector($id: ID, $name: String!, $age: Int!) {
    updateDirector(id: $id, name: $name, age: $age) {
      id
      name
      age
    }
  }
`;
