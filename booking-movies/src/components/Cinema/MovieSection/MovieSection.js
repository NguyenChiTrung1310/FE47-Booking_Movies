import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { CardMedia, Divider, Grid } from '@material-ui/core'

import { CONTACT_PAGE } from '../../../constants/constant';
import LoadingCool from '../../Spinner_Cool/SpinnerCool';
import ScheduleMovie from './ScheduleMovie/SheduleMovie';

import './MovieSection.scss';

const MovieSection = () => {
  const movieSchedule = useSelector(state => state.cinemaList.initialScheduleMovie)

  const renderMovieSchedule = () => {
    return movieSchedule.map((item, index) => {
      const {hinhAnh, tenPhim, lstLichChieuTheoPhim} = item;

      return (
        <Grid
          className='movie-item'
          key={index}
        >
          <Grid className='item'>
            <Grid className='movie-images'>
              {
                hinhAnh ? (
                  <Link to={CONTACT_PAGE}>
                    <CardMedia
                      className='movie-img'
                      image={hinhAnh}
                    />
                  </Link>
                ) : (
                  <Grid className='loading'>
                    <LoadingCool />
                  </Grid>
                )
              }      
            </Grid>
            <Grid className='content'>
              <Link
                className='movie-content'
                color='textPrimary'
                to={CONTACT_PAGE}
                variant='body2'
              >
                {tenPhim}
              </Link>
              <Grid
                className='schedule-content'
              >
                <ScheduleMovie movieSchedules={lstLichChieuTheoPhim}/>
              </Grid>
            </Grid>
          </Grid>
          <Divider className='movie-divider'/>
        </Grid>
      )
    });
  }

  return (
    <div>
      {
        movieSchedule ? (
          <Grid
            className='movie-schedule'
          >
            {renderMovieSchedule()}
          </Grid>
        ) : <LoadingCool />
      }
    </div>
  )
}

export default MovieSection
