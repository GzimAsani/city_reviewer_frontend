import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import cityReducer from './cityReducer';
import reviewsReducer from './reviewsReducer';
import reviewReducer from './reviewReducer';
import authReducer from './authReducer';

export default combineReducers({
  cities: citiesReducer,
  city: cityReducer,
  reviews: reviewsReducer,
  review: reviewReducer,
  auth: authReducer,
});
