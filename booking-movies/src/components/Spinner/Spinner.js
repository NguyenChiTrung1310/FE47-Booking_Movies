import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import {useStyles} from './useStyles';
import './Spinner.scss';

const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress 
        className='spinner'
      />
    </div>
  );
}

LoadingSpinner.propTypes={
  isLoading: PropTypes.bool,
}

export default LoadingSpinner;
