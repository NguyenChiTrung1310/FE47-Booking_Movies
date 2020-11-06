import React from 'react';
import Banner from '../../components/Carousel/Banners/Banner';
import SliderSlick from '../../components/Slider/Slider';
import DetailMovie from '../DetailMovie/DetailMovie';

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