import axios from 'axios';
import { LOGIN_API } from './api';

export function LoginService(taiKhoan, matKhau) {
  const loginData = {taiKhoan, matKhau};
  return  axios({
    method: 'POST',
    url: LOGIN_API,
    data: loginData,
  });
}