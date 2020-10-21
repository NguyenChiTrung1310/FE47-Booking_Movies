import { CLEAR_STORE, LOGIN_FAILURE, LOGIN_SUCCESS } from '../../constants/constant';

let initialState = {
  credentials: null,
  loginStatus: null,
};
  
const UserReducer = (state = initialState, action) => {

  const { type, loginStatus, payload } = action 

  switch (type) {
    case LOGIN_SUCCESS:
      state.credentials = payload;
      return { 
        ...state,
        loginStatus: loginStatus 
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: loginStatus 
      }
    case CLEAR_STORE:
      state = undefined;
      return {
        ...state,
      }
    default:
      return state;
  }
};
  
export default UserReducer;