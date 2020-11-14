/* eslint-disable no-unused-vars */
import React, { Component } from 'react' 
import LoadingCool from './../../Spinner_Cool/SpinnerCool'
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from '@material-ui/core'; 
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
    <div className='imgCard' > 
      { check_img()} 
      <div className='cardBody'>
        <div className='cardTitle'>
          {tenPhim}</div>
        <div className='cardText'>{maPhim}</div>
      </div>
    </div>
  )
}
export default SliderItems; 
 
 