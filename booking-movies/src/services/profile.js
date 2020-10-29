import axios from 'axios';
import { USER_PROFILE_API } from './api';

export async function ProfileService(taiKhoan) {
  return await axios({
    method: 'POST',
    url: USER_PROFILE_API,
    data: taiKhoan,
  });
}