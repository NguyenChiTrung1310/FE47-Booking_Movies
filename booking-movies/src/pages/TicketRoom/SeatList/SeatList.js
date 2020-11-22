import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import './SeatList.scss'
import { useDispatch } from 'react-redux';
import { createAction } from '../../../redux/actions';
import { TICKET_INFORMATION } from '../../../constants/constant';

const SeatList = ({seatList}) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  const [book, setBook] = useState(false);
  
  return seatList.map((item,index) => {
    const {tenGhe, loaiGhe, stt, daDat} = item;

    const handleClick = () => {
      setNumber(number+1);
      setBook(!book);
     
      const seat = {
        numID: stt,
        isBook: daDat,
        typeSeat: loaiGhe,
      }
      return dispatch(createAction(TICKET_INFORMATION, { seat, number}))
    }
    return (
      <Grid
        className='seat'
        key={index}
        onClick={handleClick}
      >
        <Grid>
          {
            loaiGhe === 'Thuong' ? (
              <Grid >{tenGhe}</Grid>
            ) : (
              <Grid style={{backgroundColor: '#ed1c2d'}}>{tenGhe}</Grid>
            )
          }
        </Grid>        
      </Grid>
    )
  })
}

export default SeatList
