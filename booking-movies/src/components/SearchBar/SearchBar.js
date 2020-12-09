import React, { useState, useEffect } from 'react';
// import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './useStyles';
import './SearchBar.scss';


const SearchBar = ({ movieList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState({
    value: '',
  })


  return (
    <Autocomplete
      className={classes.search}
      disableClearable
      freeSolo
      id='search-bar'
      options={movieList.map((movie) => movie.tenPhim)}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
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
