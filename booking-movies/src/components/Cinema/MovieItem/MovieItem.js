import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import './MovieItem.scss';

const MovieItem = () => {
  return (
    <Grid
      className='movie-schedule'
    >
      <Typography
        color='textPrimary'
        component={'span'}
        variant='body2'
      >
          MOVIE 1
      </Typography>
    </Grid>
  )
}

export default MovieItem
