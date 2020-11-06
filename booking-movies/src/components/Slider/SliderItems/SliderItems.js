/* eslint-disable no-unused-vars */
import React from 'react' 
import LoadingCool from './../../Spinner_Cool/SpinnerCool'
import { 
  Card,
  CardActionArea, 
  CardContent, 
  Typography,  
} from '@material-ui/core';  
import PropTypes from 'prop-types'; 
import './SliderItems.scss' 

const SliderItems=({item})=>{ 
  const {maPhim, tenPhim, hinhAnh} =  item;   
  const check_img=()=>{ 
      if(maPhim ===  3394 || maPhim === 4301 || maPhim === 4300 || maPhim === 4303
      ) {
          return LoadingCool();
        } else {
          return (
            <img
              alt='movie_Image'
              className='img'
              src={hinhAnh}
            />
          )
        } 
  }

  return(
    <Card className='imgCard' >
    <CardActionArea>
      {check_img()} 
      <CardContent className='cardBody'>
        <Typography gutterBottom variant="h5" component="h2" className='cardTitle'>
          {tenPhim}
        </Typography>
        <Typography variant="body2"   component="p" className='cardText'>
         {maPhim}
        </Typography>
      </CardContent>
    </CardActionArea> 
  </Card>
  )
} 
SliderItems.propTypes={
  tenPhim: PropTypes.string,
  moTa: PropTypes.string,
  hinhAnh: PropTypes.string,
}
export default SliderItems;  