/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Typography, Grid } from '@material-ui/core';
import './RegisterPage.scss';
import { useStyles } from './../Register/useStyles';
import Button from './../../components/Button/Button';
import {
  handleRegisterForm, 
} from '../../utils/Validation/Validation';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import { LOGIN_PAGE } from './../../constants/constant'
toast.configure()
const RegisterPage = () => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    account: '',
    password: '',
    fullname: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegisterForm(fields); 
  };
  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <div className={classes.paper}>
        <Typography
          className='title'
          component='h3'
          variant='h3'
        >
          Register
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            autoComplete='account'
            autoFocus
            className={classes.field}
            fullWidth
            id='account'
            label='Account'
            margin='normal'
            name='account'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.account}
            variant='outlined'
          />
          <TextField
            autoComplete='password'
            className={classes.field}
            fullWidth
            id='password'
            label='Password'
            margin='normal'
            name='password'
            onChange={(event) => handleChange(event)}
            required
            type='password'
            value={fields.password}
            variant='outlined'
          />
          <TextField
            autoComplete='fullname'
            className={classes.field}
            fullWidth
            id='fullname'
            label='Fullname'
            margin='normal'
            name='fullname'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.fullname}
            variant='outlined'
          />
          <TextField
            autoComplete='email'
            className={classes.field}
            fullWidth
            id='email'
            label='Email'
            margin='normal'
            name='email'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.email}
            variant='outlined'
          />
          <TextField
            autoComplete='phomeNumber'
            className={classes.field}
            fullWidth
            id='phone'
            label='Phone Number'
            margin='normal'
            name='phone'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.phone}
            variant='outlined'
          />
          <Button
            color='primary'
            type='submit'
            variant='contained'
          >
            Create Account
          </Button>
          <Grid container>
            <Grid item>
              <div className={classes.loginLink}>
                <p>
            Have an account?
                  <Link
                    className={classes.link}
                    to = {LOGIN_PAGE}
                  >
              Login
                  </Link>
                </p>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

RegisterPage.propTypes = {
  onChange: PropTypes.func, 
  onSubmit: PropTypes.func,
  // eslint-disable-next-line react/sort-prop-types
  fields: PropTypes.shape({
    account: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
  })
};

export default RegisterPage;