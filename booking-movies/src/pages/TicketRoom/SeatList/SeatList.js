import React from 'react'
import { Grid } from '@material-ui/core'

import './SeatList.scss'

const SeatList = ({seatList}) => {
  
  return seatList.map((item,index) => {
    const {tenGhe, loaiGhe} = item;
    const handleClick = () => {
      console.log('Seat type: ', loaiGhe);
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
              <Grid>{tenGhe}</Grid>
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
