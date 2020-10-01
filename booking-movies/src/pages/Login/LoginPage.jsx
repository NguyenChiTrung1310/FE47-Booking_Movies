import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, TextField, Typography } from '@material-ui/core';

import './LoginPage.scss';
import { useStyles } from './useStyles';
import Button from '../../components/Button/Button';

const LoginPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    const email_value = e.target.value;
    setEmail(email_value);
  };

  const handleChangePassword = (e) => {
    const password_value = e.target.value;
    setPassword(password_value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email} and password: ${password}`);
  };
  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <div className={classes.paper}>
        <Typography
          className='title'
          component='h1'
          variant='h3'
        >
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            autoComplete='email'
            autoFocus
            className={classes.field}
            fullWidth
            id='email'
            label='Username'
            margin='normal'
            name='email'
            onChange={handleChangeEmail}
            required
            type='text'
            value={email}
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
            onChange={handleChangePassword}
            required
            type='password'
            value={password}
            variant='outlined'
          />
          <Button type='submit'>Sign In</Button>
          <Grid container>
            <Grid item>
              <div className={classes.registerLink}>
                <p>
                  Don't have an account?
                  <a
                    className={classes.link}
                    href='#register'
                  >
                    Register
                  </a>
                </p>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

LoginPage.propTypes = {
  onChange: PropTypes.func,
};

export default LoginPage;
