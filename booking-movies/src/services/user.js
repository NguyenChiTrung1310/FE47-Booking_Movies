import axios from 'axios';
import request from '../configs/request';
import { LOGIN_API, REGISTER_API } from './api';

export async function LoginService(taiKhoan, matKhau) {
  const loginData = {taiKhoan, matKhau};

  return (
    request(
      LOGIN_API,
      'POST',
      loginData
    )
  );
  

  // return await axios({
  //   method: 'POST',
  //   url: LOGIN_API,
  //   data: loginData,
  // });
} 
export async function RegisterService(taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) {
  const registerData = {taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen};
  return await axios({
    method: 'POST',
    url: REGISTER_API,
    data: registerData,
  });
}

 