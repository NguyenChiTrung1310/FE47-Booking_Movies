let initialState={
  initialMovieList: [],
} 

const MovieListReducer = (state= initialState,action) => {
  const{type, payload} = action;
  switch(type){
    default:
      return state;
  }
}

export default MovieListReducer

