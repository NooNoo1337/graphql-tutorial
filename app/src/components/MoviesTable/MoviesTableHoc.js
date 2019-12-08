import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { moviesQuery } from './queries';

import { styles } from './styles';

const withGraphQL = graphql(moviesQuery, {
  options: ({ name = '' }) => ({
    variables: { name },
  })
});

export default compose(withStyles(styles), withGraphQL);
