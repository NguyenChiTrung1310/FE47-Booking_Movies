import { createAction } from '.';
import { BookingTicketService, GetTicketRoomService } from '../../services';
import {FETCH_TICKET_ROOM, BOOKING_SUCCESS} from '../../constants/constant';

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

const bookingSucceeded = (bookingData) => {
  const {data, status, config} = bookingData;
  const order = {data, status, config}
  
  return {
    type: BOOKING_SUCCESS,
    payload: order
  }
}

export const BookingTicketAction = (
  booking, 
  notify_success = () => {},
  notify_failed = () => {},
) => {
  return (dispatch) => {
    BookingTicketService(booking)
      .then(res => {
        dispatch(bookingSucceeded(res));
        notify_success();
      })
      .catch(err => {
        console.log(err);
        notify_failed();
      })
  }
}