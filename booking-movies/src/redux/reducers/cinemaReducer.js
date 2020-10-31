import { FETCH_CINEMA_LIST } from '../../constants/constant'

let initialState={
  initialCinemaList: [],
} 
 
const CinemaListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CINEMA_LIST:
      state.initialCinemaList = payload;
      return { ...state }; 
    default:
      return state;
  }
};

export default CinemaListReducer;