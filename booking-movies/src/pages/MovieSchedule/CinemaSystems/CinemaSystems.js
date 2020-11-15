import React from 'react'
import PropTypes from 'prop-types';


const CinemaSystems = ({heThongRapChieu}) => {

  const renderCinema = () => {
    heThongRapChieu.map((item, index) => {
      console.log('CINEMAS: ', item);

    });
  }
  return (
    <div>
      {
        renderCinema()
      }
    </div>
  )
}

CinemaSystems.propTypes = {
  heThongRapChieu: PropTypes.array,
};
  

export default CinemaSystems
