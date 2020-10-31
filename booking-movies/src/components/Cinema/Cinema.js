import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core';

import cinemaBannerImg from '../../assets/images/cinema-banner.jpg'

import './Cinema.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cinemaListAction } from '../../redux/actions/cinemaListAction';
import CinemaItems from './CinemaItems/CinemaItems';



const Cinema = () => {
  const dispatch = useDispatch();

  const cinemaList = useSelector(state => state.cinemaList.initialCinemaList);

  const renderCinemaList = () => {
    return cinemaList.map((item, index) => {
      return (
        <CinemaItems
          item={item}
          key={index}
        />
      )
    });
  }


  useEffect(() => {
    dispatch(cinemaListAction());
  }, [dispatch])

  return (
    <Container
      className='container'
      maxWidth='lg'
    >
      <Grid className='banner'>
        <img
          alt='cinema-banner'
          className='img-banner'
          src={cinemaBannerImg}
        />
        <div
          className='img-item'
        >
          {
            renderCinemaList()
          }
        </div>
      </Grid>
    </Container>
  )
}

export default Cinema
