import React from 'react'
import { useSelector } from 'react-redux';
import { CardMedia, Divider, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './MovieItem.scss';
// import Schedule from './Schedule/Schedules/Schedule';
import { CONTACT_PAGE } from '../../../constants/constant';
import ScheduleMovie from './Schedule/ScheduleMovie/SheduleMovie';

const MovieItem = () => {
  const movieSchedule = useSelector(state => state.cinemaList.initialScheduleMovie)

  const renderMovieSchedule = () => {
    return movieSchedule.map((item, index) => {
      const {hinhAnh, tenPhim, lstLichChieuTheoPhim} = item;
      // const handleClickMovie = () => {
      //   console.log('Clicked movie');
      // }

      return (
        <Grid
          className='movie-item'
          key={index}
          // onClick={handleClickMovie}
        >
          <Grid className='item'>
            <Link to={CONTACT_PAGE}>
              <CardMedia
                className='movie-img'
                image={hinhAnh}
              />
            </Link>
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
                <ScheduleMovie schedule={lstLichChieuTheoPhim}/>
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
        ) : null
      }
    </div>
  )
}

export default MovieItem
