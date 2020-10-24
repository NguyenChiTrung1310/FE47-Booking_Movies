import { combineReducers } from 'redux';
import ProfileReducer from './profileReducer';
import UserReducer from './userReducer';

const RootReducer = combineReducers({
  user: UserReducer,
  profile: ProfileReducer
});
export default RootReducer;
