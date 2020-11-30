import React from 'react'
import PropTypes from 'prop-types';

import './Schedule.scss'
import AlertDialog from '../../AlertDialog/AlertDialog';
import { Button, Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TICKET_ROOM_PAGE } from '../../../../constants/constant';

const Schedule = ({schedule}) => {
  const loginStatus = useSelector(state => state.user.loginStatus);
  const history = useHistory();
  
  return (
    <Grid className='schedule'>
      {
        schedule.map((item, index) => {
          const {tenRap, ngayChieuGioChieu, maLichChieu} = item;

          const handleClick = () => {
            if(loginStatus === true){
              history.push(`${TICKET_ROOM_PAGE}/${maLichChieu}`)
            }
          }
         
          return (
            <Grid
              className='schedule-item'
              key={index}
            >
              {
                loginStatus ? (
                  <Button onClick={handleClick}>
                    <Grid className='cinema-name'>
                      {tenRap}
                    </Grid>
                    <Divider className='devide'/>
                    <Grid
                      className='schedule-detail'
                    >
                      {ngayChieuGioChieu}
                    </Grid>
                  </Button>
                ) : (
                  <AlertDialog
                    maLichChieu={maLichChieu}
                    ngayChieuGioChieu={ngayChieuGioChieu}
                    tenRap={tenRap}
                  />
                )
              }
            </Grid>
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
