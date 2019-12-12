import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

export default compose(
  withStyles({
    wrapper: {
      position: 'relative',
      minHeight: 'calc(100vh - 24px * 2 - 72px)',
    },
    fab: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  })
);
