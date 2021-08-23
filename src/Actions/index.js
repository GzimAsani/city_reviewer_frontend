import jsonplaceholder from '../api/jsonPlaceholder';

export const fetchTodos = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/todos');

  dispatch({ type: 'FETCH_REDUCERS', payload: response.data });
};