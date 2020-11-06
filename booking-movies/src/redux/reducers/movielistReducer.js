import { FETCH_MOVIELIST } from "../../constants/constant"

let initialState={
  initialMovieList: [],
  initaialMovieList_Detail: null,
} 
 
const MovieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIELIST:
      state.initialMovieList = payload;
      return { ...state }; 
    case 'FETCH_MOVIE_DETAIL':
      state.initaialMovieList_Detail=payload;
      return {...state};
    default:
      return state;
  }
};

export default MovieListReducer;

