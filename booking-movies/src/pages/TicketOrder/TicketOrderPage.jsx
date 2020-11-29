import React from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core'
import ErrorPage from '../Error/ErrorPage';

const TicketOrderPage = () => {
  const ticketOrder = useSelector(state => state.ticketRoom.initialBooking);

  const {data, config, status} = ticketOrder;

//   const orderInfo = JSON.parse(config.data);
//   console.log('order: ', orderInfo)

  return (
    <Grid>
      {
        status ? (
          <Typography>
            {data}
          </Typography>
        ) : 
          <Route
            component={ErrorPage}
          />
      }
    </Grid>
  )
}

export default TicketOrderPage
