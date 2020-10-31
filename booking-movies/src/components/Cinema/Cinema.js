import React, { useState } from 'react'
import { Container, Grid, Tab } from '@material-ui/core';
import cinemaBannerImg from '../../assets/images/cinema-banner.jpg'
// import CGV from '../../assets/images/logo-admin.png';

// import { Link } from 'react-router-dom';

import './Cinema.scss';
// import { CONTACT_PAGE, HOME_PAGE, LOGIN_PAGE } from '../../constants/constant';
import TabPanel from '../TabPanel/TabPanel';
import { TabItem } from '../TabPanel/TabItem/TabItem';

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Cinema = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e,newValue) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <Container
      className='container'
      maxWidth='lg'
    >
      <Grid className='banner'>
        <img
          className='img-banner'
          src={cinemaBannerImg}
        />

        <div className='img-item'>
          {/* <Link
            to={HOME_PAGE}
          >
            <img
              className='img-cine'
              src={CGV}
            />
          </Link>

          <Link
            to={CONTACT_PAGE}
          >
            <img
              className='img-cine'
              src={CGV}
            />
          </Link>

          <Link
            to={LOGIN_PAGE}
          >
            <img
              className='img-cine'
              src={CGV}
            />
          </Link> */}

          <TabPanel
            handleChange={handleChange}
            orientation='horizontal'
            propsValue={value}
          >
            <Tab
              className='tab'
              label='Item One'
              {...a11yProps(0)}
            />
            <Tab
              className='tab'
              label='Item Two'
              {...a11yProps(1)}
            />
            <Tab
              className='tab'
              label='Item Three'
              {...a11yProps(2)}
            />
          </TabPanel>
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
    </Container>
  )
}

export default Cinema
