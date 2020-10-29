import {CLEAR_STORE, USER_PROFILE} from '../../constants/constant';

let initialState = {
  initialProfile: null,
};

const ProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;
    
  switch(type) {
    case USER_PROFILE:
      state.initialProfile = payload;
      return {
        ...state
      }
    case CLEAR_STORE:
      state = undefined;
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default ProfileReducer;
