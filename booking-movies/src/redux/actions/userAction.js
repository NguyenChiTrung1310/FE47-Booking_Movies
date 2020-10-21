import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../../constants/constant';
import {LoginService} from '../../services';
import { storeCredentials, storeUserToken } from '../../utils/LocalStorage/LocalStorage';

// login success
const loginSucceeded = (loginData) => {
  const {status, data} = loginData;
  return {
    type: LOGIN_SUCCESS,
    loginStatus: status, 
    payload: data
  };
}

// login failed
const loginFailed = (loginData) => {
  const {status} = loginData;
  return {
    type: LOGIN_FAILURE,
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
        const { accessToken } = res.data;
        const {data} = res;
        // dispatch action to reducer
        dispatch(loginSucceeded(res)); // res is an object of data's API
        
        // store data (localstorage)
        storeUserToken(accessToken);
        storeCredentials(JSON.stringify(data));
        
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
