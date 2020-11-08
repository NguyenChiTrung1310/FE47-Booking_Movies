// import React, {useEffect} from 'react';  
// import {useDispatch} from 'react-redux'; 
// import { fetchMovieDetail } from '../../redux/actions/movieListAction';
// import DetailMovie from './../../components/DetailMovie/DetailMovie';
// const MovieDetailPage = (props) => {
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(fetchMovieDetail(props.match.params.maPhimId));
//     },[dispatch,props]);
//     return (
//         <div> 
//              <DetailMovie/>
//         </div>
//     )
// }

// export default MovieDetailPage

import React, {useState, useEffect} from 'react';  
import {useDispatch, useSelector} from 'react-redux'; 
import { fetchMovieDetail } from '../../redux/actions/movieListAction';
import ScheduleMovie from '../../components/DetailMovie/ScheduleMovie/ScheduleMovie';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';

const MovieDetailPage = (props) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovieDetail(props.match.params.maPhimId));
    },[dispatch,props]);



    const movieList = useSelector((state) => {
        return state.movieList.initaialMovieList_Detail  
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
                movieList ? renderMovieList() : <LoadingCool/>
            }
        </div>
    )
}

export default MovieDetailPage;

