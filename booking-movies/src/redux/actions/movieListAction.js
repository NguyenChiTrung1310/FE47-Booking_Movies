// fetch data  
import {createAction} from '.';
import { FETCH_MOVIELIST, FETCH_MOVIE_DETAIL,CLEAR_DETAIL_MOVIE } from '../../constants/constant';
import { MovieDetailService, MovieListService } from '../../services/movielist';

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

export const fetchMovieDetail=(maPhim)=>{ 
        return (dispatch)=> {
            MovieDetailService(maPhim).then(
                (res)=>{
                    // console.log('CHI TIET PHIM', res.data);
                     dispatch(createAction(FETCH_MOVIE_DETAIL, res.data))
                }
            ).catch((err)=>{
                //console.log(err);
            })
        }
    
}

 