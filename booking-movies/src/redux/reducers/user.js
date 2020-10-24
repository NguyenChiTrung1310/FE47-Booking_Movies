import { LOGIN_SUCCESS } from '../../constants/constant';

let initialState ={
  credentials: null,
  loginStatus: null,
};

const UserReducer=(state=initialState, action)=>{
  const {type,payload}= action;
  switch(type)
  {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: payload,

      }
    default:
      return state;
  }
}
export default UserReducer;