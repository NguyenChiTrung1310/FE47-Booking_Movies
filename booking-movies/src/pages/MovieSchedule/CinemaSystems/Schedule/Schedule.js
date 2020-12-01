import React from 'react'
import PropTypes from 'prop-types';

import './Schedule.scss'
import AlertDialog from '../../AlertDialog/AlertDialog';
import { Button, Divider, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CLEAR_ORDER, TICKET_ROOM_PAGE } from '../../../../constants/constant';
import { createAction } from '../../../../redux/actions';

const Schedule = ({schedule}) => {
  const user = useSelector(state => state.user.credentials);
  const history = useHistory();
  const dispatch = useDispatch();
  
  return (
    <Grid className='schedule'>
      {
        schedule.map((item, index) => {
          const {tenRap, ngayChieuGioChieu, maLichChieu} = item;

          const handleClick = () => {
            dispatch(createAction(CLEAR_ORDER))
            if(user){
              history.push(`${TICKET_ROOM_PAGE}/${maLichChieu}`)
            }
          }
         
          return (
            <Grid
              className='schedule-item'
              key={index}
            >
              {
                user ? (
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
