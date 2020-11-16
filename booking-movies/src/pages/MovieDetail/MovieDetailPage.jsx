import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@material-ui/core';
import { fetchMovieDetail } from '../../redux/actions/movieListAction';
import ScheduleMovie from '../../components/DetailMovie/ScheduleMovie/ScheduleMovie';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { CLEAR_DETAIL_MOVIE } from '../../constants/constant';
import { createAction } from '../../redux/actions';
import Button from './../../components/Button/Button';
import _ from 'lodash';
import './MovieDetail.scss'
import CustomScheduleMovie from '../../components/DetailMovie/CustomScheduleMovie/CustomScheduleMovie';
const MovieDetailPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail(props.match.params.maPhimId));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props]);



  const movieList = useSelector((state) => {
    return state.movieList.initaialMovieList_Detail
  });

  const renderMovieList = () => {
    const { danhGia,
      hinhAnh,
      biDanh,
      // maNhom, 
      maPhim,
      moTa,
      ngayKhoiChieu,
      tenPhim,
      lichChieu,
    } = movieList;
    console.log('USESELECTOR', lichChieu);
    const arr = lichChieu.reduce((acc, lichChieu) => {

      const found = acc.find(i => i.maRap === lichChieu.maRap);

      if (found) {
        found.ngayChieuGioChieu.push(lichChieu.ngayChieuGioChieu);
      } else {
        acc.push({ maRap: lichChieu.maRap, ngayChieuGioChieu: [lichChieu.ngayChieuGioChieu] })
      }

      return acc;
    }, []);
    console.log(arr);

    //test
    console.log(lichChieu[0].thongTinRap.tenRap);
    // var sgrouped = _.mapValues(_.groupBy(lichChieu, 'maRap'),
    //   clist => clist.map(x => _.omit(x, 'maRap'))); 
    // console.log(sgrouped);  

    // var xgrouped = _.mapValues(_.groupBy(lichChieu, 'ngayChieuGioChieu'),
    //   clist => clist.map(x => _.omit(x, 'ngayChieuGioChieu'))); 
    // console.log(xgrouped); 

    return (
      <Container className='main'>
        <Grid
          container
        >
          {/* Poster&NameMovie */}
          <Grid
            item
            sm={3}
            xs={12}
          >
            <Grid
              container
            >

              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h4'
                  variant='h4'
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
                  component='h4'
                  variant='h4'
                >
                  {maPhim}
                </Typography>
              </Grid>


              <img
                alt='imagee'
                className='image'
                src={hinhAnh}

              />
            </Grid>
          </Grid>
          {/* Schedule */}
          <Grid
            className='title-detail'
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
            >
              <Grid
                className='button'
                item
                sm={3}
                xs={12}
              > <Button >Trailer</Button></Grid>
              <Grid
                className='button'
                item
                sm={3}
                xs={12}
              > <Button >Ticket</Button></Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <ScheduleMovie schedule={lichChieu} /> */}
        <CustomScheduleMovie arrayData={arr} />
      </Container>

    )
  }


  return (
    <div>
      {
        movieList ? renderMovieList() : <LoadingCool />
      }
    </div>
  )
}

export default MovieDetailPage;

