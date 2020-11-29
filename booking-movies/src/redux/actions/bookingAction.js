import { createAction } from '.';
import { BookingTicketService, GetTicketRoomService } from '../../services';
import {FETCH_TICKET_ROOM} from '../../constants/constant';

export const getTicketRoomsAction = (id) => {
  return (dispatch) => {
    GetTicketRoomService(id)
      .then(res => {
        const {data} = res;
        dispatch(createAction(FETCH_TICKET_ROOM, data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const BookingTicketAction = (booking) => {
  return (dispatch) => {
    BookingTicketService(booking)
      .then(res => {
        console.log('CHECKOUT INFO: ', res);
      })
      .catch(err => {
        console.log('CHECKOUT INFO: ', err);
      })
  }
}