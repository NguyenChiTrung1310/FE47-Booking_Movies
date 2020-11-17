import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import LoadingCool from '../../../components/Spinner_Cool/SpinnerCool'

const SeatList = () => {
  const seatList = useSelector(state => state.ticketRoom.initialSeatList)
  console.log('SEAT: ', seatList);

  const renderSeats = () => {
    return seatList.map((item, index) => {
      const {tenGhe} = item;
      return (
        <Grid key={index}>
          {tenGhe}
        </Grid>
      )
    })
  }
  
  return (
    <Container className='seat-section'>
      {
        seatList ? renderSeats() : <LoadingCool />
      }
    </Container>
  )
}

export default SeatList
