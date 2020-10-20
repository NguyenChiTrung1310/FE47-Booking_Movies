import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import {useStyles} from './useStyles';
import './Spinner.scss';

const LoadingSpinner = (props) => {
  const classes = useStyles();
  // const {isLoading} = props;

  return (
    <div className={classes.root}>
      <CircularProgress 
        className='spinner'
        // loading = {isLoading}
      />
    </div>
  );
}

LoadingSpinner.propTypes={
  isLoading: PropTypes.bool,
}

export default LoadingSpinner;
