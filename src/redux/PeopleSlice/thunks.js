import { currentApi } from '../../api';
import { setData, setLoading, setPage, setCurrentPersonData } from './index';

export const getData =
  (page = 0) =>
  async dispatch => {
    dispatch(setPage(page));
    dispatch(setLoading(true));
    try {
      const { data } = await currentApi.getAll(page + 1);

      dispatch(setData(data));
    } catch (e) {
      console.log(e);
      dispatch(setData({ error: 'something went wrong' }));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const getPerson = id => async dispatch => {
  dispatch(setLoading(true));

  const { data } = await currentApi.getSingle(id);

  dispatch(setCurrentPersonData(data));
  dispatch(setLoading(false));
};
