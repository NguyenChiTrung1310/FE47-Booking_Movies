import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTicketRoomsAction } from '../../redux/actions/bookingAction';
import { CardMedia, Container, Grid, Typography } from '@material-ui/core';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { createAction } from '../../redux/actions';
import { CLEAR_DETAIL_MOVIE, SEAT_LIST } from '../../constants/constant';
import SeatList from './SeatList/SeatList';


const TicketRoomPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketRoomsAction(props.match.params.maLichChieu));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props])

  const ticketRoom = useSelector(state => state.ticketRoom.initialTicketRoom);
  const{thongTinPhim, danhSachGhe} = ticketRoom;

  useEffect(() => {
    dispatch(createAction(SEAT_LIST ,danhSachGhe));
  }, [dispatch, danhSachGhe])

  return (
    <Container className='movie-schedule-page'>
      {
        ticketRoom ? (
          <Grid>
            {
              thongTinPhim ? (
                <Grid>
                  <Grid className='movie-detail'>
                    <Grid className='movie-trailer'>
                      {
                        thongTinPhim.hinhAnh ?  
                          <CardMedia
                            className='movie-img'
                            image={thongTinPhim.hinhAnh}
                          />
                          : <LoadingCool />
                      }         
                    </Grid>
                    {
                      thongTinPhim.tenPhim ? (
                        <Grid className='movie-info'>
                          <Grid>                 
                            <Typography 
                              component={'h1'}
                              style={{fontWeight: '400', color: '#03a9f4'}}
                              variant='h2'
                            >
                              {thongTinPhim.tenPhim}
                            </Typography>               
                          </Grid>

                          <Grid>                 
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                  Theater:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px'}}
                                variant='h6'
                              >
                                {thongTinPhim.tenCumRap}
                              </Typography>
                            </Typography>                  
                          </Grid>

                          <Grid>                 
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                      Address:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px'}}
                                variant='h6'
                              >
                                {thongTinPhim.diaChi}
                              </Typography>
                            </Typography>         
                          </Grid>

                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                      Screening room:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.tenRap}
                              </Typography>
                            </Typography>                  
                          </Grid>        
                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                      Date:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.ngayChieu}
                              </Typography>
                            </Typography>                  
                          </Grid>   
                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                      Time start:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.gioChieu}
                              </Typography>
                            </Typography>                  
                          </Grid>                  
                        </Grid> 
                      ) : null
                    }   
                  </Grid> 
                  <Grid className='schedule-by-theater'>
                    {
                      danhSachGhe ? <SeatList />
                        : <LoadingCool />
                    }
              
                  </Grid>
                </Grid>
              ) : <LoadingCool />
            }
                
          </Grid>
        ) : <LoadingCool />
      }
    </Container>
  )
}

TicketRoomPage.propTypes={
  match: PropTypes.object,
  params: PropTypes.object,
}

export default TicketRoomPage
