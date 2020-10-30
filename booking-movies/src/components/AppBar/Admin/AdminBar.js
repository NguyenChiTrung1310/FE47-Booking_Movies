import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './useStyles';

import {
  Drawer, 
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button,
  Menu,
  MenuItem,
  withStyles,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { toast } from 'react-toastify';

import {TabItem} from '../../TabPanel/TabItem/TabItem';
import TabPanel from '../../TabPanel/TabPanel';

import './AdminBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearStoreAction } from '../../../redux/actions/userAction';
import { HOME_PAGE, PROFILE_PAGE } from '../../../constants/constant';
import { Link, useHistory } from 'react-router-dom';

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const StyledMenuItem = withStyles({
  root: {
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

const AdminBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();


  const userCredentials = useSelector(state => {
    return state.user.credentials;
  });


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e,newValue) => {
    e.preventDefault();
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOutBtnClick = (e) => {
    e.preventDefault();

    const notify_success = () => {
      toast.success('Logout success');
    };

    dispatch(clearStoreAction(notify_success));
    history.push(HOME_PAGE);
  }

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        position='fixed'
      >
        <Toolbar className='toolbar'>
          <div className='left-toolbar'>
            <IconButton
              aria-label='open drawer'
              className={clsx(classes.menuButton, open && classes.hide)}
              color='inherit'
              edge='start'
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              noWrap
              variant='h6'
            >
            Dashboard admin
            </Typography>
          </div>
          {
            userCredentials
              ? (
                <div className='right-toolbar'>
                  <Typography
                    noWrap
                    variant='h6'
                  >
                  Hello {userCredentials.hoTen}
                  </Typography>
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
                    // className={classes.menu}
                    id='simple-menu'
                    keepMounted
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                  >
                    <StyledMenuItem onClick={handleClose}>
                      <Link
                        className='user link-user hover-link'
                        to={PROFILE_PAGE}
                      >Update Info</Link></StyledMenuItem>
    
                    <StyledMenuItem onClick={handleClose}>
                      <StyleButton
                        className='user logout link-user hover-btn'
                        onClick={handleLogOutBtnClick}
                      >Logout</StyleButton>  
                    </StyledMenuItem>
                  </Menu>
                </div>
              )
              : null
          }
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={open}
        variant='persistent'
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.drawerArrow}/> : <ChevronRightIcon className={classes.drawerArrow}/>}
          </IconButton>
        </div>
        <Divider className={classes.divider}/>
        <TabPanel
          handleChange={handleChange}
          propsValue={value}
          tabProps={a11yProps}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
        <TabItem
          index={0}
          value={value}
        >
          Item ONE
        </TabItem>
        <TabItem
          index={1}
          value={value}
        >
          Item TWO
        </TabItem>
        <TabItem
          index={2}
          value={value}
        >
          Item THREE
        </TabItem>
      </main>
    </div>
  )
}

export default AdminBar