import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'; 
import { toast } from 'react-toastify';
import { Container, Grid, TextField, Typography } from '@material-ui/core'; 

import Button from '../../components/Button/Button'; 
import { REGISTER_PAGE } from './../../constants/constant'
import { handleLoginForm } from '../../utils/Validation/Validation';
import { useStyles } from './useStyles';
import './LoginPage.scss';

toast.configure();
const LoginPage = () => {
  const classes = useStyles();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    handleLoginForm(fields);
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
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.email}
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
          <Button type='submit'>Sign In</Button>
          <Grid container>
            <Grid item>
              <div className={classes.registerLink}>
                <p>
                  Don't have an account?
                  <Link
                    className={classes.link}
                    to = {REGISTER_PAGE}
                  >
                    Register
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

LoginPage.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func, 
  password: PropTypes.string 
};

export default LoginPage;
