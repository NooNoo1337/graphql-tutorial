import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { directorsQuery } from './queries';

import { styles } from './styles';

const withGraphQL = graphql(directorsQuery, {
  options: ({ name = '' }) => ({
    variables: { name },
  })
});

export default compose(withStyles(styles), withGraphQL);
