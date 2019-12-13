import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { addMovieMutation, updateMovieMutation } from './mutation';
import { DIRECTORS_QUERY } from './queries';
import { moviesQuery } from '../MoviesTable/queries';

import { styles } from './styles';

const withGraphQL = compose(
  graphql(addMovieMutation, {
    props: ({ mutate }) => ({
      addMovie: (movie) =>
        mutate({
          variables: movie,
          refetchQueries: [
            {
              query: moviesQuery,
              variables: { name: '' },
            },
          ],
        }),
    }),
  }),

  graphql(updateMovieMutation, {
    props: ({ mutate }) => ({
      updateMovie: (movie) =>
        mutate({
          variables: movie,
          refetchQueries: [
            {
              query: moviesQuery,
              variables: { name: '' },
            },
          ],
        }),
    }),
  }),

  graphql(DIRECTORS_QUERY, {
    options: ({ name = '' }) => ({
      variables: { name },
    }),
  })
);

export default compose(withStyles(styles), withGraphQL);
