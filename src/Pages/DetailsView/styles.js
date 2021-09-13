import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  cartContainer: {
    maxWidth: 500,
    margin: 'auto',
  },
  contentContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    flexDirection: 'column',
  },
  contentWrapper: {
    flexGrow: 1,
    width: '100%',
  },
}));
