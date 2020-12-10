import React, { useState } from 'react';
// import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useStyles } from './useStyles';
import './SearchBar.scss';


const SearchBar = ({ movieList }) => {
  const classes = useStyles();
  const history = useHistory();

  const nameMovie = movieList.map((item) => item.tenPhim);
  console.log("Name Movie List", nameMovie);

  const [value, setValue] = useState(nameMovie[0]);
  //handle submit
  const handleSubmitSearch = (newValue) => {
    history.push('/searchMovie/' + newValue)
  }
  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
        handleSubmitSearch(newValue)
      }}
      className={classes.search}
      disableClearable
      freeSolo
      id='search-bar'
      options={movieList.map((movie) => movie.tenPhim)}
      renderInput={(params) => (
        <TextField
          className={classes.textField}
          {...params}
          InputProps={{ ...params.InputProps, type: 'search' }}
          label='Search movie...'
          margin='normal'
          variant='outlined'
        />
      )}
    />
  )
}

SearchBar.propTypes = {
  movieList: PropTypes.array,
}


export default SearchBar
