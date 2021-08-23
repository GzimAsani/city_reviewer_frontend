import { combineReducers } from 'redux';
import airlinesReducer from './airlinesReducer';

export default combineReducers({
  airlines: airlinesReducer,
})