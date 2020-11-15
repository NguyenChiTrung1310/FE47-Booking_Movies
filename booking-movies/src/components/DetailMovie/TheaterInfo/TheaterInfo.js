import React, {useState, useEffect} from 'react';  
import { useSelector} from 'react-redux'; 
import { Container , Paper, TextField, Typography, Grid, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
const TheaterInfo = ({item}) => {
  const {maRap, tenRap, maCumRap, tenCumRap, maHeThongRap, tenHeThongRap} =item;

  // console.log('THÔNG TIN RẠP',item);

  // const arr = item.reduce((acc, x) => {
  
  //   const found = acc.find(i => i.tenRap === x.tenRap);
    
  //   if(found) {
  //     found.tenCumRap.push(x.tenCumRap);
  //   } else {
  //     acc.push({tenRap: x.tenRap, tenCumRap: [x.tenCumRap]})
  //   }
    
  //   return acc;
  // }, []); 
  // console.log(arr);
  
  return (
    <Container>

      {/* <h4>TÊN HỆ THỐNG RẠP: {tenHeThongRap}</h4>
      <h4>TÊN CỤM RẠP: {tenCumRap}</h4> */} 
      <Grid
        container
        // spacing={3}
      >
        <Grid
          item
          sm={3}
          xs={12}
        >
          <Typography
            className='title'
            component='h5'
            variant='h5'
          >
            {tenCumRap}
          </Typography>
        </Grid>
        <Grid
          item
          sm={9}
          xs={12}
        >
          <Typography
            className='title'
            component='h5'
            variant='h5'
          >
            {tenRap}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TheaterInfo
