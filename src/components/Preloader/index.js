import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import clsx from 'clsx';

const Preloader = memo(props => {
  const { isLoading = false, className = null } = props;

  const styles = useStyles();

  if (!isLoading) return null;

  return (
    <div className={clsx(styles.preloader, className)}>
      <CircularProgress size="small" />
    </div>
  );
});

Preloader.displayName = 'Preloader';

Preloader.propTypes = {
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default Preloader;
