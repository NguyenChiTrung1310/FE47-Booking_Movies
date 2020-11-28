import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import './CheckoutBtn.scss';
import { useSelector } from 'react-redux';

const CheckoutBtn = () => {
  const [open, setOpen] = useState(false);
  const orderInformation = useSelector(state => state.ticketRoom.initialTicketInfo);
  const {price} = orderInformation;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckout = () => {
    if(price !== 0){
      console.log('CHECKOUT')
      console.log('PRICE: ', price)
    }else{
      console.log('PLEASE SELECT YOUR SEAT !')
      console.log('PRICE: ', price)
    }
  }

  return (
    <div>
      <Button
        className='checkout-btn style'
        onClick={handleClickOpen}
        variant='outlined'
      >
        Checkout
      </Button>
      <Dialog
        aria-describedby='alert-dialog-description'
        aria-labelledby='alert-dialog-title'
        onClose={handleClose}
        open={open}
      >
        <DialogContent>
          <DialogContentText className='confirm-dialog'>
            Confirm your order?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className='btn-style'
            onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
            autoFocus
            className='btn-style'
            onClick={handleCheckout}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CheckoutBtn;
