import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import Carousel from 'react-material-ui-carousel';
import CarouselBanner from '../Carousel/Carousel';

import Banner_img from '../../../assets/images/banner.jpg';
import Banner1_img from '../../../assets/images/banner1.jpg';
import Banner2_img from '../../../assets/images/banner2.jpg';
import Banner3_img from '../../../assets/images/banner3.jpg';
import Banner4_img from '../../../assets/images/banner4.jpg';

const Banner = () => {
  const [carousel] = useState({
    autoPlay: true,
    timer: 500,
    animation: 'fade',
    indicators: true,
    interval: 4000
  })

  return (
    <div className='carousel'>
      <Carousel
        animation={carousel.animation}
        autoPlay={carousel.autoPlay}
        className='carousel'
        indicators={carousel.indicators}
        interval={carousel.interval}
      >
        <CarouselBanner
          bannerImg={Banner_img}
          className='carousel-banner'
          description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
          name='Avenger'
        >
            By: david f. sandberg
        </CarouselBanner>
        <CarouselBanner
          bannerImg={Banner1_img}
          className='carousel-banner'
          description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
          name='Avenger'
        >
            By: david f. sandberg
        </CarouselBanner>
        <CarouselBanner
          bannerImg={Banner2_img}
          className='carousel-banner'
          description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
          name='Avenger'
        >
            By: david f. sandberg
        </CarouselBanner>
        <CarouselBanner
          bannerImg={Banner3_img}
          className='carousel-banner'
          description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
          name='Avenger'
        >
            By: david f. sandberg
        </CarouselBanner>
        <CarouselBanner
          bannerImg={Banner4_img}
          className='carousel-banner'
          description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
          name='Avenger'
        >
            By: david f. sandberg
        </CarouselBanner>
      </Carousel>
    </div>
  )
}

Banner.propTypes = {
  carousel: PropTypes.object,  
}

export default Banner
