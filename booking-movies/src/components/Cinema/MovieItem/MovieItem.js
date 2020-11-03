import React from 'react'
import { CardMedia, Grid, Typography } from '@material-ui/core'

import './MovieItem.scss';
import { useSelector } from 'react-redux';

const MovieItem = () => {
  const movieSchedule = useSelector(state => state.cinemaList.initialScheduleMovie)

  const renderMovieSchedule = () => {
    return movieSchedule.map((item, index) => {
      return (
        <Grid
          className='movie-item'
          key={index}
        >
          <CardMedia
            className='movie-img'
            image={item.hinhAnh}
          />
          <Typography
            className='movie-content'
            color='textPrimary'
            variant='body2'
          >
            {item.tenPhim}
          </Typography>
        </Grid>
      )
    });
  }

  return (
    <Grid
      className='movie-schedule'
    >
      {renderMovieSchedule()}
    </Grid>
  )
}

export default MovieItem
