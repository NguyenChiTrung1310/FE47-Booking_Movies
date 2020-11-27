import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import './SeatList.scss'
import { useDispatch } from 'react-redux';
import { createAction } from '../../../redux/actions';
import { TICKET_INFORMATION } from '../../../constants/constant';

const SeatList = ({seatList}) => {
  const dispatch = useDispatch();
  // const [number, setNumber] = useState(1);
  // const [select, setSelect] = useState(false);
  const [orderedList, setOrderedList] = useState([]);

  
  return seatList.map((item,index) => {
    const {tenGhe, loaiGhe, stt, daDat} = item;

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
    
    const handleClick = () => {
      const test = JSON.parse(JSON.stringify(orderedList));
      test.push(tenGhe);
      setOrderedList(test);

      // setNumber(number+1);
      // setSelect(!select);
      
      const seat = {
        numID: stt,
        isBook: daDat,
        typeSeat: loaiGhe,
      }
      
      return dispatch(createAction(TICKET_INFORMATION, seat))
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
