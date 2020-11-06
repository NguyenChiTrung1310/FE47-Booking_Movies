import request from '../configs/request';
import { MOVIELIST_API } from './api'; 
 
export async function MovieListService() {
  return(
    request(
      MOVIELIST_API,
      'GET', 
    )
  ) 
}