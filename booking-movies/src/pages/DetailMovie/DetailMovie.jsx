import React, {useState, useEffect} from 'react';  
import {useDispatch, useSelector} from 'react-redux'; 
import { fetchMovieDetail } from '../../redux/actions/movieListAction';
 
const DetailMovie = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovieDetail());
    },[dispatch]);

    const movieList = useSelector((state) => {
        return state.movieList.initaialMovieList_Detail;
      });

    return (
        <div>
            
        </div>
    )
}

export default DetailMovie;
