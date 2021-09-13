import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  tableRow: {
    cursor: 'pointer',
    '&:hover td': {
      background: theme.palette.grey[400],
      color: theme.palette.common.white,
    },
  },
}));
