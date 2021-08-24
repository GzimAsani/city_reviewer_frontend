import jsonplaceholder from '../api/jsonPlaceholder';

export const fetchCities = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/cities');

  dispatch({ type: 'FETCH_REDUCERS', payload: response.data });
};

export const fetchCity = (slug) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/cities/${slug}`);

  dispatch({ type: 'FETCH_CITY', payload: response.data });
};