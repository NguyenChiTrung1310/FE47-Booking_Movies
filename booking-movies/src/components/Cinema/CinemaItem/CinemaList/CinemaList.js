import React from 'react'
import { Divider, Grid, ListItem, Typography } from '@material-ui/core';
import {useStyles} from './ueStyles';


const CinemaList = ({theaterSchedule = []}) => {
  const classes = useStyles();
  return theaterSchedule.map((item,index) => {

    const handleClick = () => {
    //   showListMovie();
    }
    
    return theaterSchedule ? (
      <Grid
        className={classes.root}
        component={'span'}
        key={index}
      >
        <ListItem
          alignItems='flex-start'
          className={classes.inline}
          component={'span'}
          onClick={handleClick}
        > 
          <Typography
            className={classes.nameTheater}
            color='textPrimary'
            component={'span'}
            variant='body2'
          >
            {item.tenCumRap}
          </Typography>
          <Typography
            className={classes.address}
            color='textPrimary'
            component={'span'}
            variant='body2'
          >
            {item.diaChi}
          </Typography>
          <Divider
            className={classes.divider}
            component={'span'}
          />   
        </ListItem>
      </Grid>
    ) : (<Typography key={index}>NOT FOUND</Typography>)
  });
}

export default CinemaList
