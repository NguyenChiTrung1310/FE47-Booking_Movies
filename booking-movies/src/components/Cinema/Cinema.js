import React, { useEffect, useState } from 'react'
import { CardMedia, Container, Grid, Tab } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { cinemaListAction } from '../../redux/actions/cinemaListAction';

import TabPanel from '../TabPanel/TabPanel';
import { TabItem } from '../TabPanel/TabItem/TabItem';

import cinemaBannerImg from '../../assets/images/cinema-banner.jpg'
import './Cinema.scss';

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const imgCinema = (img) => {
  return (
    <CardMedia 
      alt='cinema'
      className='cinema-item'
      image={img}
    />
  )
}

////////////////////////////////////////////////////////////////////

const Cinema = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cinemaList = useSelector(state => state.cinemaList.initialCinemaList);

  const renderTab = (index, key) => {
    return cinemaList
      ? (
        <Tab
          className='tab'
          label={imgCinema(cinemaList[index].logo)}
          {...a11yProps(index)}
          key={key}
        />
      ) : (
        <Tab
          className='tab'
          label={cinemaList[index].tenHeThongRap}
          {...a11yProps(index)}
          key={key}
        />
      )
  }


  const mapTab = () => {
    return cinemaList.map((item, index) => {
      return renderTab(index, index);
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
        <div className='tabs'>
          {
            cinemaList ? (
              <TabPanel
                handleChange={handleChange}
                orientation='horizontal'
                propsValue={value}
              >
                {
                  mapTab()
                }
              </TabPanel>
            ) : null
          }
          
        </div>
      </Grid>
      <TabItem
        index={0}
        value={value}
      >
        Item ONE
      </TabItem>
      <TabItem
        index={1}
        value={value}
      >
        Item TWO
      </TabItem>
      <TabItem
        index={2}
        value={value}
      >
        Item THREE
      </TabItem>
      <TabItem
        index={3}
        value={value}
      >
        Item FOUR
      </TabItem>
      <TabItem
        index={4}
        value={value}
      >
        Item FIVE
      </TabItem>
      <TabItem
        index={5}
        value={value}
      >
        Item SIX
      </TabItem>
    </Container>
  )
}

export default Cinema
