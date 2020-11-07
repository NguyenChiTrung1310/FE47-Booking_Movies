import React from 'react';
import Banner from '../../components/Carousel/Banners/Banner';
import DetailMovie from '../../components/DetailMovie/DetailMovie';
import SliderSlick from '../../components/Slider/Slider'; 

import './HomePage';

const HomePage=()=>{
  return (
    <div className='home-page'>
      <div className='banner'>
        <Banner />
      </div>
      <SliderSlick/>
      <DetailMovie/>
    </div>
  )
}
export default HomePage;