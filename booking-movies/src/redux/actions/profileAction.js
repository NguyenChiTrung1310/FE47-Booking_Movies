import { USER_PROFILE } from '../../constants/constant';
import { ProfileService } from '../../services';
import { storeProfile } from '../../utils/LocalStorage/LocalStorage';

const profile = (userData) => {
  const {data} = userData;
  return {
    type: USER_PROFILE,
    payload: data
  }
}

export const inforUserAction = (taiKhoan) => {
  return (dispatch) => {
    ProfileService(taiKhoan)
      .then(res => {
        const {data} = res;
        dispatch(profile(res));
        storeProfile(JSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
      });
  }
}


