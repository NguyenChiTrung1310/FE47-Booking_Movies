import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import Slider from 'react-slick'; 
import {Typography} from '@material-ui/core'
import {products} from '../../services/fakeApi' 
import SliderItems from './SliderItems/SliderItems';
import {useStyles} from './useStyles'
import PropTypes from 'prop-types'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import Axios from 'axios';
const SliderSlick=()=> {
  const classes= useStyles();
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const [settings] = useState(config);

  const renderSilerList=()=>{
    return products.map((item, index)=>{
      return (
        <SliderItems
          item= {item}
          key={index}
        />
      )
    })
  }

  return (
    <div className='slick'>
      <Typography
        className={classes.text}
        component='h2'
        variant='h4'
      >Now Showing</Typography>
      <Slider {...settings}>
        {
          renderSilerList()
        } 
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
