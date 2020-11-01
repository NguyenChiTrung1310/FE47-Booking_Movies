import { Divider, Grid, ListItem, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';

import {useStyles} from './ueStyles';
import './CinemaItem.scss';

const CinemaItem = () => {
  const classes = useStyles();
  const branchList = useSelector(state => state.cinemaList.initialBranchCinemaList);
   
  return branchList.map((item,index) => {
    return branchList ? (
      <Grid
        className={classes.root}
        component={'span'}
        key={index}
      >
        <ListItem
          alignItems='flex-start'
          className={classes.inline}
          component={'span'}
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

export default CinemaItem
