
import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
// import CustomInforMovie from '../CustomInforMovie/CustomInforMovie'
const CustomScheduleMovie = ({ arrayData }) => {

  const renderCustomMovie = () => {
    return arrayData.map((item, index) => {
      const {   ngayChieuGioChieu, thongTinRap } = item; 
      //   const x =[];
      //   x.push(thongTinRap);
      //   console.log('QQQ',x);
      //   const arr = test.reduce((acc, test) => {
  

      //     const found = acc.find(i => i.tenCumRap === test.tenCumRap);
        
         
  
      //     if (found) {
      //       found.tenRap.push(test.tenRap);
      //     } else {
      //       acc.push({tenCumRap: test.tenCumRap, tenRap: [test.tenRap]}) 
      //     }
         
      //     return acc;  
      //   }, []);
      //   console.log(arr);
      return (
        <Grid key={index}>
          
          <Grid
            container
          >
            <Grid
              
              item
              sm={6}
              xs={12}
            >  
             
              <Typography
                className='title'
                component='h5'
                variant='h5'
              >
                {/* <CustomInforMovie item={thongTinRap} /> */} 
                {thongTinRap.tenCumRap}
              </Typography></Grid>
            <Grid
              
              item
              sm={6}
              style={{ display: 'flex' }}
              xs={6}

            >
              <Grid
             
                item
                sm={1} 
                xs={6}
                
              >  <Typography
                  className='title'
                  component='h5'
                  variant='h5'
                 >
                  {thongTinRap.tenRap}
                </Typography></Grid>
              <Grid
             
                item
                sm={5} 
                xs={12}
              >  <Typography
                  className='title'
                  component='h5'
                  variant='h5'
                 >
                  {ngayChieuGioChieu}
                </Typography></Grid>
            </Grid>
        
           
          </Grid>

        </Grid>
      )
    })
  }
  return (
    <Container>
      {renderCustomMovie()}
    </Container>
  )
}

export default CustomScheduleMovie


 