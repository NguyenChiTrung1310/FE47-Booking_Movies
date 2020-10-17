import { LOGIN_SUCCESS } from '../../constants/constant';

let initialState = {
  credentials: null,
};
  
const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      state.credentials = payload;
      return { ...state };
    default:
      return state;
  }
};
  
export default UserReducer;