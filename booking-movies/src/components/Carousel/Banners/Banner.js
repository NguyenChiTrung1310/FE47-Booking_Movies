import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import Carousel from 'react-material-ui-carousel';
import CarouselBanner from '../Carousel/Carousel';
import {useDispatch, useSelector} from 'react-redux';
import Banner_img from '../../../assets/images/banner.jpg';
import Banner1_img from '../../../assets/images/banner1.jpg';
import Banner2_img from '../../../assets/images/banner2.jpg';
import Banner3_img from '../../../assets/images/banner3.jpg';
import Banner4_img from '../../../assets/images/banner4.jpg';
import { fetchMovieList } from '../../../redux/actions/movieListAction';

const Banner = () => {
  const [carousel] = useState({
    autoPlay: true,
    timer: 500,
    animation: 'fade',
    indicators: true,
    interval: 4000
  })
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchMovieList());
  },[dispatch]);
  
  const movieList = useSelector((state) => {
    return state.movieList.initialMovieList;
  });

  const renderSilerList=()=>{
    return movieList.map((item, index)=>{
      return (
        <CarouselBanner
          item= {item}
          key={index}
        />
      )
    })
  }
  
  return (
    <div className='carousel'>
      <Carousel
        animation={carousel.animation}
        autoPlay={carousel.autoPlay}
        className='carousel'
        indicators={carousel.indicators}
        interval={carousel.interval}
      > 
      {
      renderSilerList()
      } 
      </Carousel>
    </div>
  )
}

Banner.propTypes = {
  carousel: PropTypes.object,  
}

export default Banner
