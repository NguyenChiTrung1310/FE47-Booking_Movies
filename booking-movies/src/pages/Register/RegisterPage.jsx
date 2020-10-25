/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Container, TextField, Typography, Grid, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';

import Button from './../../components/Button/Button';
import {
  handleRegisterForm, 
} from '../../utils/Validation/Validation';
import { LOGIN_PAGE, REGISTER_SUCESS } from './../../constants/constant'

import { useStyles } from './../Register/useStyles';
import './RegisterPage.scss'; 
import { registerAction } from '../../redux/actions/userAction';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
const RegisterPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const registerStatus = useSelector(state=> state.user.registerStatus); //re

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

    const {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen
    } = fields;
    //1.handle register
    const error= handleRegisterForm(fields); 

    const notify_success = () => {
      toast.success('Register success');
    };
    const notify_failed = () => {
      toast.error('Register failed');
    };

    if(error===1){
     //2.dispatch action
     dispatch(
       registerAction(
         taiKhoan.trim(),
         matKhau.trim(),
         email.trim(),
         soDt.trim(),
         maNhom.trim(),
         maLoaiNguoiDung.trim(),
         hoTen.trim(),
         notify_success,
         notify_failed,
       )
     );
    //  console.log("KO USEEFECT",registerStatus);
    //     if(registerStatus=== REGISTER_SUCESS){
    //       history.push(LOGIN_PAGE); 
    //     }
    }
  };
  //COMPONENT DIDMOUNT
  useEffect(() => {
    if(registerStatus=== REGISTER_SUCESS){
      setTimeout(()=>{
        history.push(LOGIN_PAGE); 
      },2000);
     
    }
    //console.log("CO USEEFECT",registerStatus); 
  }, [registerStatus, history])
  
  //is Loading
const isLoading=()=>{
  return(
    <LoadingCool/> 
  );
}

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
    {
      registerStatus
      ? isLoading() 
      : (
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
              <MenuItem aria-label="None" value=' 'className={classes.inputLabel}    />
              <MenuItem value='GP01'className={classes.inputLabel}>GP01</MenuItem>
              <MenuItem value='GP02'className={classes.inputLabel} >GP02</MenuItem>
              <MenuItem value='GP03'className={classes.inputLabel}>GP03</MenuItem>
              <MenuItem value='GP04'className={classes.inputLabel}>GP04</MenuItem>
              <MenuItem value='GP05'className={classes.inputLabel}>GP05</MenuItem>
              <MenuItem value='GP06'className={classes.inputLabel}>GP06</MenuItem>
             
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple" className={classes.inputLabel}>Select Type User</InputLabel>
          <Select className={classes.inputLabel} 
          name='maLoaiNguoiDung' 
          value={fields.maLoaiNguoiDung} 
          onChange={(event) => handleChange(event)} 
          
          >
            <MenuItem aria-label="None" value=' 'className={classes.inputLabel}   />
            <MenuItem value='KhachHang'className={classes.inputLabel}>Member</MenuItem> 
            <MenuItem value='QuanTri'className={classes.inputLabel}>Admin</MenuItem> 
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
      )
    }
      
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