import jsonplaceholder from '../api/jsonPlaceholder';

export const fetchAirlines = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/airlines');

  dispatch({ type: 'FETCH_REDUCERS', payload: response.data });
};