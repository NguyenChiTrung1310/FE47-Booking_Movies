import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { AppBar as App, Button, IconButton, Menu, MenuItem, Toolbar, Typography, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {ADMIN_PAGE, CONTACT_PAGE, HOME_PAGE, LOGIN_PAGE, NEWS_PAGE, PROFILE_PAGE, REGISTER_PAGE} from '../../constants/constant';

import {useStyles} from './useStyles';
import './AppBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearStoreAction } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';
import { inforUserAction } from '../../redux/actions/profileAction';

const StyledMenuItem = withStyles({
  root: {
    height: '50px',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
})(MenuItem);

const StyleButton = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover::after': {
      backgroundColor: 'transparent',
    },
  },
})(Button);

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

  const userCredentials = useSelector(state => state.user.credentials);
  const loginStatus = useSelector(state => state.user.loginStatus);
  
  // handle logout
  const handleLogOutBtnClick = (e) => {
    e.preventDefault();

    const notify_success = () => {
      toast.success('Logout success');
    };

    dispatch(clearStoreAction(notify_success));
    history.push(HOME_PAGE);
  }

  const handleProfileClick = () => {
    dispatch(inforUserAction(userCredentials));
  }

  useEffect(() => {
    if(loginStatus === true){
      dispatch(inforUserAction(userCredentials));
    }
  }, [userCredentials, dispatch, loginStatus]);

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
              >Cinema</Link>
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
                    <StyledMenuItem onClick={handleClose}>
                      <StyleButton
                        className='user logout link-user hover-btn'
                        onClick={handleLogOutBtnClick}
                      >Logout</StyleButton>
                    </StyledMenuItem>

                    <StyledMenuItem onClick={handleClose}>
                      <Link
                        className='user link-user hover-link'
                        // onClick={handleProfileClick}
                        to={PROFILE_PAGE}
                      >{userCredentials.hoTen}</Link>
                    </StyledMenuItem>
                    {
                      userCredentials.maLoaiNguoiDung === 'KhachHang' 
                        ? null
                        : (
                          <StyledMenuItem onClick={handleClose}>
                            <Link
                              className='user link-user hover-link'
                              onClick={handleProfileClick}
                              to={ADMIN_PAGE}
                            >Admin</Link>
                          </StyledMenuItem>
                        )
                    }
                  </div>
                  ) 
                  : (<div>
                    <StyledMenuItem onClick={handleClose}>
                      <Link
                        className='link link-user hover-link'
                        to={LOGIN_PAGE}
                      >Login</Link></StyledMenuItem>

                    <StyledMenuItem onClick={handleClose}>
                      <Link
                        className='link link-user hover-link'
                        to={REGISTER_PAGE}
                      >Register</Link></StyledMenuItem>
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
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
  handleLogOutBtnClick: PropTypes.func,
  handleProfileClick: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  userCredentials: PropTypes.object,
}

export default AppBar


