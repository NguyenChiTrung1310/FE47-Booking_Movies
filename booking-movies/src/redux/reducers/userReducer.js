import { LOGIN_SUCCESS } from '../../constants/constant';

let initialState = {
  // credentials: null,
  loginStatus: null,
};
  
const UserReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      // state.credentials = payload;
      return { ...state };
    default:
      return state;
  }
};
  
export default UserReducer;