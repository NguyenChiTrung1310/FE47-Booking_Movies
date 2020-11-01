import { createAction } from '.';
import { FECTH_BRANCH_CINEMA_LIST, FETCH_CINEMA_LIST } from '../../constants/constant';
import { BranchCinemaService, CinemaService } from '../../services';


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
