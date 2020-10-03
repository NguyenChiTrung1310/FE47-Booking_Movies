import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Typography } from '@material-ui/core'; 
import './RegisterPage.scss';
import { useStyles } from './../Register/useStyles';
import Button from './../../components/Button/Button'; 
const RegisterPage = () => {
  const classes = useStyles();

  const [account, setaccount] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `Account: ${account} Password:${password} Fullname:${fullname} Email: ${email} and password: ${password} Phone Number: ${phoneNumber}`
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
            onChange={evt => setaccount(evt.target.value)}
            required
            type='text'
            value={account}
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
            onChange={evt => setPassword(evt.target.value)}
            required
            type='password'
            value={password}
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
            onChange={evt => setFullname(evt.target.value)}
            required
            type='text'
            value={fullname}
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
            onChange={evt => setEmail(evt.target.value)}
            required
            type='text'
            value={email}
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
            onChange={evt => setphoneNumber(evt.target.value)}
            required
            type='text'
            value={phoneNumber}
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

