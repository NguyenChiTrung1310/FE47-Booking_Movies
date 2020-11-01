import { Grid } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';

import './CinemaItem.scss';
import CinemaList from './CinemaList/CinemaList';

const CinemaItem = () => {
  
  const theaterSchedule = useSelector(state => state.cinemaList.initialListTheater);

  return (
    <Grid component={'span'}>
      <CinemaList theaterSchedule={theaterSchedule}/>
    </Grid>
  )
}

export default CinemaItem
