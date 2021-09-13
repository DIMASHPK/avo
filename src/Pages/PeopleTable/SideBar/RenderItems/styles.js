import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  hiddenContainer: {
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    opacity: 0,
  },
  hiddenContainerVisible: {
    opacity: 1,
  },
  list: {
    padding: 0,
  },
  listItem: {
    padding: 8,
  },
  removeButton: {
    padding: 5,
  },
  emptyHint: {
    padding: 8,
    height: 50,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
  dragOverItem: {
    background: theme.palette.grey[400],
  },
}));
