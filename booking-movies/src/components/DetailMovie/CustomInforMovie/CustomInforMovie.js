import React   from 'react';   
import { Container  , Typography, Grid  } from '@material-ui/core'
const CustomInforMovie = ({item}) => {
  const {
    tenCumRap, 
    tenRap,
    // maRap, 
    // maCumRap, 
    // maHeThongRap, 
    // tenHeThongRap
  } =item; 
  return (
    <Container>
 
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
            {tenCumRap}
          </Typography>
        </Grid>
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
            {tenRap}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CustomInforMovie
