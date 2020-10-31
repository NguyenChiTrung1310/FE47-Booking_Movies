import { createAction } from '.';
import { FETCH_CINEMA_LIST } from '../../constants/constant';
import { CinemaService } from '../../services';


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
