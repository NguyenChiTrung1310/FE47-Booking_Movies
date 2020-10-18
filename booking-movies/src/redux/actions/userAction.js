import { LOGIN_FAILL, LOGIN_SUCCESS } from '../../constants/constant';
import {LoginService} from '../../services';

// login success
const loginSucceeded = (loginData) => {
  const {status} = loginData;
  return {
    type: LOGIN_SUCCESS,
    loginStatus: status, //200
    // loginMessage: msg
  };
}

// login failed
const loginFailed = (loginData) => {
  const {status} = loginData;
  return {
    type: LOGIN_FAILL,
    loginStatus: status
  };
}

export const loginAction = (taiKhoan, matKhau) => {
  return (dispatch) => {
    LoginService(taiKhoan, matKhau)
      .then(res => {
        // dispatch(createAction(LOGIN_SUCCESS, res.data));
        // localStorage.setItem('credentials', JSON.stringify(res.data));
        console.log(res)
      })
      .catch((err) => console.log(err));
  }
}
