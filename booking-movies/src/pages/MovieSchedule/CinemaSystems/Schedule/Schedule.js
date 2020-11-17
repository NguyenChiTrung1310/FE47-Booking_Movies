import React from 'react'
import { Divider, Grid } from '@material-ui/core'
import PropTypes from 'prop-types';

import './Schedule.scss'
import { CONTACT_PAGE } from '../../../../constants/constant';
import { Link } from 'react-router-dom';


const Schedule = ({schedule}) => {
  return (
    <Grid className='schedule'>
      {
        schedule.map((item, index) => {
          const {tenRap, ngayChieuGioChieu} = item;
          return (
            <Link
              className='schedule-item'
              key={index}
              to={CONTACT_PAGE}
            >
              <Grid className='cinema-name'>
                {tenRap}
              </Grid>
              <Divider className='devide'/>
              <Grid
                className='schedule-detail'
              >
                {ngayChieuGioChieu}
              </Grid>
            </Link>
          )
        })
      }
    </Grid>
  )
}

Schedule.propTypes = {
  schedule: PropTypes.array,
};
    

export default Schedule
