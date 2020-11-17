import { FETCH_TICKET_ROOM, CLEAR_DETAIL_MOVIE, SEAT_LIST } from '../../constants/constant'

let initialState={
  initialTicketRoom: {},
  initialSeatList: []
} 
   
const BookingTicketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TICKET_ROOM:
      state.initialTicketRoom = payload;
      return { ...state }; 
    case SEAT_LIST:
      state.initialSeatList = payload;
      return {...state}
    case CLEAR_DETAIL_MOVIE: 
      state.initialTicketRoom = {};
      return { ...state }; 
    default:
      return state;
  }
};
  
export default BookingTicketReducer;