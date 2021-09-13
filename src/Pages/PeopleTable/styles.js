import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  paper: { margin: '0 50px', minHeight: 'auto' },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '97vh',
  },
  tableContainer: {
    position: 'relative',
    maxHeight: "min(80vh, 640px)",
  },
  tableWrapper: {
  },
  errorHint: {
    textAlign: 'center',
    borderBottom: 'none',
  },
}));
