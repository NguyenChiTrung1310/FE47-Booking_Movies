import React, {useState, useEffect} from 'react';  
import {useDispatch, useSelector} from 'react-redux'; 
import { Container , Paper, TextField, Typography, Grid, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';
import {fetchMovieDetail } from '../../redux/actions/movieListAction';
import ScheduleMovie from '../../components/DetailMovie/ScheduleMovie/ScheduleMovie';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { CLEAR_DETAIL_MOVIE } from '../../constants/constant';
import { createAction } from '../../redux/actions';
import Button from './../../components/Button/Button';
import _ from 'lodash';
const MovieDetailPage = (props) => {
  const dispatch = useDispatch();
  // const [status, setStatus]= useStatus(false);

  useEffect(()=>{
    dispatch(fetchMovieDetail(props.match.params.maPhimId));
    return ()=>{ 
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
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
    console.log('USESELECTOR', lichChieu); 
    const arr = lichChieu.reduce((acc, lichChieu) => {
  
      const found = acc.find(i => i.maRap === lichChieu.maRap);
      
      if(found) {
        found.ngayChieuGioChieu.push(lichChieu.ngayChieuGioChieu);
      } else {
        acc.push({maRap: lichChieu.maRap, ngayChieuGioChieu: [lichChieu.ngayChieuGioChieu]})
      }
      
      return acc;
    }, []); 
    console.log(arr);

    // var sgrouped = _.mapValues(_.groupBy(lichChieu, 'maRap'),
    //   clist => clist.map(x => _.omit(x, 'maRap'))); 
    // console.log(sgrouped);  

    // var xgrouped = _.mapValues(_.groupBy(lichChieu, 'ngayChieuGioChieu'),
    //   clist => clist.map(x => _.omit(x, 'ngayChieuGioChieu'))); 
    // console.log(xgrouped); 

    return (
      <Container >
        <Grid
          container
          // spacing={3} 
        >
          {/* Poster&NameMovie */}
          <Grid
            item
            sm={3}
            xs={12}
          >
            <Grid
              container
              // spacing={12}
            >
              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h3'
                  variant='h3'
                >
                  {tenPhim}
                </Typography> 
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h3'
                  variant='h3'
                >
                    - {maPhim}
                </Typography> 
              </Grid>
              <img
                src={hinhAnh}
                style={{height: '100%', width:'100%'}}
              />
            </Grid> 
          </Grid>
          {/* Schedule */}
          <Grid
            item
            sm={9}
            xs={12}
          >
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              {biDanh}
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              {moTa}
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              Đánh giá: {danhGia} *
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              Ngày khởi chiếu: {ngayKhoiChieu} 
            </Typography> 
            <Grid
              container
              // spacing={3}
            >
              <Grid
                item
                sm={3}
                xs={12}
              > <Button >Trailer</Button></Grid>
              <Grid
                item
                sm={3}
                xs={12}
              > <Button >Ticket</Button></Grid>
            </Grid> 
          </Grid>
        </Grid>  
        <ScheduleMovie schedule ={lichChieu}/>
      </Container>

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

