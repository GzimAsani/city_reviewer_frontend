import jsonplaceholder from '../api/jsonPlaceholder';

export const fetchCities = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/cities');

  dispatch({ type: 'FETCH_REDUCERS', payload: response.data.data });
  console.log(response.data.data);
};

export const fetchReviews = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/cities');

  dispatch({ type: 'FETCH_REVIEWS', payload: response.data.includes });
};

export const fetchCity = (slug) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/cities/${slug}`);

  dispatch({ type: 'FETCH_CITY', payload: response.data.data.attributes });
};

export const fetchReview = (slug) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/cities/${slug}`);

  dispatch({ type: 'FETCH_REVIEW', payload: response.data.data });
};

export const signIn = (username) => ({
  type: 'SIGN_IN',
  payload: username,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

// gapi.auth2.getAuthInstance().currentUser.get().Rs.Qe
