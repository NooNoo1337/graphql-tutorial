import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { directorsQuery } from './queries';

import { styles } from './styles';

export default compose(withStyles(styles), graphql(directorsQuery));
