import request from '../configs/request';
import { CINEMA_LIST_API } from './api';

export async function CinemaService() {
  return (
    request(
      CINEMA_LIST_API,
      'GET',
    )
  );
}
