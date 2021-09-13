import React, { memo, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from './styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';
import { useDrag } from './hooks/useDrag';
import RenderItems from './RenderItems';

const SideBar = memo(() => {
  const [open, setOpen] = useState(false);

  const {
    preventingFunc,
    onDragOver,
    onDragLeave,
    onDrop,
    dragSideBarActive,
    onDragStart,
    onDropItem,
    dragSideBarItemData,
    onDragOverItem,
    onDragLeaveItem,
  } = useDrag({
    setOpen,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(styles.drawer, styles.overFlowHidden, {
        [styles.drawerOpen]: open,
        [styles.drawerClose]: !open,
      })}
      onDragOver={onDragOver}
      onDragEnter={preventingFunc}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      classes={{
        paper: clsx(
          styles.overFlowHidden,
          dragSideBarActive && styles.dragActive,
          {
            [styles.drawerOpen]: open,
            [styles.drawerClose]: !open,
          }
        ),
      }}
    >
      <div className={styles.toolbar}>
        <Typography
          variant="h5"
          component="h2"
          className={clsx(styles.title, open && styles.showedTitle)}
        >
          Favorite Persons List
        </Typography>
        <IconButton
          className={styles.toggleButton}
          onClick={open ? handleClose : handleOpen}
        >
          <ChevronRightIcon
            className={clsx(styles.chevronIcon, open && styles.rotatedIcon)}
          />
        </IconButton>
      </div>
      <RenderItems
        open={open}
        onDragStart={onDragStart}
        onDropItem={onDropItem}
        dragSideBarItemData={dragSideBarItemData}
        onDragOverItem={onDragOverItem}
        onDragLeaveItem={onDragLeaveItem}
      />
    </Drawer>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
