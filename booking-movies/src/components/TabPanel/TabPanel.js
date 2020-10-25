import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import {useStyles} from './useStyles';
import './TabPanel.scss';

const TabPanel = (props) => {
  const classes = useStyles();
  const {handleChange, propsValue, tabProps = () => {}} = props;

  return (
    <div>
      <Tabs
        aria-label='Vertical tabs example'
        className={classes.tabs}
        onChange={handleChange}
        orientation='vertical'
        value={propsValue}
        variant='scrollable'
      >
        <Tab
          label='Item One'
          {...tabProps(0)}
        />
        <Tab
          label='Item Two'
          {...tabProps(1)}
        />
        <Tab
          label='Item Three'
          {...tabProps(2)}
        />
      </Tabs>
    </div>
  );
}

TabPanel.propTypes = {
  handleChange: PropTypes.func,
  propsValue: PropTypes.number,
  tabProps: PropTypes.func,
};

export default TabPanel;
