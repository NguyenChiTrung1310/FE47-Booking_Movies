import axios from 'axios';
import {LOGIN_API} from './api';
 

export const loginService = (taiKhoan,matKhau) => {
  const loginData={taiKhoan, matKhau}
  return axios({
    url:LOGIN_API,
    method:'POST',
    data:loginData,
  })
  
}

 
