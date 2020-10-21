import React from 'react';
import PropTypes from 'prop-types';
import './SpinnerCool.scss';

const LoadingCool = () => {
  return (
    <div className='loader'>Loading...</div>
  );
}

LoadingCool.propTypes={
  isLoading: PropTypes.bool,
}

export default LoadingCool;
