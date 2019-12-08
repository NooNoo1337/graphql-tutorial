import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { deleteMovieMutation } from './mutation';
import { moviesQuery } from '../MoviesTable/queries';


const withGraphQLDelete = graphql(deleteMovieMutation, {
  props: ({ mutate }) => ({
    deleteMovie: id => mutate({
      variables: id,
      refetchQueries: [{ query: moviesQuery }],
    }),
  })
});

export default compose(withGraphQLDelete);
