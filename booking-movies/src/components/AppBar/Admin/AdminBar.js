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
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {TabItem} from '../../TabPanel/TabItem/TabItem';
import TabPanel from '../../TabPanel/TabPanel';

import './AdminBar.scss';

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const AdminBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

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

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        position='fixed'
      >
        <Toolbar>
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