import React   from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Typography, Grid } from '@material-ui/core';
import { Formik, Form,   ErrorMessage } from 'formik';
import './RegisterPage.scss';
import { useStyles } from './../Register/useStyles';
import Button from './../../components/Button/Button';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  account: yup.string().required('Account must be fill out').nullable(),
  password: yup.string().required('Password must be fill out').nullable(),
  fullname: yup.string().required('Full Name must be fill out').nullable(),
  email: yup
    .string()
    .required('Email must be fill out')
    .email('Email is invalid')
    .nullable(),
  phoneNumber: yup
    .string()
    .required('Phone Number must be fill out')
    .matches(/^[0-9]+$/),
});

const RegisterPage = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    console.log(e);
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
        <Formik
          initialValues={{
            account: '',
            password: '',
            fullname: '',
            email: '',
            phoneNumber: '',
          }}
          onSubmit={handleSubmit}
          render={(formikProps) => (
            <Form
              className={classes.form}
              noValidate
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
                onChange={formikProps.handleChange}
                required
                type='text'
                variant='outlined'
              />
              <ErrorMessage name='account' />

              <TextField
                autoComplete='password' 
                className={classes.field}
                fullWidth
                id='password'
                label='Password'
                margin='normal'
                name='password'
                onChange={formikProps.handleChange}
                required
                type='password'
                variant='outlined'
              />
              <ErrorMessage name='password' />
              <TextField
                autoComplete='fullname' 
                className={classes.field}
                fullWidth
                id='fullname'
                label='Full Name'
                margin='normal'
                name='fullname'
                onChange={formikProps.handleChange}
                required
                type='text'
                variant='outlined'
              />
              <ErrorMessage name='fullname' />
              <TextField
                autoComplete='email' 
                className={classes.field}
                fullWidth
                id='email'
                label='Email'
                margin='normal'
                name='email'
                onChange={formikProps.handleChange}
                required
                type='email'
                variant='outlined'
              />
              <ErrorMessage name='email' />
              <TextField
                autoComplete='phoneNumber' 
                className={classes.field}
                fullWidth
                id='phoneNumber'
                label='Phone Number'
                margin='normal'
                name='phoneNumber'
                onChange={formikProps.handleChange}
                required
                type='text'
                variant='outlined'
              />
              <ErrorMessage name='phoneNumber' />

              <Button type='submit'>Create Account</Button>
              <Grid container>
                <Grid item>
                  <div className={classes.loginLink}>
                    <p>
                  Have an account?
                      <a
                        className={classes.link}
                        href='#login'
                      >
                    Login
                      </a>
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Form>
          )}
          validationSchema={registerSchema}
        />
      </div>
    </Container>
  );
};

RegisterPage.propTypes = {
  onChange: PropTypes.func,
};

export default RegisterPage;
