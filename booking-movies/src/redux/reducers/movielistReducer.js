import { FETCH_MOVIELIST } from "../../constants/constant"

let initialState={
  initialMovieList: [],
} 
 
const MovieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIELIST:
      state.initialMovieList = payload;
      return { ...state }; 
    default:
      return state;
  }
};

export default MovieListReducer;

