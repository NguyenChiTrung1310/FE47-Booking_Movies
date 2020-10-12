import React from 'react';
import Banner from '../../components/Carousel/Banners/Banner';
import SliderComponent from '../../components/Slider/Slider';

import './HomePage';

const HomePage=()=>{
  return (
    <div className='home-page'>
      <div className='banner'>
        <Banner />
        <SliderComponent/>
      </div>
    </div>
  )
}
export default HomePage;