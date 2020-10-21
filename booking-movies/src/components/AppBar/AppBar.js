import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { AppBar as App, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {CONTACT_PAGE, HOME_PAGE, LOGIN_PAGE, NEWS_PAGE, REGISTER_PAGE} from '../../constants/constant';

import {useStyles} from './useStyles';
import './AppBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearStoreAction } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';

const AppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userCredentials = useSelector(state => state.user.credentials)

  // handle logout
  const handleLogOutBtnClick = (e) => {
    e.preventDefault();

    const notify_success = () => {
      toast.success('Logout success');
    };

    dispatch(clearStoreAction(notify_success));
    history.push(HOME_PAGE);
  }
  return (
    <div>
      <App
        className={classes.app}
        position='static'
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            aria-label='menu'
            className={classes.menuButton}
            color='inherit'
            edge='start'
          >
            <span className={classes.brand}>Cinnema <span className={classes.plusIcon}><AddIcon fontSize='inherit'/></span></span>
          </IconButton>
          <Typography
            className={classes.menuLinks}
            variant='h6'
          >
            <div className={classes.links}>
              <Link
                className='link link-menu'
                to={HOME_PAGE}
              >Home</Link>
              <Link
                className='link link-menu'
                to={NEWS_PAGE}
              >News</Link>
              <Link
                className='link link-menu'
                to={CONTACT_PAGE}
              >Contact</Link>
            </div>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <span className={classes.userIcon}>
                <AccountCircleIcon
                  fontSize='large'
                  htmlColor='#fff'
                /></span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              id='simple-menu'
              keepMounted
              onClose={handleClose}
              open={Boolean(anchorEl)}
            >
              {
                userCredentials 
                  ? (<div>
                    <MenuItem onClick={handleClose}>
                      <Button
                        className='user logout link-user'
                        onClick={handleLogOutBtnClick}
                      >Logout</Button>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <Typography
                        className='user link-user'
                      >{userCredentials.hoTen}</Typography>
                    </MenuItem>
                  </div>
                  ) 
                  : (<div>
                    <MenuItem onClick={handleClose}>
                      <Link
                        className='link link-user'
                        to={LOGIN_PAGE}
                      >Login</Link></MenuItem>

                    <MenuItem onClick={handleClose}>
                      <Link
                        className='link link-user'
                        to={REGISTER_PAGE}
                      >Register</Link></MenuItem>
                  </div>
                  )
              }
            </Menu>
          </Typography>
        </Toolbar>
      </App>
    </div>
  )
}

AppBar.propTypes = {
  anchorEl: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool
}

export default AppBar


