import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { LOCAL_STORAGE_ORDER_CART_KEY, LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY , LOCAL_STORAGE_ORDER_CART_TICKET_INFO_KEY } from '../../constants/constant';
import { getDataFromLocalStorage } from '../../utils/LocalStorage/LocalStorage';

const OrderCartPage = () => {
  const orderCartStr = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_KEY)
  const orderCartMovieInfo = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY)
  const orderCartTicketInfo = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_TICKET_INFO_KEY)

  const orderCart = JSON.parse(orderCartStr);
  const ticketInformation = JSON.parse(orderCartTicketInfo);
  const movieInformation = JSON.parse(orderCartMovieInfo);

  const {maLichChieu} = orderCart;
  const {price} = ticketInformation;
  const {movie, theater, address, screeningRoom, date, time} = movieInformation;
  return (
    <div>
      {
        orderCart ? (
          <Grid>
            <Typography>
              {maLichChieu}
            </Typography>
            <Typography>
              {price}
            </Typography>
            <Typography>
              {movie}
            </Typography>
            <Typography>
              {theater}
            </Typography>
            <Typography>
              {date}
            </Typography>
            <Typography>
              {time}
            </Typography>
            <Typography>
              {address}
            </Typography>
            <Typography>
              {screeningRoom}
            </Typography>
          </Grid>
        ) : 'Hello'
      }
    </div>
  )
}

export default OrderCartPage
