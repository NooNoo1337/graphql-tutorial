import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { addDMovieMutation } from './mutation';
import { directorsQuery } from './queries';
import { moviesQuery } from '../MoviesTable/queries';

import { styles } from './styles';

const withGraphQLAdd = graphql(addDMovieMutation, {
  props: ({ mutate }) => ({
    addMovie: movie => mutate({
      variables: movie,
      refetchQueries: [{ query: moviesQuery }],
    }),
  })
});

export default compose(withStyles(styles), graphql(directorsQuery), withGraphQLAdd);
