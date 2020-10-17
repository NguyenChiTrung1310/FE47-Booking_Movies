/* eslint-disable indent */
import React, { useState } from 'react';
import Slider from 'react-slick'; 
import {products} from '../../services/fakeApi'
import {Typography} from '@material-ui/core'
import {useStyles} from './useStyles'
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'
const SliderSlick=()=> {
  const classes= useStyles();
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const [settings, setSettings] = useState(config);
  return (
    <div className='slick'>
      <Typography
        className={classes.text}
        component='h2'
        variant='h4'
      >Now Showing</Typography>
      <Slider {...settings}>
        {products.map((item, i) => {
          const {img, title,text}=item;
          return <div 
            className='img-card'
            key={i}
                 >
            <img
              className='img'
              src={img}
            />
            <div className='card-body'>
              <div className='card-title'>{title}</div>
              <div className='card-text'>{text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}
SliderSlick.propTypes={
  img: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string, 
}
export default SliderSlick;
