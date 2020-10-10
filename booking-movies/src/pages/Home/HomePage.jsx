import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselBanner from '../../components/Carousel/Carousel';

import Banner from '../../assets/images/banner.jpg';
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';
import Banner4 from '../../assets/images/banner4.jpg';

const HomePage=()=>{
  const [carousel] = useState({
    autoPlay: true,
    timer: 500,
    animation: 'fade',
    indicators: true,
    interval: 4000
  })

  return (
    <div>
      <div className='carousel'>
        <Carousel
          animation={carousel.animation}
          autoPlay={carousel.autoPlay}
          className='carousel'
          indicators={carousel.indicators}
          interval={carousel.interval}
        >
          <CarouselBanner
            bannerImg={Banner}
            className='carousel-banner'
            description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
            name='Avenger'
          >
            By: david f. sandberg
          </CarouselBanner>
          <CarouselBanner
            bannerImg={Banner1}
            className='carousel-banner'
            description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
            name='Avenger'
          >
            By: david f. sandberg
          </CarouselBanner>
          <CarouselBanner
            bannerImg={Banner2}
            className='carousel-banner'
            description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
            name='Avenger'
          >
            By: david f. sandberg
          </CarouselBanner>
          <CarouselBanner
            bannerImg={Banner3}
            className='carousel-banner'
            description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
            name='Avenger'
          >
            By: david f. sandberg
          </CarouselBanner>
          <CarouselBanner
            bannerImg={Banner4}
            className='carousel-banner'
            description='a boy is given the ability to become an adult superhero in times of need with a single magic word.'
            name='Avenger'
          >
            By: david f. sandberg
          </CarouselBanner>
        </Carousel>
      </div>
    </div>
  )
}
export default HomePage;