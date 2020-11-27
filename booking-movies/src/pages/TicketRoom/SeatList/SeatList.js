import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import './SeatList.scss'
import { useDispatch } from 'react-redux';
import { createAction } from '../../../redux/actions';
import { TICKET_INFORMATION } from '../../../constants/constant';

const SeatList = ({seatList}) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const [orderedList, setOrderedList] = useState([]);

  const checkSelected = (tenGhe) => {
    let check = false;
    orderedList.forEach(value => {
      if (value === tenGhe) 
      {
        check = true;
      }
    })
    return check;
  }

  return seatList.map((item,index) => {
    const {tenGhe, loaiGhe, stt, daDat} = item;
    
    const handleClick = () => {
      let ordered = JSON.parse(JSON.stringify(orderedList));
      let newNumber = number;
    
      if (!checkSelected(tenGhe)) {
        ordered.push(tenGhe);
        setNumber(number+1);
        newNumber += 1;
      } else {
        ordered = ordered.filter(value => value !== tenGhe);
        setNumber(number-1);
        newNumber -= 1;
      }
      setOrderedList(ordered);
      
      const seat = {
        numID: stt,
        isBook: daDat,
        typeSeat: loaiGhe,
      }
      
      dispatch(createAction(TICKET_INFORMATION, {seat, number: newNumber}))
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
              <Grid style={checkSelected(tenGhe) ? {backgroundColor:'#4aff71c9'} : {backgroundColor:'#03a9f4'}}>{tenGhe}</Grid>
            ) : (
              <Grid style={checkSelected(tenGhe) ? {backgroundColor:'#4aff71c9'} : {backgroundColor: '#ed1c2d'}}>{tenGhe}</Grid>
            )
          }
        </Grid>        
      </Grid>
    )
  })
}

export default SeatList
