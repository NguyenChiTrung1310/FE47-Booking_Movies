import React from 'react'
import PropTypes from 'prop-types'; 

import './CinemaItems.scss';


const CinemaItems = ({item}) => {
  const {logo, tenHeThongRap} = item;

  console.log('ITEM: ', item);

  const cinemaImg = () => {
    return (
      <img 
        alt='cinema'
        className='cinema-item'
        src={logo}
      />
    )
  }

  return (
    <div>
      <h1>{tenHeThongRap}</h1>
      {cinemaImg()}
    </div>
  )
}


CinemaItems.propTypes = {
  item: PropTypes.object,
  logo: PropTypes.string,  
  tenHeThongRap: PropTypes.string
}

export default CinemaItems
