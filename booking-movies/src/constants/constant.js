/* =============* LINKS ROUTER *============= */
const HOME_PAGE = '/';
const LOGIN_PAGE = '/login';
const REGISTER_PAGE = '/register';
const CONTACT_PAGE = '/contact';
const CINEMA_PAGE = '/cinema';
const PROFILE_PAGE = '/user-profile';
const ADMIN_PAGE = '/admin';
const MOVIE_SCHEDULE_PAGE = '/movie-schedule';
const TICKET_ROOM_PAGE = '/ticket-room';
const TICKET_ORDER_PAGE = '/ticket-order';
const MOVIE_DETAIL_PAGE='/movie-detail'


/* =============* REDUCERS *============= */
// user auth
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const REGISTER_SUCESS='REGISTER_SUCESS';
const REGISTER_FAILURE='REGISTER_FAILURE'; 
// Profile
const USER_PROFILE = 'USER_PROFILE';
const UPDATE_PROFILE = 'UPDATE_PROFILE'; 
// Movies 
const FETCH_MOVIELIST='FETCH_MOVIELIST';
// Cinemas
const FETCH_CINEMA_LIST='FETCH_CINEMA_LIST';
const FECTH_BRANCH_CINEMA_LIST = 'FECTH_BRANCH_CINEMA_LIST';
const FETCH_THEATER_SCHEDULE = 'FETCH_THEATER_SCHEDULE';
const SCHEDULE_MOVIE = 'SCHEDULE_MOVIE';
const MOVIE_SCHEDULE_DETAIL = 'MOVIE_SCHEDULE_DETAIL';
const CINEMA_SYSTEM = 'CINEMA_SYSTEM';
const CLEAR_DETAIL_MOVIE = 'CLEAR_DETAIL_MOVIE';
const FETCH_MOVIE_DETAIL='FETCH_MOVIE_DETAIL';
// Ticket Rooms
const FETCH_TICKET_ROOM = 'FETCH_TICKET_ROOM';
const SEAT_LIST = 'SEAT_LIST';
const TICKET_INFORMATION = ' TICKET_INFORMATION';
// Booking Ticket
const BOOKING_TICKET = 'BOOKING_TICKET';
const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
const BOOKING_FAILURE = 'BOOKING_FAILURE';
const TICKET_MOVIE = 'TICKET_MOVIE'


/* =============* LOCALSTORAGE KEY CONSTANTS *============= */
const LOCAL_STORAGE_TOKEN_KEY = '@token';
const LOCAL_STORAGE_CREDENTIALS_KEY = '@credentials';
const LOCAL_STORAGE_PROFILE_KEY = '@profile';
const CLEAR_STORE = 'CLEAR_STORE';


export {
  HOME_PAGE, 
  LOGIN_PAGE, 
  REGISTER_PAGE, 
  CONTACT_PAGE, 
  CINEMA_PAGE, 
  PROFILE_PAGE, 
  ADMIN_PAGE, 
  MOVIE_SCHEDULE_PAGE, 
  TICKET_ROOM_PAGE,
  TICKET_ORDER_PAGE, 
  MOVIE_DETAIL_PAGE
};

export {LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_CREDENTIALS_KEY, CLEAR_STORE, LOCAL_STORAGE_PROFILE_KEY};
export {
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  USER_PROFILE, 
  UPDATE_PROFILE, 
  REGISTER_SUCESS, 
  REGISTER_FAILURE, 
  FETCH_MOVIELIST, 
  FETCH_CINEMA_LIST, 
  FECTH_BRANCH_CINEMA_LIST, 
  FETCH_THEATER_SCHEDULE, 
  SCHEDULE_MOVIE, 
  MOVIE_SCHEDULE_DETAIL,
  CINEMA_SYSTEM,
  CLEAR_DETAIL_MOVIE,
  FETCH_TICKET_ROOM,
  SEAT_LIST,
  FETCH_MOVIE_DETAIL,
  TICKET_INFORMATION,
  BOOKING_TICKET,
  BOOKING_SUCCESS,
  BOOKING_FAILURE,
  TICKET_MOVIE
};


 
