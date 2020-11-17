import { createAction } from '.';
import { FECTH_BRANCH_CINEMA_LIST, FETCH_CINEMA_LIST, FETCH_THEATER_SCHEDULE, SCHEDULE_MOVIE } from '../../constants/constant';
import { BranchCinemaService, CinemaService, TheaterScheduleService } from '../../services';

// call api render list Cinemas
export const cinemaListAction = () => {
  return (dispatch) => {
    CinemaService()
      .then(res => {
        const {data} = res;
        dispatch(createAction(FETCH_CINEMA_LIST, data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

// call api render list Theaters of the cinema
export const showCinemaListAction = (id) => {
  return (dispatch) => {
    BranchCinemaService(id)
      .then(res => {
        const {data} = res;
        dispatch(createAction(FECTH_BRANCH_CINEMA_LIST, data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

// call api render schedule & info of the theaters
export const showTheaterScheduleAction = (id) => {
  return (dispatch) => {
    TheaterScheduleService(id)
      .then(res => {
        const {data} = res;
        dispatch(createAction(FETCH_THEATER_SCHEDULE, data[0]))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

// handle 
export const showMoviesList = (movieList) => {
  return (dispatch) => {
    try{
      const schedule = movieList.map((item, index) => {
        return item;
      });
      
      dispatch(createAction(SCHEDULE_MOVIE, schedule))

    }
    catch{
      console.log('Error');
    }
  }
}
