import axios from 'axios';
import { USER_PROFILE_API } from './api';

export function ProfileService(taiKhoan) {
//   const loginData = {taiKhoan};
  return  axios({
    method: 'POST',
    url: USER_PROFILE_API,
    data: taiKhoan,
  });
}