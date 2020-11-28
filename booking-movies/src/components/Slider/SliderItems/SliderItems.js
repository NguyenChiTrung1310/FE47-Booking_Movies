import React from 'react' 
import LoadingCool from './../../Spinner_Cool/SpinnerCool'
import PropTypes from 'prop-types'; 

import { 
  Card,
  CardActionArea, 
  CardContent, 
  Typography,  
  CardMedia
} from '@material-ui/core';  

import './SliderItems.scss' 

const SliderItems=({item})=>{ 
  const {maPhim, tenPhim, hinhAnh} =  item;   

  return(
    <Card className='imgCard' >
      <CardActionArea>      
        <CardContent className='cardBody'>
          {
            hinhAnh ? (
              <CardMedia
                alt='movie_Image'
                className='img'
                image={hinhAnh}
              />
            ) : <LoadingCool/>
          }  
          <Typography
            className='cardTitle'
            component='h2'
            gutterBottom
            variant='h5'
          >
            {tenPhim}
          </Typography>
          <Typography
            className='cardText'
            component='p'
            variant='body2'
          >
            {maPhim}
          </Typography>
        </CardContent>
      </CardActionArea>     
    </Card>
  )
} 

SliderItems.propTypes={
  hinhAnh: PropTypes.string,
  item: PropTypes.object,
  moTa: PropTypes.string,
  tenPhim: PropTypes.string,
}

export default SliderItems;  

