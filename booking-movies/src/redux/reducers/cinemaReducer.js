import { FECTH_BRANCH_CINEMA_LIST, FETCH_CINEMA_LIST } from '../../constants/constant'

let initialState={
  initialCinemaList: [],
  initialBranchCinemaList: []
} 
 
const CinemaListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CINEMA_LIST:
      state.initialCinemaList = payload;
      return { ...state }; 
    case FECTH_BRANCH_CINEMA_LIST:
      state.initialBranchCinemaList = payload;
      return { ...state }; 
    default:
      return state;
  }
};

export default CinemaListReducer;