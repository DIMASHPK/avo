import { createSlice } from '@reduxjs/toolkit';

const favoritePeople = JSON.parse(localStorage.getItem('favoritePeople')) || [];

const initialState = {
  people: [],
  currentPerson: null,
  isLoading: false,
  page: 0,
  next: null,
  previous: null,
  error: null,
  favoritePeople,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setData: (state, { payload }) => {
      const { results, count, next, previous, error } = payload;

      if (error) {
        state.error = error;
        state.people = [];
        return;
      }

      state.people = results;
      state.count = count;
      state.next = next;
      state.previous = previous;
    },
    setCurrentPersonData: (state, { payload }) => {
      const { error, ...restData } = payload;

      if (error) {
        state.error = error;
        state.currentPerson = null;
        return;
      }

      state.currentPerson = restData;
    },
    addFavorite: (state, { payload }) => {
      const { favoritePeople } = state;

      if (favoritePeople.length === 8) {
        favoritePeople.pop();
      }

      state.favoritePeople.push(payload);

      localStorage.setItem(
        'favoritePeople',
        JSON.stringify(state.favoritePeople)
      );
    },
    removeFavorite: (state, { payload }) => {
      state.favoritePeople = state.favoritePeople.filter(
        (_, i) => payload !== i
      );

      localStorage.setItem(
        'favoritePeople',
        JSON.stringify(state.favoritePeople)
      );
    },
    insertBeforeCurrentFavorite: (state, { payload }) => {
      const { draggedPerson, indexOfDropItem } = payload;

      if (state.favoritePeople.length === 8) {
        state.favoritePeople.pop();
      }

      state.favoritePeople.splice(indexOfDropItem, 0, draggedPerson);

      localStorage.setItem(
        'favoritePeople',
        JSON.stringify(state.favoritePeople)
      );
    },
    swap: (state, { payload }) => {
      const { draggedItem, dropItem } = payload;

      state.favoritePeople = state.favoritePeople.map(({ name, ...item }) => {
        if (name === draggedItem.name) {
          return { ...dropItem };
        }
        if (name === dropItem.name) {
          return { ...draggedItem };
        }

        return { name, ...item };
      });

      localStorage.setItem(
        'favoritePeople',
        JSON.stringify(state.favoritePeople)
      );
    },
  },
});

export const {
  setLoading,
  setPage,
  setData,
  setCurrentPersonData,
  removeFavorite,
  addFavorite,
  swap,
  insertBeforeCurrentFavorite,
} = peopleSlice.actions;

export default peopleSlice.reducer;
