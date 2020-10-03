/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Typography } from '@material-ui/core'; 
import './RegisterPage.scss';
import { useStyles } from './../Register/useStyles';
import Button from './../../components/Button/Button'; 
const RegisterPage = (props) => {
  const classes = useStyles();
  const { account='NOT-FOUND',  password='NOT-FOUND',  fullname='NOT-FOUND',  email='NOT-FOUND',  phoneNumber='NOT-FOUND'} = props;
  const [fields, setFields]= useState({
    account: '',
    password: '',
    fullname:'',
    email:'',
    phoneNumber:'',
  })

  
  const handleChange= e=>{
    setFields({
      ...fields,
      [e.target.name]:e.target.value
    })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Account: ${fields.account} Password:${fields.password} Fullname:${fields.fullname} Email: ${fields.email} Phone Number: ${fields.phoneNumber}`
    );
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
            onChange={event=>handleChange(event)}
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
            onChange={event=>handleChange(event)}
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
            onChange={event=>handleChange(event)}
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
            onChange={event=>handleChange(event)}
            required
            type='text'
            value={fields.email}
            variant='outlined'
          />
          <TextField
            autoComplete='phomeNumber' 
            className={classes.field}
            fullWidth
            id='phoneNumber'
            label='Phone Number'
            margin='normal'
            name='phoneNumber'
            onChange={event=>handleChange(event)}
            required
            type='text' 
            value={fields.phoneNumber}
            variant='outlined'
          />
          <Button
            color='primary'
            type='submit'
            variant='contained'
          >
            Create Account
          </Button>
        </form>
      </div>
    </Container>
  );
};

RegisterPage.propTypes = {
  onChange: PropTypes.func,
};

export default RegisterPage ;

