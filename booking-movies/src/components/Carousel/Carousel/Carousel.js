/* eslint-disable react/sort-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Paper, Typography, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Carousel.scss';

const CarouselBanner = ({item}) => {
  const {
    tenPhim = 'NOT FOUND', 
    moTa= 'NOT FOUND', 
    ngayKhoiChieu= 'NOT FOUND',
    danhGia= 'NOT FOUND',
    hinhAnh= 'NOT FOUND',
  } = item;
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
          {tenPhim}
        </Typography>
        <Typography
          className='style description'
          component='h6'
          variant='h6'
        >
          {moTa}
        </Typography>
        <Typography
          className='style author'
          component='h4'
          variant='h4'
        >
          {ngayKhoiChieu}
        </Typography>
        <Typography
        className='style author'
        component='h4'
        variant='h4'
      >
        {danhGia}
      </Typography>
        <Button
          className='style detail-btn'
        >
          <span>Detail</span>
        </Button>
      </div>
      <div className='overload' />
      <CardMedia
        alt=''
        className='bannerImg'
        src={hinhAnh}
      />
    </Paper>
  )
}

CarouselBanner.propTypes = {
  tenPhim: PropTypes.string,
  danhGia: PropTypes.string,
  hinhAnh: PropTypes.string,
  ngayKhoiChieu: PropTypes.string,
  moTa: PropTypes.string,
};

export default CarouselBanner;


 