import React from 'react'
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia
} from '@material-ui/core';
const SearchItem = ({ item }) => {
  const { tenPhim, hinhAnh } = item;
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          alt='movie_Image1'
          className='img1'
          image={hinhAnh}
          style={{ width: '200px', height: '300px' }}
        />
        <Typography
          className='card-title1'
          component='h2'
          gutterBottom
          variant='h5'
          style={{ color: '#ffffff' }}
        >
          {tenPhim}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default SearchItem;
