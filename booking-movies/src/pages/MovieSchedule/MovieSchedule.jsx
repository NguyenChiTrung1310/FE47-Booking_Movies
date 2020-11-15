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
import CinemaSystems from './CinemaSystems/CinemaSystems';


const MovieSchedulePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailMovieScheduleAction(props.match.params.maPhimId));
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
              <Grid className='movie-info'>
                <Typography 
                  component={'h1'}
                  style={{fontWeight: '300'}}
                  variant='h1'
                >
                  {tenPhim}
                </Typography>
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
                    {moTa}
                  </Typography>
                </Typography>
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

                <ModalPopup trailer={trailer}/>
              </Grid> 
            </Grid>     
            <Grid className='schedule-by-theater'>
              {
                heThongRapChieu ? <CinemaSystems heThongRapChieu={heThongRapChieu}/>
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
