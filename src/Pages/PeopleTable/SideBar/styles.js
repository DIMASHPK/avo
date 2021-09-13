import { makeStyles } from '@material-ui/core';

const drawerWidth = 300;

export const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
    minHeight: 'auto',
    marginTop: 8
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  overFlowHidden: { overflow: 'hidden' },
  dragActive: {
    background: theme.palette.grey[400],
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    width: 50,
  },
  chevronIcon: {
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  rotatedIcon: {
    transform: 'rotateZ(180deg)',
  },
  toggleButton: {
    padding: 5,
  },
  title: {
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    opacity: 0,
    width: '100%',
    textAlign: 'left',
  },
  showedTitle: {
    opacity: 1,
  },
}));
