import { FECTH_BRANCH_CINEMA_LIST, FETCH_CINEMA_LIST, FETCH_THEATER_SCHEDULE } from '../../constants/constant'

let initialState={
  initialCinemaList: [],
  initialBranchCinemaList: [],
  initialTheaterSchedule: {},
  initialListTheater: []
} 
 
const CinemaListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CINEMA_LIST:
      state.initialCinemaList = payload;
      return { ...state }; 
    case FECTH_BRANCH_CINEMA_LIST:
      state.initialBranchCinemaList = payload;
      return { ...state }; 
    case FETCH_THEATER_SCHEDULE: 
      state.initialTheaterSchedule = payload;
      state.initialListTheater = payload.lstCumRap;
      return {...state};
    default:
      return state;
  }
};

export default CinemaListReducer;