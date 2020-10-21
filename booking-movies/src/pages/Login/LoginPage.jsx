import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'; 
import { toast } from 'react-toastify';
import { Container, Grid, TextField, Typography } from '@material-ui/core'; 

import Button from '../../components/Button/Button'; 
import { NEWS_PAGE, REGISTER_PAGE } from './../../constants/constant'
import { handleLoginForm } from '../../utils/Validation/Validation';
import { useStyles } from './useStyles';
import './LoginPage.scss';
import { loginAction } from '../../redux/actions/userAction';

import { isEmpty } from 'lodash';

const LoginPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  /* START ______GET DATA FROM REDUCER______ */
  
  // (1) get loginStatus from reducer using useSelector
  const loginStatus = useSelector(state => {
    return state.user.loginStatus;
  });

  // (2) then create a function to return that loginStatus which is get in (1)
  const checkLoginSuccess = () => {
    return loginStatus;
  }

  // (3) store value's checkLoginSuccess to a variable
  const check = checkLoginSuccess();
  /* END ________________________________________ */

  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {taiKhoan, matKhau} = fields;
  
    // handle validation form
    const error = handleLoginForm(fields);
    
    if (!isEmpty(error)) {
      toast.warn('Please input valid email and password');
      return;
    }

    const notify_success = () => {
      toast.success('Login success');
    };
    
    const notify_failed = () => {
      toast.error('Email or password is incorrect !');
    }

    if(error === 1){
      // dispatch action
      dispatch(
        loginAction(taiKhoan.trim(), matKhau.trim(), notify_success, notify_failed)
      );    
    } 
  }

  useEffect(() => {
    if(check === true){
      history.push(NEWS_PAGE);
    }
  }, [loginStatus, history, check]);


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
            autoComplete='taiKhoan'
            autoFocus
            className={classes.field}
            fullWidth
            id='taiKhoan'
            label='Username'
            margin='normal'
            name='taiKhoan'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.taiKhoan}
            variant='outlined'
          />
          <TextField
            autoComplete='matKhau'
            className={classes.field}
            fullWidth
            id='matKhau'
            label='Password'
            margin='normal'
            name='matKhau'
            onChange={(event) => handleChange(event)}
            required
            type='password'
            value={fields.matKhau}
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
  matKhau: PropTypes.string, 
  onChange: PropTypes.func,
  onSubmit: PropTypes.func, 
  taiKhoan: PropTypes.string,
};

export default LoginPage;
