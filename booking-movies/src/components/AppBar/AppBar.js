import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppBar as App, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {CONTACT_PAGE, HOME_PAGE, LOGIN_PAGE, NEWS_PAGE, REGISTER_PAGE} from '../../constants/constant';

import {useStyles} from './useStyles';
import './AppBar.scss';

const AppBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem onClick={handleClose}>
                <Link
                  className='link link-user'
                  color='inherit'
                  to={LOGIN_PAGE}
                >Login</Link></MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  className='link link-user'
                  color='inherit'
                  to={REGISTER_PAGE}
                >Register</Link></MenuItem>
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


