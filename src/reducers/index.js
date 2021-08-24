import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import cityReducer from './cityReducer';
export default combineReducers({
  cities: citiesReducer,
  city: cityReducer
})