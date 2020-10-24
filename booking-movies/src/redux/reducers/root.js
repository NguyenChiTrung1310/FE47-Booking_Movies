import { combineReducers } from 'redux';
import UserReducer from './user'
const RootReducer = combineReducers({
  user:UserReducer,
});
export default RootReducer;