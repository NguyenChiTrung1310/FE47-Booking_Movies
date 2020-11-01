import { createAction } from '.';
import { FECTH_BRANCH_CINEMA_LIST, FETCH_CINEMA_LIST, FETCH_THEATER_SCHEDULE } from '../../constants/constant';
import { BranchCinemaService, CinemaService, TheaterScheduleService } from '../../services';


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
