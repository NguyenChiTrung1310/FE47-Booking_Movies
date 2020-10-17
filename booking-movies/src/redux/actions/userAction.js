import {LoginService} from '../../services';

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
