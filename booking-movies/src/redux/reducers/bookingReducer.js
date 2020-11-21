import { FETCH_TICKET_ROOM, CLEAR_DETAIL_MOVIE, SEAT_LIST, TICKET_INFORMATION } from '../../constants/constant'

let initialState={
  initialTicketRoom: {},
  initialSeatList: [],
  initialTicketInfo: {
    number: 0,
    seats: []
  }
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
    case TICKET_INFORMATION: {
      let ds = [...state.initialTicketInfo.seats];
      ds.push(payload.seat);
      
      state.initialTicketInfo = {
        number: payload.number,
        seats: ds
      };
      return {...state };
    }
    default:
      return state;
  }
};
  
export default BookingTicketReducer;