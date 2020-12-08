import React from 'react'

const SearchItem = ({ item }) => {
  const { tenPhim, hinhAnh  } = item;
  return (
    <div className='card p-2'>
      <img
        alt='img'
        src={hinhAnh}
        style={{ width: '300px', height: '300px' }}
      />
      <p className='lead font-weight-bold'>{tenPhim}</p> 
    </div>
  );
};
  
export default SearchItem;
