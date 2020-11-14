import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

import './ScheduleMovie.scss';
import { CONTACT_PAGE } from '../../../../constants/constant';

const ScheduleMovie = ({movieSchedules}) => {
  const schedules = movieSchedules.slice(0,5);

  return schedules.map((item, index) => {
    const {ngayChieuGioChieu} = item;

    return (
      <Grid
        key={index}
      >
        <Link
          className='schedule-detail'
          to={CONTACT_PAGE}
        >
          {ngayChieuGioChieu}
        </Link>
      </Grid>
    ) 
  });

}

ScheduleMovie.propTypes = {
  schedule: PropTypes.array,
};

export default ScheduleMovie
