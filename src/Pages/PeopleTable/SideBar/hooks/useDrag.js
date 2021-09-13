import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  insertBeforeCurrentFavorite,
  swap,
} from '../../../../redux/PeopleSlice';

export const useDrag = ({ setOpen = () => {} }) => {
  const { people, favoritePeople } = useSelector(({ people }) => people);

  const dispatch = useDispatch();

  const [dragSideBarActive, setDragSideBarActive] = useState(false);
  const [dragSideBarItemData, setDragSideBarItemData] = useState({
    draggedItem: null,
    dragOverIem: null,
  });

  const preventingFunc = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const getCurrentPerson = useCallback(
    e => {
      const draggedName = e.dataTransfer.getData('name');

      return people.find(({ name }) => name === draggedName);
    },
    [people]
  );

  const onDragOver = useCallback(
    e => {
      preventingFunc(e);
      setOpen(true);

      if (dragSideBarItemData.draggedItem) return;
      setDragSideBarActive(true);
    },
    [dragSideBarItemData.draggedItem, preventingFunc, setOpen]
  );

  const onDragLeave = useCallback(
    e => {
      preventingFunc(e);

      if (dragSideBarItemData.draggedItem) return;
      setDragSideBarActive(false);
      setOpen(false);
    },
    [dragSideBarItemData.draggedItem, preventingFunc, setOpen]
  );

  const onDrop = useCallback(
    e => {
      preventingFunc(e);

      const draggedPerson = getCurrentPerson(e);

      setDragSideBarActive(false);

      if (!draggedPerson) return;

      if (
        !favoritePeople.map(({ name }) => name).includes(draggedPerson.name)
      ) {
        dispatch(addFavorite(draggedPerson));
      }
    },
    [dispatch, favoritePeople, getCurrentPerson, preventingFunc]
  );

  const onDragStart = useCallback((e, draggedItem) => {
    e.stopPropagation();

    setDragSideBarItemData(state => ({ ...state, draggedItem }));
  }, []);

  const onDropItem = useCallback(
    (e, dropItem) => {
      preventingFunc(e);

      const { draggedItem } = dragSideBarItemData;

      const draggedPerson = getCurrentPerson(e);

      setDragSideBarItemData(state => ({
        draggedItem: null,
        dragOverIem: null,
      }));

      if (draggedItem) {
        dispatch(
          swap({
            draggedItem: { ...draggedItem },
            dropItem: { ...dropItem },
          })
        );
      }

      if (
        draggedPerson &&
        !favoritePeople.map(({ name }) => name).includes(draggedPerson?.name)
      ) {
        const indexOfDropItem = favoritePeople.findIndex(
          ({ name }) => name === dropItem.name
        );
        dispatch(
          insertBeforeCurrentFavorite({ draggedPerson, indexOfDropItem })
        );
        console.log(draggedPerson);
      }
    },
    [
      dispatch,
      dragSideBarItemData,
      favoritePeople,
      getCurrentPerson,
      preventingFunc,
    ]
  );

  const onDragOverItem = useCallback(
    (e, dragOverIem) => {
      preventingFunc(e);

      setOpen(true);
      setDragSideBarItemData(state => ({ ...state, dragOverIem }));
    },
    [preventingFunc, setOpen]
  );

  const onDragLeaveItem = useCallback(
    e => {
      preventingFunc(e);

      setDragSideBarItemData(state => ({ ...state, dragOverIem: null }));
    },
    [preventingFunc]
  );

  return {
    preventingFunc,
    onDragOver,
    onDragLeave,
    onDrop,
    onDragStart,
    onDropItem,
    dragSideBarActive,
    dragSideBarItemData,
    onDragOverItem,
    onDragLeaveItem,
  };
};
