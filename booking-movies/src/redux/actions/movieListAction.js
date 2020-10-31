// fetch data  
import {createAction} from '.';
import { FETCH_MOVIELIST } from '../../constants/constant';
import { MovieListService } from '../../services/movielist';

export const fetchMovieList = ()=>{
    return (dispatch) =>{
        MovieListService()
            .then((res)=>{
                dispatch(createAction(FETCH_MOVIELIST,res.data)) 
            })
            .catch((err)=>{
                // console.log(err);
            })
    }
}