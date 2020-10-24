import React, { useState } from 'react';
import { Container, TextField, Typography } from '@material-ui/core';
import Button from './../../components/Button/Button';

import { useStyles } from './../Register/useStyles';
import { useSelector } from 'react-redux';

const Profile = () => {
  const classes = useStyles();
  const userProfile = useSelector(state=> state.profile.initialProfile)
    
  const [fields] = useState({
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    email: '',
    soDT: '',
    maNhom: '',
    loaiNguoiDung: null,
    thongTinDatVe: []
        
  });

  const handleChange = () => {}
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
                  value={userProfile.taiKhoan}
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
                  value={userProfile.matKhau}
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
                  value={userProfile.hoTen}
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
                  value={userProfile.email}
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
                  value={userProfile.soDT}
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
                  value={userProfile.maNhom}
                  variant='outlined'
                />
              </form>
            ) : (
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
            )
        }
        <Button
          color='primary'
          type='submit'
          variant='contained'
        >
            Update
        </Button>
        {/* <Grid container>
            <Grid item>
              <div className={classes.loginLink}>
                <p>
            Have an taiKhoan?
                  <Link
                    className={classes.link}
                    to = {LOGIN_PAGE}
                  >
              Login
                  </Link>
                </p>
              </div>
            </Grid>
          </Grid> */}
      </div>
    </Container>
  )
}

export default Profile
