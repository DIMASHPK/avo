import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  preloader: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 50,
    height: 50,
    '& > div': {
      width: '100%',
      height: '100%',
    },
  },
}));