import { combineReducers } from 'redux';
import MovieListReducer from './movielistReducer';
import ProfileReducer from './profileReducer';
import UserReducer from './userReducer';

const RootReducer = combineReducers({
  user: UserReducer,
  profile: ProfileReducer,
  movieList: MovieListReducer,
});
export default RootReducer;
