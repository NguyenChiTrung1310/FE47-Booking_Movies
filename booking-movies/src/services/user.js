import axios from 'axios';
import { LOGIN_API, REGISTER_API } from './api';

export function LoginService(taiKhoan, matKhau) {
  const loginData = {taiKhoan, matKhau};
  return  axios({
    method: 'POST',
    url: LOGIN_API,
    data: loginData,
  });
} 
export function RegisterService(taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) {
  const registerData = {taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen};
  return  axios({
    method: 'POST',
    url: REGISTER_API,
    data: registerData,
  });
}

 