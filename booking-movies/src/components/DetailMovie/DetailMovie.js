import React, {useState, useEffect} from 'react';  
import {useDispatch, useSelector} from 'react-redux'; 
import { fetchMovieDetail } from '../../redux/actions/movieListAction';
import ScheduleMovie from './ScheduleMovie/ScheduleMovie';

const DetailMovie = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovieDetail());
    },[dispatch]);



    const movieList = useSelector((state) => {
        return state.movieList.initaialMovieList_Detail;
    });

    const renderMovieList=()=>{
        const {  danhGia,
                hinhAnh, 
                biDanh,
                maNhom, 
                maPhim, 
                moTa, 
                ngayKhoiChieu, 
                tenPhim,
                lichChieu,
                } = movieList; 
        return (
            <>
            <h4>TÊN PHIM: {tenPhim}</h4>
            <h4>MÃ PHIM: {maPhim}</h4>
            <ScheduleMovie schedule ={lichChieu}/>
            </>

        )
    }

   
    return (
        <div>
            {
                movieList ? renderMovieList() : 'NOT FOUND'
            }
        </div>
    )
}

export default DetailMovie;
