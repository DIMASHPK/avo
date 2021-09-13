import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../../../redux/PeopleSlice';
import { PersonProp } from '../../../../constants/propTypes';

const RenderItems = memo(props => {
  const {
    open = false,
    onDragStart,
    onDropItem,
    dragSideBarItemData,
    onDragOverItem,
    onDragLeaveItem,
  } = props;

  const dispatch = useDispatch();

  const { favoritePeople } = useSelector(({ people }) => people);

  const { push } = useHistory();

  const styles = useStyles();

  const handleRoute = url => {
    const splintedUrl = url.split('/');

    push(`/${splintedUrl[splintedUrl.length - 2]}`);
  };

  const handleRemove = (e, id) => {
    e.stopPropagation();

    dispatch(removeFavorite(id));
  };

  const getIsDragOverMe = useCallback(
    name => {
      return dragSideBarItemData?.dragOverIem?.name === name;
    },
    [dragSideBarItemData?.dragOverIem?.name]
  );

  return (
    <div
      className={clsx(
        styles.hiddenContainer,
        open && styles.hiddenContainerVisible
      )}
    >
      {favoritePeople.length ? (
        <List className={styles.list}>
          {favoritePeople.map(({ name, url, ...rest }, i) => (
            <ListItem
              draggable
              button
              onDragStart={e => onDragStart(e, { name, url, ...rest })}
              onDrop={e => onDropItem(e, { name, url, ...rest })}
              onDragOver={e => onDragOverItem(e, { name, url, ...rest })}
              onDragLeave={onDragLeaveItem}
              key={name}
              onClick={() => handleRoute(url)}
              className={clsx(
                styles.listItem,
                getIsDragOverMe(name) && styles.dragOverItem
              )}
            >
              <ListItemText primary={name} />
              <IconButton
                className={styles.removeButton}
                onClick={e => handleRemove(e, i)}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography className={styles.emptyHint}>No Favorite</Typography>
      )}
    </div>
  );
});

RenderItems.displayName = 'RenderItems';

RenderItems.propTypes = {
  open: PropTypes.bool,
  onDragStart: PropTypes.func.isRequired,
  onDropItem: PropTypes.func.isRequired,
  dragSideBarItemData: PropTypes.shape({
    draggedItem: PersonProp,
    dragOverIem: PersonProp,
  }),
  onDragOverItem: PropTypes.func.isRequired,
  onDragLeaveItem: PropTypes.func.isRequired,
};

export default RenderItems;
