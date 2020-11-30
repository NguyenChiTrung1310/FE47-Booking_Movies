import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Divider, Grid } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGIN_PAGE, SCHEDULE_ID_LINK, TICKET_ROOM_PAGE } from '../../../constants/constant';
import PropTypes from 'prop-types';
import {createAction} from '../../../redux/actions';

 
const AlertDialog = ({tenRap, ngayChieuGioChieu, maLichChieu}) => {
  const [open, setOpen] = useState(false);
  const user = useSelector(state => state.user.credentials);

  const history = useHistory();
  const dispatch = useDispatch()

 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSignIn = () => {
    const link = `${TICKET_ROOM_PAGE}/${maLichChieu}`;

    if(!user){
      history.push(`${LOGIN_PAGE}`);
      dispatch(createAction(SCHEDULE_ID_LINK, link))

    }
    setOpen(false);
  }
 
  return (
    <Grid>
      <Button
        onClick={handleClickOpen}
      >
        <Grid className='cinema-name'>
          {tenRap}
        </Grid>
        <Divider className='devide'/>
        <Grid
          className='schedule-detail'
        >
          {ngayChieuGioChieu}
        </Grid>
      </Button>
      <Dialog
        aria-describedby='alert-dialog-description'
        aria-labelledby='alert-dialog-title'
        onClose={handleClose}
        open={open}
      >
        <DialogContent>
          <DialogContentText className='confirm-dialog'>
           You are not logged in !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className='btn-style'
            onClick={handleClose}
          >
           Cancel
          </Button>
          <Button
            autoFocus
            className='btn-style'
            onClick={handleClickSignIn}
          >
           Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
 
AlertDialog.propTypes = {
  maLichChieu: PropTypes.string,
  ngayChieuGioChieu: PropTypes.string,
  tenRap: PropTypes.string,
};

export default AlertDialog;

