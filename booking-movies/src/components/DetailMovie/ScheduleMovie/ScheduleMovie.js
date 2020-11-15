 
import React from 'react'
import TheaterInfo from '../TheaterInfo/TheaterInfo'
import { Container , Paper, TextField, Typography, Grid, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import _ from 'lodash';
const ScheduleMovie = ({schedule}) => { 
  
  const renderScheduleMovie = () => {
    return schedule.map((item, index) => {
      const {
        thongTinRap, 
        maLichChieu, 
        maRap, 
        maPhim, 
        tenPhim, 
        ngayChieuGioChieu, 
        giaVe, 
        thoiLuong
      } = item;
      // console.log('LICH CHIEU', item); 

      return (
        <Grid key={index}>
          {/* <h4>MÃ LỊCH CHIẾU: {maLichChieu}</h4>  */}
          <Typography
            className='title'
            component='h5'
            variant='h5'
          >
            {ngayChieuGioChieu}
          </Typography> 
          <TheaterInfo
            item={thongTinRap}
          />   
        </Grid>
      )
    })
  }
 
  return(
    <Container>
      <Typography
        className='title'
        component='h5'
        variant='h5'
      >
             Movie Schedule
      </Typography>  
      {renderScheduleMovie()}
    </Container>
  )
}

export default ScheduleMovie
 