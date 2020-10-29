import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { Container, TextField, Typography } from '@material-ui/core';
import Button from '../../components/Button/Button';

import { useStyles } from '../Register/useStyles';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const classes = useStyles();
  const userProfile = useSelector(state=> state.profile.initialProfile)
  const userCredentials = useSelector(state => state.user.credentials)


  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    email: '',
    soDT: '',
    maNhom: '',
    loaiNguoiDung: '',
    thongTinDatVe: []
        
  });

  useEffect(() => {
    if(userCredentials){
      setFields({
        taiKhoan: userProfile.taiKhoan,
        matKhau: userProfile.matKhau,
        hoTen: userProfile.hoTen,
        email: userProfile.email,
        soDT: userProfile.soDT,
        maNhom: userProfile.maNhom,
        loaiNguoiDung: userProfile.maLoaiNguoiDung,
        thongTinDatVe: []
      });
    }
  }, [setFields, userProfile, userCredentials])

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  const handleUpdate = () => {}
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
          User Profile
        </Typography>
        {
          userProfile
            ? (
              <form
                className={classes.form}
                noValidate
                onSubmit={handleUpdate}
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
                  label='Fullname'
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
                  id='soDT'
                  label='Phone'
                  margin='normal'
                  name='soDT'
                  onChange={(event) => handleChange(event)}
                  required
                  type='text'
                  value={fields.soDT}
                  variant='outlined'
                />
                <TextField
                  autoComplete='maNhom'
                  className={classes.field}
                  fullWidth
                  id='maNhom'
                  label='Group code'
                  margin='normal'
                  name='maNhom'
                  onChange={(event) => handleChange(event)}
                  required
                  type='text'
                  value={fields.maNhom}
                  variant='outlined'
                />
              </form>
            ) : null
        }
        <Button
          color='primary'
          type='submit'
          variant='contained'
        >
            Update
        </Button>
      </div>
    </Container>
  )
}

ProfilePage.propTypes = {
  email: PropTypes.string,
  fields: PropTypes.object,
  handleChange: PropTypes.func,
  handleUpdate: PropTypes.func,
  hoTen: PropTypes.string,
  loaiNguoiDung: PropTypes.string,
  maNhom: PropTypes.string, 
  matKhau: PropTypes.string, 
  onChange: PropTypes.func,
  onSubmit: PropTypes.func, 
  soDt: PropTypes.number,
  taiKhoan: PropTypes.string,
  thongTinDatVe: PropTypes.array,
  userProfile: PropTypes.object,
};

export default ProfilePage
