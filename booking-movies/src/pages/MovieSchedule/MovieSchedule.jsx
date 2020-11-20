import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  CardMedia, 
  Container, 
  Grid, 
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types';

import LoadingCool from '../../components/Spinner_Cool/SpinnerCool'
import { DetailMovieScheduleAction } from '../../redux/actions/cinemaListAction';

import './MovieSchedule.scss';
import ModalPopup from './Modal/Modal';
import {CINEMA_SYSTEM, CLEAR_DETAIL_MOVIE} from '../../constants/constant';
import CinemaSystems from './CinemaSystems/CinemaSystems';
import { createAction } from '../../redux/actions';


const MovieSchedulePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailMovieScheduleAction(props.match.params.maPhimId));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props])

  const movieScheduleDetail = useSelector(state => state.cinemaList.initialMovieScheduleByTheater);
  const {
    hinhAnh, 
    tenPhim, 
    moTa,
    ngayKhoiChieu,
    danhGia,
    trailer,
    heThongRapChieu
  } = movieScheduleDetail;

  useEffect(() => {
    dispatch(createAction(CINEMA_SYSTEM ,heThongRapChieu));
  }, [dispatch, heThongRapChieu])

  return (
    <Container className='movie-schedule-page'>
      {
        movieScheduleDetail ? (
          <Grid>
            <Grid className='movie-detail'>
              <Grid className='movie-trailer'>
                {
                  hinhAnh ?  
                    <CardMedia
                      className='movie-img'
                      image={hinhAnh}
                    />
                    : <LoadingCool />
                }         
              </Grid>
              {
                tenPhim ? (
                  <Grid className='movie-info'>
                    <Grid>                 
                      <Typography 
                        component={'h1'}
                        style={{fontWeight: '400', color: '#03a9f4'}}
                        variant='h2'
                      >
                        {tenPhim}
                      </Typography>               
                    </Grid>

                    <Grid>                 
                      <Typography 
                        component={'h5'}
                        style={{fontWeight: '600'}}
                        variant='h5'
                      >
                  Description:  
                        <Typography 
                          component={'span'}
                          style={{paddingLeft: '5px'}}
                          variant='h6'
                        >
                          {
                            moTa.length > 200 ? 
                              `${moTa.slice(0, 200)}...` : moTa
                          }
                        </Typography>
                      </Typography>                  
                    </Grid>

                    <Grid>                 
                      <Typography 
                        component={'h5'}
                        style={{fontWeight: '600'}}
                        variant='h5'
                      >
                      Release:  
                        <Typography 
                          component={'span'}
                          style={{paddingLeft: '5px'}}
                          variant='h6'
                        >
                          {ngayKhoiChieu}
                        </Typography>
                      </Typography>         
                    </Grid>

                    <Grid>             
                      <Typography 
                        component={'h5'}
                        style={{fontWeight: '600'}}
                        variant='h5'
                      >
                      Rating:  
                        <Typography 
                          component={'span'}
                          style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                          variant='h6'
                        >
                          {danhGia}
                        </Typography>
                      </Typography>                  
                    </Grid>             
                    <ModalPopup trailer={trailer}/>
                  </Grid> 
                ) : null
              }
          
            </Grid>     
            <Grid className='schedule-by-theater'>
              {
                heThongRapChieu ? <CinemaSystems />
                  : <LoadingCool />
              }
              
            </Grid>
          </Grid>
        ) : <LoadingCool />
      } 
    </Container>
  )
}

MovieSchedulePage.propTypes={
  match: PropTypes.object,
  params: PropTypes.object,
}


export default MovieSchedulePage
