/* eslint-disable react/sort-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Carousel.scss';

const CarouselBanner = (props) => {
  const {
    name = 'Harry Potter', 
    description='a boy is given the ability to become an adult superhero in times of need with a single magic word', 
    children='By: david f. sandberg',
    bannerImg='../../../public/images/banner2.jpg'
  } = props;
  return (
    <Paper
      className='banner'
      elevation={10}
    >
      <div className='titles'>
        <Typography 
          className='style name'
          component='h3'
          variant='h3'
        >
          {name}
        </Typography>
        <Typography
          className='style description'
          component='h6'
          variant='h6'
        >
          {description}
        </Typography>
        <Typography
          className='style author'
          component='h4'
          variant='h4'
        >
          {children}
        </Typography>
        <Button
          className='style detail-btn'
        >
          <span>Detail</span>
        </Button>
      </div>
      <div className='overload' />
      <img
        alt=''
        className='bannerImg'
        src={bannerImg}
      />
    </Paper>
  )
}

CarouselBanner.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  bannerImg: PropTypes.string,
  description: PropTypes.string,
};

export default CarouselBanner;


