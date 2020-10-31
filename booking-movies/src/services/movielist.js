
import axios from 'axios';
import { MOVIELIST_API } from './api'; 
 
export async function MovieListService() {
  return await axios({
    method: 'GET',
    url: MOVIELIST_API,
  });
}