/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Container, TextField, Typography, Grid, InputLabel, Select, FormControl } from '@material-ui/core';

import Button from './../../components/Button/Button';
import {
  handleRegisterForm, 
} from '../../utils/Validation/Validation';
import { LOGIN_PAGE } from './../../constants/constant'

import { useStyles } from './../Register/useStyles';
import './RegisterPage.scss';
toast.configure()
const RegisterPage = () => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom:'',
    maLoaiNguoiDung:'',
    hoTen: '',
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
            autoComplete='taiKhoan'
            autoFocus
            className={classes.field}
            fullWidth
            id='taiKhoan'
            label='Account'
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
          <TextField
            autoComplete='hoTen'
            className={classes.field}
            fullWidth
            id='hoTen'
            label='Full Name'
            margin='normal'
            name='hoTen'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.hoTen}
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
            id='soDt'
            label='Phone Number'
            margin='normal'
            name='soDt'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.soDt}
            variant='outlined'
          /> 
            <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple" className={classes.inputLabel}>Select Group</InputLabel>
            <Select className={classes.inputLabel} 
            name='maNhom'
             value={fields.maNhom} 
             onChange={(event) => handleChange(event)}
              
            >
              <option aria-label="None" value='GP01'className={classes.inputLabel}    />
              <option value='GP01'className={classes.inputLabel}>GP01</option>
              <option value='GP02'className={classes.inputLabel} >GP02</option>
              <option value='GP03'className={classes.inputLabel}>GP03</option>
              <option value='GP04'className={classes.inputLabel}>GP04</option>
              <option value='GP05'className={classes.inputLabel}>GP05</option>
              <option value='GP06'className={classes.inputLabel}>GP06</option>
             
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple" className={classes.inputLabel}>Select Type User</InputLabel>
          <Select className={classes.inputLabel} 
          name='maLoaiNguoiDung' 
          value={fields.maLoaiNguoiDung} 
          onChange={(event) => handleChange(event)} 
          
          >
            <option aria-label="None" value='KhachHang'className={classes.inputLabel}   />
            <option value='KhachHang'className={classes.inputLabel}>Member</option> 
            <option value='QuanTri'className={classes.inputLabel}>Admin</option> 
          </Select>
        </FormControl>
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
            Have an Account?
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
  fields: PropTypes.shape({
    taiKhoan: PropTypes.string.isRequired,
    matKhau: PropTypes.string.isRequired,
    hoTen: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
  }),
  onChange: PropTypes.func, 
  onSubmit: PropTypes.func,
};

export default RegisterPage;