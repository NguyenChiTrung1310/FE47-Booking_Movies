/* eslint-disable no-unused-vars */
import React, { Component } from 'react' 
import {
  Button,
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
  const {img, title, text} =  item;  
  return(
    <Card>
      <CardActionArea className='img-card'>
        <CardMedia
          img={img} 
          title='Movie'
        />
        <CardContent>
          <Typography
            component='h2'
            gutterBottom
            variant='h5'
          >{title}</Typography>
          <Typography
            color='textSecondary'
            component='p'
            variant='body2'
          >{text}</Typography>
        </CardContent>
      </CardActionArea> 
    </Card> 
 
  )
}
export default SliderItems;

// <div 
//   className='img-card'
// >
//   <img
//     alt='movie_Image'
//     className='img'
//     src={img}
//   />
//   <div className='card-body'>
//     <div className='card-title'>{title}</div>
//     <div className='card-text'>{text}</div>
//   </div>
// </div>
 
// <Card>
// <CardActionArea>
//   <CardMedia
//     img={img}
//     style={{ height: 50 }}
//     title='Movie'
//   />
//   <CardContent>
//     <Typography
//       component='h2'
//       gutterBottom
//       variant='h5'
//     >{title}</Typography>
//     <Typography
//       color='textSecondary'
//       component='p'
//       variant='body2'
//     >{text}</Typography>
//   </CardContent>
// </CardActionArea> 
// </Card> 