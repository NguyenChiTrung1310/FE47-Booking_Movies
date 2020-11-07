import request from '../configs/request';
import { MOVIELIST_API, MOVIEDETAIL_API } from './api'; 
 
export async function MovieListService() {
  return(
    request(
      MOVIELIST_API,
      'GET', 
    )
  ) 
}

export async function MovieDetailService(){
  return(
    request(
      MOVIEDETAIL_API,
      'GET',
    )
  )
}