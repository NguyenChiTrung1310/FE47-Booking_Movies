import { LOGIN_FAILL, LOGIN_SUCCESS } from '../../constants/constant';
import {LoginService} from '../../services';

// login success
const loginSucceeded = (loginData) => {
  const {status} = loginData;
  return {
    type: LOGIN_SUCCESS,
    loginStatus: status, 
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

export const loginAction = (
  taiKhoan, 
  matKhau,
  notify_success = () => {},
  notify_failed = () => {},
) => {
  return (dispatch) => {
    LoginService(taiKhoan, matKhau)
      .then(res => {

        // dispatch action to reducer
        dispatch(loginSucceeded(res)); // res is an object of data's API
        console.log(res) 

        // Notify Success
        notify_success();
      })
      .catch((err) => {

        // dispatch action to reducer
        dispatch(loginFailed(err));
        console.log(err);

        // Notify Failed
        notify_failed();
      });
  }
}
