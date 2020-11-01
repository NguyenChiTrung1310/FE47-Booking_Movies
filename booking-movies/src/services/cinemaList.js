import request from '../configs/request';
import { BRANCH_CINEMA_LIST_API, CINEMA_LIST_API } from './api';

export async function CinemaService() {
  return (
    request(
      CINEMA_LIST_API,
      'GET',
    )
  );
}

export async function BranchCinemaService (id) {
  return (
    request(
      BRANCH_CINEMA_LIST_API + `${id}`,
      'GET',
    )
  );
}
