import React, { memo } from 'react';
import { ChildrenProp } from '../../constants/propTypes';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Layout = memo(props => {
  const { children, elevation = 1, classes = {} } = props;

  const styles = useStyles();

  return (
    <Container className={clsx(styles.container, classes.container)}>
      <Paper
        className={clsx(styles.paper, classes.paper)}
        elevation={elevation}
      >
        <div
          className={clsx(styles.contentContainer, classes.contentContainer)}
        >
          {children}
        </div>
      </Paper>
    </Container>
  );
});

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: ChildrenProp.isRequired,
  elevation: PropTypes.number,
  classes: PropTypes.shape({}),
};

export default Layout;
