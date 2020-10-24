
import { LOGIN_SUCCESS } from '../../constants/constant';
import { loginService } from '../../services/user';
const loginSucess=(values)=>{
  const {status} =values;
  return{
    type:LOGIN_SUCCESS,
    payload:  status // 200
  }
}
const loginAction = ( taiKhoan, matKhau) => {
  return(dispatch) =>{
    loginService(taiKhoan,matKhau)
      .then(res=>{
        console.log(res);
        dispatch(loginSucess(res));
      })
      .catch(err=>{
        console.log(err);
      })
  }
}
export default loginAction;
 